1:"$Sreact.fragment"
2:I[176430,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"default"]
8:I[897367,["/_next/static/chunks/d96012bcfc98706a.js","/_next/static/chunks/c1216787d4b31b65.js"],"OutletBoundary"]
9:"$Sreact.suspense"
3:T1761,"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { useState } from "react";

interface SearchItem {
  id: number;
  icon: string;
  iconBg: string;
  title: string;
  type: string;
  link?: string;
}

export function MacSearchbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const items: SearchItem[] = [
    {
      id: 1,
      icon: "💬",
      iconBg: "bg-zinc-700",
      title: "WhatsApp",
      type: "app",
    },
    {
      id: 2,
      icon: "⚫",
      iconBg: "bg-zinc-900",
      title: "moumen-soliman/ui-tripled",
      link: "https://x.com/uitripled",
      type: "github",
    },
    {
      id: 3,
      icon: "𝕏",
      iconBg: "bg-black",
      link: "https://x.com/moumensoliman",
      title: "Moumen Soliman on X",
      type: "twitter",
    },
  ];

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {/* Search Input */}
        <motion.div
          className="relative backdrop-blur-xl bg-white/5 rounded-2xl border shadow-2xl transition-all duration-300"
          animate={{
            borderColor: isFocused
              ? "rgba(255, 255, 255, 0.3)"
              : "rgba(255, 255, 255, 0.1)",
            boxShadow: isFocused
              ? "0 0 40px rgba(255, 255, 255, 0.2), 0 20px 60px rgba(0,0,0,0.5)"
              : "0 20px 60px rgba(0,0,0,0.5)",
          }}
        >
          <motion.div className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5">
            <Search className="w-5 h-5" />
          </motion.div>
          <input
            type="text"
            placeholder="Search or Enter URL..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full bg-transparent text-foreground placeholder:text-muted-foreground rounded-2xl py-4 pl-14 pr-6 text-base border-none focus:outline-none"
          />
        </motion.div>

        {/* Dropdown - Animated */}
        <AnimatePresence>
          {(searchQuery || isFocused) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mt-2 backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    opacity: {
                      duration: 0.3,
                      delay: index * 0.05,
                      ease: "easeOut",
                    },
                  }}
                  whileHover={{
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    transition: { duration: 0.15 },
                  }}
                  onClick={() => {
                    if (item.link) {
                      window.open(item.link, "_blank");
                    }
                  }}
                  className={`flex items-center justify-between px-5 py-3.5 ${item.link ? "cursor-pointer" : ""} group ${
                    index !== filteredItems.length - 1
                      ? "border-b border-white/5"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 ${item.iconBg} rounded-lg flex items-center justify-center text-[var(--muted-foreground)] text-base shadow-lg`}
                    >
                      {item.icon}
                    </div>
                    <span className="text-foreground text-sm font-light">
                      {item.title}
                    </span>
                  </div>

                  {item.link && (
                    <button className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors text-sm font-light">
                      <span className="hidden sm:inline">Open Link</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </motion.div>
              ))}

              {/* Contact the Team */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  opacity: {
                    duration: 0.3,
                    delay: filteredItems.length * 0.05,
                    ease: "easeOut",
                  },
                }}
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  transition: { duration: 0.15 },
                }}
                className="flex items-center gap-3 px-5 py-3.5 cursor-pointer border-t border-white/5"
              >
                <div className="w-9 h-9 bg-muted backdrop-blur rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-[var(--muted-foreground)] text-base">
                    💬
                  </span>
                </div>
                <span className="text-foreground text-sm font-light">
                  Contact the Team
                </span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
0:{"buildId":"bFBIq5AO28jMw9-shWxSc","rsc":["$","$1","c",{"children":[["$","$L2",null,{"code":"$3","variantCodes":{},"baseId":"mac-searchbar"}],["$L4","$L5","$L6"],"$L7"]}],"loading":null,"isPartial":false}
4:["$","script","script-0",{"src":"/_next/static/chunks/caa50e77cf52fdaa.js","async":true}]
5:["$","script","script-1",{"src":"/_next/static/chunks/e0bc9c3a4105a6fe.js","async":true}]
6:["$","script","script-2",{"src":"/_next/static/chunks/48913bc585f72fa4.js","async":true}]
7:["$","$L8",null,{"children":["$","$9",null,{"name":"Next.MetadataOutlet","children":"$@a"}]}]
a:null
