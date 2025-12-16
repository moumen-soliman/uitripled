"use client";

import { Button } from "@base-ui/react/button";
import { motion, type Variants } from "framer-motion";
import { Infinity } from "lucide-react";

const partnerLogos = [
  { name: "Next.js", logo: "/logos/nextjs.svg" },
  { name: "Shadcn", logo: "/logos/shadcn.svg" },
  { name: "Tailwind CSS", logo: "/logos/tailwindcss.svg" },
  { name: "TanStack", logo: "/logos/tanstack.svg" },
];

const PartnerVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function GlassmorphismLogoShowcaseBlockBaseui() {
  return (
    <section className="relative overflow-hidden px-6 py-24 lg:py-32">
      <div className="mx-auto grid">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-border/50 bg-background/45 p-10 backdrop-blur-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.05] via-transparent to-transparent" />
          <div className="relative space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/55 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-foreground/70 backdrop-blur">
              <Infinity className="h-3.5 w-3.5" />
              partners trustline
            </span>
            <h2 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              The lightweight showcase that makes every partner feel spotlighted
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-foreground/70 md:text-lg">
              A floating glass canvas beautifully arranges your most trusted
              brands. The subtle drift animation gives the lineup life without
              stealing the focus.
            </p>
            <motion.div
              variants={PartnerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-6 justify-center items-center"
            >
              {partnerLogos.map((partner) => (
                <motion.div key={partner.name} variants={PartnerVariants}>
                  <div className="relative flex h-21 w-21 items-center justify-center ">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="object-contain opacity-60 transition-opacity group-hover:opacity-100"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Button className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                Add your brand
              </Button>
              <Button className="inline-flex h-12 items-center justify-center rounded-full border border-input bg-background px-7 text-sm font-medium uppercase tracking-[0.2em] text-foreground/80 ring-offset-background transition-colors hover:bg-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                Download kit
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
