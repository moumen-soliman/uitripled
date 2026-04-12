import { Component } from "./index";

export type TextContentEntry = {
  original: string;
  value: string;
};

/** Absolute positioning on the free canvas (Framer/Figma-style). */
export type BuilderFreeCanvas = {
  x: number;
  y: number;
  /** Optional fixed width in px; content can overflow-x. */
  width?: number;
  zIndex?: number;
};

export type BuilderLayoutMode = "stack" | "free";

export type BuilderComponentStyles = {
  padding?: string;
  margin?: string;
  backgroundColor?: string;
  opacity?: number;
  borderRadius?: string;
  borderWidth?: string;
  borderColor?: string;
  borderStyle?: string;
  boxShadow?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
};

export type BuilderComponent = {
  id: string;
  animationId: string;
  animation: Component;
  textContent?: Record<string, TextContentEntry>;
  /** Set when page uses `layoutMode: "free"`. */
  freeCanvas?: BuilderFreeCanvas;
  /** Style overrides applied as a wrapper layer. */
  styles?: BuilderComponentStyles;
  /** Whether the component is visible on canvas (default true). */
  visible?: boolean;
  /** Whether the component is locked from editing (default false). */
  locked?: boolean;
};

export type BuilderProjectPage = {
  id: string;
  name: string;
  slug: string;
  components: BuilderComponent[];
  /** Default: stack (vertical sections). `free` = absolute canvas. */
  layoutMode?: BuilderLayoutMode;
};

export type SavedProjectComponent = {
  id: string;
  animationId: string;
  textContent?: Record<string, TextContentEntry>;
  freeCanvas?: BuilderFreeCanvas;
};

export type SavedProjectPage = {
  id: string;
  name: string;
  slug: string;
  components: SavedProjectComponent[];
  code?: string;
  layoutMode?: BuilderLayoutMode;
};

export type SavedProject = {
  name: string;
  uuid?: string;
  deploymentSlug?: string;
  pages?: SavedProjectPage[];
  entryPageId?: string;
  components?: SavedProjectComponent[];
  code?: string;
  savedAt: string;
  deploymentId?: string;
  deploymentUrl?: string;
};
