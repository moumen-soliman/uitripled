"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

type StaggeredHeroProps = {
  lines?: string[];
  tagline?: string | null;
  className?: string;
};

const DEFAULT_LINES = ["Build", "beautiful", "experiences"];

export function StaggeredHero({
  lines = DEFAULT_LINES,
  tagline = "With smooth animations",
  className = "",
}: StaggeredHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : // ~100ms between chunks: enough for the sequence to read as
          // hierarchy without making the reader wait on it.
          { staggerChildren: 0.1, when: "beforeChildren" },
    },
  };

  const item: Variants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : { duration: 0.5, ease: [0.2, 0, 0, 1] },
    },
  };

  const label = lines.join(" ");

  return (
    <div className={`flex items-center justify-center p-12 ${className}`}>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="text-center"
      >
        {/*
          The visible words are split for the stagger, so they are hidden from
          assistive tech and the heading carries one clean accessible name.
        */}
        <motion.h1
          variants={item}
          className="mb-2 text-balance text-4xl font-bold tracking-tight md:text-6xl"
          aria-label={label}
        >
          <span aria-hidden className="flex flex-col gap-2 md:gap-3">
            {lines.map((word, index) => (
              <motion.span key={`${word}-${index}`} variants={item} className="block">
                {word}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        {tagline && (
          <motion.p variants={item} className="mt-4 text-lg text-muted-foreground">
            {tagline}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}
