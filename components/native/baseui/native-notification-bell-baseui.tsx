"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Bell } from "lucide-react";
import { useEffect, useState } from "react";

export interface NativeNotificationBellProps {
  /**
   * Number of notifications to display.
   * Default: 0
   */
  count?: number;
  /**
   * Whether to show the notification badge.
   * Automatically true if count > 0.
   */
  showBadge?: boolean;
  /**
   * Callback when the bell is clicked.
   */
  onClick?: () => void;
  /**
   * Callback when the bell rings (on mount if has notifications).
   */
  onRing?: () => void;
  /**
   * Custom icon to replace the bell.
   */
  icon?: React.ReactNode;
  /**
   * Size variant.
   * Default: 'md'
   */
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
};

const iconSizeClasses = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

const badgeSizeClasses = {
  sm: "h-4 w-4 text-[10px]",
  md: "h-5 w-5 text-xs",
  lg: "h-6 w-6 text-sm",
};

const ringVariants: Variants = {
  idle: { rotate: 0 },
  ringing: {
    rotate: [0, -15, 15, -10, 10, -5, 5, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

export function NativeNotificationBell({
  count = 0,
  showBadge,
  onClick,
  onRing,
  icon,
  size = "md",
  className,
}: NativeNotificationBellProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isRinging, setIsRinging] = useState(false);
  const hasNotifications = count > 0 || showBadge;

  useEffect(() => {
    if (hasNotifications && !shouldReduceMotion) {
      setIsRinging(true);
      const timer = setTimeout(() => setIsRinging(false), 600);
      onRing?.();
      return () => clearTimeout(timer);
    }
  }, [hasNotifications, shouldReduceMotion, onRing]);

  const displayCount = count > 99 ? "99+" : count > 9 ? "9+" : count;

  return (
    <div className="relative inline-block">
      <motion.button
        variants={ringVariants}
        animate={isRinging ? "ringing" : "idle"}
        whileHover={shouldReduceMotion ? undefined : { scale: 1.1 }}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
        onClick={onClick}
        className={cn(
          "relative flex items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          sizeClasses[size],
          className
        )}
        aria-label={`Notifications${count > 0 ? `, ${count} unread` : ""}`}
      >
        {icon ?? <Bell className={iconSizeClasses[size]} />}
        {hasNotifications && (
          <motion.span
            initial={shouldReduceMotion ? { scale: 1 } : { scale: 0 }}
            animate={{ scale: 1 }}
            className={cn(
              "absolute -right-1 -top-1 flex items-center justify-center rounded-full bg-destructive font-bold text-destructive-foreground",
              badgeSizeClasses[size]
            )}
          >
            {count > 0 ? displayCount : ""}
          </motion.span>
        )}
      </motion.button>
    </div>
  );
}
