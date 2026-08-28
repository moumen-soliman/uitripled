"use client";

import { Button } from "@base-ui/react/button";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { useRef } from "react";

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "/month",
    description: "Perfect for personal projects",
    features: [
      "10 Components",
      "Community Support",
      "Basic Animations",
      "Documentation",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "Best for growing businesses",
    features: [
      "50+ Components",
      "Priority Support",
      "Advanced Animations",
      "Source Code",
      "Custom Requests",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/month",
    description: "For large-scale applications",
    features: [
      "Unlimited Components",
      "24/7 Support",
      "Premium Animations",
      "White-label",
      "Dedicated Team",
    ],
    popular: false,
  },
];

export function PricingSectionBaseui() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      ref={ref}
      className="w-full px-4 py-12 sm:py-16 md:py-20 lg:py-24"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
          className="mb-12 sm:mb-14 md:mb-16 text-center"
        >
          <h2
            id="pricing-heading"
            className="mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
          >
            Simple, transparent pricing
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Choose the plan that's right for you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.4, delay: index * 0.1 }}
              className="flex"
            >
              <div
                className={`relative flex h-full w-full flex-col overflow-hidden rounded-xl border transition-all duration-200 ${
                  plan.popular
                    ? "border-foreground shadow-lg dark:border-foreground"
                    : "border-border hover:border-foreground/50 hover:shadow-md"
                } bg-card text-card-foreground`}
                aria-label={`${plan.name} plan${
                  plan.popular ? ", most popular" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute right-3 top-3 sm:right-4 sm:top-4">
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-foreground text-background hover:bg-foreground/90 text-xs sm:text-sm">
                      Popular
                    </span>
                  </div>
                )}

                <div className="pb-6 pt-6 sm:pb-8 sm:pt-8 px-4 sm:px-6">
                  <h3 className="text-lg sm:text-xl font-medium">
                    {plan.name}
                  </h3>
                  <div className="mt-3 sm:mt-4 flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-bold tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-sm sm:text-base text-muted-foreground">
                      {plan.period}
                    </span>
                  </div>
                  <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                <div className="flex flex-1 flex-col justify-between gap-6 sm:gap-8 pb-6 sm:pb-8 px-4 sm:px-6">
                  <ul
                    className="space-y-2.5 sm:space-y-3"
                    aria-label={`${plan.name} plan features`}
                  >
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 sm:gap-3 text-sm text-muted-foreground"
                      >
                        <div
                          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
                          aria-hidden="true"
                        >
                          <Check className="h-3 w-3" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 w-full ${
                      plan.popular
                        ? "bg-foreground text-background hover:bg-foreground/90"
                        : "bg-background text-foreground border border-input hover:bg-accent hover:text-accent-foreground"
                    }`}
                    aria-label={`${
                      plan.name === "Enterprise"
                        ? "Contact sales for"
                        : "Get started with"
                    } ${plan.name} plan at ${plan.price} per month`}
                  >
                    {plan.name === "Enterprise"
                      ? "Contact Sales"
                      : "Get Started"}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
