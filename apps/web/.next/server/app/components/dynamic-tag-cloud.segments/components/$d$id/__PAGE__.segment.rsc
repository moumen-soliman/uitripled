1:"$Sreact.fragment"
2:I[176430,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"default"]
4:I[897367,["/_next/static/chunks/d96012bcfc98706a.js","/_next/static/chunks/c1216787d4b31b65.js"],"OutletBoundary"]
5:"$Sreact.suspense"
3:T7f8,"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Tag = {
  id: string;
  label: string;
};

type DynamicTagCloudProps = {
  tags?: Tag[];
};

export function DynamicTagCloud({
  tags = [
    { id: "1", label: "React" },
    { id: "2", label: "TypeScript" },
    { id: "3", label: "Framer Motion" },
    { id: "4", label: "TailwindCSS" },
    { id: "5", label: "Next.js" },
    { id: "6", label: "Design" },
  ],
}: DynamicTagCloudProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const generateRandomOffset = () => ({
    x: Math.random() * 20 - 10,
    y: Math.random() * 20 - 10,
  });

  return (
    <div className="">
      <div className="flex flex-wrap items-center justify-center gap-3">
        {tags.map((tag, index) => {
          const offset = generateRandomOffset();
          const isHovered = hoveredId === tag.id;

          return (
            <motion.button
              key={tag.id}
              initial={{
                x: offset.x,
                y: offset.y,
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                x: isHovered ? offset.x * 1.5 : offset.x,
                y: isHovered ? offset.y * 1.5 : offset.y,
                opacity: 1,
                scale: isHovered ? 1.1 : 1,
              }}
              whileHover={{
                scale: 1.15,
                zIndex: 10,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: index * 0.05,
              }}
              onHoverStart={() => setHoveredId(tag.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="rounded-full border border-border bg-muted px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {tag.label}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
0:{"buildId":"bFBIq5AO28jMw9-shWxSc","rsc":["$","$1","c",{"children":[["$","$L2",null,{"code":"$3","variantCodes":{},"baseId":"dynamic-tag-cloud"}],[["$","script","script-0",{"src":"/_next/static/chunks/caa50e77cf52fdaa.js","async":true}],["$","script","script-1",{"src":"/_next/static/chunks/e0bc9c3a4105a6fe.js","async":true}],["$","script","script-2",{"src":"/_next/static/chunks/48913bc585f72fa4.js","async":true}]],["$","$L4",null,{"children":["$","$5",null,{"name":"Next.MetadataOutlet","children":"$@6"}]}]]}],"loading":null,"isPartial":false}
6:null
