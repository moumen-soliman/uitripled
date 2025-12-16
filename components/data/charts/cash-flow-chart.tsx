"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";

type ChartView = "monthly" | "yearly";

interface CashFlowDatum {
  label: string;
  shortLabel: string;
  value: number;
  cashflow: number;
  inflow: number;
  dateRange: string;
}

const monthlyData: CashFlowDatum[] = [
  {
    label: "January 2026",
    shortLabel: "Jan",
    value: 35000,
    cashflow: 35000,
    inflow: 12000,
    dateRange: "January 2026",
  },
  {
    label: "February 2026",
    shortLabel: "Feb",
    value: 28000,
    cashflow: 28000,
    inflow: 9500,
    dateRange: "February 2026",
  },
  {
    label: "March 2026",
    shortLabel: "Mar",
    value: 52000,
    cashflow: 52000,
    inflow: 14200,
    dateRange: "March 2026",
  },
  {
    label: "April 2026",
    shortLabel: "Apr",
    value: 31000,
    cashflow: 31000,
    inflow: 10100,
    dateRange: "April 2026",
  },
  {
    label: "May 2026",
    shortLabel: "May",
    value: 38000,
    cashflow: 38000,
    inflow: 11800,
    dateRange: "May 2026",
  },
  {
    label: "June 2026",
    shortLabel: "Jun",
    value: 22000,
    cashflow: 22000,
    inflow: 8200,
    dateRange: "June 2026",
  },
  {
    label: "July 2026",
    shortLabel: "Jul",
    value: 33000,
    cashflow: 33000,
    inflow: 9600,
    dateRange: "July 2026",
  },
];

const yearlyData: CashFlowDatum[] = [
  {
    label: "2020",
    shortLabel: "2020",
    value: 265000,
    cashflow: 265000,
    inflow: 62000,
    dateRange: "Fiscal Year 2020",
  },
  {
    label: "2021",
    shortLabel: "2021",
    value: 302000,
    cashflow: 302000,
    inflow: 78500,
    dateRange: "Fiscal Year 2021",
  },
  {
    label: "2022",
    shortLabel: "2022",
    value: 358000,
    cashflow: 358000,
    inflow: 91200,
    dateRange: "Fiscal Year 2022",
  },
  {
    label: "2023",
    shortLabel: "2023",
    value: 402000,
    cashflow: 402000,
    inflow: 103500,
    dateRange: "Fiscal Year 2023",
  },
  {
    label: "2024",
    shortLabel: "2024",
    value: 446000,
    cashflow: 446000,
    inflow: 118000,
    dateRange: "Fiscal Year 2024",
  },
  {
    label: "2025",
    shortLabel: "2025",
    value: 489000,
    cashflow: 489000,
    inflow: 124300,
    dateRange: "Fiscal Year 2025 (projected)",
  },
];

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

export function CashFlowChart() {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);
  const [activeView, setActiveView] = useState<ChartView>("yearly");
  const prefersReducedMotion = useReducedMotion();

  const displayData = useMemo(
    () => (activeView === "monthly" ? monthlyData : yearlyData),
    [activeView]
  );

  const maxValue = useMemo(
    () => Math.max(...displayData.map((d) => d.value)),
    [displayData]
  );

  const summaryText = useMemo(() => {
    if (!displayData.length) {
      return "No cash flow data available.";
    }

    const highest = displayData.reduce((prev, current) =>
      current.value > prev.value ? current : prev
    );
    const lowest = displayData.reduce((prev, current) =>
      current.value < prev.value ? current : prev
    );
    const first = displayData[0];
    const last = displayData[displayData.length - 1];

    if (activeView === "monthly") {
      return `Monthly cash flow from ${first.label} to ${last.label}. Highest cash flow in ${highest.label} at ${formatCurrency(
        highest.value
      )}. Lowest in ${lowest.label} at ${formatCurrency(lowest.value)}.`;
    }

    return `Yearly cash flow from ${first.label} to ${last.label}. Highest cash flow in ${highest.label} at ${formatCurrency(
      highest.value
    )}. Lowest in ${lowest.label} at ${formatCurrency(lowest.value)}.`;
  }, [activeView, displayData]);

  const chartTitleId = "cashflow-chart-title";
  const chartSummaryId = "cashflow-chart-summary";

  const handleViewChange = (view: ChartView) => {
    setActiveView(view);
    setHoveredBar(null);
  };

  const shouldAnimate = !prefersReducedMotion;

  return (
    <motion.section
      initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={shouldAnimate ? { duration: 0.5 } : { duration: 0 }}
      className="w-full bg-card rounded-3xl p-8 hover:shadow-2xl backdrop-blur-sm border border-border"
      aria-labelledby={chartTitleId}
      aria-describedby={chartSummaryId}
      role="group"
    >
      <div className="grid grid-cols-1 md:flex items-start justify-between mb-8 gap-6">
        <div>
          <p
            className="text-muted-foreground text-lg mb-2"
            id="cashflow-chart-label"
          >
            Cash Flow
          </p>
          <motion.h2
            id={chartTitleId}
            initial={shouldAnimate ? { scale: 0.95 } : { scale: 1 }}
            animate={{ scale: 1 }}
            transition={shouldAnimate ? { duration: 0.4 } : { duration: 0 }}
            className="text-5xl font-bold text-foreground"
          >
            {formatCurrency(
              displayData.reduce((total, datum) => total + datum.cashflow, 0)
            )}
          </motion.h2>
          <p id={chartSummaryId} className="sr-only" aria-live="polite">
            {summaryText}
          </p>
        </div>

        <div
          className="flex bg-secondary rounded-full p-1 w-fit"
          role="radiogroup"
          aria-label="Chart view"
        >
          <button
            type="button"
            onClick={() => handleViewChange("monthly")}
            className={cn(
              "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary",
              activeView === "monthly"
                ? "bg-primary text-primary-foreground shadow-lg"
                : "text-foreground hover:text-primary"
            )}
            aria-pressed={activeView === "monthly"}
            aria-controls="cashflow-chart-bars"
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => handleViewChange("yearly")}
            className={cn(
              "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary",
              activeView === "yearly"
                ? "bg-primary text-primary-foreground shadow-lg"
                : "text-foreground hover:text-primary"
            )}
            aria-pressed={activeView === "yearly"}
            aria-controls="cashflow-chart-bars"
          >
            <span className="sr-only">Currently selected:&nbsp;</span>
            Yearly
          </button>
        </div>
      </div>

      <figure
        className="relative h-auto overflow-x-auto md:overflow-x-visible overflow-y-hidden md:overflow-y-visible pt-10 md:pt-0"
        aria-labelledby={chartTitleId}
      >
        <figcaption className="sr-only">
          Bar chart comparing cash flow performance by period. Use the Monthly
          or Yearly toggle to change the data set.
        </figcaption>

        <div className="relative min-w-[640px] md:min-w-0 h-[24rem]">
          <div
            className="absolute left-0 top-0 bottom-12 flex flex-col justify-between text-sm text-muted-foreground"
            aria-hidden="true"
          >
            {[50, 40, 30, 20, 10, 0].map((value) => (
              <div key={value}>{value}k</div>
            ))}
          </div>

          <div
            id="cashflow-chart-bars"
            className="absolute left-16 right-0 top-0 bottom-12 flex items-end justify-between gap-4"
            role="list"
            aria-describedby={chartSummaryId}
          >
            {displayData.map((data, index) => {
              const heightPercentage = maxValue
                ? Math.max((data.value / maxValue) * 100, 4)
                : 0;
              // Keep tooltip inside the chart area so it doesn't get clipped
              const tooltipBase = Math.min(heightPercentage + 8, 88);
              const tooltipVisible = hoveredBar === index;
              const tooltipPosition = `${tooltipBase}%`;

              return (
                <div
                  key={`${data.shortLabel}-${data.label}`}
                  className="relative flex-1 flex flex-col items-center justify-end h-full"
                  onMouseEnter={() => setHoveredBar(index)}
                  onMouseLeave={() => setHoveredBar(null)}
                  role="listitem"
                >
                  <AnimatePresence>
                    {tooltipVisible && (
                      <motion.div
                        initial={
                          shouldAnimate
                            ? { opacity: 0, y: 10, scale: 0.95 }
                            : { opacity: 1, y: 0, scale: 1 }
                        }
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={
                          shouldAnimate
                            ? { opacity: 0, y: 10, scale: 0.95 }
                            : { opacity: 0, y: 10, scale: 0.95 }
                        }
                        transition={
                          shouldAnimate ? { duration: 0.2 } : { duration: 0 }
                        }
                        className="absolute mx-auto bg-popover rounded-2xl p-4 shadow-xl border border-border min-w-[200px] z-10 text-left"
                        role="status"
                        aria-live="polite"
                        style={{ bottom: tooltipPosition }}
                      >
                        <div className="text-xs text-muted-foreground mb-2">
                          {data.dateRange}
                        </div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-foreground">
                            Cash flow
                          </span>
                          <span className="text-sm font-semibold text-foreground">
                            {formatCurrency(data.cashflow)}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-foreground">
                            Inflow
                          </span>
                          <span className="text-sm font-semibold text-foreground">
                            {formatCurrency(data.inflow)}
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.button
                    type="button"
                    initial={shouldAnimate ? { height: 0 } : false}
                    animate={{ height: `${heightPercentage}%` }}
                    transition={
                      shouldAnimate
                        ? {
                            duration: 0.8,
                            delay: index * 0.08,
                            ease: "easeOut",
                          }
                        : { duration: 0 }
                    }
                    onFocus={() => setHoveredBar(index)}
                    onBlur={() => setHoveredBar(null)}
                    className={`w-full rounded-t-2xl relative overflow-hidden cursor-pointer transition-colors duration-300 min-h-[0.5rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${tooltipVisible ? "bg-gradient-to-b from-primary to-primary/20" : "bg-primary/30"}
                    `}
                    aria-label={`${data.label} cash flow ${formatCurrency(
                      data.cashflow
                    )} with ${formatCurrency(data.inflow)} in inflow`}
                    aria-describedby={`${data.shortLabel}-summary`}
                  >
                    <span id={`${data.shortLabel}-summary`} className="sr-only">
                      {`${data.label}: cash flow ${formatCurrency(
                        data.cashflow
                      )}, inflow ${formatCurrency(data.inflow)}`}
                    </span>
                  </motion.button>

                  <div
                    className="text-sm text-muted-foreground mt-3"
                    aria-hidden="true"
                  >
                    {data.shortLabel}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <table className="sr-only">
          <caption>
            Tabular representation of the cash flow data for assistive
            technologies.
          </caption>
          <thead>
            <tr>
              <th scope="col">Period</th>
              <th scope="col">Cash flow</th>
              <th scope="col">Inflow</th>
            </tr>
          </thead>
          <tbody>
            {displayData.map((datum) => (
              <tr key={`table-${datum.label}`}>
                <th scope="row">{datum.label}</th>
                <td>{formatCurrency(datum.cashflow)}</td>
                <td>{formatCurrency(datum.inflow)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </figure>
    </motion.section>
  );
}
