/**
 * Merges multiple React component files by deduplicating and organizing imports
 * @param {string} code - The combined code from multiple components
 * @returns {string} - Clean code with deduplicated imports at the top
 */
export function mergeComponentImports(code: string): string {
  const lines = code.split("\n");
  const imports = new Map<
    string,
    {
      default: string | null;
      named: Set<string>;
      namespace: string | null;
      sideEffect: boolean;
    }
  >();
  const nonImportLines: string[] = [];
  let useClientFound = false;

  // Regular expressions for different import types
  const importRegex = /^import\s+/;
  const namedImportRegex =
    /^import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]/;
  const defaultImportRegex = /^import\s+(\w+)\s+from\s*['"]([^'"]+)['"]/;
  const defaultAndNamedRegex =
    /^import\s+(\w+)\s*,\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]/;
  const namespaceImportRegex =
    /^import\s+\*\s+as\s+(\w+)\s+from\s*['"]([^'"]+)['"]/;
  const sideEffectImportRegex = /^import\s*['"]([^'"]+)['"]/;

  let currentMultilineImport: string | null = null;

  for (const line of lines) {
    const trimmedLine = line.trim();

    // Handle 'use client' directive
    if (/^(['"])use client\1;?\s*(\/\/.*)?$/.test(trimmedLine)) {
      useClientFound = true;
      continue;
    }

    // Check if we're continuing a multiline import
    if (currentMultilineImport !== null) {
      currentMultilineImport += " " + trimmedLine;

      // Check if this line completes the import (has closing brace and from)
      if (trimmedLine.includes("}") && trimmedLine.includes("from")) {
        const match = currentMultilineImport.match(
          /import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]/
        );
        if (match) {
          const [, namedImports, source] = match;

          if (!imports.has(source)) {
            imports.set(source, {
              default: null,
              named: new Set(),
              namespace: null,
              sideEffect: false,
            });
          }

          // Split by comma and clean up each import name
          namedImports.split(",").forEach((name) => {
            const cleanName = name.trim();
            if (cleanName) {
              // Only add non-empty names
              imports.get(source)!.named.add(cleanName);
            }
          });
        }

        currentMultilineImport = null;
        continue;
      } else if (trimmedLine.includes("}")) {
        // Has closing brace but no 'from' yet, continue collecting
        continue;
      } else {
        // Still in the middle of named imports
        continue;
      }
    }

    // Skip empty lines and comments at the top
    if (!trimmedLine || trimmedLine.startsWith("//")) {
      if (!importRegex.test(trimmedLine)) {
        nonImportLines.push(line);
      }
      continue;
    }

    // Process import statements
    if (importRegex.test(trimmedLine)) {
      let match: RegExpMatchArray | null;

      // Handle multiline import that starts but doesn't complete on this line
      // Check this FIRST before trying to match complete imports
      if (trimmedLine.match(/^import\s*{/) && !trimmedLine.includes("from")) {
        currentMultilineImport = trimmedLine;
        continue;
      }
      // Handle: import Default, { named } from 'module'
      else if ((match = trimmedLine.match(defaultAndNamedRegex))) {
        const [, defaultImport, namedImports, source] = match;

        if (!imports.has(source)) {
          imports.set(source, {
            default: null,
            named: new Set(),
            namespace: null,
            sideEffect: false,
          });
        }

        const importData = imports.get(source)!;
        importData.default = defaultImport;

        namedImports.split(",").forEach((name) => {
          const cleanName = name.trim();
          if (cleanName) {
            // Only add non-empty names
            importData.named.add(cleanName);
          }
        });
      }
      // Handle: import { named } from 'module'
      else if ((match = trimmedLine.match(namedImportRegex))) {
        const [, namedImports, source] = match;

        if (!imports.has(source)) {
          imports.set(source, {
            default: null,
            named: new Set(),
            namespace: null,
            sideEffect: false,
          });
        }

        namedImports.split(",").forEach((name) => {
          const cleanName = name.trim();
          if (cleanName) {
            // Only add non-empty names
            imports.get(source)!.named.add(cleanName);
          }
        });
      }
      // Handle: import Default from 'module'
      else if ((match = trimmedLine.match(defaultImportRegex))) {
        const [, defaultImport, source] = match;

        if (!imports.has(source)) {
          imports.set(source, {
            default: null,
            named: new Set(),
            namespace: null,
            sideEffect: false,
          });
        }

        // Only set default if not already set (first one wins)
        if (!imports.get(source)!.default) {
          imports.get(source)!.default = defaultImport;
        }
      }
      // Handle: import * as namespace from 'module'
      else if ((match = trimmedLine.match(namespaceImportRegex))) {
        const [, namespace, source] = match;

        if (!imports.has(source)) {
          imports.set(source, {
            default: null,
            named: new Set(),
            namespace: null,
            sideEffect: false,
          });
        }

        imports.get(source)!.namespace = namespace;
      }
      // Handle: import 'module' (side effect)
      else if ((match = trimmedLine.match(sideEffectImportRegex))) {
        const [, source] = match;

        if (!imports.has(source)) {
          imports.set(source, {
            default: null,
            named: new Set(),
            namespace: null,
            sideEffect: true,
          });
        }
      }
    } else {
      nonImportLines.push(line);
    }
  }

  // Build the final code
  let result = "";

  // Add 'use client' if found
  if (useClientFound) {
    result += "'use client'\n\n";
  }

  // Sort imports: external packages first, then relative imports
  const sortedImports = Array.from(imports.entries()).sort(([a], [b]) => {
    const aIsRelative = a.startsWith(".") || a.startsWith("@/");
    const bIsRelative = b.startsWith(".") || b.startsWith("@/");

    if (aIsRelative && !bIsRelative) return 1;
    if (!aIsRelative && bIsRelative) return -1;
    return a.localeCompare(b);
  });

  // Generate import statements
  sortedImports.forEach(([source, data]) => {
    if (
      data.sideEffect &&
      !data.default &&
      data.named.size === 0 &&
      !data.namespace
    ) {
      result += `import '${source}'\n`;
    } else if (data.namespace) {
      result += `import * as ${data.namespace} from '${source}'\n`;
    } else {
      const parts: string[] = [];

      if (data.default) {
        parts.push(data.default);
      }

      if (data.named.size > 0) {
        const namedImports = Array.from(data.named).sort().join(", ");
        parts.push(`{ ${namedImports} }`);
      }

      if (parts.length > 0) {
        result += `import ${parts.join(", ")} from '${source}'\n`;
      }
    }
  });

  // Add a blank line after imports if there are any
  if (sortedImports.length > 0) {
    result += "\n";
  }

  // Add the rest of the code
  result += nonImportLines.join("\n");

  return result;
}
