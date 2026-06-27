---
title: Native Action Dropdown
description: A click-driven action picker whose multi-level submenu opens beside the row, jumps straight to the selected item, and drills in place with an animated breadcrumb at a fixed width.
component: true
---

```tsx
"use client"

import * as React from "react"

import { NativeActionDropdown } from "@uitripled/react-shadcn/src/components/native/native-action-dropdown-shadcnui.tsx"

export function NativeActionDropdownDemo() {
  return (
    <NativeActionDropdown />
  )
}
```

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add @uitripled/native-action-dropdown-shadcnui
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="native-action-dropdown-shadcnui" title="@uitripled/react-shadcn/src/components/native/native-action-dropdown-shadcnui.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { NativeActionDropdown } from "@uitripled/react-shadcn/src/components/native/native-action-dropdown-shadcnui.tsx"
```

```tsx showLineNumbers
<NativeActionDropdown />
```

## Component Details

- **Category**: native


### Technical Specifications

**Dependencies**:
- `framer-motion`
- `react`

This component uses **Framer Motion** for animations and motion effects.

## Customization

This component can be customized by modifying the following:

- **Styling**: The component uses Tailwind CSS for styling. Customize colors, spacing, and other design tokens through Tailwind classes.
- **Props**: Pass custom props to configure the component's behavior and appearance.
- **Variants**: Create custom variants by extending the component's base styles.

## Accessibility

The component follows accessibility best practices:

- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Examples

### Basic Example

```tsx
"use client"

import * as React from "react"

import { NativeActionDropdown } from "@uitripled/react-shadcn/src/components/native/native-action-dropdown-shadcnui.tsx"

export function BasicExample() {
  return (
    <NativeActionDropdown />
  )
}
```

## API Reference

This component is part of the UI TripleD component library, a collection of production-ready components built with Framer Motion, shadcn/ui, and Tailwind CSS.

## Best Practices

1. **Performance**: Consider lazy loading if used in large lists or below-the-fold content.
2. **Theming**: Ensure your theme configuration includes the necessary CSS variables.
3. **Testing**: Test keyboard navigation and screen reader compatibility.
4. **Customization**: Use props for configuration rather than modifying source code.

## Related Components

No related components.
