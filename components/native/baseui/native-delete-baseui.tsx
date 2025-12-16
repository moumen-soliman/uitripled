"use client";

import { cn } from "@/lib/utils";
import { Button } from "@base-ui/react/button";
import { AnimatePresence, motion } from "framer-motion";
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
    <div className={cn("relative inline-flex items-center gap-2", className)}>
      <motion.div
        animate={
          isExpanded
            ? {
                filter: ["blur(0px)", "blur(3px)", "blur(0px)"],
                x: [0, -2, 2, -2, 2, 0],
              }
            : {
                filter: "blur(0px)",
                x: 0,
              }
        }
        transition={
          isExpanded
            ? {
                filter: { duration: 0.3 },
                x: { duration: 0.4, times: [0, 0.2, 0.4, 0.6, 0.8, 1] },
              }
            : {
                duration: 0.2,
              }
        }
      >
        <motion.div
          whileHover={!disabled ? { scale: 1.02 } : {}}
          whileTap={!disabled ? { scale: 0.98 } : {}}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Button
            nativeButton
            className={cn(
              sizeVariants[size],
              "inline-flex items-center justify-center rounded-md bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md hover:shadow-lg transition-shadow",
              disabled && "opacity-50 cursor-not-allowed"
            )}
            onClick={isExpanded ? handleConfirm : handleDeleteClick}
            disabled={disabled}
          >
            {showIcon && !isExpanded && (
              <Trash2 className={cn(iconSizeVariants[size], "mr-2")} />
            )}
            {isExpanded ? confirmText : buttonText}
          </Button>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -10 }}
            transition={{
              delay: 0.3,
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                nativeButton
                className={cn(
                  "inline-flex items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-md hover:shadow-lg transition-shadow",
                  size === "sm"
                    ? "h-8 w-8"
                    : size === "md"
                      ? "h-10 w-10"
                      : "h-12 w-12"
                )}
                onClick={handleCancel}
              >
                <X className={iconSizeVariants[size]} />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
