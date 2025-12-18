import { componentsRegistry } from "@uitripled/registry";
import { Component, ComponentCategory } from "@uitripled/shared";
import { getComponentCode } from "./file-reader";

export { componentsRegistry };

export function getComponentById(id: string): Component | undefined {
  return componentsRegistry.find((component) => component.id === id);
}

export function getAnimationsByCategory(
  category: ComponentCategory
): Component[] {
  return componentsRegistry.filter(
    (component) => component.category === category
  );
}

export function searchComponents(query: string): Component[] {
  const lowerQuery = query.toLowerCase();
  return componentsRegistry.filter(
    (component) =>
      component.name.toLowerCase().includes(lowerQuery) ||
      component.description.toLowerCase().includes(lowerQuery) ||
      component.tags.some((tag: string) => tag.toLowerCase().includes(lowerQuery))
  );
}

/**
 * Transforms @uitripled/ui imports to @/ for manual copy-paste
 */
export function transformImports(code: string): string {
  return code
    .replace(/from "@uitripled\/ui\//g, 'from "@/')
    .replace(/import "@uitripled\/ui\//g, 'import "@/')
    .replace(/from '@uitripled\/ui\//g, "from '@/")
    .replace(/import '@uitripled\/ui\//g, "import '@/");
}

/**
 * Loads component code on demand
 * This is a Server Function and should be called from Server Components or Server Actions
 */
export async function loadComponentCode(component: Component): Promise<string> {
  let code = "";
  if (component.code) {
    code = component.code;
  } else if (component.codePath) {
    code = await getComponentCode(component.codePath);
  } else {
    throw new Error(`No code path found for component ${component.id}`);
  }

  return transformImports(code);
}
