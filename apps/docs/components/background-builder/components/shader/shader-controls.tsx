"use client";

import { Button } from "@uitripled/react-shadcn/ui/button";
import { Input } from "@uitripled/react-shadcn/ui/input";
import { Label } from "@uitripled/react-shadcn/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@uitripled/react-shadcn/ui/select";
import { Slider } from "@uitripled/react-shadcn/ui/slider";
import { Check, Copy, Info, Plus, X } from "lucide-react";
import { useState } from "react";
import {
  COLOR_PRESETS,
  COMPONENT_MAP,
  SHADER_INFO,
  ShaderType,
} from "./constants";

export interface ShaderControlsProps {
  activeShader: string;
  setActiveShader: (v: string | null) => void;
  colors: string[];
  setColors: (v: string[]) => void;
  activePreset: string | null;
  setActivePreset: (v: string | null) => void;
  speed: number;
  setSpeed: (v: number | null) => void;
  scale: number;
  setScale: (v: number | null) => void;
  opacity: number;
  setOpacity: (v: number | null) => void;
  // Liquid
  liquidBg: string;
  setLiquidBg: (v: string | null) => void;
  liquidBlob: string;
  setLiquidBlob: (v: string | null) => void;
  liquidDistortion: number;
  setLiquidDistortion: (v: number | null) => void;
  liquidSoftness: number;
  setLiquidSoftness: (v: number | null) => void;
  // Waves
  wavesBg: string;
  setWavesBg: (v: string | null) => void;
  wavesColorFront: string;
  setWavesColorFront: (v: string | null) => void;
  wavesShape: number;
  setWavesShape: (v: number | null) => void;
  wavesFreq: number;
  setWavesFreq: (v: number | null) => void;
  wavesAmp: number;
  setWavesAmp: (v: number | null) => void;
  // Grain
  grainBg: string;
  setGrainBg: (v: string | null) => void;
  grainShape: string;
  setGrainShape: (v: string | null) => void;
  grainNoise: number;
  setGrainNoise: (v: number | null) => void;
  grainIntensity: number;
  setGrainIntensity: (v: number | null) => void;
  // Neuro
  neuroBrightness: number;
  setNeuroBrightness: (v: number | null) => void;
  // Backgrounds
  metaballsBg: string;
  setMetaballsBg: (v: string | null) => void;
  voronoiBg: string;
  setVoronoiBg: (v: string | null) => void;
  godraysBg: string;
  setGodraysBg: (v: string | null) => void;
  swirlBg: string;
  setSwirlBg: (v: string | null) => void;
  spiralBg: string;
  setSpiralBg: (v: string | null) => void;
}

export function ShaderControls({
  activeShader,
  setActiveShader,
  colors,
  setColors,
  activePreset,
  setActivePreset,
  speed,
  setSpeed,
  scale,
  setScale,
  opacity,
  setOpacity,
  // Liquid
  liquidBg,
  setLiquidBg,
  liquidBlob,
  setLiquidBlob,
  liquidDistortion,
  setLiquidDistortion,
  liquidSoftness,
  setLiquidSoftness,
  // Waves
  wavesBg,
  setWavesBg,
  wavesColorFront,
  setWavesColorFront,
  wavesShape,
  setWavesShape,
  wavesFreq,
  setWavesFreq,
  wavesAmp,
  setWavesAmp,
  // Grain
  grainBg,
  setGrainBg,
  grainShape,
  setGrainShape,
  grainNoise,
  setGrainNoise,
  grainIntensity,
  setGrainIntensity,
  // Neuro
  neuroBrightness,
  setNeuroBrightness,
  // Backgrounds
  metaballsBg,
  setMetaballsBg,
  voronoiBg,
  setVoronoiBg,
  godraysBg,
  setGodraysBg,
  swirlBg,
  setSwirlBg,
  spiralBg,
  setSpiralBg,
}: ShaderControlsProps) {
  const [copied, setCopied] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const generateInstallInfo = () => {
    return `// 📦 Installation:
// npm install @paper-design/shaders-react
//
// 📖 Documentation: https://paper.design/shaders
//
// Usage:
// import { ${COMPONENT_MAP[activeShader]} } from "@paper-design/shaders-react"
//
// `;
  };

  const handleCopyCode = () => {
    let code = generateInstallInfo();
    const colorArray = `[${colors.map((c) => `"${c}"`).join(", ")}]`;

    switch (activeShader) {
      case "mesh":
        code += `<MeshGradient
  colors={${colorArray}}
  speed={${speed}}
  scale={${scale}}
/>`;
        break;
      case "liquid":
        code += `<LiquidMetal
  colorBack="${liquidBg}"
  speed={${speed}}
  shape="${liquidBlob}"
  distortion={${liquidDistortion}}
  softness={${liquidSoftness}}
/>`;
        break;
      case "waves":
        code += `<Waves
  colorFront="${wavesColorFront}"
  colorBack="${wavesBg}"
  shape={${wavesShape}}
  frequency={${wavesFreq}}
  amplitude={${wavesAmp}}
/>`;
        break;
      case "grain":
        code += `<GrainGradient
  colors={${colorArray}}
  colorBack="${grainBg}"
  speed={${speed}}
  shape="${grainShape}"
  noise={${grainNoise}}
  intensity={${grainIntensity}}
/>`;
        break;
      case "neuro":
        code += `<NeuroNoise
  colorFront="${colors[0] || "#ffffff"}"
  colorMid="${colors[1] || "#808080"}"
  colorBack="${colors[2] || "#000000"}"
  speed={${speed}}
  scale={${scale}}
  brightness={${neuroBrightness}}
/>`;
        break;
      case "metaballs":
        code += `<Metaballs
  colors={${colorArray}}
  colorBack="${metaballsBg}"
  speed={${speed}}
  scale={${scale}}
/>`;
        break;
      case "voronoi":
        code += `<Voronoi
  colors={${colorArray}}
  speed={${speed}}
  scale={${scale}}
/>`;
        break;
      case "godrays":
        code += `<GodRays
  colors={${colorArray}}
  colorBack="${godraysBg}"
  speed={${speed}}
  scale={${scale}}
/>`;
        break;
      case "swirl":
        code += `<Swirl
  colors={${colorArray}}
  colorBack="${swirlBg}"
  speed={${speed}}
  scale={${scale}}
/>`;
        break;
      case "spiral":
        code += `<Spiral
  colorFront="${colors[0] || "#ffffff"}"
  colorBack="${spiralBg}"
  speed={${speed}}
  scale={${scale}}
/>`;
        break;
    }

    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleColorChange = (index: number, value: string) => {
    const newColors = [...colors];
    newColors[index] = value;
    setColors(newColors);
    setActivePreset(null); // Clear active preset when manually editing
  };

  const addColor = () => {
    if (colors.length < 10) {
      setColors([...colors, "#ffffff"]);
    }
  };

  const removeColor = (index: number) => {
    if (colors.length > 2) {
      const newColors = colors.filter((_, i) => i !== index);
      setColors(newColors);
      setActivePreset(null);
    }
  };

  const applyPreset = (presetKey: string) => {
    const preset = COLOR_PRESETS[presetKey];
    if (preset) {
      setColors([...preset.colors]);
      setActivePreset(presetKey);
    }
  };

  const needsColors = !["waves"].includes(activeShader);
  const needsSpeed = !["waves"].includes(activeShader);
  const needsScale = [
    "mesh",
    "neuro",
    "metaballs",
    "voronoi",
    "godrays",
    "swirl",
    "spiral",
  ].includes(activeShader);

  return (
    <div className="w-full md:w-80 lg:w-96 flex-shrink-0 border-b md:border-b-0 md:border-r border-border p-6 overflow-y-auto bg-muted/10 h-auto md:h-full max-h-[50vh] md:max-h-none">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-bold">Shader Builder</h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowInfo(!showInfo)}
            className="h-8 w-8"
          >
            <Info className="h-4 w-4" />
          </Button>
        </div>

        {showInfo && (
          <div className="mb-4 p-3 rounded-lg bg-primary/10 border border-primary/20 text-sm">
            <p className="font-medium text-primary mb-1">
              Powered by Paper Design
            </p>
            <p className="text-muted-foreground text-xs mb-2">
              Beautiful WebGL shaders for React. Install with:
            </p>
            <code className="block bg-background/50 p-2 rounded text-xs font-mono">
              npm i @paper-design/shaders-react
            </code>
          </div>
        )}

        <p className="text-sm text-muted-foreground mb-4">
          {SHADER_INFO[activeShader].description}
        </p>
        <Select
          value={activeShader}
          onValueChange={(val) => setActiveShader(val as ShaderType)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Shader" />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(SHADER_INFO)
              .filter(([key]) => key !== "waves")
              .map(([key, info]) => (
                <SelectItem key={key} value={key}>
                  {info.name}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-6">
        {/* Color Presets */}
        {needsColors && (
          <div className="space-y-3">
            <Label>Color Presets</Label>
            <div className="grid grid-cols-4 gap-2">
              {Object.entries(COLOR_PRESETS).map(([key, preset]) => (
                <button
                  key={key}
                  onClick={() => applyPreset(key)}
                  className={`flex flex-col items-center p-2 rounded-lg border transition-all hover:scale-105 ${
                    activePreset === key
                      ? "border-primary ring-2 ring-primary/20 bg-primary/5"
                      : "border-border hover:border-muted-foreground/50"
                  }`}
                  title={preset.name}
                >
                  <div className="flex gap-0.5 mb-1">
                    {preset.colors.slice(0, 4).map((color, i) => (
                      <div
                        key={i}
                        className="w-3 h-3 rounded-sm"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] text-muted-foreground truncate w-full text-center">
                    {preset.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Colors Control */}
        {needsColors && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Colors ({colors.length})</Label>
              <Button
                variant="outline"
                size="icon"
                onClick={addColor}
                disabled={colors.length >= 10}
                className="h-8 w-8"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {colors.map((color, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Input
                    type="color"
                    value={color}
                    onChange={(e) => handleColorChange(index, e.target.value)}
                    className="h-10 w-10 p-1 cursor-pointer shrink-0"
                  />
                  <Input
                    type="text"
                    value={color}
                    onChange={(e) => handleColorChange(index, e.target.value)}
                    className="flex-1 font-mono text-xs uppercase"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeColor(index)}
                    disabled={colors.length <= 2}
                    className="h-8 w-8 text-muted-foreground hover:text-destructive"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Common Controls */}
        <div className="space-y-4">
          {needsSpeed && (
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Speed ({speed.toFixed(2)})</Label>
              </div>
              <Slider
                value={[speed]}
                min={0}
                max={5}
                step={0.1}
                onValueChange={(vals) => setSpeed(vals[0])}
              />
            </div>
          )}

          {needsScale && (
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Scale ({scale.toFixed(2)})</Label>
              </div>
              <Slider
                value={[scale]}
                min={0.1}
                max={4}
                step={0.1}
                onValueChange={(vals) => setScale(vals[0])}
              />
            </div>
          )}

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Opacity ({opacity.toFixed(2)})</Label>
            </div>
            <Slider
              value={[opacity]}
              min={0}
              max={1}
              step={0.05}
              onValueChange={(vals) => setOpacity(vals[0])}
            />
          </div>
        </div>

        {/* LIQUID SPECIFIC */}
        {activeShader === "liquid" && (
          <>
            <div className="space-y-2">
              <Label>Background Color</Label>
              <div className="flex items-center gap-2">
                <Input
                  type="color"
                  value={liquidBg}
                  onChange={(e) => setLiquidBg(e.target.value)}
                  className="h-10 w-10 p-1 cursor-pointer shrink-0"
                />
                <Input
                  type="text"
                  value={liquidBg}
                  onChange={(e) => setLiquidBg(e.target.value)}
                  className="flex-1 font-mono text-xs uppercase"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Shape</Label>
              <Select value={liquidBlob} onValueChange={setLiquidBlob}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="circle">Circle</SelectItem>
                  <SelectItem value="daisy">Daisy</SelectItem>
                  <SelectItem value="diamond">Diamond</SelectItem>
                  <SelectItem value="metaballs">Metaballs</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Distortion ({liquidDistortion.toFixed(2)})</Label>
              <Slider
                value={[liquidDistortion]}
                min={0}
                max={1}
                step={0.01}
                onValueChange={(v) => setLiquidDistortion(v[0])}
              />
            </div>
            <div className="space-y-2">
              <Label>Softness ({liquidSoftness.toFixed(2)})</Label>
              <Slider
                value={[liquidSoftness]}
                min={0}
                max={1}
                step={0.01}
                onValueChange={(v) => setLiquidSoftness(v[0])}
              />
            </div>
          </>
        )}

        {/* WAVES SPECIFIC */}
        {activeShader === "waves" && (
          <>
            <div className="space-y-2">
              <Label>Front Color</Label>
              <div className="flex items-center gap-2">
                <Input
                  type="color"
                  value={wavesColorFront}
                  onChange={(e) => setWavesColorFront(e.target.value)}
                  className="h-10 w-10 p-1 cursor-pointer shrink-0"
                />
                <Input
                  type="text"
                  value={wavesColorFront}
                  onChange={(e) => setWavesColorFront(e.target.value)}
                  className="flex-1 font-mono text-xs uppercase"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Back Color</Label>
              <div className="flex items-center gap-2">
                <Input
                  type="color"
                  value={wavesBg}
                  onChange={(e) => setWavesBg(e.target.value)}
                  className="h-10 w-10 p-1 cursor-pointer shrink-0"
                />
                <Input
                  type="text"
                  value={wavesBg}
                  onChange={(e) => setWavesBg(e.target.value)}
                  className="flex-1 font-mono text-xs uppercase"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Shape (0=Zigzag, 1=Sine, 2-3=Irregular)</Label>
              <Slider
                value={[wavesShape]}
                min={0}
                max={3}
                step={0.1}
                onValueChange={(v) => setWavesShape(v[0])}
              />
            </div>
            <div className="space-y-2">
              <Label>Frequency ({wavesFreq.toFixed(1)})</Label>
              <Slider
                value={[wavesFreq]}
                min={0}
                max={5}
                step={0.1}
                onValueChange={(v) => setWavesFreq(v[0])}
              />
            </div>
            <div className="space-y-2">
              <Label>Amplitude ({wavesAmp.toFixed(2)})</Label>
              <Slider
                value={[wavesAmp]}
                min={0}
                max={1}
                step={0.01}
                onValueChange={(v) => setWavesAmp(v[0])}
              />
            </div>
          </>
        )}

        {/* GRAIN SPECIFIC */}
        {activeShader === "grain" && (
          <>
            <div className="space-y-2">
              <Label>Background Color</Label>
              <div className="flex items-center gap-2">
                <Input
                  type="color"
                  value={grainBg}
                  onChange={(e) => setGrainBg(e.target.value)}
                  className="h-10 w-10 p-1 cursor-pointer shrink-0"
                />
                <Input
                  type="text"
                  value={grainBg}
                  onChange={(e) => setGrainBg(e.target.value)}
                  className="flex-1 font-mono text-xs uppercase"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Shape</Label>
              <Select value={grainShape} onValueChange={setGrainShape}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wave">Wave</SelectItem>
                  <SelectItem value="dots">Dots</SelectItem>
                  <SelectItem value="truchet">Truchet</SelectItem>
                  <SelectItem value="corners">Corners</SelectItem>
                  <SelectItem value="ripple">Ripple</SelectItem>
                  <SelectItem value="blob">Blob</SelectItem>
                  <SelectItem value="sphere">Sphere</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Noise ({grainNoise.toFixed(2)})</Label>
              <Slider
                value={[grainNoise]}
                min={0}
                max={1}
                step={0.01}
                onValueChange={(v) => setGrainNoise(v[0])}
              />
            </div>
            <div className="space-y-2">
              <Label>Intensity ({grainIntensity.toFixed(2)})</Label>
              <Slider
                value={[grainIntensity]}
                min={0}
                max={2}
                step={0.01}
                onValueChange={(v) => setGrainIntensity(v[0])}
              />
            </div>
          </>
        )}

        {/* NEURO SPECIFIC */}
        {activeShader === "neuro" && (
          <div className="space-y-2">
            <Label>Brightness ({neuroBrightness.toFixed(2)})</Label>
            <Slider
              value={[neuroBrightness]}
              min={0}
              max={2}
              step={0.01}
              onValueChange={(v) => setNeuroBrightness(v[0])}
            />
          </div>
        )}

        {/* METABALLS, VORONOI, GODRAYS, SWIRL, SPIRAL - Background only */}
        {["metaballs", "voronoi", "godrays", "swirl", "spiral"].includes(
          activeShader
        ) && (
          <div className="space-y-2">
            <Label>Background Color</Label>
            <div className="flex items-center gap-2">
              <Input
                type="color"
                value={
                  activeShader === "metaballs"
                    ? metaballsBg
                    : activeShader === "voronoi"
                      ? voronoiBg
                      : activeShader === "godrays"
                        ? godraysBg
                        : activeShader === "swirl"
                          ? swirlBg
                          : spiralBg
                }
                onChange={(e) => {
                  if (activeShader === "metaballs")
                    setMetaballsBg(e.target.value);
                  else if (activeShader === "voronoi")
                    setVoronoiBg(e.target.value);
                  else if (activeShader === "godrays")
                    setGodraysBg(e.target.value);
                  else if (activeShader === "swirl") setSwirlBg(e.target.value);
                  else setSpiralBg(e.target.value);
                }}
                className="h-10 w-10 p-1 cursor-pointer shrink-0"
              />
            </div>
          </div>
        )}

        <div className="pt-6 border-t border-border">
          <Button
            onClick={handleCopyCode}
            className="w-full"
            variant={copied ? "default" : "secondary"}
          >
            {copied ? (
              <>
                <Check className="mr-2 h-4 w-4" /> Copied with Install Info!
              </>
            ) : (
              <>
                <Copy className="mr-2 h-4 w-4" /> Copy Code + Install Info
              </>
            )}
          </Button>
          <p className="text-xs text-muted-foreground text-center mt-2">
            Includes npm install command
          </p>
        </div>
      </div>
    </div>
  );
}
