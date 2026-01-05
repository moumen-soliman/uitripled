"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

export function AnimatedDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const dialogAnimation = shouldReduceMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, scale: 0.97, y: 16 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.97, y: 16 },
      };

  return (
    <div>
      <Button className="w-full" onClick={() => setIsOpen(true)}>
        Open Dialog
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed inset-0 z-50 bg-background/70 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-10">
              <motion.div
                {...dialogAnimation}
                transition={{
                  duration: shouldReduceMotion ? 0.2 : 0.4,
                  ease: shouldReduceMotion ? "linear" : [0.16, 1, 0.3, 1],
                }}
                className="relative w-full max-w-md rounded-3xl border border-border/60 bg-card/90 p-6 shadow-[0_30px_120px_-40px_rgba(15,23,42,0.75)] backdrop-blur-xl"
                onClick={(event) => event.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="dialog-title"
                aria-describedby="dialog-description"
              >
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute right-4 top-4 rounded-full border border-border/40 bg-white/5 p-2 text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Close dialog"
                >
                  <motion.span
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : { rotate: [0, 15, -15, 0] }
                    }
                    transition={
                      shouldReduceMotion
                        ? undefined
                        : { duration: 1.8, repeat: Infinity, ease: "easeInOut" }
                    }
                  >
                    <X className="h-4 w-4" />
                  </motion.span>
                </button>

                <motion.div
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: shouldReduceMotion ? 0 : 0.08,
                    duration: 0.25,
                  }}
                >
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.28em] text-muted-foreground">
                    Confirm
                  </div>
                  <h2
                    id="dialog-title"
                    className="text-xl font-semibold text-foreground"
                  >
                    Confirm Action
                  </h2>
                  <p
                    id="dialog-description"
                    className="mt-2 text-sm leading-relaxed text-muted-foreground"
                  >
                    Are you sure you want to perform this action? This can’t be
                    undone and may affect related data.
                  </p>
                </motion.div>

                <motion.div
                  className="mt-6 flex gap-3"
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: shouldReduceMotion ? 0 : 0.14,
                    duration: 0.25,
                  }}
                >
                  <Button
                    variant="outline"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 rounded-full border-border/60 bg-card/60 text-foreground"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() => setIsOpen(false)}
                    className="flex-1 rounded-full bg-primary text-primary-foreground shadow-[0_15px_35px_-20px_rgba(79,70,229,0.6)]"
                  >
                    Confirm
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
