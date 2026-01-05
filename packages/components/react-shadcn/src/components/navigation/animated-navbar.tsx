"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const navItems = ["Home", "About", "Services", "Contact"];

export function AnimatedNavbar() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <nav className="rounded-2xl border  bg-[var(--card-bg)] p-2">
      <ul className="flex gap-1">
        {navItems.map((item, index) => (
          <li key={item} className="relative">
            <motion.button
              onClick={() => setActiveIndex(index)}
              className="relative z-10 px-4 py-2 text-sm font-medium transition-colors"
              style={{
                color: activeIndex === index ? "white" : "var(--foreground)",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.button>
            {activeIndex === index && (
              <motion.div
                layoutId="navbar-indicator"
                className="absolute inset-0 rounded-lg bg-accent"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
