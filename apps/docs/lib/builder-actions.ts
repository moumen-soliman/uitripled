import type {
  BuilderComponent,
  BuilderComponentStyles,
  BuilderFreeCanvas,
  BuilderLayoutMode,
  BuilderProjectPage,
  SavedProject,
} from "@/types/builder";

// ── Action Types ────────────────────────────────────────────────────────────

export type BuilderAction =
  // Pages
  | { type: "SET_PAGES"; pages: BuilderProjectPage[] }
  | { type: "ADD_PAGE"; name: string; existingSlugs: string[] }
  | { type: "RENAME_PAGE"; pageId: string; name: string; newSlug: string }
  | { type: "DELETE_PAGE"; pageId: string }
  | { type: "SET_ACTIVE_PAGE"; pageId: string }
  | {
      type: "SET_LAYOUT_MODE";
      pageId: string;
      mode: BuilderLayoutMode;
    }
  // Components
  | {
      type: "ADD_COMPONENT";
      component: BuilderComponent;
      insertIndex?: number;
    }
  | { type: "DELETE_COMPONENT"; componentId: string }
  | {
      type: "REORDER_COMPONENTS";
      oldIndex: number;
      newIndex: number;
    }
  | {
      type: "DUPLICATE_COMPONENT";
      componentId: string;
      newComponent: BuilderComponent;
    }
  // Free canvas
  | {
      type: "UPDATE_FREE_CANVAS";
      componentId: string;
      patch: Partial<BuilderFreeCanvas>;
      skipHistory?: boolean;
    }
  | { type: "BRING_TO_FRONT"; componentId: string }
  // Styles
  | {
      type: "UPDATE_STYLE";
      componentId: string;
      styles: Partial<BuilderComponentStyles>;
    }
  // Text editing
  | {
      type: "REGISTER_TEXT_NODE";
      componentId: string;
      nodeId: string;
      originalText: string;
    }
  | {
      type: "UPDATE_TEXT_NODE";
      componentId: string;
      nodeId: string;
      newValue: string;
    }
  // Visibility & lock
  | { type: "TOGGLE_VISIBILITY"; componentId: string }
  | { type: "TOGGLE_LOCK"; componentId: string }
  // UI state
  | { type: "SET_TEXT_EDITING"; enabled: boolean }
  | { type: "SELECT_COMPONENT"; componentId: string | null }
  | { type: "SET_DRAG_ACTIVE_ID"; id: string | null }
  | { type: "SET_SHOW_INSTRUCTIONS"; show: boolean }
  | { type: "SET_LOAD_DIALOG_OPEN"; open: boolean }
  | { type: "SET_MOBILE_SIDEBAR_OPEN"; open: boolean }
  | { type: "SET_SAVED_PROJECTS"; projects: SavedProject[] }
  | { type: "SET_FREE_SIDEBAR_OPEN"; open: boolean }
  | { type: "SET_FREE_CODE_OPEN"; open: boolean }
  | { type: "SET_FREE_NOTES_OPEN"; open: boolean }
  | { type: "SET_FREE_LAYERS_OPEN"; open: boolean }
  | { type: "SET_ACTIVE_BREAKPOINT"; breakpoint: "desktop" | "tablet" | "mobile" }
  // History
  | { type: "UNDO" }
  | { type: "REDO" }
  // Reset
  | { type: "RESET_CANVAS"; initialPage: BuilderProjectPage };
