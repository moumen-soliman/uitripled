"use client"
import { NativeMarquee, SideFadeGradients } from "../native-marquee-shadcnui";
import { Cpu, GitBranch, Globe, Layers, Shield, Zap } from "lucide-react";

const ITEMS = [
  { id: "marquee-fast", icon: <Zap aria-hidden="true" />, label: "Fast" },
  {
    id: "marquee-secure",
    icon: <Shield aria-hidden="true" />,
    label: "Secure",
  },
  {
    id: "marquee-modular",
    icon: <Layers aria-hidden="true" />,
    label: "Modular",
  },
  { id: "marquee-global", icon: <Globe aria-hidden="true" />, label: "Global" },
  {
    id: "marquee-versioned",
    icon: <GitBranch aria-hidden="true" />,
    label: "Versioned",
  },
  {
    id: "marquee-performant",
    icon: <Cpu aria-hidden="true" />,
    label: "Performant",
  },
];

export function NativeMarqueeDemo() {
  return (
    <div className="flex overflow-hidden gap-2 relative flex-col">
      <SideFadeGradients />
      <NativeMarquee gap={8} pauseOnTouch={true} pauseOnHover={true} items={ITEMS} />
      <NativeMarquee gap={8} reverse={true} speed={5} items={ITEMS} />
    </div>
  );
}


export function NativeMarqueeVertical() {
  return (
    <div className="flex overflow-hidden gap-2 relative h-96">
      <SideFadeGradients isVertical={true} />
      <NativeMarquee gap={8} pauseOnTouch={true} pauseOnHover={true} items={ITEMS} isVertical={true}/>
      <NativeMarquee gap={8} reverse={true} speed={5} items={ITEMS} isVertical={true}/>
    </div>
  );
}
