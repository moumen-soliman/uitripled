export type LayerType = "radial" | "conic" | "linear" | "mesh";

export type BlendMode =
  | "normal"
  | "multiply"
  | "screen"
  | "overlay"
  | "color-dodge"
  | "color-burn"
  | "soft-light"
  | "hard-light"
  | "difference"
  | "exclusion"
  | "hue"
  | "saturation"
  | "luminosity";

export type PatternType =
  | "none"
  | "grid"
  | "dots"
  | "cross"
  | "diagonal"
  | "hexagon"
  | "waves"
  | "circuit";

export type AnimationType = "none" | "float" | "pulse" | "rotate" | "breathe";

export interface GradientLayer {
  id: string;
  type: LayerType;
  color: string;
  secondaryColor?: string;
  x: number;
  y: number;
  width: number;
  height: number;
  opacity: number;
  blur: number;
  speed: number;
  blendMode: BlendMode;
  rotation?: number;
  animation: AnimationType;
  animationSpeed: number;
  visible: boolean;
  repeatInfinity?: boolean;
}

export interface BackgroundPreset {
  name: string;
  emoji: string;
  bgStart: string;
  bgEnd: string;
  bgAngle: number;
  layers: GradientLayer[];
  noiseOpacity: number;
  pattern: PatternType;
  patternOpacity: number;
  patternColor: string;
  vignette: number;
  saturation: number;
}
