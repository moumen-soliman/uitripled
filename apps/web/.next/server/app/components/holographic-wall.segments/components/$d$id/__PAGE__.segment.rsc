1:"$Sreact.fragment"
2:I[176430,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"default"]
8:I[897367,["/_next/static/chunks/d96012bcfc98706a.js","/_next/static/chunks/c1216787d4b31b65.js"],"OutletBoundary"]
9:"$Sreact.suspense"
3:T1154,"use client";

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
0:{"buildId":"bFBIq5AO28jMw9-shWxSc","rsc":["$","$1","c",{"children":[["$","$L2",null,{"code":"$3","variantCodes":{},"baseId":"holographic-wall"}],["$L4","$L5","$L6"],"$L7"]}],"loading":null,"isPartial":false}
4:["$","script","script-0",{"src":"/_next/static/chunks/caa50e77cf52fdaa.js","async":true}]
5:["$","script","script-1",{"src":"/_next/static/chunks/e0bc9c3a4105a6fe.js","async":true}]
6:["$","script","script-2",{"src":"/_next/static/chunks/48913bc585f72fa4.js","async":true}]
7:["$","$L8",null,{"children":["$","$9",null,{"name":"Next.MetadataOutlet","children":"$@a"}]}]
a:null
