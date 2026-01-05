"use client";

import { AuroraBuilder } from "@/components/background-builder/aurora-builder";
import { ShaderBuilder } from "@/components/background-builder/shader-builder";
import { Tabs, TabsList, TabsTrigger } from "@uitripled/react-shadcn/ui/tabs";
import { Palette } from "lucide-react";
import { parseAsString, useQueryState } from "nuqs";

export default function BackgroundBuilderPage() {
  const [target, setTarget] = useQueryState(
    "target",
    parseAsString.withDefault("aurora")
  );

  return (
    <div className="relative h-screen w-full flex flex-col">
      {/* Floating Switcher */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-40">
        <Tabs
          value={target || "aurora"}
          onValueChange={(val) => setTarget(val)}
        >
          <TabsList className="bg-background/80 backdrop-blur-md border shadow-lg">
            <TabsTrigger value="aurora" className="gap-2 text-xs">
              <Palette className="w-3.5 h-3.5" />
              Aurora Builder
            </TabsTrigger>
            <TabsTrigger value="shader" className="gap-2 text-xs">
              <svg
                width="39"
                height="39"
                className="w-3.5 h-3.5"
                viewBox="0 0 39 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39 24H24V6H6V24H24V39H0V6H6V0H39V24Z"
                  fill="#81ADEC"
                />
              </svg>
              Shaders Builder
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Content */}
      <div className="flex-1">
        {target === "shader" ? <ShaderBuilder /> : <AuroraBuilder />}
      </div>
    </div>
  );
}
