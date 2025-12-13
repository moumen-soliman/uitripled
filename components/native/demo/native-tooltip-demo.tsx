"use client";

import { Info } from "lucide-react";
import { NativeButton } from "@/components/native/native-button";
import {
  NativeTooltip,
  NativeTooltipContent,
  NativeTooltipProvider,
  NativeTooltipTrigger,
} from "@/components/native/native-tooltip";

export function NativeTooltipBlur() {
  return (
    <NativeTooltipProvider>
      <NativeTooltip content="This is a smooth tooltip">
        <NativeButton variant="outline">Default (Blur)</NativeButton>
      </NativeTooltip>
    </NativeTooltipProvider>
  );
}

export function NativeTooltipScale() {
  return (
    <NativeTooltipProvider>
      <NativeTooltip content="This pops!" animation="scale">
        <NativeButton variant="outline">Scale Animation</NativeButton>
      </NativeTooltip>
    </NativeTooltipProvider>
  );
}

export function NativeTooltipDemo() {
  return (
    <div className="flex items-center gap-4">
      <NativeTooltipBlur />
      <NativeTooltipScale />
    </div>
  );
}
