import type {
  BuilderFreeCanvas,
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
    layoutMode: "stack",
  };
}

export const LANDING_PAGE_W = 1200;
export const GRID_COLUMNS = 12;
export const GRID_GUTTER = 24;
export const GRID_MARGIN = 24;
export const GRID_ROW = 8;
const GRID_INNER_W = LANDING_PAGE_W - GRID_MARGIN * 2;
const GRID_COL_W = (GRID_INNER_W - GRID_GUTTER * (GRID_COLUMNS - 1)) / GRID_COLUMNS;

/** Estimated component height (px) used for layout calculations. */
const ESTIMATED_H = 320;
/** Row height snapped to grid (320 / 8 = 40 rows → 320px). */
const ROW_HEIGHT = Math.round(ESTIMATED_H / GRID_ROW) * GRID_ROW; // 320

const DEFAULT_SPAN = 6;
const DEFAULT_WIDTH = Math.round(
  DEFAULT_SPAN * GRID_COL_W + (DEFAULT_SPAN - 1) * GRID_GUTTER
);

/** Full-width span for blocks (12 columns). */
const FULL_WIDTH = Math.round(
  GRID_COLUMNS * GRID_COL_W + (GRID_COLUMNS - 1) * GRID_GUTTER
);

/** Snap an arbitrary x value to the nearest column start. */
export function snapXToColumn(rawX: number): number {
  let best = GRID_MARGIN;
  let bestDist = Math.abs(rawX - best);
  for (let col = 0; col <= GRID_COLUMNS; col++) {
    const colX = GRID_MARGIN + col * (GRID_COL_W + GRID_GUTTER);
    const dist = Math.abs(rawX - colX);
    if (dist < bestDist) {
      best = colX;
      bestDist = dist;
    }
  }
  return best;
}

/** Snap a y value to the grid row. */
export function snapYToRow(rawY: number): number {
  return Math.round(rawY / GRID_ROW) * GRID_ROW;
}

/** Width that spans N columns. */
export function widthForSpan(span: number): number {
  const s = Math.max(1, Math.min(span, GRID_COLUMNS));
  return Math.round(s * GRID_COL_W + (s - 1) * GRID_GUTTER);
}

// ── Collision-aware auto-grid ────────────────────────────────────────────────

type Rect = { x: number; y: number; w: number; h: number };

function rectsOverlap(a: Rect, b: Rect): boolean {
  return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
}

/**
 * Find the next grid-snapped position that doesn't overlap any existing rects.
 *
 * Strategy:
 *  1. Try a 2-column stacking layout (left/right alternating), row by row.
 *  2. For each candidate, check overlap with all occupied rects.
 *  3. If overlapping, bump down by one ROW_HEIGHT and retry.
 *  4. Fallback: place below all existing components.
 */
export function findNextGridPosition(
  existingCanvases: BuilderFreeCanvas[],
  componentWidth?: number,
): BuilderFreeCanvas {
  const w = componentWidth ?? DEFAULT_WIDTH;
  const occupied: Rect[] = existingCanvases.map((fc) => ({
    x: fc.x,
    y: fc.y,
    w: fc.width ?? DEFAULT_WIDTH,
    h: ESTIMATED_H,
  }));

  const maxZ = existingCanvases.reduce(
    (acc, fc, i) => Math.max(acc, fc.zIndex ?? i),
    0
  );

  // Full-width components use column 0 only
  const isFullWidth = w >= FULL_WIDTH - 10;

  if (isFullWidth) {
    // Stack vertically, one per row, left-aligned at margin
    for (let row = 0; row < 50; row++) {
      const candidate: Rect = {
        x: GRID_MARGIN,
        y: GRID_MARGIN + row * ROW_HEIGHT,
        w,
        h: ESTIMATED_H,
      };
      if (!occupied.some((o) => rectsOverlap(candidate, o))) {
        return {
          x: candidate.x,
          y: snapYToRow(candidate.y),
          width: w,
          zIndex: maxZ + 1,
        };
      }
    }
  } else {
    // 2-column grid: try left lane, then right lane, row by row
    const leftX = GRID_MARGIN;
    const rightX = Math.round(
      GRID_MARGIN + DEFAULT_SPAN * (GRID_COL_W + GRID_GUTTER)
    );

    for (let row = 0; row < 50; row++) {
      const y = GRID_MARGIN + row * ROW_HEIGHT;

      // Try left lane first
      const leftCandidate: Rect = { x: leftX, y, w, h: ESTIMATED_H };
      if (!occupied.some((o) => rectsOverlap(leftCandidate, o))) {
        return {
          x: leftX,
          y: snapYToRow(y),
          width: w,
          zIndex: maxZ + 1,
        };
      }

      // Try right lane
      const rightCandidate: Rect = { x: rightX, y, w, h: ESTIMATED_H };
      if (!occupied.some((o) => rectsOverlap(rightCandidate, o))) {
        return {
          x: rightX,
          y: snapYToRow(y),
          width: w,
          zIndex: maxZ + 1,
        };
      }
    }
  }

  // Fallback: place below everything
  const maxY = occupied.reduce((acc, r) => Math.max(acc, r.y + r.h), 0);
  return {
    x: GRID_MARGIN,
    y: snapYToRow(maxY + GRID_ROW),
    width: w,
    zIndex: maxZ + 1,
  };
}

/** Default position for the n-th block on the free canvas (legacy, index-based). */
export function defaultFreeCanvasForIndex(index: number): BuilderFreeCanvas {
  const lane = index % 2;
  const row = Math.floor(index / 2);
  const x =
    lane === 0
      ? GRID_MARGIN
      : Math.round(
          GRID_MARGIN + DEFAULT_SPAN * (GRID_COL_W + GRID_GUTTER)
        );
  const y = GRID_MARGIN + row * ROW_HEIGHT;
  return {
    x,
    y,
    width: DEFAULT_WIDTH,
    zIndex: index,
  };
}

/** Assign free canvas coords to stack-only components (stack → free). */
export function assignFreeCanvasToComponents<
  T extends { freeCanvas?: BuilderFreeCanvas },
>(components: T[]): (T & { freeCanvas: BuilderFreeCanvas })[] {
  // Use collision-aware placement so components don't stack on top of each other
  const placed: BuilderFreeCanvas[] = [];
  return components.map((c) => {
    if (c.freeCanvas) {
      placed.push(c.freeCanvas);
      return { ...c, freeCanvas: c.freeCanvas };
    }
    const pos = findNextGridPosition(placed);
    placed.push(pos);
    return { ...c, freeCanvas: pos };
  });
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
