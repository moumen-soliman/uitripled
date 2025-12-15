"use client";

import { NativeButton } from "@/components/native/shadcnui/native-button-shadcnui";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Loader2, Sparkles } from "lucide-react";
import { ReactNode, useState } from "react";

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
  showSparkles?: boolean;
  /**
   * Icon to use for sparkles and success state
   * Default: Sparkles icon
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
  default: "h-4 w-4",
};

export function NativeStartNow({
  onStart,
  label = "Start Now",
  loadingLabel = "Starting...",
  successLabel = "Let's Go!",
  size = "md",
  showSparkles = true,
  icon,
  className,
  disabled = false,
  variant = "gradient",
}: NativeStartNowProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = async () => {
    if (disabled || status !== "idle") return;

    setStatus("loading");
    try {
      await onStart();
      setStatus("success");
      setTimeout(() => setStatus("idle"), 2000);
    } catch (error) {
      setStatus("idle");
    }
  };

  const getButtonStyles = () => {
    const baseStyles =
      "relative overflow-hidden font-semibold transition-all duration-300";

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
    <motion.div
      className={cn("relative inline-flex", className)}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Sparkle particles */}
      <AnimatePresence>
        {showSparkles && isHovered && status === "idle" && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
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
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="h-3 w-3 text-primary fill-primary">
                  {icon || (
                    <Sparkles className="h-3 w-3 text-primary fill-primary" />
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
        size={size === "md" ? "default" : size === "sm" ? "sm" : "lg"}
        variant={
          variant === "gradient"
            ? "default"
            : variant === "solid"
              ? "default"
              : "outline"
        }
        className={cn(
          sizeVariants[size === "md" ? "default" : size],
          getButtonStyles(),
          disabled && "opacity-50 cursor-not-allowed",
          "rounded-md shadow-md"
        )}
      >
        {/* Shimmer effect */}
        {variant === "gradient" && status === "idle" && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
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
                <ArrowRight
                  className={iconSizeVariants[size === "md" ? "md" : size]}
                />
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
                className={cn(
                  iconSizeVariants[size === "md" ? "md" : size],
                  "animate-spin"
                )}
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
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 0.5,
                }}
                className={cn(
                  iconSizeVariants[size === "md" ? "md" : size],
                  "fill-current"
                )}
              >
                {icon || (
                  <Sparkles
                    className={cn(
                      iconSizeVariants[size === "md" ? "md" : size],
                      "fill-current"
                    )}
                  />
                )}
              </motion.div>
              {successLabel}
            </motion.div>
          )}
        </AnimatePresence>
      </NativeButton>
    </motion.div>
  );
}
