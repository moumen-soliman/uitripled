module.exports = [
"[project]/packages/ui/src/components/native/base-ui/native-liquid-button-baseui.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeLiquidButton",
    ()=>NativeLiquidButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$button$2d$baseui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/native/base-ui/native-button-baseui.tsx [app-ssr] (ecmascript)");
"use client";
;
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
    const [internalProgress, setInternalProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(progress);
    const [isSimulating, setIsSimulating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setInternalProgress(progress);
    }, [
        progress
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (autoSimulate && isSimulating) {
            const interval = setInterval(()=>{
                setInternalProgress((prev)=>{
                    if (prev >= 100) {
                        clearInterval(interval);
                        setIsSimulating(false);
                        return 100;
                    }
                    return prev + Math.random() * 10;
                });
            }, 200);
            return ()=>clearInterval(interval);
        }
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative inline-block",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$button$2d$baseui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeButton"], {
            variant: variant,
            size: size,
            loading: false,
            disabled: disabled || loading,
            onClick: handleClick,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(sizeVariants[size || "default"], "relative overflow-hidden font-semibold transition-all duration-300", "before:absolute before:inset-0 before:bg-background/20 before:pointer-events-none before:rounded-md", liquidVariant === "glow" && !disabled && "shadow-lg shadow-primary/30", className),
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 origin-left", getLiquidColor()),
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
                        liquidVariant === "default" && clampedProgress > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                ...Array(3)
                            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                    fileName: "[project]/packages/ui/src/components/native/base-ui/native-liquid-button-baseui.tsx",
                                    lineNumber: 163,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false),
                        liquidVariant === "gradient" && clampedProgress > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            fileName: "[project]/packages/ui/src/components/native/base-ui/native-liquid-button-baseui.tsx",
                            lineNumber: 187,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/native/base-ui/native-liquid-button-baseui.tsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "relative z-10 flex items-center justify-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            mode: "wait",
                            children: loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                exit: {
                                    opacity: 0
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "w-4 h-4 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/packages/ui/src/components/native/base-ui/native-liquid-button-baseui.tsx",
                                    lineNumber: 211,
                                    columnNumber: 17
                                }, this)
                            }, "loading", false, {
                                fileName: "[project]/packages/ui/src/components/native/base-ui/native-liquid-button-baseui.tsx",
                                lineNumber: 205,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/native/base-ui/native-liquid-button-baseui.tsx",
                            lineNumber: 203,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
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
                            fileName: "[project]/packages/ui/src/components/native/base-ui/native-liquid-button-baseui.tsx",
                            lineNumber: 216,
                            columnNumber: 11
                        }, this),
                        showPercentage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
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
                            fileName: "[project]/packages/ui/src/components/native/base-ui/native-liquid-button-baseui.tsx",
                            lineNumber: 232,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/native/base-ui/native-liquid-button-baseui.tsx",
                    lineNumber: 202,
                    columnNumber: 9
                }, this),
                liquidVariant === "glow" && !disabled && clampedProgress > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                    fileName: "[project]/packages/ui/src/components/native/base-ui/native-liquid-button-baseui.tsx",
                    lineNumber: 245,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/ui/src/components/native/base-ui/native-liquid-button-baseui.tsx",
            lineNumber: 131,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/native-liquid-button-baseui.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
}),
"[project]/packages/ui/src/components/native/base-ui/demo/native-liquid-button-demo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$liquid$2d$button$2d$baseui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/native/base-ui/native-liquid-button-baseui.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function NativeLiquidButtonDefault() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 min-h-[200px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$liquid$2d$button$2d$baseui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeLiquidButton"], {
            autoSimulate: true,
            children: "Submit"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-liquid-button-demo.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-liquid-button-demo.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
function NativeLiquidButtonGradient() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 min-h-[200px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$liquid$2d$button$2d$baseui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeLiquidButton"], {
            liquidVariant: "gradient",
            autoSimulate: true,
            children: "Download"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-liquid-button-demo.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-liquid-button-demo.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
function NativeLiquidButtonGlow() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 min-h-[200px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$liquid$2d$button$2d$baseui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeLiquidButton"], {
            liquidVariant: "glow",
            autoSimulate: true,
            children: "Complete"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-liquid-button-demo.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-liquid-button-demo.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
function NativeLiquidButtonWave() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 min-h-[200px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$liquid$2d$button$2d$baseui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeLiquidButton"], {
            liquidVariant: "wave",
            autoSimulate: true,
            children: "Process"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-liquid-button-demo.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-liquid-button-demo.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
function NativeLiquidButtonWithProgress() {
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const handleClick = async ()=>{
        // Simulate progress
        for(let i = 0; i <= 100; i += 10){
            await new Promise((resolve)=>setTimeout(resolve, 200));
            setProgress(i);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 min-h-[200px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$liquid$2d$button$2d$baseui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeLiquidButton"], {
            progress: progress,
            onClick: handleClick,
            showPercentage: true,
            children: "Upload File"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-liquid-button-demo.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-liquid-button-demo.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
function NativeLiquidButtonLoading() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 min-h-[200px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$liquid$2d$button$2d$baseui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeLiquidButton"], {
            loading: true,
            progress: 50,
            children: "Processing..."
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-liquid-button-demo.tsx",
            lineNumber: 71,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-liquid-button-demo.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
function NativeLiquidButtonSuccess() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 min-h-[200px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$liquid$2d$button$2d$baseui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeLiquidButton"], {
            success: true,
            progress: 100,
            children: "Success!"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-liquid-button-demo.tsx",
            lineNumber: 81,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-liquid-button-demo.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
function NativeLiquidButtonError() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 min-h-[200px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$liquid$2d$button$2d$baseui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeLiquidButton"], {
            error: true,
            progress: 100,
            children: "Failed"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-liquid-button-demo.tsx",
            lineNumber: 91,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-liquid-button-demo.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
function NativeLiquidButtonSizes() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center gap-4 p-8 min-h-[200px] flex-wrap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$liquid$2d$button$2d$baseui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeLiquidButton"], {
                size: "sm",
                autoSimulate: true,
                children: "Small"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-liquid-button-demo.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$liquid$2d$button$2d$baseui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeLiquidButton"], {
                size: "default",
                autoSimulate: true,
                children: "Medium"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-liquid-button-demo.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$liquid$2d$button$2d$baseui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeLiquidButton"], {
                size: "lg",
                autoSimulate: true,
                children: "Large"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-liquid-button-demo.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$liquid$2d$button$2d$baseui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeLiquidButton"], {
                size: "lg",
                autoSimulate: true,
                children: "Extra Large"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-liquid-button-demo.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-liquid-button-demo.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
function NativeLiquidButtonVariants() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center gap-4 p-8 min-h-[200px] flex-wrap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$liquid$2d$button$2d$baseui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeLiquidButton"], {
                variant: "default",
                autoSimulate: true,
                children: "Default"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-liquid-button-demo.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$liquid$2d$button$2d$baseui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeLiquidButton"], {
                variant: "outline",
                autoSimulate: true,
                children: "Outline"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-liquid-button-demo.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$liquid$2d$button$2d$baseui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeLiquidButton"], {
                variant: "secondary",
                autoSimulate: true,
                children: "Secondary"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-liquid-button-demo.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$liquid$2d$button$2d$baseui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeLiquidButton"], {
                variant: "ghost",
                autoSimulate: true,
                children: "Ghost"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-liquid-button-demo.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-liquid-button-demo.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
function NativeLiquidButtonCustomColor() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 min-h-[200px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$liquid$2d$button$2d$baseui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeLiquidButton"], {
            liquidColor: "bg-purple-500",
            autoSimulate: true,
            children: "Custom Color"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-liquid-button-demo.tsx",
            lineNumber: 139,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-liquid-button-demo.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, this);
}
function NativeLiquidButtonDemo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeLiquidButtonDefault, {}, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-liquid-button-demo.tsx",
        lineNumber: 147,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=packages_ui_src_components_native_base-ui_906d64ba._.js.map