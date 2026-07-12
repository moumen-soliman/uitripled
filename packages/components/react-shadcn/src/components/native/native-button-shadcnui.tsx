import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { ReactNode } from "react";

export interface NativeButtonProps extends ButtonProps {
  children: ReactNode;
  loading?: boolean;
  glow?: boolean;
}

const NativeButton = ({
  className,
  variant = "default",
  size = "lg",
  children,
  loading = false,
  glow = false,
  disabled,
  ...props
}: NativeButtonProps) => {
  const buttonContent = (
    <>
      {loading && (
        <Loader2 aria-hidden="true" className="w-4 h-4 mr-2 animate-spin" />
      )}
      <span
        className={cn(
          "flex items-center gap-2",
          loading && "motion-safe:animate-[pulse_1s_ease-in-out_infinite]"
        )}
      >
        {children}
      </span>
    </>
  );

  const glassmorphismClassName = cn(
    "cursor-pointer h-12 rounded-md px-7 text-sm relative overflow-hidden",
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

  return (
    <div className="group/native relative inline-block w-fit">
      {glow && !disabled && !loading && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-md bg-primary/20 blur-xl opacity-0 group-hover/native:opacity-100 transition-opacity duration-500"
        />
      )}
      <Button
        variant={variant}
        size={size}
        className={glassmorphismClassName}
        disabled={disabled || loading}
        aria-busy={loading}
        {...props}
      >
        {buttonContent}
      </Button>
    </div>
  );
};

NativeButton.displayName = "NativeButton";

export { NativeButton };
