"use client";

import { CodeOutput } from "@/components/grid/code-output";
import { GridPreview } from "@/components/grid/grid-preview";
import { PresetsPanel } from "@/components/grid/presets-panel";
import { SettingsPanel } from "@/components/grid/settings-panel";
import {
  generateGridCode,
  getCellKey,
  initializeCells,
  type GridCell,
} from "@/lib/grid-utils";
import { motion, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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

type GridSnapshot = {
  cells: GridCell[];
  cols: number;
  rows: number;
  gap: number;
  useClassName: boolean;
  includeBg: boolean;
};

export default function TailwindGridGenerator() {
  const [cols, setCols] = useState(3);
  const [rows, setRows] = useState(3);
  const [gap, setGap] = useState(4);
  const [copied, setCopied] = useState(false);
  const [useClassName, setUseClassName] = useState(true);
  const [includeBg, setIncludeBg] = useState(true);
  const [cells, setCells] = useState<GridCell[]>([]);
  const [maxCols, setMaxCols] = useState(12);
  const [maxGap, setMaxGap] = useState(12);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<{
    row: number;
    col: number;
  } | null>(null);
  const [dragEnd, setDragEnd] = useState<{ row: number; col: number } | null>(
    null
  );
  const [selectedCells, setSelectedCells] = useState<string[]>([]);
  const [history, setHistory] = useState<GridSnapshot[]>([]);
  const [future, setFuture] = useState<GridSnapshot[]>([]);
  const isRestoringRef = useRef(false);

  const cloneCells = (cellsToClone: GridCell[]) =>
    cellsToClone.map((cell) => ({ ...cell }));

  const createSnapshot = (override?: Partial<GridSnapshot>): GridSnapshot => ({
    cells: cloneCells(override?.cells ?? cells),
    cols: override?.cols ?? cols,
    rows: override?.rows ?? rows,
    gap: override?.gap ?? gap,
    useClassName: override?.useClassName ?? useClassName,
    includeBg: override?.includeBg ?? includeBg,
  });

  const pushToHistory = () => {
    setHistory((prev) => [...prev, createSnapshot()]);
    setFuture([]);
  };

  const restoreSnapshot = (snapshot: GridSnapshot) => {
    isRestoringRef.current = true;
    setCols(snapshot.cols);
    setRows(snapshot.rows);
    setGap(snapshot.gap);
    setUseClassName(snapshot.useClassName);
    setIncludeBg(snapshot.includeBg);
    setCells(cloneCells(snapshot.cells));
    setSelectedCells([]);
    setIsDragging(false);
    setDragStart(null);
    setDragEnd(null);
  };

  const snapshotsEqual = (a: GridSnapshot, b: GridSnapshot) => {
    if (
      a.cols !== b.cols ||
      a.rows !== b.rows ||
      a.gap !== b.gap ||
      a.useClassName !== b.useClassName ||
      a.includeBg !== b.includeBg ||
      a.cells.length !== b.cells.length
    ) {
      return false;
    }

    for (let i = 0; i < a.cells.length; i++) {
      const cellA = a.cells[i];
      const cellB = b.cells[i];
      if (
        cellA.row !== cellB.row ||
        cellA.col !== cellB.col ||
        cellA.rowSpan !== cellB.rowSpan ||
        cellA.colSpan !== cellB.colSpan
      ) {
        return false;
      }
    }

    return true;
  };

  const handleUndo = () => {
    setHistory((prevHistory) => {
      if (!prevHistory.length) return prevHistory;

      const previous = prevHistory[prevHistory.length - 1];
      const currentSnapshot = createSnapshot();

      setFuture((prevFuture) => {
        // Only add if not already the first item in future
        if (
          prevFuture.length > 0 &&
          snapshotsEqual(prevFuture[0], currentSnapshot)
        ) {
          return prevFuture;
        }
        return [currentSnapshot, ...prevFuture];
      });

      restoreSnapshot(previous);

      return prevHistory.slice(0, -1);
    });
  };

  const handleRedo = () => {
    setFuture((prevFuture) => {
      if (!prevFuture.length) return prevFuture;

      const [next, ...rest] = prevFuture;
      const currentSnapshot = createSnapshot();

      setHistory((prevHistory) => {
        // Only add if not already the last item in history
        if (
          prevHistory.length > 0 &&
          snapshotsEqual(prevHistory[prevHistory.length - 1], currentSnapshot)
        ) {
          return prevHistory;
        }
        return [...prevHistory, currentSnapshot];
      });

      restoreSnapshot(next);

      return rest;
    });
  };

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
    pushToHistory();
    setCells((prev) => [...prev, { row, col, rowSpan: 1, colSpan: 1 }]);
  };

  // Update max columns based on viewport and clamp current cols
  useEffect(() => {
    const updateMaxCols = () => {
      const isMobile = window.innerWidth < 768;
      const nextMax = isMobile ? 6 : 12;
      setMaxCols(nextMax);
      setCols((prev) => Math.min(prev, nextMax));
    };

    updateMaxCols();
    window.addEventListener("resize", updateMaxCols);
    return () => window.removeEventListener("resize", updateMaxCols);
  }, []);

  // Update max gap based on viewport and clamp current gap
  useEffect(() => {
    const updateMaxGap = () => {
      const isMobile = window.innerWidth < 768;
      const nextMax = isMobile ? 6 : 12;
      setMaxGap(nextMax);
      setGap((prev) => Math.min(prev, nextMax));
    };

    updateMaxGap();
    window.addEventListener("resize", updateMaxGap);
    return () => window.removeEventListener("resize", updateMaxGap);
  }, []);

  // Initialize cells on mount and when cols/rows change
  useEffect(() => {
    if (isRestoringRef.current) {
      isRestoringRef.current = false;
      return;
    }

    setCells(initializeCells(cols, rows));
    setSelectedCells([]);
  }, [cols, rows]);

  const handlePointerDown = (row: number, col: number) => {
    setIsDragging(true);
    setDragStart({ row, col });
    setDragEnd({ row, col });
    setSelectedCells([getCellKey(row, col)]);
  };

  const handlePointerEnter = (row: number, col: number) => {
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

  const handlePointerEnd = () => {
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

    pushToHistory();
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

  const handleColsChange = (value: number) => {
    if (value === cols) return;
    pushToHistory();
    setCols(value);
  };

  const handleGapChange = (value: number) => {
    if (value === gap) return;
    pushToHistory();
    setGap(value);
  };

  const handleResetGrid = () => {
    pushToHistory();
    setCells(initializeCells(cols, rows));
    setSelectedCells([]);
    setIsDragging(false);
    setDragStart(null);
    setDragEnd(null);
  };

  const handleToggleUseClassName = (checked: boolean) => {
    if (checked === useClassName) return;
    pushToHistory();
    setUseClassName(checked);
  };

  const handleToggleIncludeBg = (checked: boolean) => {
    if (checked === includeBg) return;
    pushToHistory();
    setIncludeBg(checked);
  };

  const applyPreset = (preset: {
    cols: number;
    rows: number;
    cells: GridCell[];
  }) => {
    const targetCols = Math.min(preset.cols, maxCols);
    pushToHistory();
    isRestoringRef.current = true;
    setCols(targetCols);
    setRows(preset.rows);
    setCells(cloneCells(preset.cells));
    setSelectedCells([]);
    setIsDragging(false);
    setDragStart(null);
    setDragEnd(null);
  };

  const canUndo = history.length > 0;
  const canRedo = future.length > 0;

  return (
    <main className="container mx-auto relative min-h-screen overflow-hidden bg-background px-4 sm:px-6 md:px-0">
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
      <div className="relative px-6 py-8 lg:py-12 md:px-0">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid min-w-0 lg:grid-cols-4 gap-8"
          >
            {/* Sidebar Controls */}
            <div className="lg:col-span-1 space-y-6 min-w-0">
              <PresetsPanel onApplyPreset={applyPreset} />
              <SettingsPanel
                cols={cols}
                maxCols={maxCols}
                maxGap={maxGap}
                gap={gap}
                onColsChange={handleColsChange}
                onGapChange={handleGapChange}
              />
            </div>

            {/* Main Content */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-3 space-y-8 min-w-0"
            >
              <GridPreview
                cells={cells}
                cols={cols}
                rows={rows}
                gap={gap}
                selectedCells={selectedCells}
                onPointerDown={handlePointerDown}
                onPointerEnter={handlePointerEnter}
                onPointerUp={handlePointerEnd}
                onPointerLeave={handlePointerEnd}
                onAddCell={handleAddCell}
                onResetGrid={handleResetGrid}
                onUndo={handleUndo}
                onRedo={handleRedo}
                canUndo={canUndo}
                canRedo={canRedo}
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
                        onChange={(e) =>
                          handleToggleUseClassName(e.target.checked)
                        }
                      />
                      Use <code>className</code>
                    </label>
                    <label className="flex items-center gap-2 text-sm text-foreground/80">
                      <input
                        type="checkbox"
                        checked={includeBg}
                        onChange={(e) =>
                          handleToggleIncludeBg(e.target.checked)
                        }
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
