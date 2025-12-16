"use client";

import { NativeButton } from "@/components/native/baseui/native-button-baseui";
import { NativeMagnetic } from "@/components/native/baseui/native-magnetic-baseui";

export function NativeMagneticDefault() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeMagnetic>
        <NativeButton>Magnetic Button</NativeButton>
      </NativeMagnetic>
    </div>
  );
}

export function NativeMagneticLink() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeMagnetic
        as="a"
        href="#"
        className="text-primary underline underline-offset-4 font-medium"
      >
        Magnetic Link
      </NativeMagnetic>
    </div>
  );
}

export function NativeMagneticStrong() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeMagnetic strength={0.6}>
        <div className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium">
          Strong Pull (0.6)
        </div>
      </NativeMagnetic>
    </div>
  );
}

export function NativeMagneticDemo() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="space-y-2 text-center">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Button
          </h3>
          <NativeMagneticDefault />
        </div>
        <div className="space-y-2 text-center">
          <h3 className="font-semibold text-muted-foreground text-sm">Link</h3>
          <NativeMagneticLink />
        </div>
        <div className="space-y-2 text-center">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Strong Pull
          </h3>
          <NativeMagneticStrong />
        </div>
      </div>
    </div>
  );
}
