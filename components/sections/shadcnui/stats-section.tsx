"use client";

import { Card } from "@/components/ui/card";
import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { Award, TrendingUp, Users, Zap } from "lucide-react";
import { useId, useMemo, useRef } from "react";

const stats = [
  {
    icon: Users,
    value: "52K+",
    label: "Active teams",
    description: "Shipping motion-led products every month.",
  },
  {
    icon: TrendingUp,
    value: "99.97%",
    label: "Realtime uptime",
    description: "Glassmorphic dashboards without the downtime.",
  },
  {
    icon: Award,
    value: "162",
    label: "Industry launches",
    description: "Recognized experiences powered by our system.",
  },
  {
    icon: Zap,
    value: "1,240+",
    label: "Reusable primitives",
    description: "Motion-ready components ready for your stack.",
  },
];

export function StatsSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });
  const shouldReduceMotion = useReducedMotion();

  const headingId = useId();
  const descriptionId = useMemo(() => `${headingId}-description`, [headingId]);

  const containerVariants: Variants = useMemo(
    () => ({
      hidden: {
        opacity: shouldReduceMotion ? 1 : 0,
        y: shouldReduceMotion ? 0 : 24,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: shouldReduceMotion
          ? { duration: 0 }
          : {
              duration: 0.6,
              ease: "easeOut",
              staggerChildren: 0.14,
              delayChildren: 0.12,
            },
      },
    }),
    [shouldReduceMotion]
  );

  const cardVariants: Variants = useMemo(
    () => ({
      hidden: {
        opacity: shouldReduceMotion ? 1 : 0,
        y: shouldReduceMotion ? 0 : 28,
        filter: shouldReduceMotion ? "none" : "blur(6px)",
      },
      visible: {
        opacity: 1,
        y: 0,
        filter: "none",
        transition: shouldReduceMotion
          ? { duration: 0 }
          : { type: "spring", mass: 0.8, stiffness: 160, damping: 24 },
      },
    }),
    [shouldReduceMotion]
  );

  const iconVariants: Variants = useMemo(
    () => ({
      hidden: {
        scale: shouldReduceMotion ? 1 : 0.6,
        opacity: shouldReduceMotion ? 1 : 0,
      },
      visible: {
        scale: 1,
        opacity: 1,
        transition: shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.45, ease: [0.18, 0.89, 0.32, 1.28] },
      },
    }),
    [shouldReduceMotion]
  );

  return (
    <section
      ref={ref}
      aria-labelledby={headingId}
      aria-describedby={descriptionId}
      className="relative overflow-hidden bg-background px-6 py-24 sm:px-8 lg:px-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute left-1/2 top-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-foreground/[0.04] blur-[160px]"
          {...(shouldReduceMotion
            ? {}
            : {
                animate: {
                  opacity: [0.25, 0.55, 0.25],
                  scale: [0.92, 1.08, 0.95],
                },
                transition: {
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              })}
        />
        <motion.div
          className="absolute bottom-[-12%] right-[-8%] h-[380px] w-[380px] rounded-full bg-primary/[0.04] blur-[150px]"
          {...(shouldReduceMotion
            ? {}
            : {
                animate: { opacity: [0.2, 0.45, 0.2], rotate: [0, 10, 0] },
                transition: { duration: 12, repeat: Infinity, ease: "linear" },
              })}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mx-auto flex w-full max-w-6xl flex-col items-center text-center"
      >
        <motion.div className="space-y-5">
          <motion.span className="inline-flex items-center gap-3 rounded-full border border-border/40 bg-background/50 px-5 py-2 text-xs uppercase tracking-[0.25em] text-foreground/70 backdrop-blur">
            Proof in metrics
            <span
              className="h-1.5 w-1.5 rounded-full bg-primary"
              aria-hidden="true"
            />
          </motion.span>
          <motion.h2
            id={headingId}
            className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            Trusted glassmorphism at product scale
          </motion.h2>
          <motion.p
            id={descriptionId}
            className="mx-auto max-w-3xl text-sm text-foreground/70 sm:text-base md:text-lg"
          >
            Teams ship faster when motion, accessibility, and theming live in
            the same toolkit. Here are the signals that matter.
          </motion.p>
        </motion.div>

        <motion.ul
          variants={containerVariants}
          role="list"
          className="mt-14 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.li
                key={stat.label}
                variants={cardVariants}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : {
                        delay: index * 0.08,
                        type: "spring",
                        stiffness: 150,
                        damping: 20,
                      }
                }
                className="group relative overflow-hidden rounded-2xl border border-border/40 bg-background/60 p-1 backdrop-blur transition-all hover:border-border/60 hover:shadow-lg focus-within:border-border/60"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <Card className="relative h-full border-0 bg-transparent p-6 text-left sm:p-7">
                  <motion.span
                    variants={iconVariants}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/20 text-primary"
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.span>
                  <dl className="mt-6 space-y-3">
                    <div>
                      <dt className="sr-only">{stat.label}</dt>
                      <dd className="text-3xl font-semibold text-foreground sm:text-4xl">
                        {stat.value}
                      </dd>
                    </div>
                    <div className="space-y-1">
                      <dd className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/70">
                        {stat.label}
                      </dd>
                      <dd className="text-sm leading-relaxed text-foreground/70">
                        {stat.description}
                      </dd>
                    </div>
                  </dl>
                </Card>
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>
    </section>
  );
}
