"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { Award, Globe, TrendingUp, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    icon: Users,
    value: 50000,
    suffix: "+",
    label: "Active Users",
    description: "Growing community worldwide",
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-500",
  },
  {
    icon: Globe,
    value: 120,
    suffix: "+",
    label: "Countries",
    description: "Global reach and presence",
    bgColor: "bg-green-500/10",
    iconColor: "text-green-500",
  },
  {
    icon: TrendingUp,
    value: 98,
    suffix: "%",
    label: "Satisfaction Rate",
    description: "Customer happiness score",
    bgColor: "bg-purple-500/10",
    iconColor: "text-purple-500",
  },
  {
    icon: Award,
    value: 25,
    suffix: "+",
    label: "Awards Won",
    description: "Industry recognition",
    bgColor: "bg-orange-500/10",
    iconColor: "text-orange-500",
  },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function StatsCounterBlock() {
  return (
    <section className="w-full bg-gradient-to-b from-background to-primary/5 px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          <Badge className="mb-4" variant="secondary">
            Our Impact
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Numbers That Speak{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              For Themselves
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
            We&apos;re proud of the impact we&apos;ve made and the trust our
            users place in us
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                <Card className="group relative overflow-hidden border-border/50 bg-card p-6 transition-all hover:border-primary/50 hover:shadow-2xl md:p-8">
                  {/* Gradient overlay */}
                  <motion.div
                    className={`absolute inset-0 ${stat.bgColor} opacity-50`}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Animated background circle */}
                  <motion.div
                    className={`absolute -right-8 -top-8 h-32 w-32 rounded-full ${stat.bgColor} opacity-50 blur-2xl`}
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 90, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div transition={{ duration: 0.6 }} className="mb-4">
                      <div className={`w-fit rounded-xl ${stat.bgColor} p-3`}>
                        <Icon
                          className={`h-6 w-6 ${stat.iconColor} md:h-8 md:w-8`}
                        />
                      </div>
                    </motion.div>

                    {/* Counter */}
                    <motion.div
                      className="mb-2 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
                      initial={{ scale: 1 }}
                      whileInView={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </motion.div>

                    {/* Label */}
                    <h3 className="mb-1 text-base font-semibold md:text-lg">
                      {stat.label}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-muted-foreground md:text-sm">
                      {stat.description}
                    </p>
                  </div>

                  {/* Hover effect line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 ${stat.iconColor.replace("text-", "bg-")}`}
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 text-center md:mt-16"
        >
          <blockquote className="mx-auto max-w-2xl">
            <p className="mb-4 text-lg font-medium italic text-muted-foreground md:text-xl">
              &quot;These numbers represent real people, real businesses, and
              real success stories. We&apos;re just getting started.&quot;
            </p>
            <footer className="text-sm font-semibold">- Our CEO</footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
