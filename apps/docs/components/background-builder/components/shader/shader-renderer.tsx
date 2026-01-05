"use client";

import {
  GodRays,
  GrainGradient,
  LiquidMetal,
  MeshGradient,
  Metaballs,
  NeuroNoise,
  Spiral,
  Swirl,
  Voronoi,
  Waves,
} from "@paper-design/shaders-react";

export interface ShaderRendererProps {
  activeShader: string;
  opacity: number;
  colors: string[];
  speed: number;
  scale: number;
  // Liquid
  liquidBg: string;
  liquidBlob: string;
  liquidDistortion: number;
  liquidSoftness: number;
  // Waves
  wavesColorFront: string;
  wavesBg: string;
  wavesShape: number;
  wavesFreq: number;
  wavesAmp: number;
  // Grain
  grainBg: string;
  grainShape: string;
  grainNoise: number;
  grainIntensity: number;
  // Neuro
  neuroBrightness: number;
  // Backgrounds
  metaballsBg: string;
  voronoiBg: string;
  godraysBg: string;
  swirlBg: string;
  spiralBg: string;
}

export function ShaderRenderer({
  activeShader,
  opacity,
  colors,
  speed,
  scale,
  liquidBg,
  liquidBlob,
  liquidDistortion,
  liquidSoftness,
  wavesColorFront,
  wavesBg,
  wavesShape,
  wavesFreq,
  wavesAmp,
  grainBg,
  grainShape,
  grainNoise,
  grainIntensity,
  neuroBrightness,
  metaballsBg,
  voronoiBg,
  godraysBg,
  swirlBg,
  spiralBg,
}: ShaderRendererProps) {
  return (
    <div className="w-full h-full relative" style={{ opacity: opacity }}>
      {activeShader === "mesh" && (
        <MeshGradient
          className="absolute inset-0 w-full h-full"
          colors={colors}
          speed={speed}
          scale={scale}
        />
      )}
      {activeShader === "liquid" && (
        <LiquidMetal
          className="absolute inset-0 w-full h-full"
          colorBack={liquidBg}
          speed={speed}
          // @ts-expect-error - library types might be slightly off on string literal unions
          shape={liquidBlob}
          distortion={liquidDistortion}
          softness={liquidSoftness}
        />
      )}
      {activeShader === "waves" && (
        <Waves
          className="absolute inset-0 w-full h-full"
          colorFront={wavesColorFront}
          colorBack={wavesBg}
          shape={wavesShape}
          frequency={wavesFreq}
          amplitude={wavesAmp}
        />
      )}
      {activeShader === "grain" && (
        <GrainGradient
          className="absolute inset-0 w-full h-full"
          colors={colors}
          colorBack={grainBg}
          speed={speed}
          // @ts-expect-error - library types might be slightly off
          shape={grainShape}
          noise={grainNoise}
          intensity={grainIntensity}
        />
      )}
      {activeShader === "neuro" && (
        <NeuroNoise
          className="absolute inset-0 w-full h-full"
          colorFront={colors[0] || "#ffffff"}
          colorMid={colors[1] || "#808080"}
          colorBack={colors[2] || "#000000"}
          speed={speed}
          scale={scale}
          brightness={neuroBrightness}
        />
      )}
      {activeShader === "metaballs" && (
        <Metaballs
          className="absolute inset-0 w-full h-full"
          colors={colors}
          colorBack={metaballsBg}
          speed={speed}
          scale={scale}
        />
      )}
      {activeShader === "voronoi" && (
        <Voronoi
          className="absolute inset-0 w-full h-full"
          colors={colors}
          speed={speed}
          scale={scale}
        />
      )}
      {activeShader === "godrays" && (
        <GodRays
          className="absolute inset-0 w-full h-full"
          colors={colors}
          colorBack={godraysBg}
          speed={speed}
          scale={scale}
        />
      )}
      {activeShader === "swirl" && (
        <Swirl
          className="absolute inset-0 w-full h-full"
          colors={colors}
          colorBack={swirlBg}
          speed={speed}
          scale={scale}
        />
      )}
      {activeShader === "spiral" && (
        <Spiral
          className="absolute inset-0 w-full h-full"
          colorFront={colors[0] || "#ffffff"}
          colorBack={spiralBg}
          speed={speed}
          scale={scale}
        />
      )}
    </div>
  );
}
