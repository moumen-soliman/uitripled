1:"$Sreact.fragment"
2:I[176430,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"default"]
a:I[897367,["/_next/static/chunks/d96012bcfc98706a.js","/_next/static/chunks/c1216787d4b31b65.js"],"OutletBoundary"]
b:"$Sreact.suspense"
3:Taa1,"use client";

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
4:Tb1d,"use client";

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

export function ProjectsBlockBaseui() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="group h-full rounded-2xl overflow-hidden border border-border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:border-primary/50 mx-auto">
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
              <span
                key={tagIndex}
                className="inline-flex items-center rounded-full border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
5:Taa1,"use client";

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
0:{"buildId":"bFBIq5AO28jMw9-shWxSc","rsc":["$","$1","c",{"children":[["$","$L2",null,{"code":"$3","variantCodes":{},"baseId":"projects-block","baseuiCode":"$4","shadcnuiCode":"$5"}],["$L6","$L7","$L8"],"$L9"]}],"loading":null,"isPartial":false}
6:["$","script","script-0",{"src":"/_next/static/chunks/caa50e77cf52fdaa.js","async":true}]
7:["$","script","script-1",{"src":"/_next/static/chunks/e0bc9c3a4105a6fe.js","async":true}]
8:["$","script","script-2",{"src":"/_next/static/chunks/48913bc585f72fa4.js","async":true}]
9:["$","$La",null,{"children":["$","$b",null,{"name":"Next.MetadataOutlet","children":"$@c"}]}]
c:null
