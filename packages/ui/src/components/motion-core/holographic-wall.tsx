"use client";

import { motion } from "framer-motion";
import { MouseEvent, useEffect, useState } from "react";

type HolographicWallProps = {
  intensity?: number;
  radius?: number;
};

// Pharaonic hieroglyphic symbols
const HIEROGLYPHS = [
  "𓄿",
  "𓇋",
  "𓅱",
  "𓃀",
  "𓊪",
  "𓆑",
  "𓅓",
  "𓈖",
  "𓂋",
  "𓉔",
  "𓎛",
  "𓐍",
  "𓄡",
  "𓋴",
  "𓈙",
  "𓈎",
  "𓎡",
  "𓎼",
  "𓏏",
  "𓂧",
];

export function HolographicWall({
  intensity = 0.8,
  radius = 200,
}: HolographicWallProps) {
  const [mousePosition, setMousePosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [letters, setLetters] = useState<
    Array<{ char: string; x: number; y: number }>
  >([]);

  useEffect(() => {
    // Generate random letters across the wall
    const gridSize = 20;
    const spacingX = window.innerWidth / gridSize;
    const spacingY = 400 / gridSize;
    const newLetters: Array<{ char: string; x: number; y: number }> = [];

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        newLetters.push({
          char: HIEROGLYPHS[Math.floor(Math.random() * HIEROGLYPHS.length)],
          x: i * spacingX,
          y: j * spacingY,
        });
      }
    }
    setLetters(newLetters);
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition(null);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-96 w-full overflow-hidden rounded-2xl border border-border bg-black"
    >
      {/* Pharaonic hieroglyphs on the wall */}
      <div className="absolute inset-0">
        {letters.map((letter, index) => {
          const distance = mousePosition
            ? Math.sqrt(
                Math.pow(letter.x - mousePosition.x, 2) +
                  Math.pow(letter.y - mousePosition.y, 2)
              )
            : Infinity;

          const letterIntensity =
            mousePosition && distance < radius
              ? Math.max(0, 1 - distance / radius) * intensity
              : 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0.15 }}
              animate={{
                opacity:
                  mousePosition && distance < radius
                    ? 0.15 + letterIntensity
                    : 0.15,
                scale: mousePosition && distance < radius ? 1.3 : 1,
                color:
                  mousePosition && distance < radius
                    ? `rgba(255, 215, 0, ${0.3 + letterIntensity})`
                    : "rgba(200, 200, 200, 0.15)",
              }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
              }}
              className="absolute text-sm pointer-events-none select-none"
              style={{
                left: letter.x,
                top: letter.y,
                textShadow:
                  mousePosition && distance < radius
                    ? `0 0 ${letterIntensity * 25}px rgba(255, 215, 0, ${letterIntensity})`
                    : "none",
              }}
            >
              {letter.char}
            </motion.div>
          );
        })}
      </div>

      {/* Golden cursor light reflection - only around cursor */}
      {mousePosition && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: intensity }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 pointer-events-none"
        >
          {/* Additional halo effect for extra glow */}
          <div
            className="absolute"
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
              width: `${radius * 2}px`,
              height: `${radius * 2}px`,
              transform: "translate(-50%, -50%)",
              background:
                "radial-gradient(circle, rgba(255, 215, 0, 0.6) 0%, rgba(255, 215, 0, 0.3) 30%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
        </motion.div>
      )}
    </div>
  );
}
