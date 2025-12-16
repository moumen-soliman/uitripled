"use client";

import { SocialLoginButton } from "@/components/native/baseui/social-login-button-baseui";

export function SocialButtonsSlide() {
  return (
    <div className="flex flex-col gap-4">
      <SocialLoginButton provider="github" animation="slide" />
      <SocialLoginButton provider="google" animation="slide" />
    </div>
  );
}

export function SocialButtonsScale() {
  return (
    <div className="flex flex-col gap-4">
      <SocialLoginButton provider="x" animation="scale" />
      <SocialLoginButton provider="vercel" animation="scale" />
    </div>
  );
}

export function SocialButtonsGlow() {
  return (
    <div className="flex flex-col gap-4">
      {/* Use a dark background context wrapper if needed, but for demo just button */}
      <SocialLoginButton provider="linkedin" animation="glow" />
      <SocialLoginButton provider="github" animation="glow" />
    </div>
  );
}

export function SocialButtonsShine() {
  return (
    <div className="flex flex-col gap-4">
      <SocialLoginButton provider="google" animation="shine" />
      <SocialLoginButton provider="vercel" animation="shine" />
    </div>
  );
}
