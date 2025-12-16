"use client";

import { type GridCell as GridCellType } from "@/lib/grid-utils";

interface GridCellProps {
  cell: GridCellType;
  cols: number;
  rows: number;
  isInSelection: boolean;
  onPointerDown: (row: number, col: number) => void;
  onPointerEnter: (row: number, col: number) => void;
}

export function GridCell({
  cell,
  cols,
  isInSelection,
  onPointerDown,
  onPointerEnter,
}: GridCellProps) {
  return (
    <div
      onPointerDown={(event) => {
        event.preventDefault();
        onPointerDown(cell.row, cell.col);
      }}
      onPointerEnter={(event) => {
        if (event.buttons === 1) {
          onPointerEnter(cell.row, cell.col);
        }
      }}
      className={`relative bg-card border border-border rounded-lg p-3 sm:p-4 md:p-6 flex items-center justify-center font-bold cursor-crosshair select-none transition-all duration-200 ${
        isInSelection
          ? "ring-4 ring-primary ring-offset-2 scale-95 shadow-2xl"
          : "hover:scale-[1.02] hover:shadow-xl hover:border-border/60"
      }`}
      style={{
        gridColumn: cell.colSpan > 1 ? `span ${cell.colSpan}` : undefined,
        gridRow: cell.rowSpan > 1 ? `span ${cell.rowSpan}` : undefined,
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0z' fill='none'/%3E%3Cpath d='M0 0h1v1H0zM2 2h1v1H2zM4 4h1v1H4zM6 6h1v1H4zM6 6h1v1H6zM8 8h1v1H8zM10 10h1v1h-1zM12 12h1v1h-1zM14 14h1v1h-1zM16 16h1v1h-1zM18 18h1v1h-1z' fill='%236b7280' fill-opacity='0.1'/%3E%3C/svg%3E\")",
        backgroundSize: "20px 20px",
      }}
    >
      <div
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,.02) 10px, rgba(0,0,0,.02) 11px)",
        }}
      />

      <div className="text-center relative z-10">
        <div className="text-lg sm:text-xl md:text-2xl text-foreground">
          {cell.row * cols + cell.col + 1}
        </div>
        {(cell.colSpan > 1 || cell.rowSpan > 1) && (
          <div className="text-xs mt-1 font-mono text-muted-foreground">
            {cell.colSpan}×{cell.rowSpan}
          </div>
        )}
      </div>

      <div className="absolute top-1 left-1 w-2 h-2 border-l-2 border-t-2 border-border opacity-40"></div>
      <div className="absolute top-1 right-1 w-2 h-2 border-r-2 border-t-2 border-border opacity-40"></div>
      <div className="absolute bottom-1 left-1 w-2 h-2 border-l-2 border-b-2 border-border opacity-40"></div>
      <div className="absolute bottom-1 right-1 w-2 h-2 border-r-2 border-b-2 border-border opacity-40"></div>
    </div>
  );
}
