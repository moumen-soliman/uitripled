"use client";

import { NativeMorphingButton } from "@/components/native/baseui/native-morphing-button-baseui";
import { FileText, FolderPlus, Plus, Users } from "lucide-react";

export function NativeMorphingButtonDefault() {
  return (
    <div className="relative h-48 w-full">
      <NativeMorphingButton
        actions={[
          {
            label: "New Task",
            icon: <Plus className="h-4 w-4" />,
            onClick: () => {},
          },
          {
            label: "New Project",
            icon: <FolderPlus className="h-4 w-4" />,
            onClick: () => {},
          },
          {
            label: "New Team",
            icon: <Users className="h-4 w-4" />,
            onClick: () => {},
          },
        ]}
      />
    </div>
  );
}

export function NativeMorphingButtonCustomIcon() {
  return (
    <div className="relative h-48 w-full">
      <NativeMorphingButton
        icon={<FileText className="h-5 w-5" />}
        actions={[
          {
            label: "Draft",
            icon: <FileText className="h-4 w-4" />,
            onClick: () => {},
          },
          {
            label: "Template",
            icon: <FileText className="h-4 w-4" />,
            onClick: () => {},
          },
        ]}
      />
    </div>
  );
}

export function NativeMorphingButtonDemo() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Default
          </h3>
          <NativeMorphingButtonDefault />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Custom Icon
          </h3>
          <NativeMorphingButtonCustomIcon />
        </div>
      </div>
    </div>
  );
}
