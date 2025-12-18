"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function ElasticSwitch() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="flex items-center justify-center p-12">
      <button
        onClick={() => setIsOn(!isOn)}
        className={`relative h-12 w-24 rounded-full p-1 transition-colors ${
          isOn ? "bg-accent" : "bg-gray-300 dark:bg-gray-600"
        }`}
      >
        <motion.div
          layout
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 30,
          }}
          className={`h-10 w-10 rounded-full bg-white shadow-md ${
            isOn ? "ml-auto" : ""
          }`}
        />
      </button>
    </div>
  );
}
