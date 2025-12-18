module.exports = [
"[project]/packages/ui/src/components/native/base-ui/native-start-now-baseui.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeStartNow",
    ()=>NativeStartNow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rocket.js [app-ssr] (ecmascript) <export default as Rocket>");
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
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
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
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(baseStyles, "bg-gradient-to-r from-primary via-primary/90 to-primary text-primary-foreground", "hover:shadow-lg hover:shadow-primary/50", "border-0");
            case "solid":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(baseStyles, "bg-primary text-primary-foreground", "hover:bg-primary/90");
            case "outline":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(baseStyles, "border-2 border-primary text-primary bg-background", "hover:bg-primary hover:text-primary-foreground");
            default:
                return baseStyles;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative inline-flex", className),
        onHoverStart: ()=>setIsHovered(true),
        onHoverEnd: ()=>setIsHovered(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: showRocket && isHovered && status === "idle" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        ...Array(6)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-3 w-3 text-primary fill-primary",
                                children: icon || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"], {
                                    className: "h-3 w-3 text-primary fill-primary"
                                }, void 0, false, {
                                    fileName: "[project]/packages/ui/src/components/native/base-ui/native-start-now-baseui.tsx",
                                    lineNumber: 171,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/src/components/native/base-ui/native-start-now-baseui.tsx",
                                lineNumber: 169,
                                columnNumber: 17
                            }, this)
                        }, i, false, {
                            fileName: "[project]/packages/ui/src/components/native/base-ui/native-start-now-baseui.tsx",
                            lineNumber: 146,
                            columnNumber: 15
                        }, this))
                }, void 0, false)
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/base-ui/native-start-now-baseui.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$button$2d$baseui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeButton"], {
                onClick: handleClick,
                disabled: disabled || status !== "idle",
                loading: false,
                size: size === "md" ? "default" : size === "sm" ? "sm" : "lg",
                variant: variant === "gradient" ? "default" : variant === "solid" ? "default" : "outline",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(sizeVariants[size === "md" ? "default" : size], getButtonStyles(), disabled && "opacity-50 cursor-not-allowed", "rounded-md shadow-md"),
                children: [
                    variant === "gradient" && status === "idle" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                        fileName: "[project]/packages/ui/src/components/native/base-ui/native-start-now-baseui.tsx",
                        lineNumber: 201,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        mode: "wait",
                        children: [
                            status === "idle" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: iconSizeVariants[size === "md" ? "md" : size]
                                        }, void 0, false, {
                                            fileName: "[project]/packages/ui/src/components/native/base-ui/native-start-now-baseui.tsx",
                                            lineNumber: 237,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/native/base-ui/native-start-now-baseui.tsx",
                                        lineNumber: 227,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, "idle", true, {
                                fileName: "[project]/packages/ui/src/components/native/base-ui/native-start-now-baseui.tsx",
                                lineNumber: 218,
                                columnNumber: 13
                            }, this),
                            status === "loading" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(iconSizeVariants[size === "md" ? "md" : size], "animate-spin")
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/native/base-ui/native-start-now-baseui.tsx",
                                        lineNumber: 253,
                                        columnNumber: 15
                                    }, this),
                                    loadingLabel
                                ]
                            }, "loading", true, {
                                fileName: "[project]/packages/ui/src/components/native/base-ui/native-start-now-baseui.tsx",
                                lineNumber: 245,
                                columnNumber: 13
                            }, this),
                            status === "success" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        animate: {
                                            rotate: [
                                                0,
                                                360
                                            ]
                                        },
                                        transition: {
                                            duration: 0.5
                                        },
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(iconSizeVariants[size === "md" ? "md" : size], "fill-current"),
                                        children: icon || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"], {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(iconSizeVariants[size === "md" ? "md" : size], "fill-current")
                                        }, void 0, false, {
                                            fileName: "[project]/packages/ui/src/components/native/base-ui/native-start-now-baseui.tsx",
                                            lineNumber: 289,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/native/base-ui/native-start-now-baseui.tsx",
                                        lineNumber: 276,
                                        columnNumber: 15
                                    }, this),
                                    successLabel
                                ]
                            }, "success", true, {
                                fileName: "[project]/packages/ui/src/components/native/base-ui/native-start-now-baseui.tsx",
                                lineNumber: 264,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/ui/src/components/native/base-ui/native-start-now-baseui.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/ui/src/components/native/base-ui/native-start-now-baseui.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/native-start-now-baseui.tsx",
        lineNumber: 136,
        columnNumber: 5
    }, this);
}
}),
"[project]/packages/ui/src/components/native/base-ui/demo/native-start-now-demo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$start$2d$now$2d$baseui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/native/base-ui/native-start-now-baseui.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rocket.js [app-ssr] (ecmascript) <export default as Rocket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
"use client";
;
;
;
function NativeStartNowDefault() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$start$2d$now$2d$baseui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeStartNow"], {
        onStart: async ()=>{
            await new Promise((resolve)=>setTimeout(resolve, 1500));
        }
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-start-now-demo.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
function NativeStartNowGradient() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$start$2d$now$2d$baseui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeStartNow"], {
        variant: "gradient",
        onStart: async ()=>{
            await new Promise((resolve)=>setTimeout(resolve, 1500));
        }
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-start-now-demo.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
function NativeStartNowSolid() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$start$2d$now$2d$baseui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeStartNow"], {
        variant: "solid",
        onStart: async ()=>{
            await new Promise((resolve)=>setTimeout(resolve, 1500));
        }
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-start-now-demo.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
function NativeStartNowOutline() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$start$2d$now$2d$baseui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeStartNow"], {
        variant: "outline",
        onStart: async ()=>{
            await new Promise((resolve)=>setTimeout(resolve, 1500));
        }
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-start-now-demo.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
function NativeStartNowSmall() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$start$2d$now$2d$baseui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeStartNow"], {
        size: "sm",
        onStart: async ()=>{
            await new Promise((resolve)=>setTimeout(resolve, 1500));
        }
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-start-now-demo.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
function NativeStartNowLarge() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$start$2d$now$2d$baseui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeStartNow"], {
        size: "lg",
        onStart: async ()=>{
            await new Promise((resolve)=>setTimeout(resolve, 1500));
        }
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-start-now-demo.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
function NativeStartNowNoSparkles() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$start$2d$now$2d$baseui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeStartNow"], {
        showRocket: false,
        onStart: async ()=>{
            await new Promise((resolve)=>setTimeout(resolve, 1500));
        }
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-start-now-demo.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
function NativeStartNowCustomLabels() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$start$2d$now$2d$baseui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeStartNow"], {
        label: "Get Started",
        loadingLabel: "Preparing...",
        successLabel: "Ready!",
        onStart: async ()=>{
            await new Promise((resolve)=>setTimeout(resolve, 1500));
        }
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-start-now-demo.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
function NativeStartNowDisabled() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$start$2d$now$2d$baseui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeStartNow"], {
        disabled: true,
        onStart: async ()=>{
            await new Promise((resolve)=>setTimeout(resolve, 1500));
        }
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-start-now-demo.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
function NativeStartNowStarIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$start$2d$now$2d$baseui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeStartNow"], {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
            className: "h-3 w-3 text-primary fill-primary"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-start-now-demo.tsx",
            lineNumber: 109,
            columnNumber: 13
        }, void 0),
        onStart: async ()=>{
            await new Promise((resolve)=>setTimeout(resolve, 1500));
        }
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-start-now-demo.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
function NativeStartNowZapIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$start$2d$now$2d$baseui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeStartNow"], {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
            className: "h-3 w-3 text-primary fill-primary"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-start-now-demo.tsx",
            lineNumber: 120,
            columnNumber: 13
        }, void 0),
        onStart: async ()=>{
            await new Promise((resolve)=>setTimeout(resolve, 1500));
        }
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-start-now-demo.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
function NativeStartNowHeartIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$start$2d$now$2d$baseui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeStartNow"], {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
            className: "h-3 w-3 text-primary fill-primary"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-start-now-demo.tsx",
            lineNumber: 131,
            columnNumber: 13
        }, void 0),
        onStart: async ()=>{
            await new Promise((resolve)=>setTimeout(resolve, 1500));
        }
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-start-now-demo.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
function NativeStartNowRocketIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$start$2d$now$2d$baseui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeStartNow"], {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"], {
            className: "h-3 w-3 text-primary fill-primary"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-start-now-demo.tsx",
            lineNumber: 142,
            columnNumber: 13
        }, void 0),
        onStart: async ()=>{
            await new Promise((resolve)=>setTimeout(resolve, 1500));
        }
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-start-now-demo.tsx",
        lineNumber: 141,
        columnNumber: 5
    }, this);
}
function NativeStartNowDemo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeStartNowDefault, {}, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-start-now-demo.tsx",
        lineNumber: 151,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=packages_ui_src_components_native_base-ui_97658725._.js.map