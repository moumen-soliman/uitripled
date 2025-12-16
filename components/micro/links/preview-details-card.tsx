"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Transition,
  type Variants,
} from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useId, useMemo, useState } from "react";

const previewHighlights = [
  { label: "Owner", value: "Avery Nolan" },
  { label: "Status", value: "Sprint ready" },
  { label: "Last update", value: "4 hours ago" },
];

export function PreviewDetailsCard() {
  const [isActive, setIsActive] = useState(false);
  const previewId = useId();
  const descriptionId = useMemo(() => `${previewId}-description`, [previewId]);
  const shouldReduceMotion = useReducedMotion();

  const handleActivate = () => setIsActive(true);
  const handleDeactivate = () => setIsActive(false);

  const flyoutVariants: Variants = useMemo(
    () => ({
      hidden: {
        opacity: 0,
        y: shouldReduceMotion ? 0 : 12,
        scale: shouldReduceMotion ? 1 : 0.96,
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.28, ease: [0.19, 1, 0.22, 1] },
      },
      exit: {
        opacity: 0,
        y: shouldReduceMotion ? 0 : 8,
        scale: shouldReduceMotion ? 1 : 0.95,
        transition: shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
      },
    }),
    [shouldReduceMotion]
  );

  const hoverMotion = shouldReduceMotion ? undefined : { scale: 1.02, y: -2 };
  const hoverTransition = shouldReduceMotion
    ? { duration: 0 }
    : { type: "spring", stiffness: 420, damping: 34, mass: 0.7 };

  return (
    <section
      aria-labelledby={`${previewId}-title`}
      aria-describedby={descriptionId}
      className=""
    >
      <div className="relative w-full">
        <motion.a
          href="#"
          onClick={(event) => event.preventDefault()}
          onMouseEnter={handleActivate}
          onMouseLeave={handleDeactivate}
          onFocus={handleActivate}
          onBlur={handleDeactivate}
          className="group relative inline-flex w-full flex-col gap-4 rounded-3xl border border-border/60 bg-card/80 px-7 py-6 text-[var(--muted-foreground)] backdrop-blur-2xl transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:border-border"
          layout
          whileHover={hoverMotion}
          transition={hoverTransition as Transition}
        >
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.32em]">
            <span className="inline-flex items-center gap-2 text-[var(--muted-foreground)]/70">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15">
                <Sparkles className="h-4 w-4 text-primary" aria-hidden />
              </span>
              Workspace
            </span>
            <ArrowUpRight
              className="h-4 w-4 text-[var(--muted-foreground)]/70 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              aria-hidden
            />
          </div>

          <div className="space-y-2 text-left">
            <h3
              id={`${previewId}-title`}
              className="text-xl font-semibold text-[var(--muted-foreground)] sm:text-2xl"
            >
              Preview Details Card
            </h3>
            <p
              id={descriptionId}
              className="text-sm leading-relaxed text-[var(--muted-foreground)]"
            >
              Hover or focus to surface key workspace traits before diving into
              the full view.
            </p>
          </div>

          <span className="sr-only">
            Focus or hover to reveal the workspace summary panel that lists
            owner, status, and freshness details.
          </span>

          <AnimatePresence initial={false}>
            {isActive && (
              <motion.div
                key="preview"
                id={previewId}
                variants={flyoutVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="overflow-hidden rounded-2xl border border-border/60 bg-card/90 p-5 text-sm text-[var(--muted-foreground)] shadow-[0_25px_70px_-20px_rgba(15,23,42,0.5)]"
                role="region"
                aria-live="polite"
              >
                <div className="mb-4 flex items-center justify-between text-[11px] uppercase tracking-[0.36em] text-[var(--muted-foreground)]/70">
                  Preview
                  <span className="rounded-full bg-primary/15 px-3 py-1 text-[0.65rem] font-semibold text-primary/85">
                    instant
                  </span>
                </div>
                <ul className="space-y-3">
                  {previewHighlights.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-center justify-between gap-3 text-sm text-[var(--muted-foreground)]/80"
                    >
                      <span className="text-[11px] uppercase tracking-[0.28em] text-[var(--muted-foreground)]/70">
                        {item.label}
                      </span>
                      <span className="font-medium text-[var(--muted-foreground)]">
                        {item.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.a>
      </div>
    </section>
  );
}
