"use client";

import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  Transition,
  useReducedMotion,
} from "framer-motion";
import { Plus, X } from "lucide-react";
import { useState } from "react";

export interface MorphingButtonAction {
  /**
   * Display label for the action.
   */
  label: string;
  /**
   * Icon to display alongside the label.
   */
  icon: React.ReactNode;
  /**
   * Callback when action is clicked.
   */
  onClick: () => void;
}

export interface NativeMorphingButtonProps {
  /**
   * Array of actions to display in the expanded menu.
   */
  actions: MorphingButtonAction[];
  /**
   * Position of the FAB.
   * Default: 'bottom-right'
   */
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  /**
   * Whether to use fixed positioning.
   * Default: false (relative to container)
   */
  fixed?: boolean;
  /**
   * Custom icon when collapsed.
   */
  icon?: React.ReactNode;
  /**
   * Custom close icon when expanded.
   */
  closeIcon?: React.ReactNode;
  className?: string;
}

const positionClasses = {
  "bottom-right": "bottom-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "top-right": "top-4 right-4",
  "top-left": "top-4 left-4",
};

const springTransition: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};
const reducedTransition: Transition = { duration: 0.1 };

export function NativeMorphingButton({
  actions,
  position = "bottom-right",
  fixed = false,
  icon,
  closeIcon,
  className,
}: NativeMorphingButtonProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const transition = shouldReduceMotion ? reducedTransition : springTransition;

  return (
    <div
      className={cn(
        fixed ? "fixed" : "absolute",
        positionClasses[position],
        "z-50",
        className
      )}
    >
      <LayoutGroup>
        <motion.div
          layout
          className="relative"
          initial={false}
          animate={{
            width: isExpanded ? 280 : 56,
            height: isExpanded ? "auto" : 56,
            borderRadius: isExpanded ? 16 : 28,
          }}
          transition={transition}
        >
          {/* Main FAB Button */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="absolute right-0 bottom-0 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-shadow hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
            aria-label={isExpanded ? "Close menu" : "Open menu"}
            aria-expanded={isExpanded}
          >
            <AnimatePresence mode="wait">
              {isExpanded ? (
                <motion.div
                  key="close"
                  initial={
                    shouldReduceMotion ? false : { rotate: -90, opacity: 0 }
                  }
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {closeIcon ?? <X className="h-5 w-5" />}
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={
                    shouldReduceMotion ? false : { rotate: 90, opacity: 0 }
                  }
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {icon ?? <Plus className="h-5 w-5" />}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Expanded Menu */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, scale: 0.8 }
                }
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="absolute bottom-0 right-0 w-64 rounded-2xl border border-border bg-card p-4 shadow-2xl"
                role="menu"
              >
                <div className="mb-2 space-y-2">
                  {actions.map((action, index) => (
                    <motion.button
                      key={action.label}
                      initial={
                        shouldReduceMotion ? false : { opacity: 0, x: -20 }
                      }
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.2 }}
                      onClick={() => {
                        action.onClick();
                        setIsExpanded(false);
                      }}
                      className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-sm transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring"
                      role="menuitem"
                    >
                      <span className="text-muted-foreground">
                        {action.icon}
                      </span>
                      <span className="font-medium">{action.label}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>
    </div>
  );
}
