"use client";

import { cn } from "@uitripled/utils";
import {
  AnimatePresence,
  animate,
  motion,
  MotionConfig,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { X } from "lucide-react";
import type React from "react";
import { useEffect, useRef, useState } from "react";

/**
 * Size variants for the notch component
 */
export type NotchSize = "sm" | "md" | "lg";

/**
 * Position configuration for initial placement
 */
export interface NotchPosition {
  /**
   * Top offset in pixels
   */
  top?: number;
  /**
    * Bottom offset in pixels
    */
  bottom?: number;
  /**
   * Horizontal alignment
   */
  align?: "left" | "center" | "right";
}

export interface NativeNotchProps {
  /**
   * Content to display when the notch is open
   */
  children?: React.ReactNode;
  /**
   * Custom content/icon to display when the notch is closed
   */
  collapsedIcon?: React.ReactNode;
  /**
   * Size variant
   * @default "md"
   */
  size?: NotchSize;
  /**
   * Initial position configuration
   */
  position?: NotchPosition;
  /**
   * Whether the notch is draggable
   * @default true
   */
  draggable?: boolean;
  /**
   * Default expanded state
   * @default false
   */
  defaultExpanded?: boolean;
  /**
   * Controlled expanded state
   */
  expanded?: boolean;
  /**
   * Callback when expanded state changes
   */
  onExpandedChange?: (expanded: boolean) => void;
  /**
   * Callback when notch is clicked
   */
  onClick?: (e: React.MouseEvent) => void;
  /**
   * Additional CSS classes
   */
  className?: string;
}

const sizeVariants = {
  sm: {
    collapsed: { width: 40, height: 40, radius: 20 },
    expanded: { width: 280, height: 160, radius: 24 },
  },
  md: {
    collapsed: { width: 48, height: 48, radius: 24 },
    expanded: { width: 340, height: 200, radius: 28 },
  },
  lg: {
    collapsed: { width: 56, height: 56, radius: 28 },
    expanded: { width: 400, height: 240, radius: 32 },
  },
};

const positionStyles = {
  left: "left-8",
  center: "left-1/2 -translate-x-1/2",
  right: "right-8",
};

export function NativeNotch({
  children,
  collapsedIcon,
  size = "md",
  position = { top: 32, align: "center" },
  draggable = true,
  defaultExpanded = false,
  expanded: controlledExpanded,
  onExpandedChange,
  onClick,
  className,
}: NativeNotchProps) {
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);
  const [isDragging, setIsDragging] = useState(false);
  const notchRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const wasExpanded = useRef(false);
  const reduce = useReducedMotion() ?? false;

  const isControlled = controlledExpanded !== undefined;
  const isExpanded = isControlled ? controlledExpanded : internalExpanded;

  const setExpanded = (value: boolean) => {
    if (!isControlled) {
      setInternalExpanded(value);
    }
    onExpandedChange?.(value);
  };

  const sizeConfig = sizeVariants[size];

  // Motion values for drag physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20, mass: 0.8 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // Rotation and scale based on drag velocity/position
  const rotate = useTransform(springX, [-200, 200], [-5, 5]);
  const scale = useTransform(
    [springX, springY],
    ([latestX, latestY]: number[]) => {
      const distance = Math.sqrt(latestX * latestX + latestY * latestY);
      return 1 - Math.min(distance / 1500, 0.08);
    }
  );

  // Motion values for dimensions
  const notchWidth = useMotionValue(sizeConfig.collapsed.width);
  const notchHeight = useMotionValue(sizeConfig.collapsed.height);
  const notchRadius = useMotionValue(sizeConfig.collapsed.radius);

  const springWidth = useSpring(notchWidth, { stiffness: 400, damping: 35, mass: 0.6 });
  const springHeight = useSpring(notchHeight, { stiffness: 300, damping: 30, mass: 0.8 });
  const springRadius = useSpring(notchRadius, { stiffness: 350, damping: 30, mass: 0.6 });

  useEffect(() => {
    // Reduced motion: snap dimensions instantly, no staged choreography.
    if (reduce) {
      const target = isExpanded ? sizeConfig.expanded : sizeConfig.collapsed;
      notchWidth.jump(target.width);
      notchHeight.jump(target.height);
      notchRadius.jump(target.radius);
      return;
    }
    if (isExpanded) {
      animate(notchWidth, sizeConfig.expanded.width, { type: "spring", stiffness: 400, damping: 35, mass: 0.5 });
      animate(notchRadius, sizeConfig.expanded.radius, { type: "spring", stiffness: 350, damping: 30, mass: 0.5 });
      const timeout = setTimeout(() => {
        animate(notchHeight, sizeConfig.expanded.height, { type: "spring", stiffness: 300, damping: 28, mass: 0.6 });
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      animate(notchHeight, sizeConfig.collapsed.height, { type: "spring", stiffness: 350, damping: 30, mass: 0.5 });
      const timeout = setTimeout(() => {
        animate(notchWidth, sizeConfig.collapsed.width, { type: "spring", stiffness: 400, damping: 35, mass: 0.5 });
        animate(notchRadius, sizeConfig.collapsed.radius, { type: "spring", stiffness: 350, damping: 30, mass: 0.5 });
      }, 60);
      return () => clearTimeout(timeout);
    }
  }, [isExpanded, notchWidth, notchHeight, notchRadius, sizeConfig, reduce]);

  // Move focus into the panel on expand, back to the notch on collapse.
  useEffect(() => {
    if (isExpanded) {
      wasExpanded.current = true;
      closeButtonRef.current?.focus();
    } else if (wasExpanded.current) {
      notchRef.current?.focus();
    }
  }, [isExpanded]);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (isExpanded || !draggable) return;
    setIsDragging(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || isExpanded || !draggable) return;

    const centerX = window.innerWidth / 2;
    const centerY = (position.top || 32) + 24;

    const newX = e.clientX - centerX;
    const newY = e.clientY - centerY;

    const maxX = window.innerWidth / 2 - 40;
    const maxY = window.innerHeight - 80;
    const minY = -20;

    x.set(Math.max(-maxX, Math.min(maxX, newX)));
    y.set(Math.max(minY, Math.min(maxY, newY)));
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);

    // Snap back
    animate(x, 0, { type: "spring", stiffness: 200, damping: 25 });
    animate(y, 0, { type: "spring", stiffness: 200, damping: 25 });
  };

  const handleClick = (e: React.MouseEvent) => {
    if (isDragging) return;
    if (Math.abs(x.get()) > 5 || Math.abs(y.get()) > 5) return;

    onClick?.(e);
    if (!isExpanded) {
      setExpanded(true);
    }
  };

  return (
    <MotionConfig reducedMotion="user">
    <motion.div
      ref={notchRef}
      role={!isExpanded ? "button" : undefined}
      tabIndex={!isExpanded ? 0 : -1}
      aria-expanded={isExpanded}
      aria-label={!isExpanded ? "Open notch" : undefined}
      className={cn(
        "fixed z-50 touch-none",
        !isExpanded && "cursor-pointer",
        "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-full",
        positionStyles[position.align || "center"],
        className
      )}
      style={{
        top: position.top,
        bottom: position.bottom,
        x: springX,
        y: springY,
        rotate: isExpanded || reduce ? 0 : rotate,
        scale: isExpanded || reduce ? 1 : scale,
      }}
      initial={false}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (!isExpanded && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          setExpanded(true);
        }
        if (isExpanded && e.key === "Escape") {
          setExpanded(false);
        }
      }}
    >
      <motion.div
        className="relative bg-background text-foreground border border-accent/50 shadow-2xl overflow-hidden"
        style={{
          width: springWidth,
          height: springHeight,
          borderRadius: springRadius,
        }}
      >
        <AnimatePresence mode="wait">
          {!isExpanded ? (
            <motion.div
              key="collapsed"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center p-1"
            >
              {collapsedIcon || <div className="w-1.5 h-1.5 rounded-full bg-foreground/40" />}
            </motion.div>
          ) : (
            <motion.div
              key="expanded"
              initial={false}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 p-4 flex flex-col"
            >
              <div className="absolute top-2 right-2 z-10">
                <motion.button
                  ref={closeButtonRef}
                  type="button"
                  aria-label="Close notch"
                  initial={{ scale: 0.5, opacity: 0, rotate: -90 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  exit={{ scale: 0.5, opacity: 0, rotate: -90 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpanded(false);
                  }}
                  className="relative p-1 rounded-full hover:bg-accent/10 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring after:absolute after:-inset-2"
                >
                  <X
                    aria-hidden="true"
                    className="w-4 h-4 text-muted-foreground hover:text-foreground"
                  />
                </motion.button>
              </div>
              <motion.div
                className="w-full h-full mt-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                {children}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
    </MotionConfig>
  );
}
