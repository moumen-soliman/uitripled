"use client";

import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

type AIGlowInputProps = {
  placeholder?: string;
  onValueChange?: (value: string) => void;
  glowColor?: string;
};

type Particle = {
  left: string;
  top: string;
  delay: number;
};

export function AIGlowInput({
  placeholder = "Ask AI anything…",
  onValueChange,
  glowColor,
}: AIGlowInputProps) {
  const [value, setValue] = useState("");
  const [glowIntensity, setGlowIntensity] = useState(0.3);
  const [isFocused, setIsFocused] = useState(false);
  const lastTypingTime = useRef(Date.now());
  const typingSpeed = useMotionValue(0);
  const glowIntensityMotion = useMotionValue(0.3);
  const shouldReduceMotion = useReducedMotion();
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";

  const effectiveGlowColor = useMemo(() => {
    if (glowColor) {
      return glowColor;
    }
    return isDarkMode ? "#d1d5db" : "#ddd";
  }, [glowColor, isDarkMode]);

  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: 6 }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 1.8,
      })),
    []
  );

  const springIntensity = useSpring(glowIntensityMotion, {
    stiffness: 420,
    damping: 32,
  });

  useEffect(() => {
    const unsubscribe = springIntensity.on("change", (latest) => {
      setGlowIntensity(latest as number);
    });
    return () => unsubscribe();
  }, [springIntensity]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    onValueChange?.(newValue);

    const now = Date.now();
    const timeSinceLastType = now - lastTypingTime.current;
    lastTypingTime.current = now;

    const speed = Math.min(1, 1000 / (timeSinceLastType || 1));
    typingSpeed.set(speed);

    const baseIntensity = 0.28;
    const dynamicIntensity = baseIntensity + speed * 0.72;
    glowIntensityMotion.set(dynamicIntensity);

    if (timeSinceLastType > 500) {
      glowIntensityMotion.set(baseIntensity);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
    glowIntensityMotion.set(0.58);
  };

  const handleBlur = () => {
    setIsFocused(false);
    glowIntensityMotion.set(value ? 0.4 : 0.3);
  };

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : { r: 209, g: 213, b: 219 };
  };

  const rgb = hexToRgb(effectiveGlowColor);
  const shadowBlur = shouldReduceMotion ? 0 : glowIntensity * 42;
  const glowShadowAlpha = isDarkMode
    ? glowIntensity * 0.55
    : glowIntensity * 0.35;
  const particleColor = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${isDarkMode ? 0.26 : 0.16})`;

  return (
    <section className="relative w-full max-w-lg">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className={cn(
            "absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full blur-[140px]",
            isDarkMode ? "bg-white/15" : "bg-[#ddd]"
          )}
          animate={
            shouldReduceMotion
              ? undefined
              : { opacity: [0.25, 0.5, 0.25], scale: [0.9, 1.05, 0.95] }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 9, repeat: Infinity, ease: "easeInOut" }
          }
        />
      </div>

      <label className="relative block rounded-2xl bg-card/80">
        <div className="relative overflow-hidden rounded-[calc(theme(borderRadius.2xl)-0.25rem)]">
          <motion.div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle,
                rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${glowIntensity}) 0%,
                rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${glowIntensity * 0.35}) 50%,
                transparent 100%)`,
              filter: "blur(28px)",
            }}
            animate={
              shouldReduceMotion
                ? { scale: 1 }
                : { scale: isFocused ? [1, 1.05, 1] : 1 }
            }
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    duration: 2.2,
                    repeat: isFocused ? Infinity : 0,
                    ease: "easeInOut",
                  }
            }
          />

          <input
            type="text"
            value={value}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholder}
            aria-label={placeholder}
            className={cn(
              "relative w-full rounded-[calc(theme(borderRadius.2xl)-0.25rem)] border border-border/60 px-6 py-4 text-base placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-colors",
              isDarkMode
                ? "bg-white/5 text-muted-foreground focus-visible:ring-white/40"
                : "bg-white/90 text-foreground focus-visible:ring-[#ddd]"
            )}
            style={{
              boxShadow: `0 0 ${shadowBlur}px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${glowShadowAlpha})`,
            }}
          />

          {value && isFocused && (
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
              className="absolute -bottom-9 left-0 text-xs text-muted-foreground"
            >
              <motion.span
                animate={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { opacity: [0.4, 1, 0.4] }
                }
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { duration: 1.1, repeat: Infinity, ease: "easeInOut" }
                }
              >
                {glowIntensity > 0.8
                  ? "⚡ Fast typing!"
                  : glowIntensity > 0.5
                    ? "🎯 Active"
                    : "✨ Ready"}
              </motion.span>
            </motion.div>
          )}

          {isFocused && (
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[calc(theme(borderRadius.2xl)-0.25rem)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                background: `linear-gradient(135deg,
                  transparent 0%,
                  rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.12) 50%,
                  transparent 100%)`,
              }}
            />
          )}
        </div>
      </label>

      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
        {particles.map((particle, index) => (
          <motion.span
            key={index}
            className="absolute h-1 w-1 rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
              backgroundColor: particleColor,
            }}
            animate={
              shouldReduceMotion
                ? { opacity: 0.25 }
                : {
                    y: [0, -24, 0],
                    opacity: [0.15, 0.5, 0.15],
                  }
            }
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    duration: 3,
                    repeat: Infinity,
                    delay: particle.delay,
                    ease: "easeInOut",
                  }
            }
          />
        ))}
      </div>
    </section>
  );
}
