"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion, Variants } from "framer-motion";
import {
  Briefcase,
  Building2,
  Code2,
  Download,
  ExternalLink,
  Globe,
  GraduationCap,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const RESUME_DATA = {
  personalInfo: {
    name: "Jordan Davis",
    title: "Senior Full Stack Engineer",
    summary:
      "Passionate developer with 5+ years of experience building scalable web applications. Dedicated to writing clean, efficient code and creating intuitive user experiences that delight users.",
    email: "jordan.davis@example.com",
    phone: "(555) 987-6543",
    location: "San Francisco, CA",
    avatarUrl: "https://github.com/shadcn.png",
    initials: "JD",
  },
  experience: [
    {
      role: "Senior Frontend Engineer",
      company: "TechFlow Systems",
      period: "2021 - Present",
      description: [
        "Spearheaded the migration of legacy codebase to Next.js, improving load times by 40%.",
        "Implemented a comprehensive design system using Tailwind CSS and Storybook, reducing development time by 25%.",
        "Mentored junior developers and established code quality standards through rigorous code reviews.",
      ],
    },
    {
      role: "Software Developer",
      company: "Creative Solutions Inc.",
      period: "2018 - 2021",
      description: [
        "Developed and maintained client-facing web applications using React and Redux.",
        "Collaborated with UX designers to implement responsive and accessible interfaces compliant with WCAG 2.1.",
        "Integrated third-party APIs for payment processing and data visualization.",
      ],
    },
  ],
  projects: [
    {
      title: "E-commerce Dashboard",
      type: "Open Source",
      description:
        "A comprehensive analytics dashboard for online retailers featuring real-time data visualization, inventory management, and sales forecasting.",
      tech: ["React", "D3.js", "Node.js"],
    },
    {
      title: "Task Management App",
      type: "SaaS",
      description:
        "Collaborative project management tool with real-time updates, team chat functionality, and automated workflow triggers.",
      tech: ["Vue.js", "Firebase", "Tailwind"],
    },
  ],
  education: [
    {
      degree: "Master of Computer Science",
      school: "Stanford University",
      year: "2016 - 2018",
    },
    {
      degree: "BS in Software Engineering",
      school: "MIT",
      year: "2012 - 2016",
    },
  ],
  skills: {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    backend: ["Node.js", "PostgreSQL", "GraphQL", "Redis"],
    tools: ["Git", "Docker", "AWS", "Figma"],
  },
  languages: [
    { name: "English", level: "Native" },
    { name: "Spanish", level: "Fluent" },
    { name: "French", level: "Intermediate" },
  ],
};

export function StandardResume() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="bg-card text-card-foreground rounded-2xl shadow-xl border border-border/50 overflow-hidden"
      >
        {/* Header Section with Gradient */}
        <motion.div
          variants={itemVariants}
          className="relative bg-gradient-to-br from-primary/5 via-muted/50 to-background p-8 md:p-12 border-b border-border/60"
        >
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl transform scale-110" />
              <Avatar className="h-32 w-32 md:h-40 md:w-40 border-4 border-background shadow-2xl relative">
                <AvatarImage
                  src={RESUME_DATA.personalInfo.avatarUrl}
                  alt="Profile picture"
                />
                <AvatarFallback className="text-4xl font-bold bg-primary/10 text-primary">
                  {RESUME_DATA.personalInfo.initials}
                </AvatarFallback>
              </Avatar>
            </motion.div>

            <div className="flex-1 space-y-4">
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-2">
                  {RESUME_DATA.personalInfo.name}
                </h1>
                <p className="text-xl md:text-2xl text-primary font-medium tracking-wide">
                  {RESUME_DATA.personalInfo.title}
                </p>
              </div>

              <p className="text-muted-foreground max-w-2xl mx-auto md:mx-0 leading-relaxed text-base md:text-lg">
                {RESUME_DATA.personalInfo.summary}
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 h-9 rounded-full bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all duration-300"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>{RESUME_DATA.personalInfo.email}</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 h-9 rounded-full bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all duration-300"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>{RESUME_DATA.personalInfo.phone}</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 h-9 rounded-full bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all duration-300"
                >
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{RESUME_DATA.personalInfo.location}</span>
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-3 min-w-[160px]">
              <Button className="w-full gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 rounded-full">
                <Download className="h-4 w-4" />
                Download CV
              </Button>
              <div className="flex gap-2 justify-center">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full transition-all duration-300"
                >
                  <Globe className="h-5 w-5" />
                  <span className="sr-only">Website</span>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:divide-x divide-border/60">
          {/* Main Content Column */}
          <div className="lg:col-span-2 p-8 md:p-10 space-y-10">
            {/* Experience Section */}
            <motion.section
              variants={itemVariants}
              aria-labelledby="experience-heading"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-primary/10 rounded-xl text-primary shadow-sm">
                  <Briefcase className="h-5 w-5" />
                </div>
                <h2
                  id="experience-heading"
                  className="text-2xl font-bold text-foreground tracking-tight"
                >
                  Work Experience
                </h2>
              </div>

              <div className="space-y-8 relative pl-2">
                {RESUME_DATA.experience.map((job, index) => (
                  <div key={index} className="relative pl-8 group">
                    <div className="absolute left-0 top-1.5 h-5 w-5 rounded-full border-4 border-background bg-primary shadow-md group-hover:scale-125 transition-transform duration-300" />
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                      <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                        {job.role}
                      </h3>
                      <Badge variant="secondary" className="font-medium w-fit">
                        {job.period}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm mb-3">
                      <Building2 className="h-3.5 w-3.5" />
                      <span>{job.company}</span>
                    </div>
                    <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-muted-foreground/90 leading-relaxed">
                      {job.description.map((item, i) => (
                        <li
                          key={i}
                          dangerouslySetInnerHTML={{
                            __html: item.replace(
                              /(Next\.js|Tailwind CSS|React)/g,
                              '<span class="font-medium text-foreground">$1</span>'
                            ),
                          }}
                        />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.section>

            <Separator className="bg-border/60" />

            {/* Projects Section */}
            <motion.section
              variants={itemVariants}
              aria-labelledby="projects-heading"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-primary/10 rounded-xl text-primary shadow-sm">
                  <Code2 className="h-5 w-5" />
                </div>
                <h2
                  id="projects-heading"
                  className="text-2xl font-bold text-foreground tracking-tight"
                >
                  Featured Projects
                </h2>
              </div>

              <div className="grid gap-5">
                {RESUME_DATA.projects.map((project, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="bg-gradient-to-br from-card to-muted/20 border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-5">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex items-center gap-2">
                            <h3 className="font-bold text-lg">
                              {project.title}
                            </h3>
                            <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                          </div>
                          <Badge
                            variant={
                              project.type === "Open Source"
                                ? "default"
                                : "outline"
                            }
                            className="text-[10px] uppercase tracking-wider font-bold shadow-sm"
                          >
                            {project.type}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              className="text-[10px] bg-primary/5 text-primary border-primary/10"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar Column */}
          <div className="bg-muted/10 p-8 md:p-10 space-y-10 h-full">
            {/* Education */}
            <motion.section
              variants={itemVariants}
              aria-labelledby="education-heading"
            >
              <div className="flex items-center gap-3 mb-5">
                <GraduationCap className="h-5 w-5 text-primary" />
                <h2
                  id="education-heading"
                  className="text-lg font-bold text-foreground tracking-tight uppercase"
                >
                  Education
                </h2>
              </div>
              <div className="space-y-6">
                {RESUME_DATA.education.map((edu, index) => (
                  <div
                    key={index}
                    className="relative pl-4 border-l-2 border-primary/20"
                  >
                    <h3 className="font-bold text-base">{edu.degree}</h3>
                    <div className="text-sm text-primary font-medium mb-1">
                      {edu.school}
                    </div>
                    <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                      {edu.year}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            <Separator className="bg-border/60" />

            {/* Skills */}
            <motion.section
              variants={itemVariants}
              aria-labelledby="skills-heading"
            >
              <div className="flex items-center gap-3 mb-5">
                <Code2 className="h-5 w-5 text-primary" />
                <h2
                  id="skills-heading"
                  className="text-lg font-bold text-foreground tracking-tight uppercase"
                >
                  Skills
                </h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />{" "}
                    Frontend
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {RESUME_DATA.skills.frontend.map((skill, i) => (
                      <Badge
                        key={i}
                        className="bg-background hover:bg-primary hover:text-primary-foreground text-foreground border-border transition-colors duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />{" "}
                    Backend
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {RESUME_DATA.skills.backend.map((skill, i) => (
                      <Badge
                        key={i}
                        className="bg-background hover:bg-primary hover:text-primary-foreground text-foreground border-border transition-colors duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />{" "}
                    Tools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {RESUME_DATA.skills.tools.map((skill, i) => (
                      <Badge
                        key={i}
                        className="bg-background hover:bg-primary hover:text-primary-foreground text-foreground border-border transition-colors duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>

            <Separator className="bg-border/60" />

            {/* Languages */}
            <motion.section
              variants={itemVariants}
              aria-labelledby="languages-heading"
            >
              <div className="flex items-center gap-3 mb-5">
                <Languages className="h-5 w-5 text-primary" />
                <h2
                  id="languages-heading"
                  className="text-lg font-bold text-foreground tracking-tight uppercase"
                >
                  Languages
                </h2>
              </div>
              <div className="space-y-3">
                {RESUME_DATA.languages.map((lang, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-2 rounded-lg bg-background/50 border border-border/50"
                  >
                    <span className="font-medium">{lang.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {lang.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
