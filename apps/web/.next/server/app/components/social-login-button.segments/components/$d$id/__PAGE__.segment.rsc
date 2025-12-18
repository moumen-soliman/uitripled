1:"$Sreact.fragment"
2:I[176430,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"default"]
4:I[151474,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"SocialButtonsSlide"]
5:I[151474,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"SocialButtonsScale"]
6:I[151474,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"SocialButtonsGlow"]
7:I[151474,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"SocialButtonsShine"]
e:I[897367,["/_next/static/chunks/d96012bcfc98706a.js","/_next/static/chunks/c1216787d4b31b65.js"],"OutletBoundary"]
f:"$Sreact.suspense"
3:Tf36,import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Chrome, Github, Linkedin, Triangle, Twitter } from "lucide-react";
import { ReactNode } from "react";

export type SocialProvider = "github" | "google" | "x" | "vercel" | "linkedin";
export type SocialAnimation = "slide" | "scale" | "glow" | "shine" | "none";

export interface SocialLoginButtonProps extends ButtonProps {
  provider: SocialProvider;
  animation?: SocialAnimation;
  children?: ReactNode; // Optional, defaults to "Continue with [Provider]"
}

const providerConfig: Record<
  SocialProvider,
  {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    bgClass: string;
    textClass?: string;
  }
> = {
  github: {
    icon: Github,
    label: "Verify with Github",
    bgClass:
      "bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90",
  },
  google: {
    icon: Chrome,
    label: "Continue with Google",
    bgClass:
      "bg-white text-black border border-input hover:bg-accent hover:text-accent-foreground dark:bg-neutral-900 dark:text-white dark:border-neutral-800",
  },
  x: {
    icon: Twitter,
    label: "Sign in with X",
    bgClass:
      "bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90",
  },
  vercel: {
    icon: Triangle,
    label: "Continue with Vercel",
    bgClass:
      "bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90",
  },
  linkedin: {
    icon: Linkedin,
    label: "Connect with LinkedIn",
    bgClass:
      "bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90",
  },
};

const SocialLoginButton = ({
  className,
  provider,
  animation = "none",
  children,
  ...props
}: SocialLoginButtonProps) => {
  const config = providerConfig[provider];
  const Icon = config.icon;

  const baseStyles = cn(
    "cursor-pointer relative h-12 rounded-md px-8 text-sm font-medium transition-all w-full md:w-auto min-w-[240px]",
    config.bgClass,
    className
  );

  // Animation variants
  const getAnimationProps = () => {
    switch (animation) {
      case "scale":
        return {
          whileHover: { scale: 1.02 },
          whileTap: { scale: 0.98 },
        };
      case "slide":
        return {}; // Handled via CSS/State inside
      default:
        return {
          whileTap: { scale: 0.98 },
        };
    }
  };

  return (
    <motion.div {...getAnimationProps()} className="relative group block w-fit">
      {/* Glow Effect */}
      {animation === "glow" && (
        <div className="absolute inset-0 rounded-md bg-current opacity-0 blur-lg group-hover:opacity-40 transition-opacity duration-500 text-inherit" />
      )}

      <Button className={cn(baseStyles, "overflow-hidden")} {...props}>
        {/* Shine Effect */}
        {animation === "shine" && (
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent z-10 ease-in-out" />
        )}

        <div className="flex items-center justify-center gap-3 w-full relative z-10">
          <motion.span
            className={cn(
              "flex-shrink-0",
              animation === "slide" &&
                "transition-transform duration-300 group-hover:-translate-x-1"
            )}
          >
            <Icon className="w-5 h-5" />
          </motion.span>
          <span
            className={cn(
              animation === "slide" &&
                "transition-transform duration-300 group-hover:translate-x-1"
            )}
          >
            {children || config.label}
          </span>
        </div>
      </Button>
    </motion.div>
  );
};

export { SocialLoginButton };
8:Tfc9,"use client";

import { cn } from "@/lib/utils";
import {
  Button,
  type ButtonProps as BaseButtonProps,
} from "@base-ui/react/button";
import { motion } from "framer-motion";
import { Chrome, Github, Linkedin, Triangle, Twitter } from "lucide-react";
import { ReactNode } from "react";

export type SocialProvider = "github" | "google" | "x" | "vercel" | "linkedin";
export type SocialAnimation = "slide" | "scale" | "glow" | "shine" | "none";

export type SocialLoginButtonProps = BaseButtonProps & {
  provider: SocialProvider;
  animation?: SocialAnimation;
  children?: ReactNode; // Optional, defaults to "Continue with [Provider]"
  className?: string;
};

const providerConfig: Record<
  SocialProvider,
  {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    bgClass: string;
    textClass?: string;
  }
> = {
  github: {
    icon: Github,
    label: "Verify with Github",
    bgClass:
      "bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90",
  },
  google: {
    icon: Chrome,
    label: "Continue with Google",
    bgClass:
      "bg-white text-black border border-input hover:bg-accent hover:text-accent-foreground dark:bg-neutral-900 dark:text-white dark:border-neutral-800",
  },
  x: {
    icon: Twitter,
    label: "Sign in with X",
    bgClass:
      "bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90",
  },
  vercel: {
    icon: Triangle,
    label: "Continue with Vercel",
    bgClass:
      "bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90",
  },
  linkedin: {
    icon: Linkedin,
    label: "Connect with LinkedIn",
    bgClass:
      "bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90",
  },
};

const SocialLoginButton = ({
  className,
  provider,
  animation = "none",
  children,
  ...props
}: SocialLoginButtonProps) => {
  const config = providerConfig[provider];
  const Icon = config.icon;

  const baseStyles = cn(
    "cursor-pointer relative h-12 rounded-md px-8 text-sm font-medium transition-all w-full md:w-auto min-w-[240px]",
    config.bgClass,
    className
  );

  // Animation variants
  const getAnimationProps = () => {
    switch (animation) {
      case "scale":
        return {
          whileHover: { scale: 1.02 },
          whileTap: { scale: 0.98 },
        };
      case "slide":
        return {}; // Handled via CSS/State inside
      default:
        return {
          whileTap: { scale: 0.98 },
        };
    }
  };

  return (
    <motion.div {...getAnimationProps()} className="relative group block w-fit">
      {/* Glow Effect */}
      {animation === "glow" && (
        <div className="absolute inset-0 rounded-md bg-current opacity-0 blur-lg group-hover:opacity-40 transition-opacity duration-500 text-inherit" />
      )}

      <Button
        className={cn(
          baseStyles,
          "overflow-hidden flex items-center justify-center"
        )}
        {...props}
      >
        {/* Shine Effect */}
        {animation === "shine" && (
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent z-10 ease-in-out" />
        )}

        <div className="flex items-center justify-center gap-3 w-full relative z-10">
          <motion.span
            className={cn(
              "flex-shrink-0",
              animation === "slide" &&
                "transition-transform duration-300 group-hover:-translate-x-1"
            )}
          >
            <Icon className="w-5 h-5" />
          </motion.span>
          <span
            className={cn(
              animation === "slide" &&
                "transition-transform duration-300 group-hover:translate-x-1"
            )}
          >
            {children || config.label}
          </span>
        </div>
      </Button>
    </motion.div>
  );
};

export { SocialLoginButton };
9:Tf36,import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Chrome, Github, Linkedin, Triangle, Twitter } from "lucide-react";
import { ReactNode } from "react";

export type SocialProvider = "github" | "google" | "x" | "vercel" | "linkedin";
export type SocialAnimation = "slide" | "scale" | "glow" | "shine" | "none";

export interface SocialLoginButtonProps extends ButtonProps {
  provider: SocialProvider;
  animation?: SocialAnimation;
  children?: ReactNode; // Optional, defaults to "Continue with [Provider]"
}

const providerConfig: Record<
  SocialProvider,
  {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    bgClass: string;
    textClass?: string;
  }
> = {
  github: {
    icon: Github,
    label: "Verify with Github",
    bgClass:
      "bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90",
  },
  google: {
    icon: Chrome,
    label: "Continue with Google",
    bgClass:
      "bg-white text-black border border-input hover:bg-accent hover:text-accent-foreground dark:bg-neutral-900 dark:text-white dark:border-neutral-800",
  },
  x: {
    icon: Twitter,
    label: "Sign in with X",
    bgClass:
      "bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90",
  },
  vercel: {
    icon: Triangle,
    label: "Continue with Vercel",
    bgClass:
      "bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90",
  },
  linkedin: {
    icon: Linkedin,
    label: "Connect with LinkedIn",
    bgClass:
      "bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90",
  },
};

const SocialLoginButton = ({
  className,
  provider,
  animation = "none",
  children,
  ...props
}: SocialLoginButtonProps) => {
  const config = providerConfig[provider];
  const Icon = config.icon;

  const baseStyles = cn(
    "cursor-pointer relative h-12 rounded-md px-8 text-sm font-medium transition-all w-full md:w-auto min-w-[240px]",
    config.bgClass,
    className
  );

  // Animation variants
  const getAnimationProps = () => {
    switch (animation) {
      case "scale":
        return {
          whileHover: { scale: 1.02 },
          whileTap: { scale: 0.98 },
        };
      case "slide":
        return {}; // Handled via CSS/State inside
      default:
        return {
          whileTap: { scale: 0.98 },
        };
    }
  };

  return (
    <motion.div {...getAnimationProps()} className="relative group block w-fit">
      {/* Glow Effect */}
      {animation === "glow" && (
        <div className="absolute inset-0 rounded-md bg-current opacity-0 blur-lg group-hover:opacity-40 transition-opacity duration-500 text-inherit" />
      )}

      <Button className={cn(baseStyles, "overflow-hidden")} {...props}>
        {/* Shine Effect */}
        {animation === "shine" && (
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent z-10 ease-in-out" />
        )}

        <div className="flex items-center justify-center gap-3 w-full relative z-10">
          <motion.span
            className={cn(
              "flex-shrink-0",
              animation === "slide" &&
                "transition-transform duration-300 group-hover:-translate-x-1"
            )}
          >
            <Icon className="w-5 h-5" />
          </motion.span>
          <span
            className={cn(
              animation === "slide" &&
                "transition-transform duration-300 group-hover:translate-x-1"
            )}
          >
            {children || config.label}
          </span>
        </div>
      </Button>
    </motion.div>
  );
};

export { SocialLoginButton };
0:{"buildId":"bFBIq5AO28jMw9-shWxSc","rsc":["$","$1","c",{"children":[["$","$L2",null,{"code":"$3","relatedComponents":[{"id":"slide","name":"Slide Animation","description":"Icon slides in on hover","component":"$4","code":"<SocialLoginButton provider=\"github\" animation=\"slide\" />"},{"id":"scale","name":"Scale Animation","description":"Button scales up on hover","component":"$5","code":"<SocialLoginButton provider=\"x\" animation=\"scale\" />"},{"id":"glow","name":"Glow Animation","description":"Outer glow effect on hover","component":"$6","code":"<SocialLoginButton provider=\"linkedin\" animation=\"glow\" />"},{"id":"shine","name":"Shine Animation","description":"Shine effect swipes across on hover","component":"$7","code":"<SocialLoginButton provider=\"google\" animation=\"shine\" />"}],"variantCodes":{"slide":"<SocialLoginButton provider=\"github\" animation=\"slide\" />","scale":"<SocialLoginButton provider=\"x\" animation=\"scale\" />","glow":"<SocialLoginButton provider=\"linkedin\" animation=\"glow\" />","shine":"<SocialLoginButton provider=\"google\" animation=\"shine\" />"},"baseId":"social-login-button","baseuiCode":"$8","shadcnuiCode":"$9"}],["$La","$Lb","$Lc"],"$Ld"]}],"loading":null,"isPartial":false}
a:["$","script","script-0",{"src":"/_next/static/chunks/caa50e77cf52fdaa.js","async":true}]
b:["$","script","script-1",{"src":"/_next/static/chunks/e0bc9c3a4105a6fe.js","async":true}]
c:["$","script","script-2",{"src":"/_next/static/chunks/48913bc585f72fa4.js","async":true}]
d:["$","$Le",null,{"children":["$","$f",null,{"name":"Next.MetadataOutlet","children":"$@10"}]}]
10:null
