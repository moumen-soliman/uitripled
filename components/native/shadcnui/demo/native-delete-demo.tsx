"use client";

import { NativeDelete } from "@/components/native/shadcnui/native-delete-shadcnui";
import { useState } from "react";

export function NativeDeleteDefault() {
  const [deleted, setDeleted] = useState(false);
  return (
    <div className="flex items-center justify-center p-4">
      {!deleted ? (
        <NativeDelete
          onConfirm={() => {
            // Handle confirmation UI shown
          }}
          onDelete={() => {
            setDeleted(true);
            setTimeout(() => setDeleted(false), 2000);
          }}
        />
      ) : (
        <div className="text-sm text-muted-foreground">Deleted!</div>
      )}
    </div>
  );
}

export function NativeDeleteSmall() {
  const [deleted, setDeleted] = useState(false);
  return (
    <div className="flex items-center justify-center p-4">
      {!deleted ? (
        <NativeDelete
          size="sm"
          onConfirm={() => {
            // Handle confirmation UI shown
          }}
          onDelete={() => {
            setDeleted(true);
            setTimeout(() => setDeleted(false), 2000);
          }}
        />
      ) : (
        <div className="text-sm text-muted-foreground">Deleted!</div>
      )}
    </div>
  );
}

export function NativeDeleteLarge() {
  const [deleted, setDeleted] = useState(false);
  return (
    <div className="flex items-center justify-center p-4">
      {!deleted ? (
        <NativeDelete
          size="lg"
          onConfirm={() => {
            // Handle confirmation UI shown
          }}
          onDelete={() => {
            setDeleted(true);
            setTimeout(() => setDeleted(false), 2000);
          }}
        />
      ) : (
        <div className="text-sm text-muted-foreground">Deleted!</div>
      )}
    </div>
  );
}

export function NativeDeleteCustomText() {
  const [deleted, setDeleted] = useState(false);
  return (
    <div className="flex items-center justify-center p-4">
      {!deleted ? (
        <NativeDelete
          buttonText="Remove Item"
          confirmText="Yes, Remove"
          onConfirm={() => {
            // Handle confirmation UI shown
          }}
          onDelete={() => {
            setDeleted(true);
            setTimeout(() => setDeleted(false), 2000);
          }}
        />
      ) : (
        <div className="text-sm text-muted-foreground">Removed!</div>
      )}
    </div>
  );
}

export function NativeDeleteNoIcon() {
  const [deleted, setDeleted] = useState(false);
  return (
    <div className="flex items-center justify-center p-4">
      {!deleted ? (
        <NativeDelete
          showIcon={false}
          onConfirm={() => {
            // Handle confirmation UI shown
          }}
          onDelete={() => {
            setDeleted(true);
            setTimeout(() => setDeleted(false), 2000);
          }}
        />
      ) : (
        <div className="text-sm text-muted-foreground">Deleted!</div>
      )}
    </div>
  );
}

export function NativeDeleteDisabled() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeDelete disabled onConfirm={() => {}} onDelete={() => {}} />
    </div>
  );
}

export function NativeDeleteDemo() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Default
          </h3>
          <NativeDeleteDefault />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">Small</h3>
          <NativeDeleteSmall />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">Large</h3>
          <NativeDeleteLarge />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Custom Text
          </h3>
          <NativeDeleteCustomText />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">
            No Icon
          </h3>
          <NativeDeleteNoIcon />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Disabled
          </h3>
          <NativeDeleteDisabled />
        </div>
      </div>
    </div>
  );
}
