const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT_DIR = path.join(__dirname, "../../..");
const SOURCE_REGISTRY_PATH = path.join(
  ROOT_DIR,
  "packages/registry/registry.json"
);
const DEST_REGISTRY_PATH = path.join(__dirname, "../registry.json");

function generateRegistry() {
  try {
    execSync("pnpm registry:generate", {
      cwd: ROOT_DIR,
      stdio: "inherit",
    });
  } catch (error) {
    console.error("❌ Failed to generate registry files:", error);
  }
}

function syncRegistry() {
  try {
    console.log("🔄 Syncing registry.json from packages/registry...");

    generateRegistry();
    if (!fs.existsSync(SOURCE_REGISTRY_PATH)) {
      console.error(
        `❌ Source registry file not found at: ${SOURCE_REGISTRY_PATH}`
      );
      console.log(
        "⚠️  Ensure you have run 'pnpm registry:generate' from the repo root."
      );
      return;
    }

    const content = fs.readFileSync(SOURCE_REGISTRY_PATH, "utf-8");
    fs.writeFileSync(DEST_REGISTRY_PATH, content, "utf-8");

    const registry = JSON.parse(content);
    console.log(
      `✅ Registry synced! Copied ${registry.items ? registry.items.length : 0} items.`
    );
  } catch (error) {
    console.error("❌ Error syncing registry:", error);
    process.exit(1);
  }
}

if (require.main === module) {
  syncRegistry();
}

module.exports = { syncRegistry };
