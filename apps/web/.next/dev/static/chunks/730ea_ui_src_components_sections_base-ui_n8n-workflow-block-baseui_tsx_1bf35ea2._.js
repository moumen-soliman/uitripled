(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/packages/ui/src/components/sections/base-ui/n8n-workflow-block-baseui.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "N8nWorkflowBlockBaseui",
    ()=>N8nWorkflowBlockBaseui
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/react/esm/button/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$webhook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Webhook$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/webhook.js [app-client] (ecmascript) <export default as Webhook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// Constants
const NODE_WIDTH = 200;
const NODE_HEIGHT = 100;
const nodeTemplates = [
    {
        type: "trigger",
        title: "Webhook",
        description: "Receive data from external service",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$webhook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Webhook$3e$__["Webhook"],
        color: "emerald"
    },
    {
        type: "action",
        title: "Database Query",
        description: "Fetch user records",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"],
        color: "blue"
    },
    {
        type: "condition",
        title: "Condition",
        description: "Check user status",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
        color: "amber"
    },
    {
        type: "action",
        title: "Send Email",
        description: "Notify user",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
        color: "purple"
    },
    {
        type: "action",
        title: "Log Event",
        description: "Record activity",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        color: "indigo"
    }
];
const initialNodes = [
    {
        id: "node-1",
        type: "trigger",
        title: "Webhook",
        description: "Receive data from external service",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$webhook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Webhook$3e$__["Webhook"],
        color: "emerald",
        position: {
            x: 50,
            y: 100
        }
    },
    {
        id: "node-2",
        type: "action",
        title: "Database Query",
        description: "Fetch user records",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"],
        color: "blue",
        position: {
            x: 300,
            y: 100
        }
    },
    {
        id: "node-3",
        type: "condition",
        title: "Condition",
        description: "Check user status",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
        color: "amber",
        position: {
            x: 550,
            y: 100
        }
    }
];
const initialConnections = [
    {
        from: "node-1",
        to: "node-2"
    },
    {
        from: "node-2",
        to: "node-3"
    }
];
const colorClasses = {
    emerald: "border-emerald-400/40 bg-emerald-400/10 text-emerald-400",
    blue: "border-blue-400/40 bg-blue-400/10 text-blue-400",
    amber: "border-amber-400/40 bg-amber-400/10 text-amber-400",
    purple: "border-purple-400/40 bg-purple-400/10 text-purple-400",
    indigo: "border-indigo-400/40 bg-indigo-400/10 text-indigo-400"
};
// Connection Line Component
function WorkflowConnectionLine({ from, to, nodes }) {
    const fromNode = nodes.find((n)=>n.id === from);
    const toNode = nodes.find((n)=>n.id === to);
    if (!fromNode || !toNode) return null;
    const startX = fromNode.position.x + NODE_WIDTH;
    const startY = fromNode.position.y + NODE_HEIGHT / 2;
    const endX = toNode.position.x;
    const endY = toNode.position.y + NODE_HEIGHT / 2;
    const cp1X = startX + (endX - startX) * 0.5;
    const cp2X = endX - (endX - startX) * 0.5;
    const path = `M${startX},${startY} C${cp1X},${startY} ${cp2X},${endY} ${endX},${endY}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: path,
        fill: "none",
        stroke: "hsl(var(--primary))",
        strokeWidth: 2.5,
        strokeDasharray: "6,4",
        opacity: 0.5
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/sections/base-ui/n8n-workflow-block-baseui.tsx",
        lineNumber: 144,
        columnNumber: 5
    }, this);
}
_c = WorkflowConnectionLine;
function N8nWorkflowBlockBaseui() {
    _s();
    const [nodes, setNodes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialNodes);
    const [connections, setConnections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialConnections);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dragStartPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [draggingNodeId, setDraggingNodeId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [contentSize, setContentSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "N8nWorkflowBlockBaseui.useState": ()=>{
            const maxX = Math.max(...initialNodes.map({
                "N8nWorkflowBlockBaseui.useState.maxX": (n)=>n.position.x + NODE_WIDTH
            }["N8nWorkflowBlockBaseui.useState.maxX"]));
            const maxY = Math.max(...initialNodes.map({
                "N8nWorkflowBlockBaseui.useState.maxY": (n)=>n.position.y + NODE_HEIGHT
            }["N8nWorkflowBlockBaseui.useState.maxY"]));
            return {
                width: maxX + 50,
                height: maxY + 50
            };
        }
    }["N8nWorkflowBlockBaseui.useState"]);
    // Drag Handlers
    const handleDragStart = (nodeId)=>{
        setDraggingNodeId(nodeId);
        const node = nodes.find((n)=>n.id === nodeId);
        if (node) {
            dragStartPosition.current = {
                x: node.position.x,
                y: node.position.y
            };
        }
    };
    const handleDrag = (nodeId, { offset })=>{
        if (draggingNodeId !== nodeId || !dragStartPosition.current) return;
        const newX = dragStartPosition.current.x + offset.x;
        const newY = dragStartPosition.current.y + offset.y;
        const constrainedX = Math.max(0, newX);
        const constrainedY = Math.max(0, newY);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"])(()=>{
            setNodes((prev)=>prev.map((node)=>node.id === nodeId ? {
                        ...node,
                        position: {
                            x: constrainedX,
                            y: constrainedY
                        }
                    } : node));
        });
        setContentSize((prev)=>({
                width: Math.max(prev.width, constrainedX + NODE_WIDTH + 50),
                height: Math.max(prev.height, constrainedY + NODE_HEIGHT + 50)
            }));
    };
    const handleDragEnd = ()=>{
        setDraggingNodeId(null);
        dragStartPosition.current = null;
    };
    // Add Node Handler
    const addNode = ()=>{
        const template = nodeTemplates[Math.floor(Math.random() * nodeTemplates.length)];
        const lastNode = nodes[nodes.length - 1];
        const newPosition = lastNode ? {
            x: lastNode.position.x + 250,
            y: lastNode.position.y
        } : {
            x: 50,
            y: 100
        };
        const newNode = {
            id: `node-${Date.now()}`,
            ...template,
            position: newPosition
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"])(()=>{
            setNodes((prev)=>[
                    ...prev,
                    newNode
                ]);
            if (lastNode) {
                setConnections((prev)=>[
                        ...prev,
                        {
                            from: lastNode.id,
                            to: newNode.id
                        }
                    ]);
            }
        });
        setContentSize((prev)=>({
                width: Math.max(prev.width, newPosition.x + NODE_WIDTH + 50),
                height: Math.max(prev.height, newPosition.y + NODE_HEIGHT + 50)
            }));
        // Scroll to new node
        const canvas = canvasRef.current;
        if (canvas) {
            canvas.scrollTo({
                left: newPosition.x + NODE_WIDTH - canvas.clientWidth + 100,
                behavior: "smooth"
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full overflow-hidden rounded-2xl border border-border/40 bg-background/60 p-4 backdrop-blur sm:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 flex flex-wrap items-center justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400",
                                children: "Active"
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/src/components/sections/base-ui/n8n-workflow-block-baseui.tsx",
                                lineNumber: 257,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs uppercase tracking-[0.25em] text-foreground/50 sm:text-sm",
                                children: "Workflow Builder"
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/src/components/sections/base-ui/n8n-workflow-block-baseui.tsx",
                                lineNumber: 260,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/ui/src/components/sections/base-ui/n8n-workflow-block-baseui.tsx",
                        lineNumber: 256,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: addNode,
                        className: "inline-flex h-8 items-center justify-center gap-2 rounded-lg border border-input bg-background px-3 text-xs uppercase tracking-[0.2em] text-foreground/70 transition-colors hover:text-foreground",
                        "aria-label": "Add new node",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                className: "h-3.5 w-3.5",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/src/components/sections/base-ui/n8n-workflow-block-baseui.tsx",
                                lineNumber: 269,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: "Add Node"
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/src/components/sections/base-ui/n8n-workflow-block-baseui.tsx",
                                lineNumber: 270,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/ui/src/components/sections/base-ui/n8n-workflow-block-baseui.tsx",
                        lineNumber: 264,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/ui/src/components/sections/base-ui/n8n-workflow-block-baseui.tsx",
                lineNumber: 255,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: canvasRef,
                className: "relative h-[400px] w-full overflow-auto rounded-xl border border-border/30 bg-background/40 sm:h-[500px] md:h-[600px]",
                style: {
                    minHeight: "400px"
                },
                role: "region",
                "aria-label": "Workflow canvas",
                tabIndex: 0,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    style: {
                        minWidth: contentSize.width,
                        minHeight: contentSize.height
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "pointer-events-none absolute inset-0",
                            style: {
                                width: contentSize.width,
                                height: contentSize.height
                            },
                            "aria-hidden": "true",
                            children: connections.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WorkflowConnectionLine, {
                                    from: c.from,
                                    to: c.to,
                                    nodes: nodes
                                }, `${c.from}-${c.to}`, false, {
                                    fileName: "[project]/packages/ui/src/components/sections/base-ui/n8n-workflow-block-baseui.tsx",
                                    lineNumber: 298,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/sections/base-ui/n8n-workflow-block-baseui.tsx",
                            lineNumber: 292,
                            columnNumber: 11
                        }, this),
                        nodes.map((node)=>{
                            const Icon = node.icon;
                            const isDragging = draggingNodeId === node.id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                drag: true,
                                dragMomentum: false,
                                dragConstraints: {
                                    left: 0,
                                    top: 0,
                                    right: 100000,
                                    bottom: 100000
                                },
                                onDragStart: ()=>handleDragStart(node.id),
                                onDrag: (_, info)=>handleDrag(node.id, info),
                                onDragEnd: handleDragEnd,
                                style: {
                                    x: node.position.x,
                                    y: node.position.y,
                                    width: NODE_WIDTH,
                                    transformOrigin: "0 0"
                                },
                                className: "absolute cursor-grab",
                                initial: {
                                    scale: 0.8,
                                    opacity: 0
                                },
                                animate: {
                                    scale: 1,
                                    opacity: 1
                                },
                                transition: {
                                    duration: 0.2
                                },
                                whileHover: {
                                    scale: 1.02
                                },
                                whileDrag: {
                                    scale: 1.05,
                                    zIndex: 50,
                                    cursor: "grabbing"
                                },
                                "aria-grabbed": isDragging,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `group/node relative w-full overflow-hidden rounded-xl border ${colorClasses[node.color]} bg-background/70 p-3 backdrop-blur transition-all hover:shadow-lg ${isDragging ? "shadow-xl ring-2 ring-primary/50" : ""}`,
                                    role: "article",
                                    "aria-label": `${node.type} node: ${node.title}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/node:opacity-100"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/ui/src/components/sections/base-ui/n8n-workflow-block-baseui.tsx",
                                            lineNumber: 345,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border ${colorClasses[node.color]} bg-background/80 backdrop-blur`,
                                                            "aria-hidden": "true",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/packages/ui/src/components/sections/base-ui/n8n-workflow-block-baseui.tsx",
                                                                lineNumber: 353,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/packages/ui/src/components/sections/base-ui/n8n-workflow-block-baseui.tsx",
                                                            lineNumber: 349,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "min-w-0 flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "mb-0.5 inline-flex items-center rounded-full border border-border/40 bg-background/80 px-1.5 py-0 text-[9px] uppercase tracking-[0.15em] text-foreground/60",
                                                                    children: node.type
                                                                }, void 0, false, {
                                                                    fileName: "[project]/packages/ui/src/components/sections/base-ui/n8n-workflow-block-baseui.tsx",
                                                                    lineNumber: 356,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "truncate text-xs font-semibold tracking-tight text-foreground",
                                                                    children: node.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/packages/ui/src/components/sections/base-ui/n8n-workflow-block-baseui.tsx",
                                                                    lineNumber: 359,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/packages/ui/src/components/sections/base-ui/n8n-workflow-block-baseui.tsx",
                                                            lineNumber: 355,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/packages/ui/src/components/sections/base-ui/n8n-workflow-block-baseui.tsx",
                                                    lineNumber: 348,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "line-clamp-2 text-[10px] leading-relaxed text-foreground/70",
                                                    children: node.description
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/ui/src/components/sections/base-ui/n8n-workflow-block-baseui.tsx",
                                                    lineNumber: 364,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5 text-[10px] text-foreground/50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            className: "h-2.5 w-2.5",
                                                            "aria-hidden": "true"
                                                        }, void 0, false, {
                                                            fileName: "[project]/packages/ui/src/components/sections/base-ui/n8n-workflow-block-baseui.tsx",
                                                            lineNumber: 368,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "uppercase tracking-[0.1em]",
                                                            children: "Connected"
                                                        }, void 0, false, {
                                                            fileName: "[project]/packages/ui/src/components/sections/base-ui/n8n-workflow-block-baseui.tsx",
                                                            lineNumber: 369,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/packages/ui/src/components/sections/base-ui/n8n-workflow-block-baseui.tsx",
                                                    lineNumber: 367,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/packages/ui/src/components/sections/base-ui/n8n-workflow-block-baseui.tsx",
                                            lineNumber: 347,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/ui/src/components/sections/base-ui/n8n-workflow-block-baseui.tsx",
                                    lineNumber: 340,
                                    columnNumber: 17
                                }, this)
                            }, node.id, false, {
                                fileName: "[project]/packages/ui/src/components/sections/base-ui/n8n-workflow-block-baseui.tsx",
                                lineNumber: 313,
                                columnNumber: 15
                            }, this);
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/sections/base-ui/n8n-workflow-block-baseui.tsx",
                    lineNumber: 284,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/sections/base-ui/n8n-workflow-block-baseui.tsx",
                lineNumber: 275,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border/30 bg-background/40 px-4 py-2.5 backdrop-blur-sm",
                role: "status",
                "aria-live": "polite",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-4 text-xs text-foreground/60",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-1.5 w-1.5 rounded-full bg-emerald-500",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/sections/base-ui/n8n-workflow-block-baseui.tsx",
                                        lineNumber: 389,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "uppercase tracking-[0.15em]",
                                        children: [
                                            nodes.length,
                                            " ",
                                            nodes.length === 1 ? "Node" : "Nodes"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/packages/ui/src/components/sections/base-ui/n8n-workflow-block-baseui.tsx",
                                        lineNumber: 393,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/ui/src/components/sections/base-ui/n8n-workflow-block-baseui.tsx",
                                lineNumber: 388,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-1.5 w-1.5 rounded-full bg-primary",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/sections/base-ui/n8n-workflow-block-baseui.tsx",
                                        lineNumber: 398,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "uppercase tracking-[0.15em]",
                                        children: [
                                            connections.length,
                                            " ",
                                            connections.length === 1 ? "Connection" : "Connections"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/packages/ui/src/components/sections/base-ui/n8n-workflow-block-baseui.tsx",
                                        lineNumber: 402,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/ui/src/components/sections/base-ui/n8n-workflow-block-baseui.tsx",
                                lineNumber: 397,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/ui/src/components/sections/base-ui/n8n-workflow-block-baseui.tsx",
                        lineNumber: 387,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] uppercase tracking-[0.2em] text-foreground/40",
                        children: "Drag nodes to reposition"
                    }, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/sections/base-ui/n8n-workflow-block-baseui.tsx",
                        lineNumber: 408,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/ui/src/components/sections/base-ui/n8n-workflow-block-baseui.tsx",
                lineNumber: 382,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/sections/base-ui/n8n-workflow-block-baseui.tsx",
        lineNumber: 253,
        columnNumber: 5
    }, this);
}
_s(N8nWorkflowBlockBaseui, "A5MH8W/r16iy7ud3Y7mUZ/VOYps=");
_c1 = N8nWorkflowBlockBaseui;
var _c, _c1;
__turbopack_context__.k.register(_c, "WorkflowConnectionLine");
__turbopack_context__.k.register(_c1, "N8nWorkflowBlockBaseui");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=730ea_ui_src_components_sections_base-ui_n8n-workflow-block-baseui_tsx_1bf35ea2._.js.map