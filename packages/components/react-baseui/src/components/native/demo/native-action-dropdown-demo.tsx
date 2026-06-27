"use client";

import {
  type ActionDropdownNode,
  NativeActionDropdownBaseUI,
} from "../native-action-dropdown-baseui";

const actionModes: ActionDropdownNode[] = [
  {
    id: "design-review",
    name: "Design review",
    summary: "Balanced UI critique",
    detail: "Checks hierarchy, spacing, contrast, motion, and product clarity.",
    meta: "Best default",
    group: "Suggested",
  },
  {
    id: "quick-draft",
    name: "Quick draft",
    summary: "Fast component pass",
    detail: "Produces a smaller, shippable idea with fewer edge-case notes.",
    meta: "Fast",
    group: "Suggested",
  },
  {
    id: "deep-audit",
    name: "Deep audit",
    detail: "Detailed interaction QA across multiple areas.",
    meta: "3 areas",
    group: "More modes",
    children: [
      {
        id: "audit-a11y",
        name: "Accessibility",
        detail: "Keyboard, focus, and ARIA.",
        children: [
          {
            id: "a11y-keyboard",
            name: "Keyboard flow",
            detail: "Tab order and shortcuts.",
            children: [
              {
                id: "kbd-tab",
                name: "Tab order",
                detail: "Logical sequence of focus stops.",
              },
              {
                id: "kbd-shortcuts",
                name: "Shortcuts",
                detail: "Discoverable key bindings.",
                children: [
                  { id: "kbd-global", name: "Global", detail: "App-wide bindings." },
                  {
                    id: "kbd-scoped",
                    name: "Scoped",
                    detail: "Context-specific bindings.",
                  },
                ],
              },
            ],
          },
          {
            id: "a11y-focus",
            name: "Focus order",
            detail: "Visible focus and traps.",
            children: [
              {
                id: "focus-rings",
                name: "Focus rings",
                detail: "Visible focus indicators.",
              },
              {
                id: "focus-traps",
                name: "Focus traps",
                detail: "Containment inside overlays.",
              },
            ],
          },
          { id: "a11y-aria", name: "ARIA roles", detail: "Roles, names, and states." },
          {
            id: "a11y-contrast",
            name: "Color contrast",
            detail: "WCAG contrast ratios.",
          },
        ],
      },
      {
        id: "audit-perf",
        name: "Performance",
        detail: "Re-renders and runtime cost.",
        children: [
          {
            id: "perf-render",
            name: "Render cost",
            detail: "Re-render frequency and depth.",
          },
          {
            id: "perf-bundle",
            name: "Bundle size",
            detail: "Shipped JavaScript weight.",
            children: [
              {
                id: "bundle-split",
                name: "Code splitting",
                detail: "Route and component chunks.",
              },
              {
                id: "bundle-shake",
                name: "Tree shaking",
                detail: "Dead-code elimination.",
              },
            ],
          },
          {
            id: "perf-runtime",
            name: "Runtime profiling",
            detail: "Flame charts and hot paths.",
          },
        ],
      },
      {
        id: "audit-responsive",
        name: "Responsive",
        detail: "Breakpoints and touch.",
        children: [
          { id: "resp-break", name: "Breakpoints", detail: "Layout at each size." },
          { id: "resp-touch", name: "Touch targets", detail: "Hit-area sizing." },
          {
            id: "resp-container",
            name: "Container queries",
            detail: "Component-driven layout.",
          },
        ],
      },
    ],
  },
  {
    id: "ship-check",
    name: "Ship check",
    detail: "Final release scan before publishing.",
    meta: "2 stages",
    group: "More modes",
    children: [
      {
        id: "ship-premerge",
        name: "Pre-merge",
        detail: "Checks before merging.",
        children: [
          { id: "pre-lint", name: "Lint & types", detail: "Static analysis gate." },
          { id: "pre-visual", name: "Visual diff", detail: "Snapshot comparison." },
        ],
      },
      {
        id: "ship-prerelease",
        name: "Pre-release",
        detail: "Final pre-publish pass.",
        children: [
          {
            id: "rel-changelog",
            name: "Changelog",
            detail: "Summarize user-facing changes.",
          },
          {
            id: "rel-version",
            name: "Version bump",
            detail: "Choose the semver increment.",
            children: [
              { id: "ver-patch", name: "Patch", detail: "Backward-compatible fixes." },
              {
                id: "ver-minor",
                name: "Minor",
                detail: "Backward-compatible features.",
              },
              { id: "ver-major", name: "Major", detail: "Breaking changes." },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "code-health",
    name: "Code health",
    detail: "Maintainability metrics.",
    meta: "New",
    group: "More modes",
    children: [
      {
        id: "health-complexity",
        name: "Complexity",
        detail: "Function and module complexity.",
        children: [
          { id: "cx-cyclomatic", name: "Cyclomatic", detail: "Branch count per unit." },
          {
            id: "cx-cognitive",
            name: "Cognitive",
            detail: "Human-perceived difficulty.",
          },
        ],
      },
      { id: "health-duplication", name: "Duplication", detail: "Copy-paste detection." },
      {
        id: "health-coverage",
        name: "Coverage",
        detail: "Test coverage breakdown.",
        children: [
          { id: "cov-unit", name: "Unit", detail: "Isolated logic tests." },
          {
            id: "cov-integration",
            name: "Integration",
            detail: "Cross-module tests.",
          },
          { id: "cov-e2e", name: "End-to-end", detail: "Full-flow tests." },
        ],
      },
    ],
  },
];

export function NativeActionDropdownDemo() {
  return (
    <div className="flex min-h-[460px] w-full items-start justify-center bg-background p-4 pt-10">
      <NativeActionDropdownBaseUI
        items={actionModes}
        defaultValue="kbd-tab"
        label="Choose action mode"
        description="Click a mode with a chevron to open its submenu beside it."
      />
    </div>
  );
}
