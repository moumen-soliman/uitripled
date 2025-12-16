"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import {
  Download,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Star,
} from "lucide-react";

const RESUME_DATA = {
  personalInfo: {
    name: "John Doe",
    title: "Senior Full Stack Developer",
    summary:
      "Passionate developer with 8+ years of experience building scalable web applications. Specializing in React, Node.js, and cloud architecture.",
    location: "San Francisco, CA",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    avatarUrl: "https://github.com/shadcn.png",
    initials: "JD",
    socials: [
      { name: "GitHub", icon: Github, url: "#" },
      { name: "LinkedIn", icon: Linkedin, url: "#" },
      { name: "Portfolio", icon: Globe, url: "#" },
    ],
  },
  experience: [
    {
      role: "Senior Full Stack Developer",
      company: "Tech Corp Inc.",
      period: "2021 - Present",
      location: "San Francisco, CA",
      achievements: [
        "Led the frontend team in rebuilding the core product using Next.js 14 and React, improving performance by 40%",
        "Architected and implemented a microservices-based backend using Node.js and GraphQL",
        "Mentored 5 junior developers and conducted weekly code review sessions",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "StartUp Ltd.",
      period: "2019 - 2021",
      location: "Remote",
      achievements: [
        "Developed and maintained multiple client-facing applications with 99.9% uptime",
        "Implemented CI/CD pipelines using GitHub Actions, reducing deployment time by 60%",
        "Built a real-time analytics dashboard using React and WebSockets",
      ],
    },
    {
      role: "Junior Developer",
      company: "Digital Agency",
      period: "2017 - 2019",
      location: "New York, NY",
      achievements: [
        "Contributed to 20+ client projects using React, Vue.js, and WordPress",
        "Optimized web applications for SEO and accessibility (WCAG 2.1 AA)",
      ],
    },
  ],
  projects: [
    {
      name: "E-commerce Platform",
      tech: ["Next.js", "Stripe", "Prisma"],
      desc: "A full-featured online store with real-time inventory management and payment processing.",
      stars: "2.3k",
    },
    {
      name: "Task Management App",
      tech: ["React", "Firebase", "Tailwind"],
      desc: "Collaborative task manager with drag-and-drop interface and real-time updates.",
      stars: "1.8k",
    },
    {
      name: "Analytics Dashboard",
      tech: ["Vue.js", "D3.js", "Node.js"],
      desc: "Real-time data visualization platform with custom chart components.",
      stars: "1.2k",
    },
    {
      name: "Social Media API",
      tech: ["GraphQL", "PostgreSQL", "Redis"],
      desc: "Scalable REST and GraphQL API serving 100k+ daily requests.",
      stars: "890",
    },
  ],
  skills: [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "GraphQL", "PostgreSQL", "MongoDB"],
    },
    {
      category: "DevOps & Tools",
      skills: ["Docker", "AWS", "CI/CD", "Git", "Vercel"],
    },
  ],
  education: [
    {
      degree: "BS Computer Science",
      institution: "University of Technology",
      period: "2015 - 2019",
      extra: "GPA: 3.8/4.0",
    },
    {
      degree: "Full Stack Web Development",
      institution: "Code Academy Bootcamp",
      period: "2019",
      extra: "Certificate",
    },
    {
      degree: "AWS Certified Solutions Architect",
      institution: "Amazon Web Services",
      period: "2022",
      extra: null,
    },
  ],
  languages: [
    { lang: "English", level: "Native", percentage: 100 },
    { lang: "Spanish", level: "Professional", percentage: 75 },
    { lang: "French", level: "Intermediate", percentage: 50 },
    { lang: "Mandarin", level: "Basic", percentage: 30 },
  ],
};

export function ResumeCard() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 md:p-8 bg-background">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-12"
      >
        {/* Header Section */}
        <motion.div variants={item} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Avatar className="w-24 h-24 md:w-28 md:h-28">
                <AvatarImage
                  src={RESUME_DATA.personalInfo.avatarUrl}
                  alt="Profile"
                />
                <AvatarFallback>
                  {RESUME_DATA.personalInfo.initials}
                </AvatarFallback>
              </Avatar>
            </motion.div>

            <div className="flex-1 text-center md:text-left space-y-3">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                  {RESUME_DATA.personalInfo.name}
                </h1>
                <p className="text-lg text-muted-foreground font-medium mt-1">
                  {RESUME_DATA.personalInfo.title}
                </p>
              </div>

              <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
                {RESUME_DATA.personalInfo.summary}
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 text-sm text-muted-foreground pt-2">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  <span>{RESUME_DATA.personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-4 h-4" />
                  <span>{RESUME_DATA.personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4" />
                  <span>{RESUME_DATA.personalInfo.phone}</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
                {RESUME_DATA.personalInfo.socials.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="gap-2"
                  >
                    <social.icon className="w-4 h-4" />
                    {social.name}
                  </Button>
                ))}
                <Button size="sm" className="gap-2">
                  <Download className="w-4 h-4" />
                  Download PDF
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        <Separator />

        {/* Experience */}
        <motion.div variants={item} className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            Experience
          </h2>

          <div className="space-y-8">
            {RESUME_DATA.experience.map((job, index) => (
              <div key={index} className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {job.role}
                    </h3>
                    <p className="font-medium">{job.company}</p>
                    <p className="text-xs text-muted-foreground">
                      {job.location}
                    </p>
                  </div>
                  <Badge variant="secondary" className="w-fit">
                    {job.period}
                  </Badge>
                </div>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-accent mt-0.5">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                {index < RESUME_DATA.experience.length - 1 && (
                  <Separator className="mt-6" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <Separator />

        {/* Projects */}
        <motion.div variants={item} className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            Featured Projects
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {RESUME_DATA.projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-5 rounded-lg bg-accent/5 hover:bg-accent/10 transition-colors cursor-pointer space-y-3"
              >
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-foreground">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="w-3 h-3 fill-accent text-accent" />
                    <span>{project.stars}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{project.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <Separator />

        {/* Skills */}
        <motion.div variants={item} className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">Skills</h2>

          <div className="space-y-5">
            {RESUME_DATA.skills.map((group, index) => (
              <div key={index}>
                <h4 className="text-sm font-semibold text-muted-foreground mb-3">
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <Separator />

        {/* Education */}
        <motion.div variants={item} className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            Education
          </h2>

          <div className="space-y-5">
            {RESUME_DATA.education.map((edu, index) => (
              <div key={index}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {edu.period}
                  </span>
                </div>
                {edu.extra && (
                  <Badge variant="outline" className="mt-2 text-xs">
                    {edu.extra}
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <Separator />

        {/* Languages */}
        <motion.div variants={item} className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            Languages
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {RESUME_DATA.languages.map((language, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-foreground">
                    {language.lang}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {language.level}
                  </span>
                </div>
                <div className="w-full bg-accent/20 h-2 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${language.percentage}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className="bg-accent h-full rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
