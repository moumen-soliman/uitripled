import { cn } from "@/lib/utils";
import * as React from "react";

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          className
        )}
        {...props}
      />
    );
  }
);
Label.displayName = "Label";

export { Label };
