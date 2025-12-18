1:"$Sreact.fragment"
2:I[176430,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"default"]
a:I[897367,["/_next/static/chunks/d96012bcfc98706a.js","/_next/static/chunks/c1216787d4b31b65.js"],"OutletBoundary"]
b:"$Sreact.suspense"
3:Te03,"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, useReducedMotion } from "framer-motion";

const cards = [
  { title: "Card 1", description: "First card" },
  { title: "Card 2", description: "Second card" },
  { title: "Card 3", description: "Third card" },
];

export function AnimatedCardStack() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative flex items-center justify-center px-8 py-16">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute left-1/2 top-10 h-56 w-56 -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]"
          animate={
            shouldReduceMotion
              ? undefined
              : { opacity: [0.25, 0.45, 0.25], scale: [0.9, 1.05, 0.95] }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 11, repeat: Infinity, ease: "easeInOut" }
          }
        />
        <motion.div
          className="absolute bottom-8 right-12 h-48 w-48 rounded-full bg-emerald-400/25 blur-[150px]"
          animate={
            shouldReduceMotion
              ? undefined
              : { opacity: [0.18, 0.35, 0.18], rotate: [0, 12, 0] }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 13, repeat: Infinity, ease: "linear" }
          }
        />
      </div>
      {cards.map((card, index) => {
        const baseScale = 1 - index * 0.04;
        const baseOffset = index * 18;
        const hoverMotion = shouldReduceMotion
          ? undefined
          : { scale: baseScale + 0.06, y: -20 };
        return (
          <motion.div
            key={card.title}
            initial={{ scale: baseScale, y: baseOffset, opacity: 0 }}
            animate={{ scale: baseScale, y: baseOffset, opacity: 1 }}
            whileHover={hoverMotion}
            whileFocus={hoverMotion}
            transition={{
              type: shouldReduceMotion ? "tween" : "spring",
              stiffness: 260,
              damping: 26,
              delay: index * 0.08,
            }}
            className="absolute w-64 rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            style={{ zIndex: cards.length - index }}
            tabIndex={0}
            aria-label={`${card.title}: ${card.description}. Hover or focus to expand this card.`}
            role="group"
          >
            <Card className="rounded-3xl border border-border/60 bg-card/80 shadow-[0_20px_70px_-40px_rgba(15,23,42,0.7)] backdrop-blur-xl transition-shadow duration-300 group-hover:shadow-[0_26px_90px_-45px_rgba(15,23,42,0.8)]">
              <CardHeader>
                <CardTitle className="text-base font-semibold text-foreground">
                  {card.title}
                </CardTitle>
                <CardDescription className="text-xs uppercase tracking-[0.32em] text-muted-foreground/80">
                  {card.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Hover or focus to surface this panel and bring it to the
                  front.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
4:Te73,"use client";

import { motion, useReducedMotion } from "framer-motion";

const cards = [
  { title: "Card 1", description: "First card" },
  { title: "Card 2", description: "Second card" },
  { title: "Card 3", description: "Third card" },
];

export function AnimatedCardStackBaseUI() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative flex items-center justify-center px-8 py-16">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute left-1/2 top-10 h-56 w-56 -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]"
          animate={
            shouldReduceMotion
              ? undefined
              : { opacity: [0.25, 0.45, 0.25], scale: [0.9, 1.05, 0.95] }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 11, repeat: Infinity, ease: "easeInOut" }
          }
        />
        <motion.div
          className="absolute bottom-8 right-12 h-48 w-48 rounded-full bg-emerald-400/25 blur-[150px]"
          animate={
            shouldReduceMotion
              ? undefined
              : { opacity: [0.18, 0.35, 0.18], rotate: [0, 12, 0] }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 13, repeat: Infinity, ease: "linear" }
          }
        />
      </div>
      {cards.map((card, index) => {
        const baseScale = 1 - index * 0.04;
        const baseOffset = index * 18;
        const hoverMotion = shouldReduceMotion
          ? undefined
          : { scale: baseScale + 0.06, y: -20 };
        return (
          <motion.div
            key={card.title}
            initial={{ scale: baseScale, y: baseOffset, opacity: 0 }}
            animate={{ scale: baseScale, y: baseOffset, opacity: 1 }}
            whileHover={hoverMotion}
            whileFocus={hoverMotion}
            transition={{
              type: shouldReduceMotion ? "tween" : "spring",
              stiffness: 260,
              damping: 26,
              delay: index * 0.08,
            }}
            className="absolute w-64 rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            style={{ zIndex: cards.length - index }}
            tabIndex={0}
            aria-label={`${card.title}: ${card.description}. Hover or focus to expand this card.`}
            role="group"
          >
            {/* Card replacement */}
            <div className="rounded-3xl border border-border/60 bg-card/80 shadow-[0_20px_70px_-40px_rgba(15,23,42,0.7)] backdrop-blur-xl transition-shadow duration-300 group-hover:shadow-[0_26px_90px_-45px_rgba(15,23,42,0.8)]">
              {/* CardHeader replacement */}
              <div className="flex flex-col space-y-1.5 p-6">
                {/* CardTitle replacement */}
                <h3 className="text-base font-semibold text-foreground">
                  {card.title}
                </h3>
                {/* CardDescription replacement */}
                <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground/80">
                  {card.description}
                </p>
              </div>
              {/* CardContent replacement */}
              <div className="p-6 pt-0">
                <p className="text-sm text-muted-foreground">
                  Hover or focus to surface this panel and bring it to the
                  front.
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
5:Te03,"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, useReducedMotion } from "framer-motion";

const cards = [
  { title: "Card 1", description: "First card" },
  { title: "Card 2", description: "Second card" },
  { title: "Card 3", description: "Third card" },
];

export function AnimatedCardStack() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative flex items-center justify-center px-8 py-16">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute left-1/2 top-10 h-56 w-56 -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]"
          animate={
            shouldReduceMotion
              ? undefined
              : { opacity: [0.25, 0.45, 0.25], scale: [0.9, 1.05, 0.95] }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 11, repeat: Infinity, ease: "easeInOut" }
          }
        />
        <motion.div
          className="absolute bottom-8 right-12 h-48 w-48 rounded-full bg-emerald-400/25 blur-[150px]"
          animate={
            shouldReduceMotion
              ? undefined
              : { opacity: [0.18, 0.35, 0.18], rotate: [0, 12, 0] }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 13, repeat: Infinity, ease: "linear" }
          }
        />
      </div>
      {cards.map((card, index) => {
        const baseScale = 1 - index * 0.04;
        const baseOffset = index * 18;
        const hoverMotion = shouldReduceMotion
          ? undefined
          : { scale: baseScale + 0.06, y: -20 };
        return (
          <motion.div
            key={card.title}
            initial={{ scale: baseScale, y: baseOffset, opacity: 0 }}
            animate={{ scale: baseScale, y: baseOffset, opacity: 1 }}
            whileHover={hoverMotion}
            whileFocus={hoverMotion}
            transition={{
              type: shouldReduceMotion ? "tween" : "spring",
              stiffness: 260,
              damping: 26,
              delay: index * 0.08,
            }}
            className="absolute w-64 rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            style={{ zIndex: cards.length - index }}
            tabIndex={0}
            aria-label={`${card.title}: ${card.description}. Hover or focus to expand this card.`}
            role="group"
          >
            <Card className="rounded-3xl border border-border/60 bg-card/80 shadow-[0_20px_70px_-40px_rgba(15,23,42,0.7)] backdrop-blur-xl transition-shadow duration-300 group-hover:shadow-[0_26px_90px_-45px_rgba(15,23,42,0.8)]">
              <CardHeader>
                <CardTitle className="text-base font-semibold text-foreground">
                  {card.title}
                </CardTitle>
                <CardDescription className="text-xs uppercase tracking-[0.32em] text-muted-foreground/80">
                  {card.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Hover or focus to surface this panel and bring it to the
                  front.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
0:{"buildId":"bFBIq5AO28jMw9-shWxSc","rsc":["$","$1","c",{"children":[["$","$L2",null,{"code":"$3","variantCodes":{},"baseId":"animated-card-stack","baseuiCode":"$4","shadcnuiCode":"$5"}],["$L6","$L7","$L8"],"$L9"]}],"loading":null,"isPartial":false}
6:["$","script","script-0",{"src":"/_next/static/chunks/caa50e77cf52fdaa.js","async":true}]
7:["$","script","script-1",{"src":"/_next/static/chunks/e0bc9c3a4105a6fe.js","async":true}]
8:["$","script","script-2",{"src":"/_next/static/chunks/48913bc585f72fa4.js","async":true}]
9:["$","$La",null,{"children":["$","$b",null,{"name":"Next.MetadataOutlet","children":"$@c"}]}]
c:null
