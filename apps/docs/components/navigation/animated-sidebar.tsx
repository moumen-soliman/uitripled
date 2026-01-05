"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FileText, Home, Menu, Settings, Users, X } from "lucide-react";
import { useState } from "react";

const menuItems = [
  { icon: Home, label: "Dashboard" },
  { icon: Users, label: "Team" },
  { icon: FileText, label: "Documents" },
  { icon: Settings, label: "Settings" },
];

export function AnimatedSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-[var(--muted-foreground)]"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Menu className="h-5 w-5" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed left-0 top-0 z-50 h-full w-64 border-r bg-card  bg-[var(--card-bg)] p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-xl font-semibold"
                >
                  Menu
                </motion.h2>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-[var(--foreground)]/60 hover:text-[var(--foreground)]"
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </div>

              <nav className="mt-8">
                <ul className="space-y-2">
                  {menuItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.li
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                      >
                        <motion.button
                          className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium hover:bg-accent/10"
                          whileHover={{ x: 4 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Icon className="h-5 w-5" />
                          {item.label}
                        </motion.button>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
