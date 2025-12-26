import { Button } from "@/components/ui/button";
import { ZoomIn } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Magnifier } from "../magnifier";
import { HeroDemo } from "../hero-demo";
import { DemoSettingsButton } from "../demo-settings-button";
import { SHADER_INFO } from "./constants";
import { ShaderRenderer, ShaderRendererProps } from "./shader-renderer";

export type ShaderPreviewProps = ShaderRendererProps;

export function ShaderPreview(props: ShaderPreviewProps) {
  const [magnifierEnabled, setMagnifierEnabled] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const [demoTextColor, setDemoTextColor] = useState("#ffffff");
  const [demoButtonColor, setDemoButtonColor] = useState("#ffffff");

  return (
    <div className="flex-1 relative overflow-hidden bg-checkered group min-h-[50vh] md:min-h-0">
      <div className="absolute inset-0 flex items-center justify-center">
        <ShaderRenderer {...props} />
      </div>

      {showDemo && <HeroDemo textColor={demoTextColor} buttonColor={demoButtonColor} />}

      {/* Tools */}
      <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 items-end">
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
          switchId="show-shader-demo"
        />
      </div>

      <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded text-xs text-muted-foreground font-mono z-20">
        <span className="uppercase">{SHADER_INFO[props.activeShader].name}</span>{" "}
        by{" "}
        <Link
          href="https://paper.design/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold hover:underline"
        >
          paper.design
        </Link>
      </div>

      <Magnifier
        enabled={magnifierEnabled}
        onClose={() => setMagnifierEnabled(false)}
      >
        <div className="w-full h-full bg-checkered">
          <ShaderRenderer {...props} />
        </div>
      </Magnifier>
    </div>
  );
}
