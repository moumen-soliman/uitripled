"use client";

import { NativeLiquidButton } from "@uitripled/ui/components/native/shadcn-ui/native-liquid-button-shadcnui";
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
  return <NativeLiquidButtonDefault />;
}
