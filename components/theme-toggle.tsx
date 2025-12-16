"use client";

import { useTheme, type ThemeMode } from "@/components/theme-provider";
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
import { Check, Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const menuOptions: Array<{
  key: ThemeMode;
  label: string;
  icon: typeof Sun;
}> = [
  { key: "light", label: "Light", icon: Sun },
  { key: "dark", label: "Dark", icon: Moon },
  { key: "system", label: "System", icon: Monitor },
];

export function ThemeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const activeTheme = theme === "system" ? `System (${resolvedTheme})` : theme;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "relative h-10 w-10",
            !isMounted && "animate-pulse bg-muted/30 text-muted-foreground"
          )}
          aria-label="Toggle theme"
        >
          <Sun className="h-[1.1rem] w-[1.1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.1rem] w-[1.1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44">
        <DropdownMenuLabel className="text-xs text-muted-foreground">
          Theme • {isMounted ? activeTheme : "Loading"}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {menuOptions.map(({ key, label, icon: Icon }) => {
          const isActive = theme === key;
          return (
            <DropdownMenuItem key={key} onSelect={() => setTheme(key)}>
              <Icon className="mr-2 h-4 w-4" />
              <span className="flex-1">{label}</span>
              {(isActive || (key === "system" && theme === "system")) && (
                <Check className="h-4 w-4 text-primary" />
              )}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
