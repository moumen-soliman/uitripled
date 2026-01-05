"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { UILibraryProvider } from "@/components/ui-library-provider";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import React from "react";

interface ComponentPreviewProps {
  children: React.ReactNode;
  className?: string;
  previewWidth?: "100%" | "768px" | "375px";
}

export function ComponentPreview({
  children,
  className,
  previewWidth = "100%",
}: ComponentPreviewProps) {
  return (
    <div
      className={`relative mx-auto overflow-hidden rounded-lg border border-border bg-background shadow-sm transition-all duration-300 ease-out ${className || ""}`}
      style={{
        width: previewWidth,
        minHeight: "400px",
      }}
    >
      <ThemeProvider>
        <UILibraryProvider>
          <NuqsAdapter>
            <div className="flex min-h-[400px] w-full items-center justify-center bg-background text-foreground p-4">
              {children}
            </div>
          </NuqsAdapter>
        </UILibraryProvider>
      </ThemeProvider>
    </div>
  );
}
