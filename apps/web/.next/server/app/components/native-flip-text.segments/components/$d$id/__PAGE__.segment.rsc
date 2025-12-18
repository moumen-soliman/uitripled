1:"$Sreact.fragment"
2:I[176430,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"default"]
4:I[33530,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"NativeFlipTextDefault"]
5:I[33530,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"NativeFlipTextColored"]
10:I[897367,["/_next/static/chunks/d96012bcfc98706a.js","/_next/static/chunks/c1216787d4b31b65.js"],"OutletBoundary"]
11:"$Sreact.suspense"
3:T5fc,"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface NativeFlipTextProps {
  /**
   * Array of words to flip through.
   */
  words: string[];
  /**
   * Duration of each word display in ms.
   * Default: 2000
   */
  duration?: number;
  className?: string;
}

export function NativeFlipText({
  words,
  duration = 2000,
  className,
}: NativeFlipTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words.length, duration]);

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center overflow-hidden",
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={words[index]}
          initial={{ rotateX: -90, opacity: 0, filter: "blur(6px)" }}
          animate={{ rotateX: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ rotateX: 90, opacity: 0, filter: "blur(6px)" }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            opacity: { duration: 0.3 },
            filter: { duration: 0.3 },
            rotateX: { duration: 0.4 },
          }}
          className="text-center"
        >
          {words[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
6:T5fc,"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface NativeFlipTextProps {
  /**
   * Array of words to flip through.
   */
  words: string[];
  /**
   * Duration of each word display in ms.
   * Default: 2000
   */
  duration?: number;
  className?: string;
}

export function NativeFlipText({
  words,
  duration = 2000,
  className,
}: NativeFlipTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words.length, duration]);

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center overflow-hidden",
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={words[index]}
          initial={{ rotateX: -90, opacity: 0, filter: "blur(6px)" }}
          animate={{ rotateX: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ rotateX: 90, opacity: 0, filter: "blur(6px)" }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            opacity: { duration: 0.3 },
            filter: { duration: 0.3 },
            rotateX: { duration: 0.4 },
          }}
          className="text-center"
        >
          {words[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
7:T5fc,"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface NativeFlipTextProps {
  /**
   * Array of words to flip through.
   */
  words: string[];
  /**
   * Duration of each word display in ms.
   * Default: 2000
   */
  duration?: number;
  className?: string;
}

export function NativeFlipText({
  words,
  duration = 2000,
  className,
}: NativeFlipTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words.length, duration]);

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center overflow-hidden",
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={words[index]}
          initial={{ rotateX: -90, opacity: 0, filter: "blur(6px)" }}
          animate={{ rotateX: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ rotateX: 90, opacity: 0, filter: "blur(6px)" }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            opacity: { duration: 0.3 },
            filter: { duration: 0.3 },
            rotateX: { duration: 0.4 },
          }}
          className="text-center"
        >
          {words[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
8:T5fc,"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface NativeFlipTextProps {
  /**
   * Array of words to flip through.
   */
  words: string[];
  /**
   * Duration of each word display in ms.
   * Default: 2000
   */
  duration?: number;
  className?: string;
}

export function NativeFlipText({
  words,
  duration = 2000,
  className,
}: NativeFlipTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words.length, duration]);

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center overflow-hidden",
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={words[index]}
          initial={{ rotateX: -90, opacity: 0, filter: "blur(6px)" }}
          animate={{ rotateX: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ rotateX: 90, opacity: 0, filter: "blur(6px)" }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            opacity: { duration: 0.3 },
            filter: { duration: 0.3 },
            rotateX: { duration: 0.4 },
          }}
          className="text-center"
        >
          {words[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
9:T5b9,"use client";

import { NativeFlipText } from "@/components/native/base-ui/native-flip-text-baseui";

export function NativeFlipTextDefault() {
  return (
    <div className="flex items-center justify-center p-8 bg-black/5 dark:bg-white/5 rounded-xl border border-black/10 dark:border-white/10">
      <NativeFlipText
        words={["Design", "Develop", "Ship", "Deploy"]}
        className="text-2xl font-bold text-foreground"
      />
    </div>
  );
}

export function NativeFlipTextColored() {
  return (
    <div className="flex items-center justify-center p-8 bg-black/5 dark:bg-white/5 rounded-xl border border-black/10 dark:border-white/10">
      <div className="text-xl font-medium text-muted-foreground flex items-center gap-2">
        <span>We build</span>
        <NativeFlipText
          words={["beautiful", "modern", "fast", "accessible"]}
          className="text-primary font-bold"
          duration={1500}
        />
        <span>user interfaces.</span>
      </div>
    </div>
  );
}

export function NativeFlipTextDemo() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="space-y-2">
        <h3 className="font-semibold text-muted-foreground">Default</h3>
        <NativeFlipTextDefault />
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold text-muted-foreground">
          Inline with Text
        </h3>
        <NativeFlipTextColored />
      </div>
    </div>
  );
}
a:T5b8,"use client";

import { NativeFlipText } from "@/components/native/carbon/native-flip-text-carbon";

export function NativeFlipTextDefault() {
  return (
    <div className="flex items-center justify-center p-8 bg-black/5 dark:bg-white/5 rounded-xl border border-black/10 dark:border-white/10">
      <NativeFlipText
        words={["Design", "Develop", "Ship", "Deploy"]}
        className="text-2xl font-bold text-foreground"
      />
    </div>
  );
}

export function NativeFlipTextColored() {
  return (
    <div className="flex items-center justify-center p-8 bg-black/5 dark:bg-white/5 rounded-xl border border-black/10 dark:border-white/10">
      <div className="text-xl font-medium text-muted-foreground flex items-center gap-2">
        <span>We build</span>
        <NativeFlipText
          words={["beautiful", "modern", "fast", "accessible"]}
          className="text-primary font-bold"
          duration={1500}
        />
        <span>user interfaces.</span>
      </div>
    </div>
  );
}

export function NativeFlipTextDemo() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="space-y-2">
        <h3 className="font-semibold text-muted-foreground">Default</h3>
        <NativeFlipTextDefault />
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold text-muted-foreground">
          Inline with Text
        </h3>
        <NativeFlipTextColored />
      </div>
    </div>
  );
}
b:T5b8,"use client";

import { NativeFlipText } from "@/components/native/carbon/native-flip-text-carbon";

export function NativeFlipTextDefault() {
  return (
    <div className="flex items-center justify-center p-8 bg-black/5 dark:bg-white/5 rounded-xl border border-black/10 dark:border-white/10">
      <NativeFlipText
        words={["Design", "Develop", "Ship", "Deploy"]}
        className="text-2xl font-bold text-foreground"
      />
    </div>
  );
}

export function NativeFlipTextColored() {
  return (
    <div className="flex items-center justify-center p-8 bg-black/5 dark:bg-white/5 rounded-xl border border-black/10 dark:border-white/10">
      <div className="text-xl font-medium text-muted-foreground flex items-center gap-2">
        <span>We build</span>
        <NativeFlipText
          words={["beautiful", "modern", "fast", "accessible"]}
          className="text-primary font-bold"
          duration={1500}
        />
        <span>user interfaces.</span>
      </div>
    </div>
  );
}

export function NativeFlipTextDemo() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="space-y-2">
        <h3 className="font-semibold text-muted-foreground">Default</h3>
        <NativeFlipTextDefault />
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold text-muted-foreground">
          Inline with Text
        </h3>
        <NativeFlipTextColored />
      </div>
    </div>
  );
}
0:{"buildId":"bFBIq5AO28jMw9-shWxSc","rsc":["$","$1","c",{"children":[["$","$L2",null,{"code":"$3","relatedComponents":[{"id":"default","name":"Default","description":"Standard flip text usage","component":"$4","code":"<NativeFlipText\n  words={[\"Design\", \"Develop\", \"Ship\", \"Deploy\"]}\n  className=\"text-2xl font-bold\"\n/>"},{"id":"colored","name":"Colored Inline","description":"Inline usage with custom colors","component":"$5","code":"<div className=\"text-xl font-medium text-muted-foreground flex items-center gap-2\">\n  <span>We build</span>\n  <NativeFlipText\n    words={[\"beautiful\", \"modern\", \"fast\", \"accessible\"]}\n    className=\"text-primary font-bold\"\n    duration={1500}\n  />\n  <span>user interfaces.</span>\n</div>"}],"variantCodes":{"default":"<NativeFlipText\n  words={[\"Design\", \"Develop\", \"Ship\", \"Deploy\"]}\n  className=\"text-2xl font-bold\"\n/>","colored":"<div className=\"text-xl font-medium text-muted-foreground flex items-center gap-2\">\n  <span>We build</span>\n  <NativeFlipText\n    words={[\"beautiful\", \"modern\", \"fast\", \"accessible\"]}\n    className=\"text-primary font-bold\"\n    duration={1500}\n  />\n  <span>user interfaces.</span>\n</div>"},"baseId":"native-flip-text","baseuiCode":"$6","shadcnuiCode":"$7","carbonCode":"$8","baseuiDemoCode":"$9","shadcnuiDemoCode":"$a","carbonDemoCode":"$b"}],["$Lc","$Ld","$Le"],"$Lf"]}],"loading":null,"isPartial":false}
c:["$","script","script-0",{"src":"/_next/static/chunks/caa50e77cf52fdaa.js","async":true}]
d:["$","script","script-1",{"src":"/_next/static/chunks/e0bc9c3a4105a6fe.js","async":true}]
e:["$","script","script-2",{"src":"/_next/static/chunks/48913bc585f72fa4.js","async":true}]
f:["$","$L10",null,{"children":["$","$11",null,{"name":"Next.MetadataOutlet","children":"$@12"}]}]
12:null
