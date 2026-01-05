"use client";

import { Button } from "@uitripled/react-shadcn/ui/button";
import { Label } from "@uitripled/react-shadcn/ui/label";
import { Switch } from "@uitripled/react-shadcn/ui/switch";
import { LayoutTemplate } from "lucide-react";
import { useState } from "react";

interface DemoSettingsButtonProps {
  showDemo: boolean;
  setShowDemo: (show: boolean) => void;
  demoTextColor: string;
  setDemoTextColor: (color: string) => void;
  demoButtonColor: string;
  setDemoButtonColor: (color: string) => void;
  switchId?: string;
}

export function DemoSettingsButton({
  showDemo,
  setShowDemo,
  demoTextColor,
  setDemoTextColor,
  demoButtonColor,
  setDemoButtonColor,
  switchId = "show-demo",
}: DemoSettingsButtonProps) {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="relative">
      <Button
        variant={showDemo ? "default" : "secondary"}
        size="icon"
        onClick={() => setShowSettings(!showSettings)}
        title="Demo Settings"
        className="shadow-lg"
      >
        <LayoutTemplate className="w-4 h-4" />
      </Button>
      {showSettings && (
        <div className="absolute top-0 right-12 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border rounded-lg p-4 shadow-xl w-64 animate-in fade-in slide-in-from-right-5">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor={switchId} className="text-sm font-medium">
                Show Demo Overlay
              </Label>
              <Switch
                id={switchId}
                checked={showDemo}
                onCheckedChange={setShowDemo}
              />
            </div>
            {showDemo && (
              <div className="space-y-3 pt-2 border-t">
                <div className="space-y-2">
                  <Label className="text-xs text-muted-foreground">
                    Text Color
                  </Label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={demoTextColor}
                      onChange={(e) => setDemoTextColor(e.target.value)}
                      className="w-8 h-8 rounded cursor-pointer border-0 p-0"
                    />
                    <span className="text-xs font-mono text-muted-foreground">
                      {demoTextColor}
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs text-muted-foreground">
                    Button Color
                  </Label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={demoButtonColor}
                      onChange={(e) => setDemoButtonColor(e.target.value)}
                      className="w-8 h-8 rounded cursor-pointer border-0 p-0"
                    />
                    <span className="text-xs font-mono text-muted-foreground">
                      {demoButtonColor}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

