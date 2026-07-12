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
import { useEffect, useRef, useState } from "react";

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
  const fabRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const wasExpanded = useRef(false);

  const transition = shouldReduceMotion ? reducedTransition : springTransition;

  // Focus the first action on open, return focus to the FAB on close.
  useEffect(() => {
    if (isExpanded) {
      wasExpanded.current = true;
      menuRef.current
        ?.querySelector<HTMLButtonElement>('[role="menuitem"]')
        ?.focus();
    } else if (wasExpanded.current) {
      fabRef.current?.focus();
    }
  }, [isExpanded]);

  const handleMenuKeyDown = (e: React.KeyboardEvent) => {
    const items = Array.from(
      menuRef.current?.querySelectorAll<HTMLButtonElement>(
        '[role="menuitem"]'
      ) ?? []
    );
    if (!items.length) return;
    const currentIndex = items.indexOf(
      document.activeElement as HTMLButtonElement
    );
    if (e.key === "ArrowDown") {
      e.preventDefault();
      items[(currentIndex + 1) % items.length]?.focus();
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      items[(currentIndex - 1 + items.length) % items.length]?.focus();
    }
  };

  return (
    <div
      className={cn(
        fixed ? "fixed" : "absolute",
        positionClasses[position],
        "z-50",
        className
      )}
      onKeyDown={(e) => {
        if (e.key === "Escape" && isExpanded) {
          setIsExpanded(false);
        }
      }}
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
            ref={fabRef}
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="absolute right-0 bottom-0 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-shadow hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
            aria-label={isExpanded ? "Close menu" : "Open menu"}
            aria-expanded={isExpanded}
            aria-haspopup="menu"
          >
            <AnimatePresence mode="wait">
              {isExpanded ? (
                <motion.div
                  key="close"
                  aria-hidden="true"
                  initial={
                    shouldReduceMotion ? false : { rotate: -90, opacity: 0 }
                  }
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { rotate: 90, opacity: 0 }
                  }
                  transition={{ duration: 0.2 }}
                >
                  {closeIcon ?? <X className="h-5 w-5" />}
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  aria-hidden="true"
                  initial={
                    shouldReduceMotion ? false : { rotate: 90, opacity: 0 }
                  }
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { rotate: -90, opacity: 0 }
                  }
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
              <>
                <button
                  type="button"
                  aria-label="Close menu"
                  tabIndex={-1}
                  className="fixed inset-0 z-[-1] cursor-default bg-transparent"
                  onClick={() => setIsExpanded(false)}
                />
                <motion.div
                  ref={menuRef}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  animate={{ opacity: 1, scale: 1 }}
                  exit={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ duration: 0.2, delay: 0.1 }}
                  style={{ transformOrigin: "bottom right" }}
                  className="absolute bottom-0 right-0 w-64 rounded-2xl rounded-br-[28px] border border-border bg-card p-4 shadow-2xl"
                  role="menu"
                  onKeyDown={handleMenuKeyDown}
                >
                  <div className="mb-2 space-y-2">
                    {actions.map((action, index) => (
                      <motion.button
                        key={action.label}
                        type="button"
                        initial={
                          shouldReduceMotion ? false : { opacity: 0, x: -20 }
                        }
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 + 0.2 }}
                        onClick={() => {
                          action.onClick();
                          setIsExpanded(false);
                        }}
                        className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-sm transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        role="menuitem"
                      >
                        <span aria-hidden="true" className="text-muted-foreground">
                          {action.icon}
                        </span>
                        <span className="font-medium">{action.label}</span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>
    </div>
  );
}
