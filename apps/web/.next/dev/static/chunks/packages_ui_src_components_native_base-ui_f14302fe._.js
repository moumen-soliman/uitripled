(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/packages/ui/src/components/native/base-ui/native-typewriter-baseui.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
                        fileName: "[project]/packages/ui/src/components/native/base-ui/native-typewriter-baseui.tsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/native/base-ui/native-typewriter-baseui.tsx",
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
                fileName: "[project]/packages/ui/src/components/native/base-ui/native-typewriter-baseui.tsx",
                lineNumber: 150,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/native-typewriter-baseui.tsx",
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
"[project]/packages/ui/src/components/native/base-ui/demo/native-typewriter-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$typewriter$2d$baseui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/native/base-ui/native-typewriter-baseui.tsx [app-client] (ecmascript)");
"use client";
;
;
function NativeTypewriterDefault() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 bg-black/5 dark:bg-white/5 rounded-xl border border-black/10 dark:border-white/10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$typewriter$2d$baseui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeTypewriter"], {
            content: "Hello, I am a native typewriter.",
            className: "text-xl font-medium text-foreground"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-typewriter-demo.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-typewriter-demo.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = NativeTypewriterDefault;
function NativeTypewriterMultiline() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 bg-black/5 dark:bg-white/5 rounded-xl border border-black/10 dark:border-white/10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$typewriter$2d$baseui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeTypewriter"], {
            content: [
                "I can type multiple lines...",
                "One after another.",
                "Perfect for storytelling!"
            ],
            speed: "fast",
            className: "text-xl font-medium text-primary"
        }, void 0, false, {
            fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-typewriter-demo.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-typewriter-demo.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c1 = NativeTypewriterMultiline;
function NativeTypewriterLoop() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center p-8 bg-black/5 dark:bg-white/5 rounded-xl border border-black/10 dark:border-white/10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$native$2f$base$2d$ui$2f$native$2d$typewriter$2d$baseui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeTypewriter"], {
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
            fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-typewriter-demo.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-typewriter-demo.tsx",
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
                        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-typewriter-demo.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeTypewriterDefault, {}, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-typewriter-demo.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-typewriter-demo.tsx",
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
                        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-typewriter-demo.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeTypewriterMultiline, {}, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-typewriter-demo.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-typewriter-demo.tsx",
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
                        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-typewriter-demo.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeTypewriterLoop, {}, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-typewriter-demo.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-typewriter-demo.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/native/base-ui/demo/native-typewriter-demo.tsx",
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
]);

//# sourceMappingURL=packages_ui_src_components_native_base-ui_f14302fe._.js.map