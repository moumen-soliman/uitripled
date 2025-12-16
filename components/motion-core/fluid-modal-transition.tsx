"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import React, { useEffect, useState } from "react";

type FluidModalTransitionProps = {
  trigger?: React.ReactNode;
  title?: string;
  children?: React.ReactNode;
};

export function FluidModalTransition({
  trigger,
  title = "Modal Title",
  children,
}: FluidModalTransitionProps) {
  const [isOpen, setIsOpen] = useState(false);

  // If no trigger provided, auto-open for preview
  useEffect(() => {
    if (!trigger) {
      setIsOpen(true);
    }
  }, [trigger]);

  return (
    <>
      {trigger ? (
        <div onClick={() => setIsOpen(true)}>{trigger}</div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="rounded-lg bg-primary px-4 py-2 text-primary-foreground"
        >
          Open Modal
        </button>
      )}

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
            />

            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                layoutId="modal-content"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                className="relative w-full max-w-lg rounded-2xl border border-border bg-card p-6 shadow-2xl"
              >
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">{title}</h2>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-muted"
                  >
                    <X className="h-4 w-4" />
                  </motion.button>
                </div>

                <div>
                  {children || (
                    <div>
                      <p className="text-muted-foreground mb-4">
                        This is a fluid modal transition. The modal expands
                        smoothly from the trigger element.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Click the X button to close.
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
