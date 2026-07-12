"use client";

import { cn } from "@uitripled/utils";
import {
  Button,
  type ButtonProps as BaseButtonProps,
} from "@base-ui/react/button";
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
        {loading && (
          <Loader2 aria-hidden="true" className="w-4 h-4 mr-2 animate-spin" />
        )}
        <span
          className={cn(
            "flex justify-center items-center gap-2 w-full",
            loading && "motion-safe:animate-[pulse_1s_ease-in-out_infinite]"
          )}
        >
          {children}
        </span>
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
      "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      variantStyles[variant],
      sizeStyles[size],
      "cursor-pointer h-12 rounded-md text-sm relative overflow-hidden",
      "transition-[scale,box-shadow,background-color,border-color,color] duration-200",
      !disabled &&
        !loading &&
        "motion-safe:hover:scale-[1.02] motion-safe:active:scale-[0.98]",
      !glow && "shadow-md hover:shadow-lg",
      glow && "shadow-lg shadow-primary/20 hover:shadow-primary/40",
      variant === "outline" && "text-foreground/80 hover:bg-foreground/5",
      (disabled || loading) && "opacity-50 cursor-not-allowed grayscale",
      className
    );

    const glowOverlay =
      glow && !disabled && !loading ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-md bg-primary/20 blur-xl opacity-0 group-hover/native:opacity-100 transition-opacity duration-500"
        />
      ) : null;

    if (props.href) {
      return (
        <div className="group/native relative inline-block w-fit">
          {glowOverlay}
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            {...(props as any)}
            className={cn(
              glassmorphismClassName,
              (disabled || loading) && "pointer-events-none"
            )}
            aria-disabled={disabled || loading ? true : undefined}
            tabIndex={disabled || loading ? -1 : undefined}
          >
            {buttonContent}
          </a>
        </div>
      );
    }

    return (
      <div className="group/native relative inline-block w-fit">
        {glowOverlay}
        <Button
          ref={ref}
          nativeButton
          className={glassmorphismClassName}
          disabled={disabled || loading}
          aria-busy={loading}
          {...props}
        >
          {buttonContent}
        </Button>
      </div>
    );
  }
);
NativeButton.displayName = "NativeButton";

export { NativeButton };
