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
import { Switch } from "@uitripled/react-shadcn/ui/switch";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Copy,
  Eye,
  EyeOff,
  Layers,
  Plus,
  X,
  Zap,
} from "lucide-react";
import type {
  AnimationType,
  BlendMode,
  GradientLayer,
  LayerType,
} from "./types";

interface LayerPanelProps {
  layers: GradientLayer[];
  activeLayerId: string | null;
  onAddLayer: () => void;
  onSetActiveLayerId: (id: string) => void;
  onMoveLayer: (id: string, direction: "up" | "down") => void;
  onUpdateLayer: (id: string, updates: Partial<GradientLayer>) => void;
  onRemoveLayer: (id: string) => void;
  onDuplicateLayer: (id: string) => void;
}

export function LayerPanel({
  layers,
  activeLayerId,
  onAddLayer,
  onSetActiveLayerId,
  onMoveLayer,
  onUpdateLayer,
  onRemoveLayer,
  onDuplicateLayer,
}: LayerPanelProps) {
  const activeLayer = layers.find((l) => l.id === activeLayerId) || layers[0];

  return (
    <div className="space-y-6">
      {/* Layer List */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label className="uppercase text-xs font-semibold text-muted-foreground tracking-wider flex items-center gap-2">
            <Layers className="w-3 h-3" /> Active Layers
          </Label>
          <Button
            size="sm"
            variant="outline"
            className="h-7 text-xs bg-transparent"
            onClick={onAddLayer}
          >
            <Plus className="w-3 h-3 mr-1" /> Add
          </Button>
        </div>
        <div className="space-y-1 max-h-48 overflow-y-auto border rounded-md p-2 bg-background/50">
          {layers.map((layer, index) => (
            <div
              key={layer.id}
              className={`flex items-center justify-between p-2 rounded cursor-pointer text-xs border transition-colors ${activeLayerId === layer.id ? "bg-primary/10 border-primary/30" : "bg-transparent border-transparent hover:bg-muted"}`}
              onClick={() => onSetActiveLayerId(layer.id)}
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full border border-black/10 shadow-sm"
                  style={{ backgroundColor: layer.color }}
                ></div>
                <span
                  className={`${!layer.visible ? "opacity-50 line-through" : ""} ${layer.type === "conic" ? "italic" : ""}`}
                >
                  Layer {index + 1}
                </span>
                <span className="text-[10px] text-muted-foreground bg-muted px-1 rounded">
                  {layer.type}
                </span>
                {layer.animation !== "none"}
              </div>
              <div className="flex items-center gap-0.5">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-5 w-5"
                  onClick={(e) => {
                    e.stopPropagation();
                    onMoveLayer(layer.id, "up");
                  }}
                >
                  <ChevronUp className="w-3 h-3" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-5 w-5"
                  onClick={(e) => {
                    e.stopPropagation();
                    onMoveLayer(layer.id, "down");
                  }}
                >
                  <ChevronDown className="w-3 h-3" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-5 w-5"
                  onClick={(e) => {
                    e.stopPropagation();
                    onUpdateLayer(layer.id, { visible: !layer.visible });
                  }}
                >
                  {layer.visible ? (
                    <Eye className="w-3 h-3" />
                  ) : (
                    <EyeOff className="w-3 h-3" />
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-5 w-5 opacity-50 hover:opacity-100 hover:text-destructive"
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemoveLayer(layer.id);
                  }}
                >
                  <X className="w-3 h-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Active Layer Controls */}
      {activeLayer && (
        <motion.div
          key={activeLayer.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4 pb-4"
        >
          <div className="p-3 bg-background/50 rounded-lg border border-border/50 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-medium text-xs uppercase tracking-wider text-muted-foreground">
                Layer Properties
              </span>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-5 w-5"
                  onClick={() => onDuplicateLayer(activeLayer.id)}
                  title="Duplicate"
                >
                  <Copy className="w-3 h-3" />
                </Button>
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label className="text-xs">Type</Label>
                <Select
                  value={activeLayer.type}
                  onValueChange={(v) =>
                    onUpdateLayer(activeLayer.id, { type: v as LayerType })
                  }
                >
                  <SelectTrigger className="h-8 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="radial">Radial</SelectItem>
                    <SelectItem value="conic">Conic</SelectItem>
                    <SelectItem value="linear">Linear</SelectItem>
                    <SelectItem value="mesh">Mesh</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-xs">Blend</Label>
                <Select
                  value={activeLayer.blendMode}
                  onValueChange={(v) =>
                    onUpdateLayer(activeLayer.id, {
                      blendMode: v as BlendMode,
                    })
                  }
                >
                  <SelectTrigger className="h-8 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="normal">Normal</SelectItem>
                    <SelectItem value="multiply">Multiply</SelectItem>
                    <SelectItem value="screen">Screen</SelectItem>
                    <SelectItem value="overlay">Overlay</SelectItem>
                    <SelectItem value="color-dodge">Dodge</SelectItem>
                    <SelectItem value="color-burn">Burn</SelectItem>
                    <SelectItem value="soft-light">Soft Light</SelectItem>
                    <SelectItem value="hard-light">Hard Light</SelectItem>
                    <SelectItem value="difference">Difference</SelectItem>
                    <SelectItem value="exclusion">Exclusion</SelectItem>
                    <SelectItem value="hue">Hue</SelectItem>
                    <SelectItem value="saturation">Saturation</SelectItem>
                    <SelectItem value="luminosity">Luminosity</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label className="text-xs">Color</Label>
                <div className="flex items-center gap-2">
                  <Input
                    type="color"
                    value={activeLayer.color}
                    onChange={(e) =>
                      onUpdateLayer(activeLayer.id, { color: e.target.value })
                    }
                    className="h-8 w-8 p-0 cursor-pointer border-0 rounded-md overflow-hidden"
                  />
                  <span className="text-[10px] font-mono text-muted-foreground">
                    {activeLayer.color}
                  </span>
                </div>
              </div>
              {(activeLayer.type === "linear" ||
                activeLayer.type === "mesh") && (
                <div className="space-y-2">
                  <Label className="text-xs">Secondary</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      type="color"
                      value={activeLayer.secondaryColor || "#000000"}
                      onChange={(e) =>
                        onUpdateLayer(activeLayer.id, {
                          secondaryColor: e.target.value,
                        })
                      }
                      className="h-8 w-8 p-0 cursor-pointer border-0 rounded-md overflow-hidden"
                    />
                    <span className="text-[10px] font-mono text-muted-foreground">
                      {activeLayer.secondaryColor || "transparent"}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-xs">W: {activeLayer.width}%</Label>
                <Slider
                  value={[activeLayer.width]}
                  min={1}
                  max={200}
                  step={1}
                  onValueChange={(v) =>
                    onUpdateLayer(activeLayer.id, { width: v[0] })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs">H: {activeLayer.height}%</Label>
                <Slider
                  value={[activeLayer.height]}
                  min={1}
                  max={200}
                  step={1}
                  onValueChange={(v) =>
                    onUpdateLayer(activeLayer.id, { height: v[0] })
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-xs">X: {activeLayer.x}%</Label>
                <Slider
                  value={[activeLayer.x]}
                  min={-50}
                  max={150}
                  step={1}
                  onValueChange={(v) =>
                    onUpdateLayer(activeLayer.id, { x: v[0] })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs">Y: {activeLayer.y}%</Label>
                <Slider
                  value={[activeLayer.y]}
                  min={-50}
                  max={150}
                  step={1}
                  onValueChange={(v) =>
                    onUpdateLayer(activeLayer.id, { y: v[0] })
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-xs">Blur ({activeLayer.blur}px)</Label>
              <Slider
                value={[activeLayer.blur]}
                min={0}
                max={200}
                step={1}
                onValueChange={(v) =>
                  onUpdateLayer(activeLayer.id, { blur: v[0] })
                }
              />
            </div>

            {(activeLayer.type === "conic" ||
              activeLayer.type === "linear") && (
              <div className="space-y-2">
                <Label className="text-xs">
                  Rotation ({activeLayer.rotation || 0}°)
                </Label>
                <Slider
                  value={[activeLayer.rotation || 0]}
                  min={0}
                  max={360}
                  step={1}
                  onValueChange={(v) =>
                    onUpdateLayer(activeLayer.id, { rotation: v[0] })
                  }
                />
              </div>
            )}

            <div className="space-y-2">
              <Label className="text-xs">
                Parallax Speed ({activeLayer.speed.toFixed(1)})
              </Label>
              <Slider
                value={[activeLayer.speed]}
                min={-5}
                max={5}
                step={0.1}
                onValueChange={(v) =>
                  onUpdateLayer(activeLayer.id, { speed: v[0] })
                }
              />
            </div>

            <div className="space-y-2">
              <Label className="text-xs">
                Opacity ({(activeLayer.opacity * 100).toFixed(0)}%)
              </Label>
              <Slider
                value={[activeLayer.opacity]}
                min={0}
                max={1}
                step={0.01}
                onValueChange={(v) =>
                  onUpdateLayer(activeLayer.id, { opacity: v[0] })
                }
              />
            </div>
          </div>

          {/* Animation Controls */}
          <div className="p-3 bg-background/50 rounded-lg border border-border/50 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-medium text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <Zap className="w-3 h-3" /> Animation
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label className="text-xs">Type</Label>
                <Select
                  value={activeLayer.animation}
                  onValueChange={(v) =>
                    onUpdateLayer(activeLayer.id, {
                      animation: v as AnimationType,
                    })
                  }
                >
                  <SelectTrigger className="h-8 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">None</SelectItem>
                    <SelectItem value="float">Float</SelectItem>
                    <SelectItem value="pulse">Pulse</SelectItem>
                    <SelectItem value="rotate">Rotate</SelectItem>
                    <SelectItem value="breathe">Breathe</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-xs">
                  Speed ({activeLayer.animationSpeed.toFixed(1)}x)
                </Label>
                <Slider
                  value={[activeLayer.animationSpeed]}
                  min={0.1}
                  max={3}
                  step={0.1}
                  onValueChange={(v) =>
                    onUpdateLayer(activeLayer.id, { animationSpeed: v[0] })
                  }
                  disabled={activeLayer.animation === "none"}
                />
              </div>
            </div>
            <div className="flex items-center space-x-2 pt-2">
              <Switch
                id="infinity-mode"
                checked={activeLayer.repeatInfinity ?? true}
                onCheckedChange={(checked) =>
                  onUpdateLayer(activeLayer.id, { repeatInfinity: checked })
                }
                disabled={activeLayer.animation === "none"}
              />
              <Label htmlFor="infinity-mode" className="text-xs cursor-pointer">
                Infinite Loop
              </Label>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
