"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  AlertCircle,
  AlertTriangle,
  CheckCircle,
  ChevronDown,
  Info,
  LucideIcon,
  X,
} from "lucide-react";
import { useCallback, useState } from "react";

type NotificationType = "success" | "error" | "warning" | "info";

type NotificationConfig = {
  title: string;
  message: string;
  description: string;
  action: {
    label: string;
    onClick: () => void;
  };
  icon: LucideIcon;
  toneClassName: string;
};

type ActiveNotification = {
  id: string;
  type: NotificationType;
};

const NOTIFICATION_CONFIGS: Record<NotificationType, NotificationConfig> = {
  success: {
    title: "Success",
    message: "Operation completed successfully",
    description:
      "Your changes have been saved to the database. All updates are now live.",
    action: {
      label: "View Details",
      onClick: () => console.log("View details"),
    },
    icon: CheckCircle,
    toneClassName: "text-green-500",
  },
  error: {
    title: "Error Occurred",
    message: "Something went wrong",
    description:
      "Failed to process your request. Please try again or contact support if the issue persists.",
    action: { label: "Retry", onClick: () => console.log("Retry") },
    icon: AlertCircle,
    toneClassName: "text-red-500",
  },
  warning: {
    title: "Warning",
    message: "Please review this action",
    description:
      "This action may have unintended consequences. Review the details before proceeding.",
    action: { label: "Learn More", onClick: () => console.log("Learn more") },
    icon: AlertTriangle,
    toneClassName: "text-yellow-500",
  },
  info: {
    title: "Information",
    message: "New feature available",
    description:
      "Check out our new notification system with expandable details. Click to see more information.",
    action: { label: "Explore", onClick: () => console.log("Explore") },
    icon: Info,
    toneClassName: "text-blue-500",
  },
};

const BUTTON_CONFIGS: Array<{ type: NotificationType; label: string }> = [
  { type: "success", label: "Success" },
  { type: "error", label: "Error" },
  { type: "warning", label: "Warning" },
  { type: "info", label: "Info" },
];

export function NotificationCenter() {
  const [notifications, setNotifications] = useState<ActiveNotification[]>([]);
  const prefersReducedMotion = useReducedMotion() ?? false;

  const addNotification = useCallback((type: NotificationType) => {
    const id = Math.random().toString(36).slice(2, 9);
    setNotifications((prev) => [...prev, { id, type }]);

    window.setTimeout(() => {
      setNotifications((prev) =>
        prev.filter((notification) => notification.id !== id)
      );
    }, 8000);
  }, []);

  const removeNotification = useCallback((id: string) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div
        aria-live="polite"
        role="status"
        className="pointer-events-none fixed left-0 right-0 top-0 z-50 p-4 sm:p-6"
      >
        <div className="pointer-events-auto mx-auto flex max-w-md flex-col gap-3">
          <AnimatePresence initial={false}>
            {notifications.map((notification) => {
              const config = NOTIFICATION_CONFIGS[notification.type];

              return (
                <NotificationBar
                  key={notification.id}
                  config={config}
                  type={notification.type}
                  notificationId={notification.id}
                  onDismiss={() => removeNotification(notification.id)}
                  prefersReducedMotion={prefersReducedMotion}
                />
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      <main className="flex min-h-screen items-center justify-center px-4">
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {BUTTON_CONFIGS.map(({ type, label }) => (
            <motion.button
              key={type}
              type="button"
              onClick={() => addNotification(type)}
              whileHover={{ scale: prefersReducedMotion ? 1 : 1.02 }}
              whileTap={{ scale: prefersReducedMotion ? 1 : 0.98 }}
              className="relative overflow-hidden rounded-2xl border border-border/50 bg-background/60 p-4 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:p-5"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-foreground/[0.04] via-transparent to-transparent" />
              <div className="relative flex flex-col items-center gap-3 text-center">
                <ButtonIcon type={type} />
                <span className="text-sm font-semibold text-foreground">
                  {label}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </main>
    </div>
  );
}

type NotificationBarProps = {
  config: NotificationConfig;
  type: NotificationType;
  notificationId: string;
  onDismiss: () => void;
  prefersReducedMotion: boolean;
};

function NotificationBar({
  config,
  type,
  notificationId,
  onDismiss,
  prefersReducedMotion,
}: NotificationBarProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const {
    action,
    description,
    icon: Icon,
    message,
    title,
    toneClassName,
  } = config;

  return (
    <motion.div
      role="listitem"
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: "easeOut" }}
    >
      <Card className="flex items-start gap-3 rounded-2xl border border-border/60 bg-background/30 p-4 backdrop-blur">
        <div
          aria-hidden="true"
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted/80",
            toneClassName
          )}
        >
          <Icon className="h-5 w-5" />
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-foreground">{title}</h3>
              <p className="text-sm text-foreground/80">{message}</p>
            </div>
            <motion.button
              type="button"
              onClick={() => setIsExpanded((prev) => !prev)}
              aria-expanded={isExpanded}
              aria-controls={`notification-details-${notificationId}`}
              whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}
              whileTap={{ scale: prefersReducedMotion ? 1 : 0.95 }}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border/60 bg-background/40 text-foreground/60 transition-colors hover:text-foreground"
            >
              <motion.span
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.2,
                  ease: "easeOut",
                }}
                className="flex"
              >
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </motion.span>
              <span className="sr-only">
                {isExpanded ? "Hide details" : "Show details"}
              </span>
            </motion.button>
          </div>
          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                key="details"
                id={`notification-details-${notificationId}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.25,
                  ease: "easeOut",
                }}
                className="overflow-hidden"
              >
                <div className="mt-2 space-y-3 border-t border-border/40 pt-3 text-sm text-foreground/70">
                  <p>{description}</p>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      type="button"
                      size="sm"
                      variant="outline"
                      onClick={action.onClick}
                      className="rounded-full text-xs"
                    >
                      {action.label}
                    </Button>
                    <Button
                      type="button"
                      size="sm"
                      variant="ghost"
                      className="rounded-full text-xs"
                      onClick={() => {
                        console.log("Remind me later");
                        onDismiss();
                      }}
                    >
                      Remind me later
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.button
          type="button"
          onClick={onDismiss}
          whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}
          whileTap={{ scale: prefersReducedMotion ? 1 : 0.95 }}
          className="rounded-full p-1 text-foreground/60 transition-colors hover:text-foreground"
          aria-label={`Dismiss ${type} notification`}
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </motion.button>
      </Card>
    </motion.div>
  );
}

type ButtonIconProps = {
  type: NotificationType;
};

function ButtonIcon({ type }: ButtonIconProps) {
  const Icon = NOTIFICATION_CONFIGS[type].icon;
  const prefersReducedMotion = useReducedMotion() ?? false;

  return (
    <motion.div
      aria-hidden="true"
      whileHover={{ scale: prefersReducedMotion ? 1 : 1.1 }}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-muted/60 text-foreground/70"
    >
      <Icon className="h-5 w-5" />
    </motion.div>
  );
}
