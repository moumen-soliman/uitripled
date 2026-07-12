"use client";

import { cn } from "@uitripled/utils";
import { Tabs } from "@base-ui/react/tabs";
import { motion, MotionConfig } from "framer-motion";
import { useId, useState } from "react";

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
  const pillLayoutId = useId();
  const [activeTab, setActiveTab] = useState(defaultValue || items[0].id);
  const [direction, setDirection] = useState(1);

  const handleValueChange = (value: string) => {
    const oldIndex = items.findIndex((item) => item.id === activeTab);
    const newIndex = items.findIndex((item) => item.id === value);
    setDirection(newIndex >= oldIndex ? 1 : -1);
    setActiveTab(value);
  };

  return (
    <MotionConfig reducedMotion="user">
      <Tabs.Root
        value={activeTab}
        onValueChange={(val) => handleValueChange(val as string)}
        className={cn("w-full max-w-md", className)}
      >
        <Tabs.List className="relative flex w-full items-center gap-1 rounded-xl bg-muted/50 p-1 border border-black/5 dark:border-white/5">
          {items.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <Tabs.Tab
                key={tab.id}
                value={tab.id}
                className="relative z-10 flex-1 cursor-pointer rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 aria-selected:text-foreground text-muted-foreground hover:text-foreground bg-transparent border-0"
              >
                {isActive && (
                  <motion.div
                    layoutId={pillLayoutId}
                    className="absolute inset-0 z-[-1] rounded-lg bg-background shadow-sm border border-black/5 dark:border-white/5"
                    transition={{ type: "spring", duration: 0.45, bounce: 0.15 }}
                  />
                )}
                {tab.label}
              </Tabs.Tab>
            );
          })}
        </Tabs.List>
        {items.map((item) => (
          <Tabs.Panel
            key={item.id}
            value={item.id}
            className="mt-4 overflow-hidden rounded-xl border bg-background p-6 shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <motion.div
              initial={{ opacity: 0, x: direction * 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            >
              {item.content}
            </motion.div>
          </Tabs.Panel>
        ))}
      </Tabs.Root>
    </MotionConfig>
  );
}
