"use client";

import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";

export function ShimmerButton() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex items-center justify-center p-12">
      <Button className="relative overflow-hidden bg-accent text-accent-foreground hover:bg-accent/90">
        <span className="relative z-10">Shimmer Effect</span>
        <motion.div
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
          aria-hidden="true"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: ["100%", "-100%"],
                }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }
          }
        />
      </Button>
    </div>
  );
}
