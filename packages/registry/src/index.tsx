import { Component } from "./types";
import { nativeComponents } from "./registry/native";
import { uiComponents } from "./registry/ui";

export * from "./registry/native";
export * from "./registry/ui";

export const componentsRegistry: Component[] = [
  ...nativeComponents,
  ...uiComponents,
];
