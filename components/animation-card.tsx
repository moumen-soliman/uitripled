"use client";

import { Component, categoryNames } from "@/types";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

type AnimationCardProps = {
  animation: Component;
};

export function AnimationCard({ animation }: AnimationCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const Component = animation.component;

  const isFree = animation.isFree !== false; // Default to true if not specified

  return (
    <>
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ y: -2 }}
        className="group relative h-full overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:border-ring"
      >
        <Link href={`/components/${animation.id}`}>
          {/* Preview Area */}
          <div className="relative h-48 overflow-hidden bg-card">
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                key={isHovered ? "hovered" : "normal"}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Component />
              </motion.div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="rounded border border-border bg-card px-2 py-0.5 text-xs font-medium text-muted-foreground">
                {categoryNames[animation.category]}
              </span>
              {animation.duration && (
                <span className="text-xs text-muted-foreground/60">
                  {animation.duration}
                </span>
              )}
              {!isFree && (
                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-xs font-medium text-primary">
                  Premium
                </span>
              )}
            </div>
            <h3 className="mb-1.5 text-base font-semibold group-hover:text-foreground transition-colors">
              {animation.name}
            </h3>
            <p className="mb-3 text-xs text-muted-foreground line-clamp-2">
              {animation.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {animation.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      </motion.div>
    </>
  );
}
