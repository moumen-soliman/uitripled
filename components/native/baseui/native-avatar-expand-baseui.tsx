"use client";

import { cn } from "@/lib/utils";
import { Avatar } from "@base-ui/react/avatar";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export interface NativeAvatarExpandProps {
  /**
   * URL of the avatar image
   */
  src?: string;
  /**
   * Name of the person or entity
   */
  name: string;
  /**
   * Size variant
   * @default "md"
   */
  size?: "sm" | "md" | "lg" | "xl";
  /**
   * Additional classes for the container
   */
  className?: string;
  /**
   * Additional classes for the avatar
   */
  avatarClassName?: string;
  /**
   * Additional classes for the name text
   */
  nameClassName?: string;
}

const sizeConfig = {
  sm: {
    avatar: "h-10 w-10",
    text: "text-sm",
  },
  md: {
    avatar: "h-12 w-12",
    text: "text-base",
  },
  lg: {
    avatar: "h-16 w-16",
    text: "text-lg",
  },
  xl: {
    avatar: "h-20 w-20",
    text: "text-xl",
  },
};

export function NativeAvatarExpand({
  src,
  name,
  size = "md",
  className,
  avatarClassName,
  nameClassName,
}: NativeAvatarExpandProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { avatar, text } = sizeConfig[size];

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <motion.div
      className={cn("inline-flex items-center cursor-pointer", className)}
      layout
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <motion.div layout="position" className="relative">
        <Avatar.Root
          className={cn(
            "relative flex shrink-0 overflow-hidden rounded-full",
            avatar,
            avatarClassName
          )}
        >
          <Avatar.Image src={src || "/placeholder.svg"} alt={name} />
          <Avatar.Fallback className="flex h-full w-full items-center justify-center rounded-full bg-muted">
            {getInitials(name)}
          </Avatar.Fallback>
        </Avatar.Root>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ width: 0, opacity: 0, filter: "blur(4px)" }}
            animate={{
              width: "auto",
              opacity: 1,
              filter: "blur(0px)",
            }}
            exit={{
              width: 0,
              opacity: 0,
              filter: "blur(4px)",
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 25,
              opacity: { duration: 0.2 },
              filter: { duration: 0.2 },
            }}
            className="overflow-hidden"
          >
            <motion.span
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              exit={{ x: -20 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25,
              }}
              className={cn(
                "font-medium whitespace-nowrap ml-1",
                text,
                nameClassName
              )}
            >
              {name}
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
