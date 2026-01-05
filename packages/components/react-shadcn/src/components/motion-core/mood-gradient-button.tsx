"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { MouseEvent, useRef, useState } from "react";

type MoodGradientButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export function MoodGradientButton({
  children = "Hover Me",
  onClick,
  className = "",
}: MoodGradientButtonProps) {
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const x = useMotionValue(50);
  const y = useMotionValue(50);

  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const xPos = ((e.clientX - rect.left) / rect.width) * 100;
    const yPos = ((e.clientY - rect.top) / rect.height) * 100;

    x.set(xPos);
    y.set(yPos);
    setGradientPosition({ x: xPos, y: yPos });
  };

  // Use a state-based approach for the gradient since useTransform with arrays isn't directly supported
  const [bgStyle, setBgStyle] = useState(
    "radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.8), rgba(139, 92, 246, 0.6), rgba(236, 72, 153, 0.4))"
  );

  // Update gradient on mouse move
  React.useEffect(() => {
    const unsubscribeX = springX.on("change", (xVal) => {
      const yVal = springY.get();
      setBgStyle(
        `radial-gradient(circle at ${xVal}% ${yVal}%, rgba(99, 102, 241, 0.8), rgba(139, 92, 246, 0.6), rgba(236, 72, 153, 0.4))`
      );
    });
    const unsubscribeY = springY.on("change", (yVal) => {
      const xVal = springX.get();
      setBgStyle(
        `radial-gradient(circle at ${xVal}% ${yVal}%, rgba(99, 102, 241, 0.8), rgba(139, 92, 246, 0.6), rgba(236, 72, 153, 0.4))`
      );
    });
    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [springX, springY]);

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative overflow-hidden rounded-lg border border-primary bg-primary px-6 py-3 font-medium text-primary-foreground shadow-lg transition-shadow hover:shadow-xl ${className}`}
    >
      <motion.div
        style={{
          background: bgStyle,
        }}
        className="absolute inset-0"
      />

      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
