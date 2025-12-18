"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const options = ["Daily", "Weekly", "Monthly", "Never"];

export function AnimatedRadio() {
  const [selected, setSelected] = useState("Weekly");

  return (
    <div className="space-y-3">
      <p className="text-sm font-medium">Email frequency</p>
      {options.map((option) => (
        <label key={option} className="flex cursor-pointer items-center gap-3">
          <motion.div
            className="relative flex h-6 w-6 items-center justify-center rounded-full border-2"
            style={{
              borderColor:
                selected === option
                  ? "rgb(var(--accent))"
                  : "rgb(var(--border))",
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelected(option)}
          >
            <motion.div
              initial={false}
              animate={{
                scale: selected === option ? 1 : 0,
              }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: "rgb(var(--accent))" }}
            />
          </motion.div>
          <span className="text-sm">{option}</span>
        </label>
      ))}
    </div>
  );
}
