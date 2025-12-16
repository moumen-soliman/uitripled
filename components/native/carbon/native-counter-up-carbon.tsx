"use client";

import { cn } from "@/lib/utils";
import { animate, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export interface NativeCounterUpProps {
  /**
   * The target number to count up to.
   */
  value: number;
  /**
   * Duration of the animation in seconds.
   * Default: 2
   */
  duration?: number;
  /**
   * Text to display before the number (e.g., "$").
   */
  prefix?: string;
  /**
   * Text to display after the number (e.g., "+", "%").
   */
  suffix?: string;
  /**
   * Number of decimal places to show.
   * Default: 0
   */
  decimals?: number;
  /**
   * Accessible label describing what the counter represents.
   */
  label?: string;
  /**
   * Whether to start the animation on mount.
   * Default: true
   */
  autoStart?: boolean;
  className?: string;
}

export function NativeCounterUp({
  value,
  duration = 2,
  prefix = "",
  suffix = "",
  decimals = 0,
  label,
  autoStart = true,
  className,
}: NativeCounterUpProps) {
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!autoStart) return;

    // If reduced motion, just set the value immediately
    if (shouldReduceMotion) {
      setDisplayValue(value);
      return;
    }

    // Animate from current value to target value
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1], // Smooth expo-out easing
      onUpdate: (latest) => {
        setDisplayValue(
          decimals > 0 ? Number(latest.toFixed(decimals)) : Math.round(latest)
        );
      },
    });

    return () => controls.stop();
  }, [value, duration, autoStart, shouldReduceMotion, decimals]);

  const formattedValue = displayValue.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn("tabular-nums font-bold", className)}
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      {prefix}
      {formattedValue}
      {suffix}
      {label && <span className="sr-only">{label}</span>}
    </motion.span>
  );
}
