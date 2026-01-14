"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { Code, Globe, Lock, Shield, Sparkles, Zap } from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: Code,
    title: "Developer Friendly",
    description: "Built with TypeScript and modern React patterns for a superior developer experience.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized animations and code splitting that ensures your app never lags.",
  },
  {
    icon: Shield,
    title: "Production Ready",
    description: "Fully tested components that are ready for your next big project launch.",
  },
  {
    icon: Globe,
    title: "Responsive",
    description: "Layouts that adapt perfectly to any screen size, from mobile to desktop.",
  },
  {
    icon: Lock,
    title: "Secure By Default",
    description: "Implementation following best security practices to keep your data safe.",
  },
  {
    icon: Sparkles,
    title: "Modern Design",
    description: "Crafted with the latest web technologies and aesthetic trends in mind.",
  },
];

export function FeatureGridSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-background px-4 py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16 md:mb-20 text-center"
        >
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Why Choose Us
          </h2>
          <p className="mx-auto max-w-2xl px-4 text-base text-foreground/70 sm:text-lg">
            Everything you need to build amazing applications, faster and better.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex"
              >
                <Card className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border/40 bg-background/60 backdrop-blur transition-all duration-300 hover:border-border/60 hover:shadow-lg hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <CardHeader className="relative pb-4 z-10">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/20 text-primary transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-semibold tracking-tight text-foreground">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-base text-foreground/70 transition-colors">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
