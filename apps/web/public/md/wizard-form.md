---
title: Wizard Form
description: Multi-step wizard form with animated transitions, validation, and progress tracking
component: true
---

```tsx
"use client"

import * as React from "react"

import { WizardForm } from "@/components/forms/wizard-form.tsx"

export function WizardFormDemo() {
  return (
    <WizardForm />
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
npx shadcn@latest add @uitripled/wizard-form
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Add the required components to your project.</Step>

The `Wizard Form` component uses the following components. Make sure you have them installed in your project.

- button
- input
- label

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="wizard-form" title="@/components/forms/wizard-form.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { WizardForm } from "@/components/forms/wizard-form.tsx"
```

```tsx showLineNumbers
<WizardForm />
```

## Component Details

- **Category**: forms
- **Tags**: form, wizard, multi-step, validation, progress, animated

### Technical Specifications

**Dependencies**:
- `framer-motion`
- `lucide-react`
- `react`

**UI Components**:
- button
- input
- label

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

import { WizardForm } from "@/components/forms/wizard-form.tsx"

export function BasicExample() {
  return (
    <WizardForm />
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

- [button](/docs/components/button)
- [input](/docs/components/input)
- [label](/docs/components/label)
