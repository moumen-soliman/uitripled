"use client";

import { NativeAvatarExpand } from "@/components/native/shadcnui/native-avatar-expand-shadcnui";

export function NativeAvatarExpandDefault() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeAvatarExpand src="https://github.com/shadcn.png" name="John Doe" />
    </div>
  );
}

export function NativeAvatarExpandSmall() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeAvatarExpand
        src="https://github.com/shadcn.png"
        name="Jane Smith"
        size="sm"
      />
    </div>
  );
}

export function NativeAvatarExpandLarge() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeAvatarExpand
        src="https://github.com/shadcn.png"
        name="Alex Johnson"
        size="lg"
      />
    </div>
  );
}

export function NativeAvatarExpandExtraLarge() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeAvatarExpand
        src="https://github.com/shadcn.png"
        name="Sarah Williams"
        size="xl"
      />
    </div>
  );
}

export function NativeAvatarExpandNoImage() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeAvatarExpand name="No Image User" />
    </div>
  );
}

export function NativeAvatarExpandDemo() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Default
          </h3>
          <NativeAvatarExpandDefault />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">Small</h3>
          <NativeAvatarExpandSmall />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">Large</h3>
          <NativeAvatarExpandLarge />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Extra Large
          </h3>
          <NativeAvatarExpandExtraLarge />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">
            No Image
          </h3>
          <NativeAvatarExpandNoImage />
        </div>
      </div>
    </div>
  );
}
