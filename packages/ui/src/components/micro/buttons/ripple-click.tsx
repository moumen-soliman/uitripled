"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Ripple = {
  x: number;
  y: number;
  id: number;
};

export function RippleClickButton() {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = { x, y, id: Date.now() };
    setRipples([...ripples, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
  };

  return (
    <div className="flex items-center justify-center p-12">
      <button
        onClick={handleClick}
        className="relative overflow-hidden rounded-lg bg-accent px-8 py-3 font-semibold text-[var(--muted-foreground)] shadow-lg"
      >
        Click Me
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 4, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              position: "absolute",
              left: ripple.x,
              top: ripple.y,
              width: 20,
              height: 20,
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.6)",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </button>
    </div>
  );
}
