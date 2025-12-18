1:"$Sreact.fragment"
2:I[176430,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"default"]
a:I[897367,["/_next/static/chunks/d96012bcfc98706a.js","/_next/static/chunks/c1216787d4b31b65.js"],"OutletBoundary"]
b:"$Sreact.suspense"
3:T1c31,"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  BarChart3,
  Code,
  Palette,
  Rocket,
  Settings,
  Shield,
  Users,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Build modern, responsive websites with cutting-edge technologies and best practices.",
    features: ["React & Next.js", "TypeScript", "Performance Optimized"],
    iconColor: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Create beautiful, intuitive interfaces that users love and convert.",
    features: ["User Research", "Wireframing", "Prototyping"],
    iconColor: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Rocket,
    title: "Product Strategy",
    description:
      "Plan and execute product roadmaps that align with business goals.",
    features: ["Market Analysis", "MVP Planning", "Go-to-Market"],
    iconColor: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description:
      "Protect your application with enterprise-grade security measures.",
    features: ["Data Encryption", "GDPR Compliant", "Security Audits"],
    iconColor: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Optimize your applications for speed, reliability, and scalability.",
    features: ["Code Splitting", "Caching", "CDN Integration"],
    iconColor: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Tools and workflows that enable seamless team communication.",
    features: ["Real-time Sync", "Version Control", "Comments"],
    iconColor: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Track, measure, and analyze your application performance metrics.",
    features: ["Custom Dashboards", "Real-time Data", "Reports"],
    iconColor: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    icon: Settings,
    title: "API Integration",
    description:
      "Connect with any third-party service through our flexible API.",
    features: ["RESTful APIs", "Webhooks", "Documentation"],
    iconColor: "text-slate-500",
    bgColor: "bg-slate-500/10",
  },
];

export function ServicesGridBlock() {
  return (
    <section className="w-full bg-background px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          <Badge className="mb-4" variant="secondary">
            What We Offer
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Complete Solutions for Your Business
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
            Everything you need to build, launch, and scale your digital
            products with confidence
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <Card className="group relative h-full overflow-hidden border-border/50 bg-card p-4 transition-all hover:border-primary/50 hover:shadow-xl md:p-6">
                  {/* Gradient overlay */}
                  <motion.div
                    className={`absolute inset-0 ${service.bgColor} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div transition={{ duration: 0.6 }} className="mb-4">
                      <div
                        className={`w-fit rounded-xl ${service.bgColor} p-3`}
                      >
                        <Icon
                          className={`h-6 w-6 ${service.iconColor} md:h-7 md:w-7`}
                        />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <h3 className="mb-2 text-lg font-semibold md:text-xl">
                      {service.title}
                    </h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="mb-4 space-y-1.5">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + idx * 0.1 }}
                          className="flex items-center gap-2 text-xs text-muted-foreground"
                        >
                          <div className={`h-1 w-1 rounded-full bg-primary`} />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="group/btn w-full text-xs md:text-sm"
                    >
                      Learn More
                      <motion.span
                        className="ml-2"
                        animate={{ x: [0, 3, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.5,
                          ease: "easeInOut",
                        }}
                      >
                        →
                      </motion.span>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-12 text-center md:mt-16"
        >
          <p className="mb-4 text-sm text-muted-foreground md:text-base">
            Need a custom solution?
          </p>
          <Button size="lg">Contact Our Team</Button>
        </motion.div>
      </div>
    </section>
  );
}
4:T1e07,"use client";

import { Button } from "@base-ui/react/button";
import { motion } from "framer-motion";
import {
  BarChart3,
  Code,
  Palette,
  Rocket,
  Settings,
  Shield,
  Users,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Build modern, responsive websites with cutting-edge technologies and best practices.",
    features: ["React & Next.js", "TypeScript", "Performance Optimized"],
    iconColor: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Create beautiful, intuitive interfaces that users love and convert.",
    features: ["User Research", "Wireframing", "Prototyping"],
    iconColor: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Rocket,
    title: "Product Strategy",
    description:
      "Plan and execute product roadmaps that align with business goals.",
    features: ["Market Analysis", "MVP Planning", "Go-to-Market"],
    iconColor: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description:
      "Protect your application with enterprise-grade security measures.",
    features: ["Data Encryption", "GDPR Compliant", "Security Audits"],
    iconColor: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Optimize your applications for speed, reliability, and scalability.",
    features: ["Code Splitting", "Caching", "CDN Integration"],
    iconColor: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Tools and workflows that enable seamless team communication.",
    features: ["Real-time Sync", "Version Control", "Comments"],
    iconColor: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Track, measure, and analyze your application performance metrics.",
    features: ["Custom Dashboards", "Real-time Data", "Reports"],
    iconColor: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    icon: Settings,
    title: "API Integration",
    description:
      "Connect with any third-party service through our flexible API.",
    features: ["RESTful APIs", "Webhooks", "Documentation"],
    iconColor: "text-slate-500",
    bgColor: "bg-slate-500/10",
  },
];

export function ServicesGridBlockBaseui() {
  return (
    <section className="w-full bg-background px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          <span className="mb-4 inline-flex items-center rounded-full border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">
            What We Offer
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Complete Solutions for Your Business
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
            Everything you need to build, launch, and scale your digital
            products with confidence
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="group relative h-full overflow-hidden rounded-lg border border-border/50 bg-card p-4 text-card-foreground shadow-sm transition-all hover:border-primary/50 hover:shadow-xl md:p-6">
                  {/* Gradient overlay */}
                  <motion.div
                    className={`absolute inset-0 ${service.bgColor} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div transition={{ duration: 0.6 }} className="mb-4">
                      <div
                        className={`w-fit rounded-xl ${service.bgColor} p-3`}
                      >
                        <Icon
                          className={`h-6 w-6 ${service.iconColor} md:h-7 md:w-7`}
                        />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <h3 className="mb-2 text-lg font-semibold md:text-xl">
                      {service.title}
                    </h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="mb-4 space-y-1.5">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + idx * 0.1 }}
                          className="flex items-center gap-2 text-xs text-muted-foreground"
                        >
                          <div className={`h-1 w-1 rounded-full bg-primary`} />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Button className="group/btn inline-flex h-9 w-full items-center justify-center rounded-md bg-transparent px-3 text-xs text-foreground transition-colors hover:bg-accent hover:text-accent-foreground md:text-sm">
                      Learn More
                      <motion.span
                        className="ml-2"
                        animate={{ x: [0, 3, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.5,
                          ease: "easeInOut",
                        }}
                      >
                        →
                      </motion.span>
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-12 text-center md:mt-16"
        >
          <p className="mb-4 text-sm text-muted-foreground md:text-base">
            Need a custom solution?
          </p>
          <Button className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
            Contact Our Team
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
5:T1c31,"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  BarChart3,
  Code,
  Palette,
  Rocket,
  Settings,
  Shield,
  Users,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Build modern, responsive websites with cutting-edge technologies and best practices.",
    features: ["React & Next.js", "TypeScript", "Performance Optimized"],
    iconColor: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Create beautiful, intuitive interfaces that users love and convert.",
    features: ["User Research", "Wireframing", "Prototyping"],
    iconColor: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Rocket,
    title: "Product Strategy",
    description:
      "Plan and execute product roadmaps that align with business goals.",
    features: ["Market Analysis", "MVP Planning", "Go-to-Market"],
    iconColor: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description:
      "Protect your application with enterprise-grade security measures.",
    features: ["Data Encryption", "GDPR Compliant", "Security Audits"],
    iconColor: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Optimize your applications for speed, reliability, and scalability.",
    features: ["Code Splitting", "Caching", "CDN Integration"],
    iconColor: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Tools and workflows that enable seamless team communication.",
    features: ["Real-time Sync", "Version Control", "Comments"],
    iconColor: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Track, measure, and analyze your application performance metrics.",
    features: ["Custom Dashboards", "Real-time Data", "Reports"],
    iconColor: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    icon: Settings,
    title: "API Integration",
    description:
      "Connect with any third-party service through our flexible API.",
    features: ["RESTful APIs", "Webhooks", "Documentation"],
    iconColor: "text-slate-500",
    bgColor: "bg-slate-500/10",
  },
];

export function ServicesGridBlock() {
  return (
    <section className="w-full bg-background px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          <Badge className="mb-4" variant="secondary">
            What We Offer
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Complete Solutions for Your Business
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
            Everything you need to build, launch, and scale your digital
            products with confidence
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <Card className="group relative h-full overflow-hidden border-border/50 bg-card p-4 transition-all hover:border-primary/50 hover:shadow-xl md:p-6">
                  {/* Gradient overlay */}
                  <motion.div
                    className={`absolute inset-0 ${service.bgColor} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div transition={{ duration: 0.6 }} className="mb-4">
                      <div
                        className={`w-fit rounded-xl ${service.bgColor} p-3`}
                      >
                        <Icon
                          className={`h-6 w-6 ${service.iconColor} md:h-7 md:w-7`}
                        />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <h3 className="mb-2 text-lg font-semibold md:text-xl">
                      {service.title}
                    </h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="mb-4 space-y-1.5">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + idx * 0.1 }}
                          className="flex items-center gap-2 text-xs text-muted-foreground"
                        >
                          <div className={`h-1 w-1 rounded-full bg-primary`} />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="group/btn w-full text-xs md:text-sm"
                    >
                      Learn More
                      <motion.span
                        className="ml-2"
                        animate={{ x: [0, 3, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.5,
                          ease: "easeInOut",
                        }}
                      >
                        →
                      </motion.span>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-12 text-center md:mt-16"
        >
          <p className="mb-4 text-sm text-muted-foreground md:text-base">
            Need a custom solution?
          </p>
          <Button size="lg">Contact Our Team</Button>
        </motion.div>
      </div>
    </section>
  );
}
0:{"buildId":"bFBIq5AO28jMw9-shWxSc","rsc":["$","$1","c",{"children":[["$","$L2",null,{"code":"$3","variantCodes":{},"baseId":"services-grid-block","baseuiCode":"$4","shadcnuiCode":"$5"}],["$L6","$L7","$L8"],"$L9"]}],"loading":null,"isPartial":false}
6:["$","script","script-0",{"src":"/_next/static/chunks/caa50e77cf52fdaa.js","async":true}]
7:["$","script","script-1",{"src":"/_next/static/chunks/e0bc9c3a4105a6fe.js","async":true}]
8:["$","script","script-2",{"src":"/_next/static/chunks/48913bc585f72fa4.js","async":true}]
9:["$","$La",null,{"children":["$","$b",null,{"name":"Next.MetadataOutlet","children":"$@c"}]}]
c:null
