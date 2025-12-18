"use client";

import { Button } from "@base-ui/react/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function GlassmorphismHeroBlockBaseui() {
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
          <Button className="group inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button className="inline-flex h-12 items-center justify-center rounded-full border border-input bg-background px-8 text-base font-medium ring-offset-background transition-colors hover:bg-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
            View Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
