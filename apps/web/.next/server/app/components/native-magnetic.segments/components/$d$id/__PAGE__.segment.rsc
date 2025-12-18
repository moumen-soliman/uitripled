1:"$Sreact.fragment"
2:I[176430,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"default"]
4:I[810849,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"NativeMagneticDefault"]
5:I[810849,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"NativeMagneticLink"]
6:I[810849,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"NativeMagneticStrong"]
11:I[897367,["/_next/static/chunks/d96012bcfc98706a.js","/_next/static/chunks/c1216787d4b31b65.js"],"OutletBoundary"]
12:"$Sreact.suspense"
3:Tbd7,"use client";

import { cn } from "@/lib/utils";
import {
  motion,
  Transition,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

export interface NativeMagneticProps {
  /**
   * Content to apply the magnetic effect to.
   */
  children: React.ReactNode;
  /**
   * Strength of the magnetic pull (0-1 range recommended).
   * Default: 0.3
   */
  strength?: number;
  /**
   * Spring stiffness for the animation.
   * Default: 300
   */
  stiffness?: number;
  /**
   * Spring damping for the animation.
   * Default: 30
   */
  damping?: number;
  /**
   * Whether to scale up on hover.
   * Default: true
   */
  scaleOnHover?: boolean;
  /**
   * Wrapper element type.
   * Default: 'div'
   */
  as?: "div" | "button" | "a";
  /**
   * Link href (only applies when as="a").
   */
  href?: string;
  /**
   * Click handler.
   */
  onClick?: () => void;
  className?: string;
}

const springTransition: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 25,
};

export function NativeMagnetic({
  children,
  strength = 0.3,
  stiffness = 300,
  damping = 30,
  scaleOnHover = true,
  as = "div",
  href,
  onClick,
  className,
}: NativeMagneticProps) {
  const ref = useRef<HTMLElement>(null);
  const [, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness, damping };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const translateX = useTransform(springX, (v) => v * strength);
  const translateY = useTransform(springY, (v) => v * strength);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const commonProps = {
    onMouseMove: handleMouseMove,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: handleMouseLeave,
    style: {
      x: translateX,
      y: translateY,
    },
    whileHover: scaleOnHover ? { scale: 1.05 } : undefined,
    whileTap: { scale: 0.95 },
    transition: springTransition,
    className: cn("inline-block cursor-pointer", className),
    onClick,
  };

  if (as === "a" && href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        {...commonProps}
      >
        {children}
      </motion.a>
    );
  }

  if (as === "button") {
    return (
      <motion.button
        ref={ref as React.RefObject<HTMLButtonElement>}
        type="button"
        {...commonProps}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <motion.div ref={ref as React.RefObject<HTMLDivElement>} {...commonProps}>
      {children}
    </motion.div>
  );
}
7:Td30,"use client";

import { cn } from "@/lib/utils";
import { Button } from "@base-ui/react/button";
import {
  motion,
  Transition,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

export interface NativeMagneticProps {
  /**
   * Content to apply the magnetic effect to.
   */
  children: React.ReactNode;
  /**
   * Strength of the magnetic pull (0-1 range recommended).
   * Default: 0.3
   */
  strength?: number;
  /**
   * Spring stiffness for the animation.
   * Default: 300
   */
  stiffness?: number;
  /**
   * Spring damping for the animation.
   * Default: 30
   */
  damping?: number;
  /**
   * Whether to scale up on hover.
   * Default: true
   */
  scaleOnHover?: boolean;
  /**
   * Wrapper element type.
   * Default: 'div'
   */
  as?: "div" | "button" | "a";
  /**
   * Link href (only applies when as="a").
   */
  href?: string;
  /**
   * Click handler.
   */
  onClick?: () => void;
  className?: string;
}

const springTransition: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 25,
};

export function NativeMagnetic({
  children,
  strength = 0.3,
  stiffness = 300,
  damping = 30,
  scaleOnHover = true,
  as = "div",
  href,
  onClick,
  className,
}: NativeMagneticProps) {
  const ref = useRef<HTMLElement>(null);
  const [, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness, damping };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const translateX = useTransform(springX, (v) => v * strength);
  const translateY = useTransform(springY, (v) => v * strength);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const commonMotionProps = {
    onMouseMove: handleMouseMove,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: handleMouseLeave,
    style: {
      x: translateX,
      y: translateY,
    },
    whileHover: scaleOnHover ? { scale: 1.05 } : undefined,
    whileTap: { scale: 0.95 },
    transition: springTransition,
  };

  if (as === "a" && href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={cn("inline-block cursor-pointer", className)}
        onClick={onClick}
        {...commonMotionProps}
      >
        {children}
      </motion.a>
    );
  }

  if (as === "button") {
    const MotionButton = motion(Button);
    return (
      <MotionButton
        ref={ref as React.RefObject<HTMLButtonElement>}
        // @ts-ignore
        type="button"
        className={cn("inline-block cursor-pointer", className)}
        onClick={onClick}
        {...commonMotionProps}
      >
        {children}
      </MotionButton>
    );
  }

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn("inline-block cursor-pointer", className)}
      onClick={onClick}
      {...commonMotionProps}
    >
      {children}
    </motion.div>
  );
}
8:Td35,"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  motion,
  Transition,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

export interface NativeMagneticProps {
  /**
   * Content to apply the magnetic effect to.
   */
  children: React.ReactNode;
  /**
   * Strength of the magnetic pull (0-1 range recommended).
   * Default: 0.3
   */
  strength?: number;
  /**
   * Spring stiffness for the animation.
   * Default: 300
   */
  stiffness?: number;
  /**
   * Spring damping for the animation.
   * Default: 30
   */
  damping?: number;
  /**
   * Whether to scale up on hover.
   * Default: true
   */
  scaleOnHover?: boolean;
  /**
   * Wrapper element type.
   * Default: 'div'
   */
  as?: "div" | "button" | "a";
  /**
   * Link href (only applies when as="a").
   */
  href?: string;
  /**
   * Click handler.
   */
  onClick?: () => void;
  className?: string;
}

const springTransition: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 25,
};

export function NativeMagnetic({
  children,
  strength = 0.3,
  stiffness = 300,
  damping = 30,
  scaleOnHover = true,
  as = "div",
  href,
  onClick,
  className,
}: NativeMagneticProps) {
  const ref = useRef<HTMLElement>(null);
  const [, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness, damping };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const translateX = useTransform(springX, (v) => v * strength);
  const translateY = useTransform(springY, (v) => v * strength);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const commonMotionProps = {
    onMouseMove: handleMouseMove,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: handleMouseLeave,
    style: {
      x: translateX,
      y: translateY,
    },
    whileHover: scaleOnHover ? { scale: 1.05 } : undefined,
    whileTap: { scale: 0.95 },
    transition: springTransition,
  };

  if (as === "a" && href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={cn("inline-block cursor-pointer", className)}
        onClick={onClick}
        {...commonMotionProps}
      >
        {children}
      </motion.a>
    );
  }

  if (as === "button") {
    const MotionButton = motion(Button);
    return (
      <MotionButton
        ref={ref as React.RefObject<HTMLButtonElement>}
        type="button"
        variant="default"
        className={cn("inline-block cursor-pointer", className)}
        onClick={onClick}
        {...commonMotionProps}
      >
        {children}
      </MotionButton>
    );
  }

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn("inline-block cursor-pointer", className)}
      onClick={onClick}
      {...commonMotionProps}
    >
      {children}
    </motion.div>
  );
}
9:Tbd7,"use client";

import { cn } from "@/lib/utils";
import {
  motion,
  Transition,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

export interface NativeMagneticProps {
  /**
   * Content to apply the magnetic effect to.
   */
  children: React.ReactNode;
  /**
   * Strength of the magnetic pull (0-1 range recommended).
   * Default: 0.3
   */
  strength?: number;
  /**
   * Spring stiffness for the animation.
   * Default: 300
   */
  stiffness?: number;
  /**
   * Spring damping for the animation.
   * Default: 30
   */
  damping?: number;
  /**
   * Whether to scale up on hover.
   * Default: true
   */
  scaleOnHover?: boolean;
  /**
   * Wrapper element type.
   * Default: 'div'
   */
  as?: "div" | "button" | "a";
  /**
   * Link href (only applies when as="a").
   */
  href?: string;
  /**
   * Click handler.
   */
  onClick?: () => void;
  className?: string;
}

const springTransition: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 25,
};

export function NativeMagnetic({
  children,
  strength = 0.3,
  stiffness = 300,
  damping = 30,
  scaleOnHover = true,
  as = "div",
  href,
  onClick,
  className,
}: NativeMagneticProps) {
  const ref = useRef<HTMLElement>(null);
  const [, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness, damping };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const translateX = useTransform(springX, (v) => v * strength);
  const translateY = useTransform(springY, (v) => v * strength);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const commonProps = {
    onMouseMove: handleMouseMove,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: handleMouseLeave,
    style: {
      x: translateX,
      y: translateY,
    },
    whileHover: scaleOnHover ? { scale: 1.05 } : undefined,
    whileTap: { scale: 0.95 },
    transition: springTransition,
    className: cn("inline-block cursor-pointer", className),
    onClick,
  };

  if (as === "a" && href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        {...commonProps}
      >
        {children}
      </motion.a>
    );
  }

  if (as === "button") {
    return (
      <motion.button
        ref={ref as React.RefObject<HTMLButtonElement>}
        type="button"
        {...commonProps}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <motion.div ref={ref as React.RefObject<HTMLDivElement>} {...commonProps}>
      {children}
    </motion.div>
  );
}
a:T71e,"use client";

import { NativeButton } from "@/components/native/base-ui/native-button-baseui";
import { NativeMagnetic } from "@/components/native/base-ui/native-magnetic-baseui";

export function NativeMagneticDefault() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeMagnetic>
        <NativeButton>Magnetic Button</NativeButton>
      </NativeMagnetic>
    </div>
  );
}

export function NativeMagneticLink() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeMagnetic
        as="a"
        href="#"
        className="text-primary underline underline-offset-4 font-medium"
      >
        Magnetic Link
      </NativeMagnetic>
    </div>
  );
}

export function NativeMagneticStrong() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeMagnetic strength={0.6}>
        <div className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium">
          Strong Pull (0.6)
        </div>
      </NativeMagnetic>
    </div>
  );
}

export function NativeMagneticDemo() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="space-y-2 text-center">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Button
          </h3>
          <NativeMagneticDefault />
        </div>
        <div className="space-y-2 text-center">
          <h3 className="font-semibold text-muted-foreground text-sm">Link</h3>
          <NativeMagneticLink />
        </div>
        <div className="space-y-2 text-center">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Strong Pull
          </h3>
          <NativeMagneticStrong />
        </div>
      </div>
    </div>
  );
}
b:T6f6,"use client";

import { NativeMagnetic } from "@/components/native/shadcn-ui/native-magnetic-shadcnui";
import { Button } from "@/components/ui/button";

export function NativeMagneticDefault() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeMagnetic>
        <Button>Magnetic Button</Button>
      </NativeMagnetic>
    </div>
  );
}

export function NativeMagneticLink() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeMagnetic
        as="a"
        href="#"
        className="text-primary underline underline-offset-4 font-medium"
      >
        Magnetic Link
      </NativeMagnetic>
    </div>
  );
}

export function NativeMagneticStrong() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeMagnetic strength={0.6}>
        <div className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium">
          Strong Pull (0.6)
        </div>
      </NativeMagnetic>
    </div>
  );
}

export function NativeMagneticDemo() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="space-y-2 text-center">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Button
          </h3>
          <NativeMagneticDefault />
        </div>
        <div className="space-y-2 text-center">
          <h3 className="font-semibold text-muted-foreground text-sm">Link</h3>
          <NativeMagneticLink />
        </div>
        <div className="space-y-2 text-center">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Strong Pull
          </h3>
          <NativeMagneticStrong />
        </div>
      </div>
    </div>
  );
}
c:T6f6,"use client";

import { NativeMagnetic } from "@/components/native/shadcn-ui/native-magnetic-shadcnui";
import { Button } from "@/components/ui/button";

export function NativeMagneticDefault() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeMagnetic>
        <Button>Magnetic Button</Button>
      </NativeMagnetic>
    </div>
  );
}

export function NativeMagneticLink() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeMagnetic
        as="a"
        href="#"
        className="text-primary underline underline-offset-4 font-medium"
      >
        Magnetic Link
      </NativeMagnetic>
    </div>
  );
}

export function NativeMagneticStrong() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeMagnetic strength={0.6}>
        <div className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium">
          Strong Pull (0.6)
        </div>
      </NativeMagnetic>
    </div>
  );
}

export function NativeMagneticDemo() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="space-y-2 text-center">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Button
          </h3>
          <NativeMagneticDefault />
        </div>
        <div className="space-y-2 text-center">
          <h3 className="font-semibold text-muted-foreground text-sm">Link</h3>
          <NativeMagneticLink />
        </div>
        <div className="space-y-2 text-center">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Strong Pull
          </h3>
          <NativeMagneticStrong />
        </div>
      </div>
    </div>
  );
}
0:{"buildId":"bFBIq5AO28jMw9-shWxSc","rsc":["$","$1","c",{"children":[["$","$L2",null,{"code":"$3","relatedComponents":[{"id":"default","name":"Button","description":"Magnetic effect on a button","component":"$4","code":"<NativeMagnetic>\n  <Button>Magnetic Button</Button>\n</NativeMagnetic>"},{"id":"link","name":"Link","description":"Magnetic effect on a link","component":"$5","code":"<NativeMagnetic as=\"a\" href=\"/about\">\n  About Us\n</NativeMagnetic>"},{"id":"strong","name":"Strong Pull","description":"Increased magnetic strength","component":"$6","code":"<NativeMagnetic strength={0.6}>\n  <div className=\"px-6 py-3 bg-primary text-primary-foreground rounded-lg\">\n    Strong Pull\n  </div>\n</NativeMagnetic>"}],"variantCodes":{"default":"<NativeMagnetic>\n  <Button>Magnetic Button</Button>\n</NativeMagnetic>","link":"<NativeMagnetic as=\"a\" href=\"/about\">\n  About Us\n</NativeMagnetic>","strong":"<NativeMagnetic strength={0.6}>\n  <div className=\"px-6 py-3 bg-primary text-primary-foreground rounded-lg\">\n    Strong Pull\n  </div>\n</NativeMagnetic>"},"baseId":"native-magnetic","baseuiCode":"$7","shadcnuiCode":"$8","carbonCode":"$9","baseuiDemoCode":"$a","shadcnuiDemoCode":"$b","carbonDemoCode":"$c"}],["$Ld","$Le","$Lf"],"$L10"]}],"loading":null,"isPartial":false}
d:["$","script","script-0",{"src":"/_next/static/chunks/caa50e77cf52fdaa.js","async":true}]
e:["$","script","script-1",{"src":"/_next/static/chunks/e0bc9c3a4105a6fe.js","async":true}]
f:["$","script","script-2",{"src":"/_next/static/chunks/48913bc585f72fa4.js","async":true}]
10:["$","$L11",null,{"children":["$","$12",null,{"name":"Next.MetadataOutlet","children":"$@13"}]}]
13:null
