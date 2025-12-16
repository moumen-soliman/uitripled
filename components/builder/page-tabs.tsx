"use client";

import { Button } from "@/components/ui/button";
import type { BuilderProjectPage } from "@/types/builder";
import { Edit3, Plus, Trash2 } from "lucide-react";

type PageTabsProps = {
  pages: BuilderProjectPage[];
  activePage: BuilderProjectPage | null;
  onSelectPage: (pageId: string) => void;
  onAddPage: () => void;
  onRenamePage: (pageId: string) => void;
  onDeletePage: (pageId: string) => void;
  activeRoute: string;
};

export function PageTabs({
  pages,
  activePage,
  onSelectPage,
  onAddPage,
  onRenamePage,
  onDeletePage,
  activeRoute,
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
        <p className="mt-2 text-xs text-muted-foreground">
          Route:{" "}
          <span className="font-mono text-foreground">{activeRoute}</span>
        </p>
      )}
    </div>
  );
}
