import { Component } from "@/types";
import { nativeComponents } from "./native";
import { uiComponents } from "./ui";

export * from "./native";
export * from "./ui";

export const componentsRegistry: Component[] = [
  ...nativeComponents,
  ...uiComponents,
];
