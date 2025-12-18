1:"$Sreact.fragment"
2:I[176430,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"default"]
4:I[716660,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"NativeCounterUpDefault"]
5:I[716660,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"NativeCounterUpCurrency"]
6:I[716660,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"NativeCounterUpPercentage"]
e:I[897367,["/_next/static/chunks/d96012bcfc98706a.js","/_next/static/chunks/c1216787d4b31b65.js"],"OutletBoundary"]
f:"$Sreact.suspense"
3:T90f,"use client";

import { cn } from "@/lib/utils";
import { animate, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export interface NativeCounterUpProps {
  /**
   * The target number to count up to.
   */
  value: number;
  /**
   * Duration of the animation in seconds.
   * Default: 2
   */
  duration?: number;
  /**
   * Text to display before the number (e.g., "$").
   */
  prefix?: string;
  /**
   * Text to display after the number (e.g., "+", "%").
   */
  suffix?: string;
  /**
   * Number of decimal places to show.
   * Default: 0
   */
  decimals?: number;
  /**
   * Accessible label describing what the counter represents.
   */
  label?: string;
  /**
   * Whether to start the animation on mount.
   * Default: true
   */
  autoStart?: boolean;
  className?: string;
}

export function NativeCounterUp({
  value,
  duration = 2,
  prefix = "",
  suffix = "",
  decimals = 0,
  label,
  autoStart = true,
  className,
}: NativeCounterUpProps) {
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!autoStart) return;

    // If reduced motion, just set the value immediately
    if (shouldReduceMotion) {
      setDisplayValue(value);
      return;
    }

    // Animate from current value to target value
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1], // Smooth expo-out easing
      onUpdate: (latest) => {
        setDisplayValue(
          decimals > 0 ? Number(latest.toFixed(decimals)) : Math.round(latest)
        );
      },
    });

    return () => controls.stop();
  }, [value, duration, autoStart, shouldReduceMotion, decimals]);

  const formattedValue = displayValue.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn("tabular-nums font-bold", className)}
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      {prefix}
      {formattedValue}
      {suffix}
      {label && <span className="sr-only">{label}</span>}
    </motion.span>
  );
}
7:T90f,"use client";

import { cn } from "@/lib/utils";
import { animate, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export interface NativeCounterUpProps {
  /**
   * The target number to count up to.
   */
  value: number;
  /**
   * Duration of the animation in seconds.
   * Default: 2
   */
  duration?: number;
  /**
   * Text to display before the number (e.g., "$").
   */
  prefix?: string;
  /**
   * Text to display after the number (e.g., "+", "%").
   */
  suffix?: string;
  /**
   * Number of decimal places to show.
   * Default: 0
   */
  decimals?: number;
  /**
   * Accessible label describing what the counter represents.
   */
  label?: string;
  /**
   * Whether to start the animation on mount.
   * Default: true
   */
  autoStart?: boolean;
  className?: string;
}

export function NativeCounterUp({
  value,
  duration = 2,
  prefix = "",
  suffix = "",
  decimals = 0,
  label,
  autoStart = true,
  className,
}: NativeCounterUpProps) {
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!autoStart) return;

    // If reduced motion, just set the value immediately
    if (shouldReduceMotion) {
      setDisplayValue(value);
      return;
    }

    // Animate from current value to target value
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1], // Smooth expo-out easing
      onUpdate: (latest) => {
        setDisplayValue(
          decimals > 0 ? Number(latest.toFixed(decimals)) : Math.round(latest)
        );
      },
    });

    return () => controls.stop();
  }, [value, duration, autoStart, shouldReduceMotion, decimals]);

  const formattedValue = displayValue.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn("tabular-nums font-bold", className)}
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      {prefix}
      {formattedValue}
      {suffix}
      {label && <span className="sr-only">{label}</span>}
    </motion.span>
  );
}
8:T90f,"use client";

import { cn } from "@/lib/utils";
import { animate, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export interface NativeCounterUpProps {
  /**
   * The target number to count up to.
   */
  value: number;
  /**
   * Duration of the animation in seconds.
   * Default: 2
   */
  duration?: number;
  /**
   * Text to display before the number (e.g., "$").
   */
  prefix?: string;
  /**
   * Text to display after the number (e.g., "+", "%").
   */
  suffix?: string;
  /**
   * Number of decimal places to show.
   * Default: 0
   */
  decimals?: number;
  /**
   * Accessible label describing what the counter represents.
   */
  label?: string;
  /**
   * Whether to start the animation on mount.
   * Default: true
   */
  autoStart?: boolean;
  className?: string;
}

export function NativeCounterUp({
  value,
  duration = 2,
  prefix = "",
  suffix = "",
  decimals = 0,
  label,
  autoStart = true,
  className,
}: NativeCounterUpProps) {
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!autoStart) return;

    // If reduced motion, just set the value immediately
    if (shouldReduceMotion) {
      setDisplayValue(value);
      return;
    }

    // Animate from current value to target value
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1], // Smooth expo-out easing
      onUpdate: (latest) => {
        setDisplayValue(
          decimals > 0 ? Number(latest.toFixed(decimals)) : Math.round(latest)
        );
      },
    });

    return () => controls.stop();
  }, [value, duration, autoStart, shouldReduceMotion, decimals]);

  const formattedValue = displayValue.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn("tabular-nums font-bold", className)}
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      {prefix}
      {formattedValue}
      {suffix}
      {label && <span className="sr-only">{label}</span>}
    </motion.span>
  );
}
9:T6bb,"use client";

import { NativeCounterUp } from "@/components/native/carbon/native-counter-up-carbon";

export function NativeCounterUpDefault() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeCounterUp value={1000} className="text-4xl text-foreground" />
    </div>
  );
}

export function NativeCounterUpCurrency() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeCounterUp
        value={9999.99}
        prefix="$"
        decimals={2}
        className="text-4xl text-primary"
        label="Total revenue"
      />
    </div>
  );
}

export function NativeCounterUpPercentage() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeCounterUp
        value={87}
        suffix="%"
        duration={1.5}
        className="text-4xl text-green-500"
        label="Success rate"
      />
    </div>
  );
}

export function NativeCounterUpDemo() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="space-y-2 text-center">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Default
          </h3>
          <NativeCounterUpDefault />
        </div>
        <div className="space-y-2 text-center">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Currency
          </h3>
          <NativeCounterUpCurrency />
        </div>
        <div className="space-y-2 text-center">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Percentage
          </h3>
          <NativeCounterUpPercentage />
        </div>
      </div>
    </div>
  );
}
0:{"buildId":"bFBIq5AO28jMw9-shWxSc","rsc":["$","$1","c",{"children":[["$","$L2",null,{"code":"$3","relatedComponents":[{"id":"default","name":"Default","description":"Simple counter","component":"$4","code":"<NativeCounterUp value={1000} className=\"text-4xl\" />"},{"id":"currency","name":"Currency","description":"Counter with prefix and decimals","component":"$5","code":"<NativeCounterUp value={9999.99} prefix=\"$\" decimals={2} />"},{"id":"percentage","name":"Percentage","description":"Counter with suffix","component":"$6","code":"<NativeCounterUp value={87} suffix=\"%\" duration={1.5} />"}],"variantCodes":{"default":"<NativeCounterUp value={1000} className=\"text-4xl\" />","currency":"<NativeCounterUp value={9999.99} prefix=\"$\" decimals={2} />","percentage":"<NativeCounterUp value={87} suffix=\"%\" duration={1.5} />"},"baseId":"native-counter-up","shadcnuiCode":"$7","carbonCode":"$8","carbonDemoCode":"$9"}],["$La","$Lb","$Lc"],"$Ld"]}],"loading":null,"isPartial":false}
a:["$","script","script-0",{"src":"/_next/static/chunks/caa50e77cf52fdaa.js","async":true}]
b:["$","script","script-1",{"src":"/_next/static/chunks/e0bc9c3a4105a6fe.js","async":true}]
c:["$","script","script-2",{"src":"/_next/static/chunks/48913bc585f72fa4.js","async":true}]
d:["$","$Le",null,{"children":["$","$f",null,{"name":"Next.MetadataOutlet","children":"$@10"}]}]
10:null
