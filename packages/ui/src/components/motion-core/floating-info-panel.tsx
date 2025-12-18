"use client";

import { motion } from "framer-motion";
import { Info } from "lucide-react";

type FloatingInfoPanelProps = {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
};

export function FloatingInfoPanel({
  title = "Info Panel",
  description = "This is a floating information panel that gently drifts",
  icon,
}: FloatingInfoPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: [0, 1, 1, 0],
        y: [20, 0, -10, -20],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatDelay: 2,
        ease: "easeInOut",
      }}
      className="relative rounded-lg border border-border bg-card p-4 shadow-lg"
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          {icon || (
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Info className="h-4 w-4" />
            </div>
          )}
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-semibold">{title}</h4>
          <p className="mt-1 text-xs text-muted-foreground">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
