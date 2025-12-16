"use client";

import {
  NativeButton,
  type NativeButtonProps,
} from "@/components/native/shadcnui/native-button-shadcnui";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
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

  return (
    <div className="relative inline-block">
      <NativeButton
        variant={variant}
        size={size}
        loading={false}
        disabled={disabled || loading}
        onClick={handleClick}
        className={cn(
          sizeVariants[size || "default"],
          "relative overflow-hidden font-semibold transition-all duration-300",
          "before:absolute before:inset-0 before:bg-background/20 before:pointer-events-none before:rounded-md",
          liquidVariant === "glow" &&
            !disabled &&
            "shadow-lg shadow-primary/30",
          className
        )}
        {...props}
      >
        {/* Liquid fill effect */}
        <motion.div
          className={cn("absolute inset-0 origin-left", getLiquidColor())}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: clampedProgress / 100 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
        >
          {/* Bubble effects */}
          {liquidVariant === "default" && clampedProgress > 0 && (
            <>
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bottom-0 w-2 h-2 bg-white/30 rounded-md"
                  style={{
                    left: `${20 + i * 25}%`,
                  }}
                  animate={{
                    y: [-10, -50, -10],
                    opacity: [0, 1, 0],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.4,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </>
          )}

          {/* Shimmer effect for gradient */}
          {liquidVariant === "gradient" && clampedProgress > 0 && (
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
                <Loader2 className="w-4 h-4 animate-spin" />
              </motion.div>
            )}
          </AnimatePresence>

          <motion.span
            animate={loading ? { opacity: [1, 0.5, 1] } : { opacity: 1 }}
            transition={
              loading
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
            <motion.span
              key={clampedProgress}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-xs font-mono"
            >
              {Math.round(clampedProgress)}%
            </motion.span>
          )}
        </span>

        {/* Glow effect */}
        {liquidVariant === "glow" && !disabled && clampedProgress > 0 && (
          <motion.div
            className="absolute inset-0 bg-primary/20 blur-xl"
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
    </div>
  );
}
