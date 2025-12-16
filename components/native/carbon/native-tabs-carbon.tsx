"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

interface NativeTabsProps {
  items: {
    id: string;
    label: string;
    content: React.ReactNode;
  }[];
  defaultValue?: string;
  className?: string;
}

export function NativeTabs({
  items,
  defaultValue,
  className,
}: NativeTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue || items[0].id);

  return (
    <div className={cn("w-full max-w-md", className)}>
      <div className="relative flex w-full items-center gap-1 rounded-xl bg-muted/50 p-1 border border-black/5 dark:border-white/5">
        {items.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "relative z-10 flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 z-[-1] rounded-lg bg-background shadow-sm border border-black/5 dark:border-white/5"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="mt-4 overflow-hidden rounded-xl border bg-background p-6 shadow-sm">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          transition={{ duration: 0.2 }}
        >
          {items.find((item) => item.id === activeTab)?.content}
        </motion.div>
      </div>
    </div>
  );
}
