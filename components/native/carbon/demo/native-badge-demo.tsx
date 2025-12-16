"use client";

import { NativeBadge } from "@/components/native/carbon/native-badge-carbon";
import { Sparkles } from "lucide-react";

export function NativeBadgeDefault() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeBadge>New Feature</NativeBadge>
    </div>
  );
}

export function NativeBadgeNeutral() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeBadge variant="neutral">Coming Soon</NativeBadge>
    </div>
  );
}

export function NativeBadgeOutline() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeBadge variant="outline">Experimental</NativeBadge>
    </div>
  );
}

export function NativeBadgeGlass() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeBadge variant="glass">Glassmorphism</NativeBadge>
    </div>
  );
}

export function NativeBadgeGlow() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeBadge variant="glow">
        <Sparkles className="w-3 h-3 mr-1" />
        AI Powered
      </NativeBadge>
    </div>
  );
}

export function NativeBadgeAnimated() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeBadge variant="animated">Feature</NativeBadge>
    </div>
  );
}

export function NativeBadgeDemo() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Default
          </h3>
          <NativeBadgeDefault />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Neutral
          </h3>
          <NativeBadgeNeutral />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Outline
          </h3>
          <NativeBadgeOutline />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">Glass</h3>
          <NativeBadgeGlass />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">Glow</h3>
          <NativeBadgeGlow />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Animated
          </h3>
          <NativeBadgeAnimated />
        </div>
      </div>
    </div>
  );
}
