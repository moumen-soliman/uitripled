// lib/get-component-code.ts
"use server";

import { readFileSync } from "fs";
import { join } from "path";

/**
 * Reads a component file and returns its source code as a string
 * @param filePath - The path to the file (supports @/ alias or relative/absolute paths)
 * @returns The file content as a string
 * @throws Error if the file cannot be read
 */
export async function getComponentCode(filePath: string): Promise<string> {
  try {
    // Resolve aliases
    let resolvedPath = filePath;
    if (filePath.startsWith("@/")) {
      resolvedPath = join(process.cwd(), filePath.replace("@/", ""));
    } else if (filePath.startsWith("@uitripled/ui/")) {
      resolvedPath = join(
        process.cwd(),
        "../../packages/ui/src",
        filePath.replace("@uitripled/ui/", "")
      );
    } else if (filePath.startsWith("@uitripled/shared/")) {
      resolvedPath = join(
        process.cwd(),
        "../../packages/shared/src",
        filePath.replace("@uitripled/shared/", "")
      );
    } else if (filePath.startsWith("@uitripled/registry/")) {
      resolvedPath = join(
        process.cwd(),
        "../../packages/registry/src",
        filePath.replace("@uitripled/registry/", "")
      );
    } else if (!filePath.startsWith("/")) {
      resolvedPath = join(process.cwd(), filePath);
    }

    const absolutePath = resolvedPath;

    const content = readFileSync(absolutePath, "utf-8");
    return content;
  } catch (error) {
    throw new Error(
      `Failed to read file at ${filePath}: ${error instanceof Error ? error.message : String(error)}`
    );
  }
}
