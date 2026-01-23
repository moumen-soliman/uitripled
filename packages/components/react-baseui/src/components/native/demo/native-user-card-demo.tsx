"use client";

import { NativeUserCard } from "../native-user-card-baseui";

export function NativeUserCardDemo() {
  return (
    <div className="flex w-full flex-col items-center gap-8 p-8">
      <div className="w-full max-w-[250px]">
         <NativeUserCard
          imageSrc="https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtoUjLg4dAryGEidskK72wBCQA6DNcZH4Xh5b8"
          name="Base UI"
          handle="@baseui"
          href="#"
        />
      </div>
    </div>
  );
}
