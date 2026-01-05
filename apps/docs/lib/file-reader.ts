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
    // Resolve @/ alias to project root
    let resolvedPath = filePath;
    if (filePath.startsWith("@/")) {
      resolvedPath = filePath.replace("@/", "");
    }

    // Handle @uitripled package paths
    if (filePath.startsWith("@uitripled/")) {
      const packageMap: Record<string, string> = {
        "@uitripled/react-shadcn": "../../packages/components/react-shadcn/src",
        "@uitripled/react-baseui": "../../packages/components/react-baseui/src",
        "@uitripled/react-carbon": "../../packages/components/react-carbon/src",
      };

      for (const [pkg, pkgSrcPath] of Object.entries(packageMap)) {
        if (filePath.startsWith(pkg)) {
          // Replace package name with its src directory path
          let pathInPkg = filePath.replace(pkg, "");
          if (pathInPkg.startsWith("/src/")) {
            pathInPkg = pathInPkg.replace("/src/", "/");
          }

          resolvedPath = join(pkgSrcPath, pathInPkg);
          break;
        }
      }
    }

    // If path is absolute, use it directly; otherwise resolve relative to project root
    const absolutePath = resolvedPath.startsWith("/")
      ? resolvedPath
      : join(process.cwd(), resolvedPath);

    const content = readFileSync(absolutePath, "utf-8");
    return content;
  } catch (error) {
    throw new Error(
      `Failed to read file at ${filePath}: ${error instanceof Error ? error.message : String(error)}`
    );
  }
}
