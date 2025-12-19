"use client";

import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  X, Type, Link as LinkIcon, Image as ImageIcon, Trash2,
  AlignLeft, AlignCenter, AlignRight, Bold, PaintBucket, Type as TypeIcon
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export type EditableNodeType = "text" | "image" | "link" | "element";

export type EditPopupData = {
  nodeId: string;
  nodeType: EditableNodeType;
  value: string;
  originalValue: string;
  position: { x: number; y: number };
  componentId: string;
  currentStyle?: React.CSSProperties;
};

type InlineEditPopupProps = {
  data: EditPopupData | null;
  pages: { id: string; name: string; slug: string }[];
  onUpdateText: (componentId: string, nodeId: string, value: string) => void;
  onUpdateImage: (componentId: string, nodeId: string, value: string) => void;
  onUpdateLink: (componentId: string, nodeId: string, value: string) => void;
  onUpdateStyle: (componentId: string, nodeId: string, newStyle: React.CSSProperties) => void;
  onDeleteNode: (componentId: string, nodeId: string) => void;
  onAddPage: () => void;
  onClose: () => void;
};

export function InlineEditPopup({
  data,
  pages,
  onUpdateText,
  onUpdateImage,
  onUpdateLink,
  onUpdateStyle,
  onDeleteNode,
  onAddPage,
  onClose,
}: InlineEditPopupProps) {
  const [localValue, setLocalValue] = useState("");
  const [linkType, setLinkType] = useState<"url" | "page">("url");
  const [localStyle, setLocalStyle] = useState<React.CSSProperties>({});
  const inputRef = useRef<HTMLInputElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (data) {
      setLocalValue(data.value);
      setLocalStyle(data.currentStyle || {});
      // Detect if the link is an internal page link
      if (data.nodeType === "link") {
        const isInternalPage = pages.some(
          (p) => data.value === `/${p.slug}` || data.value === "/"
        );
        setLinkType(isInternalPage ? "page" : "url");
      }
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [data, pages]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        // Just close without saving to prevent unnecessary state updates
        onClose();
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    // Use capture phase to handle clicks before other handlers
    document.addEventListener("mousedown", handleClickOutside, true);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const handleSaveContent = () => {
    if (!data) return;

    const trimmedValue = localValue.trim();
    if (trimmedValue !== data.value) {
      switch (data.nodeType) {
        case "text":
          onUpdateText(data.componentId, data.nodeId, trimmedValue);
          break;
        case "image":
          onUpdateImage(data.componentId, data.nodeId, trimmedValue);
          break;
        case "link":
          onUpdateLink(data.componentId, data.nodeId, trimmedValue);
          break;
      }
    }
  };

  const handleStyleChange = (key: keyof React.CSSProperties, value: any) => {
    if (!data) return;

    // Auto-append px for numeric values on specific properties
    let finalValue = value;
    const pxProps = ["padding", "margin", "borderRadius", "width", "height", "fontSize", "gap", "top", "left", "right", "bottom"];
    if (pxProps.includes(key as string) && value !== "" && !isNaN(Number(value))) {
      finalValue = `${value}px`;
    }

    const newStyle = { ...localStyle, [key]: finalValue };
    setLocalStyle(newStyle);
    onUpdateStyle(data.componentId, data.nodeId, newStyle);
  };

  const handleDelete = () => {
    if (!data) return;
    onDeleteNode(data.componentId, data.nodeId);
    onClose();
  };

  const handlePageSelect = (pageSlug: string) => {
    const href = pageSlug === "home" ? "/" : `/${pageSlug}`;
    setLocalValue(href);
  };

  if (!data) return null;

  const getIcon = () => {
    switch (data.nodeType) {
      case "text":
        return <Type className="h-4 w-4 text-primary" />;
      case "image":
        return <ImageIcon className="h-4 w-4 text-primary" />;
      case "link":
        return <LinkIcon className="h-4 w-4 text-primary" />;
      default:
        return <Type className="h-4 w-4 text-primary" />;
    }
  };

  const getLabel = () => {
    switch (data.nodeType) {
      case "text":
        return "Edit Text";
      case "image":
        return "Image URL";
      case "link":
        return "Link URL";
      default:
        return "Edit";
    }
  };

  // Calculate position to keep popup in viewport
  const popupStyle: React.CSSProperties = {
    position: "fixed",
    left: Math.min(data.position.x, window.innerWidth - 320),
    top: Math.min(data.position.y + 10, window.innerHeight - 300),
    zIndex: 9999,
  };

  return (
    <AnimatePresence>
      <motion.div
        ref={popupRef}
        initial={{ opacity: 0, y: -10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -10, scale: 0.95 }}
        transition={{ duration: 0.15 }}
        style={popupStyle}
        className="w-72 rounded-lg border border-border bg-card p-3 shadow-xl"
      >
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {getIcon()}
            <span className="text-xs font-medium">{getLabel()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-destructive hover:bg-destructive/10"
              onClick={handleDelete}
              title="Delete this element"
            >
              <Trash2 className="h-3 w-3" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={onClose}
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        </div>

        <Tabs defaultValue="content" className="w-full">
          <TabsList className="grid w-full grid-cols-2 h-8 mb-2">
            <TabsTrigger value="content" className="text-xs h-6">Content</TabsTrigger>
            <TabsTrigger value="style" className="text-xs h-6">Style</TabsTrigger>
          </TabsList>

          <TabsContent value="content" className="mt-0">
            {data.nodeType === "link" && (
              <div className="mb-2 flex gap-1">
                <Button
                  variant={linkType === "url" ? "default" : "outline"}
                  size="sm"
                  className="h-7 flex-1 text-xs"
                  onClick={() => setLinkType("url")}
                >
                  URL
                </Button>
                <Button
                  variant={linkType === "page" ? "default" : "outline"}
                  size="sm"
                  className="h-7 flex-1 text-xs"
                  onClick={() => setLinkType("page")}
                >
                  Page
                </Button>
              </div>
            )}

            {data.nodeType === "link" && linkType === "page" ? (
              <Select
                value={
                  pages.find((p) => localValue === `/${p.slug}` || (localValue === "/" && p.slug === "home"))?.slug || ""
                }
                onValueChange={handlePageSelect}
              >
                <SelectTrigger className="h-8 text-sm">
                  <SelectValue placeholder="Select a page" />
                </SelectTrigger>
                <SelectContent>
                  {pages.map((page) => (
                    <SelectItem key={page.id} value={page.slug}>
                      {page.name}
                    </SelectItem>
                  ))}
                  <Button
                    variant="ghost"
                    className="w-full justify-start px-2 py-1.5 text-xs text-primary"
                    onClick={() => {
                      onAddPage();
                      // Wait for page to be added and select it if possible,
                      // or just let the user re-select after the prompt.
                    }}
                  >
                    + Create New Page
                  </Button>
                </SelectContent>
              </Select>
            ) : (
              <Input
                ref={inputRef}
                value={localValue}
                onChange={(e) => setLocalValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSaveContent();
                    onClose();
                  }
                }}
                placeholder={
                  data.nodeType === "image"
                    ? "https://example.com/image.jpg"
                    : data.nodeType === "link"
                      ? "https://example.com"
                      : "Enter text..."
                }
                className="h-8 text-sm"
              />
            )}

            <div className="mt-2 flex justify-end gap-1">
              <Button size="sm" className="h-7 text-xs w-full" onClick={() => { handleSaveContent(); onClose(); }}>
                Save Content
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="style" className="mt-0 space-y-3">
            {/* Color */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <PaintBucket className="h-3 w-3 text-muted-foreground" />
                <span className="text-xs">Color</span>
              </div>
              <div className="flex gap-2">
                <input
                  type="color"
                  value={(localStyle.color as string) || "#000000"}
                  onChange={(e) => handleStyleChange("color", e.target.value)}
                  className="h-6 w-8 cursor-pointer rounded border p-0"
                  title="Text Color"
                />
                <input
                  type="color"
                  value={(localStyle.backgroundColor as string) || "#ffffff"}
                  onChange={(e) => handleStyleChange("backgroundColor", e.target.value)}
                  className="h-6 w-8 cursor-pointer rounded border p-0"
                  title="Background Color"
                />
              </div>
            </div>

            {/* Typography */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TypeIcon className="h-3 w-3 text-muted-foreground" />
                <span className="text-xs">Size</span>
              </div>
              <Input
                type="number"
                value={parseInt((localStyle.fontSize as string) || "16")}
                onChange={(e) => handleStyleChange("fontSize", `${e.target.value}px`)}
                className="h-6 w-16 text-xs text-right pr-2"
              />
            </div>

             <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bold className="h-3 w-3 text-muted-foreground" />
                <span className="text-xs">Weight</span>
              </div>
              <Select
                value={(localStyle.fontWeight as string) || "normal"}
                onValueChange={(val) => handleStyleChange("fontWeight", val)}
              >
                <SelectTrigger className="h-6 w-24 text-xs">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="normal">Normal</SelectItem>
                  <SelectItem value="500">Medium</SelectItem>
                  <SelectItem value="bold">Bold</SelectItem>
                  <SelectItem value="800">Extra Bold</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Alignment */}
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Align</span>
              <div className="flex rounded-md border text-xs">
                <Button variant="ghost" size="icon" className="h-6 w-8 rounded-none border-r" onClick={() => handleStyleChange("textAlign", "left")}>
                  <AlignLeft className="h-3 w-3" />
                </Button>
                <Button variant="ghost" size="icon" className="h-6 w-8 rounded-none border-r" onClick={() => handleStyleChange("textAlign", "center")}>
                  <AlignCenter className="h-3 w-3" />
                </Button>
                <Button variant="ghost" size="icon" className="h-6 w-8 rounded-none" onClick={() => handleStyleChange("textAlign", "right")}>
                  <AlignRight className="h-3 w-3" />
                </Button>
              </div>
            </div>

            {/* Spacing */}
             <div className="grid grid-cols-2 gap-2">
               <div className="space-y-1">
                 <span className="text-[10px] text-muted-foreground uppercase">Padding</span>
                 <Input
                    type="text"
                    placeholder="0px"
                    value={localStyle.padding as string || ""}
                    onChange={(e) => handleStyleChange("padding", e.target.value)}
                    className="h-6 text-xs"
                  />
               </div>
              <div className="space-y-1">
                <span className="text-[10px] text-muted-foreground uppercase">Radius</span>
                <Input
                  type="text"
                  placeholder="0px"
                  value={localStyle.borderRadius as string || ""}
                  onChange={(e) => handleStyleChange("borderRadius", e.target.value)}
                  className="h-6 text-xs"
                />
              </div>
            </div>

            {/* Dimensions */}
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1">
                <span className="text-[10px] text-muted-foreground uppercase">Width</span>
                <Input
                  type="text"
                  placeholder="auto"
                  value={localStyle.width as string || ""}
                  onChange={(e) => handleStyleChange("width", e.target.value)}
                  className="h-6 text-xs"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-muted-foreground uppercase">Height</span>
                <Input
                  type="text"
                  placeholder="auto"
                  value={localStyle.height as string || ""}
                  onChange={(e) => handleStyleChange("height", e.target.value)}
                  className="h-6 text-xs"
                />
              </div>
            </div>

            {/* Margin */}
            <div className="space-y-1">
              <span className="text-[10px] text-muted-foreground uppercase">Margin</span>
              <Input
                type="text"
                placeholder="0px or 0px 0px..."
                value={localStyle.margin as string || ""}
                onChange={(e) => handleStyleChange("margin", e.target.value)}
                className="h-6 text-xs"
              />
            </div>

          </TabsContent>
        </Tabs>
      </motion.div>
    </AnimatePresence>
  );
}
