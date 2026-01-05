"use client";

import { Button } from "@base-ui/react/button";
import { motion } from "framer-motion";
import { Check, Crown, Rocket, Sparkles, Star, X, Zap } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Free",
    popular: false,
    price: "$0",
    period: "/month",
    description: "Perfect for getting started",
    icon: Rocket,
    gradient: "from-slate-500/10 via-slate-500/5 to-transparent",
    iconColor: "text-slate-500",
    features: ["5 Projects", "Basic Components", "Community Support"],
  },
  {
    name: "Pro",
    popular: true,
    price: "$29",
    period: "/month",
    description: "Most popular for professionals",
    icon: Star,
    gradient: "from-primary/20 via-primary/10 to-transparent",
    iconColor: "text-primary",
    features: [
      "Unlimited Projects",
      "Advanced Animations",
      "Priority Support",
      "API Access",
    ],
  },
  {
    name: "Enterprise",
    popular: false,
    price: "$99",
    period: "/month",
    description: "For large teams and organizations",
    icon: Crown,
    gradient: "from-purple-500/20 via-purple-500/10 to-transparent",
    iconColor: "text-purple-500",
    features: [
      "Everything in Pro",
      "Custom Integrations",
      "Dedicated Manager",
      "SLA Support",
    ],
  },
];

const features = [
  {
    category: "Core Features",
    items: [
      { name: "Basic Components", free: true, pro: true, enterprise: true },
      { name: "Advanced Animations", free: false, pro: true, enterprise: true },
      { name: "Custom Themes", free: false, pro: true, enterprise: true },
      { name: "Priority Support", free: false, pro: false, enterprise: true },
    ],
  },
  {
    category: "Integrations",
    items: [
      { name: "API Access", free: false, pro: true, enterprise: true },
      { name: "Webhooks", free: false, pro: false, enterprise: true },
      {
        name: "Custom Integrations",
        free: false,
        pro: false,
        enterprise: true,
      },
    ],
  },
  {
    category: "Support & Limits",
    items: [
      { name: "5 Projects", free: true, pro: false, enterprise: false },
      { name: "Unlimited Projects", free: false, pro: true, enterprise: true },
      { name: "Team Collaboration", free: false, pro: true, enterprise: true },
      { name: "Dedicated Manager", free: false, pro: false, enterprise: true },
    ],
  },
];

export function FeatureComparisonBlockBaseui() {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  return (
    <section className="w-full bg-background px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-flex items-center rounded-full border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">
            <Zap className="mr-1 h-3 w-3" />
            Compare Plans
          </span>
          <h2 className="mb-4 text-4xl font-bold tracking-tight">
            Choose the right plan for you
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Compare features across all our plans and find the perfect fit for
            your needs
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="grid grid-cols-1 gap-6 space-y-6 lg:grid-cols-3">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              const isHovered = hoveredPlan === index;

              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  onHoverStart={() => setHoveredPlan(index)}
                  onHoverEnd={() => setHoveredPlan(null)}
                  className="relative"
                >
                  {/* Popular badge glow effect */}
                  {plan.popular && (
                    <motion.div
                      className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary via-primary/50 to-primary opacity-20 blur-xl"
                      animate={{
                        opacity: [0.2, 0.4, 0.2],
                        scale: [1, 1.02, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  )}

                  <div
                    className={`group relative overflow-hidden rounded-lg border bg-gradient-to-br from-card via-card to-card/80 text-card-foreground shadow-sm backdrop-blur-sm transition-all duration-500 ${
                      plan.popular
                        ? "border-primary/50 shadow-2xl shadow-primary/10"
                        : "border-border/50 hover:border-primary/30 hover:shadow-xl"
                    } ${isHovered && !plan.popular ? "scale-[1.02]" : ""} ${
                      plan.popular ? "scale-[1.05] lg:scale-110" : ""
                    }`}
                  >
                    {/* Gradient overlay */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 transition-opacity duration-500`}
                      animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                    />

                    {/* Shimmer effect */}
                    {isHovered && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        animate={{ x: ["-200%", "200%"] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    )}

                    {/* Popular badge */}
                    {plan.popular && (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          delay: 0.3 + index * 0.1,
                          type: "spring",
                        }}
                        className="absolute -right-1 -top-1"
                      >
                        <span className="inline-flex items-center gap-1 rounded-bl-lg rounded-tr-xl border border-primary/20 bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-lg">
                          <Sparkles className="h-3 w-3" />
                          Most Popular
                        </span>
                      </motion.div>
                    )}

                    <div className="relative z-10 p-6 md:p-8">
                      {/* Icon */}
                      <motion.div
                        className="mb-4 flex justify-center"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div
                          className={`rounded-2xl bg-gradient-to-br ${plan.gradient} p-3 shadow-lg`}
                        >
                          <Icon className={`h-8 w-8 ${plan.iconColor}`} />
                        </div>
                      </motion.div>

                      {/* Plan name and description */}
                      <div className="mb-6 text-center">
                        <h3 className="mb-2 text-2xl font-bold tracking-tight">
                          {plan.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {plan.description}
                        </p>
                      </div>

                      {/* Price */}
                      <div className="mb-6 text-center">
                        <motion.div
                          animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span className="text-5xl font-bold tracking-tight">
                            {plan.price}
                          </span>
                          <span className="ml-1 text-base text-muted-foreground">
                            {plan.period}
                          </span>
                        </motion.div>
                      </div>

                      {/* Features list */}
                      <motion.ul className="mb-6 space-y-3">
                        {plan.features.map((feature, idx) => (
                          <motion.li
                            key={feature}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + idx * 0.1 }}
                            className="flex items-start gap-2"
                          >
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 360 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Check
                                className={`mt-0.5 h-5 w-5 flex-shrink-0 ${plan.iconColor}`}
                              />
                            </motion.div>
                            <span className="text-sm text-foreground/90">
                              {feature}
                            </span>
                          </motion.li>
                        ))}
                      </motion.ul>

                      {/* CTA Button */}
                      <Button
                        className={`group relative w-full overflow-hidden rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                          plan.popular
                            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90"
                            : "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
                        }`}
                      >
                        <motion.span
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          animate={
                            isHovered
                              ? { x: ["-200%", "200%"] }
                              : { x: "-200%" }
                          }
                          transition={{
                            duration: 0.8,
                            ease: "easeInOut",
                          }}
                        />
                        <span className="relative">
                          {plan.popular ? "Get Started Now" : "Choose Plan"}
                        </span>
                        <motion.span
                          className="relative ml-2"
                          animate={isHovered ? { x: [0, 5, 0] } : { x: 0 }}
                          transition={{
                            duration: 0.5,
                            repeat: isHovered ? Infinity : 0,
                          }}
                        >
                          →
                        </motion.span>
                      </Button>

                      {/* Popular plan extra info */}
                      {plan.popular && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.6 }}
                          className="mt-3 text-center text-xs text-muted-foreground"
                        >
                          ✨ Best value for money
                        </motion.p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Feature Comparison Table */}
        <div className="overflow-x-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="min-w-[640px]"
          >
            <div className="space-y-6">
              {features.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * categoryIndex }}
                >
                  <h4 className="mb-4 text-lg font-semibold">
                    {category.category}
                  </h4>
                  <div className="overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-sm">
                    {category.items.map((feature, featureIndex) => (
                      <motion.div
                        key={feature.name}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.05 * featureIndex }}
                        className={`grid grid-cols-4 gap-4 border-b border-border p-4 last:border-b-0 ${
                          featureIndex % 2 === 0 ? "bg-muted/30" : ""
                        }`}
                      >
                        <div className="col-span-1 flex items-center">
                          <span className="text-sm font-medium">
                            {feature.name}
                          </span>
                        </div>

                        {/* Free */}
                        <div className="flex items-center justify-center">
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            {feature.free ? (
                              <Check className="h-5 w-5 text-primary" />
                            ) : (
                              <X className="h-5 w-5 text-muted-foreground/30" />
                            )}
                          </motion.div>
                        </div>

                        {/* Pro */}
                        <div className="flex items-center justify-center">
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            {feature.pro ? (
                              <Check className="h-5 w-5 text-primary" />
                            ) : (
                              <X className="h-5 w-5 text-muted-foreground/30" />
                            )}
                          </motion.div>
                        </div>

                        {/* Enterprise */}
                        <div className="flex items-center justify-center">
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            {feature.enterprise ? (
                              <Check className="h-5 w-5 text-primary" />
                            ) : (
                              <X className="h-5 w-5 text-muted-foreground/30" />
                            )}
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12 text-center"
            >
              <p className="mb-4 text-sm text-muted-foreground">
                Need a custom plan?
              </p>
              <Button className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                Contact Sales
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
