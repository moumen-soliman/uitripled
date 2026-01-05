"use client";

import type { UILibrary } from "@/types";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const UI_LIBRARY_STORAGE_KEY = "uitripled-selected-library";

type UILibraryContextValue = {
  selectedLibrary: UILibrary;
  setSelectedLibrary: (library: UILibrary) => void;
};

const UILibraryContext = createContext<UILibraryContextValue | undefined>(
  undefined
);

export function useUILibrary() {
  const context = useContext(UILibraryContext);
  if (!context) {
    throw new Error("useUILibrary must be used within a UILibraryProvider");
  }
  return context;
}

export function UILibraryProvider({ children }: { children: React.ReactNode }) {
  const [selectedLibrary, setSelectedLibraryState] =
    useState<UILibrary>("shadcnui");
  const [isHydrated, setIsHydrated] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(UI_LIBRARY_STORAGE_KEY);
      if (
        stored &&
        (stored === "shadcnui" || stored === "baseui" || stored === "carbon")
      ) {
        setSelectedLibraryState(stored as UILibrary);
      }
    } catch {
      // Ignore localStorage errors
    }
    setIsHydrated(true);
  }, []);

  const setSelectedLibrary = useCallback((library: UILibrary) => {
    setSelectedLibraryState(library);
    try {
      localStorage.setItem(UI_LIBRARY_STORAGE_KEY, library);
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  // Don't render children until hydrated to avoid mismatch
  if (!isHydrated) {
    return null;
  }

  return (
    <UILibraryContext.Provider value={{ selectedLibrary, setSelectedLibrary }}>
      {children}
    </UILibraryContext.Provider>
  );
}
