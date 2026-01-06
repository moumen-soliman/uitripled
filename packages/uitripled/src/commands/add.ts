import prompts from "prompts";
import kleur from "kleur";
import { fetchComponent } from "../utils/registry";
import path from "path";
import fs from "fs/promises";
import ora from "ora";

export async function add(componentName: string | undefined, options: { overwrite: boolean }) {
  if (!componentName) {
    const response = await prompts({
      type: "text",
      name: "component",
      message: "What component would you like to add?",
    });

    if (!response.component) {
      console.log(kleur.yellow("Operation cancelled."));
      return;
    }
    componentName = response.component;
  }

  if (!componentName) return;

  const spinner = ora(`Fetching ${componentName}...`).start();

  const componentData = await fetchComponent(componentName);

  if (!componentData) {
    spinner.fail(kleur.red(`Component "${componentName}" not found.`));
    return;
  }

  spinner.succeed(`Fetched ${componentName}`);

  // TODO: Add framework selection/detection logic here
  // For now, using default logic from original CLI

  if (!componentData.files?.length) {
    console.error(kleur.red("No files found in component."));
    return;
  }

  // Basic install logic (simplified from original)
  const priorityPaths = ["src/components", "app/components", "components"];
  let basePath = "components";

  for (const p of priorityPaths) {
    try {
      await fs.access(path.join(process.cwd(), p));
      basePath = p;
      break;
    } catch {}
  }

  // Confirm installation
  const { proceed } = await prompts({
    type: "confirm",
    name: "proceed",
    message: `Install ${componentName} to ${basePath}?`,
    initial: true,
  });

  if (!proceed) return;

  const installSpinner = ora("Installing...").start();

  for (const file of componentData.files) {
    // files: { path, content, target? }
    // Logic similar to original add.js
    const fileName = path.basename(file.path);
    // simplified for now, assuming flat install or preserving structure differently
    // original logic parsed target

     // Reusing original logic for path resolution roughly
    const fileTarget = file.target || file.path;
    const targetParts = fileTarget.split("/");
    // const targetBase = targetParts[0];
    const targetDir = targetParts.slice(1, -1).join("/");

    const installPath = targetDir
        ? path.join(basePath, targetDir, fileName)
        : path.join(basePath, fileName);

    const fullPath = path.join(process.cwd(), installPath);

    try {
        await fs.mkdir(path.dirname(fullPath), { recursive: true });

        let shouldWrite = true;
        if (!options.overwrite) {
             try {
                 await fs.access(fullPath);
                 shouldWrite = false;
                 installSpinner.text = `Skipping ${fileName} (exists)`;
             } catch {}
        }

        if (shouldWrite) {
            await fs.writeFile(fullPath, file.content);
        }
    } catch (e) {
        installSpinner.fail(`Failed to write ${fileName}`);
        throw e;
    }
  }

  installSpinner.succeed(`Installed ${componentName}`);

  if (componentData.dependencies?.length) {
      console.log(kleur.yellow(`\nDon't forget to install dependencies:`));
      console.log(kleur.cyan(`npm install ${componentData.dependencies.join(" ")}`));
  }
}
