1:"$Sreact.fragment"
2:I[176430,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"default"]
a:I[897367,["/_next/static/chunks/d96012bcfc98706a.js","/_next/static/chunks/c1216787d4b31b65.js"],"OutletBoundary"]
b:"$Sreact.suspense"
3:T805,"use client";

import { Card } from "@/components/ui/card";
import { Shield, Sparkles, Zap } from "lucide-react";

export function FeatureCardsBlock() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Built for speed with optimized performance and instant loading times.",
    },
    {
      icon: Shield,
      title: "Secure by Default",
      description:
        "Enterprise-grade security with built-in protection and compliance.",
    },
    {
      icon: Sparkles,
      title: "Beautiful Design",
      description: "Pixel-perfect interfaces that users love to interact with.",
    },
  ];

  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 space-y-5 text-center">
          <h2 className="text-5xl font-bold tracking-tight md:text-6xl">
            Everything you need
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Powerful features that help you build better products faster
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group cursor-pointer border border-border/50 bg-background/50 p-10 backdrop-blur-xl transition-all duration-500 hover:border-border"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground/[0.04] transition-all duration-300 group-hover:scale-110 group-hover:bg-foreground/[0.08]">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-2xl font-semibold tracking-tight">
                {feature.title}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
4:T7fc,"use client";

import { Shield, Sparkles, Zap } from "lucide-react";

export function FeatureCardsBlockBaseui() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Built for speed with optimized performance and instant loading times.",
    },
    {
      icon: Shield,
      title: "Secure by Default",
      description:
        "Enterprise-grade security with built-in protection and compliance.",
    },
    {
      icon: Sparkles,
      title: "Beautiful Design",
      description: "Pixel-perfect interfaces that users love to interact with.",
    },
  ];

  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 space-y-5 text-center">
          <h2 className="text-5xl font-bold tracking-tight md:text-6xl">
            Everything you need
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Powerful features that help you build better products faster
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group cursor-pointer rounded-lg border border-border/50 bg-background/50 p-10 text-card-foreground backdrop-blur-xl transition-all duration-500 hover:border-border"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground/[0.04] transition-all duration-300 group-hover:scale-110 group-hover:bg-foreground/[0.08]">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-2xl font-semibold tracking-tight">
                {feature.title}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
5:T805,"use client";

import { Card } from "@/components/ui/card";
import { Shield, Sparkles, Zap } from "lucide-react";

export function FeatureCardsBlock() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Built for speed with optimized performance and instant loading times.",
    },
    {
      icon: Shield,
      title: "Secure by Default",
      description:
        "Enterprise-grade security with built-in protection and compliance.",
    },
    {
      icon: Sparkles,
      title: "Beautiful Design",
      description: "Pixel-perfect interfaces that users love to interact with.",
    },
  ];

  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 space-y-5 text-center">
          <h2 className="text-5xl font-bold tracking-tight md:text-6xl">
            Everything you need
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Powerful features that help you build better products faster
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group cursor-pointer border border-border/50 bg-background/50 p-10 backdrop-blur-xl transition-all duration-500 hover:border-border"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground/[0.04] transition-all duration-300 group-hover:scale-110 group-hover:bg-foreground/[0.08]">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-2xl font-semibold tracking-tight">
                {feature.title}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
0:{"buildId":"bFBIq5AO28jMw9-shWxSc","rsc":["$","$1","c",{"children":[["$","$L2",null,{"code":"$3","variantCodes":{},"baseId":"feature-cards-block","baseuiCode":"$4","shadcnuiCode":"$5"}],["$L6","$L7","$L8"],"$L9"]}],"loading":null,"isPartial":false}
6:["$","script","script-0",{"src":"/_next/static/chunks/caa50e77cf52fdaa.js","async":true}]
7:["$","script","script-1",{"src":"/_next/static/chunks/e0bc9c3a4105a6fe.js","async":true}]
8:["$","script","script-2",{"src":"/_next/static/chunks/48913bc585f72fa4.js","async":true}]
9:["$","$La",null,{"children":["$","$b",null,{"name":"Next.MetadataOutlet","children":"$@c"}]}]
c:null
