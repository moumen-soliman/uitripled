"use client";

import { NativeAvatarExpand } from "../native-avatar-expand-shadcnui";

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
  return <NativeAvatarExpandDefault />;
}
