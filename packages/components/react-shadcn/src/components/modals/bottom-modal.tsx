"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { Sparkles, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function BottomModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Focus management: trap Tab inside the dialog, close on Escape,
  // lock body scroll, and restore focus to the trigger on close.
  useEffect(() => {
    if (!isModalOpen) return;

    const focusables = modalRef.current?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    focusables?.[0]?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
        return;
      }
      if (e.key !== "Tab" || !focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      triggerRef.current?.focus();
    };
  }, [isModalOpen]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="text-center space-y-8 w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Button
            ref={triggerRef}
            onClick={() => setIsModalOpen(true)}
            size="lg"
            aria-haspopup="dialog"
            aria-expanded={isModalOpen}
            className="gap-2 w-full rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Sparkles className="h-5 w-5" aria-hidden="true" />
            Open Bottom Modal
          </Button>
        </motion.div>

        <AnimatePresence>
          {isModalOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 h-full"
                onClick={() => setIsModalOpen(false)}
                aria-hidden="true"
              />

              {/* Modal */}
              <motion.div
                ref={modalRef}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{
                  y: "100%",
                  opacity: 0,
                  transition: { duration: 0.2, ease: [0.23, 1, 0.32, 1] },
                }}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 300,
                }}
                className="fixed bottom-0 right-0 left-0 mx-auto w-full md:max-w-md z-50"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
              >
                <div className="group relative overflow-hidden rounded-tl-2xl rounded-tr-2xl border border-border/40 bg-background/60 backdrop-blur shadow-lg">
                  {/* Gradient overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10" />

                  {/* Header */}
                  <div className="relative flex items-center justify-between p-4 border-b border-border/40">
                    <h3
                      id="modal-title"
                      className="text-lg font-semibold text-foreground"
                    >
                      Hello
                    </h3>
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="p-2 rounded-lg border border-border/40 bg-background/60 backdrop-blur hover:border-border/60 hover:bg-background/70 transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      aria-label="Close modal"
                    >
                      <X
                        aria-hidden="true"
                        className="h-5 w-5 text-foreground/70 hover:text-foreground"
                      />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="relative p-6 space-y-4">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                      className="text-center space-y-2"
                    >
                      <h4 className="text-xl font-semibold text-foreground">
                        Welcome to the Modal!
                      </h4>
                      <p
                        id="modal-description"
                        className="text-sm text-foreground/70"
                      >
                        This is a cute bottom-centered modal with smooth
                        animations powered by Framer Motion.
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                      className="flex gap-3"
                    >
                      <Button
                        variant="outline"
                        className="flex-1 rounded-lg border-border/40 bg-background/40 hover:bg-background/60"
                        onClick={() => setIsModalOpen(false)}
                      >
                        Cancel
                      </Button>
                      <Button
                        className="flex-1 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90"
                        onClick={() => setIsModalOpen(false)}
                      >
                        Got it!
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}
