"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { ChevronRight, Folder } from "lucide-react";
import type React from "react";
import { useState } from "react";

interface Folder {
  name: string;
  content: React.ReactNode;
}

interface FolderBrowserProps {
  folders?: Folder[];
  initialFolder?: string;
}

export function FolderBrowser({
  folders = [],
  initialFolder,
}: FolderBrowserProps) {
  const [activeTab, setActiveTab] = useState(() => {
    if (initialFolder) return initialFolder;
    if (folders && folders.length > 0 && folders[0]?.name) {
      return folders[0].name;
    }
    return "";
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="group relative overflow-hidden rounded-2xl border border-border/40 bg-background/60 backdrop-blur transition-all hover:border-border/60 hover:shadow-lg"
      role="region"
      aria-label="Folder browser"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10" />

      {/* Content */}
      <div className="relative">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="relative flex h-10 w-full items-end justify-start overflow-x-auto overflow-y-hidden border-b border-border/40 bg-transparent p-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {folders?.map((folder) => (
              <TabsTrigger
                key={folder.name}
                value={folder.name}
                className="group/trigger relative flex h-10 flex-shrink-0 items-center gap-2 px-3 text-xs font-medium text-foreground/70 transition-all sm:px-4 sm:text-sm data-[state=active]:h-[calc(2.5rem+1px)] data-[state=active]:rounded-t-lg data-[state=active]:border data-[state=active]:border-border/40 data-[state=active]:border-b-transparent data-[state=active]:bg-background/60 data-[state=active]:text-foreground data-[state=active]:shadow-sm hover:text-foreground"
              >
                <Folder
                  className="h-4 w-4 text-foreground/40 group-hover/trigger:text-foreground/70"
                  aria-hidden="true"
                />
                {folder.name}
                <ChevronRight
                  className="h-4 w-4 text-foreground/40 opacity-0 transition-opacity group-hover/trigger:opacity-100"
                  aria-hidden="true"
                />
              </TabsTrigger>
            ))}
          </TabsList>
          {folders?.map((folder) => (
            <TabsContent
              key={folder.name}
              value={folder.name}
              className="p-6"
              role="tabpanel"
              aria-labelledby={`tab-${folder.name}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                    {folder.name} Contents
                  </h3>
                  <Badge
                    variant="outline"
                    className="rounded-full border-border/50 bg-background/55 px-3 py-1 text-xs uppercase tracking-[0.2em] text-foreground/70 backdrop-blur"
                  >
                    {folder.name.split(" ").pop()}
                  </Badge>
                </div>
                <div className="text-foreground/70">{folder.content}</div>
                <Button
                  variant="default"
                  className="gap-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90"
                  aria-label={`Explore ${folder.name}`}
                >
                  Explore More
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </motion.div>
  );
}

// Example usage (remove if not needed, this is for demonstration)
export const BrowseFolder = () => {
  const sampleFolders: Folder[] = [
    {
      name: "Documents",
      content: (
        <ul className="list-disc space-y-2 pl-4">
          <li>Report.pdf</li>
          <li>Notes.txt</li>
          <li>Spreadsheet.xlsx</li>
        </ul>
      ),
    },
    {
      name: "Images",
      content: (
        <ul className="list-disc space-y-2 pl-4">
          <li>Photo1.jpg</li>
          <li>Photo2.png</li>
          <li>Graphic.svg</li>
        </ul>
      ),
    },
    {
      name: "Projects",
      content: (
        <ul className="list-disc space-y-2 pl-4">
          <li>App.zip</li>
          <li>Design.fig</li>
          <li>Code.ts</li>
        </ul>
      ),
    },
  ];

  return <FolderBrowser folders={sampleFolders} initialFolder="Documents" />;
};
