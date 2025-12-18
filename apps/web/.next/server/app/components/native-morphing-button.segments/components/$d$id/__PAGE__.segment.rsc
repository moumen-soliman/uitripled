1:"$Sreact.fragment"
2:I[176430,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"default"]
4:I[482433,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"NativeMorphingButtonDefault"]
5:I[482433,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"NativeMorphingButtonCustomIcon"]
10:I[897367,["/_next/static/chunks/d96012bcfc98706a.js","/_next/static/chunks/c1216787d4b31b65.js"],"OutletBoundary"]
11:"$Sreact.suspense"
3:T167c,"use client";

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
6:T167c,"use client";

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
7:T167c,"use client";

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
8:T167c,"use client";

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
9:T762,"use client";

import { NativeMorphingButton } from "@/components/native/base-ui/native-morphing-button-baseui";
import { FileText, FolderPlus, Plus, Users } from "lucide-react";

export function NativeMorphingButtonDefault() {
  return (
    <div className="relative h-48 w-full">
      <NativeMorphingButton
        actions={[
          {
            label: "New Task",
            icon: <Plus className="h-4 w-4" />,
            onClick: () => {},
          },
          {
            label: "New Project",
            icon: <FolderPlus className="h-4 w-4" />,
            onClick: () => {},
          },
          {
            label: "New Team",
            icon: <Users className="h-4 w-4" />,
            onClick: () => {},
          },
        ]}
      />
    </div>
  );
}

export function NativeMorphingButtonCustomIcon() {
  return (
    <div className="relative h-48 w-full">
      <NativeMorphingButton
        icon={<FileText className="h-5 w-5" />}
        actions={[
          {
            label: "Draft",
            icon: <FileText className="h-4 w-4" />,
            onClick: () => {},
          },
          {
            label: "Template",
            icon: <FileText className="h-4 w-4" />,
            onClick: () => {},
          },
        ]}
      />
    </div>
  );
}

export function NativeMorphingButtonDemo() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Default
          </h3>
          <NativeMorphingButtonDefault />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Custom Icon
          </h3>
          <NativeMorphingButtonCustomIcon />
        </div>
      </div>
    </div>
  );
}
a:T766,"use client";

import { NativeMorphingButton } from "@/components/native/shadcn-ui/native-morphing-button-shadcnui";
import { FileText, FolderPlus, Plus, Users } from "lucide-react";

export function NativeMorphingButtonDefault() {
  return (
    <div className="relative h-48 w-full">
      <NativeMorphingButton
        actions={[
          {
            label: "New Task",
            icon: <Plus className="h-4 w-4" />,
            onClick: () => {},
          },
          {
            label: "New Project",
            icon: <FolderPlus className="h-4 w-4" />,
            onClick: () => {},
          },
          {
            label: "New Team",
            icon: <Users className="h-4 w-4" />,
            onClick: () => {},
          },
        ]}
      />
    </div>
  );
}

export function NativeMorphingButtonCustomIcon() {
  return (
    <div className="relative h-48 w-full">
      <NativeMorphingButton
        icon={<FileText className="h-5 w-5" />}
        actions={[
          {
            label: "Draft",
            icon: <FileText className="h-4 w-4" />,
            onClick: () => {},
          },
          {
            label: "Template",
            icon: <FileText className="h-4 w-4" />,
            onClick: () => {},
          },
        ]}
      />
    </div>
  );
}

export function NativeMorphingButtonDemo() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Default
          </h3>
          <NativeMorphingButtonDefault />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Custom Icon
          </h3>
          <NativeMorphingButtonCustomIcon />
        </div>
      </div>
    </div>
  );
}
b:T766,"use client";

import { NativeMorphingButton } from "@/components/native/shadcn-ui/native-morphing-button-shadcnui";
import { FileText, FolderPlus, Plus, Users } from "lucide-react";

export function NativeMorphingButtonDefault() {
  return (
    <div className="relative h-48 w-full">
      <NativeMorphingButton
        actions={[
          {
            label: "New Task",
            icon: <Plus className="h-4 w-4" />,
            onClick: () => {},
          },
          {
            label: "New Project",
            icon: <FolderPlus className="h-4 w-4" />,
            onClick: () => {},
          },
          {
            label: "New Team",
            icon: <Users className="h-4 w-4" />,
            onClick: () => {},
          },
        ]}
      />
    </div>
  );
}

export function NativeMorphingButtonCustomIcon() {
  return (
    <div className="relative h-48 w-full">
      <NativeMorphingButton
        icon={<FileText className="h-5 w-5" />}
        actions={[
          {
            label: "Draft",
            icon: <FileText className="h-4 w-4" />,
            onClick: () => {},
          },
          {
            label: "Template",
            icon: <FileText className="h-4 w-4" />,
            onClick: () => {},
          },
        ]}
      />
    </div>
  );
}

export function NativeMorphingButtonDemo() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Default
          </h3>
          <NativeMorphingButtonDefault />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Custom Icon
          </h3>
          <NativeMorphingButtonCustomIcon />
        </div>
      </div>
    </div>
  );
}
0:{"buildId":"bFBIq5AO28jMw9-shWxSc","rsc":["$","$1","c",{"children":[["$","$L2",null,{"code":"$3","relatedComponents":[{"id":"default","name":"Default","description":"FAB with action menu","component":"$4","code":"<NativeMorphingButton\n  actions={[\n    { label: \"New Task\", icon: <Plus className=\"h-4 w-4\" />, onClick: () => {} },\n    { label: \"New Project\", icon: <FolderPlus className=\"h-4 w-4\" />, onClick: () => {} },\n  ]}\n/>"},{"id":"custom-icon","name":"Custom Icon","description":"FAB with custom icon","component":"$5","code":"<NativeMorphingButton\n  icon={<FileText className=\"h-5 w-5\" />}\n  actions={[...]}\n/>"}],"variantCodes":{"default":"<NativeMorphingButton\n  actions={[\n    { label: \"New Task\", icon: <Plus className=\"h-4 w-4\" />, onClick: () => {} },\n    { label: \"New Project\", icon: <FolderPlus className=\"h-4 w-4\" />, onClick: () => {} },\n  ]}\n/>","custom-icon":"<NativeMorphingButton\n  icon={<FileText className=\"h-5 w-5\" />}\n  actions={[...]}\n/>"},"baseId":"native-morphing-button","baseuiCode":"$6","shadcnuiCode":"$7","carbonCode":"$8","baseuiDemoCode":"$9","shadcnuiDemoCode":"$a","carbonDemoCode":"$b"}],["$Lc","$Ld","$Le"],"$Lf"]}],"loading":null,"isPartial":false}
c:["$","script","script-0",{"src":"/_next/static/chunks/caa50e77cf52fdaa.js","async":true}]
d:["$","script","script-1",{"src":"/_next/static/chunks/e0bc9c3a4105a6fe.js","async":true}]
e:["$","script","script-2",{"src":"/_next/static/chunks/48913bc585f72fa4.js","async":true}]
f:["$","$L10",null,{"children":["$","$11",null,{"name":"Next.MetadataOutlet","children":"$@12"}]}]
12:null
