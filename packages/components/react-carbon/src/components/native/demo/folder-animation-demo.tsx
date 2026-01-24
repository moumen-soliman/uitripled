"use client";

import { Button } from "@uitripled/react-shadcn/ui/button";
import { FileText, Folder, Image, Music } from "lucide-react";
import { FolderAnimation } from "../folder-animation-carbon";

const RESPONSIVE_WIDTH = "w-full max-w-md";

export function FolderAnimationDefault() {
  return (
    <FolderAnimation className={RESPONSIVE_WIDTH}>
      <div className="space-y-2">
        <h3 className="font-semibold text-lg">Organizing Your Files</h3>
        <p className="text-sm text-muted-foreground">
          Watch as files seamlessly move through your workspace with smooth
          motion blur effects.
        </p>
      </div>
    </FolderAnimation>
  );
}

export function FolderAnimationFast() {
  return (
    <FolderAnimation className={RESPONSIVE_WIDTH} animationDuration={2}>
      <div className="space-y-2">
        <h3 className="font-semibold text-lg">Quick Transfer</h3>
        <p className="text-sm text-muted-foreground">
          Faster animation for quick file operations.
        </p>
      </div>
    </FolderAnimation>
  );
}

export function FolderAnimationSlow() {
  return (
    <FolderAnimation className={RESPONSIVE_WIDTH} animationDuration={6}>
      <div className="space-y-2">
        <h3 className="font-semibold text-lg">Careful Handling</h3>
        <p className="text-sm text-muted-foreground">
          Slower animation for detailed file processing.
        </p>
      </div>
    </FolderAnimation>
  );
}

export function FolderAnimationCustomIcon() {
  return (
    <FolderAnimation
      className={RESPONSIVE_WIDTH}
      folderIcon={
        <div className="relative">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-2xl">
            <FileText className="w-12 h-12 text-white" />
          </div>
        </div>
      }
    >
      <div className="space-y-2">
        <h3 className="font-semibold text-lg">Document Processing</h3>
        <p className="text-sm text-muted-foreground">
          Custom icon for document-specific operations.
        </p>
      </div>
    </FolderAnimation>
  );
}

export function FolderAnimationImageIcon() {
  return (
    <FolderAnimation
      className={RESPONSIVE_WIDTH}
      folderIcon={
        <div className="relative">
          <div className="w-28 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-2xl overflow-hidden">
            <Image className="w-12 h-12 text-white" />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20" />
          </div>
        </div>
      }
    >
      <div className="space-y-2">
        <h3 className="font-semibold text-lg">Image Gallery</h3>
        <p className="text-sm text-muted-foreground">
          Organizing your photos with style.
        </p>
      </div>
    </FolderAnimation>
  );
}

export function FolderAnimationMusicIcon() {
  return (
    <FolderAnimation
      className={RESPONSIVE_WIDTH}
      folderIcon={
        <div className="relative">
          <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl">
            <Music className="w-10 h-10 text-white" />
          </div>
        </div>
      }
      animationDuration={3}
    >
      <div className="space-y-2">
        <h3 className="font-semibold text-lg">Music Library</h3>
        <p className="text-sm text-muted-foreground">
          Your audio files in motion.
        </p>
      </div>
    </FolderAnimation>
  );
}

export function FolderAnimationWithActions() {
  return (
    <FolderAnimation className={RESPONSIVE_WIDTH}>
      <div className="space-y-4">
        <div className="md:flex items-center gap-3 flex-col md:flex-row space-y-2 md:space-y-0">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Folder className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold">File Transfer in Progress</h3>
            <p className="text-xs text-muted-foreground">
              Moving 24 files to destination
            </p>
          </div>
        </div>
        <div className="flex w-full items-center flex-col md:flex-row gap-2">
          <Button size="sm">
            View Details
          </Button>
        </div>
      </div>
    </FolderAnimation>
  );
}

export function FolderAnimationNoFooter() {
  return <FolderAnimation className={RESPONSIVE_WIDTH} />;
}

export function FolderAnimationDemo() {
  return (
    <div className="flex flex-col gap-12 w-full">
      <div className="space-y-2">
        <h3 className="font-semibold text-muted-foreground">Default</h3>
        <FolderAnimationDefault />
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold text-muted-foreground">Custom Icon</h3>
        <FolderAnimationCustomIcon />
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold text-muted-foreground">With Actions</h3>
        <FolderAnimationWithActions />
      </div>
    </div>
  );
}
