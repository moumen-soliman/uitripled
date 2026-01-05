import fetch from "node-fetch";

const REGISTRY_BASE_URL = "https://ui.tripled.work/r";

export async function fetchComponent(componentName: string) {
  const url = `${REGISTRY_BASE_URL}/${componentName}.json`;
  const response = await fetch(url);

  if (!response.ok) {
    if (response.status === 404) {
      return null;
    }
    throw new Error(`Failed to fetch component: ${response.statusText}`);
  }

  return await response.json();
}
