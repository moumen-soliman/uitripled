1:"$Sreact.fragment"
2:I[176430,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"default"]
4:I[858584,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"NativeTooltipBlur"]
5:I[858584,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"NativeTooltipScale"]
c:I[897367,["/_next/static/chunks/d96012bcfc98706a.js","/_next/static/chunks/c1216787d4b31b65.js"],"OutletBoundary"]
d:"$Sreact.suspense"
3:Tada,"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";
import * as React from "react";

import { cn } from "@/lib/utils";

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
    animation?: "blur" | "scale";
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
            className="rounded-md border border-white/10 bg-black/80 dark:bg-white/90 backdrop-blur-md px-3 py-1.5 text-xs font-medium text-white dark:text-black shadow-lg"
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
  animation?: "blur" | "scale";
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
6:Tc98,"use client";

import { Tooltip } from "@base-ui/react/tooltip";
import { motion } from "framer-motion";
import * as React from "react";

import { cn } from "@/lib/utils";

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
7:Tada,"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";
import * as React from "react";

import { cn } from "@/lib/utils";

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
    animation?: "blur" | "scale";
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
            className="rounded-md border border-white/10 bg-black/80 dark:bg-white/90 backdrop-blur-md px-3 py-1.5 text-xs font-medium text-white dark:text-black shadow-lg"
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
  animation?: "blur" | "scale";
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
0:{"buildId":"bFBIq5AO28jMw9-shWxSc","rsc":["$","$1","c",{"children":[["$","$L2",null,{"code":"$3","relatedComponents":[{"id":"blur","name":"Blur Animation","description":"Subtle blur and fade animation (Default)","component":"$4","code":"<NativeTooltipProvider>\n  <NativeTooltip content=\"This is a smooth tooltip\">\n    <NativeButton variant=\"outline\">Default (Blur)</NativeButton>\n  </NativeTooltip>\n</NativeTooltipProvider>"},{"id":"scale","name":"Scale Animation","description":"Playful pop and scale animation","component":"$5","code":"<NativeTooltipProvider>\n  <NativeTooltip content=\"This pops!\" animation=\"scale\">\n    <NativeButton variant=\"outline\">Scale Animation</NativeButton>\n  </NativeTooltip>\n</NativeTooltipProvider>"}],"variantCodes":{"blur":"<NativeTooltipProvider>\n  <NativeTooltip content=\"This is a smooth tooltip\">\n    <NativeButton variant=\"outline\">Default (Blur)</NativeButton>\n  </NativeTooltip>\n</NativeTooltipProvider>","scale":"<NativeTooltipProvider>\n  <NativeTooltip content=\"This pops!\" animation=\"scale\">\n    <NativeButton variant=\"outline\">Scale Animation</NativeButton>\n  </NativeTooltip>\n</NativeTooltipProvider>"},"baseId":"native-tooltip","baseuiCode":"$6","shadcnuiCode":"$7","baseuiDemoCode":"\"use client\";\n\nimport { NativeButton } from \"@/components/native/base-ui/native-button-baseui\";\nimport {\n  NativeTooltip,\n  NativeTooltipProvider,\n} from \"@/components/native/base-ui/native-tooltip-baseui\";\n\nexport function NativeTooltipBlur() {\n  return (\n    <NativeTooltipProvider>\n      <NativeTooltip content=\"This is a smooth tooltip\">\n        <NativeButton variant=\"outline\">Default (Blur)</NativeButton>\n      </NativeTooltip>\n    </NativeTooltipProvider>\n  );\n}\n\nexport function NativeTooltipScale() {\n  return (\n    <NativeTooltipProvider>\n      <NativeTooltip content=\"This pops!\" animation=\"scale\">\n        <NativeButton variant=\"outline\">Scale Animation</NativeButton>\n      </NativeTooltip>\n    </NativeTooltipProvider>\n  );\n}\n\nexport function NativeTooltipDemo() {\n  return (\n    <div className=\"flex items-center gap-4\">\n      <NativeTooltipBlur />\n      <NativeTooltipScale />\n    </div>\n  );\n}\n","shadcnuiDemoCode":"\"use client\";\n\nimport { NativeButton } from \"@/components/native/base-ui/native-button-baseui\";\nimport {\n  NativeTooltip,\n  NativeTooltipProvider,\n} from \"@/components/native/shadcn-ui/native-tooltip-shadcnui\";\n\nexport function NativeTooltipBlur() {\n  return (\n    <NativeTooltipProvider>\n      <NativeTooltip content=\"This is a smooth tooltip\">\n        <NativeButton variant=\"outline\">Default (Blur)</NativeButton>\n      </NativeTooltip>\n    </NativeTooltipProvider>\n  );\n}\n\nexport function NativeTooltipScale() {\n  return (\n    <NativeTooltipProvider>\n      <NativeTooltip content=\"This pops!\" animation=\"scale\">\n        <NativeButton variant=\"outline\">Scale Animation</NativeButton>\n      </NativeTooltip>\n    </NativeTooltipProvider>\n  );\n}\n\nexport function NativeTooltipDemo() {\n  return (\n    <div className=\"flex items-center gap-4\">\n      <NativeTooltipBlur />\n      <NativeTooltipScale />\n    </div>\n  );\n}\n"}],["$L8","$L9","$La"],"$Lb"]}],"loading":null,"isPartial":false}
8:["$","script","script-0",{"src":"/_next/static/chunks/caa50e77cf52fdaa.js","async":true}]
9:["$","script","script-1",{"src":"/_next/static/chunks/e0bc9c3a4105a6fe.js","async":true}]
a:["$","script","script-2",{"src":"/_next/static/chunks/48913bc585f72fa4.js","async":true}]
b:["$","$Lc",null,{"children":["$","$d",null,{"name":"Next.MetadataOutlet","children":"$@e"}]}]
e:null
