"use client";

import { NativeButton } from "@/components/native/shadcnui/native-button-shadcnui";
import {
  NativeDialog,
  NativeDialogContent,
  NativeDialogDescription,
  NativeDialogFooter,
  NativeDialogHeader,
  NativeDialogTitle,
  NativeDialogTrigger,
} from "@/components/native/shadcnui/native-dialog-shadcnui";

export function NativeDialogDemo() {
  return (
    <NativeDialog>
      <NativeDialogTrigger asChild>
        <NativeButton>Open Dialog</NativeButton>
      </NativeDialogTrigger>
      <NativeDialogContent className="sm:max-w-[425px]">
        <NativeDialogHeader>
          <NativeDialogTitle>Edit Profile</NativeDialogTitle>
          <NativeDialogDescription>
            Make changes to your profile here. Click save when you're done.
          </NativeDialogDescription>
        </NativeDialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="text-right text-sm font-medium">Name</span>
            <input
              className="col-span-3 h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-1 focus-visible:ring-ring"
              defaultValue="Pedro Duarte"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="text-right text-sm font-medium">Username</span>
            <input
              className="col-span-3 h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              defaultValue="@peduarte"
            />
          </div>
        </div>
        <NativeDialogFooter>
          <NativeButton glow onClick={() => {}}>
            Save changes
          </NativeButton>
        </NativeDialogFooter>
      </NativeDialogContent>
    </NativeDialog>
  );
}
