"use client";

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
