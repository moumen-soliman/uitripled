"use client";

import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Check, Palette } from "lucide-react";
import { useEffect, useState } from "react";

type ColorScheme = {
  name: string;
  primary: string;
  accent: string;
  primaryForeground: string;
  accentForeground: string;
};

const colorSchemes: ColorScheme[] = [
  {
    name: "Default",
    primary: "oklch(0.205 0 0)",
    accent: "oklch(0.97 0 0)",
    primaryForeground: "oklch(0.985 0 0)",
    accentForeground: "oklch(0.205 0 0)",
  },
  {
    name: "Blue",
    primary: "oklch(0.5 0.2 250)",
    accent: "oklch(0.95 0.05 250)",
    primaryForeground: "oklch(0.985 0 0)",
    accentForeground: "oklch(0.3 0.15 250)",
  },
  {
    name: "Purple",
    primary: "oklch(0.5 0.2 300)",
    accent: "oklch(0.95 0.05 300)",
    primaryForeground: "oklch(0.985 0 0)",
    accentForeground: "oklch(0.3 0.15 300)",
  },
  {
    name: "Green",
    primary: "oklch(0.5 0.2 150)",
    accent: "oklch(0.95 0.05 150)",
    primaryForeground: "oklch(0.985 0 0)",
    accentForeground: "oklch(0.3 0.15 150)",
  },
  {
    name: "Red",
    primary: "oklch(0.5 0.2 25)",
    accent: "oklch(0.95 0.05 25)",
    primaryForeground: "oklch(0.985 0 0)",
    accentForeground: "oklch(0.3 0.15 25)",
  },
  {
    name: "Orange",
    primary: "oklch(0.55 0.2 70)",
    accent: "oklch(0.95 0.05 70)",
    primaryForeground: "oklch(0.985 0 0)",
    accentForeground: "oklch(0.3 0.15 70)",
  },
  {
    name: "Pink",
    primary: "oklch(0.55 0.2 340)",
    accent: "oklch(0.95 0.05 340)",
    primaryForeground: "oklch(0.985 0 0)",
    accentForeground: "oklch(0.3 0.15 340)",
  },
  {
    name: "Cyan",
    primary: "oklch(0.5 0.2 200)",
    accent: "oklch(0.95 0.05 200)",
    primaryForeground: "oklch(0.985 0 0)",
    accentForeground: "oklch(0.3 0.15 200)",
  },
];

const COLOR_SCHEME_STORAGE_KEY = "uitripled-color-scheme";

const applyColorScheme = (scheme: ColorScheme, isDark: boolean) => {
  if (typeof document === "undefined") {
    return;
  }

  const root = document.documentElement;

  // Extract hue from primary color for dark mode adjustments
  const hueMatch = scheme.primary.match(/oklch\(([^)]+)\)/);
  let hue = "0";
  if (hueMatch) {
    const [, values] = hueMatch;
    const parts = values.split(" ");
    if (parts.length >= 3) {
      hue = parts[2];
    }
  }

  if (isDark) {
    // For dark mode, use lighter primary colors
    const darkPrimary =
      hue !== "0" ? `oklch(0.7 0.15 ${hue})` : "oklch(0.922 0 0)";
    const darkPrimaryForeground = "oklch(0.205 0 0)";

    root.style.setProperty("--primary", darkPrimary);
    root.style.setProperty("--primary-foreground", darkPrimaryForeground);

    // Darker accent for dark mode
    const darkAccent =
      hue !== "0" ? `oklch(0.3 0.1 ${hue})` : "oklch(0.269 0 0)";
    root.style.setProperty("--accent", darkAccent);
    root.style.setProperty("--accent-foreground", "oklch(0.985 0 0)");

    // Update sidebar primary to match theme
    root.style.setProperty("--sidebar-primary", darkPrimary);
    root.style.setProperty(
      "--sidebar-primary-foreground",
      darkPrimaryForeground
    );

    // Ring color for dark mode
    root.style.setProperty(
      "--ring",
      hue !== "0" ? `oklch(0.556 0.1 ${hue})` : "oklch(0.556 0 0)"
    );
  } else {
    // Light mode - use original colors
    root.style.setProperty("--primary", scheme.primary);
    root.style.setProperty("--primary-foreground", scheme.primaryForeground);

    root.style.setProperty("--accent", scheme.accent);
    root.style.setProperty("--accent-foreground", scheme.accentForeground);

    // Update sidebar primary to match theme
    root.style.setProperty("--sidebar-primary", scheme.primary);
    root.style.setProperty(
      "--sidebar-primary-foreground",
      scheme.primaryForeground
    );

    // Ring color for light mode
    root.style.setProperty(
      "--ring",
      hue !== "0" ? `oklch(0.708 0.1 ${hue})` : "oklch(0.708 0 0)"
    );
  }
};

const getDefaultScheme = (): ColorScheme => colorSchemes[0];

export function ColorThemePicker() {
  const { resolvedTheme } = useTheme();
  const [selectedScheme, setSelectedScheme] =
    useState<ColorScheme>(getDefaultScheme);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Load saved color scheme
    try {
      const saved = localStorage.getItem(COLOR_SCHEME_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        const scheme =
          colorSchemes.find((s) => s.name === parsed.name) ||
          getDefaultScheme();
        setSelectedScheme(scheme);
        applyColorScheme(scheme, resolvedTheme === "dark");
      } else {
        applyColorScheme(getDefaultScheme(), resolvedTheme === "dark");
      }
    } catch {
      applyColorScheme(getDefaultScheme(), resolvedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      applyColorScheme(selectedScheme, resolvedTheme === "dark");
    }
  }, [selectedScheme, resolvedTheme, isMounted]);

  const handleSchemeChange = (scheme: ColorScheme) => {
    setSelectedScheme(scheme);
    try {
      localStorage.setItem(
        COLOR_SCHEME_STORAGE_KEY,
        JSON.stringify({ name: scheme.name })
      );
    } catch {
      // ignore write failures
    }
    applyColorScheme(scheme, resolvedTheme === "dark");
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
