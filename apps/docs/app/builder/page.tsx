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
import { useUILibrary } from "@/components/ui-library-provider";
import {
  assignFreeCanvasToComponents,
  createPage,
  defaultFreeCanvasForIndex,
  extractSavedPages,
  findNextGridPosition,
  generateUniqueSlug,
} from "@/lib/builder-utils";
import {
  BuilderProvider,
  useBuilderStore,
} from "@/lib/builder-store";
import { componentsRegistry } from "@/lib/components-registry";
import type {
  BuilderComponent,
  BuilderFreeCanvas,
  BuilderProjectPage,
  SavedProject,
} from "@/types/builder";
import { Button } from "@uitripled/react-shadcn/ui/button";
import {
  DndContext,
  DragEndEvent,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { AlignToolbar } from "@/components/builder/align-toolbar";
import { BREAKPOINT_WIDTHS } from "@/components/builder/breakpoint-switcher";
import { LayerPanel } from "@/components/builder/layer-panel";
import { PropertyPanel } from "@/components/builder/property-panel";
import { Code2, Info, Layers, PanelLeft, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef } from "react";

export default function BuilderPage() {
  return (
    <BuilderProvider>
      <BuilderPageInner />
    </BuilderProvider>
  );
}

function BuilderPageInner() {
  const {
    state,
    dispatch,
    activePage,
    activeRoute,
    activeLayoutMode,
    canUndo,
    canRedo,
  } = useBuilderStore();

  const { pages, selectedComponentId } = state.data;
  const {
    dragActiveId,
    showInstructions,
    loadDialogOpen,
    mobileSidebarOpen,
    savedProjects,
    isTextEditing,
    freeSidebarOpen,
    freeCodeOpen,
    freeNotesOpen,
    freeLayersOpen,
  } = state.ui;

  const { selectedLibrary } = useUILibrary();
  const previousLibraryRef = useRef(selectedLibrary);

  // Reset builder canvas when library changes
  useEffect(() => {
    if (previousLibraryRef.current !== selectedLibrary) {
      const newPage = createPage("Landing", []);
      dispatch({ type: "RESET_CANVAS", initialPage: newPage });
      previousLibraryRef.current = selectedLibrary;
    }
  }, [selectedLibrary, dispatch]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 },
    })
  );

  // Validate active page
  useEffect(() => {
    if (pages.length === 0) return;
    const pageExists = pages.some((p) => p.id === state.data.activePageId);
    if (!pageExists) {
      dispatch({ type: "SET_ACTIVE_PAGE", pageId: pages[0].id });
    }
  }, [pages, state.data.activePageId, dispatch]);

  const activeComponentCount = activePage?.components.length ?? 0;

  // Clear text editing when no components
  useEffect(() => {
    if (activeComponentCount === 0 && isTextEditing) {
      dispatch({ type: "SET_TEXT_EDITING", enabled: false });
    }
  }, [activeComponentCount, isTextEditing, dispatch]);

  // Clear free panels when not in free mode
  useEffect(() => {
    if (activeLayoutMode !== "free") {
      dispatch({ type: "SET_FREE_SIDEBAR_OPEN", open: false });
      dispatch({ type: "SET_FREE_CODE_OPEN", open: false });
      dispatch({ type: "SET_FREE_NOTES_OPEN", open: false });
      dispatch({ type: "SET_FREE_LAYERS_OPEN", open: false });
    }
  }, [activeLayoutMode, dispatch]);

  // Validate selected component
  useEffect(() => {
    if (!activePage || activePage.layoutMode !== "free") {
      if (selectedComponentId !== null) {
        dispatch({ type: "SELECT_COMPONENT", componentId: null });
      }
      return;
    }
    const exists = activePage.components.some(
      (c) => c.id === selectedComponentId
    );
    if (!exists && selectedComponentId !== null) {
      dispatch({ type: "SELECT_COMPONENT", componentId: null });
    }
  }, [activePage, selectedComponentId, dispatch]);

  // ── Keyboard shortcuts (undo/redo) ─────────────────────────────────────
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const mod = e.metaKey || e.ctrlKey;
      if (mod && e.key === "z" && !e.shiftKey) {
        e.preventDefault();
        dispatch({ type: "UNDO" });
      } else if (mod && e.key === "z" && e.shiftKey) {
        e.preventDefault();
        dispatch({ type: "REDO" });
      } else if (mod && e.key === "y") {
        e.preventDefault();
        dispatch({ type: "REDO" });
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [dispatch]);

  // ── Text node handlers ─────────────────────────────────────────────────
  const handleRegisterTextNode = useCallback(
    (componentId: string, nodeId: string, originalText: string) => {
      dispatch({
        type: "REGISTER_TEXT_NODE",
        componentId,
        nodeId,
        originalText,
      });
    },
    [dispatch]
  );

  const handleUpdateTextNode = useCallback(
    (componentId: string, nodeId: string, newValue: string) => {
      dispatch({ type: "UPDATE_TEXT_NODE", componentId, nodeId, newValue });
    },
    [dispatch]
  );

  // ── Component handlers ─────────────────────────────────────────────────
  const handleAddComponentToPage = useCallback(
    (animationId: string) => {
      const animation = componentsRegistry.find(
        (item) => item.id === animationId
      );
      if (!animation) return;
      if (animation.category === "native") return;
      if (activeLayoutMode !== "free" && animation.category !== "blocks") {
        return;
      }

      const isFree = activePage?.layoutMode === "free";
      const existingCanvases = isFree
        ? (activePage?.components ?? [])
            .map((c) => c.freeCanvas)
            .filter((fc): fc is import("@/types/builder").BuilderFreeCanvas => !!fc)
        : [];
      const newComponent: BuilderComponent = {
        id: `component-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`,
        animationId: animation.id,
        animation,
        textContent: {},
        ...(isFree ? { freeCanvas: findNextGridPosition(existingCanvases) } : {}),
      };

      dispatch({ type: "ADD_COMPONENT", component: newComponent });
    },
    [activeLayoutMode, activePage, dispatch]
  );

  const handleMobileComponentSelect = useCallback(
    (animationId: string) => {
      handleAddComponentToPage(animationId);
      dispatch({ type: "SET_MOBILE_SIDEBAR_OPEN", open: false });
    },
    [handleAddComponentToPage, dispatch]
  );

  const handleDeleteComponent = useCallback(
    (id: string) => {
      dispatch({ type: "DELETE_COMPONENT", componentId: id });
    },
    [dispatch]
  );

  const handleSelectFreeComponent = useCallback(
    (id: string | null) => {
      dispatch({ type: "SELECT_COMPONENT", componentId: id });
    },
    [dispatch]
  );

  const handleBringToFront = useCallback(
    (componentId: string) => {
      dispatch({ type: "BRING_TO_FRONT", componentId });
    },
    [dispatch]
  );

  const handleDuplicateComponent = useCallback(
    (componentId: string) => {
      if (!activePage) return;
      const source = activePage.components.find((c) => c.id === componentId);
      if (!source) return;

      const newId = `component-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
      const maxZ = activePage.components.reduce(
        (acc, c, i) => Math.max(acc, c.freeCanvas?.zIndex ?? i),
        0
      );
      const sourceCanvas =
        source.freeCanvas ??
        defaultFreeCanvasForIndex(activePage.components.length + 1);

      const duplicated: BuilderComponent = {
        ...source,
        id: newId,
        textContent: source.textContent ? { ...source.textContent } : {},
        freeCanvas: {
          ...sourceCanvas,
          x: sourceCanvas.x + 24,
          y: sourceCanvas.y + 24,
          zIndex: maxZ + 1,
        },
      };

      dispatch({
        type: "DUPLICATE_COMPONENT",
        componentId,
        newComponent: duplicated,
      });
    },
    [activePage, dispatch]
  );

  const handleFreeCanvasChange = useCallback(
    (componentId: string, patch: Partial<BuilderFreeCanvas>) => {
      dispatch({
        type: "UPDATE_FREE_CANVAS",
        componentId,
        patch,
        skipHistory: true,
      });
    },
    [dispatch]
  );

  const handleLayoutModeChange = useCallback(
    (pageId: string, mode: "stack" | "free") => {
      dispatch({ type: "SET_LAYOUT_MODE", pageId, mode });
    },
    [dispatch]
  );

  // ── Drag handlers ──────────────────────────────────────────────────────
  const handleDragStart = (event: DragStartEvent) => {
    if (isTextEditing) return;
    dispatch({ type: "SET_DRAG_ACTIVE_ID", id: event.active.id as string });
  };

  const handleDragEnd = (event: DragEndEvent) => {
    if (isTextEditing) {
      dispatch({ type: "SET_DRAG_ACTIVE_ID", id: null });
      return;
    }
    if (!activePage) {
      dispatch({ type: "SET_DRAG_ACTIVE_ID", id: null });
      return;
    }

    const { active, over } = event;
    if (!over) {
      dispatch({ type: "SET_DRAG_ACTIVE_ID", id: null });
      return;
    }

    const activeIdStr = active.id as string;
    const overId = over.id as string;

    const activeIndex = activePage.components.findIndex(
      (c) => c.id === activeIdStr
    );
    const overIndex = activePage.components.findIndex((c) => c.id === overId);

    // Reorder existing components (stack mode only)
    if (
      activePage.layoutMode !== "free" &&
      activeIndex !== -1 &&
      overIndex !== -1 &&
      activeIndex !== overIndex
    ) {
      dispatch({
        type: "REORDER_COMPONENTS",
        oldIndex: activeIndex,
        newIndex: overIndex,
      });
      dispatch({ type: "SET_DRAG_ACTIVE_ID", id: null });
      return;
    }

    // Drag from sidebar to canvas
    const animation = componentsRegistry.find((a) => a.id === activeIdStr);
    if (animation && animation.category === "native") {
      dispatch({ type: "SET_DRAG_ACTIVE_ID", id: null });
      return;
    }
    if (
      animation &&
      activePage.layoutMode !== "free" &&
      animation.category !== "blocks"
    ) {
      dispatch({ type: "SET_DRAG_ACTIVE_ID", id: null });
      return;
    }

    if (animation && (overId === "builder-canvas" || overIndex !== -1)) {
      const isFree = activePage.layoutMode === "free";
      const existingCanvases = isFree
        ? activePage.components
            .map((c) => c.freeCanvas)
            .filter(
              (fc): fc is import("@/types/builder").BuilderFreeCanvas => !!fc
            )
        : [];

      const newComponent: BuilderComponent = {
        id: `component-${Date.now()}-${Math.random()}`,
        animationId: animation.id,
        animation,
        textContent: {},
        ...(isFree
          ? { freeCanvas: findNextGridPosition(existingCanvases) }
          : {}),
      };

      dispatch({
        type: "ADD_COMPONENT",
        component: newComponent,
        insertIndex:
          !isFree && overIndex !== -1 ? overIndex : undefined,
      });
    }

    dispatch({ type: "SET_DRAG_ACTIVE_ID", id: null });
  };

  // ── Page handlers ──────────────────────────────────────────────────────
  const handleSelectPage = (pageId: string) => {
    dispatch({ type: "SET_ACTIVE_PAGE", pageId });
  };

  const handleAddPage = () => {
    const defaultName = `Page ${pages.length + 1}`;
    const input = window.prompt("Enter a name for the new page", defaultName);
    const normalized = input?.trim();
    if (!normalized) return;

    const existingSlugs = pages.map((p) => p.slug);
    dispatch({ type: "ADD_PAGE", name: normalized, existingSlugs });
  };

  const handleRenamePage = (pageId: string) => {
    const page = pages.find((p) => p.id === pageId);
    if (!page) return;

    const input = window.prompt("Rename page", page.name);
    const normalized = input?.trim();
    if (!normalized || normalized === page.name) return;

    const existingSlugs = pages.filter((p) => p.id !== pageId).map((p) => p.slug);
    const newSlug = generateUniqueSlug(normalized, existingSlugs);
    dispatch({ type: "RENAME_PAGE", pageId, name: normalized, newSlug });
  };

  const handleDeletePage = (pageId: string) => {
    if (pages.length <= 1) {
      window.alert("You need at least one page in the project.");
      return;
    }
    const page = pages.find((p) => p.id === pageId);
    if (!page) return;
    if (!window.confirm(`Delete page "${page.name}"?`)) return;
    dispatch({ type: "DELETE_PAGE", pageId });
  };

  // ── Project handlers ───────────────────────────────────────────────────
  const loadSavedProjects = () => {
    const projects = JSON.parse(
      localStorage.getItem("builderProjects") || "{}"
    );
    const projectList = Object.values(projects) as SavedProject[];
    dispatch({
      type: "SET_SAVED_PROJECTS",
      projects: projectList.sort(
        (a, b) =>
          new Date(b.savedAt).getTime() - new Date(a.savedAt).getTime()
      ),
    });
    dispatch({ type: "SET_LOAD_DIALOG_OPEN", open: true });
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
          if (!animation) return null;

          return {
            id:
              comp.id && comp.id.length > 0
                ? comp.id
                : `component-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`,
            animationId: comp.animationId,
            animation,
            textContent: comp.textContent ?? {},
            ...(comp.freeCanvas ? { freeCanvas: comp.freeCanvas } : {}),
          };
        })
        .filter((v): v is BuilderComponent => Boolean(v));

      const layoutMode =
        page.layoutMode === "free" ? ("free" as const) : ("stack" as const);

      return {
        id: pageId,
        name: safeName,
        slug,
        layoutMode,
        components:
          layoutMode === "free"
            ? assignFreeCanvasToComponents(builderComponents)
            : builderComponents,
      };
    });

    const finalPages =
      derivedPages.length > 0 ? derivedPages : [createPage("Landing", [])];

    dispatch({ type: "SET_PAGES", pages: finalPages });
    dispatch({ type: "SET_LOAD_DIALOG_OPEN", open: false });
    dispatch({ type: "SET_TEXT_EDITING", enabled: false });
    dispatch({ type: "SET_DRAG_ACTIVE_ID", id: null });

    const desiredActiveId =
      project.entryPageId &&
      finalPages.some((p) => p.id === project.entryPageId)
        ? project.entryPageId
        : finalPages[0].id;
    dispatch({ type: "SET_ACTIVE_PAGE", pageId: desiredActiveId });
  };

  const deleteProject = (projectName: string) => {
    const projects = JSON.parse(
      localStorage.getItem("builderProjects") || "{}"
    );
    delete projects[projectName];
    localStorage.setItem("builderProjects", JSON.stringify(projects));
    loadSavedProjects();
  };

  const previewProject = (projectName: string) => {
    window.open(`/preview/${encodeURIComponent(projectName)}`, "_blank");
  };

  // ── Style handler ───────────────────────────────────────────────────────
  const handleStyleChange = useCallback(
    (componentId: string, styles: Partial<import("@/types/builder").BuilderComponentStyles>) => {
      dispatch({ type: "UPDATE_STYLE", componentId, styles });
    },
    [dispatch]
  );

  // ── Selected component for property panel ──────────────────────────────
  const selectedComponent = useMemo(() => {
    if (!selectedComponentId || !activePage) return null;
    return activePage.components.find((c) => c.id === selectedComponentId) ?? null;
  }, [selectedComponentId, activePage]);

  // ── Drag overlay info ──────────────────────────────────────────────────
  const getActiveComponentInfo = () => {
    if (!dragActiveId) return null;
    for (const page of pages) {
      const c = page.components.find((comp) => comp.id === dragActiveId);
      if (c) return { name: c.animation.name, type: "canvas" as const };
    }
    const animation = componentsRegistry.find((a) => a.id === dragActiveId);
    if (animation) return { name: animation.name, type: "sidebar" as const };
    return null;
  };

  const activeComponentInfo = getActiveComponentInfo();

  // ── Render ─────────────────────────────────────────────────────────────
  return (
    <div className="flex h-screen flex-col bg-background">
      <BuilderHeader
        mobileSidebarOpen={mobileSidebarOpen}
        onMobileSidebarChange={(open) =>
          dispatch({ type: "SET_MOBILE_SIDEBAR_OPEN", open })
        }
        onLoadProjects={loadSavedProjects}
        onToggleTextEditing={() =>
          dispatch({ type: "SET_TEXT_EDITING", enabled: !isTextEditing })
        }
        isTextEditing={isTextEditing}
        activeComponentCount={activeComponentCount}
        onMobileComponentSelect={handleMobileComponentSelect}
        layoutMode={activeLayoutMode}
        canUndo={canUndo}
        canRedo={canRedo}
        onUndo={() => dispatch({ type: "UNDO" })}
        onRedo={() => dispatch({ type: "REDO" })}
        activeBreakpoint={state.ui.activeBreakpoint}
        onBreakpointChange={(bp) =>
          dispatch({ type: "SET_ACTIVE_BREAKPOINT", breakpoint: bp })
        }
      />

      <div className="flex flex-1 overflow-hidden">
        <DndContext
          sensors={sensors}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          {activeLayoutMode !== "free" && (
            <BuilderSidebar
              className="hidden h-full w-80 border-r border-border md:flex"
              onSelectComponent={handleAddComponentToPage}
              layoutMode={activeLayoutMode}
            />
          )}

          <div
            className={`flex flex-1 flex-col overflow-y-auto md:overflow-hidden ${
              activeLayoutMode === "free" ? "relative" : ""
            }`}
          >
            {activeLayoutMode !== "free" && (
              <InstructionsBanner
                show={showInstructions}
                onHide={() =>
                  dispatch({ type: "SET_SHOW_INSTRUCTIONS", show: false })
                }
              />
            )}

            <TextEditingBanner show={isTextEditing} />

            <PageTabs
              pages={pages}
              activePage={activePage}
              onSelectPage={handleSelectPage}
              onAddPage={handleAddPage}
              onRenamePage={handleRenamePage}
              onDeletePage={handleDeletePage}
              activeRoute={activeRoute}
              layoutMode={activePage?.layoutMode ?? "stack"}
              onLayoutModeChange={handleLayoutModeChange}
            />

            <div
              className={
                activeLayoutMode === "free"
                  ? "relative flex-1 overflow-hidden"
                  : "md:flex-1 md:overflow-y-auto p-4 md:p-6"
              }
              style={
                activeLayoutMode !== "free" &&
                state.ui.activeBreakpoint !== "desktop"
                  ? {
                      maxWidth:
                        BREAKPOINT_WIDTHS[state.ui.activeBreakpoint] + 48,
                      margin: "0 auto",
                      transition: "max-width 0.3s ease",
                    }
                  : undefined
              }
            >
              <BuilderCanvas
                layoutMode={activePage?.layoutMode ?? "stack"}
                components={activePage?.components ?? []}
                onDelete={handleDeleteComponent}
                isTextEditing={isTextEditing}
                onRegisterTextNode={handleRegisterTextNode}
                onUpdateTextNode={handleUpdateTextNode}
                onFreeCanvasChange={handleFreeCanvasChange}
                selectedComponentId={selectedComponentId}
                onSelectComponent={handleSelectFreeComponent}
                onDuplicateComponent={handleDuplicateComponent}
                onBringToFront={handleBringToFront}
                canvasWidth={BREAKPOINT_WIDTHS[state.ui.activeBreakpoint]}
              />

              {activeLayoutMode === "free" && (
                <>
                  <div className="pointer-events-none absolute left-4 top-4 z-40 flex flex-col gap-2">
                    <div className="pointer-events-auto flex items-center gap-2 rounded-xl border border-border bg-card/95 p-2 shadow-lg backdrop-blur-sm">
                      <Button
                        variant={freeSidebarOpen ? "default" : "outline"}
                        size="sm"
                        className="gap-2"
                        onClick={() =>
                          dispatch({
                            type: "SET_FREE_SIDEBAR_OPEN",
                            open: !freeSidebarOpen,
                          })
                        }
                      >
                        <PanelLeft className="h-4 w-4" />
                        Library
                      </Button>
                      <Button
                        variant={freeNotesOpen ? "default" : "outline"}
                        size="sm"
                        className="gap-2"
                        onClick={() =>
                          dispatch({
                            type: "SET_FREE_NOTES_OPEN",
                            open: !freeNotesOpen,
                          })
                        }
                      >
                        <Info className="h-4 w-4" />
                        Notes
                      </Button>
                      <Button
                        variant={freeCodeOpen ? "default" : "outline"}
                        size="sm"
                        className="gap-2"
                        onClick={() =>
                          dispatch({
                            type: "SET_FREE_CODE_OPEN",
                            open: !freeCodeOpen,
                          })
                        }
                      >
                        <Code2 className="h-4 w-4" />
                        Code
                      </Button>
                      <Button
                        variant={freeLayersOpen ? "default" : "outline"}
                        size="sm"
                        className="gap-2"
                        onClick={() =>
                          dispatch({
                            type: "SET_FREE_LAYERS_OPEN",
                            open: !freeLayersOpen,
                          })
                        }
                      >
                        <Layers className="h-4 w-4" />
                        Layers
                      </Button>
                    </div>
                  </div>

                  {freeSidebarOpen && (
                    <div className="absolute inset-y-4 left-4 z-50 flex w-72 flex-col overflow-hidden rounded-2xl border border-border bg-background/95 shadow-2xl backdrop-blur-sm">
                      <div className="flex items-center justify-between border-b border-border px-3 py-2">
                        <div>
                          <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                            Builder Panel
                          </p>
                          <p className="text-sm font-semibold">
                            Component Library
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() =>
                            dispatch({
                              type: "SET_FREE_SIDEBAR_OPEN",
                              open: false,
                            })
                          }
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <BuilderSidebar
                        className="flex-1 bg-background"
                        onSelectComponent={handleAddComponentToPage}
                        layoutMode={activeLayoutMode}
                      />
                    </div>
                  )}

                  {freeNotesOpen && (
                    <div className="absolute right-4 top-16 z-50 w-80 rounded-2xl border border-border bg-background/95 p-4 shadow-2xl backdrop-blur-sm">
                      <div className="mb-3 flex items-center justify-between">
                        <div>
                          <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                            Builder Notes
                          </p>
                          <p className="text-sm font-semibold">
                            Important Notes
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() =>
                            dispatch({
                              type: "SET_FREE_NOTES_OPEN",
                              open: false,
                            })
                          }
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>
                          This focused mode is optimized so the landing page
                          gets most of the screen.
                        </li>
                        <li>
                          Use the Library button only when you need to add
                          blocks or components, then close it again to keep the
                          canvas clear.
                        </li>
                        <li>
                          Use Code only when you want to inspect/export output.
                        </li>
                        <li>
                          Space + drag pans the view. Ctrl/Cmd + scroll zooms.
                        </li>
                      </ul>
                    </div>
                  )}

                  {/* Layer Panel (free canvas) */}
                  {freeLayersOpen && (
                    <div className="absolute inset-y-4 left-4 z-50 flex w-60 flex-col overflow-hidden rounded-2xl border border-border bg-background/95 shadow-2xl backdrop-blur-sm">
                      <LayerPanel
                        components={activePage?.components ?? []}
                        selectedComponentId={selectedComponentId}
                        onSelect={(id) =>
                          dispatch({
                            type: "SELECT_COMPONENT",
                            componentId: id,
                          })
                        }
                        onToggleVisibility={(id) =>
                          dispatch({
                            type: "TOGGLE_VISIBILITY",
                            componentId: id,
                          })
                        }
                        onToggleLock={(id) =>
                          dispatch({
                            type: "TOGGLE_LOCK",
                            componentId: id,
                          })
                        }
                        onReorderLayers={(oldIndex, newIndex) =>
                          dispatch({
                            type: "REORDER_COMPONENTS",
                            oldIndex,
                            newIndex,
                          })
                        }
                        onClose={() =>
                          dispatch({
                            type: "SET_FREE_LAYERS_OPEN",
                            open: false,
                          })
                        }
                      />
                    </div>
                  )}

                  {/* Align Toolbar (free canvas) */}
                  {selectedComponent && selectedComponent.freeCanvas && (
                    <div className="pointer-events-auto absolute right-4 top-4 z-40">
                      <AlignToolbar
                        selectedComponent={selectedComponent}
                        onFreeCanvasChange={handleFreeCanvasChange}
                      />
                    </div>
                  )}

                  {/* Property Panel (free canvas) */}
                  {selectedComponent && (
                    <div className="absolute inset-y-4 right-4 z-50 flex w-72 flex-col overflow-hidden rounded-2xl border border-border bg-background/95 shadow-2xl backdrop-blur-sm">
                      <PropertyPanel
                        component={selectedComponent}
                        onStyleChange={(styles) =>
                          handleStyleChange(selectedComponent.id, styles)
                        }
                        onFreeCanvasChange={(patch) =>
                          handleFreeCanvasChange(selectedComponent.id, patch)
                        }
                        onClose={() =>
                          dispatch({
                            type: "SELECT_COMPONENT",
                            componentId: null,
                          })
                        }
                        isFreeCanvas
                      />
                    </div>
                  )}
                </>
              )}
            </div>

            {activeLayoutMode === "free" ? (
              freeCodeOpen && (
                <div className="absolute inset-x-4 bottom-4 z-50 max-h-[45vh] overflow-hidden rounded-2xl border border-border bg-background/95 shadow-2xl backdrop-blur-sm">
                  <div className="flex items-center justify-between border-b border-border px-3 py-2">
                    <div>
                      <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                        Builder Panel
                      </p>
                      <p className="text-sm font-semibold">Generated Code</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() =>
                        dispatch({ type: "SET_FREE_CODE_OPEN", open: false })
                      }
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="max-h-[calc(45vh-3rem)] overflow-auto">
                    <BuilderCodeView
                      pages={pages}
                      activePageId={activePage?.id ?? null}
                    />
                  </div>
                </div>
              )
            ) : (
              <BuilderCodeView
                pages={pages}
                activePageId={activePage?.id ?? null}
              />
            )}
          </div>

          <DragOverlay activeComponentInfo={activeComponentInfo} />
        </DndContext>
      </div>

      <LoadProjectDialog
        open={loadDialogOpen}
        onOpenChange={(open) =>
          dispatch({ type: "SET_LOAD_DIALOG_OPEN", open })
        }
        savedProjects={savedProjects}
        onLoadProject={loadProject}
        onDeleteProject={deleteProject}
        onPreviewProject={previewProject}
      />
    </div>
  );
}
