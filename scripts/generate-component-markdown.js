const fs = require("fs");
const path = require("path");

const REGISTRY_JSON_PATH = path.join(__dirname, "../registry.json");
const COMPONENTS_REGISTRY_PATH = path.join(
  __dirname,
  "../lib/components-registry.tsx"
);
const PUBLIC_MD_DIR = path.join(__dirname, "../public/md");

/**
 * Generate markdown documentation files for each component
 * These files are optimized for AI agents with detailed descriptions
 * Output: public/md/{component-id}.md
 */
function generateComponentMarkdown() {
  try {
    // Read registry.json
    const registryContent = fs.readFileSync(REGISTRY_JSON_PATH, "utf-8");
    const registry = JSON.parse(registryContent);

    if (!registry.items || !Array.isArray(registry.items)) {
      throw new Error("registry.json must have an 'items' array");
    }

    // Also read components-registry.tsx to get additional metadata like tags
    const componentsRegistryContent = fs.readFileSync(
      COMPONENTS_REGISTRY_PATH,
      "utf-8"
    );

    // Create a map of component name to additional metadata from TSX
    const componentMetadataMap = new Map();
    const metadataRegex =
      /id:\s*"([^"]+)",[\s\S]*?name:\s*"([^"]+)",[\s\S]*?description:\s*"([^"]*(?:"[^"]*")*[^"]*)",[\s\S]*?category:\s*"([^"]+)",[\s\S]*?tags:\s*\[([^\]]*)\],[\s\S]*?codePath:\s*"([^"]+)"/g;

    let match;
    while ((match = metadataRegex.exec(componentsRegistryContent)) !== null) {
      const [, id, name, description, category, tagsStr, codePath] = match;
      const tags = tagsStr
        .split(",")
        .map((t) => t.trim().replace(/"/g, ""))
        .filter((t) => t);

      componentMetadataMap.set(id, {
        name,
        description,
        category,
        tags,
        codePath,
      });
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
          metadata?.description || item.description || "";
        const componentCategory = metadata?.category || item.category || "";
        const componentTags = metadata?.tags || [];
        const componentCodePath =
          metadata?.codePath ||
          (item.files && item.files[0] ? item.files[0].path : "");

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
        const imports = componentCode.match(/^import\s+.*$/gm) || [];
        const usesFramerMotion =
          componentCode.includes("framer-motion") ||
          componentCode.includes('from "framer-motion"') ||
          (item.dependencies && item.dependencies.includes("framer-motion"));
        const usesShadcn =
          componentTags.includes("shadcn") ||
          componentCode.includes("@/components/ui/") ||
          (item.registryDependencies && item.registryDependencies.length > 0);
        const hasProps = componentCode.match(
          /interface\s+\w+Props|type\s+\w+Props|export\s+(?:function|const)\s+\w+\s*\([^)]*\{/
        );
        const hasState =
          componentCode.includes("useState") ||
          componentCode.includes("useReducer");
        const hasEffects =
          componentCode.includes("useEffect") ||
          componentCode.includes("useLayoutEffect");
        const hasAnimations =
          componentCode.includes("motion.") ||
          componentCode.includes("animate") ||
          componentCode.includes("transition") ||
          usesFramerMotion;

        // Extract prop types/interfaces
        const propInterfaceMatch = componentCode.match(
          /(?:interface|type)\s+(\w+Props)\s*\{([^}]+)\}/
        );
        const props = propInterfaceMatch
          ? propInterfaceMatch[2]
              .split("\n")
              .map((l) => l.trim())
              .filter((l) => l && !l.startsWith("//"))
          : [];

        // Get dependencies
        const dependencies = item.dependencies || [];
        const registryDependencies = item.registryDependencies || [];

        // Generate markdown content optimized for AI agents
        const markdown = `# ${componentName_display}

## Overview
${componentDescription}

## Component Details

- **ID**: \`${componentName}\`
- **Category**: ${componentCategory}
${componentTags.length > 0 ? `- **Tags**: ${componentTags.join(", ")}` : ""}
${item.subcategory ? `- **Subcategory**: ${item.subcategory}` : ""}

## Technical Specifications

### Dependencies
${dependencies.length > 0 ? `**NPM Dependencies**:\n${dependencies.map((dep) => `- ${dep}`).join("\n")}\n` : ""}
${registryDependencies.length > 0 ? `**shadcn/ui Components**:\n${registryDependencies.map((dep) => `- ${dep}`).join("\n")}\n` : ""}
${usesFramerMotion ? "- **Framer Motion**: Yes (for animations and motion effects)" : ""}
${usesShadcn ? "- **shadcn/ui**: Yes (UI component primitives)" : ""}

${imports.length > 0 ? `### Key Imports\n\`\`\`typescript\n${imports.slice(0, 15).join("\n")}${imports.length > 15 ? "\n// ... more imports" : ""}\n\`\`\`\n` : ""}

### Component Features
${hasState ? "- **State Management**: Uses React hooks (useState/useReducer) for component state" : ""}
${hasEffects ? "- **Side Effects**: Uses useEffect/useLayoutEffect for lifecycle management" : ""}
${hasAnimations ? "- **Animations**: Contains motion animations powered by Framer Motion" : ""}
${hasProps ? "- **Props**: Accepts custom props for configuration and customization" : ""}

${props.length > 0 ? `### Props Interface\n\`\`\`typescript\n${props.slice(0, 8).join("\n")}${props.length > 8 ? "\n// ... more props" : ""}\n\`\`\`\n` : ""}

## Usage Context

This component is part of the UI TripleD component library, a collection of production-ready motion components built with Framer Motion, shadcn/ui, and Tailwind CSS.

### Design Philosophy
- **Production-ready**: Fully functional, tested, and ready for production use
- **Customizable**: Can be adapted to different design systems and brand guidelines
- **Accessible**: Follows WCAG accessibility best practices
- **Performant**: Optimized for smooth animations and interactions without performance penalties
- **Modern**: Built with latest React patterns and TypeScript

## Integration Notes

${usesShadcn ? "**shadcn/ui Setup Required**: This component requires shadcn/ui to be initialized in your project. Run npx shadcn-ui@latest init and install the required components listed in registryDependencies." : ""}
${usesFramerMotion ? "**Framer Motion Required**: This component uses Framer Motion for animations. Ensure framer-motion is installed: npm install framer-motion" : ""}

## File Location

\`${componentCodePath}\`

## Code Structure

The component is implemented as a React functional component using TypeScript. It follows modern React patterns including:
- Functional components with hooks
- TypeScript for type safety
- Tailwind CSS for styling
- Framer Motion for animations (where applicable)

${hasAnimations ? "\n## Animation Details\n\nThis component includes animations powered by Framer Motion. The animations are designed to:\n- Provide smooth, natural-feeling transitions\n- Enhance user experience without being distracting\n- Maintain 60fps performance\n- Support reduced motion preferences\n\nAnimation timing and easing can typically be customized through props or CSS variables.\n" : ""}

## Best Practices

1. **Styling**: The component uses Tailwind CSS for styling. Customize colors, spacing, and other design tokens through Tailwind classes or CSS variables.

2. **Theming**: Supports dark/light mode through CSS variables defined in your theme configuration. Ensure your globals.css includes the necessary CSS variables.

3. **Accessibility**:
   - Ensure proper ARIA labels are maintained when customizing
   - Test keyboard navigation
   - Verify screen reader compatibility
   - Support reduced motion preferences

4. **Performance**:
   - The component is optimized for performance
   - Consider lazy loading if used in large lists or below-the-fold content
   - Use React.memo if the component is re-rendered frequently

5. **Customization**:
   - Props allow for customization without modifying source code
   - Tailwind classes can be extended or overridden
   - Animation parameters can be adjusted through props

## AI Agent Notes

### When to Use This Component
This component is suitable for:
- Building modern, interactive web applications
- Creating engaging user interfaces with smooth animations
- Implementing accessible UI patterns
- Developing production-ready features quickly

### Implementation Considerations
When integrating this component, consider:
1. **Dependencies**: Ensure all required dependencies are installed (${dependencies.length > 0 ? dependencies.join(", ") : "none"})
2. **Setup**: ${usesShadcn ? "Initialize shadcn/ui if not already done" : "No additional setup required"}
3. **Props**: Review the props interface for customization options
4. **Styling**: Verify your Tailwind configuration matches the component's requirements
5. **Accessibility**: Test with keyboard navigation and screen readers
6. **Performance**: Monitor performance impact, especially if using multiple instances

### Common Use Cases
${componentCategory === "blocks" ? "- Landing page sections\n- Portfolio showcases\n- Marketing pages\n- Content sections" : componentCategory === "components" ? "- Interactive UI elements\n- Form components\n- Navigation elements\n- Data display components" : componentCategory === "microinteractions" ? "- Button interactions\n- Toggle switches\n- Icon animations\n- Hover effects" : "- General UI components\n- Interactive elements\n- Animated sections"}

### Troubleshooting
- If animations don't work, verify Framer Motion is installed
- If styles look incorrect, check Tailwind configuration
- If shadcn components are missing, install them via npx shadcn-ui@latest add [component-name]
- For TypeScript errors, ensure all types are properly imported
`;

        // Write markdown file
        const outputPath = path.join(PUBLIC_MD_DIR, `${componentName}.md`);
        fs.writeFileSync(outputPath, markdown, "utf-8");
        successCount++;
      } catch (error) {
        console.error(
          `Error processing component ${item.name || "unknown"}:`,
          error
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
    console.error("Error generating markdown files:", error);
    process.exit(1);
  }
}

// Run the script
generateComponentMarkdown();
