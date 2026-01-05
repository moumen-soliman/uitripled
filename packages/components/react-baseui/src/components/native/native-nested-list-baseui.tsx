"use client";

import type React from "react";

import { NativeButton } from "./native-button-baseui";
import { cn } from "@uitripled/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

export interface ListItem {
  /**
   * Unique identifier for the list item
   */
  id: string;
  /**
   * Display label for the list item
   */
  label: string;
  /**
   * Optional icon component
   */
  icon?: React.ReactNode;
  /**
   * Nested children items
   */
  children?: ListItem[];
  /**
   * Additional metadata
   */
  metadata?: Record<string, any>;
  /**
   * Optional URL to navigate to
   */
  href?: string;
  /**
   * Optional click handler
   */
  onClick?: (e: React.MouseEvent) => void;
}

export interface NativeNestedListProps {
  items: ListItem[];
  activeId?: string;
  onItemClick?: (item: ListItem) => void;
  size?: "sm" | "md" | "lg";
  showExpandIcon?: boolean;
  defaultExpanded?: boolean;
  className?: string;
  indentSize?: number;
}

const sizeVariants = {
  sm: "h-8 text-xs px-2",
  md: "h-10 text-sm px-3",
  lg: "h-12 text-base px-4",
};

const iconSizeVariants = {
  sm: "h-3 w-3",
  md: "h-4 w-4",
  lg: "h-5 w-5",
};

interface NestedItemProps {
  item: ListItem;
  level: number;
  activeId?: string;
  onItemClick?: (item: ListItem) => void;
  size: "sm" | "md" | "lg";
  showExpandIcon: boolean;
  defaultExpanded: boolean;
  indentSize: number;
}

function NestedItem({
  item,
  level,
  activeId,
  onItemClick,
  size,
  showExpandIcon,
  defaultExpanded,
  indentSize,
}: NestedItemProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const hasChildren = item.children && item.children.length > 0;
  const isActive = activeId === item.id;

  const handleClick = (e: React.MouseEvent) => {
    if (hasChildren) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
    onItemClick?.(item);
    item.onClick?.(e);
  };

  // @ts-ignore - NativeButton props might not explicitly include href but simpler to pass it through if supported by Base UI
  const extraProps = item.href ? { href: item.href } : {};

  return (
    <div>
      <motion.div
        initial={false}
        animate={{
          x: 0,
          backgroundColor: "transparent",
        }}
        whileHover={{
          x: 4,
          backgroundColor: "hsl(var(--accent) / 0.5)",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          backgroundColor: {
            delay: 0.05,
            duration: 0.3,
          },
        }}
        style={{ paddingLeft: `${level * indentSize}px` }}
        className="relative"
      >
        <motion.div
          className="flex items-center"
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <NativeButton
            variant="ghost"
            size="default"
            className={cn(
              sizeVariants[size],
              "w-full justify-start gap-2 relative overflow-hidden rounded-md border-0 shadow-none hover:shadow-none bg-transparent hover:bg-transparent",
              isActive && "font-medium bg-accent/30"
            )}
            onClick={handleClick}
            {...extraProps}
          >
            {showExpandIcon && hasChildren && (
              <motion.div
                initial={false}
                animate={{ rotate: isExpanded ? 90 : 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="flex-shrink-0"
              >
                <ChevronRight className={iconSizeVariants[size]} />
              </motion.div>
            )}
            {showExpandIcon && !hasChildren && (
              <div className={cn(iconSizeVariants[size], "flex-shrink-0")} />
            )}
            {item.icon && (
              <motion.div
                className="flex-shrink-0"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {item.icon}
              </motion.div>
            )}
            <span className="truncate">{item.label}</span>
          </NativeButton>
        </motion.div>

        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-black rounded-full"
            />
          )}
        </AnimatePresence>
      </motion.div>

      {/* Nested children */}
      <AnimatePresence initial={false}>
        {hasChildren && isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: {
                type: "spring",
                stiffness: 300,
                damping: 25,
              },
              opacity: {
                duration: 0.2,
              },
            }}
            style={{ overflow: "hidden" }}
          >
            {item.children!.map((child) => (
              <NestedItem
                key={child.id}
                item={child}
                level={level + 1}
                activeId={activeId}
                onItemClick={onItemClick}
                size={size}
                showExpandIcon={showExpandIcon}
                defaultExpanded={defaultExpanded}
                indentSize={indentSize}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function NativeNestedListBaseUI({
  items,
  activeId,
  onItemClick,
  size = "md",
  showExpandIcon = true,
  defaultExpanded = false,
  className,
  indentSize = 16,
}: NativeNestedListProps) {
  return (
    <div className={cn("w-full space-y-1", className)}>
      {items.map((item) => (
        <NestedItem
          key={item.id}
          item={item}
          level={0}
          activeId={activeId}
          onItemClick={onItemClick}
          size={size}
          showExpandIcon={showExpandIcon}
          defaultExpanded={defaultExpanded}
          indentSize={indentSize}
        />
      ))}
    </div>
  );
}
