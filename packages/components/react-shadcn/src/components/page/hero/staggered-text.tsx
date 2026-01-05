"use client";

import { motion, type Variants } from "framer-motion";

const text = ["Build", "beautiful", "experiences"];

const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const headingVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.12,
      when: "beforeChildren",
    },
  },
};

export function StaggeredHero() {
  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="flex items-center justify-center p-12">
      <motion.div
        variants={heroContainer}
        initial="hidden"
        animate="visible"
        className="text-center"
      >
        <motion.h1
          variants={headingVariant}
          className="mb-2 text-4xl font-bold md:text-6xl"
          aria-label={text.join(" ")}
        >
          <span className="flex flex-col gap-2 md:gap-3">
            {text.map((word, index) => (
              <motion.span
                key={word + index}
                variants={item}
                className="block"
                aria-hidden="true"
              >
                {word}
              </motion.span>
            ))}
          </span>
          <span className="sr-only">{text.join(" ")}</span>
        </motion.h1>
        <motion.p
          variants={item}
          className="mt-4 text-lg text-[var(--foreground)]/70"
        >
          With smooth animations
        </motion.p>
      </motion.div>
    </div>
  );
}
