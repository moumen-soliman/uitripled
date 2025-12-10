"use client";

import { motion } from "framer-motion";
import { Grid3x3, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GridCell } from "./grid-cell";
import type { GridCell as GridCellType } from "@/lib/grid-utils";
import { isCellInSelection } from "@/lib/grid-utils";

export interface GridPreviewProps {
  cells: GridCellType[];
  cols: number;
  rows: number;
  gap: number;
  selectedCells: string[];
  onMouseDown: (row: number, col: number) => void;
  onMouseEnter: (row: number, col: number) => void;
  onMouseUp: () => void;
  onMouseLeave: () => void;
  onAddCell: (row: number, col: number) => void;
  onResetGrid: () => void;
}

export function GridPreview({
  cells,
  cols,
  rows,
  gap,
  selectedCells,
  onMouseDown,
  onMouseEnter,
  onMouseUp,
  onMouseLeave,
  onAddCell,
  onResetGrid,
}: GridPreviewProps) {
  const startMap = new Map<string, GridCellType>();
  const occupied = new Set<string>();
  cells.forEach((cell) => {
    startMap.set(`${cell.row}-${cell.col}`, cell);
    for (let r = cell.row; r < cell.row + cell.rowSpan; r++) {
      for (let c = cell.col; c < cell.col + cell.colSpan; c++) {
        occupied.add(`${r}-${c}`);
      }
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="group relative overflow-hidden rounded-2xl border border-border/40 bg-background/60 p-8 backdrop-blur transition-all hover:border-border/60 hover:shadow-lg"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10" />
      <div className="relative">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-foreground flex items-center gap-2">
            <Grid3x3 className="w-5 h-5 text-primary" />
            Live Preview
          </h2>
          <Button
            variant="outline"
            size="sm"
            onClick={onResetGrid}
            className="gap-2 border-border/40 bg-background/60 backdrop-blur hover:border-border/60 hover:bg-background/70"
          >
            <RotateCcw className="h-4 w-4" />
            Reset Grid
          </Button>
        </div>
      </div>
      <div className="border-2 border-dashed border-border/60 bg-muted/30 rounded-xl p-8 relative overflow-hidden transition-colors duration-300">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px),
               linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />

        <div className="relative">
          <div
            className={`grid gap-${gap}`}
            style={{
              gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
              gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
            }}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}
          >
            {Array.from({ length: rows })
              .map((_, r) =>
                Array.from({ length: cols }).map((__, c) => {
                  const key = `${r}-${c}`;
                  const cell = startMap.get(key);
                  if (cell) {
                    return (
                      <GridCell
                        key={key}
                        cell={cell}
                        cols={cols}
                        rows={rows}
                        isInSelection={isCellInSelection(
                          cell.row,
                          cell.col,
                          selectedCells
                        )}
                        onMouseDown={onMouseDown}
                        onMouseEnter={onMouseEnter}
                      />
                    );
                  }
                  if (occupied.has(key)) {
                    return null;
                  }
                  return (
                    <button
                      key={key}
                      onClick={() => onAddCell(r, c)}
                      className="border-2 border-dashed border-border/50 rounded-lg bg-muted/10 hover:bg-muted/20 transition-colors text-muted-foreground flex items-center justify-center text-sm font-medium"
                    >
                      +
                    </button>
                  );
                })
              )
              .flat()}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
