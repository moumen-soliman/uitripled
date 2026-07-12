"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const libraries = [
  {
    name: "Shadcn UI",
    logoLight: "/logos/shadcnui_dark.svg",
    logoDark: "/logos/shadcnui_white.svg",
  },
  {
    name: "Base UI",
    logoLight: "/logos/baseui_white.svg",
    logoDark: "/logos/baseui_dark.svg",
  },
];

export function HeroFlip() {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % libraries.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <span className="relative inline-flex h-[1.5em] w-[110px] items-center justify-center overflow-hidden align-bottom">
      <span className="sr-only">Shadcn UI and Base UI</span>
      <span aria-hidden="true" className="contents">
        <AnimatePresence mode="wait">
          <motion.span
            key={libraries[index].name}
            initial={{ y: 20, opacity: 0, filter: "blur(5px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: -20, opacity: 0, filter: "blur(5px)" }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="absolute flex items-center gap-2"
          >
            <span className="relative h-5 w-5">
              <Image
                src={libraries[index].logoLight}
                alt=""
                fill
                className="object-contain block dark:hidden"
              />
              <Image
                src={libraries[index].logoDark}
                alt=""
                fill
                className="object-contain hidden dark:block"
              />
            </span>
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-800 to-neutral-600 dark:from-neutral-200 dark:to-neutral-400">
              {libraries[index].name}
            </span>
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}
