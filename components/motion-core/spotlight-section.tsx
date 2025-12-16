"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { MouseEvent, useState } from "react";

type SpotlightSectionProps = {
  children: React.ReactNode;
  intensity?: number;
  size?: number;
};

export function SpotlightSection({
  children = (
    <div className="text-center">
      <h3 className="text-xl font-semibold">Spotlight Section</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Move your mouse around to see the spotlight effect
      </p>
    </div>
  ),
  intensity = 0.6,
  size = 300,
}: SpotlightSectionProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPos = e.clientX - rect.left;
    const yPos = e.clientY - rect.top;

    x.set(xPos);
    y.set(yPos);
    setMousePosition({ x: xPos, y: yPos });
    setIsActive(true);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden rounded-2xl border border-border bg-card p-8"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0"
        style={{
          x: springX,
          y: springY,
          background: `radial-gradient(circle ${size}px at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, ${intensity}), transparent 70%)`,
          opacity: isActive ? 1 : 0,
        }}
        transition={{ opacity: { duration: 0.3 } }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
