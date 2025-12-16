"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Github, Zap } from "lucide-react";

const updates = [
  {
    title: "Focus view for shipping squads",
    description:
      "A distilled daily brief that surfaces blockers, approvals, and upcoming releases in one transparent pane.",
    status: "shipped",
  },
  {
    title: "Adaptive velocity pacing",
    description:
      "Predictive nudges align deliverables with the next milestone while respecting the ebb and flow of the team.",
    status: "beta",
  },
  {
    title: "Unified changelog API",
    description:
      "Broadcast every product announcement to web, in-app, and email with a single composable schema.",
    status: "preview",
  },
];

const badges: Record<string, string> = {
  shipped: "bg-emerald-400/10 text-emerald-400 border-emerald-400/40",
  beta: "bg-sky-400/10 text-sky-400 border-sky-400/40",
  preview: "bg-amber-400/10 text-amber-400 border-amber-400/40",
};

export function GlassmorphismProductUpdateBlock() {
  return (
    <section className="relative overflow-hidden px-6 py-24 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-10 h-[380px] w-[380px] rounded-full bg-foreground/[0.03] blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-foreground/[0.025] blur-[140px]" />
      </div>

      <div className="mx-auto max-w-5xl space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <Badge
            variant="outline"
            className="mb-4 inline-flex items-center gap-2 rounded-full border-border/50 bg-background/55 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-foreground/70 backdrop-blur"
          >
            <Zap className="h-3.5 w-3.5" />
            product updates
          </Badge>
          <h2 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Quietly confident releases, announced with clarity
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/70 md:text-lg">
            Celebrate the work without overwhelming your readers. These glass
            cards keep messaging sharp and intentionally minimal.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid gap-4"
        >
          {updates.map((update) => (
            <motion.div
              key={update.title}
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.45, ease: "easeOut" },
                },
              }}
            >
              <Card className="group relative overflow-hidden rounded-3xl border border-border/50 bg-background/45 p-8 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent" />
                <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] ${badges[update.status]}`}
                      >
                        {update.status}
                      </span>
                      <span className="hidden items-center gap-2 text-xs uppercase tracking-[0.25em] text-foreground/50 sm:inline-flex">
                        <Check className="h-3.5 w-3.5" />
                        release notes
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                      {update.title}
                    </h3>
                    <p className="max-w-2xl text-sm leading-relaxed text-foreground/70">
                      {update.description}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    className="h-11 rounded-full border border-border/40 bg-background/60 px-5 text-xs uppercase tracking-[0.2em] text-foreground/70 backdrop-blur hover:text-foreground"
                  >
                    View changelog
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-border/40 bg-background/40 px-6 py-6 backdrop-blur-xl"
        >
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-foreground/60">
            <Github className="h-4 w-4" />
            synced with github releases
          </div>
          <Button
            size="sm"
            variant="outline"
            className="h-9 rounded-full border-border/40 px-4 text-xs uppercase tracking-[0.2em] text-foreground/60 hover:bg-foreground/5"
          >
            Subscribe via RSS
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
