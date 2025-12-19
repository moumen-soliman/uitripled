import { Component } from "./index";

export type TextContentEntry = {
  original: string;
  value: string;
};

export type ImageContentEntry = {
  original: string;
  value: string;
};

export type LinkContentEntry = {
  original: string;
  value: string;
};

export type ElementNode = {
  id: string;
  type: "text" | "image" | "link" | "container";
  parentId?: string; // For nested elements
  order: number;
};

export type BuilderComponent = {
  id: string;
  animationId: string;
  animation: Component;
  textContent?: Record<string, TextContentEntry>;
  imageContent?: Record<string, ImageContentEntry>;
  linkContent?: Record<string, LinkContentEntry>;
  styleOverrides?: Record<string, React.CSSProperties>;
  hiddenNodes?: string[];
  elementOrder?: string[]; // Order of element IDs for reordering
};

export type BuilderProjectPage = {
  id: string;
  name: string;
  slug: string;
  components: BuilderComponent[];
};

export type SavedProjectComponent = {
  id: string;
  animationId: string;
  textContent?: Record<string, TextContentEntry>;
  imageContent?: Record<string, ImageContentEntry>;
  linkContent?: Record<string, LinkContentEntry>;
  styleOverrides?: Record<string, React.CSSProperties>;
  hiddenNodes?: string[];
};

export type SavedProjectPage = {
  id: string;
  name: string;
  slug: string;
  components: SavedProjectComponent[];
  code?: string;
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
