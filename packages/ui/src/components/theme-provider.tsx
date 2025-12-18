"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const PREFERS_DARK_MEDIA_QUERY = "(prefers-color-scheme: dark)";

export type ThemeMode = "light" | "dark" | "system";

export const THEME_STORAGE_KEY = "uitripled-theme";

type ThemeContextValue = {
  theme: ThemeMode;
  resolvedTheme: Exclude<ThemeMode, "system">;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const applyResolvedTheme = (resolved: Exclude<ThemeMode, "system">) => {
  if (typeof document === "undefined") {
    return;
  }

  const root = document.documentElement;
  root.dataset.theme = resolved;
  if (resolved === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
};

const getSystemTheme = () => {
  if (typeof window === "undefined") {
    return "light" as const;
  }

  return window.matchMedia(PREFERS_DARK_MEDIA_QUERY).matches ? "dark" : "light";
};

const isThemeMode = (value: unknown): value is ThemeMode =>
  value === "light" || value === "dark" || value === "system";

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: ThemeMode;
};

export function ThemeProvider({
  children,
  defaultTheme = "system",
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<ThemeMode>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = useState<
    Exclude<ThemeMode, "system">
  >(defaultTheme === "dark" ? "dark" : "light");

  const applyTheme = useCallback((nextTheme: ThemeMode) => {
    const resolved =
      nextTheme === "system"
        ? getSystemTheme()
        : (nextTheme as Exclude<ThemeMode, "system">);

    setResolvedTheme(resolved);
    applyResolvedTheme(resolved);
  }, []);

  const setTheme = useCallback(
    (nextTheme: ThemeMode) => {
      setThemeState(nextTheme);
      try {
        localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
      } catch {
        // ignore write failures (e.g. private browsing)
      }
      applyTheme(nextTheme);
    },
    [applyTheme]
  );

  const toggleTheme = useCallback(() => {
    const nextResolved = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(nextResolved);
  }, [resolvedTheme, setTheme]);

  useEffect(() => {
    const stored = (() => {
      try {
        return localStorage.getItem(THEME_STORAGE_KEY);
      } catch {
        return null;
      }
    })();

    const initial = isThemeMode(stored) ? stored : defaultTheme;

    setThemeState(initial);
    applyTheme(initial);
  }, [applyTheme, defaultTheme]);

  useEffect(() => {
    if (theme !== "system") {
      return;
    }

    const mediaQuery = window.matchMedia(PREFERS_DARK_MEDIA_QUERY);

    const handleChange = (event: MediaQueryListEvent) => {
      const resolved = event.matches ? "dark" : "light";
      setResolvedTheme(resolved);
      applyResolvedTheme(resolved);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key !== THEME_STORAGE_KEY) {
        return;
      }

      const storedValue = event.newValue;
      if (!isThemeMode(storedValue)) {
        return;
      }

      setThemeState(storedValue);
      applyTheme(storedValue);
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [applyTheme]);

  const value = useMemo(
    () => ({
      theme,
      resolvedTheme,
      setTheme,
      toggleTheme,
    }),
    [resolvedTheme, setTheme, theme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
