"use client";

import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { useState } from "react";

export function FloatingLabelInput() {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  const isFloating = isFocused || value.length > 0;

  return (
    <div className="flex items-center justify-center p-12">
      <div className="relative w-64">
        <Input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="peer"
        />
        <motion.label
          animate={{
            y: isFloating ? -24 : 10,
            scale: isFloating ? 0.85 : 1,
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="pointer-events-none absolute left-3 origin-left text-sm text-gray-500"
        >
          Email address
        </motion.label>
      </div>
    </div>
  );
}
