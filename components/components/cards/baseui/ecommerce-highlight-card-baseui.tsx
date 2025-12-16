"use client";

import { NativeButton } from "@/components/native/baseui/native-button-baseui";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, ShieldCheck, Sparkles, Star, Truck } from "lucide-react";
import { useState } from "react";

type Plan = {
  id: string;
  title: string;
  price: string;
  description: string;
  promise: string;
};

const plans: Plan[] = [
  {
    id: "essential",
    title: "Essential",
    price: "$48.00",
    description:
      "Everyday comfort with signature cushioning and durable materials.",
    promise: "Ships in 2 business days • 30-day returns",
  },
  {
    id: "plus",
    title: "Plus",
    price: "$68.00",
    description:
      "Upgraded foam footbed, recycled laces, and breathable knit upper.",
    promise: "Ships next business day • 45-day returns",
  },
  {
    id: "premium",
    title: "Premium",
    price: "$92.00",
    description:
      "Adaptive arch support and antimicrobial lining for long days on your feet.",
    promise: "Priority fulfillment • 60-day returns",
  },
];

const highlights = [
  {
    icon: Sparkles,
    label: "Best Seller",
  },
  {
    icon: ShieldCheck,
    label: "2-year warranty",
  },
];

export function EcommerceHighlightCardBaseUI() {
  const [activePlan, setActivePlan] = useState<Plan>(plans[1]);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="w-full">
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        transition={
          shouldReduceMotion ? undefined : { duration: 0.45, ease: "easeOut" }
        }
        className="relative z-10"
      >
        {/* Card replacement */}
        <div className="group relative overflow-hidden rounded-[28px] border border-border/40 bg-background text-foreground">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10"
          />

          {/* CardHeader replacement */}
          <div className="relative flex flex-col space-y-1.5 p-6 pb-0">
            {/* Badge replacement */}
            <span className="w-fit rounded-full bg-primary/15 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.25em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
              Nimbus Collection
            </span>
            <div className="space-y-2">
              {/* CardTitle replacement */}
              <h3 className="text-2xl font-semibold tracking-tight">
                Nimbus Pace Runner
              </h3>
              {/* CardDescription replacement */}
              <p className="text-sm text-muted-foreground">
                Lightweight performance kicks engineered for all-day comfort and
                momentum.
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="flex items-center gap-1 text-primary">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star
                    key={star}
                    className="h-4 w-4 fill-current"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span className="text-muted-foreground">4.9 • 1,240 reviews</span>
            </div>
          </div>

          {/* CardContent replacement */}
          <div className="relative space-y-6 p-6 pt-6">
            <div className="flex flex-wrap gap-2">
              {highlights.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-muted/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur"
                >
                  <Icon
                    className="h-3.5 w-3.5 text-primary"
                    aria-hidden="true"
                  />
                  {label}
                </span>
              ))}
            </div>

            <div className="grid gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Choose your bundle
              </span>
              <div className="flex flex-wrap gap-2">
                {plans.map((plan) => {
                  const isActive = plan.id === activePlan.id;
                  return (
                    /* Button replacement */
                    <button
                      key={plan.id}
                      type="button"
                      onClick={() => setActivePlan(plan)}
                      aria-pressed={isActive}
                      className={`inline-flex items-center justify-center rounded-full border border-border/60 px-4 py-2 text-sm font-medium transition-all ${
                        isActive
                          ? "border-primary/40 bg-primary text-primary-foreground shadow-lg"
                          : "bg-background/80 text-foreground hover:border-primary/30 hover:bg-muted"
                      }`}
                    >
                      {plan.title}
                    </button>
                  );
                })}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activePlan.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                animate={
                  shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
                }
                exit={
                  shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }
                }
                transition={
                  shouldReduceMotion
                    ? undefined
                    : {
                        duration: 0.32,
                        ease: "easeOut",
                        opacity: { duration: 0.25 },
                      }
                }
                className="space-y-3 rounded-2xl border border-border/60 bg-card/60 p-4 shadow-sm backdrop-blur"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {activePlan.title}
                    </p>
                    <p className="text-base font-semibold text-foreground">
                      {activePlan.price}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary/15 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-primary">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    Selected
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {activePlan.description}
                </p>
                <p className="text-xs font-medium text-foreground">
                  {activePlan.promise}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Separator replacement */}
            <div className="h-px w-full bg-border/60" />

            <div className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-muted/50 p-4 text-sm text-muted-foreground backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>Free express shipping on orders over $100</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck
                  className="h-4 w-4 text-primary"
                  aria-hidden="true"
                />
                <span>Extended warranty included with every bundle</span>
              </div>
            </div>
          </div>

          {/* CardFooter replacement */}
          <div className="relative flex flex-col gap-4 border-t border-border/50 bg-muted/40 px-8 py-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm">
              <p className="font-medium text-foreground">
                Arrives before Friday
              </p>
              <p className="text-xs text-muted-foreground">
                Checkout before 2PM local time
              </p>
            </div>
            <NativeButton
              variant="default"
              size="lg"
              glow
              className="w-full sm:w-auto"
            >
              Add to bag • {activePlan.price}
            </NativeButton>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
