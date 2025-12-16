"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, useInView, type Variants } from "framer-motion";
import { Code, Globe, Lock, Shield, Sparkles, Zap } from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: Code,
    title: "Developer Friendly",
    description: "Built with TypeScript and modern React patterns",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized animations that never lag",
  },
  {
    icon: Shield,
    title: "Production Ready",
    description: "Tested and ready for your next project",
  },
  {
    icon: Globe,
    title: "Responsive",
    description: "Works perfectly on all devices",
  },
  {
    icon: Lock,
    title: "Secure",
    description: "Built with security best practices",
  },
  {
    icon: Sparkles,
    title: "Modern",
    description: "Using the latest web technologies",
  },
];

export function FeatureGridSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

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
            Why Choose Us
          </h2>
          <p className="text-sm text-[var(--foreground)]/70 sm:text-base md:text-lg">
            Everything you need to build amazing applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div key={feature.title} variants={itemVariants}>
                <Card className="h-full  bg-[var(--card-bg)] transition-all hover:shadow-lg">
                  <CardHeader>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, rotate: -60 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1, rotate: 0 }
                          : { opacity: 0, scale: 0.8, rotate: -60 }
                      }
                      transition={{
                        delay: index * 0.1 + 0.3,
                        type: "spring",
                        stiffness: 120,
                        damping: 18,
                        mass: 0.6,
                      }}
                      className="mb-4 inline-flex"
                    >
                      <Icon
                        className="h-6 w-6 text-[var(--muted-foreground)]"
                        aria-hidden="true"
                      />
                    </motion.div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
