module.exports = [
"[project]/apps/web/components/code-block.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CodeBlock",
    ()=>CodeBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$prism$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Prism$3e$__ = __turbopack_context__.i("[project]/node_modules/react-syntax-highlighter/dist/esm/prism.js [app-ssr] (ecmascript) <export default as Prism>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$styles$2f$prism$2f$vsc$2d$dark$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__vscDarkPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus.js [app-ssr] (ecmascript) <export default as vscDarkPlus>");
"use client";
;
;
;
;
;
;
const PrismSyntaxHighlighter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$prism$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Prism$3e$__["Prism"];
function CodeBlock({ code, language = "tsx" }) {
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleCopy = async ()=>{
        await navigator.clipboard.writeText(code || "");
        setCopied(true);
        setTimeout(()=>setCopied(false), 2000);
    };
    const displayCode = code === "dummy" ? `'use client'

import { motion } from 'framer-motion'

export function ScaleHoverButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className="rounded-lg bg-accent px-8 py-3 font-semibold text-white shadow-lg"
    >
      BUY NOW
    </motion.button>
  )
}` : code || "";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-lg border border-border bg-card",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between border-b border-border px-4 py-2.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-medium text-muted-foreground",
                            children: "TypeScript + React"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/code-block.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleCopy,
                            className: "flex items-center gap-1.5 rounded border border-border bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-ring hover:text-foreground",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                mode: "wait",
                                children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        scale: 0
                                    },
                                    animate: {
                                        scale: 1
                                    },
                                    exit: {
                                        scale: 0
                                    },
                                    className: "flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "h-3 w-3"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/components/code-block.tsx",
                                            lineNumber: 67,
                                            columnNumber: 19
                                        }, this),
                                        "Copied"
                                    ]
                                }, "check", true, {
                                    fileName: "[project]/apps/web/components/code-block.tsx",
                                    lineNumber: 60,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        scale: 0
                                    },
                                    animate: {
                                        scale: 1
                                    },
                                    exit: {
                                        scale: 0
                                    },
                                    className: "flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                            className: "h-3 w-3"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/components/code-block.tsx",
                                            lineNumber: 78,
                                            columnNumber: 19
                                        }, this),
                                        "Copy"
                                    ]
                                }, "copy", true, {
                                    fileName: "[project]/apps/web/components/code-block.tsx",
                                    lineNumber: 71,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/code-block.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/code-block.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/components/code-block.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-x-auto bg-card",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PrismSyntaxHighlighter, {
                        language: language,
                        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$styles$2f$prism$2f$vsc$2d$dark$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__vscDarkPlus$3e$__["vscDarkPlus"],
                        customStyle: {
                            margin: 0,
                            padding: "1rem",
                            fontSize: "0.75rem",
                            lineHeight: "1.5",
                            background: "transparent"
                        },
                        codeTagProps: {
                            style: {
                                fontFamily: "inherit"
                            }
                        },
                        children: displayCode
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/code-block.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/code-block.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/components/code-block.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/code-block.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/components/live-editor.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LiveEditor",
    ()=>LiveEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codesandbox$2f$sandpack$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@codesandbox/sandpack-react/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-ssr] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/ui/button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function LiveEditor({ initialCode }) {
    const [code, setCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialCode);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleCopy = async ()=>{
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(()=>setCopied(false), 2000);
    };
    const handleReset = ()=>{
        setCode(initialCode);
    };
    // Prepare code with replaced imports
    const processedCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let processed = code.replace(/@\/components\/ui\//g, "./components/ui/").replace(/@\/lib\//g, "./lib/");
        // Ensure there's a default export
        if (!processed.includes("export default")) {
            // If there's a named export, convert it to default
            const namedExportMatch = processed.match(/export\s+(function|const)\s+(\w+)/);
            if (namedExportMatch) {
                const componentName = namedExportMatch[2];
                processed = processed.replace(/export\s+(function|const)\s+/, "$1 ");
                processed += `\n\nexport default ${componentName}`;
            }
        }
        return processed;
    }, [
        code
    ]);
    // Prepare the files for Sandpack
    const files = {
        "/App.tsx": {
            code: processedCode,
            active: true
        },
        "/lib/utils.ts": {
            code: `import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs))
}`
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

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }`
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

export { Button }`
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
}`
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

export { Input }`
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

export { Badge }`
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

export { Tabs, TabsList, TabsTrigger, TabsContent }`
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

export { ScrollArea, ScrollBar }`
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

export { Textarea }`
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

export { Label }`
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
}`
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

export { Checkbox }`
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

  export { Switch }`
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

export { Avatar, AvatarFallback, AvatarImage }`
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

export { Separator }`
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

export { Select, SelectGroup, SelectValue, SelectTrigger, SelectContent, SelectItem, SelectSeparator }`
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
}`
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3 sm:space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 rounded-lg border bg-[var(--card-bg)] p-3 sm:p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 sm:gap-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                    initial: {
                                        scale: 0.8,
                                        opacity: 0
                                    },
                                    animate: {
                                        scale: 1,
                                        opacity: 1
                                    },
                                    className: "rounded-full bg-green-500 px-2 sm:px-3 py-1 text-xs font-medium text-white",
                                    children: "Live Compiling"
                                }, code, false, {
                                    fileName: "[project]/apps/web/components/live-editor.tsx",
                                    lineNumber: 1325,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs sm:text-sm text-[var(--foreground)]/60",
                                    children: [
                                        code.split("\n").length,
                                        " lines • ",
                                        code.length,
                                        " chars"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/components/live-editor.tsx",
                                    lineNumber: 1333,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/components/live-editor.tsx",
                            lineNumber: 1324,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/live-editor.tsx",
                        lineNumber: 1323,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                size: "sm",
                                variant: "ghost",
                                onClick: handleReset,
                                className: "flex-1 sm:flex-initial",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                        className: "mr-1 sm:mr-2 h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/live-editor.tsx",
                                        lineNumber: 1345,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden sm:inline",
                                        children: "Reset"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/live-editor.tsx",
                                        lineNumber: 1346,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/components/live-editor.tsx",
                                lineNumber: 1339,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                size: "sm",
                                variant: "default",
                                onClick: handleCopy,
                                className: "flex-1 sm:flex-initial",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    mode: "wait",
                                    children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            scale: 0
                                        },
                                        animate: {
                                            scale: 1
                                        },
                                        exit: {
                                            scale: 0
                                        },
                                        className: "flex items-center gap-1 sm:gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/components/live-editor.tsx",
                                                lineNumber: 1363,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "hidden sm:inline",
                                                children: "Copied!"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/components/live-editor.tsx",
                                                lineNumber: 1364,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, "check", true, {
                                        fileName: "[project]/apps/web/components/live-editor.tsx",
                                        lineNumber: 1356,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            scale: 0
                                        },
                                        animate: {
                                            scale: 1
                                        },
                                        exit: {
                                            scale: 0
                                        },
                                        className: "flex items-center gap-1 sm:gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/components/live-editor.tsx",
                                                lineNumber: 1374,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "hidden sm:inline",
                                                children: "Copy Code"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/components/live-editor.tsx",
                                                lineNumber: 1375,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, "copy", true, {
                                        fileName: "[project]/apps/web/components/live-editor.tsx",
                                        lineNumber: 1367,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/live-editor.tsx",
                                    lineNumber: 1354,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/live-editor.tsx",
                                lineNumber: 1348,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/live-editor.tsx",
                        lineNumber: 1338,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/live-editor.tsx",
                lineNumber: 1322,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-hidden rounded-xl sm:rounded-2xl border shadow-xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codesandbox$2f$sandpack$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SandpackProvider"], {
                    template: "react-ts",
                    theme: "dark",
                    files: files,
                    className: "bg-card",
                    customSetup: {
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
                            "@dnd-kit/utilities": "^3.2.2"
                        }
                    },
                    options: {
                        externalResources: [
                            "https://cdn.tailwindcss.com"
                        ],
                        autorun: true,
                        autoReload: true,
                        recompileMode: "immediate",
                        recompileDelay: 300
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sandpack-layout-wrapper",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codesandbox$2f$sandpack$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SandpackLayout"], {
                            className: "bg-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codesandbox$2f$sandpack$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SandpackCodeEditor"], {
                                    style: {
                                        height: "400px",
                                        minHeight: "400px"
                                    },
                                    showTabs: false,
                                    showLineNumbers: true,
                                    showInlineErrors: true,
                                    wrapContent: true,
                                    closableTabs: false,
                                    className: "bg-card"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/live-editor.tsx",
                                    lineNumber: 1427,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codesandbox$2f$sandpack$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SandpackPreview"], {
                                    style: {
                                        height: "400px",
                                        minHeight: "400px",
                                        backgroundColor: "rgb(var(--card-bg)) !important"
                                    },
                                    className: "bg-card",
                                    showOpenInCodeSandbox: false,
                                    showRefreshButton: true,
                                    actionsChildren: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 px-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-gray-600",
                                            children: "⚡ Live Preview"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/components/live-editor.tsx",
                                            lineNumber: 1447,
                                            columnNumber: 21
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/live-editor.tsx",
                                        lineNumber: 1446,
                                        columnNumber: 19
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/live-editor.tsx",
                                    lineNumber: 1436,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/components/live-editor.tsx",
                            lineNumber: 1426,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/live-editor.tsx",
                        lineNumber: 1425,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/live-editor.tsx",
                    lineNumber: 1385,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/components/live-editor.tsx",
                lineNumber: 1384,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 10
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "rounded-lg border border-border p-3 sm:p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs sm:text-sm text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "",
                                children: "Live Compilation:"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/live-editor.tsx",
                                lineNumber: 1466,
                                columnNumber: 13
                            }, this),
                            " Your code is compiled and executed in real-time in a sandboxed environment. All UI components (Card, Button, Input, Badge, Tabs) are available. Changes are reflected instantly!"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/live-editor.tsx",
                        lineNumber: 1465,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/live-editor.tsx",
                    lineNumber: 1464,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/components/live-editor.tsx",
                lineNumber: 1459,
                columnNumber: 7
            }, this),
            code !== initialCode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 10
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "rounded-lg border border-amber-500/20 bg-amber-500/10 p-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-amber-600 dark:text-amber-400",
                    children: [
                        "⚠️ ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "Code Modified:"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/live-editor.tsx",
                            lineNumber: 1482,
                            columnNumber: 16
                        }, this),
                        ' You\'ve made changes to the original code. Click "Copy Code" to save your changes, or "Reset" to restore the original.'
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/components/live-editor.tsx",
                    lineNumber: 1481,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/components/live-editor.tsx",
                lineNumber: 1476,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/live-editor.tsx",
        lineNumber: 1320,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnimationDetailPageClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$code$2d$block$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/code-block.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$live$2d$editor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/live-editor.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2d$library$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/ui-library-provider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/ui/scroll-area.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/ui/select.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/ui/tabs.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$components$2d$registry$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/lib/components-registry.tsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/shared/src/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function AnimationDetailPageClient({ code, relatedComponents, variantCodes, baseId, baseuiCode, shadcnuiCode, carbonCode, baseuiDemoCode, shadcnuiDemoCode, carbonDemoCode }) {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$components$2d$registry$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getComponentById"])(params.id);
    const { selectedLibrary, setSelectedLibrary } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2d$library$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUILibrary"])();
    const [selectedVariantId, setSelectedVariantId] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(relatedComponents?.[0]?.id || "default");
    const [refreshKey, setRefreshKey] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(0);
    const [activeTab, setActiveTab] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState("view");
    const [copiedInstall, setCopiedInstall] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(null);
    const [copiedMarkdown, setCopiedMarkdown] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [variantRefreshKeys, setVariantRefreshKeys] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState({});
    const [isLoadingComponent, setIsLoadingComponent] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    if (!component) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const Component = component.component;
    const requiresShadcn = component.tags.includes("shadcn");
    const codeLineCount = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>code.split("\n").length, [
        code
    ]);
    const showLongCodeNote = codeLineCount > 400;
    // Check if component is available in selected library
    const isAvailableInSelectedLibrary = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        // If component has availableIn defined, check it regardless of category
        if (component.availableIn && component.availableIn.length > 0) {
            // Carbon = pure React, compatible with shadcnui and baseui
            if (component.availableIn.includes("carbon")) {
                return selectedLibrary === "shadcnui" || selectedLibrary === "baseui";
            }
            return component.availableIn.includes(selectedLibrary);
        }
        // Default to shadcnui only if availableIn not specified
        return selectedLibrary === "shadcnui";
    }, [
        component,
        selectedLibrary
    ]);
    // Get the list of libraries this component is available in
    const availableLibraries = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        return component.availableIn || [
            "shadcnui"
        ];
    }, [
        component
    ]);
    const handleRefresh = ()=>{
        setRefreshKey((prev)=>prev + 1);
    };
    const handleVariantRefresh = (variantId)=>{
        setVariantRefreshKeys((prev)=>({
                ...prev,
                [variantId]: (prev[variantId] || 0) + 1
            }));
    };
    const handleCopyInstall = async (command, type)=>{
        await navigator.clipboard.writeText(command);
        setCopiedInstall(type);
        setTimeout(()=>setCopiedInstall(null), 2000);
    };
    const handleCopyMarkdown = async ()=>{
        try {
            const response = await fetch(`/md/${component.id}.md`);
            if (response.ok) {
                const markdownContent = await response.text();
                await navigator.clipboard.writeText(markdownContent);
                setCopiedMarkdown(true);
                setTimeout(()=>setCopiedMarkdown(false), 2000);
            } else {
                console.error("Failed to fetch markdown file");
            }
        } catch (error) {
            console.error("Error copying markdown:", error);
        }
    };
    // Reset to "view" tab when a new animation is selected
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        setActiveTab("view");
        setRefreshKey((prev)=>prev + 1);
    }, [
        component.id
    ]);
    // Dynamically load component and variant components based on selected library for native components
    const [dynamicComponent, setDynamicComponent] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(null);
    const [dynamicVariants, setDynamicVariants] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState({});
    // Reset dynamic component when library changes to avoid stale state
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        setDynamicComponent(null);
        setDynamicVariants({});
        setRefreshKey((prev)=>prev + 1);
    }, [
        selectedLibrary
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        // Determine if we need dynamic loading
        const needsDynamicLoad = component.category === "native" || component.availableIn && component.availableIn.length > 1 && selectedLibrary !== "shadcnui";
        if (!needsDynamicLoad) {
            setDynamicComponent(null);
            setDynamicVariants({});
            setIsLoadingComponent(false);
            return;
        }
        setIsLoadingComponent(true);
        if (component.category === "native") {
            const loadComponent = async ()=>{
                try {
                    if (selectedLibrary === "baseui") {
                        try {
                            const baseuiModule = await __turbopack_context__.f({
                                "@uitripled/ui/components/native/base-ui/native-avatar-expand-baseui": {
                                    id: ()=>"[project]/packages/ui/src/components/native/base-ui/native-avatar-expand-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/base-ui/native-avatar-expand-baseui.tsx [app-ssr] (ecmascript, async loader)")
                                },
                                "@uitripled/ui/components/native/base-ui/native-avatar-with-name-baseui": {
                                    id: ()=>"[project]/packages/ui/src/components/native/base-ui/native-avatar-with-name-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/base-ui/native-avatar-with-name-baseui.tsx [app-ssr] (ecmascript, async loader)")
                                },
                                "@uitripled/ui/components/native/base-ui/native-button-baseui": {
                                    id: ()=>"[project]/packages/ui/src/components/native/base-ui/native-button-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/base-ui/native-button-baseui.tsx [app-ssr] (ecmascript, async loader)")
                                },
                                "@uitripled/ui/components/native/base-ui/native-delete-baseui": {
                                    id: ()=>"[project]/packages/ui/src/components/native/base-ui/native-delete-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/base-ui/native-delete-baseui.tsx [app-ssr] (ecmascript, async loader)")
                                },
                                "@uitripled/ui/components/native/base-ui/native-dialog-baseui": {
                                    id: ()=>"[project]/packages/ui/src/components/native/base-ui/native-dialog-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/base-ui/native-dialog-baseui.tsx [app-ssr] (ecmascript, async loader)")
                                },
                                "@uitripled/ui/components/native/base-ui/native-flip-text-baseui": {
                                    id: ()=>"[project]/packages/ui/src/components/native/base-ui/native-flip-text-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/base-ui/native-flip-text-baseui.tsx [app-ssr] (ecmascript, async loader)")
                                },
                                "@uitripled/ui/components/native/base-ui/native-hover-card-baseui": {
                                    id: ()=>"[project]/packages/ui/src/components/native/base-ui/native-hover-card-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/base-ui/native-hover-card-baseui.tsx [app-ssr] (ecmascript, async loader)")
                                },
                                "@uitripled/ui/components/native/base-ui/native-image-checkbox-baseui": {
                                    id: ()=>"[project]/packages/ui/src/components/native/base-ui/native-image-checkbox-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/base-ui/native-image-checkbox-baseui.tsx [app-ssr] (ecmascript, async loader)")
                                },
                                "@uitripled/ui/components/native/base-ui/native-liquid-button-baseui": {
                                    id: ()=>"[project]/packages/ui/src/components/native/base-ui/native-liquid-button-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/base-ui/native-liquid-button-baseui.tsx [app-ssr] (ecmascript, async loader)")
                                },
                                "@uitripled/ui/components/native/base-ui/native-magnetic-baseui": {
                                    id: ()=>"[project]/packages/ui/src/components/native/base-ui/native-magnetic-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/base-ui/native-magnetic-baseui.tsx [app-ssr] (ecmascript, async loader)")
                                },
                                "@uitripled/ui/components/native/base-ui/native-morphing-button-baseui": {
                                    id: ()=>"[project]/packages/ui/src/components/native/base-ui/native-morphing-button-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/base-ui/native-morphing-button-baseui.tsx [app-ssr] (ecmascript, async loader)")
                                },
                                "@uitripled/ui/components/native/base-ui/native-nested-list-baseui": {
                                    id: ()=>"[project]/packages/ui/src/components/native/base-ui/native-nested-list-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/base-ui/native-nested-list-baseui.tsx [app-ssr] (ecmascript, async loader)")
                                },
                                "@uitripled/ui/components/native/base-ui/native-notification-bell-baseui": {
                                    id: ()=>"[project]/packages/ui/src/components/native/base-ui/native-notification-bell-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/base-ui/native-notification-bell-baseui.tsx [app-ssr] (ecmascript, async loader)")
                                },
                                "@uitripled/ui/components/native/base-ui/native-profile-notch-baseui": {
                                    id: ()=>"[project]/packages/ui/src/components/native/base-ui/native-profile-notch-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/base-ui/native-profile-notch-baseui.tsx [app-ssr] (ecmascript, async loader)")
                                },
                                "@uitripled/ui/components/native/base-ui/native-start-now-baseui": {
                                    id: ()=>"[project]/packages/ui/src/components/native/base-ui/native-start-now-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/base-ui/native-start-now-baseui.tsx [app-ssr] (ecmascript, async loader)")
                                },
                                "@uitripled/ui/components/native/base-ui/native-tabs-baseui": {
                                    id: ()=>"[project]/packages/ui/src/components/native/base-ui/native-tabs-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/base-ui/native-tabs-baseui.tsx [app-ssr] (ecmascript, async loader)")
                                },
                                "@uitripled/ui/components/native/base-ui/native-tooltip-baseui": {
                                    id: ()=>"[project]/packages/ui/src/components/native/base-ui/native-tooltip-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/base-ui/native-tooltip-baseui.tsx [app-ssr] (ecmascript, async loader)")
                                },
                                "@uitripled/ui/components/native/base-ui/native-typewriter-baseui": {
                                    id: ()=>"[project]/packages/ui/src/components/native/base-ui/native-typewriter-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/base-ui/native-typewriter-baseui.tsx [app-ssr] (ecmascript, async loader)")
                                },
                                "@uitripled/ui/components/native/base-ui/social-login-button-baseui": {
                                    id: ()=>"[project]/packages/ui/src/components/native/base-ui/social-login-button-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/base-ui/social-login-button-baseui.tsx [app-ssr] (ecmascript, async loader)")
                                }
                            }).import(`@uitripled/ui/components/native/base-ui/${component.id}-baseui`);
                            // Find the exported component (usually the first export or matches component name)
                            const exports = Object.keys(baseuiModule);
                            const componentName = exports.find((name)=>name.toLowerCase().includes(component.id.replace(/-/g, "")) || name === component.id.split("-").map((w)=>w.charAt(0).toUpperCase() + w.slice(1)).join("")) || exports[0];
                            if (baseuiModule[componentName]) {
                                // Try to load demo component first (e.g., NativeDialogDemo)
                                try {
                                    const demoModule = await __turbopack_context__.f({
                                        "@uitripled/ui/components/native/base-ui/demo/native-avatar-expand-demo": {
                                            id: ()=>"[project]/packages/ui/src/components/native/base-ui/demo/native-avatar-expand-demo.tsx [app-ssr] (ecmascript, async loader)",
                                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/base-ui/demo/native-avatar-expand-demo.tsx [app-ssr] (ecmascript, async loader)")
                                        },
                                        "@uitripled/ui/components/native/base-ui/demo/native-avatar-with-name-demo": {
                                            id: ()=>"[project]/packages/ui/src/components/native/base-ui/demo/native-avatar-with-name-demo.tsx [app-ssr] (ecmascript, async loader)",
                                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/base-ui/demo/native-avatar-with-name-demo.tsx [app-ssr] (ecmascript, async loader)")
                                        },
                                        "@uitripled/ui/components/native/base-ui/demo/native-button-demo": {
                                            id: ()=>"[project]/packages/ui/src/components/native/base-ui/demo/native-button-demo.tsx [app-ssr] (ecmascript, async loader)",
                                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/base-ui/demo/native-button-demo.tsx [app-ssr] (ecmascript, async loader)")
                                        },
                                        "@uitripled/ui/components/native/base-ui/demo/native-delete-demo": {
                                            id: ()=>"[project]/packages/ui/src/components/native/base-ui/demo/native-delete-demo.tsx [app-ssr] (ecmascript, async loader)",
                                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/base-ui/demo/native-delete-demo.tsx [app-ssr] (ecmascript, async loader)")
                                        },
                                        "@uitripled/ui/components/native/base-ui/demo/native-dialog-demo": {
                                            id: ()=>"[project]/packages/ui/src/components/native/base-ui/demo/native-dialog-demo.tsx [app-ssr] (ecmascript, async loader)",
                                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/base-ui/demo/native-dialog-demo.tsx [app-ssr] (ecmascript, async loader)")
                                        },
                                        "@uitripled/ui/components/native/base-ui/demo/native-flip-text-demo": {
                                            id: ()=>"[project]/packages/ui/src/components/native/base-ui/demo/native-flip-text-demo.tsx [app-ssr] (ecmascript, async loader)",
                                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/base-ui/demo/native-flip-text-demo.tsx [app-ssr] (ecmascript, async loader)")
                                        },
                                        "@uitripled/ui/components/native/base-ui/demo/native-hover-card-demo": {
                                            id: ()=>"[project]/packages/ui/src/components/native/base-ui/demo/native-hover-card-demo.tsx [app-ssr] (ecmascript, async loader)",
                                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/base-ui/demo/native-hover-card-demo.tsx [app-ssr] (ecmascript, async loader)")
                                        },
                                        "@uitripled/ui/components/native/base-ui/demo/native-image-checkbox-demo": {
                                            id: ()=>"[project]/packages/ui/src/components/native/base-ui/demo/native-image-checkbox-demo.tsx [app-ssr] (ecmascript, async loader)",
                                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/base-ui/demo/native-image-checkbox-demo.tsx [app-ssr] (ecmascript, async loader)")
                                        },
                                        "@uitripled/ui/components/native/base-ui/demo/native-liquid-button-demo": {
                                            id: ()=>"[project]/packages/ui/src/components/native/base-ui/demo/native-liquid-button-demo.tsx [app-ssr] (ecmascript, async loader)",
                                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/base-ui/demo/native-liquid-button-demo.tsx [app-ssr] (ecmascript, async loader)")
                                        },
                                        "@uitripled/ui/components/native/base-ui/demo/native-magnetic-demo": {
                                            id: ()=>"[project]/packages/ui/src/components/native/base-ui/demo/native-magnetic-demo.tsx [app-ssr] (ecmascript, async loader)",
                                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/base-ui/demo/native-magnetic-demo.tsx [app-ssr] (ecmascript, async loader)")
                                        },
                                        "@uitripled/ui/components/native/base-ui/demo/native-morphing-button-demo": {
                                            id: ()=>"[project]/packages/ui/src/components/native/base-ui/demo/native-morphing-button-demo.tsx [app-ssr] (ecmascript, async loader)",
                                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/base-ui/demo/native-morphing-button-demo.tsx [app-ssr] (ecmascript, async loader)")
                                        },
                                        "@uitripled/ui/components/native/base-ui/demo/native-nested-list-demo": {
                                            id: ()=>"[project]/packages/ui/src/components/native/base-ui/demo/native-nested-list-demo.tsx [app-ssr] (ecmascript, async loader)",
                                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/base-ui/demo/native-nested-list-demo.tsx [app-ssr] (ecmascript, async loader)")
                                        },
                                        "@uitripled/ui/components/native/base-ui/demo/native-notification-bell-demo": {
                                            id: ()=>"[project]/packages/ui/src/components/native/base-ui/demo/native-notification-bell-demo.tsx [app-ssr] (ecmascript, async loader)",
                                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/base-ui/demo/native-notification-bell-demo.tsx [app-ssr] (ecmascript, async loader)")
                                        },
                                        "@uitripled/ui/components/native/base-ui/demo/native-profile-notch-demo": {
                                            id: ()=>"[project]/packages/ui/src/components/native/base-ui/demo/native-profile-notch-demo.tsx [app-ssr] (ecmascript, async loader)",
                                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/base-ui/demo/native-profile-notch-demo.tsx [app-ssr] (ecmascript, async loader)")
                                        },
                                        "@uitripled/ui/components/native/base-ui/demo/native-start-now-demo": {
                                            id: ()=>"[project]/packages/ui/src/components/native/base-ui/demo/native-start-now-demo.tsx [app-ssr] (ecmascript, async loader)",
                                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/base-ui/demo/native-start-now-demo.tsx [app-ssr] (ecmascript, async loader)")
                                        },
                                        "@uitripled/ui/components/native/base-ui/demo/native-tabs-demo": {
                                            id: ()=>"[project]/packages/ui/src/components/native/base-ui/demo/native-tabs-demo.tsx [app-ssr] (ecmascript, async loader)",
                                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/base-ui/demo/native-tabs-demo.tsx [app-ssr] (ecmascript, async loader)")
                                        },
                                        "@uitripled/ui/components/native/base-ui/demo/native-tooltip-demo": {
                                            id: ()=>"[project]/packages/ui/src/components/native/base-ui/demo/native-tooltip-demo.tsx [app-ssr] (ecmascript, async loader)",
                                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/base-ui/demo/native-tooltip-demo.tsx [app-ssr] (ecmascript, async loader)")
                                        },
                                        "@uitripled/ui/components/native/base-ui/demo/native-typewriter-demo": {
                                            id: ()=>"[project]/packages/ui/src/components/native/base-ui/demo/native-typewriter-demo.tsx [app-ssr] (ecmascript, async loader)",
                                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/base-ui/demo/native-typewriter-demo.tsx [app-ssr] (ecmascript, async loader)")
                                        },
                                        "@uitripled/ui/components/native/base-ui/demo/social-login-demo": {
                                            id: ()=>"[project]/packages/ui/src/components/native/base-ui/demo/social-login-demo.tsx [app-ssr] (ecmascript, async loader)",
                                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/base-ui/demo/social-login-demo.tsx [app-ssr] (ecmascript, async loader)")
                                        }
                                    }).import(`@uitripled/ui/components/native/base-ui/demo/${component.id}-demo`);
                                    // Get component name (e.g., "NativeDialog" from "native-dialog")
                                    const componentPrefix = component.id.split("-").map((w)=>w.charAt(0).toUpperCase() + w.slice(1)).join("");
                                    // componentPrefix is already like "NativeDialog", don't add Native again
                                    const demoComponentName = `${componentPrefix}Demo`;
                                    // Try to find the main demo component (e.g., NativeDialogDemo)
                                    const demoKeys = Object.keys(demoModule);
                                    const mainDemoComponent = demoModule[demoComponentName] || demoModule[demoKeys.find((name)=>name.toLowerCase() === demoComponentName.toLowerCase() || name.toLowerCase().includes(`${componentPrefix.toLowerCase()}demo`)) || ""];
                                    if (mainDemoComponent) {
                                        setDynamicComponent(()=>mainDemoComponent);
                                    } else {
                                        setDynamicComponent(()=>baseuiModule[componentName]);
                                    }
                                    // Load variant demo components from baseui
                                    if (relatedComponents && relatedComponents.length > 0) {
                                        const variantMap = {};
                                        relatedComponents.forEach((variant)=>{
                                            // For 'default' variant, use the main demo component
                                            if (variant.id === "default" && mainDemoComponent) {
                                                variantMap[variant.id] = mainDemoComponent;
                                                return;
                                            }
                                            // Try to find the demo component (e.g., NativeButtonDefault)
                                            // Pattern: Native{ComponentName}{VariantName}
                                            const variantName = variant.name.split(" ").map((w)=>w.charAt(0).toUpperCase() + w.slice(1)).join("");
                                            const expectedName = `${componentPrefix}${variantName}`;
                                            const demoName = Object.keys(demoModule).find((name)=>name === expectedName || name.toLowerCase() === `${componentPrefix.toLowerCase()}${variant.id.charAt(0).toUpperCase() + variant.id.slice(1)}` || name.toLowerCase().includes(variant.id.toLowerCase()) || name.toLowerCase().includes(variant.name.toLowerCase().replace(/\s+/g, "")));
                                            if (demoName && demoModule[demoName]) {
                                                variantMap[variant.id] = demoModule[demoName];
                                            }
                                        });
                                        setDynamicVariants(variantMap);
                                    }
                                } catch (e) {
                                    // Demo file doesn't exist, use the component directly
                                    setDynamicComponent(()=>baseuiModule[componentName]);
                                    setDynamicVariants({});
                                }
                                return;
                            }
                        } catch (e) {
                        // Baseui version doesn't exist, fall through to shadcnui
                        }
                    } else if (selectedLibrary === "carbon") {
                        try {
                            const carbonModule = await __turbopack_context__.f({
                                "@uitripled/ui/components/native/carbon/native-badge-carbon": {
                                    id: ()=>"[project]/packages/ui/src/components/native/carbon/native-badge-carbon.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/carbon/native-badge-carbon.tsx [app-ssr] (ecmascript, async loader)")
                                },
                                "@uitripled/ui/components/native/carbon/native-counter-up-carbon": {
                                    id: ()=>"[project]/packages/ui/src/components/native/carbon/native-counter-up-carbon.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/carbon/native-counter-up-carbon.tsx [app-ssr] (ecmascript, async loader)")
                                },
                                "@uitripled/ui/components/native/carbon/native-flip-text-carbon": {
                                    id: ()=>"[project]/packages/ui/src/components/native/carbon/native-flip-text-carbon.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/carbon/native-flip-text-carbon.tsx [app-ssr] (ecmascript, async loader)")
                                },
                                "@uitripled/ui/components/native/carbon/native-follow-cursor-carbon": {
                                    id: ()=>"[project]/packages/ui/src/components/native/carbon/native-follow-cursor-carbon.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/carbon/native-follow-cursor-carbon.tsx [app-ssr] (ecmascript, async loader)")
                                },
                                "@uitripled/ui/components/native/carbon/native-image-checkbox-carbon": {
                                    id: ()=>"[project]/packages/ui/src/components/native/carbon/native-image-checkbox-carbon.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/carbon/native-image-checkbox-carbon.tsx [app-ssr] (ecmascript, async loader)")
                                },
                                "@uitripled/ui/components/native/carbon/native-magnetic-carbon": {
                                    id: ()=>"[project]/packages/ui/src/components/native/carbon/native-magnetic-carbon.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/carbon/native-magnetic-carbon.tsx [app-ssr] (ecmascript, async loader)")
                                },
                                "@uitripled/ui/components/native/carbon/native-morphing-button-carbon": {
                                    id: ()=>"[project]/packages/ui/src/components/native/carbon/native-morphing-button-carbon.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/carbon/native-morphing-button-carbon.tsx [app-ssr] (ecmascript, async loader)")
                                },
                                "@uitripled/ui/components/native/carbon/native-notification-bell-carbon": {
                                    id: ()=>"[project]/packages/ui/src/components/native/carbon/native-notification-bell-carbon.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/carbon/native-notification-bell-carbon.tsx [app-ssr] (ecmascript, async loader)")
                                },
                                "@uitripled/ui/components/native/carbon/native-tabs-carbon": {
                                    id: ()=>"[project]/packages/ui/src/components/native/carbon/native-tabs-carbon.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/carbon/native-tabs-carbon.tsx [app-ssr] (ecmascript, async loader)")
                                },
                                "@uitripled/ui/components/native/carbon/native-typewriter-carbon": {
                                    id: ()=>"[project]/packages/ui/src/components/native/carbon/native-typewriter-carbon.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/carbon/native-typewriter-carbon.tsx [app-ssr] (ecmascript, async loader)")
                                }
                            }).import(`@uitripled/ui/components/native/carbon/${component.id}-carbon`);
                            const exports = Object.keys(carbonModule);
                            const componentName = exports.find((name)=>name.toLowerCase().includes(component.id.replace(/-/g, "")) || name === component.id.split("-").map((w)=>w.charAt(0).toUpperCase() + w.slice(1)).join("")) || exports[0];
                            if (carbonModule[componentName]) {
                                try {
                                    const demoModule = await __turbopack_context__.f({
                                        "@uitripled/ui/components/native/carbon/demo/native-badge-demo": {
                                            id: ()=>"[project]/packages/ui/src/components/native/carbon/demo/native-badge-demo.tsx [app-ssr] (ecmascript, async loader)",
                                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/carbon/demo/native-badge-demo.tsx [app-ssr] (ecmascript, async loader)")
                                        },
                                        "@uitripled/ui/components/native/carbon/demo/native-counter-up-demo": {
                                            id: ()=>"[project]/packages/ui/src/components/native/carbon/demo/native-counter-up-demo.tsx [app-ssr] (ecmascript, async loader)",
                                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/carbon/demo/native-counter-up-demo.tsx [app-ssr] (ecmascript, async loader)")
                                        },
                                        "@uitripled/ui/components/native/carbon/demo/native-flip-text-demo": {
                                            id: ()=>"[project]/packages/ui/src/components/native/carbon/demo/native-flip-text-demo.tsx [app-ssr] (ecmascript, async loader)",
                                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/carbon/demo/native-flip-text-demo.tsx [app-ssr] (ecmascript, async loader)")
                                        },
                                        "@uitripled/ui/components/native/carbon/demo/native-follow-cursor-demo": {
                                            id: ()=>"[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx [app-ssr] (ecmascript, async loader)",
                                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx [app-ssr] (ecmascript, async loader)")
                                        },
                                        "@uitripled/ui/components/native/carbon/demo/native-image-checkbox-demo": {
                                            id: ()=>"[project]/packages/ui/src/components/native/carbon/demo/native-image-checkbox-demo.tsx [app-ssr] (ecmascript, async loader)",
                                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/carbon/demo/native-image-checkbox-demo.tsx [app-ssr] (ecmascript, async loader)")
                                        },
                                        "@uitripled/ui/components/native/carbon/demo/native-magnetic-demo": {
                                            id: ()=>"[project]/packages/ui/src/components/native/carbon/demo/native-magnetic-demo.tsx [app-ssr] (ecmascript, async loader)",
                                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/carbon/demo/native-magnetic-demo.tsx [app-ssr] (ecmascript, async loader)")
                                        },
                                        "@uitripled/ui/components/native/carbon/demo/native-morphing-button-demo": {
                                            id: ()=>"[project]/packages/ui/src/components/native/carbon/demo/native-morphing-button-demo.tsx [app-ssr] (ecmascript, async loader)",
                                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/carbon/demo/native-morphing-button-demo.tsx [app-ssr] (ecmascript, async loader)")
                                        },
                                        "@uitripled/ui/components/native/carbon/demo/native-notification-bell-demo": {
                                            id: ()=>"[project]/packages/ui/src/components/native/carbon/demo/native-notification-bell-demo.tsx [app-ssr] (ecmascript, async loader)",
                                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/carbon/demo/native-notification-bell-demo.tsx [app-ssr] (ecmascript, async loader)")
                                        },
                                        "@uitripled/ui/components/native/carbon/demo/native-tabs-demo": {
                                            id: ()=>"[project]/packages/ui/src/components/native/carbon/demo/native-tabs-demo.tsx [app-ssr] (ecmascript, async loader)",
                                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/carbon/demo/native-tabs-demo.tsx [app-ssr] (ecmascript, async loader)")
                                        },
                                        "@uitripled/ui/components/native/carbon/demo/native-typewriter-demo": {
                                            id: ()=>"[project]/packages/ui/src/components/native/carbon/demo/native-typewriter-demo.tsx [app-ssr] (ecmascript, async loader)",
                                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/carbon/demo/native-typewriter-demo.tsx [app-ssr] (ecmascript, async loader)")
                                        }
                                    }).import(`@uitripled/ui/components/native/carbon/demo/${component.id}-demo`);
                                    const componentPrefix = component.id.split("-").map((w)=>w.charAt(0).toUpperCase() + w.slice(1)).join("");
                                    // componentPrefix is already like "NativeDialog", don't add Native again
                                    const demoComponentName = `${componentPrefix}Demo`;
                                    const demoKeys = Object.keys(demoModule);
                                    const mainDemoComponent = demoModule[demoComponentName] || demoModule[demoKeys.find((name)=>name.toLowerCase() === demoComponentName.toLowerCase() || name.toLowerCase().includes(`${componentPrefix.toLowerCase()}demo`)) || ""];
                                    if (mainDemoComponent) {
                                        setDynamicComponent(()=>mainDemoComponent);
                                    } else {
                                        setDynamicComponent(()=>carbonModule[componentName]);
                                    }
                                    if (relatedComponents && relatedComponents.length > 0) {
                                        const variantMap = {};
                                        relatedComponents.forEach((variant)=>{
                                            // For 'default' variant, use the main demo component
                                            if (variant.id === "default" && mainDemoComponent) {
                                                variantMap[variant.id] = mainDemoComponent;
                                                return;
                                            }
                                            const variantName = variant.name.split(" ").map((w)=>w.charAt(0).toUpperCase() + w.slice(1)).join("");
                                            const expectedName = `${componentPrefix}${variantName}`;
                                            const demoName = Object.keys(demoModule).find((name)=>name === expectedName || name.toLowerCase() === `${componentPrefix.toLowerCase()}${variant.id.charAt(0).toUpperCase() + variant.id.slice(1)}` || name.toLowerCase().includes(variant.id.toLowerCase()) || name.toLowerCase().includes(variant.name.toLowerCase().replace(/\s+/g, "")));
                                            if (demoName && demoModule[demoName]) {
                                                variantMap[variant.id] = demoModule[demoName];
                                            }
                                        });
                                        setDynamicVariants(variantMap);
                                    }
                                } catch (e) {
                                    setDynamicComponent(()=>carbonModule[componentName]);
                                    setDynamicVariants({});
                                }
                                return;
                            }
                        } catch (e) {
                        // Carbon version doesn't exist, fall through to shadcnui
                        }
                    }
                    // Load shadcnui version (default or fallback)
                    const shadcnuiModule = await __turbopack_context__.f({
                        "@uitripled/ui/components/native/shadcn-ui/native-avatar-expand-shadcnui": {
                            id: ()=>"[project]/packages/ui/src/components/native/shadcn-ui/native-avatar-expand-shadcnui.tsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/shadcn-ui/native-avatar-expand-shadcnui.tsx [app-ssr] (ecmascript, async loader)")
                        },
                        "@uitripled/ui/components/native/shadcn-ui/native-avatar-with-name-shadcnui": {
                            id: ()=>"[project]/packages/ui/src/components/native/shadcn-ui/native-avatar-with-name-shadcnui.tsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/shadcn-ui/native-avatar-with-name-shadcnui.tsx [app-ssr] (ecmascript, async loader)")
                        },
                        "@uitripled/ui/components/native/shadcn-ui/native-button-shadcnui": {
                            id: ()=>"[project]/packages/ui/src/components/native/shadcn-ui/native-button-shadcnui.tsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/shadcn-ui/native-button-shadcnui.tsx [app-ssr] (ecmascript, async loader)")
                        },
                        "@uitripled/ui/components/native/shadcn-ui/native-counter-up-shadcnui": {
                            id: ()=>"[project]/packages/ui/src/components/native/shadcn-ui/native-counter-up-shadcnui.tsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/shadcn-ui/native-counter-up-shadcnui.tsx [app-ssr] (ecmascript, async loader)")
                        },
                        "@uitripled/ui/components/native/shadcn-ui/native-delete-shadcnui": {
                            id: ()=>"[project]/packages/ui/src/components/native/shadcn-ui/native-delete-shadcnui.tsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/shadcn-ui/native-delete-shadcnui.tsx [app-ssr] (ecmascript, async loader)")
                        },
                        "@uitripled/ui/components/native/shadcn-ui/native-dialog-shadcnui": {
                            id: ()=>"[project]/packages/ui/src/components/native/shadcn-ui/native-dialog-shadcnui.tsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/shadcn-ui/native-dialog-shadcnui.tsx [app-ssr] (ecmascript, async loader)")
                        },
                        "@uitripled/ui/components/native/shadcn-ui/native-flip-text-shadcnui": {
                            id: ()=>"[project]/packages/ui/src/components/native/shadcn-ui/native-flip-text-shadcnui.tsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/shadcn-ui/native-flip-text-shadcnui.tsx [app-ssr] (ecmascript, async loader)")
                        },
                        "@uitripled/ui/components/native/shadcn-ui/native-hover-card-shadcnui": {
                            id: ()=>"[project]/packages/ui/src/components/native/shadcn-ui/native-hover-card-shadcnui.tsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/shadcn-ui/native-hover-card-shadcnui.tsx [app-ssr] (ecmascript, async loader)")
                        },
                        "@uitripled/ui/components/native/shadcn-ui/native-image-checkbox-shadcnui": {
                            id: ()=>"[project]/packages/ui/src/components/native/shadcn-ui/native-image-checkbox-shadcnui.tsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/shadcn-ui/native-image-checkbox-shadcnui.tsx [app-ssr] (ecmascript, async loader)")
                        },
                        "@uitripled/ui/components/native/shadcn-ui/native-liquid-button-shadcnui": {
                            id: ()=>"[project]/packages/ui/src/components/native/shadcn-ui/native-liquid-button-shadcnui.tsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/shadcn-ui/native-liquid-button-shadcnui.tsx [app-ssr] (ecmascript, async loader)")
                        },
                        "@uitripled/ui/components/native/shadcn-ui/native-magnetic-shadcnui": {
                            id: ()=>"[project]/packages/ui/src/components/native/shadcn-ui/native-magnetic-shadcnui.tsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/shadcn-ui/native-magnetic-shadcnui.tsx [app-ssr] (ecmascript, async loader)")
                        },
                        "@uitripled/ui/components/native/shadcn-ui/native-morphing-button-shadcnui": {
                            id: ()=>"[project]/packages/ui/src/components/native/shadcn-ui/native-morphing-button-shadcnui.tsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/shadcn-ui/native-morphing-button-shadcnui.tsx [app-ssr] (ecmascript, async loader)")
                        },
                        "@uitripled/ui/components/native/shadcn-ui/native-nested-list-shadcnui": {
                            id: ()=>"[project]/packages/ui/src/components/native/shadcn-ui/native-nested-list-shadcnui.tsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/shadcn-ui/native-nested-list-shadcnui.tsx [app-ssr] (ecmascript, async loader)")
                        },
                        "@uitripled/ui/components/native/shadcn-ui/native-notification-bell-shadcnui": {
                            id: ()=>"[project]/packages/ui/src/components/native/shadcn-ui/native-notification-bell-shadcnui.tsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/shadcn-ui/native-notification-bell-shadcnui.tsx [app-ssr] (ecmascript, async loader)")
                        },
                        "@uitripled/ui/components/native/shadcn-ui/native-profile-notch-shadcnui": {
                            id: ()=>"[project]/packages/ui/src/components/native/shadcn-ui/native-profile-notch-shadcnui.tsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/shadcn-ui/native-profile-notch-shadcnui.tsx [app-ssr] (ecmascript, async loader)")
                        },
                        "@uitripled/ui/components/native/shadcn-ui/native-start-now-shadcnui": {
                            id: ()=>"[project]/packages/ui/src/components/native/shadcn-ui/native-start-now-shadcnui.tsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/shadcn-ui/native-start-now-shadcnui.tsx [app-ssr] (ecmascript, async loader)")
                        },
                        "@uitripled/ui/components/native/shadcn-ui/native-tabs-shadcnui": {
                            id: ()=>"[project]/packages/ui/src/components/native/shadcn-ui/native-tabs-shadcnui.tsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/shadcn-ui/native-tabs-shadcnui.tsx [app-ssr] (ecmascript, async loader)")
                        },
                        "@uitripled/ui/components/native/shadcn-ui/native-tooltip-shadcnui": {
                            id: ()=>"[project]/packages/ui/src/components/native/shadcn-ui/native-tooltip-shadcnui.tsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/shadcn-ui/native-tooltip-shadcnui.tsx [app-ssr] (ecmascript, async loader)")
                        },
                        "@uitripled/ui/components/native/shadcn-ui/native-typewriter-shadcnui": {
                            id: ()=>"[project]/packages/ui/src/components/native/shadcn-ui/native-typewriter-shadcnui.tsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/shadcn-ui/native-typewriter-shadcnui.tsx [app-ssr] (ecmascript, async loader)")
                        },
                        "@uitripled/ui/components/native/shadcn-ui/social-login-button-shadcnui": {
                            id: ()=>"[project]/packages/ui/src/components/native/shadcn-ui/social-login-button-shadcnui.tsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/shadcn-ui/social-login-button-shadcnui.tsx [app-ssr] (ecmascript, async loader)")
                        }
                    }).import(`@uitripled/ui/components/native/shadcn-ui/${component.id}-shadcnui`);
                    const exports = Object.keys(shadcnuiModule);
                    const componentName = exports.find((name)=>name.toLowerCase().includes(component.id.replace(/-/g, "")) || name === component.id.split("-").map((w)=>w.charAt(0).toUpperCase() + w.slice(1)).join("")) || exports[0];
                    if (shadcnuiModule[componentName]) {
                        // Try to load demo component first (e.g., NativeDialogDemo)
                        try {
                            const demoModule = await __turbopack_context__.f({
                                "@uitripled/ui/components/native/shadcn-ui/demo/native-avatar-expand-demo": {
                                    id: ()=>"[project]/packages/ui/src/components/native/shadcn-ui/demo/native-avatar-expand-demo.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/shadcn-ui/demo/native-avatar-expand-demo.tsx [app-ssr] (ecmascript, async loader)")
                                },
                                "@uitripled/ui/components/native/shadcn-ui/demo/native-avatar-with-name-demo": {
                                    id: ()=>"[project]/packages/ui/src/components/native/shadcn-ui/demo/native-avatar-with-name-demo.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/shadcn-ui/demo/native-avatar-with-name-demo.tsx [app-ssr] (ecmascript, async loader)")
                                },
                                "@uitripled/ui/components/native/shadcn-ui/demo/native-button-demo": {
                                    id: ()=>"[project]/packages/ui/src/components/native/shadcn-ui/demo/native-button-demo.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/shadcn-ui/demo/native-button-demo.tsx [app-ssr] (ecmascript, async loader)")
                                },
                                "@uitripled/ui/components/native/shadcn-ui/demo/native-delete-demo": {
                                    id: ()=>"[project]/packages/ui/src/components/native/shadcn-ui/demo/native-delete-demo.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/shadcn-ui/demo/native-delete-demo.tsx [app-ssr] (ecmascript, async loader)")
                                },
                                "@uitripled/ui/components/native/shadcn-ui/demo/native-dialog-demo": {
                                    id: ()=>"[project]/packages/ui/src/components/native/shadcn-ui/demo/native-dialog-demo.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/shadcn-ui/demo/native-dialog-demo.tsx [app-ssr] (ecmascript, async loader)")
                                },
                                "@uitripled/ui/components/native/shadcn-ui/demo/native-flip-text-demo": {
                                    id: ()=>"[project]/packages/ui/src/components/native/shadcn-ui/demo/native-flip-text-demo.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/shadcn-ui/demo/native-flip-text-demo.tsx [app-ssr] (ecmascript, async loader)")
                                },
                                "@uitripled/ui/components/native/shadcn-ui/demo/native-hover-card-demo": {
                                    id: ()=>"[project]/packages/ui/src/components/native/shadcn-ui/demo/native-hover-card-demo.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/shadcn-ui/demo/native-hover-card-demo.tsx [app-ssr] (ecmascript, async loader)")
                                },
                                "@uitripled/ui/components/native/shadcn-ui/demo/native-image-checkbox-demo": {
                                    id: ()=>"[project]/packages/ui/src/components/native/shadcn-ui/demo/native-image-checkbox-demo.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/shadcn-ui/demo/native-image-checkbox-demo.tsx [app-ssr] (ecmascript, async loader)")
                                },
                                "@uitripled/ui/components/native/shadcn-ui/demo/native-liquid-button-demo": {
                                    id: ()=>"[project]/packages/ui/src/components/native/shadcn-ui/demo/native-liquid-button-demo.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/shadcn-ui/demo/native-liquid-button-demo.tsx [app-ssr] (ecmascript, async loader)")
                                },
                                "@uitripled/ui/components/native/shadcn-ui/demo/native-magnetic-demo": {
                                    id: ()=>"[project]/packages/ui/src/components/native/shadcn-ui/demo/native-magnetic-demo.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/shadcn-ui/demo/native-magnetic-demo.tsx [app-ssr] (ecmascript, async loader)")
                                },
                                "@uitripled/ui/components/native/shadcn-ui/demo/native-morphing-button-demo": {
                                    id: ()=>"[project]/packages/ui/src/components/native/shadcn-ui/demo/native-morphing-button-demo.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/shadcn-ui/demo/native-morphing-button-demo.tsx [app-ssr] (ecmascript, async loader)")
                                },
                                "@uitripled/ui/components/native/shadcn-ui/demo/native-nested-list-demo": {
                                    id: ()=>"[project]/packages/ui/src/components/native/shadcn-ui/demo/native-nested-list-demo.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/shadcn-ui/demo/native-nested-list-demo.tsx [app-ssr] (ecmascript, async loader)")
                                },
                                "@uitripled/ui/components/native/shadcn-ui/demo/native-notification-bell-demo": {
                                    id: ()=>"[project]/packages/ui/src/components/native/shadcn-ui/demo/native-notification-bell-demo.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/shadcn-ui/demo/native-notification-bell-demo.tsx [app-ssr] (ecmascript, async loader)")
                                },
                                "@uitripled/ui/components/native/shadcn-ui/demo/native-profile-notch-demo": {
                                    id: ()=>"[project]/packages/ui/src/components/native/shadcn-ui/demo/native-profile-notch-demo.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/shadcn-ui/demo/native-profile-notch-demo.tsx [app-ssr] (ecmascript, async loader)")
                                },
                                "@uitripled/ui/components/native/shadcn-ui/demo/native-start-now-demo": {
                                    id: ()=>"[project]/packages/ui/src/components/native/shadcn-ui/demo/native-start-now-demo.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/shadcn-ui/demo/native-start-now-demo.tsx [app-ssr] (ecmascript, async loader)")
                                },
                                "@uitripled/ui/components/native/shadcn-ui/demo/native-tabs-demo": {
                                    id: ()=>"[project]/packages/ui/src/components/native/shadcn-ui/demo/native-tabs-demo.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/shadcn-ui/demo/native-tabs-demo.tsx [app-ssr] (ecmascript, async loader)")
                                },
                                "@uitripled/ui/components/native/shadcn-ui/demo/native-tooltip-demo": {
                                    id: ()=>"[project]/packages/ui/src/components/native/shadcn-ui/demo/native-tooltip-demo.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/shadcn-ui/demo/native-tooltip-demo.tsx [app-ssr] (ecmascript, async loader)")
                                },
                                "@uitripled/ui/components/native/shadcn-ui/demo/native-typewriter-demo": {
                                    id: ()=>"[project]/packages/ui/src/components/native/shadcn-ui/demo/native-typewriter-demo.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/shadcn-ui/demo/native-typewriter-demo.tsx [app-ssr] (ecmascript, async loader)")
                                },
                                "@uitripled/ui/components/native/shadcn-ui/demo/social-login-demo": {
                                    id: ()=>"[project]/packages/ui/src/components/native/shadcn-ui/demo/social-login-demo.tsx [app-ssr] (ecmascript, async loader)",
                                    module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/native/shadcn-ui/demo/social-login-demo.tsx [app-ssr] (ecmascript, async loader)")
                                }
                            }).import(`@uitripled/ui/components/native/shadcn-ui/demo/${component.id}-demo`);
                            // Get component name prefix (e.g., "NativeButton" from "native-button")
                            const componentPrefix = component.id.split("-").map((w)=>w.charAt(0).toUpperCase() + w.slice(1)).join("");
                            // componentPrefix is already like "NativeDialog", don't add Native again
                            const demoComponentName = `${componentPrefix}Demo`;
                            // Try to find the main demo component (e.g., NativeDialogDemo)
                            const mainDemoComponent = demoModule[demoComponentName] || Object.keys(demoModule).find((name)=>name.toLowerCase() === demoComponentName.toLowerCase() || name.toLowerCase().includes(`${componentPrefix.toLowerCase()}demo`)) ? demoModule[Object.keys(demoModule).find((name)=>name.toLowerCase() === demoComponentName.toLowerCase() || name.toLowerCase().includes(`${componentPrefix.toLowerCase()}demo`))] : null;
                            if (mainDemoComponent) {
                                setDynamicComponent(()=>mainDemoComponent);
                            } else {
                                setDynamicComponent(()=>shadcnuiModule[componentName]);
                            }
                            // Load variant demo components from shadcnui
                            if (relatedComponents && relatedComponents.length > 0) {
                                const variantMap = {};
                                relatedComponents.forEach((variant)=>{
                                    // For 'default' variant, use the main demo component
                                    if (variant.id === "default" && mainDemoComponent) {
                                        variantMap[variant.id] = mainDemoComponent;
                                        return;
                                    }
                                    // Try to find the demo component (e.g., NativeButtonDefault)
                                    // Pattern: Native{ComponentName}{VariantName}
                                    const variantName = variant.name.split(" ").map((w)=>w.charAt(0).toUpperCase() + w.slice(1)).join("");
                                    const expectedName = `${componentPrefix}${variantName}`;
                                    const demoName = Object.keys(demoModule).find((name)=>name === expectedName || name.toLowerCase() === `${componentPrefix.toLowerCase()}${variant.id.charAt(0).toUpperCase() + variant.id.slice(1)}` || name.toLowerCase().includes(variant.id.toLowerCase()) || name.toLowerCase().includes(variant.name.toLowerCase().replace(/\s+/g, "")));
                                    if (demoName && demoModule[demoName]) {
                                        variantMap[variant.id] = demoModule[demoName];
                                    }
                                });
                                setDynamicVariants(variantMap);
                            }
                        } catch (e) {
                            // Demo file doesn't exist, use the component directly
                            setDynamicComponent(()=>shadcnuiModule[componentName]);
                            setDynamicVariants({});
                        }
                    }
                } catch (error) {
                    console.error("Failed to load component:", error);
                    setDynamicComponent(null);
                    setDynamicVariants({});
                } finally{
                    setIsLoadingComponent(false);
                }
            };
            loadComponent();
        } else if (component.availableIn && component.availableIn.length > 1) {
            // Dynamic loading for non-native components (sections) if they support multiple libraries
            const loadSectionComponent = async ()=>{
                try {
                    if (selectedLibrary === "baseui") {
                        const baseuiModule = await __turbopack_context__.f({
                            "@uitripled/ui/components/sections/base-ui/about-us-section-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/about-us-section-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/about-us-section-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/bento-grid-block-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/bento-grid-block-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/bento-grid-block-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/blog-block-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/blog-block-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/blog-block-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/browse-folder-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/browse-folder-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/browse-folder-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/cinema-ticket-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/cinema-ticket-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/cinema-ticket-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/conference-ticket-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/conference-ticket-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/conference-ticket-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/contact-block-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/contact-block-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/contact-block-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/contact-form-section-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/contact-form-section-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/contact-form-section-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/cta-banner-section-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/cta-banner-section-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/cta-banner-section-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/cta-block-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/cta-block-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/cta-block-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/cta-hero-block-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/cta-hero-block-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/cta-hero-block-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/currency-converter-card-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/currency-converter-card-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/currency-converter-card-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/faq-accordion-block-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/faq-accordion-block-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/faq-accordion-block-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/faq-section-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/faq-section-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/faq-section-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/feature-cards-block-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/feature-cards-block-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/feature-cards-block-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/feature-comparison-block-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/feature-comparison-block-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/feature-comparison-block-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/feature-grid-section-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/feature-grid-section-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/feature-grid-section-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/footer-block-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/footer-block-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/footer-block-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/gallery-grid-block-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/gallery-grid-block-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/gallery-grid-block-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/glassmorphism-cta-block-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/glassmorphism-cta-block-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/glassmorphism-cta-block-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/glassmorphism-hero-block-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/glassmorphism-hero-block-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/glassmorphism-hero-block-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/glassmorphism-launch-timeline-block-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/glassmorphism-launch-timeline-block-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/glassmorphism-launch-timeline-block-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/glassmorphism-listen-app-block-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/glassmorphism-listen-app-block-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/glassmorphism-listen-app-block-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/glassmorphism-logo-showcase-block-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/glassmorphism-logo-showcase-block-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/glassmorphism-logo-showcase-block-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/glassmorphism-minimal-metrics-block-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/glassmorphism-minimal-metrics-block-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/glassmorphism-minimal-metrics-block-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/glassmorphism-portfolio-block-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/glassmorphism-portfolio-block-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/glassmorphism-portfolio-block-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/glassmorphism-pricing-block-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/glassmorphism-pricing-block-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/glassmorphism-pricing-block-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/glassmorphism-product-update-block-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/glassmorphism-product-update-block-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/glassmorphism-product-update-block-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/glassmorphism-statistics-card-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/glassmorphism-statistics-card-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/glassmorphism-statistics-card-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/glassmorphism-testimonials-block-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/glassmorphism-testimonials-block-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/glassmorphism-testimonials-block-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/glowy-waves-hero-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/glowy-waves-hero-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/glowy-waves-hero-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/hero-block-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/hero-block-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/hero-block-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/hero-section-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/hero-section-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/hero-section-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/interactive-logs-table-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/interactive-logs-table-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/interactive-logs-table-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/n8n-workflow-block-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/n8n-workflow-block-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/n8n-workflow-block-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/new-hero-section-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/new-hero-section-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/new-hero-section-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/newsletter-signup-block-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/newsletter-signup-block-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/newsletter-signup-block-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/notion-blog-page-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/notion-blog-page-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/notion-blog-page-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/our-partners-section-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/our-partners-section-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/our-partners-section-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/our-services-section-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/our-services-section-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/our-services-section-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/pricing-section-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/pricing-section-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/pricing-section-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/projects-block-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/projects-block-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/projects-block-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/scroll-reveal-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/scroll-reveal-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/scroll-reveal-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/services-grid-block-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/services-grid-block-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/services-grid-block-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/stats-counter-block-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/stats-counter-block-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/stats-counter-block-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/stats-section-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/stats-section-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/stats-section-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/team-section-block-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/team-section-block-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/team-section-block-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/testimonial-section-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/testimonial-section-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/testimonial-section-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/testimonials-block-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/testimonials-block-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/testimonials-block-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/theater-ticket-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/theater-ticket-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/theater-ticket-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            },
                            "@uitripled/ui/components/sections/base-ui/timeline-block-baseui": {
                                id: ()=>"[project]/packages/ui/src/components/sections/base-ui/timeline-block-baseui.tsx [app-ssr] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/packages/ui/src/components/sections/base-ui/timeline-block-baseui.tsx [app-ssr] (ecmascript, async loader)")
                            }
                        }).import(`@uitripled/ui/components/sections/base-ui/${component.id}-baseui`);
                        const exports = Object.keys(baseuiModule);
                        // Prefer export that matches component name with -baseui suffix removed or CamelCase
                        // But usually it's just the main export
                        const componentName = exports.find((key)=>key.toLowerCase().includes(component.id.replace(/-/g, "")) || key.toLowerCase().includes("baseui")) || exports[0];
                        if (baseuiModule[componentName]) {
                            setDynamicComponent(()=>baseuiModule[componentName]);
                        }
                    } else {
                        // For shadcnui (default), we rely on the statically imported component
                        // passed via props, so set dynamic to null to fallback
                        setDynamicComponent(null);
                    }
                } catch (error) {
                    console.error("Failed to load section component variant", error);
                    setDynamicComponent(null);
                } finally{
                    setIsLoadingComponent(false);
                }
            };
            loadSectionComponent();
        }
    }, [
        selectedLibrary,
        component.category,
        component.id,
        component.availableIn,
        relatedComponents
    ]);
    // Determine the active component based on selected library
    // For non-native components with baseuiComponent defined, use it directly
    const ActiveComponent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        if (dynamicComponent) {
            return dynamicComponent;
        }
        // If selectedLibrary is baseui and component has baseuiComponent, use it
        if (selectedLibrary === "baseui" && component.baseuiComponent) {
            return component.baseuiComponent;
        }
        return Component;
    }, [
        dynamicComponent,
        selectedLibrary,
        component.baseuiComponent,
        Component
    ]);
    // Use the appropriate code based on selected library
    const displayCode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        if (component.category === "native" || component.availableIn && component.availableIn.length > 1) {
            if (selectedLibrary === "baseui" && baseuiCode) {
                return baseuiCode;
            } else if (selectedLibrary === "shadcnui" && shadcnuiCode) {
                return shadcnuiCode;
            } else if (selectedLibrary === "carbon" && carbonCode) {
                return carbonCode;
            }
        }
        return code;
    }, [
        selectedLibrary,
        component.category,
        component.id,
        code,
        baseuiCode,
        shadcnuiCode,
        carbonCode
    ]);
    const installId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        if (component.category === "native" || component.availableIn && component.availableIn.length > 1) {
            return `${component.id}-${selectedLibrary}`;
        }
        return component.id;
    }, [
        component.id,
        component.category,
        selectedLibrary
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "flex h-full flex-1 flex-col overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollArea"], {
            className: "flex-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 md:py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        className: "mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-3 flex flex-wrap items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded border border-border bg-card px-2 py-1 text-xs font-medium text-muted-foreground",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categoryNames"][component.category]
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                        lineNumber: 587,
                                        columnNumber: 15
                                    }, this),
                                    component.duration && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-muted-foreground",
                                        children: component.duration
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                        lineNumber: 591,
                                        columnNumber: 17
                                    }, this),
                                    component.easing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-muted-foreground",
                                        children: component.easing
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                        lineNumber: 596,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                lineNumber: 586,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2 flex items-start justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "mb-2 text-3xl font-semibold sm:text-4xl",
                                                children: component.name
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                lineNumber: 603,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-4 text-sm text-muted-foreground sm:text-base",
                                                children: component.description
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                lineNumber: 606,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                        lineNumber: 602,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        size: "sm",
                                        onClick: handleCopyMarkdown,
                                        className: "gap-2",
                                        children: copiedMarkdown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                    lineNumber: 618,
                                                    columnNumber: 21
                                                }, this),
                                                "Copied .md"
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                    lineNumber: 623,
                                                    columnNumber: 21
                                                }, this),
                                                "Copy .md"
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                        lineNumber: 610,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                lineNumber: 601,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-1.5",
                                children: [
                                    component.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded border border-border bg-muted px-2 py-0.5 text-xs text-muted-foreground",
                                            children: tag
                                        }, tag, false, {
                                            fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                            lineNumber: 631,
                                            columnNumber: 17
                                        }, this)),
                                    component.availableIn?.includes("carbon") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400",
                                        children: "Pure React"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                        lineNumber: 639,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                lineNumber: 629,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    delay: 0.3
                                },
                                className: "mt-4 hidden items-center gap-2 text-xs text-muted-foreground/70 md:flex",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Use"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                        lineNumber: 651,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                        className: "pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                            className: "h-3 w-3"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                            lineNumber: 653,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                        lineNumber: 652,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                        className: "pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "h-3 w-3"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                            lineNumber: 656,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                        lineNumber: 655,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "to navigate between components"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                        lineNumber: 658,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                lineNumber: 645,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                        lineNumber: 581,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tabs"], {
                        value: activeTab,
                        onValueChange: setActiveTab,
                        className: "w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsList"], {
                                className: "max-w-full overflow-x-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "view",
                                        children: "Preview"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                        lineNumber: 668,
                                        columnNumber: 15
                                    }, this),
                                    component.category !== "native" && selectedLibrary !== "baseui" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "edit",
                                        children: "Live Edit"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                        lineNumber: 671,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                lineNumber: 667,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsContent"], {
                                value: "view",
                                className: "space-y-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap items-center justify-between gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-lg font-semibold",
                                                            children: "Preview"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                            lineNumber: 680,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                relatedComponents && relatedComponents.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                                    value: selectedVariantId,
                                                                    onValueChange: setSelectedVariantId,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                            className: "w-[180px]",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                                placeholder: "Select variant"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                                lineNumber: 707,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                            lineNumber: 706,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                                            children: relatedComponents.map((variant)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                    value: variant.id,
                                                                                    children: variant.name
                                                                                }, variant.id, false, {
                                                                                    fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                                    lineNumber: 711,
                                                                                    columnNumber: 31
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                            lineNumber: 709,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                    lineNumber: 702,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                    variant: "outline",
                                                                    size: "sm",
                                                                    onClick: ()=>{
                                                                        if (relatedComponents && relatedComponents.length > 0) {
                                                                            handleVariantRefresh(selectedVariantId);
                                                                        } else {
                                                                            handleRefresh();
                                                                        }
                                                                    },
                                                                    className: "gap-1.5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                                            className: "h-3 w-3"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                            lineNumber: 733,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        "Refresh"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                    lineNumber: 718,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                            lineNumber: 681,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                    lineNumber: 679,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative min-h-[320px] py-6 md:min-h-[50vh] border border-border rounded-lg flex items-center justify-center bg-background/50",
                                                    children: isLoadingComponent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col items-center justify-center gap-4 p-8",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                animate: {
                                                                    rotate: 360
                                                                },
                                                                transition: {
                                                                    duration: 1,
                                                                    repeat: Infinity,
                                                                    ease: "linear"
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                                    className: "h-8 w-8 text-muted-foreground"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                    lineNumber: 750,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                lineNumber: 742,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-muted-foreground",
                                                                children: "Loading component..."
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                lineNumber: 752,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                        lineNumber: 741,
                                                        columnNumber: 23
                                                    }, this) : !isAvailableInSelectedLibrary ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col items-center justify-center gap-4 p-8 text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "rounded-full bg-muted p-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                                    className: "h-8 w-8 text-muted-foreground"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                    lineNumber: 759,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                lineNumber: 758,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-lg font-semibold",
                                                                        children: [
                                                                            "Not Available in ",
                                                                            __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uiLibraryLabels"][selectedLibrary]
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                        lineNumber: 762,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-muted-foreground max-w-md",
                                                                        children: [
                                                                            "This component is not implemented in",
                                                                            " ",
                                                                            __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uiLibraryLabels"][selectedLibrary],
                                                                            ".",
                                                                            availableLibraries.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                children: [
                                                                                    " ",
                                                                                    "Available in:",
                                                                                    " ",
                                                                                    availableLibraries.map((lib)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uiLibraryLabels"][lib]).join(", "),
                                                                                    "."
                                                                                ]
                                                                            }, void 0, true)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                        lineNumber: 765,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                lineNumber: 761,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-2 flex-wrap justify-center",
                                                                children: availableLibraries.map((lib)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                        variant: "outline",
                                                                        size: "sm",
                                                                        onClick: ()=>setSelectedLibrary(lib),
                                                                        children: [
                                                                            "Switch to ",
                                                                            __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uiLibraryLabels"][lib]
                                                                        ]
                                                                    }, lib, true, {
                                                                        fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                        lineNumber: 782,
                                                                        columnNumber: 29
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                lineNumber: 780,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                        lineNumber: 757,
                                                        columnNumber: 23
                                                    }, this) : relatedComponents && relatedComponents.length > 0 ? (()=>{
                                                        const selectedVariant = relatedComponents.find((v)=>v.id === selectedVariantId) || relatedComponents[0];
                                                        if (!selectedVariant) return null;
                                                        // Use dynamically loaded variant component if available, otherwise use original
                                                        const ActiveComponent = dynamicVariants[selectedVariant.id] || selectedVariant.component;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                            initial: {
                                                                opacity: 0,
                                                                scale: 0.95
                                                            },
                                                            animate: {
                                                                opacity: 1,
                                                                scale: 1
                                                            },
                                                            transition: {
                                                                duration: 0.2
                                                            },
                                                            className: "flex items-center justify-center w-full h-full p-8",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ActiveComponent, {}, void 0, false, {
                                                                fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                lineNumber: 816,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, selectedVariant.id + selectedLibrary + (variantRefreshKeys[selectedVariant.id] || 0), false, {
                                                            fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                            lineNumber: 805,
                                                            columnNumber: 27
                                                        }, this);
                                                    })() : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        initial: {
                                                            opacity: 0,
                                                            scale: 0.95
                                                        },
                                                        animate: {
                                                            opacity: 1,
                                                            scale: 1
                                                        },
                                                        transition: {
                                                            duration: 0.2
                                                        },
                                                        className: "flex items-center justify-center w-full h-full p-8",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ActiveComponent, {}, void 0, false, {
                                                            fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                            lineNumber: 828,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, `${refreshKey}-${selectedLibrary}`, false, {
                                                        fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                        lineNumber: 821,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                    lineNumber: 739,
                                                    columnNumber: 19
                                                }, this),
                                                isAvailableInSelectedLibrary && relatedComponents && relatedComponents.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-sm font-medium",
                                                            children: "Usage"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                            lineNumber: 837,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$code$2d$block$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CodeBlock"], {
                                                            code: (()=>{
                                                                // If we have a library-specific demo code and we are on the default variant (or just general usage), use it
                                                                // For native components with "default" variant, this overrides the registry code
                                                                if (component.category === "native" && selectedVariantId === "default") {
                                                                    if (selectedLibrary === "baseui" && baseuiDemoCode) return baseuiDemoCode;
                                                                    if (selectedLibrary === "shadcnui" && shadcnuiDemoCode) return shadcnuiDemoCode;
                                                                    if (selectedLibrary === "carbon" && carbonDemoCode) return carbonDemoCode;
                                                                }
                                                                // Fallback to existing logic
                                                                return relatedComponents && relatedComponents.length > 0 && variantCodes ? variantCodes[selectedVariantId] || displayCode : displayCode;
                                                            })()
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                            lineNumber: 838,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                    lineNumber: 836,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                            lineNumber: 678,
                                            columnNumber: 17
                                        }, this),
                                        showLongCodeNote && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                y: 10
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                delay: 0.05
                                            },
                                            className: "mb-3 flex gap-3 rounded-lg border border-yellow-500/40 bg-yellow-500/10 p-3 text-yellow-700/80 dark:text-yellow-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                    className: "mt-0.5 h-4 w-4 flex-shrink-0 text-yellow-600 dark:text-yellow-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                    lineNumber: 882,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1 text-xs sm:text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-semibold text-yellow-700 dark:text-yellow-200",
                                                            children: [
                                                                "Heads up - this component is long (",
                                                                codeLineCount,
                                                                " ",
                                                                "lines)"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                            lineNumber: 884,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: "We include everything in one file for easy copy-paste (including dummy data), but keep in mind you should split your logic when integrating it (e.g., move data fetching to loaders, hooks, or API utilities)."
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                            lineNumber: 888,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                    lineNumber: 883,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                            lineNumber: 876,
                                            columnNumber: 19
                                        }, this),
                                        isAvailableInSelectedLibrary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-4 flex items-center justify-between",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg font-semibold",
                                                        children: "Installation"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                        lineNumber: 902,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                    lineNumber: 901,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tabs"], {
                                                    defaultValue: "cli",
                                                    className: "w-full",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsList"], {
                                                            className: "w-full justify-start border-b rounded-none bg-transparent p-0 h-auto",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                                                    value: "cli",
                                                                    className: "rounded-none border-b-2 border-transparent cursor-pointer data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-2",
                                                                    children: "CLI"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                    lineNumber: 907,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                                                    value: "manual",
                                                                    className: "rounded-none border-b-2 border-transparent cursor-pointer data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-2",
                                                                    children: "Manual"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                    lineNumber: 913,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                            lineNumber: 906,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsContent"], {
                                                            value: "cli",
                                                            className: "mt-6 md:max-w-2xl",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                initial: {
                                                                    opacity: 0,
                                                                    y: 10
                                                                },
                                                                animate: {
                                                                    opacity: 1,
                                                                    y: 0
                                                                },
                                                                transition: {
                                                                    delay: 0.1
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tabs"], {
                                                                    defaultValue: "shadcn",
                                                                    className: "w-full",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsList"], {
                                                                            className: "grid w-full grid-cols-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                                                                    value: "shadcn",
                                                                                    className: "gap-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                            src: "/logos/shadcnui_dark.svg",
                                                                                            alt: "shadcn",
                                                                                            className: "h-4 w-4 dark:hidden"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                                            lineNumber: 930,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                            src: "/logos/shadcnui_white.svg",
                                                                                            alt: "shadcn",
                                                                                            className: "hidden h-4 w-4 dark:block"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                                            lineNumber: 935,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        "shadcn"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                                    lineNumber: 929,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                                                                    value: "uitripled",
                                                                                    className: "gap-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                            src: "/logos/logo-black.svg",
                                                                                            alt: "uitripled",
                                                                                            className: "h-6 w-6 dark:hidden"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                                            lineNumber: 943,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                            src: "/logos/logo.svg",
                                                                                            alt: "uitripled",
                                                                                            className: "hidden h-6 w-6 dark:block"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                                            lineNumber: 948,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        "uitripled"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                                    lineNumber: 942,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                            lineNumber: 928,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsContent"], {
                                                                            value: "uitripled",
                                                                            className: "mt-4",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "relative rounded-lg border border-border bg-card",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center justify-between border-b border-border px-4 py-2.5",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "text-xs font-medium text-muted-foreground",
                                                                                                children: "Terminal"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                                                lineNumber: 959,
                                                                                                columnNumber: 35
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                onClick: ()=>handleCopyInstall(`npx uitripled add ${installId}`, "uitripled"),
                                                                                                className: "flex items-center gap-1.5 rounded border border-border bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-ring hover:text-foreground",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                                                                    mode: "wait",
                                                                                                    children: copiedInstall === "uitripled" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                                                        initial: {
                                                                                                            scale: 0
                                                                                                        },
                                                                                                        animate: {
                                                                                                            scale: 1
                                                                                                        },
                                                                                                        exit: {
                                                                                                            scale: 0
                                                                                                        },
                                                                                                        className: "flex items-center gap-1.5",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                                                className: "h-3 w-3"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                                                                lineNumber: 980,
                                                                                                                columnNumber: 43
                                                                                                            }, this),
                                                                                                            "Copied"
                                                                                                        ]
                                                                                                    }, "check", true, {
                                                                                                        fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                                                        lineNumber: 973,
                                                                                                        columnNumber: 41
                                                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                                                        initial: {
                                                                                                            scale: 0
                                                                                                        },
                                                                                                        animate: {
                                                                                                            scale: 1
                                                                                                        },
                                                                                                        exit: {
                                                                                                            scale: 0
                                                                                                        },
                                                                                                        className: "flex items-center gap-1.5",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                                                                className: "h-3 w-3"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                                                                lineNumber: 991,
                                                                                                                columnNumber: 43
                                                                                                            }, this),
                                                                                                            "Copy"
                                                                                                        ]
                                                                                                    }, "copy", true, {
                                                                                                        fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                                                        lineNumber: 984,
                                                                                                        columnNumber: 41
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                                                    lineNumber: 971,
                                                                                                    columnNumber: 37
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                                                lineNumber: 962,
                                                                                                columnNumber: 35
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                                        lineNumber: 958,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "overflow-x-auto bg-card p-4",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                                            className: "text-sm text-foreground",
                                                                                            children: [
                                                                                                "npx uitripled add ",
                                                                                                installId
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                                            lineNumber: 999,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                                        lineNumber: 998,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                                lineNumber: 957,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                            lineNumber: 956,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsContent"], {
                                                                            value: "shadcn",
                                                                            className: "mt-4",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "relative rounded-lg border border-border bg-card",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center justify-between border-b border-border px-4 py-2.5",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "text-xs font-medium text-muted-foreground",
                                                                                                children: "Terminal"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                                                lineNumber: 1008,
                                                                                                columnNumber: 35
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                onClick: ()=>handleCopyInstall(`npx shadcn@latest add @uitripled/${installId}`, "shadcn"),
                                                                                                className: "flex items-center gap-1.5 rounded border border-border bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-ring hover:text-foreground",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                                                                    mode: "wait",
                                                                                                    children: copiedInstall === "shadcn" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                                                        initial: {
                                                                                                            scale: 0
                                                                                                        },
                                                                                                        animate: {
                                                                                                            scale: 1
                                                                                                        },
                                                                                                        exit: {
                                                                                                            scale: 0
                                                                                                        },
                                                                                                        className: "flex items-center gap-1.5",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                                                className: "h-3 w-3"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                                                                lineNumber: 1029,
                                                                                                                columnNumber: 43
                                                                                                            }, this),
                                                                                                            "Copied"
                                                                                                        ]
                                                                                                    }, "check", true, {
                                                                                                        fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                                                        lineNumber: 1022,
                                                                                                        columnNumber: 41
                                                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                                                        initial: {
                                                                                                            scale: 0
                                                                                                        },
                                                                                                        animate: {
                                                                                                            scale: 1
                                                                                                        },
                                                                                                        exit: {
                                                                                                            scale: 0
                                                                                                        },
                                                                                                        className: "flex items-center gap-1.5",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                                                                className: "h-3 w-3"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                                                                lineNumber: 1040,
                                                                                                                columnNumber: 43
                                                                                                            }, this),
                                                                                                            "Copy"
                                                                                                        ]
                                                                                                    }, "copy", true, {
                                                                                                        fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                                                        lineNumber: 1033,
                                                                                                        columnNumber: 41
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                                                    lineNumber: 1020,
                                                                                                    columnNumber: 37
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                                                lineNumber: 1011,
                                                                                                columnNumber: 35
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                                        lineNumber: 1007,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "overflow-x-auto bg-card p-4",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                                            className: "text-sm text-foreground",
                                                                                            children: [
                                                                                                "npx shadcn@latest add @uitripled/",
                                                                                                installId
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                                            lineNumber: 1048,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                                        lineNumber: 1047,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                                lineNumber: 1006,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                            lineNumber: 1005,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                    lineNumber: 927,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                lineNumber: 922,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                            lineNumber: 921,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsContent"], {
                                                            value: "manual",
                                                            className: "mt-6",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$code$2d$block$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CodeBlock"], {
                                                                code: displayCode
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                lineNumber: 1059,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                            lineNumber: 1058,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                    lineNumber: 905,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                            lineNumber: 900,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                    lineNumber: 676,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                lineNumber: 675,
                                columnNumber: 13
                            }, this),
                            component.category !== "native" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsContent"], {
                                value: "edit",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                y: 10
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                delay: 0.1
                                            },
                                            className: "rounded-lg border border-border p-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                        className: "h-5 w-5 flex-shrink-0 mt-0.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                        lineNumber: 1077,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "mb-1.5 text-sm font-semibold",
                                                                children: "Live Editor - Colors & Theme"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                lineNumber: 1079,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-muted-foreground/80",
                                                                children: [
                                                                    "The colors and theme are customizable via Tailwind CSS classes. The default theme uses dark mode colors defined in your",
                                                                    " ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                        className: "rounded border border-border px-1.5 py-0.5 text-[11px]",
                                                                        children: "globals.css"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                        lineNumber: 1086,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    " ",
                                                                    "file."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                                lineNumber: 1082,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                        lineNumber: 1078,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                                lineNumber: 1076,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                            lineNumber: 1070,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$live$2d$editor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LiveEditor"], {
                                            initialCode: code
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                            lineNumber: 1094,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                    lineNumber: 1069,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                                lineNumber: 1068,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                        lineNumber: 662,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
                lineNumber: 580,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
            lineNumber: 579,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/app/components/[id]/AnimationDetailPage.client.tsx",
        lineNumber: 578,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=apps_web_597fa53e._.js.map