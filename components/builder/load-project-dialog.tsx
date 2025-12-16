"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { extractSavedPages } from "@/lib/builder-utils";
import type { SavedProject } from "@/types/builder";
import { Eye, Trash2 } from "lucide-react";

type LoadProjectDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  savedProjects: SavedProject[];
  onLoadProject: (project: SavedProject) => void;
  onDeleteProject: (projectName: string) => void;
  onPreviewProject: (projectName: string) => void;
};

export function LoadProjectDialog({
  open,
  onOpenChange,
  savedProjects,
  onLoadProject,
  onDeleteProject,
  onPreviewProject,
}: LoadProjectDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Load Project</DialogTitle>
          <DialogDescription>
            Select a saved project to load into the builder
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-[400px] overflow-y-auto">
          {savedProjects.length === 0 ? (
            <div className="py-8 text-center text-sm text-muted-foreground">
              No saved projects found. Create and save a project first.
            </div>
          ) : (
            <div className="space-y-2">
              {savedProjects.map((project) => {
                const pagesForProject = extractSavedPages(project);
                const totalComponents = pagesForProject.reduce(
                  (total, page) => total + (page.components?.length ?? 0),
                  0
                );
                const savedDate = new Date(project.savedAt);

                return (
                  <Card
                    key={project.name}
                    className="p-4 transition-colors hover:bg-accent/50"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold">{project.name}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {pagesForProject.length}{" "}
                          {pagesForProject.length === 1 ? "page" : "pages"}
                          {" • "}
                          {totalComponents}{" "}
                          {totalComponents === 1 ? "component" : "components"}
                          {" • "}
                          Saved {savedDate.toLocaleDateString()} at{" "}
                          {savedDate.toLocaleTimeString()}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => onPreviewProject(project.name)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            if (confirm(`Delete project "${project.name}"?`)) {
                              onDeleteProject(project.name);
                            }
                          }}
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                        <Button
                          variant="default"
                          size="sm"
                          onClick={() => onLoadProject(project)}
                        >
                          Load
                        </Button>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
