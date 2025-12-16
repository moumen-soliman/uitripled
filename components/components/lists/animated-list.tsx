"use client";

import { Card } from "@/components/ui/card";
import { motion, type Variants } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const checklistItems = [
  "Define the experience",
  "Design high-fidelity flows",
  "Develop interactive states",
  "Test accessibility scenarios",
  "Deploy with confidence",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const iconVariants: Variants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 16, delay: 0.1 },
  },
};

export function AnimatedList() {
  return (
    <div className="">
      <Card
        role="article"
        aria-label="Workflow checklist"
        className="group relative w-full overflow-hidden rounded-2xl border border-border/40 bg-background/60 p-6 backdrop-blur transition-all hover:border-border/60 hover:shadow-lg"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10" />

        <motion.div
          className="relative space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-foreground/70">
              Workflow
            </p>
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              Project Checklist
            </h3>
            <p className="text-sm text-foreground/70">
              Guide your team through each phase with confidence and clarity.
            </p>
          </div>

          <motion.ul
            role="list"
            aria-label="Project workflow steps"
            className="space-y-3"
            variants={containerVariants}
          >
            {checklistItems.map((item) => (
              <motion.li
                key={item}
                variants={listItemVariants}
                className="group/list flex items-center gap-3 rounded-xl border border-border/30 bg-background/40 p-3 transition-all duration-300 hover:border-border/50 hover:bg-background/60"
              >
                <motion.span
                  variants={iconVariants}
                  aria-hidden="true"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600 transition-colors dark:text-emerald-400"
                >
                  <CheckCircle2 className="h-4 w-4" />
                </motion.span>

                <span className="text-sm text-foreground">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </Card>
    </div>
  );
}
