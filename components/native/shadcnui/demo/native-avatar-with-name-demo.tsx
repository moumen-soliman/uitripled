"use client";

import { NativeAvatarWithName } from "@/components/native/shadcnui/native-avatar-with-name-shadcnui";

export function NativeAvatarWithNameDefault() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeAvatarWithName
        src="https://github.com/shadcn.png"
        name="John Doe"
      />
    </div>
  );
}

export function NativeAvatarWithNameTop() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeAvatarWithName
        src="https://github.com/shadcn.png"
        name="Jane Smith"
        direction="top"
      />
    </div>
  );
}

export function NativeAvatarWithNameLeft() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeAvatarWithName
        src="https://github.com/shadcn.png"
        name="Alex Johnson"
        direction="left"
      />
    </div>
  );
}

export function NativeAvatarWithNameRight() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeAvatarWithName
        src="https://github.com/shadcn.png"
        name="Sarah Williams"
        direction="right"
      />
    </div>
  );
}

export function NativeAvatarWithNameSmall() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeAvatarWithName
        src="https://github.com/shadcn.png"
        name="Small Avatar"
        size="sm"
      />
    </div>
  );
}

export function NativeAvatarWithNameLarge() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeAvatarWithName
        src="https://github.com/shadcn.png"
        name="Large Avatar"
        size="lg"
      />
    </div>
  );
}

export function NativeAvatarWithNameNoImage() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeAvatarWithName name="No Image User" />
    </div>
  );
}

export function NativeAvatarWithNameDemo() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Default (Bottom)
          </h3>
          <NativeAvatarWithNameDefault />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">Top</h3>
          <NativeAvatarWithNameTop />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">Left</h3>
          <NativeAvatarWithNameLeft />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">Right</h3>
          <NativeAvatarWithNameRight />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">Small</h3>
          <NativeAvatarWithNameSmall />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">Large</h3>
          <NativeAvatarWithNameLarge />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">
            No Image
          </h3>
          <NativeAvatarWithNameNoImage />
        </div>
      </div>
    </div>
  );
}
