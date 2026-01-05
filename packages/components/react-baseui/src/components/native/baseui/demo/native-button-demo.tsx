"use client";

import { NativeButton } from "../native-button-baseui";

export function NativeButtonDefault() {
  return <NativeButton className="uppercase">Get Started</NativeButton>;
}

export function NativeButtonGlow() {
  return (
    <NativeButton glow className="uppercase">
      Glow Effect
    </NativeButton>
  );
}

export function NativeButtonOutline() {
  return (
    <NativeButton variant="outline" className="uppercase">
      Learn More
    </NativeButton>
  );
}

export function NativeButtonLoading() {
  return (
    <NativeButton loading className="uppercase">
      Processing...
    </NativeButton>
  );
}

export function NativeButtonDisabled() {
  return (
    <NativeButton disabled className="uppercase">
      Disabled
    </NativeButton>
  );
}
