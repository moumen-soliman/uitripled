import type { ComponentType } from "react";
import type { ComponentCategory, UILibrary } from "@uitripled/utils";

export type Component = {
  id: string;
  name: string;
  description: string;
  category: ComponentCategory;
  component: ComponentType<any>;
  codePath: string;
  availableIn?: UILibrary[];
  componentName?: string;
  tags: string[];
  display?: boolean;
  variants?: any[];
  duration?: string;
  easing?: string;
  baseuiComponent?: React.ComponentType<any>;
};
