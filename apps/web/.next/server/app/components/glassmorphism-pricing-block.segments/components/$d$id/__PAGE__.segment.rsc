1:"$Sreact.fragment"
2:I[176430,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"default"]
a:I[897367,["/_next/static/chunks/d96012bcfc98706a.js","/_next/static/chunks/c1216787d4b31b65.js"],"OutletBoundary"]
b:"$Sreact.suspense"
3:Te6a,"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

export function GlassmorphismPricingBlock() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for small teams",
      features: [
        "Up to 10 users",
        "Basic analytics",
        "Email support",
        "1GB storage",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "$99",
      description: "For growing businesses",
      features: [
        "Unlimited users",
        "Advanced analytics",
        "Priority support",
        "100GB storage",
        "Custom integrations",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Unlimited everything",
        "Dedicated support",
        "Custom SLA",
        "Unlimited storage",
        "Advanced security",
      ],
      popular: false,
    },
  ];

  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 space-y-5 text-center">
          <h2 className="text-5xl font-bold tracking-tight md:text-6xl">
            Simple, transparent pricing
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Choose the plan that's right for your team
          </p>
        </div>

        <div className="grid items-start gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`border p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 ${
                plan.popular
                  ? "border-border bg-background shadow-2xl md:scale-105"
                  : "border-border/50 bg-background/50 hover:border-border"
              }`}
            >
              {plan.popular && (
                <div className="mb-6 inline-block rounded-full bg-foreground px-3 py-1 text-xs font-semibold tracking-wide text-background">
                  MOST POPULAR
                </div>
              )}
              <h3 className="mb-3 text-2xl font-bold tracking-tight">
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className="text-5xl font-bold tracking-tight">
                  {plan.price}
                </span>
                {plan.price !== "Custom" && (
                  <span className="text-lg text-muted-foreground">/month</span>
                )}
              </div>
              <p className="mb-8 text-base leading-relaxed text-muted-foreground">
                {plan.description}
              </p>
              <Button
                className={`mb-8 h-11 w-full rounded-full text-base ${plan.popular ? "" : "hover:bg-foreground/5"}`}
                variant={plan.popular ? "default" : "outline"}
              >
                Get Started
              </Button>
              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-foreground/[0.08]">
                      <Check className="h-3 w-3 text-foreground" />
                    </div>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
4:Tfb7,"use client";

import { Button } from "@base-ui/react/button";
import { Check } from "lucide-react";

export function GlassmorphismPricingBlockBaseui() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for small teams",
      features: [
        "Up to 10 users",
        "Basic analytics",
        "Email support",
        "1GB storage",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "$99",
      description: "For growing businesses",
      features: [
        "Unlimited users",
        "Advanced analytics",
        "Priority support",
        "100GB storage",
        "Custom integrations",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Unlimited everything",
        "Dedicated support",
        "Custom SLA",
        "Unlimited storage",
        "Advanced security",
      ],
      popular: false,
    },
  ];

  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 space-y-5 text-center">
          <h2 className="text-5xl font-bold tracking-tight md:text-6xl">
            Simple, transparent pricing
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Choose the plan that's right for your team
          </p>
        </div>

        <div className="grid items-start gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg border p-10 text-card-foreground backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 ${
                plan.popular
                  ? "border-border bg-background shadow-2xl md:scale-105"
                  : "border-border/50 bg-background/50 hover:border-border"
              }`}
            >
              {plan.popular && (
                <div className="mb-6 inline-block rounded-full bg-foreground px-3 py-1 text-xs font-semibold tracking-wide text-background">
                  MOST POPULAR
                </div>
              )}
              <h3 className="mb-3 text-2xl font-bold tracking-tight">
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className="text-5xl font-bold tracking-tight">
                  {plan.price}
                </span>
                {plan.price !== "Custom" && (
                  <span className="text-lg text-muted-foreground">/month</span>
                )}
              </div>
              <p className="mb-8 text-base leading-relaxed text-muted-foreground">
                {plan.description}
              </p>
              <Button
                className={`mb-8 inline-flex h-11 w-full items-center justify-center rounded-full text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-input bg-background hover:bg-foreground/5"
                }`}
              >
                Get Started
              </Button>
              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-foreground/[0.08]">
                      <Check className="h-3 w-3 text-foreground" />
                    </div>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
5:Te6a,"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

export function GlassmorphismPricingBlock() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for small teams",
      features: [
        "Up to 10 users",
        "Basic analytics",
        "Email support",
        "1GB storage",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "$99",
      description: "For growing businesses",
      features: [
        "Unlimited users",
        "Advanced analytics",
        "Priority support",
        "100GB storage",
        "Custom integrations",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Unlimited everything",
        "Dedicated support",
        "Custom SLA",
        "Unlimited storage",
        "Advanced security",
      ],
      popular: false,
    },
  ];

  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 space-y-5 text-center">
          <h2 className="text-5xl font-bold tracking-tight md:text-6xl">
            Simple, transparent pricing
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Choose the plan that's right for your team
          </p>
        </div>

        <div className="grid items-start gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`border p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 ${
                plan.popular
                  ? "border-border bg-background shadow-2xl md:scale-105"
                  : "border-border/50 bg-background/50 hover:border-border"
              }`}
            >
              {plan.popular && (
                <div className="mb-6 inline-block rounded-full bg-foreground px-3 py-1 text-xs font-semibold tracking-wide text-background">
                  MOST POPULAR
                </div>
              )}
              <h3 className="mb-3 text-2xl font-bold tracking-tight">
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className="text-5xl font-bold tracking-tight">
                  {plan.price}
                </span>
                {plan.price !== "Custom" && (
                  <span className="text-lg text-muted-foreground">/month</span>
                )}
              </div>
              <p className="mb-8 text-base leading-relaxed text-muted-foreground">
                {plan.description}
              </p>
              <Button
                className={`mb-8 h-11 w-full rounded-full text-base ${plan.popular ? "" : "hover:bg-foreground/5"}`}
                variant={plan.popular ? "default" : "outline"}
              >
                Get Started
              </Button>
              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-foreground/[0.08]">
                      <Check className="h-3 w-3 text-foreground" />
                    </div>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
0:{"buildId":"bFBIq5AO28jMw9-shWxSc","rsc":["$","$1","c",{"children":[["$","$L2",null,{"code":"$3","variantCodes":{},"baseId":"glassmorphism-pricing-block","baseuiCode":"$4","shadcnuiCode":"$5"}],["$L6","$L7","$L8"],"$L9"]}],"loading":null,"isPartial":false}
6:["$","script","script-0",{"src":"/_next/static/chunks/caa50e77cf52fdaa.js","async":true}]
7:["$","script","script-1",{"src":"/_next/static/chunks/e0bc9c3a4105a6fe.js","async":true}]
8:["$","script","script-2",{"src":"/_next/static/chunks/48913bc585f72fa4.js","async":true}]
9:["$","$La",null,{"children":["$","$b",null,{"name":"Next.MetadataOutlet","children":"$@c"}]}]
c:null
