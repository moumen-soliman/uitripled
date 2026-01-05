"use client";

import { Card } from "@/components/ui/card";
import { motion, type Variants } from "framer-motion";

const partners = [
  { name: "Next.js", logo: "/logos/nextjs.svg" },
  { name: "Framer Motion", logo: "/logos/framer-motion.svg" },
  { name: "Shadcn", logo: "/logos/shadcn.svg" },
  { name: "Tailwind CSS", logo: "/logos/tailwindcss.svg" },
  { name: "TypeScript", logo: "/logos/typescript.svg" },
  { name: "TanStack", logo: "/logos/tanstack.svg" },
];

export function OurPartnersSection() {
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
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-muted/30 px-4 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Partners</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Trusted by leading companies worldwide. We're proud to work with
            industry leaders.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6"
        >
          {partners.map((partner, index) => (
            <motion.div key={partner.name} variants={itemVariants}>
              <Card className="group flex h-32 items-center justify-center border-2 bg-background transition-all hover:border-primary hover:shadow-lg">
                <div className="relative flex h-16 w-16 items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-full w-full object-contain opacity-60 transition-opacity group-hover:opacity-100"
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
