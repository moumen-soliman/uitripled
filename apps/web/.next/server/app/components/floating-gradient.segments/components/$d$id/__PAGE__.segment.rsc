1:"$Sreact.fragment"
2:I[176430,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"default"]
4:I[897367,["/_next/static/chunks/d96012bcfc98706a.js","/_next/static/chunks/c1216787d4b31b65.js"],"OutletBoundary"]
5:"$Sreact.suspense"
3:T6fa,"use client";

import { motion } from "framer-motion";

export function FloatingGradient() {
  return (
    <div className="relative h-96 w-full overflow-hidden rounded-2xl border  bg-[var(--card-bg)]">
      <motion.div
        className="absolute h-96 w-96 rounded-full bg-gradient-to-r from-blue-500 to-slate-500 opacity-20 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "10%", left: "10%" }}
      />
      <motion.div
        className="absolute h-96 w-96 rounded-full bg-gradient-to-r from-pink-500 to-red-500 opacity-20 blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ bottom: "10%", right: "10%" }}
      />
      <motion.div
        className="absolute h-96 w-96 rounded-full bg-gradient-to-r from-green-500 to-cyan-500 opacity-20 blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -100, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "50%", left: "50%" }}
      />
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Floating Gradient</h2>
          <p className="mt-2 text-[var(--foreground)]/70">
            Animated background effect
          </p>
        </div>
      </div>
    </div>
  );
}
0:{"buildId":"bFBIq5AO28jMw9-shWxSc","rsc":["$","$1","c",{"children":[["$","$L2",null,{"code":"$3","variantCodes":{},"baseId":"floating-gradient"}],[["$","script","script-0",{"src":"/_next/static/chunks/caa50e77cf52fdaa.js","async":true}],["$","script","script-1",{"src":"/_next/static/chunks/e0bc9c3a4105a6fe.js","async":true}],["$","script","script-2",{"src":"/_next/static/chunks/48913bc585f72fa4.js","async":true}]],["$","$L4",null,{"children":["$","$5",null,{"name":"Next.MetadataOutlet","children":"$@6"}]}]]}],"loading":null,"isPartial":false}
6:null
