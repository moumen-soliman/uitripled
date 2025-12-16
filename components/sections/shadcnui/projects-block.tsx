"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const project = {
  title: "E-Commerce Platform",
  description:
    "Full-stack online store with payment integration and inventory management",
  tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
  image:
    "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80",
  links: { demo: "#", github: "#" },
};

export function ProjectsBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="group h-full rounded-2xl overflow-hidden border-border bg-card transition-all duration-300 hover:border-primary/50 mx-auto">
        <div className="relative aspect-video overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover grayscale focus-visible:outline-none transition-opacity"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          />
          <div className="absolute inset-0 flex items-end justify-center gap-4 bg-gradient-to-t from-card via-card/60 to-transparent pb-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <motion.a
              href={project.links.demo}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-primary p-3 text-primary-foreground shadow-lg shadow-primary/50"
            >
              <ExternalLink className="h-5 w-5" />
            </motion.a>
            <motion.a
              href={project.links.github}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-secondary p-3 text-secondary-foreground shadow-lg"
            >
              <Github className="h-5 w-5" />
            </motion.a>
          </div>
        </div>
        <div className="p-6">
          <h3 className="mb-2 text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
            {project.title}
          </h3>
          <p className="mb-4 line-clamp-2 text-muted-foreground">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <Badge key={tagIndex} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
