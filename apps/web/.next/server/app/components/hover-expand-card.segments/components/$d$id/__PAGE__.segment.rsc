1:"$Sreact.fragment"
2:I[176430,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"default"]
9:I[897367,["/_next/static/chunks/d96012bcfc98706a.js","/_next/static/chunks/c1216787d4b31b65.js"],"OutletBoundary"]
a:"$Sreact.suspense"
3:T81f,"use client";

import { Badge } from "@/components/ui/badge";
import { motion, useReducedMotion } from "framer-motion";

export function HoverExpandCard() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="">
      <motion.div
        whileHover={shouldReduceMotion ? undefined : { y: -10, scale: 1.015 }}
        whileFocus={shouldReduceMotion ? undefined : { y: -10, scale: 1.015 }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
        className="group rounded-3xl border border-border/60 bg-card/80 p-6 backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_28px_90px_-40px_rgba(15,23,42,0.75)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        tabIndex={0}
        role="group"
        aria-label="Hover expand card demonstrating glassmorphic elevation."
      >
        <div className="relative mb-4 h-40 overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-foreground/10 via-background/40 to-transparent">
          <motion.div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(79,70,229,0.45),transparent_60%)] transition-transform duration-500"
            whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
          />
        </div>
        <Badge
          variant="outline"
          className="mb-3 w-fit rounded-full border-border/60 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
        >
          Feature
        </Badge>
        <h3 className="mb-2 text-xl font-semibold text-foreground">
          Beautiful Card
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Hover or focus to gently lift and expand the surface. Animations stay
          calm but responsive, matching the glassmorphic system.
        </p>
      </motion.div>
    </div>
  );
}
4:T81f,"use client";

import { Badge } from "@/components/ui/badge";
import { motion, useReducedMotion } from "framer-motion";

export function HoverExpandCard() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="">
      <motion.div
        whileHover={shouldReduceMotion ? undefined : { y: -10, scale: 1.015 }}
        whileFocus={shouldReduceMotion ? undefined : { y: -10, scale: 1.015 }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
        className="group rounded-3xl border border-border/60 bg-card/80 p-6 backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_28px_90px_-40px_rgba(15,23,42,0.75)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        tabIndex={0}
        role="group"
        aria-label="Hover expand card demonstrating glassmorphic elevation."
      >
        <div className="relative mb-4 h-40 overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-foreground/10 via-background/40 to-transparent">
          <motion.div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(79,70,229,0.45),transparent_60%)] transition-transform duration-500"
            whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
          />
        </div>
        <Badge
          variant="outline"
          className="mb-3 w-fit rounded-full border-border/60 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
        >
          Feature
        </Badge>
        <h3 className="mb-2 text-xl font-semibold text-foreground">
          Beautiful Card
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Hover or focus to gently lift and expand the surface. Animations stay
          calm but responsive, matching the glassmorphic system.
        </p>
      </motion.div>
    </div>
  );
}
0:{"buildId":"bFBIq5AO28jMw9-shWxSc","rsc":["$","$1","c",{"children":[["$","$L2",null,{"code":"$3","variantCodes":{},"baseId":"hover-expand-card","shadcnuiCode":"$4"}],["$L5","$L6","$L7"],"$L8"]}],"loading":null,"isPartial":false}
5:["$","script","script-0",{"src":"/_next/static/chunks/caa50e77cf52fdaa.js","async":true}]
6:["$","script","script-1",{"src":"/_next/static/chunks/e0bc9c3a4105a6fe.js","async":true}]
7:["$","script","script-2",{"src":"/_next/static/chunks/48913bc585f72fa4.js","async":true}]
8:["$","$L9",null,{"children":["$","$a",null,{"name":"Next.MetadataOutlet","children":"$@b"}]}]
b:null
