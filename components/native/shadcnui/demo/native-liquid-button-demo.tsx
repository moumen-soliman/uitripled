"use client";

import { NativeLiquidButton } from "@/components/native/shadcnui/native-liquid-button-shadcnui";
import { useState } from "react";

export function NativeLiquidButtonDefault() {
  return (
    <div className="flex items-center justify-center p-8 min-h-[200px]">
      <NativeLiquidButton autoSimulate>Submit</NativeLiquidButton>
    </div>
  );
}

export function NativeLiquidButtonGradient() {
  return (
    <div className="flex items-center justify-center p-8 min-h-[200px]">
      <NativeLiquidButton liquidVariant="gradient" autoSimulate>
        Download
      </NativeLiquidButton>
    </div>
  );
}

export function NativeLiquidButtonGlow() {
  return (
    <div className="flex items-center justify-center p-8 min-h-[200px]">
      <NativeLiquidButton liquidVariant="glow" autoSimulate>
        Complete
      </NativeLiquidButton>
    </div>
  );
}

export function NativeLiquidButtonWave() {
  return (
    <div className="flex items-center justify-center p-8 min-h-[200px]">
      <NativeLiquidButton liquidVariant="wave" autoSimulate>
        Process
      </NativeLiquidButton>
    </div>
  );
}

export function NativeLiquidButtonWithProgress() {
  const [progress, setProgress] = useState(0);

  const handleClick = async () => {
    // Simulate progress
    for (let i = 0; i <= 100; i += 10) {
      await new Promise((resolve) => setTimeout(resolve, 200));
      setProgress(i);
    }
  };

  return (
    <div className="flex items-center justify-center p-8 min-h-[200px]">
      <NativeLiquidButton
        progress={progress}
        onClick={handleClick}
        showPercentage
      >
        Upload File
      </NativeLiquidButton>
    </div>
  );
}

export function NativeLiquidButtonLoading() {
  return (
    <div className="flex items-center justify-center p-8 min-h-[200px]">
      <NativeLiquidButton loading progress={50}>
        Processing...
      </NativeLiquidButton>
    </div>
  );
}

export function NativeLiquidButtonSuccess() {
  return (
    <div className="flex items-center justify-center p-8 min-h-[200px]">
      <NativeLiquidButton success progress={100}>
        Success!
      </NativeLiquidButton>
    </div>
  );
}

export function NativeLiquidButtonError() {
  return (
    <div className="flex items-center justify-center p-8 min-h-[200px]">
      <NativeLiquidButton error progress={100}>
        Failed
      </NativeLiquidButton>
    </div>
  );
}

export function NativeLiquidButtonSizes() {
  return (
    <div className="flex items-center justify-center gap-4 p-8 min-h-[200px] flex-wrap">
      <NativeLiquidButton size="sm" autoSimulate>
        Small
      </NativeLiquidButton>
      <NativeLiquidButton size="default" autoSimulate>
        Medium
      </NativeLiquidButton>
      <NativeLiquidButton size="lg" autoSimulate>
        Large
      </NativeLiquidButton>
      <NativeLiquidButton size="lg" autoSimulate>
        Extra Large
      </NativeLiquidButton>
    </div>
  );
}

export function NativeLiquidButtonVariants() {
  return (
    <div className="flex items-center justify-center gap-4 p-8 min-h-[200px] flex-wrap">
      <NativeLiquidButton variant="default" autoSimulate>
        Default
      </NativeLiquidButton>
      <NativeLiquidButton variant="outline" autoSimulate>
        Outline
      </NativeLiquidButton>
      <NativeLiquidButton variant="secondary" autoSimulate>
        Secondary
      </NativeLiquidButton>
      <NativeLiquidButton variant="ghost" autoSimulate>
        Ghost
      </NativeLiquidButton>
    </div>
  );
}

export function NativeLiquidButtonCustomColor() {
  return (
    <div className="flex items-center justify-center p-8 min-h-[200px]">
      <NativeLiquidButton liquidColor="bg-purple-500" autoSimulate>
        Custom Color
      </NativeLiquidButton>
    </div>
  );
}

export function NativeLiquidButtonDemo() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Default
          </h3>
          <NativeLiquidButtonDefault />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Gradient
          </h3>
          <NativeLiquidButtonGradient />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">Glow</h3>
          <NativeLiquidButtonGlow />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">Wave</h3>
          <NativeLiquidButtonWave />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">
            With Progress
          </h3>
          <NativeLiquidButtonWithProgress />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Loading
          </h3>
          <NativeLiquidButtonLoading />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Success
          </h3>
          <NativeLiquidButtonSuccess />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">Error</h3>
          <NativeLiquidButtonError />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Custom Color
          </h3>
          <NativeLiquidButtonCustomColor />
        </div>
      </div>
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-muted-foreground text-sm mb-4">
            Sizes
          </h3>
          <NativeLiquidButtonSizes />
        </div>
        <div>
          <h3 className="font-semibold text-muted-foreground text-sm mb-4">
            Variants
          </h3>
          <NativeLiquidButtonVariants />
        </div>
      </div>
    </div>
  );
}
