"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, ChevronDown, LogOut } from "lucide-react";
import { useId, useMemo, useState } from "react";

type Account = {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  plan: "Free" | "Pro" | "Enterprise";
};

const accountOptions: Account[] = [
  {
    id: "nova-studio",
    name: "Nova Studio",
    email: "finance@tripled.work",
    avatarUrl:
      "https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtHnKrXgkK7FlZGQ2nWi4Jzv0TXU9DVkAd5yE1",
    plan: "Pro",
  },
  {
    id: "growth-lab",
    name: "Growth Lab",
    email: "ops@tripled.work",
    avatarUrl:
      "https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtIYuGoisEhfWHMxKLVXD5ouFcBtgk6enZS0OG",
    plan: "Enterprise",
  },
  {
    id: "personal-workspace",
    name: "Personal Workspace",
    email: "morgan@tripled.work",
    avatarUrl:
      "https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtqpB1uxNk0UapbrAxOtRg9jDGu8sZzWLf2VM1",
    plan: "Free",
  },
];

export function MultipleAccounts() {
  const shouldReduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState(accountOptions[0]?.id ?? "");
  const [isOpen, setIsOpen] = useState(false);
  const listboxId = useId();

  const activeAccount = useMemo(
    () =>
      accountOptions.find((account) => account.id === activeId) ??
      accountOptions[0],
    [activeId]
  );

  const statusMessage = activeAccount
    ? `${activeAccount.name} selected. Plan ${activeAccount.plan}.`
    : "No account selected.";

  return (
    <motion.section
      initial={
        shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
      }
      animate={{ opacity: 1, y: 0 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
      className="relative z-10 w-full rounded-2xl border border-border/60 bg-card/80 p-4 backdrop-blur-2xl"
    >
      <button
        type="button"
        className="group relative flex w-full items-center gap-3 rounded-2xl border border-transparent bg-surface/60 text-left text-sm text-foreground transition-colors duration-200 hover:bg-surface/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-haspopup="listbox"
        aria-controls={listboxId}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((previous) => !previous)}
      >
        <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-border/60 bg-surface">
          <img
            src={activeAccount?.avatarUrl}
            alt=""
            className="h-full w-full object-cover"
          />
        </span>
        <div className="flex flex-1 flex-col">
          <span className="text-sm font-medium text-foreground">
            {activeAccount?.name}
          </span>
          <span className="text-xs text-[var(--muted-foreground)]">
            {activeAccount?.email}
          </span>
        </div>
        <motion.span
          aria-hidden
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-white/5 text-[var(--muted-foreground)]"
          animate={
            shouldReduceMotion ? undefined : { rotate: isOpen ? 180 : 0 }
          }
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={listboxId}
            role="listbox"
            aria-activedescendant={`${listboxId}-${activeId}`}
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : -4,
              scale: shouldReduceMotion ? 1 : 0.98,
            }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : -6,
              scale: shouldReduceMotion ? 1 : 0.97,
            }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute inset-x-0 top-[calc(100%+0.75rem)] z-50 space-y-2 rounded-2xl border border-border/70 bg-card/95 p-3 shadow-[0_28px_90px_-35px_rgba(15,23,42,0.65)] backdrop-blur-xl"
          >
            {accountOptions.map((account, index) => (
              <motion.button
                key={account.id}
                id={`${listboxId}-${account.id}`}
                type="button"
                role="option"
                aria-selected={account.id === activeId}
                className="flex w-full items-center gap-3 rounded-xl border border-transparent bg-white/5 px-3 py-3 text-left text-sm text-foreground transition-colors duration-200 hover:border-border hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                onClick={() => {
                  setActiveId(account.id);
                  setIsOpen(false);
                }}
                initial={{
                  opacity: shouldReduceMotion ? 1 : 0,
                  x: shouldReduceMotion ? 0 : -8,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { delay: 0.04 * index, duration: 0.24, ease: "easeOut" }
                }
              >
                <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border border-border/60 bg-surface">
                  <img
                    src={account.avatarUrl}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </span>
                <div className="flex flex-1 flex-col">
                  <span className="text-sm font-medium text-foreground">
                    {account.name}
                  </span>
                  <span className="text-xs text-[var(--muted-foreground)]">
                    {account.email}
                  </span>
                </div>
                <span className="text-xs font-medium text-primary">
                  {account.plan}
                </span>
                {account.id === activeId && (
                  <motion.span
                    layoutId="multiple-accounts-active-indicator"
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/60 bg-primary/20 text-primary"
                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  >
                    <Check className="h-4 w-4" aria-hidden />
                  </motion.span>
                )}
              </motion.button>
            ))}

            <div className="flex items-center justify-between rounded-xl border border-border/60 bg-white/[0.04] px-3 py-3 text-sm text-[var(--muted-foreground)]">
              <div className="flex items-center gap-2">
                <LogOut className="h-4 w-4" aria-hidden />
                <span>Manage accounts</span>
              </div>
              <button
                type="button"
                className="rounded-full border border-border/60 px-3 py-1 text-xs text-foreground transition-colors duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
              >
                Settings
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <span className="sr-only" role="status" aria-live="polite">
        {statusMessage}
      </span>
    </motion.section>
  );
}
