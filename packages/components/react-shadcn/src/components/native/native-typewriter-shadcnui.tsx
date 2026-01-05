"use client";

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
