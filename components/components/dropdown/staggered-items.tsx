"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const items = ["Profile", "Settings", "Billing", "Team", "Logout"];

export function StaggeredDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-center p-12">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 rounded-lg border  bg-[var(--card-bg)] px-4 py-2 shadow-sm transition-colors hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          Menu
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute bg-card right-0 mt-2 w-48 overflow-hidden rounded-lg border  bg-[var(--card-bg)] shadow-xl"
            >
              {items.map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setIsOpen(false)}
                  className="w-full px-4 py-2.5 text-left transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {item}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
