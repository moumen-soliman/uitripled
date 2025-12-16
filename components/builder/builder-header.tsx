"use client";

import { BuilderSidebar } from "@/components/builder-sidebar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FolderOpen, Menu, X } from "lucide-react";

type BuilderHeaderProps = {
  mobileSidebarOpen: boolean;
  onMobileSidebarChange: (open: boolean) => void;
  onLoadProjects: () => void;
  onToggleTextEditing: () => void;
  isTextEditing: boolean;
  activeComponentCount: number;
  onMobileComponentSelect: (animationId: string) => void;
};

export function BuilderHeader({
  mobileSidebarOpen,
  onMobileSidebarChange,
  onLoadProjects,
  onToggleTextEditing,
  isTextEditing,
  activeComponentCount,
  onMobileComponentSelect,
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
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div className="flex items-center gap-2">
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
