1:"$Sreact.fragment"
2:I[176430,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"default"]
8:I[897367,["/_next/static/chunks/d96012bcfc98706a.js","/_next/static/chunks/c1216787d4b31b65.js"],"OutletBoundary"]
9:"$Sreact.suspense"
3:T1d4b,"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";

const planFeatures = [
  "Unlimited projects",
  "Priority support",
  "Early access to labs",
];

export function GlassAccountSettingsCard() {
  const shouldReduceMotion = useReducedMotion();
  const [autoRenew, setAutoRenew] = useState(true);
  const [productUpdates, setProductUpdates] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        ease: shouldReduceMotion ? "linear" : [0.16, 1, 0.3, 1],
      }}
      className="group w-full max-w-4xl rounded-3xl overflow-hidden border border-border/60 bg-card/85 p-8 backdrop-blur-xl sm:p-12 relative"
      aria-labelledby="glass-account-title"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10"
      />
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.28em] text-muted-foreground">
            Create Account
          </div>
          <h1
            id="glass-account-title"
            className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl"
          >
            Manage your account settings and subscription
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Update personal details, control notifications, and manage your
            current plan in one place.
          </p>
        </div>
        <Badge className="rounded-full border border-border/60 bg-white/5 px-4 py-2 text-muted-foreground transition-colors duration-300 hover:border-primary/60 hover:bg-primary/15 hover:text-primary">
          Pro
        </Badge>
      </div>

      <div className="grid gap-8 lg:grid-cols-[2fr_3fr]">
        <div className="space-y-6">
          <div className="rounded-2xl border border-border/60 bg-background/45 p-6 backdrop-blur">
            <h2 className="text-sm font-medium text-foreground">Security</h2>
            <p className="mb-4 text-xs text-muted-foreground">
              Control how you access your account.
            </p>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="space-y-1">
                <Label className="text-sm font-medium text-foreground">
                  Email
                </Label>
                <p>alex.parker@example.com</p>
              </div>
              <div className="space-y-1">
                <Label className="text-sm font-medium text-foreground">
                  Two-factor authentication
                </Label>
                <Button
                  variant="outline"
                  className="rounded-full border-border/60 px-4 py-2 text-xs"
                >
                  Manage 2FA
                </Button>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border/60 bg-background/45 p-6 backdrop-blur">
            <h2 className="text-sm font-medium text-foreground">
              Notifications
            </h2>
            <p className="mb-4 text-xs text-muted-foreground">
              Decide what updates reach your inbox.
            </p>
            <div className="space-y-4 text-sm text-muted-foreground">
              <label className="flex items-center justify-between gap-3">
                Auto-renew subscription
                <Switch checked={autoRenew} onCheckedChange={setAutoRenew} />
              </label>
              <label className="flex items-center justify-between gap-3">
                Product update emails
                <Switch
                  checked={productUpdates}
                  onCheckedChange={setProductUpdates}
                />
              </label>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-border/60 bg-background/45 p-6 backdrop-blur">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-sm font-medium text-foreground">
                  Current plan
                </h2>
                <p className="text-xs text-muted-foreground">
                  Workspace Pro - billed yearly
                </p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-semibold text-foreground">
                  $24
                </span>
                <p className="text-xs text-muted-foreground">
                  per user / month
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-3 text-sm text-muted-foreground">
              {planFeatures.map((feature) => (
                <p key={feature} className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-border/60 bg-primary/10 text-primary">
                    <Check className="h-3 w-3" aria-hidden />
                  </span>
                  {feature}
                </p>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                type="button"
                variant="outline"
                className="flex-1 rounded-full border-border/60 bg-white/5 px-6 py-3 text-sm text-muted-foreground hover:text-primary"
              >
                Cancel subscription
              </Button>
              <Button
                type="button"
                className="flex-1 rounded-full bg-primary px-6 py-3 text-primary-foreground shadow-[0_20px_60px_-30px_rgba(79,70,229,0.75)] transition-transform duration-300 hover:-translate-y-1"
              >
                Manage plan
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-border/60 bg-background/45 p-6 backdrop-blur">
            <h2 className="text-sm font-medium text-foreground">Billing</h2>
            <p className="mb-4 text-xs text-muted-foreground">
              Download invoices or update payment details.
            </p>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row">
              <Button
                variant="outline"
                className="flex-1 rounded-full border-border/60 px-6 py-3 text-sm text-muted-foreground hover:text-primary"
              >
                View invoices
              </Button>
              <Button
                variant="outline"
                className="flex-1 rounded-full border-border/60 px-6 py-3 text-sm text-muted-foreground hover:text-primary"
              >
                Update payment method
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
0:{"buildId":"bFBIq5AO28jMw9-shWxSc","rsc":["$","$1","c",{"children":[["$","$L2",null,{"code":"$3","variantCodes":{},"baseId":"glass-account-settings-card"}],["$L4","$L5","$L6"],"$L7"]}],"loading":null,"isPartial":false}
4:["$","script","script-0",{"src":"/_next/static/chunks/caa50e77cf52fdaa.js","async":true}]
5:["$","script","script-1",{"src":"/_next/static/chunks/e0bc9c3a4105a6fe.js","async":true}]
6:["$","script","script-2",{"src":"/_next/static/chunks/48913bc585f72fa4.js","async":true}]
7:["$","$L8",null,{"children":["$","$9",null,{"name":"Next.MetadataOutlet","children":"$@a"}]}]
a:null
