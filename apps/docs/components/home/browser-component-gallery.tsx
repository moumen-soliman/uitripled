"use client";

import { useUILibrary } from "@/components/ui-library-provider";
import { cn } from "@/lib/utils";
import type { UILibrary } from "@/types";
import { NativeAvatarExpandDemo as NativeAvatarExpandBase } from "@uitripled/react-baseui/components/native/demo/native-avatar-expand-demo";
import { NativeAvatarWithNameDemo as NativeAvatarWithNameBase } from "@uitripled/react-baseui/components/native/demo/native-avatar-with-name-demo";
import { NativeDeleteDemo as NativeDeleteBase } from "@uitripled/react-baseui/components/native/demo/native-delete-demo";
import { NativeHoverCardDemo as NativeHoverCardBase } from "@uitripled/react-baseui/components/native/demo/native-hover-card-demo";
import { NativeLikesCounterDemo as NativeLikesCounterBase } from "@uitripled/react-baseui/components/native/demo/native-likes-counter-demo";
import { NativeLiquidButtonDemo as NativeLiquidButtonBase } from "@uitripled/react-baseui/components/native/demo/native-liquid-button-demo";
import { NativeMagneticDefault as NativeMagneticBase } from "@uitripled/react-baseui/components/native/demo/native-magnetic-demo";
import { NativeMorphingButtonDemo as NativeMorphingButtonBase } from "@uitripled/react-baseui/components/native/demo/native-morphing-button-demo";
import { NativeNestedListBaseUIDemo as NativeNestedListBase } from "@uitripled/react-baseui/components/native/demo/native-nested-list-demo";
import { NativeProfileNotchDefault as NativeProfileNotchBase } from "@uitripled/react-baseui/components/native/demo/native-profile-notch-demo";
import { NativeTabsDemo as NativeTabsBase } from "@uitripled/react-baseui/components/native/demo/native-tabs-demo";
import { NativeTooltipDemo as NativeTooltipBase } from "@uitripled/react-baseui/components/native/demo/native-tooltip-demo";
import { NativeTypewriterLoop as NativeTypewriterBase } from "@uitripled/react-baseui/components/native/demo/native-typewriter-demo";
import { NativeVerifiedBadgeDemo as NativeVerifiedBadgeBase } from "@uitripled/react-baseui/components/native/demo/native-verified-badge-demo";
import { SocialButtonsSlide as SocialLoginButtonBase } from "@uitripled/react-baseui/components/native/demo/social-login-demo";
import { NativeAvatarExpandDemo as NativeAvatarExpandShadcn } from "@uitripled/react-shadcn/components/native/demo/native-avatar-expand-demo";
import { NativeAvatarWithNameDemo as NativeAvatarWithNameShadcn } from "@uitripled/react-shadcn/components/native/demo/native-avatar-with-name-demo";
import { NativeDeleteDemo as NativeDeleteShadcn } from "@uitripled/react-shadcn/components/native/demo/native-delete-demo";
import { NativeHoverCardDemo as NativeHoverCardShadcn } from "@uitripled/react-shadcn/components/native/demo/native-hover-card-demo";
import { NativeLikesCounterDemo as NativeLikesCounterShadcn } from "@uitripled/react-shadcn/components/native/demo/native-likes-counter-demo";
import { NativeLiquidButtonDemo as NativeLiquidButtonShadcn } from "@uitripled/react-shadcn/components/native/demo/native-liquid-button-demo";
import { NativeMagneticDefault as NativeMagneticShadcn } from "@uitripled/react-shadcn/components/native/demo/native-magnetic-demo";
import { NativeMorphingButtonDemo as NativeMorphingButtonShadcn } from "@uitripled/react-shadcn/components/native/demo/native-morphing-button-demo";
import { NativeNestedListDemo as NativeNestedListShadcn } from "@uitripled/react-shadcn/components/native/demo/native-nested-list-demo";
import { NativeProfileNotchDefault as NativeProfileNotchShadcn } from "@uitripled/react-shadcn/components/native/demo/native-profile-notch-demo";
import { NativeTabsDemo as NativeTabsShadcn } from "@uitripled/react-shadcn/components/native/demo/native-tabs-demo";
import { NativeTooltipDemo as NativeTooltipShadcn } from "@uitripled/react-shadcn/components/native/demo/native-tooltip-demo";
import { NativeTypewriterLoop as NativeTypewriterShadcn } from "@uitripled/react-shadcn/components/native/demo/native-typewriter-demo";
import { NativeVerifiedBadgeDemo as NativeVerifiedBadgeShadcn } from "@uitripled/react-shadcn/components/native/demo/native-verified-badge-demo";
import { SocialButtonsSlide as SocialLoginButtonShadcn } from "@uitripled/react-shadcn/components/native/demo/social-login-demo";
import { DashboardPage as DashboardShadcn } from "@uitripled/react-shadcn/components/components/stocks-dashboard/dashboard";
import { DashboardPage as DashboardBase } from "@uitripled/react-baseui/components/components/stocks-dashboard/dashboard";
import { CardsSlider as CardsSliderShadcn } from "@uitripled/react-shadcn/components/components/sliders/cards-slider";
import { HeroBlock as HeroBlockShadcn } from "@uitripled/react-shadcn/components/sections/hero-block";
import { HeroBlockBaseui as HeroBlockBase } from "@uitripled/react-baseui/components/sections/hero-block-baseui";
import { CTABlock as CTABlockShadcn } from "@uitripled/react-shadcn/components/sections/cta-block";
import { CTABlockBaseui as CTABlockBase } from "@uitripled/react-baseui/components/sections/cta-block-baseui";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@uitripled/react-shadcn/ui/select";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import {
  BadgeCheck,
  CreditCard,
  Droplets,
  FolderTree,
  Heart,
  LayoutList,
  Lock,
  LogIn,
  Magnet,
  MessageCircle,
  RefreshCw,
  Smartphone,
  Trash2,
  Type,
  User,
  LayoutDashboard,
  GalleryHorizontal,
  LayoutTemplate,
  Megaphone,
} from "lucide-react";
import Image from "next/image";
import { useId, useRef, useState } from "react";

const components = [
  { name: "Hover Card", path: "native-hover-card", Icon: CreditCard, Shadcn: NativeHoverCardShadcn, Base: NativeHoverCardBase },
  { name: "Delete", path: "native-delete", Icon: Trash2, Shadcn: NativeDeleteShadcn, Base: NativeDeleteBase },
  { name: "Dashboard", path: "dashboard", Icon: LayoutDashboard, Shadcn: DashboardShadcn, Base: DashboardBase },
  { name: "Avatar Expand", path: "native-avatar-expand", Icon: User, Shadcn: NativeAvatarExpandShadcn, Base: NativeAvatarExpandBase },
  { name: "Magnetic Button", path: "native-magnetic-button", Icon: Magnet, Shadcn: NativeMagneticShadcn, Base: NativeMagneticBase },
  { name: "Avatar With Name", path: "native-avatar-with-name", Icon: User, Shadcn: NativeAvatarWithNameShadcn, Base: NativeAvatarWithNameBase },
  { name: "Profile Notch", path: "native-profile-notch", Icon: Smartphone, Shadcn: NativeProfileNotchShadcn, Base: NativeProfileNotchBase },
  { name: "Hero Block", path: "hero-block", Icon: LayoutTemplate, Shadcn: HeroBlockShadcn, Base: HeroBlockBase },
  { name: "Likes Counter", path: "native-likes-counter", Icon: Heart, Shadcn: NativeLikesCounterShadcn, Base: NativeLikesCounterBase },
  { name: "Social Login", path: "native-social-login", Icon: LogIn, Shadcn: SocialLoginButtonShadcn, Base: SocialLoginButtonBase },
  { name: "Typewriter", path: "native-typewriter", Icon: Type, Shadcn: NativeTypewriterShadcn, Base: NativeTypewriterBase },
  { name: "Nested List", path: "native-nested-list", Icon: FolderTree, Shadcn: NativeNestedListShadcn, Base: NativeNestedListBase },
  { name: "Liquid Button", path: "native-liquid-button", Icon: Droplets, Shadcn: NativeLiquidButtonShadcn, Base: NativeLiquidButtonBase },
  { name: "Verified Badge", path: "native-verified-badge", Icon: BadgeCheck, Shadcn: NativeVerifiedBadgeShadcn, Base: NativeVerifiedBadgeBase },
  { name: "Cards Slider", path: "cards-slider", Icon: GalleryHorizontal, Shadcn: CardsSliderShadcn },
  { name: "CTA Block", path: "cta-block", Icon: Megaphone, Shadcn: CTABlockShadcn, Base: CTABlockBase },
  { name: "Morphing Button", path: "native-morphing-button", Icon: RefreshCw, Shadcn: NativeMorphingButtonShadcn, Base: NativeMorphingButtonBase },
  { name: "Tabs", path: "native-tabs", Icon: LayoutList, Shadcn: NativeTabsShadcn, Base: NativeTabsBase },
  { name: "Tooltip", path: "native-tooltip", Icon: MessageCircle, Shadcn: NativeTooltipShadcn, Base: NativeTooltipBase },
];

const uiLibraries = [
  {
    id: "shadcnui",
    name: "shadcn/ui",
    logoLight: "/logos/shadcnui_dark.svg",
    logoDark: "/logos/shadcnui_white.svg",
  },
  {
    id: "baseui",
    name: "Base UI",
    logoLight: "/logos/baseui_white.svg",
    logoDark: "/logos/baseui_dark.svg",
  },
];

export function BrowserComponentGallery() {
  const { selectedLibrary, setSelectedLibrary } = useUILibrary();
  const [activeTab, setActiveTab] = useState(components[0].name);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const pillLayoutId = useId();

  const activeComponent = components.find((c) => c.name === activeTab);
  const Component = selectedLibrary === "baseui" ? activeComponent?.Base : activeComponent?.Shadcn;

  const handleTablistKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const keys = ["ArrowRight", "ArrowLeft", "Home", "End"];
    if (!keys.includes(e.key)) return;
    e.preventDefault();
    const currentIndex = components.findIndex((c) => c.name === activeTab);
    let nextIndex = currentIndex;
    if (e.key === "ArrowRight")
      nextIndex = (currentIndex + 1) % components.length;
    if (e.key === "ArrowLeft")
      nextIndex = (currentIndex - 1 + components.length) % components.length;
    if (e.key === "Home") nextIndex = 0;
    if (e.key === "End") nextIndex = components.length - 1;
    setActiveTab(components[nextIndex].name);
    scrollContainerRef.current
      ?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
      [nextIndex]?.focus();
  };

  return (
    <MotionConfig reducedMotion="user">
    <div className="w-full max-w-7xl mx-auto p-0 sm:p-4 md:p-8 z-10 relative">
      <div className="relative rounded-xl overflow-hidden border border-border bg-background shadow-2xl">
        <div className="bg-muted/30 border-b border-border flex flex-col pt-2">

          <div className="flex items-center pl-4 pr-3 gap-4 z-20 h-10">
            <div aria-hidden="true" className="hidden sm:flex gap-1.5 shrink-0">
              <div className="h-3 w-3 rounded-full bg-red-500/80 border border-black/5" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/80 border border-black/5" />
              <div className="h-3 w-3 rounded-full bg-green-500/80 border border-black/5" />
            </div>

            <div className="flex-1 flex items-center justify-center min-w-0 px-0">
                 <div className="h-8 flex items-center gap-0 bg-background/50 hover:bg-background/80 transition-colors border border-border/40 rounded-md px-3 py-1.5 text-xs text-muted-foreground w-full max-w-md shadow-sm min-w-0">
                    <div className="flex items-center gap-2 min-w-0">
                      <Lock className="w-3 h-3 text-muted-foreground/70 shrink-0" />
                      <span className="hidden sm:inline shrink-0">ui.tripled.work/components/<span className="text-foreground font-medium truncate">{activeComponent?.path}</span></span>
                      <span className="sm:hidden text-foreground font-medium truncate">{activeComponent?.path}</span>
                    </div>
                 </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
               {/* Library Switcher */}
                <Select
                  value={selectedLibrary}
                  onValueChange={(value) => setSelectedLibrary(value as UILibrary)}
                >
                  <SelectTrigger
                    className="h-8 w-auto min-w-[110px] gap-2 border-border/50 bg-background/50 hover:bg-background/80 text-xs shadow-none px-2 rounded-md"
                    aria-label="Select UI library"
                  >
                     {selectedLibrary && (
                        <div className="flex items-center gap-2">
                          <Image
                            src={uiLibraries.find((lib) => lib.id === selectedLibrary)?.logoLight || ""}
                            alt=""
                            width={14}
                            height={14}
                            className="block dark:hidden"
                          />
                          <Image
                            src={uiLibraries.find((lib) => lib.id === selectedLibrary)?.logoDark || ""}
                            alt=""
                            width={14}
                            height={14}
                            className="hidden dark:block"
                          />
                          <span className="font-medium truncate">
                            {uiLibraries.find((lib) => lib.id === selectedLibrary)?.name}
                          </span>
                        </div>
                      )}
                  </SelectTrigger>
                  <SelectContent align="end">
                    {uiLibraries.map((lib) => (
                      <SelectItem key={lib.id} value={lib.id} className="text-xs">
                         <div className="flex items-center gap-2">
                             <img src={lib.logoLight} alt="" className="w-4 h-4 block dark:hidden" />
                             <img src={lib.logoDark} alt="" className="w-4 h-4 hidden dark:block" />
                             {lib.name}
                         </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
            </div>
          </div>

           <div className="mt-2 sm:mt-3 px-2 pb-2 overflow-hidden">
                {/* Mobile Component Selector */}
                <div className="sm:hidden px-1 pb-1">
                   <Select value={activeTab} onValueChange={setActiveTab}>
                      <SelectTrigger className="h-9 w-full bg-background/50 hover:bg-background/80 border-border/40 text-xs shadow-none px-3">
                         <div className="flex items-center gap-2 overflow-hidden">
                            {activeComponent && <activeComponent.Icon className="w-3.5 h-3.5 text-muted-foreground shrink-0" />}
                            <span className="font-medium truncate">{activeTab}</span>
                         </div>
                      </SelectTrigger>
                      <SelectContent>
                        {components.map((item) => (
                           <SelectItem key={item.name} value={item.name} className="text-xs">
                              <div className="flex items-center gap-2">
                                 <item.Icon className="w-3.5 h-3.5 text-muted-foreground" />
                                 <span>{item.name}</span>
                              </div>
                           </SelectItem>
                        ))}
                      </SelectContent>
                   </Select>
                </div>

                <div
                    ref={scrollContainerRef}
                    className="hidden sm:flex overflow-x-auto scrollbar-hide gap-1 pb-1 relative items-center mask-fade-right px-2"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    role="tablist"
                    aria-label="Component demos"
                    onKeyDown={handleTablistKeyDown}
                >
                {components.map((item) => {
                    const isActive = activeTab === item.name;
                    return (
                    <button
                        key={item.name}
                        type="button"
                        onClick={() => setActiveTab(item.name)}
                        role="tab"
                        aria-selected={isActive}
                        aria-controls="component-demo-panel"
                        tabIndex={isActive ? 0 : -1}
                        className={cn(
                        "group relative flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 min-w-fit rounded-full text-xs font-medium transition-colors duration-200 z-0 border border-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1",
                        isActive
                            ? "text-primary-foreground"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        )}
                    >
                        {isActive && (
                            <motion.div
                                layoutId={pillLayoutId}
                                className="absolute inset-0 bg-primary rounded-full shadow-sm -z-10"
                                transition={{ type: "spring", duration: 0.45, bounce: 0.15 }}
                            />
                        )}

                        <item.Icon className={cn(
                            "w-3.5 h-3.5 transition-colors hidden sm:block",
                            isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-foreground"
                         )} aria-hidden="true" />

                        <span className="truncate whitespace-nowrap">{item.name}</span>
                    </button>
                    );
                })}
                </div>
           </div>
        </div>

        {/* Browser Content */}
        <div
          id="component-demo-panel"
          role="tabpanel"
          aria-label={`${activeComponent?.name} demo`}
          className="bg-background/95 backdrop-blur-3xl min-h-[400px] sm:min-h-[400px] md:min-h-[600px] flex items-center justify-center p-2 sm:p-8 md:p-16 relative"
        >
             <div className="absolute inset-0 bg-grid-small-black/[0.05] dark:bg-grid-small-white/[0.05] -z-10" />

             <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab + selectedLibrary}
                  initial={{ opacity: 0, scale: 0.98, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="w-full h-full flex items-center justify-center"
                >
                   {Component && <Component />}
                </motion.div>
             </AnimatePresence>
        </div>
      </div>
    </div>
    </MotionConfig>
  );
}
