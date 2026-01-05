"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function GlassmorphismHeroBlock() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-32">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-[600px] w-[600px] animate-pulse rounded-full bg-foreground/[0.03] blur-3xl" />
        <div
          className="absolute bottom-1/4 right-1/4 h-[600px] w-[600px] animate-pulse rounded-full bg-foreground/[0.03] blur-3xl"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="mx-auto max-w-7xl space-y-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/50 px-4 py-1.5 text-sm font-medium text-foreground/70 backdrop-blur-xl transition-all duration-300 hover:border-border">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Introducing our new platform</span>
        </div>

        <h1 className="text-6xl font-bold leading-[0.9] tracking-tight md:text-8xl lg:text-9xl">
          <span className="block">Build amazing</span>
          <span className="mt-4 block">products</span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          The complete platform for building modern applications. Fast, secure,
          and scalable by default.
        </p>

        <div className="flex flex-col justify-center gap-4 pt-8 sm:flex-row">
          <Button size="lg" className="group h-12 rounded-full px-8 text-base">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 rounded-full px-8 text-base hover:bg-foreground/5"
          >
            View Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
