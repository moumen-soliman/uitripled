"use client";

import type {
  BuilderComponent,
  BuilderComponentStyles,
  BuilderFreeCanvas,
  BuilderLayoutMode,
  BuilderProjectPage,
  SavedProject,
} from "@/types/builder";
import type { BuilderAction } from "./builder-actions";
import {
  assignFreeCanvasToComponents,
  createPage,
  defaultFreeCanvasForIndex,
  generateUniqueSlug,
} from "./builder-utils";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
  type Dispatch,
  type ReactNode,
} from "react";

// ── State ───────────────────────────────────────────────────────────────────

/** Data state that participates in undo/redo history. */
export type BuilderDataState = {
  pages: BuilderProjectPage[];
  activePageId: string;
  selectedComponentId: string | null;
};

/** UI-only state (not tracked in history). */
export type BuilderUIState = {
  dragActiveId: string | null;
  showInstructions: boolean;
  loadDialogOpen: boolean;
  mobileSidebarOpen: boolean;
  savedProjects: SavedProject[];
  isTextEditing: boolean;
  freeSidebarOpen: boolean;
  freeCodeOpen: boolean;
  freeNotesOpen: boolean;
  freeLayersOpen: boolean;
  activeBreakpoint: "desktop" | "tablet" | "mobile";
};

export type BuilderState = {
  data: BuilderDataState;
  ui: BuilderUIState;
  /** Undo stack */
  past: BuilderDataState[];
  /** Redo stack */
  future: BuilderDataState[];
};

// ── Helpers ─────────────────────────────────────────────────────────────────

const MAX_HISTORY = 50;

function pushHistory(state: BuilderState): BuilderState {
  return {
    ...state,
    past: [...state.past.slice(-(MAX_HISTORY - 1)), state.data],
    future: [],
  };
}

function mapActivePage(
  state: BuilderDataState,
  fn: (page: BuilderProjectPage) => BuilderProjectPage
): BuilderProjectPage[] {
  const targetId =
    state.activePageId ||
    (state.pages.length > 0 ? state.pages[0].id : undefined);
  if (!targetId) return state.pages;
  return state.pages.map((page) => (page.id === targetId ? fn(page) : page));
}

function mapComponent(
  page: BuilderProjectPage,
  componentId: string,
  fn: (c: BuilderComponent, index: number) => BuilderComponent
): BuilderProjectPage {
  return {
    ...page,
    components: page.components.map((c, i) =>
      c.id === componentId ? fn(c, i) : c
    ),
  };
}

// ── Initial state factory ───────────────────────────────────────────────────

export function createInitialState(): BuilderState {
  const initialPage = createPage("Landing", []);
  return {
    data: {
      pages: [initialPage],
      activePageId: initialPage.id,
      selectedComponentId: null,
    },
    ui: {
      dragActiveId: null,
      showInstructions: true,
      loadDialogOpen: false,
      mobileSidebarOpen: false,
      savedProjects: [],
      isTextEditing: false,
      freeSidebarOpen: false,
      freeCodeOpen: false,
      freeNotesOpen: false,
      freeLayersOpen: false,
      activeBreakpoint: "desktop" as const,
    },
    past: [],
    future: [],
  };
}

// ── Reducer ─────────────────────────────────────────────────────────────────

function builderReducer(
  state: BuilderState,
  action: BuilderAction
): BuilderState {
  switch (action.type) {
    // ── History ──────────────────────────────────────────────────────────
    case "UNDO": {
      if (state.past.length === 0) return state;
      const previous = state.past[state.past.length - 1];
      return {
        ...state,
        data: previous,
        past: state.past.slice(0, -1),
        future: [state.data, ...state.future].slice(0, MAX_HISTORY),
      };
    }
    case "REDO": {
      if (state.future.length === 0) return state;
      const next = state.future[0];
      return {
        ...state,
        data: next,
        past: [...state.past, state.data].slice(-MAX_HISTORY),
        future: state.future.slice(1),
      };
    }

    // ── Pages ────────────────────────────────────────────────────────────
    case "SET_PAGES": {
      const s = pushHistory(state);
      return {
        ...s,
        data: {
          ...s.data,
          pages: action.pages,
          activePageId:
            action.pages.length > 0
              ? action.pages.some((p) => p.id === s.data.activePageId)
                ? s.data.activePageId
                : action.pages[0].id
              : "",
        },
      };
    }
    case "ADD_PAGE": {
      const s = pushHistory(state);
      const newPage = createPage(action.name, action.existingSlugs);
      return {
        ...s,
        data: {
          ...s.data,
          pages: [...s.data.pages, newPage],
          activePageId: newPage.id,
          selectedComponentId: null,
        },
        ui: { ...s.ui, isTextEditing: false },
      };
    }
    case "RENAME_PAGE": {
      const s = pushHistory(state);
      return {
        ...s,
        data: {
          ...s.data,
          pages: s.data.pages.map((p) =>
            p.id === action.pageId
              ? { ...p, name: action.name, slug: action.newSlug }
              : p
          ),
        },
      };
    }
    case "DELETE_PAGE": {
      if (state.data.pages.length <= 1) return state;
      const s = pushHistory(state);
      const remaining = s.data.pages.filter((p) => p.id !== action.pageId);
      return {
        ...s,
        data: {
          ...s.data,
          pages: remaining,
          activePageId:
            s.data.activePageId === action.pageId
              ? remaining[0]?.id ?? ""
              : s.data.activePageId,
          selectedComponentId: null,
        },
        ui: { ...s.ui, isTextEditing: false },
      };
    }
    case "SET_ACTIVE_PAGE": {
      return {
        ...state,
        data: {
          ...state.data,
          activePageId: action.pageId,
          selectedComponentId: null,
        },
        ui: {
          ...state.ui,
          isTextEditing: false,
          dragActiveId: null,
        },
      };
    }
    case "SET_LAYOUT_MODE": {
      const s = pushHistory(state);
      return {
        ...s,
        data: {
          ...s.data,
          pages: s.data.pages.map((page) => {
            if (page.id !== action.pageId) return page;
            if (action.mode === "free") {
              return {
                ...page,
                layoutMode: "free" as const,
                components: assignFreeCanvasToComponents(page.components),
              };
            }
            return { ...page, layoutMode: "stack" as const };
          }),
          selectedComponentId: null,
        },
        ui: {
          ...s.ui,
          freeSidebarOpen: false,
          freeCodeOpen: false,
          freeNotesOpen: false,
          freeLayersOpen: false,
        },
      };
    }

    // ── Components ───────────────────────────────────────────────────────
    case "ADD_COMPONENT": {
      const s = pushHistory(state);
      return {
        ...s,
        data: {
          ...s.data,
          pages: mapActivePage(s.data, (page) => {
            const comps = [...page.components];
            if (action.insertIndex !== undefined) {
              comps.splice(action.insertIndex, 0, action.component);
            } else {
              comps.push(action.component);
            }
            return { ...page, components: comps };
          }),
        },
      };
    }
    case "DELETE_COMPONENT": {
      const s = pushHistory(state);
      return {
        ...s,
        data: {
          ...s.data,
          pages: mapActivePage(s.data, (page) => ({
            ...page,
            components: page.components.filter(
              (c) => c.id !== action.componentId
            ),
          })),
          selectedComponentId:
            s.data.selectedComponentId === action.componentId
              ? null
              : s.data.selectedComponentId,
        },
      };
    }
    case "REORDER_COMPONENTS": {
      const s = pushHistory(state);
      return {
        ...s,
        data: {
          ...s.data,
          pages: mapActivePage(s.data, (page) => {
            const comps = [...page.components];
            const [moved] = comps.splice(action.oldIndex, 1);
            comps.splice(action.newIndex, 0, moved);
            return { ...page, components: comps };
          }),
        },
      };
    }
    case "DUPLICATE_COMPONENT": {
      const s = pushHistory(state);
      return {
        ...s,
        data: {
          ...s.data,
          pages: mapActivePage(s.data, (page) => ({
            ...page,
            components: [...page.components, action.newComponent],
          })),
          selectedComponentId: action.newComponent.id,
        },
      };
    }

    // ── Free canvas ──────────────────────────────────────────────────────
    case "UPDATE_FREE_CANVAS": {
      const s = action.skipHistory ? state : pushHistory(state);
      return {
        ...s,
        data: {
          ...s.data,
          pages: mapActivePage(s.data, (page) =>
            mapComponent(page, action.componentId, (c, i) => {
              const base =
                c.freeCanvas ?? defaultFreeCanvasForIndex(Math.max(0, i));
              return { ...c, freeCanvas: { ...base, ...action.patch } };
            })
          ),
        },
      };
    }
    case "BRING_TO_FRONT": {
      const s = pushHistory(state);
      return {
        ...s,
        data: {
          ...s.data,
          pages: mapActivePage(s.data, (page) => {
            const maxZ = page.components.reduce(
              (acc, c, i) => Math.max(acc, c.freeCanvas?.zIndex ?? i),
              0
            );
            return mapComponent(page, action.componentId, (c, i) => {
              const base = c.freeCanvas ?? defaultFreeCanvasForIndex(i);
              return { ...c, freeCanvas: { ...base, zIndex: maxZ + 1 } };
            });
          }),
        },
      };
    }

    // ── Styles ───────────────────────────────────────────────────────────
    case "UPDATE_STYLE": {
      const s = pushHistory(state);
      return {
        ...s,
        data: {
          ...s.data,
          pages: mapActivePage(s.data, (page) =>
            mapComponent(page, action.componentId, (c) => ({
              ...c,
              styles: { ...(c.styles ?? {}), ...action.styles },
            }))
          ),
        },
      };
    }

    // ── Text editing ─────────────────────────────────────────────────────
    case "REGISTER_TEXT_NODE": {
      return {
        ...state,
        data: {
          ...state.data,
          pages: mapActivePage(state.data, (page) =>
            mapComponent(page, action.componentId, (c) => {
              const existing = c.textContent?.[action.nodeId];
              if (existing) {
                if (
                  existing.value === existing.original &&
                  existing.original !== action.originalText
                ) {
                  return {
                    ...c,
                    textContent: {
                      ...(c.textContent ?? {}),
                      [action.nodeId]: {
                        original: action.originalText,
                        value: action.originalText,
                      },
                    },
                  };
                }
                return c;
              }
              return {
                ...c,
                textContent: {
                  ...(c.textContent ?? {}),
                  [action.nodeId]: {
                    original: action.originalText,
                    value: action.originalText,
                  },
                },
              };
            })
          ),
        },
      };
    }
    case "UPDATE_TEXT_NODE": {
      return {
        ...state,
        data: {
          ...state.data,
          pages: mapActivePage(state.data, (page) =>
            mapComponent(page, action.componentId, (c) => {
              const existing = c.textContent?.[action.nodeId];
              if (existing && existing.value === action.newValue) return c;
              return {
                ...c,
                textContent: {
                  ...(c.textContent ?? {}),
                  [action.nodeId]: {
                    original: existing?.original ?? action.newValue,
                    value: action.newValue,
                  },
                },
              };
            })
          ),
        },
      };
    }

    // ── Visibility & lock ────────────────────────────────────────────────
    case "TOGGLE_VISIBILITY": {
      const s = pushHistory(state);
      return {
        ...s,
        data: {
          ...s.data,
          pages: mapActivePage(s.data, (page) =>
            mapComponent(page, action.componentId, (c) => ({
              ...c,
              visible: c.visible === false ? true : false,
            }))
          ),
        },
      };
    }
    case "TOGGLE_LOCK": {
      const s = pushHistory(state);
      return {
        ...s,
        data: {
          ...s.data,
          pages: mapActivePage(s.data, (page) =>
            mapComponent(page, action.componentId, (c) => ({
              ...c,
              locked: !c.locked,
            }))
          ),
        },
      };
    }

    // ── UI state ─────────────────────────────────────────────────────────
    case "SET_TEXT_EDITING":
      return { ...state, ui: { ...state.ui, isTextEditing: action.enabled } };
    case "SELECT_COMPONENT":
      return {
        ...state,
        data: {
          ...state.data,
          selectedComponentId: action.componentId,
        },
      };
    case "SET_DRAG_ACTIVE_ID":
      return { ...state, ui: { ...state.ui, dragActiveId: action.id } };
    case "SET_SHOW_INSTRUCTIONS":
      return {
        ...state,
        ui: { ...state.ui, showInstructions: action.show },
      };
    case "SET_LOAD_DIALOG_OPEN":
      return {
        ...state,
        ui: { ...state.ui, loadDialogOpen: action.open },
      };
    case "SET_MOBILE_SIDEBAR_OPEN":
      return {
        ...state,
        ui: { ...state.ui, mobileSidebarOpen: action.open },
      };
    case "SET_SAVED_PROJECTS":
      return {
        ...state,
        ui: { ...state.ui, savedProjects: action.projects },
      };
    case "SET_FREE_SIDEBAR_OPEN":
      return {
        ...state,
        ui: { ...state.ui, freeSidebarOpen: action.open },
      };
    case "SET_FREE_CODE_OPEN":
      return { ...state, ui: { ...state.ui, freeCodeOpen: action.open } };
    case "SET_FREE_NOTES_OPEN":
      return {
        ...state,
        ui: { ...state.ui, freeNotesOpen: action.open },
      };
    case "SET_FREE_LAYERS_OPEN":
      return {
        ...state,
        ui: { ...state.ui, freeLayersOpen: action.open },
      };
    case "SET_ACTIVE_BREAKPOINT":
      return {
        ...state,
        ui: { ...state.ui, activeBreakpoint: action.breakpoint },
      };

    // ── Reset ────────────────────────────────────────────────────────────
    case "RESET_CANVAS":
      return {
        ...state,
        data: {
          pages: [action.initialPage],
          activePageId: action.initialPage.id,
          selectedComponentId: null,
        },
        ui: {
          ...state.ui,
          isTextEditing: false,
          dragActiveId: null,
        },
        past: [],
        future: [],
      };

    default:
      return state;
  }
}

// ── Context ─────────────────────────────────────────────────────────────────

type BuilderContextValue = {
  state: BuilderState;
  dispatch: Dispatch<BuilderAction>;
  /** Derived: the currently active page */
  activePage: BuilderProjectPage | null;
  /** Derived: route string for the active page */
  activeRoute: string;
  /** Derived: current layout mode */
  activeLayoutMode: BuilderLayoutMode;
  /** Derived: can undo */
  canUndo: boolean;
  /** Derived: can redo */
  canRedo: boolean;
};

const BuilderContext = createContext<BuilderContextValue | null>(null);

export function BuilderProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(builderReducer, undefined, createInitialState);

  const activePage = useMemo(() => {
    const { pages, activePageId } = state.data;
    if (!activePageId) return pages[0] ?? null;
    return pages.find((p) => p.id === activePageId) ?? pages[0] ?? null;
  }, [state.data]);

  const activePageIndex = activePage
    ? state.data.pages.findIndex((p) => p.id === activePage.id)
    : -1;

  const activeRoute =
    activePageIndex === 0 ? "/" : activePage ? `/${activePage.slug}` : "/";

  const activeLayoutMode: BuilderLayoutMode =
    activePage?.layoutMode ?? "stack";

  const canUndo = state.past.length > 0;
  const canRedo = state.future.length > 0;

  const value = useMemo<BuilderContextValue>(
    () => ({
      state,
      dispatch,
      activePage,
      activeRoute,
      activeLayoutMode,
      canUndo,
      canRedo,
    }),
    [state, activePage, activeRoute, activeLayoutMode, canUndo, canRedo]
  );

  return (
    <BuilderContext.Provider value={value}>{children}</BuilderContext.Provider>
  );
}

export function useBuilderStore(): BuilderContextValue {
  const ctx = useContext(BuilderContext);
  if (!ctx) {
    throw new Error("useBuilderStore must be used within a <BuilderProvider>");
  }
  return ctx;
}
