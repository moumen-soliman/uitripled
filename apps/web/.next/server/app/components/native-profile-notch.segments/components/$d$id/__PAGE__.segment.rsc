1:"$Sreact.fragment"
2:I[176430,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"default"]
4:I[772866,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"NativeProfileNotchDefault"]
5:I[772866,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"NativeProfileNotchOverlay"]
e:I[897367,["/_next/static/chunks/d96012bcfc98706a.js","/_next/static/chunks/c1216787d4b31b65.js"],"OutletBoundary"]
f:"$Sreact.suspense"
3:T1ae6,"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, X } from "lucide-react";
import { useState } from "react";

export interface NativeProfileNotchProps {
  /**
   * Url of the user image
   */
  imageSrc: string;
  /**
   * Name of the user
   */
  name: string;
  /**
   * Handle or role of the user
   */
  username: string;
  /**
   * Custom content to show in expanded state
   */
  children?: React.ReactNode;
  /**
   * Size of the notch
   * @default "md"
   */
  size?: "sm" | "md" | "lg";
  /**
   * Class name for the container
   */
  className?: string;
  /**
    * Variant of the notch.
    * "default": expands and pushes content.
    * "overlay": expands over content (absolute positioning).
    * @default "default"
    */
  variant?: "default" | "overlay";
}

export function NativeProfileNotch({
  imageSrc,
  name,
  username,
  children,
  size = "md",
  className,
  variant = "default",
}: NativeProfileNotchProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn(
        variant === "overlay"
          ? "relative flex items-center justify-center w-[160px] h-[60px]"
          : "flex items-start justify-center",
        className
      )}
    >
      <motion.div
        layout
        className={cn(
          "bg-background text-foreground overflow-hidden z-50 cursor-pointer border border-accent/60",
          isOpen ? "rounded-3xl" : "rounded-full",
          variant === "overlay" ? "absolute top-0 left-0" : "relative"
        )}
        initial={false}
        animate={{
          width: isOpen ? 320 : 160,
          height: isOpen ? 380 : 60,
          borderRadius: isOpen ? 24 : 24,
        }}
        transition={{
          width: {
            delay: isOpen ? 0 : 0.3,
            type: "spring",
            stiffness: 260,
            damping: 20,
          },
          height: {
            delay: isOpen ? 0.2 : 0,
            type: "spring",
            stiffness: 260,
            damping: 20,
          },
          borderRadius: {
            delay: isOpen ? 0 : 0.3,
            type: "spring",
            stiffness: 260,
            damping: 20,
          },
          layout: { duration: 0.3 },
        }}
        onClick={() => !isOpen && setIsOpen(true)}
      >
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="collapsed"
              className="absolute inset-0 flex items-center justify-center w-full h-full"
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <div className="flex items-center gap-3 px-4 w-full">
                <Avatar className="w-8 h-8 flex-shrink-0">
                  <AvatarImage
                    src={imageSrc}
                    alt={name}
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-muted text-[10px] text-foreground">
                    {name.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-sm font-medium text-foreground truncate">
                    {name}
                  </span>
                  <span className="text-[10px] text-muted-foreground truncate">
                    @{username}
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground ml-auto" />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="expanded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.2 }}
              className="flex flex-col h-full relative p-6 cursor-default"
            >
              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
                className="absolute top-4 right-4 p-1 rounded-full bg-muted/50 hover:bg-muted transition-colors z-10"
                aria-label="Close profile"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>

              {/* Scrollable Content */}
              <div className="flex flex-col items-center w-full h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                {/* Profile Header */}
                <div className="flex flex-col items-center mt-4 flex-shrink-0">
                  <motion.div
                    layoutId="avatar"
                    className="w-24 h-24 rounded-full overflow-hidden border-4 border-muted/20 shadow-lg mb-4"
                  >
                    <img
                      src={imageSrc}
                      alt={name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  <motion.h3
                    layoutId="name"
                    className="text-xl font-bold text-foreground text-center"
                  >
                    {name}
                  </motion.h3>

                  <motion.p
                    layoutId="username"
                    className="text-muted-foreground text-sm font-medium text-center"
                  >
                    @{username}
                  </motion.p>
                </div>

                {/* Custom Content */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-6 w-full flex-1"
                >
                  {children}
                </motion.div>

                {/* Bottom Action */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-4 w-full pt-4 sticky bottom-0 bg-gradient-to-t from-background via-background to-transparent p-1"
                >
                  <button
                    className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
                    onClick={(e) => {
                       e.stopPropagation();
                    }}
                  >
                    View Full Profile
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
6:T1b30,"use client";

import { cn } from "@/lib/utils";
import { Avatar } from "@base-ui/react/avatar";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, X } from "lucide-react";
import { useState } from "react";

export interface NativeProfileNotchProps {
  /**
   * Url of the user image
   */
  imageSrc: string;
  /**
   * Name of the user
   */
  name: string;
  /**
   * Handle or role of the user
   */
  username: string;
  /**
   * Custom content to show in expanded state
   */
  children?: React.ReactNode;
  /**
   * Size of the notch
   * @default "md"
   */
  size?: "sm" | "md" | "lg";
  /**
   * Class name for the container
   */
  className?: string;
  /**
    * Variant of the notch.
    * "default": expands and pushes content.
    * "overlay": expands over content (absolute positioning).
    * @default "default"
    */
  variant?: "default" | "overlay";
}

export function NativeProfileNotch({
  imageSrc,
  name,
  username,
  children,
  size = "md",
  className,
  variant = "default",
}: NativeProfileNotchProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn(
        variant === "overlay"
          ? "relative flex items-center justify-center w-[160px] h-[60px]"
          : "flex items-start justify-center",
        className
      )}
    >
      <motion.div
        layout
        className={cn(
          "bg-background text-foreground overflow-hidden z-50 cursor-pointer border border-accent/50",
          isOpen ? "rounded-3xl" : "rounded-full",
          variant === "overlay" ? "absolute top-0 left-0" : "relative"
        )}
        initial={false}
        animate={{
          width: isOpen ? 320 : 160,
          height: isOpen ? 380 : 60,
          borderRadius: isOpen ? 24 : 24,
        }}
        transition={{
          width: {
            delay: isOpen ? 0 : 0.3,
            type: "spring",
            stiffness: 260,
            damping: 20,
          },
          height: {
            delay: isOpen ? 0.2 : 0,
            type: "spring",
            stiffness: 260,
            damping: 20,
          },
          borderRadius: {
            delay: isOpen ? 0 : 0.3,
            type: "spring",
            stiffness: 260,
            damping: 20,
          },
          layout: { duration: 0.3 },
        }}
        onClick={() => !isOpen && setIsOpen(true)}
      >
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="collapsed"
              className="absolute inset-0 flex items-center justify-center w-full h-full"
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <div className="flex items-center gap-3 px-4 w-full">
                <Avatar.Root className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full overflow-hidden bg-muted">
                  <Avatar.Image
                    src={imageSrc}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                  <Avatar.Fallback className="text-[10px] text-foreground">
                    {name.slice(0, 2).toUpperCase()}
                  </Avatar.Fallback>
                </Avatar.Root>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-sm font-medium text-foreground truncate">
                    {name}
                  </span>
                  <span className="text-[10px] text-muted-foreground truncate">
                    @{username}
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground ml-auto" />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="expanded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.2 }}
              className="flex flex-col h-full relative p-6 cursor-default"
            >
              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
                className="absolute top-4 right-4 p-1 rounded-full bg-muted/50 hover:bg-muted transition-colors z-10"
                aria-label="Close profile"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>

              {/* Scrollable Content */}
              <div className="flex flex-col items-center w-full h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                {/* Profile Header */}
                <div className="flex flex-col items-center mt-4 flex-shrink-0">
                  <motion.div
                    layoutId="avatar"
                    className="w-24 h-24 rounded-full overflow-hidden border-4 border-muted/20 shadow-lg mb-4"
                  >
                    <img
                      src={imageSrc}
                      alt={name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  <motion.h3
                    layoutId="name"
                    className="text-xl font-bold text-foreground text-center"
                  >
                    {name}
                  </motion.h3>

                  <motion.p
                    layoutId="username"
                    className="text-muted-foreground text-sm font-medium text-center"
                  >
                    @{username}
                  </motion.p>
                </div>

                {/* Custom Content */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-6 w-full flex-1"
                >
                  {children}
                </motion.div>
                 {/* Bottom Action */}
                 <motion.div
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.3 }}
                   className="mt-4 w-full pt-4 sticky bottom-0 bg-gradient-to-t from-background via-background to-transparent p-1"
                 >
                   <button
                     className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
                     onClick={(e) => {
                        e.stopPropagation();
                     }}
                   >
                     View Full Profile
                   </button>
                 </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
7:T1ae6,"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, X } from "lucide-react";
import { useState } from "react";

export interface NativeProfileNotchProps {
  /**
   * Url of the user image
   */
  imageSrc: string;
  /**
   * Name of the user
   */
  name: string;
  /**
   * Handle or role of the user
   */
  username: string;
  /**
   * Custom content to show in expanded state
   */
  children?: React.ReactNode;
  /**
   * Size of the notch
   * @default "md"
   */
  size?: "sm" | "md" | "lg";
  /**
   * Class name for the container
   */
  className?: string;
  /**
    * Variant of the notch.
    * "default": expands and pushes content.
    * "overlay": expands over content (absolute positioning).
    * @default "default"
    */
  variant?: "default" | "overlay";
}

export function NativeProfileNotch({
  imageSrc,
  name,
  username,
  children,
  size = "md",
  className,
  variant = "default",
}: NativeProfileNotchProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn(
        variant === "overlay"
          ? "relative flex items-center justify-center w-[160px] h-[60px]"
          : "flex items-start justify-center",
        className
      )}
    >
      <motion.div
        layout
        className={cn(
          "bg-background text-foreground overflow-hidden z-50 cursor-pointer border border-accent/60",
          isOpen ? "rounded-3xl" : "rounded-full",
          variant === "overlay" ? "absolute top-0 left-0" : "relative"
        )}
        initial={false}
        animate={{
          width: isOpen ? 320 : 160,
          height: isOpen ? 380 : 60,
          borderRadius: isOpen ? 24 : 24,
        }}
        transition={{
          width: {
            delay: isOpen ? 0 : 0.3,
            type: "spring",
            stiffness: 260,
            damping: 20,
          },
          height: {
            delay: isOpen ? 0.2 : 0,
            type: "spring",
            stiffness: 260,
            damping: 20,
          },
          borderRadius: {
            delay: isOpen ? 0 : 0.3,
            type: "spring",
            stiffness: 260,
            damping: 20,
          },
          layout: { duration: 0.3 },
        }}
        onClick={() => !isOpen && setIsOpen(true)}
      >
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="collapsed"
              className="absolute inset-0 flex items-center justify-center w-full h-full"
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <div className="flex items-center gap-3 px-4 w-full">
                <Avatar className="w-8 h-8 flex-shrink-0">
                  <AvatarImage
                    src={imageSrc}
                    alt={name}
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-muted text-[10px] text-foreground">
                    {name.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-sm font-medium text-foreground truncate">
                    {name}
                  </span>
                  <span className="text-[10px] text-muted-foreground truncate">
                    @{username}
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground ml-auto" />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="expanded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.2 }}
              className="flex flex-col h-full relative p-6 cursor-default"
            >
              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
                className="absolute top-4 right-4 p-1 rounded-full bg-muted/50 hover:bg-muted transition-colors z-10"
                aria-label="Close profile"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>

              {/* Scrollable Content */}
              <div className="flex flex-col items-center w-full h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                {/* Profile Header */}
                <div className="flex flex-col items-center mt-4 flex-shrink-0">
                  <motion.div
                    layoutId="avatar"
                    className="w-24 h-24 rounded-full overflow-hidden border-4 border-muted/20 shadow-lg mb-4"
                  >
                    <img
                      src={imageSrc}
                      alt={name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  <motion.h3
                    layoutId="name"
                    className="text-xl font-bold text-foreground text-center"
                  >
                    {name}
                  </motion.h3>

                  <motion.p
                    layoutId="username"
                    className="text-muted-foreground text-sm font-medium text-center"
                  >
                    @{username}
                  </motion.p>
                </div>

                {/* Custom Content */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-6 w-full flex-1"
                >
                  {children}
                </motion.div>

                {/* Bottom Action */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-4 w-full pt-4 sticky bottom-0 bg-gradient-to-t from-background via-background to-transparent p-1"
                >
                  <button
                    className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
                    onClick={(e) => {
                       e.stopPropagation();
                    }}
                  >
                    View Full Profile
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
8:Tbc1,"use client";

import { NativeProfileNotch } from "@/components/native/base-ui/native-profile-notch-baseui";

export function NativeProfileNotchDefault() {
  return (
    <div className="h-[500px] w-full flex items-center justify-center bg-gray-50/50 dark:bg-neutral-900/50 rounded-xl relative">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
      <NativeProfileNotch
        imageSrc="https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtoUjLg4dAryGEidskK72wBCQA6DNcZH4Xh5b8"
        name="Base UI"
        username="base-ui"
      >
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="flex flex-col items-center p-3 rounded-xl bg-primary-accent/5 border border-primary-accent/5">
            <span className="text-xs text-primary-accent/40 uppercase tracking-wider font-semibold">
              Role
            </span>
            <span className="text-sm text-primary-accent font-medium mt-1 text-center">
              Maintainer
            </span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-xl bg-primary-accent/5 border border-primary-accent/5">
            <span className="text-xs text-primary-accent/40 uppercase tracking-wider font-semibold">
              Commits
            </span>
            <span className="text-sm text-primary-accent font-medium mt-1 text-center">
              1,240
            </span>
          </div>
        </div>
      </NativeProfileNotch>
    </div>
  );
}

export function NativeProfileNotchOverlay() {
  return (
    <div className="h-[500px] w-full flex items-center justify-center bg-gray-50/50 dark:bg-neutral-900/50 rounded-xl relative">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />

      {/* Background content to demonstrate overlay behavior */}
      <div className="flex flex-col gap-4 max-w-sm text-center z-0 px-4">
        <h3 className="text-2xl font-bold text-foreground">Content Below Profile</h3>
        <p className="text-muted-foreground">
          This content stays in place when the profile expands because the notch uses absolute positioning.
          Try clicking the profile above!
        </p>
        <div className="grid grid-cols-2 gap-4 mt-4">
           <div className="h-24 bg-muted/50 rounded-lg" />
           <div className="h-24 bg-muted/50 rounded-lg" />
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <NativeProfileNotch
          variant="overlay"
          imageSrc="https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtoUjLg4dAryGEidskK72wBCQA6DNcZH4Xh5b8"
          name="Base UI"
          username="base-ui"
        >
          <div className="border-t border-primary-accent/10 pt-4 mt-2">
            <p className="text-sm text-primary-accent/70 text-center italic">
              "Overlay variant example."
            </p>
          </div>
        </NativeProfileNotch>
      </div>
    </div>
  );
}
9:Tb63,"use client";

import { NativeProfileNotch } from "@/components/native/shadcn-ui/native-profile-notch-shadcnui";

export function NativeProfileNotchDefault() {
  return (
    <div className="h-[500px] w-full flex items-center justify-center bg-gray-50/50 dark:bg-neutral-900/50 rounded-xl relative">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
      <NativeProfileNotch
        imageSrc="https://github.com/shadcn.png"
        name="Shadcn"
        username="shadcn"
      >
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="flex flex-col items-center p-3 rounded-xl bg-primary-accent/5 border border-primary-accent/5">
            <span className="text-xs text-primary-accent/40 uppercase tracking-wider font-semibold">
              Role
            </span>
            <span className="text-sm text-primary-accent font-medium mt-1 text-center">
              Maintainer
            </span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-xl bg-primary-accent/5 border border-primary-accent/5">
            <span className="text-xs text-primary-accent/40 uppercase tracking-wider font-semibold">
              Commits
            </span>
            <span className="text-sm text-primary-accent font-medium mt-1 text-center">
              1,240
            </span>
          </div>
        </div>
      </NativeProfileNotch>
    </div>
  );
}

export function NativeProfileNotchOverlay() {
  return (
    <div className="h-[500px] w-full flex items-center justify-center bg-gray-50/50 dark:bg-neutral-900/50 rounded-xl relative">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />

      {/* Background content to demonstrate overlay behavior */}
      <div className="flex flex-col gap-4 max-w-sm text-center z-0 px-4">
        <h3 className="text-2xl font-bold text-foreground">Content Below Profile</h3>
        <p className="text-muted-foreground">
          This content stays in place when the profile expands because the notch uses absolute positioning.
          Try clicking the profile above!
        </p>
        <div className="grid grid-cols-2 gap-4 mt-4">
           <div className="h-24 bg-muted/50 rounded-lg" />
           <div className="h-24 bg-muted/50 rounded-lg" />
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <NativeProfileNotch
          variant="overlay"
          imageSrc="https://github.com/shadcn.png"
          name="Shadcn"
          username="shadcn"
        >
          <div className="border-t border-primary-accent/10 pt-4 mt-2">
            <p className="text-sm text-primary-accent/70 text-center italic">
              "Overlay variant example."
            </p>
          </div>
        </NativeProfileNotch>
      </div>
    </div>
  );
}
0:{"buildId":"bFBIq5AO28jMw9-shWxSc","rsc":["$","$1","c",{"children":[["$","$L2",null,{"code":"$3","relatedComponents":[{"id":"default","name":"Default","description":"Standard profile notch","component":"$4","code":"<NativeProfileNotch\n  imageSrc=\"https://github.com/shadcn.png\"\n  name=\"Shadcn\"\n  username=\"shadcn\"\n>\n  <div className=\"grid grid-cols-2 gap-4 w-full\">\n    <div className=\"flex flex-col items-center\">\n      <span className=\"text-xs text-primary-foreground/40\">Role</span>\n      <span className=\"text-sm font-medium\">Maintainer</span>\n    </div>\n    <div className=\"flex flex-col items-center\">\n      <span className=\"text-xs text-primary-foreground/40\">Commits</span>\n      <span className=\"text-sm font-medium\">1,240</span>\n    </div>\n  </div>\n</NativeProfileNotch>"},{"id":"overlay","name":"Overlay","description":"Profile notch with overlay positioning","component":"$5","code":"<NativeProfileNotch\n  variant=\"overlay\"\n  imageSrc=\"https://github.com/shadcn.png\"\n  name=\"Shadcn\"\n  username=\"shadcn\"\n>\n  <div className=\"border-t border-primary-foreground/10 pt-4 mt-2\">\n    <p className=\"text-sm text-primary-foreground/70 text-center italic\">\n      \"Overlay variant example.\"\n    </p>\n  </div>\n</NativeProfileNotch>"}],"variantCodes":{"default":"<NativeProfileNotch\n  imageSrc=\"https://github.com/shadcn.png\"\n  name=\"Shadcn\"\n  username=\"shadcn\"\n>\n  <div className=\"grid grid-cols-2 gap-4 w-full\">\n    <div className=\"flex flex-col items-center\">\n      <span className=\"text-xs text-primary-foreground/40\">Role</span>\n      <span className=\"text-sm font-medium\">Maintainer</span>\n    </div>\n    <div className=\"flex flex-col items-center\">\n      <span className=\"text-xs text-primary-foreground/40\">Commits</span>\n      <span className=\"text-sm font-medium\">1,240</span>\n    </div>\n  </div>\n</NativeProfileNotch>","overlay":"<NativeProfileNotch\n  variant=\"overlay\"\n  imageSrc=\"https://github.com/shadcn.png\"\n  name=\"Shadcn\"\n  username=\"shadcn\"\n>\n  <div className=\"border-t border-primary-foreground/10 pt-4 mt-2\">\n    <p className=\"text-sm text-primary-foreground/70 text-center italic\">\n      \"Overlay variant example.\"\n    </p>\n  </div>\n</NativeProfileNotch>"},"baseId":"native-profile-notch","baseuiCode":"$6","shadcnuiCode":"$7","baseuiDemoCode":"$8","shadcnuiDemoCode":"$9"}],["$La","$Lb","$Lc"],"$Ld"]}],"loading":null,"isPartial":false}
a:["$","script","script-0",{"src":"/_next/static/chunks/caa50e77cf52fdaa.js","async":true}]
b:["$","script","script-1",{"src":"/_next/static/chunks/e0bc9c3a4105a6fe.js","async":true}]
c:["$","script","script-2",{"src":"/_next/static/chunks/48913bc585f72fa4.js","async":true}]
d:["$","$Le",null,{"children":["$","$f",null,{"name":"Next.MetadataOutlet","children":"$@10"}]}]
10:null
