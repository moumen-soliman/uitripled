"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { motion, useReducedMotion } from "framer-motion";
import * as React from "react";

import { cn } from "@/lib/utils";

type TooltipAnimation = "blur" | "scale";

const animations = {
  blur: {
    initial: { opacity: 0, scale: 0.95, filter: "blur(4px)" },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
    transition: { type: "spring" as const, duration: 0.3, bounce: 0 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.9, y: 4 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: { type: "spring" as const, duration: 0.3, bounce: 0.3 },
  },
};

const reducedAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.15 },
};

const NativeTooltipProvider = ({
  delayDuration = 100,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) => (
  <TooltipPrimitive.Provider delayDuration={delayDuration} {...props} />
);

const NativeTooltipRoot = TooltipPrimitive.Root;

const NativeTooltipTrigger = TooltipPrimitive.Trigger;

const NativeTooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & {
    animation?: TooltipAnimation;
  }
>(
  (
    { className, sideOffset = 8, children, animation = "blur", ...props },
    ref
  ) => {
    const shouldReduceMotion = useReducedMotion();
    const selectedAnimation = shouldReduceMotion
      ? reducedAnimation
      : animations[animation];

    return (
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          ref={ref}
          sideOffset={sideOffset}
          className={cn("z-50 overflow-visible bg-transparent", className)}
          {...props}
        >
          <motion.div
            initial={selectedAnimation.initial}
            animate={selectedAnimation.animate}
            transition={selectedAnimation.transition}
            style={{
              transformOrigin:
                "var(--radix-tooltip-content-transform-origin)",
            }}
            className="rounded-md border border-white/10 bg-black/80 px-3 py-1.5 text-xs font-medium text-balance text-white shadow-lg backdrop-blur-md dark:border-black/10 dark:bg-white/90 dark:text-black"
          >
            {children}
          </motion.div>
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    );
  }
);
NativeTooltipContent.displayName = TooltipPrimitive.Content.displayName;

const NativeTooltip = ({
  content,
  children,
  animation,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root> & {
  content?: React.ReactNode;
  animation?: TooltipAnimation;
}) => {
  if (content) {
    return (
      <NativeTooltipRoot {...props}>
        <NativeTooltipTrigger asChild>{children}</NativeTooltipTrigger>
        <NativeTooltipContent animation={animation}>
          {content}
        </NativeTooltipContent>
      </NativeTooltipRoot>
    );
  }

  return <NativeTooltipRoot {...props}>{children}</NativeTooltipRoot>;
};

export {
  NativeTooltip,
  NativeTooltipContent,
  NativeTooltipProvider,
  NativeTooltipTrigger,
};
