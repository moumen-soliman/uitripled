"use client";

import {
  VerifiedBadge,
  VerifiedBadgeOutline,
  VerifiedShieldBadge,
} from "../native-verified-badge-shadcnui";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "h-[400px] w-full flex items-center justify-center   rounded-xl relative transition-colors border border-border/50",
        className
      )}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function NativeVerifiedBadgeDefault() {
  return (
    <Container>
      <div className="flex flex-col items-center gap-8">
        <VerifiedBadge variant="black" size="xxl" />
      </div>
    </Container>
  );
}

export function NativeVerifiedBadgeWithLabel() {
  return (
    <Container>
      <div className="flex flex-col items-center gap-8">
        <VerifiedBadge showLabel label="Verified" />
        <VerifiedBadge variant="blue" showLabel label="Premium" />
        <VerifiedBadge variant="gold" showLabel label="Pro" />
        <VerifiedBadge variant="green" showLabel label="Certified" />
      </div>
    </Container>
  );
}

export function NativeVerifiedBadgeSizes() {
  return (
    <Container>
      <div className="flex flex-col gap-8 items-center">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
            Small
          </span>
          <VerifiedBadge size="sm" showLabel label="Verified" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
            Medium
          </span>
          <VerifiedBadge size="md" showLabel label="Verified" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
            Large
          </span>
          <VerifiedBadge size="lg" showLabel label="Verified" />
        </div>
      </div>
    </Container>
  );
}

export function NativeVerifiedBadgeOutlineVariants() {
  return (
    <Container>
      <div className="flex flex-col items-center gap-8">
        <VerifiedBadgeOutline size="xl" />
        <VerifiedBadgeOutline variant="blue" size="xl" />
        <VerifiedBadgeOutline variant="gold" size="xl" />
        <VerifiedBadgeOutline variant="green" size="xl" />
      </div>
    </Container>
  );
}

export function NativeVerifiedBadgeShield() {
  return (
    <Container>
      <div className="flex flex-col items-center gap-8">
        <VerifiedShieldBadge variant="gold" size="xl" />
      </div>
    </Container>
  );
}

export function NativeVerifiedBadgeWithTooltip() {
  return (
    <Container>
      <div className="flex flex-col items-center gap-8">
        <VerifiedBadge
          tooltip="This account is verified"
          showLabel
          variant="blue"
          label="Verified"
        />
        <VerifiedBadgeOutline
          variant="blue"
          tooltip="Premium member"
          size="lg"
        />
        <VerifiedShieldBadge
          variant="gold"
          tooltip="Pro account with enhanced features"
          size="lg"
        />
      </div>
    </Container>
  );
}

export function NativeVerifiedBadgeCustomIcon() {
  return (
    <Container>
      <div className="flex flex-col items-center gap-8">
        <VerifiedBadge
          icon={<Star className="h-3 w-3" />}
          variant="gold"
          showLabel
          label="Featured"
        />
        <VerifiedBadgeOutline
          icon={<Star className="h-2.5 w-2.5" />}
          variant="blue"
          size="lg"
        />
        <VerifiedShieldBadge
          icon={<Star className="h-3 w-3" />}
          variant="gold"
          size="lg"
        />
      </div>
    </Container>
  );
}

export function NativeVerifiedBadgeDemo() {
  return <NativeVerifiedBadgeDefault />;
}
