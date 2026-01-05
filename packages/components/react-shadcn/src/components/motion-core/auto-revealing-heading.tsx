"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

type AutoRevealingHeadingProps = {
  text: string;
  splitBy?: "letter" | "word";
  delay?: number;
  className?: string;
};

export function AutoRevealingHeading({
  text = "Auto Revealing Heading",
  splitBy = "word",
  delay = 0.1,
  className = "",
}: AutoRevealingHeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const words = splitBy === "word" ? text.split(" ") : text.split("");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: delay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={itemVariants}
          className="inline-block"
          style={{ marginRight: splitBy === "word" ? "0.25em" : "0.1em" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
