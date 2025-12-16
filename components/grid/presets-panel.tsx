"use client";

import { Button } from "@/components/ui/button";
import { bentoPresets } from "@/lib/grid-presets";
import type { BentoPreset } from "@/lib/grid-utils";
import { motion } from "framer-motion";

interface PresetsPanelProps {
  onApplyPreset: (preset: BentoPreset) => void;
}

export function PresetsPanel({ onApplyPreset }: PresetsPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-border/40 bg-background/60 p-6 backdrop-blur transition-all hover:border-border/60 hover:shadow-lg"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10" />
      <div className="relative">
        <div className="flex items-center gap-2 mb-5">
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-foreground">
            Presets
          </h2>
        </div>
        <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
          {bentoPresets.map((preset, idx) => (
            <Button
              key={idx}
              variant="ghost"
              onClick={() => onApplyPreset(preset)}
              className="w-full justify-between text-left border border-border/20 bg-background/40 p-3 transition-all hover:border-border/40 hover:bg-background/60"
            >
              <span className="text-sm font-medium text-foreground">
                {preset.name}
              </span>
              <span className="text-xs font-mono text-muted-foreground">
                {preset.cols}×{preset.rows}
              </span>
            </Button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
