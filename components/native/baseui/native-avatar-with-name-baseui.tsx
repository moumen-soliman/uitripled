"use client";

import { cn } from "@/lib/utils";
import { Avatar } from "@base-ui/react/avatar";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export interface NativeAvatarProps {
  /**
   * URL of the avatar image
   */
  src?: string;
  /**
   * Name to display on hover
   */
  name: string;
  /**
   * Fallback text when image fails to load (usually initials)
   */
  fallback?: string;
  /**
   * Size variant of the avatar
   * Default: "md"
   */
  size?: "sm" | "md" | "lg" | "xl";
  /**
   * Direction from which the name appears
   * Default: "bottom"
   */
  direction?: "top" | "bottom" | "left" | "right";
  /**
   * Additional class names for the container
   */
  className?: string;
  /**
   * Additional class names for the name label
   */
  nameClassName?: string;
}

const sizeVariants = {
  sm: "h-10 w-10",
  md: "h-14 w-14",
  lg: "h-20 w-20",
  xl: "h-28 w-28",
};

const nameSizeVariants = {
  sm: "text-xs px-2 py-1",
  md: "text-sm px-3 py-1.5",
  lg: "text-base px-4 py-2",
  xl: "text-lg px-5 py-2.5",
};

export function NativeAvatarWithName({
  src,
  name,
  fallback,
  size = "md",
  direction = "bottom",
  className,
  nameClassName,
}: NativeAvatarProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const directionVariants = {
    top: {
      initial: { y: 20, opacity: 0, filter: "blur(4px)" },
      animate: { y: -8, opacity: 1, filter: "blur(0px)" },
      exit: { y: 20, opacity: 0, filter: "blur(4px)" },
    },
    bottom: {
      initial: { y: -20, opacity: 0, filter: "blur(4px)" },
      animate: { y: 8, opacity: 1, filter: "blur(0px)" },
      exit: { y: -20, opacity: 0, filter: "blur(4px)" },
    },
    left: {
      initial: { x: 20, opacity: 0, filter: "blur(4px)" },
      animate: { x: -8, opacity: 1, filter: "blur(0px)" },
      exit: { x: 20, opacity: 0, filter: "blur(4px)" },
    },
    right: {
      initial: { x: -20, opacity: 0, filter: "blur(4px)" },
      animate: { x: 8, opacity: 1, filter: "blur(0px)" },
      exit: { x: -20, opacity: 0, filter: "blur(4px)" },
    },
  };

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Avatar.Root
          className={cn(
            "relative flex shrink-0 overflow-hidden rounded-full ring-2 ring-background shadow-lg cursor-pointer",
            sizeVariants[size]
          )}
        >
          <Avatar.Image src={src || "/placeholder.svg"} alt={name} />
          <Avatar.Fallback className="flex h-full w-full items-center justify-center rounded-full bg-muted text-muted-foreground font-semibold">
            {fallback || getInitials(name)}
          </Avatar.Fallback>
        </Avatar.Root>
      </motion.div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={directionVariants[direction].initial}
            animate={directionVariants[direction].animate}
            exit={directionVariants[direction].exit}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              opacity: { duration: 0.2 },
              filter: { duration: 0.2 },
            }}
            className={cn(
              "absolute z-10 whitespace-nowrap rounded-md bg-popover text-popover-foreground shadow-lg border pointer-events-none",
              nameSizeVariants[size],
              positionClasses[direction],
              nameClassName
            )}
          >
            <span className="font-medium">{name}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
