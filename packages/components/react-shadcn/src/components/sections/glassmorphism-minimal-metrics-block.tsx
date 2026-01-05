"use client";

import { motion, type Variants } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowUpRight, Users, Zap } from "lucide-react";

const metrics = [
  {
    label: "Activated teams",
    value: "1.2k",
    delta: "+18%",
    description: "teams shipping faster",
  },
  {
    label: "Daily automations",
    value: "58",
    delta: "+42%",
    description: "manual tasks replaced",
  },
  {
    label: "Customer NPS",
    value: "71",
    delta: "+9",
    description: "in just three sprints",
  },
  {
    label: "Launch lead time",
    value: "6d",
    delta: "-3d",
    description: "from concept to production",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function GlassmorphismMinimalMetricsBlock() {
  return (
    <section className="relative overflow-hidden px-6 py-24 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[380px] w-[380px] rounded-full bg-foreground/[0.03] blur-[120px]" />
        <div className="absolute right-0 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-foreground/[0.025] blur-[140px]" />
      </div>

      <div className="mx-auto max-w-6xl space-y-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-3xl text-center"
        >
          <Badge
            variant="outline"
            className="mb-4 inline-flex items-center gap-2 rounded-full border-border/50 bg-background/55 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-foreground/70 backdrop-blur"
          >
            <Zap className="h-3.5 w-3.5" />
            realtime insights
          </Badge>
          <h2 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            A snapshot of momentum that refuses to clutter the dashboard
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/70 md:text-lg">
            Glassy panels surface just the signal, Highlighting the metrics that
            matter while the rest stays gracefully out of the way.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.08 }}
          className="grid gap-4 md:grid-cols-2"
        >
          {metrics.map((metric) => (
            <motion.div key={metric.label} variants={fadeUp}>
              <Card className="group relative overflow-hidden rounded-3xl border border-border/50 bg-background/45 p-8 backdrop-blur-2xl transition-transform duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent" />
                <div className="relative z-10 space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium uppercase tracking-[0.25em] text-foreground/60">
                      {metric.label}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-foreground/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <div className="flex items-end gap-3">
                    <span className="text-5xl font-semibold tracking-tight text-foreground">
                      {metric.value}
                    </span>
                    <span className="rounded-full border border-border/40 bg-background/60 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60 backdrop-blur">
                      {metric.delta}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/70">
                    {metric.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-border/50 bg-background/40 px-6 py-6 backdrop-blur-xl md:px-8"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border/40 bg-background/70 text-foreground/80 shadow-[0_15px_40px_rgba(15,23,42,0.25)]">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-foreground/60">
                concierge insight desk
              </p>
              <p className="text-base text-foreground/80">
                Curated weekly digests keep leaders aligned without dashboards.
              </p>
            </div>
          </div>
          <Button
            size="lg"
            variant="ghost"
            className="h-11 rounded-full border border-border/40 bg-background/70 px-6 text-sm uppercase tracking-[0.2em] text-foreground/70 backdrop-blur hover:text-foreground"
          >
            Request a sample
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
