---
name: feedback-preserve-visual-identity
description: When refining components for a11y/polish, do not change brand colors, element placement, or the component's designed look
metadata:
  type: feedback
---

While refining uitripled components (design-engineering passes over shadcn/baseui variants), the user rejected two changes that altered the designed look: bumping `green-500` to `green-600` for contrast, and letting the image-checkbox check badge overhang the image corner.

**Why:** The components' visual identity (colors, badge positions, shapes) is the product — accessibility and polish fixes must not change how the component reads visually. "Don't change context."

**How to apply:** Fix semantics, keyboard support, focus rings, reduced motion, and transitions freely — but keep original brand colors (even if contrast is borderline), keep decorative elements inside their designed bounds, and keep shapes fully intact (e.g., badges always fully rounded, never clipped or overhanging). Flag contrast concerns in the summary instead of silently changing colors.
