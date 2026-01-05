"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, type Variants } from "framer-motion";
import {
  Activity,
  AlertCircle,
  CheckCircle2,
  Code2,
  Download,
  FileCode,
  FileImage,
  FileType,
  Layout,
  Lightbulb,
  Smartphone,
  Zap,
} from "lucide-react";

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

interface WebVitalCardProps {
  label: string;
  value: string | number;
  unit?: string;
  description: string;
  status: "good" | "needs-improvement" | "poor";
  icon: React.ReactNode;
}

interface ResourceItem {
  name: string;
  type: "js" | "css" | "image" | "font" | "other";
  size: string;
  time: string;
}

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

function PerformanceHeader() {
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
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Audit Complete
          </Badge>

          <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Web Performance
          </h1>
          <p className="max-w-2xl text-foreground/70">
            Real-time analysis of your application&apos;s Core Web Vitals,
            resource loading, and overall performance score.
          </p>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-border/40 bg-background/60 backdrop-blur hover:border-border/60 hover:bg-background/70"
          >
            <Download className="h-4 w-4" />
          </Button>
          <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
            Run Audit
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

function WebVitalCard({
  label,
  value,
  unit,
  description,
  status,
  icon,
}: WebVitalCardProps) {
  const statusColors = {
    good: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    "needs-improvement": "text-amber-500 bg-amber-500/10 border-amber-500/20",
    poor: "text-red-500 bg-red-500/10 border-red-500/20",
  };

  const StatusIcon =
    status === "good"
      ? CheckCircle2
      : status === "needs-improvement"
        ? AlertCircle
        : AlertCircle;

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl border border-border/40 bg-background/60 p-6 backdrop-blur transition-all hover:border-border/60 hover:shadow-lg"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10" />

      <div className="flex items-start justify-between mb-4">
        <div className="p-2 rounded-lg bg-background/50 border border-border/20 text-foreground/70">
          {icon}
        </div>
        <div
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${statusColors[status]}`}
        >
          <StatusIcon className="h-3.5 w-3.5" />
          <span className="capitalize">{status.replace("-", " ")}</span>
        </div>
      </div>

      <div className="space-y-1 mb-4">
        <h3 className="text-sm font-medium text-foreground/60">{label}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold text-foreground tracking-tight">
            {value}
          </span>
          {unit && (
            <span className="text-sm font-medium text-foreground/40">
              {unit}
            </span>
          )}
        </div>
      </div>

      <p className="text-xs text-foreground/50 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

function PerformanceScore() {
  const score = 92;
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <motion.div
      variants={itemVariants}
      className="relative overflow-hidden rounded-2xl border border-border/40 bg-background/60 p-8 backdrop-blur flex flex-col items-center justify-center text-center"
    >
      <div className="relative mb-6">
        {/* Background Circle */}
        <svg className="h-48 w-48 -rotate-90 transform">
          <circle
            cx="96"
            cy="96"
            r={radius}
            stroke="currentColor"
            strokeWidth="12"
            fill="transparent"
            className="text-muted/20"
          />
          {/* Progress Circle */}
          <motion.circle
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            cx="96"
            cy="96"
            r={radius}
            stroke="currentColor"
            strokeWidth="12"
            fill="transparent"
            strokeDasharray={circumference}
            strokeLinecap="round"
            className="text-emerald-500"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-5xl font-bold tracking-tighter text-foreground">
            {score}
          </span>
          <span className="text-sm font-medium uppercase tracking-widest text-foreground/40">
            Score
          </span>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-foreground mb-2">
        Excellent Performance
      </h3>
      <p className="text-sm text-foreground/60 max-w-[250px]">
        Your page is optimized and delivering a great user experience.
      </p>
    </motion.div>
  );
}

function ResourceBreakdown() {
  const resources: ResourceItem[] = [
    { name: "main-app.js", type: "js", size: "142 KB", time: "45ms" },
    { name: "styles.css", type: "css", size: "24 KB", time: "12ms" },
    { name: "hero-image.webp", type: "image", size: "86 KB", time: "120ms" },
    { name: "inter-font.woff2", type: "font", size: "32 KB", time: "25ms" },
    { name: "analytics.js", type: "js", size: "15 KB", time: "30ms" },
  ];

  const getIcon = (type: ResourceItem["type"]) => {
    switch (type) {
      case "js":
        return <FileCode className="h-4 w-4 text-yellow-500" />;
      case "css":
        return <FileType className="h-4 w-4 text-blue-500" />;
      case "image":
        return <FileImage className="h-4 w-4 text-purple-500" />;
      case "font":
        return <FileType className="h-4 w-4 text-red-500" />;
      default:
        return <FileCode className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      className="col-span-1 lg:col-span-2 overflow-hidden rounded-2xl border border-border/40 bg-background/60 p-6 backdrop-blur"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">
          Resource Breakdown
        </h3>
        <Badge variant="secondary" className="bg-background/50">
          5 Requests
        </Badge>
      </div>

      <div className="space-y-4">
        {resources.map((resource, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 rounded-lg border border-border/20 bg-background/30 hover:bg-background/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-background/50 border border-border/20">
                {getIcon(resource.type)}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">
                  {resource.name}
                </p>
                <p className="text-xs text-foreground/50 uppercase tracking-wider">
                  {resource.type}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-foreground">
                {resource.time}
              </p>
              <p className="text-xs text-foreground/50">{resource.size}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function PerformanceTips() {
  const tips = [
    {
      title: "Optimize LCP",
      icon: <Layout className="h-5 w-5" />,
      items: [
        "Use Next.js Image component for optimized image loading",
        "Implement lazy loading for images below the fold",
        "Minimize render-blocking resources (CSS/JS)",
        "Use modern image formats (WebP, AVIF)",
      ],
    },
    {
      title: "Improve FID/INP",
      icon: <Zap className="h-5 w-5" />,
      items: [
        "Break up long tasks with setTimeout or requestIdleCallback",
        "Use code splitting to reduce JavaScript bundle size",
        "Implement React.lazy() for component lazy loading",
        "Optimize event handlers and avoid heavy computations",
      ],
    },
    {
      title: "Reduce CLS",
      icon: <Smartphone className="h-5 w-5" />,
      items: [
        "Set explicit width and height on images and videos",
        "Reserve space for ads and embeds",
        "Avoid inserting content above existing content",
        "Use transform animations instead of layout changes",
      ],
    },
    {
      title: "Optimize Resources",
      icon: <Code2 className="h-5 w-5" />,
      items: [
        "Enable Brotli/Gzip compression",
        "Implement HTTP/2 or HTTP/3",
        "Use CDN for static assets",
        "Enable browser caching with proper headers",
      ],
    },
  ];

  return (
    <motion.div
      variants={itemVariants}
      className="overflow-hidden rounded-2xl border border-border/40 bg-background/60 p-6 backdrop-blur"
    >
      <div className="flex items-center gap-2 mb-6">
        <Lightbulb className="h-5 w-5 text-amber-500" />
        <h3 className="text-lg font-semibold text-foreground">
          Performance Optimization Tips
        </h3>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="space-y-3 p-4 rounded-lg border border-border/20 bg-background/30"
          >
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-md bg-primary/10 text-primary">
                {tip.icon}
              </div>
              <h4 className="font-semibold text-foreground">{tip.title}</h4>
            </div>
            <ul className="space-y-2">
              {tip.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-foreground/70"
                >
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export function WebPerformancePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Glassmorphism background blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-foreground/[0.035] blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-foreground/[0.025] blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/[0.02] blur-[150px]" />
      </div>

      <div className="relative px-6 py-8 lg:py-12">
        <div className="mx-auto max-w-7xl">
          <PerformanceHeader />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Web Vitals Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
              <WebVitalCard
                label="Largest Contentful Paint (LCP)"
                value="1.2"
                unit="s"
                description="Time it takes for the main content to load."
                status="good"
                icon={<Layout className="h-5 w-5" />}
              />
              <WebVitalCard
                label="First Input Delay (FID)"
                value="12"
                unit="ms"
                description="Time from first interaction to browser response."
                status="good"
                icon={<Zap className="h-5 w-5" />}
              />
              <WebVitalCard
                label="Cumulative Layout Shift (CLS)"
                value="0.04"
                description="Visual stability of the page layout."
                status="good"
                icon={<Layout className="h-5 w-5" />}
              />
              <WebVitalCard
                label="Interaction to Next Paint (INP)"
                value="180"
                unit="ms"
                description="Responsiveness to user interactions."
                status="needs-improvement"
                icon={<Activity className="h-5 w-5" />}
              />
            </div>

            {/* Detailed Stats Row */}
            <div className="grid gap-6 lg:grid-cols-3">
              <PerformanceScore />
              <ResourceBreakdown />
            </div>

            {/* Performance Tips */}
            <PerformanceTips />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
