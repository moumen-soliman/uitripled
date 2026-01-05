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
import { Palette, Settings2, Zap } from "lucide-react";
import type { BackgroundPreset, PatternType } from "./types";

interface GlobalSettingsPanelProps {
  // Presets
  activePreset: string;
  presetFilter: "all" | "light" | "dark";
  filteredPresets: [string, BackgroundPreset][];
  onApplyPreset: (key: string) => void;
  onSetPresetFilter: (filter: "all" | "light" | "dark") => void;
  onRandomize: () => void;

  // Base Gradient
  bgStart: string;
  bgEnd: string;
  bgAngle: number;
  onBgStartChange: (value: string | null) => void;
  onBgEndChange: (value: string | null) => void;
  onBgAngleChange: (value: number | null) => void;

  // Effects
  noiseOpacity: number;
  vignette: number;
  saturation: number;
  activePattern: string;
  patternOpacity: number;
  patternColor: string;
  onNoiseOpacityChange: (value: number | null) => void;
  onVignetteChange: (value: number | null) => void;
  onSaturationChange: (value: number | null) => void;
  onActivePatternChange: (value: string | null) => void;
  onPatternOpacityChange: (value: number | null) => void;
  onPatternColorChange: (value: string | null) => void;
}

export function GlobalSettingsPanel({
  activePreset,
  presetFilter,
  filteredPresets,
  onApplyPreset,
  onSetPresetFilter,
  onRandomize,
  bgStart,
  bgEnd,
  bgAngle,
  onBgStartChange,
  onBgEndChange,
  onBgAngleChange,
  noiseOpacity,
  vignette,
  saturation,
  activePattern,
  patternOpacity,
  patternColor,
  onNoiseOpacityChange,
  onVignetteChange,
  onSaturationChange,
  onActivePatternChange,
  onPatternOpacityChange,
  onPatternColorChange,
}: GlobalSettingsPanelProps) {
  return (
    <div className="space-y-6">
      {/* Presets Grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label className="uppercase text-xs font-semibold text-muted-foreground tracking-wider flex items-center gap-2">
            <Palette className="w-3 h-3" /> Presets
          </Label>
          <div className="flex gap-1">
            {(["all", "light", "dark"] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => onSetPresetFilter(filter)}
                className={`text-[10px] px-2 py-0.5 rounded-full transition-colors ${
                  presetFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 pr-1">
          {filteredPresets.map(([key, preset]) => (
            <button
              key={key}
              onClick={() => onApplyPreset(key)}
              className={`text-xs p-2 rounded-lg border transition-all hover:scale-[1.02] flex flex-col items-center gap-1.5 ${
                activePreset === key
                  ? "border-primary bg-primary/5 ring-1 ring-primary/20 shadow-sm"
                  : "border-border hover:border-muted-foreground/50"
              }`}
            >
              <div
                className="w-full h-10 rounded-md shadow-inner relative overflow-hidden"
                style={{
                  background: `linear-gradient(${preset.bgAngle}deg, ${preset.bgStart}, ${preset.bgEnd})`,
                }}
              >
                {preset.layers.slice(0, 2).map((layer, i) => (
                  <div
                    key={i}
                    className="absolute w-4 h-4 rounded-full opacity-70"
                    style={{
                      backgroundColor: layer.color,
                      left: `${20 + i * 30}%`,
                      top: `${20 + i * 20}%`,
                      filter: "blur(4px)",
                    }}
                  />
                ))}
              </div>
              <span className="truncate w-full text-center text-[10px] flex items-center justify-center gap-1">
                <span>{preset.emoji}</span>
                <span>{preset.name}</span>
              </span>
            </button>
          ))}
        </div>
        <Button
          variant="outline"
          size="sm"
          className="w-full text-xs bg-transparent"
          onClick={onRandomize}
        >
          Randomize Current
        </Button>
      </div>

      {/* Base Gradient */}
      <div className="space-y-4 pt-4 border-t border-border">
        <Label className="uppercase text-xs font-semibold text-muted-foreground tracking-wider flex items-center gap-2">
          <Settings2 className="w-3 h-3" /> Base Gradient
        </Label>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-xs">Start</Label>
            <div className="flex items-center gap-2">
              <Input
                type="color"
                value={bgStart}
                onChange={(e) => onBgStartChange(e.target.value)}
                className="h-8 w-8 p-0 cursor-pointer border-0 rounded-md overflow-hidden"
              />
              <span className="text-[10px] font-mono text-muted-foreground">
                {bgStart}
              </span>
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-xs">End</Label>
            <div className="flex items-center gap-2">
              <Input
                type="color"
                value={bgEnd}
                onChange={(e) => onBgEndChange(e.target.value)}
                className="h-8 w-8 p-0 cursor-pointer border-0 rounded-md overflow-hidden"
              />
              <span className="text-[10px] font-mono text-muted-foreground">
                {bgEnd}
              </span>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label className="text-xs">Angle</Label>
            <span className="text-xs text-muted-foreground">{bgAngle}°</span>
          </div>
          <Slider
            value={[bgAngle]}
            min={0}
            max={360}
            step={1}
            onValueChange={(v) => onBgAngleChange(v[0])}
          />
        </div>
      </div>

      {/* Effects */}
      <div className="space-y-4 pt-4 border-t border-border">
        <Label className="uppercase text-xs font-semibold text-muted-foreground tracking-wider flex items-center gap-2">
          <Zap className="w-3 h-3" /> Effects
        </Label>

        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-xs">Noise</Label>
              <span className="text-xs text-muted-foreground">
                {(noiseOpacity * 100).toFixed(0)}%
              </span>
            </div>
            <Slider
              value={[noiseOpacity]}
              min={0}
              max={0.5}
              step={0.01}
              onValueChange={(v) => onNoiseOpacityChange(v[0])}
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-xs">Vignette</Label>
              <span className="text-xs text-muted-foreground">
                {(vignette * 100).toFixed(0)}%
              </span>
            </div>
            <Slider
              value={[vignette]}
              min={0}
              max={0.8}
              step={0.01}
              onValueChange={(v) => onVignetteChange(v[0])}
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-xs">Saturation</Label>
              <span className="text-xs text-muted-foreground">
                {saturation}%
              </span>
            </div>
            <Slider
              value={[saturation]}
              min={50}
              max={150}
              step={1}
              onValueChange={(v) => onSaturationChange(v[0])}
            />
          </div>

          <div className="space-y-2 pt-2">
            <Label className="text-xs">Pattern</Label>
            <Select
              value={activePattern}
              onValueChange={(v) => onActivePatternChange(v as PatternType)}
            >
              <SelectTrigger className="h-8 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="grid">Grid Lines</SelectItem>
                <SelectItem value="dots">Polka Dots</SelectItem>
                <SelectItem value="cross">Crosshatch</SelectItem>
                <SelectItem value="diagonal">Diagonal Lines</SelectItem>
                <SelectItem value="hexagon">Hexagon</SelectItem>
                <SelectItem value="waves">Waves</SelectItem>
                <SelectItem value="circuit">Circuit</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {activePattern !== "none" && (
            <>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="text-xs">Pattern Opacity</Label>
                  <span className="text-xs text-muted-foreground">
                    {(patternOpacity * 100).toFixed(0)}%
                  </span>
                </div>
                <Slider
                  value={[patternOpacity]}
                  min={0}
                  max={0.5}
                  step={0.01}
                  onValueChange={(v) => onPatternOpacityChange(v[0])}
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs">Pattern Color</Label>
                <div className="flex items-center gap-2">
                  <Input
                    type="color"
                    value={patternColor}
                    onChange={(e) => onPatternColorChange(e.target.value)}
                    className="h-6 w-6 p-0 cursor-pointer border-0 rounded-md overflow-hidden"
                  />
                  <span className="text-[10px] font-mono text-muted-foreground">
                    {patternColor}
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
