"use client";

import { cn } from "@uitripled/utils";
import {
  Button,
  type ButtonProps as BaseButtonProps,
} from "@base-ui/react/button";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import * as React from "react";
import { ReactNode } from "react";

export interface NativeButtonProps extends Omit<BaseButtonProps, "className"> {
  children: ReactNode;
  loading?: boolean;
  glow?: boolean;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  href?: string;
}

const NativeButton = React.forwardRef<HTMLButtonElement, NativeButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "lg",
      children,
      loading = false,
      glow = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const buttonContent = (
      <>
        {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
        <motion.span
          className={cn("flex justify-center items-center gap-2 w-full")}
          animate={loading ? { opacity: [1, 0.5, 1] } : { opacity: 1 }}
          transition={
            loading
              ? { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
              : { duration: 0.2 }
          }
        >
          {children}
        </motion.span>
      </>
    );

    const variantStyles = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline:
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    };

    const sizeStyles = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    };

    const glassmorphismClassName = cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      variantStyles[variant],
      sizeStyles[size],
      "cursor-pointer h-12 rounded-md text-sm relative overflow-hidden",
      !glow && "shadow-md hover:shadow-lg",
      glow &&
        "shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300",
      variant === "outline" && "text-foreground/80 hover:bg-foreground/5",
      (disabled || loading) && "opacity-50 cursor-not-allowed grayscale",
      className
    );

    // We remove the motion.div wrapper to prevent nested button issues when used in asChild.
    // Ideally we would use motion.button but we want to keep using Base UI Button.
    // For now, we sacrifice the scale tap/hover effect on the wrapper for correctness,
    // or we could use a different approach if critical.
    // The glow effect moves inside.

    if (props.href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={glassmorphismClassName}
          aria-disabled={disabled || loading}
          {...(props as any)}
        >
          {glow && !disabled && !loading && (
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          )}
          {buttonContent}
        </a>
      );
    }

    return (
      <Button
        ref={ref}
        nativeButton
        className={glassmorphismClassName}
        disabled={disabled || loading}
        aria-busy={loading}
        {...props}
      >
        {glow && !disabled && !loading && (
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        )}
        {buttonContent}
      </Button>
    );
  }
);
NativeButton.displayName = "NativeButton";

export { NativeButton };
