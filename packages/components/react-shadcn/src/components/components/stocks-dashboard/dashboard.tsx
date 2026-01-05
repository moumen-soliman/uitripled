"use client";

import type React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, type Variants } from "framer-motion";
import {
  Activity,
  BarChart3,
  ChevronRight,
  Clock,
  DollarSign,
  Download,
  Menu,
  Percent,
  Settings,
  TrendingDown,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

interface MetricCardProps {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: React.ReactNode;
}

interface ChartCardProps {
  title: string;
  description: string;
  data: Array<{ name: string; value: number }>;
  dataKey: string;
  height?: number;
}

interface DetailItem {
  label: string;
  value: string;
  subtitle: string;
}

interface DetailedCardProps {
  title: string;
  items: DetailItem[];
}

// ============================================================================
// STATIC CHART DATA - EXTENSIVE DUMMY DATA FOR PROPER RENDERING
// ============================================================================

const USER_GROWTH_DATA = [
  { name: "Week 1", value: 2400 },
  { name: "Week 2", value: 3210 },
  { name: "Week 3", value: 2290 },
  { name: "Week 4", value: 2000 },
  { name: "Week 5", value: 2181 },
  { name: "Week 6", value: 2500 },
  { name: "Week 7", value: 2100 },
  { name: "Week 8", value: 2200 },
  { name: "Week 9", value: 2290 },
  { name: "Week 10", value: 2000 },
  { name: "Week 11", value: 2181 },
  { name: "Week 12", value: 2500 },
  { name: "Week 13", value: 2100 },
];

const REVENUE_TREND_DATA = [
  { name: "Week 1", value: 4000 },
  { name: "Week 2", value: 3000 },
  { name: "Week 3", value: 2000 },
  { name: "Week 4", value: 2780 },
  { name: "Week 5", value: 1890 },
  { name: "Week 6", value: 2390 },
  { name: "Week 7", value: 3490 },
  { name: "Week 8", value: 4000 },
  { name: "Week 9", value: 3500 },
  { name: "Week 10", value: 4200 },
  { name: "Week 11", value: 3800 },
  { name: "Week 12", value: 4500 },
  { name: "Week 13", value: 4100 },
];

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

// ============================================================================
// COMPONENTS
// ============================================================================

// Metric Card Component
function MetricCard({ label, value, change, trend, icon }: MetricCardProps) {
  const isPositive = trend === "up";
  const TrendIcon = isPositive ? TrendingUp : TrendingDown;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group relative overflow-hidden rounded-2xl border border-border/40 bg-background/60 p-6 backdrop-blur transition-all hover:border-border/60 hover:shadow-lg"
      role="article"
      aria-label={`${label}: ${value}, ${change} ${trend === "up" ? "increase" : "decrease"}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10" />

      <div className="relative space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl" aria-hidden="true">
            {icon}
          </div>
          <div
            className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full ${
              isPositive
                ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                : "bg-red-500/20 text-red-600 dark:text-red-400"
            }`}
            aria-live="polite"
            aria-label={`${change} ${trend === "up" ? "increase" : "decrease"}`}
          >
            <TrendIcon className="h-3 w-3" aria-hidden="true" />
            {change}
          </div>
        </div>

        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/40">
            {label}
          </p>
          <p className="text-2xl font-semibold tracking-tight text-foreground">
            {value}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// Chart Card Component
function ChartCard({
  title,
  description,
  data,
  dataKey,
  height = 300,
}: ChartCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group relative overflow-hidden rounded-2xl border border-border/40 bg-background/60 p-6 backdrop-blur transition-all hover:border-border/60 hover:shadow-lg"
      role="article"
      aria-label={`${title} chart: ${description}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10" />

      <div className="relative space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-foreground">
              {title}
            </h3>
            <p className="text-xs text-foreground/60">{description}</p>
          </div>
          <button
            className="text-foreground/40 hover:text-foreground/70 transition-colors p-2 hover:bg-background/50 rounded-lg"
            aria-label={`View details for ${title}`}
          >
            <TrendingUp className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        {/* Chart Container with proper sizing */}
        <div style={{ width: "100%", height: height }} className="relative">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 10, left: -25, bottom: 5 }}
            >
              <defs>
                <linearGradient
                  id={`colorGradient-${title}`}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor="var(--primary)"
                    stopOpacity={0.5}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--primary)"
                    stopOpacity={0.05}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="var(--border)"
                opacity={0.3}
                vertical={false}
              />
              <XAxis
                dataKey="name"
                stroke="var(--foreground)"
                opacity={0.6}
                style={{ fontSize: "11px" }}
              />
              <YAxis
                stroke="var(--foreground)"
                opacity={0.6}
                style={{ fontSize: "11px" }}
                width={35}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--background)",
                  opacity: 0.95,
                  border: `1px solid var(--border)`,
                  borderRadius: "8px",
                  backdropFilter: "blur(12px)",
                  padding: "8px 12px",
                }}
                labelStyle={{ color: "var(--foreground)" }}
                cursor={{ stroke: "var(--primary)", strokeOpacity: 0.2 }}
              />
              <Line
                type="natural"
                dataKey={dataKey}
                stroke="var(--primary)"
                strokeWidth={2.5}
                dot={false}
                activeDot={{ r: 6 }}
                fill={`url(#colorGradient-${title})`}
                isAnimationActive={true}
                animationDuration={800}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );
}

// Detailed Card Component
function DetailedCard({ title, items }: DetailedCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group relative overflow-hidden rounded-2xl border border-border/40 bg-background/60 p-6 backdrop-blur transition-all hover:border-border/60 hover:shadow-lg"
      role="article"
      aria-label={title}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10" />

      <div className="relative space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-foreground">
          {title}
        </h3>

        <div className="space-y-3" role="list" aria-label={`${title} list`}>
          {items.map((item, index) => (
            <motion.button
              key={`${item.label}-${index}`}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className="group/item w-full text-left"
              role="listitem"
              aria-label={`${item.label}: ${item.value} (${item.subtitle})`}
            >
              <div className="flex items-center justify-between rounded-lg border border-border/20 bg-background/40 p-3 transition-all hover:border-border/40 hover:bg-background/60">
                <div className="space-y-1 flex-1">
                  <p className="text-sm font-medium text-foreground">
                    {item.label}
                  </p>
                  <p className="text-xs text-foreground/60">{item.subtitle}</p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-foreground">
                    {item.value}
                  </p>
                  <ChevronRight
                    className="h-4 w-4 text-foreground/40 transition-transform group-hover/item:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Dashboard Navigation Component
function DashboardNav() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Overview", icon: BarChart3 },
    { label: "Activity", icon: Activity },
    { label: "Users", icon: Users },
    { label: "Analytics", icon: TrendingUp },
    { label: "History", icon: Clock },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="border-b border-border/40 bg-background/40 backdrop-blur-md"
      role="navigation"
      aria-label="Main dashboard navigation"
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold text-foreground tracking-tight">
            Dashboard
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-background/60 rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* Desktop nav */}
          <div
            className="hidden md:flex gap-1"
            role="menubar"
            aria-label="Navigation tabs"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.label}
                  variant="ghost"
                  size="sm"
                  className="gap-2 text-foreground/70 hover:text-foreground hover:bg-background/50 rounded-lg"
                  role="menuitem"
                  aria-current={item.label === "Overview" ? "page" : undefined}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  <span className="text-xs uppercase tracking-[0.1em]">
                    {item.label}
                  </span>
                </Button>
              );
            })}
          </div>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 flex flex-col gap-2 md:hidden"
            role="menu"
            aria-label="Mobile navigation menu"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.label}
                  variant="ghost"
                  size="sm"
                  className="justify-start gap-2 text-foreground/70 hover:text-foreground hover:bg-background/50"
                  role="menuitem"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  <span className="text-xs uppercase tracking-[0.1em]">
                    {item.label}
                  </span>
                </Button>
              );
            })}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

// Dashboard Header Component
function DashboardHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12 space-y-4"
    >
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div className="space-y-2">
          <Badge
            variant="outline"
            className="inline-flex items-center gap-2 rounded-full border-border/50 bg-background/55 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-foreground/70 backdrop-blur"
            aria-label="Dashboard status: Live"
          >
            <span
              className="h-2 w-2 rounded-full bg-emerald-500"
              aria-hidden="true"
            />
            Live Dashboard
          </Badge>

          <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Performance Overview
          </h1>
          <p className="max-w-2xl text-foreground/70">
            Monitor your application metrics, user activity, and system health
            in real-time with detailed insights and historical data trends.
          </p>
        </div>

        <div
          className="flex gap-2"
          role="toolbar"
          aria-label="Dashboard actions"
        >
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-border/40 bg-background/60 backdrop-blur hover:border-border/60 hover:bg-background/70"
            aria-label="Download report"
          >
            <Download className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-border/40 bg-background/60 backdrop-blur hover:border-border/60 hover:bg-background/70"
            aria-label="Dashboard settings"
          >
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

// Main Dashboard Grid
function DashboardGrid() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
      role="region"
      aria-label="Dashboard metrics and charts"
    >
      {/* Top KPI Row - Replaced emoji icons with lucide icons */}
      <motion.div
        variants={itemVariants}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        role="presentation"
      >
        <MetricCard
          label="Total Users"
          value="24,582"
          change="+12.5%"
          trend="up"
          icon={<Users className="h-6 w-6 text-primary" aria-hidden="true" />}
        />
        <MetricCard
          label="Active Sessions"
          value="8,924"
          change="+8.2%"
          trend="up"
          icon={<Zap className="h-6 w-6 text-primary" aria-hidden="true" />}
        />
        <MetricCard
          label="Conversion Rate"
          value="3.47%"
          change="-1.3%"
          trend="down"
          icon={<Percent className="h-6 w-6 text-primary" aria-hidden="true" />}
        />
        <MetricCard
          label="Revenue"
          value="$47,320"
          change="+24.8%"
          trend="up"
          icon={
            <DollarSign className="h-6 w-6 text-primary" aria-hidden="true" />
          }
        />
      </motion.div>

      {/* Charts Row */}
      <motion.div
        variants={itemVariants}
        className="grid gap-6 lg:grid-cols-2"
        role="presentation"
      >
        <ChartCard
          title="User Growth"
          description="Last 13 weeks activity"
          data={USER_GROWTH_DATA}
          dataKey="value"
          height={300}
        />
        <ChartCard
          title="Revenue Trend"
          description="Weekly revenue breakdown"
          data={REVENUE_TREND_DATA}
          dataKey="value"
          height={300}
        />
      </motion.div>

      {/* Detailed Cards Row */}
      <motion.div
        variants={itemVariants}
        className="grid gap-6 lg:grid-cols-3"
        role="presentation"
      >
        <DetailedCard
          title="Top Pages"
          items={[
            { label: "Home", value: "12,543", subtitle: "visits" },
            { label: "Dashboard", value: "8,324", subtitle: "visits" },
            { label: "Settings", value: "4,128", subtitle: "visits" },
          ]}
        />
        <DetailedCard
          title="Browser Usage"
          items={[
            { label: "Chrome", value: "68.5%", subtitle: "market share" },
            { label: "Safari", value: "18.2%", subtitle: "market share" },
            { label: "Firefox", value: "9.3%", subtitle: "market share" },
          ]}
        />
        <DetailedCard
          title="Recent Activity"
          items={[
            { label: "Login Spike", value: "Now", subtitle: "2.5k users" },
            { label: "Feature Update", value: "2h ago", subtitle: "deployed" },
            { label: "Bug Fix", value: "5h ago", subtitle: "resolved" },
          ]}
        />
      </motion.div>
    </motion.div>
  );
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export function DashboardPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Glassmorphism background blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-foreground/[0.035] blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-foreground/[0.025] blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/[0.02] blur-[150px]" />
      </div>

      {/* Navigation */}
      <DashboardNav />

      {/* Main Content */}
      <div className="relative px-6 py-8 lg:py-12">
        <div className="mx-auto max-w-7xl">
          <DashboardHeader />
          <DashboardGrid />
        </div>
      </div>
    </main>
  );
}
