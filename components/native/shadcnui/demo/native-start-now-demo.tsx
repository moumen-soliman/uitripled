"use client";

import { NativeStartNow } from "@/components/native/shadcnui/native-start-now-shadcnui";
import { Heart, Rocket, Star, Zap } from "lucide-react";

export function NativeStartNowDefault() {
  return (
    <NativeStartNow
      onStart={async () => {
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }}
    />
  );
}

export function NativeStartNowGradient() {
  return (
    <NativeStartNow
      variant="gradient"
      onStart={async () => {
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }}
    />
  );
}

export function NativeStartNowSolid() {
  return (
    <NativeStartNow
      variant="solid"
      onStart={async () => {
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }}
    />
  );
}

export function NativeStartNowOutline() {
  return (
    <NativeStartNow
      variant="outline"
      onStart={async () => {
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }}
    />
  );
}

export function NativeStartNowSmall() {
  return (
    <NativeStartNow
      size="sm"
      onStart={async () => {
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }}
    />
  );
}

export function NativeStartNowLarge() {
  return (
    <NativeStartNow
      size="lg"
      onStart={async () => {
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }}
    />
  );
}

export function NativeStartNowNoSparkles() {
  return (
    <NativeStartNow
      showSparkles={false}
      onStart={async () => {
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }}
    />
  );
}

export function NativeStartNowCustomLabels() {
  return (
    <NativeStartNow
      label="Get Started"
      loadingLabel="Preparing..."
      successLabel="Ready!"
      onStart={async () => {
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }}
    />
  );
}

export function NativeStartNowDisabled() {
  return (
    <NativeStartNow
      disabled
      onStart={async () => {
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }}
    />
  );
}

export function NativeStartNowStarIcon() {
  return (
    <NativeStartNow
      icon={<Star className="h-3 w-3 text-primary fill-primary" />}
      onStart={async () => {
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }}
    />
  );
}

export function NativeStartNowZapIcon() {
  return (
    <NativeStartNow
      icon={<Zap className="h-3 w-3 text-primary fill-primary" />}
      onStart={async () => {
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }}
    />
  );
}

export function NativeStartNowHeartIcon() {
  return (
    <NativeStartNow
      icon={<Heart className="h-3 w-3 text-primary fill-primary" />}
      onStart={async () => {
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }}
    />
  );
}

export function NativeStartNowRocketIcon() {
  return (
    <NativeStartNow
      icon={<Rocket className="h-3 w-3 text-primary fill-primary" />}
      onStart={async () => {
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }}
    />
  );
}

export function NativeStartNowDemo() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Default
          </h3>
          <NativeStartNowDefault />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Gradient
          </h3>
          <NativeStartNowGradient />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">Solid</h3>
          <NativeStartNowSolid />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Outline
          </h3>
          <NativeStartNowOutline />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">Small</h3>
          <NativeStartNowSmall />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">Large</h3>
          <NativeStartNowLarge />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">
            No Sparkles
          </h3>
          <NativeStartNowNoSparkles />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Custom Labels
          </h3>
          <NativeStartNowCustomLabels />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Disabled
          </h3>
          <NativeStartNowDisabled />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Star Icon
          </h3>
          <NativeStartNowStarIcon />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Zap Icon
          </h3>
          <NativeStartNowZapIcon />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Heart Icon
          </h3>
          <NativeStartNowHeartIcon />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Rocket Icon
          </h3>
          <NativeStartNowRocketIcon />
        </div>
      </div>
    </div>
  );
}
