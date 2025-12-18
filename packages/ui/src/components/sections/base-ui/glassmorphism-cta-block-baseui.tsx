"use client";

import { Button } from "@base-ui/react/button";

export function GlassmorphismCTABlockBaseui() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-lg border border-border/50 bg-background/50 p-16 text-center text-card-foreground shadow-sm backdrop-blur-xl md:p-24">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] to-transparent" />
          <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-foreground/[0.03] blur-3xl" />

          <div className="relative z-10 space-y-8">
            <h2 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Ready to get started?
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Join thousands of teams building better products with our platform
            </p>
            <div className="flex flex-col justify-center gap-4 pt-6 sm:flex-row">
              <Button className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                Start Free Trial
              </Button>
              <Button className="inline-flex h-12 items-center justify-center rounded-full border border-input bg-background px-8 text-base font-medium ring-offset-background transition-colors hover:bg-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
