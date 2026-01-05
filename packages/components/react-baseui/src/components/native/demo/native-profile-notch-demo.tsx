"use client";

import { NativeProfileNotch } from "../native-profile-notch-baseui";

export function NativeProfileNotchDefault() {
  return (
    <div className="h-[500px] w-full flex items-center justify-center bg-gray-50/50 dark:bg-neutral-900/50 rounded-xl relative">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
      <NativeProfileNotch
        imageSrc="https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtoUjLg4dAryGEidskK72wBCQA6DNcZH4Xh5b8"
        name="Base UI"
        username="base-ui"
      >
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="flex flex-col items-center p-3 rounded-xl bg-primary-accent/5 border border-primary-accent/5">
            <span className="text-xs text-primary-accent/40 uppercase tracking-wider font-semibold">
              Role
            </span>
            <span className="text-sm text-primary-accent font-medium mt-1 text-center">
              Maintainer
            </span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-xl bg-primary-accent/5 border border-primary-accent/5">
            <span className="text-xs text-primary-accent/40 uppercase tracking-wider font-semibold">
              Commits
            </span>
            <span className="text-sm text-primary-accent font-medium mt-1 text-center">
              1,240
            </span>
          </div>
        </div>
      </NativeProfileNotch>
    </div>
  );
}

export function NativeProfileNotchOverlay() {
  return (
    <div className="h-[500px] w-full flex items-center justify-center bg-gray-50/50 dark:bg-neutral-900/50 rounded-xl relative">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />

      {/* Background content to demonstrate overlay behavior */}
      <div className="flex flex-col gap-4 max-w-sm text-center z-0 px-4">
        <h3 className="text-2xl font-bold text-foreground">
          Content Below Profile
        </h3>
        <p className="text-muted-foreground">
          This content stays in place when the profile expands because the notch
          uses absolute positioning. Try clicking the profile above!
        </p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="h-24 bg-muted/50 rounded-lg" />
          <div className="h-24 bg-muted/50 rounded-lg" />
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <NativeProfileNotch
          variant="overlay"
          imageSrc="https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtoUjLg4dAryGEidskK72wBCQA6DNcZH4Xh5b8"
          name="Base UI"
          username="base-ui"
        >
          <div className="border-t border-primary-accent/10 pt-4 mt-2">
            <p className="text-sm text-primary-accent/70 text-center italic">
              "Overlay variant example."
            </p>
          </div>
        </NativeProfileNotch>
      </div>
    </div>
  );
}
