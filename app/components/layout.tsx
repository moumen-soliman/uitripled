"use client";

import { AnimationsSidebar } from "@/components/animation-sidebar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  componentsRegistry,
  getComponentById,
} from "@/lib/components-registry";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Menu } from "lucide-react";
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

  return (
    <div className="relative flex h-[calc(100vh-3.5rem)] overflow-hidden px-4">
      {/* Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 320, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="hidden md:block shrink-0 border-r border-border overflow-hidden"
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <div>
                  <p className="text-sm font-semibold">
                    {selectedAnimation
                      ? selectedAnimation.name
                      : "All components"}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSidebarOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background shadow-sm transition-colors hover:bg-muted"
                >
                  <ChevronLeft className="h-4 w-4" />
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
            onClick={() => setSidebarOpen(true)}
            className="hidden md:flex fixed left-2 top-[110px] z-10 rounded-md bg-background border border-border p-1.5 shadow-sm transition-colors hover:bg-muted"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <ChevronRight className="h-4 w-4" />
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
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleNavigate(previousAnimation.id)}
                className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-background/80 backdrop-blur-sm border border-border p-3 shadow-lg transition-all hover:bg-muted hover:scale-110 group"
                title={`Previous: ${previousAnimation.name}`}
              >
                <ChevronLeft className="h-6 w-6 transition-transform group-hover:-translate-x-0.5" />
              </motion.button>
            )}

            {/* Next Button */}
            {nextAnimation && (
              <motion.button
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleNavigate(nextAnimation.id)}
                className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-background/80 backdrop-blur-sm border border-border p-3 shadow-lg transition-all hover:bg-muted hover:scale-110 group"
                title={`Next: ${nextAnimation.name}`}
              >
                <ChevronRight className="h-6 w-6 transition-transform group-hover:translate-x-0.5" />
              </motion.button>
            )}
          </>
        )}
      </AnimatePresence>

      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Mobile Header */}
        <Dialog
          open={mobileSidebarOpen}
          onOpenChange={handleMobileSidebarChange}
        >
          <div className="flex items-center justify-between border-b border-border bg-background px-4 py-3 md:hidden">
            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Components
              </p>
              <p className="truncate text-sm font-semibold">
                {selectedAnimation ? selectedAnimation.name : "Browse library"}
              </p>
            </div>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <Menu className="h-4 w-4" />
                Browse
              </Button>
            </DialogTrigger>
          </div>
          <DialogContent className="md:hidden inset-x-0 bottom-0 left-0 right-0 top-auto flex h-[calc(100vh-5rem)] max-w-none translate-x-0 translate-y-0 flex-col rounded-t-3xl border border-border bg-background p-0 pb-4 shadow-xl data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom sm:rounded-t-3xl">
            <DialogTitle className="sr-only">Mobile Navigation</DialogTitle>
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <div>
                <p className="text-sm font-semibold">
                  {selectedAnimation
                    ? selectedAnimation.name
                    : "All components"}
                </p>
              </div>
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
          </DialogContent>
        </Dialog>

        <div className="flex-1 overflow-hidden">{children}</div>
      </div>
    </div>
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
