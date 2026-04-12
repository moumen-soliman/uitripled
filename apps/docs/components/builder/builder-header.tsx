"use client";

import { BuilderSidebar } from "@/components/builder-sidebar";
import type { BuilderLayoutMode } from "@/types/builder";
import { Button } from "@uitripled/react-shadcn/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@uitripled/react-shadcn/ui/dialog";
import {
  BreakpointSwitcher,
  type Breakpoint,
} from "./breakpoint-switcher";
import { UndoRedoButtons } from "./undo-redo-buttons";
import { FolderOpen, Menu, X } from "lucide-react";

type BuilderHeaderProps = {
  mobileSidebarOpen: boolean;
  onMobileSidebarChange: (open: boolean) => void;
  onLoadProjects: () => void;
  onToggleTextEditing: () => void;
  isTextEditing: boolean;
  activeComponentCount: number;
  onMobileComponentSelect: (animationId: string) => void;
  layoutMode?: BuilderLayoutMode;
  canUndo?: boolean;
  canRedo?: boolean;
  onUndo?: () => void;
  onRedo?: () => void;
  activeBreakpoint?: Breakpoint;
  onBreakpointChange?: (breakpoint: Breakpoint) => void;
};

export function BuilderHeader({
  mobileSidebarOpen,
  onMobileSidebarChange,
  onLoadProjects,
  onToggleTextEditing,
  isTextEditing,
  activeComponentCount,
  onMobileComponentSelect,
  layoutMode = "stack",
  canUndo = false,
  canRedo = false,
  onUndo,
  onRedo,
  activeBreakpoint = "desktop",
  onBreakpointChange,
}: BuilderHeaderProps) {
  return (
    <div className="border-b border-border bg-card px-4 py-3 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold">Page Builder</h1>
          <Dialog open={mobileSidebarOpen} onOpenChange={onMobileSidebarChange}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2 md:hidden">
                <Menu className="h-4 w-4" />
                Library
              </Button>
            </DialogTrigger>
            <DialogContent className="md:hidden inset-x-0 bottom-0 left-0 right-0 top-auto flex h-[calc(100vh-5rem)] max-w-none translate-x-0 translate-y-0 flex-col rounded-t-3xl border border-border bg-background p-0 pb-4 shadow-xl data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom">
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    Component Library
                  </p>
                  <p className="text-sm font-semibold">Blocks</p>
                </div>
                <DialogClose asChild>
                  <Button variant="ghost" size="icon">
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                  </Button>
                </DialogClose>
              </div>
              <div className="flex-1 overflow-hidden">
                <BuilderSidebar
                  allowDrag={false}
                  className="flex h-full flex-col bg-background"
                  onSelectComponent={onMobileComponentSelect}
                  layoutMode={layoutMode}
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div className="flex items-center gap-2">
          {onUndo && onRedo && (
            <UndoRedoButtons
              canUndo={canUndo}
              canRedo={canRedo}
              onUndo={onUndo}
              onRedo={onRedo}
            />
          )}
          {onBreakpointChange && (
            <BreakpointSwitcher
              activeBreakpoint={activeBreakpoint}
              onChange={onBreakpointChange}
            />
          )}
          <Button variant="outline" size="sm" onClick={onLoadProjects}>
            <FolderOpen className="mr-2 h-4 w-4" />
            Load Project
          </Button>
          {/* <Button
            variant={isTextEditing ? "default" : "outline"}
            size="sm"
            onClick={onToggleTextEditing}
            className="gap-2"
            disabled={activeComponentCount === 0}
          >
            <Type className="h-4 w-4" />
            {isTextEditing ? "Done editing" : "Edit text"}
          </Button> */}
        </div>
      </div>
    </div>
  );
}
