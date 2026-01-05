"use client";

import {
  ThemeProvider as NextThemesProvider,
  useTheme as useNextTheme,
} from "next-themes";
import type { ReactNode } from "react";

export type ThemeMode = "light" | "dark" | "system";

export const THEME_STORAGE_KEY = "uitripled-theme";

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: ThemeMode;
};

export function ThemeProvider({
  children,
  defaultTheme = "system",
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme={defaultTheme}
      storageKey={THEME_STORAGE_KEY}
      enableSystem
      disableTransitionOnChange={false}
    >
      {children}
    </NextThemesProvider>
  );
}

export const useTheme = () => {
  const { theme, setTheme, resolvedTheme, systemTheme } = useNextTheme();

  const toggleTheme = () => {
    const nextResolved = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(nextResolved);
  };

  return {
    theme: (theme as ThemeMode) ?? "system",
    resolvedTheme: (resolvedTheme as Exclude<ThemeMode, "system">) ?? "light",
    setTheme: (newTheme: ThemeMode) => setTheme(newTheme),
    toggleTheme,
    systemTheme,
  };
};
