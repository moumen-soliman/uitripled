"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";

export function AnimatedCheckbox() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      {[
        "Subscribe to newsletter",
        "Agree to terms and conditions",
        "Enable notifications",
      ].map((label, index) => (
        <label key={label} className="flex cursor-pointer items-center gap-3">
          <motion.div
            className="relative flex h-6 w-6 items-center justify-center rounded border-2"
            style={{
              borderColor:
                index === 0 && isChecked
                  ? "rgb(var(--accent))"
                  : "rgb(var(--border))",
              backgroundColor:
                index === 0 && isChecked ? "rgb(var(--accent))" : "transparent",
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => index === 0 && setIsChecked(!isChecked)}
          >
            <motion.div
              initial={false}
              animate={{
                scale: index === 0 && isChecked ? 1 : 0,
                opacity: index === 0 && isChecked ? 1 : 0,
              }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              <Check
                className="h-4 w-4 text-[var(--muted-foreground)]"
                strokeWidth={3}
              />
            </motion.div>
          </motion.div>
          <span className="text-sm">{label}</span>
        </label>
      ))}
    </div>
  );
}
