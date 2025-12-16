"use client";

import { Button } from "@base-ui/react/button";
import { motion, useInView } from "framer-motion";
import { Check, Zap } from "lucide-react";
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
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="w-full px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="text-sm text-[var(--foreground)]/70 sm:text-base md:text-lg">
            Choose the perfect plan for your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 50, scale: 0.9 }
              }
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div
                className={`relative h-full rounded-lg border bg-card text-card-foreground shadow-sm transition-all ${
                  plan.popular ? "border-accent shadow-lg" : "border-border"
                }`}
              >
                {plan.popular && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={
                      isInView
                        ? { scale: 1, rotate: 0 }
                        : { scale: 0, rotate: -180 }
                    }
                    transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2"
                  >
                    <span className="inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                      <Zap className="h-3 w-3" />
                      Popular
                    </span>
                  </motion.div>
                )}

                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-[var(--foreground)]/60">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <ul className="mb-6 space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -20 }
                        }
                        transition={{
                          delay: index * 0.15 + featureIndex * 0.1 + 0.5,
                        }}
                        className="flex items-center gap-2 text-sm"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : { scale: 0 }}
                          transition={{
                            delay: index * 0.15 + featureIndex * 0.1 + 0.6,
                            type: "spring",
                          }}
                          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10"
                        >
                          <Check className="h-3 w-3 text-accent" />
                        </motion.div>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Button
                    className={`inline-flex h-10 w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
                      plan.popular
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
