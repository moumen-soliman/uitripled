1:"$Sreact.fragment"
2:I[176430,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"default"]
4:I[669627,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"NativeNestedListDemo"]
d:I[897367,["/_next/static/chunks/d96012bcfc98706a.js","/_next/static/chunks/c1216787d4b31b65.js"],"OutletBoundary"]
e:"$Sreact.suspense"
3:T1956,"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { useState } from "react"

export interface ListItem {
  /**
   * Unique identifier for the list item
   */
  id: string
  /**
   * Display label for the list item
   */
  label: string
  /**
   * Optional icon component
   */
  icon?: React.ReactNode
  /**
   * Nested children items
   */
  children?: ListItem[]
  /**
   * Additional metadata
   */
  metadata?: Record<string, any>
  /**
   * Optional URL to navigate to
   */
  href?: string
  /**
   * Optional click handler
   */
  onClick?: (e: React.MouseEvent) => void
}

// ... existing props interface ...
export interface NativeNestedListProps {
  items: ListItem[]
  activeId?: string
  onItemClick?: (item: ListItem) => void
  size?: "sm" | "md" | "lg"
  showExpandIcon?: boolean
  defaultExpanded?: boolean
  className?: string
  indentSize?: number
}

const sizeVariants = {
  sm: "h-8 text-xs px-2",
  md: "h-10 text-sm px-3",
  lg: "h-12 text-base px-4",
}

const iconSizeVariants = {
  sm: "h-3 w-3",
  md: "h-4 w-4",
  lg: "h-5 w-5",
}

interface NestedItemProps {
  item: ListItem
  level: number
  activeId?: string
  onItemClick?: (item: ListItem) => void
  size: "sm" | "md" | "lg"
  showExpandIcon: boolean
  defaultExpanded: boolean
  indentSize: number
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
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)
  const hasChildren = item.children && item.children.length > 0
  const isActive = activeId === item.id

  const handleClick = (e: React.MouseEvent) => {
    if (hasChildren) {
      e.preventDefault()
      setIsExpanded(!isExpanded)
    }
    onItemClick?.(item)
    item.onClick?.(e)
  }

  const Comp = item.href ? "a" : "span"
  const props = item.href ? { href: item.href } : {}

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
        <motion.div whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
          <Button
            variant="ghost"
            size="default"
            asChild={!!item.href}
            className={cn(
              sizeVariants[size],
              "w-full justify-start gap-2 relative overflow-hidden rounded-md",
              isActive && "font-medium bg-accent/30",
            )}
            onClick={handleClick}
          >
            <Comp className="flex items-center gap-2" {...props}>
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
              {showExpandIcon && !hasChildren && <div className={cn(iconSizeVariants[size], "flex-shrink-0")} />}
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
            </Comp>
          </Button>
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
  )
}

export function NativeNestedList({
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
  )
}
5:T199a,"use client"

import type React from "react"

import { NativeButton } from "@/components/native/base-ui/native-button-baseui"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { useState } from "react"

export interface ListItem {
  /**
   * Unique identifier for the list item
   */
  id: string
  /**
   * Display label for the list item
   */
  label: string
  /**
   * Optional icon component
   */
  icon?: React.ReactNode
  /**
   * Nested children items
   */
  children?: ListItem[]
  /**
   * Additional metadata
   */
  metadata?: Record<string, any>
  /**
   * Optional URL to navigate to
   */
  href?: string
  /**
   * Optional click handler
   */
  onClick?: (e: React.MouseEvent) => void
}

export interface NativeNestedListProps {
  items: ListItem[]
  activeId?: string
  onItemClick?: (item: ListItem) => void
  size?: "sm" | "md" | "lg"
  showExpandIcon?: boolean
  defaultExpanded?: boolean
  className?: string
  indentSize?: number
}

const sizeVariants = {
  sm: "h-8 text-xs px-2",
  md: "h-10 text-sm px-3",
  lg: "h-12 text-base px-4",
}

const iconSizeVariants = {
  sm: "h-3 w-3",
  md: "h-4 w-4",
  lg: "h-5 w-5",
}

interface NestedItemProps {
  item: ListItem
  level: number
  activeId?: string
  onItemClick?: (item: ListItem) => void
  size: "sm" | "md" | "lg"
  showExpandIcon: boolean
  defaultExpanded: boolean
  indentSize: number
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
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)
  const hasChildren = item.children && item.children.length > 0
  const isActive = activeId === item.id

  const handleClick = (e: React.MouseEvent) => {
    if (hasChildren) {
      e.preventDefault()
      setIsExpanded(!isExpanded)
    }
    onItemClick?.(item)
    item.onClick?.(e)
  }

  // @ts-ignore - NativeButton props might not explicitly include href but simpler to pass it through if supported by Base UI
  const extraProps = item.href ? { href: item.href } : {}

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
        <motion.div className="flex items-center" whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
          <NativeButton
            variant="ghost"
            size="default"
            className={cn(
              sizeVariants[size],
              "w-full justify-start gap-2 relative overflow-hidden rounded-md border-0 shadow-none hover:shadow-none bg-transparent hover:bg-transparent",
              isActive && "font-medium bg-accent/30",
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
            {showExpandIcon && !hasChildren && <div className={cn(iconSizeVariants[size], "flex-shrink-0")} />}
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
  )
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
  )
}
6:T1956,"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { useState } from "react"

export interface ListItem {
  /**
   * Unique identifier for the list item
   */
  id: string
  /**
   * Display label for the list item
   */
  label: string
  /**
   * Optional icon component
   */
  icon?: React.ReactNode
  /**
   * Nested children items
   */
  children?: ListItem[]
  /**
   * Additional metadata
   */
  metadata?: Record<string, any>
  /**
   * Optional URL to navigate to
   */
  href?: string
  /**
   * Optional click handler
   */
  onClick?: (e: React.MouseEvent) => void
}

// ... existing props interface ...
export interface NativeNestedListProps {
  items: ListItem[]
  activeId?: string
  onItemClick?: (item: ListItem) => void
  size?: "sm" | "md" | "lg"
  showExpandIcon?: boolean
  defaultExpanded?: boolean
  className?: string
  indentSize?: number
}

const sizeVariants = {
  sm: "h-8 text-xs px-2",
  md: "h-10 text-sm px-3",
  lg: "h-12 text-base px-4",
}

const iconSizeVariants = {
  sm: "h-3 w-3",
  md: "h-4 w-4",
  lg: "h-5 w-5",
}

interface NestedItemProps {
  item: ListItem
  level: number
  activeId?: string
  onItemClick?: (item: ListItem) => void
  size: "sm" | "md" | "lg"
  showExpandIcon: boolean
  defaultExpanded: boolean
  indentSize: number
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
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)
  const hasChildren = item.children && item.children.length > 0
  const isActive = activeId === item.id

  const handleClick = (e: React.MouseEvent) => {
    if (hasChildren) {
      e.preventDefault()
      setIsExpanded(!isExpanded)
    }
    onItemClick?.(item)
    item.onClick?.(e)
  }

  const Comp = item.href ? "a" : "span"
  const props = item.href ? { href: item.href } : {}

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
        <motion.div whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
          <Button
            variant="ghost"
            size="default"
            asChild={!!item.href}
            className={cn(
              sizeVariants[size],
              "w-full justify-start gap-2 relative overflow-hidden rounded-md",
              isActive && "font-medium bg-accent/30",
            )}
            onClick={handleClick}
          >
            <Comp className="flex items-center gap-2" {...props}>
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
              {showExpandIcon && !hasChildren && <div className={cn(iconSizeVariants[size], "flex-shrink-0")} />}
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
            </Comp>
          </Button>
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
  )
}

export function NativeNestedList({
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
  )
}
7:T842,"use client"

import {
  type ListItem,
  NativeNestedListBaseUI,
} from "@/components/native/base-ui/native-nested-list-baseui"
import { File, Folder, FolderOpen, Globe, Image, MoreHorizontal, MousePointerClick } from "lucide-react"

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
                e.stopPropagation()
                alert("Clicked!")
            },
        }
    ]
  },
]

export function NativeNestedListBaseUIDemo() {
  return (
    <div className="w-full max-w-sm border rounded-lg p-4 bg-background">
      <NativeNestedListBaseUI items={items} />
    </div>
  )
}
8:T81f,"use client"

import {
  type ListItem,
  NativeNestedList,
} from "../native-nested-list-shadcnui"
import { File, Folder, FolderOpen, Globe, Image, MoreHorizontal, MousePointerClick } from "lucide-react"

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
                e.stopPropagation()
                console.log("Clicked!")
            },
        }
    ]
  },
]

export function NativeNestedListDemo() {
  return (
    <div className="w-full max-w-sm border rounded-lg p-4 bg-background">
      <NativeNestedList items={items} />
    </div>
  )
}
0:{"buildId":"bFBIq5AO28jMw9-shWxSc","rsc":["$","$1","c",{"children":[["$","$L2",null,{"code":"$3","relatedComponents":[{"id":"default","name":"Default","description":"Standard nested list information","component":"$4","code":"<NativeNestedList\n  items={[\n    {\n      id: \"1\",\n      label: \"Documents\",\n      icon: <Folder className=\"h-4 w-4\" />,\n      children: [\n        { id: \"1-1\", label: \"Project Specs\", icon: <File className=\"h-4 w-4\" /> },\n      ],\n    },\n  ]}\n/>"}],"variantCodes":{"default":"<NativeNestedList\n  items={[\n    {\n      id: \"1\",\n      label: \"Documents\",\n      icon: <Folder className=\"h-4 w-4\" />,\n      children: [\n        { id: \"1-1\", label: \"Project Specs\", icon: <File className=\"h-4 w-4\" /> },\n      ],\n    },\n  ]}\n/>"},"baseId":"native-nested-list","baseuiCode":"$5","shadcnuiCode":"$6","baseuiDemoCode":"$7","shadcnuiDemoCode":"$8"}],["$L9","$La","$Lb"],"$Lc"]}],"loading":null,"isPartial":false}
9:["$","script","script-0",{"src":"/_next/static/chunks/caa50e77cf52fdaa.js","async":true}]
a:["$","script","script-1",{"src":"/_next/static/chunks/e0bc9c3a4105a6fe.js","async":true}]
b:["$","script","script-2",{"src":"/_next/static/chunks/48913bc585f72fa4.js","async":true}]
c:["$","$Ld",null,{"children":["$","$e",null,{"name":"Next.MetadataOutlet","children":"$@f"}]}]
f:null
