"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Copy, Edit, MoreVertical, Share2, Trash2 } from "lucide-react";
import { MouseEvent, useRef, useState } from "react";

type MenuItem = {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
  danger?: boolean;
};

type ContextMenuBubbleProps = {
  items?: MenuItem[];
};

export function ContextMenuBubble({
  items = [
    { label: "Edit", icon: <Edit className="h-4 w-4" />, onClick: () => {} },
    { label: "Copy", icon: <Copy className="h-4 w-4" />, onClick: () => {} },
    { label: "Share", icon: <Share2 className="h-4 w-4" />, onClick: () => {} },
    {
      label: "Delete",
      icon: <Trash2 className="h-4 w-4" />,
      onClick: () => {},
      danger: true,
    },
  ],
}: ContextMenuBubbleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const triggerRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = () => {
    if (triggerRef.current && containerRef.current) {
      const buttonRect = triggerRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      setPosition({
        x: buttonRect.left + buttonRect.width / 2 - containerRect.left,
        y: buttonRect.top + buttonRect.height / 2 - containerRect.top,
      });
    }
  };

  const handleContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    updatePosition();
    setIsOpen(true);
  };

  const handleClick = () => {
    updatePosition();
    setIsOpen(!isOpen);
  };

  const closeMenu = () => setIsOpen(false);

  const itemCount = items.length;
  const radius = 80;
  const angleStep = (2 * Math.PI) / itemCount;

  return (
    <div
      ref={containerRef}
      className="relative flex h-64 w-full items-center justify-center overflow-hidden rounded-2xl"
    >
      <motion.button
        ref={triggerRef}
        onContextMenu={handleContextMenu}
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground"
      >
        <MoreVertical className="h-5 w-5" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 z-40"
            />

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
              className="absolute z-50 flex h-40 w-40 items-center justify-center"
              style={{
                left: position.x - 80,
                top: position.y - 80,
              }}
            >
              <div className="absolute inset-0 rounded-full bg-background/95 backdrop-blur-sm" />

              {items.map((item, index) => {
                const angle = index * angleStep - Math.PI / 2;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.button
                    key={item.label}
                    initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                      x,
                      y,
                      rotate: 360,
                    }}
                    exit={{ scale: 0, opacity: 0, x: 0, y: 0 }}
                    transition={{
                      delay: index * 0.05,
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      item.onClick();
                      closeMenu();
                    }}
                    className={`absolute flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card shadow-lg transition-colors ${
                      item.danger
                        ? "hover:bg-destructive hover:text-destructive-foreground"
                        : "hover:bg-primary hover:text-primary-foreground"
                    }`}
                  >
                    {item.icon}
                  </motion.button>
                );
              })}

              <button
                onClick={closeMenu}
                className="absolute flex h-10 w-10 items-center justify-center rounded-full bg-card"
              >
                <MoreVertical className="h-5 w-5" />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
