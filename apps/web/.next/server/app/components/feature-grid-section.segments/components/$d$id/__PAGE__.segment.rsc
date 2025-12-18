1:"$Sreact.fragment"
2:I[176430,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"default"]
a:I[897367,["/_next/static/chunks/d96012bcfc98706a.js","/_next/static/chunks/c1216787d4b31b65.js"],"OutletBoundary"]
b:"$Sreact.suspense"
3:Tfd0,"use client";

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
4:Tfea,"use client";

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

export function FeatureGridSectionBaseui() {
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
          <p className="text-sm text-foreground/70 sm:text-base md:text-lg">
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
                <div className="h-full rounded-lg border border-border bg-card text-card-foreground shadow-sm transition-all hover:shadow-lg">
                  <div className="flex flex-col space-y-1.5 p-6">
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
                        className="h-6 w-6 text-muted-foreground"
                        aria-hidden="true"
                      />
                    </motion.div>
                    <h3 className="text-xl font-semibold leading-none tracking-tight">
                      {feature.title}
                    </h3>
                  </div>
                  <div className="p-6 pt-0">
                    <p className="text-base text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
5:Tfd0,"use client";

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
0:{"buildId":"bFBIq5AO28jMw9-shWxSc","rsc":["$","$1","c",{"children":[["$","$L2",null,{"code":"$3","variantCodes":{},"baseId":"feature-grid-section","baseuiCode":"$4","shadcnuiCode":"$5"}],["$L6","$L7","$L8"],"$L9"]}],"loading":null,"isPartial":false}
6:["$","script","script-0",{"src":"/_next/static/chunks/caa50e77cf52fdaa.js","async":true}]
7:["$","script","script-1",{"src":"/_next/static/chunks/e0bc9c3a4105a6fe.js","async":true}]
8:["$","script","script-2",{"src":"/_next/static/chunks/48913bc585f72fa4.js","async":true}]
9:["$","$La",null,{"children":["$","$b",null,{"name":"Next.MetadataOutlet","children":"$@c"}]}]
c:null
