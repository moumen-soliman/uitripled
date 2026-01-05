"use client";

import { parseAsFloat, parseAsInteger, parseAsString, useQueryState } from "nuqs";
import { COLOR_PRESETS, ShaderType } from "./components/shader/constants";
import { ShaderControls } from "./components/shader/shader-controls";
import { ShaderPreview } from "./components/shader/shader-preview";
import { useEffect, useState } from "react";

export function ShaderBuilder() {
  // URL-synced state using nuqs
  const [activeShader, setActiveShader] = useQueryState("shader", parseAsString.withDefault("mesh"));
  const [activePreset, setActivePreset] = useQueryState("preset", parseAsString.withDefault("ruby"));

  // Common Controls - URL synced
  const [speed, setSpeed] = useQueryState("speed", parseAsFloat.withDefault(0.3));
  const [opacity, setOpacity] = useQueryState("opacity", parseAsFloat.withDefault(1));
  const [scale, setScale] = useQueryState("scale", parseAsFloat.withDefault(1));

  // Colors - stored in local state, initialized from preset
  const [colors, setColors] = useState<string[]>([
    "#000000",
    "#dc2626",
    "#ffffff",
    "#7f1d1d",
    "#ef4444",
  ]);

  // Liquid Specific - URL synced
  const [liquidBg, setLiquidBg] = useQueryState("liquidBg", parseAsString.withDefault("#000000"));
  const [liquidBlob, setLiquidBlob] = useQueryState("liquidBlob", parseAsString.withDefault("circle"));
  const [liquidDistortion, setLiquidDistortion] = useQueryState("liquidDistortion", parseAsFloat.withDefault(0.0));
  const [liquidSoftness, setLiquidSoftness] = useQueryState("liquidSoftness", parseAsFloat.withDefault(0.5));

  // Waves Specific - URL synced
  const [wavesBg, setWavesBg] = useQueryState("wavesBg", parseAsString.withDefault("#000000"));
  const [wavesColorFront, setWavesColorFront] = useQueryState("wavesColorFront", parseAsString.withDefault("#dc2626"));
  const [wavesShape, setWavesShape] = useQueryState("wavesShape", parseAsInteger.withDefault(1));
  const [wavesFreq, setWavesFreq] = useQueryState("wavesFreq", parseAsFloat.withDefault(1.0));
  const [wavesAmp, setWavesAmp] = useQueryState("wavesAmp", parseAsFloat.withDefault(0.5));

  // Grain Specific - URL synced
  const [grainBg, setGrainBg] = useQueryState("grainBg", parseAsString.withDefault("#000000"));
  const [grainShape, setGrainShape] = useQueryState("grainShape", parseAsString.withDefault("wave"));
  const [grainNoise, setGrainNoise] = useQueryState("grainNoise", parseAsFloat.withDefault(0.1));
  const [grainIntensity, setGrainIntensity] = useQueryState("grainIntensity", parseAsFloat.withDefault(0.5));

  // Neuro Specific - URL synced
  const [neuroBrightness, setNeuroBrightness] = useQueryState("neuroBrightness", parseAsFloat.withDefault(1.0));

  // Background colors - URL synced
  const [metaballsBg, setMetaballsBg] = useQueryState("metaballsBg", parseAsString.withDefault("#000000"));
  const [voronoiBg, setVoronoiBg] = useQueryState("voronoiBg", parseAsString.withDefault("#000000"));
  const [godraysBg, setGodraysBg] = useQueryState("godraysBg", parseAsString.withDefault("#000000"));
  const [swirlBg, setSwirlBg] = useQueryState("swirlBg", parseAsString.withDefault("#000000"));
  const [spiralBg, setSpiralBg] = useQueryState("spiralBg", parseAsString.withDefault("#000000"));

  // Load preset colors from URL on mount
  useEffect(() => {
    if (activePreset && COLOR_PRESETS[activePreset]) {
      setColors([...COLOR_PRESETS[activePreset].colors]);
    }
  }, []); // Only run on mount

  return (
    <div className="flex h-screen w-full flex-col md:flex-row bg-background text-foreground overflow-hidden">
      <ShaderControls
        activeShader={activeShader}
        setActiveShader={setActiveShader}
        colors={colors}
        setColors={setColors}
        activePreset={activePreset}
        setActivePreset={setActivePreset}
        speed={speed}
        setSpeed={setSpeed}
        scale={scale}
        setScale={setScale}
        opacity={opacity}
        setOpacity={setOpacity}
        // Liquid
        liquidBg={liquidBg}
        setLiquidBg={setLiquidBg}
        liquidBlob={liquidBlob}
        setLiquidBlob={setLiquidBlob}
        liquidDistortion={liquidDistortion}
        setLiquidDistortion={setLiquidDistortion}
        liquidSoftness={liquidSoftness}
        setLiquidSoftness={setLiquidSoftness}
        // Waves
        wavesBg={wavesBg}
        setWavesBg={setWavesBg}
        wavesColorFront={wavesColorFront}
        setWavesColorFront={setWavesColorFront}
        wavesShape={wavesShape}
        setWavesShape={setWavesShape}
        wavesFreq={wavesFreq}
        setWavesFreq={setWavesFreq}
        wavesAmp={wavesAmp}
        setWavesAmp={setWavesAmp}
        // Grain
        grainBg={grainBg}
        setGrainBg={setGrainBg}
        grainShape={grainShape}
        setGrainShape={setGrainShape}
        grainNoise={grainNoise}
        setGrainNoise={setGrainNoise}
        grainIntensity={grainIntensity}
        setGrainIntensity={setGrainIntensity}
        // Neuro
        neuroBrightness={neuroBrightness}
        setNeuroBrightness={setNeuroBrightness}
        // Backgrounds
        metaballsBg={metaballsBg}
        setMetaballsBg={setMetaballsBg}
        voronoiBg={voronoiBg}
        setVoronoiBg={setVoronoiBg}
        godraysBg={godraysBg}
        setGodraysBg={setGodraysBg}
        swirlBg={swirlBg}
        setSwirlBg={setSwirlBg}
        spiralBg={spiralBg}
        setSpiralBg={setSpiralBg}
      />
      <ShaderPreview
        activeShader={activeShader}
        opacity={opacity}
        colors={colors}
        speed={speed}
        scale={scale}
        liquidBg={liquidBg}
        liquidBlob={liquidBlob}
        liquidDistortion={liquidDistortion}
        liquidSoftness={liquidSoftness}
        wavesColorFront={wavesColorFront}
        wavesBg={wavesBg}
        wavesShape={wavesShape}
        wavesFreq={wavesFreq}
        wavesAmp={wavesAmp}
        grainBg={grainBg}
        grainShape={grainShape}
        grainNoise={grainNoise}
        grainIntensity={grainIntensity}
        neuroBrightness={neuroBrightness}
        metaballsBg={metaballsBg}
        voronoiBg={voronoiBg}
        godraysBg={godraysBg}
        swirlBg={swirlBg}
        spiralBg={spiralBg}
      />
    </div>
  );
}
