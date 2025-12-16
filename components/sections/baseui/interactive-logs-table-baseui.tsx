"use client";

import { Button } from "@base-ui/react/button";
import { Input } from "@base-ui/react/input";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Filter, Search } from "lucide-react";
import { useMemo, useState } from "react";

type LogLevel = "info" | "warning" | "error";

interface Log {
  id: string;
  timestamp: string;
  level: LogLevel;
  service: string;
  message: string;
  duration: string;
  status: string;
  tags: string[];
}

type Filters = {
  level: string[];
  service: string[];
  status: string[];
};

const SAMPLE_LOGS: Log[] = [
  {
    id: "1",
    timestamp: "2024-11-08T14:32:45Z",
    level: "info",
    service: "api-gateway",
    message: "Request processed successfully",
    duration: "245ms",
    status: "200",
    tags: ["api", "success"],
  },
  {
    id: "2",
    timestamp: "2024-11-08T14:32:42Z",
    level: "warning",
    service: "cache-service",
    message: "Cache miss ratio exceeds threshold",
    duration: "1.2s",
    status: "warning",
    tags: ["cache", "performance"],
  },
  {
    id: "3",
    timestamp: "2024-11-08T14:32:40Z",
    level: "error",
    service: "database",
    message: "Connection timeout to replica",
    duration: "5.1s",
    status: "503",
    tags: ["db", "error"],
  },
  {
    id: "4",
    timestamp: "2024-11-08T14:32:38Z",
    level: "info",
    service: "auth-service",
    message: "User session created",
    duration: "156ms",
    status: "201",
    tags: ["auth", "session"],
  },
  {
    id: "5",
    timestamp: "2024-11-08T14:32:35Z",
    level: "info",
    service: "api-gateway",
    message: "Webhook delivered",
    duration: "432ms",
    status: "200",
    tags: ["webhook", "integration"],
  },
  {
    id: "6",
    timestamp: "2024-11-08T14:32:32Z",
    level: "error",
    service: "payment-service",
    message: "Payment gateway unavailable",
    duration: "2.3s",
    status: "502",
    tags: ["payment", "error"],
  },
  {
    id: "7",
    timestamp: "2024-11-08T14:32:30Z",
    level: "info",
    service: "search-service",
    message: "Index updated",
    duration: "876ms",
    status: "200",
    tags: ["search", "index"],
  },
  {
    id: "8",
    timestamp: "2024-11-08T14:32:28Z",
    level: "warning",
    service: "api-gateway",
    message: "Rate limit approaching",
    duration: "145ms",
    status: "429",
    tags: ["rate-limit", "warning"],
  },
];

const levelStyles: Record<LogLevel, string> = {
  info: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  warning: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
  error: "bg-red-500/10 text-red-600 dark:text-red-400",
};

const statusStyles: Record<string, string> = {
  "200": "text-green-600 dark:text-green-400",
  "201": "text-green-600 dark:text-green-400",
  "429": "text-yellow-600 dark:text-yellow-400",
  "502": "text-red-600 dark:text-red-400",
  "503": "text-red-600 dark:text-red-400",
  warning: "text-yellow-600 dark:text-yellow-400",
};

function LogRow({
  log,
  expanded,
  onToggle,
}: {
  log: Log;
  expanded: boolean;
  onToggle: () => void;
}) {
  const formattedTime = new Date(log.timestamp).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <>
      <motion.button
        onClick={onToggle}
        className="w-full p-4 text-left transition-colors hover:bg-muted/50 active:bg-muted/70"
        whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
      >
        <div className="flex items-center gap-4">
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex-shrink-0"
          >
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </motion.div>

          <span
            className={`flex-shrink-0 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize ${levelStyles[log.level]}`}
          >
            {log.level}
          </span>

          <time className="w-20 flex-shrink-0 font-mono text-xs text-muted-foreground">
            {formattedTime}
          </time>

          <span className="min-w-max flex-shrink-0 text-sm font-medium text-foreground">
            {log.service}
          </span>

          <p className="flex-1 truncate text-sm text-muted-foreground">
            {log.message}
          </p>

          <span
            className={`flex-shrink-0 font-mono text-sm font-semibold ${
              statusStyles[log.status] ?? "text-muted-foreground"
            }`}
          >
            {log.status}
          </span>

          <span className="w-16 flex-shrink-0 text-right font-mono text-xs text-muted-foreground">
            {log.duration}
          </span>
        </div>
      </motion.button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-border bg-muted/50"
          >
            <div className="space-y-4 p-4">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Message
                </p>
                <p className="rounded bg-background p-3 font-mono text-sm text-foreground">
                  {log.message}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Duration
                  </p>
                  <p className="font-mono text-foreground">{log.duration}</p>
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Timestamp
                  </p>
                  <p className="font-mono text-xs text-foreground">
                    {log.timestamp}
                  </p>
                </div>
              </div>

              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Tags
                </p>
                <div className="flex flex-wrap gap-2">
                  {log.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-semibold text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function FilterPanel({
  filters,
  onChange,
  logs,
}: {
  filters: Filters;
  onChange: (filters: Filters) => void;
  logs: Log[];
}) {
  const levels = Array.from(new Set(logs.map((log) => log.level)));
  const services = Array.from(new Set(logs.map((log) => log.service)));
  const statuses = Array.from(new Set(logs.map((log) => log.status)));

  const toggleFilter = (category: keyof Filters, value: string) => {
    const current = filters[category];
    const updated = current.includes(value)
      ? current.filter((entry) => entry !== value)
      : [...current, value];

    onChange({
      ...filters,
      [category]: updated,
    });
  };

  const clearAll = () => {
    onChange({
      level: [],
      service: [],
      status: [],
    });
  };

  const hasActiveFilters = Object.values(filters).some(
    (group) => group.length > 0
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.05 }}
      className="flex h-full flex-col space-y-6 overflow-y-auto bg-card p-4"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">Filters</h3>
        {hasActiveFilters && (
          <Button
            onClick={clearAll}
            className="h-6 px-2 text-xs text-muted-foreground hover:text-foreground"
          >
            Clear
          </Button>
        )}
      </div>

      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Level
        </p>
        <div className="space-y-2">
          {levels.map((level) => {
            const selected = filters.level.includes(level);

            return (
              <motion.button
                key={level}
                type="button"
                whileHover={{ x: 2 }}
                onClick={() => toggleFilter("level", level)}
                aria-pressed={selected}
                className={`flex w-full items-center justify-between gap-2 rounded-md border px-3 py-2 text-sm transition-colors ${
                  selected
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:border-primary/40 hover:bg-muted/40"
                }`}
              >
                <span className="capitalize">{level}</span>
                {selected && <Check className="h-3.5 w-3.5" />}
              </motion.button>
            );
          })}
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Service
        </p>
        <div className="space-y-2">
          {services.map((service) => {
            const selected = filters.service.includes(service);

            return (
              <motion.button
                key={service}
                type="button"
                whileHover={{ x: 2 }}
                onClick={() => toggleFilter("service", service)}
                aria-pressed={selected}
                className={`flex w-full items-center justify-between gap-2 rounded-md border px-3 py-2 text-sm transition-colors ${
                  selected
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:border-primary/40 hover:bg-muted/40"
                }`}
              >
                <span>{service}</span>
                {selected && <Check className="h-3.5 w-3.5" />}
              </motion.button>
            );
          })}
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Status
        </p>
        <div className="space-y-2">
          {statuses.map((status) => {
            const selected = filters.status.includes(status);

            return (
              <motion.button
                key={status}
                type="button"
                whileHover={{ x: 2 }}
                onClick={() => toggleFilter("status", status)}
                aria-pressed={selected}
                className={`flex w-full items-center justify-between gap-2 rounded-md border px-3 py-2 text-sm transition-colors ${
                  selected
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:border-primary/40 hover:bg-muted/40"
                }`}
              >
                <span>{status}</span>
                {selected && <Check className="h-3.5 w-3.5" />}
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export function InteractiveLogsTableBaseui() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    level: [],
    service: [],
    status: [],
  });

  const filteredLogs = useMemo(() => {
    return SAMPLE_LOGS.filter((log) => {
      const lowerQuery = searchQuery.toLowerCase();

      const matchSearch =
        log.message.toLowerCase().includes(lowerQuery) ||
        log.service.toLowerCase().includes(lowerQuery);

      const matchLevel =
        filters.level.length === 0 || filters.level.includes(log.level);
      const matchService =
        filters.service.length === 0 || filters.service.includes(log.service);
      const matchStatus =
        filters.status.length === 0 || filters.status.includes(log.status);

      return matchSearch && matchLevel && matchService && matchStatus;
    });
  }, [filters, searchQuery]);

  const activeFilters =
    filters.level.length + filters.service.length + filters.status.length;

  return (
    <main className="h-screen w-full bg-background">
      <div className="flex h-full flex-col">
        <div className="border-b border-border bg-card p-6">
          <div className="space-y-4">
            <div>
              <h1 className="text-2xl font-semibold text-foreground">Logs</h1>
              <p className="text-sm text-muted-foreground">
                {filteredLogs.length} of {SAMPLE_LOGS.length} logs
              </p>
            </div>

            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search logs by message or service..."
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  className="h-9 w-full rounded-md border border-input bg-background pl-9 pr-3 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                />
              </div>
              <Button
                onClick={() => setShowFilters((current) => !current)}
                className={`relative inline-flex h-9 items-center justify-center rounded-md border px-3 text-sm font-medium transition-colors ${
                  showFilters
                    ? "border-transparent bg-primary text-primary-foreground"
                    : "border-input bg-background hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                <Filter className="h-4 w-4" />
                {activeFilters > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-destructive p-0 text-xs text-destructive-foreground">
                    {activeFilters}
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
          <AnimatePresence initial={false}>
            {showFilters && (
              <motion.div
                key="filters"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 280, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden border-r border-border"
              >
                <FilterPanel
                  filters={filters}
                  onChange={setFilters}
                  logs={SAMPLE_LOGS}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex-1 overflow-y-auto">
            <div className="divide-y divide-border">
              <AnimatePresence mode="popLayout">
                {filteredLogs.length > 0 ? (
                  filteredLogs.map((log, index) => (
                    <motion.div
                      key={log.id}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{
                        duration: 0.2,
                        delay: index * 0.02,
                      }}
                    >
                      <LogRow
                        log={log}
                        expanded={expandedId === log.id}
                        onToggle={() =>
                          setExpandedId((current) =>
                            current === log.id ? null : log.id
                          )
                        }
                      />
                    </motion.div>
                  ))
                ) : (
                  <motion.div
                    key="empty-state"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-12 text-center"
                  >
                    <p className="text-muted-foreground">
                      No logs match your filters.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
