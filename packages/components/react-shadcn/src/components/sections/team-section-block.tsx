"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Neutral placeholder avatar, generated inline. The previous build fetched
 * every face from `api.dicebear.com`, which put a network dependency (and a
 * third-party request) inside a component people copy into their own projects.
 * Pass `image` to swap in a real photo.
 */
function grayAvatar(initials: string) {
  const svg =
    `%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E` +
    `%3Crect width='160' height='160' fill='%23d4d4d4'/%3E` +
    `%3Ctext x='50%25' y='50%25' dy='.35em' text-anchor='middle' ` +
    `font-family='system-ui,-apple-system,sans-serif' font-size='56' font-weight='600' ` +
    `fill='%23737373'%3E${initials}%3C/text%3E%3C/svg%3E`;
  return `data:image/svg+xml,${svg}`;
}

const initialsOf = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image?: string;
  location: string;
  skills: string[];
  social: { twitter?: string; linkedin?: string; github?: string; email?: string };
};

const teamMembers: TeamMember[] = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    bio: "Visionary leader with 15+ years in tech",
    location: "San Francisco",
    skills: ["Strategy", "Leadership", "Innovation"],
    social: {
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/",
      github: "https://github.com/",
      email: "sarah@example.com",
    },
  },
  {
    name: "Michael Chen",
    role: "CTO",
    bio: "Full-stack architect and AI enthusiast",
    location: "New York",
    skills: ["AI/ML", "Architecture", "Cloud"],
    social: {
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/",
      github: "https://github.com/",
      email: "michael@example.com",
    },
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Design",
    bio: "Creative mind behind beautiful interfaces",
    location: "London",
    skills: ["UI/UX", "Branding", "Motion"],
    social: {
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/",
      github: "https://github.com/",
      email: "emily@example.com",
    },
  },
  {
    name: "David Park",
    role: "Lead Developer",
    bio: "Code wizard and performance optimizer",
    location: "Tokyo",
    skills: ["React", "TypeScript", "Performance"],
    social: {
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/",
      github: "https://github.com/",
      email: "david@example.com",
    },
  },
];

const EASE_OUT: [number, number, number, number] = [0.2, 0, 0, 1];

function TeamMemberCard({ member }: { member: TeamMember }) {
  const socials = [
    { key: "twitter", icon: Twitter, label: "X (Twitter)", href: member.social.twitter },
    { key: "linkedin", icon: Linkedin, label: "LinkedIn", href: member.social.linkedin },
    { key: "github", icon: Github, label: "GitHub", href: member.social.github },
    {
      key: "email",
      icon: Mail,
      label: "Email",
      href: member.social.email ? `mailto:${member.social.email}` : undefined,
    },
  ].filter((s) => s.href);

  return (
    <motion.div variants={itemVariants} className="flex">
      <Card
        className={cn(
          "group relative flex w-full flex-col items-center overflow-hidden rounded-2xl border border-border bg-card p-6 text-center",
          "transition-[border-color,box-shadow] duration-300 ease-[cubic-bezier(0.2,0,0,1)]",
          "hover:border-foreground/25 hover:shadow-md motion-reduce:transition-none"
        )}
      >
        <div className="mb-4 size-28 overflow-hidden rounded-full border border-border bg-muted">
          <img
            src={member.image ?? grayAvatar(initialsOf(member.name))}
            alt=""
            width={112}
            height={112}
            className="size-full object-cover"
          />
        </div>

        <h3 className="mb-1 text-xl font-semibold tracking-tight text-foreground">
          {member.name}
        </h3>
        <Badge variant="secondary" className="mb-2 text-xs font-medium">
          {member.role}
        </Badge>

        <p className="mb-3 flex items-center justify-center gap-1 text-xs text-muted-foreground">
          <MapPin className="size-3" aria-hidden />
          {member.location}
        </p>

        <p className="mb-4 text-pretty text-sm text-muted-foreground">{member.bio}</p>

        <ul className="mb-5 flex flex-wrap justify-center gap-1.5">
          {member.skills.map((skill) => (
            <li key={skill}>
              <Badge variant="outline" className="text-xs font-normal">
                {skill}
              </Badge>
            </li>
          ))}
        </ul>

        {/*
          These were icon-only <Button>s with the icon aria-hidden and the
          label never rendered, so all four announced as an unnamed "button"
          and none of them navigated anywhere.
        */}
        <ul className="mt-auto flex justify-center gap-1.5">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <li key={social.key}>
                <Button
                  asChild
                  size="icon"
                  variant="ghost"
                  className="size-9 rounded-full text-muted-foreground hover:text-foreground"
                >
                  <a
                    href={social.href}
                    aria-label={`${member.name} on ${social.label}`}
                  >
                    <Icon className="size-4" aria-hidden />
                  </a>
                </Button>
              </li>
            );
          })}
        </ul>
      </Card>
    </motion.div>
  );
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
};

export function TeamSectionBlock() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = shouldReduceMotion
    ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0 } }
    : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, ease: EASE_OUT } };

  return (
    <section
      aria-labelledby="team-section-heading"
      className="relative w-full overflow-hidden px-4 py-20 sm:px-6 lg:px-10"
    >
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-24 -top-24 size-96 rounded-full bg-foreground/[0.06] blur-[160px]" />
        <div className="absolute -bottom-24 -left-24 size-96 rounded-full bg-foreground/[0.04] blur-[160px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <motion.div {...reveal} className="mb-16 text-center">
          <Badge variant="secondary" className="mb-6 gap-2">
            Our team
          </Badge>

          <h2
            id="team-section-heading"
            className="mb-6 text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl"
          >
            Meet the people behind our success
          </h2>

          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            A diverse team of talented individuals working together to build
            amazing products and deliver exceptional results.
          </p>
        </motion.div>

        <motion.div
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          animate={shouldReduceMotion ? undefined : "visible"}
          className="grid gap-6 sm:grid-cols-2"
        >
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </motion.div>

        <motion.div {...reveal} className="mt-16 text-center">
          <Card className="inline-flex flex-col items-center gap-4 rounded-2xl border border-border bg-card px-10 py-8">
            <h3 className="text-2xl font-semibold tracking-tight">
              Join our team
            </h3>
            <p className="max-w-xl text-pretty text-sm text-muted-foreground">
              We&apos;re always looking for talented people to join our mission.
            </p>
            <Button size="lg" className="rounded-full px-8">
              View open positions
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
