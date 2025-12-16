"use client";

import { Button } from "@base-ui/react/button";
import { motion, type Variants } from "framer-motion";
import {
  Code,
  Palette,
  Rocket,
  Search,
  Shield,
  Smartphone,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom web applications built with modern technologies and best practices.",
    badge: "Popular",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful and intuitive user interfaces that enhance user experience.",
    badge: null,
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications for iOS and Android.",
    badge: "New",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Improve your search engine rankings and drive organic traffic.",
    badge: null,
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimize your applications for speed, scalability, and efficiency.",
    badge: null,
  },
  {
    icon: Shield,
    title: "Security",
    description:
      "Enterprise-grade security solutions to protect your data and users.",
    badge: "Featured",
  },
];

export function OurServicesSectionBaseui() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-background px-4 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
            Our Services
          </span>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            What We Offer
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Comprehensive solutions tailored to meet your business needs and
            drive growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} variants={itemVariants}>
                <div className="group relative h-full rounded-lg border-2 border-border bg-card p-6 text-card-foreground shadow-sm transition-all hover:border-primary hover:shadow-xl">
                  {service.badge && (
                    <span className="absolute -right-2 -top-2 inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-semibold bg-primary text-primary-foreground">
                      {service.badge}
                    </span>
                  )}
                  <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="mb-4 text-muted-foreground">
                    {service.description}
                  </p>
                  <Button className="group/btn inline-flex h-9 items-center rounded-md bg-transparent px-3 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
                    Learn More
                    <motion.span
                      className="ml-1 inline-block"
                      whileHover={{ x: 5 }}
                    >
                      →
                    </motion.span>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
