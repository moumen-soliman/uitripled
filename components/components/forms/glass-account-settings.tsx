"use client";

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
