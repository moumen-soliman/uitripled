1:"$Sreact.fragment"
2:I[176430,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"default"]
a:I[897367,["/_next/static/chunks/d96012bcfc98706a.js","/_next/static/chunks/c1216787d4b31b65.js"],"OutletBoundary"]
b:"$Sreact.suspense"
3:T1cb6,"use client";

import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { Rocket, Shield, Zap } from "lucide-react";
import { useId, useMemo, useRef } from "react";

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

export function ScrollReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });
  const shouldReduceMotion = useReducedMotion();

  const headingId = useId();
  const descriptionId = useMemo(() => `${headingId}-description`, [headingId]);

  const containerVariants: Variants = useMemo(
    (): Variants => ({
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
          : { type: "spring", stiffness: 160, damping: 22, mass: 0.8 },
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
      className="relative w-full px-4 py-20 sm:px-6 lg:px-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <motion.div
          className="absolute left-3 top-12 h-48 w-48 rounded-full bg-primary/25 blur-[120px]"
          {...(shouldReduceMotion
            ? {}
            : {
                animate: {
                  opacity: [0.25, 0.6, 0.25],
                  scale: [0.9, 1.1, 0.95],
                },
                transition: {
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              })}
        />
        <motion.div
          className="absolute bottom-0 right-8 h-64 w-64 rounded-full bg-emerald-400/15 blur-[150px]"
          {...(shouldReduceMotion
            ? {}
            : {
                animate: { opacity: [0.2, 0.45, 0.2], scale: [0.95, 1.05, 1] },
                transition: { duration: 11, repeat: Infinity, ease: "linear" },
              })}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mx-auto flex w-full max-w-5xl flex-col items-center text-center"
      >
        <motion.div className="space-y-4">
          <motion.span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-[var(--muted-foreground)]">
            Core System
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          </motion.span>
          <motion.h2
            id={headingId}
            className="text-3xl font-semibold text-[var(--muted-foreground)] sm:text-4xl md:text-5xl"
          >
            Features that elevate every launch
          </motion.h2>
          <motion.p
            id={descriptionId}
            className="mx-auto max-w-2xl text-sm text-[var(--muted-foreground)] sm:text-base md:text-lg"
          >
            A glassmorphic toolkit engineered for motion-rich dashboards,
            glowing handoffs, and resilient product experiences at scale.
          </motion.p>
        </motion.div>

        <motion.ul
          variants={containerVariants}
          className="mt-14 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.li
                key={feature.title}
                variants={cardVariants}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : {
                        delay: index * 0.08,
                        type: "spring",
                        stiffness: 160,
                        damping: 20,
                      }
                }
                className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/80 p-6 text-left shadow-[0_25px_70px_-20px_rgba(15,23,42,0.55)] backdrop-blur-xl"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                >
                  <motion.div
                    className="absolute -right-8 top-4 h-32 w-32 rounded-full bg-primary/20 blur-[120px]"
                    {...(shouldReduceMotion
                      ? {}
                      : {
                          animate: {
                            opacity: [0.2, 0.5, 0.2],
                            rotate: [0, 12, 0],
                          },
                          transition: {
                            duration: 8 + index,
                            repeat: Infinity,
                            ease: "linear",
                          },
                        })}
                  />
                </div>
                <motion.div
                  variants={iconVariants}
                  className="relative mb-5 inline-flex rounded-xl border border-primary/20 bg-primary/10 p-3 text-primary"
                >
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
                </motion.div>
                <div className="relative space-y-3">
                  <h3 className="text-lg font-semibold text-[var(--muted-foreground)] sm:text-xl">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                    {feature.description}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>
    </section>
  );
}
4:T1c83,"use client";

import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { Rocket, Shield, Zap } from "lucide-react";
import { useId, useMemo, useRef } from "react";

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

export function ScrollRevealBaseui() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });
  const shouldReduceMotion = useReducedMotion();

  const headingId = useId();
  const descriptionId = useMemo(() => `${headingId}-description`, [headingId]);

  const containerVariants: Variants = useMemo(
    (): Variants => ({
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
          : { type: "spring", stiffness: 160, damping: 22, mass: 0.8 },
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
      className="relative w-full px-4 py-20 sm:px-6 lg:px-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <motion.div
          className="absolute left-3 top-12 h-48 w-48 rounded-full bg-primary/25 blur-[120px]"
          {...(shouldReduceMotion
            ? {}
            : {
                animate: {
                  opacity: [0.25, 0.6, 0.25],
                  scale: [0.9, 1.1, 0.95],
                },
                transition: {
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              })}
        />
        <motion.div
          className="absolute bottom-0 right-8 h-64 w-64 rounded-full bg-emerald-400/15 blur-[150px]"
          {...(shouldReduceMotion
            ? {}
            : {
                animate: { opacity: [0.2, 0.45, 0.2], scale: [0.95, 1.05, 1] },
                transition: { duration: 11, repeat: Infinity, ease: "linear" },
              })}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mx-auto flex w-full max-w-5xl flex-col items-center text-center"
      >
        <motion.div className="space-y-4">
          <motion.span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-muted-foreground">
            Core System
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          </motion.span>
          <motion.h2
            id={headingId}
            className="text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl"
          >
            Features that elevate every launch
          </motion.h2>
          <motion.p
            id={descriptionId}
            className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base md:text-lg"
          >
            A glassmorphic toolkit engineered for motion-rich dashboards,
            glowing handoffs, and resilient product experiences at scale.
          </motion.p>
        </motion.div>

        <motion.ul
          variants={containerVariants}
          className="mt-14 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.li
                key={feature.title}
                variants={cardVariants}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : {
                        delay: index * 0.08,
                        type: "spring",
                        stiffness: 160,
                        damping: 20,
                      }
                }
                className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/80 p-6 text-left shadow-[0_25px_70px_-20px_rgba(15,23,42,0.55)] backdrop-blur-xl"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                >
                  <motion.div
                    className="absolute -right-8 top-4 h-32 w-32 rounded-full bg-primary/20 blur-[120px]"
                    {...(shouldReduceMotion
                      ? {}
                      : {
                          animate: {
                            opacity: [0.2, 0.5, 0.2],
                            rotate: [0, 12, 0],
                          },
                          transition: {
                            duration: 8 + index,
                            repeat: Infinity,
                            ease: "linear",
                          },
                        })}
                  />
                </div>
                <motion.div
                  variants={iconVariants}
                  className="relative mb-5 inline-flex rounded-xl border border-primary/20 bg-primary/10 p-3 text-primary"
                >
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
                </motion.div>
                <div className="relative space-y-3">
                  <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>
    </section>
  );
}
5:T1cb6,"use client";

import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { Rocket, Shield, Zap } from "lucide-react";
import { useId, useMemo, useRef } from "react";

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

export function ScrollReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });
  const shouldReduceMotion = useReducedMotion();

  const headingId = useId();
  const descriptionId = useMemo(() => `${headingId}-description`, [headingId]);

  const containerVariants: Variants = useMemo(
    (): Variants => ({
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
          : { type: "spring", stiffness: 160, damping: 22, mass: 0.8 },
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
      className="relative w-full px-4 py-20 sm:px-6 lg:px-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <motion.div
          className="absolute left-3 top-12 h-48 w-48 rounded-full bg-primary/25 blur-[120px]"
          {...(shouldReduceMotion
            ? {}
            : {
                animate: {
                  opacity: [0.25, 0.6, 0.25],
                  scale: [0.9, 1.1, 0.95],
                },
                transition: {
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              })}
        />
        <motion.div
          className="absolute bottom-0 right-8 h-64 w-64 rounded-full bg-emerald-400/15 blur-[150px]"
          {...(shouldReduceMotion
            ? {}
            : {
                animate: { opacity: [0.2, 0.45, 0.2], scale: [0.95, 1.05, 1] },
                transition: { duration: 11, repeat: Infinity, ease: "linear" },
              })}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mx-auto flex w-full max-w-5xl flex-col items-center text-center"
      >
        <motion.div className="space-y-4">
          <motion.span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-[var(--muted-foreground)]">
            Core System
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          </motion.span>
          <motion.h2
            id={headingId}
            className="text-3xl font-semibold text-[var(--muted-foreground)] sm:text-4xl md:text-5xl"
          >
            Features that elevate every launch
          </motion.h2>
          <motion.p
            id={descriptionId}
            className="mx-auto max-w-2xl text-sm text-[var(--muted-foreground)] sm:text-base md:text-lg"
          >
            A glassmorphic toolkit engineered for motion-rich dashboards,
            glowing handoffs, and resilient product experiences at scale.
          </motion.p>
        </motion.div>

        <motion.ul
          variants={containerVariants}
          className="mt-14 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.li
                key={feature.title}
                variants={cardVariants}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : {
                        delay: index * 0.08,
                        type: "spring",
                        stiffness: 160,
                        damping: 20,
                      }
                }
                className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/80 p-6 text-left shadow-[0_25px_70px_-20px_rgba(15,23,42,0.55)] backdrop-blur-xl"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                >
                  <motion.div
                    className="absolute -right-8 top-4 h-32 w-32 rounded-full bg-primary/20 blur-[120px]"
                    {...(shouldReduceMotion
                      ? {}
                      : {
                          animate: {
                            opacity: [0.2, 0.5, 0.2],
                            rotate: [0, 12, 0],
                          },
                          transition: {
                            duration: 8 + index,
                            repeat: Infinity,
                            ease: "linear",
                          },
                        })}
                  />
                </div>
                <motion.div
                  variants={iconVariants}
                  className="relative mb-5 inline-flex rounded-xl border border-primary/20 bg-primary/10 p-3 text-primary"
                >
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
                </motion.div>
                <div className="relative space-y-3">
                  <h3 className="text-lg font-semibold text-[var(--muted-foreground)] sm:text-xl">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                    {feature.description}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>
    </section>
  );
}
0:{"buildId":"bFBIq5AO28jMw9-shWxSc","rsc":["$","$1","c",{"children":[["$","$L2",null,{"code":"$3","variantCodes":{},"baseId":"scroll-reveal","baseuiCode":"$4","shadcnuiCode":"$5"}],["$L6","$L7","$L8"],"$L9"]}],"loading":null,"isPartial":false}
6:["$","script","script-0",{"src":"/_next/static/chunks/caa50e77cf52fdaa.js","async":true}]
7:["$","script","script-1",{"src":"/_next/static/chunks/e0bc9c3a4105a6fe.js","async":true}]
8:["$","script","script-2",{"src":"/_next/static/chunks/48913bc585f72fa4.js","async":true}]
9:["$","$La",null,{"children":["$","$b",null,{"name":"Next.MetadataOutlet","children":"$@c"}]}]
c:null
