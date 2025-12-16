"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { HTMLMotionProps, motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import React from "react";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border border-primary/20 bg-primary/10 text-primary hover:bg-primary/20 hover:border-primary/40 hover:shadow-[0_0_10px_rgba(var(--primary),0.1)]",
        neutral:
          "border border-border/40 bg-card/50 text-muted-foreground backdrop-blur-sm hover:bg-card/80 hover:text-foreground hover:border-border/80",
        outline:
          "text-foreground border border-input bg-background/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground",
        glass:
          "bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10 text-foreground shadow-sm hover:bg-white/20 dark:hover:bg-black/20",
        glow: "bg-primary/10 text-primary border border-primary/20 shadow-[0_0_10px_rgba(var(--primary),0.2)] hover:shadow-[0_0_20px_rgba(var(--primary),0.4)] hover:bg-primary/20 hover:scale-[1.02]",
        animated:
          "group gap-2 tracking-widest uppercase border border-border/60 bg-card/70 text-muted-foreground backdrop-blur hover:border-primary/60 hover:bg-primary/15 hover:text-primary transition-colors duration-300",
      },
      size: {
        sm: "text-[10px] px-2 py-0.5",
        md: "text-xs px-2.5 py-0.5",
        lg: "text-sm px-3.5 py-1",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface NativeBadgeProps
  extends Omit<HTMLMotionProps<"div">, "ref" | "children">,
    VariantProps<typeof badgeVariants> {
  /**
   * Whether to animate the badge on mount.
   * Default: true
   */
  animate?: boolean;
  /**
   * Optional label for the animated variant's secondary tag (e.g., "new", "beta").
   * Only applies when variant="animated".
   */
  tag?: string;
  /**
   * Optional icon for the animated variant. Defaults to Sparkles.
   * Only applies when variant="animated".
   */
  icon?: React.ReactNode;
  /**
   * Badge content.
   */
  children?: React.ReactNode;
}

function NativeBadge({
  className,
  variant,
  size,
  animate = true,
  tag = "new",
  icon,
  children,
  ...props
}: NativeBadgeProps) {
  const isAnimated = variant === "animated";
  const IconElement = icon ?? <Sparkles className="h-3 w-3 text-primary" />;

  return (
    <motion.div
      initial={animate ? { opacity: 0, scale: 0.9 } : { opacity: 1, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    >
      {isAnimated && (
        <motion.span
          animate={{ rotate: [0, 15, -15, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block"
          aria-hidden
        >
          {IconElement}
        </motion.span>
      )}
      {children}
      {isAnimated && tag && (
        <span className="rounded-full border border-border/40 bg-white/5 px-2 py-0.5 text-[0.6rem] text-muted-foreground transition-colors duration-300 group-hover:border-primary/60 group-hover:bg-primary/25 group-hover:text-primary">
          {tag}
        </span>
      )}
    </motion.div>
  );
}

export { badgeVariants, NativeBadge };
