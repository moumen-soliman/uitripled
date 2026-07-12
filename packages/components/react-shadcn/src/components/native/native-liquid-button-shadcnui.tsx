"use client";

import {
  NativeButton,
  type NativeButtonProps,
} from "./native-button-shadcnui";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

export interface NativeLiquidButtonProps
  extends Omit<NativeButtonProps, "onClick" | "loading"> {
  /**
   * Progress value (0-100)
   */
  progress?: number;
  /**
   * Loading state
   */
  loading?: boolean;
  /**
   * Callback when button is clicked
   */
  onClick?: () => void | Promise<void>;
  /**
   * Visual variant
   * Default: "default"
   */
  liquidVariant?: "default" | "gradient" | "glow" | "wave";
  /**
   * Liquid color
   */
  liquidColor?: string;
  /**
   * Show percentage text
   * Default: false
   */
  showPercentage?: boolean;
  /**
   * Auto-simulate loading (for demo purposes)
   */
  autoSimulate?: boolean;
  /**
   * Success state
   */
  success?: boolean;
  /**
   * Error state
   */
  error?: boolean;
}

const sizeVariants = {
  sm: "h-9 px-4 text-sm min-w-[100px]",
  default: "h-11 px-6 text-base min-w-[140px]",
  lg: "h-14 px-8 text-lg min-w-[180px]",
  icon: "h-11 px-6 text-base min-w-[140px]",
};

export function NativeLiquidButton({
  children,
  className,
  variant = "default",
  size = "default",
  progress = 0,
  loading = false,
  onClick,
  disabled,
  liquidVariant = "default",
  liquidColor,
  showPercentage = false,
  autoSimulate = false,
  success = false,
  error = false,
  ...props
}: NativeLiquidButtonProps) {
  const [internalProgress, setInternalProgress] = useState(progress);
  const [isSimulating, setIsSimulating] = useState(false);
  const shouldReduceMotion = useReducedMotion() ?? false;

  useEffect(() => {
    setInternalProgress(progress);
  }, [progress]);

  useEffect(() => {
    if (autoSimulate && isSimulating) {
      const interval = setInterval(() => {
        setInternalProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsSimulating(false);
            return 100;
          }
          return prev + Math.random() * 10;
        });
      }, 200);
      return () => clearInterval(interval);
    }
  }, [autoSimulate, isSimulating]);

  const handleClick = async () => {
    if (disabled || loading) return;

    if (autoSimulate) {
      setIsSimulating(true);
      setInternalProgress(0);
    }

    if (onClick) {
      await onClick();
    }
  };

  const getLiquidColor = () => {
    if (success) return "bg-green-500";
    if (error) return "bg-red-500";
    if (liquidColor) return liquidColor;

    switch (liquidVariant) {
      case "gradient":
        return "bg-gradient-to-r from-primary via-primary/80 to-primary";
      case "glow":
        return "bg-primary";
      default:
        return "bg-primary";
    }
  };

  const clampedProgress = Math.min(Math.max(internalProgress, 0), 100);
  const isFilling = clampedProgress > 0 && clampedProgress < 100;
  const showAmbient = !shouldReduceMotion && clampedProgress > 0;

  return (
    <div className="relative inline-block">
      <NativeButton
        variant={variant}
        size={size}
        loading={false}
        disabled={disabled || loading}
        onClick={handleClick}
        aria-busy={loading || isSimulating}
        className={cn(
          sizeVariants[size || "default"],
          "relative overflow-hidden font-semibold transition-[box-shadow,background-color,border-color,color] duration-300",
          "before:absolute before:inset-0 before:bg-background/20 before:pointer-events-none before:rounded-md",
          liquidVariant === "glow" &&
            !disabled &&
            "shadow-lg shadow-primary/30",
          className
        )}
        {...props}
      >
        {/* Liquid fill — width-based so the liquid inside never distorts */}
        <motion.div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-y-0 left-0 overflow-hidden transition-colors duration-300",
            getLiquidColor()
          )}
          initial={false}
          animate={{ width: `${clampedProgress}%` }}
          transition={
            shouldReduceMotion
              ? { duration: 0.2, ease: "easeOut" }
              : { type: "spring", stiffness: 100, damping: 20 }
          }
        >
          {/* Meniscus — bright leading edge where the liquid meets air */}
          {isFilling && (
            <div className="absolute inset-y-0 right-0 w-3 bg-gradient-to-l from-white/30 to-transparent" />
          )}

          {/* Rising bubbles */}
          {liquidVariant === "default" && showAmbient && (
            <>
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bottom-0 h-1.5 w-1.5 rounded-full bg-white/40"
                  style={{
                    left: `${15 + i * 22}%`,
                  }}
                  animate={{
                    y: [2, -36],
                    opacity: [0, 0.8, 0],
                    scale: [0.6, 1, 0.7],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.45,
                    ease: "easeOut",
                  }}
                />
              ))}
            </>
          )}

          {/* Shimmer effect for gradient */}
          {liquidVariant === "gradient" && showAmbient && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          )}
        </motion.div>

        {/* Wave — a translucent surface layer sloshing around the fill edge */}
        {liquidVariant === "wave" && showAmbient && isFilling && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 bg-white/15"
            animate={{
              width: [
                `${Math.max(clampedProgress - 6, 0)}%`,
                `${Math.min(clampedProgress + 4, 100)}%`,
                `${Math.max(clampedProgress - 6, 0)}%`,
              ],
            }}
            transition={{
              duration: 2.2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        )}

        {/* Button content */}
        <span className="relative z-10 flex items-center justify-center gap-2">
          <AnimatePresence mode="wait">
            {loading && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Loader2 aria-hidden="true" className="w-4 h-4 animate-spin" />
              </motion.div>
            )}
          </AnimatePresence>

          <motion.span
            animate={
              loading && !shouldReduceMotion
                ? { opacity: [1, 0.5, 1] }
                : { opacity: 1 }
            }
            transition={
              loading && !shouldReduceMotion
                ? {
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }
                : { duration: 0.2 }
            }
          >
            {children}
          </motion.span>

          {showPercentage && (
            <span className="text-xs tabular-nums">
              {Math.round(clampedProgress)}%
            </span>
          )}
        </span>

        {/* Glow effect */}
        {liquidVariant === "glow" && !disabled && showAmbient && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-primary/20 blur-xl"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        )}
      </NativeButton>

      {clampedProgress > 0 && (
        <span
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(clampedProgress)}
          className="sr-only"
        >
          {Math.round(clampedProgress)}%
        </span>
      )}
    </div>
  );
}
