"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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

export function OurServicesSection() {
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
          <Badge className="mb-4">Our Services</Badge>
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
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} variants={itemVariants}>
                <Card className="group relative h-full border-2 p-6 transition-all hover:border-primary hover:shadow-xl">
                  {service.badge && (
                    <Badge className="absolute -right-2 -top-2">
                      {service.badge}
                    </Badge>
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
                  <Button variant="ghost" size="sm" className="group/btn">
                    Learn More
                    <motion.span
                      className="ml-1 inline-block"
                      whileHover={{ x: 5 }}
                    >
                      →
                    </motion.span>
                  </Button>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
