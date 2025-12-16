"use client";

import { NativeFlipText } from "@/components/native/carbon/native-flip-text-carbon";

export function NativeFlipTextDefault() {
  return (
    <div className="flex items-center justify-center p-8 bg-black/5 dark:bg-white/5 rounded-xl border border-black/10 dark:border-white/10">
      <NativeFlipText
        words={["Design", "Develop", "Ship", "Deploy"]}
        className="text-2xl font-bold text-foreground"
      />
    </div>
  );
}

export function NativeFlipTextColored() {
  return (
    <div className="flex items-center justify-center p-8 bg-black/5 dark:bg-white/5 rounded-xl border border-black/10 dark:border-white/10">
      <div className="text-xl font-medium text-muted-foreground flex items-center gap-2">
        <span>We build</span>
        <NativeFlipText
          words={["beautiful", "modern", "fast", "accessible"]}
          className="text-primary font-bold"
          duration={1500}
        />
        <span>user interfaces.</span>
      </div>
    </div>
  );
}

export function NativeFlipTextDemo() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="space-y-2">
        <h3 className="font-semibold text-muted-foreground">Default</h3>
        <NativeFlipTextDefault />
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold text-muted-foreground">
          Inline with Text
        </h3>
        <NativeFlipTextColored />
      </div>
    </div>
  );
}
