"use client";

import { Button } from "@uitripled/react-shadcn/ui/button";
import { cn } from "@/lib/utils";
import { Monitor, Smartphone, Tablet } from "lucide-react";

export type Breakpoint = "desktop" | "tablet" | "mobile";

export const BREAKPOINT_WIDTHS: Record<Breakpoint, number> = {
  desktop: 1200,
  tablet: 768,
  mobile: 375,
};

type BreakpointSwitcherProps = {
  activeBreakpoint: Breakpoint;
  onChange: (breakpoint: Breakpoint) => void;
};

export function BreakpointSwitcher({
  activeBreakpoint,
  onChange,
}: BreakpointSwitcherProps) {
  const breakpoints: { id: Breakpoint; icon: typeof Monitor; label: string }[] =
    [
      { id: "mobile", icon: Smartphone, label: "Mobile (375px)" },
      { id: "tablet", icon: Tablet, label: "Tablet (768px)" },
      { id: "desktop", icon: Monitor, label: "Desktop (1200px)" },
    ];

  return (
    <div className="inline-flex items-center gap-0.5 rounded-lg border border-border bg-muted/40 p-0.5">
      {breakpoints.map(({ id, icon: Icon, label }) => (
        <Button
          key={id}
          type="button"
          variant="ghost"
          size="sm"
          className={cn(
            "h-7 gap-1 rounded-md px-2 text-xs",
            activeBreakpoint === id && "bg-background shadow-sm"
          )}
          onClick={() => onChange(id)}
          title={label}
        >
          <Icon className="h-3.5 w-3.5" />
        </Button>
      ))}
    </div>
  );
}
