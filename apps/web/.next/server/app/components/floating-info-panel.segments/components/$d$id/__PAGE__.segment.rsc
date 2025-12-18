1:"$Sreact.fragment"
2:I[176430,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"default"]
4:I[897367,["/_next/static/chunks/d96012bcfc98706a.js","/_next/static/chunks/c1216787d4b31b65.js"],"OutletBoundary"]
5:"$Sreact.suspense"
3:T4f5,"use client";

import { motion } from "framer-motion";
import { Info } from "lucide-react";

type FloatingInfoPanelProps = {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
};

export function FloatingInfoPanel({
  title = "Info Panel",
  description = "This is a floating information panel that gently drifts",
  icon,
}: FloatingInfoPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: [0, 1, 1, 0],
        y: [20, 0, -10, -20],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatDelay: 2,
        ease: "easeInOut",
      }}
      className="relative rounded-lg border border-border bg-card p-4 shadow-lg"
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          {icon || (
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Info className="h-4 w-4" />
            </div>
          )}
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-semibold">{title}</h4>
          <p className="mt-1 text-xs text-muted-foreground">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
0:{"buildId":"bFBIq5AO28jMw9-shWxSc","rsc":["$","$1","c",{"children":[["$","$L2",null,{"code":"$3","variantCodes":{},"baseId":"floating-info-panel"}],[["$","script","script-0",{"src":"/_next/static/chunks/caa50e77cf52fdaa.js","async":true}],["$","script","script-1",{"src":"/_next/static/chunks/e0bc9c3a4105a6fe.js","async":true}],["$","script","script-2",{"src":"/_next/static/chunks/48913bc585f72fa4.js","async":true}]],["$","$L4",null,{"children":["$","$5",null,{"name":"Next.MetadataOutlet","children":"$@6"}]}]]}],"loading":null,"isPartial":false}
6:null
