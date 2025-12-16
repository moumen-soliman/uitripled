"use client";

import { NativeButton } from "@/components/native/baseui/native-button-baseui";
import {
  NativeTooltip,
  NativeTooltipProvider,
} from "@/components/native/baseui/native-tooltip-baseui";

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
