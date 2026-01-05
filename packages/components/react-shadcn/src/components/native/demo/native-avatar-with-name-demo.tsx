"use client";

import { NativeAvatarWithName } from "../native-avatar-with-name-shadcnui";

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
  return <NativeAvatarWithNameDefault />;
}
