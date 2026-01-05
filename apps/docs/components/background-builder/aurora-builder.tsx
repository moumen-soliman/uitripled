"use client";

import { Button } from "@uitripled/react-shadcn/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@uitripled/react-shadcn/ui/tabs";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Check, Copy, Info, Pause, Play, RotateCcw } from "lucide-react";
import {
  createParser,
  parseAsFloat,
  parseAsInteger,
  parseAsString,
  useQueryState,
} from "nuqs";
import type React from "react";
import { useEffect, useState } from "react";

import {
  BACKGROUND_PRESETS,
  DEFAULT_BG_END,
  DEFAULT_BG_START,
  getPatternCSS,
  getPatternSize,
  GlobalSettingsPanel,
  INITIAL_LAYERS,
  LayerPanel,
  PreviewCanvas,
  type BackgroundPreset,
  type GradientLayer,
  type PatternType,
} from "./components";

// Custom parser for layers array - uses JSON encoding
const parseAsLayers = createParser<GradientLayer[]>({
  parse: (value) => {
    try {
      const decoded = decodeURIComponent(value);
      const parsed = JSON.parse(decoded);
      if (Array.isArray(parsed)) {
        return parsed as GradientLayer[];
      }
      return null;
    } catch {
      return null;
    }
  },
  serialize: (value) => {
    return encodeURIComponent(JSON.stringify(value));
  },
});

export function AuroraBuilder() {
  // Layers - URL synced
  const [layers, setLayers] = useQueryState(
    "layers",
    parseAsLayers.withDefault(INITIAL_LAYERS)
  );
  const [activeLayerId, setActiveLayerId] = useState<string | null>(
    INITIAL_LAYERS[0].id
  );

  // URL-synced state using nuqs
  const [activePreset, setActivePreset] = useQueryState(
    "preset",
    parseAsString.withDefault("aurora")
  );

  // Base Gradient
  const [bgStart, setBgStart] = useQueryState(
    "bgStart",
    parseAsString.withDefault(DEFAULT_BG_START)
  );
  const [bgEnd, setBgEnd] = useQueryState(
    "bgEnd",
    parseAsString.withDefault(DEFAULT_BG_END)
  );
  const [bgAngle, setBgAngle] = useQueryState(
    "bgAngle",
    parseAsInteger.withDefault(180)
  );

  // Effects
  const [noiseOpacity, setNoiseOpacity] = useQueryState(
    "noise",
    parseAsFloat.withDefault(0.05)
  );
  const [vignette, setVignette] = useQueryState(
    "vignette",
    parseAsFloat.withDefault(0)
  );
  const [saturation, setSaturation] = useQueryState(
    "saturation",
    parseAsInteger.withDefault(100)
  );

  // Patterns
  const [activePattern, setActivePattern] = useQueryState(
    "pattern",
    parseAsString.withDefault("none")
  );
  const [patternOpacity, setPatternOpacity] = useQueryState(
    "patternOpacity",
    parseAsFloat.withDefault(0.1)
  );
  const [patternColor, setPatternColor] = useQueryState(
    "patternColor",
    parseAsString.withDefault("#000000")
  );

  const [copied, setCopied] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);
  const [presetFilter, setPresetFilter] = useState<"all" | "light" | "dark">(
    "all"
  );

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Set active layer to first layer on mount
  useEffect(() => {
    if (layers.length > 0 && !activeLayerId) {
      setActiveLayerId(layers[0].id);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const addLayer = () => {
    const newLayer: GradientLayer = {
      id: Math.random().toString(36).substring(7),
      type: "radial",
      color: "rgba(100, 100, 255, 0.5)",
      x: 50,
      y: 50,
      width: 50,
      height: 50,
      opacity: 0.8,
      blur: 40,
      speed: 1.0,
      blendMode: "normal",
      rotation: 0,
      animation: "none",
      animationSpeed: 1,
      visible: true,
    };
    setLayers([...layers, newLayer]);
    setActiveLayerId(newLayer.id);
  };

  const duplicateLayer = (id: string) => {
    const layerToDuplicate = layers.find((l) => l.id === id);
    if (layerToDuplicate) {
      const newLayer = {
        ...layerToDuplicate,
        id: Math.random().toString(36).substring(7),
        x: layerToDuplicate.x + 5,
        y: layerToDuplicate.y + 5,
      };
      setLayers([...layers, newLayer]);
      setActiveLayerId(newLayer.id);
    }
  };

  const updateLayer = (id: string, updates: Partial<GradientLayer>) => {
    setLayers(layers.map((l) => (l.id === id ? { ...l, ...updates } : l)));
  };

  const removeLayer = (id: string) => {
    if (layers.length <= 1) return;
    setLayers(layers.filter((l) => l.id !== id));
    if (activeLayerId === id) {
      setActiveLayerId(layers[0].id);
    }
  };

  const moveLayer = (id: string, direction: "up" | "down") => {
    const index = layers.findIndex((l) => l.id === id);
    if (
      (direction === "up" && index === 0) ||
      (direction === "down" && index === layers.length - 1)
    )
      return;
    const newLayers = [...layers];
    const swapIndex = direction === "up" ? index - 1 : index + 1;
    [newLayers[index], newLayers[swapIndex]] = [
      newLayers[swapIndex],
      newLayers[index],
    ];
    setLayers(newLayers);
  };

  const applyPreset = (key: string) => {
    const preset = BACKGROUND_PRESETS[key];
    if (preset) {
      setLayers(JSON.parse(JSON.stringify(preset.layers)));
      setBgStart(preset.bgStart);
      setBgEnd(preset.bgEnd);
      setBgAngle(preset.bgAngle);
      setNoiseOpacity(preset.noiseOpacity);
      setActivePattern(preset.pattern as PatternType);
      setPatternOpacity(preset.patternOpacity);
      setPatternColor(preset.patternColor);
      setVignette(preset.vignette);
      setSaturation(preset.saturation);
      setActivePreset(key);
      setActiveLayerId(preset.layers[0].id);
    }
  };

  const randomizeCurrentPreset = () => {
    const currentPreset = BACKGROUND_PRESETS[activePreset];
    if (currentPreset) {
      const randomizedLayers = currentPreset.layers.map((layer) => ({
        ...layer,
        x: Math.random() * 100,
        y: Math.random() * 100,
        width: 30 + Math.random() * 70,
        height: 30 + Math.random() * 70,
        blur: 30 + Math.random() * 100,
        speed: (Math.random() - 0.5) * 4,
      }));
      setLayers(randomizedLayers);
    }
  };

  const isLightPreset = (key: string) => {
    const preset = BACKGROUND_PRESETS[key];
    const hex = preset.bgStart.replace("#", "");
    const r = Number.parseInt(hex.substring(0, 2), 16);
    const g = Number.parseInt(hex.substring(2, 4), 16);
    const b = Number.parseInt(hex.substring(4, 6), 16);
    return (r + g + b) / 3 > 128;
  };

  const filteredPresets = Object.entries(BACKGROUND_PRESETS).filter(([key]) => {
    if (presetFilter === "all") return true;
    if (presetFilter === "light") return isLightPreset(key);
    return !isLightPreset(key);
  }) as [string, BackgroundPreset][];

  const handleCopyCode = () => {
    const code = `// Aurora Background Component - Generated by Background Builder
// Install: npm install framer-motion

"use client"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useCallback } from "react"

export default function AuroraBackground({ children }: { children?: React.ReactNode }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2
    const y = (e.clientY / window.innerHeight - 0.5) * 2
    mouseX.set(x)
    mouseY.set(y)
  }, [mouseX, mouseY])

  return (
    <div className="relative w-full min-h-screen overflow-hidden" onMouseMove={handleMouseMove} style={{ filter: "saturate(${saturation / 100})" }}>
      <div className="absolute inset-0" style={{ background: "linear-gradient(${bgAngle}deg, ${bgStart} 0%, ${bgEnd} 100%)" }} />
      ${layers
        .filter((l) => l.visible)
        .map(
          (layer) => `
      <motion.div
        className="absolute rounded-full"
        style={{
          ${
            layer.type === "radial"
              ? `backgroundColor: "${layer.color}"`
              : layer.type === "conic"
                ? `background: "conic-gradient(from ${layer.rotation || 0}deg, ${layer.color}, transparent)"`
                : layer.type === "linear"
                  ? `background: "linear-gradient(${layer.rotation || 0}deg, ${layer.color}, ${layer.secondaryColor || "transparent"})"`
                  : `background: "radial-gradient(ellipse at 30% 30%, ${layer.color}, transparent 50%), radial-gradient(ellipse at 70% 70%, ${layer.secondaryColor || layer.color}, transparent 50%)"`
          },
          width: "${layer.width}%",
          height: "${layer.height}%",
          top: "${layer.y}%",
          left: "${layer.x}%",
          opacity: ${layer.opacity},
          filter: "blur(${layer.blur}px)",
          mixBlendMode: "${layer.blendMode}",
          transform: "translate(-50%, -50%)"
        }}
        animate={${
          layer.animation === "float"
            ? `{ y: [0, -20, 0], x: [0, 10, 0] }`
            : layer.animation === "pulse"
              ? `{ scale: [1, 1.1, 1], opacity: [${layer.opacity}, ${layer.opacity * 0.8}, ${layer.opacity}] }`
              : layer.animation === "rotate"
                ? `{ rotate: [0, 360] }`
                : layer.animation === "breathe"
                  ? `{ scale: [1, 1.05, 1] }`
                  : `{}`
        }}
        transition={{ duration: ${4 / layer.animationSpeed}, repeat: Infinity, ease: "easeInOut" }}
      />`
        )
        .join("")}
      ${
        vignette > 0
          ? `
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,${vignette}) 100%)" }} />`
          : ""
      }
      ${
        activePattern !== "none" && patternOpacity > 0
          ? `
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: ${patternOpacity}, backgroundImage: "${getPatternCSS(activePattern, patternColor)}", backgroundSize: "${getPatternSize(activePattern)}" }} />`
          : ""
      }
      ${
        noiseOpacity > 0
          ? `
      <div className="absolute inset-0 pointer-events-none mix-blend-overlay" style={{ opacity: ${noiseOpacity} }}>
        <svg className="w-full h-full"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#noise)"/></svg>
      </div>`
          : ""
      }
      <div className="relative z-30">{children}</div>
    </div>
  )
}`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setLayers(INITIAL_LAYERS);
    setBgStart(DEFAULT_BG_START);
    setBgEnd(DEFAULT_BG_END);
    setBgAngle(180);
    setNoiseOpacity(0.05);
    setActivePattern("none");
    setPatternOpacity(0.1);
    setPatternColor("#000000");
    setVignette(0);
    setSaturation(100);
    setActivePreset("aurora");
  };

  return (
    <div className="flex h-[100dvh] w-full flex-col md:flex-row bg-background text-foreground overflow-hidden">
      {/* Sidebar Controls */}
      <div className="w-full md:w-80 lg:w-96 flex-shrink-0 border-b md:border-b-0 md:border-r border-border flex flex-col bg-muted/10 z-20 shadow-xl h-[50dvh] md:h-full md:max-h-none overflow-hidden">
        <div className="p-6 pb-2">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold flex items-center gap-2">
              Background Builder
            </h1>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsAnimating(!isAnimating)}
                title={isAnimating ? "Pause animations" : "Play animations"}
              >
                {isAnimating ? (
                  <Pause className="w-4 h-4" />
                ) : (
                  <Play className="w-4 h-4" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowInfo(!showInfo)}
              >
                <Info className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <AnimatePresence>
            {showInfo && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-4 p-3 rounded-lg bg-primary/10 border border-primary/20 text-sm overflow-hidden"
              >
                <p className="font-medium text-primary mb-1">
                  Background Builder
                </p>
                <p className="text-muted-foreground text-xs">
                  16 unique presets, 4 layer types (radial, conic, linear,
                  mesh), 8 patterns, animations, vignette, and saturation
                  controls. Move your mouse to see parallax effects!
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Tabs defaultValue="global" className="flex-1 flex flex-col min-h-0">
          <div className="px-6">
            <TabsList className="w-full grid grid-cols-2">
              <TabsTrigger value="global" className="text-xs">
                Global & Presets
              </TabsTrigger>
              <TabsTrigger value="layers" className="text-xs">
                Layers ({layers.length})
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent
            value="global"
            className="flex-1 overflow-y-auto p-6 space-y-6"
          >
            <GlobalSettingsPanel
              activePreset={activePreset}
              presetFilter={presetFilter}
              filteredPresets={filteredPresets}
              onApplyPreset={applyPreset}
              onSetPresetFilter={setPresetFilter}
              onRandomize={randomizeCurrentPreset}
              bgStart={bgStart}
              bgEnd={bgEnd}
              bgAngle={bgAngle}
              onBgStartChange={setBgStart}
              onBgEndChange={setBgEnd}
              onBgAngleChange={setBgAngle}
              noiseOpacity={noiseOpacity}
              vignette={vignette}
              saturation={saturation}
              activePattern={activePattern}
              patternOpacity={patternOpacity}
              patternColor={patternColor}
              onNoiseOpacityChange={setNoiseOpacity}
              onVignetteChange={setVignette}
              onSaturationChange={setSaturation}
              onActivePatternChange={setActivePattern}
              onPatternOpacityChange={setPatternOpacity}
              onPatternColorChange={setPatternColor}
            />
          </TabsContent>

          <TabsContent
            value="layers"
            className="flex-1 overflow-y-auto p-6 space-y-6"
          >
            <LayerPanel
              layers={layers}
              activeLayerId={activeLayerId}
              onAddLayer={addLayer}
              onSetActiveLayerId={setActiveLayerId}
              onMoveLayer={moveLayer}
              onUpdateLayer={updateLayer}
              onRemoveLayer={removeLayer}
              onDuplicateLayer={duplicateLayer}
            />
          </TabsContent>
        </Tabs>

        <div className="p-6 border-t border-border bg-background space-y-2">
          <Button
            onClick={handleCopyCode}
            variant={copied ? "default" : "secondary"}
            className="w-full shadow-sm"
          >
            {copied ? (
              <>
                <Check className="mr-2 w-4 h-4" /> Copied!
              </>
            ) : (
              <>
                <Copy className="mr-2 w-4 h-4" /> Copy Component
              </>
            )}
          </Button>
          <Button
            variant="outline"
            className="w-full text-xs bg-transparent"
            onClick={handleReset}
          >
            <RotateCcw className="w-3 h-3 mr-2" /> Reset to Default
          </Button>
        </div>
      </div>

      {/* Preview Area */}
      <PreviewCanvas
        layers={layers}
        bgStart={bgStart}
        bgEnd={bgEnd}
        bgAngle={bgAngle}
        saturation={saturation}
        vignette={vignette}
        noiseOpacity={noiseOpacity}
        activePattern={activePattern}
        patternOpacity={patternOpacity}
        patternColor={patternColor}
        isAnimating={isAnimating}
        smoothX={smoothX}
        smoothY={smoothY}
        onMouseMove={handleMouseMove}
      />
    </div>
  );
}
