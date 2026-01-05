"use client";

import { NativeAvatarExpand } from "@uitripled/react-shadcn/components/native/native-avatar-expand-shadcnui";

export function NativeAvatarExpandDefault() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeAvatarExpand
        src="https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtoUjLg4dAryGEidskK72wBCQA6DNcZH4Xh5b8"
        name="John Doe"
      />
    </div>
  );
}

export function NativeAvatarExpandSmall() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeAvatarExpand
        src="https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtoUjLg4dAryGEidskK72wBCQA6DNcZH4Xh5b8"
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
        src="https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtoUjLg4dAryGEidskK72wBCQA6DNcZH4Xh5b8"
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
        src="https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtoUjLg4dAryGEidskK72wBCQA6DNcZH4Xh5b8"
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
