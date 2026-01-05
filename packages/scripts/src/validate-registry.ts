#!/usr/bin/env tsx
/**
 * Validates registry consistency across the monorepo.
 *
 * Registry Architecture:
 * 1. packages/registry/src/registry/*.tsx - Source of truth for component definitions
 * 2. packages/registry/registry.json - Generated from (1) via sync-registry.ts
 * 3. apps/docs/registry.json - Copy of (2) synced via apps/docs/scripts/sync-registry.js
 * 4. packages/registry/public/r/*.json - Individual component files generated from (2)
 * 5. apps/docs/public/r/*.json - Copy of (4) for docs site serving
 *
 * Root registry.json follows a different schema (shadcn format with local paths)
 * and is maintained separately for shadcn CLI compatibility.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PACKAGES_REGISTRY_JSON = path.join(__dirname, "../../registry/registry.json");
const DOCS_REGISTRY_JSON = path.join(__dirname, "../../../apps/docs/registry.json");
const PACKAGES_PUBLIC_R = path.join(__dirname, "../../registry/public/r");
const DOCS_PUBLIC_R = path.join(__dirname, "../../../apps/docs/public/r");

interface ValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
}

function validateRegistrySync(): ValidationResult {
  const result: ValidationResult = { valid: true, errors: [], warnings: [] };

  // Check if packages/registry/registry.json exists
  if (!fs.existsSync(PACKAGES_REGISTRY_JSON)) {
    result.errors.push(`Missing: ${PACKAGES_REGISTRY_JSON}`);
    result.valid = false;
    return result;
  }

  // Check if apps/docs/registry.json exists
  if (!fs.existsSync(DOCS_REGISTRY_JSON)) {
    result.errors.push(`Missing: ${DOCS_REGISTRY_JSON}`);
    result.valid = false;
    return result;
  }

  // Compare the two registry.json files
  const packagesRegistry = JSON.parse(fs.readFileSync(PACKAGES_REGISTRY_JSON, "utf-8"));
  const docsRegistry = JSON.parse(fs.readFileSync(DOCS_REGISTRY_JSON, "utf-8"));

  const packagesItems = packagesRegistry.items || [];
  const docsItems = docsRegistry.items || [];

  if (packagesItems.length !== docsItems.length) {
    result.errors.push(
      `Registry item count mismatch: packages/registry has ${packagesItems.length} items, apps/docs has ${docsItems.length} items`
    );
    result.valid = false;
  }

  // Check for missing items
  const packagesNames = new Set(packagesItems.map((item: any) => item.name));
  const docsNames = new Set(docsItems.map((item: any) => item.name));

  for (const name of packagesNames) {
    if (!docsNames.has(name)) {
      result.errors.push(`Missing in apps/docs/registry.json: ${name}`);
      result.valid = false;
    }
  }

  for (const name of docsNames) {
    if (!packagesNames.has(name)) {
      result.errors.push(`Extra in apps/docs/registry.json: ${name}`);
      result.valid = false;
    }
  }

  // Validate public/r directories exist and have matching files
  if (fs.existsSync(PACKAGES_PUBLIC_R) && fs.existsSync(DOCS_PUBLIC_R)) {
    const packagesFiles = fs.readdirSync(PACKAGES_PUBLIC_R).filter(f => f.endsWith('.json'));
    const docsFiles = fs.readdirSync(DOCS_PUBLIC_R).filter(f => f.endsWith('.json'));

    if (packagesFiles.length !== docsFiles.length) {
      result.warnings.push(
        `Public registry file count mismatch: packages has ${packagesFiles.length}, docs has ${docsFiles.length}`
      );
    }
  }

  return result;
}

function main() {
  console.log("🔍 Validating registry consistency...\n");

  const result = validateRegistrySync();

  if (result.warnings.length > 0) {
    console.log("⚠️  Warnings:");
    result.warnings.forEach(w => console.log(`   - ${w}`));
    console.log();
  }

  if (result.errors.length > 0) {
    console.log("❌ Errors:");
    result.errors.forEach(e => console.log(`   - ${e}`));
    console.log();
  }

  if (result.valid) {
    console.log("✅ Registry validation passed!");
    process.exit(0);
  } else {
    console.log("❌ Registry validation failed!");
    console.log("\nTo fix, run:");
    console.log("  1. pnpm run registry:sync  (or yarn registry:sync)");
    console.log("  2. cd apps/docs && npm run sync-registry");
    process.exit(1);
  }
}

main();

