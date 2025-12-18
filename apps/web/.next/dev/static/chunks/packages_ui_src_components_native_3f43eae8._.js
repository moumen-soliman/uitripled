(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/packages/ui/src/components/native/base-ui/native-button-baseui.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeButton",
    ()=>NativeButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/react/esm/button/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const NativeButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant = "default", size = "lg", children, loading = false, glow = false, disabled, ...props }, ref)=>{
    const buttonContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "w-4 h-4 mr-2 animate-spin"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/base-ui/native-button-baseui.tsx",
                lineNumber: 45,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex justify-center items-center gap-2 w-full"),
                animate: loading ? {
                    opacity: [
                        1,
                        0.5,
                        1
                    ]
                } : {
                    opacity: 1
                },
                transition: loading ? {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                } : {
                    duration: 0.2
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/base-ui/native-button-baseui.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
    const variantStyles = {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
    };
    const sizeStyles = {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
    };
    const glassmorphismClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", variantStyles[variant], sizeStyles[size], "cursor-pointer h-12 rounded-md text-sm relative overflow-hidden", !glow && "shadow-md hover:shadow-lg", glow && "shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300", variant === "outline" && "text-foreground/80 hover:bg-foreground/5", (disabled || loading) && "opacity-50 cursor-not-allowed grayscale", className);
    // We remove the motion.div wrapper to prevent nested button issues when used in asChild.
    // Ideally we would use motion.button but we want to keep using Base UI Button.
    // For now, we sacrifice the scale tap/hover effect on the wrapper for correctness,
    // or we could use a different approach if critical.
    // The glow effect moves inside.
    if (props.href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            ref: ref,
            className: glassmorphismClassName,
            "aria-disabled": disabled || loading,
            ...props,
            children: [
                glow && !disabled && !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                }, void 0, false, {
                    fileName: "[project]/packages/ui/src/components/native/base-ui/native-button-baseui.tsx",
                    lineNumber: 106,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                buttonContent
            ]
        }, void 0, true, {
            fileName: "[project]/packages/ui/src/components/native/base-ui/native-button-baseui.tsx",
            lineNumber: 99,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        ref: ref,
        nativeButton: true,
        className: glassmorphismClassName,
        disabled: disabled || loading,
        "aria-busy": loading,
        ...props,
        children: [
            glow && !disabled && !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/base-ui/native-button-baseui.tsx",
                lineNumber: 123,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            buttonContent
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/native-button-baseui.tsx",
        lineNumber: 114,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = NativeButton;
NativeButton.displayName = "NativeButton";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "NativeButton$React.forwardRef");
__turbopack_context__.k.register(_c1, "NativeButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/carbon/native-badge-carbon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeBadge",
    ()=>NativeBadge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
"use client";
;
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border border-primary/20 bg-primary/10 text-primary hover:bg-primary/20 hover:border-primary/40 hover:shadow-[0_0_10px_rgba(var(--primary),0.1)]",
            neutral: "border border-border/40 bg-card/50 text-muted-foreground backdrop-blur-sm hover:bg-card/80 hover:text-foreground hover:border-border/80",
            outline: "text-foreground border border-input bg-background/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground",
            glass: "bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10 text-foreground shadow-sm hover:bg-white/20 dark:hover:bg-black/20",
            glow: "bg-primary/10 text-primary border border-primary/20 shadow-[0_0_10px_rgba(var(--primary),0.2)] hover:shadow-[0_0_20px_rgba(var(--primary),0.4)] hover:bg-primary/20 hover:scale-[1.02]",
            animated: "group gap-2 tracking-widest uppercase border border-border/60 bg-card/70 text-muted-foreground backdrop-blur hover:border-primary/60 hover:bg-primary/15 hover:text-primary transition-colors duration-300"
        },
        size: {
            sm: "text-[10px] px-2 py-0.5",
            md: "text-xs px-2.5 py-0.5",
            lg: "text-sm px-3.5 py-1"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "md"
    }
});
function NativeBadge({ className, variant, size, animate = true, tag = "new", icon, children, ...props }) {
    const isAnimated = variant === "animated";
    const IconElement = icon ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
        className: "h-3 w-3 text-primary"
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/carbon/native-badge-carbon.tsx",
        lineNumber: 74,
        columnNumber: 31
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: animate ? {
            opacity: 0,
            scale: 0.9
        } : {
            opacity: 1,
            scale: 1
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        whileHover: {
            scale: 1.05
        },
        whileTap: {
            scale: 0.95
        },
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 20
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant,
            size
        }), className),
        ...props,
        children: [
            isAnimated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                animate: {
                    rotate: [
                        0,
                        15,
                        -15,
                        0
                    ],
                    opacity: [
                        0.6,
                        1,
                        0.6
                    ]
                },
                transition: {
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                },
                className: "inline-block",
                "aria-hidden": true,
                children: IconElement
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/carbon/native-badge-carbon.tsx",
                lineNumber: 87,
                columnNumber: 9
            }, this),
            children,
            isAnimated && tag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "rounded-full border border-border/40 bg-white/5 px-2 py-0.5 text-[0.6rem] text-muted-foreground transition-colors duration-300 group-hover:border-primary/60 group-hover:bg-primary/25 group-hover:text-primary",
                children: tag
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/carbon/native-badge-carbon.tsx",
                lineNumber: 98,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/carbon/native-badge-carbon.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_c = NativeBadge;
;
var _c;
__turbopack_context__.k.register(_c, "NativeBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/carbon/demo/native-badge-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeBadgeAnimated",
    ()=>NativeBadgeAnimated,
    "NativeBadgeDefault",
    ()=>NativeBadgeDefault,
    "NativeBadgeDemo",
    ()=>NativeBadgeDemo,
    "NativeBadgeGlass",
    ()=>NativeBadgeGlass,
    "NativeBadgeGlow",
    ()=>NativeBadgeGlow,
    "NativeBadgeNeutral",
    ()=>NativeBadgeNeutral,
    "NativeBadgeOutline",
    ()=>NativeBadgeOutline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$carbon$2f$native$2d$badge$2d$carbon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/native/carbon/native-badge-carbon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
"use client";
;
;
;
function NativeBadgeDefault() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$carbon$2f$native$2d$badge$2d$carbon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeBadge"], {
            children: "New Feature"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-badge-demo.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-badge-demo.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = NativeBadgeDefault;
function NativeBadgeNeutral() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$carbon$2f$native$2d$badge$2d$carbon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeBadge"], {
            variant: "neutral",
            children: "Coming Soon"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-badge-demo.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-badge-demo.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c1 = NativeBadgeNeutral;
function NativeBadgeOutline() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$carbon$2f$native$2d$badge$2d$carbon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeBadge"], {
            variant: "outline",
            children: "Experimental"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-badge-demo.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-badge-demo.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c2 = NativeBadgeOutline;
function NativeBadgeGlass() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$carbon$2f$native$2d$badge$2d$carbon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeBadge"], {
            variant: "glass",
            children: "Glassmorphism"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-badge-demo.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-badge-demo.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c3 = NativeBadgeGlass;
function NativeBadgeGlow() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$carbon$2f$native$2d$badge$2d$carbon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeBadge"], {
            variant: "glow",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                    className: "w-3 h-3 mr-1"
                }, void 0, false, {
                    fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-badge-demo.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                "AI Powered"
            ]
        }, void 0, true, {
            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-badge-demo.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-badge-demo.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c4 = NativeBadgeGlow;
function NativeBadgeAnimated() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$carbon$2f$native$2d$badge$2d$carbon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeBadge"], {
            variant: "animated",
            children: "Feature"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-badge-demo.tsx",
            lineNumber: 52,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-badge-demo.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c5 = NativeBadgeAnimated;
function NativeBadgeDemo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-8 w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-muted-foreground text-sm",
                            children: "Default"
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-badge-demo.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeBadgeDefault, {}, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-badge-demo.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-badge-demo.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-muted-foreground text-sm",
                            children: "Neutral"
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-badge-demo.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeBadgeNeutral, {}, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-badge-demo.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-badge-demo.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-muted-foreground text-sm",
                            children: "Outline"
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-badge-demo.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeBadgeOutline, {}, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-badge-demo.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-badge-demo.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-muted-foreground text-sm",
                            children: "Glass"
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-badge-demo.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeBadgeGlass, {}, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-badge-demo.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-badge-demo.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-muted-foreground text-sm",
                            children: "Glow"
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-badge-demo.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeBadgeGlow, {}, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-badge-demo.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-badge-demo.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-muted-foreground text-sm",
                            children: "Animated"
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-badge-demo.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeBadgeAnimated, {}, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-badge-demo.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-badge-demo.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-badge-demo.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-badge-demo.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_c6 = NativeBadgeDemo;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "NativeBadgeDefault");
__turbopack_context__.k.register(_c1, "NativeBadgeNeutral");
__turbopack_context__.k.register(_c2, "NativeBadgeOutline");
__turbopack_context__.k.register(_c3, "NativeBadgeGlass");
__turbopack_context__.k.register(_c4, "NativeBadgeGlow");
__turbopack_context__.k.register(_c5, "NativeBadgeAnimated");
__turbopack_context__.k.register(_c6, "NativeBadgeDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/carbon/native-counter-up-carbon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeCounterUp",
    ()=>NativeCounterUp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function NativeCounterUp({ value, duration = 2, prefix = "", suffix = "", decimals = 0, label, autoStart = true, className }) {
    _s();
    const shouldReduceMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const [displayValue, setDisplayValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NativeCounterUp.useEffect": ()=>{
            if (!autoStart) return;
            // If reduced motion, just set the value immediately
            if (shouldReduceMotion) {
                setDisplayValue(value);
                return;
            }
            // Animate from current value to target value
            const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(0, value, {
                duration,
                ease: [
                    0.16,
                    1,
                    0.3,
                    1
                ],
                onUpdate: {
                    "NativeCounterUp.useEffect.controls": (latest)=>{
                        setDisplayValue(decimals > 0 ? Number(latest.toFixed(decimals)) : Math.round(latest));
                    }
                }["NativeCounterUp.useEffect.controls"]
            });
            return ({
                "NativeCounterUp.useEffect": ()=>controls.stop()
            })["NativeCounterUp.useEffect"];
        }
    }["NativeCounterUp.useEffect"], [
        value,
        duration,
        autoStart,
        shouldReduceMotion,
        decimals
    ]);
    const formattedValue = displayValue.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
        initial: {
            opacity: 0,
            y: 10
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("tabular-nums font-bold", className),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [
            prefix,
            formattedValue,
            suffix,
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: label
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/carbon/native-counter-up-carbon.tsx",
                lineNumber: 96,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/carbon/native-counter-up-carbon.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
_s(NativeCounterUp, "XYH/m5yNQXWcW7PuGQRkIXJT8es=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = NativeCounterUp;
var _c;
__turbopack_context__.k.register(_c, "NativeCounterUp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/carbon/demo/native-counter-up-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeCounterUpCurrency",
    ()=>NativeCounterUpCurrency,
    "NativeCounterUpDefault",
    ()=>NativeCounterUpDefault,
    "NativeCounterUpDemo",
    ()=>NativeCounterUpDemo,
    "NativeCounterUpPercentage",
    ()=>NativeCounterUpPercentage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$carbon$2f$native$2d$counter$2d$up$2d$carbon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/native/carbon/native-counter-up-carbon.tsx [app-client] (ecmascript)");
"use client";
;
;
function NativeCounterUpDefault() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$carbon$2f$native$2d$counter$2d$up$2d$carbon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeCounterUp"], {
            value: 1000,
            className: "text-4xl text-foreground"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-counter-up-demo.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-counter-up-demo.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = NativeCounterUpDefault;
function NativeCounterUpCurrency() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$carbon$2f$native$2d$counter$2d$up$2d$carbon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeCounterUp"], {
            value: 9999.99,
            prefix: "$",
            decimals: 2,
            className: "text-4xl text-primary",
            label: "Total revenue"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-counter-up-demo.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-counter-up-demo.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c1 = NativeCounterUpCurrency;
function NativeCounterUpPercentage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$carbon$2f$native$2d$counter$2d$up$2d$carbon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeCounterUp"], {
            value: 87,
            suffix: "%",
            duration: 1.5,
            className: "text-4xl text-green-500",
            label: "Success rate"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-counter-up-demo.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-counter-up-demo.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c2 = NativeCounterUpPercentage;
function NativeCounterUpDemo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-8 w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-6 md:grid-cols-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-muted-foreground text-sm",
                            children: "Default"
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-counter-up-demo.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeCounterUpDefault, {}, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-counter-up-demo.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-counter-up-demo.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-muted-foreground text-sm",
                            children: "Currency"
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-counter-up-demo.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeCounterUpCurrency, {}, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-counter-up-demo.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-counter-up-demo.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-muted-foreground text-sm",
                            children: "Percentage"
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-counter-up-demo.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeCounterUpPercentage, {}, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-counter-up-demo.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-counter-up-demo.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-counter-up-demo.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-counter-up-demo.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = NativeCounterUpDemo;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "NativeCounterUpDefault");
__turbopack_context__.k.register(_c1, "NativeCounterUpCurrency");
__turbopack_context__.k.register(_c2, "NativeCounterUpPercentage");
__turbopack_context__.k.register(_c3, "NativeCounterUpDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/carbon/native-follow-cursor-carbon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeFollowCursor",
    ()=>NativeFollowCursor,
    "NativeFollowCursorArea",
    ()=>NativeFollowCursorArea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const sizeVariants = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-1.5",
    lg: "text-base px-4 py-2"
};
const dotSizeVariants = {
    sm: "h-1.5 w-1.5",
    md: "h-2 w-2",
    lg: "h-2.5 w-2.5"
};
function NativeFollowCursor({ name, children, size = "md", variant = "default", offset = {
    x: 12,
    y: 12
}, stiffness = 150, damping = 20, className, showDot }) {
    _s();
    const shouldShowDot = showDot ?? (children ? false : true);
    const content = children || name;
    const cursorX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const cursorY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const springConfig = {
        stiffness,
        damping
    };
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(cursorX, springConfig);
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(cursorY, springConfig);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NativeFollowCursor.useEffect": ()=>{
            const handleMouseMove = {
                "NativeFollowCursor.useEffect.handleMouseMove": (e)=>{
                    cursorX.set(e.clientX + offset.x);
                    cursorY.set(e.clientY + offset.y);
                }
            }["NativeFollowCursor.useEffect.handleMouseMove"];
            document.addEventListener("mousemove", handleMouseMove);
            return ({
                "NativeFollowCursor.useEffect": ()=>{
                    document.removeEventListener("mousemove", handleMouseMove);
                }
            })["NativeFollowCursor.useEffect"];
        }
    }["NativeFollowCursor.useEffect"], [
        cursorX,
        cursorY,
        offset
    ]);
    const getVariantStyles = ()=>{
        switch(variant){
            case "glass":
                return "bg-background/80 backdrop-blur-md border border-border/50 shadow-lg";
            case "solid":
                return "bg-primary text-primary-foreground shadow-md";
            case "minimal":
                return "bg-background/95 border border-border shadow-sm";
            case "default":
            default:
                return "bg-popover text-popover-foreground border border-border shadow-lg";
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            scale: 0.8,
            filter: "blur(4px)"
        },
        animate: {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)"
        },
        style: {
            x,
            y
        },
        transition: {
            opacity: {
                duration: 0.2
            },
            scale: {
                duration: 0.2
            },
            filter: {
                duration: 0.2
            }
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed top-0 left-0 z-50 pointer-events-none select-none", "rounded-full flex items-center gap-2", sizeVariants[size], getVariantStyles(), className),
        children: [
            shouldShowDot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    scale: [
                        1,
                        1.2,
                        1
                    ],
                    opacity: [
                        0.7,
                        1,
                        0.7
                    ]
                },
                transition: {
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut"
                },
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-full shrink-0", dotSizeVariants[size], variant === "solid" ? "bg-primary-foreground" : "bg-primary")
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/carbon/native-follow-cursor-carbon.tsx",
                lineNumber: 191,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-medium whitespace-nowrap",
                children: content
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/carbon/native-follow-cursor-carbon.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/carbon/native-follow-cursor-carbon.tsx",
        lineNumber: 170,
        columnNumber: 5
    }, this);
}
_s(NativeFollowCursor, "laZQ+NTfWy4OMx0KXO5zK0CJVHg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c = NativeFollowCursor;
function NativeFollowCursorArea({ children, cursorContent, size = "md", variant = "default", offset = {
    x: 12,
    y: 12
}, stiffness = 150, damping = 20, className, cursorClassName, showDot = false }) {
    _s1();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cursorX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const cursorY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const springConfig = {
        stiffness,
        damping
    };
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(cursorX, springConfig);
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(cursorY, springConfig);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NativeFollowCursorArea.useEffect": ()=>{
            const container = containerRef.current;
            if (!container) return;
            const handleMouseMove = {
                "NativeFollowCursorArea.useEffect.handleMouseMove": (e)=>{
                    const rect = container.getBoundingClientRect();
                    const isInside = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
                    setIsVisible(isInside);
                    if (isInside) {
                        cursorX.set(e.clientX + offset.x);
                        cursorY.set(e.clientY + offset.y);
                    }
                }
            }["NativeFollowCursorArea.useEffect.handleMouseMove"];
            const handleMouseLeave = {
                "NativeFollowCursorArea.useEffect.handleMouseLeave": ()=>{
                    setIsVisible(false);
                }
            }["NativeFollowCursorArea.useEffect.handleMouseLeave"];
            document.addEventListener("mousemove", handleMouseMove);
            container.addEventListener("mouseleave", handleMouseLeave);
            return ({
                "NativeFollowCursorArea.useEffect": ()=>{
                    document.removeEventListener("mousemove", handleMouseMove);
                    container.removeEventListener("mouseleave", handleMouseLeave);
                }
            })["NativeFollowCursorArea.useEffect"];
        }
    }["NativeFollowCursorArea.useEffect"], [
        cursorX,
        cursorY,
        offset
    ]);
    const getVariantStyles = ()=>{
        switch(variant){
            case "glass":
                return "bg-background/80 backdrop-blur-md border border-border/50 shadow-lg";
            case "solid":
                return "bg-primary text-primary-foreground shadow-md";
            case "minimal":
                return "bg-background/95 border border-border shadow-sm";
            case "default":
            default:
                return "bg-popover text-popover-foreground border border-border shadow-lg";
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative", className),
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.8,
                        filter: "blur(4px)"
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        filter: "blur(0px)"
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.8,
                        filter: "blur(4px)"
                    },
                    style: {
                        x,
                        y
                    },
                    transition: {
                        opacity: {
                            duration: 0.2
                        },
                        scale: {
                            duration: 0.2
                        },
                        filter: {
                            duration: 0.2
                        }
                    },
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed top-0 left-0 z-50 pointer-events-none select-none", "rounded-full flex items-center gap-2", sizeVariants[size], getVariantStyles(), cursorClassName),
                    children: [
                        showDot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            animate: {
                                scale: [
                                    1,
                                    1.2,
                                    1
                                ],
                                opacity: [
                                    0.7,
                                    1,
                                    0.7
                                ]
                            },
                            transition: {
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut"
                            },
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-full shrink-0", dotSizeVariants[size], variant === "solid" ? "bg-primary-foreground" : "bg-primary")
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/native-follow-cursor-carbon.tsx",
                            lineNumber: 308,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-medium",
                            children: cursorContent
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/native-follow-cursor-carbon.tsx",
                            lineNumber: 325,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/native/carbon/native-follow-cursor-carbon.tsx",
                    lineNumber: 286,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/carbon/native-follow-cursor-carbon.tsx",
                lineNumber: 284,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/carbon/native-follow-cursor-carbon.tsx",
        lineNumber: 282,
        columnNumber: 5
    }, this);
}
_s1(NativeFollowCursorArea, "pQdyXLF4FKboST1OOZULJ/oap9g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c1 = NativeFollowCursorArea;
var _c, _c1;
__turbopack_context__.k.register(_c, "NativeFollowCursor");
__turbopack_context__.k.register(_c1, "NativeFollowCursorArea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeFollowCursorAreaCustom",
    ()=>NativeFollowCursorAreaCustom,
    "NativeFollowCursorAreaDefault",
    ()=>NativeFollowCursorAreaDefault,
    "NativeFollowCursorAreaWithDot",
    ()=>NativeFollowCursorAreaWithDot,
    "NativeFollowCursorChildren",
    ()=>NativeFollowCursorChildren,
    "NativeFollowCursorCustomOffset",
    ()=>NativeFollowCursorCustomOffset,
    "NativeFollowCursorDefault",
    ()=>NativeFollowCursorDefault,
    "NativeFollowCursorDemo",
    ()=>NativeFollowCursorDemo,
    "NativeFollowCursorGlass",
    ()=>NativeFollowCursorGlass,
    "NativeFollowCursorLarge",
    ()=>NativeFollowCursorLarge,
    "NativeFollowCursorMinimal",
    ()=>NativeFollowCursorMinimal,
    "NativeFollowCursorNoDot",
    ()=>NativeFollowCursorNoDot,
    "NativeFollowCursorSmall",
    ()=>NativeFollowCursorSmall,
    "NativeFollowCursorSmooth",
    ()=>NativeFollowCursorSmooth,
    "NativeFollowCursorSolid",
    ()=>NativeFollowCursorSolid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$carbon$2f$native$2d$follow$2d$cursor$2d$carbon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/native/carbon/native-follow-cursor-carbon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
"use client";
;
;
;
function NativeFollowCursorDefault() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center min-h-[200px] w-full border border-border rounded-lg bg-muted/20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-muted-foreground",
                children: "Move your cursor around"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$carbon$2f$native$2d$follow$2d$cursor$2d$carbon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeFollowCursor"], {
                name: "Default"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = NativeFollowCursorDefault;
function NativeFollowCursorGlass() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center min-h-[200px] w-full border border-border rounded-lg bg-muted/20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-muted-foreground",
                children: "Move your cursor around"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$carbon$2f$native$2d$follow$2d$cursor$2d$carbon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeFollowCursor"], {
                name: "Glass",
                variant: "glass"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = NativeFollowCursorGlass;
function NativeFollowCursorSolid() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center min-h-[200px] w-full border border-border rounded-lg bg-muted/20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-muted-foreground",
                children: "Move your cursor around"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$carbon$2f$native$2d$follow$2d$cursor$2d$carbon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeFollowCursor"], {
                name: "Solid",
                variant: "solid"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c2 = NativeFollowCursorSolid;
function NativeFollowCursorMinimal() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center min-h-[200px] w-full border border-border rounded-lg bg-muted/20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-muted-foreground",
                children: "Move your cursor around"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$carbon$2f$native$2d$follow$2d$cursor$2d$carbon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeFollowCursor"], {
                name: "Minimal",
                variant: "minimal"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c3 = NativeFollowCursorMinimal;
function NativeFollowCursorSmall() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center min-h-[200px] w-full border border-border rounded-lg bg-muted/20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-muted-foreground",
                children: "Move your cursor around"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$carbon$2f$native$2d$follow$2d$cursor$2d$carbon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeFollowCursor"], {
                name: "Small",
                size: "sm"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_c4 = NativeFollowCursorSmall;
function NativeFollowCursorLarge() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center min-h-[200px] w-full border border-border rounded-lg bg-muted/20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-muted-foreground",
                children: "Move your cursor around"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$carbon$2f$native$2d$follow$2d$cursor$2d$carbon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeFollowCursor"], {
                name: "Large",
                size: "lg"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_c5 = NativeFollowCursorLarge;
function NativeFollowCursorNoDot() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center min-h-[200px] w-full border border-border rounded-lg bg-muted/20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-muted-foreground",
                children: "Move your cursor around"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$carbon$2f$native$2d$follow$2d$cursor$2d$carbon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeFollowCursor"], {
                name: "No Dot",
                showDot: false
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_c6 = NativeFollowCursorNoDot;
function NativeFollowCursorCustomOffset() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center min-h-[200px] w-full border border-border rounded-lg bg-muted/20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-muted-foreground",
                children: "Move your cursor around"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$carbon$2f$native$2d$follow$2d$cursor$2d$carbon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeFollowCursor"], {
                name: "Custom Offset",
                offset: {
                    x: 30,
                    y: 30
                }
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_c7 = NativeFollowCursorCustomOffset;
function NativeFollowCursorSmooth() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center min-h-[200px] w-full border border-border rounded-lg bg-muted/20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-muted-foreground",
                children: "Move your cursor around"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$carbon$2f$native$2d$follow$2d$cursor$2d$carbon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeFollowCursor"], {
                name: "Smooth",
                stiffness: 100,
                damping: 30
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_c8 = NativeFollowCursorSmooth;
function NativeFollowCursorChildren() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center min-h-[200px] w-full border border-border rounded-lg bg-muted/20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-muted-foreground",
                children: "Move your cursor around"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$carbon$2f$native$2d$follow$2d$cursor$2d$carbon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeFollowCursor"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex items-center gap-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                            className: "h-3 w-3"
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this),
                        "Custom Content"
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_c9 = NativeFollowCursorChildren;
function NativeFollowCursorAreaDefault() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$carbon$2f$native$2d$follow$2d$cursor$2d$carbon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeFollowCursorArea"], {
        cursorContent: "Hover Me",
        className: "flex items-center justify-center min-h-[200px] w-full border border-border rounded-lg bg-muted/20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-muted-foreground",
            children: "Move your cursor inside this box only"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
            lineNumber: 110,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
_c10 = NativeFollowCursorAreaDefault;
function NativeFollowCursorAreaWithDot() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$carbon$2f$native$2d$follow$2d$cursor$2d$carbon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeFollowCursorArea"], {
        cursorContent: "With Dot",
        showDot: true,
        className: "flex items-center justify-center min-h-[200px] w-full border border-border rounded-lg bg-muted/20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-muted-foreground",
            children: "Move your cursor inside this box only"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
            lineNumber: 124,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
_c11 = NativeFollowCursorAreaWithDot;
function NativeFollowCursorAreaCustom() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$carbon$2f$native$2d$follow$2d$cursor$2d$carbon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeFollowCursorArea"], {
        cursorContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex items-center gap-1.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                    className: "h-3 w-3"
                }, void 0, false, {
                    fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                    lineNumber: 136,
                    columnNumber: 11
                }, void 0),
                "Custom"
            ]
        }, void 0, true, {
            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
            lineNumber: 135,
            columnNumber: 9
        }, void 0),
        variant: "glass",
        className: "flex items-center justify-center min-h-[200px] w-full border border-border rounded-lg bg-muted/20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-muted-foreground",
            children: "Move your cursor inside this box only"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
            lineNumber: 143,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
        lineNumber: 133,
        columnNumber: 5
    }, this);
}
_c12 = NativeFollowCursorAreaCustom;
function NativeFollowCursorDemo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-8 w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-muted-foreground text-sm",
                            children: "Default"
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeFollowCursorDefault, {}, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                    lineNumber: 154,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-muted-foreground text-sm",
                            children: "Glass"
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeFollowCursorGlass, {}, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                    lineNumber: 160,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-muted-foreground text-sm",
                            children: "Solid"
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                            lineNumber: 165,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeFollowCursorSolid, {}, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                    lineNumber: 164,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-muted-foreground text-sm",
                            children: "Minimal"
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                            lineNumber: 169,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeFollowCursorMinimal, {}, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                    lineNumber: 168,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-muted-foreground text-sm",
                            children: "Small"
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeFollowCursorSmall, {}, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                    lineNumber: 174,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-muted-foreground text-sm",
                            children: "Large"
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeFollowCursorLarge, {}, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                    lineNumber: 178,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-muted-foreground text-sm",
                            children: "No Dot"
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                            lineNumber: 183,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeFollowCursorNoDot, {}, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                            lineNumber: 186,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                    lineNumber: 182,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-muted-foreground text-sm",
                            children: "Custom Offset"
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                            lineNumber: 189,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeFollowCursorCustomOffset, {}, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                            lineNumber: 192,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                    lineNumber: 188,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-muted-foreground text-sm",
                            children: "Smooth"
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                            lineNumber: 195,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeFollowCursorSmooth, {}, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                    lineNumber: 194,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-muted-foreground text-sm",
                            children: "Custom Children"
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                            lineNumber: 201,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeFollowCursorChildren, {}, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                            lineNumber: 204,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                    lineNumber: 200,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-muted-foreground text-sm",
                            children: "Area (Default)"
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                            lineNumber: 207,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeFollowCursorAreaDefault, {}, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                            lineNumber: 210,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                    lineNumber: 206,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-muted-foreground text-sm",
                            children: "Area (With Dot)"
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                            lineNumber: 213,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeFollowCursorAreaWithDot, {}, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                            lineNumber: 216,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                    lineNumber: 212,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-muted-foreground text-sm",
                            children: "Area (Custom)"
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                            lineNumber: 219,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeFollowCursorAreaCustom, {}, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                            lineNumber: 222,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
                    lineNumber: 218,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
            lineNumber: 153,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/carbon/demo/native-follow-cursor-demo.tsx",
        lineNumber: 152,
        columnNumber: 5
    }, this);
}
_c13 = NativeFollowCursorDemo;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13;
__turbopack_context__.k.register(_c, "NativeFollowCursorDefault");
__turbopack_context__.k.register(_c1, "NativeFollowCursorGlass");
__turbopack_context__.k.register(_c2, "NativeFollowCursorSolid");
__turbopack_context__.k.register(_c3, "NativeFollowCursorMinimal");
__turbopack_context__.k.register(_c4, "NativeFollowCursorSmall");
__turbopack_context__.k.register(_c5, "NativeFollowCursorLarge");
__turbopack_context__.k.register(_c6, "NativeFollowCursorNoDot");
__turbopack_context__.k.register(_c7, "NativeFollowCursorCustomOffset");
__turbopack_context__.k.register(_c8, "NativeFollowCursorSmooth");
__turbopack_context__.k.register(_c9, "NativeFollowCursorChildren");
__turbopack_context__.k.register(_c10, "NativeFollowCursorAreaDefault");
__turbopack_context__.k.register(_c11, "NativeFollowCursorAreaWithDot");
__turbopack_context__.k.register(_c12, "NativeFollowCursorAreaCustom");
__turbopack_context__.k.register(_c13, "NativeFollowCursorDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/carbon/native-flip-text-carbon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeFlipText",
    ()=>NativeFlipText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function NativeFlipText({ words, duration = 2000, className }) {
    _s();
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NativeFlipText.useEffect": ()=>{
            const interval = setInterval({
                "NativeFlipText.useEffect.interval": ()=>{
                    setIndex({
                        "NativeFlipText.useEffect.interval": (prevIndex)=>(prevIndex + 1) % words.length
                    }["NativeFlipText.useEffect.interval"]);
                }
            }["NativeFlipText.useEffect.interval"], duration);
            return ({
                "NativeFlipText.useEffect": ()=>clearInterval(interval)
            })["NativeFlipText.useEffect"];
        }
    }["NativeFlipText.useEffect"], [
        words.length,
        duration
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center justify-center overflow-hidden", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            mode: "wait",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    rotateX: -90,
                    opacity: 0,
                    filter: "blur(6px)"
                },
                animate: {
                    rotateX: 0,
                    opacity: 1,
                    filter: "blur(0px)"
                },
                exit: {
                    rotateX: 90,
                    opacity: 0,
                    filter: "blur(6px)"
                },
                transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    opacity: {
                        duration: 0.3
                    },
                    filter: {
                        duration: 0.3
                    },
                    rotateX: {
                        duration: 0.4
                    }
                },
                className: "text-center",
                children: words[index]
            }, words[index], false, {
                fileName: "[project]/packages/ui/src/components/native/carbon/native-flip-text-carbon.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/carbon/native-flip-text-carbon.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/carbon/native-flip-text-carbon.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(NativeFlipText, "c3fuAdVwNN91t4bNS1qBXl5hAWY=");
_c = NativeFlipText;
var _c;
__turbopack_context__.k.register(_c, "NativeFlipText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/carbon/native-magnetic-carbon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeMagnetic",
    ()=>NativeMagnetic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const springTransition = {
    type: "spring",
    stiffness: 400,
    damping: 25
};
function NativeMagnetic({ children, strength = 0.3, stiffness = 300, damping = 30, scaleOnHover = true, as = "div", href, onClick, className }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const springConfig = {
        stiffness,
        damping
    };
    const springX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(x, springConfig);
    const springY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(y, springConfig);
    const translateX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(springX, {
        "NativeMagnetic.useTransform[translateX]": (v)=>v * strength
    }["NativeMagnetic.useTransform[translateX]"]);
    const translateY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(springY, {
        "NativeMagnetic.useTransform[translateY]": (v)=>v * strength
    }["NativeMagnetic.useTransform[translateY]"]);
    const handleMouseMove = (e)=>{
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set(e.clientX - centerX);
        y.set(e.clientY - centerY);
    };
    const handleMouseLeave = ()=>{
        x.set(0);
        y.set(0);
        setIsHovered(false);
    };
    const commonProps = {
        onMouseMove: handleMouseMove,
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: handleMouseLeave,
        style: {
            x: translateX,
            y: translateY
        },
        whileHover: scaleOnHover ? {
            scale: 1.05
        } : undefined,
        whileTap: {
            scale: 0.95
        },
        transition: springTransition,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-block cursor-pointer", className),
        onClick
    };
    if (as === "a" && href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
            ref: ref,
            href: href,
            ...commonProps,
            children: children
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/carbon/native-magnetic-carbon.tsx",
            lineNumber: 118,
            columnNumber: 7
        }, this);
    }
    if (as === "button") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            ref: ref,
            type: "button",
            ...commonProps,
            children: children
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/carbon/native-magnetic-carbon.tsx",
            lineNumber: 130,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        ...commonProps,
        children: children
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/carbon/native-magnetic-carbon.tsx",
        lineNumber: 141,
        columnNumber: 5
    }, this);
}
_s(NativeMagnetic, "nXs5ldby4aJFKXWe4H2zoCVHoGE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = NativeMagnetic;
var _c;
__turbopack_context__.k.register(_c, "NativeMagnetic");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/carbon/native-typewriter-carbon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeTypewriter",
    ()=>NativeTypewriter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function NativeTypewriter({ content, speed = "medium", cursor = true, loop = false, startDelay = 0, morph = true, className }) {
    _s();
    const shouldReduceMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const [displayedText, setDisplayedText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isStarted, setIsStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Calculate delay calculation
    const speedMap = {
        slow: 100,
        medium: 50,
        fast: 30
    };
    const typingSpeed = typeof speed === "number" ? speed : speedMap[speed];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NativeTypewriter.useEffect": ()=>{
            // If reduced motion is enabled, just show the full text immediately
            if (shouldReduceMotion) {
                setDisplayedText(Array.isArray(content) ? content.join(" ") : content);
                return;
            }
            let timeoutId;
            let currentIndex = 0;
            let currentStringIndex = 0;
            // Normalize content to array
            const textArray = Array.isArray(content) ? content : [
                content
            ];
            // Actually, simpler logic for a first pass is often better.
            // Let's implement a robust "Type -> Wait -> (Delete if multi/loop) -> Next" cycle.
            let isDeleting = false;
            // Unified typing loop logic
            const runLoop = {
                "NativeTypewriter.useEffect.runLoop": ()=>{
                    const currentString = textArray[currentStringIndex];
                    if (isDeleting) {
                        setDisplayedText(currentString.substring(0, currentIndex));
                        currentIndex--;
                        if (currentIndex < 0) {
                            isDeleting = false;
                            currentIndex = 0;
                            currentStringIndex = (currentStringIndex + 1) % textArray.length;
                            if (!loop && currentStringIndex === 0) {
                                return;
                            }
                            timeoutId = setTimeout(runLoop, 500);
                        } else {
                            timeoutId = setTimeout(runLoop, typingSpeed / 2);
                        }
                    } else {
                        setDisplayedText(currentString.substring(0, currentIndex + 1));
                        currentIndex++;
                        if (currentIndex > currentString.length) {
                            if (textArray.length > 1 && (loop || currentStringIndex < textArray.length - 1) || textArray.length === 1 && loop) {
                                isDeleting = true;
                                currentIndex = currentString.length;
                                timeoutId = setTimeout(runLoop, 2000);
                            }
                        } else {
                            timeoutId = setTimeout(runLoop, typingSpeed);
                        }
                    }
                }
            }["NativeTypewriter.useEffect.runLoop"];
            const initialTimer = setTimeout({
                "NativeTypewriter.useEffect.initialTimer": ()=>{
                    setIsStarted(true);
                    runLoop();
                }
            }["NativeTypewriter.useEffect.initialTimer"], startDelay);
            return ({
                "NativeTypewriter.useEffect": ()=>{
                    clearTimeout(initialTimer);
                    clearTimeout(timeoutId);
                }
            })["NativeTypewriter.useEffect"];
        }
    }["NativeTypewriter.useEffect"], [
        content,
        typingSpeed,
        loop,
        startDelay,
        shouldReduceMotion
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "whitespace-pre-wrap",
                children: displayedText.split("").map((char, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        initial: morph ? {
                            opacity: 0,
                            filter: "blur(2px)"
                        } : {
                            opacity: 1
                        },
                        animate: morph ? {
                            opacity: 1,
                            filter: "blur(0px)"
                        } : {
                            opacity: 1
                        },
                        transition: {
                            duration: 0.1
                        },
                        children: char
                    }, index, false, {
                        fileName: "[project]/packages/ui/src/components/native/carbon/native-typewriter-carbon.tsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/carbon/native-typewriter-carbon.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            cursor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear"
                },
                className: "ml-0.5 inline-block h-[1.2em] w-[2px] bg-primary align-bottom",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/carbon/native-typewriter-carbon.tsx",
                lineNumber: 150,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/carbon/native-typewriter-carbon.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
_s(NativeTypewriter, "pgmyr7PI4IugMMKgPiYbWzuFNOs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = NativeTypewriter;
var _c;
__turbopack_context__.k.register(_c, "NativeTypewriter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/shadcn-ui/native-avatar-expand-shadcnui.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeAvatarExpand",
    ()=>NativeAvatarExpand
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const sizeConfig = {
    sm: {
        avatar: "h-10 w-10",
        text: "text-sm"
    },
    md: {
        avatar: "h-12 w-12",
        text: "text-base"
    },
    lg: {
        avatar: "h-16 w-16",
        text: "text-lg"
    },
    xl: {
        avatar: "h-20 w-20",
        text: "text-xl"
    }
};
function NativeAvatarExpand({ src, name, size = "md", className, avatarClassName, nameClassName }) {
    _s();
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { avatar, text } = sizeConfig[size];
    const getInitials = (name)=>{
        return name.split(" ").map((n)=>n[0]).join("").toUpperCase().slice(0, 2);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center cursor-pointer", className),
        layout: true,
        onClick: ()=>setIsExpanded(!isExpanded),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                layout: "position",
                className: "relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(avatar, avatarClassName),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                            src: src || "/placeholder.svg",
                            alt: name
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-avatar-expand-shadcnui.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                            children: getInitials(name)
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-avatar-expand-shadcnui.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-avatar-expand-shadcnui.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-avatar-expand-shadcnui.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        width: 0,
                        opacity: 0,
                        filter: "blur(4px)"
                    },
                    animate: {
                        width: "auto",
                        opacity: 1,
                        filter: "blur(0px)"
                    },
                    exit: {
                        width: 0,
                        opacity: 0,
                        filter: "blur(4px)"
                    },
                    transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 25,
                        opacity: {
                            duration: 0.2
                        },
                        filter: {
                            duration: 0.2
                        }
                    },
                    className: "overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        initial: {
                            x: -20
                        },
                        animate: {
                            x: 0
                        },
                        exit: {
                            x: -20
                        },
                        transition: {
                            type: "spring",
                            stiffness: 200,
                            damping: 25
                        },
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-medium whitespace-nowrap ml-1", text, nameClassName),
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-avatar-expand-shadcnui.tsx",
                        lineNumber: 111,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-avatar-expand-shadcnui.tsx",
                    lineNumber: 90,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-avatar-expand-shadcnui.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-avatar-expand-shadcnui.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_s(NativeAvatarExpand, "FPNvbbHVlWWR4LKxxNntSxiIS38=");
_c = NativeAvatarExpand;
var _c;
__turbopack_context__.k.register(_c, "NativeAvatarExpand");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/shadcn-ui/demo/native-avatar-expand-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeAvatarExpandDefault",
    ()=>NativeAvatarExpandDefault,
    "NativeAvatarExpandDemo",
    ()=>NativeAvatarExpandDemo,
    "NativeAvatarExpandExtraLarge",
    ()=>NativeAvatarExpandExtraLarge,
    "NativeAvatarExpandLarge",
    ()=>NativeAvatarExpandLarge,
    "NativeAvatarExpandNoImage",
    ()=>NativeAvatarExpandNoImage,
    "NativeAvatarExpandSmall",
    ()=>NativeAvatarExpandSmall
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$avatar$2d$expand$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/native/shadcn-ui/native-avatar-expand-shadcnui.tsx [app-client] (ecmascript)");
"use client";
;
;
function NativeAvatarExpandDefault() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$avatar$2d$expand$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeAvatarExpand"], {
            src: "https://github.com/shadcn.png",
            name: "John Doe"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-avatar-expand-demo.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-avatar-expand-demo.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = NativeAvatarExpandDefault;
function NativeAvatarExpandSmall() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$avatar$2d$expand$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeAvatarExpand"], {
            src: "https://github.com/shadcn.png",
            name: "Jane Smith",
            size: "sm"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-avatar-expand-demo.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-avatar-expand-demo.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c1 = NativeAvatarExpandSmall;
function NativeAvatarExpandLarge() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$avatar$2d$expand$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeAvatarExpand"], {
            src: "https://github.com/shadcn.png",
            name: "Alex Johnson",
            size: "lg"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-avatar-expand-demo.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-avatar-expand-demo.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c2 = NativeAvatarExpandLarge;
function NativeAvatarExpandExtraLarge() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$avatar$2d$expand$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeAvatarExpand"], {
            src: "https://github.com/shadcn.png",
            name: "Sarah Williams",
            size: "xl"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-avatar-expand-demo.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-avatar-expand-demo.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c3 = NativeAvatarExpandExtraLarge;
function NativeAvatarExpandNoImage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$avatar$2d$expand$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeAvatarExpand"], {
            name: "No Image User"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-avatar-expand-demo.tsx",
            lineNumber: 52,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-avatar-expand-demo.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c4 = NativeAvatarExpandNoImage;
function NativeAvatarExpandDemo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeAvatarExpandDefault, {}, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-avatar-expand-demo.tsx",
        lineNumber: 58,
        columnNumber: 10
    }, this);
}
_c5 = NativeAvatarExpandDemo;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "NativeAvatarExpandDefault");
__turbopack_context__.k.register(_c1, "NativeAvatarExpandSmall");
__turbopack_context__.k.register(_c2, "NativeAvatarExpandLarge");
__turbopack_context__.k.register(_c3, "NativeAvatarExpandExtraLarge");
__turbopack_context__.k.register(_c4, "NativeAvatarExpandNoImage");
__turbopack_context__.k.register(_c5, "NativeAvatarExpandDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/shadcn-ui/native-avatar-with-name-shadcnui.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeAvatarWithName",
    ()=>NativeAvatarWithName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const sizeVariants = {
    sm: "h-10 w-10",
    md: "h-14 w-14",
    lg: "h-20 w-20",
    xl: "h-28 w-28"
};
const nameSizeVariants = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-1.5",
    lg: "text-base px-4 py-2",
    xl: "text-lg px-5 py-2.5"
};
function NativeAvatarWithName({ src, name, fallback, size = "md", direction = "bottom", className, nameClassName }) {
    _s();
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const getInitials = (name)=>{
        return name.split(" ").map((n)=>n[0]).join("").toUpperCase().slice(0, 2);
    };
    const directionVariants = {
        top: {
            initial: {
                y: 20,
                opacity: 0,
                filter: "blur(4px)"
            },
            animate: {
                y: -8,
                opacity: 1,
                filter: "blur(0px)"
            },
            exit: {
                y: 20,
                opacity: 0,
                filter: "blur(4px)"
            }
        },
        bottom: {
            initial: {
                y: -20,
                opacity: 0,
                filter: "blur(4px)"
            },
            animate: {
                y: 8,
                opacity: 1,
                filter: "blur(0px)"
            },
            exit: {
                y: -20,
                opacity: 0,
                filter: "blur(4px)"
            }
        },
        left: {
            initial: {
                x: 20,
                opacity: 0,
                filter: "blur(4px)"
            },
            animate: {
                x: -8,
                opacity: 1,
                filter: "blur(0px)"
            },
            exit: {
                x: 20,
                opacity: 0,
                filter: "blur(4px)"
            }
        },
        right: {
            initial: {
                x: -20,
                opacity: 0,
                filter: "blur(4px)"
            },
            animate: {
                x: 8,
                opacity: 1,
                filter: "blur(0px)"
            },
            exit: {
                x: -20,
                opacity: 0,
                filter: "blur(4px)"
            }
        }
    };
    const positionClasses = {
        top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
        bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
        left: "right-full top-1/2 -translate-y-1/2 mr-2",
        right: "left-full top-1/2 -translate-y-1/2 ml-2"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative inline-flex items-center justify-center", className),
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                whileHover: {
                    scale: 1.05
                },
                whileTap: {
                    scale: 0.95
                },
                transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 17
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(sizeVariants[size], "cursor-pointer ring-2 ring-background shadow-lg"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                            src: src || "/placeholder.svg",
                            alt: name
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-avatar-with-name-shadcnui.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                            className: "text-muted-foreground font-semibold",
                            children: fallback || getInitials(name)
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-avatar-with-name-shadcnui.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-avatar-with-name-shadcnui.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-avatar-with-name-shadcnui.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isHovered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: directionVariants[direction].initial,
                    animate: directionVariants[direction].animate,
                    exit: directionVariants[direction].exit,
                    transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                        opacity: {
                            duration: 0.2
                        },
                        filter: {
                            duration: 0.2
                        }
                    },
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute z-10 whitespace-nowrap rounded-md bg-popover text-popover-foreground shadow-lg border pointer-events-none", nameSizeVariants[size], positionClasses[direction], nameClassName),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-medium",
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-avatar-with-name-shadcnui.tsx",
                        lineNumber: 152,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-avatar-with-name-shadcnui.tsx",
                    lineNumber: 134,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-avatar-with-name-shadcnui.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-avatar-with-name-shadcnui.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
_s(NativeAvatarWithName, "FPQn8a98tPjpohC7NUYORQR8GJE=");
_c = NativeAvatarWithName;
var _c;
__turbopack_context__.k.register(_c, "NativeAvatarWithName");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/shadcn-ui/demo/native-avatar-with-name-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeAvatarWithNameDefault",
    ()=>NativeAvatarWithNameDefault,
    "NativeAvatarWithNameDemo",
    ()=>NativeAvatarWithNameDemo,
    "NativeAvatarWithNameLarge",
    ()=>NativeAvatarWithNameLarge,
    "NativeAvatarWithNameLeft",
    ()=>NativeAvatarWithNameLeft,
    "NativeAvatarWithNameNoImage",
    ()=>NativeAvatarWithNameNoImage,
    "NativeAvatarWithNameRight",
    ()=>NativeAvatarWithNameRight,
    "NativeAvatarWithNameSmall",
    ()=>NativeAvatarWithNameSmall,
    "NativeAvatarWithNameTop",
    ()=>NativeAvatarWithNameTop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$avatar$2d$with$2d$name$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/native/shadcn-ui/native-avatar-with-name-shadcnui.tsx [app-client] (ecmascript)");
"use client";
;
;
function NativeAvatarWithNameDefault() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$avatar$2d$with$2d$name$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeAvatarWithName"], {
            src: "https://github.com/shadcn.png",
            name: "John Doe"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-avatar-with-name-demo.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-avatar-with-name-demo.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = NativeAvatarWithNameDefault;
function NativeAvatarWithNameTop() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$avatar$2d$with$2d$name$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeAvatarWithName"], {
            src: "https://github.com/shadcn.png",
            name: "Jane Smith",
            direction: "top"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-avatar-with-name-demo.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-avatar-with-name-demo.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c1 = NativeAvatarWithNameTop;
function NativeAvatarWithNameLeft() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$avatar$2d$with$2d$name$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeAvatarWithName"], {
            src: "https://github.com/shadcn.png",
            name: "Alex Johnson",
            direction: "left"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-avatar-with-name-demo.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-avatar-with-name-demo.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c2 = NativeAvatarWithNameLeft;
function NativeAvatarWithNameRight() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$avatar$2d$with$2d$name$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeAvatarWithName"], {
            src: "https://github.com/shadcn.png",
            name: "Sarah Williams",
            direction: "right"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-avatar-with-name-demo.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-avatar-with-name-demo.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c3 = NativeAvatarWithNameRight;
function NativeAvatarWithNameSmall() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$avatar$2d$with$2d$name$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeAvatarWithName"], {
            src: "https://github.com/shadcn.png",
            name: "Small Avatar",
            size: "sm"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-avatar-with-name-demo.tsx",
            lineNumber: 55,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-avatar-with-name-demo.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_c4 = NativeAvatarWithNameSmall;
function NativeAvatarWithNameLarge() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$avatar$2d$with$2d$name$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeAvatarWithName"], {
            src: "https://github.com/shadcn.png",
            name: "Large Avatar",
            size: "lg"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-avatar-with-name-demo.tsx",
            lineNumber: 67,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-avatar-with-name-demo.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = NativeAvatarWithNameLarge;
function NativeAvatarWithNameNoImage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$avatar$2d$with$2d$name$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeAvatarWithName"], {
            name: "No Image User"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-avatar-with-name-demo.tsx",
            lineNumber: 79,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-avatar-with-name-demo.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
_c6 = NativeAvatarWithNameNoImage;
function NativeAvatarWithNameDemo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeAvatarWithNameDefault, {}, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-avatar-with-name-demo.tsx",
        lineNumber: 85,
        columnNumber: 10
    }, this);
}
_c7 = NativeAvatarWithNameDemo;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "NativeAvatarWithNameDefault");
__turbopack_context__.k.register(_c1, "NativeAvatarWithNameTop");
__turbopack_context__.k.register(_c2, "NativeAvatarWithNameLeft");
__turbopack_context__.k.register(_c3, "NativeAvatarWithNameRight");
__turbopack_context__.k.register(_c4, "NativeAvatarWithNameSmall");
__turbopack_context__.k.register(_c5, "NativeAvatarWithNameLarge");
__turbopack_context__.k.register(_c6, "NativeAvatarWithNameNoImage");
__turbopack_context__.k.register(_c7, "NativeAvatarWithNameDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/shadcn-ui/native-button-shadcnui.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeButton",
    ()=>NativeButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
"use client";
;
;
;
;
;
const NativeButton = ({ className, variant = "default", size = "lg", children, loading = false, glow = false, disabled, ...props })=>{
    const buttonContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "w-4 h-4 mr-2 animate-spin"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-button-shadcnui.tsx",
                lineNumber: 27,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2"),
                animate: loading ? {
                    opacity: [
                        1,
                        0.5,
                        1
                    ]
                } : {
                    opacity: 1
                },
                transition: loading ? {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                } : {
                    duration: 0.2
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-button-shadcnui.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
    const glassmorphismClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("cursor-pointer h-12 rounded-md px-7 text-sm uppercase relative overflow-hidden", !glow && "shadow-md hover:shadow-lg", glow && "shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300", variant === "outline" && "text-foreground/80 hover:bg-foreground/5", (disabled || loading) && "opacity-50 cursor-not-allowed grayscale", className);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        whileHover: !disabled && !loading ? {
            scale: 1.02
        } : {},
        whileTap: !disabled && !loading ? {
            scale: 0.98
        } : {},
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 17
        },
        className: "relative block w-fit",
        children: [
            glow && !disabled && !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-button-shadcnui.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: variant,
                size: size,
                className: glassmorphismClassName,
                disabled: disabled || loading,
                "aria-busy": loading,
                ...props,
                children: buttonContent
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-button-shadcnui.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-button-shadcnui.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = NativeButton;
;
var _c;
__turbopack_context__.k.register(_c, "NativeButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/shadcn-ui/demo/native-button-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeButtonDefault",
    ()=>NativeButtonDefault,
    "NativeButtonDisabled",
    ()=>NativeButtonDisabled,
    "NativeButtonGlow",
    ()=>NativeButtonGlow,
    "NativeButtonLoading",
    ()=>NativeButtonLoading,
    "NativeButtonOutline",
    ()=>NativeButtonOutline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$button$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/native/shadcn-ui/native-button-shadcnui.tsx [app-client] (ecmascript)");
"use client";
;
;
function NativeButtonDefault() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$button$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeButton"], {
        children: "Get Started"
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-button-demo.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
_c = NativeButtonDefault;
function NativeButtonGlow() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$button$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeButton"], {
        glow: true,
        children: "Glow Effect"
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-button-demo.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
_c1 = NativeButtonGlow;
function NativeButtonOutline() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$button$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeButton"], {
        variant: "outline",
        children: "Learn More"
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-button-demo.tsx",
        lineNumber: 14,
        columnNumber: 10
    }, this);
}
_c2 = NativeButtonOutline;
function NativeButtonLoading() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$button$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeButton"], {
        loading: true,
        children: "Processing..."
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-button-demo.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c3 = NativeButtonLoading;
function NativeButtonDisabled() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$button$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeButton"], {
        disabled: true,
        children: "Disabled"
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-button-demo.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
_c4 = NativeButtonDisabled;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "NativeButtonDefault");
__turbopack_context__.k.register(_c1, "NativeButtonGlow");
__turbopack_context__.k.register(_c2, "NativeButtonOutline");
__turbopack_context__.k.register(_c3, "NativeButtonLoading");
__turbopack_context__.k.register(_c4, "NativeButtonDisabled");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/shadcn-ui/native-delete-shadcnui.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeDelete",
    ()=>NativeDelete
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const sizeVariants = {
    sm: "h-8 text-xs px-3",
    md: "h-10 text-sm px-4",
    lg: "h-12 text-base px-6"
};
const iconSizeVariants = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5"
};
function NativeDelete({ onConfirm, onDelete, buttonText = "Delete", confirmText = "Confirm", size = "md", showIcon = true, className, disabled = false }) {
    _s();
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleDeleteClick = ()=>{
        if (!disabled) {
            setIsExpanded(true);
            onConfirm();
        }
    };
    const handleConfirm = ()=>{
        onDelete();
        setIsExpanded(false);
    };
    const handleCancel = ()=>{
        setIsExpanded(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative inline-flex items-center gap-2", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: isExpanded ? {
                    filter: [
                        "blur(0px)",
                        "blur(3px)",
                        "blur(0px)"
                    ],
                    x: [
                        0,
                        -2,
                        2,
                        -2,
                        2,
                        0
                    ]
                } : {
                    filter: "blur(0px)",
                    x: 0
                },
                transition: isExpanded ? {
                    filter: {
                        duration: 0.3
                    },
                    x: {
                        duration: 0.4,
                        times: [
                            0,
                            0.2,
                            0.4,
                            0.6,
                            0.8,
                            1
                        ]
                    }
                } : {
                    duration: 0.2
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    whileHover: !disabled ? {
                        scale: 1.02
                    } : {},
                    whileTap: !disabled ? {
                        scale: 0.98
                    } : {},
                    transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 17
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "destructive",
                        size: "default",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(sizeVariants[size], "shadow-md hover:shadow-lg transition-shadow text-white", disabled && "opacity-50 cursor-not-allowed"),
                        onClick: isExpanded ? handleConfirm : handleDeleteClick,
                        disabled: disabled,
                        children: [
                            showIcon && !isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(iconSizeVariants[size], "mr-2")
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-delete-shadcnui.tsx",
                                lineNumber: 130,
                                columnNumber: 15
                            }, this),
                            isExpanded ? confirmText : buttonText
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-delete-shadcnui.tsx",
                        lineNumber: 118,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-delete-shadcnui.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-delete-shadcnui.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.8,
                        x: -10
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        x: 0
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.8,
                        x: -10
                    },
                    transition: {
                        delay: 0.3,
                        type: "spring",
                        stiffness: 300,
                        damping: 25
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 17
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            size: "icon",
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("shadow-md hover:shadow-lg transition-shadow", size === "sm" ? "h-8 w-8" : size === "md" ? "h-10 w-10" : "h-12 w-12"),
                            onClick: handleCancel,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: iconSizeVariants[size]
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-delete-shadcnui.tsx",
                                lineNumber: 168,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-delete-shadcnui.tsx",
                            lineNumber: 155,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-delete-shadcnui.tsx",
                        lineNumber: 150,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-delete-shadcnui.tsx",
                    lineNumber: 139,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-delete-shadcnui.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-delete-shadcnui.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
_s(NativeDelete, "FPNvbbHVlWWR4LKxxNntSxiIS38=");
_c = NativeDelete;
var _c;
__turbopack_context__.k.register(_c, "NativeDelete");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/shadcn-ui/demo/native-delete-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeDeleteCustomText",
    ()=>NativeDeleteCustomText,
    "NativeDeleteDefault",
    ()=>NativeDeleteDefault,
    "NativeDeleteDemo",
    ()=>NativeDeleteDemo,
    "NativeDeleteDisabled",
    ()=>NativeDeleteDisabled,
    "NativeDeleteLarge",
    ()=>NativeDeleteLarge,
    "NativeDeleteNoIcon",
    ()=>NativeDeleteNoIcon,
    "NativeDeleteSmall",
    ()=>NativeDeleteSmall
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$delete$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/native/shadcn-ui/native-delete-shadcnui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
"use client";
;
;
function NativeDeleteDefault() {
    _s();
    const [deleted, setDeleted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-4",
        children: !deleted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$delete$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeDelete"], {
            onConfirm: ()=>{
            // Handle confirmation UI shown
            },
            onDelete: ()=>{
                setDeleted(true);
                setTimeout(()=>setDeleted(false), 2000);
            }
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-delete-demo.tsx",
            lineNumber: 11,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm text-muted-foreground",
            children: "Deleted!"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-delete-demo.tsx",
            lineNumber: 21,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-delete-demo.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_s(NativeDeleteDefault, "o2xeLiSUc9MiQ9+ZoT8hWttPBRw=");
_c = NativeDeleteDefault;
function NativeDeleteSmall() {
    _s1();
    const [deleted, setDeleted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-4",
        children: !deleted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$delete$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeDelete"], {
            size: "sm",
            onConfirm: ()=>{
            // Handle confirmation UI shown
            },
            onDelete: ()=>{
                setDeleted(true);
                setTimeout(()=>setDeleted(false), 2000);
            }
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-delete-demo.tsx",
            lineNumber: 32,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm text-muted-foreground",
            children: "Deleted!"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-delete-demo.tsx",
            lineNumber: 43,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-delete-demo.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s1(NativeDeleteSmall, "o2xeLiSUc9MiQ9+ZoT8hWttPBRw=");
_c1 = NativeDeleteSmall;
function NativeDeleteLarge() {
    _s2();
    const [deleted, setDeleted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-4",
        children: !deleted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$delete$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeDelete"], {
            size: "lg",
            onConfirm: ()=>{
            // Handle confirmation UI shown
            },
            onDelete: ()=>{
                setDeleted(true);
                setTimeout(()=>setDeleted(false), 2000);
            }
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-delete-demo.tsx",
            lineNumber: 54,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm text-muted-foreground",
            children: "Deleted!"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-delete-demo.tsx",
            lineNumber: 65,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-delete-demo.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_s2(NativeDeleteLarge, "o2xeLiSUc9MiQ9+ZoT8hWttPBRw=");
_c2 = NativeDeleteLarge;
function NativeDeleteCustomText() {
    _s3();
    const [deleted, setDeleted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-4",
        children: !deleted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$delete$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeDelete"], {
            buttonText: "Remove Item",
            confirmText: "Yes, Remove",
            onConfirm: ()=>{
            // Handle confirmation UI shown
            },
            onDelete: ()=>{
                setDeleted(true);
                setTimeout(()=>setDeleted(false), 2000);
            }
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-delete-demo.tsx",
            lineNumber: 76,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm text-muted-foreground",
            children: "Removed!"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-delete-demo.tsx",
            lineNumber: 88,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-delete-demo.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_s3(NativeDeleteCustomText, "o2xeLiSUc9MiQ9+ZoT8hWttPBRw=");
_c3 = NativeDeleteCustomText;
function NativeDeleteNoIcon() {
    _s4();
    const [deleted, setDeleted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-4",
        children: !deleted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$delete$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeDelete"], {
            showIcon: false,
            onConfirm: ()=>{
            // Handle confirmation UI shown
            },
            onDelete: ()=>{
                setDeleted(true);
                setTimeout(()=>setDeleted(false), 2000);
            }
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-delete-demo.tsx",
            lineNumber: 99,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm text-muted-foreground",
            children: "Deleted!"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-delete-demo.tsx",
            lineNumber: 110,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-delete-demo.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
_s4(NativeDeleteNoIcon, "o2xeLiSUc9MiQ9+ZoT8hWttPBRw=");
_c4 = NativeDeleteNoIcon;
function NativeDeleteDisabled() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$delete$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeDelete"], {
            disabled: true,
            onConfirm: ()=>{},
            onDelete: ()=>{}
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-delete-demo.tsx",
            lineNumber: 119,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-delete-demo.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
}
_c5 = NativeDeleteDisabled;
function NativeDeleteDemo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeDeleteDefault, {}, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-delete-demo.tsx",
        lineNumber: 125,
        columnNumber: 10
    }, this);
}
_c6 = NativeDeleteDemo;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "NativeDeleteDefault");
__turbopack_context__.k.register(_c1, "NativeDeleteSmall");
__turbopack_context__.k.register(_c2, "NativeDeleteLarge");
__turbopack_context__.k.register(_c3, "NativeDeleteCustomText");
__turbopack_context__.k.register(_c4, "NativeDeleteNoIcon");
__turbopack_context__.k.register(_c5, "NativeDeleteDisabled");
__turbopack_context__.k.register(_c6, "NativeDeleteDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/shadcn-ui/native-dialog-shadcnui.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeDialog",
    ()=>NativeDialog,
    "NativeDialogClose",
    ()=>NativeDialogClose,
    "NativeDialogContent",
    ()=>NativeDialogContent,
    "NativeDialogDescription",
    ()=>NativeDialogDescription,
    "NativeDialogFooter",
    ()=>NativeDialogFooter,
    "NativeDialogHeader",
    ()=>NativeDialogHeader,
    "NativeDialogOverlay",
    ()=>NativeDialogOverlay,
    "NativeDialogPortal",
    ()=>NativeDialogPortal,
    "NativeDialogTitle",
    ()=>NativeDialogTitle,
    "NativeDialogTrigger",
    ()=>NativeDialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const NativeDialog = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"];
const NativeDialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTrigger"];
const NativeDialogPortal = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogPortal"];
const NativeDialogClose = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogClose"];
const NativeDialogOverlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        ref: ref,
        asChild: true,
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/20 backdrop-blur-sm", className)
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-dialog-shadcnui.tsx",
            lineNumber: 32,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-dialog-shadcnui.tsx",
        lineNumber: 31,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c = NativeDialogOverlay;
NativeDialogOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const NativeDialogContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c1 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeDialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeDialogOverlay, {}, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-dialog-shadcnui.tsx",
                lineNumber: 50,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                asChild: true,
                ...props,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.95,
                        filter: "blur(10px)"
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        filter: "blur(0px)"
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.95,
                        filter: "blur(10px)"
                    },
                    transition: {
                        type: "spring",
                        duration: 0.5,
                        bounce: 0
                    },
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xl p-6 shadow-2xl sm:rounded-2xl", className),
                    children: [
                        children,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogClose"], {
                            className: "absolute right-4 top-4 rounded-full p-1 opacity-70 ring-offset-background transition-all hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-dialog-shadcnui.tsx",
                                    lineNumber: 64,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sr-only",
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-dialog-shadcnui.tsx",
                                    lineNumber: 65,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-dialog-shadcnui.tsx",
                            lineNumber: 63,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-dialog-shadcnui.tsx",
                    lineNumber: 52,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-dialog-shadcnui.tsx",
                lineNumber: 51,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-dialog-shadcnui.tsx",
        lineNumber: 49,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c2 = NativeDialogContent;
NativeDialogContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const NativeDialogHeader = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"];
NativeDialogHeader.displayName = "NativeDialogHeader";
const NativeDialogFooter = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"];
NativeDialogFooter.displayName = "NativeDialogFooter";
const NativeDialogTitle = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"];
NativeDialogTitle.displayName = "NativeDialogTitle";
const NativeDialogDescription = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"];
NativeDialogDescription.displayName = "NativeDialogDescription";
;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "NativeDialogOverlay");
__turbopack_context__.k.register(_c1, "NativeDialogContent$React.forwardRef");
__turbopack_context__.k.register(_c2, "NativeDialogContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/shadcn-ui/demo/native-dialog-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeDialogDemo",
    ()=>NativeDialogDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$button$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/native/shadcn-ui/native-button-shadcnui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$dialog$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/native/shadcn-ui/native-dialog-shadcnui.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function NativeDialogDemo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$dialog$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeDialog"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$dialog$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeDialogTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$button$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeButton"], {
                    children: "Open Dialog"
                }, void 0, false, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-dialog-demo.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-dialog-demo.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$dialog$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeDialogContent"], {
                className: "sm:max-w-[425px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$dialog$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeDialogHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$dialog$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeDialogTitle"], {
                                children: "Edit Profile"
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-dialog-demo.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$dialog$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeDialogDescription"], {
                                children: "Make changes to your profile here. Click save when you're done."
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-dialog-demo.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-dialog-demo.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-4 items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-right text-sm font-medium",
                                        children: "Name"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-dialog-demo.tsx",
                                        lineNumber: 29,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "col-span-3 h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-1 focus-visible:ring-ring",
                                        defaultValue: "Pedro Duarte"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-dialog-demo.tsx",
                                        lineNumber: 30,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-dialog-demo.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-4 items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-right text-sm font-medium",
                                        children: "Username"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-dialog-demo.tsx",
                                        lineNumber: 36,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "col-span-3 h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
                                        defaultValue: "@peduarte"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-dialog-demo.tsx",
                                        lineNumber: 37,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-dialog-demo.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-dialog-demo.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$dialog$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeDialogFooter"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$button$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeButton"], {
                            glow: true,
                            onClick: ()=>{},
                            children: "Save changes"
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-dialog-demo.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-dialog-demo.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-dialog-demo.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-dialog-demo.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = NativeDialogDemo;
var _c;
__turbopack_context__.k.register(_c, "NativeDialogDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/shadcn-ui/demo/native-flip-text-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeFlipTextColored",
    ()=>NativeFlipTextColored,
    "NativeFlipTextDefault",
    ()=>NativeFlipTextDefault,
    "NativeFlipTextDemo",
    ()=>NativeFlipTextDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$carbon$2f$native$2d$flip$2d$text$2d$carbon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/native/carbon/native-flip-text-carbon.tsx [app-client] (ecmascript)");
"use client";
;
;
function NativeFlipTextDefault() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 bg-black/5 dark:bg-white/5 rounded-xl border border-black/10 dark:border-white/10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$carbon$2f$native$2d$flip$2d$text$2d$carbon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeFlipText"], {
            words: [
                "Design",
                "Develop",
                "Ship",
                "Deploy"
            ],
            className: "text-2xl font-bold text-foreground"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-flip-text-demo.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-flip-text-demo.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = NativeFlipTextDefault;
function NativeFlipTextColored() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 bg-black/5 dark:bg-white/5 rounded-xl border border-black/10 dark:border-white/10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-xl font-medium text-muted-foreground flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "We build"
                }, void 0, false, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-flip-text-demo.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$carbon$2f$native$2d$flip$2d$text$2d$carbon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeFlipText"], {
                    words: [
                        "beautiful",
                        "modern",
                        "fast",
                        "accessible"
                    ],
                    className: "text-primary font-bold",
                    duration: 1500
                }, void 0, false, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-flip-text-demo.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "user interfaces."
                }, void 0, false, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-flip-text-demo.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-flip-text-demo.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-flip-text-demo.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c1 = NativeFlipTextColored;
function NativeFlipTextDemo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-8 w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-muted-foreground",
                        children: "Default"
                    }, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-flip-text-demo.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeFlipTextDefault, {}, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-flip-text-demo.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-flip-text-demo.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-muted-foreground",
                        children: "Inline with Text"
                    }, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-flip-text-demo.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeFlipTextColored, {}, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-flip-text-demo.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-flip-text-demo.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-flip-text-demo.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c2 = NativeFlipTextDemo;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "NativeFlipTextDefault");
__turbopack_context__.k.register(_c1, "NativeFlipTextColored");
__turbopack_context__.k.register(_c2, "NativeFlipTextDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/shadcn-ui/native-hover-card-shadcnui.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeHoverCard",
    ()=>NativeHoverCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const imageSizeVariants = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
    xl: "w-40 h-40"
};
const cardWidthVariants = {
    sm: "w-56",
    md: "w-72",
    lg: "w-80",
    xl: "w-96"
};
const getInitials = (name)=>{
    return name.split(" ").map((n)=>n[0]).join("").toUpperCase().slice(0, 2);
};
function NativeHoverCard({ imageSrc, imageAlt, name, username, description, buttonText = "View Profile", onButtonClick, buttonContent, size = "md", className, variant = "default" }) {
    _s();
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const getVariantStyles = ()=>{
        switch(variant){
            case "glass":
                return "bg-background/80 backdrop-blur-md border border-border/50";
            case "bordered":
                return "bg-card border-2 border-primary/20";
            default:
                return "bg-card border border-border";
        }
    };
    // Avatar component - renders a fresh instance to ensure updates/animations work
    const avatarElement = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
        className: "w-full h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                src: imageSrc || "/placeholder.svg",
                alt: imageAlt || name
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-hover-card-shadcnui.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                children: getInitials(name)
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-hover-card-shadcnui.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-hover-card-shadcnui.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative inline-block", className),
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        initial: false,
        animate: {
            width: isHovered ? "auto" : "fit-content"
        },
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative rounded-full overflow-hidden", imageSizeVariants[size]),
                layout: true,
                animate: {
                    padding: isHovered ? "8px" : "0px"
                },
                transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                },
                children: avatarElement
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-hover-card-shadcnui.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isHovered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.2
                    },
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute top-0 left-0 rounded-xl shadow-lg overflow-hidden z-10", cardWidthVariants[size], getVariantStyles()),
                    style: {
                        pointerEvents: "auto"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative p-2", imageSizeVariants[size]),
                                children: avatarElement
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-hover-card-shadcnui.tsx",
                                lineNumber: 168,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 10,
                                    filter: "blur(4px)"
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0,
                                    filter: "blur(0px)"
                                },
                                exit: {
                                    opacity: 0,
                                    y: 10,
                                    filter: "blur(4px)"
                                },
                                transition: {
                                    delay: 0.1,
                                    duration: 0.2
                                },
                                className: "p-4 space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h3, {
                                                initial: {
                                                    opacity: 0,
                                                    x: -10
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    x: 0
                                                },
                                                transition: {
                                                    delay: 0.15
                                                },
                                                className: "text-lg font-bold text-foreground leading-tight",
                                                children: name
                                            }, void 0, false, {
                                                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-hover-card-shadcnui.tsx",
                                                lineNumber: 187,
                                                columnNumber: 19
                                            }, this),
                                            username && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                                initial: {
                                                    opacity: 0,
                                                    x: -10
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    x: 0
                                                },
                                                transition: {
                                                    delay: 0.18
                                                },
                                                className: "text-sm text-muted-foreground",
                                                children: [
                                                    "@",
                                                    username
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-hover-card-shadcnui.tsx",
                                                lineNumber: 198,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-hover-card-shadcnui.tsx",
                                        lineNumber: 186,
                                        columnNumber: 17
                                    }, this),
                                    description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                        initial: {
                                            opacity: 0,
                                            y: 5
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: 0.2
                                        },
                                        className: "text-sm text-foreground/80 leading-relaxed line-clamp-2",
                                        children: description
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-hover-card-shadcnui.tsx",
                                        lineNumber: 211,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 5
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: 0.25
                                        },
                                        children: buttonContent ? buttonContent : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: onButtonClick,
                                            size: "sm",
                                            className: "w-full",
                                            children: buttonText
                                        }, void 0, false, {
                                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-hover-card-shadcnui.tsx",
                                            lineNumber: 230,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-hover-card-shadcnui.tsx",
                                        lineNumber: 222,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-hover-card-shadcnui.tsx",
                                lineNumber: 175,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-hover-card-shadcnui.tsx",
                        lineNumber: 167,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-hover-card-shadcnui.tsx",
                    lineNumber: 154,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-hover-card-shadcnui.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-hover-card-shadcnui.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
_s(NativeHoverCard, "FPQn8a98tPjpohC7NUYORQR8GJE=");
_c = NativeHoverCard;
var _c;
__turbopack_context__.k.register(_c, "NativeHoverCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/shadcn-ui/demo/native-hover-card-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeHoverCardBordered",
    ()=>NativeHoverCardBordered,
    "NativeHoverCardCustomButton",
    ()=>NativeHoverCardCustomButton,
    "NativeHoverCardCustomButtonText",
    ()=>NativeHoverCardCustomButtonText,
    "NativeHoverCardDefault",
    ()=>NativeHoverCardDefault,
    "NativeHoverCardDemo",
    ()=>NativeHoverCardDemo,
    "NativeHoverCardExtraLarge",
    ()=>NativeHoverCardExtraLarge,
    "NativeHoverCardGlass",
    ()=>NativeHoverCardGlass,
    "NativeHoverCardLarge",
    ()=>NativeHoverCardLarge,
    "NativeHoverCardMinimal",
    ()=>NativeHoverCardMinimal,
    "NativeHoverCardNoDescription",
    ()=>NativeHoverCardNoDescription,
    "NativeHoverCardNoUsername",
    ()=>NativeHoverCardNoUsername,
    "NativeHoverCardSmall",
    ()=>NativeHoverCardSmall,
    "NativeHoverCardWithFallback",
    ()=>NativeHoverCardWithFallback
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$hover$2d$card$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/native/shadcn-ui/native-hover-card-shadcnui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-client] (ecmascript) <export default as UserPlus>");
"use client";
;
;
;
;
function NativeHoverCardDefault() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 min-h-[300px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$hover$2d$card$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeHoverCard"], {
            imageSrc: "https://github.com/shadcn.png",
            imageAlt: "Profile",
            name: "John Doe",
            username: "johndoe",
            description: "Software engineer passionate about building beautiful user interfaces and creating delightful experiences.",
            onButtonClick: ()=>console.log("View Profile clicked")
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-hover-card-demo.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-hover-card-demo.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = NativeHoverCardDefault;
function NativeHoverCardGlass() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 min-h-[300px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$hover$2d$card$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeHoverCard"], {
            imageSrc: "https://github.com/shadcn.png",
            imageAlt: "Profile",
            name: "Jane Smith",
            username: "janesmith",
            description: "Designer and developer focused on creating accessible and inclusive digital products.",
            variant: "glass",
            onButtonClick: ()=>console.log("View Profile clicked")
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-hover-card-demo.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-hover-card-demo.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c1 = NativeHoverCardGlass;
function NativeHoverCardBordered() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 min-h-[300px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$hover$2d$card$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeHoverCard"], {
            imageSrc: "https://github.com/shadcn.png",
            imageAlt: "Profile",
            name: "Alex Johnson",
            username: "alexjohnson",
            description: "Full-stack developer with expertise in React, Node.js, and cloud infrastructure.",
            variant: "bordered",
            onButtonClick: ()=>console.log("View Profile clicked")
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-hover-card-demo.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-hover-card-demo.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c2 = NativeHoverCardBordered;
function NativeHoverCardSmall() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 min-h-[300px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$hover$2d$card$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeHoverCard"], {
            imageSrc: "https://github.com/shadcn.png",
            imageAlt: "Profile",
            name: "Sarah Williams",
            username: "sarahw",
            description: "Product manager and UX enthusiast.",
            size: "sm",
            onButtonClick: ()=>console.log("View Profile clicked")
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-hover-card-demo.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-hover-card-demo.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_c3 = NativeHoverCardSmall;
function NativeHoverCardLarge() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 min-h-[300px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$hover$2d$card$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeHoverCard"], {
            imageSrc: "https://github.com/shadcn.png",
            imageAlt: "Profile",
            name: "Michael Chen",
            username: "michaelchen",
            description: "Engineering lead building scalable systems and mentoring the next generation of developers.",
            size: "lg",
            onButtonClick: ()=>console.log("View Profile clicked")
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-hover-card-demo.tsx",
            lineNumber: 73,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-hover-card-demo.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_c4 = NativeHoverCardLarge;
function NativeHoverCardExtraLarge() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 min-h-[300px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$hover$2d$card$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeHoverCard"], {
            imageSrc: "https://github.com/shadcn.png",
            imageAlt: "Profile",
            name: "Emily Davis",
            username: "emilydavis",
            description: "Creative director and brand strategist with over 10 years of experience in digital marketing and brand development.",
            size: "xl",
            onButtonClick: ()=>console.log("View Profile clicked")
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-hover-card-demo.tsx",
            lineNumber: 89,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-hover-card-demo.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_c5 = NativeHoverCardExtraLarge;
function NativeHoverCardNoUsername() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 min-h-[300px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$hover$2d$card$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeHoverCard"], {
            imageSrc: "https://github.com/shadcn.png",
            imageAlt: "Profile",
            name: "David Brown",
            description: "Entrepreneur and startup founder focused on building innovative solutions.",
            onButtonClick: ()=>console.log("View Profile clicked")
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-hover-card-demo.tsx",
            lineNumber: 105,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-hover-card-demo.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, this);
}
_c6 = NativeHoverCardNoUsername;
function NativeHoverCardNoDescription() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 min-h-[300px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$hover$2d$card$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeHoverCard"], {
            imageSrc: "https://github.com/shadcn.png",
            imageAlt: "Profile",
            name: "Lisa Anderson",
            username: "lisaanderson",
            onButtonClick: ()=>console.log("View Profile clicked")
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-hover-card-demo.tsx",
            lineNumber: 119,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-hover-card-demo.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
}
_c7 = NativeHoverCardNoDescription;
function NativeHoverCardCustomButton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 min-h-[300px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$hover$2d$card$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeHoverCard"], {
            imageSrc: "https://github.com/shadcn.png",
            imageAlt: "Profile",
            name: "Robert Taylor",
            username: "roberttaylor",
            description: "Community manager and content creator.",
            buttonContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        size: "sm",
                        variant: "outline",
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                className: "h-4 w-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-hover-card-demo.tsx",
                                lineNumber: 142,
                                columnNumber: 15
                            }, void 0),
                            "Message"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-hover-card-demo.tsx",
                        lineNumber: 141,
                        columnNumber: 13
                    }, void 0),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        size: "sm",
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"], {
                                className: "h-4 w-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-hover-card-demo.tsx",
                                lineNumber: 146,
                                columnNumber: 15
                            }, void 0),
                            "Follow"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-hover-card-demo.tsx",
                        lineNumber: 145,
                        columnNumber: 13
                    }, void 0)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-hover-card-demo.tsx",
                lineNumber: 140,
                columnNumber: 11
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-hover-card-demo.tsx",
            lineNumber: 133,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-hover-card-demo.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
_c8 = NativeHoverCardCustomButton;
function NativeHoverCardCustomButtonText() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 min-h-[300px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$hover$2d$card$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeHoverCard"], {
            imageSrc: "https://github.com/shadcn.png",
            imageAlt: "Profile",
            name: "Olivia Martinez",
            username: "oliviamartinez",
            description: "Data scientist and machine learning engineer.",
            buttonText: "Connect",
            onButtonClick: ()=>console.log("Connect clicked")
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-hover-card-demo.tsx",
            lineNumber: 159,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-hover-card-demo.tsx",
        lineNumber: 158,
        columnNumber: 5
    }, this);
}
_c9 = NativeHoverCardCustomButtonText;
function NativeHoverCardMinimal() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 min-h-[300px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$hover$2d$card$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeHoverCard"], {
            imageSrc: "https://github.com/shadcn.png",
            imageAlt: "Profile",
            name: "James Wilson",
            buttonContent: null
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-hover-card-demo.tsx",
            lineNumber: 175,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-hover-card-demo.tsx",
        lineNumber: 174,
        columnNumber: 5
    }, this);
}
_c10 = NativeHoverCardMinimal;
function NativeHoverCardWithFallback() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 min-h-[300px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$hover$2d$card$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeHoverCard"], {
            imageSrc: "https://invalid-url-that-will-fail.png",
            imageAlt: "Profile",
            name: "Thomas Anderson",
            username: "thomasa",
            description: "This demonstrates the Avatar fallback with initials when the image fails to load.",
            onButtonClick: ()=>console.log("View Profile clicked")
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-hover-card-demo.tsx",
            lineNumber: 188,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-hover-card-demo.tsx",
        lineNumber: 187,
        columnNumber: 5
    }, this);
}
_c11 = NativeHoverCardWithFallback;
function NativeHoverCardDemo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeHoverCardDefault, {}, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-hover-card-demo.tsx",
        lineNumber: 201,
        columnNumber: 10
    }, this);
}
_c12 = NativeHoverCardDemo;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;
__turbopack_context__.k.register(_c, "NativeHoverCardDefault");
__turbopack_context__.k.register(_c1, "NativeHoverCardGlass");
__turbopack_context__.k.register(_c2, "NativeHoverCardBordered");
__turbopack_context__.k.register(_c3, "NativeHoverCardSmall");
__turbopack_context__.k.register(_c4, "NativeHoverCardLarge");
__turbopack_context__.k.register(_c5, "NativeHoverCardExtraLarge");
__turbopack_context__.k.register(_c6, "NativeHoverCardNoUsername");
__turbopack_context__.k.register(_c7, "NativeHoverCardNoDescription");
__turbopack_context__.k.register(_c8, "NativeHoverCardCustomButton");
__turbopack_context__.k.register(_c9, "NativeHoverCardCustomButtonText");
__turbopack_context__.k.register(_c10, "NativeHoverCardMinimal");
__turbopack_context__.k.register(_c11, "NativeHoverCardWithFallback");
__turbopack_context__.k.register(_c12, "NativeHoverCardDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/shadcn-ui/native-image-checkbox-shadcnui.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeImageCheckbox",
    ()=>NativeImageCheckbox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
"use client";
;
;
;
;
;
const sizeConfig = {
    sm: {
        container: "w-20 h-20",
        check: "h-5 w-5",
        checkContainer: "h-6 w-6"
    },
    md: {
        container: "w-28 h-28",
        check: "h-6 w-6",
        checkContainer: "h-7 w-7"
    },
    lg: {
        container: "w-36 h-36",
        check: "h-7 w-7",
        checkContainer: "h-8 w-8"
    },
    xl: {
        container: "w-44 h-44",
        check: "h-8 w-8",
        checkContainer: "h-9 w-9"
    }
};
function NativeImageCheckbox({ src, alt, selected, onSelect, size = "md", className, imageClassName }) {
    const { container, check, checkContainer } = sizeConfig[size];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative cursor-pointer rounded-lg overflow-hidden", container, className),
        onClick: ()=>onSelect(!selected),
        whileTap: {
            scale: 0.95
        },
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 20
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                className: "w-full h-full rounded-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "w-full h-full",
                    animate: {
                        filter: selected ? "grayscale(0%)" : "grayscale(100%)",
                        scale: selected ? 1 : 0.95
                    },
                    transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 25,
                        filter: {
                            duration: 0.3
                        }
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                            src: src,
                            alt: alt,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full h-full object-cover", imageClassName)
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-image-checkbox-shadcnui.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                            className: "w-full h-full rounded-none",
                            children: alt.slice(0, 2).toUpperCase()
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-image-checkbox-shadcnui.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-image-checkbox-shadcnui.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-image-checkbox-shadcnui.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0 bg-black",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: selected ? 0 : 0.15
                },
                transition: {
                    duration: 0.3
                }
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-image-checkbox-shadcnui.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute -top-1 -right-1",
                initial: {
                    scale: 0,
                    opacity: 0
                },
                animate: {
                    scale: selected ? 1 : 0,
                    opacity: selected ? 1 : 0
                },
                transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    opacity: {
                        duration: 0.2
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-green-500 rounded-full flex items-center justify-center shadow-lg", checkContainer),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-white stroke-[3]", check)
                    }, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-image-checkbox-shadcnui.tsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-image-checkbox-shadcnui.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-image-checkbox-shadcnui.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0 rounded-lg border-2 border-green-500",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: selected ? 1 : 0
                },
                transition: {
                    duration: 0.3
                }
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-image-checkbox-shadcnui.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-image-checkbox-shadcnui.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
_c = NativeImageCheckbox;
var _c;
__turbopack_context__.k.register(_c, "NativeImageCheckbox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/shadcn-ui/demo/native-image-checkbox-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeImageCheckboxDefault",
    ()=>NativeImageCheckboxDefault,
    "NativeImageCheckboxDemo",
    ()=>NativeImageCheckboxDemo,
    "NativeImageCheckboxExtraLarge",
    ()=>NativeImageCheckboxExtraLarge,
    "NativeImageCheckboxGrid",
    ()=>NativeImageCheckboxGrid,
    "NativeImageCheckboxLarge",
    ()=>NativeImageCheckboxLarge,
    "NativeImageCheckboxSelected",
    ()=>NativeImageCheckboxSelected,
    "NativeImageCheckboxSmall",
    ()=>NativeImageCheckboxSmall
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$image$2d$checkbox$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/native/shadcn-ui/native-image-checkbox-shadcnui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
"use client";
;
;
function NativeImageCheckboxDefault() {
    _s();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$image$2d$checkbox$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeImageCheckbox"], {
            src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
            alt: "Portrait",
            selected: selected,
            onSelect: setSelected
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-image-checkbox-demo.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-image-checkbox-demo.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_s(NativeImageCheckboxDefault, "jTu/AeLw5BOy6ZW1dDNXzAJjzwE=");
_c = NativeImageCheckboxDefault;
function NativeImageCheckboxSmall() {
    _s1();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$image$2d$checkbox$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeImageCheckbox"], {
            src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
            alt: "Portrait Small",
            selected: selected,
            onSelect: setSelected,
            size: "sm"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-image-checkbox-demo.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-image-checkbox-demo.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s1(NativeImageCheckboxSmall, "jTu/AeLw5BOy6ZW1dDNXzAJjzwE=");
_c1 = NativeImageCheckboxSmall;
function NativeImageCheckboxLarge() {
    _s2();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$image$2d$checkbox$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeImageCheckbox"], {
            src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
            alt: "Portrait Large",
            selected: selected,
            onSelect: setSelected,
            size: "lg"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-image-checkbox-demo.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-image-checkbox-demo.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s2(NativeImageCheckboxLarge, "jTu/AeLw5BOy6ZW1dDNXzAJjzwE=");
_c2 = NativeImageCheckboxLarge;
function NativeImageCheckboxExtraLarge() {
    _s3();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$image$2d$checkbox$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeImageCheckbox"], {
            src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
            alt: "Portrait XL",
            selected: selected,
            onSelect: setSelected,
            size: "xl"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-image-checkbox-demo.tsx",
            lineNumber: 54,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-image-checkbox-demo.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s3(NativeImageCheckboxExtraLarge, "jTu/AeLw5BOy6ZW1dDNXzAJjzwE=");
_c3 = NativeImageCheckboxExtraLarge;
function NativeImageCheckboxSelected() {
    _s4();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$image$2d$checkbox$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeImageCheckbox"], {
            src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
            alt: "Selected Portrait",
            selected: selected,
            onSelect: setSelected
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-image-checkbox-demo.tsx",
            lineNumber: 69,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-image-checkbox-demo.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_s4(NativeImageCheckboxSelected, "FXa1wFDwdVRyrPgaaAmtFagYObM=");
_c4 = NativeImageCheckboxSelected;
function NativeImageCheckboxGrid() {
    _s5();
    const [selected1, setSelected1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selected2, setSelected2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [selected3, setSelected3] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selected4, setSelected4] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$image$2d$checkbox$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeImageCheckbox"], {
                    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
                    alt: "Image 1",
                    selected: selected1,
                    onSelect: setSelected1
                }, void 0, false, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-image-checkbox-demo.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$image$2d$checkbox$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeImageCheckbox"], {
                    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
                    alt: "Image 2",
                    selected: selected2,
                    onSelect: setSelected2
                }, void 0, false, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-image-checkbox-demo.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$image$2d$checkbox$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeImageCheckbox"], {
                    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
                    alt: "Image 3",
                    selected: selected3,
                    onSelect: setSelected3
                }, void 0, false, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-image-checkbox-demo.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$image$2d$checkbox$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeImageCheckbox"], {
                    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
                    alt: "Image 4",
                    selected: selected4,
                    onSelect: setSelected4
                }, void 0, false, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-image-checkbox-demo.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-image-checkbox-demo.tsx",
            lineNumber: 87,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-image-checkbox-demo.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_s5(NativeImageCheckboxGrid, "ojWVTf/LM5dDwiReA+pYPu+9tZ0=");
_c5 = NativeImageCheckboxGrid;
function NativeImageCheckboxDemo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeImageCheckboxDefault, {}, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-image-checkbox-demo.tsx",
        lineNumber: 118,
        columnNumber: 10
    }, this);
}
_c6 = NativeImageCheckboxDemo;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "NativeImageCheckboxDefault");
__turbopack_context__.k.register(_c1, "NativeImageCheckboxSmall");
__turbopack_context__.k.register(_c2, "NativeImageCheckboxLarge");
__turbopack_context__.k.register(_c3, "NativeImageCheckboxExtraLarge");
__turbopack_context__.k.register(_c4, "NativeImageCheckboxSelected");
__turbopack_context__.k.register(_c5, "NativeImageCheckboxGrid");
__turbopack_context__.k.register(_c6, "NativeImageCheckboxDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/shadcn-ui/native-liquid-button-shadcnui.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeLiquidButton",
    ()=>NativeLiquidButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$button$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/native/shadcn-ui/native-button-shadcnui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const sizeVariants = {
    sm: "h-9 px-4 text-sm min-w-[100px]",
    default: "h-11 px-6 text-base min-w-[140px]",
    lg: "h-14 px-8 text-lg min-w-[180px]",
    icon: "h-11 px-6 text-base min-w-[140px]"
};
function NativeLiquidButton({ children, className, variant = "default", size = "default", progress = 0, loading = false, onClick, disabled, liquidVariant = "default", liquidColor, showPercentage = false, autoSimulate = false, success = false, error = false, ...props }) {
    _s();
    const [internalProgress, setInternalProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(progress);
    const [isSimulating, setIsSimulating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NativeLiquidButton.useEffect": ()=>{
            setInternalProgress(progress);
        }
    }["NativeLiquidButton.useEffect"], [
        progress
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NativeLiquidButton.useEffect": ()=>{
            if (autoSimulate && isSimulating) {
                const interval = setInterval({
                    "NativeLiquidButton.useEffect.interval": ()=>{
                        setInternalProgress({
                            "NativeLiquidButton.useEffect.interval": (prev)=>{
                                if (prev >= 100) {
                                    clearInterval(interval);
                                    setIsSimulating(false);
                                    return 100;
                                }
                                return prev + Math.random() * 10;
                            }
                        }["NativeLiquidButton.useEffect.interval"]);
                    }
                }["NativeLiquidButton.useEffect.interval"], 200);
                return ({
                    "NativeLiquidButton.useEffect": ()=>clearInterval(interval)
                })["NativeLiquidButton.useEffect"];
            }
        }
    }["NativeLiquidButton.useEffect"], [
        autoSimulate,
        isSimulating
    ]);
    const handleClick = async ()=>{
        if (disabled || loading) return;
        if (autoSimulate) {
            setIsSimulating(true);
            setInternalProgress(0);
        }
        if (onClick) {
            await onClick();
        }
    };
    const getLiquidColor = ()=>{
        if (success) return "bg-green-500";
        if (error) return "bg-red-500";
        if (liquidColor) return liquidColor;
        switch(liquidVariant){
            case "gradient":
                return "bg-gradient-to-r from-primary via-primary/80 to-primary";
            case "glow":
                return "bg-primary";
            default:
                return "bg-primary";
        }
    };
    const clampedProgress = Math.min(Math.max(internalProgress, 0), 100);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative inline-block",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$button$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeButton"], {
            variant: variant,
            size: size,
            loading: false,
            disabled: disabled || loading,
            onClick: handleClick,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(sizeVariants[size || "default"], "relative overflow-hidden font-semibold transition-all duration-300", "before:absolute before:inset-0 before:bg-background/20 before:pointer-events-none before:rounded-md", liquidVariant === "glow" && !disabled && "shadow-lg shadow-primary/30", className),
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 origin-left", getLiquidColor()),
                    initial: {
                        scaleX: 0
                    },
                    animate: {
                        scaleX: clampedProgress / 100
                    },
                    transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 20
                    },
                    children: [
                        liquidVariant === "default" && clampedProgress > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                ...Array(3)
                            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "absolute bottom-0 w-2 h-2 bg-white/30 rounded-md",
                                    style: {
                                        left: `${20 + i * 25}%`
                                    },
                                    animate: {
                                        y: [
                                            -10,
                                            -50,
                                            -10
                                        ],
                                        opacity: [
                                            0,
                                            1,
                                            0
                                        ],
                                        scale: [
                                            0.5,
                                            1,
                                            0.5
                                        ]
                                    },
                                    transition: {
                                        duration: 2,
                                        repeat: Number.POSITIVE_INFINITY,
                                        delay: i * 0.4,
                                        ease: "easeInOut"
                                    }
                                }, i, false, {
                                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-liquid-button-shadcnui.tsx",
                                    lineNumber: 165,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false),
                        liquidVariant === "gradient" && clampedProgress > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent",
                            animate: {
                                x: [
                                    "-100%",
                                    "200%"
                                ]
                            },
                            transition: {
                                duration: 1.5,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "linear"
                            }
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-liquid-button-shadcnui.tsx",
                            lineNumber: 189,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-liquid-button-shadcnui.tsx",
                    lineNumber: 151,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "relative z-10 flex items-center justify-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            mode: "wait",
                            children: loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                exit: {
                                    opacity: 0
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "w-4 h-4 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-liquid-button-shadcnui.tsx",
                                    lineNumber: 213,
                                    columnNumber: 17
                                }, this)
                            }, "loading", false, {
                                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-liquid-button-shadcnui.tsx",
                                lineNumber: 207,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-liquid-button-shadcnui.tsx",
                            lineNumber: 205,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                            animate: loading ? {
                                opacity: [
                                    1,
                                    0.5,
                                    1
                                ]
                            } : {
                                opacity: 1
                            },
                            transition: loading ? {
                                duration: 1.5,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut"
                            } : {
                                duration: 0.2
                            },
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-liquid-button-shadcnui.tsx",
                            lineNumber: 218,
                            columnNumber: 11
                        }, this),
                        showPercentage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                            initial: {
                                scale: 1.2,
                                opacity: 0
                            },
                            animate: {
                                scale: 1,
                                opacity: 1
                            },
                            className: "text-xs font-mono",
                            children: [
                                Math.round(clampedProgress),
                                "%"
                            ]
                        }, clampedProgress, true, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-liquid-button-shadcnui.tsx",
                            lineNumber: 234,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-liquid-button-shadcnui.tsx",
                    lineNumber: 204,
                    columnNumber: 9
                }, this),
                liquidVariant === "glow" && !disabled && clampedProgress > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute inset-0 bg-primary/20 blur-xl",
                    animate: {
                        opacity: [
                            0.3,
                            0.6,
                            0.3
                        ]
                    },
                    transition: {
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut"
                    }
                }, void 0, false, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-liquid-button-shadcnui.tsx",
                    lineNumber: 247,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-liquid-button-shadcnui.tsx",
            lineNumber: 133,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-liquid-button-shadcnui.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
_s(NativeLiquidButton, "gDwVXuz7NB428zaMCkYHEkdTmgw=");
_c = NativeLiquidButton;
var _c;
__turbopack_context__.k.register(_c, "NativeLiquidButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/shadcn-ui/demo/native-liquid-button-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeLiquidButtonCustomColor",
    ()=>NativeLiquidButtonCustomColor,
    "NativeLiquidButtonDefault",
    ()=>NativeLiquidButtonDefault,
    "NativeLiquidButtonDemo",
    ()=>NativeLiquidButtonDemo,
    "NativeLiquidButtonError",
    ()=>NativeLiquidButtonError,
    "NativeLiquidButtonGlow",
    ()=>NativeLiquidButtonGlow,
    "NativeLiquidButtonGradient",
    ()=>NativeLiquidButtonGradient,
    "NativeLiquidButtonLoading",
    ()=>NativeLiquidButtonLoading,
    "NativeLiquidButtonSizes",
    ()=>NativeLiquidButtonSizes,
    "NativeLiquidButtonSuccess",
    ()=>NativeLiquidButtonSuccess,
    "NativeLiquidButtonVariants",
    ()=>NativeLiquidButtonVariants,
    "NativeLiquidButtonWave",
    ()=>NativeLiquidButtonWave,
    "NativeLiquidButtonWithProgress",
    ()=>NativeLiquidButtonWithProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$liquid$2d$button$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/native/shadcn-ui/native-liquid-button-shadcnui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function NativeLiquidButtonDefault() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 min-h-[200px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$liquid$2d$button$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeLiquidButton"], {
            autoSimulate: true,
            children: "Submit"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-liquid-button-demo.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-liquid-button-demo.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = NativeLiquidButtonDefault;
function NativeLiquidButtonGradient() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 min-h-[200px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$liquid$2d$button$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeLiquidButton"], {
            liquidVariant: "gradient",
            autoSimulate: true,
            children: "Download"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-liquid-button-demo.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-liquid-button-demo.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c1 = NativeLiquidButtonGradient;
function NativeLiquidButtonGlow() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 min-h-[200px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$liquid$2d$button$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeLiquidButton"], {
            liquidVariant: "glow",
            autoSimulate: true,
            children: "Complete"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-liquid-button-demo.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-liquid-button-demo.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c2 = NativeLiquidButtonGlow;
function NativeLiquidButtonWave() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 min-h-[200px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$liquid$2d$button$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeLiquidButton"], {
            liquidVariant: "wave",
            autoSimulate: true,
            children: "Process"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-liquid-button-demo.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-liquid-button-demo.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c3 = NativeLiquidButtonWave;
function NativeLiquidButtonWithProgress() {
    _s();
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const handleClick = async ()=>{
        // Simulate progress
        for(let i = 0; i <= 100; i += 10){
            await new Promise((resolve)=>setTimeout(resolve, 200));
            setProgress(i);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 min-h-[200px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$liquid$2d$button$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeLiquidButton"], {
            progress: progress,
            onClick: handleClick,
            showPercentage: true,
            children: "Upload File"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-liquid-button-demo.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-liquid-button-demo.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_s(NativeLiquidButtonWithProgress, "MDavqfnVfXtrXQtLNoGNVIaRLCY=");
_c4 = NativeLiquidButtonWithProgress;
function NativeLiquidButtonLoading() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 min-h-[200px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$liquid$2d$button$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeLiquidButton"], {
            loading: true,
            progress: 50,
            children: "Processing..."
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-liquid-button-demo.tsx",
            lineNumber: 71,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-liquid-button-demo.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_c5 = NativeLiquidButtonLoading;
function NativeLiquidButtonSuccess() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 min-h-[200px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$liquid$2d$button$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeLiquidButton"], {
            success: true,
            progress: 100,
            children: "Success!"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-liquid-button-demo.tsx",
            lineNumber: 81,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-liquid-button-demo.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_c6 = NativeLiquidButtonSuccess;
function NativeLiquidButtonError() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 min-h-[200px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$liquid$2d$button$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeLiquidButton"], {
            error: true,
            progress: 100,
            children: "Failed"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-liquid-button-demo.tsx",
            lineNumber: 91,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-liquid-button-demo.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
_c7 = NativeLiquidButtonError;
function NativeLiquidButtonSizes() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center gap-4 p-8 min-h-[200px] flex-wrap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$liquid$2d$button$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeLiquidButton"], {
                size: "sm",
                autoSimulate: true,
                children: "Small"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-liquid-button-demo.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$liquid$2d$button$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeLiquidButton"], {
                size: "default",
                autoSimulate: true,
                children: "Medium"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-liquid-button-demo.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$liquid$2d$button$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeLiquidButton"], {
                size: "lg",
                autoSimulate: true,
                children: "Large"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-liquid-button-demo.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$liquid$2d$button$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeLiquidButton"], {
                size: "lg",
                autoSimulate: true,
                children: "Extra Large"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-liquid-button-demo.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-liquid-button-demo.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
_c8 = NativeLiquidButtonSizes;
function NativeLiquidButtonVariants() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center gap-4 p-8 min-h-[200px] flex-wrap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$liquid$2d$button$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeLiquidButton"], {
                variant: "default",
                autoSimulate: true,
                children: "Default"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-liquid-button-demo.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$liquid$2d$button$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeLiquidButton"], {
                variant: "outline",
                autoSimulate: true,
                children: "Outline"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-liquid-button-demo.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$liquid$2d$button$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeLiquidButton"], {
                variant: "secondary",
                autoSimulate: true,
                children: "Secondary"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-liquid-button-demo.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$liquid$2d$button$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeLiquidButton"], {
                variant: "ghost",
                autoSimulate: true,
                children: "Ghost"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-liquid-button-demo.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-liquid-button-demo.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
_c9 = NativeLiquidButtonVariants;
function NativeLiquidButtonCustomColor() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 min-h-[200px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$liquid$2d$button$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeLiquidButton"], {
            liquidColor: "bg-purple-500",
            autoSimulate: true,
            children: "Custom Color"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-liquid-button-demo.tsx",
            lineNumber: 139,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-liquid-button-demo.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, this);
}
_c10 = NativeLiquidButtonCustomColor;
function NativeLiquidButtonDemo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeLiquidButtonDefault, {}, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-liquid-button-demo.tsx",
        lineNumber: 147,
        columnNumber: 10
    }, this);
}
_c11 = NativeLiquidButtonDemo;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "NativeLiquidButtonDefault");
__turbopack_context__.k.register(_c1, "NativeLiquidButtonGradient");
__turbopack_context__.k.register(_c2, "NativeLiquidButtonGlow");
__turbopack_context__.k.register(_c3, "NativeLiquidButtonWave");
__turbopack_context__.k.register(_c4, "NativeLiquidButtonWithProgress");
__turbopack_context__.k.register(_c5, "NativeLiquidButtonLoading");
__turbopack_context__.k.register(_c6, "NativeLiquidButtonSuccess");
__turbopack_context__.k.register(_c7, "NativeLiquidButtonError");
__turbopack_context__.k.register(_c8, "NativeLiquidButtonSizes");
__turbopack_context__.k.register(_c9, "NativeLiquidButtonVariants");
__turbopack_context__.k.register(_c10, "NativeLiquidButtonCustomColor");
__turbopack_context__.k.register(_c11, "NativeLiquidButtonDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/shadcn-ui/native-magnetic-shadcnui.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeMagnetic",
    ()=>NativeMagnetic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const springTransition = {
    type: "spring",
    stiffness: 400,
    damping: 25
};
function NativeMagnetic({ children, strength = 0.3, stiffness = 300, damping = 30, scaleOnHover = true, as = "div", href, onClick, className }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const springConfig = {
        stiffness,
        damping
    };
    const springX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(x, springConfig);
    const springY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(y, springConfig);
    const translateX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(springX, {
        "NativeMagnetic.useTransform[translateX]": (v)=>v * strength
    }["NativeMagnetic.useTransform[translateX]"]);
    const translateY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(springY, {
        "NativeMagnetic.useTransform[translateY]": (v)=>v * strength
    }["NativeMagnetic.useTransform[translateY]"]);
    const handleMouseMove = (e)=>{
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set(e.clientX - centerX);
        y.set(e.clientY - centerY);
    };
    const handleMouseLeave = ()=>{
        x.set(0);
        y.set(0);
        setIsHovered(false);
    };
    const commonMotionProps = {
        onMouseMove: handleMouseMove,
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: handleMouseLeave,
        style: {
            x: translateX,
            y: translateY
        },
        whileHover: scaleOnHover ? {
            scale: 1.05
        } : undefined,
        whileTap: {
            scale: 0.95
        },
        transition: springTransition
    };
    if (as === "a" && href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
            ref: ref,
            href: href,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-block cursor-pointer", className),
            onClick: onClick,
            ...commonMotionProps,
            children: children
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-magnetic-shadcnui.tsx",
            lineNumber: 117,
            columnNumber: 7
        }, this);
    }
    if (as === "button") {
        const MotionButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"]);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionButton, {
            ref: ref,
            type: "button",
            variant: "default",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-block cursor-pointer", className),
            onClick: onClick,
            ...commonMotionProps,
            children: children
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-magnetic-shadcnui.tsx",
            lineNumber: 132,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-block cursor-pointer", className),
        onClick: onClick,
        ...commonMotionProps,
        children: children
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-magnetic-shadcnui.tsx",
        lineNumber: 146,
        columnNumber: 5
    }, this);
}
_s(NativeMagnetic, "nXs5ldby4aJFKXWe4H2zoCVHoGE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = NativeMagnetic;
var _c;
__turbopack_context__.k.register(_c, "NativeMagnetic");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/shadcn-ui/demo/native-magnetic-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeMagneticDefault",
    ()=>NativeMagneticDefault,
    "NativeMagneticDemo",
    ()=>NativeMagneticDemo,
    "NativeMagneticLink",
    ()=>NativeMagneticLink,
    "NativeMagneticStrong",
    ()=>NativeMagneticStrong
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$magnetic$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/native/shadcn-ui/native-magnetic-shadcnui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/ui/button.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function NativeMagneticDefault() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$magnetic$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeMagnetic"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                children: "Magnetic Button"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-magnetic-demo.tsx",
                lineNumber: 10,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-magnetic-demo.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-magnetic-demo.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = NativeMagneticDefault;
function NativeMagneticLink() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$magnetic$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeMagnetic"], {
            as: "a",
            href: "#",
            className: "text-primary underline underline-offset-4 font-medium",
            children: "Magnetic Link"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-magnetic-demo.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-magnetic-demo.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c1 = NativeMagneticLink;
function NativeMagneticStrong() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$magnetic$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeMagnetic"], {
            strength: 0.6,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium",
                children: "Strong Pull (0.6)"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-magnetic-demo.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-magnetic-demo.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-magnetic-demo.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c2 = NativeMagneticStrong;
function NativeMagneticDemo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-8 w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-6 md:grid-cols-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-muted-foreground text-sm",
                            children: "Button"
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-magnetic-demo.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeMagneticDefault, {}, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-magnetic-demo.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-magnetic-demo.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-muted-foreground text-sm",
                            children: "Link"
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-magnetic-demo.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeMagneticLink, {}, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-magnetic-demo.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-magnetic-demo.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-muted-foreground text-sm",
                            children: "Strong Pull"
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-magnetic-demo.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeMagneticStrong, {}, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-magnetic-demo.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-magnetic-demo.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-magnetic-demo.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-magnetic-demo.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_c3 = NativeMagneticDemo;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "NativeMagneticDefault");
__turbopack_context__.k.register(_c1, "NativeMagneticLink");
__turbopack_context__.k.register(_c2, "NativeMagneticStrong");
__turbopack_context__.k.register(_c3, "NativeMagneticDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/shadcn-ui/native-morphing-button-shadcnui.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeMorphingButton",
    ()=>NativeMorphingButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LayoutGroup$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const positionClasses = {
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4"
};
const springTransition = {
    type: "spring",
    stiffness: 300,
    damping: 30
};
const reducedTransition = {
    duration: 0.1
};
function NativeMorphingButton({ actions, position = "bottom-right", fixed = false, icon, closeIcon, className }) {
    _s();
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const shouldReduceMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const transition = shouldReduceMotion ? reducedTransition : springTransition;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(fixed ? "fixed" : "absolute", positionClasses[position], "z-50", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LayoutGroup$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayoutGroup"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                layout: true,
                className: "relative",
                initial: false,
                animate: {
                    width: isExpanded ? 280 : 56,
                    height: isExpanded ? "auto" : 56,
                    borderRadius: isExpanded ? 16 : 28
                },
                transition: transition,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        onClick: ()=>setIsExpanded(!isExpanded),
                        className: "absolute right-0 bottom-0 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-shadow hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                        whileHover: shouldReduceMotion ? undefined : {
                            scale: 1.05
                        },
                        whileTap: shouldReduceMotion ? undefined : {
                            scale: 0.95
                        },
                        "aria-label": isExpanded ? "Close menu" : "Open menu",
                        "aria-expanded": isExpanded,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            mode: "wait",
                            children: isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: shouldReduceMotion ? false : {
                                    rotate: -90,
                                    opacity: 0
                                },
                                animate: {
                                    rotate: 0,
                                    opacity: 1
                                },
                                exit: {
                                    rotate: 90,
                                    opacity: 0
                                },
                                transition: {
                                    duration: 0.2
                                },
                                children: closeIcon ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-morphing-button-shadcnui.tsx",
                                    lineNumber: 123,
                                    columnNumber: 33
                                }, this)
                            }, "close", false, {
                                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-morphing-button-shadcnui.tsx",
                                lineNumber: 114,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: shouldReduceMotion ? false : {
                                    rotate: 90,
                                    opacity: 0
                                },
                                animate: {
                                    rotate: 0,
                                    opacity: 1
                                },
                                exit: {
                                    rotate: -90,
                                    opacity: 0
                                },
                                transition: {
                                    duration: 0.2
                                },
                                children: icon ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-morphing-button-shadcnui.tsx",
                                    lineNumber: 135,
                                    columnNumber: 28
                                }, this)
                            }, "open", false, {
                                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-morphing-button-shadcnui.tsx",
                                lineNumber: 126,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-morphing-button-shadcnui.tsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-morphing-button-shadcnui.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: shouldReduceMotion ? {
                                opacity: 0
                            } : {
                                opacity: 0,
                                scale: 0.8
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            exit: {
                                opacity: 0,
                                scale: 0.8
                            },
                            transition: {
                                duration: 0.2,
                                delay: 0.1
                            },
                            className: "absolute bottom-0 right-0 w-64 rounded-2xl border border-border bg-card p-4 shadow-2xl",
                            role: "menu",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2 space-y-2",
                                children: actions.map((action, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                        initial: shouldReduceMotion ? false : {
                                            opacity: 0,
                                            x: -20
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        transition: {
                                            delay: index * 0.05 + 0.2
                                        },
                                        onClick: ()=>{
                                            action.onClick();
                                            setIsExpanded(false);
                                        },
                                        className: "flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-sm transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring",
                                        role: "menuitem",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-muted-foreground",
                                                children: action.icon
                                            }, void 0, false, {
                                                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-morphing-button-shadcnui.tsx",
                                                lineNumber: 172,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: action.label
                                            }, void 0, false, {
                                                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-morphing-button-shadcnui.tsx",
                                                lineNumber: 175,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, action.label, true, {
                                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-morphing-button-shadcnui.tsx",
                                        lineNumber: 158,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-morphing-button-shadcnui.tsx",
                                lineNumber: 156,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-morphing-button-shadcnui.tsx",
                            lineNumber: 144,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-morphing-button-shadcnui.tsx",
                        lineNumber: 142,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-morphing-button-shadcnui.tsx",
                lineNumber: 92,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-morphing-button-shadcnui.tsx",
            lineNumber: 91,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-morphing-button-shadcnui.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_s(NativeMorphingButton, "ltMr1ooa+2mvgDBaIWrfDroraq4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = NativeMorphingButton;
var _c;
__turbopack_context__.k.register(_c, "NativeMorphingButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/shadcn-ui/demo/native-morphing-button-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeMorphingButtonCustomIcon",
    ()=>NativeMorphingButtonCustomIcon,
    "NativeMorphingButtonDefault",
    ()=>NativeMorphingButtonDefault,
    "NativeMorphingButtonDemo",
    ()=>NativeMorphingButtonDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$morphing$2d$button$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/native/shadcn-ui/native-morphing-button-shadcnui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-plus.js [app-client] (ecmascript) <export default as FolderPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
"use client";
;
;
;
function NativeMorphingButtonDefault() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-48 w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$morphing$2d$button$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeMorphingButton"], {
            actions: [
                {
                    label: "New Task",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-morphing-button-demo.tsx",
                        lineNumber: 13,
                        columnNumber: 19
                    }, void 0),
                    onClick: ()=>{}
                },
                {
                    label: "New Project",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderPlus$3e$__["FolderPlus"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-morphing-button-demo.tsx",
                        lineNumber: 18,
                        columnNumber: 19
                    }, void 0),
                    onClick: ()=>{}
                },
                {
                    label: "New Team",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-morphing-button-demo.tsx",
                        lineNumber: 23,
                        columnNumber: 19
                    }, void 0),
                    onClick: ()=>{}
                }
            ]
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-morphing-button-demo.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-morphing-button-demo.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = NativeMorphingButtonDefault;
function NativeMorphingButtonCustomIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-48 w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$morphing$2d$button$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeMorphingButton"], {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-morphing-button-demo.tsx",
                lineNumber: 36,
                columnNumber: 15
            }, void 0),
            actions: [
                {
                    label: "Draft",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-morphing-button-demo.tsx",
                        lineNumber: 40,
                        columnNumber: 19
                    }, void 0),
                    onClick: ()=>{}
                },
                {
                    label: "Template",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-morphing-button-demo.tsx",
                        lineNumber: 45,
                        columnNumber: 19
                    }, void 0),
                    onClick: ()=>{}
                }
            ]
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-morphing-button-demo.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-morphing-button-demo.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c1 = NativeMorphingButtonCustomIcon;
function NativeMorphingButtonDemo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-8 w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-6 md:grid-cols-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-muted-foreground text-sm",
                            children: "Default"
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-morphing-button-demo.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeMorphingButtonDefault, {}, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-morphing-button-demo.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-morphing-button-demo.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-muted-foreground text-sm",
                            children: "Custom Icon"
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-morphing-button-demo.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeMorphingButtonCustomIcon, {}, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-morphing-button-demo.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-morphing-button-demo.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-morphing-button-demo.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-morphing-button-demo.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_c2 = NativeMorphingButtonDemo;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "NativeMorphingButtonDefault");
__turbopack_context__.k.register(_c1, "NativeMorphingButtonCustomIcon");
__turbopack_context__.k.register(_c2, "NativeMorphingButtonDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/shadcn-ui/native-notification-bell-shadcnui.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeNotificationBell",
    ()=>NativeNotificationBell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12"
};
const iconSizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6"
};
const badgeSizeClasses = {
    sm: "h-4 w-4 text-[10px]",
    md: "h-5 w-5 text-xs",
    lg: "h-6 w-6 text-sm"
};
const ringVariants = {
    idle: {
        rotate: 0
    },
    ringing: {
        rotate: [
            0,
            -15,
            15,
            -10,
            10,
            -5,
            5,
            0
        ],
        transition: {
            duration: 0.6,
            ease: "easeInOut"
        }
    }
};
function NativeNotificationBell({ count = 0, showBadge, onClick, onRing, icon, size = "md", className }) {
    _s();
    const shouldReduceMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const [isRinging, setIsRinging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const hasNotifications = count > 0 || showBadge;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NativeNotificationBell.useEffect": ()=>{
            if (hasNotifications && !shouldReduceMotion) {
                setIsRinging(true);
                const timer = setTimeout({
                    "NativeNotificationBell.useEffect.timer": ()=>setIsRinging(false)
                }["NativeNotificationBell.useEffect.timer"], 600);
                onRing?.();
                return ({
                    "NativeNotificationBell.useEffect": ()=>clearTimeout(timer)
                })["NativeNotificationBell.useEffect"];
            }
        }
    }["NativeNotificationBell.useEffect"], [
        hasNotifications,
        shouldReduceMotion,
        onRing
    ]);
    const displayCount = count > 99 ? "99+" : count > 9 ? "9+" : count;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative inline-block",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            variants: ringVariants,
            animate: isRinging ? "ringing" : "idle",
            whileHover: shouldReduceMotion ? undefined : {
                scale: 1.1
            },
            whileTap: shouldReduceMotion ? undefined : {
                scale: 0.9
            },
            onClick: onClick,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", sizeClasses[size], className),
            "aria-label": `Notifications${count > 0 ? `, ${count} unread` : ""}`,
            children: [
                icon ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                    className: iconSizeClasses[size]
                }, void 0, false, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-notification-bell-shadcnui.tsx",
                    lineNumber: 107,
                    columnNumber: 18
                }, this),
                hasNotifications && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    initial: shouldReduceMotion ? {
                        scale: 1
                    } : {
                        scale: 0
                    },
                    animate: {
                        scale: 1
                    },
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute -right-1 -top-1 flex items-center justify-center rounded-full bg-destructive font-bold text-destructive-foreground", badgeSizeClasses[size]),
                    children: count > 0 ? displayCount : ""
                }, void 0, false, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-notification-bell-shadcnui.tsx",
                    lineNumber: 109,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-notification-bell-shadcnui.tsx",
            lineNumber: 94,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-notification-bell-shadcnui.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_s(NativeNotificationBell, "JqWAgkBIf0dgafdzjQrwuRlrM/I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = NativeNotificationBell;
var _c;
__turbopack_context__.k.register(_c, "NativeNotificationBell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/shadcn-ui/demo/native-notification-bell-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeNotificationBellCustomIcon",
    ()=>NativeNotificationBellCustomIcon,
    "NativeNotificationBellDefault",
    ()=>NativeNotificationBellDefault,
    "NativeNotificationBellDemo",
    ()=>NativeNotificationBellDemo,
    "NativeNotificationBellEmpty",
    ()=>NativeNotificationBellEmpty
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$notification$2d$bell$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/native/shadcn-ui/native-notification-bell-shadcnui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
"use client";
;
;
;
function NativeNotificationBellDefault() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$notification$2d$bell$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeNotificationBell"], {
            count: 3
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-notification-bell-demo.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-notification-bell-demo.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = NativeNotificationBellDefault;
function NativeNotificationBellEmpty() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$notification$2d$bell$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeNotificationBell"], {
            count: 0
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-notification-bell-demo.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-notification-bell-demo.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c1 = NativeNotificationBellEmpty;
function NativeNotificationBellCustomIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$notification$2d$bell$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeNotificationBell"], {
            count: 5,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-notification-bell-demo.tsx",
                lineNumber: 27,
                columnNumber: 15
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-notification-bell-demo.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-notification-bell-demo.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c2 = NativeNotificationBellCustomIcon;
function NativeNotificationBellDemo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-8 w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-6 md:grid-cols-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-muted-foreground text-sm",
                            children: "With Count"
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-notification-bell-demo.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeNotificationBellDefault, {}, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-notification-bell-demo.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-notification-bell-demo.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-muted-foreground text-sm",
                            children: "Empty"
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-notification-bell-demo.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeNotificationBellEmpty, {}, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-notification-bell-demo.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-notification-bell-demo.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-muted-foreground text-sm",
                            children: "Custom Icon"
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-notification-bell-demo.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeNotificationBellCustomIcon, {}, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-notification-bell-demo.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-notification-bell-demo.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-notification-bell-demo.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-notification-bell-demo.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_c3 = NativeNotificationBellDemo;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "NativeNotificationBellDefault");
__turbopack_context__.k.register(_c1, "NativeNotificationBellEmpty");
__turbopack_context__.k.register(_c2, "NativeNotificationBellCustomIcon");
__turbopack_context__.k.register(_c3, "NativeNotificationBellDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/shadcn-ui/native-start-now-shadcnui.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeStartNow",
    ()=>NativeStartNow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$button$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/native/shadcn-ui/native-button-shadcnui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rocket.js [app-client] (ecmascript) <export default as Rocket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const sizeVariants = {
    sm: "h-9 px-4 text-sm",
    default: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg"
};
const sizeMap = {
    sm: "sm",
    md: "default",
    lg: "lg"
};
const iconSizeVariants = {
    sm: "h-3.5 w-3.5",
    md: "h-4 w-4",
    lg: "h-5 w-5",
    default: "h-4 w-4"
};
function NativeStartNow({ onStart, label = "Start Now", loadingLabel = "Starting...", successLabel = "Let's Go!", size = "md", showRocket = true, icon, className, disabled = false, variant = "gradient" }) {
    _s();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleClick = async ()=>{
        if (disabled || status !== "idle") return;
        setStatus("loading");
        try {
            await onStart();
            setStatus("success");
            setTimeout(()=>setStatus("idle"), 2000);
        } catch (error) {
            setStatus("idle");
        }
    };
    const getButtonStyles = ()=>{
        const baseStyles = "relative overflow-hidden font-semibold transition-all duration-300";
        switch(variant){
            case "gradient":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(baseStyles, "bg-gradient-to-r from-primary via-primary/90 to-primary text-primary-foreground", "hover:shadow-lg hover:shadow-primary/50", "border-0");
            case "solid":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(baseStyles, "bg-primary text-primary-foreground", "hover:bg-primary/90");
            case "outline":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(baseStyles, "border-2 border-primary text-primary bg-background", "hover:bg-primary hover:text-primary-foreground");
            default:
                return baseStyles;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative inline-flex", className),
        onHoverStart: ()=>setIsHovered(true),
        onHoverEnd: ()=>setIsHovered(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: showRocket && isHovered && status === "idle" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        ...Array(6)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                scale: 0,
                                x: 0,
                                y: 0
                            },
                            animate: {
                                opacity: [
                                    0,
                                    1,
                                    0
                                ],
                                scale: [
                                    0,
                                    1,
                                    0
                                ],
                                x: Math.cos(i * Math.PI / 3) * 40,
                                y: Math.sin(i * Math.PI / 3) * 40
                            },
                            exit: {
                                opacity: 0
                            },
                            transition: {
                                duration: 1,
                                repeat: Number.POSITIVE_INFINITY,
                                delay: i * 0.1,
                                ease: "easeOut"
                            },
                            className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-3 w-3 text-primary fill-primary",
                                children: icon || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"], {
                                    className: "h-3 w-3 text-primary fill-primary"
                                }, void 0, false, {
                                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-start-now-shadcnui.tsx",
                                    lineNumber: 171,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-start-now-shadcnui.tsx",
                                lineNumber: 169,
                                columnNumber: 17
                            }, this)
                        }, i, false, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-start-now-shadcnui.tsx",
                            lineNumber: 146,
                            columnNumber: 15
                        }, this))
                }, void 0, false)
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-start-now-shadcnui.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$button$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeButton"], {
                onClick: handleClick,
                disabled: disabled || status !== "idle",
                loading: false,
                size: size === "md" ? "default" : size === "sm" ? "sm" : "lg",
                variant: variant === "gradient" ? "default" : variant === "solid" ? "default" : "outline",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(sizeVariants[size === "md" ? "default" : size], getButtonStyles(), disabled && "opacity-50 cursor-not-allowed", "rounded-md shadow-md"),
                children: [
                    variant === "gradient" && status === "idle" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent",
                        animate: {
                            x: [
                                "-200%",
                                "200%"
                            ]
                        },
                        transition: {
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 1,
                            ease: "easeInOut"
                        }
                    }, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-start-now-shadcnui.tsx",
                        lineNumber: 201,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        mode: "wait",
                        children: [
                            status === "idle" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 10,
                                    filter: "blur(4px)"
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0,
                                    filter: "blur(0px)"
                                },
                                exit: {
                                    opacity: 0,
                                    y: -10,
                                    filter: "blur(4px)"
                                },
                                transition: {
                                    duration: 0.2
                                },
                                className: "flex items-center gap-2 relative z-10",
                                children: [
                                    label,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        animate: {
                                            x: [
                                                0,
                                                3,
                                                0
                                            ]
                                        },
                                        transition: {
                                            duration: 1.2,
                                            repeat: Number.POSITIVE_INFINITY,
                                            ease: "easeInOut"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: iconSizeVariants[size === "md" ? "md" : size]
                                        }, void 0, false, {
                                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-start-now-shadcnui.tsx",
                                            lineNumber: 237,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-start-now-shadcnui.tsx",
                                        lineNumber: 227,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, "idle", true, {
                                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-start-now-shadcnui.tsx",
                                lineNumber: 218,
                                columnNumber: 13
                            }, this),
                            status === "loading" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 10,
                                    filter: "blur(4px)"
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0,
                                    filter: "blur(0px)"
                                },
                                exit: {
                                    opacity: 0,
                                    y: -10,
                                    filter: "blur(4px)"
                                },
                                transition: {
                                    duration: 0.2
                                },
                                className: "flex items-center gap-2 relative z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(iconSizeVariants[size === "md" ? "md" : size], "animate-spin")
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-start-now-shadcnui.tsx",
                                        lineNumber: 253,
                                        columnNumber: 15
                                    }, this),
                                    loadingLabel
                                ]
                            }, "loading", true, {
                                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-start-now-shadcnui.tsx",
                                lineNumber: 245,
                                columnNumber: 13
                            }, this),
                            status === "success" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    scale: 0.8,
                                    filter: "blur(4px)"
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1,
                                    filter: "blur(0px)"
                                },
                                exit: {
                                    opacity: 0,
                                    scale: 0.8,
                                    filter: "blur(4px)"
                                },
                                transition: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20
                                },
                                className: "flex items-center gap-2 relative z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        animate: {
                                            rotate: [
                                                0,
                                                360
                                            ]
                                        },
                                        transition: {
                                            duration: 0.5
                                        },
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(iconSizeVariants[size === "md" ? "md" : size], "fill-current"),
                                        children: icon || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"], {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(iconSizeVariants[size === "md" ? "md" : size], "fill-current")
                                        }, void 0, false, {
                                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-start-now-shadcnui.tsx",
                                            lineNumber: 289,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-start-now-shadcnui.tsx",
                                        lineNumber: 276,
                                        columnNumber: 15
                                    }, this),
                                    successLabel
                                ]
                            }, "success", true, {
                                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-start-now-shadcnui.tsx",
                                lineNumber: 264,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-start-now-shadcnui.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-start-now-shadcnui.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-start-now-shadcnui.tsx",
        lineNumber: 136,
        columnNumber: 5
    }, this);
}
_s(NativeStartNow, "qKwsUUaLPxSrfqJHwx70lidQILg=");
_c = NativeStartNow;
var _c;
__turbopack_context__.k.register(_c, "NativeStartNow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/shadcn-ui/demo/native-start-now-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeStartNowCustomLabels",
    ()=>NativeStartNowCustomLabels,
    "NativeStartNowDefault",
    ()=>NativeStartNowDefault,
    "NativeStartNowDemo",
    ()=>NativeStartNowDemo,
    "NativeStartNowDisabled",
    ()=>NativeStartNowDisabled,
    "NativeStartNowGradient",
    ()=>NativeStartNowGradient,
    "NativeStartNowHeartIcon",
    ()=>NativeStartNowHeartIcon,
    "NativeStartNowLarge",
    ()=>NativeStartNowLarge,
    "NativeStartNowNoSparkles",
    ()=>NativeStartNowNoSparkles,
    "NativeStartNowOutline",
    ()=>NativeStartNowOutline,
    "NativeStartNowRocketIcon",
    ()=>NativeStartNowRocketIcon,
    "NativeStartNowSmall",
    ()=>NativeStartNowSmall,
    "NativeStartNowSolid",
    ()=>NativeStartNowSolid,
    "NativeStartNowStarIcon",
    ()=>NativeStartNowStarIcon,
    "NativeStartNowZapIcon",
    ()=>NativeStartNowZapIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$start$2d$now$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/native/shadcn-ui/native-start-now-shadcnui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rocket.js [app-client] (ecmascript) <export default as Rocket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
"use client";
;
;
;
function NativeStartNowDefault() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$start$2d$now$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeStartNow"], {
        onStart: async ()=>{
            await new Promise((resolve)=>setTimeout(resolve, 1500));
        }
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-start-now-demo.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = NativeStartNowDefault;
function NativeStartNowGradient() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$start$2d$now$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeStartNow"], {
        variant: "gradient",
        onStart: async ()=>{
            await new Promise((resolve)=>setTimeout(resolve, 1500));
        }
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-start-now-demo.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c1 = NativeStartNowGradient;
function NativeStartNowSolid() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$start$2d$now$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeStartNow"], {
        variant: "solid",
        onStart: async ()=>{
            await new Promise((resolve)=>setTimeout(resolve, 1500));
        }
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-start-now-demo.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c2 = NativeStartNowSolid;
function NativeStartNowOutline() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$start$2d$now$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeStartNow"], {
        variant: "outline",
        onStart: async ()=>{
            await new Promise((resolve)=>setTimeout(resolve, 1500));
        }
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-start-now-demo.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c3 = NativeStartNowOutline;
function NativeStartNowSmall() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$start$2d$now$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeStartNow"], {
        size: "sm",
        onStart: async ()=>{
            await new Promise((resolve)=>setTimeout(resolve, 1500));
        }
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-start-now-demo.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c4 = NativeStartNowSmall;
function NativeStartNowLarge() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$start$2d$now$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeStartNow"], {
        size: "lg",
        onStart: async ()=>{
            await new Promise((resolve)=>setTimeout(resolve, 1500));
        }
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-start-now-demo.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_c5 = NativeStartNowLarge;
function NativeStartNowNoSparkles() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$start$2d$now$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeStartNow"], {
        showRocket: false,
        onStart: async ()=>{
            await new Promise((resolve)=>setTimeout(resolve, 1500));
        }
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-start-now-demo.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_c6 = NativeStartNowNoSparkles;
function NativeStartNowCustomLabels() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$start$2d$now$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeStartNow"], {
        label: "Get Started",
        loadingLabel: "Preparing...",
        successLabel: "Ready!",
        onStart: async ()=>{
            await new Promise((resolve)=>setTimeout(resolve, 1500));
        }
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-start-now-demo.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
_c7 = NativeStartNowCustomLabels;
function NativeStartNowDisabled() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$start$2d$now$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeStartNow"], {
        disabled: true,
        onStart: async ()=>{
            await new Promise((resolve)=>setTimeout(resolve, 1500));
        }
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-start-now-demo.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
_c8 = NativeStartNowDisabled;
function NativeStartNowStarIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$start$2d$now$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeStartNow"], {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
            className: "h-3 w-3 text-primary fill-primary"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-start-now-demo.tsx",
            lineNumber: 109,
            columnNumber: 13
        }, void 0),
        onStart: async ()=>{
            await new Promise((resolve)=>setTimeout(resolve, 1500));
        }
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-start-now-demo.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
_c9 = NativeStartNowStarIcon;
function NativeStartNowZapIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$start$2d$now$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeStartNow"], {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
            className: "h-3 w-3 text-primary fill-primary"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-start-now-demo.tsx",
            lineNumber: 120,
            columnNumber: 13
        }, void 0),
        onStart: async ()=>{
            await new Promise((resolve)=>setTimeout(resolve, 1500));
        }
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-start-now-demo.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
_c10 = NativeStartNowZapIcon;
function NativeStartNowHeartIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$start$2d$now$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeStartNow"], {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
            className: "h-3 w-3 text-primary fill-primary"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-start-now-demo.tsx",
            lineNumber: 131,
            columnNumber: 13
        }, void 0),
        onStart: async ()=>{
            await new Promise((resolve)=>setTimeout(resolve, 1500));
        }
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-start-now-demo.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
_c11 = NativeStartNowHeartIcon;
function NativeStartNowRocketIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$start$2d$now$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeStartNow"], {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"], {
            className: "h-3 w-3 text-primary fill-primary"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-start-now-demo.tsx",
            lineNumber: 142,
            columnNumber: 13
        }, void 0),
        onStart: async ()=>{
            await new Promise((resolve)=>setTimeout(resolve, 1500));
        }
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-start-now-demo.tsx",
        lineNumber: 141,
        columnNumber: 5
    }, this);
}
_c12 = NativeStartNowRocketIcon;
function NativeStartNowDemo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeStartNowDefault, {}, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-start-now-demo.tsx",
        lineNumber: 151,
        columnNumber: 10
    }, this);
}
_c13 = NativeStartNowDemo;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13;
__turbopack_context__.k.register(_c, "NativeStartNowDefault");
__turbopack_context__.k.register(_c1, "NativeStartNowGradient");
__turbopack_context__.k.register(_c2, "NativeStartNowSolid");
__turbopack_context__.k.register(_c3, "NativeStartNowOutline");
__turbopack_context__.k.register(_c4, "NativeStartNowSmall");
__turbopack_context__.k.register(_c5, "NativeStartNowLarge");
__turbopack_context__.k.register(_c6, "NativeStartNowNoSparkles");
__turbopack_context__.k.register(_c7, "NativeStartNowCustomLabels");
__turbopack_context__.k.register(_c8, "NativeStartNowDisabled");
__turbopack_context__.k.register(_c9, "NativeStartNowStarIcon");
__turbopack_context__.k.register(_c10, "NativeStartNowZapIcon");
__turbopack_context__.k.register(_c11, "NativeStartNowHeartIcon");
__turbopack_context__.k.register(_c12, "NativeStartNowRocketIcon");
__turbopack_context__.k.register(_c13, "NativeStartNowDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/shadcn-ui/native-tabs-shadcnui.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeTabs",
    ()=>NativeTabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/ui/tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function NativeTabs({ items, defaultValue, className }) {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultValue || items[0].id);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
        value: activeTab,
        onValueChange: setActiveTab,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full max-w-md", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                className: "relative flex w-full items-center gap-1 rounded-xl bg-muted/50 p-1 border border-black/5 dark:border-white/5",
                children: items.map((tab)=>{
                    const isActive = activeTab === tab.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                        value: tab.id,
                        className: "relative z-10 flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[state=active]:text-foreground data-[state=inactive]:text-muted-foreground data-[state=inactive]:hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none",
                        children: [
                            isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                layoutId: "active-tab",
                                className: "absolute inset-0 z-[-1] rounded-lg bg-background shadow-sm border border-black/5 dark:border-white/5",
                                transition: {
                                    type: "spring",
                                    bounce: 0.2,
                                    duration: 0.6
                                }
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-tabs-shadcnui.tsx",
                                lineNumber: 41,
                                columnNumber: 17
                            }, this),
                            tab.label
                        ]
                    }, tab.id, true, {
                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-tabs-shadcnui.tsx",
                        lineNumber: 35,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-tabs-shadcnui.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                    value: item.id,
                    className: "mt-4 overflow-hidden rounded-xl border bg-background p-6 shadow-sm",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: -10
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        exit: {
                            opacity: 0,
                            x: 10
                        },
                        transition: {
                            duration: 0.2
                        },
                        children: item.content
                    }, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-tabs-shadcnui.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                }, item.id, false, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-tabs-shadcnui.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-tabs-shadcnui.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(NativeTabs, "BZ2DAgQ7hk/mo3gzCepmLhSZlNU=");
_c = NativeTabs;
var _c;
__turbopack_context__.k.register(_c, "NativeTabs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/shadcn-ui/demo/native-tabs-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeTabsDemo",
    ()=>NativeTabsDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$tabs$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/native/shadcn-ui/native-tabs-shadcnui.tsx [app-client] (ecmascript)");
"use client";
;
;
function NativeTabsDemo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$tabs$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeTabs"], {
        items: [
            {
                id: "account",
                label: "Account",
                content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold",
                            children: "Account Settings"
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-tabs-demo.tsx",
                            lineNumber: 14,
                            columnNumber: 15
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground",
                            children: "Manage your account credentiale here."
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-tabs-demo.tsx",
                            lineNumber: 15,
                            columnNumber: 15
                        }, void 0)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-tabs-demo.tsx",
                    lineNumber: 13,
                    columnNumber: 13
                }, void 0)
            },
            {
                id: "notifications",
                label: "Notifications",
                content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold",
                            children: "Notification Preferences"
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-tabs-demo.tsx",
                            lineNumber: 26,
                            columnNumber: 15
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground",
                            children: "Choose what updates you want."
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-tabs-demo.tsx",
                            lineNumber: 29,
                            columnNumber: 15
                        }, void 0)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-tabs-demo.tsx",
                    lineNumber: 25,
                    columnNumber: 13
                }, void 0)
            },
            {
                id: "billing",
                label: "Billing",
                content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold",
                            children: "Billing Information"
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-tabs-demo.tsx",
                            lineNumber: 40,
                            columnNumber: 15
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground",
                            children: "View your invoices and manage payment methods."
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-tabs-demo.tsx",
                            lineNumber: 41,
                            columnNumber: 15
                        }, void 0)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-tabs-demo.tsx",
                    lineNumber: 39,
                    columnNumber: 13
                }, void 0)
            }
        ]
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-tabs-demo.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = NativeTabsDemo;
var _c;
__turbopack_context__.k.register(_c, "NativeTabsDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/shadcn-ui/native-tooltip-shadcnui.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeTooltip",
    ()=>NativeTooltip,
    "NativeTooltipContent",
    ()=>NativeTooltipContent,
    "NativeTooltipProvider",
    ()=>NativeTooltipProvider,
    "NativeTooltipTrigger",
    ()=>NativeTooltipTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tooltip/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const NativeTooltipProvider = ({ delayDuration = 100, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
        delayDuration: delayDuration,
        ...props
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-tooltip-shadcnui.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = NativeTooltipProvider;
const NativeTooltipRoot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const NativeTooltipTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const NativeTooltipContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, sideOffset = 8, children, animation = "blur", ...props }, ref)=>{
    const animations = {
        blur: {
            initial: {
                opacity: 0,
                scale: 0.9,
                filter: "blur(4px)"
            },
            animate: {
                opacity: 1,
                scale: 1,
                filter: "blur(0px)"
            },
            transition: {
                type: "spring",
                duration: 0.4,
                bounce: 0
            }
        },
        scale: {
            initial: {
                opacity: 0,
                scale: 0.5,
                y: 10
            },
            animate: {
                opacity: 1,
                scale: 1,
                y: 0
            },
            transition: {
                type: "spring",
                duration: 0.4,
                bounce: 0.4
            }
        }
    };
    const selectedAnimation = animations[animation];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            ref: ref,
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-50 overflow-visible bg-transparent", className),
            ...props,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: selectedAnimation.initial,
                animate: selectedAnimation.animate,
                transition: selectedAnimation.transition,
                className: "rounded-md border border-white/10 bg-black/80 dark:bg-white/90 backdrop-blur-md px-3 py-1.5 text-xs font-medium text-white dark:text-black shadow-lg",
                children: children
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-tooltip-shadcnui.tsx",
                lineNumber: 53,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-tooltip-shadcnui.tsx",
            lineNumber: 47,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-tooltip-shadcnui.tsx",
        lineNumber: 46,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = NativeTooltipContent;
NativeTooltipContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const NativeTooltip = ({ content, children, animation, ...props })=>{
    if (content) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeTooltipRoot, {
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeTooltipTrigger, {
                    asChild: true,
                    children: children
                }, void 0, false, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-tooltip-shadcnui.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeTooltipContent, {
                    animation: animation,
                    children: content
                }, void 0, false, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-tooltip-shadcnui.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-tooltip-shadcnui.tsx",
            lineNumber: 79,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeTooltipRoot, {
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-tooltip-shadcnui.tsx",
        lineNumber: 88,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_c2 = NativeTooltip;
;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "NativeTooltipProvider");
__turbopack_context__.k.register(_c1, "NativeTooltipContent");
__turbopack_context__.k.register(_c2, "NativeTooltip");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/shadcn-ui/demo/native-tooltip-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeTooltipBlur",
    ()=>NativeTooltipBlur,
    "NativeTooltipDemo",
    ()=>NativeTooltipDemo,
    "NativeTooltipScale",
    ()=>NativeTooltipScale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$button$2d$baseui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/native/base-ui/native-button-baseui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$tooltip$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/native/shadcn-ui/native-tooltip-shadcnui.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function NativeTooltipBlur() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$tooltip$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeTooltipProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$tooltip$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeTooltip"], {
            content: "This is a smooth tooltip",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$button$2d$baseui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeButton"], {
                variant: "outline",
                children: "Default (Blur)"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-tooltip-demo.tsx",
                lineNumber: 13,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-tooltip-demo.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-tooltip-demo.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = NativeTooltipBlur;
function NativeTooltipScale() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$tooltip$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeTooltipProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$tooltip$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeTooltip"], {
            content: "This pops!",
            animation: "scale",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$button$2d$baseui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeButton"], {
                variant: "outline",
                children: "Scale Animation"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-tooltip-demo.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-tooltip-demo.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-tooltip-demo.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c1 = NativeTooltipScale;
function NativeTooltipDemo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeTooltipBlur, {}, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-tooltip-demo.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeTooltipScale, {}, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-tooltip-demo.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-tooltip-demo.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_c2 = NativeTooltipDemo;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "NativeTooltipBlur");
__turbopack_context__.k.register(_c1, "NativeTooltipScale");
__turbopack_context__.k.register(_c2, "NativeTooltipDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/shadcn-ui/native-typewriter-shadcnui.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeTypewriter",
    ()=>NativeTypewriter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function NativeTypewriter({ content, speed = "medium", cursor = true, loop = false, startDelay = 0, morph = true, className }) {
    _s();
    const shouldReduceMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const [displayedText, setDisplayedText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isStarted, setIsStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Calculate delay calculation
    const speedMap = {
        slow: 100,
        medium: 50,
        fast: 30
    };
    const typingSpeed = typeof speed === "number" ? speed : speedMap[speed];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NativeTypewriter.useEffect": ()=>{
            // If reduced motion is enabled, just show the full text immediately
            if (shouldReduceMotion) {
                setDisplayedText(Array.isArray(content) ? content.join(" ") : content);
                return;
            }
            let timeoutId;
            let currentIndex = 0;
            let currentStringIndex = 0;
            // Normalize content to array
            const textArray = Array.isArray(content) ? content : [
                content
            ];
            // Actually, simpler logic for a first pass is often better.
            // Let's implement a robust "Type -> Wait -> (Delete if multi/loop) -> Next" cycle.
            let isDeleting = false;
            // Unified typing loop logic
            const runLoop = {
                "NativeTypewriter.useEffect.runLoop": ()=>{
                    const currentString = textArray[currentStringIndex];
                    if (isDeleting) {
                        setDisplayedText(currentString.substring(0, currentIndex));
                        currentIndex--;
                        if (currentIndex < 0) {
                            isDeleting = false;
                            currentIndex = 0;
                            currentStringIndex = (currentStringIndex + 1) % textArray.length;
                            if (!loop && currentStringIndex === 0) {
                                return;
                            }
                            timeoutId = setTimeout(runLoop, 500);
                        } else {
                            timeoutId = setTimeout(runLoop, typingSpeed / 2);
                        }
                    } else {
                        setDisplayedText(currentString.substring(0, currentIndex + 1));
                        currentIndex++;
                        if (currentIndex > currentString.length) {
                            if (textArray.length > 1 && (loop || currentStringIndex < textArray.length - 1) || textArray.length === 1 && loop) {
                                isDeleting = true;
                                currentIndex = currentString.length;
                                timeoutId = setTimeout(runLoop, 2000);
                            }
                        } else {
                            timeoutId = setTimeout(runLoop, typingSpeed);
                        }
                    }
                }
            }["NativeTypewriter.useEffect.runLoop"];
            const initialTimer = setTimeout({
                "NativeTypewriter.useEffect.initialTimer": ()=>{
                    setIsStarted(true);
                    runLoop();
                }
            }["NativeTypewriter.useEffect.initialTimer"], startDelay);
            return ({
                "NativeTypewriter.useEffect": ()=>{
                    clearTimeout(initialTimer);
                    clearTimeout(timeoutId);
                }
            })["NativeTypewriter.useEffect"];
        }
    }["NativeTypewriter.useEffect"], [
        content,
        typingSpeed,
        loop,
        startDelay,
        shouldReduceMotion
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "whitespace-pre-wrap",
                children: displayedText.split("").map((char, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        initial: morph ? {
                            opacity: 0,
                            filter: "blur(2px)"
                        } : {
                            opacity: 1
                        },
                        animate: morph ? {
                            opacity: 1,
                            filter: "blur(0px)"
                        } : {
                            opacity: 1
                        },
                        transition: {
                            duration: 0.1
                        },
                        children: char
                    }, index, false, {
                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-typewriter-shadcnui.tsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-typewriter-shadcnui.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            cursor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear"
                },
                className: "ml-0.5 inline-block h-[1.2em] w-[2px] bg-primary align-bottom",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-typewriter-shadcnui.tsx",
                lineNumber: 150,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-typewriter-shadcnui.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
_s(NativeTypewriter, "pgmyr7PI4IugMMKgPiYbWzuFNOs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = NativeTypewriter;
var _c;
__turbopack_context__.k.register(_c, "NativeTypewriter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/shadcn-ui/demo/native-typewriter-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeTypewriterDefault",
    ()=>NativeTypewriterDefault,
    "NativeTypewriterDemo",
    ()=>NativeTypewriterDemo,
    "NativeTypewriterLoop",
    ()=>NativeTypewriterLoop,
    "NativeTypewriterMultiline",
    ()=>NativeTypewriterMultiline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$typewriter$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/native/shadcn-ui/native-typewriter-shadcnui.tsx [app-client] (ecmascript)");
"use client";
;
;
function NativeTypewriterDefault() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 bg-black/5 dark:bg-white/5 rounded-xl border border-black/10 dark:border-white/10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$typewriter$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeTypewriter"], {
            content: "Hello, I am a native typewriter.",
            className: "text-xl font-medium text-foreground"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-typewriter-demo.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-typewriter-demo.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = NativeTypewriterDefault;
function NativeTypewriterMultiline() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 bg-black/5 dark:bg-white/5 rounded-xl border border-black/10 dark:border-white/10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$typewriter$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeTypewriter"], {
            content: [
                "I can type multiple lines...",
                "One after another.",
                "Perfect for storytelling!"
            ],
            speed: "fast",
            className: "text-xl font-medium text-primary"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-typewriter-demo.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-typewriter-demo.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c1 = NativeTypewriterMultiline;
function NativeTypewriterLoop() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 bg-black/5 dark:bg-white/5 rounded-xl border border-black/10 dark:border-white/10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$typewriter$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeTypewriter"], {
            content: [
                "Design.",
                "Develop.",
                "Ship.",
                "Repeat."
            ],
            loop: true,
            speed: 80,
            className: "text-2xl font-bold text-primary",
            cursor: false
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-typewriter-demo.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-typewriter-demo.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c2 = NativeTypewriterLoop;
function NativeTypewriterDemo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-8 w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-muted-foreground",
                        children: "Default"
                    }, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-typewriter-demo.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeTypewriterDefault, {}, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-typewriter-demo.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-typewriter-demo.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-muted-foreground",
                        children: "Multiline"
                    }, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-typewriter-demo.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeTypewriterMultiline, {}, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-typewriter-demo.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-typewriter-demo.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-muted-foreground",
                        children: "Looping (Custom Style)"
                    }, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-typewriter-demo.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeTypewriterLoop, {}, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-typewriter-demo.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-typewriter-demo.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-typewriter-demo.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_c3 = NativeTypewriterDemo;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "NativeTypewriterDefault");
__turbopack_context__.k.register(_c1, "NativeTypewriterMultiline");
__turbopack_context__.k.register(_c2, "NativeTypewriterLoop");
__turbopack_context__.k.register(_c3, "NativeTypewriterDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/shadcn-ui/social-login-button-shadcnui.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SocialLoginButton",
    ()=>SocialLoginButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chromium$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chrome$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chromium.js [app-client] (ecmascript) <export default as Chrome>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Triangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle.js [app-client] (ecmascript) <export default as Triangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
;
;
;
;
;
const providerConfig = {
    github: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"],
        label: "Verify with Github",
        bgClass: "bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
    },
    google: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chromium$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chrome$3e$__["Chrome"],
        label: "Continue with Google",
        bgClass: "bg-white text-black border border-input hover:bg-accent hover:text-accent-foreground dark:bg-neutral-900 dark:text-white dark:border-neutral-800"
    },
    x: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"],
        label: "Sign in with X",
        bgClass: "bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
    },
    vercel: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Triangle$3e$__["Triangle"],
        label: "Continue with Vercel",
        bgClass: "bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
    },
    linkedin: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"],
        label: "Connect with LinkedIn",
        bgClass: "bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
    }
};
const SocialLoginButton = ({ className, provider, animation = "none", children, ...props })=>{
    const config = providerConfig[provider];
    const Icon = config.icon;
    const baseStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("cursor-pointer relative h-12 rounded-md px-8 text-sm font-medium transition-all w-full md:w-auto min-w-[240px]", config.bgClass, className);
    // Animation variants
    const getAnimationProps = ()=>{
        switch(animation){
            case "scale":
                return {
                    whileHover: {
                        scale: 1.02
                    },
                    whileTap: {
                        scale: 0.98
                    }
                };
            case "slide":
                return {}; // Handled via CSS/State inside
            default:
                return {
                    whileTap: {
                        scale: 0.98
                    }
                };
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ...getAnimationProps(),
        className: "relative group block w-fit",
        children: [
            animation === "glow" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 rounded-md bg-current opacity-0 blur-lg group-hover:opacity-40 transition-opacity duration-500 text-inherit"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/social-login-button-shadcnui.tsx",
                lineNumber: 94,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(baseStyles, "overflow-hidden"),
                ...props,
                children: [
                    animation === "shine" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent z-10 ease-in-out"
                    }, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/social-login-button-shadcnui.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center gap-3 w-full relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-shrink-0", animation === "slide" && "transition-transform duration-300 group-hover:-translate-x-1"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/social-login-button-shadcnui.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/social-login-button-shadcnui.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(animation === "slide" && "transition-transform duration-300 group-hover:translate-x-1"),
                                children: children || config.label
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/social-login-button-shadcnui.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/social-login-button-shadcnui.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/social-login-button-shadcnui.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/social-login-button-shadcnui.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SocialLoginButton;
;
var _c;
__turbopack_context__.k.register(_c, "SocialLoginButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/shadcn-ui/demo/social-login-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SocialButtonsGlow",
    ()=>SocialButtonsGlow,
    "SocialButtonsScale",
    ()=>SocialButtonsScale,
    "SocialButtonsShine",
    ()=>SocialButtonsShine,
    "SocialButtonsSlide",
    ()=>SocialButtonsSlide
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$social$2d$login$2d$button$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/native/shadcn-ui/social-login-button-shadcnui.tsx [app-client] (ecmascript)");
"use client";
;
;
function SocialButtonsSlide() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$social$2d$login$2d$button$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SocialLoginButton"], {
                provider: "github",
                animation: "slide"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/social-login-demo.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$social$2d$login$2d$button$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SocialLoginButton"], {
                provider: "google",
                animation: "slide"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/social-login-demo.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/social-login-demo.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = SocialButtonsSlide;
function SocialButtonsScale() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$social$2d$login$2d$button$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SocialLoginButton"], {
                provider: "x",
                animation: "scale"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/social-login-demo.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$social$2d$login$2d$button$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SocialLoginButton"], {
                provider: "vercel",
                animation: "scale"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/social-login-demo.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/social-login-demo.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c1 = SocialButtonsScale;
function SocialButtonsGlow() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$social$2d$login$2d$button$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SocialLoginButton"], {
                provider: "linkedin",
                animation: "glow"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/social-login-demo.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$social$2d$login$2d$button$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SocialLoginButton"], {
                provider: "github",
                animation: "glow"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/social-login-demo.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/social-login-demo.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c2 = SocialButtonsGlow;
function SocialButtonsShine() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$social$2d$login$2d$button$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SocialLoginButton"], {
                provider: "google",
                animation: "shine"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/social-login-demo.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$social$2d$login$2d$button$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SocialLoginButton"], {
                provider: "vercel",
                animation: "shine"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/social-login-demo.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/social-login-demo.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_c3 = SocialButtonsShine;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "SocialButtonsSlide");
__turbopack_context__.k.register(_c1, "SocialButtonsScale");
__turbopack_context__.k.register(_c2, "SocialButtonsGlow");
__turbopack_context__.k.register(_c3, "SocialButtonsShine");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/shadcn-ui/native-nested-list-shadcnui.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeNestedList",
    ()=>NativeNestedList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const sizeVariants = {
    sm: "h-8 text-xs px-2",
    md: "h-10 text-sm px-3",
    lg: "h-12 text-base px-4"
};
const iconSizeVariants = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5"
};
function NestedItem({ item, level, activeId, onItemClick, size, showExpandIcon, defaultExpanded, indentSize }) {
    _s();
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultExpanded);
    const hasChildren = item.children && item.children.length > 0;
    const isActive = activeId === item.id;
    const handleClick = (e)=>{
        if (hasChildren) {
            e.preventDefault();
            setIsExpanded(!isExpanded);
        }
        onItemClick?.(item);
        item.onClick?.(e);
    };
    const Comp = item.href ? "a" : "span";
    const props = item.href ? {
        href: item.href
    } : {};
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: false,
                animate: {
                    x: 0,
                    backgroundColor: "transparent"
                },
                whileHover: {
                    x: 4,
                    backgroundColor: "hsl(var(--accent) / 0.5)"
                },
                transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                    backgroundColor: {
                        delay: 0.05,
                        duration: 0.3
                    }
                },
                style: {
                    paddingLeft: `${level * indentSize}px`
                },
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        whileTap: {
                            scale: 0.98
                        },
                        transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 17
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "default",
                            asChild: !!item.href,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(sizeVariants[size], "w-full justify-start gap-2 relative overflow-hidden rounded-md", isActive && "font-medium bg-accent/30"),
                            onClick: handleClick,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
                                className: "flex items-center gap-2",
                                ...props,
                                children: [
                                    showExpandIcon && hasChildren && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: false,
                                        animate: {
                                            rotate: isExpanded ? 90 : 0
                                        },
                                        transition: {
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 20
                                        },
                                        className: "flex-shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            className: iconSizeVariants[size]
                                        }, void 0, false, {
                                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-nested-list-shadcnui.tsx",
                                            lineNumber: 151,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-nested-list-shadcnui.tsx",
                                        lineNumber: 141,
                                        columnNumber: 17
                                    }, this),
                                    showExpandIcon && !hasChildren && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(iconSizeVariants[size], "flex-shrink-0")
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-nested-list-shadcnui.tsx",
                                        lineNumber: 154,
                                        columnNumber: 50
                                    }, this),
                                    item.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "flex-shrink-0",
                                        whileHover: {
                                            scale: 1.1
                                        },
                                        transition: {
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 17
                                        },
                                        children: item.icon
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-nested-list-shadcnui.tsx",
                                        lineNumber: 156,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "truncate",
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-nested-list-shadcnui.tsx",
                                        lineNumber: 164,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-nested-list-shadcnui.tsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-nested-list-shadcnui.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-nested-list-shadcnui.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                scale: 0,
                                opacity: 0
                            },
                            animate: {
                                scale: 1,
                                opacity: 1
                            },
                            exit: {
                                scale: 0,
                                opacity: 0
                            },
                            transition: {
                                type: "spring",
                                stiffness: 500,
                                damping: 30
                            },
                            className: "absolute right-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-black rounded-full"
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-nested-list-shadcnui.tsx",
                            lineNumber: 171,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-nested-list-shadcnui.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-nested-list-shadcnui.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                initial: false,
                children: hasChildren && isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        height: 0,
                        opacity: 0
                    },
                    animate: {
                        height: "auto",
                        opacity: 1
                    },
                    exit: {
                        height: 0,
                        opacity: 0
                    },
                    transition: {
                        height: {
                            type: "spring",
                            stiffness: 300,
                            damping: 25
                        },
                        opacity: {
                            duration: 0.2
                        }
                    },
                    style: {
                        overflow: "hidden"
                    },
                    children: item.children.map((child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NestedItem, {
                            item: child,
                            level: level + 1,
                            activeId: activeId,
                            onItemClick: onItemClick,
                            size: size,
                            showExpandIcon: showExpandIcon,
                            defaultExpanded: defaultExpanded,
                            indentSize: indentSize
                        }, child.id, false, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-nested-list-shadcnui.tsx",
                            lineNumber: 206,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-nested-list-shadcnui.tsx",
                    lineNumber: 189,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-nested-list-shadcnui.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-nested-list-shadcnui.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, this);
}
_s(NestedItem, "hXm97mhk9SycwrMiz/XacDFEqLM=");
_c = NestedItem;
function NativeNestedList({ items, activeId, onItemClick, size = "md", showExpandIcon = true, defaultExpanded = false, className, indentSize = 16 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full space-y-1", className),
        children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NestedItem, {
                item: item,
                level: 0,
                activeId: activeId,
                onItemClick: onItemClick,
                size: size,
                showExpandIcon: showExpandIcon,
                defaultExpanded: defaultExpanded,
                indentSize: indentSize
            }, item.id, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-nested-list-shadcnui.tsx",
                lineNumber: 238,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-nested-list-shadcnui.tsx",
        lineNumber: 236,
        columnNumber: 5
    }, this);
}
_c1 = NativeNestedList;
var _c, _c1;
__turbopack_context__.k.register(_c, "NestedItem");
__turbopack_context__.k.register(_c1, "NativeNestedList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/shadcn-ui/demo/native-nested-list-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeNestedListDemo",
    ()=>NativeNestedListDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$nested$2d$list$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/native/shadcn-ui/native-nested-list-shadcnui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file.js [app-client] (ecmascript) <export default as File>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder.js [app-client] (ecmascript) <export default as Folder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-open.js [app-client] (ecmascript) <export default as FolderOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-client] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$click$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointerClick$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mouse-pointer-click.js [app-client] (ecmascript) <export default as MousePointerClick>");
"use client";
;
;
;
const items = [
    {
        id: "1",
        label: "Documents",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
            className: "h-4 w-4 text-blue-500"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-nested-list-demo.tsx",
            lineNumber: 13,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        children: [
            {
                id: "1-1",
                label: "Project Specs",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
                    className: "h-4 w-4 text-gray-400"
                }, void 0, false, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-nested-list-demo.tsx",
                    lineNumber: 18,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                id: "1-2",
                label: "Design System",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
                    className: "h-4 w-4 text-gray-400"
                }, void 0, false, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-nested-list-demo.tsx",
                    lineNumber: 23,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0))
            }
        ]
    },
    {
        id: "2",
        label: "Images",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"], {
            className: "h-4 w-4 text-yellow-500"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-nested-list-demo.tsx",
            lineNumber: 30,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        children: [
            {
                id: "2-1",
                label: "Vacation",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                    className: "h-4 w-4 text-yellow-500"
                }, void 0, false, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-nested-list-demo.tsx",
                    lineNumber: 35,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                children: [
                    {
                        id: "2-1-1",
                        label: "img_001.jpg",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                            className: "h-4 w-4 text-purple-500"
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-nested-list-demo.tsx",
                            lineNumber: 40,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0))
                    },
                    {
                        id: "2-1-2",
                        label: "img_002.jpg",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                            className: "h-4 w-4 text-purple-500"
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-nested-list-demo.tsx",
                            lineNumber: 45,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0))
                    }
                ]
            },
            {
                id: "2-2",
                label: "Work",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                    className: "h-4 w-4 text-yellow-500"
                }, void 0, false, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-nested-list-demo.tsx",
                    lineNumber: 52,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0))
            }
        ]
    },
    {
        id: "3",
        label: "Settings",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
            className: "h-4 w-4 text-gray-500"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-nested-list-demo.tsx",
            lineNumber: 59,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        children: [
            {
                id: "3-1",
                label: "Google",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                    className: "h-4 w-4 text-blue-500"
                }, void 0, false, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-nested-list-demo.tsx",
                    lineNumber: 64,
                    columnNumber: 19
                }, ("TURBOPACK compile-time value", void 0)),
                href: "https://google.com"
            },
            {
                id: "3-2",
                label: "Click Me",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$click$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointerClick$3e$__["MousePointerClick"], {
                    className: "h-4 w-4 text-green-500"
                }, void 0, false, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-nested-list-demo.tsx",
                    lineNumber: 70,
                    columnNumber: 19
                }, ("TURBOPACK compile-time value", void 0)),
                onClick: (e)=>{
                    e.stopPropagation();
                    console.log("Clicked!");
                }
            }
        ]
    }
];
function NativeNestedListDemo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-sm border rounded-lg p-4 bg-background",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$nested$2d$list$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeNestedList"], {
            items: items
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-nested-list-demo.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-nested-list-demo.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
_c = NativeNestedListDemo;
var _c;
__turbopack_context__.k.register(_c, "NativeNestedListDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/base-ui/native-nested-list-baseui.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeNestedListBaseUI",
    ()=>NativeNestedListBaseUI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$button$2d$baseui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/native/base-ui/native-button-baseui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const sizeVariants = {
    sm: "h-8 text-xs px-2",
    md: "h-10 text-sm px-3",
    lg: "h-12 text-base px-4"
};
const iconSizeVariants = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5"
};
function NestedItem({ item, level, activeId, onItemClick, size, showExpandIcon, defaultExpanded, indentSize }) {
    _s();
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultExpanded);
    const hasChildren = item.children && item.children.length > 0;
    const isActive = activeId === item.id;
    const handleClick = (e)=>{
        if (hasChildren) {
            e.preventDefault();
            setIsExpanded(!isExpanded);
        }
        onItemClick?.(item);
        item.onClick?.(e);
    };
    // @ts-ignore - NativeButton props might not explicitly include href but simpler to pass it through if supported by Base UI
    const extraProps = item.href ? {
        href: item.href
    } : {};
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: false,
                animate: {
                    x: 0,
                    backgroundColor: "transparent"
                },
                whileHover: {
                    x: 4,
                    backgroundColor: "hsl(var(--accent) / 0.5)"
                },
                transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                    backgroundColor: {
                        delay: 0.05,
                        duration: 0.3
                    }
                },
                style: {
                    paddingLeft: `${level * indentSize}px`
                },
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "flex items-center",
                        whileTap: {
                            scale: 0.98
                        },
                        transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 17
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$button$2d$baseui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeButton"], {
                            variant: "ghost",
                            size: "default",
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(sizeVariants[size], "w-full justify-start gap-2 relative overflow-hidden rounded-md border-0 shadow-none hover:shadow-none bg-transparent hover:bg-transparent", isActive && "font-medium bg-accent/30"),
                            onClick: handleClick,
                            ...extraProps,
                            children: [
                                showExpandIcon && hasChildren && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: false,
                                    animate: {
                                        rotate: isExpanded ? 90 : 0
                                    },
                                    transition: {
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 20
                                    },
                                    className: "flex-shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: iconSizeVariants[size]
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/native/base-ui/native-nested-list-baseui.tsx",
                                        lineNumber: 149,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/packages/ui/src/components/native/base-ui/native-nested-list-baseui.tsx",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, this),
                                showExpandIcon && !hasChildren && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(iconSizeVariants[size], "flex-shrink-0")
                                }, void 0, false, {
                                    fileName: "[project]/packages/ui/src/components/native/base-ui/native-nested-list-baseui.tsx",
                                    lineNumber: 152,
                                    columnNumber: 48
                                }, this),
                                item.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "flex-shrink-0",
                                    whileHover: {
                                        scale: 1.1
                                    },
                                    transition: {
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 17
                                    },
                                    children: item.icon
                                }, void 0, false, {
                                    fileName: "[project]/packages/ui/src/components/native/base-ui/native-nested-list-baseui.tsx",
                                    lineNumber: 154,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "truncate",
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/packages/ui/src/components/native/base-ui/native-nested-list-baseui.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/ui/src/components/native/base-ui/native-nested-list-baseui.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/native/base-ui/native-nested-list-baseui.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                scale: 0,
                                opacity: 0
                            },
                            animate: {
                                scale: 1,
                                opacity: 1
                            },
                            exit: {
                                scale: 0,
                                opacity: 0
                            },
                            transition: {
                                type: "spring",
                                stiffness: 500,
                                damping: 30
                            },
                            className: "absolute right-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-black rounded-full"
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/base-ui/native-nested-list-baseui.tsx",
                            lineNumber: 168,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/native/base-ui/native-nested-list-baseui.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/ui/src/components/native/base-ui/native-nested-list-baseui.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                initial: false,
                children: hasChildren && isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        height: 0,
                        opacity: 0
                    },
                    animate: {
                        height: "auto",
                        opacity: 1
                    },
                    exit: {
                        height: 0,
                        opacity: 0
                    },
                    transition: {
                        height: {
                            type: "spring",
                            stiffness: 300,
                            damping: 25
                        },
                        opacity: {
                            duration: 0.2
                        }
                    },
                    style: {
                        overflow: "hidden"
                    },
                    children: item.children.map((child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NestedItem, {
                            item: child,
                            level: level + 1,
                            activeId: activeId,
                            onItemClick: onItemClick,
                            size: size,
                            showExpandIcon: showExpandIcon,
                            defaultExpanded: defaultExpanded,
                            indentSize: indentSize
                        }, child.id, false, {
                            fileName: "[project]/packages/ui/src/components/native/base-ui/native-nested-list-baseui.tsx",
                            lineNumber: 203,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/packages/ui/src/components/native/base-ui/native-nested-list-baseui.tsx",
                    lineNumber: 186,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/base-ui/native-nested-list-baseui.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/native-nested-list-baseui.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
_s(NestedItem, "hXm97mhk9SycwrMiz/XacDFEqLM=");
_c = NestedItem;
function NativeNestedListBaseUI({ items, activeId, onItemClick, size = "md", showExpandIcon = true, defaultExpanded = false, className, indentSize = 16 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full space-y-1", className),
        children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NestedItem, {
                item: item,
                level: 0,
                activeId: activeId,
                onItemClick: onItemClick,
                size: size,
                showExpandIcon: showExpandIcon,
                defaultExpanded: defaultExpanded,
                indentSize: indentSize
            }, item.id, false, {
                fileName: "[project]/packages/ui/src/components/native/base-ui/native-nested-list-baseui.tsx",
                lineNumber: 235,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/native-nested-list-baseui.tsx",
        lineNumber: 233,
        columnNumber: 5
    }, this);
}
_c1 = NativeNestedListBaseUI;
var _c, _c1;
__turbopack_context__.k.register(_c, "NestedItem");
__turbopack_context__.k.register(_c1, "NativeNestedListBaseUI");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/shadcn-ui/native-profile-notch-shadcnui.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeProfileNotch",
    ()=>NativeProfileNotch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function NativeProfileNotch({ imageSrc, name, username, children, size = "md", className, variant = "default" }) {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(variant === "overlay" ? "relative flex items-center justify-center w-[160px] h-[60px]" : "flex items-start justify-center", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            layout: true,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-background text-foreground overflow-hidden z-50 cursor-pointer border border-accent/60", isOpen ? "rounded-3xl" : "rounded-full", variant === "overlay" ? "absolute top-0 left-0" : "relative"),
            initial: false,
            animate: {
                width: isOpen ? 320 : 160,
                height: isOpen ? 380 : 60,
                borderRadius: isOpen ? 24 : 24
            },
            transition: {
                width: {
                    delay: isOpen ? 0 : 0.3,
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                },
                height: {
                    delay: isOpen ? 0.2 : 0,
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                },
                borderRadius: {
                    delay: isOpen ? 0 : 0.3,
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                },
                layout: {
                    duration: 0.3
                }
            },
            onClick: ()=>!isOpen && setIsOpen(true),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: !isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute inset-0 flex items-center justify-center w-full h-full",
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.1
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 px-4 w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                className: "w-8 h-8 flex-shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                        src: imageSrc,
                                        alt: name,
                                        className: "object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-profile-notch-shadcnui.tsx",
                                        lineNumber: 110,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                        className: "bg-muted text-[10px] text-foreground",
                                        children: name.slice(0, 2).toUpperCase()
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-profile-notch-shadcnui.tsx",
                                        lineNumber: 115,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-profile-notch-shadcnui.tsx",
                                lineNumber: 109,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium text-foreground truncate",
                                        children: name
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-profile-notch-shadcnui.tsx",
                                        lineNumber: 120,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-muted-foreground truncate",
                                        children: [
                                            "@",
                                            username
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-profile-notch-shadcnui.tsx",
                                        lineNumber: 123,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-profile-notch-shadcnui.tsx",
                                lineNumber: 119,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "w-4 h-4 text-muted-foreground ml-auto"
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-profile-notch-shadcnui.tsx",
                                lineNumber: 127,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-profile-notch-shadcnui.tsx",
                        lineNumber: 108,
                        columnNumber: 15
                    }, this)
                }, "collapsed", false, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-profile-notch-shadcnui.tsx",
                    lineNumber: 102,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        delay: 0.1,
                        duration: 0.2
                    },
                    className: "flex flex-col h-full relative p-6 cursor-default",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: (e)=>{
                                e.stopPropagation();
                                setIsOpen(false);
                            },
                            className: "absolute top-4 right-4 p-1 rounded-full bg-muted/50 hover:bg-muted transition-colors z-10",
                            "aria-label": "Close profile",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-4 h-4 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-profile-notch-shadcnui.tsx",
                                lineNumber: 147,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-profile-notch-shadcnui.tsx",
                            lineNumber: 139,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center w-full h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center mt-4 flex-shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            layoutId: "avatar",
                                            className: "w-24 h-24 rounded-full overflow-hidden border-4 border-muted/20 shadow-lg mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: imageSrc,
                                                alt: name,
                                                className: "w-full h-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-profile-notch-shadcnui.tsx",
                                                lineNumber: 158,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-profile-notch-shadcnui.tsx",
                                            lineNumber: 154,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h3, {
                                            layoutId: "name",
                                            className: "text-xl font-bold text-foreground text-center",
                                            children: name
                                        }, void 0, false, {
                                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-profile-notch-shadcnui.tsx",
                                            lineNumber: 165,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                            layoutId: "username",
                                            className: "text-muted-foreground text-sm font-medium text-center",
                                            children: [
                                                "@",
                                                username
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-profile-notch-shadcnui.tsx",
                                            lineNumber: 172,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-profile-notch-shadcnui.tsx",
                                    lineNumber: 153,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 10
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: 0.2
                                    },
                                    className: "mt-6 w-full flex-1",
                                    children: children
                                }, void 0, false, {
                                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-profile-notch-shadcnui.tsx",
                                    lineNumber: 181,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 10
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: 0.3
                                    },
                                    className: "mt-4 w-full pt-4 sticky bottom-0 bg-gradient-to-t from-background via-background to-transparent p-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors",
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                        },
                                        children: "View Full Profile"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-profile-notch-shadcnui.tsx",
                                        lineNumber: 197,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-profile-notch-shadcnui.tsx",
                                    lineNumber: 191,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-profile-notch-shadcnui.tsx",
                            lineNumber: 151,
                            columnNumber: 15
                        }, this)
                    ]
                }, "expanded", true, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-profile-notch-shadcnui.tsx",
                    lineNumber: 131,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-profile-notch-shadcnui.tsx",
                lineNumber: 100,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-profile-notch-shadcnui.tsx",
            lineNumber: 64,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/native-profile-notch-shadcnui.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_s(NativeProfileNotch, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c = NativeProfileNotch;
var _c;
__turbopack_context__.k.register(_c, "NativeProfileNotch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/shadcn-ui/demo/native-profile-notch-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeProfileNotchDefault",
    ()=>NativeProfileNotchDefault,
    "NativeProfileNotchOverlay",
    ()=>NativeProfileNotchOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$profile$2d$notch$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/native/shadcn-ui/native-profile-notch-shadcnui.tsx [app-client] (ecmascript)");
"use client";
;
;
function NativeProfileNotchDefault() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-[500px] w-full flex items-center justify-center bg-gray-50/50 dark:bg-neutral-900/50 rounded-xl relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-profile-notch-demo.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$profile$2d$notch$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeProfileNotch"], {
                imageSrc: "https://github.com/shadcn.png",
                name: "Shadcn",
                username: "shadcn",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-4 w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center p-3 rounded-xl bg-primary-accent/5 border border-primary-accent/5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-primary-accent/40 uppercase tracking-wider font-semibold",
                                    children: "Role"
                                }, void 0, false, {
                                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-profile-notch-demo.tsx",
                                    lineNumber: 16,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-primary-accent font-medium mt-1 text-center",
                                    children: "Maintainer"
                                }, void 0, false, {
                                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-profile-notch-demo.tsx",
                                    lineNumber: 19,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-profile-notch-demo.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center p-3 rounded-xl bg-primary-accent/5 border border-primary-accent/5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-primary-accent/40 uppercase tracking-wider font-semibold",
                                    children: "Commits"
                                }, void 0, false, {
                                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-profile-notch-demo.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-primary-accent font-medium mt-1 text-center",
                                    children: "1,240"
                                }, void 0, false, {
                                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-profile-notch-demo.tsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-profile-notch-demo.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-profile-notch-demo.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-profile-notch-demo.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-profile-notch-demo.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = NativeProfileNotchDefault;
function NativeProfileNotchOverlay() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-[500px] w-full flex items-center justify-center bg-gray-50/50 dark:bg-neutral-900/50 rounded-xl relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-profile-notch-demo.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4 max-w-sm text-center z-0 px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold text-foreground",
                        children: "Content Below Profile"
                    }, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-profile-notch-demo.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground",
                        children: "This content stays in place when the profile expands because the notch uses absolute positioning. Try clicking the profile above!"
                    }, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-profile-notch-demo.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-4 mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-24 bg-muted/50 rounded-lg"
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-profile-notch-demo.tsx",
                                lineNumber: 50,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-24 bg-muted/50 rounded-lg"
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-profile-notch-demo.tsx",
                                lineNumber: 51,
                                columnNumber: 12
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-profile-notch-demo.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-profile-notch-demo.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$shadcn$2d$ui$2f$native$2d$profile$2d$notch$2d$shadcnui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeProfileNotch"], {
                    variant: "overlay",
                    imageSrc: "https://github.com/shadcn.png",
                    name: "Shadcn",
                    username: "shadcn",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-primary-accent/10 pt-4 mt-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-primary-accent/70 text-center italic",
                            children: '"Overlay variant example."'
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-profile-notch-demo.tsx",
                            lineNumber: 63,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-profile-notch-demo.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-profile-notch-demo.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-profile-notch-demo.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/shadcn-ui/demo/native-profile-notch-demo.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c1 = NativeProfileNotchOverlay;
var _c, _c1;
__turbopack_context__.k.register(_c, "NativeProfileNotchDefault");
__turbopack_context__.k.register(_c1, "NativeProfileNotchOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/native/base-ui/native-profile-notch-baseui.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeProfileNotch",
    ()=>NativeProfileNotch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$avatar$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Avatar$3e$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/react/esm/avatar/index.parts.js [app-client] (ecmascript) <export * as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function NativeProfileNotch({ imageSrc, name, username, children, size = "md", className, variant = "default" }) {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(variant === "overlay" ? "relative flex items-center justify-center w-[160px] h-[60px]" : "flex items-start justify-center", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            layout: true,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-background text-foreground overflow-hidden z-50 cursor-pointer border border-accent/50", isOpen ? "rounded-3xl" : "rounded-full", variant === "overlay" ? "absolute top-0 left-0" : "relative"),
            initial: false,
            animate: {
                width: isOpen ? 320 : 160,
                height: isOpen ? 380 : 60,
                borderRadius: isOpen ? 24 : 24
            },
            transition: {
                width: {
                    delay: isOpen ? 0 : 0.3,
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                },
                height: {
                    delay: isOpen ? 0.2 : 0,
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                },
                borderRadius: {
                    delay: isOpen ? 0 : 0.3,
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                },
                layout: {
                    duration: 0.3
                }
            },
            onClick: ()=>!isOpen && setIsOpen(true),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: !isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute inset-0 flex items-center justify-center w-full h-full",
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.1
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 px-4 w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$avatar$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Avatar$3e$__["Avatar"].Root, {
                                className: "w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full overflow-hidden bg-muted",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$avatar$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Avatar$3e$__["Avatar"].Image, {
                                        src: imageSrc,
                                        alt: name,
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/native/base-ui/native-profile-notch-baseui.tsx",
                                        lineNumber: 110,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$avatar$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Avatar$3e$__["Avatar"].Fallback, {
                                        className: "text-[10px] text-foreground",
                                        children: name.slice(0, 2).toUpperCase()
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/native/base-ui/native-profile-notch-baseui.tsx",
                                        lineNumber: 115,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/ui/src/components/native/base-ui/native-profile-notch-baseui.tsx",
                                lineNumber: 109,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium text-foreground truncate",
                                        children: name
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/native/base-ui/native-profile-notch-baseui.tsx",
                                        lineNumber: 120,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-muted-foreground truncate",
                                        children: [
                                            "@",
                                            username
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/packages/ui/src/components/native/base-ui/native-profile-notch-baseui.tsx",
                                        lineNumber: 123,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/ui/src/components/native/base-ui/native-profile-notch-baseui.tsx",
                                lineNumber: 119,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "w-4 h-4 text-muted-foreground ml-auto"
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/src/components/native/base-ui/native-profile-notch-baseui.tsx",
                                lineNumber: 127,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/ui/src/components/native/base-ui/native-profile-notch-baseui.tsx",
                        lineNumber: 108,
                        columnNumber: 15
                    }, this)
                }, "collapsed", false, {
                    fileName: "[project]/packages/ui/src/components/native/base-ui/native-profile-notch-baseui.tsx",
                    lineNumber: 102,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        delay: 0.1,
                        duration: 0.2
                    },
                    className: "flex flex-col h-full relative p-6 cursor-default",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: (e)=>{
                                e.stopPropagation();
                                setIsOpen(false);
                            },
                            className: "absolute top-4 right-4 p-1 rounded-full bg-muted/50 hover:bg-muted transition-colors z-10",
                            "aria-label": "Close profile",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-4 h-4 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/src/components/native/base-ui/native-profile-notch-baseui.tsx",
                                lineNumber: 147,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/base-ui/native-profile-notch-baseui.tsx",
                            lineNumber: 139,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center w-full h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center mt-4 flex-shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            layoutId: "avatar",
                                            className: "w-24 h-24 rounded-full overflow-hidden border-4 border-muted/20 shadow-lg mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: imageSrc,
                                                alt: name,
                                                className: "w-full h-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/ui/src/components/native/base-ui/native-profile-notch-baseui.tsx",
                                                lineNumber: 158,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/packages/ui/src/components/native/base-ui/native-profile-notch-baseui.tsx",
                                            lineNumber: 154,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h3, {
                                            layoutId: "name",
                                            className: "text-xl font-bold text-foreground text-center",
                                            children: name
                                        }, void 0, false, {
                                            fileName: "[project]/packages/ui/src/components/native/base-ui/native-profile-notch-baseui.tsx",
                                            lineNumber: 165,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                            layoutId: "username",
                                            className: "text-muted-foreground text-sm font-medium text-center",
                                            children: [
                                                "@",
                                                username
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/packages/ui/src/components/native/base-ui/native-profile-notch-baseui.tsx",
                                            lineNumber: 172,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/ui/src/components/native/base-ui/native-profile-notch-baseui.tsx",
                                    lineNumber: 153,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 10
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: 0.2
                                    },
                                    className: "mt-6 w-full flex-1",
                                    children: children
                                }, void 0, false, {
                                    fileName: "[project]/packages/ui/src/components/native/base-ui/native-profile-notch-baseui.tsx",
                                    lineNumber: 181,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 10
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: 0.3
                                    },
                                    className: "mt-4 w-full pt-4 sticky bottom-0 bg-gradient-to-t from-background via-background to-transparent p-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors",
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                        },
                                        children: "View Full Profile"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/native/base-ui/native-profile-notch-baseui.tsx",
                                        lineNumber: 196,
                                        columnNumber: 20
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/packages/ui/src/components/native/base-ui/native-profile-notch-baseui.tsx",
                                    lineNumber: 190,
                                    columnNumber: 18
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/ui/src/components/native/base-ui/native-profile-notch-baseui.tsx",
                            lineNumber: 151,
                            columnNumber: 15
                        }, this)
                    ]
                }, "expanded", true, {
                    fileName: "[project]/packages/ui/src/components/native/base-ui/native-profile-notch-baseui.tsx",
                    lineNumber: 131,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/base-ui/native-profile-notch-baseui.tsx",
                lineNumber: 100,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/base-ui/native-profile-notch-baseui.tsx",
            lineNumber: 64,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/native-profile-notch-baseui.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_s(NativeProfileNotch, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c = NativeProfileNotch;
var _c;
__turbopack_context__.k.register(_c, "NativeProfileNotch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=packages_ui_src_components_native_3f43eae8._.js.map