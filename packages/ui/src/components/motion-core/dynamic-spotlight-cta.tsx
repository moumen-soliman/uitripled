"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MouseEvent, useMemo, useState } from "react";

type DynamicSpotlightCTAProps = {
  text?: string;
  intensity?: number;
  radius?: number;
  showBlur?: boolean;
};

type Particle = {
  left: string;
  top: string;
  size: number;
  travel: number;
  duration: number;
  delay: number;
};

export function DynamicSpotlightCTA({
  text = "Unlock Your Motion Power",
  intensity = 0.85,
  radius = 240,
  showBlur = true,
}: DynamicSpotlightCTAProps) {
  const [mousePosition, setMousePosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: 18 }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 4 + 2,
        travel: Math.random() * 72 - 36,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
      })),
    []
  );

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition(null);
  };

  return (
    <section
      aria-labelledby="dynamic-spotlight-title"
      className="relative w-full"
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative h-[22rem] w-full overflow-hidden rounded-3xl border border-border/60 bg-card/80 shadow-[0_35px_120px_-40px_rgba(15,23,42,0.7)] backdrop-blur-xl"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/25 blur-[160px]"
            animate={
              shouldReduceMotion
                ? undefined
                : { opacity: [0.25, 0.55, 0.25], scale: [0.92, 1.08, 0.96] }
            }
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 9, repeat: Infinity, ease: "easeInOut" }
            }
          />
          <motion.div
            className="absolute bottom-[-30%] right-[-15%] h-80 w-80 rounded-full bg-emerald-400/20 blur-[180px]"
            animate={
              shouldReduceMotion
                ? undefined
                : { opacity: [0.2, 0.45, 0.2], rotate: [0, 12, 0] }
            }
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 12, repeat: Infinity, ease: "linear" }
            }
          />
          {showBlur && (
            <div className="absolute inset-0 bg-gradient-to-br from-white/4 via-white/2 to-transparent" />
          )}
        </div>

        <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
          <motion.span
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-[var(--muted-foreground)] backdrop-blur"
            initial={{
              opacity: shouldReduceMotion ? 1 : 0,
              y: shouldReduceMotion ? 0 : 12,
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            Live Spotlight
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          </motion.span>

          <motion.h1
            id="dynamic-spotlight-title"
            initial={{
              opacity: shouldReduceMotion ? 1 : 0,
              y: shouldReduceMotion ? 0 : 18,
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-4xl font-semibold text-foreground sm:text-5xl md:text-6xl"
          >
            {text}
          </motion.h1>
          <p className="mt-4 max-w-md text-sm text-[var(--muted-foreground)] sm:text-base">
            Move your cursor to cast a live glassmorphic spotlight and preview
            premium motion-ready surfaces.
          </p>
        </div>

        <AnimatePresence>
          {!shouldReduceMotion && mousePosition && (
            <motion.div
              key="spotlight"
              initial={{ opacity: 0 }}
              animate={{ opacity: intensity }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="pointer-events-none absolute inset-0 mix-blend-screen"
              style={{
                background: `radial-gradient(circle ${radius}px at ${mousePosition.x}px ${mousePosition.y}px,
                  rgba(255,255,255,0.45) 0%,
                  rgba(255,255,255,0.2) 45%,
                  rgba(255,255,255,0) 75%)`,
              }}
            >
              <motion.div
                animate={{
                  background: [
                    "radial-gradient(circle, rgba(255,255,255,0.25) 0%, transparent 70%)",
                    "radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)",
                    "radial-gradient(circle, rgba(255,255,255,0.25) 0%, transparent 70%)",
                  ],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute"
                style={{
                  left: mousePosition.x,
                  top: mousePosition.y,
                  width: `${radius * 1.6}px`,
                  height: `${radius * 1.6}px`,
                  transform: "translate(-50%, -50%)",
                  filter: "blur(32px)",
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {particles.map((particle, index) => (
            <motion.span
              key={index}
              className="absolute rounded-full bg-white/25"
              style={{
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
              }}
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: [0, particle.travel, 0],
                      opacity: [0.1, 0.45, 0.1],
                    }
              }
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : {
                      duration: particle.duration,
                      repeat: Infinity,
                      delay: particle.delay,
                    }
              }
            />
          ))}
        </div>

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-emerald-300/50 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
