export type ShaderType =
  | "mesh"
  | "liquid"
  | "waves"
  | "grain"
  | "neuro"
  | "metaballs"
  | "voronoi"
  | "godrays"
  | "swirl"
  | "spiral";

export const SHADER_INFO: Record<string, { name: string; description: string }> = {
  mesh: { name: "Mesh Gradient", description: "Flowing multi-color mesh" },
  liquid: { name: "Liquid Metal", description: "Metallic liquid effect" },
  waves: { name: "Waves", description: "Smooth wave patterns" },
  grain: { name: "Grain Gradient", description: "Textured grainy gradients" },
  neuro: { name: "Neuro Noise", description: "Organic neural patterns" },
  metaballs: { name: "Metaballs", description: "Blobby merging shapes" },
  voronoi: { name: "Voronoi", description: "Cellular crystal patterns" },
  godrays: { name: "God Rays", description: "Ethereal light rays" },
  swirl: { name: "Swirl", description: "Spiraling vortex effect" },
  spiral: { name: "Spiral", description: "Hypnotic spiral pattern" },
};

export const COMPONENT_MAP: Record<string, string> = {
  mesh: "MeshGradient",
  liquid: "LiquidMetal",
  waves: "Waves",
  grain: "GrainGradient",
  neuro: "NeuroNoise",
  metaballs: "Metaballs",
  voronoi: "Voronoi",
  godrays: "GodRays",
  swirl: "Swirl",
  spiral: "Spiral",
};

export const COLOR_PRESETS: Record<string, { name: string; colors: string[] }> = {
  ruby: {
    name: "Ruby",
    colors: ["#000000", "#dc2626", "#ffffff", "#7f1d1d", "#ef4444"],
  },
  ocean: {
    name: "Ocean",
    colors: ["#0a192f", "#0ea5e9", "#06b6d4", "#164e63", "#22d3ee"],
  },
  forest: {
    name: "Forest",
    colors: ["#14532d", "#22c55e", "#166534", "#4ade80", "#052e16"],
  },
  sunset: {
    name: "Sunset",
    colors: ["#1c1917", "#f97316", "#eab308", "#dc2626", "#fbbf24"],
  },
  cyber: {
    name: "Cyber",
    colors: ["#0f0f0f", "#00ff88", "#ff00ff", "#00ffff", "#ffff00"],
  },
  mono: {
    name: "Monochrome",
    colors: ["#000000", "#3f3f3f", "#6b6b6b", "#a3a3a3", "#ffffff"],
  },
  aurora: {
    name: "Aurora",
    colors: ["#0c0a1d", "#7c3aed", "#2dd4bf", "#c084fc", "#5eead4"],
  },
  lavender: {
    name: "Lavender",
    colors: ["#1e1b4b", "#a78bfa", "#f0abfc", "#7c3aed", "#e879f9"],
  },
};
