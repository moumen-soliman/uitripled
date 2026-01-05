import React from "react";

export type UILibrary = "shadcnui" | "baseui" | "carbon" | "react";

export const uiLibraryLabels: Record<UILibrary, string> = {
  shadcnui: "shadcn/ui",
  baseui: "Base UI",
  carbon: "Carbon",
  react: "React",
};

export type ComponentCategory =
  | "microinteractions"
  | "components"
  | "page"
  | "data"
  | "decorative"
  | "blocks"
  | "resumes"
  | "forms"
  | "cards"
  | "native";

export type Component = {
  id: string;
  name: string;
  description: string;
  category: ComponentCategory;
  tags: string[];

  component: React.ComponentType<any>;

  baseuiComponent?: React.ComponentType<any>; // BaseUI version of the component
  carbonComponent?: React.ComponentType<any>; // Carbon version of the component
  variants?: Array<{
    id: string;
    name: string;
    description: string;

    component: React.ComponentType<any>;
    code?: string;
  }>;
  code?: string; // Optional - loaded on demand
  codePath: string; // Path to the component file
  duration?: string;
  easing?: string;
  isFree?: boolean;
  display?: boolean;
  availableIn?: UILibrary[]; // Which UI libraries have this component implemented
};

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
