"use client";

import {
  applyColorScheme,
  COLOR_SCHEME_STORAGE_KEY,
  getColorSchemes,
  getDefaultScheme,
  getSchemeByName,
} from "@/components/color-scheme-sync";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Button } from "@uitripled/react-shadcn/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@uitripled/react-shadcn/ui/dropdown-menu";
import { Check, Palette } from "lucide-react";
import { useEffect, useState } from "react";

export function ColorThemePicker() {
  const { resolvedTheme } = useTheme();
  const colorSchemes = getColorSchemes();
  const [selectedScheme, setSelectedScheme] = useState(getDefaultScheme);
  const [isMounted, setIsMounted] = useState(false);

  // Load saved color scheme on mount
  useEffect(() => {
    setIsMounted(true);

    try {
      const saved = localStorage.getItem(COLOR_SCHEME_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setSelectedScheme(getSchemeByName(parsed.name));
      }
    } catch {
      // ignore errors
    }
  }, []);

  const handleSchemeChange = (scheme: ReturnType<typeof getDefaultScheme>) => {
    setSelectedScheme(scheme);
    try {
      localStorage.setItem(
        COLOR_SCHEME_STORAGE_KEY,
        JSON.stringify({ name: scheme.name })
      );
    } catch {
      // ignore write failures
    }
    // Apply immediately
    if (resolvedTheme) {
      applyColorScheme(scheme, resolvedTheme === "dark");
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={cn(
            "relative gap-2",
            !isMounted && "animate-pulse bg-muted/30"
          )}
          aria-label="Change color theme"
        >
          <Palette className="h-4 w-4" />
          <span className="hidden sm:inline">Colors</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="text-xs text-muted-foreground">
          Color Theme
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {colorSchemes.map((scheme) => {
          const isActive = selectedScheme.name === scheme.name;
          return (
            <DropdownMenuItem
              key={scheme.name}
              onSelect={() => handleSchemeChange(scheme)}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div
                  className="h-4 w-4 rounded-full border border-border"
                  style={{ backgroundColor: scheme.primary }}
                />
                <span>{scheme.name}</span>
              </div>
              {isActive && <Check className="h-4 w-4 text-primary" />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
