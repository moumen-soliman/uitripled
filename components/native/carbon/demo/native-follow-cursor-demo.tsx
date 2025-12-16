"use client";

import {
  NativeFollowCursor,
  NativeFollowCursorArea,
} from "@/components/native/carbon/native-follow-cursor-carbon";
import { Sparkles, Star } from "lucide-react";

export function NativeFollowCursorDefault() {
  return (
    <div className="flex items-center justify-center min-h-[200px] w-full border border-border rounded-lg bg-muted/20">
      <p className="text-muted-foreground">Move your cursor around</p>
      <NativeFollowCursor name="Default" />
    </div>
  );
}

export function NativeFollowCursorGlass() {
  return (
    <div className="flex items-center justify-center min-h-[200px] w-full border border-border rounded-lg bg-muted/20">
      <p className="text-muted-foreground">Move your cursor around</p>
      <NativeFollowCursor name="Glass" variant="glass" />
    </div>
  );
}

export function NativeFollowCursorSolid() {
  return (
    <div className="flex items-center justify-center min-h-[200px] w-full border border-border rounded-lg bg-muted/20">
      <p className="text-muted-foreground">Move your cursor around</p>
      <NativeFollowCursor name="Solid" variant="solid" />
    </div>
  );
}

export function NativeFollowCursorMinimal() {
  return (
    <div className="flex items-center justify-center min-h-[200px] w-full border border-border rounded-lg bg-muted/20">
      <p className="text-muted-foreground">Move your cursor around</p>
      <NativeFollowCursor name="Minimal" variant="minimal" />
    </div>
  );
}

export function NativeFollowCursorSmall() {
  return (
    <div className="flex items-center justify-center min-h-[200px] w-full border border-border rounded-lg bg-muted/20">
      <p className="text-muted-foreground">Move your cursor around</p>
      <NativeFollowCursor name="Small" size="sm" />
    </div>
  );
}

export function NativeFollowCursorLarge() {
  return (
    <div className="flex items-center justify-center min-h-[200px] w-full border border-border rounded-lg bg-muted/20">
      <p className="text-muted-foreground">Move your cursor around</p>
      <NativeFollowCursor name="Large" size="lg" />
    </div>
  );
}

export function NativeFollowCursorNoDot() {
  return (
    <div className="flex items-center justify-center min-h-[200px] w-full border border-border rounded-lg bg-muted/20">
      <p className="text-muted-foreground">Move your cursor around</p>
      <NativeFollowCursor name="No Dot" showDot={false} />
    </div>
  );
}

export function NativeFollowCursorCustomOffset() {
  return (
    <div className="flex items-center justify-center min-h-[200px] w-full border border-border rounded-lg bg-muted/20">
      <p className="text-muted-foreground">Move your cursor around</p>
      <NativeFollowCursor name="Custom Offset" offset={{ x: 30, y: 30 }} />
    </div>
  );
}

export function NativeFollowCursorSmooth() {
  return (
    <div className="flex items-center justify-center min-h-[200px] w-full border border-border rounded-lg bg-muted/20">
      <p className="text-muted-foreground">Move your cursor around</p>
      <NativeFollowCursor name="Smooth" stiffness={100} damping={30} />
    </div>
  );
}

export function NativeFollowCursorChildren() {
  return (
    <div className="flex items-center justify-center min-h-[200px] w-full border border-border rounded-lg bg-muted/20">
      <p className="text-muted-foreground">Move your cursor around</p>
      <NativeFollowCursor>
        <span className="flex items-center gap-1.5">
          <Sparkles className="h-3 w-3" />
          Custom Content
        </span>
      </NativeFollowCursor>
    </div>
  );
}

export function NativeFollowCursorAreaDefault() {
  return (
    <NativeFollowCursorArea
      cursorContent="Hover Me"
      className="flex items-center justify-center min-h-[200px] w-full border border-border rounded-lg bg-muted/20"
    >
      <p className="text-muted-foreground">
        Move your cursor inside this box only
      </p>
    </NativeFollowCursorArea>
  );
}

export function NativeFollowCursorAreaWithDot() {
  return (
    <NativeFollowCursorArea
      cursorContent="With Dot"
      showDot={true}
      className="flex items-center justify-center min-h-[200px] w-full border border-border rounded-lg bg-muted/20"
    >
      <p className="text-muted-foreground">
        Move your cursor inside this box only
      </p>
    </NativeFollowCursorArea>
  );
}

export function NativeFollowCursorAreaCustom() {
  return (
    <NativeFollowCursorArea
      cursorContent={
        <span className="flex items-center gap-1.5">
          <Star className="h-3 w-3" />
          Custom
        </span>
      }
      variant="glass"
      className="flex items-center justify-center min-h-[200px] w-full border border-border rounded-lg bg-muted/20"
    >
      <p className="text-muted-foreground">
        Move your cursor inside this box only
      </p>
    </NativeFollowCursorArea>
  );
}

export function NativeFollowCursorDemo() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Default
          </h3>
          <NativeFollowCursorDefault />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">Glass</h3>
          <NativeFollowCursorGlass />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">Solid</h3>
          <NativeFollowCursorSolid />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Minimal
          </h3>
          <NativeFollowCursorMinimal />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">Small</h3>
          <NativeFollowCursorSmall />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">Large</h3>
          <NativeFollowCursorLarge />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">
            No Dot
          </h3>
          <NativeFollowCursorNoDot />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Custom Offset
          </h3>
          <NativeFollowCursorCustomOffset />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Smooth
          </h3>
          <NativeFollowCursorSmooth />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Custom Children
          </h3>
          <NativeFollowCursorChildren />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Area (Default)
          </h3>
          <NativeFollowCursorAreaDefault />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Area (With Dot)
          </h3>
          <NativeFollowCursorAreaWithDot />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Area (Custom)
          </h3>
          <NativeFollowCursorAreaCustom />
        </div>
      </div>
    </div>
  );
}
