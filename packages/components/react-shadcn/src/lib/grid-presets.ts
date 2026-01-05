import type { BentoPreset } from "./grid-utils";

// ============================================================================
// BENTO GRID PRESETS
// ============================================================================

export const bentoPresets: BentoPreset[] = [
  {
    name: "Classic Bento",
    cols: 3,
    rows: 3,
    cells: [
      { row: 0, col: 0, rowSpan: 2, colSpan: 2 },
      { row: 0, col: 2, rowSpan: 1, colSpan: 1 },
      { row: 1, col: 2, rowSpan: 1, colSpan: 1 },
      { row: 2, col: 0, rowSpan: 1, colSpan: 1 },
      { row: 2, col: 1, rowSpan: 1, colSpan: 2 },
    ],
  },
  {
    name: "Feature Hero",
    cols: 4,
    rows: 3,
    cells: [
      { row: 0, col: 0, rowSpan: 2, colSpan: 3 },
      { row: 0, col: 3, rowSpan: 1, colSpan: 1 },
      { row: 1, col: 3, rowSpan: 2, colSpan: 1 },
      { row: 2, col: 0, rowSpan: 1, colSpan: 1 },
      { row: 2, col: 1, rowSpan: 1, colSpan: 2 },
    ],
  },
  {
    name: "Dashboard Pro",
    cols: 4,
    rows: 4,
    cells: [
      { row: 0, col: 0, rowSpan: 1, colSpan: 4 },
      { row: 1, col: 0, rowSpan: 2, colSpan: 2 },
      { row: 1, col: 2, rowSpan: 1, colSpan: 2 },
      { row: 2, col: 2, rowSpan: 1, colSpan: 1 },
      { row: 2, col: 3, rowSpan: 1, colSpan: 1 },
      { row: 3, col: 0, rowSpan: 1, colSpan: 1 },
      { row: 3, col: 1, rowSpan: 1, colSpan: 1 },
      { row: 3, col: 2, rowSpan: 1, colSpan: 2 },
    ],
  },
  {
    name: "Masonry Style",
    cols: 3,
    rows: 4,
    cells: [
      { row: 0, col: 0, rowSpan: 2, colSpan: 1 },
      { row: 0, col: 1, rowSpan: 1, colSpan: 2 },
      { row: 1, col: 1, rowSpan: 2, colSpan: 1 },
      { row: 1, col: 2, rowSpan: 1, colSpan: 1 },
      { row: 2, col: 0, rowSpan: 1, colSpan: 1 },
      { row: 2, col: 2, rowSpan: 2, colSpan: 1 },
      { row: 3, col: 0, rowSpan: 1, colSpan: 2 },
    ],
  },
  {
    name: "Portfolio Grid",
    cols: 5,
    rows: 3,
    cells: [
      { row: 0, col: 0, rowSpan: 2, colSpan: 2 },
      { row: 0, col: 2, rowSpan: 1, colSpan: 1 },
      { row: 0, col: 3, rowSpan: 1, colSpan: 2 },
      { row: 1, col: 2, rowSpan: 2, colSpan: 1 },
      { row: 1, col: 3, rowSpan: 1, colSpan: 2 },
      { row: 2, col: 0, rowSpan: 1, colSpan: 2 },
      { row: 2, col: 3, rowSpan: 1, colSpan: 2 },
    ],
  },
  {
    name: "Magazine Layout",
    cols: 4,
    rows: 3,
    cells: [
      { row: 0, col: 0, rowSpan: 3, colSpan: 2 },
      { row: 0, col: 2, rowSpan: 1, colSpan: 2 },
      { row: 1, col: 2, rowSpan: 1, colSpan: 1 },
      { row: 1, col: 3, rowSpan: 1, colSpan: 1 },
      { row: 2, col: 2, rowSpan: 1, colSpan: 2 },
    ],
  },
  {
    name: "App Interface",
    cols: 6,
    rows: 4,
    cells: [
      { row: 0, col: 0, rowSpan: 1, colSpan: 6 },
      { row: 1, col: 0, rowSpan: 3, colSpan: 1 },
      { row: 1, col: 1, rowSpan: 2, colSpan: 3 },
      { row: 1, col: 4, rowSpan: 3, colSpan: 2 },
      { row: 3, col: 1, rowSpan: 1, colSpan: 3 },
    ],
  },
  {
    name: "Content Hub",
    cols: 3,
    rows: 5,
    cells: [
      { row: 0, col: 0, rowSpan: 2, colSpan: 2 },
      { row: 0, col: 2, rowSpan: 1, colSpan: 1 },
      { row: 1, col: 2, rowSpan: 2, colSpan: 1 },
      { row: 2, col: 0, rowSpan: 1, colSpan: 1 },
      { row: 2, col: 1, rowSpan: 1, colSpan: 1 },
      { row: 3, col: 0, rowSpan: 2, colSpan: 1 },
      { row: 3, col: 1, rowSpan: 1, colSpan: 2 },
      { row: 4, col: 1, rowSpan: 1, colSpan: 2 },
    ],
  },
];
