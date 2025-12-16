"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type Avatar = {
  id: string;
  name: string;
  initials: string;
  color: string;
};

type MagneticAvatarGroupProps = {
  avatars?: Avatar[];
  maxVisible?: number;
};

export function MagneticAvatarGroup({
  avatars = [
    { id: "1", name: "John Doe", initials: "JD", color: "bg-primary" },
    { id: "2", name: "Jane Smith", initials: "JS", color: "bg-primary/80" },
    { id: "3", name: "Bob Wilson", initials: "BW", color: "bg-primary/60" },
    { id: "4", name: "Alice Brown", initials: "AB", color: "bg-primary/40" },
  ],
  maxVisible = 4,
}: MagneticAvatarGroupProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const visibleAvatars = avatars.slice(0, maxVisible);

  return (
    <div className="flex items-center gap-2">
      {visibleAvatars.map((avatar, index) => {
        const isHovered = hoveredId === avatar.id;
        const spread = isHovered ? 40 : 0;

        return (
          <div key={avatar.id} className="relative">
            <motion.div
              initial={{ x: -index * 8, opacity: 0 }}
              animate={{
                x: isHovered ? -index * 8 - spread : -index * 8,
                opacity: 1,
                scale: isHovered ? 1.15 : 1,
                zIndex: isHovered ? 10 : index,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
              onHoverStart={() => setHoveredId(avatar.id)}
              onHoverEnd={() => setHoveredId(null)}
              className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full ${avatar.color} text-primary-foreground font-semibold text-xs shadow-md`}
            >
              {avatar.initials}
            </motion.div>

            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.8 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                  }}
                  className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-border bg-card px-3 py-1.5 text-xs shadow-lg"
                >
                  {avatar.name}
                  <div className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 border-b border-r border-border bg-card" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}

      {avatars.length > maxVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-border bg-muted text-xs font-medium"
        >
          +{avatars.length - maxVisible}
        </motion.div>
      )}
    </div>
  );
}
