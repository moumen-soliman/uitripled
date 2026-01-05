#!/usr/bin/env node
import kleur from "kleur";
import { add } from "../src/add.js";

const [, , command, component, ...flags] = process.argv;

async function main() {
  if (command === "add") {
    const overwrite = flags.includes("--overwrite");
    await add(component, { overwrite });
  } else if (!command) {
    console.log(kleur.cyan("uitripled"));
    console.log();
    console.log("Usage:");
    console.log(`  ${kleur.green("npx uitripled add <component>")}`);
    console.log();
    console.log("Options:");
    console.log(`  ${kleur.yellow("--overwrite")}  Overwrite existing files`);
    console.log();
    console.log("Examples:");
    console.log(`  ${kleur.dim("npx uitripled add animated-checkbox")}`);
    console.log(
      `  ${kleur.dim("npx uitripled add animated-button --overwrite")}`
    );
  } else {
    console.error(kleur.red(`Unknown command: ${command}`));
    console.error(`Run ${kleur.yellow("npx uitripled")} for usage information`);
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(kleur.red("Error:"), error.message);
  process.exit(1);
});
