"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { Trash2, X } from "lucide-react";
import { useState } from "react";

export interface NativeDeleteProps {
  /**
   * Callback when delete button is first clicked (shows confirmation)
   */
  onConfirm: () => void;
  /**
   * Callback when delete is confirmed
   */
  onDelete: () => void;
  /**
   * Text to show on the delete button
   * Default: "Delete"
   */
  buttonText?: string;
  /**
   * Text to show on the confirm button
   * Default: "Confirm"
   */
  confirmText?: string;
  /**
   * Size variant
   * Default: "md"
   */
  size?: "sm" | "md" | "lg";
  /**
   * Show icon in button
   * Default: true
   */
  showIcon?: boolean;
  /**
   * Additional class names for the container
   */
  className?: string;
  /**
   * Disable the button
   */
  disabled?: boolean;
}

const sizeVariants = {
  sm: "h-8 text-xs px-3",
  md: "h-10 text-sm px-4",
  lg: "h-12 text-base px-6",
};

const iconSizeVariants = {
  sm: "h-3 w-3",
  md: "h-4 w-4",
  lg: "h-5 w-5",
};

const cancelButtonSizes = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
};

// Smooth spring preset for natural feel
const smoothSpring = {
  type: "spring" as const,
  bounce: 0,
  duration: 0.35,
};

export function NativeDelete({
  onConfirm,
  onDelete,
  buttonText = "Delete",
  confirmText = "Confirm",
  size = "md",
  showIcon = true,
  className,
  disabled = false,
}: NativeDeleteProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleDeleteClick = () => {
    if (!disabled) {
      setIsExpanded(true);
      onConfirm();
    }
  };

  const handleConfirm = () => {
    onDelete();
    setIsExpanded(false);
  };

  const handleCancel = () => {
    setIsExpanded(false);
  };

  return (
    <MotionConfig transition={smoothSpring}>
      <motion.div
        layout
        className={cn("relative inline-flex items-center gap-2", className)}
      >
        {/* Main Delete/Confirm button */}
        <motion.div layout whileHover={!disabled ? { scale: 1.02 } : undefined} whileTap={!disabled ? { scale: 0.98 } : undefined}>
          <Button
            variant="destructive"
            size="default"
            className={cn(
              sizeVariants[size],
              "shadow-md hover:shadow-lg transition-shadow text-white",
              disabled && "opacity-50 cursor-not-allowed"
            )}
            onClick={isExpanded ? handleConfirm : handleDeleteClick}
            disabled={disabled}
            aria-label={isExpanded ? confirmText : buttonText}
          >
            <AnimatePresence mode="wait" initial={false}>
              {showIcon && !isExpanded && (
                <motion.span
                  key="trash-icon"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                  className="mr-2 flex items-center"
                >
                  <Trash2 className={iconSizeVariants[size]} />
                </motion.span>
              )}
            </AnimatePresence>
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isExpanded ? "confirm" : "delete"}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
              >
                {isExpanded ? confirmText : buttonText}
              </motion.span>
            </AnimatePresence>
          </Button>
        </motion.div>

        {/* Cancel button */}
        <AnimatePresence mode="popLayout">
          {isExpanded && (
            <motion.div
              key="cancel-button"
              layout
              initial={{ opacity: 0, scale: 0.8, x: -8 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: -8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="icon"
                className={cn(
                  cancelButtonSizes[size],
                  "shadow-md hover:shadow-lg transition-shadow"
                )}
                onClick={handleCancel}
                aria-label="Cancel delete"
              >
                <X className={iconSizeVariants[size]} />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </MotionConfig>
  );
}
