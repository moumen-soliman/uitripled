import { Component } from "./index";

export type TextContentEntry = {
  original: string;
  value: string;
};

export type BuilderComponent = {
  id: string;
  animationId: string;
  animation: Component;
  textContent?: Record<string, TextContentEntry>;
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
