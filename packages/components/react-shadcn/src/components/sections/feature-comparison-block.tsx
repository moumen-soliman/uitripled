"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Crown, Rocket, Sparkles, Star, X, Zap } from "lucide-react";
import { Fragment, useId, useState } from "react";

import { cn } from "@/lib/utils";

type PlanKey = "free" | "pro" | "enterprise";

const plans = [
  {
    key: "free" as PlanKey,
    name: "Free",
    popular: false,
    price: "$0",
    period: "/month",
    description: "Perfect for getting started",
    icon: Rocket,
    features: ["5 projects", "Basic components", "Community support"],
    cta: "Choose plan",
  },
  {
    key: "pro" as PlanKey,
    name: "Pro",
    popular: true,
    price: "$29",
    period: "/month",
    description: "Most popular for professionals",
    icon: Star,
    features: [
      "Unlimited projects",
      "Advanced animations",
      "Priority support",
      "API access",
    ],
    cta: "Get started",
  },
  {
    key: "enterprise" as PlanKey,
    name: "Enterprise",
    popular: false,
    price: "$99",
    period: "/month",
    description: "For large teams and organizations",
    icon: Crown,
    features: [
      "Everything in Pro",
      "Custom integrations",
      "Dedicated manager",
      "SLA support",
    ],
    cta: "Contact sales",
  },
];

const features: {
  category: string;
  items: { name: string; free: boolean; pro: boolean; enterprise: boolean }[];
}[] = [
  {
    category: "Core features",
    items: [
      { name: "Basic components", free: true, pro: true, enterprise: true },
      { name: "Advanced animations", free: false, pro: true, enterprise: true },
      { name: "Custom themes", free: false, pro: true, enterprise: true },
      { name: "Priority support", free: false, pro: false, enterprise: true },
    ],
  },
  {
    category: "Integrations",
    items: [
      { name: "API access", free: false, pro: true, enterprise: true },
      { name: "Webhooks", free: false, pro: false, enterprise: true },
      { name: "Custom integrations", free: false, pro: false, enterprise: true },
    ],
  },
  {
    category: "Support and limits",
    items: [
      { name: "5 projects", free: true, pro: false, enterprise: false },
      { name: "Unlimited projects", free: false, pro: true, enterprise: true },
      { name: "Team collaboration", free: false, pro: true, enterprise: true },
      { name: "Dedicated manager", free: false, pro: false, enterprise: true },
    ],
  },
];

/**
 * Availability is carried by an icon plus text, never by the icon alone — the
 * whole table is unreadable otherwise once you cannot see the glyph shapes.
 */
function Availability({ included }: { included: boolean }) {
  return (
    <>
      {included ? (
        <Check className="mx-auto size-5 text-foreground" aria-hidden />
      ) : (
        <X className="mx-auto size-5 text-muted-foreground" aria-hidden />
      )}
      <span className="sr-only">{included ? "Included" : "Not included"}</span>
    </>
  );
}

export function FeatureComparisonBlock() {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const tableId = useId();

  const reveal = (delay: number) =>
    shouldReduceMotion
      ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0 } }
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay },
        };

  return (
    <section className="w-full bg-background px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <motion.div {...reveal(0)} className="mb-12 text-center">
          <Badge className="mb-4" variant="secondary">
            <Zap className="mr-1 size-3" aria-hidden />
            Compare plans
          </Badge>
          <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight">
            Choose the right plan for you
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
            Compare features across all our plans and find the perfect fit for
            your needs.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const isHovered = hoveredPlan === index;

            return (
              <motion.div
                key={plan.name}
                {...reveal(0.1 * index)}
                onHoverStart={() => setHoveredPlan(index)}
                onHoverEnd={() => setHoveredPlan(null)}
                className="relative flex"
              >
                <Card
                  className={cn(
                    "group relative flex w-full flex-col overflow-hidden bg-card p-6 md:p-8",
                    "transition-[border-color,box-shadow] duration-300 ease-[cubic-bezier(0.2,0,0,1)]",
                    "motion-reduce:transition-none",
                    plan.popular
                      ? "border-foreground shadow-lg"
                      : "border-border hover:border-foreground/40 hover:shadow-md"
                  )}
                >
                  {plan.popular && (
                    <div className="absolute right-0 top-0">
                      <Badge className="gap-1 rounded-bl-lg rounded-tr-xl px-3 py-1">
                        <Sparkles className="size-3" aria-hidden />
                        Most popular
                      </Badge>
                    </div>
                  )}

                  <div className="mb-4 flex justify-center">
                    <div className="rounded-2xl bg-muted p-3 text-foreground">
                      <Icon className="size-8" strokeWidth={1.5} aria-hidden />
                    </div>
                  </div>

                  <div className="mb-6 text-center">
                    <h3 className="mb-2 text-2xl font-bold tracking-tight">
                      {plan.name}
                    </h3>
                    <p className="text-pretty text-sm text-muted-foreground">
                      {plan.description}
                    </p>
                  </div>

                  <div className="mb-6 text-center">
                    <span className="text-5xl font-bold tracking-tight tabular-nums">
                      {plan.price}
                    </span>
                    <span className="ml-1 text-base text-muted-foreground">
                      {plan.period}
                    </span>
                  </div>

                  <ul className="mb-6 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check
                          className="mt-0.5 size-5 shrink-0 text-foreground"
                          aria-hidden
                        />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="mt-auto w-full gap-2"
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.cta}
                    <ArrowRight
                      className={cn(
                        "size-4 transition-transform duration-200",
                        isHovered && "translate-x-0.5",
                        "motion-reduce:transition-none motion-reduce:translate-x-0"
                      )}
                      aria-hidden
                    />
                  </Button>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/*
          A real table: without column headers the ticks below are three
          anonymous columns, and screen readers announce the row with no way to
          tell which plan each mark belongs to. The wrapper is focusable so the
          horizontal scroll is reachable by keyboard.
        */}
        <div
          role="region"
          aria-labelledby={`${tableId}-caption`}
          tabIndex={0}
          className="overflow-x-auto rounded-lg border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <caption id={`${tableId}-caption`} className="sr-only">
              Feature availability across the Free, Pro and Enterprise plans
            </caption>
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th
                  scope="col"
                  className="sticky left-0 z-10 bg-muted/50 p-4 text-left font-semibold"
                >
                  Feature
                </th>
                {plans.map((plan) => (
                  <th
                    key={plan.key}
                    scope="col"
                    className="p-4 text-center font-semibold"
                  >
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((category) => (
                <Fragment key={category.category}>
                  <tr className="border-b border-border">
                    <th
                      scope="colgroup"
                      colSpan={plans.length + 1}
                      className="bg-background p-4 text-left text-base font-semibold"
                    >
                      {category.category}
                    </th>
                  </tr>
                  {category.items.map((item) => (
                    <tr
                      key={item.name}
                      className="border-b border-border last:border-b-0"
                    >
                      <th
                        scope="row"
                        className="sticky left-0 z-10 bg-card p-4 text-left font-medium"
                      >
                        {item.name}
                      </th>
                      {plans.map((plan) => (
                        <td key={plan.key} className="p-4 text-center">
                          <Availability included={item[plan.key]} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {/* Kept outside the scroll container, so it is never pushed off-screen */}
        <motion.div {...reveal(0.4)} className="mt-12 text-center">
          <p className="mb-4 text-sm text-muted-foreground">
            Need a custom plan?
          </p>
          <Button variant="outline" size="lg">
            Contact sales
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
