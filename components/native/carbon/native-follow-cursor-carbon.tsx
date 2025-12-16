"use client";

import type React from "react";

import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

export interface NativeFollowCursorProps {
  /**
   * Name or text to display that follows the cursor
   * @deprecated Use children prop instead for custom content
   */
  name?: string;
  /**
   * Custom content to display (can be React nodes)
   */
  children?: React.ReactNode;
  /**
   * Size variant of the label
   * Default: "md"
   */
  size?: "sm" | "md" | "lg";
  /**
   * Visual variant
   * Default: "default"
   */
  variant?: "default" | "glass" | "solid" | "minimal";
  /**
   * Offset from cursor in pixels
   * Default: { x: 12, y: 12 }
   */
  offset?: { x: number; y: number };
  /**
   * Spring stiffness for smooth following
   * Default: 150
   */
  stiffness?: number;
  /**
   * Spring damping for smooth following
   * Default: 20
   */
  damping?: number;
  /**
   * Additional class names for the label
   */
  className?: string;
  /**
   * Show decorative dot indicator
   * Default: true (false when using custom children)
   */
  showDot?: boolean;
}

export interface NativeFollowCursorAreaProps {
  /**
   * Content area to track cursor within
   */
  children: React.ReactNode;
  /**
   * Content that follows the cursor
   */
  cursorContent: React.ReactNode;
  /**
   * Size variant of the cursor label
   * Default: "md"
   */
  size?: "sm" | "md" | "lg";
  /**
   * Visual variant
   * Default: "default"
   */
  variant?: "default" | "glass" | "solid" | "minimal";
  /**
   * Offset from cursor in pixels
   * Default: { x: 12, y: 12 }
   */
  offset?: { x: number; y: number };
  /**
   * Spring stiffness for smooth following
   * Default: 150
   */
  stiffness?: number;
  /**
   * Spring damping for smooth following
   * Default: 20
   */
  damping?: number;
  /**
   * Additional class names for the area wrapper
   */
  className?: string;
  /**
   * Additional class names for the cursor label
   */
  cursorClassName?: string;
  /**
   * Show decorative dot indicator
   * Default: false
   */
  showDot?: boolean;
}

const sizeVariants = {
  sm: "text-xs px-2 py-1",
  md: "text-sm px-3 py-1.5",
  lg: "text-base px-4 py-2",
};

const dotSizeVariants = {
  sm: "h-1.5 w-1.5",
  md: "h-2 w-2",
  lg: "h-2.5 w-2.5",
};

export function NativeFollowCursor({
  name,
  children,
  size = "md",
  variant = "default",
  offset = { x: 12, y: 12 },
  stiffness = 150,
  damping = 20,
  className,
  showDot,
}: NativeFollowCursorProps) {
  const shouldShowDot = showDot ?? (children ? false : true);
  const content = children || name;

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { stiffness, damping };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX + offset.x);
      cursorY.set(e.clientY + offset.y);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorX, cursorY, offset]);

  const getVariantStyles = () => {
    switch (variant) {
      case "glass":
        return "bg-background/80 backdrop-blur-md border border-border/50 shadow-lg";
      case "solid":
        return "bg-primary text-primary-foreground shadow-md";
      case "minimal":
        return "bg-background/95 border border-border shadow-sm";
      case "default":
      default:
        return "bg-popover text-popover-foreground border border-border shadow-lg";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, filter: "blur(4px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      style={{
        x,
        y,
      }}
      transition={{
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 },
        filter: { duration: 0.2 },
      }}
      className={cn(
        "fixed top-0 left-0 z-50 pointer-events-none select-none",
        "rounded-full flex items-center gap-2",
        sizeVariants[size],
        getVariantStyles(),
        className
      )}
    >
      {shouldShowDot && (
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className={cn(
            "rounded-full shrink-0",
            dotSizeVariants[size],
            variant === "solid" ? "bg-primary-foreground" : "bg-primary"
          )}
        />
      )}
      <span className="font-medium whitespace-nowrap">{content}</span>
    </motion.div>
  );
}

export function NativeFollowCursorArea({
  children,
  cursorContent,
  size = "md",
  variant = "default",
  offset = { x: 12, y: 12 },
  stiffness = 150,
  damping = 20,
  className,
  cursorClassName,
  showDot = false,
}: NativeFollowCursorAreaProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { stiffness, damping };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const isInside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      setIsVisible(isInside);

      if (isInside) {
        cursorX.set(e.clientX + offset.x);
        cursorY.set(e.clientY + offset.y);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY, offset]);

  const getVariantStyles = () => {
    switch (variant) {
      case "glass":
        return "bg-background/80 backdrop-blur-md border border-border/50 shadow-lg";
      case "solid":
        return "bg-primary text-primary-foreground shadow-md";
      case "minimal":
        return "bg-background/95 border border-border shadow-sm";
      case "default":
      default:
        return "bg-popover text-popover-foreground border border-border shadow-lg";
    }
  };

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.8, filter: "blur(4px)" }}
            style={{
              x,
              y,
            }}
            transition={{
              opacity: { duration: 0.2 },
              scale: { duration: 0.2 },
              filter: { duration: 0.2 },
            }}
            className={cn(
              "fixed top-0 left-0 z-50 pointer-events-none select-none",
              "rounded-full flex items-center gap-2",
              sizeVariants[size],
              getVariantStyles(),
              cursorClassName
            )}
          >
            {showDot && (
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className={cn(
                  "rounded-full shrink-0",
                  dotSizeVariants[size],
                  variant === "solid" ? "bg-primary-foreground" : "bg-primary"
                )}
              />
            )}
            <div className="font-medium">{cursorContent}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
