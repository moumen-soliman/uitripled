module.exports = [
"[project]/packages/ui/src/components/native/base-ui/native-typewriter-baseui.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeTypewriter",
    ()=>NativeTypewriter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function NativeTypewriter({ content, speed = "medium", cursor = true, loop = false, startDelay = 0, morph = true, className }) {
    const shouldReduceMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const [displayedText, setDisplayedText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isStarted, setIsStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Calculate delay calculation
    const speedMap = {
        slow: 100,
        medium: 50,
        fast: 30
    };
    const typingSpeed = typeof speed === "number" ? speed : speedMap[speed];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
        const runLoop = ()=>{
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
        };
        const initialTimer = setTimeout(()=>{
            setIsStarted(true);
            runLoop();
        }, startDelay);
        return ()=>{
            clearTimeout(initialTimer);
            clearTimeout(timeoutId);
        };
    }, [
        content,
        typingSpeed,
        loop,
        startDelay,
        shouldReduceMotion
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "whitespace-pre-wrap",
                children: displayedText.split("").map((char, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
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
            cursor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
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
}),
];

//# sourceMappingURL=packages_ui_src_components_native_base-ui_native-typewriter-baseui_tsx_8265a1cd._.js.map