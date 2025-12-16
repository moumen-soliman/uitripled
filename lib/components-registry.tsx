import { componentsRegistry } from "@/lib/registry";
import { Component, ComponentCategory } from "@/types";
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
      component.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
}

/**
 * Loads component code on demand
 * This is a Server Function and should be called from Server Components or Server Actions
 */
export async function loadComponentCode(component: Component): Promise<string> {
  if (component.code) {
    return component.code;
  }
  if (component.codePath) {
    return await getComponentCode(component.codePath);
  }
  throw new Error(`No code path found for component ${component.id}`);
}
