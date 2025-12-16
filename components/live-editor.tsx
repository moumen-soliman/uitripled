"use client";

import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from "@codesandbox/sandpack-react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "./ui/button";

type LiveEditorProps = {
  initialCode: string;
  Component?: React.ComponentType<any>;
  onRefresh?: () => void;
  refreshKey?: number;
};

export function LiveEditor({ initialCode }: LiveEditorProps) {
  const [code, setCode] = useState(initialCode);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setCode(initialCode);
  };

  // Prepare code with replaced imports
  const processedCode = useMemo(() => {
    let processed = code
      .replace(/@\/components\/ui\//g, "./components/ui/")
      .replace(/@\/lib\//g, "./lib/");

    // Ensure there's a default export
    if (!processed.includes("export default")) {
      // If there's a named export, convert it to default
      const namedExportMatch = processed.match(
        /export\s+(function|const)\s+(\w+)/
      );
      if (namedExportMatch) {
        const componentName = namedExportMatch[2];
        processed = processed.replace(/export\s+(function|const)\s+/, "$1 ");
        processed += `\n\nexport default ${componentName}`;
      }
    }

    return processed;
  }, [code]);

  // Prepare the files for Sandpack
  const files = {
    "/App.tsx": {
      code: processedCode,
      active: true,
    },
    "/lib/utils.ts": {
      code: `import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs))
}`,
    },
    "/components/ui/card.tsx": {
      code: `import React from 'react'
import { cn } from '../../lib/utils'

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-lg border shadow-sm',
        className
      )}
      style={{
        borderColor: 'rgb(var(--border))',
        backgroundColor: 'rgb(var(--card-bg))',
        color: 'rgb(var(--foreground))'
      }}
      {...props}
    />
  )
)
Card.displayName = 'Card'

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
  )
)
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn('text-2xl font-semibold leading-none tracking-tight', className)} {...props} />
  )
)
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-sm', className)} style={{ color: 'rgb(var(--muted-foreground))' }} {...props} />
  )
)
CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
  )
)
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />
  )
)
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }`,
    },
    "/components/ui/button.tsx": {
      code: `import React from 'react'
import { cn } from '../../lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

    const variants = {
      default: 'bg-primary text-primary-foreground hover:bg-primary/90',
      destructive: 'bg-red-500 text-white hover:bg-red-600',
      outline: 'border hover:bg-slate-100',
      secondary: 'bg-slate-200 text-slate-900 hover:bg-slate-300',
      ghost: 'hover:bg-slate-100',
      link: 'text-slate-700 underline-offset-4 hover:underline',
    }

    const sizes = {
      default: 'h-10 px-4 py-2',
      sm: 'h-9 rounded-md px-3',
      lg: 'h-11 rounded-md px-8',
      icon: 'h-10 w-10',
    }

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button }`,
    },
    "/components/ui/dropdown-menu.tsx": {
      code: `'use client'

import * as React from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { Check, ChevronRight, Circle } from 'lucide-react'

import { cn } from '../../lib/utils'

const DropdownMenu = DropdownMenuPrimitive.Root
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
const DropdownMenuGroup = DropdownMenuPrimitive.Group
const DropdownMenuPortal = DropdownMenuPrimitive.Portal
const DropdownMenuSub = DropdownMenuPrimitive.Sub
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent',
      inset && 'pl-8',
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      'z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      className
    )}
    {...props}
  />
))
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName =
  DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      'px-2 py-1.5 text-sm font-semibold',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-muted', className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName =
  DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn('ml-auto text-xs tracking-widest opacity-60', className)}
      {...props}
    />
  )
}
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut'

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}`,
    },
    "/components/ui/input.tsx": {
      code: `import React from 'react'
import { cn } from '../../lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-700 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        style={{
          borderColor: 'rgb(var(--border))',
          backgroundColor: 'rgb(var(--card-bg))',
          color: 'rgb(var(--foreground))'
        }}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input }`,
    },
    "/components/ui/badge.tsx": {
      code: `import React from 'react'
import { cn } from '../../lib/utils'

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline'
}

function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  const variants = {
    default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'border-transparent bg-slate-200 text-slate-900 hover:bg-slate-300',
    destructive: 'border-transparent bg-red-500 text-white hover:bg-red-600',
    outline: 'border-slate-300',
  }

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        variants[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge }`,
    },
    "/components/ui/tabs.tsx": {
      code: `import React from 'react'
import { cn } from '../../lib/utils'

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ className, children, defaultValue, value, onValueChange, ...props }, ref) => {
    const [activeValue, setActiveValue] = React.useState(value || defaultValue || '')

    const handleValueChange = (newValue: string) => {
      setActiveValue(newValue)
      onValueChange?.(newValue)
    }

    return (
      <div ref={ref} className={className} {...props}>
        {React.Children.map(children, child => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as any, { activeValue, onValueChange: handleValueChange })
          }
          return child
        })}
      </div>
    )
  }
)
Tabs.displayName = 'Tabs'

const TabsList = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { activeValue?: string }>(
  ({ className, children, activeValue, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
        className
      )}
      {...props}
    >
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as any, { activeValue, ...props })
        }
        return child
      })}
    </div>
  )
)
TabsList.displayName = 'TabsList'

interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
  activeValue?: string
  onValueChange?: (value: string) => void
}

const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, value, activeValue, onValueChange, ...props }, ref) => {
    const isActive = activeValue === value

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          isActive && 'bg-white text-gray-950 shadow-sm dark:bg-gray-950 dark:text-gray-50',
          className
        )}
        onClick={() => onValueChange?.(value)}
        {...props}
      />
    )
  }
)
TabsTrigger.displayName = 'TabsTrigger'

interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
  activeValue?: string
}

const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, value, activeValue, ...props }, ref) => {
    if (activeValue !== value) return null

    return (
      <div
        ref={ref}
        className={cn(
          'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2',
          className
        )}
        {...props}
      />
    )
  }
)
TabsContent.displayName = 'TabsContent'

export { Tabs, TabsList, TabsTrigger, TabsContent }`,
    },
    "/components/ui/scroll-area.tsx": {
      code: `import React from 'react'
import { cn } from '../../lib/utils'

const ScrollArea = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('relative overflow-hidden', className)}
    {...props}
  >
    <div className="h-full w-full overflow-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-muted [&::-webkit-scrollbar-track]:bg-transparent">
      {children}
    </div>
  </div>
))
ScrollArea.displayName = 'ScrollArea'

const ScrollBar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex touch-none select-none transition-colors',
      className
    )}
    {...props}
  />
))
ScrollBar.displayName = 'ScrollBar'

export { ScrollArea, ScrollBar }`,
    },
    "/components/ui/textarea.tsx": {
      code: `import * as React from 'react'
import { cn } from '../../lib/utils'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = 'Textarea'

export { Textarea }`,
    },
    "/components/ui/label.tsx": {
      code: `import * as React from 'react'
import { cn } from '../../lib/utils'

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
          className
        )}
        {...props}
      />
    )
  }
)
Label.displayName = 'Label'

export { Label }`,
    },
    "/components/ui/dialog.tsx": {
      code: `import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { cn } from '../../lib/utils'

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
        className
      )}
      style={{
        borderColor: 'rgb(var(--border))',
        backgroundColor: 'rgb(var(--card-bg))',
        color: 'rgb(var(--foreground))'
      }}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col space-y-1.5 text-center sm:text-left',
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = 'DialogHeader'

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = 'DialogFooter'

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      'text-lg font-semibold leading-none tracking-tight',
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    style={{ color: 'rgb(var(--muted-foreground))' }}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}`,
    },
    "/components/ui/checkbox.tsx": {
      code: `import * as React from 'react'
import { cn } from '../../lib/utils'

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        type="checkbox"
        className={cn(
          'peer h-4 w-4 shrink-0 rounded-sm border border-input ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Checkbox.displayName = 'Checkbox'

export { Checkbox }`,
    },
    "/components/ui/switch.tsx": {
      code: `import * as React from 'react'
  import { cn } from '../../lib/utils'

  export interface SwitchProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}

  const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
    ({ className, ...props }, ref) => {
      return (
        <input
          type="checkbox"
          className={cn(
            'peer h-4 w-4 shrink-0 rounded-sm border border-input ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
            className
          )}
          ref={ref}
          {...props}
        />
      )
    }
  )
  Switch.displayName = 'Switch'

  export { Switch }`,
    },
    "/components/ui/avatar.tsx": {
      code: `import * as React from 'react'
import { cn } from '../../lib/utils'

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('relative flex shrink-0 overflow-hidden rounded-full', className)}
        {...props}
      />
    )
  }
)
Avatar.displayName = 'Avatar'

const AvatarFallback = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex h-full w-full items-center justify-center rounded-full bg-muted', className)}
        {...props}
      />
    )
  }
)
AvatarFallback.displayName = 'AvatarFallback'

const AvatarImage = React.forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement>>(
  ({ className, ...props }, ref) => {
    return (
      <img
        ref={ref}
        className={cn('aspect-square h-full w-full', className)}
        {...props}
      />
    )
  }
)
AvatarImage.displayName = 'AvatarImage'

export { Avatar, AvatarFallback, AvatarImage }`,
    },
    "/components/ui/separator.tsx": {
      code: `"use client"

import * as React from 'react'
import * as SeparatorPrimitive from '@radix-ui/react-separator'
import { cn } from '../../lib/utils'

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = 'horizontal', decorative = true, ...props },
    ref,
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'shrink-0 bg-border',
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
        className,
      )}
      {...props}
    />
  ),
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }`,
    },
    "/components/ui/select.tsx": {
      code: ` import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

const SelectGroup = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Group>
>(
  ({ className, ...props }, ref) => (
    <SelectPrimitive.Group
      ref={ref}
      className={cn("flex flex-col gap-1", className)}
      {...props}
    />
  ),
)
SelectGroup.displayName = SelectPrimitive.Group.displayName

const SelectValue = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Value>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Value>
>(
  ({ className, children, ...props }, ref) => (
    <SelectPrimitive.Value
      ref={ref}
      className={cn("text-sm text-foreground", className)}
      {...props}
    >
      {children}
      <SelectPrimitive.Indicator>
        <ChevronDownIcon className="h-4 w-4 opacity-50" />
      </SelectPrimitive.Indicator>
    </SelectPrimitive.Value>
  ),
)
SelectValue.displayName = SelectPrimitive.Value.displayName

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(
  ({ className, children, ...props }, ref) => (
    <SelectPrimitive.Trigger
      ref={ref}
      className={cn("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className)}
      {...props}
    >
      {children}
      <SelectPrimitive.Indicator>
        <ChevronDownIcon className="size-4 opacity-50" />
      </SelectPrimitive.Indicator>
    </SelectPrimitive.Trigger>
  )
)
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(
  ({ className, children, ...props }, ref) => (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        ref={ref}
        className={cn("relative z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className)}
        {...props}
      >
        {children}
        <SelectPrimitive.ScrollUpButton>
          <ChevronUpIcon className="size-4" />
        </SelectPrimitive.ScrollUpButton>
        <SelectPrimitive.Viewport>
          {children}
        </SelectPrimitive.Viewport>
        <SelectPrimitive.ScrollDownButton>
          <ChevronDownIcon className="size-4" />
        </SelectPrimitive.ScrollDownButton>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
)
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(
  ({ className, children, ...props }, ref) => (
    <SelectPrimitive.Item
      ref={ref}
      className={cn("relative flex w-full cursor-default select-none items-center gap-2 rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground", className)}
      {...props}
    >
      <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
)
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
    />
  )
)
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export { Select, SelectGroup, SelectValue, SelectTrigger, SelectContent, SelectItem, SelectSeparator }`,
    },
    "/styles.css": {
      code: `@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: 0 0 0;
  --foreground: 250 250 250;
  --card: 23 23 23;
  --card-bg: 23 23 23;
  --card-foreground: 250 250 250;
  --popover: 23 23 23;
  --popover-foreground: 250 250 250;
  --primary: 250 250 250;
  --primary-foreground: 0 0 0;
  --secondary: 48 48 48;
  --secondary-foreground: 250 250 250;
  --muted: 48 48 48;
  --muted-foreground: 161 161 170;
  --accent: 48 48 48;
  --accent-foreground: 250 250 250;
  --destructive: 239 68 68;
  --destructive-foreground: 250 250 250;
  --border: 48 48 48;
  --input: 48 48 48;
  --ring: 212 212 216;
  --radius: 0.5rem;
  --glass-bg: 0 0% 5% / 0.7;
  --glass-border: 0 0% 100% / 0.1;
  --gradient-subtle: linear-gradient(135deg, hsl(0 0% 8%), hsl(0 0% 5%));
  --shadow-glass: 0 8px 32px 0 hsl(0 0% 0% / 0.5);
}

body {
  margin: 0;
  padding: 20px;
  background: rgb(var(--background));
  color: rgb(var(--foreground));
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  border-color: rgb(var(--border));
}

/* Utility classes for text gradients and other effects */
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}

/* Custom gradient backgrounds using CSS variables */
.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}

.bg-gradient-to-b {
  background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
}

.bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}

.bg-gradient-to-t {
  background-image: linear-gradient(to top, var(--tw-gradient-stops));
}

/* Primary color gradients */
.from-primary {
  --tw-gradient-from: rgb(var(--primary));
  --tw-gradient-to: rgb(var(--primary) / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.to-primary {
  --tw-gradient-to: rgb(var(--primary));
}

.via-primary\\/50 {
  --tw-gradient-to: rgb(var(--primary) / 0);
  --tw-gradient-stops: var(--tw-gradient-from), rgb(var(--primary) / 0.5), var(--tw-gradient-to);
}

.to-primary\\/5 {
  --tw-gradient-to: rgb(var(--primary) / 0.05);
}

.to-primary\\/20 {
  --tw-gradient-to: rgb(var(--primary) / 0.2);
}

.to-primary\\/60 {
  --tw-gradient-to: rgb(var(--primary) / 0.6);
}

.from-primary\\/5 {
  --tw-gradient-from: rgb(var(--primary) / 0.05);
  --tw-gradient-to: rgb(var(--primary) / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.via-primary\\/5 {
  --tw-gradient-to: rgb(var(--primary) / 0);
  --tw-gradient-stops: var(--tw-gradient-from), rgb(var(--primary) / 0.05), var(--tw-gradient-to);
}

.from-primary\\/20 {
  --tw-gradient-from: rgb(var(--primary) / 0.2);
  --tw-gradient-to: rgb(var(--primary) / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.to-primary\\/5 {
  --tw-gradient-to: rgb(var(--primary) / 0.05);
}

.from-primary\\/10 {
  --tw-gradient-from: rgb(var(--primary) / 0.1);
  --tw-gradient-to: rgb(var(--primary) / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

/* Foreground gradients for text */
.from-foreground {
  --tw-gradient-from: rgb(var(--foreground));
  --tw-gradient-to: rgb(var(--foreground) / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.to-foreground\\/70 {
  --tw-gradient-to: rgb(var(--foreground) / 0.7);
}

.from-card {
  --tw-gradient-from: rgb(var(--card));
  --tw-gradient-to: rgb(var(--card) / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.to-card\\/50 {
  --tw-gradient-to: rgb(var(--card) / 0.5);
}

.via-card\\/60 {
  --tw-gradient-to: rgb(var(--card) / 0);
  --tw-gradient-stops: var(--tw-gradient-from), rgb(var(--card) / 0.6), var(--tw-gradient-to);
}

/* Purple color support for gradients */
.to-purple-500\\/10 {
  --tw-gradient-to: rgb(168 85 247 / 0.1);
}

/* Background gradients */
.from-background {
  --tw-gradient-from: rgb(var(--background));
  --tw-gradient-to: rgb(var(--background) / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.to-background {
  --tw-gradient-to: rgb(var(--background));
}

.via-background {
  --tw-gradient-to: rgb(var(--background) / 0);
  --tw-gradient-stops: var(--tw-gradient-from), rgb(var(--background)), var(--tw-gradient-to);
}

/* Muted color support */
.from-muted\\/30 {
  --tw-gradient-from: rgb(var(--muted) / 0.3);
  --tw-gradient-to: rgb(var(--muted) / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.to-muted\\/30 {
  --tw-gradient-to: rgb(var(--muted) / 0.3);
}

.from-muted {
  --tw-gradient-from: rgb(var(--muted));
  --tw-gradient-to: rgb(var(--muted) / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

/* Transparent gradient stops */
.to-transparent {
  --tw-gradient-to: transparent;
}

/* Text color utilities */
.text-foreground {
  color: rgb(var(--foreground));
}

.text-foreground\\/70 {
  color: rgb(var(--foreground) / 0.7);
}

.text-foreground\\/60 {
  color: rgb(var(--foreground) / 0.6);
}

.text-foreground\\/80 {
  color: rgb(var(--foreground) / 0.8);
}

.text-foreground\\/40 {
  color: rgb(var(--foreground) / 0.4);
}

.text-foreground\\/45 {
  color: rgb(var(--foreground) / 0.45);
}

.text-muted-foreground {
  color: rgb(var(--muted-foreground));
}

.text-primary-foreground {
  color: rgb(var(--primary-foreground));
}

/* Background color utilities */
.bg-background {
  background-color: rgb(var(--background));
}

.bg-background\\/45 {
  background-color: rgb(var(--background) / 0.45);
}

.bg-background\\/55 {
  background-color: rgb(var(--background) / 0.55);
}

.bg-background\\/60 {
  background-color: rgb(var(--background) / 0.6);
}

.bg-background\\/70 {
  background-color: rgb(var(--background) / 0.7);
}

.bg-background\\/80 {
  background-color: rgb(var(--background) / 0.8);
}

.bg-foreground {
  background-color: rgb(var(--foreground));
}

.bg-foreground\\/\\[0\\.035\\] {
  background-color: rgb(var(--foreground) / 0.035);
}

.bg-foreground\\/\\[0\\.025\\] {
  background-color: rgb(var(--foreground) / 0.025);
}

.bg-foreground\\/\\[0\\.05\\] {
  background-color: rgb(var(--foreground) / 0.05);
}

.bg-foreground\\/\\[0\\.04\\] {
  background-color: rgb(var(--foreground) / 0.04);
}

.bg-card {
  background-color: rgb(var(--card));
}

.bg-primary {
  background-color: rgb(var(--primary));
}

.bg-primary\\/20 {
  background-color: rgb(var(--primary) / 0.2);
}

.bg-primary\\/15 {
  background-color: rgb(var(--primary) / 0.15);
}

/* Border color utilities */
.border-border {
  border-color: rgb(var(--border));
}

.border-border\\/40 {
  border-color: rgb(var(--border) / 0.4);
}

.border-border\\/50 {
  border-color: rgb(var(--border) / 0.5);
}

.border-border\\/60 {
  border-color: rgb(var(--border) / 0.6);
}`,
    },
  };

  return (
    <div className="space-y-3 sm:space-y-4">
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 rounded-lg border bg-[var(--card-bg)] p-3 sm:p-4">
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <motion.span
              key={code}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="rounded-full bg-green-500 px-2 sm:px-3 py-1 text-xs font-medium text-white"
            >
              Live Compiling
            </motion.span>
            <span className="text-xs sm:text-sm text-[var(--foreground)]/60">
              {code.split("\n").length} lines • {code.length} chars
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="ghost"
            onClick={handleReset}
            className="flex-1 sm:flex-initial"
          >
            <RotateCcw className="mr-1 sm:mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Reset</span>
          </Button>
          <Button
            size="sm"
            variant="default"
            onClick={handleCopy}
            className="flex-1 sm:flex-initial"
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.div
                  key="check"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="flex items-center gap-1 sm:gap-2"
                >
                  <Check className="h-4 w-4" />
                  <span className="hidden sm:inline">Copied!</span>
                </motion.div>
              ) : (
                <motion.div
                  key="copy"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="flex items-center gap-1 sm:gap-2"
                >
                  <Copy className="h-4 w-4" />
                  <span className="hidden sm:inline">Copy Code</span>
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </div>
      </div>

      {/* Sandpack Editor & Preview */}
      <div className="overflow-hidden rounded-xl sm:rounded-2xl border shadow-xl">
        <SandpackProvider
          template="react-ts"
          theme="dark"
          files={files}
          className="bg-card"
          customSetup={{
            dependencies: {
              "framer-motion": "^11.0.0",
              "lucide-react": "^0.263.1",
              clsx: "^2.0.0",
              recharts: "3.4.1",
              "react-is": "^18.2.0",
              "tailwind-merge": "^2.0.0",
              "@radix-ui/react-dialog": "^1.0.5",
              "@radix-ui/react-dropdown-menu": "^2.1.16",
              "@radix-ui/react-tabs": "^1.1.13",
              "@radix-ui/react-scroll-area": "^1.1.0",
              "@radix-ui/react-tooltip": "^1.1.6",
              "@radix-ui/react-popover": "^1.1.4",
              "@radix-ui/react-toast": "^1.1.1",
              "@radix-ui/react-checkbox": "^1.1.2",
              "@radix-ui/react-radio-group": "^1.1.2",
              "@radix-ui/react-select": "^2.0.2",
              "@radix-ui/react-separator": "^1.0.2",
              "@radix-ui/react-slider": "^1.3.6",
              "@radix-ui/react-slot": "^1.2.3",
              "@radix-ui/react-switch": "^1.2.6",
              "@dnd-kit/core": "^6.3.1",
              "@dnd-kit/sortable": "^10.0.0",
              "@dnd-kit/utilities": "^3.2.2",
            },
          }}
          options={{
            externalResources: ["https://cdn.tailwindcss.com"],
            autorun: true,
            autoReload: true,
            recompileMode: "immediate",
            recompileDelay: 300,
          }}
        >
          <div className="sandpack-layout-wrapper">
            <SandpackLayout className="bg-card">
              <SandpackCodeEditor
                style={{ height: "400px", minHeight: "400px" }}
                showTabs={false}
                showLineNumbers={true}
                showInlineErrors={true}
                wrapContent={true}
                closableTabs={false}
                className="bg-card"
              />
              <SandpackPreview
                style={{
                  height: "400px",
                  minHeight: "400px",
                  backgroundColor: "rgb(var(--card-bg)) !important",
                }}
                className="bg-card"
                showOpenInCodeSandbox={false}
                showRefreshButton={true}
                actionsChildren={
                  <div className="flex items-center gap-2 px-2">
                    <span className="text-xs text-gray-600">
                      ⚡ Live Preview
                    </span>
                  </div>
                }
              />
            </SandpackLayout>
          </div>
        </SandpackProvider>
      </div>

      {/* Info Message */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-lg border border-border p-3 sm:p-4"
      >
        <div className="space-y-2">
          <p className="text-xs sm:text-sm text-muted-foreground">
            <strong className="">Live Compilation:</strong> Your code is
            compiled and executed in real-time in a sandboxed environment. All
            UI components (Card, Button, Input, Badge, Tabs) are available.
            Changes are reflected instantly!
          </p>
        </div>
      </motion.div>

      {/* Code Change Indicator */}
      {code !== initialCode && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-lg border border-amber-500/20 bg-amber-500/10 p-3"
        >
          <p className="text-xs text-amber-600 dark:text-amber-400">
            ⚠️ <strong>Code Modified:</strong> You&apos;ve made changes to the
            original code. Click &quot;Copy Code&quot; to save your changes, or
            &quot;Reset&quot; to restore the original.
          </p>
        </motion.div>
      )}
    </div>
  );
}
