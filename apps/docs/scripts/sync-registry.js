const fs = require("fs");
const path = require("path");

const SOURCE_REGISTRY_PATH = path.join(__dirname, "../../../packages/registry/registry.json");
const DEST_REGISTRY_PATH = path.join(__dirname, "../registry.json");

function syncRegistry() {
  try {
    console.log("🔄 Syncing registry.json from packages/registry...");

    if (!fs.existsSync(SOURCE_REGISTRY_PATH)) {
      console.error(`❌ Source registry file not found at: ${SOURCE_REGISTRY_PATH}`);
      console.log("⚠️  Ensure you have run 'yarn registry:generate' or built the registry package.");
      // Do not exit with error to avoid crashing dev server if race condition,
      // but warn heavily. User might need to build registry once.
      return;
    }

    const content = fs.readFileSync(SOURCE_REGISTRY_PATH, "utf-8");
    fs.writeFileSync(DEST_REGISTRY_PATH, content, "utf-8");

    const registry = JSON.parse(content);
    console.log(`✅ Registry synced! Copied ${registry.items ? registry.items.length : 0} items.`);

  } catch (error) {
    console.error("❌ Error syncing registry:", error);
    process.exit(1);
  }
}

if (require.main === module) {
  syncRegistry();
}

module.exports = { syncRegistry };
