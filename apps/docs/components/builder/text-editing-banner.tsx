"use client";

import { AnimatePresence, motion } from "framer-motion";

type TextEditingBannerProps = {
  show: boolean;
};

export function TextEditingBanner({ show }: TextEditingBannerProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="mx-4 mb-4 rounded-md border border-primary/30 bg-primary/10 p-3 text-sm text-primary"
        >
          Text editing mode enabled. Click highlighted text to edit. Dragging is
          disabled while this mode is active.
        </motion.div>
      )}
    </AnimatePresence>
  );
}
