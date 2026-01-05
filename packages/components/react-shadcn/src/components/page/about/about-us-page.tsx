"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import {
  Award,
  Globe,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

const pageVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const stats = [
  { label: "Years Building UI Interfaces", value: "12+" },
  { label: "Global Teams Empowered", value: "320+" },
  { label: "Customer Satisfaction", value: "97%" },
  { label: "Accessibility Score", value: "AA+" },
];

const values = [
  {
    title: "Human-Centered",
    description:
      "We obsess over inclusive experiences that anticipate needs and remove friction.",
    icon: HeartHandshake,
  },
  {
    title: "Craft Excellence",
    description:
      "From micro-interactions to complex flows, every detail is intentional and polished.",
    icon: Sparkles,
  },
  {
    title: "Secure Foundations",
    description:
      "Privacy-first architecture with resilient infrastructure and transparent practices.",
    icon: ShieldCheck,
  },
  {
    title: "Global Perspective",
    description:
      "Distributed teams spanning 10 time zones collaborating in sync around shared rituals.",
    icon: Globe,
  },
];

const leadership = [
  {
    name: "Jordan Wells",
    role: "Founder & Principal Designer",
    quote:
      "Design should feel inevitable, Every interaction should communicate clarity and warmth.",
  },
  {
    name: "Amina Patel",
    role: "Head of Product Engineering",
    quote:
      "We engineer for longevity. Our systems are modular, accessible, and built to evolve.",
  },
  {
    name: "Leo Martins",
    role: "Director of Customer Experience",
    quote:
      "Listening deeply to customers is how we stay ahead and deliver meaningful change.",
  },
];

const milestones = [
  {
    year: "2013",
    title: "Founding",
    description:
      "Launched as a distributed studio focused on inclusive product experiences for early-stage teams.",
  },
  {
    year: "2016",
    title: "Design Systems Practice",
    description:
      "Introduced our systems framework, enabling global clients to scale consistent interfaces faster.",
  },
  {
    year: "2019",
    title: "Motion Intelligence",
    description:
      "Expanded engineering capabilities with motion-first workflows and accessibility audits baked in.",
  },
  {
    year: "2022",
    title: "Global Partnerships",
    description:
      "Partnered with enterprise platforms to evolve mission-critical experiences across 42 countries.",
  },
  {
    year: "2024",
    title: "AI-Assisted Craft",
    description:
      "Launched AI-assisted tooling that keeps designers in control while accelerating iteration cycles.",
  },
];

export function AboutUsPage() {
  return (
    <main
      className="relative min-h-screen overflow-hidden bg-background text-foreground"
      role="main"
      aria-label="About us"
    >
      <motion.div
        className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16 md:gap-24 lg:px-0 lg:py-16"
        variants={pageVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.section
          className="grid gap-10 rounded-3xl border border-border/40 bg-background/60 p-10 backdrop-blur"
          variants={cardVariants}
          role="article"
          aria-labelledby="about-hero-heading"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-6">
              <Badge className="inline-flex items-center gap-2 rounded-full border-border/50 bg-background/55 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-foreground/70 backdrop-blur">
                <Users className="h-4 w-4 text-primary" aria-hidden="true" />
                Our Story
              </Badge>
              <div className="space-y-4">
                <motion.h1
                  id="about-hero-heading"
                  className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
                  aria-label="Crafting human experiences through motion and design"
                >
                  Crafting human experiences through motion and design
                </motion.h1>
                <p className="max-w-2xl text-lg text-foreground/70">
                  We are a multidisciplinary collective of designers, engineers,
                  and strategists building accessible, emotionally resonant
                  interfaces for teams who value craft and measurable impact.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-3 md:items-end">
              <div className="rounded-2xl border border-border/40 bg-background/60 p-6 backdrop-blur">
                <div className="flex items-center gap-4">
                  <Target
                    className="h-10 w-10 text-primary"
                    aria-hidden="true"
                  />
                  <div className="space-y-1">
                    <p className="text-sm uppercase tracking-[0.2em] text-foreground/60">
                      Purpose
                    </p>
                    <p className="text-sm text-foreground/70">
                      Give digital products a tangible sense of care.
                    </p>
                  </div>
                </div>
              </div>
              <Button
                variant="default"
                className="gap-2 rounded-lg bg-primary px-6 py-3 text-sm uppercase tracking-[0.2em] text-primary-foreground hover:bg-primary/90"
                aria-label="Explore our capabilities"
              >
                Explore our capabilities
              </Button>
            </div>
          </div>
          <motion.ul
            role="list"
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((stat) => (
              <motion.li
                key={stat.label}
                className="group/item relative overflow-hidden rounded-2xl border border-border/30 bg-background/50 p-6 transition-all hover:border-border/60 hover:bg-background/70"
                variants={cardVariants}
                whileHover={{ y: -6 }}
                role="listitem"
                aria-label={`${stat.value} ${stat.label}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/item:opacity-100" />
                <div className="relative space-y-2">
                  <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-semibold tracking-tight text-foreground">
                    {stat.value}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>

        <motion.section
          className="space-y-8"
          variants={cardVariants}
          role="article"
          aria-labelledby="values-heading"
        >
          <div className="space-y-3">
            <Badge className="inline-flex items-center gap-2 rounded-full border-border/50 bg-background/55 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-foreground/70 backdrop-blur">
              <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
              Our DNA
            </Badge>
            <div className="space-y-2">
              <h2
                id="values-heading"
                className="text-2xl font-semibold tracking-tight text-foreground"
              >
                Principles that guide every engagement
              </h2>
              <p className="max-w-2xl text-foreground/70">
                We scale with intention, placing relationships, trust, and
                measurable outcomes at the center of every partnership.
              </p>
            </div>
          </div>
          <motion.ul
            role="list"
            className="grid gap-6 md:grid-cols-2"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.08 },
              },
            }}
          >
            {values.map((value) => (
              <motion.li
                key={value.title}
                variants={cardVariants}
                className="group/item relative flex flex-col gap-4 overflow-hidden rounded-2xl bg-background/60 p-6 shadow-lg shadow-black/5 backdrop-blur transition-all hover:-translate-y-1 hover:shadow-xl"
                whileHover={{ y: -4 }}
                role="listitem"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.06] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/item:opacity-100" />
                <div className="relative flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border/30 bg-background/60">
                    <value.icon
                      className="h-6 w-6 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-base font-medium text-foreground">
                    {value.title}
                  </h3>
                </div>
                <p className="relative text-sm text-foreground/70">
                  {value.description}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>

        <motion.section
          className="space-y-8"
          variants={cardVariants}
          role="article"
          aria-labelledby="team-heading"
        >
          <div className="space-y-3">
            <Badge className="inline-flex items-center gap-2 rounded-full border-border/50 bg-background/55 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-foreground/70 backdrop-blur">
              <Award className="h-4 w-4 text-primary" aria-hidden="true" />
              Leadership
            </Badge>
            <div className="space-y-2">
              <h2
                id="team-heading"
                className="text-2xl font-semibold tracking-tight text-foreground"
              >
                A collective focused on meaningful outcomes
              </h2>
              <p className="max-w-2xl text-foreground/70">
                Our leadership team brings together decades of experience in
                product design, systems architecture, and customer advocacy to
                deliver durable, human-centered solutions.
              </p>
            </div>
          </div>

          <motion.ul
            role="list"
            className="grid gap-6 md:grid-cols-3"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.08 },
              },
            }}
          >
            {leadership.map((leader) => (
              <motion.li
                key={leader.name}
                variants={cardVariants}
                className="group/item relative flex flex-col gap-4 overflow-hidden rounded-2xl bg-background/60 p-6 shadow-lg shadow-black/5 backdrop-blur transition-all hover:-translate-y-1 hover:shadow-xl"
                whileHover={{ y: -4 }}
                role="listitem"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.05] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/item:opacity-100" />
                <div className="relative flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-16 items-center justify-center rounded-full border border-border/30 bg-background/60 text-sm font-semibold uppercase tracking-[0.2em] text-foreground/70">
                      {leader.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {leader.name}
                      </p>
                      <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">
                        {leader.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/70">{leader.quote}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>

          <div className="flex flex-col gap-4 rounded-3xl bg-background/40 p-8 backdrop-blur md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <p className="text-sm uppercase tracking-[0.25em] text-foreground/60">
                Our Commitment
              </p>
              <p className="text-base text-foreground/70">
                We partner with organizations who believe that accessible,
                emotionally intelligent products create loyal communities.
              </p>
            </div>
            <Button
              variant="outline"
              className="gap-2 rounded-full border-border/40 bg-background/60 px-6 py-3 text-xs uppercase tracking-[0.2em] text-foreground/70 transition-all hover:border-border/60 hover:text-foreground"
              aria-label="Meet the team"
            >
              Meet the team
            </Button>
          </div>
        </motion.section>

        <motion.section
          className="space-y-8"
          variants={cardVariants}
          role="article"
          aria-labelledby="journey-heading"
        >
          <div className="space-y-3">
            <Badge className="inline-flex items-center gap-2 rounded-full border-border/50 bg-background/55 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-foreground/70 backdrop-blur">
              <Target className="h-4 w-4 text-primary" aria-hidden="true" />
              Our Journey
            </Badge>
            <div className="space-y-2">
              <h2
                id="journey-heading"
                className="text-2xl font-semibold tracking-tight text-foreground"
              >
                Milestones that shaped our studio
              </h2>
              <p className="max-w-2xl text-foreground/70">
                A decade of designing for resilience, joy, and measurable
                business outcomes.
              </p>
            </div>
          </div>

          <motion.ul
            role="list"
            className="grid gap-6 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.08 },
              },
            }}
          >
            {milestones.map((milestone, index) => (
              <motion.li
                key={milestone.year}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      ease: "easeOut",
                      delay: index * 0.04,
                    },
                  },
                }}
                className="group/item relative flex flex-col gap-3 overflow-hidden rounded-2xl bg-background/60 p-6 shadow-lg shadow-black/5 backdrop-blur transition-all hover:-translate-y-1 hover:shadow-xl"
                role="listitem"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/item:opacity-100" />
                <div className="relative space-y-2">
                  <p className="text-xs uppercase tracking-[0.25em] text-foreground/50">
                    {milestone.year}
                  </p>
                  <h3 className="text-base font-medium text-foreground">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-foreground/70">
                    {milestone.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>
      </motion.div>
    </main>
  );
}
