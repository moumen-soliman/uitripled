"use client";

import { Reorder } from "framer-motion";
import { GripVertical } from "lucide-react";
import { useState } from "react";

const initialItems = [
  { id: 1, text: "First item" },
  { id: 2, text: "Second item" },
  { id: 3, text: "Third item" },
  { id: 4, text: "Fourth item" },
];

export function DraggableList() {
  const [items, setItems] = useState(initialItems);

  return (
    <Reorder.Group
      axis="y"
      values={items}
      onReorder={setItems}
      className="w-full max-w-md space-y-2"
    >
      {items.map((item) => (
        <Reorder.Item
          key={item.id}
          value={item}
          className="flex cursor-grab items-center gap-3 rounded-lg border  bg-[var(--card-bg)] p-4 active:cursor-grabbing"
          whileDrag={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
        >
          <GripVertical className="h-5 w-5 text-[var(--foreground)]/40" />
          <span className="text-sm">{item.text}</span>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}
