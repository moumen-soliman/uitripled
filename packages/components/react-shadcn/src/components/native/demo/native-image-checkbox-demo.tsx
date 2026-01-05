"use client";

import { NativeImageCheckbox } from "../native-image-checkbox-shadcnui";
import { useState } from "react";

export function NativeImageCheckboxDefault() {
  const [selected, setSelected] = useState(false);
  return (
    <div className="flex items-center justify-center p-4">
      <NativeImageCheckbox
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
        alt="Portrait"
        selected={selected}
        onSelect={setSelected}
      />
    </div>
  );
}

export function NativeImageCheckboxSmall() {
  const [selected, setSelected] = useState(false);
  return (
    <div className="flex items-center justify-center p-4">
      <NativeImageCheckbox
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
        alt="Portrait Small"
        selected={selected}
        onSelect={setSelected}
        size="sm"
      />
    </div>
  );
}

export function NativeImageCheckboxLarge() {
  const [selected, setSelected] = useState(false);
  return (
    <div className="flex items-center justify-center p-4">
      <NativeImageCheckbox
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
        alt="Portrait Large"
        selected={selected}
        onSelect={setSelected}
        size="lg"
      />
    </div>
  );
}

export function NativeImageCheckboxExtraLarge() {
  const [selected, setSelected] = useState(false);
  return (
    <div className="flex items-center justify-center p-4">
      <NativeImageCheckbox
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
        alt="Portrait XL"
        selected={selected}
        onSelect={setSelected}
        size="xl"
      />
    </div>
  );
}

export function NativeImageCheckboxSelected() {
  const [selected, setSelected] = useState(true);
  return (
    <div className="flex items-center justify-center p-4">
      <NativeImageCheckbox
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
        alt="Selected Portrait"
        selected={selected}
        onSelect={setSelected}
      />
    </div>
  );
}

export function NativeImageCheckboxGrid() {
  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(true);
  const [selected3, setSelected3] = useState(false);
  const [selected4, setSelected4] = useState(false);

  return (
    <div className="flex items-center justify-center p-4">
      <div className="grid grid-cols-2 gap-4">
        <NativeImageCheckbox
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
          alt="Image 1"
          selected={selected1}
          onSelect={setSelected1}
        />
        <NativeImageCheckbox
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
          alt="Image 2"
          selected={selected2}
          onSelect={setSelected2}
        />
        <NativeImageCheckbox
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
          alt="Image 3"
          selected={selected3}
          onSelect={setSelected3}
        />
        <NativeImageCheckbox
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
          alt="Image 4"
          selected={selected4}
          onSelect={setSelected4}
        />
      </div>
    </div>
  );
}

export function NativeImageCheckboxDemo() {
  return <NativeImageCheckboxDefault />;
}
