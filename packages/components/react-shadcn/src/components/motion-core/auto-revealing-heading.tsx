"use client";

import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import { useRef } from "react";

type AutoRevealingHeadingProps = {
  text?: string;
  splitBy?: "letter" | "word";
  delay?: number;
  /** Heading level. Defaults to 2 so the host page keeps its own h1. */
  as?: 1 | 2 | 3 | 4;
  className?: string;
};

export function AutoRevealingHeading({
  text = "Auto Revealing Heading",
  splitBy = "word",
  delay = 0.1,
  as = 2,
  className = "",
}: AutoRevealingHeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  const Heading = `h${as}` as "h1" | "h2" | "h3" | "h4";
  const pieces = splitBy === "word" ? text.split(" ") : text.split("");

  const containerVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: shouldReduceMotion ? { duration: 0 } : { staggerChildren: delay },
    },
  };

  const itemVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : { type: "spring", stiffness: 300, damping: 25, bounce: 0 },
    },
  };

  return (
    // Splitting the text into per-piece spans would otherwise be read out one
    // fragment at a time — letter-by-letter in "letter" mode. The heading
    // carries the whole string as its accessible name and the pieces are
    // hidden from assistive tech.
    <Heading ref={ref} className={className} aria-label={text}>
      <motion.span
        aria-hidden
        className="inline-block"
        variants={containerVariants}
        initial="hidden"
        animate={shouldReduceMotion || isInView ? "visible" : "hidden"}
      >
        {pieces.map((piece, index) => (
          <motion.span
            key={index}
            variants={itemVariants}
            className="inline-block"
            style={{ marginRight: splitBy === "word" ? "0.25em" : "0.1em" }}
          >
            {piece}
          </motion.span>
        ))}
      </motion.span>
    </Heading>
  );
}
