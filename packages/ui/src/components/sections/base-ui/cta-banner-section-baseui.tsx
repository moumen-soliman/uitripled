"use client";

import { Button } from "@base-ui/react/button";
import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useId, useMemo, useRef } from "react";

const highlights = [
  { id: "highlight-free", label: "Free Forever", tone: "bg-emerald-400" },
  { id: "highlight-credit", label: "No Credit Card", tone: "bg-sky-400" },
  { id: "highlight-oss", label: "Open Source", tone: "bg-slate-400" },
];

export function CTABannerSectionBaseui() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const shouldReduceMotion = useReducedMotion();

  const titleId = useId();
  const descriptionId = useMemo(() => `${titleId}-description`, [titleId]);

  const containerVariants: Variants = useMemo(
    () => ({
      hidden: {
        opacity: shouldReduceMotion ? 1 : 0,
        y: shouldReduceMotion ? 0 : 16,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: shouldReduceMotion
          ? { duration: 0 }
          : {
              duration: 0.6,
              ease: "easeOut",
              staggerChildren: 0.18,
              delayChildren: 0.12,
            },
      },
    }),
    [shouldReduceMotion]
  );

  const itemVariants: Variants = useMemo(
    () => ({
      hidden: {
        opacity: shouldReduceMotion ? 1 : 0,
        y: shouldReduceMotion ? 0 : 24,
        filter: shouldReduceMotion ? "none" : "blur(4px)",
      },
      visible: {
        opacity: 1,
        y: 0,
        filter: "none",
        transition: shouldReduceMotion
          ? { duration: 0 }
          : { type: "spring", stiffness: 120, damping: 18, mass: 0.9 },
      },
    }),
    [shouldReduceMotion]
  );

  const arrowAnimation = shouldReduceMotion
    ? {}
    : {
        animate: { x: [0, 5, 0] },
        transition: { duration: 1.6, repeat: Infinity, ease: "easeInOut" },
      };

  return (
    <section
      ref={ref}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      className="w-full px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/80 text-card-foreground shadow-[0_10px_30px_rgba(2,6,23,0.7)] backdrop-blur-md transition-[transform,box-shadow] duration-500 hover:shadow-[0_25px_80px_rgba(15,23,36,0.45)]">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <motion.div
                className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/30 blur-3xl"
                {...(shouldReduceMotion
                  ? {}
                  : {
                      animate: {
                        opacity: [0.4, 0.75, 0.4],
                        scale: [0.9, 1.05, 0.9],
                      },
                      transition: {
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    })}
              />
              <motion.div
                className="absolute bottom-[-20%] right-[-10%] h-72 w-72 rounded-full bg-[rgba(59,130,246,0.45)] blur-[120px]"
                {...(shouldReduceMotion
                  ? {}
                  : {
                      animate: { opacity: [0.3, 0.6, 0.3], rotate: [0, 15, 0] },
                      transition: {
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                      },
                    })}
              />
            </div>
            <div className="relative z-10 flex flex-col gap-10 p-8 text-center sm:p-12">
              <motion.div
                variants={itemVariants}
                className="mx-auto inline-flex items-center gap-3 rounded-full border border-border/60 bg-white/5 px-6 py-3 text-sm font-medium text-muted-foreground backdrop-blur-sm"
              >
                <span
                  aria-hidden
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/20"
                >
                  <Sparkles className="h-5 w-5 text-primary" aria-hidden />
                </span>
                Build fluid, glassmorphic product experiences
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                <h2
                  id={titleId}
                  className="text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl"
                >
                  Ready to ship motion-rich UIs in minutes?
                </h2>
                <p
                  id={descriptionId}
                  className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg"
                >
                  Access a curated library of glassmorphic components,
                  production-grade motion recipes, and accessibility-first
                  patterns. Start building products that feel alive without
                  sacrificing performance.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center justify-center gap-4 sm:flex-row"
              >
                <Button className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-6 text-primary-foreground shadow-lg shadow-primary/30 transition-transform duration-300 hover:translate-y-[-2px] hover:shadow-xl">
                  Get Started
                  <motion.span
                    aria-hidden
                    className="inline-flex"
                    {...(arrowAnimation as Variants)}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </Button>
                <Button className="inline-flex items-center justify-center rounded-full border border-border/60 bg-white/5 px-8 py-6 text-muted-foreground transition-colors hover:bg-white/10">
                  View Documentation
                </Button>
              </motion.div>

              <motion.ul
                variants={itemVariants}
                className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
              >
                {highlights.map((item, index) => (
                  <li key={item.id} className="flex items-center gap-3">
                    <motion.span
                      aria-hidden
                      className={`inline-flex h-2.5 w-2.5 rounded-full ${item.tone}`}
                      {...(shouldReduceMotion
                        ? {}
                        : {
                            initial: { scale: 0 },
                            animate: { scale: 1 },
                            transition: {
                              delay: 0.4 + index * 0.12,
                              type: "spring",
                              stiffness: 220,
                            },
                          })}
                    />
                    <span>{item.label}</span>
                  </li>
                ))}
              </motion.ul>

              <motion.div
                variants={itemVariants}
                className="mx-auto max-w-xl text-xs text-muted-foreground/80"
              >
                Trusted by teams shipping dashboards, finance tools, and modern
                SaaS experiences.
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
