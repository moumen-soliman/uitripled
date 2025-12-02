"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface TabItem {
  id: string;
  label: string;
  icon?: LucideIcon;
  content: React.ReactNode;
}

interface SmartTabsProps {
  items: TabItem[];
  defaultValue?: string;
  className?: string;
}

export function SmartTabs({ items, defaultValue, className }: SmartTabsProps) {
  const [activeTab, setActiveTab] = useState<string>(
    defaultValue || items[0]?.id
  );
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  // Ensure activeTab is valid
  useEffect(() => {
    if (!items.find((item) => item.id === activeTab)) {
      setActiveTab(items[0]?.id);
    }
  }, [items, activeTab]);

  return (
    <div className={cn("w-full flex flex-col gap-6 items-start h-screen", className)}>
      <Tabs
        defaultValue={defaultValue || items[0]?.id}
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full flex flex-col items-center sm:items-start"
      >
        <TabsList className="h-auto flex-wrap gap-2 bg-muted/30 backdrop-blur-sm border border-border/50 p-1 rounded-xl w-fit">
          {items.map((item) => {
            const isActive = activeTab === item.id;
            const isHovered = hoveredTab === item.id;
            const Icon = item.icon;

            return (
              <TabsTrigger
                key={item.id}
                value={item.id}
                onMouseEnter={() => setHoveredTab(item.id)}
                onMouseLeave={() => setHoveredTab(null)}
                className={cn(
                  "relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[state=active]:bg-transparent data-[state=active]:shadow-none",
                  "text-muted-foreground hover:text-foreground data-[state=active]:text-primary-foreground"
                )}
              >
                {/* Active Background (Sliding Pill) */}
                {isActive && (
                  <motion.div
                    layoutId="smart-tab-active"
                    className="absolute inset-0 bg-primary rounded-lg shadow-sm"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}

                {/* Hover Background (Subtle) */}
                {isHovered && !isActive && (
                  <motion.div
                    layoutId="smart-tab-hover"
                    className="absolute inset-0 bg-muted rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}

                {/* Content */}
                <div className="relative z-10 flex items-center gap-2">
                  {Icon && <Icon className="w-4 h-4" />}
                  <span>{item.label}</span>
                </div>
              </TabsTrigger>
            );
          })}
        </TabsList>

        <div className="relative min-h-[200px] w-full mt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="w-full"
            >
              <TabsContent value={activeTab} className="mt-0">
                <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm backdrop-blur-xl">
                  {items.find((item) => item.id === activeTab)?.content}
                </div>
              </TabsContent>
            </motion.div>
          </AnimatePresence>
        </div>
      </Tabs>
    </div>
  );
}

// Example usage component for the registry
import { Code, Layers, Zap, Settings } from "lucide-react";

export function SmartTabsDemo() {
  const tabs = [
    {
      id: "design",
      label: "Design",
      icon: Layers,
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold tracking-tight">
            Design Principles
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Our design system is built on the principles of clarity, efficiency,
            and consistency. We believe that good design should be invisible,
            enabling users to accomplish their goals without distraction.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-24 rounded-lg bg-muted/50 animate-pulse"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "code",
      label: "Code",
      icon: Code,
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold tracking-tight">
            Clean Architecture
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            We prioritize maintainability and scalability in our codebase. By
            adhering to SOLID principles and modern patterns, we ensure that our
            software can evolve with the needs of the business.
          </p>
          <div className="p-4 rounded-lg bg-muted/30 font-mono text-sm">
            <span className="text-blue-500">function</span>{" "}
            <span className="text-yellow-500">optimize</span>() {"{"}
            <br />
            &nbsp;&nbsp;<span className="text-purple-500">return</span>{" "}
            <span className="text-green-500">"efficiency"</span>;
            <br />
            {"}"}
          </div>
        </div>
      ),
    },
    {
      id: "performance",
      label: "Performance",
      icon: Zap,
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold tracking-tight">
            Lightning Fast
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Performance is a feature. We obsess over milliseconds to deliver
            instant feedback and smooth interactions.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
              <div className="h-full w-[98%] bg-green-500 rounded-full" />
            </div>
            <span className="font-mono font-bold text-green-500">98/100</span>
          </div>
        </div>
      ),
    },
    {
      id: "settings",
      label: "Settings",
      icon: Settings,
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold tracking-tight">
            Configuration
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Customize your experience with granular controls.
          </p>
          <div className="space-y-2">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 rounded-lg border border-border/50"
              >
                <span className="text-sm font-medium">Option {i}</span>
                <div className="w-10 h-6 rounded-full bg-primary/20 relative">
                  <div className="absolute right-1 top-1 w-4 h-4 rounded-full bg-primary" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return <SmartTabs items={tabs} />;
}
