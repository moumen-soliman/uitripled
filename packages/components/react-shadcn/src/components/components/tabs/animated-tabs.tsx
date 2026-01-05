"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { useState } from "react";

export function AnimatedTabs() {
  const tabs = ["Account", "Password", "Settings"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="flex items-center justify-center p-12">
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-[400px]"
      >
        <TabsList className="relative grid w-full grid-cols-3">
          {tabs.map((tab) => (
            <TabsTrigger key={tab} value={tab} className="relative z-10">
              {tab}
            </TabsTrigger>
          ))}
          <motion.div
            layoutId="activeTab"
            className="absolute h-8 rounded-sm bg-[var(--card-bg)] shadow-sm"
            initial={false}
            animate={{
              x: tabs.indexOf(activeTab) * 133.33,
              width: 133.33,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </TabsList>
        {tabs.map((tab) => (
          <TabsContent key={tab} value={tab} className="mt-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-lg border  p-4"
            >
              <p className="text-sm">{tab} settings content goes here</p>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
