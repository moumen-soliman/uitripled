"use client";

import { Tooltip } from "@base-ui/react/tooltip";
import { motion, useReducedMotion } from "framer-motion";
import * as React from "react";

import { cn } from "@uitripled/utils";

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
  delay = 100,
  ...props
}: React.ComponentProps<typeof Tooltip.Provider>) => (
  <Tooltip.Provider delay={delay} {...props} />
);

const NativeTooltipRoot = Tooltip.Root;

const NativeTooltipTrigger = Tooltip.Trigger;

const NativeTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Tooltip.Popup> & {
    animation?: TooltipAnimation;
    sideOffset?: number;
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
      <Tooltip.Portal>
        <Tooltip.Positioner sideOffset={sideOffset} className="z-50">
          <Tooltip.Popup
            ref={ref}
            className={cn("overflow-visible bg-transparent", className)}
            {...props}
            render={(popupProps, state) => (
              <motion.div
                {...(popupProps as any)}
                initial={selectedAnimation.initial}
                animate={
                  state.open
                    ? selectedAnimation.animate
                    : selectedAnimation.initial
                }
                transition={selectedAnimation.transition}
                style={{
                  ...(popupProps as React.HTMLAttributes<HTMLDivElement>)
                    .style,
                  transformOrigin: "var(--transform-origin)",
                }}
                className="rounded-md border border-white/10 bg-black/80 px-3 py-1.5 text-xs font-medium text-balance text-white shadow-lg backdrop-blur-md dark:border-black/10 dark:bg-white/90 dark:text-black"
              >
                {children}
              </motion.div>
            )}
          />
        </Tooltip.Positioner>
      </Tooltip.Portal>
    );
  }
);
NativeTooltipContent.displayName = "NativeTooltipContent";

const NativeTooltip = ({
  content,
  children,
  animation,
  openDelay = 100,
  ...props
}: React.ComponentProps<typeof Tooltip.Root> & {
  content?: React.ReactNode;
  animation?: TooltipAnimation;
  openDelay?: number;
}) => {
  if (content) {
    return (
      <NativeTooltipRoot {...props}>
        <NativeTooltipTrigger
          delay={openDelay}
          render={
            React.isValidElement(children) ? (
              (children as React.ReactElement<Record<string, unknown>>)
            ) : (
              <span tabIndex={0} className="inline-block">
                {children as React.ReactNode}
              </span>
            )
          }
        />
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
