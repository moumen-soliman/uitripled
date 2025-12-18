"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Info } from "lucide-react";
import { useState } from "react";

export function AnimatedTooltip() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative">
        <motion.button
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
          className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-[var(--muted-foreground)]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Info className="h-4 w-4" />
          Hover me
        </motion.button>

        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95, x: "-50%" }}
              animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
              exit={{ opacity: 0, y: 10, scale: 0.95, x: "-50%" }}
              transition={{
                duration: 0.2,
                delay: 0.1,
              }}
              className="absolute bottom-full left-1/2 mb-2 w-48"
            >
              <div className="rounded-lg border  bg-[var(--card-bg)] p-3 shadow-lg">
                <p className="text-sm text-[var(--foreground)]">
                  This is a helpful tooltip with smooth animation and delay.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 border-b border-r  bg-[var(--card-bg)]"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
