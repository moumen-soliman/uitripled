import { Component } from "@/types";

// Import all animation components

// NEW: 20 Additional Components
import { BottomModal } from "@/components/modals/bottom-modal";

// UI-TripleD Components

import {
  NativeBadgeAnimated,
  NativeBadgeDefault,
  NativeBadgeGlass,
  NativeBadgeGlow,
  NativeBadgeNeutral,
  NativeBadgeOutline,
} from "@/components/native/carbon/demo/native-badge-demo";
import {
  NativeCounterUpCurrency,
  NativeCounterUpDefault,
  NativeCounterUpPercentage,
} from "@/components/native/carbon/demo/native-counter-up-demo";
import {
  NativeFollowCursorAreaCustom,
  NativeFollowCursorAreaDefault,
  NativeFollowCursorAreaWithDot,
  NativeFollowCursorChildren,
  NativeFollowCursorCustomOffset,
  NativeFollowCursorDefault,
  NativeFollowCursorGlass,
  NativeFollowCursorLarge,
  NativeFollowCursorMinimal,
  NativeFollowCursorNoDot,
  NativeFollowCursorSmall,
  NativeFollowCursorSmooth,
  NativeFollowCursorSolid,
} from "@/components/native/carbon/demo/native-follow-cursor-demo";
import { NativeBadge } from "@/components/native/carbon/native-badge-carbon";
import { NativeCounterUp } from "@/components/native/carbon/native-counter-up-carbon";
import { NativeFlipText } from "@/components/native/carbon/native-flip-text-carbon";
import { NativeFollowCursor } from "@/components/native/carbon/native-follow-cursor-carbon";
import { NativeMagnetic } from "@/components/native/carbon/native-magnetic-carbon";
import { NativeTypewriter } from "@/components/native/carbon/native-typewriter-carbon";
import {
  NativeAvatarExpandDefault,
  NativeAvatarExpandExtraLarge,
  NativeAvatarExpandLarge,
  NativeAvatarExpandNoImage,
  NativeAvatarExpandSmall,
} from "@/components/native/shadcnui/demo/native-avatar-expand-demo";
import {
  NativeAvatarWithNameDefault,
  NativeAvatarWithNameLarge,
  NativeAvatarWithNameLeft,
  NativeAvatarWithNameNoImage,
  NativeAvatarWithNameRight,
  NativeAvatarWithNameSmall,
  NativeAvatarWithNameTop,
} from "@/components/native/shadcnui/demo/native-avatar-with-name-demo";
import {
  NativeButtonDefault,
  NativeButtonDisabled,
  NativeButtonGlow,
  NativeButtonLoading,
  NativeButtonOutline,
} from "@/components/native/shadcnui/demo/native-button-demo";
import {
  NativeDeleteCustomText,
  NativeDeleteDefault,
  NativeDeleteDisabled,
  NativeDeleteLarge,
  NativeDeleteNoIcon,
  NativeDeleteSmall,
} from "@/components/native/shadcnui/demo/native-delete-demo";
import { NativeDialogDemo } from "@/components/native/shadcnui/demo/native-dialog-demo";
import {
  NativeFlipTextColored,
  NativeFlipTextDefault,
} from "@/components/native/shadcnui/demo/native-flip-text-demo";
import {
  NativeHoverCardBordered,
  NativeHoverCardCustomButton,
  NativeHoverCardCustomButtonText,
  NativeHoverCardDefault,
  NativeHoverCardExtraLarge,
  NativeHoverCardGlass,
  NativeHoverCardLarge,
  NativeHoverCardMinimal,
  NativeHoverCardNoDescription,
  NativeHoverCardNoUsername,
  NativeHoverCardSmall,
  NativeHoverCardWithFallback,
} from "@/components/native/shadcnui/demo/native-hover-card-demo";
import {
  NativeImageCheckboxDefault,
  NativeImageCheckboxExtraLarge,
  NativeImageCheckboxGrid,
  NativeImageCheckboxLarge,
  NativeImageCheckboxSelected,
  NativeImageCheckboxSmall,
} from "@/components/native/shadcnui/demo/native-image-checkbox-demo";
import {
  NativeLiquidButtonDefault,
  NativeLiquidButtonError,
  NativeLiquidButtonGlow,
  NativeLiquidButtonGradient,
  NativeLiquidButtonLoading,
  NativeLiquidButtonSuccess,
  NativeLiquidButtonWave,
  NativeLiquidButtonWithProgress,
} from "@/components/native/shadcnui/demo/native-liquid-button-demo";
import {
  NativeMagneticDefault,
  NativeMagneticLink,
  NativeMagneticStrong,
} from "@/components/native/shadcnui/demo/native-magnetic-demo";
import {
  NativeMorphingButtonCustomIcon,
  NativeMorphingButtonDefault,
} from "@/components/native/shadcnui/demo/native-morphing-button-demo";
import {
  NativeNotificationBellCustomIcon,
  NativeNotificationBellDefault,
  NativeNotificationBellEmpty,
} from "@/components/native/shadcnui/demo/native-notification-bell-demo";
import {
  NativeStartNowCustomLabels,
  NativeStartNowDefault,
  NativeStartNowDisabled,
  NativeStartNowGradient,
  NativeStartNowLarge,
  NativeStartNowNoSparkles,
  NativeStartNowOutline,
  NativeStartNowSmall,
  NativeStartNowSolid,
} from "@/components/native/shadcnui/demo/native-start-now-demo";
import { NativeTabsDemo } from "@/components/native/shadcnui/demo/native-tabs-demo";
import {
  NativeTooltipBlur,
  NativeTooltipScale,
} from "@/components/native/shadcnui/demo/native-tooltip-demo";
import {
  NativeTypewriterDefault,
  NativeTypewriterLoop,
  NativeTypewriterMultiline,
} from "@/components/native/shadcnui/demo/native-typewriter-demo";
import {
  SocialButtonsGlow,
  SocialButtonsScale,
  SocialButtonsShine,
  SocialButtonsSlide,
} from "@/components/native/shadcnui/demo/social-login-demo";
import { NativeAvatarExpand } from "@/components/native/shadcnui/native-avatar-expand-shadcnui";
import { NativeAvatarWithName } from "@/components/native/shadcnui/native-avatar-with-name-shadcnui";
import { NativeButton } from "@/components/native/shadcnui/native-button-shadcnui";
import { NativeDelete } from "@/components/native/shadcnui/native-delete-shadcnui";
import { NativeDialog } from "@/components/native/shadcnui/native-dialog-shadcnui";
import { NativeHoverCard } from "@/components/native/shadcnui/native-hover-card-shadcnui";
import { NativeImageCheckbox } from "@/components/native/shadcnui/native-image-checkbox-shadcnui";
import { NativeLiquidButton } from "@/components/native/shadcnui/native-liquid-button-shadcnui";
import { NativeMorphingButton } from "@/components/native/shadcnui/native-morphing-button-shadcnui";
import { NativeNotificationBell } from "@/components/native/shadcnui/native-notification-bell-shadcnui";
import { NativeStartNow } from "@/components/native/shadcnui/native-start-now-shadcnui";
import { NativeTabs } from "@/components/native/shadcnui/native-tabs-shadcnui";
import { NativeTooltip } from "@/components/native/shadcnui/native-tooltip-shadcnui";
import { SocialLoginButton } from "@/components/native/shadcnui/social-login-button-shadcnui";

export const nativeComponents: Component[] = [
  {
    id: "native-tooltip",
    name: "Native Tooltip",
    description:
      "A glassmorphism-styled tooltip with smooth spring animations using Framer Motion.",
    category: "native",
    tags: ["tooltip", "native", "glassmorphism", "overlay", "radix", "popup"],
    component: NativeTooltip,
    variants: [
      {
        id: "blur",
        name: "Blur Animation",
        description: "Subtle blur and fade animation (Default)",
        component: NativeTooltipBlur,
        code: `<NativeTooltipProvider>
  <NativeTooltip content="This is a smooth tooltip">
    <NativeButton variant="outline">Default (Blur)</NativeButton>
  </NativeTooltip>
</NativeTooltipProvider>`,
      },
      {
        id: "scale",
        name: "Scale Animation",
        description: "Playful pop and scale animation",
        component: NativeTooltipScale,
        code: `<NativeTooltipProvider>
  <NativeTooltip content="This pops!" animation="scale">
    <NativeButton variant="outline">Scale Animation</NativeButton>
  </NativeTooltip>
</NativeTooltipProvider>`,
      },
    ],
    codePath: "@/components/native/shadcnui/native-tooltip-shadcnui.tsx",
    duration: "200ms",
    easing: "spring",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "native-dialog",
    name: "Native Dialog",
    description:
      "A glassmorphism-styled dialog component with backdrop blur and smooth animations, inspired by native OS modals.",
    category: "native",
    tags: ["dialog", "modal", "native", "glassmorphism", "overlay", "radix"],
    component: NativeDialog, // Use the demo as the main preview component
    variants: [
      {
        id: "default",
        name: "Default",
        description: "Standard usage of Native Dialog",
        component: NativeDialogDemo,
        code: `<NativeDialog>
  <NativeDialogTrigger asChild>
    <NativeButton>Open Dialog</NativeButton>
  </NativeDialogTrigger>
  <NativeDialogContent className="sm:max-w-[425px]">
    <NativeDialogHeader>
      <NativeDialogTitle>Edit Profile</NativeDialogTitle>
      <NativeDialogDescription>
        Make changes to your profile here. Click save when you're done.
      </NativeDialogDescription>
    </NativeDialogHeader>
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <span className="text-right text-sm font-medium">Name</span>
        <input className="..." defaultValue="Pedro Duarte" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <span className="text-right text-sm font-medium">Username</span>
        <input className="..." defaultValue="@peduarte" />
      </div>
    </div>
    <NativeDialogFooter>
      <NativeButton glow>Save changes</NativeButton>
    </NativeDialogFooter>
  </NativeDialogContent>
</NativeDialog>`,
      },
    ],
    codePath: "@/components/native/shadcnui/native-dialog-shadcnui.tsx",
    duration: "200ms",
    easing: "ease-out",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "social-login-button",
    name: "Social Login Button",
    description:
      "A set of animated social login buttons for major platforms (Github, Google, X, etc.) with various effects.",
    category: "native",
    tags: ["button", "social", "login", "auth", "oauth", "animation"],
    component: SocialLoginButton,
    variants: [
      {
        id: "slide",
        name: "Slide Animation",
        description: "Icon slides in on hover",
        component: SocialButtonsSlide,
        code: `<SocialLoginButton provider="github" animation="slide" />`,
      },
      {
        id: "scale",
        name: "Scale Animation",
        description: "Button scales up on hover",
        component: SocialButtonsScale,
        code: `<SocialLoginButton provider="x" animation="scale" />`,
      },
      {
        id: "glow",
        name: "Glow Animation",
        description: "Outer glow effect on hover",
        component: SocialButtonsGlow,
        code: `<SocialLoginButton provider="linkedin" animation="glow" />`,
      },
      {
        id: "shine",
        name: "Shine Animation",
        description: "Shine effect swipes across on hover",
        component: SocialButtonsShine,
        code: `<SocialLoginButton provider="google" animation="shine" />`,
      },
    ],
    codePath: "@/components/native/shadcnui/social-login-button-shadcnui.tsx",
    duration: "200ms",
    easing: "ease-out",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "native-button",
    name: "Native Button",
    description:
      "Glassmorphism-inspired button component based on shadcn/ui with smooth animations and modern styling",
    category: "native",
    tags: [
      "button",
      "native",
      "glassmorphism",
      "ui",
      "interactive",
      "animation",
    ],
    component: NativeButton,
    variants: [
      {
        id: "default",
        name: "Default Button",
        description:
          "Primary action button with solid background and prominent styling",
        component: NativeButtonDefault,
        code: `<NativeButton>
  Get Started <ChevronRight className="w-4 h-4 ml-1" />
</NativeButton>`,
      },
      {
        id: "glow",
        name: "Glow Button",
        description: "Button with an outer glow effect for emphasis",
        component: NativeButtonGlow,
        code: `<NativeButton glow>Glow Effect</NativeButton>`,
      },
      {
        id: "outline",
        name: "Outline Button",
        description:
          "Secondary action button with transparent background and border",
        component: NativeButtonOutline,
        code: `<NativeButton variant="outline">Learn More</NativeButton>`,
      },
      {
        id: "loading",
        name: "Loading State",
        description: "Button with loading spinner for async operations",
        component: NativeButtonLoading,
        code: `<NativeButton loading>Loading</NativeButton>`,
      },
      {
        id: "disabled",
        name: "Disabled State",
        description: "Button in disabled state preventing user interaction",
        component: NativeButtonDisabled,
        code: `<NativeButton disabled>Disabled</NativeButton>`,
      },
    ],
    codePath: "@/components/native/shadcnui/native-button-shadcnui.tsx",
    duration: "200ms",
    easing: "spring",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "native-tabs",
    name: "Native Tabs",
    description:
      "A sleek tabs component with a smooth sliding background indicator using Framer Motion layout animations.",
    category: "native",
    tags: ["tabs", "navigation", "native", "framer-motion", "slide", "pill"],
    component: NativeTabs,
    codePath: "@/components/native/shadcnui/native-tabs-shadcnui.tsx",
    variants: [
      {
        id: "default",
        name: "Default",
        description: "Standard usage of Native Tabs",
        component: NativeTabsDemo,
        code: `<NativeTabs
  items={[
    {
      id: "account",
      label: "Account",
      content: (
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Account Settings</h3>
          <p className="text-muted-foreground">Manage your account credentials and preferences here.</p>
        </div>
      ),
    },
    {
      id: "notifications",
      label: "Notifications",
      content: (
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Notification Preferences</h3>
          <p className="text-muted-foreground">Choose what updates you want to receive via email or push.</p>
        </div>
      ),
    },
    {
      id: "billing",
      label: "Billing",
      content: (
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Billing Information</h3>
          <p className="text-muted-foreground">View your invoices and manage payment methods.</p>
        </div>
      ),
    },
  ]}
/>`,
      },
    ],
    duration: "400ms",
    easing: "spring",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "native-typewriter",
    name: "Native Typewriter",
    description:
      "Typewriter effect with speed control, looping, and blinking cursor.",
    category: "native",
    tags: ["text", "typewriter", "reveal", "native", "animation"],
    component: NativeTypewriter,
    variants: [
      {
        id: "default",
        name: "Default",
        description: "Standard typing effect",
        component: NativeTypewriterDefault,
        code: `<NativeTypewriter content="Hello, I am a native typewriter." />`,
      },
      {
        id: "multiline",
        name: "Multiline",
        description: "Typing multiple lines in sequence",
        component: NativeTypewriterMultiline,
        code: `<NativeTypewriter
  content={[
    "I can type multiple lines...",
    "One after another.",
    "Perfect for storytelling!",
  ]}
  speed="fast"
/>`,
      },
      {
        id: "loop",
        name: "Looping",
        description: "Continuous typing loop",
        component: NativeTypewriterLoop,
        code: `<NativeTypewriter
  content={["Design.", "Develop.", "Ship.", "Repeat."]}
  loop
  speed={80}
  cursor={false}
/>`,
      },
    ],
    codePath: "@/components/native/carbon/native-typewriter-carbon.tsx",
    duration: "variable",
    easing: "linear",
    display: true,
    availableIn: ["shadcnui", "carbon", "baseui"],
  },
  {
    id: "native-flip-text",
    name: "Native Flip Text",
    description: "Text that flips through words with a 3D blur transition.",
    category: "native",
    tags: ["text", "flip", "blur", "morph", "animation", "native"],
    component: NativeFlipText,
    variants: [
      {
        id: "default",
        name: "Default",
        description: "Standard flip text usage",
        component: NativeFlipTextDefault,
        code: `<NativeFlipText
  words={["Design", "Develop", "Ship", "Deploy"]}
  className="text-2xl font-bold"
/>`,
      },
      {
        id: "colored",
        name: "Colored Inline",
        description: "Inline usage with custom colors",
        component: NativeFlipTextColored,
        code: `<div className="text-xl font-medium text-muted-foreground flex items-center gap-2">
  <span>We build</span>
  <NativeFlipText
    words={["beautiful", "modern", "fast", "accessible"]}
    className="text-primary font-bold"
    duration={1500}
  />
  <span>user interfaces.</span>
</div>`,
      },
    ],
    codePath: "@/components/native/carbon/native-flip-text-carbon.tsx", // Main component source
    duration: "2000ms",
    easing: "spring",
    display: true,
    availableIn: ["shadcnui", "carbon", "baseui"],
  },
  {
    id: "native-badge",
    name: "Native Badge",
    description:
      "Animated badge component with glass, glow, and outline variants for native feel.",
    category: "native",
    tags: ["badge", "tag", "label", "status", "native", "glassmorphism"],
    component: NativeBadge,
    variants: [
      {
        id: "default",
        name: "Default",
        description: "Primary brand badge",
        component: NativeBadgeDefault,
        code: `<NativeBadge>New Feature</NativeBadge>`,
      },
      {
        id: "neutral",
        name: "Neutral",
        description: "Secondary subtle badge",
        component: NativeBadgeNeutral,
        code: `<NativeBadge variant="neutral">Coming Soon</NativeBadge>`,
      },
      {
        id: "outline",
        name: "Outline",
        description: "Outline variant",
        component: NativeBadgeOutline,
        code: `<NativeBadge variant="outline">Experimental</NativeBadge>`,
      },
      {
        id: "glass",
        name: "Glass",
        description: "Glassmorphism style badge",
        component: NativeBadgeGlass,
        code: `<div className="relative overflow-hidden bg-black p-4 rounded-lg">
  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent" />
  <NativeBadge variant="glass" className="relative">Glassmorphism</NativeBadge>
</div>`,
      },
      {
        id: "glow",
        name: "Glow",
        description: "Glowing accent badge",
        component: NativeBadgeGlow,
        code: `<NativeBadge variant="glow">
  <Sparkles className="w-3 h-3 mr-1" />
  AI Powered
</NativeBadge>`,
      },
      {
        id: "animated",
        name: "Animated",
        description: "Badge with rotating icon and hover effect",
        component: NativeBadgeAnimated,
        code: `<NativeBadge variant="animated">Feature</NativeBadge>

// With custom tag:
<NativeBadge variant="animated" tag="beta">Coming Soon</NativeBadge>

// With custom icon:
<NativeBadge variant="animated" icon={<Zap className="h-3 w-3 text-primary" />}>Fast</NativeBadge>`,
      },
    ],
    codePath: "@/components/native/carbon/native-badge-carbon.tsx",
    duration: "200ms",
    easing: "spring",
    display: true,
    availableIn: ["carbon"],
  },
  {
    id: "native-counter-up",
    name: "Native Counter Up",
    description:
      "Animated number counter with smooth easing and accessibility support.",
    category: "native",
    tags: ["counter", "number", "animation", "stats", "native"],
    component: NativeCounterUp,
    variants: [
      {
        id: "default",
        name: "Default",
        description: "Simple counter",
        component: NativeCounterUpDefault,
        code: `<NativeCounterUp value={1000} className="text-4xl" />`,
      },
      {
        id: "currency",
        name: "Currency",
        description: "Counter with prefix and decimals",
        component: NativeCounterUpCurrency,
        code: `<NativeCounterUp value={9999.99} prefix="$" decimals={2} />`,
      },
      {
        id: "percentage",
        name: "Percentage",
        description: "Counter with suffix",
        component: NativeCounterUpPercentage,
        code: `<NativeCounterUp value={87} suffix="%" duration={1.5} />`,
      },
    ],
    codePath: "@/components/native/carbon/native-counter-up-carbon.tsx",
    duration: "2000ms",
    easing: "expo-out",
    display: true,
    availableIn: ["carbon"],
  },
  {
    id: "native-magnetic",
    name: "Native Magnetic",
    description:
      "Magnetic wrapper that applies a cursor-following effect to any content.",
    category: "native",
    tags: ["magnetic", "cursor", "interactive", "button", "link", "native"],
    component: NativeMagnetic,
    variants: [
      {
        id: "default",
        name: "Button",
        description: "Magnetic effect on a button",
        component: NativeMagneticDefault,
        code: `<NativeMagnetic>
  <Button>Magnetic Button</Button>
</NativeMagnetic>`,
      },
      {
        id: "link",
        name: "Link",
        description: "Magnetic effect on a link",
        component: NativeMagneticLink,
        code: `<NativeMagnetic as="a" href="/about">
  About Us
</NativeMagnetic>`,
      },
      {
        id: "strong",
        name: "Strong Pull",
        description: "Increased magnetic strength",
        component: NativeMagneticStrong,
        code: `<NativeMagnetic strength={0.6}>
  <div className="px-6 py-3 bg-primary text-primary-foreground rounded-lg">
    Strong Pull
  </div>
</NativeMagnetic>`,
      },
    ],
    codePath: "@/components/native/carbon/native-magnetic-carbon.tsx",
    duration: "spring",
    easing: "spring",
    display: true,
    availableIn: ["shadcnui", "carbon", "baseui"],
  },
  {
    id: "native-notification-bell",
    name: "Native Notification Bell",
    description: "Animated notification bell with badge and ringing effect.",
    category: "native",
    tags: ["notification", "bell", "badge", "animation", "native"],
    component: NativeNotificationBell,
    variants: [
      {
        id: "default",
        name: "With Count",
        description: "Bell with notification count",
        component: NativeNotificationBellDefault,
        code: `<NativeNotificationBell count={3} />`,
      },
      {
        id: "empty",
        name: "Empty",
        description: "Bell without notifications",
        component: NativeNotificationBellEmpty,
        code: `<NativeNotificationBell count={0} />`,
      },
      {
        id: "custom-icon",
        name: "Custom Icon",
        description: "Bell with custom icon",
        component: NativeNotificationBellCustomIcon,
        code: `<NativeNotificationBell count={5} icon={<MessageSquare className="h-5 w-5" />} />`,
      },
    ],
    codePath:
      "@/components/native/shadcnui/native-notification-bell-shadcnui.tsx",
    duration: "600ms",
    easing: "easeInOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "native-morphing-button",
    name: "Native Morphing Button",
    description: "Floating action button that morphs into a menu of actions.",
    category: "native",
    tags: ["fab", "morphing", "menu", "actions", "native"],
    component: NativeMorphingButton,
    variants: [
      {
        id: "default",
        name: "Default",
        description: "FAB with action menu",
        component: NativeMorphingButtonDefault,
        code: `<NativeMorphingButton
  actions={[
    { label: "New Task", icon: <Plus className="h-4 w-4" />, onClick: () => {} },
    { label: "New Project", icon: <FolderPlus className="h-4 w-4" />, onClick: () => {} },
  ]}
/>`,
      },
      {
        id: "custom-icon",
        name: "Custom Icon",
        description: "FAB with custom icon",
        component: NativeMorphingButtonCustomIcon,
        code: `<NativeMorphingButton
  icon={<FileText className="h-5 w-5" />}
  actions={[...]}
/>`,
      },
    ],
    codePath:
      "@/components/native/shadcnui/native-morphing-button-shadcnui.tsx",
    duration: "300ms",
    easing: "spring",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "native-liquid-button",
    name: "Native Liquid Button",
    description:
      "Button with animated liquid fill effect, progress tracking, and multiple visual variants for engaging interactions.",
    category: "native",
    tags: [
      "button",
      "liquid",
      "progress",
      "animation",
      "loading",
      "native",
      "interactive",
    ],
    component: NativeLiquidButton,
    variants: [
      {
        id: "default",
        name: "Default",
        description: "Standard liquid button with bubble effects",
        component: NativeLiquidButtonDefault,
        code: `<NativeLiquidButton autoSimulate>
  Submit
</NativeLiquidButton>`,
      },
      {
        id: "gradient",
        name: "Gradient",
        description: "Liquid button with gradient fill and shimmer effect",
        component: NativeLiquidButtonGradient,
        code: `<NativeLiquidButton liquidVariant="gradient" autoSimulate>
  Download
</NativeLiquidButton>`,
      },
      {
        id: "glow",
        name: "Glow",
        description: "Liquid button with glowing effect",
        component: NativeLiquidButtonGlow,
        code: `<NativeLiquidButton liquidVariant="glow" autoSimulate>
  Complete
</NativeLiquidButton>`,
      },
      {
        id: "wave",
        name: "Wave",
        description: "Liquid button with animated wave pattern",
        component: NativeLiquidButtonWave,
        code: `<NativeLiquidButton liquidVariant="wave" autoSimulate>
  Process
</NativeLiquidButton>`,
      },
      {
        id: "with-progress",
        name: "With Progress",
        description:
          "Button with manual progress tracking and percentage display",
        component: NativeLiquidButtonWithProgress,
        code: `<NativeLiquidButton
  progress={progress}
  onClick={handleClick}
  showPercentage
>
  Upload File
</NativeLiquidButton>`,
      },
      {
        id: "loading",
        name: "Loading State",
        description: "Button in loading state with spinner",
        component: NativeLiquidButtonLoading,
        code: `<NativeLiquidButton loading progress={50}>
  Processing...
</NativeLiquidButton>`,
      },
      {
        id: "success",
        name: "Success State",
        description: "Button showing success state with checkmark",
        component: NativeLiquidButtonSuccess,
        code: `<NativeLiquidButton success progress={100}>
  Success!
</NativeLiquidButton>`,
      },
      {
        id: "error",
        name: "Error State",
        description: "Button showing error state with X icon",
        component: NativeLiquidButtonError,
        code: `<NativeLiquidButton error progress={100}>
  Failed
</NativeLiquidButton>`,
      },
    ],
    codePath: "@/components/native/shadcnui/native-liquid-button-shadcnui.tsx",
    duration: "300ms",
    easing: "spring",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "native-avatar-expand",
    name: "Native Avatar Expand",
    description:
      "Avatar component that expands to reveal the name on click with smooth animations.",
    category: "native",
    tags: ["avatar", "expand", "name", "click", "animation", "native"],
    component: NativeAvatarExpand,
    variants: [
      {
        id: "default",
        name: "Default",
        description: "Standard avatar with expand animation",
        component: NativeAvatarExpandDefault,
        code: `<NativeAvatarExpand
  src="https://github.com/shadcn.png"
  name="John Doe"
/>`,
      },
      {
        id: "small",
        name: "Small",
        description: "Small size variant",
        component: NativeAvatarExpandSmall,
        code: `<NativeAvatarExpand
  src="https://github.com/shadcn.png"
  name="Jane Smith"
  size="sm"
/>`,
      },
      {
        id: "large",
        name: "Large",
        description: "Large size variant",
        component: NativeAvatarExpandLarge,
        code: `<NativeAvatarExpand
  src="https://github.com/shadcn.png"
  name="Alex Johnson"
  size="lg"
/>`,
      },
      {
        id: "extra-large",
        name: "Extra Large",
        description: "Extra large size variant",
        component: NativeAvatarExpandExtraLarge,
        code: `<NativeAvatarExpand
  src="https://github.com/shadcn.png"
  name="Sarah Williams"
  size="xl"
/>`,
      },
      {
        id: "no-image",
        name: "No Image",
        description: "Avatar with initials fallback",
        component: NativeAvatarExpandNoImage,
        code: `<NativeAvatarExpand name="No Image User" />`,
      },
    ],
    codePath: "@/components/native/shadcnui/native-avatar-expand-shadcnui.tsx",
    duration: "400ms",
    easing: "spring",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "native-avatar-with-name",
    name: "Native Avatar With Name",
    description:
      "Avatar component that displays a name tooltip on hover with directional animations.",
    category: "native",
    tags: ["avatar", "tooltip", "hover", "name", "animation", "native"],
    component: NativeAvatarWithName,
    variants: [
      {
        id: "default",
        name: "Default (Bottom)",
        description: "Name appears below avatar on hover",
        component: NativeAvatarWithNameDefault,
        code: `<NativeAvatarWithName
  src="https://github.com/shadcn.png"
  name="John Doe"
/>`,
      },
      {
        id: "top",
        name: "Top",
        description: "Name appears above avatar",
        component: NativeAvatarWithNameTop,
        code: `<NativeAvatarWithName
  src="https://github.com/shadcn.png"
  name="Jane Smith"
  direction="top"
/>`,
      },
      {
        id: "left",
        name: "Left",
        description: "Name appears to the left of avatar",
        component: NativeAvatarWithNameLeft,
        code: `<NativeAvatarWithName
  src="https://github.com/shadcn.png"
  name="Alex Johnson"
  direction="left"
/>`,
      },
      {
        id: "right",
        name: "Right",
        description: "Name appears to the right of avatar",
        component: NativeAvatarWithNameRight,
        code: `<NativeAvatarWithName
  src="https://github.com/shadcn.png"
  name="Sarah Williams"
  direction="right"
/>`,
      },
      {
        id: "small",
        name: "Small",
        description: "Small size variant",
        component: NativeAvatarWithNameSmall,
        code: `<NativeAvatarWithName
  src="https://github.com/shadcn.png"
  name="Small Avatar"
  size="sm"
/>`,
      },
      {
        id: "large",
        name: "Large",
        description: "Large size variant",
        component: NativeAvatarWithNameLarge,
        code: `<NativeAvatarWithName
  src="https://github.com/shadcn.png"
  name="Large Avatar"
  size="lg"
/>`,
      },
      {
        id: "no-image",
        name: "No Image",
        description: "Avatar with initials fallback",
        component: NativeAvatarWithNameNoImage,
        code: `<NativeAvatarWithName name="No Image User" />`,
      },
    ],
    codePath:
      "@/components/native/shadcnui/native-avatar-with-name-shadcnui.tsx",
    duration: "300ms",
    easing: "spring",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "native-image-checkbox",
    name: "Native Image Checkbox",
    description:
      "Image checkbox component with grayscale filter and checkmark indicator.",
    category: "native",
    tags: ["checkbox", "image", "select", "filter", "native"],
    component: NativeImageCheckbox,
    variants: [
      {
        id: "default",
        name: "Default",
        description: "Standard image checkbox",
        component: NativeImageCheckboxDefault,
        code: `<NativeImageCheckbox
  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
  alt="Portrait"
  selected={selected}
  onSelect={setSelected}
/>`,
      },
      {
        id: "small",
        name: "Small",
        description: "Small size variant",
        component: NativeImageCheckboxSmall,
        code: `<NativeImageCheckbox
  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  alt="Portrait Small"
  selected={selected}
  onSelect={setSelected}
  size="sm"
/>`,
      },
      {
        id: "large",
        name: "Large",
        description: "Large size variant",
        component: NativeImageCheckboxLarge,
        code: `<NativeImageCheckbox
  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
  alt="Portrait Large"
  selected={selected}
  onSelect={setSelected}
  size="lg"
/>`,
      },
      {
        id: "extra-large",
        name: "Extra Large",
        description: "Extra large size variant",
        component: NativeImageCheckboxExtraLarge,
        code: `<NativeImageCheckbox
  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
  alt="Portrait XL"
  selected={selected}
  onSelect={setSelected}
  size="xl"
/>`,
      },
      {
        id: "selected",
        name: "Selected",
        description: "Pre-selected checkbox state",
        component: NativeImageCheckboxSelected,
        code: `<NativeImageCheckbox
  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
  alt="Selected Portrait"
  selected={true}
  onSelect={setSelected}
/>`,
      },
      {
        id: "grid",
        name: "Grid",
        description: "Multiple checkboxes in a grid layout",
        component: NativeImageCheckboxGrid,
        code: `<div className="grid grid-cols-2 gap-4">
  <NativeImageCheckbox
    src="..."
    alt="Image 1"
    selected={selected1}
    onSelect={setSelected1}
  />
  {/* More checkboxes... */}
</div>`,
      },
    ],
    codePath: "@/components/native/shadcnui/native-image-checkbox-shadcnui.tsx",
    duration: "300ms",
    easing: "spring",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "native-delete",
    name: "Native Delete",
    description:
      "Delete button that expands to show a confirmation button with smooth animations.",
    category: "native",
    tags: ["delete", "button", "confirm", "destructive", "animation", "native"],
    component: NativeDelete,
    variants: [
      {
        id: "default",
        name: "Default",
        description: "Standard delete button with confirmation",
        component: NativeDeleteDefault,
        code: `<NativeDelete
  onConfirm={() => {
    // Handle confirmation UI shown
  }}
  onDelete={() => {
    // Handle delete action
    console.log("Deleted!");
  }}
/>`,
      },
      {
        id: "small",
        name: "Small",
        description: "Small size variant",
        component: NativeDeleteSmall,
        code: `<NativeDelete
  size="sm"
  onConfirm={() => {
    // Handle confirmation UI shown
  }}
  onDelete={() => {
    // Handle delete action
  }}
/>`,
      },
      {
        id: "large",
        name: "Large",
        description: "Large size variant",
        component: NativeDeleteLarge,
        code: `<NativeDelete
  size="lg"
  onConfirm={() => {
    // Handle confirmation UI shown
  }}
  onDelete={() => {
    // Handle delete action
  }}
/>`,
      },
      {
        id: "custom-text",
        name: "Custom Text",
        description: "Custom button and confirm text",
        component: NativeDeleteCustomText,
        code: `<NativeDelete
  buttonText="Remove Item"
  confirmText="Yes, Remove"
  onConfirm={() => {
    // Handle confirmation UI shown
  }}
  onDelete={() => {
    // Handle delete action
  }}
/>`,
      },
      {
        id: "no-icon",
        name: "No Icon",
        description: "Delete button without icon",
        component: NativeDeleteNoIcon,
        code: `<NativeDelete
  showIcon={false}
  onConfirm={() => {
    // Handle confirmation UI shown
  }}
  onDelete={() => {
    // Handle delete action
  }}
/>`,
      },
      {
        id: "disabled",
        name: "Disabled",
        description: "Disabled state",
        component: NativeDeleteDisabled,
        code: `<NativeDelete
  disabled
  onConfirm={() => {}}
  onDelete={() => {}}
/>`,
      },
    ],
    codePath: "@/components/native/shadcnui/native-delete-shadcnui.tsx",
    duration: "400ms",
    easing: "spring",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "native-start-now",
    name: "Native Start Now",
    description:
      "Animated button with sparkle effects, loading states, and smooth transitions for starting actions.",
    category: "native",
    tags: [
      "button",
      "start",
      "sparkle",
      "animation",
      "loading",
      "gradient",
      "native",
    ],
    component: NativeStartNow,
    variants: [
      {
        id: "default",
        name: "Default",
        description: "Standard start button with gradient and sparkles",
        component: NativeStartNowDefault,
        code: `<NativeStartNow
  onStart={async () => {
    // Your async action here
    await new Promise((resolve) => setTimeout(resolve, 1500));
  }}
/>`,
      },
      {
        id: "gradient",
        name: "Gradient",
        description: "Gradient variant with shimmer effect",
        component: NativeStartNowGradient,
        code: `<NativeStartNow
  variant="gradient"
  onStart={async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
  }}
/>`,
      },
      {
        id: "solid",
        name: "Solid",
        description: "Solid background variant",
        component: NativeStartNowSolid,
        code: `<NativeStartNow
  variant="solid"
  onStart={async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
  }}
/>`,
      },
      {
        id: "outline",
        name: "Outline",
        description: "Outline variant with border",
        component: NativeStartNowOutline,
        code: `<NativeStartNow
  variant="outline"
  onStart={async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
  }}
/>`,
      },
      {
        id: "small",
        name: "Small",
        description: "Small size variant",
        component: NativeStartNowSmall,
        code: `<NativeStartNow
  size="sm"
  onStart={async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
  }}
/>`,
      },
      {
        id: "large",
        name: "Large",
        description: "Large size variant",
        component: NativeStartNowLarge,
        code: `<NativeStartNow
  size="lg"
  onStart={async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
  }}
/>`,
      },
      {
        id: "no-sparkles",
        name: "No Sparkles",
        description: "Button without sparkle animation",
        component: NativeStartNowNoSparkles,
        code: `<NativeStartNow
  showSparkles={false}
  onStart={async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
  }}
/>`,
      },
      {
        id: "custom-labels",
        name: "Custom Labels",
        description: "Button with custom text labels",
        component: NativeStartNowCustomLabels,
        code: `<NativeStartNow
  label="Get Started"
  loadingLabel="Preparing..."
  successLabel="Ready!"
  onStart={async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
  }}
/>`,
      },
      {
        id: "disabled",
        name: "Disabled",
        description: "Disabled state",
        component: NativeStartNowDisabled,
        code: `<NativeStartNow
  disabled
  onStart={async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
  }}
/>`,
      },
    ],
    codePath: "@/components/native/shadcnui/native-start-now-shadcnui.tsx",
    duration: "300ms",
    easing: "spring",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "native-follow-cursor",
    name: "Native Follow Cursor",
    description:
      "Label that smoothly follows the cursor with spring physics and customizable variants.",
    category: "native",
    tags: [
      "cursor",
      "follow",
      "label",
      "spring",
      "animation",
      "interactive",
      "native",
    ],
    component: NativeFollowCursor,
    variants: [
      {
        id: "default",
        name: "Default",
        description: "Standard cursor follower with default styling",
        component: NativeFollowCursorDefault,
        code: `<NativeFollowCursor name="Default" />`,
      },
      {
        id: "glass",
        name: "Glass",
        description: "Glassmorphism variant with backdrop blur",
        component: NativeFollowCursorGlass,
        code: `<NativeFollowCursor name="Glass" variant="glass" />`,
      },
      {
        id: "solid",
        name: "Solid",
        description: "Solid background variant with primary color",
        component: NativeFollowCursorSolid,
        code: `<NativeFollowCursor name="Solid" variant="solid" />`,
      },
      {
        id: "minimal",
        name: "Minimal",
        description: "Minimal variant with subtle styling",
        component: NativeFollowCursorMinimal,
        code: `<NativeFollowCursor name="Minimal" variant="minimal" />`,
      },
      {
        id: "small",
        name: "Small",
        description: "Small size variant",
        component: NativeFollowCursorSmall,
        code: `<NativeFollowCursor name="Small" size="sm" />`,
      },
      {
        id: "large",
        name: "Large",
        description: "Large size variant",
        component: NativeFollowCursorLarge,
        code: `<NativeFollowCursor name="Large" size="lg" />`,
      },
      {
        id: "no-dot",
        name: "No Dot",
        description: "Without decorative dot indicator",
        component: NativeFollowCursorNoDot,
        code: `<NativeFollowCursor name="No Dot" showDot={false} />`,
      },
      {
        id: "custom-offset",
        name: "Custom Offset",
        description: "Custom offset from cursor position",
        component: NativeFollowCursorCustomOffset,
        code: `<NativeFollowCursor name="Custom Offset" offset={{ x: 30, y: 30 }} />`,
      },
      {
        id: "smooth",
        name: "Smooth",
        description: "Smoother spring physics with lower stiffness",
        component: NativeFollowCursorSmooth,
        code: `<NativeFollowCursor
  name="Smooth"
  stiffness={100}
  damping={30}
/>`,
      },
      {
        id: "children",
        name: "Custom Children",
        description: "Using children prop for custom content",
        component: NativeFollowCursorChildren,
        code: `<NativeFollowCursor>
  <span className="flex items-center gap-1.5">
    <Sparkles className="h-3 w-3" />
    Custom Content
  </span>
</NativeFollowCursor>`,
      },
      {
        id: "area-default",
        name: "Area (Default)",
        description:
          "Cursor follower that only appears within a container area",
        component: NativeFollowCursorAreaDefault,
        code: `<NativeFollowCursorArea
  cursorContent="Hover Me"
  className="..."
>
  <p>Move your cursor inside this box only</p>
</NativeFollowCursorArea>`,
      },
      {
        id: "area-with-dot",
        name: "Area (With Dot)",
        description: "Area component with decorative dot indicator",
        component: NativeFollowCursorAreaWithDot,
        code: `<NativeFollowCursorArea
  cursorContent="With Dot"
  showDot={true}
  className="..."
>
  <p>Move your cursor inside this box only</p>
</NativeFollowCursorArea>`,
      },
      {
        id: "area-custom",
        name: "Area (Custom)",
        description: "Area component with custom cursor content",
        component: NativeFollowCursorAreaCustom,
        code: `<NativeFollowCursorArea
  cursorContent={
    <span className="flex items-center gap-1.5">
      <Star className="h-3 w-3" />
      Custom
    </span>
  }
  variant="glass"
  className="..."
>
  <p>Move your cursor inside this box only</p>
</NativeFollowCursorArea>`,
      },
    ],
    codePath: "@/components/native/carbon/native-follow-cursor-carbon.tsx",
    duration: "200ms",
    easing: "spring",
    display: true,
  },
  {
    id: "native-hover-card",
    name: "Native Hover Card",
    description:
      "Avatar card that expands on hover to reveal profile information with smooth animations.",
    category: "native",
    tags: [
      "hover",
      "card",
      "avatar",
      "profile",
      "expand",
      "animation",
      "native",
    ],
    component: NativeHoverCard,
    variants: [
      {
        id: "default",
        name: "Default",
        description: "Standard hover card with all information",
        component: NativeHoverCardDefault,
        code: `<NativeHoverCard
  imageSrc="https://github.com/shadcn.png"
  imageAlt="Profile"
  name="John Doe"
  username="johndoe"
  description="Software engineer passionate about building beautiful user interfaces."
  onButtonClick={() => console.log("View Profile clicked")}
/>`,
      },
      {
        id: "glass",
        name: "Glass",
        description: "Glassmorphism variant with backdrop blur",
        component: NativeHoverCardGlass,
        code: `<NativeHoverCard
  imageSrc="https://github.com/shadcn.png"
  name="Jane Smith"
  username="janesmith"
  description="Designer and developer focused on creating accessible products."
  variant="glass"
  onButtonClick={() => console.log("View Profile clicked")}
/>`,
      },
      {
        id: "bordered",
        name: "Bordered",
        description: "Bordered variant with primary color accent",
        component: NativeHoverCardBordered,
        code: `<NativeHoverCard
  imageSrc="https://github.com/shadcn.png"
  name="Alex Johnson"
  username="alexjohnson"
  description="Full-stack developer with expertise in React and Node.js."
  variant="bordered"
  onButtonClick={() => console.log("View Profile clicked")}
/>`,
      },
      {
        id: "small",
        name: "Small",
        description: "Small size variant",
        component: NativeHoverCardSmall,
        code: `<NativeHoverCard
  imageSrc="https://github.com/shadcn.png"
  name="Sarah Williams"
  username="sarahw"
  description="Product manager and UX enthusiast."
  size="sm"
  onButtonClick={() => console.log("View Profile clicked")}
/>`,
      },
      {
        id: "large",
        name: "Large",
        description: "Large size variant",
        component: NativeHoverCardLarge,
        code: `<NativeHoverCard
  imageSrc="https://github.com/shadcn.png"
  name="Michael Chen"
  username="michaelchen"
  description="Engineering lead building scalable systems."
  size="lg"
  onButtonClick={() => console.log("View Profile clicked")}
/>`,
      },
      {
        id: "extra-large",
        name: "Extra Large",
        description: "Extra large size variant",
        component: NativeHoverCardExtraLarge,
        code: `<NativeHoverCard
  imageSrc="https://github.com/shadcn.png"
  name="Emily Davis"
  username="emilydavis"
  description="Creative director with over 10 years of experience."
  size="xl"
  onButtonClick={() => console.log("View Profile clicked")}
/>`,
      },
      {
        id: "no-username",
        name: "No Username",
        description: "Card without username",
        component: NativeHoverCardNoUsername,
        code: `<NativeHoverCard
  imageSrc="https://github.com/shadcn.png"
  name="David Brown"
  description="Entrepreneur and startup founder."
  onButtonClick={() => console.log("View Profile clicked")}
/>`,
      },
      {
        id: "no-description",
        name: "No Description",
        description: "Card without description",
        component: NativeHoverCardNoDescription,
        code: `<NativeHoverCard
  imageSrc="https://github.com/shadcn.png"
  name="Lisa Anderson"
  username="lisaanderson"
  onButtonClick={() => console.log("View Profile clicked")}
/>`,
      },
      {
        id: "custom-button",
        name: "Custom Button",
        description: "Card with custom button content",
        component: NativeHoverCardCustomButton,
        code: `<NativeHoverCard
  imageSrc="https://github.com/shadcn.png"
  name="Robert Taylor"
  username="roberttaylor"
  description="Community manager and content creator."
  buttonContent={
    <div className="flex gap-2 w-full">
      <Button size="sm" variant="outline" className="flex-1">
        <MessageCircle className="h-4 w-4 mr-2" />
        Message
      </Button>
      <Button size="sm" className="flex-1">
        <UserPlus className="h-4 w-4 mr-2" />
        Follow
      </Button>
    </div>
  }
/>`,
      },
      {
        id: "custom-button-text",
        name: "Custom Button Text",
        description: "Card with custom button text",
        component: NativeHoverCardCustomButtonText,
        code: `<NativeHoverCard
  imageSrc="https://github.com/shadcn.png"
  name="Olivia Martinez"
  username="oliviamartinez"
  description="Data scientist and machine learning engineer."
  buttonText="Connect"
  onButtonClick={() => console.log("Connect clicked")}
/>`,
      },
      {
        id: "minimal",
        name: "Minimal",
        description: "Card without button",
        component: NativeHoverCardMinimal,
        code: `<NativeHoverCard
  imageSrc="https://github.com/shadcn.png"
  name="James Wilson"
  buttonContent={null}
/>`,
      },
      {
        id: "avatar-fallback",
        name: "Avatar Fallback",
        description:
          "Demonstrates Avatar fallback with initials when image fails to load",
        component: NativeHoverCardWithFallback,
        code: `<NativeHoverCard
  imageSrc="https://invalid-url-that-will-fail.png"
  imageAlt="Profile"
  name="Thomas Anderson"
  username="thomasa"
  description="This demonstrates the Avatar fallback with initials when the image fails to load."
  onButtonClick={() => console.log("View Profile clicked")}
/>`,
      },
    ],
    codePath: "@/components/native/shadcnui/native-hover-card-shadcnui.tsx",
    duration: "300ms",
    easing: "spring",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "bottom-modal",
    name: "Bottom Modal",
    description:
      "Cute bottom-centered modal with smooth slide-up animation and glassmorphism design",
    category: "native",
    tags: ["modal", "bottom", "slide", "overlay", "glassmorphism"],
    component: BottomModal,
    variants: [
      {
        id: "default",
        name: "Default",
        description: "Standard usage of Bottom Modal",
        component: BottomModal,
        code: `<BottomModal />`,
      },
    ],
    codePath: "@/components/modals/bottom-modal.tsx",
    duration: "300ms",
    easing: "spring",
    display: true,
  },
  {
    id: "native-tooltip-shadcnui",
    name: "Native Tooltip", // Same name? Or "Native Button BaseUI"? User said "no duplication on ui", which we handle via display:false. Name doesn't matter for UI. For CLI, it's the ID.
    description:
      "A glassmorphism-styled tooltip with smooth spring animations using Framer Motion.",
    category: "native",
    tags: [],
    component: NativeTooltip,
    codePath: "@/components/native/shadcnui/native-tooltip-shadcnui.tsx",
    display: false,
    availableIn: ["shadcnui"],
  },
  {
    id: "native-dialog-shadcnui",
    name: "Native Dialog", // Same name? Or "Native Button BaseUI"? User said "no duplication on ui", which we handle via display:false. Name doesn't matter for UI. For CLI, it's the ID.
    description:
      "A glassmorphism-styled dialog component with backdrop blur and smooth animations, inspired by native OS modals.",
    category: "native",
    tags: [],
    component: NativeDialog,
    codePath: "@/components/native/shadcnui/native-dialog-shadcnui.tsx",
    display: false,
    availableIn: ["shadcnui"],
  },
  {
    id: "native-dialog-baseui",
    name: "Native Dialog", // Same name? Or "Native Button BaseUI"? User said "no duplication on ui", which we handle via display:false. Name doesn't matter for UI. For CLI, it's the ID.
    description:
      "A glassmorphism-styled dialog component with backdrop blur and smooth animations, inspired by native OS modals.",
    category: "native",
    tags: [],
    component: NativeDialog,
    codePath: "@/components/native/baseui/native-dialog-baseui.tsx",
    display: false,
    availableIn: ["baseui"],
  },
  {
    id: "social-login-button-shadcnui",
    name: "Social Login Button", // Same name? Or "Native Button BaseUI"? User said "no duplication on ui", which we handle via display:false. Name doesn't matter for UI. For CLI, it's the ID.
    description:
      "A set of animated social login buttons for major platforms (Github, Google, X, etc.) with various effects.",
    category: "native",
    tags: [],
    component: SocialLoginButton,
    codePath: "@/components/native/shadcnui/social-login-button-shadcnui.tsx",
    display: false,
    availableIn: ["shadcnui"],
  },
  {
    id: "native-button-shadcnui",
    name: "Native Button", // Same name? Or "Native Button BaseUI"? User said "no duplication on ui", which we handle via display:false. Name doesn't matter for UI. For CLI, it's the ID.
    description:
      "Glassmorphism-inspired button component based on shadcn/ui with smooth animations and modern styling",
    category: "native",
    tags: [],
    component: NativeButton,
    codePath: "@/components/native/shadcnui/native-button-shadcnui.tsx",
    display: false,
    availableIn: ["shadcnui"],
  },
  {
    id: "native-button-baseui",
    name: "Native Button", // Same name? Or "Native Button BaseUI"? User said "no duplication on ui", which we handle via display:false. Name doesn't matter for UI. For CLI, it's the ID.
    description:
      "Glassmorphism-inspired button component based on shadcn/ui with smooth animations and modern styling",
    category: "native",
    tags: [],
    component: NativeButton,
    codePath: "@/components/native/baseui/native-button-baseui.tsx",
    display: false,
    availableIn: ["baseui"],
  },
  {
    id: "native-tabs-shadcnui",
    name: "Native Tabs", // Same name? Or "Native Button BaseUI"? User said "no duplication on ui", which we handle via display:false. Name doesn't matter for UI. For CLI, it's the ID.
    description:
      "A sleek tabs component with a smooth sliding background indicator using Framer Motion layout animations.",
    category: "native",
    tags: [],
    component: NativeTabs,
    codePath: "@/components/native/shadcnui/native-tabs-shadcnui.tsx",
    display: false,
    availableIn: ["shadcnui"],
  },
  {
    id: "native-tabs-carbon",
    name: "Native Tabs", // Same name? Or "Native Button BaseUI"? User said "no duplication on ui", which we handle via display:false. Name doesn't matter for UI. For CLI, it's the ID.
    description:
      "A sleek tabs component with a smooth sliding background indicator using Framer Motion layout animations.",
    category: "native",
    tags: [],
    component: NativeTabs,
    codePath: "@/components/native/carbon/native-tabs-carbon.tsx",
    display: false,
    availableIn: ["carbon"],
  },
  {
    id: "native-flip-text-carbon",
    name: "Native Flip Text", // Same name? Or "Native Button BaseUI"? User said "no duplication on ui", which we handle via display:false. Name doesn't matter for UI. For CLI, it's the ID.
    description: "Text that flips through words with a 3D blur transition.",
    category: "native",
    tags: [],
    component: NativeFlipText,
    codePath: "@/components/native/carbon/native-flip-text-carbon.tsx",
    display: false,
    availableIn: ["carbon"],
  },
  {
    id: "native-badge-carbon",
    name: "Native Badge", // Same name? Or "Native Button BaseUI"? User said "no duplication on ui", which we handle via display:false. Name doesn't matter for UI. For CLI, it's the ID.
    description:
      "Animated badge component with glass, glow, and outline variants for native feel.",
    category: "native",
    tags: [],
    component: NativeBadge,
    codePath: "@/components/native/carbon/native-badge-carbon.tsx",
    display: false,
    availableIn: ["carbon"],
  },
  {
    id: "native-counter-up-carbon",
    name: "Native Counter Up", // Same name? Or "Native Button BaseUI"? User said "no duplication on ui", which we handle via display:false. Name doesn't matter for UI. For CLI, it's the ID.
    description:
      "Animated number counter with smooth easing and accessibility support.",
    category: "native",
    tags: [],
    component: NativeCounterUp,
    codePath: "@/components/native/carbon/native-counter-up-carbon.tsx",
    display: false,
    availableIn: ["carbon"],
  },
  {
    id: "native-magnetic-shadcnui",
    name: "Native Magnetic", // Same name? Or "Native Button BaseUI"? User said "no duplication on ui", which we handle via display:false. Name doesn't matter for UI. For CLI, it's the ID.
    description:
      "Magnetic wrapper that applies a cursor-following effect to any content.",
    category: "native",
    tags: [],
    component: NativeMagnetic,
    codePath: "@/components/native/shadcnui/native-magnetic-shadcnui.tsx",
    display: false,
    availableIn: ["shadcnui"],
  },
  {
    id: "native-magnetic-carbon",
    name: "Native Magnetic", // Same name? Or "Native Button BaseUI"? User said "no duplication on ui", which we handle via display:false. Name doesn't matter for UI. For CLI, it's the ID.
    description:
      "Magnetic wrapper that applies a cursor-following effect to any content.",
    category: "native",
    tags: [],
    component: NativeMagnetic,
    codePath: "@/components/native/carbon/native-magnetic-carbon.tsx",
    display: false,
    availableIn: ["carbon"],
  },
  {
    id: "native-notification-bell-shadcnui",
    name: "Native Notification Bell", // Same name? Or "Native Button BaseUI"? User said "no duplication on ui", which we handle via display:false. Name doesn't matter for UI. For CLI, it's the ID.
    description: "Animated notification bell with badge and ringing effect.",
    category: "native",
    tags: [],
    component: NativeNotificationBell,
    codePath:
      "@/components/native/shadcnui/native-notification-bell-shadcnui.tsx",
    display: false,
    availableIn: ["shadcnui"],
  },
  {
    id: "native-notification-bell-carbon",
    name: "Native Notification Bell", // Same name? Or "Native Button BaseUI"? User said "no duplication on ui", which we handle via display:false. Name doesn't matter for UI. For CLI, it's the ID.
    description: "Animated notification bell with badge and ringing effect.",
    category: "native",
    tags: [],
    component: NativeNotificationBell,
    codePath: "@/components/native/carbon/native-notification-bell-carbon.tsx",
    display: false,
    availableIn: ["carbon"],
  },
  {
    id: "native-morphing-button-shadcnui",
    name: "Native Morphing Button", // Same name? Or "Native Button BaseUI"? User said "no duplication on ui", which we handle via display:false. Name doesn't matter for UI. For CLI, it's the ID.
    description: "Floating action button that morphs into a menu of actions.",
    category: "native",
    tags: [],
    component: NativeMorphingButton,
    codePath:
      "@/components/native/shadcnui/native-morphing-button-shadcnui.tsx",
    display: false,
    availableIn: ["shadcnui"],
  },
  {
    id: "native-morphing-button-carbon",
    name: "Native Morphing Button", // Same name? Or "Native Button BaseUI"? User said "no duplication on ui", which we handle via display:false. Name doesn't matter for UI. For CLI, it's the ID.
    description: "Floating action button that morphs into a menu of actions.",
    category: "native",
    tags: [],
    component: NativeMorphingButton,
    codePath: "@/components/native/carbon/native-morphing-button-carbon.tsx",
    display: false,
    availableIn: ["carbon"],
  },
  {
    id: "native-liquid-button-shadcnui",
    name: "Native Liquid Button", // Same name? Or "Native Button BaseUI"? User said "no duplication on ui", which we handle via display:false. Name doesn't matter for UI. For CLI, it's the ID.
    description:
      "Button with animated liquid fill effect, progress tracking, and multiple visual variants for engaging interactions.",
    category: "native",
    tags: [],
    component: NativeLiquidButton,
    codePath: "@/components/native/shadcnui/native-liquid-button-shadcnui.tsx",
    display: false,
    availableIn: ["shadcnui"],
  },
  {
    id: "native-avatar-expand-shadcnui",
    name: "Native Avatar Expand", // Same name? Or "Native Button BaseUI"? User said "no duplication on ui", which we handle via display:false. Name doesn't matter for UI. For CLI, it's the ID.
    description:
      "Avatar component that expands to reveal the name on click with smooth animations.",
    category: "native",
    tags: [],
    component: NativeAvatarExpand,
    codePath: "@/components/native/shadcnui/native-avatar-expand-shadcnui.tsx",
    display: false,
    availableIn: ["shadcnui"],
  },
  {
    id: "native-avatar-expand-baseui",
    name: "Native Avatar Expand", // Same name? Or "Native Button BaseUI"? User said "no duplication on ui", which we handle via display:false. Name doesn't matter for UI. For CLI, it's the ID.
    description:
      "Avatar component that expands to reveal the name on click with smooth animations.",
    category: "native",
    tags: [],
    component: NativeAvatarExpand,
    codePath: "@/components/native/baseui/native-avatar-expand-baseui.tsx",
    display: false,
    availableIn: ["baseui"],
  },
  {
    id: "native-avatar-with-name-shadcnui",
    name: "Native Avatar With Name", // Same name? Or "Native Button BaseUI"? User said "no duplication on ui", which we handle via display:false. Name doesn't matter for UI. For CLI, it's the ID.
    description:
      "Avatar component that displays a name tooltip on hover with directional animations.",
    category: "native",
    tags: [],
    component: NativeAvatarWithName,
    codePath:
      "@/components/native/shadcnui/native-avatar-with-name-shadcnui.tsx",
    display: false,
    availableIn: ["shadcnui"],
  },
  {
    id: "native-avatar-with-name-baseui",
    name: "Native Avatar With Name", // Same name? Or "Native Button BaseUI"? User said "no duplication on ui", which we handle via display:false. Name doesn't matter for UI. For CLI, it's the ID.
    description:
      "Avatar component that displays a name tooltip on hover with directional animations.",
    category: "native",
    tags: [],
    component: NativeAvatarWithName,
    codePath: "@/components/native/baseui/native-avatar-with-name-baseui.tsx",
    display: false,
    availableIn: ["baseui"],
  },
  {
    id: "native-image-checkbox-shadcnui",
    name: "Native Image Checkbox", // Same name? Or "Native Button BaseUI"? User said "no duplication on ui", which we handle via display:false. Name doesn't matter for UI. For CLI, it's the ID.
    description:
      "Image checkbox component with grayscale filter and checkmark indicator.",
    category: "native",
    tags: [],
    component: NativeImageCheckbox,
    codePath: "@/components/native/shadcnui/native-image-checkbox-shadcnui.tsx",
    display: false,
    availableIn: ["shadcnui"],
  },
  {
    id: "native-image-checkbox-carbon",
    name: "Native Image Checkbox", // Same name? Or "Native Button BaseUI"? User said "no duplication on ui", which we handle via display:false. Name doesn't matter for UI. For CLI, it's the ID.
    description:
      "Image checkbox component with grayscale filter and checkmark indicator.",
    category: "native",
    tags: [],
    component: NativeImageCheckbox,
    codePath: "@/components/native/carbon/native-image-checkbox-carbon.tsx",
    display: false,
    availableIn: ["carbon"],
  },
  {
    id: "native-delete-shadcnui",
    name: "Native Delete", // Same name? Or "Native Button BaseUI"? User said "no duplication on ui", which we handle via display:false. Name doesn't matter for UI. For CLI, it's the ID.
    description:
      "Delete button that expands to show a confirmation button with smooth animations.",
    category: "native",
    tags: [],
    component: NativeDelete,
    codePath: "@/components/native/shadcnui/native-delete-shadcnui.tsx",
    display: false,
    availableIn: ["shadcnui"],
  },
  {
    id: "native-delete-baseui",
    name: "Native Delete", // Same name? Or "Native Button BaseUI"? User said "no duplication on ui", which we handle via display:false. Name doesn't matter for UI. For CLI, it's the ID.
    description:
      "Delete button that expands to show a confirmation button with smooth animations.",
    category: "native",
    tags: [],
    component: NativeDelete,
    codePath: "@/components/native/baseui/native-delete-baseui.tsx",
    display: false,
    availableIn: ["baseui"],
  },
  {
    id: "native-start-now-shadcnui",
    name: "Native Start Now", // Same name? Or "Native Button BaseUI"? User said "no duplication on ui", which we handle via display:false. Name doesn't matter for UI. For CLI, it's the ID.
    description:
      "Animated button with sparkle effects, loading states, and smooth transitions for starting actions.",
    category: "native",
    tags: [],
    component: NativeStartNow,
    codePath: "@/components/native/shadcnui/native-start-now-shadcnui.tsx",
    display: false,
    availableIn: ["shadcnui"],
  },
  {
    id: "native-follow-cursor-carbon",
    name: "Native Follow Cursor", // Same name? Or "Native Button BaseUI"? User said "no duplication on ui", which we handle via display:false. Name doesn't matter for UI. For CLI, it's the ID.
    description:
      "Label that smoothly follows the cursor with spring physics and customizable variants.",
    category: "native",
    tags: [],
    component: NativeFollowCursor,
    codePath: "@/components/native/carbon/native-follow-cursor-carbon.tsx",
    display: false,
    availableIn: ["carbon"],
  },
  {
    id: "native-hover-card-shadcnui",
    name: "Native Hover Card", // Same name? Or "Native Button BaseUI"? User said "no duplication on ui", which we handle via display:false. Name doesn't matter for UI. For CLI, it's the ID.
    description:
      "Avatar card that expands on hover to reveal profile information with smooth animations.",
    category: "native",
    tags: [],
    component: NativeHoverCard,
    codePath: "@/components/native/shadcnui/native-hover-card-shadcnui.tsx",
    display: false,
    availableIn: ["shadcnui"],
  },
  {
    id: "native-hover-card-baseui",
    name: "Native Hover Card",
    description:
      "Avatar card that expands on hover to reveal profile information with smooth animations.",
    category: "native",
    tags: [],
    component: NativeHoverCard,
    codePath: "@/components/native/baseui/native-hover-card-baseui.tsx",
    display: false,
    availableIn: ["baseui"],
  },
  {
    id: "native-image-checkbox-baseui",
    name: "Native Image Checkbox",
    description:
      "Image checkbox component with grayscale filter and checkmark indicator.",
    category: "native",
    tags: [],
    component: NativeImageCheckbox,
    codePath: "@/components/native/baseui/native-image-checkbox-baseui.tsx",
    display: false,
    availableIn: ["baseui"],
  },
  {
    id: "native-liquid-button-baseui",
    name: "Native Liquid Button",
    description:
      "Button with animated liquid fill effect, progress tracking, and multiple visual variants for engaging interactions.",
    category: "native",
    tags: [],
    component: NativeLiquidButton,
    codePath: "@/components/native/baseui/native-liquid-button-baseui.tsx",
    display: false,
    availableIn: ["baseui"],
  },
  {
    id: "native-magnetic-baseui",
    name: "Native Magnetic",
    description:
      "Magnetic wrapper that applies a cursor-following effect to any content.",
    category: "native",
    tags: [],
    component: NativeMagnetic,
    codePath: "@/components/native/baseui/native-magnetic-baseui.tsx",
    display: false,
    availableIn: ["baseui"],
  },
  {
    id: "native-morphing-button-baseui",
    name: "Native Morphing Button",
    description: "Floating action button that morphs into a menu of actions.",
    category: "native",
    tags: [],
    component: NativeMorphingButton,
    codePath: "@/components/native/baseui/native-morphing-button-baseui.tsx",
    display: false,
    availableIn: ["baseui"],
  },
  {
    id: "native-notification-bell-baseui",
    name: "Native Notification Bell",
    description: "Animated notification bell with badge and ringing effect.",
    category: "native",
    tags: [],
    component: NativeNotificationBell,
    codePath: "@/components/native/baseui/native-notification-bell-baseui.tsx",
    display: false,
    availableIn: ["baseui"],
  },
  {
    id: "native-start-now-baseui",
    name: "Native Start Now",
    description:
      "Animated button with sparkle effects, loading states, and smooth transitions for starting actions.",
    category: "native",
    tags: [],
    component: NativeStartNow,
    codePath: "@/components/native/baseui/native-start-now-baseui.tsx",
    display: false,
    availableIn: ["baseui"],
  },
  {
    id: "native-tabs-baseui",
    name: "Native Tabs",
    description:
      "A sleek tabs component with a smooth sliding background indicator using Framer Motion layout animations.",
    category: "native",
    tags: [],
    component: NativeTabs,
    codePath: "@/components/native/baseui/native-tabs-baseui.tsx",
    display: false,
    availableIn: ["baseui"],
  },
  {
    id: "native-tooltip-baseui",
    name: "Native Tooltip",
    description:
      "A glassmorphism-styled tooltip with smooth spring animations using Framer Motion.",
    category: "native",
    tags: [],
    component: NativeTooltip,
    codePath: "@/components/native/baseui/native-tooltip-baseui.tsx",
    display: false,
    availableIn: ["baseui"],
  },
  {
    id: "native-typewriter-baseui",
    name: "Native Typewriter",
    description:
      "Typewriter effect with speed control, looping, and blinking cursor.",
    category: "native",
    tags: [],
    component: NativeTypewriter,
    codePath: "@/components/native/baseui/native-typewriter-baseui.tsx",
    display: false,
    availableIn: ["baseui"],
  },
  {
    id: "social-login-button-baseui",
    name: "Social Login Button",
    description:
      "A set of animated social login buttons for major platforms (Github, Google, X, etc.) with various effects.",
    category: "native",
    tags: [],
    component: SocialLoginButton,
    codePath: "@/components/native/baseui/social-login-button-baseui.tsx",
    display: false,
    availableIn: ["baseui"],
  },
  {
    id: "native-delete-baseui",
    name: "Native Delete",
    description:
      "Delete button that expands to show a confirmation button with smooth animations.",
    category: "native",
    tags: [],
    component: NativeDelete,
    codePath: "@/components/native/baseui/native-delete-baseui.tsx",
    display: false,
    availableIn: ["baseui"],
  },
];
