"use client";

import { useState, useEffect } from "react";
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
  Type, Link as LinkIcon, Image as ImageIcon, Trash2,
  AlignLeft, AlignCenter, AlignRight, Bold, PaintBucket, Type as TypeIcon,
  Move, X
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { EditPopupData } from "./inline-edit-popup";

type PropertiesSidebarProps = {
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

export function PropertiesSidebar({
  data,
  pages,
  onUpdateText,
  onUpdateImage,
  onUpdateLink,
  onUpdateStyle,
  onDeleteNode,
  onAddPage,
  onClose,
}: PropertiesSidebarProps) {
  const [localValue, setLocalValue] = useState("");
  const [linkType, setLinkType] = useState<"url" | "page">("url");
  const [localStyle, setLocalStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    if (data) {
      setLocalValue(data.value);
      setLocalStyle(data.currentStyle || {});
      if (data.nodeType === "link") {
        const isInternalPage = pages.some(
          (p) => data.value === `/${p.slug}` || data.value === "/"
        );
        setLinkType(isInternalPage ? "page" : "url");
      }
    }
  }, [data, pages]);

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

    let finalValue = value;
    const pxProps = ["padding", "margin", "borderRadius", "width", "height", "fontSize", "gap", "top", "left", "right", "bottom"];

    // If it's a numeric string, append px for specific props
    if (pxProps.includes(key as string) && value !== "" && !isNaN(Number(value))) {
      finalValue = `${value}px`;
    }

    const newStyle = { ...localStyle, [key]: finalValue };
    setLocalStyle(newStyle);
    onUpdateStyle(data.componentId, data.nodeId, newStyle);
  };

  const getValueForInput = (key: keyof React.CSSProperties) => {
    const value = localStyle[key];
    if (typeof value === 'string' && value.endsWith('px')) {
      return value.replace('px', '');
    }
    return value?.toString() || "";
  };

  if (!data) {
    return (
      <div className="flex h-full w-80 flex-col items-center justify-center border-l bg-card p-6 text-center shadow-xl">
        <div className="space-y-4">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-muted">
            <Move className="h-6 w-6 text-muted-foreground" />
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold">No Selection</h3>
            <p className="text-xs text-muted-foreground">Select an element on the canvas to edit its properties.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full w-80 flex-col border-l border-border bg-card shadow-xl">
      <div className="flex items-center justify-between border-b p-4">
        <div>
          <h2 className="text-sm font-semibold">Properties</h2>
          <p className="text-[10px] text-muted-foreground uppercase font-medium">
            {data.nodeType} Element
          </p>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-destructive hover:bg-destructive/10"
            onClick={() => {
              onDeleteNode(data.componentId, data.nodeId);
              onClose();
            }}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-6">
          <Tabs defaultValue="content" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="style">Style</TabsTrigger>
            </TabsList>

            <TabsContent value="content" className="pt-4 space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                  {data.nodeType === "text" ? "Value" : data.nodeType === "image" ? "Source" : "Destination"}
                </label>

                {data.nodeType === "link" && (
                  <div className="flex gap-2 mb-2">
                    <Button
                      variant={linkType === "url" ? "default" : "outline"}
                      size="sm"
                      className="flex-1 h-7 text-[10px]"
                      onClick={() => setLinkType("url")}
                    >
                      URL
                    </Button>
                    <Button
                      variant={linkType === "page" ? "default" : "outline"}
                      size="sm"
                      className="flex-1 h-7 text-[10px]"
                      onClick={() => setLinkType("page")}
                    >
                      PAGE
                    </Button>
                  </div>
                )}

                {data.nodeType === "link" && linkType === "page" ? (
                  <Select
                    value={pages.find((p) => localValue === `/${p.slug}` || (localValue === "/" && p.slug === "home"))?.slug || ""}
                    onValueChange={(val) => {
                      const href = val === "home" ? "/" : `/${val}`;
                      setLocalValue(href);
                      onUpdateLink(data.componentId, data.nodeId, href);
                    }}
                  >
                    <SelectTrigger className="h-9">
                      <SelectValue placeholder="Select a page" />
                    </SelectTrigger>
                    <SelectContent>
                      {pages.map((page) => (
                        <SelectItem key={page.id} value={page.slug}>
                          {page.name}
                        </SelectItem>
                      ))}
                      <Separator className="my-1" />
                      <Button
                        variant="ghost"
                        className="w-full justify-start px-2 py-1.5 text-xs text-primary"
                        onClick={onAddPage}
                      >
                        + Create New Page
                      </Button>
                    </SelectContent>
                  </Select>
                ) : (
                  <div className="flex flex-col gap-2">
                    {data.nodeType === "text" ? (
                      <textarea
                        value={localValue}
                        onChange={(e) => setLocalValue(e.target.value)}
                        onBlur={handleSaveContent}
                        className="min-h-[100px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter text..."
                      />
                    ) : (
                      <Input
                        value={localValue}
                        onChange={(e) => setLocalValue(e.target.value)}
                        onBlur={handleSaveContent}
                        placeholder={data.nodeType === "image" ? "https://..." : "https://..."}
                        className="h-9"
                      />
                    )}
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="style" className="pt-4 space-y-6">
              {/* Positioning */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Move className="h-3 w-3 text-muted-foreground" />
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Position</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] text-muted-foreground">X (Left)</span>
                    <Input
                      type="text"
                      value={getValueForInput("left")}
                      onChange={(e) => handleStyleChange("left", e.target.value)}
                      className="h-8 text-xs"
                      placeholder="Auto"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] text-muted-foreground">Y (Top)</span>
                    <Input
                      type="text"
                      value={getValueForInput("top")}
                      onChange={(e) => handleStyleChange("top", e.target.value)}
                      className="h-8 text-xs"
                      placeholder="Auto"
                    />
                  </div>
                </div>
              </div>

              <Separator />

              {/* Dimensions */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <TypeIcon className="h-3 w-3 text-muted-foreground" />
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Dimensions</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] text-muted-foreground">Width</span>
                    <Input
                      type="text"
                      value={getValueForInput("width")}
                      onChange={(e) => handleStyleChange("width", e.target.value)}
                      className="h-8 text-xs"
                      placeholder="Auto"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] text-muted-foreground">Height</span>
                    <Input
                      type="text"
                      value={getValueForInput("height")}
                      onChange={(e) => handleStyleChange("height", e.target.value)}
                      className="h-8 text-xs"
                      placeholder="Auto"
                    />
                  </div>
                </div>
              </div>

              <Separator />

              {/* Typography */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TypeIcon className="h-3 w-3 text-muted-foreground" />
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Text Style</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] text-muted-foreground">Size</span>
                    <Input
                      type="text"
                      value={getValueForInput("fontSize")}
                      onChange={(e) => handleStyleChange("fontSize", e.target.value)}
                      className="h-8 text-xs"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] text-muted-foreground">Weight</span>
                    <Select
                      value={(localStyle.fontWeight as string) || "normal"}
                      onValueChange={(val) => handleStyleChange("fontWeight", val)}
                    >
                      <SelectTrigger className="h-8 text-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="normal">Normal</SelectItem>
                        <SelectItem value="500">Medium</SelectItem>
                        <SelectItem value="600">SemiBold</SelectItem>
                        <SelectItem value="bold">Bold</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-muted-foreground">Color</span>
                  <input
                    type="color"
                    value={(localStyle.color as string) || "#000000"}
                    onChange={(e) => handleStyleChange("color", e.target.value)}
                    className="h-6 w-12 cursor-pointer rounded border p-0"
                  />
                </div>

                <div className="flex rounded-md border overflow-hidden">
                  <Button variant="ghost" size="sm" className="h-8 flex-1 rounded-none border-r" onClick={() => handleStyleChange("textAlign", "left")}>
                    <AlignLeft className="h-3 w-3" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 flex-1 rounded-none border-r" onClick={() => handleStyleChange("textAlign", "center")}>
                    <AlignCenter className="h-3 w-3" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 flex-1 rounded-none" onClick={() => handleStyleChange("textAlign", "right")}>
                    <AlignRight className="h-3 w-3" />
                  </Button>
                </div>
              </div>

              <Separator />

              {/* Appearance */}
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Appearance</span>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] text-muted-foreground">Radius</span>
                    <Input
                      type="text"
                      value={getValueForInput("borderRadius")}
                      onChange={(e) => handleStyleChange("borderRadius", e.target.value)}
                      className="h-8 text-xs"
                      placeholder="0"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] text-muted-foreground">BG Color</span>
                    <input
                      type="color"
                      value={(localStyle.backgroundColor as string) || "#ffffff"}
                      onChange={(e) => handleStyleChange("backgroundColor", e.target.value)}
                      className="h-8 w-full cursor-pointer rounded border p-0"
                    />
                  </div>
                </div>
              </div>

              <Separator />

              {/* Layout */}
              <div className="space-y-3 pb-6">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Layout</span>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] text-muted-foreground">Padding</span>
                    <Input
                      type="text"
                      value={getValueForInput("padding")}
                      onChange={(e) => handleStyleChange("padding", e.target.value)}
                      className="h-8 text-xs"
                      placeholder="0"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] text-muted-foreground">Margin</span>
                    <Input
                      type="text"
                      value={getValueForInput("margin")}
                      onChange={(e) => handleStyleChange("margin", e.target.value)}
                      className="h-8 text-xs"
                      placeholder="0"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </ScrollArea>
    </div>
  );
}
