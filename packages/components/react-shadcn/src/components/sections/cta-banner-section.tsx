"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  AnimatePresence,
  motion,
  MotionConfig,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { ArrowRight, ChevronRight, Sparkles, Zap } from "lucide-react";
import { useId, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const motionPresets = {
  smooth: { type: "spring" as const, bounce: 0.3, duration: 0.4 },
  bounce: { type: "spring" as const, bounce: 0.5, duration: 0.35 },
  fade: { type: "tween" as const, ease: [0.26, 0.08, 0.25, 1], duration: 0.2 },
};


const highlights = [
  { id: "highlight-free", label: "Free Forever", icon: Zap },
  { id: "highlight-credit", label: "No Credit Card", icon: Sparkles },
  { id: "highlight-oss", label: "Open Source", icon: ChevronRight },
];

interface CTABannerSectionProps {
  motionPreset?: keyof typeof motionPresets;
  className?: string;
}

export function CTABannerSection({
  motionPreset = "smooth",
  className,
}: CTABannerSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const shouldReduceMotion = useReducedMotion();
  const [hoveredButton, setHoveredButton] = useState<"primary" | "secondary" | null>(null);

  const titleId = useId();
  const descriptionId = useMemo(() => `${titleId}-description`, [titleId]);

  const reducedMotionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const containerVariants: Variants = useMemo(
    () =>
      shouldReduceMotion
        ? reducedMotionVariants
        : {
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          },
    [shouldReduceMotion]
  );

  const itemVariants: Variants = useMemo(
    () =>
      shouldReduceMotion
        ? reducedMotionVariants
        : {
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.4 },
            },
          },
    [shouldReduceMotion]
  );

  // Button micro-interaction variants
  const buttonVariants: Variants = {
    idle: { y: 0 },
    hover: { y: -4 },
    tap: { y: 0, scale: 0.98 },
  };

  return (
    <MotionConfig
      transition={shouldReduceMotion ? { duration: 0 } : motionPresets[motionPreset]}
      reducedMotion="user"
    >
      <section
        ref={ref}
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className={cn("relative w-full overflow-hidden px-4 py-5 sm:px-6 md:px-8 lg:py-5", className)}
      >

        <div className="mx-auto max-w-5xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6 md:space-y-8 lg:space-y-12"
          >
            {/* Main CTA Card - Dashboard style */}
            <motion.div
              variants={itemVariants}
              whileHover={shouldReduceMotion ? {} : { y: -4 }}
              transition={{ duration: 0.2 }}
              className="group relative overflow-hidden rounded-2xl border border-border/40 bg-background/60 p-6 backdrop-blur transition-all hover:border-border/60 hover:shadow-lg sm:p-8 md:p-10 lg:p-12"
              role="article"
            >
              {/* Hover gradient overlay - dashboard pattern */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative space-y-5 text-center md:space-y-6 lg:space-y-8">
                {/* Status Badge - Dashboard style with live indicator */}
                <motion.div variants={itemVariants} className="flex justify-center">
                  <Badge
                    variant="outline"
                    className="inline-flex items-center gap-2 rounded-full border-border/50 bg-background/55 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-foreground/70 backdrop-blur sm:px-4 sm:py-1.5 sm:text-xs"
                    aria-label="Component library status"
                  >
                    <motion.span
                      className="h-1.5 w-1.5 rounded-full bg-emerald-500 sm:h-2 sm:w-2"
                      aria-hidden
                      {...(shouldReduceMotion
                        ? {}
                        : {
                            animate: { opacity: [1, 0.5, 1] },
                            transition: { duration: 2, repeat: Infinity },
                          })}
                    />
                    Ready to Ship
                  </Badge>
                </motion.div>

                {/* Heading - Vercel style typography */}
                <motion.div variants={itemVariants} className="space-y-3 md:space-y-4">
                  <h2
                    id={titleId}
                    className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl"
                  >
                    Ready to ship motion-rich UIs in minutes?
                  </h2>
                  <p
                    id={descriptionId}
                    className="mx-auto max-w-2xl text-sm text-foreground/70 sm:text-base md:text-lg"
                  >
                    Access a curated library of glassmorphic components,
                    production-grade motion recipes, and accessibility-first
                    patterns. Start building products that feel alive.
                  </p>
                </motion.div>

                {/* CTA Buttons - Dashboard toolbar style */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col items-center justify-center gap-3 sm:flex-row"
                  role="toolbar"
                  aria-label="Call to action"
                >
                  <motion.div
                    variants={buttonVariants}
                    initial="idle"
                    whileHover={shouldReduceMotion ? {} : "hover"}
                    whileTap={shouldReduceMotion ? {} : "tap"}
                    onHoverStart={() => setHoveredButton("primary")}
                    onHoverEnd={() => setHoveredButton(null)}
                    transition={{ duration: 0.2 }}
                    className="w-full sm:w-auto"
                  >
                    <Button
                      size="lg"
                      className="group/btn w-full gap-2 rounded-full bg-foreground px-6 py-5 text-background shadow-lg transition-all hover:shadow-xl sm:w-auto sm:px-8 sm:py-6"
                    >
                      <span className="text-xs font-semibold uppercase tracking-[0.1em] sm:text-sm">
                        Get Started
                      </span>
                      <motion.span
                        aria-hidden
                        className="inline-flex"
                        animate={
                          shouldReduceMotion
                            ? {}
                            : hoveredButton === "primary"
                              ? { x: 4 }
                              : { x: 0 }
                        }
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
                    </Button>
                  </motion.div>

                  <motion.div
                    variants={buttonVariants}
                    initial="idle"
                    whileHover={shouldReduceMotion ? {} : "hover"}
                    whileTap={shouldReduceMotion ? {} : "tap"}
                    transition={{ duration: 0.2 }}
                    className="w-full sm:w-auto"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full rounded-full border-border/40 bg-background/60 px-6 py-5 backdrop-blur transition-all hover:border-border/60 hover:bg-background/70 sm:w-auto sm:px-8 sm:py-6"
                    >
                      <span className="text-xs font-semibold uppercase tracking-[0.1em] text-foreground/70 group-hover:text-foreground sm:text-sm">
                        View Docs
                      </span>
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Feature highlights - Dashboard metric cards style */}
            <motion.div
              variants={itemVariants}
              className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-4"
              role="list"
              aria-label="Key features"
            >
              <AnimatePresence mode="popLayout">
                {highlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.id}
                      layout={!shouldReduceMotion}
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: shouldReduceMotion ? 0 : 0.4 + index * 0.1,
                        duration: 0.4,
                      }}
                      whileHover={shouldReduceMotion ? {} : { y: -4 }}
                      className="group relative overflow-hidden rounded-xl border border-border/40 bg-background/60 p-4 backdrop-blur transition-all hover:border-border/60 hover:shadow-lg md:rounded-2xl md:p-6"
                      role="listitem"
                    >
                      {/* Hover gradient */}
                      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      <div className="relative flex items-center gap-3 md:gap-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 md:h-10 md:w-10">
                          <Icon
                            className="h-4 w-4 text-primary md:h-5 md:w-5"
                            aria-hidden
                          />
                        </div>
                        <div className="min-w-0 space-y-0.5 md:space-y-1">
                          <p className="truncate text-xs font-semibold uppercase tracking-[0.1em] text-foreground sm:text-sm sm:tracking-[0.15em]">
                            {item.label}
                          </p>
                          <p className="text-[10px] text-foreground/60 sm:text-xs">
                            No strings attached
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>

            {/* Trust statement - Vercel subtle footer */}
            <motion.p
              variants={itemVariants}
              className="text-center text-[10px] uppercase tracking-[0.2em] text-foreground/40 sm:text-xs sm:tracking-[0.25em]"
              aria-label="Trust statement"
            >
              Trusted by teams shipping dashboards, finance tools, and modern SaaS
            </motion.p>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
