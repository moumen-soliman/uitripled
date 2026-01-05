"use client";

import { NativeDelete } from "../native-delete-baseui";
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
  return <NativeDeleteDefault />;
}
