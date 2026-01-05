"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  motion,
  Transition,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

export interface NativeMagneticProps {
  /**
   * Content to apply the magnetic effect to.
   */
  children: React.ReactNode;
  /**
   * Strength of the magnetic pull (0-1 range recommended).
   * Default: 0.3
   */
  strength?: number;
  /**
   * Spring stiffness for the animation.
   * Default: 300
   */
  stiffness?: number;
  /**
   * Spring damping for the animation.
   * Default: 30
   */
  damping?: number;
  /**
   * Whether to scale up on hover.
   * Default: true
   */
  scaleOnHover?: boolean;
  /**
   * Wrapper element type.
   * Default: 'div'
   */
  as?: "div" | "button" | "a";
  /**
   * Link href (only applies when as="a").
   */
  href?: string;
  /**
   * Click handler.
   */
  onClick?: () => void;
  className?: string;
}

const springTransition: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 25,
};

export function NativeMagnetic({
  children,
  strength = 0.3,
  stiffness = 300,
  damping = 30,
  scaleOnHover = true,
  as = "div",
  href,
  onClick,
  className,
}: NativeMagneticProps) {
  const ref = useRef<HTMLElement>(null);
  const [, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness, damping };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const translateX = useTransform(springX, (v) => v * strength);
  const translateY = useTransform(springY, (v) => v * strength);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const commonMotionProps = {
    onMouseMove: handleMouseMove,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: handleMouseLeave,
    style: {
      x: translateX,
      y: translateY,
    },
    whileHover: scaleOnHover ? { scale: 1.05 } : undefined,
    whileTap: { scale: 0.95 },
    transition: springTransition,
  };

  if (as === "a" && href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={cn("inline-block cursor-pointer", className)}
        onClick={onClick}
        {...commonMotionProps}
      >
        {children}
      </motion.a>
    );
  }

  if (as === "button") {
    const MotionButton = motion(Button);
    return (
      <MotionButton
        ref={ref as React.RefObject<HTMLButtonElement>}
        type="button"
        variant="default"
        className={cn("inline-block cursor-pointer", className)}
        onClick={onClick}
        {...commonMotionProps}
      >
        {children}
      </MotionButton>
    );
  }

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn("inline-block cursor-pointer", className)}
      onClick={onClick}
      {...commonMotionProps}
    >
      {children}
    </motion.div>
  );
}
