"use client";

import { Badge } from "@/components/ui/badge";
import { motion, useReducedMotion } from "framer-motion";

export function HoverExpandCard() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="">
      <motion.div
        whileHover={shouldReduceMotion ? undefined : { y: -10, scale: 1.015 }}
        whileFocus={shouldReduceMotion ? undefined : { y: -10, scale: 1.015 }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
        className="group rounded-3xl border border-border/60 bg-card/80 p-6 backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_28px_90px_-40px_rgba(15,23,42,0.75)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        tabIndex={0}
        role="group"
        aria-label="Hover expand card demonstrating glassmorphic elevation."
      >
        <div className="relative mb-4 h-40 overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-foreground/10 via-background/40 to-transparent">
          <motion.div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(79,70,229,0.45),transparent_60%)] transition-transform duration-500"
            whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
          />
        </div>
        <Badge
          variant="outline"
          className="mb-3 w-fit rounded-full border-border/60 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
        >
          Feature
        </Badge>
        <h3 className="mb-2 text-xl font-semibold text-foreground">
          Beautiful Card
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Hover or focus to gently lift and expand the surface. Animations stay
          calm but responsive, matching the glassmorphic system.
        </p>
      </motion.div>
    </div>
  );
}
