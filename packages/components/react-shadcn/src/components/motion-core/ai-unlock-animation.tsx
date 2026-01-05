"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type AIUnlockAnimationProps = {
  autoPlay?: boolean;
};

export function AIUnlockAnimation({ autoPlay = true }: AIUnlockAnimationProps) {
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // Auto-start if autoplay is enabled
  useEffect(() => {
    if (autoPlay) {
      setIsUnlocking(true);
      setIsComplete(false);
      const timer = setTimeout(() => {
        setIsComplete(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [autoPlay]);

  const triggerUnlock = () => {
    setIsUnlocking(true);
    setIsComplete(false);
    setTimeout(() => {
      setIsComplete(true);
    }, 3000);
  };

  const resetAnimation = () => {
    setIsUnlocking(false);
    setIsComplete(false);
  };

  // Generate minimal particles
  const particles = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    angle: (Math.PI * 2 * i) / 24,
    delay: Math.random() * 0.3,
    duration: 1.2 + Math.random() * 0.5,
  }));

  return (
    <div className="relative w-full max-w-md">
      {/* Main content card */}
      <motion.div
        className="relative bg-card border border-border rounded-2xl p-16 shadow-sm"
        animate={
          isUnlocking
            ? {
                boxShadow: [
                  "0 1px 3px 0 rgb(0 0 0 / 0.1)",
                  "0 0 0 4px rgb(0 0 0 / 0.05)",
                  "0 1px 3px 0 rgb(0 0 0 / 0.1)",
                ],
              }
            : {}
        }
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        {/* Ripple effects */}
        <AnimatePresence>
          {isUnlocking && (
            <>
              {[0, 0.2, 0.4].map((delay, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-2xl border border-foreground z-0"
                  initial={{ scale: 1, opacity: 0.3 }}
                  style={{ zIndex: -1 }}
                  animate={{ scale: 2, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5, delay, ease: "easeOut" }}
                />
              ))}
            </>
          )}
        </AnimatePresence>

        {/* Particle system */}
        <AnimatePresence>
          {isUnlocking &&
            particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute w-0.5 h-0.5 bg-foreground rounded-full"
                style={{
                  left: "50%",
                  top: "50%",
                }}
                initial={{ scale: 0, x: 0, y: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  x: Math.cos(particle.angle) * 200,
                  y: Math.sin(particle.angle) * 200,
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: particle.duration,
                  delay: particle.delay,
                  ease: "easeOut",
                }}
              />
            ))}
        </AnimatePresence>

        {/* AI Icon */}
        <div className="relative z-10 flex flex-col items-center space-y-8">
          <motion.div
            className="relative"
            animate={
              isUnlocking
                ? {
                    scale: [1, 1.1, 1],
                  }
                : {}
            }
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            {/* Minimal rings */}
            <AnimatePresence>
              {isUnlocking && (
                <>
                  <motion.div
                    className="absolute inset-0 rounded-full border border-foreground"
                    initial={{ scale: 1, opacity: 0.4 }}
                    animate={{ scale: 1.8, opacity: 0 }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full border border-border"
                    initial={{ scale: 1, opacity: 0.3 }}
                    animate={{ scale: 1.8, opacity: 0 }}
                    transition={{ duration: 1.2, delay: 0.4, repeat: Infinity }}
                  />
                </>
              )}
            </AnimatePresence>

            {/* AI Icon - Simple circle with sparkle */}
            <motion.div
              className="relative w-20 h-20 rounded-full border-2 border-foreground bg-card flex items-center justify-center"
              animate={
                isUnlocking
                  ? {
                      borderColor: [
                        "hsl(var(--foreground))",
                        "hsl(var(--muted-foreground))",
                        "hsl(var(--foreground))",
                      ],
                    }
                  : {}
              }
              transition={{ duration: 1.5, repeat: isUnlocking ? Infinity : 0 }}
            >
              <svg
                className="w-9 h-9 text-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </motion.div>
          </motion.div>

          {/* Text animations */}
          <div className="text-center space-y-4">
            <AnimatePresence mode="wait">
              {!isUnlocking && !isComplete && (
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-2xl font-semibold text-foreground"
                >
                  Unlock Lifetime Access
                </motion.h2>
              )}

              {isUnlocking && !isComplete && (
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-2xl font-semibold text-foreground"
                >
                  Activating...
                </motion.h2>
              )}

              {isComplete && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-2"
                >
                  <motion.h2
                    className="text-2xl font-semibold text-foreground"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 0.4 }}
                  >
                    Unlocked
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-sm text-muted-foreground"
                  >
                    Premium features activated
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Minimal loading bar */}
            {isUnlocking && !isComplete && (
              <motion.div
                className="w-48 h-px bg-border overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.div
                  className="h-full bg-foreground"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.8, ease: "easeInOut" }}
                />
              </motion.div>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 pt-2">
            {!isUnlocking && !isComplete && (
              <motion.button
                onClick={triggerUnlock}
                className="px-6 py-2 bg-foreground text-background text-sm font-medium rounded-md hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Activate
              </motion.button>
            )}

            {isComplete && (
              <motion.button
                onClick={resetAnimation}
                className="px-6 py-2 border border-border text-foreground text-sm font-medium rounded-md hover:bg-accent transition-colors"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Replay
              </motion.button>
            )}
          </div>
        </div>

        {/* Corner accents - minimal */}
        <AnimatePresence>
          {isUnlocking && (
            <>
              {["top-left", "top-right", "bottom-left", "bottom-right"].map(
                (corner, i) => (
                  <motion.div
                    key={corner}
                    className={`absolute w-8 h-8 border-foreground ${
                      corner === "top-left"
                        ? "top-0 left-0 border-t border-l"
                        : corner === "top-right"
                          ? "top-0 right-0 border-t border-r"
                          : corner === "bottom-left"
                            ? "bottom-0 left-0 border-b border-l"
                            : "bottom-0 right-0 border-b border-r"
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: [0, 0.4, 0], scale: [0.8, 1, 1] }}
                    transition={{ duration: 0.8, delay: i * 0.05 }}
                  />
                )
              )}
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
