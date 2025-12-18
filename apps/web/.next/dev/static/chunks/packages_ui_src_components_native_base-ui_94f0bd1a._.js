(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/packages/ui/src/components/native/base-ui/native-hover-card-baseui.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeHoverCard",
    ()=>NativeHoverCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$avatar$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Avatar$3e$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/react/esm/avatar/index.parts.js [app-client] (ecmascript) <export * as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$button$2d$baseui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/native/base-ui/native-button-baseui.tsx [app-client] (ecmascript)");
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
    const avatarElement = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$avatar$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Avatar$3e$__["Avatar"].Root, {
        className: "w-full h-full relative flex shrink-0 overflow-hidden rounded-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$avatar$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Avatar$3e$__["Avatar"].Image, {
                src: imageSrc || "/placeholder.svg",
                alt: imageAlt || name,
                className: "aspect-square h-full w-full"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/base-ui/native-hover-card-baseui.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$avatar$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Avatar$3e$__["Avatar"].Fallback, {
                className: "flex h-full w-full items-center justify-center rounded-full bg-muted",
                children: getInitials(name)
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/base-ui/native-hover-card-baseui.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/native-hover-card-baseui.tsx",
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
                fileName: "[project]/packages/ui/src/components/native/base-ui/native-hover-card-baseui.tsx",
                lineNumber: 136,
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
                                fileName: "[project]/packages/ui/src/components/native/base-ui/native-hover-card-baseui.tsx",
                                lineNumber: 171,
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
                                                fileName: "[project]/packages/ui/src/components/native/base-ui/native-hover-card-baseui.tsx",
                                                lineNumber: 190,
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
                                                fileName: "[project]/packages/ui/src/components/native/base-ui/native-hover-card-baseui.tsx",
                                                lineNumber: 201,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/packages/ui/src/components/native/base-ui/native-hover-card-baseui.tsx",
                                        lineNumber: 189,
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
                                        fileName: "[project]/packages/ui/src/components/native/base-ui/native-hover-card-baseui.tsx",
                                        lineNumber: 214,
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
                                        children: buttonContent ? buttonContent : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$button$2d$baseui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeButton"], {
                                            onClick: onButtonClick,
                                            size: "sm",
                                            className: "w-full",
                                            children: buttonText
                                        }, void 0, false, {
                                            fileName: "[project]/packages/ui/src/components/native/base-ui/native-hover-card-baseui.tsx",
                                            lineNumber: 233,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/native/base-ui/native-hover-card-baseui.tsx",
                                        lineNumber: 225,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/ui/src/components/native/base-ui/native-hover-card-baseui.tsx",
                                lineNumber: 178,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/ui/src/components/native/base-ui/native-hover-card-baseui.tsx",
                        lineNumber: 170,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/packages/ui/src/components/native/base-ui/native-hover-card-baseui.tsx",
                    lineNumber: 157,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/base-ui/native-hover-card-baseui.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/native-hover-card-baseui.tsx",
        lineNumber: 122,
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
"[project]/packages/ui/src/components/native/base-ui/demo/native-hover-card-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$button$2d$baseui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/native/base-ui/native-button-baseui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$hover$2d$card$2d$baseui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/native/base-ui/native-hover-card-baseui.tsx [app-client] (ecmascript)");
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
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$hover$2d$card$2d$baseui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeHoverCard"], {
            imageSrc: "https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtoUjLg4dAryGEidskK72wBCQA6DNcZH4Xh5b8",
            imageAlt: "Profile",
            name: "John Doe",
            username: "johndoe",
            description: "Software engineer passionate about building beautiful user interfaces and creating delightful experiences.",
            onButtonClick: ()=>console.log("View Profile clicked")
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-hover-card-demo.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-hover-card-demo.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = NativeHoverCardDefault;
function NativeHoverCardGlass() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 min-h-[300px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$hover$2d$card$2d$baseui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeHoverCard"], {
            imageSrc: "https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtoUjLg4dAryGEidskK72wBCQA6DNcZH4Xh5b8",
            imageAlt: "Profile",
            name: "Jane Smith",
            username: "janesmith",
            description: "Designer and developer focused on creating accessible and inclusive digital products.",
            variant: "glass",
            onButtonClick: ()=>console.log("View Profile clicked")
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-hover-card-demo.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-hover-card-demo.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c1 = NativeHoverCardGlass;
function NativeHoverCardBordered() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 min-h-[300px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$hover$2d$card$2d$baseui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeHoverCard"], {
            imageSrc: "https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtoUjLg4dAryGEidskK72wBCQA6DNcZH4Xh5b8",
            imageAlt: "Profile",
            name: "Alex Johnson",
            username: "alexjohnson",
            description: "Full-stack developer with expertise in React, Node.js, and cloud infrastructure.",
            variant: "bordered",
            onButtonClick: ()=>console.log("View Profile clicked")
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-hover-card-demo.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-hover-card-demo.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c2 = NativeHoverCardBordered;
function NativeHoverCardSmall() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 min-h-[300px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$hover$2d$card$2d$baseui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeHoverCard"], {
            imageSrc: "https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtoUjLg4dAryGEidskK72wBCQA6DNcZH4Xh5b8",
            imageAlt: "Profile",
            name: "Sarah Williams",
            username: "sarahw",
            description: "Product manager and UX enthusiast.",
            size: "sm",
            onButtonClick: ()=>console.log("View Profile clicked")
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-hover-card-demo.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-hover-card-demo.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_c3 = NativeHoverCardSmall;
function NativeHoverCardLarge() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 min-h-[300px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$hover$2d$card$2d$baseui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeHoverCard"], {
            imageSrc: "https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtoUjLg4dAryGEidskK72wBCQA6DNcZH4Xh5b8",
            imageAlt: "Profile",
            name: "Michael Chen",
            username: "michaelchen",
            description: "Engineering lead building scalable systems and mentoring the next generation of developers.",
            size: "lg",
            onButtonClick: ()=>console.log("View Profile clicked")
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-hover-card-demo.tsx",
            lineNumber: 73,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-hover-card-demo.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_c4 = NativeHoverCardLarge;
function NativeHoverCardExtraLarge() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 min-h-[300px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$hover$2d$card$2d$baseui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeHoverCard"], {
            imageSrc: "https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtoUjLg4dAryGEidskK72wBCQA6DNcZH4Xh5b8",
            imageAlt: "Profile",
            name: "Emily Davis",
            username: "emilydavis",
            description: "Creative director and brand strategist with over 10 years of experience in digital marketing and brand development.",
            size: "xl",
            onButtonClick: ()=>console.log("View Profile clicked")
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-hover-card-demo.tsx",
            lineNumber: 89,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-hover-card-demo.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_c5 = NativeHoverCardExtraLarge;
function NativeHoverCardNoUsername() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 min-h-[300px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$hover$2d$card$2d$baseui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeHoverCard"], {
            imageSrc: "https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtoUjLg4dAryGEidskK72wBCQA6DNcZH4Xh5b8",
            imageAlt: "Profile",
            name: "David Brown",
            description: "Entrepreneur and startup founder focused on building innovative solutions.",
            onButtonClick: ()=>console.log("View Profile clicked")
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-hover-card-demo.tsx",
            lineNumber: 105,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-hover-card-demo.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, this);
}
_c6 = NativeHoverCardNoUsername;
function NativeHoverCardNoDescription() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 min-h-[300px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$hover$2d$card$2d$baseui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeHoverCard"], {
            imageSrc: "https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtoUjLg4dAryGEidskK72wBCQA6DNcZH4Xh5b8",
            imageAlt: "Profile",
            name: "Lisa Anderson",
            username: "lisaanderson",
            onButtonClick: ()=>console.log("View Profile clicked")
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-hover-card-demo.tsx",
            lineNumber: 119,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-hover-card-demo.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
}
_c7 = NativeHoverCardNoDescription;
function NativeHoverCardCustomButton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 min-h-[300px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$hover$2d$card$2d$baseui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeHoverCard"], {
            imageSrc: "https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtoUjLg4dAryGEidskK72wBCQA6DNcZH4Xh5b8",
            imageAlt: "Profile",
            name: "Robert Taylor",
            username: "roberttaylor",
            description: "Community manager and content creator.",
            buttonContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$button$2d$baseui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeButton"], {
                        size: "sm",
                        variant: "outline",
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                className: "h-4 w-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-hover-card-demo.tsx",
                                lineNumber: 142,
                                columnNumber: 15
                            }, void 0),
                            "Message"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-hover-card-demo.tsx",
                        lineNumber: 141,
                        columnNumber: 13
                    }, void 0),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$button$2d$baseui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeButton"], {
                        size: "sm",
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"], {
                                className: "h-4 w-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-hover-card-demo.tsx",
                                lineNumber: 146,
                                columnNumber: 15
                            }, void 0),
                            "Follow"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-hover-card-demo.tsx",
                        lineNumber: 145,
                        columnNumber: 13
                    }, void 0)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-hover-card-demo.tsx",
                lineNumber: 140,
                columnNumber: 11
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-hover-card-demo.tsx",
            lineNumber: 133,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-hover-card-demo.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
_c8 = NativeHoverCardCustomButton;
function NativeHoverCardCustomButtonText() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 min-h-[300px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$hover$2d$card$2d$baseui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeHoverCard"], {
            imageSrc: "https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtoUjLg4dAryGEidskK72wBCQA6DNcZH4Xh5b8",
            imageAlt: "Profile",
            name: "Olivia Martinez",
            username: "oliviamartinez",
            description: "Data scientist and machine learning engineer.",
            buttonText: "Connect",
            onButtonClick: ()=>console.log("Connect clicked")
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-hover-card-demo.tsx",
            lineNumber: 159,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-hover-card-demo.tsx",
        lineNumber: 158,
        columnNumber: 5
    }, this);
}
_c9 = NativeHoverCardCustomButtonText;
function NativeHoverCardMinimal() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 min-h-[300px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$hover$2d$card$2d$baseui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeHoverCard"], {
            imageSrc: "https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtoUjLg4dAryGEidskK72wBCQA6DNcZH4Xh5b8",
            imageAlt: "Profile",
            name: "James Wilson",
            buttonContent: null
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-hover-card-demo.tsx",
            lineNumber: 175,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-hover-card-demo.tsx",
        lineNumber: 174,
        columnNumber: 5
    }, this);
}
_c10 = NativeHoverCardMinimal;
function NativeHoverCardWithFallback() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 min-h-[300px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$hover$2d$card$2d$baseui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeHoverCard"], {
            imageSrc: "https://invalid-url-that-will-fail.png",
            imageAlt: "Profile",
            name: "Thomas Anderson",
            username: "thomasa",
            description: "This demonstrates the Avatar fallback with initials when the image fails to load.",
            onButtonClick: ()=>console.log("View Profile clicked")
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-hover-card-demo.tsx",
            lineNumber: 188,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-hover-card-demo.tsx",
        lineNumber: 187,
        columnNumber: 5
    }, this);
}
_c11 = NativeHoverCardWithFallback;
function NativeHoverCardDemo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeHoverCardDefault, {}, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-hover-card-demo.tsx",
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
]);

//# sourceMappingURL=packages_ui_src_components_native_base-ui_94f0bd1a._.js.map