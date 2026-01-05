#!/usr/bin/env node

import { Command } from "commander";
import { add } from "./commands/add";
import { version } from "../package.json";
import kleur from "kleur";

const program = new Command();

program
  .name("uitripled")
  .description("CLI to add animated UI components from uitripled registry")
  .version(version);

program
  .command("add")
  .description("add a component to your project")
  .argument("[component]", "the component to add")
  .option("-o, --overwrite", "overwrite existing files", false)
  .action(async (component, options) => {
    try {
      await add(component, options);
    } catch (error) {
       // @ts-ignore
      console.error(kleur.red("Error:"), error?.message || error);
      process.exit(1);
    }
  });

program.parse();
