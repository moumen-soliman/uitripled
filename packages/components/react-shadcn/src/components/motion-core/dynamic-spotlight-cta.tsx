"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useCallback, useId, useMemo, type PointerEvent } from "react";

import { cn } from "@/lib/utils";

type SpotlightAction = {
  label: string;
  href?: string;
  onClick?: () => void;
};

type DynamicSpotlightCTAProps = {
  text?: string;
  eyebrow?: string | null;
  description?: string | null;
  action?: SpotlightAction | null;
  /** Heading level for the CTA title. Defaults to 2 so the host page keeps its own h1. */
  headingLevel?: 1 | 2 | 3;
  /** Strength of the cursor glow, 0–1. */
  intensity?: number;
  /** Spotlight radius in px. */
  radius?: number;
  showBlur?: boolean;
  className?: string;
};

type Particle = {
  left: number;
  top: number;
  size: number;
  travel: number;
  duration: number;
  delay: number;
};

const PARTICLE_COUNT = 14;

/** Exact ease-out curve, not an approximation of it. */
const EASE_OUT: [number, number, number, number] = [0.2, 0, 0, 1];

/**
 * Deterministic PRNG. Particle positions must match between the server render
 * and the client hydration pass, so `Math.random()` cannot be used here.
 */
function mulberry32(seed: number) {
  let state = seed;
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export function DynamicSpotlightCTA({
  text = "Unlock Your Motion Power",
  eyebrow = "Live Spotlight",
  description = "Move your cursor to cast a live spotlight across the headline and preview motion-ready surfaces.",
  action = { label: "Get started" },
  headingLevel = 2,
  intensity = 0.85,
  radius = 240,
  showBlur = true,
  className,
}: DynamicSpotlightCTAProps) {
  const shouldReduceMotion = useReducedMotion();
  const titleId = useId();

  const safeIntensity = clamp(intensity, 0, 1);
  const safeRadius = clamp(radius, 80, 640);

  const Heading = `h${headingLevel}` as "h1" | "h2" | "h3";

  const particles = useMemo<Particle[]>(() => {
    const random = mulberry32(0x5eed);
    return Array.from({ length: PARTICLE_COUNT }, () => ({
      left: random() * 100,
      top: random() * 100,
      size: random() * 3 + 2,
      travel: random() * 64 - 32,
      duration: random() * 3 + 2.5,
      delay: random() * 2,
    }));
  }, []);

  // Percentages, so the spotlight has a meaningful position before first paint
  // and never depends on a measured box.
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);

  const springConfig = { stiffness: 300, damping: 30 };
  const x = useSpring(pointerX, springConfig);
  const y = useSpring(pointerY, springConfig);

  // The beam: opaque at the cursor, gone at the edges.
  const beamMask = useMotionTemplate`radial-gradient(circle ${safeRadius}px at ${x}% ${y}%, #000 0%, #000 32%, transparent 72%)`;
  // Its inverse, used to wipe the shading veil away inside the beam.
  const veilMask = useMotionTemplate`radial-gradient(circle ${safeRadius}px at ${x}% ${y}%, transparent 0%, transparent 32%, #000 72%)`;

  const handlePointerMove = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      // Coarse pointers have no hover position to track, and reduced motion
      // opts out of the moving spotlight entirely.
      if (shouldReduceMotion || event.pointerType !== "mouse") return;
      const rect = event.currentTarget.getBoundingClientRect();
      pointerX.set(((event.clientX - rect.left) / rect.width) * 100);
      pointerY.set(((event.clientY - rect.top) / rect.height) * 100);
    },
    [pointerX, pointerY, shouldReduceMotion]
  );

  const recenter = useCallback(() => {
    pointerX.set(50);
    pointerY.set(50);
  }, [pointerX, pointerY]);

  const enterTransition = { duration: 0.4, ease: EASE_OUT };

  return (
    <section
      aria-labelledby={titleId}
      className={cn("relative w-full", className)}
    >
      <div
        onPointerMove={handlePointerMove}
        onPointerLeave={recenter}
        className="relative isolate min-h-[22rem] w-full overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 shadow-[0_1px_2px_-1px_oklch(0_0_0/0.08),0_24px_64px_-32px_oklch(0_0_0/0.28)]"
      >
        {/* Ambient wash */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <motion.div
            className="absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-foreground blur-[140px]"
            style={{ opacity: 0.06 }}
            animate={
              shouldReduceMotion ? undefined : { opacity: [0.04, 0.09, 0.04] }
            }
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 9, repeat: Infinity, ease: "easeInOut" }
            }
          />
          {showBlur && (
            <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.03] to-transparent" />
          )}
        </div>

        {/* Drifting motes */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          {particles.map((particle, index) => (
            <motion.span
              key={index}
              className="absolute rounded-full bg-foreground/20"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                width: particle.size,
                height: particle.size,
              }}
              animate={
                shouldReduceMotion
                  ? undefined
                  : { y: [0, particle.travel, 0], opacity: [0.1, 0.4, 0.1] }
              }
              transition={
                shouldReduceMotion
                  ? undefined
                  : {
                      duration: particle.duration,
                      repeat: Infinity,
                      delay: particle.delay,
                      ease: "easeInOut",
                    }
              }
            />
          ))}
        </div>

        {/* Shading veil, wiped away inside the beam. Neutral black in both
            themes, so the beam always reads as light rather than as a tint. */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[oklch(0_0_0/0.05)] dark:bg-[oklch(0_0_0/0.45)]"
          style={{
            WebkitMaskImage: veilMask,
            maskImage: veilMask,
            opacity: safeIntensity,
          }}
        />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
          {eyebrow && (
            <motion.span
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground"
              initial={
                shouldReduceMotion ? false : { opacity: 0, y: 8 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={enterTransition}
            >
              {eyebrow}
              <span aria-hidden className="size-1.5 rounded-full bg-foreground" />
            </motion.span>
          )}

          <motion.div
            className="relative"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...enterTransition, delay: 0.1 }}
          >
            {/* Base headline. Dimmed, but still measured well past the 3:1 that
                large text needs, so nothing depends on the beam finding it. */}
            <Heading
              id={titleId}
              className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-muted-foreground sm:text-5xl md:text-6xl"
            >
              {text}
            </Heading>

            {/* Same words at full contrast, revealed only inside the beam. */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 select-none"
            >
              <motion.span
                className="block text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl"
                style={{
                  WebkitMaskImage: beamMask,
                  maskImage: beamMask,
                }}
              >
                {text}
              </motion.span>
            </span>
          </motion.div>

          {description && (
            <motion.p
              className="mt-5 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...enterTransition, delay: 0.2 }}
            >
              {description}
            </motion.p>
          )}

          {action && (
            <motion.div
              className="mt-8"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...enterTransition, delay: 0.3 }}
            >
              <SpotlightCTAButton action={action} />
            </motion.div>
          )}
        </div>

        {/* Structural hairlines */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
        </div>
      </div>
    </section>
  );
}

function SpotlightCTAButton({ action }: { action: SpotlightAction }) {
  const className = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-7 text-sm font-medium",
    "bg-primary text-primary-foreground",
    "transition-[opacity,scale] duration-150 ease-[cubic-bezier(0.2,0,0,1)]",
    "hover:opacity-90 active:scale-[0.96]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card",
    "motion-reduce:transition-none motion-reduce:active:scale-100"
  );

  if (action.href) {
    return (
      <a href={action.href} onClick={action.onClick} className={className}>
        {action.label}
      </a>
    );
  }

  return (
    <button type="button" onClick={action.onClick} className={className}>
      {action.label}
    </button>
  );
}
