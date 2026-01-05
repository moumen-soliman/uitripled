import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const REGISTRY_JSON_PATH = path.join(__dirname, "../../registry/registry.json");
const PUBLIC_R_DIR = path.join(__dirname, "../../registry/public/r");
const PACKAGES_DIR = path.join(__dirname, "../../components");

/**
 * Resolve a @uitripled package path to a local filesystem path
 */
function resolvePackagePath(importPath: string) {
  if (importPath.startsWith("@uitripled/")) {
    const parts = importPath.split("/");
    const packageName = parts[1]; // e.g. react-shadcn
    const rest = parts.slice(2).join("/"); // e.g. components/native/...
    return path.join(PACKAGES_DIR, packageName, "src", rest);
  }
  return null;
}

/**
 * Transform imports in file content for public registry distribution.
 * Converts internal @uitripled imports to standard project paths that work
 * in any user's project after installation via shadcn registry or npx uitripled add.
 *
 * Transforms:
 * - @uitripled/utils → @/lib/utils
 * - @/components/native/shadcnui/component-name → @/components/uitripled/component-name
 * - @/components/native/component-name → @/components/uitripled/component-name
 * - ../component-name → @/components/uitripled/component-name
 */
function transformImportsForRegistry(content: string): string {
  let transformed = content;

  // Transform @uitripled/utils to @/lib/utils
  transformed = transformed.replace(
    /from\s+["']@uitripled\/utils["']/g,
    'from "@/lib/utils"'
  );
  transformed = transformed.replace(
    /import\s+["']@uitripled\/utils["']/g,
    'import "@/lib/utils"'
  );

  // Transform @/components/native/shadcnui/component-name to @/components/uitripled/component-name
  transformed = transformed.replace(
    /from\s+["']@\/components\/native\/shadcnui\/([^"']+)["']/g,
    'from "@/components/uitripled/$1"'
  );

  // Transform @/components/native/component-name (baseui and other variants) to @/components/uitripled/component-name
  transformed = transformed.replace(
    /from\s+["']@\/components\/native\/([^"']+)["']/g,
    'from "@/components/uitripled/$1"'
  );

  // Transform relative imports like ../native-button-shadcnui to @/components/uitripled/native-button-shadcnui
  // Match patterns like "../native-button-shadcnui" or "./native-button-shadcnui"
  transformed = transformed.replace(
    /from\s+["']\.\.\/([a-zA-Z0-9_-]+(?:-shadcnui|-baseui|-carbon)?)["']/g,
    'from "@/components/uitripled/$1"'
  );
  transformed = transformed.replace(
    /from\s+["']\.\/([a-zA-Z0-9_-]+(?:-shadcnui|-baseui|-carbon)?)["']/g,
    'from "@/components/uitripled/$1"'
  );

  return transformed;
}

/**
 * Generate individual JSON files for each component in registry.json
 * Output: packages/registry/public/r/{name}.json
 */
export function generateRegistryFiles() {
  try {
    // Read registry.json
    const registryContent = fs.readFileSync(REGISTRY_JSON_PATH, "utf-8");
    const registry = JSON.parse(registryContent);

    if (!registry.items || !Array.isArray(registry.items)) {
      throw new Error("registry.json must have an 'items' array");
    }

    // Create public/r directory if it doesn't exist
    if (!fs.existsSync(PUBLIC_R_DIR)) {
      fs.mkdirSync(PUBLIC_R_DIR, { recursive: true });
      console.log(`Created directory: ${PUBLIC_R_DIR}`);
    } else {
      // Clean directory before regenerating
      console.log(`Cleaning directory: ${PUBLIC_R_DIR}`);
      const files = fs.readdirSync(PUBLIC_R_DIR);
      for (const file of files) {
        fs.unlinkSync(path.join(PUBLIC_R_DIR, file));
      }
    }

    let successCount = 0;
    let errorCount = 0;

    // Process each item in the registry
    for (const item of registry.items) {
      try {
        const { name, type, title, description, registryDependencies, files } =
          item;

        if (!name) {
          console.warn(`Skipping item without name:`, item);
          errorCount++;
          continue;
        }

        // Read file contents
        const filesWithContent = files.map((file: any) => {
          try {
            // Resolve file path from @uitripled path
            const filePath = resolvePackagePath(file.path);

            if (!filePath) {
                 throw new Error(`Could not resolve path: ${file.path}`);
            }

            // Check if file exists
            if (!fs.existsSync(filePath)) {
              console.error(
                `File not found: ${filePath} (from registry path: ${file.path})`
              );
              throw new Error(`File not found: ${file.path}`);
            }

            // Read the file content
            const rawContent = fs.readFileSync(filePath, "utf-8");

            if (!rawContent || rawContent.trim().length === 0) {
              throw new Error(`File is empty: ${file.path}`);
            }

            // Transform imports for public registry distribution
            const content = transformImportsForRegistry(rawContent);

            // Generate target path handling
            let targetPath = file.target;
            if (!targetPath) {
              // Extract just the component filename and install to components/uitripled/
              const pathParts = file.path.split("/");
              const filename = pathParts[pathParts.length - 1];
              // Keep the extension (.tsx) in the target path for proper file installation
              targetPath = `components/uitripled/${filename}`;
            }

            return {
              path: file.path,
              content: content,
              type: file.type || type,
              target: targetPath,
            };
          } catch (error) {
            const errorMessage =
              error instanceof Error ? error.message : String(error);
            console.error(`Error reading file ${file.path}:`, errorMessage);

            let targetPath = file.target;
            if (!targetPath) {
               // Fallback target path strategy
               const pathParts = file.path.split("/");
               const filename = pathParts[pathParts.length - 1];
               targetPath = `components/uitripled/${filename}`;
            }
            return {
              path: file.path,
              content: `// Error: Could not read file ${file.path}\n// ${errorMessage}`,
              type: file.type || type,
              target: targetPath,
            };
          }
        });

        // Create the registry item JSON
        const registryItem: any = {
          $schema: "https://ui.shadcn.com/schema/registry-item.json",
          name: name,
          type: type,
        };

        // Add optional fields if they exist
        if (title) {
          registryItem.title = title;
        }
        if (description) {
          registryItem.description = description;
        }
        if (registryDependencies && registryDependencies.length > 0) {
          registryItem.registryDependencies = registryDependencies;
        }
        if (item.dependencies && item.dependencies.length > 0) {
          registryItem.dependencies = item.dependencies;
        }

        // Add files with content
        registryItem.files = filesWithContent;

        // Write to public/r/{name}.json
        const outputPath = path.join(PUBLIC_R_DIR, `${name}.json`);
        fs.writeFileSync(
          outputPath,
          JSON.stringify(registryItem, null, 2),
          "utf-8"
        );
        successCount++;
      } catch (error) {
        console.error(
          `Error processing item ${item.name || "unknown"}:`,
          error
        );
        errorCount++;
      }
    }

    // Copy registry.json to public/r/registry.json for RSS feed & @wandry-ui
    const registryOutputPath = path.join(PUBLIC_R_DIR, "registry.json");
    fs.copyFileSync(REGISTRY_JSON_PATH, registryOutputPath);
    console.log(`📋 Copied registry.json to ${registryOutputPath}`);

    console.log(`\n✅ Successfully generated ${successCount} registry files`);
    if (errorCount > 0) {
      console.log(`⚠️  ${errorCount} items had errors`);
    }
    console.log(`📁 Output directory: ${PUBLIC_R_DIR}`);
  } catch (error) {
    console.error("Error generating registry files:", error);
    process.exit(1);
  }
}

// Run the script
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generateRegistryFiles();
}
