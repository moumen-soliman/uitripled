(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/packages/ui/src/components/sections/base-ui/currency-converter-card-baseui.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CurrencyConverterCardBaseui",
    ()=>CurrencyConverterCardBaseui
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left-right.js [app-client] (ecmascript) <export default as ArrowLeftRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const CURRENCIES = [
    {
        code: "USD",
        name: "US Dollar",
        symbol: "$"
    },
    {
        code: "EUR",
        name: "Euro",
        symbol: "€"
    },
    {
        code: "GBP",
        name: "British Pound",
        symbol: "£"
    },
    {
        code: "JPY",
        name: "Japanese Yen",
        symbol: "¥"
    },
    {
        code: "AUD",
        name: "Australian Dollar",
        symbol: "A$"
    },
    {
        code: "CAD",
        name: "Canadian Dollar",
        symbol: "C$"
    },
    {
        code: "CHF",
        name: "Swiss Franc",
        symbol: "CHF"
    },
    {
        code: "CNY",
        name: "Chinese Yuan",
        symbol: "¥"
    },
    {
        code: "INR",
        name: "Indian Rupee",
        symbol: "₹"
    },
    {
        code: "MXN",
        name: "Mexican Peso",
        symbol: "$"
    }
];
const BASE_INDEX = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    JPY: 147.42,
    AUD: 1.5,
    CAD: 1.36,
    CHF: 0.88,
    CNY: 7.11,
    INR: 83.24,
    MXN: 17.12
};
function CurrencyConverterCardBaseui() {
    _s();
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("100");
    const [fromCurrency, setFromCurrency] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("USD");
    const [toCurrency, setToCurrency] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("EUR");
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [rate, setRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isFlipped, setIsFlipped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CurrencyConverterCardBaseui.useEffect": ()=>{
            const trimmed = amount.trim();
            if (!trimmed) {
                setLoading(false);
                setError("");
                setRate(null);
                setResult(null);
                return;
            }
            const numericAmount = Number(trimmed);
            if (Number.isNaN(numericAmount)) {
                setLoading(false);
                setError("Enter a valid amount");
                setRate(null);
                setResult(null);
                return;
            }
            let cancelled = false;
            setLoading(true);
            setError("");
            const timeout = window.setTimeout({
                "CurrencyConverterCardBaseui.useEffect.timeout": ()=>{
                    if (cancelled) return;
                    const fromIndex = BASE_INDEX[fromCurrency];
                    const toIndex = BASE_INDEX[toCurrency];
                    if (!fromIndex || !toIndex) {
                        setError("Unsupported currency selection");
                        setLoading(false);
                        return;
                    }
                    const nextRate = toIndex / fromIndex;
                    setRate(nextRate);
                    setResult(numericAmount * nextRate);
                    setIsFlipped({
                        "CurrencyConverterCardBaseui.useEffect.timeout": (previous)=>!previous
                    }["CurrencyConverterCardBaseui.useEffect.timeout"]);
                    setLoading(false);
                }
            }["CurrencyConverterCardBaseui.useEffect.timeout"], 220);
            return ({
                "CurrencyConverterCardBaseui.useEffect": ()=>{
                    cancelled = true;
                    window.clearTimeout(timeout);
                }
            })["CurrencyConverterCardBaseui.useEffect"];
        }
    }["CurrencyConverterCardBaseui.useEffect"], [
        amount,
        fromCurrency,
        toCurrency
    ]);
    const formattedResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CurrencyConverterCardBaseui.useMemo[formattedResult]": ()=>{
            if (result === null) return "0.00";
            return result.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
        }
    }["CurrencyConverterCardBaseui.useMemo[formattedResult]"], [
        result
    ]);
    const activeRate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CurrencyConverterCardBaseui.useMemo[activeRate]": ()=>{
            if (!rate) return null;
            return rate.toFixed(4);
        }
    }["CurrencyConverterCardBaseui.useMemo[activeRate]"], [
        rate
    ]);
    const handleSwap = ()=>{
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    };
    const amountSymbol = CURRENCIES.find((currency)=>currency.code === fromCurrency)?.symbol ?? "$";
    const resultSymbol = CURRENCIES.find((currency)=>currency.code === toCurrency)?.symbol ?? "$";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 24
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.4,
            ease: "easeOut"
        },
        className: "group relative mx-auto w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -z-10 inset-0 rounded-2xl bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/sections/base-ui/currency-converter-card-baseui.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden rounded-2xl border border-border/60 bg-card/80 backdrop-blur",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1 px-6 pb-4 pt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "flex items-center gap-2 text-2xl font-semibold text-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                        className: "h-6 w-6 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/sections/base-ui/currency-converter-card-baseui.tsx",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, this),
                                    "Currency Converter"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/ui/src/components/sections/base-ui/currency-converter-card-baseui.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Simulated real-time exchange experience"
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/src/components/sections/base-ui/currency-converter-card-baseui.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/ui/src/components/sections/base-ui/currency-converter-card-baseui.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6 px-6 pb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm font-medium text-muted-foreground",
                                        children: "From"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/sections/base-ui/currency-converter-card-baseui.tsx",
                                        lineNumber: 150,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm font-medium text-muted-foreground",
                                                        children: amountSymbol
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/ui/src/components/sections/base-ui/currency-converter-card-baseui.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        inputMode: "decimal",
                                                        value: amount,
                                                        onChange: (event)=>setAmount(event.target.value),
                                                        placeholder: "Amount",
                                                        className: "w-full rounded-lg border border-border bg-background/70 px-8 py-3 text-lg font-semibold text-foreground shadow-sm outline-none transition focus-visible:ring-2 focus-visible:ring-primary/40"
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/ui/src/components/sections/base-ui/currency-converter-card-baseui.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/ui/src/components/sections/base-ui/currency-converter-card-baseui.tsx",
                                                lineNumber: 154,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: fromCurrency,
                                                onChange: (event)=>setFromCurrency(event.target.value),
                                                className: "w-[132px] rounded-lg border border-border bg-background px-3 py-3 text-sm font-semibold text-foreground shadow-sm transition focus-visible:ring-2 focus-visible:ring-primary/40",
                                                children: CURRENCIES.map((currency)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: currency.code,
                                                        children: [
                                                            currency.symbol,
                                                            " ",
                                                            currency.code
                                                        ]
                                                    }, currency.code, true, {
                                                        fileName: "[project]/packages/ui/src/components/sections/base-ui/currency-converter-card-baseui.tsx",
                                                        lineNumber: 175,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/packages/ui/src/components/sections/base-ui/currency-converter-card-baseui.tsx",
                                                lineNumber: 167,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/packages/ui/src/components/sections/base-ui/currency-converter-card-baseui.tsx",
                                        lineNumber: 153,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/ui/src/components/sections/base-ui/currency-converter-card-baseui.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                    type: "button",
                                    whileHover: {
                                        scale: 1.06
                                    },
                                    whileTap: {
                                        scale: 0.94
                                    },
                                    onClick: handleSwap,
                                    disabled: loading,
                                    className: "flex h-12 w-12 items-center justify-center rounded-full border border-border/70 bg-background/50 text-foreground transition hover:bg-background/70 disabled:cursor-not-allowed disabled:opacity-50",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftRight$3e$__["ArrowLeftRight"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/sections/base-ui/currency-converter-card-baseui.tsx",
                                        lineNumber: 192,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/packages/ui/src/components/sections/base-ui/currency-converter-card-baseui.tsx",
                                    lineNumber: 184,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/src/components/sections/base-ui/currency-converter-card-baseui.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm font-medium text-muted-foreground",
                                        children: "To"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/sections/base-ui/currency-converter-card-baseui.tsx",
                                        lineNumber: 197,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    rotateX: 90,
                                                    opacity: 0
                                                },
                                                animate: {
                                                    rotateX: 0,
                                                    opacity: 1
                                                },
                                                transition: {
                                                    duration: 0.3,
                                                    ease: "easeOut"
                                                },
                                                className: "relative flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm font-medium text-muted-foreground",
                                                        children: resultSymbol
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/ui/src/components/sections/base-ui/currency-converter-card-baseui.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: formattedResult,
                                                        readOnly: true,
                                                        className: "w-full rounded-lg border border-border bg-background/60 px-8 py-3 text-lg font-semibold text-foreground shadow-sm outline-none transition focus-visible:ring-2 focus-visible:ring-primary/40"
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/ui/src/components/sections/base-ui/currency-converter-card-baseui.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, isFlipped ? "flipped" : "stationary", true, {
                                                fileName: "[project]/packages/ui/src/components/sections/base-ui/currency-converter-card-baseui.tsx",
                                                lineNumber: 201,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: toCurrency,
                                                onChange: (event)=>setToCurrency(event.target.value),
                                                className: "w-[132px] rounded-lg border border-border bg-background px-3 py-3 text-sm font-semibold text-foreground shadow-sm transition focus-visible:ring-2 focus-visible:ring-primary/40",
                                                children: CURRENCIES.map((currency)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: currency.code,
                                                        children: [
                                                            currency.symbol,
                                                            " ",
                                                            currency.code
                                                        ]
                                                    }, currency.code, true, {
                                                        fileName: "[project]/packages/ui/src/components/sections/base-ui/currency-converter-card-baseui.tsx",
                                                        lineNumber: 226,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/packages/ui/src/components/sections/base-ui/currency-converter-card-baseui.tsx",
                                                lineNumber: 218,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/packages/ui/src/components/sections/base-ui/currency-converter-card-baseui.tsx",
                                        lineNumber: 200,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/ui/src/components/sections/base-ui/currency-converter-card-baseui.tsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, this),
                            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                className: "flex items-center justify-center gap-2 rounded-lg border border-border bg-background/60 px-4 py-3 text-sm text-muted-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                        className: "h-4 w-4 rounded-full border-2 border-muted-foreground/60 border-t-transparent",
                                        animate: {
                                            rotate: 360
                                        },
                                        transition: {
                                            repeat: Infinity,
                                            duration: 0.8,
                                            ease: "linear"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/sections/base-ui/currency-converter-card-baseui.tsx",
                                        lineNumber: 240,
                                        columnNumber: 15
                                    }, this),
                                    "Calculating latest rates..."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/ui/src/components/sections/base-ui/currency-converter-card-baseui.tsx",
                                lineNumber: 235,
                                columnNumber: 13
                            }, this),
                            !loading && activeRate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                className: "rounded-lg border border-primary/20 bg-primary/5 px-4 py-3 text-center text-sm font-medium text-primary",
                                children: [
                                    "1 ",
                                    fromCurrency,
                                    " ≈ ",
                                    activeRate,
                                    " ",
                                    toCurrency
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/ui/src/components/sections/base-ui/currency-converter-card-baseui.tsx",
                                lineNumber: 250,
                                columnNumber: 13
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                className: "rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-center text-sm font-medium text-destructive",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/src/components/sections/base-ui/currency-converter-card-baseui.tsx",
                                lineNumber: 260,
                                columnNumber: 13
                            }, this),
                            !loading && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center text-xs text-muted-foreground",
                                children: "Rates are approximated for demo purposes and refresh with each change."
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/src/components/sections/base-ui/currency-converter-card-baseui.tsx",
                                lineNumber: 270,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/ui/src/components/sections/base-ui/currency-converter-card-baseui.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/ui/src/components/sections/base-ui/currency-converter-card-baseui.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/sections/base-ui/currency-converter-card-baseui.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
_s(CurrencyConverterCardBaseui, "LNTV1TAav5LCEbzn8gRLZkt4hVU=");
_c = CurrencyConverterCardBaseui;
var _c;
__turbopack_context__.k.register(_c, "CurrencyConverterCardBaseui");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=730ea_ui_src_components_sections_base-ui_currency-converter-card-baseui_tsx_a31e7270._.js.map