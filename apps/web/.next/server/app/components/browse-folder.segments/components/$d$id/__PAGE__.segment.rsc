1:"$Sreact.fragment"
2:I[176430,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"default"]
a:I[897367,["/_next/static/chunks/d96012bcfc98706a.js","/_next/static/chunks/c1216787d4b31b65.js"],"OutletBoundary"]
b:"$Sreact.suspense"
3:T14d9,"use client";

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
4:T1403,"use client";

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
5:T14d9,"use client";

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
0:{"buildId":"bFBIq5AO28jMw9-shWxSc","rsc":["$","$1","c",{"children":[["$","$L2",null,{"code":"$3","variantCodes":{},"baseId":"browse-folder","baseuiCode":"$4","shadcnuiCode":"$5"}],["$L6","$L7","$L8"],"$L9"]}],"loading":null,"isPartial":false}
6:["$","script","script-0",{"src":"/_next/static/chunks/caa50e77cf52fdaa.js","async":true}]
7:["$","script","script-1",{"src":"/_next/static/chunks/e0bc9c3a4105a6fe.js","async":true}]
8:["$","script","script-2",{"src":"/_next/static/chunks/48913bc585f72fa4.js","async":true}]
9:["$","$La",null,{"children":["$","$b",null,{"name":"Next.MetadataOutlet","children":"$@c"}]}]
c:null
