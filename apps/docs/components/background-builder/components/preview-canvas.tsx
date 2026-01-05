"use client";

import { Button } from "@uitripled/react-shadcn/ui/button";
import { useSpring } from "framer-motion";
import { ZoomIn } from "lucide-react";
import { useState } from "react";
import { DemoSettingsButton } from "./demo-settings-button";
import { HeroDemo } from "./hero-demo";
import { LayerRenderer } from "./layer-renderer";
import { Magnifier } from "./magnifier";
import { getPatternCSS, getPatternSize } from "./pattern-utils";
import type { GradientLayer } from "./types";

export interface PreviewCanvasProps {
  layers: GradientLayer[];
  bgStart: string;
  bgEnd: string;
  bgAngle: number;
  saturation: number;
  vignette: number;
  noiseOpacity: number;
  activePattern: string;
  patternOpacity: number;
  patternColor: string;
  isAnimating: boolean;
  smoothX: ReturnType<typeof useSpring>;
  smoothY: ReturnType<typeof useSpring>;
  onMouseMove: (e: React.MouseEvent) => void;
}

function PreviewContent({
  layers,
  bgStart,
  bgEnd,
  bgAngle,
  saturation,
  vignette,
  noiseOpacity,
  activePattern,
  patternOpacity,
  patternColor,
  isAnimating,
  smoothX,
  smoothY,
  showOverlays = true,
  showDemo = false,
  demoTextColor,
  demoButtonColor,
}: PreviewCanvasProps & {
  showOverlays?: boolean;
  showDemo?: boolean;
  demoTextColor?: string;
  demoButtonColor?: string;
}) {
  return (
    <div
      className="absolute inset-0 w-full h-full"
      style={{ filter: `saturate(${saturation / 100})` }}
    >
      {/* Demo Overlay */}
      {showDemo && (
        <HeroDemo textColor={demoTextColor} buttonColor={demoButtonColor} />
      )}
      {/* Base Gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(${bgAngle}deg, ${bgStart} 0%, ${bgEnd} 100%)`,
        }}
      />

      {/* Interactive Layers */}
      {layers
        .filter((l) => l.visible)
        .map((layer) => (
          <LayerRenderer
            key={layer.id}
            layer={layer}
            smoothX={smoothX}
            smoothY={smoothY}
            isAnimating={isAnimating}
          />
        ))}

      {/* Vignette */}
      {vignette > 0 && (
        <div
          className="absolute inset-0 z-15 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,${vignette}) 100%)`,
          }}
        />
      )}

      {/* Pattern Overlay */}
      {activePattern !== "none" && patternOpacity > 0 && (
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            opacity: patternOpacity,
            backgroundImage: getPatternCSS(activePattern, patternColor),
            backgroundSize: getPatternSize(activePattern),
            backgroundPosition:
              activePattern === "cross" ? "0 0, 10px 10px" : undefined,
          }}
        />
      )}

      {/* Noise Overlay */}
      {noiseOpacity > 0 && (
        <div
          className="absolute inset-0 z-20 pointer-events-none mix-blend-overlay"
          style={{ opacity: noiseOpacity }}
        >
          <svg className="isolate w-full h-full">
            <filter id="noise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.80"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
            <rect
              width="100%"
              height="100%"
              filter="url(#noise)"
              className="w-full h-full bg-transparent"
            />
          </svg>
        </div>
      )}

      {/* Mouse Coordinates */}
      {showOverlays && (
        <div className="absolute bottom-6 right-6 bg-white/50 backdrop-blur px-3 py-1.5 rounded-full text-xs font-medium text-slate-600 pointer-events-none border border-white/40 shadow-sm opacity-50 group-hover:opacity-100 transition-opacity z-30">
          Move mouse for parallax effect
        </div>
      )}
    </div>
  );
}

export function PreviewCanvas(props: PreviewCanvasProps) {
  const [magnifierEnabled, setMagnifierEnabled] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const [demoTextColor, setDemoTextColor] = useState("#ffffff");
  const [demoButtonColor, setDemoButtonColor] = useState("#ffffff");

  return (
    <div
      className="flex-1 relative overflow-hidden cursor-crosshair group min-h-[50vh] md:min-h-0"
      onMouseMove={props.onMouseMove}
    >
      <PreviewContent
        {...props}
        showDemo={showDemo}
        demoTextColor={demoTextColor}
        demoButtonColor={demoButtonColor}
      />

      {/* Tools */}
      <div className="absolute top-4 right-4 z-40 flex flex-col gap-2 items-end">
        <Button
          variant={magnifierEnabled ? "default" : "secondary"}
          size="icon"
          onClick={() => setMagnifierEnabled(!magnifierEnabled)}
          title="Toggle Magnifier"
          className="shadow-lg"
        >
          <ZoomIn className="w-4 h-4" />
        </Button>
        <DemoSettingsButton
          showDemo={showDemo}
          setShowDemo={setShowDemo}
          demoTextColor={demoTextColor}
          setDemoTextColor={setDemoTextColor}
          demoButtonColor={demoButtonColor}
          setDemoButtonColor={setDemoButtonColor}
          switchId="show-demo"
        />
      </div>

      <Magnifier
        enabled={magnifierEnabled}
        onClose={() => setMagnifierEnabled(false)}
      >
        <div className="w-full h-full relative bg-neutral-900">
          <PreviewContent
            {...props}
            showOverlays={false}
            showDemo={showDemo}
            demoTextColor={demoTextColor}
            demoButtonColor={demoButtonColor}
          />
        </div>
      </Magnifier>
    </div>
  );
}
