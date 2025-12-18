1:"$Sreact.fragment"
2:I[176430,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"default"]
4:I[782162,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"NativeNotificationBellDefault"]
5:I[782162,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"NativeNotificationBellEmpty"]
6:I[782162,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"NativeNotificationBellCustomIcon"]
11:I[897367,["/_next/static/chunks/d96012bcfc98706a.js","/_next/static/chunks/c1216787d4b31b65.js"],"OutletBoundary"]
12:"$Sreact.suspense"
3:Tc82,"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Bell } from "lucide-react";
import { useEffect, useState } from "react";

export interface NativeNotificationBellProps {
  /**
   * Number of notifications to display.
   * Default: 0
   */
  count?: number;
  /**
   * Whether to show the notification badge.
   * Automatically true if count > 0.
   */
  showBadge?: boolean;
  /**
   * Callback when the bell is clicked.
   */
  onClick?: () => void;
  /**
   * Callback when the bell rings (on mount if has notifications).
   */
  onRing?: () => void;
  /**
   * Custom icon to replace the bell.
   */
  icon?: React.ReactNode;
  /**
   * Size variant.
   * Default: 'md'
   */
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
};

const iconSizeClasses = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

const badgeSizeClasses = {
  sm: "h-4 w-4 text-[10px]",
  md: "h-5 w-5 text-xs",
  lg: "h-6 w-6 text-sm",
};

const ringVariants: Variants = {
  idle: { rotate: 0 },
  ringing: {
    rotate: [0, -15, 15, -10, 10, -5, 5, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

export function NativeNotificationBell({
  count = 0,
  showBadge,
  onClick,
  onRing,
  icon,
  size = "md",
  className,
}: NativeNotificationBellProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isRinging, setIsRinging] = useState(false);
  const hasNotifications = count > 0 || showBadge;

  useEffect(() => {
    if (hasNotifications && !shouldReduceMotion) {
      setIsRinging(true);
      const timer = setTimeout(() => setIsRinging(false), 600);
      onRing?.();
      return () => clearTimeout(timer);
    }
  }, [hasNotifications, shouldReduceMotion, onRing]);

  const displayCount = count > 99 ? "99+" : count > 9 ? "9+" : count;

  return (
    <div className="relative inline-block">
      <motion.button
        variants={ringVariants}
        animate={isRinging ? "ringing" : "idle"}
        whileHover={shouldReduceMotion ? undefined : { scale: 1.1 }}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
        onClick={onClick}
        className={cn(
          "relative flex items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          sizeClasses[size],
          className
        )}
        aria-label={`Notifications${count > 0 ? `, ${count} unread` : ""}`}
      >
        {icon ?? <Bell className={iconSizeClasses[size]} />}
        {hasNotifications && (
          <motion.span
            initial={shouldReduceMotion ? { scale: 1 } : { scale: 0 }}
            animate={{ scale: 1 }}
            className={cn(
              "absolute -right-1 -top-1 flex items-center justify-center rounded-full bg-destructive font-bold text-destructive-foreground",
              badgeSizeClasses[size]
            )}
          >
            {count > 0 ? displayCount : ""}
          </motion.span>
        )}
      </motion.button>
    </div>
  );
}
7:Tc82,"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Bell } from "lucide-react";
import { useEffect, useState } from "react";

export interface NativeNotificationBellProps {
  /**
   * Number of notifications to display.
   * Default: 0
   */
  count?: number;
  /**
   * Whether to show the notification badge.
   * Automatically true if count > 0.
   */
  showBadge?: boolean;
  /**
   * Callback when the bell is clicked.
   */
  onClick?: () => void;
  /**
   * Callback when the bell rings (on mount if has notifications).
   */
  onRing?: () => void;
  /**
   * Custom icon to replace the bell.
   */
  icon?: React.ReactNode;
  /**
   * Size variant.
   * Default: 'md'
   */
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
};

const iconSizeClasses = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

const badgeSizeClasses = {
  sm: "h-4 w-4 text-[10px]",
  md: "h-5 w-5 text-xs",
  lg: "h-6 w-6 text-sm",
};

const ringVariants: Variants = {
  idle: { rotate: 0 },
  ringing: {
    rotate: [0, -15, 15, -10, 10, -5, 5, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

export function NativeNotificationBell({
  count = 0,
  showBadge,
  onClick,
  onRing,
  icon,
  size = "md",
  className,
}: NativeNotificationBellProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isRinging, setIsRinging] = useState(false);
  const hasNotifications = count > 0 || showBadge;

  useEffect(() => {
    if (hasNotifications && !shouldReduceMotion) {
      setIsRinging(true);
      const timer = setTimeout(() => setIsRinging(false), 600);
      onRing?.();
      return () => clearTimeout(timer);
    }
  }, [hasNotifications, shouldReduceMotion, onRing]);

  const displayCount = count > 99 ? "99+" : count > 9 ? "9+" : count;

  return (
    <div className="relative inline-block">
      <motion.button
        variants={ringVariants}
        animate={isRinging ? "ringing" : "idle"}
        whileHover={shouldReduceMotion ? undefined : { scale: 1.1 }}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
        onClick={onClick}
        className={cn(
          "relative flex items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          sizeClasses[size],
          className
        )}
        aria-label={`Notifications${count > 0 ? `, ${count} unread` : ""}`}
      >
        {icon ?? <Bell className={iconSizeClasses[size]} />}
        {hasNotifications && (
          <motion.span
            initial={shouldReduceMotion ? { scale: 1 } : { scale: 0 }}
            animate={{ scale: 1 }}
            className={cn(
              "absolute -right-1 -top-1 flex items-center justify-center rounded-full bg-destructive font-bold text-destructive-foreground",
              badgeSizeClasses[size]
            )}
          >
            {count > 0 ? displayCount : ""}
          </motion.span>
        )}
      </motion.button>
    </div>
  );
}
8:Tc82,"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Bell } from "lucide-react";
import { useEffect, useState } from "react";

export interface NativeNotificationBellProps {
  /**
   * Number of notifications to display.
   * Default: 0
   */
  count?: number;
  /**
   * Whether to show the notification badge.
   * Automatically true if count > 0.
   */
  showBadge?: boolean;
  /**
   * Callback when the bell is clicked.
   */
  onClick?: () => void;
  /**
   * Callback when the bell rings (on mount if has notifications).
   */
  onRing?: () => void;
  /**
   * Custom icon to replace the bell.
   */
  icon?: React.ReactNode;
  /**
   * Size variant.
   * Default: 'md'
   */
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
};

const iconSizeClasses = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

const badgeSizeClasses = {
  sm: "h-4 w-4 text-[10px]",
  md: "h-5 w-5 text-xs",
  lg: "h-6 w-6 text-sm",
};

const ringVariants: Variants = {
  idle: { rotate: 0 },
  ringing: {
    rotate: [0, -15, 15, -10, 10, -5, 5, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

export function NativeNotificationBell({
  count = 0,
  showBadge,
  onClick,
  onRing,
  icon,
  size = "md",
  className,
}: NativeNotificationBellProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isRinging, setIsRinging] = useState(false);
  const hasNotifications = count > 0 || showBadge;

  useEffect(() => {
    if (hasNotifications && !shouldReduceMotion) {
      setIsRinging(true);
      const timer = setTimeout(() => setIsRinging(false), 600);
      onRing?.();
      return () => clearTimeout(timer);
    }
  }, [hasNotifications, shouldReduceMotion, onRing]);

  const displayCount = count > 99 ? "99+" : count > 9 ? "9+" : count;

  return (
    <div className="relative inline-block">
      <motion.button
        variants={ringVariants}
        animate={isRinging ? "ringing" : "idle"}
        whileHover={shouldReduceMotion ? undefined : { scale: 1.1 }}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
        onClick={onClick}
        className={cn(
          "relative flex items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          sizeClasses[size],
          className
        )}
        aria-label={`Notifications${count > 0 ? `, ${count} unread` : ""}`}
      >
        {icon ?? <Bell className={iconSizeClasses[size]} />}
        {hasNotifications && (
          <motion.span
            initial={shouldReduceMotion ? { scale: 1 } : { scale: 0 }}
            animate={{ scale: 1 }}
            className={cn(
              "absolute -right-1 -top-1 flex items-center justify-center rounded-full bg-destructive font-bold text-destructive-foreground",
              badgeSizeClasses[size]
            )}
          >
            {count > 0 ? displayCount : ""}
          </motion.span>
        )}
      </motion.button>
    </div>
  );
}
9:Tc82,"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Bell } from "lucide-react";
import { useEffect, useState } from "react";

export interface NativeNotificationBellProps {
  /**
   * Number of notifications to display.
   * Default: 0
   */
  count?: number;
  /**
   * Whether to show the notification badge.
   * Automatically true if count > 0.
   */
  showBadge?: boolean;
  /**
   * Callback when the bell is clicked.
   */
  onClick?: () => void;
  /**
   * Callback when the bell rings (on mount if has notifications).
   */
  onRing?: () => void;
  /**
   * Custom icon to replace the bell.
   */
  icon?: React.ReactNode;
  /**
   * Size variant.
   * Default: 'md'
   */
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
};

const iconSizeClasses = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

const badgeSizeClasses = {
  sm: "h-4 w-4 text-[10px]",
  md: "h-5 w-5 text-xs",
  lg: "h-6 w-6 text-sm",
};

const ringVariants: Variants = {
  idle: { rotate: 0 },
  ringing: {
    rotate: [0, -15, 15, -10, 10, -5, 5, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

export function NativeNotificationBell({
  count = 0,
  showBadge,
  onClick,
  onRing,
  icon,
  size = "md",
  className,
}: NativeNotificationBellProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isRinging, setIsRinging] = useState(false);
  const hasNotifications = count > 0 || showBadge;

  useEffect(() => {
    if (hasNotifications && !shouldReduceMotion) {
      setIsRinging(true);
      const timer = setTimeout(() => setIsRinging(false), 600);
      onRing?.();
      return () => clearTimeout(timer);
    }
  }, [hasNotifications, shouldReduceMotion, onRing]);

  const displayCount = count > 99 ? "99+" : count > 9 ? "9+" : count;

  return (
    <div className="relative inline-block">
      <motion.button
        variants={ringVariants}
        animate={isRinging ? "ringing" : "idle"}
        whileHover={shouldReduceMotion ? undefined : { scale: 1.1 }}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
        onClick={onClick}
        className={cn(
          "relative flex items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          sizeClasses[size],
          className
        )}
        aria-label={`Notifications${count > 0 ? `, ${count} unread` : ""}`}
      >
        {icon ?? <Bell className={iconSizeClasses[size]} />}
        {hasNotifications && (
          <motion.span
            initial={shouldReduceMotion ? { scale: 1 } : { scale: 0 }}
            animate={{ scale: 1 }}
            className={cn(
              "absolute -right-1 -top-1 flex items-center justify-center rounded-full bg-destructive font-bold text-destructive-foreground",
              badgeSizeClasses[size]
            )}
          >
            {count > 0 ? displayCount : ""}
          </motion.span>
        )}
      </motion.button>
    </div>
  );
}
a:T636,"use client";

import { NativeNotificationBell } from "@/components/native/base-ui/native-notification-bell-baseui";
import { MessageSquare } from "lucide-react";

export function NativeNotificationBellDefault() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeNotificationBell count={3} />
    </div>
  );
}

export function NativeNotificationBellEmpty() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeNotificationBell count={0} />
    </div>
  );
}

export function NativeNotificationBellCustomIcon() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeNotificationBell
        count={5}
        icon={<MessageSquare className="h-5 w-5" />}
      />
    </div>
  );
}

export function NativeNotificationBellDemo() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="space-y-2 text-center">
          <h3 className="font-semibold text-muted-foreground text-sm">
            With Count
          </h3>
          <NativeNotificationBellDefault />
        </div>
        <div className="space-y-2 text-center">
          <h3 className="font-semibold text-muted-foreground text-sm">Empty</h3>
          <NativeNotificationBellEmpty />
        </div>
        <div className="space-y-2 text-center">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Custom Icon
          </h3>
          <NativeNotificationBellCustomIcon />
        </div>
      </div>
    </div>
  );
}
b:T63a,"use client";

import { NativeNotificationBell } from "@/components/native/shadcn-ui/native-notification-bell-shadcnui";
import { MessageSquare } from "lucide-react";

export function NativeNotificationBellDefault() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeNotificationBell count={3} />
    </div>
  );
}

export function NativeNotificationBellEmpty() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeNotificationBell count={0} />
    </div>
  );
}

export function NativeNotificationBellCustomIcon() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeNotificationBell
        count={5}
        icon={<MessageSquare className="h-5 w-5" />}
      />
    </div>
  );
}

export function NativeNotificationBellDemo() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="space-y-2 text-center">
          <h3 className="font-semibold text-muted-foreground text-sm">
            With Count
          </h3>
          <NativeNotificationBellDefault />
        </div>
        <div className="space-y-2 text-center">
          <h3 className="font-semibold text-muted-foreground text-sm">Empty</h3>
          <NativeNotificationBellEmpty />
        </div>
        <div className="space-y-2 text-center">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Custom Icon
          </h3>
          <NativeNotificationBellCustomIcon />
        </div>
      </div>
    </div>
  );
}
c:T63a,"use client";

import { NativeNotificationBell } from "@/components/native/shadcn-ui/native-notification-bell-shadcnui";
import { MessageSquare } from "lucide-react";

export function NativeNotificationBellDefault() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeNotificationBell count={3} />
    </div>
  );
}

export function NativeNotificationBellEmpty() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeNotificationBell count={0} />
    </div>
  );
}

export function NativeNotificationBellCustomIcon() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeNotificationBell
        count={5}
        icon={<MessageSquare className="h-5 w-5" />}
      />
    </div>
  );
}

export function NativeNotificationBellDemo() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="space-y-2 text-center">
          <h3 className="font-semibold text-muted-foreground text-sm">
            With Count
          </h3>
          <NativeNotificationBellDefault />
        </div>
        <div className="space-y-2 text-center">
          <h3 className="font-semibold text-muted-foreground text-sm">Empty</h3>
          <NativeNotificationBellEmpty />
        </div>
        <div className="space-y-2 text-center">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Custom Icon
          </h3>
          <NativeNotificationBellCustomIcon />
        </div>
      </div>
    </div>
  );
}
0:{"buildId":"bFBIq5AO28jMw9-shWxSc","rsc":["$","$1","c",{"children":[["$","$L2",null,{"code":"$3","relatedComponents":[{"id":"default","name":"With Count","description":"Bell with notification count","component":"$4","code":"<NativeNotificationBell count={3} />"},{"id":"empty","name":"Empty","description":"Bell without notifications","component":"$5","code":"<NativeNotificationBell count={0} />"},{"id":"custom-icon","name":"Custom Icon","description":"Bell with custom icon","component":"$6","code":"<NativeNotificationBell count={5} icon={<MessageSquare className=\"h-5 w-5\" />} />"}],"variantCodes":{"default":"<NativeNotificationBell count={3} />","empty":"<NativeNotificationBell count={0} />","custom-icon":"<NativeNotificationBell count={5} icon={<MessageSquare className=\"h-5 w-5\" />} />"},"baseId":"native-notification-bell","baseuiCode":"$7","shadcnuiCode":"$8","carbonCode":"$9","baseuiDemoCode":"$a","shadcnuiDemoCode":"$b","carbonDemoCode":"$c"}],["$Ld","$Le","$Lf"],"$L10"]}],"loading":null,"isPartial":false}
d:["$","script","script-0",{"src":"/_next/static/chunks/caa50e77cf52fdaa.js","async":true}]
e:["$","script","script-1",{"src":"/_next/static/chunks/e0bc9c3a4105a6fe.js","async":true}]
f:["$","script","script-2",{"src":"/_next/static/chunks/48913bc585f72fa4.js","async":true}]
10:["$","$L11",null,{"children":["$","$12",null,{"name":"Next.MetadataOutlet","children":"$@13"}]}]
13:null
