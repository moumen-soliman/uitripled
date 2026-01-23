"use client";

import { NativeUserCard } from "../native-user-card-shadcnui";

export function NativeUserCardDemo() {
  return (
    <div className="flex w-full flex-col items-center gap-8 p-8">
      <div className="w-full max-w-[250px]">
         <NativeUserCard
          imageSrc="https://github.com/shadcn.png"
          name="shadcn"
          handle="@shadcn"
          href="#"
        />
      </div>
    </div>
  );
}
