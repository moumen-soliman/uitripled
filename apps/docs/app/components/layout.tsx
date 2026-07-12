"use client";

import { AnimationsSidebar } from "@/components/animation-sidebar";
import {
  componentsRegistry,
  getComponentById,
} from "@/lib/components-registry";
import { Button } from "@uitripled/react-shadcn/ui/button";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Menu,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { parseAsString, useQueryState } from "nuqs";
import { Suspense, useCallback, useEffect, useMemo, useState } from "react";

function ComponentsLayoutContent({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [target, setTarget] = useQueryState("target", parseAsString);

  // Sync mobile sidebar with URL parameter
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Open dialog when target parameter is present, but only on mobile
  useEffect(() => {
    if (target && window.innerWidth < 768) {
      setMobileSidebarOpen(true);
    }
  }, [target]);

  // Clear target parameter when dialog is closed
  const handleMobileSidebarChange = useCallback(
    (open: boolean) => {
      setMobileSidebarOpen(open);
      if (!open) {
        setTarget(null);
      }
    },
    [setTarget]
  );

  // Get selected animation if we're on a detail page
  const selectedAnimation =
    pathname.includes("/components/") && params?.id
      ? getComponentById(params.id as string) || null
      : null;

  // Get visible animations (display !== false)
  const visibleAnimations = useMemo(() => {
    return componentsRegistry.filter(
      (component) => component.display !== false
    );
  }, []);

  // Find current animation index and navigation
  const currentIndex = useMemo(() => {
    if (!selectedAnimation) return -1;
    return visibleAnimations.findIndex(
      (anim) => anim.id === selectedAnimation.id
    );
  }, [selectedAnimation, visibleAnimations]);

  const previousAnimation =
    currentIndex > 0 ? visibleAnimations[currentIndex - 1] : null;
  const nextAnimation =
    currentIndex < visibleAnimations.length - 1
      ? visibleAnimations[currentIndex + 1]
      : null;

  const handleNavigate = useCallback(
    (animationId: string) => {
      router.push(`/components/${animationId}`);
    },
    [router]
  );

  const handleMobileSelect = useCallback(
    (animationId: string) => {
      handleNavigate(animationId);
      setMobileSidebarOpen(false);
    },
    [handleNavigate]
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle keyboard navigation on component detail pages
      if (!selectedAnimation) return;

      // Ignore if user is typing in an input/textarea
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return;
      }

      // Left arrow key - previous component
      if (e.key === "ArrowLeft" && previousAnimation) {
        e.preventDefault();
        handleNavigate(previousAnimation.id);
      }

      // Right arrow key - next component
      if (e.key === "ArrowRight" && nextAnimation) {
        e.preventDefault();
        handleNavigate(nextAnimation.id);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedAnimation, previousAnimation, nextAnimation, handleNavigate]);

  // Escape closes the mobile drawer
  useEffect(() => {
    if (!mobileSidebarOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleMobileSidebarChange(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [mobileSidebarOpen, handleMobileSidebarChange]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative flex h-dvh overflow-hidden">
        {/* Sidebar */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.aside
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 260, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.77, 0, 0.175, 1] }}
              className="hidden md:block shrink-0 overflow-hidden border-r border-border bg-background"
            >
              <div className="flex h-full w-[260px] flex-col">
                <div className="flex items-center justify-between border-b border-border py-1.5 pl-4 pr-2">
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Components
                  </p>
                  <button
                    type="button"
                    onClick={() => setSidebarOpen(false)}
                    title="Close sidebar"
                    className="relative flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-[background-color,color,scale] duration-150 hover:bg-muted hover:text-foreground active:scale-[0.96] outline-none focus-visible:ring-2 focus-visible:ring-ring after:absolute after:-inset-1"
                  >
                    <PanelLeftClose aria-hidden="true" className="h-4 w-4" />
                    <span className="sr-only">Close sidebar</span>
                  </button>
                </div>
                <AnimationsSidebar
                  selectedComponent={selectedAnimation}
                  useLinks={true}
                  target={target}
                />
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Toggle Button */}
        <AnimatePresence>
          {!sidebarOpen && (
            <motion.button
              type="button"
              onClick={() => setSidebarOpen(true)}
              title="Open sidebar"
              className="hidden md:flex fixed left-2 top-[110px] z-10 rounded-md bg-background border border-border p-1.5 shadow-sm transition-[background-color,scale] duration-150 hover:bg-muted active:scale-[0.96] outline-none focus-visible:ring-2 focus-visible:ring-ring after:absolute after:-inset-1.5"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <PanelLeftOpen aria-hidden="true" className="h-4 w-4" />
              <span className="sr-only">Open sidebar</span>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Navigation Arrows - Show when sidebar is closed and on component detail page */}
        <AnimatePresence>
          {!sidebarOpen && selectedAnimation && (
            <>
              {/* Previous Button */}
              {previousAnimation && (
                <motion.button
                  type="button"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  onClick={() => handleNavigate(previousAnimation.id)}
                  className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-background/80 backdrop-blur-sm border border-border p-3 shadow-lg transition-[background-color,scale] duration-200 hover:bg-muted hover:scale-110 outline-none focus-visible:ring-2 focus-visible:ring-ring group"
                  aria-label={`Previous: ${previousAnimation.name}`}
                  title={`Previous: ${previousAnimation.name}`}
                >
                  <ChevronLeft
                    aria-hidden="true"
                    className="h-6 w-6 transition-transform group-hover:-translate-x-0.5"
                  />
                </motion.button>
              )}

              {/* Next Button */}
              {nextAnimation && (
                <motion.button
                  type="button"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  onClick={() => handleNavigate(nextAnimation.id)}
                  className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-background/80 backdrop-blur-sm border border-border p-3 shadow-lg transition-[background-color,scale] duration-200 hover:bg-muted hover:scale-110 outline-none focus-visible:ring-2 focus-visible:ring-ring group"
                  aria-label={`Next: ${nextAnimation.name}`}
                  title={`Next: ${nextAnimation.name}`}
                >
                  <ChevronRight
                    aria-hidden="true"
                    className="h-6 w-6 transition-transform group-hover:translate-x-0.5"
                  />
                </motion.button>
              )}
            </>
          )}
        </AnimatePresence>

        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Mobile Sidebar */}
          <AnimatePresence>
            {mobileSidebarOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  aria-hidden="true"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => handleMobileSidebarChange(false)}
                  className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] md:hidden"
                />
                {/* Sidebar Content */}
                <motion.aside
                  role="dialog"
                  aria-modal="true"
                  aria-label="Browse components"
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="fixed inset-y-0 left-0 z-50 flex w-[280px] flex-col border-r border-border bg-background shadow-2xl md:hidden"
                >
                  <div className="flex items-center justify-between border-b border-border px-4 py-4">
                    <p className="text-sm font-semibold text-foreground">
                      Browse Components
                    </p>
                    <button
                      type="button"
                      onClick={() => handleMobileSidebarChange(false)}
                      className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background transition-colors hover:bg-muted outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      <span className="sr-only">Close sidebar</span>
                    </button>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <AnimationsSidebar
                      selectedComponent={selectedAnimation}
                      onSelectComponent={(component) =>
                        handleMobileSelect(component.id)
                      }
                      target={target}
                    />
                  </div>
                </motion.aside>
              </>
            )}
          </AnimatePresence>

          {/* Mobile Header */}
          <div className="flex items-center justify-between border-b border-border bg-background px-4 py-3 md:hidden">
            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Components
              </p>
              <p className="truncate text-sm font-semibold">
                {selectedAnimation ? selectedAnimation.name : "Browse library"}
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              onClick={() => setMobileSidebarOpen(true)}
              aria-expanded={mobileSidebarOpen}
            >
              <Menu className="h-4 w-4" />
              Browse
            </Button>
          </div>

          <div className="flex-1 overflow-hidden">{children}</div>
        </div>
      </div>
    </MotionConfig>
  );
}

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen items-center justify-center">
          Loading...
        </div>
      }
    >
      <ComponentsLayoutContent>{children}</ComponentsLayoutContent>
    </Suspense>
  );
}
