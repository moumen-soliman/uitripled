"use client";

import { NativeTooltip } from "./native-tooltip-baseui";
import { cn } from "@uitripled/utils";
import type { ReactNode } from "react";

type BadgeVariant = "default" | "blue" | "gold" | "green" | "black";
type BadgeSize = "sm" | "md" | "lg" | "xl" | "xxl";

interface VerifiedBadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
  showLabel?: boolean;
  label?: string;
  icon?: ReactNode;
  tooltip?: string;
}

const sizeClasses: Record<
  BadgeSize,
  { container: string; icon: string; text: string }
> = {
  sm: { container: "size-4", icon: "size-2", text: "text-xs" },
  md: { container: "size-5", icon: "size-2.5", text: "text-sm" },
  lg: { container: "size-6", icon: "size-3", text: "text-base" },
  xl: { container: "size-7", icon: "size-4", text: "text-lg" },
  xxl: { container: "size-8", icon: "size-5", text: "text-xl" },
};

const variantClasses: Record<
  BadgeVariant,
  { bg: string; icon: string; shine: string }
> = {
  default: {
    bg: "bg-foreground",
    icon: "text-background",
    shine: "from-transparent via-white/40 to-transparent",
  },
  blue: {
    bg: "bg-blue-500",
    icon: "text-white",
    shine: "from-transparent via-white/50 to-transparent",
  },
  gold: {
    bg: "bg-amber-500",
    icon: "text-white",
    shine: "from-transparent via-white/50 to-transparent",
  },
  green: {
    bg: "bg-emerald-500",
    icon: "text-white",
    shine: "from-transparent via-white/50 to-transparent",
  },
  black: {
    bg: "bg-black",
    icon: "text-white",
    shine: "from-transparent via-white/50 to-transparent",
  },
};

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function BadgeTooltip({
  children,
  content,
}: {
  children: ReactNode;
  content?: string;
}) {
  if (!content) return <>{children}</>;

  return (
    <NativeTooltip content={content} openDelay={100}>
      {children}
    </NativeTooltip>
  );
}

export function VerifiedBadge({
  variant = "default",
  size = "md",
  className,
  showLabel = false,
  label = "Verified",
  icon,
  tooltip,
}: VerifiedBadgeProps) {
  const { bg, icon: iconColor, shine } = variantClasses[variant];
  const { container, icon: iconSize, text } = sizeClasses[size];

  return (
    <BadgeTooltip content={tooltip}>
      <span className={cn("group inline-flex items-center gap-1.5", className)}>
        <span
          className={cn(
            "relative flex items-center justify-center rounded-full overflow-hidden",
            bg,
            container
          )}
        >
          {/* Shine effect on hover */}
          <span
            className={cn(
              "absolute inset-0 -translate-x-full",
              "bg-gradient-to-r",
              shine,
              "group-hover:translate-x-full",
              "transition-transform duration-500 ease-out"
            )}
          />

          {icon ? (
            <span
              className={cn(
                "relative z-10 flex items-center justify-center",
                iconSize,
                iconColor
              )}
            >
              {icon}
            </span>
          ) : (
            <CheckIcon className={cn("relative z-10", iconSize, iconColor)} />
          )}
        </span>

        {showLabel && (
          <span className={cn("font-medium text-foreground", text)}>
            {label}
          </span>
        )}
      </span>
    </BadgeTooltip>
  );
}

export function VerifiedBadgeOutline({
  variant = "default",
  size = "md",
  className,
  icon,
  tooltip,
}: Omit<VerifiedBadgeProps, "showLabel" | "label">) {
  const { container, icon: iconSize } = sizeClasses[size];

  const colorClasses: Record<BadgeVariant, { stroke: string; text: string }> = {
    default: {
      stroke: "stroke-foreground",
      text: "text-foreground",
    },
    blue: {
      stroke: "stroke-blue-500",
      text: "text-blue-500",
    },
    gold: {
      stroke: "stroke-amber-500",
      text: "text-amber-500",
    },
    green: {
      stroke: "stroke-emerald-500",
      text: "text-emerald-500",
    },
    black: {
      stroke: "stroke-black",
      text: "text-black",
    },
  };

  const { stroke, text } = colorClasses[variant];

  return (
    <BadgeTooltip content={tooltip}>
      <span
        className={cn(
          "group relative inline-flex items-center justify-center",
          container,
          className
        )}
      >
        <svg viewBox="0 0 24 24" className="absolute inset-0 size-full">
          <circle
            cx="12"
            cy="12"
            r="10"
            fill="none"
            strokeWidth="2"
            className={cn(stroke, "transition-opacity")}
          />
          <circle
            cx="12"
            cy="12"
            r="10"
            fill="none"
            strokeWidth="2"
            className={cn(
              stroke,
              "opacity-0 group-hover:opacity-100",
              "[stroke-dasharray:63] [stroke-dashoffset:63]",
              "group-hover:[stroke-dashoffset:0]",
              "transition-all duration-500 ease-out"
            )}
          />
        </svg>
        {icon ? (
          <span
            className={cn(
              "relative z-10 flex items-center justify-center",
              iconSize,
              text
            )}
          >
            {icon}
          </span>
        ) : (
          <CheckIcon className={cn("relative z-10", iconSize, text)} />
        )}
      </span>
    </BadgeTooltip>
  );
}

export function VerifiedShieldBadge({
  variant = "default",
  size = "md",
  className,
  icon,
  tooltip,
}: Omit<VerifiedBadgeProps, "showLabel" | "label">) {
  const { bg, icon: iconColor } = variantClasses[variant];
  const { icon: iconSize } = sizeClasses[size];

  const sizeMap: Record<BadgeSize, string> = {
    sm: "size-5",
    md: "size-6",
    lg: "size-7",
    xl: "size-8",
    xxl: "size-9",
  };

  return (
    <BadgeTooltip content={tooltip}>
      <span
        className={cn(
          "group relative inline-flex items-center justify-center",
          className
        )}
      >
        <svg viewBox="0 0 24 28" className={sizeMap[size]}>
          <defs>
            <clipPath id={`shield-clip-${size}`}>
              <path d="M12 1L2 5v8c0 5.55 4.27 10.74 10 12 5.73-1.26 10-6.45 10-12V5L12 1z" />
            </clipPath>
          </defs>
          {/* Shield background */}
          <path
            d="M12 1L2 5v8c0 5.55 4.27 10.74 10 12 5.73-1.26 10-6.45 10-12V5L12 1z"
            className={cn(bg.replace("bg-", "fill-"))}
          />
          {/* Shine effect */}
          <rect
            x="-24"
            y="0"
            width="24"
            height="28"
            className={cn(
              "fill-white/30",
              "group-hover:translate-x-48",
              "transition-transform duration-500 ease-out"
            )}
            clipPath={`url(#shield-clip-${size})`}
          />
        </svg>
        {icon ? (
          <span
            className={cn(
              "absolute z-10 flex items-center justify-center",
              iconSize,
              iconColor
            )}
          >
            {icon}
          </span>
        ) : (
          <CheckIcon className={cn("absolute z-10", iconSize, iconColor)} />
        )}
      </span>
    </BadgeTooltip>
  );
}
