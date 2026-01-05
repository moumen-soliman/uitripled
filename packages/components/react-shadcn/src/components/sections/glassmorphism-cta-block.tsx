"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function GlassmorphismCTABlock() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <Card className="relative overflow-hidden border border-border/50 bg-background/50 p-16 text-center backdrop-blur-xl md:p-24">
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
              <Button size="lg" className="h-12 rounded-full px-8 text-base">
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-full px-8 text-base hover:bg-foreground/5"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
