---
title: Contact Form
description: Contact form section with animated inputs, validation, and form handling
component: true
---

```tsx
"use client"

import * as React from "react"

import { ContactForm } from "@/components/sections/shadcnui/contact-form-section.tsx"

export function ContactFormDemo() {
  return (
    <ContactForm />
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
npx shadcn@latest add @uitripled/contact-form-section
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Add the required components to your project.</Step>

The `Contact Form` component uses the following components. Make sure you have them installed in your project.

- button
- card
- input
- label
- textarea

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="contact-form-section" title="@/components/sections/shadcnui/contact-form-section.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { ContactForm } from "@/components/sections/shadcnui/contact-form-section.tsx"
```

```tsx showLineNumbers
<ContactForm />
```

## Component Details

- **Category**: blocks
- **Tags**: contact, form, inputs, validation, shadcn

### Technical Specifications

**Dependencies**:
- `framer-motion`
- `lucide-react`
- `react`

**UI Components**:
- button
- card
- input
- label
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

import { ContactForm } from "@/components/sections/shadcnui/contact-form-section.tsx"

export function BasicExample() {
  return (
    <ContactForm />
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
- [card](/docs/components/card)
- [input](/docs/components/input)
- [label](/docs/components/label)
- [textarea](/docs/components/textarea)
