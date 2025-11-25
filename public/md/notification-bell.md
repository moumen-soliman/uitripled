# Notification Bell

## Overview
Bell icon that gently swings when new notification appears",
    category: "microinteractions

## Component Details

- **ID**: `notification-bell`
- **Category**: components
- **Tags**: slider, drag, confirm, interactive


## Technical Specifications

### Dependencies
**NPM Dependencies**:
- framer-motion
- lucide-react
- react


- **Framer Motion**: Yes (for animations and motion effects)


### Key Imports
```typescript
import { useState } from "react";
import { motion, PanInfo, useMotionValue, useTransform } from "framer-motion";
import { Check } from "lucide-react";
```


### Component Features
- **State Management**: Uses React hooks (useState/useReducer) for component state

- **Animations**: Contains motion animations powered by Framer Motion
- **Props**: Accepts custom props for configuration and customization



## Usage Context

This component is part of the UI TripleD component library, a collection of production-ready motion components built with Framer Motion, shadcn/ui, and Tailwind CSS.

### Design Philosophy
- **Production-ready**: Fully functional, tested, and ready for production use
- **Customizable**: Can be adapted to different design systems and brand guidelines
- **Accessible**: Follows WCAG accessibility best practices
- **Performant**: Optimized for smooth animations and interactions without performance penalties
- **Modern**: Built with latest React patterns and TypeScript

## Integration Notes


**Framer Motion Required**: This component uses Framer Motion for animations. Ensure framer-motion is installed: npm install framer-motion

## File Location

`@/components/motion-core/drag-to-confirm-slider.tsx`

## Code Structure

The component is implemented as a React functional component using TypeScript. It follows modern React patterns including:
- Functional components with hooks
- TypeScript for type safety
- Tailwind CSS for styling
- Framer Motion for animations (where applicable)


## Animation Details

This component includes animations powered by Framer Motion. The animations are designed to:
- Provide smooth, natural-feeling transitions
- Enhance user experience without being distracting
- Maintain 60fps performance
- Support reduced motion preferences

Animation timing and easing can typically be customized through props or CSS variables.


## Best Practices

1. **Styling**: The component uses Tailwind CSS for styling. Customize colors, spacing, and other design tokens through Tailwind classes or CSS variables.

2. **Theming**: Supports dark/light mode through CSS variables defined in your theme configuration. Ensure your globals.css includes the necessary CSS variables.

3. **Accessibility**:
   - Ensure proper ARIA labels are maintained when customizing
   - Test keyboard navigation
   - Verify screen reader compatibility
   - Support reduced motion preferences

4. **Performance**:
   - The component is optimized for performance
   - Consider lazy loading if used in large lists or below-the-fold content
   - Use React.memo if the component is re-rendered frequently

5. **Customization**:
   - Props allow for customization without modifying source code
   - Tailwind classes can be extended or overridden
   - Animation parameters can be adjusted through props

## AI Agent Notes

### When to Use This Component
This component is suitable for:
- Building modern, interactive web applications
- Creating engaging user interfaces with smooth animations
- Implementing accessible UI patterns
- Developing production-ready features quickly

### Implementation Considerations
When integrating this component, consider:
1. **Dependencies**: Ensure all required dependencies are installed (framer-motion, lucide-react, react)
2. **Setup**: No additional setup required
3. **Props**: Review the props interface for customization options
4. **Styling**: Verify your Tailwind configuration matches the component's requirements
5. **Accessibility**: Test with keyboard navigation and screen readers
6. **Performance**: Monitor performance impact, especially if using multiple instances

### Common Use Cases
- Interactive UI elements
- Form components
- Navigation elements
- Data display components

### Troubleshooting
- If animations don't work, verify Framer Motion is installed
- If styles look incorrect, check Tailwind configuration
- If shadcn components are missing, install them via npx shadcn-ui@latest add [component-name]
- For TypeScript errors, ensure all types are properly imported
