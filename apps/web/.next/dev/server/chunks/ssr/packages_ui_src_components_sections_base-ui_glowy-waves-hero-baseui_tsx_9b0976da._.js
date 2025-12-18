module.exports = [
"[project]/packages/ui/src/components/sections/base-ui/glowy-waves-hero-baseui.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlowyWavesHeroBaseui",
    ()=>GlowyWavesHeroBaseui
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/react/esm/button/Button.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const highlightPills = [
    "Immersive visuals",
    "Responsive motion",
    "GPU friendly"
];
const heroStats = [
    {
        label: "Live installations",
        value: "320+"
    },
    {
        label: "Latency",
        value: "8ms"
    },
    {
        label: "Teams onboarded",
        value: "120+"
    }
];
const containerVariants = {
    hidden: {
        opacity: 0,
        y: 24
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            staggerChildren: 0.12
        }
    }
};
const itemVariants = {
    hidden: {
        opacity: 0,
        y: 24
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};
const statsVariants = {
    hidden: {
        opacity: 0,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            staggerChildren: 0.08
        }
    }
};
function GlowyWavesHeroBaseui() {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const targetMouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return undefined;
        const ctx = canvas.getContext("2d");
        if (!ctx) return undefined;
        let animationId;
        let time = 0;
        const computeThemeColors = ()=>{
            const rootStyles = getComputedStyle(document.documentElement);
            const resolveColor = (variables, alpha = 1)=>{
                const tempEl = document.createElement("div");
                tempEl.style.position = "absolute";
                tempEl.style.visibility = "hidden";
                tempEl.style.width = "1px";
                tempEl.style.height = "1px";
                document.body.appendChild(tempEl);
                let color = `rgba(255, 255, 255, ${alpha})`;
                for (const variable of variables){
                    const value = rootStyles.getPropertyValue(variable).trim();
                    if (value) {
                        tempEl.style.backgroundColor = `var(${variable})`;
                        const computedColor = getComputedStyle(tempEl).backgroundColor;
                        if (computedColor && computedColor !== "rgba(0, 0, 0, 0)") {
                            if (alpha < 1) {
                                const rgbMatch = computedColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);
                                if (rgbMatch) {
                                    color = `rgba(${rgbMatch[1]}, ${rgbMatch[2]}, ${rgbMatch[3]}, ${alpha})`;
                                } else {
                                    color = computedColor;
                                }
                            } else {
                                color = computedColor;
                            }
                            break;
                        }
                    }
                }
                document.body.removeChild(tempEl);
                return color;
            };
            return {
                backgroundTop: resolveColor([
                    "--background"
                ], 1),
                backgroundBottom: resolveColor([
                    "--muted",
                    "--background"
                ], 0.95),
                wavePalette: [
                    {
                        offset: 0,
                        amplitude: 70,
                        frequency: 0.003,
                        color: resolveColor([
                            "--primary"
                        ], 0.8),
                        opacity: 0.45
                    },
                    {
                        offset: Math.PI / 2,
                        amplitude: 90,
                        frequency: 0.0026,
                        color: resolveColor([
                            "--accent",
                            "--primary"
                        ], 0.7),
                        opacity: 0.35
                    },
                    {
                        offset: Math.PI,
                        amplitude: 60,
                        frequency: 0.0034,
                        color: resolveColor([
                            "--secondary",
                            "--foreground"
                        ], 0.65),
                        opacity: 0.3
                    },
                    {
                        offset: Math.PI * 1.5,
                        amplitude: 80,
                        frequency: 0.0022,
                        color: resolveColor([
                            "--primary-foreground",
                            "--foreground"
                        ], 0.25),
                        opacity: 0.25
                    },
                    {
                        offset: Math.PI * 2,
                        amplitude: 55,
                        frequency: 0.004,
                        color: resolveColor([
                            "--foreground"
                        ], 0.2),
                        opacity: 0.2
                    }
                ]
            };
        };
        let themeColors = computeThemeColors();
        const handleThemeMutation = ()=>{
            themeColors = computeThemeColors();
        };
        const observer = new MutationObserver(handleThemeMutation);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: [
                "class",
                "data-theme"
            ]
        });
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const mouseInfluence = prefersReducedMotion ? 10 : 70;
        const influenceRadius = prefersReducedMotion ? 160 : 320;
        const smoothing = prefersReducedMotion ? 0.04 : 0.1;
        const resizeCanvas = ()=>{
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        const recenterMouse = ()=>{
            const centerPoint = {
                x: canvas.width / 2,
                y: canvas.height / 2
            };
            mouseRef.current = centerPoint;
            targetMouseRef.current = centerPoint;
        };
        const handleResize = ()=>{
            resizeCanvas();
            recenterMouse();
        };
        const handleMouseMove = (event)=>{
            targetMouseRef.current = {
                x: event.clientX,
                y: event.clientY
            };
        };
        const handleMouseLeave = ()=>{
            recenterMouse();
        };
        resizeCanvas();
        recenterMouse();
        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);
        const drawWave = (wave)=>{
            ctx.save();
            ctx.beginPath();
            for(let x = 0; x <= canvas.width; x += 4){
                const dx = x - mouseRef.current.x;
                const dy = canvas.height / 2 - mouseRef.current.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const influence = Math.max(0, 1 - distance / influenceRadius);
                const mouseEffect = influence * mouseInfluence * Math.sin(time * 0.001 + x * 0.01 + wave.offset);
                const y = canvas.height / 2 + Math.sin(x * wave.frequency + time * 0.002 + wave.offset) * wave.amplitude + Math.sin(x * wave.frequency * 0.4 + time * 0.003) * (wave.amplitude * 0.45) + mouseEffect;
                if (x === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }
            ctx.lineWidth = 2.5;
            ctx.strokeStyle = wave.color;
            ctx.globalAlpha = wave.opacity;
            ctx.shadowBlur = 35;
            ctx.shadowColor = wave.color;
            ctx.stroke();
            ctx.restore();
        };
        const animate = ()=>{
            time += 1;
            mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * smoothing;
            mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * smoothing;
            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            gradient.addColorStop(0, themeColors.backgroundTop);
            gradient.addColorStop(1, themeColors.backgroundBottom);
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.globalAlpha = 1;
            ctx.shadowBlur = 0;
            themeColors.wavePalette.forEach(drawWave);
            animationId = window.requestAnimationFrame(animate);
        };
        animationId = window.requestAnimationFrame(animate);
        return ()=>{
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(animationId);
            observer.disconnect();
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden bg-background",
        role: "region",
        "aria-label": "Glowing waves hero section",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "absolute inset-0 h-full w-full",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/sections/base-ui/glowy-waves-hero-baseui.tsx",
                lineNumber: 289,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 -z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-foreground/[0.035] blur-[140px] dark:bg-foreground/[0.06]"
                    }, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/sections/base-ui/glowy-waves-hero-baseui.tsx",
                        lineNumber: 296,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-foreground/[0.025] blur-[120px] dark:bg-foreground/[0.05]"
                    }, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/sections/base-ui/glowy-waves-hero-baseui.tsx",
                        lineNumber: 297,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/4 top-1/2 h-[400px] w-[400px] rounded-full bg-primary/[0.02] blur-[150px] dark:bg-primary/[0.05]"
                    }, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/sections/base-ui/glowy-waves-hero-baseui.tsx",
                        lineNumber: 298,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/ui/src/components/sections/base-ui/glowy-waves-hero-baseui.tsx",
                lineNumber: 295,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-24 text-center md:px-8 lg:px-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: containerVariants,
                    initial: "hidden",
                    animate: "visible",
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: itemVariants,
                            className: "mb-6 inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-foreground/70 dark:border-border/60 dark:bg-background/70 dark:text-foreground/80",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    className: "h-4 w-4 text-primary",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/packages/ui/src/components/sections/base-ui/glowy-waves-hero-baseui.tsx",
                                    lineNumber: 312,
                                    columnNumber: 13
                                }, this),
                                "Reactive canvas hero BASEUI"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/ui/src/components/sections/base-ui/glowy-waves-hero-baseui.tsx",
                            lineNumber: 308,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                            variants: itemVariants,
                            className: "mb-6 text-4xl font-semibold tracking-tight text-foreground md:text-6xl lg:text-7xl",
                            children: [
                                "Welcome to immersive",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "bg-gradient-to-r from-primary via-primary/60 to-foreground/80 bg-clip-text text-transparent",
                                    children: "realtime playgrounds"
                                }, void 0, false, {
                                    fileName: "[project]/packages/ui/src/components/sections/base-ui/glowy-waves-hero-baseui.tsx",
                                    lineNumber: 321,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/ui/src/components/sections/base-ui/glowy-waves-hero-baseui.tsx",
                            lineNumber: 316,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                            variants: itemVariants,
                            className: "mx-auto mb-10 max-w-3xl text-lg text-foreground/70 md:text-2xl",
                            children: "Build living surfaces that respond to every interaction. Craft cinematic hero moments, responsive canvases, and luminous gradients without leaving your design system."
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/sections/base-ui/glowy-waves-hero-baseui.tsx",
                            lineNumber: 326,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: itemVariants,
                            className: "mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    className: "group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 text-base font-medium uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90",
                                    children: [
                                        "Launch Studio",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "h-4 w-4 transition-transform group-hover:translate-x-1",
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/ui/src/components/sections/base-ui/glowy-waves-hero-baseui.tsx",
                                            lineNumber: 341,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/ui/src/components/sections/base-ui/glowy-waves-hero-baseui.tsx",
                                    lineNumber: 339,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    className: "inline-flex items-center justify-center rounded-full border border-border/40 bg-background/60 px-8 py-3 text-base text-foreground/80 backdrop-blur transition-all hover:border-border/60 hover:bg-background/70 dark:border-border/50 dark:bg-background/40 dark:text-foreground/70 dark:hover:border-border/70 dark:hover:bg-background/50",
                                    children: "Explore stories"
                                }, void 0, false, {
                                    fileName: "[project]/packages/ui/src/components/sections/base-ui/glowy-waves-hero-baseui.tsx",
                                    lineNumber: 346,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/ui/src/components/sections/base-ui/glowy-waves-hero-baseui.tsx",
                            lineNumber: 335,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].ul, {
                            variants: itemVariants,
                            className: "mb-12 flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-[0.2em] text-foreground/70 dark:text-foreground/80",
                            children: highlightPills.map((pill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "rounded-full border border-border/40 bg-background/60 px-4 py-2 backdrop-blur dark:border-border/60 dark:bg-background/70",
                                    children: pill
                                }, pill, false, {
                                    fileName: "[project]/packages/ui/src/components/sections/base-ui/glowy-waves-hero-baseui.tsx",
                                    lineNumber: 356,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/sections/base-ui/glowy-waves-hero-baseui.tsx",
                            lineNumber: 351,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: statsVariants,
                            className: "grid gap-4 rounded-2xl border border-border/30 bg-background/60 p-6 backdrop-blur-sm dark:border-border/60 dark:bg-background/70 sm:grid-cols-3",
                            children: heroStats.map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    variants: itemVariants,
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs uppercase tracking-[0.3em] text-foreground/50 dark:text-foreground/60",
                                            children: stat.label
                                        }, void 0, false, {
                                            fileName: "[project]/packages/ui/src/components/sections/base-ui/glowy-waves-hero-baseui.tsx",
                                            lineNumber: 375,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl font-semibold text-foreground",
                                            children: stat.value
                                        }, void 0, false, {
                                            fileName: "[project]/packages/ui/src/components/sections/base-ui/glowy-waves-hero-baseui.tsx",
                                            lineNumber: 378,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, stat.label, true, {
                                    fileName: "[project]/packages/ui/src/components/sections/base-ui/glowy-waves-hero-baseui.tsx",
                                    lineNumber: 370,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/sections/base-ui/glowy-waves-hero-baseui.tsx",
                            lineNumber: 365,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/sections/base-ui/glowy-waves-hero-baseui.tsx",
                    lineNumber: 302,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/sections/base-ui/glowy-waves-hero-baseui.tsx",
                lineNumber: 301,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/sections/base-ui/glowy-waves-hero-baseui.tsx",
        lineNumber: 284,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=packages_ui_src_components_sections_base-ui_glowy-waves-hero-baseui_tsx_9b0976da._.js.map