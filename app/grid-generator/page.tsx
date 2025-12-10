"use client";

import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import {
  generateGridCode,
  initializeCells,
  getCellKey,
  type GridCell,
} from "@/lib/grid-utils";
import { SettingsPanel } from "@/components/grid/settings-panel";
import { PresetsPanel } from "@/components/grid/presets-panel";
import { CodeOutput } from "@/components/grid/code-output";
import { GridPreview } from "@/components/grid/grid-preview";

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function TailwindGridGenerator() {
  const [cols, setCols] = useState(3);
  const [rows, setRows] = useState(3);
  const [gap, setGap] = useState(4);
  const [copied, setCopied] = useState(false);
  const [useClassName, setUseClassName] = useState(true);
  const [includeBg, setIncludeBg] = useState(true);
  const [cells, setCells] = useState<GridCell[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<{
    row: number;
    col: number;
  } | null>(null);
  const [dragEnd, setDragEnd] = useState<{ row: number; col: number } | null>(
    null
  );
  const [selectedCells, setSelectedCells] = useState<string[]>([]);

  const handleAddCell = (row: number, col: number) => {
    // prevent overlap with existing spans
    const occupied = new Set<string>();
    cells.forEach((cell) => {
      for (let r = cell.row; r < cell.row + cell.rowSpan; r++) {
        for (let c = cell.col; c < cell.col + cell.colSpan; c++) {
          occupied.add(getCellKey(r, c));
        }
      }
    });
    if (occupied.has(getCellKey(row, col))) return;
    setCells((prev) => [...prev, { row, col, rowSpan: 1, colSpan: 1 }]);
  };

  // Initialize cells on mount and when cols/rows change
  useEffect(() => {
    setCells(initializeCells(cols, rows));
    setSelectedCells([]);
  }, [cols, rows]);

  const handleMouseDown = (row: number, col: number) => {
    setIsDragging(true);
    setDragStart({ row, col });
    setDragEnd({ row, col });
    setSelectedCells([getCellKey(row, col)]);
  };

  const handleMouseEnter = (row: number, col: number) => {
    if (isDragging && dragStart) {
      setDragEnd({ row, col });

      const minRow = Math.min(dragStart.row, row);
      const maxRow = Math.max(dragStart.row, row);
      const minCol = Math.min(dragStart.col, col);
      const maxCol = Math.max(dragStart.col, col);

      const selected = [];
      for (let r = minRow; r <= maxRow; r++) {
        for (let c = minCol; c <= maxCol; c++) {
          selected.push(getCellKey(r, c));
        }
      }
      setSelectedCells(selected);
    }
  };

  const handleMouseUp = () => {
    if (!isDragging || !dragStart || !dragEnd) {
      setIsDragging(false);
      return;
    }

    const minRow = Math.min(dragStart.row, dragEnd.row);
    const maxRow = Math.max(dragStart.row, dragEnd.row);
    const minCol = Math.min(dragStart.col, dragEnd.col);
    const maxCol = Math.max(dragStart.col, dragEnd.col);

    const rowSpan = maxRow - minRow + 1;
    const colSpan = maxCol - minCol + 1;

    const newCells = cells.filter((cell) => {
      return !(
        cell.row >= minRow &&
        cell.row <= maxRow &&
        cell.col >= minCol &&
        cell.col <= maxCol
      );
    });

    newCells.push({
      row: minRow,
      col: minCol,
      rowSpan,
      colSpan,
    });

    newCells.sort((a, b) => {
      if (a.row !== b.row) return a.row - b.row;
      return a.col - b.col;
    });

    setCells(newCells);
    setIsDragging(false);
    setDragStart(null);
    setDragEnd(null);
    setSelectedCells([]);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(generateGridCode(cells, cols, gap));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const applyPreset = (preset: {
    cols: number;
    rows: number;
    cells: GridCell[];
  }) => {
    setCols(preset.cols);
    setRows(preset.rows);
    setTimeout(() => setCells(preset.cells), 0);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Glassmorphism background blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-foreground/[0.035] blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-foreground/[0.025] blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/[0.02] blur-[150px]" />
      </div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="border-b border-border/40 bg-background/40 backdrop-blur-md"
      >
        <div className="mx-auto max-w-7xl py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div>
                <h1 className="text-4xl font-semibold text-foreground tracking-tight">
                  Grid Generator
                </h1>
                <p className="text-foreground/70 text-lg font-medium mt-1">
                  Build powerful grid layouts in a few clicks
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="relative px-6 py-8 lg:py-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-4 gap-8"
          >
            {/* Sidebar Controls */}
            <div className="lg:col-span-1 space-y-6">
              <PresetsPanel onApplyPreset={applyPreset} />
              <SettingsPanel
                cols={cols}
                gap={gap}
                onColsChange={setCols}
                onGapChange={setGap}
              />
            </div>

            {/* Main Content */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-3 space-y-8"
            >
              <GridPreview
                cells={cells}
                cols={cols}
                rows={rows}
                gap={gap}
                selectedCells={selectedCells}
                onMouseDown={handleMouseDown}
                onMouseEnter={handleMouseEnter}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onAddCell={handleAddCell}
                onResetGrid={() => setCells(initializeCells(cols, rows))}
              />
              <CodeOutput
                code={generateGridCode(cells, cols, gap, {
                  useClassName,
                  includeBg,
                })}
                copied={copied}
                onCopyCode={copyCode}
                options={
                  <>
                    <label className="flex items-center gap-2 text-sm text-foreground/80">
                      <input
                        type="checkbox"
                        checked={useClassName}
                        onChange={(e) => setUseClassName(e.target.checked)}
                      />
                      Use <code>className</code>
                    </label>
                    <label className="flex items-center gap-2 text-sm text-foreground/80">
                      <input
                        type="checkbox"
                        checked={includeBg}
                        onChange={(e) => setIncludeBg(e.target.checked)}
                      />
                      Include background classes
                    </label>
                  </>
                }
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
