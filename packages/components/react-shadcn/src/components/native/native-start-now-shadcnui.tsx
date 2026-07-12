"use client";

import { NativeButton } from "./native-button-shadcnui";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  MotionConfig,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, Loader2, Rocket } from "lucide-react";
import { ReactNode, useEffect, useRef, useState } from "react";

export interface NativeStartNowProps {
  /**
   * Callback when start button is clicked
   */
  onStart: () => void | Promise<void>;
  /**
   * Text to show on the button
   * Default: "Start Now"
   */
  label?: string;
  /**
   * Loading text during async action
   * Default: "Starting..."
   */
  loadingLabel?: string;
  /**
   * Success text after completion
   * Default: "Let's Go!"
   */
  successLabel?: string;
  /**
   * Size variant
   * Default: "md"
   */
  size?: "sm" | "md" | "lg";
  /**
   * Show sparkle animation on hover
   * Default: true
   */
  showRocket?: boolean;
  /**
   * Icon to use for Rocket and success state
   * Default: Rocket icon
   */
  icon?: ReactNode;
  /**
   * Additional class names for the container
   */
  className?: string;
  /**
   * Disable the button
   */
  disabled?: boolean;
  /**
   * Variant style
   * Default: "gradient"
   */
  variant?: "gradient" | "solid" | "outline";
}

const sizeVariants = {
  sm: "h-9 px-4 text-sm",
  default: "h-11 px-6 text-base",
  lg: "h-14 px-8 text-lg",
};

const sizeMap = {
  sm: "sm" as const,
  md: "default" as const,
  lg: "lg" as const,
};

const iconSizeVariants = {
  sm: "h-3.5 w-3.5",
  md: "h-4 w-4",
  lg: "h-5 w-5",
};

export function NativeStartNow({
  onStart,
  label = "Start Now",
  loadingLabel = "Starting...",
  successLabel = "Let's Go!",
  size = "md",
  showRocket = true,
  icon,
  className,
  disabled = false,
  variant = "gradient",
}: NativeStartNowProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const resetTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(
    () => () => {
      if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
    },
    []
  );

  const buttonSize = sizeMap[size];
  const iconSize = iconSizeVariants[size];

  const handleClick = async () => {
    if (disabled || status !== "idle") return;

    setStatus("loading");
    try {
      await onStart();
      setStatus("success");
      resetTimeoutRef.current = setTimeout(() => setStatus("idle"), 2000);
    } catch {
      setStatus("idle");
    }
  };

  const getButtonStyles = () => {
    const baseStyles =
      "relative overflow-hidden font-semibold transition-[box-shadow,background-color,border-color,color] duration-300";

    switch (variant) {
      case "gradient":
        return cn(
          baseStyles,
          "bg-gradient-to-r from-primary via-primary/90 to-primary text-primary-foreground",
          "hover:shadow-lg hover:shadow-primary/50",
          "border-0"
        );
      case "solid":
        return cn(
          baseStyles,
          "bg-primary text-primary-foreground",
          "hover:bg-primary/90"
        );
      case "outline":
        return cn(
          baseStyles,
          "border-2 border-primary text-primary bg-background",
          "hover:bg-primary hover:text-primary-foreground"
        );
      default:
        return baseStyles;
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        className={cn("relative inline-flex", className)}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Sparkle particles */}
        <AnimatePresence>
          {showRocket &&
            isHovered &&
            status === "idle" &&
            !shouldReduceMotion && (
              <>
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    aria-hidden="true"
                    initial={{
                      opacity: 0,
                      scale: 0,
                      x: 0,
                      y: 0,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                      x: Math.cos((i * Math.PI) / 3) * 40,
                      y: Math.sin((i * Math.PI) / 3) * 40,
                    }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 1,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.1,
                      ease: "easeOut",
                    }}
                    className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="h-3 w-3 text-primary fill-primary">
                      {icon || (
                        <Rocket className="h-3 w-3 text-primary fill-primary" />
                      )}
                    </div>
                  </motion.div>
                ))}
              </>
            )}
        </AnimatePresence>

        <NativeButton
          onClick={handleClick}
          disabled={disabled || status !== "idle"}
          loading={false}
          size={buttonSize}
          variant={variant === "outline" ? "outline" : "default"}
          aria-busy={status === "loading"}
          aria-live="polite"
          className={cn(
            sizeVariants[buttonSize],
            getButtonStyles(),
            disabled && "opacity-50 cursor-not-allowed",
            "rounded-md shadow-md"
          )}
        >
          {/* Shimmer effect */}
          {variant === "gradient" && status === "idle" && (
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                x: ["-200%", "200%"],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 1,
                ease: "easeInOut",
              }}
            />
          )}

          {/* Button content */}
          <AnimatePresence mode="wait">
            {status === "idle" && (
              <motion.div
                key="idle"
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2 relative z-10"
              >
                {label}
                <motion.div
                  animate={{
                    x: [0, 3, 0],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight aria-hidden="true" className={iconSize} />
                </motion.div>
              </motion.div>
            )}

            {status === "loading" && (
              <motion.div
                key="loading"
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2 relative z-10"
              >
                <Loader2
                  aria-hidden="true"
                  className={cn(iconSize, "animate-spin")}
                />
                {loadingLabel}
              </motion.div>
            )}

            {status === "success" && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.8, filter: "blur(4px)" }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="flex items-center gap-2 relative z-10"
              >
                <motion.div
                  aria-hidden="true"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className={cn(iconSize, "fill-current")}
                >
                  {icon || <Rocket className={cn(iconSize, "fill-current")} />}
                </motion.div>
                {successLabel}
              </motion.div>
            )}
          </AnimatePresence>
        </NativeButton>
      </motion.div>
    </MotionConfig>
  );
}
