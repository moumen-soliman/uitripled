"use client";

import { motion, useReducedMotion } from "framer-motion";

const cards = [
  { title: "Card 1", description: "First card" },
  { title: "Card 2", description: "Second card" },
  { title: "Card 3", description: "Third card" },
];

export function AnimatedCardStackBaseUI() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative flex items-center justify-center px-8 py-16">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute left-1/2 top-10 h-56 w-56 -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]"
          animate={
            shouldReduceMotion
              ? undefined
              : { opacity: [0.25, 0.45, 0.25], scale: [0.9, 1.05, 0.95] }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 11, repeat: Infinity, ease: "easeInOut" }
          }
        />
        <motion.div
          className="absolute bottom-8 right-12 h-48 w-48 rounded-full bg-emerald-400/25 blur-[150px]"
          animate={
            shouldReduceMotion
              ? undefined
              : { opacity: [0.18, 0.35, 0.18], rotate: [0, 12, 0] }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 13, repeat: Infinity, ease: "linear" }
          }
        />
      </div>
      {cards.map((card, index) => {
        const baseScale = 1 - index * 0.04;
        const baseOffset = index * 18;
        const hoverMotion = shouldReduceMotion
          ? undefined
          : { scale: baseScale + 0.06, y: -20 };
        return (
          <motion.div
            key={card.title}
            initial={{ scale: baseScale, y: baseOffset, opacity: 0 }}
            animate={{ scale: baseScale, y: baseOffset, opacity: 1 }}
            whileHover={hoverMotion}
            whileFocus={hoverMotion}
            transition={{
              type: shouldReduceMotion ? "tween" : "spring",
              stiffness: 260,
              damping: 26,
              delay: index * 0.08,
            }}
            className="absolute w-64 rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            style={{ zIndex: cards.length - index }}
            tabIndex={0}
            aria-label={`${card.title}: ${card.description}. Hover or focus to expand this card.`}
            role="group"
          >
            {/* Card replacement */}
            <div className="rounded-3xl border border-border/60 bg-card/80 shadow-[0_20px_70px_-40px_rgba(15,23,42,0.7)] backdrop-blur-xl transition-shadow duration-300 group-hover:shadow-[0_26px_90px_-45px_rgba(15,23,42,0.8)]">
              {/* CardHeader replacement */}
              <div className="flex flex-col space-y-1.5 p-6">
                {/* CardTitle replacement */}
                <h3 className="text-base font-semibold text-foreground">
                  {card.title}
                </h3>
                {/* CardDescription replacement */}
                <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground/80">
                  {card.description}
                </p>
              </div>
              {/* CardContent replacement */}
              <div className="p-6 pt-0">
                <p className="text-sm text-muted-foreground">
                  Hover or focus to surface this panel and bring it to the
                  front.
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
