"use client";

import {
  type ListItem,
  NativeNestedListBaseUI,
} from "../native-nested-list-baseui";
import {
  File,
  Folder,
  FolderOpen,
  Globe,
  Image,
  MoreHorizontal,
  MousePointerClick,
} from "lucide-react";

const items: ListItem[] = [
  {
    id: "1",
    label: "Documents",
    icon: <Folder className="h-4 w-4 text-blue-500" />,
    children: [
      {
        id: "1-1",
        label: "Project Specs",
        icon: <File className="h-4 w-4 text-gray-400" />,
      },
      {
        id: "1-2",
        label: "Design System",
        icon: <File className="h-4 w-4 text-gray-400" />,
      },
    ],
  },
  {
    id: "2",
    label: "Images",
    icon: <FolderOpen className="h-4 w-4 text-yellow-500" />,
    children: [
      {
        id: "2-1",
        label: "Vacation",
        icon: <Folder className="h-4 w-4 text-yellow-500" />,
        children: [
          {
            id: "2-1-1",
            label: "img_001.jpg",
            icon: <Image className="h-4 w-4 text-purple-500" />,
          },
          {
            id: "2-1-2",
            label: "img_002.jpg",
            icon: <Image className="h-4 w-4 text-purple-500" />,
          },
        ],
      },
      {
        id: "2-2",
        label: "Work",
        icon: <Folder className="h-4 w-4 text-yellow-500" />,
      },
    ],
  },
  {
    id: "3",
    label: "Settings",
    icon: <MoreHorizontal className="h-4 w-4 text-gray-500" />,
    children: [
      {
        id: "3-1",
        label: "Google",
        icon: <Globe className="h-4 w-4 text-blue-500" />,
        href: "https://google.com",
      },
      {
        id: "3-2",
        label: "Click Me",
        icon: <MousePointerClick className="h-4 w-4 text-green-500" />,
        onClick: (e) => {
          e.stopPropagation();
          alert("Clicked!");
        },
      },
    ],
  },
];

export function NativeNestedListBaseUIDemo() {
  return (
    <div className="w-full max-w-sm border rounded-lg p-4 bg-background">
      <NativeNestedListBaseUI items={items} />
    </div>
  );
}
