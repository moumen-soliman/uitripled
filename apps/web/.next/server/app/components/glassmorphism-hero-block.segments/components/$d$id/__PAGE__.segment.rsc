1:"$Sreact.fragment"
2:I[176430,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"default"]
a:I[897367,["/_next/static/chunks/d96012bcfc98706a.js","/_next/static/chunks/c1216787d4b31b65.js"],"OutletBoundary"]
b:"$Sreact.suspense"
3:T84f,"use client";

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
4:Ta3c,"use client";

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
5:T84f,"use client";

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
0:{"buildId":"bFBIq5AO28jMw9-shWxSc","rsc":["$","$1","c",{"children":[["$","$L2",null,{"code":"$3","variantCodes":{},"baseId":"glassmorphism-hero-block","baseuiCode":"$4","shadcnuiCode":"$5"}],["$L6","$L7","$L8"],"$L9"]}],"loading":null,"isPartial":false}
6:["$","script","script-0",{"src":"/_next/static/chunks/caa50e77cf52fdaa.js","async":true}]
7:["$","script","script-1",{"src":"/_next/static/chunks/e0bc9c3a4105a6fe.js","async":true}]
8:["$","script","script-2",{"src":"/_next/static/chunks/48913bc585f72fa4.js","async":true}]
9:["$","$La",null,{"children":["$","$b",null,{"name":"Next.MetadataOutlet","children":"$@c"}]}]
c:null
