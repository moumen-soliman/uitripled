const fs = require("fs");
const path = require("path");

const REGISTRY_DIR = path.join(__dirname, "../lib/registry");
const REGISTRY_JSON_PATH = path.join(__dirname, "../registry.json");
const COMPONENTS_DIR = path.join(__dirname, "../components");

// Category to registry type mapping
const CATEGORY_TO_TYPE = {
  microinteractions: "registry:ui",
  components: "registry:component",
  page: "registry:page",
  data: "registry:ui",
  decorative: "registry:ui",
  blocks: "registry:block",
  "motion-core": "registry:lib",
  cards: "registry:component",
  resumes: "registry:component",
  forms: "registry:component",
  native: "registry:component",
};

// Category to registry category mapping
const CATEGORY_MAPPING = {
  microinteractions: "micro",
  components: "components",
  page: "page",
  data: "data",
  decorative: "decorative",
  blocks: "sections",
  "motion-core": "motion-core",
  cards: "cards",
  resumes: "resumes",
  forms: "forms",
  native: "native",
};

// Common dependencies based on imports
const DEFAULT_DEPENDENCIES = {
  framer: ["framer-motion"],
  lucide: ["lucide-react"],
  react: ["react"],
};

/**
 * Extract component imports and registry entries from registry files
 */
function parseComponentsRegistry() {
  if (!fs.existsSync(REGISTRY_DIR)) {
    throw new Error(`Registry directory not found: ${REGISTRY_DIR}`);
  }

  const files = fs
    .readdirSync(REGISTRY_DIR)
    .filter((file) => file.endsWith(".tsx") && file !== "index.tsx");

  let allEntries = [];

  for (const file of files) {
    const filePath = path.join(REGISTRY_DIR, file);
    const content = fs.readFileSync(filePath, "utf-8");
    const entries = parseRegistryFile(content, file);
    allEntries = [...allEntries, ...entries];
  }

  return allEntries;
}

function parseRegistryFile(content, fileName) {
  // Extract component imports - handle both single and multiple imports
  const componentImports = {};
  const importRegex =
    /import\s+{\s*([^}]+)\s*}\s+from\s+["']@\/components\/([^"']+)["']/g;
  let match;

  while ((match = importRegex.exec(content)) !== null) {
    const imports = match[1].split(",").map((i) => i.trim());
    const importPath = match[2];

    imports.forEach((imp) => {
      // Extract component name (remove type annotations if any)
      const componentName = imp.split(":")[0].trim();
      componentImports[componentName] = importPath;
    });
  }

  // Find array definitions (e.g., export const nativeComponents = [...])
  // We look for any array export
  const exportArrayRegex = /export const \w+\s*:\s*Component\[\]\s*=\s*\[/g;

  const entries = [];

  let arrayMatch;
  while ((arrayMatch = exportArrayRegex.exec(content)) !== null) {
    const startIndex = arrayMatch.index + arrayMatch[0].length;

    // Find the end of this array
    let depth = 1;
    let endIndex = startIndex;

    for (let i = startIndex; i < content.length; i++) {
      if (content[i] === "[") depth++;
      if (content[i] === "]") depth--;
      if (depth === 0) {
        endIndex = i;
        break;
      }
    }

    const registryContent = content.substring(startIndex, endIndex);

    // Parse entries
    const entryPattern = /\{\s*id:\s*"([^"]+)"/g;
    const entryIndices = [];

    while ((match = entryPattern.exec(registryContent)) !== null) {
      entryIndices.push(match.index);
    }

    for (let i = 0; i < entryIndices.length; i++) {
      const start = entryIndices[i];
      const end =
        i < entryIndices.length - 1
          ? entryIndices[i + 1]
          : registryContent.length;
      const entryText = registryContent.substring(start, end);

      // Extract id
      const idMatch = entryText.match(/id:\s*"([^"]+)"/);
      if (!idMatch) continue;

      const id = idMatch[1];

      // Extract name (title)
      const nameMatch = entryText.match(/name:\s*"([^"]+)"/);
      const name = nameMatch ? nameMatch[1] : null;

      // Extract description
      const descriptionMatch = entryText.match(
        /description:\s*"((?:[^"\\]|\\.|[\s\S])*?)"/
      );
      const description = descriptionMatch
        ? descriptionMatch[1].replace(/\\"/g, '"').replace(/\\n/g, "\n").trim()
        : null;

      // Extract category
      const categoryMatch = entryText.match(/category:\s*"([^"]+)"/);
      if (!categoryMatch) continue;

      const category = categoryMatch[1];

      // Extract availableIn (UI library variants)
      const availableInMatch = entryText.match(/availableIn:\s*\[(.*?)\]/s);
      let availableIn = null;
      if (availableInMatch) {
        const libs = availableInMatch[1].match(/"([^"]+)"/g);
        if (libs) {
          availableIn = libs.map((s) => s.replace(/"/g, ""));
        }
      }

      // Extract codePath (explicit path override)
      const codePathMatch = entryText.match(/codePath:\s*["']@\/([^"']+)["']/);
      let componentPath = null;
      let componentName = null;

      if (codePathMatch) {
        componentPath = codePathMatch[1];
        // Normalize path: Remove generic 'components/' prefix and extension as convertToRegistryPath adds them
        if (componentPath.startsWith("components/")) {
          componentPath = componentPath.replace(/^components\//, "");
        }
        if (componentPath.endsWith(".tsx")) {
          componentPath = componentPath.replace(/\.tsx$/, "");
        }
        // Determine componentName from path or generic
        componentName = path.basename(componentPath, ".tsx");
      } else {
        // Extract component name from component property
        const componentMatch = entryText.match(/component:\s*(\w+)/);
        if (componentMatch) {
          componentName = componentMatch[1];
          componentPath = componentImports[componentName];
        }
      }

      if (componentPath) {
        entries.push({
          id,
          name,
          description,
          category,
          componentName,
          componentPath,
          availableIn,
        });
      } else {
        // warning only if we expected to find it
        if (name) {
          // primitive check if it's a valid entry
          console.warn(
            `⚠️  Could not find import path or codePath for component: ${id} in ${fileName}`
          );
        }
      }
    }
  }

  return entries;
}

/**
 * Convert component path to registry path format
 * Example: page/about/about-us-page -> components/page/about/about-us-page.tsx
 * Preserves the full path structure from the component directory
 */
function convertToRegistryPath(componentPath) {
  // componentPath is already without @/components/ prefix (from import parsing)
  // Just add the components/ prefix and .tsx extension
  return `components/${componentPath}.tsx`;
}

/**
 * Convert component path to BaseUI variant path
 * Handles the transformation from shadcnui path to baseui path
 * Example: sections/shadcnui/hero-section -> sections/baseui/hero-section-baseui
 */
function convertToBaseuiPath(componentPath, componentId) {
  // Replace shadcnui with baseui in the path
  let baseuiPath = componentPath.replace(/\/shadcnui\//g, "/baseui/");

  // Get the filename without extension
  const pathParts = baseuiPath.split("/");
  const filename = pathParts[pathParts.length - 1];

  // Add -baseui suffix if not already present
  if (!filename.endsWith("-baseui")) {
    pathParts[pathParts.length - 1] = filename + "-baseui";
    baseuiPath = pathParts.join("/");
  }

  return baseuiPath;
}

/**
 * Check if a file exists for a given registry path
 */
function checkFileExists(registryPath) {
  const fullPath = path.join(COMPONENTS_DIR, "..", registryPath);
  return fs.existsSync(fullPath);
}

/**
 * Get the target installation path for components
 * All components install to: components/uitripled/component-name.tsx
 */
function getTargetPath(componentId, uiLibrary = null) {
  if (uiLibrary) {
    // Only append suffix if it's not already in the ID
    const suffix = `-${uiLibrary}`;
    const cleanId = componentId.endsWith(suffix)
      ? componentId.slice(0, -suffix.length)
      : componentId;

    return `components/uitripled/${cleanId}-${uiLibrary}.tsx`;
  }
  return `components/uitripled/${componentId}.tsx`;
}

/**
 * Determine registry dependencies based on component path and category
 */
function getRegistryDependencies(componentPath, category, uiLibrary = null) {
  const deps = [];

  // Common shadcn components that might be used
  const shadcnComponents = [
    "button",
    "card",
    "badge",
    "input",
    "textarea",
    "label",
    "checkbox",
    "radio",
    "select",
    "tabs",
    "dialog",
    "dropdown-menu",
    "avatar",
    "scroll-area",
    "separator",
    "switch",
  ];

  // Only add shadcn deps for shadcnui components or pure components
  if (uiLibrary === "shadcnui" || uiLibrary === null) {
    // Check if path suggests use of shadcn components
    // This is a heuristic - you might need to adjust based on actual usage
    if (category === "components" || category === "blocks") {
      // Most components use button and card
      if (!componentPath.includes("micro/buttons")) {
        deps.push("button");
      }
      if (componentPath.includes("cards") || componentPath.includes("card")) {
        deps.push("card");
      }
    }
  }

  // BaseUI components don't use shadcn dependencies
  if (uiLibrary === "baseui") {
    // Return minimal deps for baseui
    return ["button"]; // Base UI still might need some basic components
  }

  return deps;
}

/**
 * Determine dependencies based on imports in the file
 */
function getDependencies(componentPath, uiLibrary = null) {
  const deps = ["framer-motion"]; // Almost all components use framer-motion

  // Check if likely to use lucide-react (mainly for shadcnui)
  if (uiLibrary !== "baseui") {
    if (
      componentPath.includes("icons") ||
      componentPath.includes("navigation") ||
      componentPath.includes("tooltips")
    ) {
      deps.push("lucide-react");
    }
  }

  // React is always needed
  deps.push("react");

  return [...new Set(deps)]; // Remove duplicates
}

/**
 * Determine subcategory based on component path
 */
function getSubcategory(componentPath, category) {
  if (category === "micro") {
    if (componentPath.includes("buttons")) return "buttons";
    if (componentPath.includes("toggles")) return "toggles";
    if (componentPath.includes("icons")) return "icons";
    if (componentPath.includes("badges")) return "badges";
    if (componentPath.includes("links")) return "links";
  }

  if (category === "components") {
    if (componentPath.includes("cards")) return "cards";
    if (componentPath.includes("modal") || componentPath.includes("dialog"))
      return "modal";
    if (componentPath.includes("dropdown")) return "dropdown";
    if (componentPath.includes("inputs") || componentPath.includes("input"))
      return "inputs";
    if (componentPath.includes("tabs")) return "tabs";
    if (componentPath.includes("lists") || componentPath.includes("list"))
      return "lists";
    if (componentPath.includes("chat")) return "chat";
    if (componentPath.includes("notifications")) return "notifications";
    if (componentPath.includes("forms")) return "forms";
  }

  if (category === "page") {
    if (componentPath.includes("hero")) return "hero";
    if (componentPath.includes("about")) return "about";
    if (componentPath.includes("notifications")) return "notifications";
  }

  if (category === "data") {
    if (componentPath.includes("progress")) return "progress";
    if (componentPath.includes("charts") || componentPath.includes("chart"))
      return "charts";
  }

  if (category === "decorative") {
    if (componentPath.includes("text")) return "text";
    if (componentPath.includes("background")) return "background";
  }

  return null;
}

/**
 * Create registry entry from component data
 * @param {Object} componentData - The component data
 * @param {string|null} uiLibrary - The UI library variant (shadcnui, baseui, or null for pure)
 */
function createRegistryEntry(componentData, uiLibrary = null) {
  const { id, name, description, category, componentPath } = componentData;
  const registryCategory = CATEGORY_MAPPING[category] || category;
  const registryType = CATEGORY_TO_TYPE[category] || "registry:component";

  // Determine entry name based on UI library
  let entryName = id;
  let entryTitle = name;
  let entryDescription = description;
  let entryPath = componentPath;

  if (uiLibrary === "shadcnui") {
    // Only append suffix if it's not already there
    entryName = id.endsWith("-shadcnui") ? id : `${id}-shadcnui`;
    entryTitle = name;
    entryDescription = description;
    // Keep original shadcnui path
  } else if (uiLibrary === "baseui") {
    // Only append suffix if it's not already there
    entryName = id.endsWith("-baseui") ? id : `${id}-baseui`;
    entryTitle = name;
    entryDescription = description ? `${description} (Base UI)` : description;
    // Convert to baseui path
    entryPath = convertToBaseuiPath(componentPath, id);
  }

  const entry = {
    name: entryName,
    type: registryType,
  };

  // Add title and description before registryDependencies
  if (entryTitle) {
    entry.title = entryTitle;
  }
  if (entryDescription) {
    entry.description = entryDescription;
  }

  // Add the rest of the fields
  entry.registryDependencies = getRegistryDependencies(entryPath, category, uiLibrary);
  entry.dependencies = getDependencies(entryPath, uiLibrary);

  const registryPath = convertToRegistryPath(entryPath);

  entry.files = [
    {
      path: registryPath,
      type: registryType,
      target: getTargetPath(id, uiLibrary),
    },
  ];
  entry.category = registryCategory;
  entry.subcategory = getSubcategory(entryPath, registryCategory);

  return entry;
}

/**
 * Generate all variant entries for a component based on availableIn
 */
function generateVariantEntries(componentData) {
  const entries = [];
  const { availableIn } = componentData;

  if (!availableIn || availableIn.length === 0) {
    // Pure component - no suffix, single entry
    entries.push(createRegistryEntry(componentData, null));
  } else {
    // Generate entry for each UI library variant
    for (const lib of availableIn) {
      const entry = createRegistryEntry(componentData, lib);

      // Verify the file exists before adding
      const filePath = entry.files[0].path;
      if (checkFileExists(filePath)) {
        entries.push(entry);
      } else {
        console.warn(`⚠️  File not found for ${entry.name}: ${filePath}`);
        // Still add the entry but mark it
        entries.push(entry);
      }
    }
  }

  return entries;
}

/**
 * Update registry.json with components from components-registry.tsx
 */
function syncRegistry() {
  try {
    console.log("🔄 Syncing registry.json with components-registry.tsx...");

    // Parse components registry
    const components = parseComponentsRegistry();
    console.log(`📦 Found ${components.length} components in registry`);

    // Read existing registry.json
    const registry = JSON.parse(fs.readFileSync(REGISTRY_JSON_PATH, "utf-8"));
    const existingItems = registry.items || [];
    const existingItemsMap = new Map(
      existingItems.map((item) => [item.name, item])
    );

    // Track all generated names to remove stale entries
    const generatedNames = new Set();

    // Create/update entries
    let added = 0;
    let updated = 0;
    let removed = 0;

    for (const component of components) {
      // Generate all variant entries for this component
      const variantEntries = generateVariantEntries(component);

      for (const registryEntry of variantEntries) {
        generatedNames.add(registryEntry.name);
        const existing = existingItemsMap.get(registryEntry.name);

        if (existing) {
          // Update existing entry - rebuild in correct order
          const updatedEntry = {
            name: existing.name,
            type: registryEntry.type,
          };

          // Add title and description before registryDependencies
          if (registryEntry.title || existing.title) {
            updatedEntry.title = registryEntry.title || existing.title;
          }
          if (registryEntry.description || existing.description) {
            updatedEntry.description =
              registryEntry.description || existing.description;
          }

          // Add the rest of the fields
          updatedEntry.registryDependencies =
            existing.registryDependencies?.length > 0
              ? existing.registryDependencies
              : registryEntry.registryDependencies;
          updatedEntry.dependencies =
            existing.dependencies?.length > 0
              ? existing.dependencies
              : registryEntry.dependencies;
          updatedEntry.files = registryEntry.files; // Always update path
          updatedEntry.category = registryEntry.category;
          updatedEntry.subcategory = registryEntry.subcategory;

          existingItemsMap.set(registryEntry.name, updatedEntry);
          updated++;
        } else {
          // Add new entry
          existingItemsMap.set(registryEntry.name, registryEntry);
          added++;
        }
      }
    }

    // Remove stale entries that were not generated in this run
    for (const name of existingItemsMap.keys()) {
      if (!generatedNames.has(name)) {
        existingItemsMap.delete(name);
        removed++;
        console.log(`🗑️  Removed stale entry: ${name}`);
      }
    }

    // Update registry
    registry.items = Array.from(existingItemsMap.values());

    // Sort items by name for consistency
    registry.items.sort((a, b) => a.name.localeCompare(b.name));

    // Write back to file
    fs.writeFileSync(
      REGISTRY_JSON_PATH,
      JSON.stringify(registry, null, 2) + "\n",
      "utf-8"
    );

    console.log(`✅ Registry synced! Added: ${added}, Updated: ${updated}, Removed: ${removed}`);
    console.log(`📊 Total items in registry: ${registry.items.length}`);
  } catch (error) {
    console.error("❌ Error syncing registry:", error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  syncRegistry();
}

module.exports = { syncRegistry };
