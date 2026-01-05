"use client";

import { NativeStartNow } from "../native-start-now-baseui";
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
      showRocket={false}
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
  return <NativeStartNowDefault />;
}
