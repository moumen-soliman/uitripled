1:"$Sreact.fragment"
2:I[176430,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"default"]
a:I[897367,["/_next/static/chunks/d96012bcfc98706a.js","/_next/static/chunks/c1216787d4b31b65.js"],"OutletBoundary"]
b:"$Sreact.suspense"
3:T1b62,"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { CreditCard as CreditCardIcon } from "lucide-react";
import { useMemo, useState } from "react";
interface CreditCardProps {
  cardNumber?: string;
  cardholderName?: string;
  expiryDate?: string;
  cvv?: string;
}

const gradients = {
  front:
    "linear-gradient(145deg, hsl(var(--primary) / 0.45), hsl(var(--primary) / 0.18))",
  back: "linear-gradient(145deg, hsl(var(--primary) / 0.45), hsl(var(--primary) / 0.18))",
};

const overlayLights = [
  "radial-gradient(circle at 20% 30%, hsl(var(--foreground) / 0.12), transparent 55%)",
  "radial-gradient(circle at 80% 20%, hsl(var(--primary) / 0.22), transparent 60%)",
  "radial-gradient(circle at 50% 80%, hsl(var(--accent) / 0.28), transparent 65%)",
];

export function CreditCard({
  cardNumber = "4532 1234 5678 9010",
  cardholderName = "JORDAN PARK",
  expiryDate = "09/27",
  cvv = "123",
}: CreditCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), {
    stiffness: 280,
    damping: 28,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), {
    stiffness: 280,
    damping: 28,
  });

  const shouldReduceMotion = useReducedMotion();

  const overlayGradient = useMemo(() => overlayLights.join(","), []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const formatCardNumber = (number: string) => {
    return number.replace(/(.{4})/g, "$1 ").trim();
  };

  return (
    <div className="flex items-center justify-center p-8 perspective-1000">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsFlipped(!isFlipped)}
        className="relative h-[240px] w-[380px] cursor-pointer"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={shouldReduceMotion ? undefined : { scale: 1.015 }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
      >
        <div className="absolute inset-0 rounded-[1.5rem] bg-foreground/10 blur-2xl" />
        {/* Front */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-between rounded-[1.5rem] p-6 shadow-[0_22px_55px_-30px_rgba(15,23,42,0.75)]"
          style={{
            background: gradients.front,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[1.5rem]"
            style={{
              background: overlayGradient,
              opacity: shouldReduceMotion ? 0.5 : 1,
            }}
          />
          <div className="relative flex items-start justify-between">
            <div className="relative">
              <div className="flex h-12 w-14 items-center justify-center rounded-lg border border-border/60 bg-foreground/15 backdrop-blur">
                <div className="h-8 w-10 rounded-md border border-border/40 bg-background/60" />
              </div>
              <div className="absolute -bottom-1 left-0 right-0 h-1 rounded-full bg-foreground/10" />
            </div>
          </div>

          <div className="relative space-y-2">
            <span className="text-[10px] uppercase tracking-[0.42em] text-muted-foreground/70">
              Card Number
            </span>
            <p className="font-mono text-2xl tracking-[0.4em] text-foreground/90">
              {formatCardNumber(cardNumber)}
            </p>
          </div>

          <div className="relative flex items-end justify-between">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-[0.36em] text-muted-foreground/70">
                Cardholder
              </span>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-foreground/85">
                {cardholderName}
              </p>
            </div>
            <div className="space-y-1 text-right">
              <span className="text-[10px] uppercase tracking-[0.36em] text-muted-foreground/70">
                Expires
              </span>
              <p className="text-sm font-semibold text-foreground/85">
                {expiryDate}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Back */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-between rounded-[1.5rem] p-6 shadow-[0_22px_55px_-30px_rgba(15,23,42,0.75)]"
          style={{
            background: gradients.back,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            rotateY: 180,
          }}
          animate={{ rotateY: isFlipped ? 0 : 180 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[1.5rem]"
            style={{
              background: overlayGradient,
              opacity: shouldReduceMotion ? 0.5 : 0.9,
            }}
          />
          <div
            className="absolute left-0 right-0 top-8 h-12 rounded-sm bg-foreground/10"
            aria-hidden
          />

          <div className="relative mt-16 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground/70">
                CVV
              </span>
              <span className="flex min-w-[80px] items-center justify-center rounded-md border border-border/50 bg-muted px-3 py-1 font-mono text-lg font-semibold text-foreground shadow-[0_6px_18px_-12px_rgba(15,23,42,0.6)]">
                {cvv}
              </span>
            </div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground/60">
              Contact support if you notice unauthorized activity.
            </p>
          </div>

          <div className="relative flex items-center justify-end">
            <CreditCardIcon
              className="h-6 w-6 text-muted-foreground/70"
              aria-hidden
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
4:T1b75,"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { CreditCard as CreditCardIcon } from "lucide-react";
import { useMemo, useState } from "react";

interface CreditCardBaseUIProps {
  cardNumber?: string;
  cardholderName?: string;
  expiryDate?: string;
  cvv?: string;
}

const gradients = {
  front:
    "linear-gradient(145deg, hsl(var(--primary) / 0.45), hsl(var(--primary) / 0.18))",
  back: "linear-gradient(145deg, hsl(var(--primary) / 0.45), hsl(var(--primary) / 0.18))",
};

const overlayLights = [
  "radial-gradient(circle at 20% 30%, hsl(var(--foreground) / 0.12), transparent 55%)",
  "radial-gradient(circle at 80% 20%, hsl(var(--primary) / 0.22), transparent 60%)",
  "radial-gradient(circle at 50% 80%, hsl(var(--accent) / 0.28), transparent 65%)",
];

export function CreditCardBaseUI({
  cardNumber = "4532 1234 5678 9010",
  cardholderName = "JORDAN PARK",
  expiryDate = "09/27",
  cvv = "123",
}: CreditCardBaseUIProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), {
    stiffness: 280,
    damping: 28,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), {
    stiffness: 280,
    damping: 28,
  });

  const shouldReduceMotion = useReducedMotion();

  const overlayGradient = useMemo(() => overlayLights.join(","), []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const formatCardNumber = (number: string) => {
    return number.replace(/(.{4})/g, "$1 ").trim();
  };

  return (
    <div className="flex items-center justify-center p-8 perspective-1000">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsFlipped(!isFlipped)}
        className="relative h-[240px] w-[380px] cursor-pointer"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={shouldReduceMotion ? undefined : { scale: 1.015 }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
      >
        <div className="absolute inset-0 rounded-[1.5rem] bg-foreground/10 blur-2xl" />
        {/* Front */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-between rounded-[1.5rem] p-6 shadow-[0_22px_55px_-30px_rgba(15,23,42,0.75)]"
          style={{
            background: gradients.front,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[1.5rem]"
            style={{
              background: overlayGradient,
              opacity: shouldReduceMotion ? 0.5 : 1,
            }}
          />
          <div className="relative flex items-start justify-between">
            <div className="relative">
              <div className="flex h-12 w-14 items-center justify-center rounded-lg border border-border/60 bg-foreground/15 backdrop-blur">
                <div className="h-8 w-10 rounded-md border border-border/40 bg-background/60" />
              </div>
              <div className="absolute -bottom-1 left-0 right-0 h-1 rounded-full bg-foreground/10" />
            </div>
          </div>

          <div className="relative space-y-2">
            <span className="text-[10px] uppercase tracking-[0.42em] text-muted-foreground/70">
              Card Number
            </span>
            <p className="font-mono text-2xl tracking-[0.4em] text-foreground/90">
              {formatCardNumber(cardNumber)}
            </p>
          </div>

          <div className="relative flex items-end justify-between">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-[0.36em] text-muted-foreground/70">
                Cardholder
              </span>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-foreground/85">
                {cardholderName}
              </p>
            </div>
            <div className="space-y-1 text-right">
              <span className="text-[10px] uppercase tracking-[0.36em] text-muted-foreground/70">
                Expires
              </span>
              <p className="text-sm font-semibold text-foreground/85">
                {expiryDate}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Back */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-between rounded-[1.5rem] p-6 shadow-[0_22px_55px_-30px_rgba(15,23,42,0.75)]"
          style={{
            background: gradients.back,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            rotateY: 180,
          }}
          animate={{ rotateY: isFlipped ? 0 : 180 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[1.5rem]"
            style={{
              background: overlayGradient,
              opacity: shouldReduceMotion ? 0.5 : 0.9,
            }}
          />
          <div
            className="absolute left-0 right-0 top-8 h-12 rounded-sm bg-foreground/10"
            aria-hidden
          />

          <div className="relative mt-16 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground/70">
                CVV
              </span>
              <span className="flex min-w-[80px] items-center justify-center rounded-md border border-border/50 bg-muted px-3 py-1 font-mono text-lg font-semibold text-foreground shadow-[0_6px_18px_-12px_rgba(15,23,42,0.6)]">
                {cvv}
              </span>
            </div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground/60">
              Contact support if you notice unauthorized activity.
            </p>
          </div>

          <div className="relative flex items-center justify-end">
            <CreditCardIcon
              className="h-6 w-6 text-muted-foreground/70"
              aria-hidden
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
5:T1b62,"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { CreditCard as CreditCardIcon } from "lucide-react";
import { useMemo, useState } from "react";
interface CreditCardProps {
  cardNumber?: string;
  cardholderName?: string;
  expiryDate?: string;
  cvv?: string;
}

const gradients = {
  front:
    "linear-gradient(145deg, hsl(var(--primary) / 0.45), hsl(var(--primary) / 0.18))",
  back: "linear-gradient(145deg, hsl(var(--primary) / 0.45), hsl(var(--primary) / 0.18))",
};

const overlayLights = [
  "radial-gradient(circle at 20% 30%, hsl(var(--foreground) / 0.12), transparent 55%)",
  "radial-gradient(circle at 80% 20%, hsl(var(--primary) / 0.22), transparent 60%)",
  "radial-gradient(circle at 50% 80%, hsl(var(--accent) / 0.28), transparent 65%)",
];

export function CreditCard({
  cardNumber = "4532 1234 5678 9010",
  cardholderName = "JORDAN PARK",
  expiryDate = "09/27",
  cvv = "123",
}: CreditCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), {
    stiffness: 280,
    damping: 28,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), {
    stiffness: 280,
    damping: 28,
  });

  const shouldReduceMotion = useReducedMotion();

  const overlayGradient = useMemo(() => overlayLights.join(","), []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const formatCardNumber = (number: string) => {
    return number.replace(/(.{4})/g, "$1 ").trim();
  };

  return (
    <div className="flex items-center justify-center p-8 perspective-1000">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsFlipped(!isFlipped)}
        className="relative h-[240px] w-[380px] cursor-pointer"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={shouldReduceMotion ? undefined : { scale: 1.015 }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
      >
        <div className="absolute inset-0 rounded-[1.5rem] bg-foreground/10 blur-2xl" />
        {/* Front */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-between rounded-[1.5rem] p-6 shadow-[0_22px_55px_-30px_rgba(15,23,42,0.75)]"
          style={{
            background: gradients.front,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[1.5rem]"
            style={{
              background: overlayGradient,
              opacity: shouldReduceMotion ? 0.5 : 1,
            }}
          />
          <div className="relative flex items-start justify-between">
            <div className="relative">
              <div className="flex h-12 w-14 items-center justify-center rounded-lg border border-border/60 bg-foreground/15 backdrop-blur">
                <div className="h-8 w-10 rounded-md border border-border/40 bg-background/60" />
              </div>
              <div className="absolute -bottom-1 left-0 right-0 h-1 rounded-full bg-foreground/10" />
            </div>
          </div>

          <div className="relative space-y-2">
            <span className="text-[10px] uppercase tracking-[0.42em] text-muted-foreground/70">
              Card Number
            </span>
            <p className="font-mono text-2xl tracking-[0.4em] text-foreground/90">
              {formatCardNumber(cardNumber)}
            </p>
          </div>

          <div className="relative flex items-end justify-between">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-[0.36em] text-muted-foreground/70">
                Cardholder
              </span>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-foreground/85">
                {cardholderName}
              </p>
            </div>
            <div className="space-y-1 text-right">
              <span className="text-[10px] uppercase tracking-[0.36em] text-muted-foreground/70">
                Expires
              </span>
              <p className="text-sm font-semibold text-foreground/85">
                {expiryDate}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Back */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-between rounded-[1.5rem] p-6 shadow-[0_22px_55px_-30px_rgba(15,23,42,0.75)]"
          style={{
            background: gradients.back,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            rotateY: 180,
          }}
          animate={{ rotateY: isFlipped ? 0 : 180 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[1.5rem]"
            style={{
              background: overlayGradient,
              opacity: shouldReduceMotion ? 0.5 : 0.9,
            }}
          />
          <div
            className="absolute left-0 right-0 top-8 h-12 rounded-sm bg-foreground/10"
            aria-hidden
          />

          <div className="relative mt-16 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground/70">
                CVV
              </span>
              <span className="flex min-w-[80px] items-center justify-center rounded-md border border-border/50 bg-muted px-3 py-1 font-mono text-lg font-semibold text-foreground shadow-[0_6px_18px_-12px_rgba(15,23,42,0.6)]">
                {cvv}
              </span>
            </div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground/60">
              Contact support if you notice unauthorized activity.
            </p>
          </div>

          <div className="relative flex items-center justify-end">
            <CreditCardIcon
              className="h-6 w-6 text-muted-foreground/70"
              aria-hidden
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
0:{"buildId":"bFBIq5AO28jMw9-shWxSc","rsc":["$","$1","c",{"children":[["$","$L2",null,{"code":"$3","variantCodes":{},"baseId":"credit-card","baseuiCode":"$4","shadcnuiCode":"$5"}],["$L6","$L7","$L8"],"$L9"]}],"loading":null,"isPartial":false}
6:["$","script","script-0",{"src":"/_next/static/chunks/caa50e77cf52fdaa.js","async":true}]
7:["$","script","script-1",{"src":"/_next/static/chunks/e0bc9c3a4105a6fe.js","async":true}]
8:["$","script","script-2",{"src":"/_next/static/chunks/48913bc585f72fa4.js","async":true}]
9:["$","$La",null,{"children":["$","$b",null,{"name":"Next.MetadataOutlet","children":"$@c"}]}]
c:null
