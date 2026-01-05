import fs from "fs/promises";
import kleur from "kleur";
import fetch from "node-fetch";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function add(component, options = {}) {
  const { overwrite = false } = options;

  if (!component) {
    console.error(kleur.red("Please specify a component name"));
    console.error(
      kleur.dim(`Run ${kleur.yellow("npx uitripled")} for usage information`)
    );
    process.exit(1);
  }

  // Registry endpoint
  const url = `https://ui.tripled.work/r/${component}.json`;

  console.log(kleur.cyan(`Fetching ${component}…`));

  try {
    const res = await fetch(url);

    if (!res.ok) {
      if (res.status === 404) {
        console.error(
          kleur.red(`Component "${component}" not found in registry`)
        );
        console.error(
          kleur.dim("Check available components at https://ui.tripled.work")
        );
      } else {
        console.error(
          kleur.red(`Failed to fetch component: ${res.statusText}`)
        );
      }
      process.exit(1);
    }

    const data = await res.json();

    if (!data.files || !Array.isArray(data.files) || data.files.length === 0) {
      console.error(
        kleur.red(`Component "${component}" has no files to install`)
      );
      process.exit(1);
    }

    // Check for registry dependencies
    if (data.registryDependencies && data.registryDependencies.length > 0) {
      console.log();
      console.log(kleur.yellow("Registry dependencies:"));
      data.registryDependencies.forEach((dep) => {
        console.log(
          kleur.dim(`  - ${dep} (install with: npx shadcn@latest add ${dep})`)
        );
      });
      console.log();
    }

    // Check for npm dependencies
    if (data.dependencies && data.dependencies.length > 0) {
      console.log();
      console.log(kleur.yellow("Npm dependencies:"));
      console.log(
        kleur.dim(
          `  (Install with: npm install ${data.dependencies.join(" ")})`
        )
      );
      data.dependencies.forEach((dep) => {
        console.log(kleur.dim(`  - ${dep}`));
      });
      console.log();
    }

    // Determine base path using priority order
    const priorityPaths = ["src/components", "app/components", "components"];

    let basePath = "components"; // default fallback
    for (const priorityPath of priorityPaths) {
      const checkPath = path.join(process.cwd(), priorityPath);
      try {
        const stats = await fs.stat(checkPath);
        if (stats.isDirectory()) {
          basePath = priorityPath;
          break;
        }
      } catch {
        // Path doesn't exist, continue to next priority
      }
    }

    const files = data.files;
    let installedCount = 0;
    let skippedCount = 0;

    for (const file of files) {
      // Use target as reference, or fall back to file.path
      const fileTarget = file.target || file.path;
      const filePath = file.path;

      // Extract the base directory and directory structure from target
      // e.g., "components/motion-core/ai-glow-input" -> base: "components", dir: "motion-core"
      const targetParts = fileTarget.split("/");
      const targetBase = targetParts[0];
      const targetDir = targetParts.slice(1, -1).join("/"); // Everything except first and last

      // Get filename from file.path (e.g., "components/motion-core/ai-glow-input.tsx" -> "ai-glow-input.tsx")
      const pathParts = filePath.split("/");
      const fileName = pathParts[pathParts.length - 1];

      // Build install path: basePath + targetDir + fileName
      // e.g., if basePath is "src/components" and targetDir is "motion-core"
      // result: "src/components/motion-core/ai-glow-input.tsx"
      const installPath = targetDir
        ? path.join(basePath, targetDir, fileName)
        : path.join(basePath, fileName);

      const localPath = path.join(process.cwd(), installPath);

      // Check if file exists
      try {
        await fs.access(localPath);
        if (!overwrite) {
          console.log(
            kleur.yellow(
              `⊘ Skipped ${installPath} (already exists, use --overwrite to replace)`
            )
          );
          skippedCount++;
          continue;
        }
      } catch {
        // File doesn't exist, proceed with installation
      }

      try {
        // Ensure directory exists
        await fs.mkdir(path.dirname(localPath), { recursive: true });

        // Write file
        await fs.writeFile(localPath, file.content, "utf8");

        console.log(kleur.green(`✔ Installed ${installPath}`));
        installedCount++;
      } catch (error) {
        console.error(
          kleur.red(`✗ Failed to install ${installPath}:`),
          error.message
        );
      }
    }

    console.log();
    if (installedCount > 0) {
      console.log(
        kleur.green(`Successfully installed ${installedCount} file(s)`)
      );
    }
    if (skippedCount > 0) {
      console.log(
        kleur.yellow(`Skipped ${skippedCount} file(s) (already exist)`)
      );
    }
  } catch (error) {
    console.error(kleur.red("Error:"), error.message);
    if (error.code === "ENOTFOUND" || error.code === "ECONNREFUSED") {
      console.error(kleur.dim("Check your internet connection and try again"));
    }
    process.exit(1);
  }
}
