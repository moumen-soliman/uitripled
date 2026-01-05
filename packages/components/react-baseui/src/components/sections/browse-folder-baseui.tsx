"use client";

import { Button } from "@base-ui/react/button";
import { motion } from "framer-motion";
import { ChevronRight, Folder } from "lucide-react";
import type React from "react";
import { useState } from "react";

interface FolderItem {
  name: string;
  content: React.ReactNode;
}

interface FolderBrowserBaseuiProps {
  folders?: FolderItem[];
  initialFolder?: string;
}

export function FolderBrowserBaseui({
  folders = [],
  initialFolder,
}: FolderBrowserBaseuiProps) {
  const [activeTab, setActiveTab] = useState(() => {
    if (initialFolder) return initialFolder;
    if (folders && folders.length > 0 && folders[0]?.name) {
      return folders[0].name;
    }
    return "";
  });

  const activeFolder = folders.find((f) => f.name === activeTab);

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
      <div className="absolute -z-10 inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Content */}
      <div className="relative">
        {/* Tab List */}
        <div
          role="tablist"
          className="relative flex h-10 w-full items-end justify-start overflow-x-auto overflow-y-hidden border-b border-border/40 bg-transparent p-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {folders?.map((folder) => (
            <button
              key={folder.name}
              role="tab"
              type="button"
              aria-selected={activeTab === folder.name}
              onClick={() => setActiveTab(folder.name)}
              className={`group/trigger relative flex h-10 flex-shrink-0 items-center gap-2 px-3 text-xs font-medium transition-all sm:px-4 sm:text-sm hover:text-foreground ${
                activeTab === folder.name
                  ? "h-[calc(2.5rem+1px)] rounded-t-lg border border-border/40 border-b-transparent bg-background/60 text-foreground shadow-sm"
                  : "text-foreground/70"
              }`}
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
            </button>
          ))}
        </div>

        {/* Tab Panel */}
        {activeFolder && (
          <div role="tabpanel" className="p-6">
            <motion.div
              key={activeFolder.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                  {activeFolder.name} Contents
                </h3>
                <span className="inline-flex items-center rounded-full border border-border/50 bg-background/55 px-3 py-1 text-xs uppercase tracking-[0.2em] text-foreground/70 backdrop-blur">
                  {activeFolder.name.split(" ").pop()}
                </span>
              </div>
              <div className="text-foreground/70">{activeFolder.content}</div>
              <Button
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                aria-label={`Explore ${activeFolder.name}`}
              >
                Explore More
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

// Example usage
export const BrowseFolderBaseui = () => {
  const sampleFolders: FolderItem[] = [
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

  return (
    <FolderBrowserBaseui folders={sampleFolders} initialFolder="Documents" />
  );
};
