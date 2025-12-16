"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";

const options = ["React", "Vue", "Angular", "Svelte", "Next.js"];

export function AnimatedSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="relative w-full max-w-xs">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-lg border  bg-[var(--card-bg)] px-4 py-2 text-sm"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <span>{selected}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full z-50 mt-2 w-full rounded-lg border  bg-[var(--card-bg)] py-2 shadow-lg"
          >
            {options.map((option, index) => (
              <motion.button
                key={option}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
                className="flex w-full items-center justify-between px-4 py-2 text-left text-sm hover:bg-accent/10"
                whileHover={{ x: 4 }}
              >
                <span>{option}</span>
                {selected === option && (
                  <Check className="h-4 w-4 text-accent" />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
