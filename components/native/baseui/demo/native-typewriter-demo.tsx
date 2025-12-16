"use client";

import { NativeTypewriter } from "@/components/native/baseui/native-typewriter-baseui";

export function NativeTypewriterDefault() {
  return (
    <div className="flex items-center justify-center p-8 bg-black/5 dark:bg-white/5 rounded-xl border border-black/10 dark:border-white/10">
      <NativeTypewriter
        content="Hello, I am a native typewriter."
        className="text-xl font-medium text-foreground"
      />
    </div>
  );
}

export function NativeTypewriterMultiline() {
  return (
    <div className="flex items-center justify-center p-8 bg-black/5 dark:bg-white/5 rounded-xl border border-black/10 dark:border-white/10">
      <NativeTypewriter
        content={[
          "I can type multiple lines...",
          "One after another.",
          "Perfect for storytelling!",
        ]}
        speed="fast"
        className="text-xl font-medium text-primary"
      />
    </div>
  );
}

export function NativeTypewriterLoop() {
  return (
    <div className="flex items-center justify-center p-8 bg-black/5 dark:bg-white/5 rounded-xl border border-black/10 dark:border-white/10">
      <NativeTypewriter
        content={["Design.", "Develop.", "Ship.", "Repeat."]}
        loop
        speed={80}
        className="text-2xl font-bold text-primary"
        cursor={false}
      />
    </div>
  );
}

export function NativeTypewriterDemo() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="space-y-2">
        <h3 className="font-semibold text-muted-foreground">Default</h3>
        <NativeTypewriterDefault />
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold text-muted-foreground">Multiline</h3>
        <NativeTypewriterMultiline />
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold text-muted-foreground">
          Looping (Custom Style)
        </h3>
        <NativeTypewriterLoop />
      </div>
    </div>
  );
}
