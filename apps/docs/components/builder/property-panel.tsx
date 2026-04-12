"use client";

import type {
  BuilderComponent,
  BuilderComponentStyles,
  BuilderFreeCanvas,
} from "@/types/builder";
import { Button } from "@uitripled/react-shadcn/ui/button";
import { X } from "lucide-react";
import {
  ColorInput,
  NumberInput,
  PropertySection,
  SelectInput,
  SliderInput,
  TextInput,
} from "./property-inputs";

type PropertyPanelProps = {
  component: BuilderComponent;
  onStyleChange: (styles: Partial<BuilderComponentStyles>) => void;
  onFreeCanvasChange?: (patch: Partial<BuilderFreeCanvas>) => void;
  onClose: () => void;
  isFreeCanvas?: boolean;
};

export function PropertyPanel({
  component,
  onStyleChange,
  onFreeCanvasChange,
  onClose,
  isFreeCanvas,
}: PropertyPanelProps) {
  const styles = component.styles ?? {};
  const canvas = component.freeCanvas;

  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-3 py-2">
        <div>
          <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
            Properties
          </p>
          <p className="truncate text-sm font-semibold">
            {component.animation.name}
          </p>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 space-y-3 overflow-y-auto p-3">
        {/* Position (free canvas only) */}
        {isFreeCanvas && canvas && onFreeCanvasChange && (
          <PropertySection title="Position">
            <div className="grid grid-cols-2 gap-2">
              <NumberInput
                label="X"
                value={canvas.x}
                onChange={(v) =>
                  onFreeCanvasChange({ x: v ?? 0 })
                }
                step={1}
              />
              <NumberInput
                label="Y"
                value={canvas.y}
                onChange={(v) =>
                  onFreeCanvasChange({ y: v ?? 0 })
                }
                step={1}
              />
            </div>
            <NumberInput
              label="Width"
              value={canvas.width}
              onChange={(v) => onFreeCanvasChange({ width: v })}
              min={100}
              step={1}
              placeholder="auto"
            />
            <NumberInput
              label="Z-Index"
              value={canvas.zIndex}
              onChange={(v) =>
                onFreeCanvasChange({ zIndex: v ?? 0 })
              }
              step={1}
            />
          </PropertySection>
        )}

        {/* Layout */}
        <PropertySection title="Layout">
          <TextInput
            label="Padding"
            value={styles.padding}
            onChange={(v) => onStyleChange({ padding: v })}
            placeholder="e.g. 16px"
          />
          <TextInput
            label="Margin"
            value={styles.margin}
            onChange={(v) => onStyleChange({ margin: v })}
            placeholder="e.g. 0 auto"
          />
        </PropertySection>

        {/* Appearance */}
        <PropertySection title="Appearance">
          <ColorInput
            label="Bg Color"
            value={styles.backgroundColor}
            onChange={(v) => onStyleChange({ backgroundColor: v })}
          />
          <SliderInput
            label="Opacity"
            value={styles.opacity}
            onChange={(v) => onStyleChange({ opacity: v })}
            min={0}
            max={1}
            step={0.01}
          />
          <TextInput
            label="Radius"
            value={styles.borderRadius}
            onChange={(v) => onStyleChange({ borderRadius: v })}
            placeholder="e.g. 8px"
          />
        </PropertySection>

        {/* Border */}
        <PropertySection title="Border">
          <TextInput
            label="Width"
            value={styles.borderWidth}
            onChange={(v) => onStyleChange({ borderWidth: v })}
            placeholder="e.g. 1px"
          />
          <ColorInput
            label="Color"
            value={styles.borderColor}
            onChange={(v) => onStyleChange({ borderColor: v })}
          />
          <SelectInput
            label="Style"
            value={styles.borderStyle}
            onChange={(v) => onStyleChange({ borderStyle: v })}
            options={[
              { label: "Solid", value: "solid" },
              { label: "Dashed", value: "dashed" },
              { label: "Dotted", value: "dotted" },
              { label: "None", value: "none" },
            ]}
          />
        </PropertySection>

        {/* Shadow */}
        <PropertySection title="Shadow">
          <TextInput
            label="Shadow"
            value={styles.boxShadow}
            onChange={(v) => onStyleChange({ boxShadow: v })}
            placeholder="e.g. 0 4px 12px rgba(0,0,0,0.1)"
          />
        </PropertySection>

        {/* Typography */}
        <PropertySection title="Typography">
          <ColorInput
            label="Color"
            value={styles.color}
            onChange={(v) => onStyleChange({ color: v })}
          />
          <TextInput
            label="Size"
            value={styles.fontSize}
            onChange={(v) => onStyleChange({ fontSize: v })}
            placeholder="e.g. 16px"
          />
          <SelectInput
            label="Weight"
            value={styles.fontWeight}
            onChange={(v) => onStyleChange({ fontWeight: v })}
            options={[
              { label: "Thin (100)", value: "100" },
              { label: "Light (300)", value: "300" },
              { label: "Normal (400)", value: "400" },
              { label: "Medium (500)", value: "500" },
              { label: "Semi-bold (600)", value: "600" },
              { label: "Bold (700)", value: "700" },
              { label: "Extra-bold (800)", value: "800" },
              { label: "Black (900)", value: "900" },
            ]}
          />
          <SelectInput
            label="Family"
            value={styles.fontFamily}
            onChange={(v) => onStyleChange({ fontFamily: v })}
            options={[
              { label: "Sans-serif", value: "sans-serif" },
              { label: "Serif", value: "serif" },
              { label: "Monospace", value: "monospace" },
              { label: "System UI", value: "system-ui" },
            ]}
          />
        </PropertySection>
      </div>
    </div>
  );
}
