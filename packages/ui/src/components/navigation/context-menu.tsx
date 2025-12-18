"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Copy, Edit, Share, Trash } from "lucide-react";
import { useState } from "react";

const menuItems = [
  { icon: Copy, label: "Copy", shortcut: "⌘C" },
  { icon: Edit, label: "Edit", shortcut: "⌘E" },
  { icon: Share, label: "Share", shortcut: "⌘S" },
  { icon: Trash, label: "Delete", shortcut: "⌘D", danger: true },
];

export function ContextMenu() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setPosition({ x: e.clientX, y: e.clientY });
    setIsVisible(true);
  };

  return (
    <>
      <div
        onContextMenu={handleContextMenu}
        onClick={() => setIsVisible(false)}
        className="flex h-64 w-64 items-center justify-center rounded-2xl border-2 border-dashed  bg-[var(--card-bg)]"
      >
        <p className="text-sm text-[var(--foreground)]/60">Right-click here</p>
      </div>

      <AnimatePresence>
        {isVisible && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsVisible(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="fixed bg-card z-50 w-56 rounded-xl border  bg-[var(--card-bg)] p-2 shadow-2xl"
              style={{ left: position.x, top: position.y }}
            >
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm ${
                      item.danger
                        ? "text-red-500 hover:bg-red-500/10"
                        : "hover:bg-accent/10"
                    }`}
                    whileHover={{ x: 4 }}
                    onClick={() => setIsVisible(false)}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </div>
                    <kbd className="text-xs opacity-60">{item.shortcut}</kbd>
                  </motion.button>
                );
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
