const fs = require("fs");
const path = require("path");

const REGISTRY_JSON_PATH = path.join(__dirname, "../registry.json");
const REGISTRY_DIR = path.join(__dirname, "../lib/registry");
const PUBLIC_MD_DIR = path.join(__dirname, "../public/md");

/**
 * Generate markdown documentation files for each component
 * These files are optimized for comprehensive documentation
 * Output: public/md/{component-id}.md
 */
function generateComponentMarkdown() {
  try {
    // Read registry.json
    if (!fs.existsSync(REGISTRY_JSON_PATH)) {
      throw new Error(`Registry file not found: ${REGISTRY_JSON_PATH}`);
    }

    const registryContent = fs.readFileSync(REGISTRY_JSON_PATH, "utf-8");
    const registry = JSON.parse(registryContent);

    if (!registry.items || !Array.isArray(registry.items)) {
      throw new Error("registry.json must have an 'items' array");
    }

    // Also read components-registry.tsx to get additional metadata like tags
    let componentMetadataMap = new Map();

    if (fs.existsSync(REGISTRY_DIR)) {
      const files = fs
        .readdirSync(REGISTRY_DIR)
        .filter((file) => file.endsWith(".tsx") && file !== "index.tsx");

      for (const file of files) {
        const componentsRegistryContent = fs.readFileSync(
          path.join(REGISTRY_DIR, file),
          "utf-8"
        );

        // Extract component objects more reliably
        const componentBlockRegex =
          /\{[\s\S]*?id:\s*["']([^"']+)["'][\s\S]*?\}/g;

        let match;
        while (
          (match = componentBlockRegex.exec(componentsRegistryContent)) !== null
        ) {
          const block = match[0];
          const id = match[1];

          // Extract individual fields from the block
          const nameMatch = block.match(/name:\s*["']([^"']+)["']/);
          const descMatch = block.match(
            /description:\s*["']((?:[^"'\\]|\\.)*)["']/
          );
          const categoryMatch = block.match(/category:\s*["']([^"']+)["']/);
          const codePathMatch = block.match(/codePath:\s*["']([^"']+)["']/);

          // Extract tags array
          const tagsMatch = block.match(/tags:\s*\[(.*?)\]/s);
          let tags = [];
          if (tagsMatch) {
            tags = tagsMatch[1]
              .split(",")
              .map((t) => t.trim().replace(/["']/g, ""))
              .filter((t) => t);
          }

          componentMetadataMap.set(id, {
            name: nameMatch ? nameMatch[1] : id,
            description: descMatch ? descMatch[1].replace(/\\"/g, '"') : "",
            category: categoryMatch ? categoryMatch[1] : "",
            tags: tags,
            codePath: codePathMatch ? codePathMatch[1] : "",
          });
        }
      }
    }

    // Create public/md directory if it doesn't exist
    if (!fs.existsSync(PUBLIC_MD_DIR)) {
      fs.mkdirSync(PUBLIC_MD_DIR, { recursive: true });
      console.log(`Created directory: ${PUBLIC_MD_DIR}`);
    }

    let successCount = 0;
    let errorCount = 0;

    // Process each component from registry.json
    for (const item of registry.items) {
      try {
        const componentName = item.name;
        const metadata = componentMetadataMap.get(componentName);

        // Use metadata from TSX if available, otherwise use registry.json
        const componentName_display =
          metadata?.name || item.title || componentName;
        const componentDescription =
          metadata?.description || item.description || "A reusable component.";
        const componentCategory =
          metadata?.category || item.category || "components";
        const componentTags = metadata?.tags || [];

        // Determine component file path
        let componentCodePath = metadata?.codePath || "";
        if (!componentCodePath && item.files && item.files[0]) {
          componentCodePath = item.files[0].path || item.files[0];
        }

        if (!componentCodePath) {
          console.warn(`No code path found for component: ${componentName}`);
          errorCount++;
          continue;
        }

        // Read the component file
        let componentFilePath = componentCodePath;
        if (componentFilePath.startsWith("@/")) {
          componentFilePath = componentFilePath.replace("@/", "");
        }

        const fullPath = path.join(__dirname, "..", componentFilePath);

        if (!fs.existsSync(fullPath)) {
          console.warn(`Component file not found: ${fullPath}`);
          errorCount++;
          continue;
        }

        const componentCode = fs.readFileSync(fullPath, "utf-8");

        // Analyze the component code to extract more details
        const usesFramerMotion =
          componentCode.includes("framer-motion") ||
          (item.dependencies && item.dependencies.includes("framer-motion"));
        const usesShadcn =
          componentTags.includes("shadcn") ||
          componentCode.includes("@/components/ui/") ||
          (item.registryDependencies && item.registryDependencies.length > 0);

        // Get dependencies
        const dependencies = item.dependencies || [];
        const registryDependencies = item.registryDependencies || [];

        // Create a basic usage example
        const componentImportName = componentName_display.replace(/\s+/g, "");
        const usageExample = `\`\`\`tsx
"use client"

import * as React from "react"

import { ${componentImportName} } from "${componentCodePath}"

export function ${componentImportName}Demo() {
  return (
    <${componentImportName} />
  )
}
\`\`\``;

        // Generate frontmatter
        const frontmatter = `---
title: ${componentName_display}
description: ${componentDescription}
component: true
---

`;

        // Generate markdown content in the new format
        const markdown = `${frontmatter}${usageExample}

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

\`\`\`bash
npx shadcn@latest add @uitripled/${componentName}
\`\`\`

</TabsContent>

<TabsContent value="manual">

<Steps>

${
  registryDependencies.length > 0
    ? `<Step>Add the required components to your project.</Step>

The \`${componentName_display}\` component uses the following components. Make sure you have them installed in your project.

${registryDependencies.map((dep) => `- ${dep}`).join("\n")}

`
    : ""
}<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="${componentName}" title="${componentCodePath}" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

\`\`\`tsx showLineNumbers
import { ${componentImportName} } from "${componentCodePath}"
\`\`\`

\`\`\`tsx showLineNumbers
<${componentImportName} />
\`\`\`

## Component Details

- **Category**: ${componentCategory}
${componentTags.length > 0 ? `- **Tags**: ${componentTags.join(", ")}` : ""}

### Technical Specifications

${
  dependencies.length > 0
    ? `**Dependencies**:
${dependencies.map((dep) => `- \`${dep}\``).join("\n")}

`
    : ""
}${
          registryDependencies.length > 0
            ? `**UI Components**:
${registryDependencies.map((dep) => `- ${dep}`).join("\n")}

`
            : ""
        }${
          usesFramerMotion
            ? `This component uses **Framer Motion** for animations and motion effects.

`
            : ""
        }${
          usesShadcn
            ? `This component is built on top of **shadcn/ui** component primitives.

`
            : ""
        }## Customization

This component can be customized by modifying the following:

- **Styling**: The component uses Tailwind CSS for styling. Customize colors, spacing, and other design tokens through Tailwind classes.
- **Props**: Pass custom props to configure the component's behavior and appearance.
- **Variants**: Create custom variants by extending the component's base styles.

## Accessibility

The component follows accessibility best practices:

- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Examples

### Basic Example

\`\`\`tsx
"use client"

import * as React from "react"

import { ${componentImportName} } from "${componentCodePath}"

export function BasicExample() {
  return (
    <${componentImportName} />
  )
}
\`\`\`

## API Reference

This component is part of the UI TripleD component library, a collection of production-ready components built with Framer Motion, shadcn/ui, and Tailwind CSS.

## Best Practices

1. **Performance**: Consider lazy loading if used in large lists or below-the-fold content.
2. **Theming**: Ensure your theme configuration includes the necessary CSS variables.
3. **Testing**: Test keyboard navigation and screen reader compatibility.
4. **Customization**: Use props for configuration rather than modifying source code.

## Related Components

${registryDependencies.length > 0 ? registryDependencies.map((dep) => `- [${dep}](/docs/components/${dep})`).join("\n") : "No related components."}
`;

        // Write markdown file
        const outputPath = path.join(PUBLIC_MD_DIR, `${componentName}.md`);
        fs.writeFileSync(outputPath, markdown, "utf-8");
        console.log(`✓ Generated: ${componentName}.md`);
        successCount++;
      } catch (error) {
        console.error(
          `✗ Error processing component ${item.name || "unknown"}:`,
          error.message
        );
        errorCount++;
      }
    }

    console.log(`\n✅ Successfully generated ${successCount} markdown files`);
    if (errorCount > 0) {
      console.log(`⚠️  ${errorCount} components had errors`);
    }
    console.log(`📁 Output directory: ${PUBLIC_MD_DIR}`);
  } catch (error) {
    console.error("❌ Error generating markdown files:", error.message);
    process.exit(1);
  }
}

// Run the script
generateComponentMarkdown();
