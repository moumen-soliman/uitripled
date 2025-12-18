1:"$Sreact.fragment"
2:I[176430,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"default"]
4:I[848899,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"NativeTypewriterDefault"]
5:I[848899,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"NativeTypewriterMultiline"]
6:I[848899,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"NativeTypewriterLoop"]
11:I[897367,["/_next/static/chunks/d96012bcfc98706a.js","/_next/static/chunks/c1216787d4b31b65.js"],"OutletBoundary"]
12:"$Sreact.suspense"
3:T11cc,"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

interface NativeTypewriterProps {
  /**
   * The text content to type. Can be a string or an array of strings.
   * If an array, it will type each string in sequence (or loop if loop=true).
   */
  content: string | string[];
  /**
   * Typing speed.
   * 'slow' = 100ms, 'medium' = 50ms, 'fast' = 30ms.
   * Or pass a number in ms.
   * Default: 'medium'
   */
  speed?: "slow" | "medium" | "fast" | number;
  /**
   * Whether to show a blinking cursor.
   * Default: true
   */
  cursor?: boolean;
  /**
   * Whether to loop the typing animation.
   * Default: false
   */
  loop?: boolean;
  /**
   * Delay before starting animation in ms.
   * Default: 0
   */
  startDelay?: number;
  /**
   * Whether to apply a blur/morph effect to each character.
   * Default: true
   */
  morph?: boolean;
  className?: string;
}

export function NativeTypewriter({
  content,
  speed = "medium",
  cursor = true,
  loop = false,
  startDelay = 0,
  morph = true,
  className,
}: NativeTypewriterProps) {
  const shouldReduceMotion = useReducedMotion();
  const [displayedText, setDisplayedText] = useState("");
  const [isStarted, setIsStarted] = useState(false);

  // Calculate delay calculation
  const speedMap = {
    slow: 100,
    medium: 50,
    fast: 30,
  };
  const typingSpeed = typeof speed === "number" ? speed : speedMap[speed];

  useEffect(() => {
    // If reduced motion is enabled, just show the full text immediately
    if (shouldReduceMotion) {
      setDisplayedText(Array.isArray(content) ? content.join(" ") : content);
      return;
    }

    let timeoutId: NodeJS.Timeout;
    let currentIndex = 0;
    let currentStringIndex = 0;

    // Normalize content to array
    const textArray = Array.isArray(content) ? content : [content];

    // Actually, simpler logic for a first pass is often better.
    // Let's implement a robust "Type -> Wait -> (Delete if multi/loop) -> Next" cycle.

    let isDeleting = false;

    // Unified typing loop logic
    const runLoop = () => {
      const currentString = textArray[currentStringIndex];

      if (isDeleting) {
        setDisplayedText(currentString.substring(0, currentIndex));
        currentIndex--;
        if (currentIndex < 0) {
          isDeleting = false;
          currentIndex = 0;
          currentStringIndex = (currentStringIndex + 1) % textArray.length;
          if (!loop && currentStringIndex === 0) {
            return;
          }
          timeoutId = setTimeout(runLoop, 500);
        } else {
          timeoutId = setTimeout(runLoop, typingSpeed / 2);
        }
      } else {
        setDisplayedText(currentString.substring(0, currentIndex + 1));
        currentIndex++;
        if (currentIndex > currentString.length) {
          if (
            (textArray.length > 1 &&
              (loop || currentStringIndex < textArray.length - 1)) ||
            (textArray.length === 1 && loop)
          ) {
            isDeleting = true;
            currentIndex = currentString.length;
            timeoutId = setTimeout(runLoop, 2000);
          }
        } else {
          timeoutId = setTimeout(runLoop, typingSpeed);
        }
      }
    };

    const initialTimer = setTimeout(() => {
      setIsStarted(true);
      runLoop();
    }, startDelay);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(timeoutId);
    };
  }, [content, typingSpeed, loop, startDelay, shouldReduceMotion]);

  return (
    <div className={cn("inline-flex items-center", className)}>
      <span className="whitespace-pre-wrap">
        {displayedText.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={
              morph ? { opacity: 0, filter: "blur(2px)" } : { opacity: 1 }
            }
            animate={
              morph ? { opacity: 1, filter: "blur(0px)" } : { opacity: 1 }
            }
            transition={{ duration: 0.1 }}
          >
            {char}
          </motion.span>
        ))}
      </span>
      {cursor && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="ml-0.5 inline-block h-[1.2em] w-[2px] bg-primary align-bottom"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
7:T11cc,"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

interface NativeTypewriterProps {
  /**
   * The text content to type. Can be a string or an array of strings.
   * If an array, it will type each string in sequence (or loop if loop=true).
   */
  content: string | string[];
  /**
   * Typing speed.
   * 'slow' = 100ms, 'medium' = 50ms, 'fast' = 30ms.
   * Or pass a number in ms.
   * Default: 'medium'
   */
  speed?: "slow" | "medium" | "fast" | number;
  /**
   * Whether to show a blinking cursor.
   * Default: true
   */
  cursor?: boolean;
  /**
   * Whether to loop the typing animation.
   * Default: false
   */
  loop?: boolean;
  /**
   * Delay before starting animation in ms.
   * Default: 0
   */
  startDelay?: number;
  /**
   * Whether to apply a blur/morph effect to each character.
   * Default: true
   */
  morph?: boolean;
  className?: string;
}

export function NativeTypewriter({
  content,
  speed = "medium",
  cursor = true,
  loop = false,
  startDelay = 0,
  morph = true,
  className,
}: NativeTypewriterProps) {
  const shouldReduceMotion = useReducedMotion();
  const [displayedText, setDisplayedText] = useState("");
  const [isStarted, setIsStarted] = useState(false);

  // Calculate delay calculation
  const speedMap = {
    slow: 100,
    medium: 50,
    fast: 30,
  };
  const typingSpeed = typeof speed === "number" ? speed : speedMap[speed];

  useEffect(() => {
    // If reduced motion is enabled, just show the full text immediately
    if (shouldReduceMotion) {
      setDisplayedText(Array.isArray(content) ? content.join(" ") : content);
      return;
    }

    let timeoutId: NodeJS.Timeout;
    let currentIndex = 0;
    let currentStringIndex = 0;

    // Normalize content to array
    const textArray = Array.isArray(content) ? content : [content];

    // Actually, simpler logic for a first pass is often better.
    // Let's implement a robust "Type -> Wait -> (Delete if multi/loop) -> Next" cycle.

    let isDeleting = false;

    // Unified typing loop logic
    const runLoop = () => {
      const currentString = textArray[currentStringIndex];

      if (isDeleting) {
        setDisplayedText(currentString.substring(0, currentIndex));
        currentIndex--;
        if (currentIndex < 0) {
          isDeleting = false;
          currentIndex = 0;
          currentStringIndex = (currentStringIndex + 1) % textArray.length;
          if (!loop && currentStringIndex === 0) {
            return;
          }
          timeoutId = setTimeout(runLoop, 500);
        } else {
          timeoutId = setTimeout(runLoop, typingSpeed / 2);
        }
      } else {
        setDisplayedText(currentString.substring(0, currentIndex + 1));
        currentIndex++;
        if (currentIndex > currentString.length) {
          if (
            (textArray.length > 1 &&
              (loop || currentStringIndex < textArray.length - 1)) ||
            (textArray.length === 1 && loop)
          ) {
            isDeleting = true;
            currentIndex = currentString.length;
            timeoutId = setTimeout(runLoop, 2000);
          }
        } else {
          timeoutId = setTimeout(runLoop, typingSpeed);
        }
      }
    };

    const initialTimer = setTimeout(() => {
      setIsStarted(true);
      runLoop();
    }, startDelay);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(timeoutId);
    };
  }, [content, typingSpeed, loop, startDelay, shouldReduceMotion]);

  return (
    <div className={cn("inline-flex items-center", className)}>
      <span className="whitespace-pre-wrap">
        {displayedText.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={
              morph ? { opacity: 0, filter: "blur(2px)" } : { opacity: 1 }
            }
            animate={
              morph ? { opacity: 1, filter: "blur(0px)" } : { opacity: 1 }
            }
            transition={{ duration: 0.1 }}
          >
            {char}
          </motion.span>
        ))}
      </span>
      {cursor && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="ml-0.5 inline-block h-[1.2em] w-[2px] bg-primary align-bottom"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
8:T11cc,"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

interface NativeTypewriterProps {
  /**
   * The text content to type. Can be a string or an array of strings.
   * If an array, it will type each string in sequence (or loop if loop=true).
   */
  content: string | string[];
  /**
   * Typing speed.
   * 'slow' = 100ms, 'medium' = 50ms, 'fast' = 30ms.
   * Or pass a number in ms.
   * Default: 'medium'
   */
  speed?: "slow" | "medium" | "fast" | number;
  /**
   * Whether to show a blinking cursor.
   * Default: true
   */
  cursor?: boolean;
  /**
   * Whether to loop the typing animation.
   * Default: false
   */
  loop?: boolean;
  /**
   * Delay before starting animation in ms.
   * Default: 0
   */
  startDelay?: number;
  /**
   * Whether to apply a blur/morph effect to each character.
   * Default: true
   */
  morph?: boolean;
  className?: string;
}

export function NativeTypewriter({
  content,
  speed = "medium",
  cursor = true,
  loop = false,
  startDelay = 0,
  morph = true,
  className,
}: NativeTypewriterProps) {
  const shouldReduceMotion = useReducedMotion();
  const [displayedText, setDisplayedText] = useState("");
  const [isStarted, setIsStarted] = useState(false);

  // Calculate delay calculation
  const speedMap = {
    slow: 100,
    medium: 50,
    fast: 30,
  };
  const typingSpeed = typeof speed === "number" ? speed : speedMap[speed];

  useEffect(() => {
    // If reduced motion is enabled, just show the full text immediately
    if (shouldReduceMotion) {
      setDisplayedText(Array.isArray(content) ? content.join(" ") : content);
      return;
    }

    let timeoutId: NodeJS.Timeout;
    let currentIndex = 0;
    let currentStringIndex = 0;

    // Normalize content to array
    const textArray = Array.isArray(content) ? content : [content];

    // Actually, simpler logic for a first pass is often better.
    // Let's implement a robust "Type -> Wait -> (Delete if multi/loop) -> Next" cycle.

    let isDeleting = false;

    // Unified typing loop logic
    const runLoop = () => {
      const currentString = textArray[currentStringIndex];

      if (isDeleting) {
        setDisplayedText(currentString.substring(0, currentIndex));
        currentIndex--;
        if (currentIndex < 0) {
          isDeleting = false;
          currentIndex = 0;
          currentStringIndex = (currentStringIndex + 1) % textArray.length;
          if (!loop && currentStringIndex === 0) {
            return;
          }
          timeoutId = setTimeout(runLoop, 500);
        } else {
          timeoutId = setTimeout(runLoop, typingSpeed / 2);
        }
      } else {
        setDisplayedText(currentString.substring(0, currentIndex + 1));
        currentIndex++;
        if (currentIndex > currentString.length) {
          if (
            (textArray.length > 1 &&
              (loop || currentStringIndex < textArray.length - 1)) ||
            (textArray.length === 1 && loop)
          ) {
            isDeleting = true;
            currentIndex = currentString.length;
            timeoutId = setTimeout(runLoop, 2000);
          }
        } else {
          timeoutId = setTimeout(runLoop, typingSpeed);
        }
      }
    };

    const initialTimer = setTimeout(() => {
      setIsStarted(true);
      runLoop();
    }, startDelay);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(timeoutId);
    };
  }, [content, typingSpeed, loop, startDelay, shouldReduceMotion]);

  return (
    <div className={cn("inline-flex items-center", className)}>
      <span className="whitespace-pre-wrap">
        {displayedText.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={
              morph ? { opacity: 0, filter: "blur(2px)" } : { opacity: 1 }
            }
            animate={
              morph ? { opacity: 1, filter: "blur(0px)" } : { opacity: 1 }
            }
            transition={{ duration: 0.1 }}
          >
            {char}
          </motion.span>
        ))}
      </span>
      {cursor && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="ml-0.5 inline-block h-[1.2em] w-[2px] bg-primary align-bottom"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
9:T11cc,"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

interface NativeTypewriterProps {
  /**
   * The text content to type. Can be a string or an array of strings.
   * If an array, it will type each string in sequence (or loop if loop=true).
   */
  content: string | string[];
  /**
   * Typing speed.
   * 'slow' = 100ms, 'medium' = 50ms, 'fast' = 30ms.
   * Or pass a number in ms.
   * Default: 'medium'
   */
  speed?: "slow" | "medium" | "fast" | number;
  /**
   * Whether to show a blinking cursor.
   * Default: true
   */
  cursor?: boolean;
  /**
   * Whether to loop the typing animation.
   * Default: false
   */
  loop?: boolean;
  /**
   * Delay before starting animation in ms.
   * Default: 0
   */
  startDelay?: number;
  /**
   * Whether to apply a blur/morph effect to each character.
   * Default: true
   */
  morph?: boolean;
  className?: string;
}

export function NativeTypewriter({
  content,
  speed = "medium",
  cursor = true,
  loop = false,
  startDelay = 0,
  morph = true,
  className,
}: NativeTypewriterProps) {
  const shouldReduceMotion = useReducedMotion();
  const [displayedText, setDisplayedText] = useState("");
  const [isStarted, setIsStarted] = useState(false);

  // Calculate delay calculation
  const speedMap = {
    slow: 100,
    medium: 50,
    fast: 30,
  };
  const typingSpeed = typeof speed === "number" ? speed : speedMap[speed];

  useEffect(() => {
    // If reduced motion is enabled, just show the full text immediately
    if (shouldReduceMotion) {
      setDisplayedText(Array.isArray(content) ? content.join(" ") : content);
      return;
    }

    let timeoutId: NodeJS.Timeout;
    let currentIndex = 0;
    let currentStringIndex = 0;

    // Normalize content to array
    const textArray = Array.isArray(content) ? content : [content];

    // Actually, simpler logic for a first pass is often better.
    // Let's implement a robust "Type -> Wait -> (Delete if multi/loop) -> Next" cycle.

    let isDeleting = false;

    // Unified typing loop logic
    const runLoop = () => {
      const currentString = textArray[currentStringIndex];

      if (isDeleting) {
        setDisplayedText(currentString.substring(0, currentIndex));
        currentIndex--;
        if (currentIndex < 0) {
          isDeleting = false;
          currentIndex = 0;
          currentStringIndex = (currentStringIndex + 1) % textArray.length;
          if (!loop && currentStringIndex === 0) {
            return;
          }
          timeoutId = setTimeout(runLoop, 500);
        } else {
          timeoutId = setTimeout(runLoop, typingSpeed / 2);
        }
      } else {
        setDisplayedText(currentString.substring(0, currentIndex + 1));
        currentIndex++;
        if (currentIndex > currentString.length) {
          if (
            (textArray.length > 1 &&
              (loop || currentStringIndex < textArray.length - 1)) ||
            (textArray.length === 1 && loop)
          ) {
            isDeleting = true;
            currentIndex = currentString.length;
            timeoutId = setTimeout(runLoop, 2000);
          }
        } else {
          timeoutId = setTimeout(runLoop, typingSpeed);
        }
      }
    };

    const initialTimer = setTimeout(() => {
      setIsStarted(true);
      runLoop();
    }, startDelay);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(timeoutId);
    };
  }, [content, typingSpeed, loop, startDelay, shouldReduceMotion]);

  return (
    <div className={cn("inline-flex items-center", className)}>
      <span className="whitespace-pre-wrap">
        {displayedText.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={
              morph ? { opacity: 0, filter: "blur(2px)" } : { opacity: 1 }
            }
            animate={
              morph ? { opacity: 1, filter: "blur(0px)" } : { opacity: 1 }
            }
            transition={{ duration: 0.1 }}
          >
            {char}
          </motion.span>
        ))}
      </span>
      {cursor && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="ml-0.5 inline-block h-[1.2em] w-[2px] bg-primary align-bottom"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
a:T7ac,"use client";

import { NativeTypewriter } from "@/components/native/base-ui/native-typewriter-baseui";

export function NativeTypewriterDefault() {
  return (
    <div className="flex items-center justify-center p-8 bg-black/5 dark:bg-white/5 rounded-xl border border-black/10 dark:border-white/10">
      <NativeTypewriter
        content="Hello, I am a native typewriter."
        className="text-xl font-medium text-foreground"
      />
    </div>
  );
}

export function NativeTypewriterMultiline() {
  return (
    <div className="flex items-center justify-center p-8 bg-black/5 dark:bg-white/5 rounded-xl border border-black/10 dark:border-white/10">
      <NativeTypewriter
        content={[
          "I can type multiple lines...",
          "One after another.",
          "Perfect for storytelling!",
        ]}
        speed="fast"
        className="text-xl font-medium text-primary"
      />
    </div>
  );
}

export function NativeTypewriterLoop() {
  return (
    <div className="flex items-center justify-center p-8 bg-black/5 dark:bg-white/5 rounded-xl border border-black/10 dark:border-white/10">
      <NativeTypewriter
        content={["Design.", "Develop.", "Ship.", "Repeat."]}
        loop
        speed={80}
        className="text-2xl font-bold text-primary"
        cursor={false}
      />
    </div>
  );
}

export function NativeTypewriterDemo() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="space-y-2">
        <h3 className="font-semibold text-muted-foreground">Default</h3>
        <NativeTypewriterDefault />
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold text-muted-foreground">Multiline</h3>
        <NativeTypewriterMultiline />
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold text-muted-foreground">
          Looping (Custom Style)
        </h3>
        <NativeTypewriterLoop />
      </div>
    </div>
  );
}
b:T7b0,"use client";

import { NativeTypewriter } from "@/components/native/shadcn-ui/native-typewriter-shadcnui";

export function NativeTypewriterDefault() {
  return (
    <div className="flex items-center justify-center p-8 bg-black/5 dark:bg-white/5 rounded-xl border border-black/10 dark:border-white/10">
      <NativeTypewriter
        content="Hello, I am a native typewriter."
        className="text-xl font-medium text-foreground"
      />
    </div>
  );
}

export function NativeTypewriterMultiline() {
  return (
    <div className="flex items-center justify-center p-8 bg-black/5 dark:bg-white/5 rounded-xl border border-black/10 dark:border-white/10">
      <NativeTypewriter
        content={[
          "I can type multiple lines...",
          "One after another.",
          "Perfect for storytelling!",
        ]}
        speed="fast"
        className="text-xl font-medium text-primary"
      />
    </div>
  );
}

export function NativeTypewriterLoop() {
  return (
    <div className="flex items-center justify-center p-8 bg-black/5 dark:bg-white/5 rounded-xl border border-black/10 dark:border-white/10">
      <NativeTypewriter
        content={["Design.", "Develop.", "Ship.", "Repeat."]}
        loop
        speed={80}
        className="text-2xl font-bold text-primary"
        cursor={false}
      />
    </div>
  );
}

export function NativeTypewriterDemo() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="space-y-2">
        <h3 className="font-semibold text-muted-foreground">Default</h3>
        <NativeTypewriterDefault />
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold text-muted-foreground">Multiline</h3>
        <NativeTypewriterMultiline />
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold text-muted-foreground">
          Looping (Custom Style)
        </h3>
        <NativeTypewriterLoop />
      </div>
    </div>
  );
}
c:T7b0,"use client";

import { NativeTypewriter } from "@/components/native/shadcn-ui/native-typewriter-shadcnui";

export function NativeTypewriterDefault() {
  return (
    <div className="flex items-center justify-center p-8 bg-black/5 dark:bg-white/5 rounded-xl border border-black/10 dark:border-white/10">
      <NativeTypewriter
        content="Hello, I am a native typewriter."
        className="text-xl font-medium text-foreground"
      />
    </div>
  );
}

export function NativeTypewriterMultiline() {
  return (
    <div className="flex items-center justify-center p-8 bg-black/5 dark:bg-white/5 rounded-xl border border-black/10 dark:border-white/10">
      <NativeTypewriter
        content={[
          "I can type multiple lines...",
          "One after another.",
          "Perfect for storytelling!",
        ]}
        speed="fast"
        className="text-xl font-medium text-primary"
      />
    </div>
  );
}

export function NativeTypewriterLoop() {
  return (
    <div className="flex items-center justify-center p-8 bg-black/5 dark:bg-white/5 rounded-xl border border-black/10 dark:border-white/10">
      <NativeTypewriter
        content={["Design.", "Develop.", "Ship.", "Repeat."]}
        loop
        speed={80}
        className="text-2xl font-bold text-primary"
        cursor={false}
      />
    </div>
  );
}

export function NativeTypewriterDemo() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="space-y-2">
        <h3 className="font-semibold text-muted-foreground">Default</h3>
        <NativeTypewriterDefault />
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold text-muted-foreground">Multiline</h3>
        <NativeTypewriterMultiline />
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold text-muted-foreground">
          Looping (Custom Style)
        </h3>
        <NativeTypewriterLoop />
      </div>
    </div>
  );
}
0:{"buildId":"bFBIq5AO28jMw9-shWxSc","rsc":["$","$1","c",{"children":[["$","$L2",null,{"code":"$3","relatedComponents":[{"id":"default","name":"Default","description":"Standard typing effect","component":"$4","code":"<NativeTypewriter content=\"Hello, I am a native typewriter.\" />"},{"id":"multiline","name":"Multiline","description":"Typing multiple lines in sequence","component":"$5","code":"<NativeTypewriter\n  content={[\n    \"I can type multiple lines...\",\n    \"One after another.\",\n    \"Perfect for storytelling!\",\n  ]}\n  speed=\"fast\"\n/>"},{"id":"loop","name":"Looping","description":"Continuous typing loop","component":"$6","code":"<NativeTypewriter\n  content={[\"Design.\", \"Develop.\", \"Ship.\", \"Repeat.\"]}\n  loop\n  speed={80}\n  cursor={false}\n/>"}],"variantCodes":{"default":"<NativeTypewriter content=\"Hello, I am a native typewriter.\" />","multiline":"<NativeTypewriter\n  content={[\n    \"I can type multiple lines...\",\n    \"One after another.\",\n    \"Perfect for storytelling!\",\n  ]}\n  speed=\"fast\"\n/>","loop":"<NativeTypewriter\n  content={[\"Design.\", \"Develop.\", \"Ship.\", \"Repeat.\"]}\n  loop\n  speed={80}\n  cursor={false}\n/>"},"baseId":"native-typewriter","baseuiCode":"$7","shadcnuiCode":"$8","carbonCode":"$9","baseuiDemoCode":"$a","shadcnuiDemoCode":"$b","carbonDemoCode":"$c"}],["$Ld","$Le","$Lf"],"$L10"]}],"loading":null,"isPartial":false}
d:["$","script","script-0",{"src":"/_next/static/chunks/caa50e77cf52fdaa.js","async":true}]
e:["$","script","script-1",{"src":"/_next/static/chunks/e0bc9c3a4105a6fe.js","async":true}]
f:["$","script","script-2",{"src":"/_next/static/chunks/48913bc585f72fa4.js","async":true}]
10:["$","$L11",null,{"children":["$","$12",null,{"name":"Next.MetadataOutlet","children":"$@13"}]}]
13:null
