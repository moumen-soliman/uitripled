---
title: Messenger
description: Glassmorphism messenger workspace with accessible motion and quick replies
component: true
---

```tsx
"use client"

import * as React from "react"

import { Messenger } from "@/components/components/chat/messenger.tsx"

export function MessengerDemo() {
  return (
    <Messenger />
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
npx shadcn@latest add @uitripled/messenger
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Add the required components to your project.</Step>

The `Messenger` component uses the following components. Make sure you have them installed in your project.

- avatar
- badge
- button
- input
- textarea

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="messenger" title="@/components/components/chat/messenger.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { Messenger } from "@/components/components/chat/messenger.tsx"
```

```tsx showLineNumbers
<Messenger />
```

## Component Details

- **Category**: components
- **Tags**: chat, messenger, communication, glassmorphism, shadcn

### Technical Specifications

**Dependencies**:
- `framer-motion`
- `lucide-react`
- `react`

**UI Components**:
- avatar
- badge
- button
- input
- textarea

This component uses **Framer Motion** for animations and motion effects.

This component is built on top of **shadcn/ui** component primitives.

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

import { Messenger } from "@/components/components/chat/messenger.tsx"

export function BasicExample() {
  return (
    <Messenger />
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

- [avatar](/docs/components/avatar)
- [badge](/docs/components/badge)
- [button](/docs/components/button)
- [input](/docs/components/input)
- [textarea](/docs/components/textarea)
