"use client";

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
