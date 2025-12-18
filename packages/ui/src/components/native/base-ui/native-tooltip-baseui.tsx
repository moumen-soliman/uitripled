"use client";

import { Tooltip } from "@base-ui/react/tooltip";
import { motion } from "framer-motion";
import * as React from "react";

import { cn } from "@uitripled/ui/lib/utils";

const NativeTooltipProvider = ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
);

const NativeTooltipRoot = Tooltip.Root;

const NativeTooltipTrigger = Tooltip.Trigger;

const NativeTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Tooltip.Popup> & {
    animation?: "blur" | "scale";
    sideOffset?: number;
  }
>(
  (
    { className, sideOffset = 8, children, animation = "blur", ...props },
    ref
  ) => {
    const animations = {
      blur: {
        initial: { opacity: 0, scale: 0.9, filter: "blur(4px)" },
        animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
        transition: { type: "spring", duration: 0.4, bounce: 0 } as any,
      },
      scale: {
        initial: { opacity: 0, scale: 0.5, y: 10 },
        animate: { opacity: 1, scale: 1, y: 0 },
        transition: { type: "spring", duration: 0.4, bounce: 0.4 } as any,
      },
    };

    const selectedAnimation = animations[animation];

    return (
      <Tooltip.Portal>
        <Tooltip.Positioner>
          <Tooltip.Popup
            ref={ref}
            // @ts-ignore
            offset={sideOffset}
            className={cn("z-50 overflow-visible bg-transparent", className)}
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
                exit={selectedAnimation.initial}
                transition={selectedAnimation.transition}
                className="rounded-md border border-white/10 bg-black/80 dark:bg-white/90 backdrop-blur-md px-3 py-1.5 text-xs font-medium text-white dark:text-black shadow-lg"
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
  animation?: "blur" | "scale";
  openDelay?: number;
}) => {
  if (content) {
    return (
      // @ts-ignore
      <NativeTooltipRoot openDelay={openDelay} {...props}>
        <NativeTooltipTrigger
          render={(triggerProps, state) => (
            <div {...triggerProps} className="inline-block">
              {children as React.ReactNode}
            </div>
          )}
        />
        <NativeTooltipContent animation={animation}>
          {content}
        </NativeTooltipContent>
      </NativeTooltipRoot>
    );
  }

  return (
    // @ts-ignore
    <NativeTooltipRoot openDelay={openDelay} {...props}>
      {children}
    </NativeTooltipRoot>
  );
};

export {
  NativeTooltip,
  NativeTooltipContent,
  NativeTooltipProvider,
  NativeTooltipTrigger,
};
