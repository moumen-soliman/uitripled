"use client";

import { motion } from "framer-motion";
import { MouseEvent, useRef, useState } from "react";

type Direction = "top" | "bottom" | "left" | "right";

type SmartHoverCardProps = {
  title?: string;
  description?: string;
  children?: React.ReactNode;
};

export function SmartHoverCard({
  title = "Smart Hover Card",
  description = "Hover from different directions to see content reveal",
  children,
}: SmartHoverCardProps) {
  const [direction, setDirection] = useState<Direction>("top");
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      setDirection(deltaX > 0 ? "right" : "left");
    } else {
      setDirection(deltaY > 0 ? "bottom" : "top");
    }
  };

  const cardVariants = {
    top: {
      clipPath: "inset(0% 0% 50% 0%)",
      y: -20,
      opacity: 0,
    },
    bottom: {
      clipPath: "inset(50% 0% 0% 0%)",
      y: 20,
      opacity: 0,
    },
    left: {
      clipPath: "inset(0% 50% 0% 0%)",
      x: -20,
      opacity: 0,
    },
    right: {
      clipPath: "inset(0% 0% 0% 50%)",
      x: 20,
      opacity: 0,
    },
  };

  const revealVariants = {
    top: { clipPath: "inset(0% 0% 0% 0%)", y: 0, opacity: 1 },
    bottom: { clipPath: "inset(0% 0% 0% 0%)", y: 0, opacity: 1 },
    left: { clipPath: "inset(0% 0% 0% 0%)", x: 0, opacity: 1 },
    right: { clipPath: "inset(0% 0% 0% 0%)", x: 0, opacity: 1 },
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      className="group relative h-64 w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card"
    >
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div>
          <h3 className="mb-2 text-lg font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>

      <motion.div
        initial={cardVariants[direction]}
        whileHover={revealVariants[direction]}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5 p-6 backdrop-blur-sm"
      >
        {children || (
          <div className="text-center">
            <div className="mb-3 text-4xl">✨</div>
            <p className="text-sm font-medium">Revealed Content</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Direction: {direction}
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
