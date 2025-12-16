"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion, Variants } from "framer-motion";
import { Award, Heart, Target, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To deliver exceptional solutions that drive growth and innovation for our clients.",
  },
  {
    icon: Users,
    title: "Our Team",
    description:
      "A diverse group of talented professionals dedicated to excellence.",
  },
  {
    icon: Award,
    title: "Our Excellence",
    description:
      "Recognized for outstanding quality and innovation in everything we do.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Integrity, transparency, and commitment to our clients success.",
  },
];

export function AboutUsSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
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
          <Badge className="mb-4">About Us</Badge>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Who We Are
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We are a team of passionate professionals committed to delivering
            excellence and driving innovation in everything we do.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-2"
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div key={value.title} variants={itemVariants}>
                <Card className="group h-full border-2 p-6 transition-all hover:border-primary hover:shadow-lg">
                  <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 rounded-lg border-2 border-primary/20 bg-primary/5 p-8 text-center"
        >
          <h3 className="mb-4 text-2xl font-bold">Join Our Journey</h3>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            We're always looking for talented individuals to join our growing
            team. Let's build something amazing together.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
