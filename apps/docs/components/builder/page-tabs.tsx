"use client";

import type { BuilderLayoutMode, BuilderProjectPage } from "@/types/builder";
import { Button } from "@uitripled/react-shadcn/ui/button";
import { cn } from "@/lib/utils";
import { Edit3, Layers, LayoutGrid, Plus, Trash2 } from "lucide-react";

type PageTabsProps = {
  pages: BuilderProjectPage[];
  activePage: BuilderProjectPage | null;
  onSelectPage: (pageId: string) => void;
  onAddPage: () => void;
  onRenamePage: (pageId: string) => void;
  onDeletePage: (pageId: string) => void;
  activeRoute: string;
  layoutMode: BuilderLayoutMode;
  onLayoutModeChange: (pageId: string, mode: BuilderLayoutMode) => void;
};

export function PageTabs({
  pages,
  activePage,
  onSelectPage,
  onAddPage,
  onRenamePage,
  onDeletePage,
  activeRoute,
  layoutMode,
  onLayoutModeChange,
}: PageTabsProps) {
  return (
    <div className="px-4 pb-4 md:px-6">
      <div className="flex flex-wrap items-center gap-2">
        {pages.map((page, index) => (
          <div
            key={page.id}
            className="flex items-center gap-1 rounded-lg border border-border bg-card/60 p-1"
          >
            <Button
              size="sm"
              variant={page.id === activePage?.id ? "default" : "ghost"}
              className="gap-2"
              onClick={() => onSelectPage(page.id)}
            >
              {page.name}
              {index === 0 && (
                <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold uppercase text-primary">
                  Home
                </span>
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-muted-foreground"
              onClick={() => onRenamePage(page.id)}
              aria-label={`Rename ${page.name}`}
            >
              <Edit3 className="h-4 w-4" />
            </Button>
            {pages.length > 1 && (
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-destructive"
                onClick={() => onDeletePage(page.id)}
                aria-label={`Delete ${page.name}`}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
          </div>
        ))}
        <Button
          variant="outline"
          size="sm"
          className="gap-1"
          onClick={onAddPage}
        >
          <Plus className="h-4 w-4" />
          Add page
        </Button>
      </div>
      {activePage && (
        <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            Route:{" "}
            <span className="font-mono text-foreground">{activeRoute}</span>
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-muted-foreground">
              Layout
            </span>
            <div className="inline-flex rounded-lg border border-border bg-muted/40 p-0.5">
              <Button
                type="button"
                size="sm"
                variant="ghost"
                className={cn(
                  "h-8 gap-1 rounded-md px-2 text-xs",
                  layoutMode === "stack" && "bg-background shadow-sm"
                )}
                onClick={() => onLayoutModeChange(activePage.id, "stack")}
              >
                <LayoutGrid className="h-3.5 w-3.5" />
                Stack
              </Button>
              <Button
                type="button"
                size="sm"
                variant="ghost"
                className={cn(
                  "h-8 gap-1 rounded-md px-2 text-xs",
                  layoutMode === "free" && "bg-background shadow-sm"
                )}
                onClick={() => onLayoutModeChange(activePage.id, "free")}
              >
                <Layers className="h-3.5 w-3.5" />
                Free canvas
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
