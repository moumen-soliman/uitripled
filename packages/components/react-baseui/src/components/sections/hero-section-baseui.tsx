"use client";

import { Button } from "@base-ui/react/button";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSectionBaseui() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex min-h-[500px] flex-col items-center justify-center px-4 py-16 text-center"
    >
      <motion.div variants={itemVariants} className="mb-4">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm font-medium text-muted-foreground">
          <Sparkles className="h-4 w-4" />
          New Features Available
        </span>
      </motion.div>

      <motion.h1
        variants={itemVariants}
        className="mb-6 text-5xl font-bold tracking-tight md:text-7xl"
      >
        Build Amazing
        <br />
        <span className="bg-gradient-to-r from-foreground to-foreground/55 bg-clip-text text-transparent">
          User Experiences
        </span>
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="mb-8 max-w-2xl text-lg text-muted-foreground"
      >
        Create stunning, animated interfaces with our collection of
        production-ready components. Built with React, Framer Motion, and
        TailwindCSS.
      </motion.p>

      <motion.div variants={itemVariants} className="flex gap-4">
        <Button className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
          Get Started
          <ArrowRight className="h-4 w-4" />
        </Button>
        <Button className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
          View Demo
        </Button>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="mt-12 flex items-center gap-8 text-sm text-muted-foreground"
      >
        <div>
          <div className="text-2xl font-bold text-foreground">
            10k+
          </div>
          <div>Downloads</div>
        </div>
        <div className="h-8 w-px bg-border" />
        <div>
          <div className="text-2xl font-bold text-foreground">50+</div>
          <div>Components</div>
        </div>
        <div className="h-8 w-px bg-border" />
        <div>
          <div className="text-2xl font-bold text-foreground">
            100%
          </div>
          <div>Open Source</div>
        </div>
      </motion.div>
    </motion.div>
  );
}
