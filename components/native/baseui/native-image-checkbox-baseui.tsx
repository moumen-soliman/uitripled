"use client";

import { cn } from "@/lib/utils";
import { Avatar } from "@base-ui/react/avatar";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export interface NativeImageCheckboxProps {
  /**
   * URL of the image
   */
  src: string;
  /**
   * Alt text for the image
   */
  alt: string;
  /**
   * Whether the checkbox is selected
   */
  selected: boolean;
  /**
   * Callback when the checkbox is clicked
   */
  onSelect: (selected: boolean) => void;
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
   * Additional classes for the image
   */
  imageClassName?: string;
}

const sizeConfig = {
  sm: {
    container: "w-20 h-20",
    check: "h-5 w-5",
    checkContainer: "h-6 w-6",
  },
  md: {
    container: "w-28 h-28",
    check: "h-6 w-6",
    checkContainer: "h-7 w-7",
  },
  lg: {
    container: "w-36 h-36",
    check: "h-7 w-7",
    checkContainer: "h-8 w-8",
  },
  xl: {
    container: "w-44 h-44",
    check: "h-8 w-8",
    checkContainer: "h-9 w-9",
  },
};

export function NativeImageCheckbox({
  src,
  alt,
  selected,
  onSelect,
  size = "md",
  className,
  imageClassName,
}: NativeImageCheckboxProps) {
  const { container, check, checkContainer } = sizeConfig[size];

  return (
    <motion.div
      className={cn(
        "relative cursor-pointer rounded-lg overflow-hidden",
        container,
        className
      )}
      onClick={() => onSelect(!selected)}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      {/* Image with grayscale filter when not selected */}
      <Avatar.Root className="w-full h-full rounded-none block">
        <motion.div
          className="w-full h-full"
          animate={{
            filter: selected ? "grayscale(0%)" : "grayscale(100%)",
            scale: selected ? 1 : 0.95,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 25,
            filter: { duration: 0.3 },
          }}
        >
          <Avatar.Image
            src={src}
            alt={alt}
            className={cn("w-full h-full object-cover", imageClassName)}
          />
          <Avatar.Fallback className="w-full h-full rounded-none flex items-center justify-center bg-muted">
            {alt.slice(0, 2).toUpperCase()}
          </Avatar.Fallback>
        </motion.div>
      </Avatar.Root>

      {/* Overlay for better check visibility */}
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: selected ? 0 : 0.15 }}
        transition={{ duration: 0.3 }}
      />

      {/* Check icon with green circle */}
      <motion.div
        className="absolute -top-1 -right-1"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: selected ? 1 : 0,
          opacity: selected ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          opacity: { duration: 0.2 },
        }}
      >
        <div
          className={cn(
            "bg-green-500 rounded-full flex items-center justify-center shadow-lg",
            checkContainer
          )}
        >
          <Check className={cn("text-white stroke-[3]", check)} />
        </div>
      </motion.div>

      {/* Ring border when selected */}
      <motion.div
        className="absolute inset-0 rounded-lg border-2 border-green-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: selected ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
