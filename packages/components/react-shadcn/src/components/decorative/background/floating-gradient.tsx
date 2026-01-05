"use client";

import { motion } from "framer-motion";

export function FloatingGradient() {
  return (
    <div className="relative h-96 w-full overflow-hidden rounded-2xl border  bg-[var(--card-bg)]">
      <motion.div
        className="absolute h-96 w-96 rounded-full bg-gradient-to-r from-blue-500 to-slate-500 opacity-20 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "10%", left: "10%" }}
      />
      <motion.div
        className="absolute h-96 w-96 rounded-full bg-gradient-to-r from-pink-500 to-red-500 opacity-20 blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ bottom: "10%", right: "10%" }}
      />
      <motion.div
        className="absolute h-96 w-96 rounded-full bg-gradient-to-r from-green-500 to-cyan-500 opacity-20 blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -100, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "50%", left: "50%" }}
      />
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Floating Gradient</h2>
          <p className="mt-2 text-[var(--foreground)]/70">
            Animated background effect
          </p>
        </div>
      </div>
    </div>
  );
}
