// ============================================================================
// GRID UTILS - Functions and constants for grid generation
// ============================================================================

export interface GridCell {
  row: number;
  col: number;
  rowSpan: number;
  colSpan: number;
}

export interface BentoPreset {
  name: string;
  cols: number;
  rows: number;
  cells: GridCell[];
}

// ============================================================================
// GAP MAPPING - Custom gap values that skip 7, 9, 11
// ============================================================================

export const GAP_VALUES = [0, 1, 2, 3, 4, 5, 6, 8, 10, 12];

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Convert gap value to slider index
 */
export const getGapSliderIndex = (gapValue: number): number => {
  const index = GAP_VALUES.indexOf(gapValue);
  return index === -1 ? 0 : index;
};

/**
 * Convert slider index to gap value
 */
export const getGapValueFromIndex = (index: number): number => {
  return GAP_VALUES[Math.max(0, Math.min(GAP_VALUES.length - 1, index))];
};

/**
 * Generate Tailwind CSS grid code from cells
 */
export const generateGridCode = (
  cells: GridCell[],
  cols: number,
  gap: number,
  options?: { useClassName?: boolean; includeBg?: boolean }
): string => {
  const gapClass = `gap-${gap}`;
  const colsClass = `grid-cols-${cols}`;
  const classAttr = options?.useClassName === false ? "class" : "className";
  const bgBase =
    options?.includeBg === false ? "" : "bg-gray-100 dark:bg-gray-800 ";

  let code = `<div ${classAttr}="grid ${colsClass} ${gapClass} w-full">\n`;

  cells.forEach((cell, i) => {
    const colSpanClass = cell.colSpan > 1 ? ` col-span-${cell.colSpan}` : "";
    const rowSpanClass = cell.rowSpan > 1 ? ` row-span-${cell.rowSpan}` : "";
    code += `  <div ${classAttr}="${bgBase}p-6 rounded-lg${colSpanClass}${rowSpanClass}">\n`;
    code += `    <!-- Content ${i + 1} -->\n`;
    code += `  </div>\n`;
  });

  code += `</div>`;
  return code;
};

/**
 * Create initial grid cells
 */
export const initializeCells = (cols: number, rows: number): GridCell[] => {
  const newCells: GridCell[] = [];
  const occupied = new Set<string>();

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const key = `${row}-${col}`;
      if (!occupied.has(key)) {
        newCells.push({
          row,
          col,
          rowSpan: 1,
          colSpan: 1,
        });
        occupied.add(key);
      }
    }
  }

  return newCells;
};

/**
 * Get cell key for tracking
 */
export const getCellKey = (row: number, col: number): string => `${row}-${col}`;

/**
 * Check if a cell is in the current selection
 */
export const isCellInSelection = (
  row: number,
  col: number,
  selectedCells: string[]
): boolean => {
  return selectedCells.includes(getCellKey(row, col));
};
