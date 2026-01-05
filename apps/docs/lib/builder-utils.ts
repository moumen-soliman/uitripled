import type {
  BuilderProjectPage,
  SavedProject,
  SavedProjectPage,
} from "@/types/builder";

export const sanitizeSlug = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 48);

export function generateUniqueSlug(
  baseName: string,
  existingSlugs: string[]
): string {
  const baseSlug = sanitizeSlug(baseName) || "page";
  if (!existingSlugs.includes(baseSlug)) {
    return baseSlug;
  }

  let attempt = 2;
  let candidate = `${baseSlug}-${attempt}`;
  while (existingSlugs.includes(candidate)) {
    attempt += 1;
    candidate = `${baseSlug}-${attempt}`;
  }

  return candidate;
}

export function createPage(
  name: string,
  existingSlugs: string[]
): BuilderProjectPage {
  const id =
    typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
      ? crypto.randomUUID()
      : `page-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

  const slug = generateUniqueSlug(name, existingSlugs);

  return {
    id,
    name,
    slug,
    components: [],
  };
}

export function extractSavedPages(project: SavedProject): SavedProjectPage[] {
  if (project.pages && project.pages.length > 0) {
    return project.pages;
  }

  return [
    {
      id:
        project.entryPageId ||
        `page-${sanitizeSlug(project.name || "landing") || "landing"}`,
      name: "Landing",
      slug: "landing",
      components: project.components ?? [],
      code: project.code,
    },
  ];
}

export function countSavedProjectComponents(project: SavedProject): number {
  return extractSavedPages(project).reduce(
    (total, page) => total + (page.components?.length ?? 0),
    0
  );
}
