"use client";

import { getGapSliderIndex, getGapValueFromIndex } from "@/lib/grid-utils";
import { motion } from "framer-motion";

interface SettingsPanelProps {
  cols: number;
  maxCols?: number;
  maxGap?: number;
  gap: number;
  onColsChange: (cols: number) => void;
  onGapChange: (gap: number) => void;
}

export function SettingsPanel({
  cols,
  maxCols = 12,
  maxGap = 12,
  gap,
  onColsChange,
  onGapChange,
}: SettingsPanelProps) {
  const gapSliderMax = getGapSliderIndex(maxGap);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="group relative overflow-hidden rounded-2xl border border-border/40 bg-background/60 p-6 backdrop-blur transition-all hover:border-border/60 hover:shadow-lg"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10" />

      <div className="relative">
        <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-foreground mb-5">
          Settings
        </h2>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-3 flex justify-between text-foreground">
              <span>Columns</span>
              <span className="font-mono text-muted-foreground">{cols}</span>
            </label>
            <input
              type="range"
              min="2"
              max={maxCols}
              value={cols}
              onChange={(e) => onColsChange(parseInt(e.target.value))}
              className="w-full h-3 rounded-lg appearance-none cursor-pointer bg-muted accent-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-3 flex justify-between text-foreground">
              <span>Gap</span>
              <span className="font-mono text-muted-foreground">{gap}px</span>
            </label>
            <input
              type="range"
              min="0"
              max={gapSliderMax}
              value={getGapSliderIndex(gap)}
              onChange={(e) =>
                onGapChange(getGapValueFromIndex(parseInt(e.target.value)))
              }
              className="w-full h-3 rounded-lg appearance-none cursor-pointer bg-muted accent-primary"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
