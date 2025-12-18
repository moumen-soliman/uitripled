"use client";

import { NativeAvatarWithName } from "@uitripled/ui/components/native/shadcn-ui/native-avatar-with-name-shadcnui";

export function NativeAvatarWithNameDefault() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeAvatarWithName
        src="https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtoUjLg4dAryGEidskK72wBCQA6DNcZH4Xh5b8"
        name="John Doe"
      />
    </div>
  );
}

export function NativeAvatarWithNameTop() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeAvatarWithName
        src="https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtoUjLg4dAryGEidskK72wBCQA6DNcZH4Xh5b8"
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
        src="https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtoUjLg4dAryGEidskK72wBCQA6DNcZH4Xh5b8"
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
        src="https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtoUjLg4dAryGEidskK72wBCQA6DNcZH4Xh5b8"
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
        src="https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtoUjLg4dAryGEidskK72wBCQA6DNcZH4Xh5b8"
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
        src="https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtoUjLg4dAryGEidskK72wBCQA6DNcZH4Xh5b8"
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
