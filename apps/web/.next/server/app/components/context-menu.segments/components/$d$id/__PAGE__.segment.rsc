1:"$Sreact.fragment"
2:I[176430,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"default"]
4:I[897367,["/_next/static/chunks/d96012bcfc98706a.js","/_next/static/chunks/c1216787d4b31b65.js"],"OutletBoundary"]
5:"$Sreact.suspense"
3:Taf9,"use client";

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
0:{"buildId":"bFBIq5AO28jMw9-shWxSc","rsc":["$","$1","c",{"children":[["$","$L2",null,{"code":"$3","variantCodes":{},"baseId":"context-menu"}],[["$","script","script-0",{"src":"/_next/static/chunks/caa50e77cf52fdaa.js","async":true}],["$","script","script-1",{"src":"/_next/static/chunks/e0bc9c3a4105a6fe.js","async":true}],["$","script","script-2",{"src":"/_next/static/chunks/48913bc585f72fa4.js","async":true}]],["$","$L4",null,{"children":["$","$5",null,{"name":"Next.MetadataOutlet","children":"$@6"}]}]]}],"loading":null,"isPartial":false}
6:null
