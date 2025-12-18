(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/packages/ui/src/components/grid/code-output.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CodeOutput",
    ()=>CodeOutput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
"use client";
;
;
;
;
function CodeOutput({ code, copied, onCopyCode, options }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.4,
            delay: 0.4
        },
        className: "group relative overflow-hidden rounded-2xl border border-border/40 bg-background/60 p-8 backdrop-blur transition-all hover:border-border/60 hover:shadow-lg w-full min-w-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/grid/code-output.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-sm font-semibold uppercase tracking-[0.25em] text-foreground flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"], {
                                        className: "w-5 h-5 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/grid/code-output.tsx",
                                        lineNumber: 31,
                                        columnNumber: 13
                                    }, this),
                                    "Generated Code"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/ui/src/components/grid/code-output.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: onCopyCode,
                                className: "gap-2 px-5 py-3",
                                children: [
                                    copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/grid/code-output.tsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/grid/code-output.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this),
                                    copied ? "Copied!" : "Copy"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/ui/src/components/grid/code-output.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/ui/src/components/grid/code-output.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    options ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 gap-3 mb-4",
                        children: options
                    }, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/grid/code-output.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                        className: "bg-muted text-foreground p-6 rounded-xl overflow-x-auto text-sm font-mono border border-border shadow-inner",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                            children: code
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/grid/code-output.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/grid/code-output.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/ui/src/components/grid/code-output.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/grid/code-output.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = CodeOutput;
var _c;
__turbopack_context__.k.register(_c, "CodeOutput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/lib/grid-utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================================================
// GRID UTILS - Functions and constants for grid generation
// ============================================================================
__turbopack_context__.s([
    "GAP_VALUES",
    ()=>GAP_VALUES,
    "generateGridCode",
    ()=>generateGridCode,
    "getCellKey",
    ()=>getCellKey,
    "getGapSliderIndex",
    ()=>getGapSliderIndex,
    "getGapValueFromIndex",
    ()=>getGapValueFromIndex,
    "initializeCells",
    ()=>initializeCells,
    "isCellInSelection",
    ()=>isCellInSelection
]);
const GAP_VALUES = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    8,
    10,
    12
];
const getGapSliderIndex = (gapValue)=>{
    const index = GAP_VALUES.indexOf(gapValue);
    return index === -1 ? 0 : index;
};
const getGapValueFromIndex = (index)=>{
    return GAP_VALUES[Math.max(0, Math.min(GAP_VALUES.length - 1, index))];
};
const generateGridCode = (cells, cols, gap, options)=>{
    const gapClass = `gap-${gap}`;
    const colsClass = `grid-cols-${cols}`;
    const classAttr = options?.useClassName === false ? "class" : "className";
    const bgBase = options?.includeBg === false ? "" : "bg-gray-100 dark:bg-gray-800 ";
    let code = `<div ${classAttr}="grid ${colsClass} ${gapClass} w-full">\n`;
    cells.forEach((cell, i)=>{
        const colSpanClass = cell.colSpan > 1 ? ` col-span-${cell.colSpan}` : "";
        const rowSpanClass = cell.rowSpan > 1 ? ` row-span-${cell.rowSpan}` : "";
        code += `  <div ${classAttr}="${bgBase}p-6 rounded-lg${colSpanClass}${rowSpanClass}">\n`;
        code += `    <!-- Content ${i + 1} -->\n`;
        code += `  </div>\n`;
    });
    code += `</div>`;
    return code;
};
const initializeCells = (cols, rows)=>{
    const newCells = [];
    const occupied = new Set();
    for(let row = 0; row < rows; row++){
        for(let col = 0; col < cols; col++){
            const key = `${row}-${col}`;
            if (!occupied.has(key)) {
                newCells.push({
                    row,
                    col,
                    rowSpan: 1,
                    colSpan: 1
                });
                occupied.add(key);
            }
        }
    }
    return newCells;
};
const getCellKey = (row, col)=>`${row}-${col}`;
const isCellInSelection = (row, col, selectedCells)=>{
    return selectedCells.includes(getCellKey(row, col));
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/grid/grid-cell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GridCell",
    ()=>GridCell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function GridCell({ cell, cols, isInSelection, onPointerDown, onPointerEnter }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onPointerDown: (event)=>{
            event.preventDefault();
            onPointerDown(cell.row, cell.col);
        },
        onPointerEnter: (event)=>{
            if (event.buttons === 1) {
                onPointerEnter(cell.row, cell.col);
            }
        },
        className: `relative bg-card border border-border rounded-lg p-3 sm:p-4 md:p-6 flex items-center justify-center font-bold cursor-crosshair select-none transition-all duration-200 ${isInSelection ? "ring-4 ring-primary ring-offset-2 scale-95 shadow-2xl" : "hover:scale-[1.02] hover:shadow-xl hover:border-border/60"}`,
        style: {
            gridColumn: cell.colSpan > 1 ? `span ${cell.colSpan}` : undefined,
            gridRow: cell.rowSpan > 1 ? `span ${cell.rowSpan}` : undefined,
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0z' fill='none'/%3E%3Cpath d='M0 0h1v1H0zM2 2h1v1H2zM4 4h1v1H4zM6 6h1v1H4zM6 6h1v1H6zM8 8h1v1H8zM10 10h1v1h-1zM12 12h1v1h-1zM14 14h1v1h-1zM16 16h1v1h-1zM18 18h1v1h-1z' fill='%236b7280' fill-opacity='0.1'/%3E%3C/svg%3E\")",
            backgroundSize: "20px 20px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 rounded-lg pointer-events-none",
                style: {
                    backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,.02) 10px, rgba(0,0,0,.02) 11px)"
                }
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/grid/grid-cell.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-lg sm:text-xl md:text-2xl text-foreground",
                        children: cell.row * cols + cell.col + 1
                    }, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/grid/grid-cell.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    (cell.colSpan > 1 || cell.rowSpan > 1) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs mt-1 font-mono text-muted-foreground",
                        children: [
                            cell.colSpan,
                            "×",
                            cell.rowSpan
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/ui/src/components/grid/grid-cell.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/ui/src/components/grid/grid-cell.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1 left-1 w-2 h-2 border-l-2 border-t-2 border-border opacity-40"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/grid/grid-cell.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1 right-1 w-2 h-2 border-r-2 border-t-2 border-border opacity-40"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/grid/grid-cell.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-1 left-1 w-2 h-2 border-l-2 border-b-2 border-border opacity-40"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/grid/grid-cell.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-1 right-1 w-2 h-2 border-r-2 border-b-2 border-border opacity-40"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/grid/grid-cell.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/grid/grid-cell.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = GridCell;
var _c;
__turbopack_context__.k.register(_c, "GridCell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/grid/grid-preview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GridPreview",
    ()=>GridPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$grid$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/lib/grid-utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3x3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/grid-3x3.js [app-client] (ecmascript) <export default as Grid3x3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$redo$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Redo2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/redo-2.js [app-client] (ecmascript) <export default as Redo2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Undo2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/undo-2.js [app-client] (ecmascript) <export default as Undo2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$grid$2f$grid$2d$cell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/grid/grid-cell.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
function GridPreview({ cells, cols, rows, gap, selectedCells, onPointerDown, onPointerEnter, onPointerUp, onPointerLeave, onAddCell, onResetGrid, onUndo, onRedo, canUndo, canRedo }) {
    const startMap = new Map();
    const occupied = new Set();
    cells.forEach((cell)=>{
        startMap.set(`${cell.row}-${cell.col}`, cell);
        for(let r = cell.row; r < cell.row + cell.rowSpan; r++){
            for(let c = cell.col; c < cell.col + cell.colSpan; c++){
                occupied.add(`${r}-${c}`);
            }
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.4,
            delay: 0.2
        },
        className: "group relative overflow-hidden rounded-2xl border border-border/40 bg-background/60 p-4 sm:p-6 lg:p-8 backdrop-blur transition-all hover:border-border/60 hover:shadow-lg w-full min-w-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/grid/grid-preview.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-sm font-semibold uppercase tracking-[0.25em] text-foreground flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3x3$3e$__["Grid3x3"], {
                                    className: "w-5 h-5 text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/packages/ui/src/components/grid/grid-preview.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                "Live Preview"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/ui/src/components/grid/grid-preview.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: onUndo,
                                    disabled: !canUndo,
                                    className: "gap-2 border-border/40 bg-background/60 backdrop-blur hover:border-border/60 hover:bg-background/70",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Undo2$3e$__["Undo2"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/ui/src/components/grid/grid-preview.tsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this),
                                        "Undo"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/ui/src/components/grid/grid-preview.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: onRedo,
                                    disabled: !canRedo,
                                    className: "gap-2 border-border/40 bg-background/60 backdrop-blur hover:border-border/60 hover:bg-background/70",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$redo$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Redo2$3e$__["Redo2"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/ui/src/components/grid/grid-preview.tsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this),
                                        "Redo"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/ui/src/components/grid/grid-preview.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: onResetGrid,
                                    className: "gap-2 border-border/40 bg-background/60 backdrop-blur hover:border-border/60 hover:bg-background/70",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/ui/src/components/grid/grid-preview.tsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, this),
                                        "Reset Grid"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/ui/src/components/grid/grid-preview.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/ui/src/components/grid/grid-preview.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/grid/grid-preview.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/grid/grid-preview.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-2 border-dashed border-border/60 bg-muted/30 rounded-xl p-4 sm:p-6 md:p-8 relative overflow-hidden transition-colors duration-300 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-20 pointer-events-none",
                        style: {
                            backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px),
               linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
                            backgroundSize: "20px 20px"
                        }
                    }, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/grid/grid-preview.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid w-full touch-none",
                            style: {
                                gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
                                gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
                                gap: `${gap * 4}px`
                            },
                            onPointerUp: onPointerUp,
                            onPointerCancel: onPointerUp,
                            onPointerLeave: onPointerLeave,
                            children: Array.from({
                                length: rows
                            }).map((_, r)=>Array.from({
                                    length: cols
                                }).map((__, c)=>{
                                    const key = `${r}-${c}`;
                                    const cell = startMap.get(key);
                                    if (cell) {
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$grid$2f$grid$2d$cell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GridCell"], {
                                            cell: cell,
                                            cols: cols,
                                            rows: rows,
                                            isInSelection: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$grid$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCellInSelection"])(cell.row, cell.col, selectedCells),
                                            onPointerDown: onPointerDown,
                                            onPointerEnter: onPointerEnter
                                        }, key, false, {
                                            fileName: "[project]/packages/ui/src/components/grid/grid-preview.tsx",
                                            lineNumber: 132,
                                            columnNumber: 23
                                        }, this);
                                    }
                                    if (occupied.has(key)) {
                                        return null;
                                    }
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onAddCell(r, c),
                                        className: "border-2 border-dashed border-border/50 rounded-lg bg-muted/10 hover:bg-muted/20 transition-colors text-muted-foreground flex items-center justify-center text-sm font-medium",
                                        children: "+"
                                    }, key, false, {
                                        fileName: "[project]/packages/ui/src/components/grid/grid-preview.tsx",
                                        lineNumber: 151,
                                        columnNumber: 21
                                    }, this);
                                })).flat()
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/grid/grid-preview.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/grid/grid-preview.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/ui/src/components/grid/grid-preview.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/grid/grid-preview.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_c = GridPreview;
var _c;
__turbopack_context__.k.register(_c, "GridPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/lib/grid-presets.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bentoPresets",
    ()=>bentoPresets
]);
const bentoPresets = [
    {
        name: "Classic Bento",
        cols: 3,
        rows: 3,
        cells: [
            {
                row: 0,
                col: 0,
                rowSpan: 2,
                colSpan: 2
            },
            {
                row: 0,
                col: 2,
                rowSpan: 1,
                colSpan: 1
            },
            {
                row: 1,
                col: 2,
                rowSpan: 1,
                colSpan: 1
            },
            {
                row: 2,
                col: 0,
                rowSpan: 1,
                colSpan: 1
            },
            {
                row: 2,
                col: 1,
                rowSpan: 1,
                colSpan: 2
            }
        ]
    },
    {
        name: "Feature Hero",
        cols: 4,
        rows: 3,
        cells: [
            {
                row: 0,
                col: 0,
                rowSpan: 2,
                colSpan: 3
            },
            {
                row: 0,
                col: 3,
                rowSpan: 1,
                colSpan: 1
            },
            {
                row: 1,
                col: 3,
                rowSpan: 2,
                colSpan: 1
            },
            {
                row: 2,
                col: 0,
                rowSpan: 1,
                colSpan: 1
            },
            {
                row: 2,
                col: 1,
                rowSpan: 1,
                colSpan: 2
            }
        ]
    },
    {
        name: "Dashboard Pro",
        cols: 4,
        rows: 4,
        cells: [
            {
                row: 0,
                col: 0,
                rowSpan: 1,
                colSpan: 4
            },
            {
                row: 1,
                col: 0,
                rowSpan: 2,
                colSpan: 2
            },
            {
                row: 1,
                col: 2,
                rowSpan: 1,
                colSpan: 2
            },
            {
                row: 2,
                col: 2,
                rowSpan: 1,
                colSpan: 1
            },
            {
                row: 2,
                col: 3,
                rowSpan: 1,
                colSpan: 1
            },
            {
                row: 3,
                col: 0,
                rowSpan: 1,
                colSpan: 1
            },
            {
                row: 3,
                col: 1,
                rowSpan: 1,
                colSpan: 1
            },
            {
                row: 3,
                col: 2,
                rowSpan: 1,
                colSpan: 2
            }
        ]
    },
    {
        name: "Masonry Style",
        cols: 3,
        rows: 4,
        cells: [
            {
                row: 0,
                col: 0,
                rowSpan: 2,
                colSpan: 1
            },
            {
                row: 0,
                col: 1,
                rowSpan: 1,
                colSpan: 2
            },
            {
                row: 1,
                col: 1,
                rowSpan: 2,
                colSpan: 1
            },
            {
                row: 1,
                col: 2,
                rowSpan: 1,
                colSpan: 1
            },
            {
                row: 2,
                col: 0,
                rowSpan: 1,
                colSpan: 1
            },
            {
                row: 2,
                col: 2,
                rowSpan: 2,
                colSpan: 1
            },
            {
                row: 3,
                col: 0,
                rowSpan: 1,
                colSpan: 2
            }
        ]
    },
    {
        name: "Portfolio Grid",
        cols: 5,
        rows: 3,
        cells: [
            {
                row: 0,
                col: 0,
                rowSpan: 2,
                colSpan: 2
            },
            {
                row: 0,
                col: 2,
                rowSpan: 1,
                colSpan: 1
            },
            {
                row: 0,
                col: 3,
                rowSpan: 1,
                colSpan: 2
            },
            {
                row: 1,
                col: 2,
                rowSpan: 2,
                colSpan: 1
            },
            {
                row: 1,
                col: 3,
                rowSpan: 1,
                colSpan: 2
            },
            {
                row: 2,
                col: 0,
                rowSpan: 1,
                colSpan: 2
            },
            {
                row: 2,
                col: 3,
                rowSpan: 1,
                colSpan: 2
            }
        ]
    },
    {
        name: "Magazine Layout",
        cols: 4,
        rows: 3,
        cells: [
            {
                row: 0,
                col: 0,
                rowSpan: 3,
                colSpan: 2
            },
            {
                row: 0,
                col: 2,
                rowSpan: 1,
                colSpan: 2
            },
            {
                row: 1,
                col: 2,
                rowSpan: 1,
                colSpan: 1
            },
            {
                row: 1,
                col: 3,
                rowSpan: 1,
                colSpan: 1
            },
            {
                row: 2,
                col: 2,
                rowSpan: 1,
                colSpan: 2
            }
        ]
    },
    {
        name: "App Interface",
        cols: 6,
        rows: 4,
        cells: [
            {
                row: 0,
                col: 0,
                rowSpan: 1,
                colSpan: 6
            },
            {
                row: 1,
                col: 0,
                rowSpan: 3,
                colSpan: 1
            },
            {
                row: 1,
                col: 1,
                rowSpan: 2,
                colSpan: 3
            },
            {
                row: 1,
                col: 4,
                rowSpan: 3,
                colSpan: 2
            },
            {
                row: 3,
                col: 1,
                rowSpan: 1,
                colSpan: 3
            }
        ]
    },
    {
        name: "Content Hub",
        cols: 3,
        rows: 5,
        cells: [
            {
                row: 0,
                col: 0,
                rowSpan: 2,
                colSpan: 2
            },
            {
                row: 0,
                col: 2,
                rowSpan: 1,
                colSpan: 1
            },
            {
                row: 1,
                col: 2,
                rowSpan: 2,
                colSpan: 1
            },
            {
                row: 2,
                col: 0,
                rowSpan: 1,
                colSpan: 1
            },
            {
                row: 2,
                col: 1,
                rowSpan: 1,
                colSpan: 1
            },
            {
                row: 3,
                col: 0,
                rowSpan: 2,
                colSpan: 1
            },
            {
                row: 3,
                col: 1,
                rowSpan: 1,
                colSpan: 2
            },
            {
                row: 4,
                col: 1,
                rowSpan: 1,
                colSpan: 2
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/grid/presets-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PresetsPanel",
    ()=>PresetsPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$grid$2d$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/lib/grid-presets.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
function PresetsPanel({ onApplyPreset }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.4,
            delay: 0.1
        },
        className: "group relative overflow-hidden rounded-2xl border border-border/40 bg-background/60 p-6 backdrop-blur transition-all hover:border-border/60 hover:shadow-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/grid/presets-panel.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-sm font-semibold uppercase tracking-[0.25em] text-foreground",
                            children: "Presets"
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/grid/presets-panel.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/grid/presets-panel.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 max-h-96 overflow-y-auto pr-1",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$grid$2d$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bentoPresets"].map((preset, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                onClick: ()=>onApplyPreset(preset),
                                className: "w-full justify-between text-left border border-border/20 bg-background/40 p-3 transition-all hover:border-border/40 hover:bg-background/60",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium text-foreground",
                                        children: preset.name
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/grid/presets-panel.tsx",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-mono text-muted-foreground",
                                        children: [
                                            preset.cols,
                                            "×",
                                            preset.rows
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/packages/ui/src/components/grid/presets-panel.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/packages/ui/src/components/grid/presets-panel.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/grid/presets-panel.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/ui/src/components/grid/presets-panel.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/grid/presets-panel.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = PresetsPanel;
var _c;
__turbopack_context__.k.register(_c, "PresetsPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/grid/settings-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SettingsPanel",
    ()=>SettingsPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$grid$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/lib/grid-utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
function SettingsPanel({ cols, maxCols = 12, maxGap = 12, gap, onColsChange, onGapChange }) {
    const gapSliderMax = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$grid$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGapSliderIndex"])(maxGap);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.4
        },
        className: "group relative overflow-hidden rounded-2xl border border-border/40 bg-background/60 p-6 backdrop-blur transition-all hover:border-border/60 hover:shadow-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10"
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/grid/settings-panel.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-sm font-semibold uppercase tracking-[0.25em] text-foreground mb-5",
                        children: "Settings"
                    }, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/grid/settings-panel.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium mb-3 flex justify-between text-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Columns"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/ui/src/components/grid/settings-panel.tsx",
                                                lineNumber: 42,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-muted-foreground",
                                                children: cols
                                            }, void 0, false, {
                                                fileName: "[project]/packages/ui/src/components/grid/settings-panel.tsx",
                                                lineNumber: 43,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/packages/ui/src/components/grid/settings-panel.tsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        min: "2",
                                        max: maxCols,
                                        value: cols,
                                        onChange: (e)=>onColsChange(parseInt(e.target.value)),
                                        className: "w-full h-3 rounded-lg appearance-none cursor-pointer bg-muted accent-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/grid/settings-panel.tsx",
                                        lineNumber: 45,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/ui/src/components/grid/settings-panel.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium mb-3 flex justify-between text-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Gap"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/ui/src/components/grid/settings-panel.tsx",
                                                lineNumber: 57,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-muted-foreground",
                                                children: [
                                                    gap,
                                                    "px"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/ui/src/components/grid/settings-panel.tsx",
                                                lineNumber: 58,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/packages/ui/src/components/grid/settings-panel.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        min: "0",
                                        max: gapSliderMax,
                                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$grid$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGapSliderIndex"])(gap),
                                        onChange: (e)=>onGapChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$grid$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGapValueFromIndex"])(parseInt(e.target.value))),
                                        className: "w-full h-3 rounded-lg appearance-none cursor-pointer bg-muted accent-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/grid/settings-panel.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/ui/src/components/grid/settings-panel.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/ui/src/components/grid/settings-panel.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/ui/src/components/grid/settings-panel.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/grid/settings-panel.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = SettingsPanel;
var _c;
__turbopack_context__.k.register(_c, "SettingsPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/lib/grid-utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================================================
// GRID UTILS - Functions and constants for grid generation
// ============================================================================
__turbopack_context__.s([
    "GAP_VALUES",
    ()=>GAP_VALUES,
    "generateGridCode",
    ()=>generateGridCode,
    "getCellKey",
    ()=>getCellKey,
    "getGapSliderIndex",
    ()=>getGapSliderIndex,
    "getGapValueFromIndex",
    ()=>getGapValueFromIndex,
    "initializeCells",
    ()=>initializeCells,
    "isCellInSelection",
    ()=>isCellInSelection
]);
const GAP_VALUES = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    8,
    10,
    12
];
const getGapSliderIndex = (gapValue)=>{
    const index = GAP_VALUES.indexOf(gapValue);
    return index === -1 ? 0 : index;
};
const getGapValueFromIndex = (index)=>{
    return GAP_VALUES[Math.max(0, Math.min(GAP_VALUES.length - 1, index))];
};
const generateGridCode = (cells, cols, gap, options)=>{
    const gapClass = `gap-${gap}`;
    const colsClass = `grid-cols-${cols}`;
    const classAttr = options?.useClassName === false ? "class" : "className";
    const bgBase = options?.includeBg === false ? "" : "bg-gray-100 dark:bg-gray-800 ";
    let code = `<div ${classAttr}="grid ${colsClass} ${gapClass} w-full">\n`;
    cells.forEach((cell, i)=>{
        const colSpanClass = cell.colSpan > 1 ? ` col-span-${cell.colSpan}` : "";
        const rowSpanClass = cell.rowSpan > 1 ? ` row-span-${cell.rowSpan}` : "";
        code += `  <div ${classAttr}="${bgBase}p-6 rounded-lg${colSpanClass}${rowSpanClass}">\n`;
        code += `    <!-- Content ${i + 1} -->\n`;
        code += `  </div>\n`;
    });
    code += `</div>`;
    return code;
};
const initializeCells = (cols, rows)=>{
    const newCells = [];
    const occupied = new Set();
    for(let row = 0; row < rows; row++){
        for(let col = 0; col < cols; col++){
            const key = `${row}-${col}`;
            if (!occupied.has(key)) {
                newCells.push({
                    row,
                    col,
                    rowSpan: 1,
                    colSpan: 1
                });
                occupied.add(key);
            }
        }
    }
    return newCells;
};
const getCellKey = (row, col)=>`${row}-${col}`;
const isCellInSelection = (row, col, selectedCells)=>{
    return selectedCells.includes(getCellKey(row, col));
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/app/grid-generator/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TailwindGridGenerator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$grid$2f$code$2d$output$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/grid/code-output.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$grid$2f$grid$2d$preview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/grid/grid-preview.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$grid$2f$presets$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/grid/presets-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$grid$2f$settings$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/grid/settings-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$grid$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/grid-utils.ts [app-client] (ecmascript)");
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
;
;
// Animation variants
const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};
const itemVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4
        }
    }
};
function TailwindGridGenerator() {
    _s();
    const [cols, setCols] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(3);
    const [rows, setRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(3);
    const [gap, setGap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(4);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [useClassName, setUseClassName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [includeBg, setIncludeBg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [cells, setCells] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [maxCols, setMaxCols] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(12);
    const [maxGap, setMaxGap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(12);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dragStart, setDragStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dragEnd, setDragEnd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedCells, setSelectedCells] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [future, setFuture] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const isRestoringRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const cloneCells = (cellsToClone)=>cellsToClone.map((cell)=>({
                ...cell
            }));
    const createSnapshot = (override)=>({
            cells: cloneCells(override?.cells ?? cells),
            cols: override?.cols ?? cols,
            rows: override?.rows ?? rows,
            gap: override?.gap ?? gap,
            useClassName: override?.useClassName ?? useClassName,
            includeBg: override?.includeBg ?? includeBg
        });
    const pushToHistory = ()=>{
        setHistory((prev)=>[
                ...prev,
                createSnapshot()
            ]);
        setFuture([]);
    };
    const restoreSnapshot = (snapshot)=>{
        isRestoringRef.current = true;
        setCols(snapshot.cols);
        setRows(snapshot.rows);
        setGap(snapshot.gap);
        setUseClassName(snapshot.useClassName);
        setIncludeBg(snapshot.includeBg);
        setCells(cloneCells(snapshot.cells));
        setSelectedCells([]);
        setIsDragging(false);
        setDragStart(null);
        setDragEnd(null);
    };
    const snapshotsEqual = (a, b)=>{
        if (a.cols !== b.cols || a.rows !== b.rows || a.gap !== b.gap || a.useClassName !== b.useClassName || a.includeBg !== b.includeBg || a.cells.length !== b.cells.length) {
            return false;
        }
        for(let i = 0; i < a.cells.length; i++){
            const cellA = a.cells[i];
            const cellB = b.cells[i];
            if (cellA.row !== cellB.row || cellA.col !== cellB.col || cellA.rowSpan !== cellB.rowSpan || cellA.colSpan !== cellB.colSpan) {
                return false;
            }
        }
        return true;
    };
    const handleUndo = ()=>{
        setHistory((prevHistory)=>{
            if (!prevHistory.length) return prevHistory;
            const previous = prevHistory[prevHistory.length - 1];
            const currentSnapshot = createSnapshot();
            setFuture((prevFuture)=>{
                // Only add if not already the first item in future
                if (prevFuture.length > 0 && snapshotsEqual(prevFuture[0], currentSnapshot)) {
                    return prevFuture;
                }
                return [
                    currentSnapshot,
                    ...prevFuture
                ];
            });
            restoreSnapshot(previous);
            return prevHistory.slice(0, -1);
        });
    };
    const handleRedo = ()=>{
        setFuture((prevFuture)=>{
            if (!prevFuture.length) return prevFuture;
            const [next, ...rest] = prevFuture;
            const currentSnapshot = createSnapshot();
            setHistory((prevHistory)=>{
                // Only add if not already the last item in history
                if (prevHistory.length > 0 && snapshotsEqual(prevHistory[prevHistory.length - 1], currentSnapshot)) {
                    return prevHistory;
                }
                return [
                    ...prevHistory,
                    currentSnapshot
                ];
            });
            restoreSnapshot(next);
            return rest;
        });
    };
    const handleAddCell = (row, col)=>{
        // prevent overlap with existing spans
        const occupied = new Set();
        cells.forEach((cell)=>{
            for(let r = cell.row; r < cell.row + cell.rowSpan; r++){
                for(let c = cell.col; c < cell.col + cell.colSpan; c++){
                    occupied.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$grid$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCellKey"])(r, c));
                }
            }
        });
        if (occupied.has((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$grid$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCellKey"])(row, col))) return;
        pushToHistory();
        setCells((prev)=>[
                ...prev,
                {
                    row,
                    col,
                    rowSpan: 1,
                    colSpan: 1
                }
            ]);
    };
    // Update max columns based on viewport and clamp current cols
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TailwindGridGenerator.useEffect": ()=>{
            const updateMaxCols = {
                "TailwindGridGenerator.useEffect.updateMaxCols": ()=>{
                    const isMobile = window.innerWidth < 768;
                    const nextMax = isMobile ? 6 : 12;
                    setMaxCols(nextMax);
                    setCols({
                        "TailwindGridGenerator.useEffect.updateMaxCols": (prev)=>Math.min(prev, nextMax)
                    }["TailwindGridGenerator.useEffect.updateMaxCols"]);
                }
            }["TailwindGridGenerator.useEffect.updateMaxCols"];
            updateMaxCols();
            window.addEventListener("resize", updateMaxCols);
            return ({
                "TailwindGridGenerator.useEffect": ()=>window.removeEventListener("resize", updateMaxCols)
            })["TailwindGridGenerator.useEffect"];
        }
    }["TailwindGridGenerator.useEffect"], []);
    // Update max gap based on viewport and clamp current gap
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TailwindGridGenerator.useEffect": ()=>{
            const updateMaxGap = {
                "TailwindGridGenerator.useEffect.updateMaxGap": ()=>{
                    const isMobile = window.innerWidth < 768;
                    const nextMax = isMobile ? 6 : 12;
                    setMaxGap(nextMax);
                    setGap({
                        "TailwindGridGenerator.useEffect.updateMaxGap": (prev)=>Math.min(prev, nextMax)
                    }["TailwindGridGenerator.useEffect.updateMaxGap"]);
                }
            }["TailwindGridGenerator.useEffect.updateMaxGap"];
            updateMaxGap();
            window.addEventListener("resize", updateMaxGap);
            return ({
                "TailwindGridGenerator.useEffect": ()=>window.removeEventListener("resize", updateMaxGap)
            })["TailwindGridGenerator.useEffect"];
        }
    }["TailwindGridGenerator.useEffect"], []);
    // Initialize cells on mount and when cols/rows change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TailwindGridGenerator.useEffect": ()=>{
            if (isRestoringRef.current) {
                isRestoringRef.current = false;
                return;
            }
            setCells((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$grid$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeCells"])(cols, rows));
            setSelectedCells([]);
        }
    }["TailwindGridGenerator.useEffect"], [
        cols,
        rows
    ]);
    const handlePointerDown = (row, col)=>{
        setIsDragging(true);
        setDragStart({
            row,
            col
        });
        setDragEnd({
            row,
            col
        });
        setSelectedCells([
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$grid$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCellKey"])(row, col)
        ]);
    };
    const handlePointerEnter = (row, col)=>{
        if (isDragging && dragStart) {
            setDragEnd({
                row,
                col
            });
            const minRow = Math.min(dragStart.row, row);
            const maxRow = Math.max(dragStart.row, row);
            const minCol = Math.min(dragStart.col, col);
            const maxCol = Math.max(dragStart.col, col);
            const selected = [];
            for(let r = minRow; r <= maxRow; r++){
                for(let c = minCol; c <= maxCol; c++){
                    selected.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$grid$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCellKey"])(r, c));
                }
            }
            setSelectedCells(selected);
        }
    };
    const handlePointerEnd = ()=>{
        if (!isDragging || !dragStart || !dragEnd) {
            setIsDragging(false);
            return;
        }
        const minRow = Math.min(dragStart.row, dragEnd.row);
        const maxRow = Math.max(dragStart.row, dragEnd.row);
        const minCol = Math.min(dragStart.col, dragEnd.col);
        const maxCol = Math.max(dragStart.col, dragEnd.col);
        const rowSpan = maxRow - minRow + 1;
        const colSpan = maxCol - minCol + 1;
        const newCells = cells.filter((cell)=>{
            return !(cell.row >= minRow && cell.row <= maxRow && cell.col >= minCol && cell.col <= maxCol);
        });
        newCells.push({
            row: minRow,
            col: minCol,
            rowSpan,
            colSpan
        });
        newCells.sort((a, b)=>{
            if (a.row !== b.row) return a.row - b.row;
            return a.col - b.col;
        });
        pushToHistory();
        setCells(newCells);
        setIsDragging(false);
        setDragStart(null);
        setDragEnd(null);
        setSelectedCells([]);
    };
    const copyCode = ()=>{
        navigator.clipboard.writeText((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$grid$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateGridCode"])(cells, cols, gap));
        setCopied(true);
        setTimeout(()=>setCopied(false), 2000);
    };
    const handleColsChange = (value)=>{
        if (value === cols) return;
        pushToHistory();
        setCols(value);
    };
    const handleGapChange = (value)=>{
        if (value === gap) return;
        pushToHistory();
        setGap(value);
    };
    const handleResetGrid = ()=>{
        pushToHistory();
        setCells((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$grid$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeCells"])(cols, rows));
        setSelectedCells([]);
        setIsDragging(false);
        setDragStart(null);
        setDragEnd(null);
    };
    const handleToggleUseClassName = (checked)=>{
        if (checked === useClassName) return;
        pushToHistory();
        setUseClassName(checked);
    };
    const handleToggleIncludeBg = (checked)=>{
        if (checked === includeBg) return;
        pushToHistory();
        setIncludeBg(checked);
    };
    const applyPreset = (preset)=>{
        const targetCols = Math.min(preset.cols, maxCols);
        pushToHistory();
        isRestoringRef.current = true;
        setCols(targetCols);
        setRows(preset.rows);
        setCells(cloneCells(preset.cells));
        setSelectedCells([]);
        setIsDragging(false);
        setDragStart(null);
        setDragEnd(null);
    };
    const canUndo = history.length > 0;
    const canRedo = future.length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "container mx-auto relative min-h-screen overflow-hidden bg-background px-4 sm:px-6 md:px-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 -z-10 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-foreground/[0.035] blur-[140px]"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/app/grid-generator/page.tsx",
                        lineNumber: 362,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-foreground/[0.025] blur-[120px]"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/app/grid-generator/page.tsx",
                        lineNumber: 363,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/[0.02] blur-[150px]"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/app/grid-generator/page.tsx",
                        lineNumber: 364,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/app/grid-generator/page.tsx",
                lineNumber: 361,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].header, {
                initial: {
                    opacity: 0,
                    y: -20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.3
                },
                className: "border-b border-border/40 bg-background/40 backdrop-blur-md",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-7xl py-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl font-semibold text-foreground tracking-tight",
                                        children: "Grid Generator"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/grid-generator/page.tsx",
                                        lineNumber: 378,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-foreground/70 text-lg font-medium mt-1",
                                        children: "Build powerful grid layouts in a few clicks"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/grid-generator/page.tsx",
                                        lineNumber: 381,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/app/grid-generator/page.tsx",
                                lineNumber: 377,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/app/grid-generator/page.tsx",
                            lineNumber: 376,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/app/grid-generator/page.tsx",
                        lineNumber: 375,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/app/grid-generator/page.tsx",
                    lineNumber: 374,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/app/grid-generator/page.tsx",
                lineNumber: 368,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative px-6 py-8 lg:py-12 md:px-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-7xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: containerVariants,
                        initial: "hidden",
                        animate: "visible",
                        className: "grid min-w-0 lg:grid-cols-4 gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-1 space-y-6 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$grid$2f$presets$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetsPanel"], {
                                        onApplyPreset: applyPreset
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/grid-generator/page.tsx",
                                        lineNumber: 401,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$grid$2f$settings$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SettingsPanel"], {
                                        cols: cols,
                                        maxCols: maxCols,
                                        maxGap: maxGap,
                                        gap: gap,
                                        onColsChange: handleColsChange,
                                        onGapChange: handleGapChange
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/grid-generator/page.tsx",
                                        lineNumber: 402,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/app/grid-generator/page.tsx",
                                lineNumber: 400,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                variants: itemVariants,
                                className: "lg:col-span-3 space-y-8 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$grid$2f$grid$2d$preview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GridPreview"], {
                                        cells: cells,
                                        cols: cols,
                                        rows: rows,
                                        gap: gap,
                                        selectedCells: selectedCells,
                                        onPointerDown: handlePointerDown,
                                        onPointerEnter: handlePointerEnter,
                                        onPointerUp: handlePointerEnd,
                                        onPointerLeave: handlePointerEnd,
                                        onAddCell: handleAddCell,
                                        onResetGrid: handleResetGrid,
                                        onUndo: handleUndo,
                                        onRedo: handleRedo,
                                        canUndo: canUndo,
                                        canRedo: canRedo
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/grid-generator/page.tsx",
                                        lineNumber: 417,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$grid$2f$code$2d$output$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeOutput"], {
                                        code: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$grid$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateGridCode"])(cells, cols, gap, {
                                            useClassName,
                                            includeBg
                                        }),
                                        copied: copied,
                                        onCopyCode: copyCode,
                                        options: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex items-center gap-2 text-sm text-foreground/80",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: useClassName,
                                                            onChange: (e)=>handleToggleUseClassName(e.target.checked)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/app/grid-generator/page.tsx",
                                                            lineNumber: 444,
                                                            columnNumber: 23
                                                        }, void 0),
                                                        "Use ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                            children: "className"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/app/grid-generator/page.tsx",
                                                            lineNumber: 451,
                                                            columnNumber: 27
                                                        }, void 0)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/app/grid-generator/page.tsx",
                                                    lineNumber: 443,
                                                    columnNumber: 21
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex items-center gap-2 text-sm text-foreground/80",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: includeBg,
                                                            onChange: (e)=>handleToggleIncludeBg(e.target.checked)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/app/grid-generator/page.tsx",
                                                            lineNumber: 454,
                                                            columnNumber: 23
                                                        }, void 0),
                                                        "Include background classes"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/app/grid-generator/page.tsx",
                                                    lineNumber: 453,
                                                    columnNumber: 21
                                                }, void 0)
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/grid-generator/page.tsx",
                                        lineNumber: 434,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/app/grid-generator/page.tsx",
                                lineNumber: 413,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/app/grid-generator/page.tsx",
                        lineNumber: 393,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/app/grid-generator/page.tsx",
                    lineNumber: 392,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/app/grid-generator/page.tsx",
                lineNumber: 391,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/app/grid-generator/page.tsx",
        lineNumber: 359,
        columnNumber: 5
    }, this);
}
_s(TailwindGridGenerator, "SEl8OxAaSznFYvM/5bdbGZiJqjg=");
_c = TailwindGridGenerator;
var _c;
__turbopack_context__.k.register(_c, "TailwindGridGenerator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>CodeXml
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m18 16 4-4-4-4",
            key: "1inbqp"
        }
    ],
    [
        "path",
        {
            d: "m6 8-4 4 4 4",
            key: "15zrgr"
        }
    ],
    [
        "path",
        {
            d: "m14.5 4-5 16",
            key: "e7oirm"
        }
    ]
];
const CodeXml = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("code-xml", __iconNode);
;
 //# sourceMappingURL=code-xml.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript) <export default as Code2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Code2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Copy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "rect",
        {
            width: "14",
            height: "14",
            x: "8",
            y: "8",
            rx: "2",
            ry: "2",
            key: "17jyea"
        }
    ],
    [
        "path",
        {
            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
            key: "zix9uf"
        }
    ]
];
const Copy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("copy", __iconNode);
;
 //# sourceMappingURL=copy.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Copy",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/grid-3x3.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Grid3x3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "rect",
        {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            key: "afitv7"
        }
    ],
    [
        "path",
        {
            d: "M3 9h18",
            key: "1pudct"
        }
    ],
    [
        "path",
        {
            d: "M3 15h18",
            key: "5xshup"
        }
    ],
    [
        "path",
        {
            d: "M9 3v18",
            key: "fh3hqa"
        }
    ],
    [
        "path",
        {
            d: "M15 3v18",
            key: "14nvp0"
        }
    ]
];
const Grid3x3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("grid-3x3", __iconNode);
;
 //# sourceMappingURL=grid-3x3.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/grid-3x3.js [app-client] (ecmascript) <export default as Grid3x3>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Grid3x3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/grid-3x3.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/redo-2.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Redo2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m15 14 5-5-5-5",
            key: "12vg1m"
        }
    ],
    [
        "path",
        {
            d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",
            key: "6uklza"
        }
    ]
];
const Redo2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("redo-2", __iconNode);
;
 //# sourceMappingURL=redo-2.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/redo-2.js [app-client] (ecmascript) <export default as Redo2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Redo2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$redo$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$redo$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/redo-2.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>RotateCcw
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
            key: "1357e3"
        }
    ],
    [
        "path",
        {
            d: "M3 3v5h5",
            key: "1xhq8a"
        }
    ]
];
const RotateCcw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("rotate-ccw", __iconNode);
;
 //# sourceMappingURL=rotate-ccw.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RotateCcw",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/undo-2.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Undo2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M9 14 4 9l5-5",
            key: "102s5s"
        }
    ],
    [
        "path",
        {
            d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",
            key: "f3b9sd"
        }
    ]
];
const Undo2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("undo-2", __iconNode);
;
 //# sourceMappingURL=undo-2.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/undo-2.js [app-client] (ecmascript) <export default as Undo2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Undo2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/undo-2.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_0e3de218._.js.map