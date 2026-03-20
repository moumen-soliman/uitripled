const { readFileSync, writeFileSync, existsSync, readdirSync } = require("fs");
const { join } = require("path");

const BASE_URL = "https://ui.tripled.work";
const PUBLIC_MD_DIR = join(__dirname, "../public/md");

// ─── Header & project context (llmstxt.org spec) ────────────────────────────

function buildHeader() {
  const lastUpdated = new Date().toISOString();
  return `# UI TripleD

> Production-ready UI components, blocks, and full pages available in shadcn/ui and Base UI, powered by Framer Motion. Copy-paste components — not an installable npm package.

**Last Updated:** ${lastUpdated}

- Components come in **shadcn/ui**, **Base UI**, and **Carbon** variants (the suffix in the name indicates the style system, e.g. \`-shadcnui\`, \`-baseui\`, \`-carbon\`)
- **Copy-paste model** — browse the docs, preview a component, then copy its code directly into your project
- Built with **React 19**, **Next.js 16**, **TypeScript**, **Tailwind CSS 4**, and **Framer Motion**
- Also offers a **Landing Builder** (drag & drop shadcn/ui blocks into landing pages), **Background Builder** (shader & Aurora backgrounds), and **Grid Generator** (Tailwind CSS grids)

`;
}

function buildDocsSection() {
  return `## Docs

- [Component Gallery](${BASE_URL}/components): Browse all components, blocks, and pages with live previews
- [GitHub Repository](https://github.com/moumen-soliman/uitripled): Source code, issues, and discussions
- [Contributing Guide](https://github.com/moumen-soliman/uitripled/blob/main/CONTRIBUTING.md): How to contribute to UI TripleD

`;
}

function buildOptionalSection() {
  return `## Optional

- [Framer Motion Docs](https://www.framer.com/motion/): Animation library used by all components
- [shadcn/ui Docs](https://ui.shadcn.com/docs): Component primitives that shadcn variants build on
- [Base UI Docs](https://base-ui.com/): Headless component primitives that Base UI variants build on
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs): Utility-first CSS framework used for styling
`;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getTypeLabel(type) {
  const typeMap = {
    "registry:component": "Component",
    "registry:block": "Block",
    "registry:page": "Page",
    "registry:ui": "UI",
  };
  return typeMap[type] || type.replace("registry:", "");
}

function getCategoryLabel(category) {
  if (!category) return "Uncategorized";
  if (category.length <= 3) {
    return category.toUpperCase();
  }
  return category.charAt(0).toUpperCase() + category.slice(1);
}

function getSubcategoryLabel(subcategory) {
  if (!subcategory) return null;
  if (subcategory.length <= 3) {
    return subcategory.toUpperCase();
  }
  return subcategory.charAt(0).toUpperCase() + subcategory.slice(1);
}

function groupByCategory(items) {
  const grouped = {};
  items.forEach((item) => {
    const category = item.category || "uncategorized";
    const subcategory = item.subcategory || null;

    if (!grouped[category]) {
      grouped[category] = {};
    }

    const subcategoryKey = subcategory || "default";
    if (!grouped[category][subcategoryKey]) {
      grouped[category][subcategoryKey] = [];
    }

    grouped[category][subcategoryKey].push(item);
  });

  // Sort items within each subcategory
  Object.keys(grouped).forEach((category) => {
    Object.keys(grouped[category]).forEach((subcategoryKey) => {
      grouped[category][subcategoryKey].sort((a, b) => {
        const titleA = a.title || a.name;
        const titleB = b.title || b.name;
        return titleA.localeCompare(titleB);
      });
    });
  });

  return grouped;
}

function sortCategories(grouped) {
  const sorted = {};
  Object.keys(grouped)
    .sort()
    .forEach((category) => {
      sorted[category] = grouped[category];
    });
  return sorted;
}

// ─── Section renderers ──────────────────────────────────────────────────────

/**
 * Render a list of items grouped by category/subcategory.
 * @param {string}  heading      Markdown heading, e.g. "### Components"
 * @param {Array}   items        Registry items for this type
 * @param {boolean} linkToMd     If true, link to /md/{name}.md; otherwise /components/{name}
 */
function renderSection(heading, items, linkToMd = true) {
  if (items.length === 0) return "";

  let content = `${heading}\n\n`;
  const grouped = sortCategories(groupByCategory(items));

  Object.keys(grouped).forEach((category) => {
    const categoryLabel = getCategoryLabel(category);
    const subcategories = grouped[category];
    const hasMultipleSubs =
      Object.keys(subcategories).length > 1 ||
      (Object.keys(subcategories).length === 1 &&
        Object.keys(subcategories)[0] !== "default");

    if (hasMultipleSubs) {
      content += `${"#".repeat(heading.match(/^#+/)[0].length + 1)} ${categoryLabel}\n\n`;

      Object.keys(subcategories)
        .sort()
        .forEach((subKey) => {
          const subLabel = getSubcategoryLabel(
            subKey === "default" ? null : subKey
          );
          if (subLabel) {
            content += `${"#".repeat(heading.match(/^#+/)[0].length + 2)} ${subLabel}\n\n`;
          }
          subcategories[subKey].forEach((item) => {
            content += formatItem(item, linkToMd);
          });
          content += "\n";
        });
    } else {
      const items = subcategories[Object.keys(subcategories)[0]];
      items.forEach((item) => {
        content += formatItem(item, linkToMd);
      });
      content += "\n";
    }
  });

  return content;
}

function formatItem(item, linkToMd) {
  const title = item.title || item.name;
  const description = item.description || "";
  const url = linkToMd
    ? `${BASE_URL}/md/${item.name}.md`
    : `${BASE_URL}/components/${item.name}`;
  return `- [${title}](${url}): ${description}\n`;
}

// ─── llms-full.txt: inline all component markdown ───────────────────────────

function buildFullContent(registry, itemsByType) {
  let content = buildHeader();
  content += buildDocsSection();

  // For each type, inline the full markdown from public/md/{name}.md
  const sections = [
    { heading: "## Components", items: itemsByType.component },
    { heading: "## Blocks", items: itemsByType.block },
    { heading: "## Pages", items: itemsByType.page },
    { heading: "## UI Elements", items: itemsByType.ui },
  ];

  for (const { heading, items } of sections) {
    if (items.length === 0) continue;

    content += `${heading}\n\n`;

    // Sort all items alphabetically
    const sorted = [...items].sort((a, b) => {
      const titleA = a.title || a.name;
      const titleB = b.title || b.name;
      return titleA.localeCompare(titleB);
    });

    for (const item of sorted) {
      const title = item.title || item.name;
      const mdPath = join(PUBLIC_MD_DIR, `${item.name}.md`);

      content += `### ${title}\n\n`;
      content += `**Page:** [${BASE_URL}/components/${item.name}](${BASE_URL}/components/${item.name})\n\n`;

      if (existsSync(mdPath)) {
        let mdContent = readFileSync(mdPath, "utf-8");
        // Strip frontmatter
        mdContent = mdContent.replace(/^---[\s\S]*?---\s*/, "");
        content += mdContent.trim() + "\n\n";
      } else {
        const description = item.description || "";
        content += `${description}\n\n`;
      }

      content += "---\n\n";
    }
  }

  content += buildOptionalSection();
  return content;
}

// ─── Main ────────────────────────────────────────────────────────────────────

function generateLlmsTxt() {
  try {
    const registryPath = join(process.cwd(), "registry.json");
    const registry = JSON.parse(readFileSync(registryPath, "utf-8"));

    // Group items by type
    const itemsByType = {
      component: [],
      block: [],
      page: [],
      ui: [],
    };

    registry.items.forEach((item) => {
      if (item.type === "registry:component") {
        itemsByType.component.push(item);
      } else if (item.type === "registry:block") {
        itemsByType.block.push(item);
      } else if (item.type === "registry:page") {
        itemsByType.page.push(item);
      } else if (item.type === "registry:ui") {
        itemsByType.ui.push(item);
      }
    });

    // ── llms.txt (concise, spec-compliant) ──────────────────────────────

    let content = buildHeader();
    content += buildDocsSection();

    // Table of Contents
    content += "## Table of Contents\n\n";
    if (itemsByType.component.length > 0) {
      content += `- Components (${itemsByType.component.length} items)\n`;
    }
    if (itemsByType.block.length > 0) {
      content += `- Blocks (${itemsByType.block.length} items)\n`;
    }
    if (itemsByType.page.length > 0) {
      content += `- Pages (${itemsByType.page.length} items)\n`;
    }
    if (itemsByType.ui.length > 0) {
      content += `- UI Elements (${itemsByType.ui.length} items)\n`;
    }
    content += "\n";

    // Render each section with links to .md files
    content += renderSection("## Components", itemsByType.component, true);
    content += renderSection("## Blocks", itemsByType.block, true);
    content += renderSection("## Pages", itemsByType.page, true);
    content += renderSection("## UI Elements", itemsByType.ui, true);

    content += buildOptionalSection();

    const outputPath = join(process.cwd(), "public", "llms.txt");
    writeFileSync(outputPath, content, "utf-8");
    console.log(`✅ Generated llms.txt at ${outputPath}`);
    console.log(
      `   - Components: ${itemsByType.component.length}\n   - Blocks: ${itemsByType.block.length}\n   - Pages: ${itemsByType.page.length}\n   - UI Elements: ${itemsByType.ui.length}`
    );

    // ── llms-full.txt (expanded, all component markdown inlined) ────────

    const fullContent = buildFullContent(registry, itemsByType);
    const fullOutputPath = join(process.cwd(), "public", "llms-full.txt");
    writeFileSync(fullOutputPath, fullContent, "utf-8");
    console.log(`✅ Generated llms-full.txt at ${fullOutputPath}`);
  } catch (error) {
    console.error("Error generating llms.txt:", error);
    process.exit(1);
  }
}

generateLlmsTxt();
