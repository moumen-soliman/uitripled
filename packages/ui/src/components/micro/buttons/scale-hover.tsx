"use client";

import { motion } from "framer-motion";

export function ScaleHoverButton() {
  return (
    <div className="flex items-center justify-center p-12">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="rounded-lg bg-accent px-8 py-3 font-semibold text-[var(--muted-foreground)] shadow-lg"
      >
        Hover Me
      </motion.button>
    </div>
  );
}
