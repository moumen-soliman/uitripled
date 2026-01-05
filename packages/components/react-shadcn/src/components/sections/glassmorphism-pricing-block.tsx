"use client";

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
