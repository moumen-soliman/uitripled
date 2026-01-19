"use client";

import {
  AnimatePresence,
  motion,
  MotionConfig,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { Rocket, Shield, Zap } from "lucide-react";
import { useId, useMemo, useRef } from "react";
import { cn } from "@/lib/utils";

const motionPresets = {
  smooth: { type: "spring" as const, bounce: 0.3, duration: 0.4 },
  bounce: { type: "spring" as const, bounce: 0.5, duration: 0.35 },
  fade: { type: "tween" as const, ease: [0.26, 0.08, 0.25, 1] as const, duration: 0.2 },
};

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "GPU-accelerated pipelines and finely tuned transitions keep every interaction responsive.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description:
      "Enterprise-grade auth, encryption, and auditability woven through every flow.",
  },
  {
    icon: Rocket,
    title: "Effortlessly Scalable",
    description:
      "Composable primitives that adapt across teams, products, and global rollouts.",
  },
];

interface ScrollRevealProps {
  motionPreset?: keyof typeof motionPresets;
  className?: string;
}

export function ScrollReveal({
  motionPreset = "smooth",
  className,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });
  const shouldReduceMotion = useReducedMotion();

  const headingId = useId();
  const descriptionId = useMemo(() => `${headingId}-description`, [headingId]);

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

  const cardVariants: Variants = {
    idle: { y: 0 },
    hover: { y: -4 },
  };

  const iconVariants: Variants = useMemo(
    () =>
      shouldReduceMotion
        ? reducedMotionVariants
        : {
            hidden: { scale: 0.6, opacity: 0 },
            visible: {
              scale: 1,
              opacity: 1,
              transition: { duration: 0.4, ease: [0.18, 0.89, 0.32, 1.28] },
            },
          },
    [shouldReduceMotion]
  );

  return (
    <MotionConfig
      transition={shouldReduceMotion ? { duration: 0 } : motionPresets[motionPreset]}
      reducedMotion="user"
    >
      <section
        ref={ref}
        aria-labelledby={headingId}
        aria-describedby={descriptionId}
        className={cn("relative w-full overflow-hidden px-4 py-12 sm:px-6 md:px-8 md:py-16 lg:py-20", className)}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto flex w-full max-w-5xl flex-col items-center text-center"
        >
          {/* Header section */}
          <motion.div variants={itemVariants} className="space-y-3 md:space-y-4">
            <motion.span
              className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/55 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-foreground/70 backdrop-blur sm:px-4 sm:py-1.5 sm:text-xs sm:tracking-[0.32em]"
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
            >
              Core System
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
            </motion.span>
            <motion.h2
              id={headingId}
              className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl"
            >
              Features that elevate every launch
            </motion.h2>
            <motion.p
              id={descriptionId}
              className="mx-auto max-w-2xl text-sm text-foreground/70 sm:text-base md:text-lg"
            >
              A glassmorphic toolkit engineered for motion-rich dashboards,
              glowing handoffs, and resilient product experiences at scale.
            </motion.p>
          </motion.div>

          {/* Feature cards grid */}
          <motion.ul
            variants={itemVariants}
            className="mt-8 grid w-full grid-cols-1 gap-3 sm:grid-cols-2 md:mt-12 md:gap-4 lg:mt-14 lg:grid-cols-3 lg:gap-6"
            role="list"
            aria-label="Features"
          >
            <AnimatePresence mode="popLayout">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.li
                    key={feature.title}
                    layout={!shouldReduceMotion}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: shouldReduceMotion ? 0 : 0.3 + index * 0.1,
                      duration: 0.4,
                    }}
                    whileHover={shouldReduceMotion ? {} : "hover"}
                    variants={cardVariants}
                    className="group relative overflow-hidden rounded-xl border border-border/40 bg-background/60 p-4 text-left backdrop-blur transition-all hover:border-border/60 hover:shadow-lg md:rounded-2xl md:p-6"
                  >
                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Icon container */}
                    <motion.div
                      variants={iconVariants}
                      className="relative mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 md:mb-5 md:h-12 md:w-12"
                    >
                      <Icon
                        className="h-4 w-4 text-primary md:h-5 md:w-5"
                        aria-hidden
                      />
                    </motion.div>

                    {/* Content */}
                    <div className="relative space-y-1.5 md:space-y-2">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-foreground sm:text-base sm:tracking-[0.15em] md:text-lg md:normal-case md:tracking-tight">
                        {feature.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-foreground/60 sm:text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </AnimatePresence>
          </motion.ul>
        </motion.div>
      </section>
    </MotionConfig>
  );
}

