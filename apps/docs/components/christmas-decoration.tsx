"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function ChristmasDecoration({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
      className={cn("pointer-events-none absolute select-none", className)}
    >
      <svg
        width="90"
        height="40"
        viewBox="0 0 90 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm"
      >
        {/* Smooth Snow Cap on top */}
        <path
          d="M2 20C2 20 10 12 25 12C40 12 45 18 55 18C65 18 75 10 88 15"
          stroke="white"
          strokeWidth="8"
          strokeLinecap="round"
          className="opacity-90"
        />
        <path
          d="M2 20C2 20 10 12 25 12C40 12 45 18 55 18C65 18 75 10 88 15"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          className="blur-[1px]"
        />

        {/* Falling/Cloudy Snow Particles */}
        <circle cx="10" cy="25" r="2" fill="white" className="opacity-80" />
        <circle cx="30" cy="30" r="1.5" fill="white" className="opacity-60" />
        <circle cx="50" cy="22" r="2.5" fill="white" className="opacity-90" />
        <circle cx="70" cy="28" r="1.5" fill="white" className="opacity-70" />
        <circle cx="85" cy="20" r="2" fill="white" className="opacity-80" />
      </svg>
    </motion.div>
  );
}
