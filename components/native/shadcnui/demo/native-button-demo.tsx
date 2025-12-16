"use client";

import { NativeButton } from "@/components/native/shadcnui/native-button-shadcnui";

export function NativeButtonDefault() {
  return <NativeButton>Get Started</NativeButton>;
}

export function NativeButtonGlow() {
  return <NativeButton glow>Glow Effect</NativeButton>;
}

export function NativeButtonOutline() {
  return <NativeButton variant="outline">Learn More</NativeButton>;
}

export function NativeButtonLoading() {
  return <NativeButton loading>Processing...</NativeButton>;
}

export function NativeButtonDisabled() {
  return <NativeButton disabled>Disabled</NativeButton>;
}
