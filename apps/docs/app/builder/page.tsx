"use client";

import { BuilderCanvas } from "@/components/builder-canvas";
import { BuilderCodeView } from "@/components/builder-code-view";
import { BuilderSidebar } from "@/components/builder-sidebar";
import { BuilderHeader } from "@/components/builder/builder-header";
import { DragOverlay } from "@/components/builder/drag-overlay";
import { InstructionsBanner } from "@/components/builder/instructions-banner";
import { LoadProjectDialog } from "@/components/builder/load-project-dialog";
import { PageTabs } from "@/components/builder/page-tabs";
import { TextEditingBanner } from "@/components/builder/text-editing-banner";
import {
  createPage,
  extractSavedPages,
  generateUniqueSlug,
} from "@/lib/builder-utils";
import { componentsRegistry } from "@/lib/components-registry";
import type {
  BuilderComponent,
  BuilderProjectPage,
  SavedProject,
} from "@/types/builder";
import {
  DndContext,
  DragEndEvent,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { useCallback, useEffect, useMemo, useState } from "react";

export default function BuilderPage() {
  const [pages, setPages] = useState<BuilderProjectPage[]>(() => {
    const initial = createPage("Landing", []);
    return [initial];
  });
  const [activePageId, setActivePageId] = useState<string>("");
  const [activeId, setActiveId] = useState<string | null>(null);
  const [showInstructions, setShowInstructions] = useState(true);
  const [loadDialogOpen, setLoadDialogOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [savedProjects, setSavedProjects] = useState<SavedProject[]>([]);
  const [isTextEditing, setIsTextEditing] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  useEffect(() => {
    if (pages.length === 0) {
      if (activePageId) {
        setActivePageId("");
      }
      return;
    }

    const pageExists = pages.some((page) => page.id === activePageId);
    if (!pageExists) {
      setActivePageId(pages[0].id);
    }
  }, [pages, activePageId]);

  const activePage = useMemo(() => {
    if (!activePageId) {
      return pages[0] ?? null;
    }

    const current = pages.find((page) => page.id === activePageId);
    return current ?? pages[0] ?? null;
  }, [pages, activePageId]);

  const activeComponentCount = activePage?.components.length ?? 0;
  const activePageIndex = activePage
    ? pages.findIndex((page) => page.id === activePage.id)
    : -1;
  const activeRoute =
    activePageIndex === 0 ? "/" : activePage ? `/${activePage.slug}` : "/";

  useEffect(() => {
    if (activeComponentCount === 0 && isTextEditing) {
      setIsTextEditing(false);
    }
  }, [activeComponentCount, isTextEditing]);

  const handleRegisterTextNode = useCallback(
    (componentId: string, nodeId: string, originalText: string) => {
      if (!activePageId) return;

      setPages((prev) =>
        prev.map((page) => {
          if (page.id !== activePageId) return page;

          return {
            ...page,
            components: page.components.map((component) => {
              if (component.id !== componentId) return component;

              const existing = component.textContent?.[nodeId];
              if (existing) {
                if (
                  existing.value === existing.original &&
                  existing.original !== originalText
                ) {
                  return {
                    ...component,
                    textContent: {
                      ...(component.textContent ?? {}),
                      [nodeId]: { original: originalText, value: originalText },
                    },
                  };
                }
                return component;
              }

              return {
                ...component,
                textContent: {
                  ...(component.textContent ?? {}),
                  [nodeId]: { original: originalText, value: originalText },
                },
              };
            }),
          };
        })
      );
    },
    [activePageId]
  );

  const handleUpdateTextNode = useCallback(
    (componentId: string, nodeId: string, newValue: string) => {
      if (!activePageId) return;

      setPages((prev) =>
        prev.map((page) => {
          if (page.id !== activePageId) return page;

          return {
            ...page,
            components: page.components.map((component) => {
              if (component.id !== componentId) return component;

              const existing = component.textContent?.[nodeId];
              if (existing && existing.value === newValue) {
                return component;
              }

              return {
                ...component,
                textContent: {
                  ...(component.textContent ?? {}),
                  [nodeId]: {
                    original: existing?.original ?? newValue,
                    value: newValue,
                  },
                },
              };
            }),
          };
        })
      );
    },
    [activePageId]
  );

  const handleAddComponentToPage = useCallback(
    (animationId: string) => {
      const animation = componentsRegistry.find(
        (item) => item.id === animationId
      );
      if (!animation || animation.category !== "blocks") {
        return;
      }

      const newComponent: BuilderComponent = {
        id: `component-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`,
        animationId: animation.id,
        animation,
        textContent: {},
      };

      setPages((prev) => {
        const targetPageId =
          activePageId && prev.some((page) => page.id === activePageId)
            ? activePageId
            : prev[0]?.id;

        if (!targetPageId) {
          return prev;
        }

        return prev.map((page) =>
          page.id === targetPageId
            ? { ...page, components: [...page.components, newComponent] }
            : page
        );
      });
    },
    [activePageId]
  );

  const handleMobileComponentSelect = useCallback(
    (animationId: string) => {
      handleAddComponentToPage(animationId);
      setMobileSidebarOpen(false);
    },
    [handleAddComponentToPage]
  );

  const handleDragStart = (event: DragStartEvent) => {
    if (isTextEditing) return;
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    if (isTextEditing) {
      setActiveId(null);
      return;
    }
    const currentPage = activePage;
    if (!currentPage) {
      setActiveId(null);
      return;
    }
    const { active, over } = event;

    if (!over) {
      setActiveId(null);
      return;
    }

    const activeId = active.id as string;
    const overId = over.id as string;

    // Check if we're reordering components within the canvas
    const activeIndex = currentPage.components.findIndex(
      (c) => c.id === activeId
    );
    const overIndex = currentPage.components.findIndex((c) => c.id === overId);

    if (activeIndex !== -1 && overIndex !== -1 && activeIndex !== overIndex) {
      // Reordering existing components
      setPages((prev) =>
        prev.map((page) =>
          page.id === currentPage.id
            ? {
                ...page,
                components: arrayMove(page.components, activeIndex, overIndex),
              }
            : page
        )
      );
      setActiveId(null);
      return;
    }

    // Check if dragging from sidebar to canvas
    const animation = componentsRegistry.find((a) => a.id === activeId);

    // Only allow blocks category components
    if (animation && animation.category !== "blocks") {
      setActiveId(null);
      return;
    }

    if (animation && (overId === "builder-canvas" || overIndex !== -1)) {
      // Add new component to canvas
      const newComponent: BuilderComponent = {
        id: `component-${Date.now()}-${Math.random()}`,
        animationId: animation.id,
        animation,
        textContent: {},
      };

      // If dropped over a component, insert at that position
      if (overIndex !== -1) {
        setPages((prev) =>
          prev.map((page) => {
            if (page.id !== currentPage.id) return page;
            const newItems = [...page.components];
            newItems.splice(overIndex, 0, newComponent);
            return {
              ...page,
              components: newItems,
            };
          })
        );
      } else {
        // If dropped on canvas, append to end
        setPages((prev) =>
          prev.map((page) =>
            page.id === currentPage.id
              ? { ...page, components: [...page.components, newComponent] }
              : page
          )
        );
      }
    }

    setActiveId(null);
  };

  const handleDeleteComponent = (id: string) => {
    if (!activePage) return;

    setPages((prev) =>
      prev.map((page) =>
        page.id === activePage.id
          ? {
              ...page,
              components: page.components.filter(
                (component) => component.id !== id
              ),
            }
          : page
      )
    );
  };

  const handleSelectPage = (pageId: string) => {
    setActivePageId(pageId);
    setIsTextEditing(false);
    setActiveId(null);
  };

  const handleAddPage = () => {
    const defaultName = `Page ${pages.length + 1}`;
    const input = window.prompt("Enter a name for the new page", defaultName);
    const normalized = input?.trim();
    if (!normalized) {
      return;
    }

    const existingSlugs = pages.map((page) => page.slug);
    const newPage = createPage(normalized, existingSlugs);
    setPages((prev) => [...prev, newPage]);
    setActivePageId(newPage.id);
    setIsTextEditing(false);
    setActiveId(null);
  };

  const handleRenamePage = (pageId: string) => {
    const page = pages.find((item) => item.id === pageId);
    if (!page) return;

    const input = window.prompt("Rename page", page.name);
    const normalized = input?.trim();
    if (!normalized || normalized === page.name) {
      return;
    }

    const existingSlugs = pages
      .filter((p) => p.id !== pageId)
      .map((p) => p.slug);
    const newSlug = generateUniqueSlug(normalized, existingSlugs);

    setPages((prev) =>
      prev.map((item) =>
        item.id === pageId
          ? {
              ...item,
              name: normalized,
              slug: newSlug,
            }
          : item
      )
    );
  };

  const handleDeletePage = (pageId: string) => {
    if (pages.length <= 1) {
      window.alert("You need at least one page in the project.");
      return;
    }

    const page = pages.find((item) => item.id === pageId);
    if (!page) return;

    const confirmed = window.confirm(`Delete page "${page.name}"?`);
    if (!confirmed) return;

    const remainingPages = pages.filter((item) => item.id !== pageId);
    setPages(remainingPages);
    setIsTextEditing(false);
    setActiveId(null);

    if (activePageId === pageId) {
      setActivePageId(remainingPages[0]?.id ?? "");
    }
  };

  const loadSavedProjects = () => {
    const projects = JSON.parse(
      localStorage.getItem("builderProjects") || "{}"
    );
    const projectList = Object.values(projects) as SavedProject[];
    setSavedProjects(
      projectList.sort(
        (a, b) => new Date(b.savedAt).getTime() - new Date(a.savedAt).getTime()
      )
    );
    setLoadDialogOpen(true);
  };

  const loadProject = (project: SavedProject) => {
    const rawPages = extractSavedPages(project);
    const slugsInUse: string[] = [];

    const derivedPages = rawPages.map<BuilderProjectPage>((page, index) => {
      const safeName = page.name?.trim() || `Page ${index + 1}`;
      const slugBase = page.slug?.trim() || safeName;
      const slug = generateUniqueSlug(slugBase, slugsInUse);
      slugsInUse.push(slug);

      const pageId =
        page.id && page.id.length > 0
          ? page.id
          : typeof crypto !== "undefined" &&
              typeof crypto.randomUUID === "function"
            ? crypto.randomUUID()
            : `page-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

      const builderComponents = (page.components ?? [])
        .map<BuilderComponent | null>((comp) => {
          const animation = componentsRegistry.find(
            (a) => a.id === comp.animationId
          );
          if (!animation) {
            return null;
          }

          return {
            id:
              comp.id && comp.id.length > 0
                ? comp.id
                : `component-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`,
            animationId: comp.animationId,
            animation,
            textContent: comp.textContent ?? {},
          };
        })
        .filter((value): value is BuilderComponent => Boolean(value));

      return {
        id: pageId,
        name: safeName,
        slug,
        components: builderComponents,
      };
    });

    const finalPages =
      derivedPages.length > 0 ? derivedPages : [createPage("Landing", [])];

    setPages(finalPages);
    setLoadDialogOpen(false);
    setIsTextEditing(false);
    setActiveId(null);

    const desiredActiveId =
      project.entryPageId &&
      finalPages.some((page) => page.id === project.entryPageId)
        ? project.entryPageId
        : finalPages[0].id;

    setActivePageId(desiredActiveId);
  };

  const deleteProject = (projectName: string) => {
    const projects = JSON.parse(
      localStorage.getItem("builderProjects") || "{}"
    );
    delete projects[projectName];
    localStorage.setItem("builderProjects", JSON.stringify(projects));
    loadSavedProjects(); // Refresh the list
  };

  const previewProject = (projectName: string) => {
    window.open(`/preview/${encodeURIComponent(projectName)}`, "_blank");
  };

  // Get active component info for drag overlay
  const getActiveComponentInfo = () => {
    if (!activeId) return null;

    for (const page of pages) {
      const canvasComponent = page.components.find(
        (component) => component.id === activeId
      );
      if (canvasComponent) {
        return {
          name: canvasComponent.animation.name,
          type: "canvas" as const,
        };
      }
    }

    const animation = componentsRegistry.find((a) => a.id === activeId);
    if (animation) {
      return { name: animation.name, type: "sidebar" as const };
    }

    return null;
  };

  const activeComponentInfo = getActiveComponentInfo();

  return (
    <div className="flex h-screen flex-col bg-background">
      <BuilderHeader
        mobileSidebarOpen={mobileSidebarOpen}
        onMobileSidebarChange={setMobileSidebarOpen}
        onLoadProjects={loadSavedProjects}
        onToggleTextEditing={() => setIsTextEditing((prev) => !prev)}
        isTextEditing={isTextEditing}
        activeComponentCount={activeComponentCount}
        onMobileComponentSelect={handleMobileComponentSelect}
      />

      <div className="flex flex-1 overflow-hidden">
        <DndContext
          sensors={sensors}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          {/* Left Sidebar */}
          <BuilderSidebar
            className="hidden h-full w-80 border-r border-border md:flex"
            onSelectComponent={handleAddComponentToPage}
          />

          {/* Main Canvas Area */}
          <div className="flex flex-1 flex-col overflow-y-auto md:overflow-hidden">
            <InstructionsBanner
              show={showInstructions}
              onHide={() => setShowInstructions(false)}
            />

            <TextEditingBanner show={isTextEditing} />

            <PageTabs
              pages={pages}
              activePage={activePage}
              onSelectPage={handleSelectPage}
              onAddPage={handleAddPage}
              onRenamePage={handleRenamePage}
              onDeletePage={handleDeletePage}
              activeRoute={activeRoute}
            />

            <div className="md:flex-1 md:overflow-y-auto p-4 md:p-6">
              <BuilderCanvas
                components={activePage?.components ?? []}
                onDelete={handleDeleteComponent}
                isTextEditing={isTextEditing}
                onRegisterTextNode={handleRegisterTextNode}
                onUpdateTextNode={handleUpdateTextNode}
              />
            </div>

            {/* Code View */}
            <BuilderCodeView
              pages={pages}
              activePageId={activePage?.id ?? null}
            />
          </div>

          <DragOverlay activeComponentInfo={activeComponentInfo} />
        </DndContext>
      </div>

      <LoadProjectDialog
        open={loadDialogOpen}
        onOpenChange={setLoadDialogOpen}
        savedProjects={savedProjects}
        onLoadProject={loadProject}
        onDeleteProject={deleteProject}
        onPreviewProject={previewProject}
      />
    </div>
  );
}
