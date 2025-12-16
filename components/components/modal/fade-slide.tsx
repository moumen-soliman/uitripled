"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

export function FadeSlideModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-center p-12">
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-lg bg-accent px-8 py-3 font-semibold text-[var(--muted-foreground)] shadow-lg"
      >
        Open Modal
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bg-card left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border  bg-[var(--card-bg)] p-6 shadow-2xl"
            >
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold">Modal Title</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <p className="mb-6 text-[var(--foreground)]/70">
                This is a beautiful modal with fade and slide animation.
              </p>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-4 py-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg bg-accent px-4 py-2 text-[var(--muted-foreground)]"
                >
                  Confirm
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
