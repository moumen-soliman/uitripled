"use client";

import { NativeButton } from "@uitripled/ui/components/native/base-ui/native-button-baseui";
import { NativeHoverCard } from "@uitripled/ui/components/native/base-ui/native-hover-card-baseui";
import { MessageCircle, UserPlus } from "lucide-react";

export function NativeHoverCardDefault() {
  return (
    <div className="flex items-center justify-center p-8 min-h-[300px]">
      <NativeHoverCard
        imageSrc="https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtoUjLg4dAryGEidskK72wBCQA6DNcZH4Xh5b8"
        imageAlt="Profile"
        name="John Doe"
        username="johndoe"
        description="Software engineer passionate about building beautiful user interfaces and creating delightful experiences."
        onButtonClick={() => console.log("View Profile clicked")}
      />
    </div>
  );
}

export function NativeHoverCardGlass() {
  return (
    <div className="flex items-center justify-center p-8 min-h-[300px]">
      <NativeHoverCard
        imageSrc="https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtoUjLg4dAryGEidskK72wBCQA6DNcZH4Xh5b8"
        imageAlt="Profile"
        name="Jane Smith"
        username="janesmith"
        description="Designer and developer focused on creating accessible and inclusive digital products."
        variant="glass"
        onButtonClick={() => console.log("View Profile clicked")}
      />
    </div>
  );
}

export function NativeHoverCardBordered() {
  return (
    <div className="flex items-center justify-center p-8 min-h-[300px]">
      <NativeHoverCard
        imageSrc="https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtoUjLg4dAryGEidskK72wBCQA6DNcZH4Xh5b8"
        imageAlt="Profile"
        name="Alex Johnson"
        username="alexjohnson"
        description="Full-stack developer with expertise in React, Node.js, and cloud infrastructure."
        variant="bordered"
        onButtonClick={() => console.log("View Profile clicked")}
      />
    </div>
  );
}

export function NativeHoverCardSmall() {
  return (
    <div className="flex items-center justify-center p-8 min-h-[300px]">
      <NativeHoverCard
        imageSrc="https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtoUjLg4dAryGEidskK72wBCQA6DNcZH4Xh5b8"
        imageAlt="Profile"
        name="Sarah Williams"
        username="sarahw"
        description="Product manager and UX enthusiast."
        size="sm"
        onButtonClick={() => console.log("View Profile clicked")}
      />
    </div>
  );
}

export function NativeHoverCardLarge() {
  return (
    <div className="flex items-center justify-center p-8 min-h-[300px]">
      <NativeHoverCard
        imageSrc="https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtoUjLg4dAryGEidskK72wBCQA6DNcZH4Xh5b8"
        imageAlt="Profile"
        name="Michael Chen"
        username="michaelchen"
        description="Engineering lead building scalable systems and mentoring the next generation of developers."
        size="lg"
        onButtonClick={() => console.log("View Profile clicked")}
      />
    </div>
  );
}

export function NativeHoverCardExtraLarge() {
  return (
    <div className="flex items-center justify-center p-8 min-h-[300px]">
      <NativeHoverCard
        imageSrc="https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtoUjLg4dAryGEidskK72wBCQA6DNcZH4Xh5b8"
        imageAlt="Profile"
        name="Emily Davis"
        username="emilydavis"
        description="Creative director and brand strategist with over 10 years of experience in digital marketing and brand development."
        size="xl"
        onButtonClick={() => console.log("View Profile clicked")}
      />
    </div>
  );
}

export function NativeHoverCardNoUsername() {
  return (
    <div className="flex items-center justify-center p-8 min-h-[300px]">
      <NativeHoverCard
        imageSrc="https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtoUjLg4dAryGEidskK72wBCQA6DNcZH4Xh5b8"
        imageAlt="Profile"
        name="David Brown"
        description="Entrepreneur and startup founder focused on building innovative solutions."
        onButtonClick={() => console.log("View Profile clicked")}
      />
    </div>
  );
}

export function NativeHoverCardNoDescription() {
  return (
    <div className="flex items-center justify-center p-8 min-h-[300px]">
      <NativeHoverCard
        imageSrc="https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtoUjLg4dAryGEidskK72wBCQA6DNcZH4Xh5b8"
        imageAlt="Profile"
        name="Lisa Anderson"
        username="lisaanderson"
        onButtonClick={() => console.log("View Profile clicked")}
      />
    </div>
  );
}

export function NativeHoverCardCustomButton() {
  return (
    <div className="flex items-center justify-center p-8 min-h-[300px]">
      <NativeHoverCard
        imageSrc="https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtoUjLg4dAryGEidskK72wBCQA6DNcZH4Xh5b8"
        imageAlt="Profile"
        name="Robert Taylor"
        username="roberttaylor"
        description="Community manager and content creator."
        buttonContent={
          <div className="flex gap-2 w-full">
            <NativeButton size="sm" variant="outline" className="flex-1">
              <MessageCircle className="h-4 w-4 mr-2" />
              Message
            </NativeButton>
            <NativeButton size="sm" className="flex-1">
              <UserPlus className="h-4 w-4 mr-2" />
              Follow
            </NativeButton>
          </div>
        }
      />
    </div>
  );
}

export function NativeHoverCardCustomButtonText() {
  return (
    <div className="flex items-center justify-center p-8 min-h-[300px]">
      <NativeHoverCard
        imageSrc="https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtoUjLg4dAryGEidskK72wBCQA6DNcZH4Xh5b8"
        imageAlt="Profile"
        name="Olivia Martinez"
        username="oliviamartinez"
        description="Data scientist and machine learning engineer."
        buttonText="Connect"
        onButtonClick={() => console.log("Connect clicked")}
      />
    </div>
  );
}

export function NativeHoverCardMinimal() {
  return (
    <div className="flex items-center justify-center p-8 min-h-[300px]">
      <NativeHoverCard
        imageSrc="https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtoUjLg4dAryGEidskK72wBCQA6DNcZH4Xh5b8"
        imageAlt="Profile"
        name="James Wilson"
        buttonContent={null}
      />
    </div>
  );
}

export function NativeHoverCardWithFallback() {
  return (
    <div className="flex items-center justify-center p-8 min-h-[300px]">
      <NativeHoverCard
        imageSrc="https://invalid-url-that-will-fail.png"
        imageAlt="Profile"
        name="Thomas Anderson"
        username="thomasa"
        description="This demonstrates the Avatar fallback with initials when the image fails to load."
        onButtonClick={() => console.log("View Profile clicked")}
      />
    </div>
  );
}

export function NativeHoverCardDemo() {
  return <NativeHoverCardDefault />;
}
