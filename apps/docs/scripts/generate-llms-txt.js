const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

const BASE_URL = "https://ui.tripled.work";

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

    // Helper function to group by category and subcategory
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

    // Sort categories
    function sortCategories(grouped) {
      const sorted = {};
      Object.keys(grouped)
        .sort()
        .forEach((category) => {
          sorted[category] = grouped[category];
        });
      return sorted;
    }

    // Generate content
    let content = "# UI TripleD\n\n";
    content +=
      "> Production-ready UI components, blocks, and pages built on top of shadcn/ui and Framer Motion.\n\n";

    // Add Last Updated timestamp
    const lastUpdated = new Date().toISOString();
    content += `**Last Updated:** ${lastUpdated}\n\n`;

    content += "## Table of Contents\n\n";

    // Generate table of contents
    const tocItems = [];
    if (itemsByType.component.length > 0) {
      tocItems.push(`- Components (${itemsByType.component.length} items)`);
    }
    if (itemsByType.block.length > 0) {
      tocItems.push(`- Blocks (${itemsByType.block.length} items)`);
    }
    if (itemsByType.page.length > 0) {
      tocItems.push(`- Pages (${itemsByType.page.length} items)`);
    }
    if (itemsByType.ui.length > 0) {
      tocItems.push(`- UI Elements (${itemsByType.ui.length} items)`);
    }
    if (tocItems.length > 0) {
      content += tocItems.join("\n") + "\n\n";
    }

    // Components section
    if (itemsByType.component.length > 0) {
      content += "### Components\n\n";
      const groupedComponents = sortCategories(
        groupByCategory(itemsByType.component)
      );

      Object.keys(groupedComponents).forEach((category) => {
        const categoryLabel = getCategoryLabel(category);
        const subcategories = groupedComponents[category];
        const hasMultipleSubcategories =
          Object.keys(subcategories).length > 1 ||
          (Object.keys(subcategories).length === 1 &&
            Object.keys(subcategories)[0] !== "default");

        if (hasMultipleSubcategories) {
          content += `#### ${categoryLabel}\n\n`;
          Object.keys(subcategories)
            .sort()
            .forEach((subcategoryKey) => {
              const subcategoryLabel = getSubcategoryLabel(
                subcategoryKey === "default" ? null : subcategoryKey
              );
              if (subcategoryLabel) {
                content += `##### ${subcategoryLabel}\n\n`;
              }
              subcategories[subcategoryKey].forEach((item) => {
                const title = item.title || item.name;
                const description = item.description || "";
                const url = `${BASE_URL}/components/${item.name}`;
                content += `- [${title}](${url}): ${description}\n`;
              });
              content += "\n";
            });
        } else {
          // Single subcategory or no subcategory - list directly
          const items = subcategories[Object.keys(subcategories)[0]];
          items.forEach((item) => {
            const title = item.title || item.name;
            const description = item.description || "";
            const url = `${BASE_URL}/components/${item.name}`;
            content += `- [${title}](${url}): ${description}\n`;
          });
          content += "\n";
        }
      });
    }

    // Blocks section
    if (itemsByType.block.length > 0) {
      content += "### Blocks\n\n";
      const groupedBlocks = sortCategories(groupByCategory(itemsByType.block));

      Object.keys(groupedBlocks).forEach((category) => {
        const categoryLabel = getCategoryLabel(category);
        const subcategories = groupedBlocks[category];
        const hasMultipleSubcategories =
          Object.keys(subcategories).length > 1 ||
          (Object.keys(subcategories).length === 1 &&
            Object.keys(subcategories)[0] !== "default");

        if (hasMultipleSubcategories) {
          content += `#### ${categoryLabel}\n\n`;
          Object.keys(subcategories)
            .sort()
            .forEach((subcategoryKey) => {
              const subcategoryLabel = getSubcategoryLabel(
                subcategoryKey === "default" ? null : subcategoryKey
              );
              if (subcategoryLabel) {
                content += `##### ${subcategoryLabel}\n\n`;
              }
              subcategories[subcategoryKey].forEach((block) => {
                const title = block.title || block.name;
                const description = block.description || "";
                const url = `${BASE_URL}/components/${block.name}`;
                content += `- [${title}](${url}): ${description}\n`;
              });
              content += "\n";
            });
        } else {
          const items = subcategories[Object.keys(subcategories)[0]];
          items.forEach((block) => {
            const title = block.title || block.name;
            const description = block.description || "";
            const url = `${BASE_URL}/components/${block.name}`;
            content += `- [${title}](${url}): ${description}\n`;
          });
          content += "\n";
        }
      });
    }

    // Pages section
    if (itemsByType.page.length > 0) {
      content += "### Pages\n\n";
      const groupedPages = sortCategories(groupByCategory(itemsByType.page));

      Object.keys(groupedPages).forEach((category) => {
        const categoryLabel = getCategoryLabel(category);
        const subcategories = groupedPages[category];
        const hasMultipleSubcategories =
          Object.keys(subcategories).length > 1 ||
          (Object.keys(subcategories).length === 1 &&
            Object.keys(subcategories)[0] !== "default");

        if (hasMultipleSubcategories) {
          content += `#### ${categoryLabel}\n\n`;
          Object.keys(subcategories)
            .sort()
            .forEach((subcategoryKey) => {
              const subcategoryLabel = getSubcategoryLabel(
                subcategoryKey === "default" ? null : subcategoryKey
              );
              if (subcategoryLabel) {
                content += `##### ${subcategoryLabel}\n\n`;
              }
              subcategories[subcategoryKey].forEach((page) => {
                const title = page.title || page.name;
                const description = page.description || "";
                const url = `${BASE_URL}/components/${page.name}`;
                content += `- [${title}](${url}): ${description}\n`;
              });
              content += "\n";
            });
        } else {
          const items = subcategories[Object.keys(subcategories)[0]];
          items.forEach((page) => {
            const title = page.title || page.name;
            const description = page.description || "";
            const url = `${BASE_URL}/components/${page.name}`;
            content += `- [${title}](${url}): ${description}\n`;
          });
          content += "\n";
        }
      });
    }

    // UI section (micro components)
    if (itemsByType.ui.length > 0) {
      content += "### UI Elements\n\n";
      const groupedUI = sortCategories(groupByCategory(itemsByType.ui));

      Object.keys(groupedUI).forEach((category) => {
        const categoryLabel = getCategoryLabel(category);
        const subcategories = groupedUI[category];
        const hasMultipleSubcategories =
          Object.keys(subcategories).length > 1 ||
          (Object.keys(subcategories).length === 1 &&
            Object.keys(subcategories)[0] !== "default");

        if (hasMultipleSubcategories) {
          content += `#### ${categoryLabel}\n\n`;
          Object.keys(subcategories)
            .sort()
            .forEach((subcategoryKey) => {
              const subcategoryLabel = getSubcategoryLabel(
                subcategoryKey === "default" ? null : subcategoryKey
              );
              if (subcategoryLabel) {
                content += `##### ${subcategoryLabel}\n\n`;
              }
              subcategories[subcategoryKey].forEach((item) => {
                const title = item.title || item.name;
                const description = item.description || "";
                const url = `${BASE_URL}/components/${item.name}`;
                content += `- [${title}](${url}): ${description}\n`;
              });
              content += "\n";
            });
        } else {
          const items = subcategories[Object.keys(subcategories)[0]];
          items.forEach((item) => {
            const title = item.title || item.name;
            const description = item.description || "";
            const url = `${BASE_URL}/components/${item.name}`;
            content += `- [${title}](${url}): ${description}\n`;
          });
          content += "\n";
        }
      });
    }

    const outputPath = join(process.cwd(), "public", "llms.txt");
    writeFileSync(outputPath, content, "utf-8");
    console.log(`✅ Generated llms.txt at ${outputPath}`);
    console.log(
      `   - Components: ${itemsByType.component.length}\n   - Blocks: ${itemsByType.block.length}\n   - Pages: ${itemsByType.page.length}\n   - UI Elements: ${itemsByType.ui.length}`
    );
  } catch (error) {
    console.error("Error generating llms.txt:", error);
    process.exit(1);
  }
}

generateLlmsTxt();
