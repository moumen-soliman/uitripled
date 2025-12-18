1:"$Sreact.fragment"
2:I[176430,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"default"]
8:I[897367,["/_next/static/chunks/d96012bcfc98706a.js","/_next/static/chunks/c1216787d4b31b65.js"],"OutletBoundary"]
9:"$Sreact.suspense"
3:T1474,"use client";

import { motion, useReducedMotion, type Transition } from "framer-motion";
import { User } from "lucide-react";
import { useId, useMemo } from "react";

type Avatar = {
  id: number;
  name: string;
  handle: string;
  color: string;
};

const avatars: Avatar[] = [
  {
    id: 1,
    name: "Avery Nolan",
    handle: "@averydesigns",
    color: "bg-[#4f46e5]",
  },
  { id: 2, name: "Lena Ortiz", handle: "@lena_motion", color: "bg-[#10b981]" },
  { id: 3, name: "Miles Chen", handle: "@mileslabs", color: "bg-[#38bdf8]" },
  { id: 4, name: "Nia Calder", handle: "@niacalder", color: "bg-[#f97316]" },
  { id: 5, name: "Theo Sato", handle: "@theosato", color: "bg-[#a855f7]" },
];

export function AvatarGroup() {
  const shouldReduceMotion = useReducedMotion();
  const groupId = useId();

  const animationConfig = useMemo(
    () =>
      shouldReduceMotion
        ? {
            initial: { opacity: 1, x: 0, scale: 1 },
            animate: { opacity: 1, x: 0, scale: 1 },
            whileHover: { scale: 1.08, zIndex: 10 },
            transition: { duration: 0 },
          }
        : {
            initial: (index: number) => ({
              opacity: 0,
              x: -12 * index,
              scale: 0.85,
            }),
            animate: { opacity: 1, x: 0, scale: 1 },
            whileHover: { scale: 1.18, zIndex: 10 },
            transition: (index: number) => ({
              delay: 0.08 * index,
              type: "spring",
              stiffness: 320,
              damping: 24,
              mass: 0.7,
            }),
          },
    [shouldReduceMotion]
  );

  return (
    <section
      aria-labelledby={`${groupId}-label`}
      className="relative inline-flex items-center gap-4"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-4 top-0 h-16 w-16 rounded-full bg-primary/20 blur-[60px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-6 bottom-0 h-14 w-14 rounded-full bg-emerald-400/20 blur-[70px]"
      />

      <div
        role="group"
        aria-describedby={`${groupId}-description`}
        className="flex items-center"
      >
        <motion.ul className="flex -space-x-3" role="list">
          {avatars.map((avatar, index) => (
            <motion.li
              key={avatar.id}
              role="listitem"
              initial={
                typeof animationConfig.initial === "function"
                  ? animationConfig.initial(index)
                  : animationConfig.initial
              }
              animate={animationConfig.animate}
              whileHover={
                animationConfig.whileHover ?? animationConfig.whileHover
              }
              transition={
                (typeof animationConfig.transition === "function"
                  ? animationConfig.transition(index)
                  : animationConfig.transition) as Transition
              }
              className="relative"
              style={{ zIndex: avatars.length - index }}
            >
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-full border-2 border-card shadow-[0_10px_30px_rgba(2,6,23,0.35)] ${avatar.color}`}
                aria-label={`${avatar.name} ${avatar.handle}`}
              >
                <User
                  className="h-5 w-5 text-[var(--muted-foreground)]"
                  aria-hidden
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 8, filter: "blur(6px)" }}
                whileHover={
                  shouldReduceMotion
                    ? { opacity: 1, y: 0, filter: "blur(0px)" }
                    : { opacity: 1, y: 0, filter: "blur(0px)" }
                }
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { duration: 0.25, ease: [0.18, 0.89, 0.32, 1.12] }
                }
                className="pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 whitespace-nowrap rounded-2xl border border-border/60 bg-card/90 px-4 py-2 text-xs text-[var(--muted-foreground)] shadow-[0_18px_45px_rgba(15,23,42,0.46)] backdrop-blur-xl"
              >
                <p className="font-medium">{avatar.name}</p>
                <span className="text-[var(--muted-foreground)]">
                  {avatar.handle}
                </span>
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>
        <motion.span
          id={`${groupId}-description`}
          initial={{
            opacity: shouldReduceMotion ? 1 : 0,
            y: shouldReduceMotion ? 0 : 6,
          }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { delay: 0.08 * avatars.length, duration: 0.3, ease: "easeOut" }
          }
          className="ml-4 rounded-full border border-border/60 bg-card/70 px-4 py-2 text-xs uppercase tracking-[0.32em] text-[var(--muted-foreground)] backdrop-blur-md"
        >
          +{avatars.length} collaborators
        </motion.span>
      </div>
    </section>
  );
}
0:{"buildId":"bFBIq5AO28jMw9-shWxSc","rsc":["$","$1","c",{"children":[["$","$L2",null,{"code":"$3","variantCodes":{},"baseId":"avatar-group"}],["$L4","$L5","$L6"],"$L7"]}],"loading":null,"isPartial":false}
4:["$","script","script-0",{"src":"/_next/static/chunks/caa50e77cf52fdaa.js","async":true}]
5:["$","script","script-1",{"src":"/_next/static/chunks/e0bc9c3a4105a6fe.js","async":true}]
6:["$","script","script-2",{"src":"/_next/static/chunks/48913bc585f72fa4.js","async":true}]
7:["$","$L8",null,{"children":["$","$9",null,{"name":"Next.MetadataOutlet","children":"$@a"}]}]
a:null
