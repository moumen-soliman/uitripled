"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title?: string;
  description?: string;
  tags?: string[];
  image?: string;
  links?: {
    demo?: string;
    github?: string;
  };
  className?: string;
}

const defaultProject = {
  title: "E-Commerce Platform",
  description:
    "Full-stack online store with payment integration and inventory management",
  tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
  image:
    "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80",
  links: { demo: "#", github: "#" },
};

export function ProjectCard({
  title = defaultProject.title,
  description = defaultProject.description,
  tags = defaultProject.tags,
  image = defaultProject.image,
  links = defaultProject.links,
  className,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn("w-full max-w-[400px]", className)}
    >
      <Card className="group relative h-full overflow-hidden rounded-2xl border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
        <div className="relative aspect-video overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
            {links?.demo && (
              <motion.a
                href={links.demo}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 backdrop-blur-md"
                title="View Demo"
              >
                <ExternalLink className="h-5 w-5" />
              </motion.a>
            )}
            {links?.github && (
              <motion.a
                href={links.github}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-lg backdrop-blur-md"
                title="View Code"
              >
                <Github className="h-5 w-5" />
              </motion.a>
            )}
          </div>
        </div>

        <div className="p-5">
          <h3 className="mb-2 text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
            {title}
          </h3>
          <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags?.map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-secondary/50 px-2 py-0.5 text-xs font-normal hover:bg-secondary"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
