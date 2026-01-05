"use client";

import { motion, type Variants } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, Compass, Flag, Rocket, Sparkles } from "lucide-react";

const steps = [
  {
    title: "Discovery & Strategy",
    description:
      "Align your team around a bold yet achievable product vision in just one workshop.",
    icon: Compass,
    time: "Week 1",
  },
  {
    title: "Design Sprint",
    description:
      "Translate insights into polished flows with daily feedback loops and rapid iteration.",
    icon: Sparkles,
    time: "Week 2",
  },
  {
    title: "Beta Launch",
    description:
      "Ship a confident release backed by telemetry and real user validation.",
    icon: Rocket,
    time: "Week 3",
  },
  {
    title: "Scale & Learn",
    description:
      "Capture momentum with automation, growth playbooks, and purposeful analytics.",
    icon: Flag,
    time: "Week 4",
  },
];

const container: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.55,
    },
  },
};

export function GlassmorphismLaunchTimelineBlock() {
  return (
    <section className="relative overflow-hidden px-6 py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.05fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-border/50 bg-background/45 p-10 backdrop-blur-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent" />
          <div className="relative">
            <Badge
              variant="outline"
              className="mb-6 inline-flex items-center gap-2 rounded-full border-border/50 bg-background/55 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-foreground/70 backdrop-blur"
            >
              <CalendarDays className="h-3.5 w-3.5" />
              launch timeline
            </Badge>

            <div className="space-y-5">
              <h2 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                Launch faster with a frictionless roadmap
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-foreground/70 md:text-lg">
                An intentionally minimal planning flow that surfaces the
                important moments, keeps teams aligned, and celebrates progress
                along the way.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="h-12 rounded-full px-8 text-sm uppercase tracking-[0.2em]"
              >
                Book a session
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          className="relative flex flex-col gap-4"
        >
          <div className="pointer-events-none absolute left-[22px] top-4 bottom-4 hidden w-px bg-gradient-to-b from-foreground/10 via-foreground/5 to-transparent lg:block" />
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.li
                key={step.title}
                variants={item}
                className="group relative overflow-hidden rounded-3xl border border-border/50 bg-background/45 p-6 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-border/70"
              >
                <div className="relative z-10 flex items-start gap-4">
                  <div className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-border/40 bg-background/70 text-foreground/80 shadow-[0_10px_30px_rgba(15,23,42,0.25)]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-semibold tracking-tight text-foreground">
                        {step.title}
                      </h3>
                      <span className="rounded-full border border-border/40 bg-background/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-foreground/60 backdrop-blur">
                        {step.time}
                      </span>
                    </div>
                    <p className="max-w-xl text-sm leading-relaxed text-foreground/70">
                      {step.description}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10" />
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
