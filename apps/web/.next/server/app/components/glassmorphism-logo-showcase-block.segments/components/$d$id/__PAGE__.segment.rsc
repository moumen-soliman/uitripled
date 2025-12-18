1:"$Sreact.fragment"
2:I[176430,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"default"]
a:I[897367,["/_next/static/chunks/d96012bcfc98706a.js","/_next/static/chunks/c1216787d4b31b65.js"],"OutletBoundary"]
b:"$Sreact.suspense"
3:Te4d,"use client";

import { motion, type Variants } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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

export function GlassmorphismLogoShowcaseBlock() {
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
            <Badge
              variant="outline"
              className="inline-flex items-center gap-2 rounded-full border-border/50 bg-background/55 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-foreground/70 backdrop-blur"
            >
              <Infinity className="h-3.5 w-3.5" />
              partners trustline
            </Badge>
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
              {partnerLogos.map((partner, index) => (
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
              <Button
                size="lg"
                className="h-12 rounded-full px-7 text-sm uppercase tracking-[0.2em]"
              >
                Add your brand
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-full px-7 text-sm uppercase tracking-[0.2em] text-foreground/80 hover:bg-foreground/5"
              >
                Download kit
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
4:Tf8e,"use client";

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
5:Te4d,"use client";

import { motion, type Variants } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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

export function GlassmorphismLogoShowcaseBlock() {
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
            <Badge
              variant="outline"
              className="inline-flex items-center gap-2 rounded-full border-border/50 bg-background/55 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-foreground/70 backdrop-blur"
            >
              <Infinity className="h-3.5 w-3.5" />
              partners trustline
            </Badge>
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
              {partnerLogos.map((partner, index) => (
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
              <Button
                size="lg"
                className="h-12 rounded-full px-7 text-sm uppercase tracking-[0.2em]"
              >
                Add your brand
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-full px-7 text-sm uppercase tracking-[0.2em] text-foreground/80 hover:bg-foreground/5"
              >
                Download kit
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
0:{"buildId":"bFBIq5AO28jMw9-shWxSc","rsc":["$","$1","c",{"children":[["$","$L2",null,{"code":"$3","variantCodes":{},"baseId":"glassmorphism-logo-showcase-block","baseuiCode":"$4","shadcnuiCode":"$5"}],["$L6","$L7","$L8"],"$L9"]}],"loading":null,"isPartial":false}
6:["$","script","script-0",{"src":"/_next/static/chunks/caa50e77cf52fdaa.js","async":true}]
7:["$","script","script-1",{"src":"/_next/static/chunks/e0bc9c3a4105a6fe.js","async":true}]
8:["$","script","script-2",{"src":"/_next/static/chunks/48913bc585f72fa4.js","async":true}]
9:["$","$La",null,{"children":["$","$b",null,{"name":"Next.MetadataOutlet","children":"$@c"}]}]
c:null
