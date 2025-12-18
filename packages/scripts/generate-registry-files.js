const fs = require("fs");
const path = require("path");

const REGISTRY_JSON_PATH = path.join(__dirname, "../registry.json");
const PUBLIC_R_DIR = path.join(__dirname, "../public/r");

/**
 * Generate individual JSON files for each component in registry.json
 * Output: public/r/{name}.json
 */
function generateRegistryFiles() {
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
        // All paths in registry.json should be in format: components/component-name.tsx
        const filesWithContent = files.map((file) => {
          try {
            const filePath = path.join(__dirname, "..", file.path);

            // Check if file exists
            if (!fs.existsSync(filePath)) {
              console.error(
                `File not found: ${filePath} (from registry path: ${file.path})`
              );
              throw new Error(`File not found: ${file.path}`);
            }

            // Read the file content
            const content = fs.readFileSync(filePath, "utf-8");

            if (!content || content.trim().length === 0) {
              throw new Error(`File is empty: ${file.path}`);
            }

            // Generate target path: extract component name from path
            // All components install to: components/uitripled/component-name
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
            // Return file with error message in content
            // Extract component name for target even on error
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
              content: `// Error: Could not read file ${file.path}\n// ${errorMessage}`,
              type: file.type || type,
              target: targetPath,
            };
          }
        });

        // Create the registry item JSON
        const registryItem = {
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
generateRegistryFiles();
