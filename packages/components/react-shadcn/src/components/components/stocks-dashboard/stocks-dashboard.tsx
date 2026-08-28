"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  BarChart3,
  Building2,
  ChevronRight,
  DollarSign,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

interface Stock {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  marketCap: string;
  sector: string;
  peRatio: number;
}

const mockStocks: Stock[] = [
  {
    id: "1",
    symbol: "AAPL",
    name: "Apple Inc.",
    price: 178.23,
    change: 2.45,
    changePercent: 1.39,
    volume: 45234567,
    marketCap: "2.8T",
    sector: "Technology",
    peRatio: 31.2,
  },
  {
    id: "2",
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    price: 142.56,
    change: -1.23,
    changePercent: -0.85,
    volume: 28345123,
    marketCap: "1.8T",
    sector: "Technology",
    peRatio: 24.8,
  },
  {
    id: "3",
    symbol: "MSFT",
    name: "Microsoft Corporation",
    price: 378.91,
    change: 5.67,
    changePercent: 1.52,
    volume: 19234567,
    marketCap: "2.9T",
    sector: "Technology",
    peRatio: 35.4,
  },
  {
    id: "4",
    symbol: "TSLA",
    name: "Tesla, Inc.",
    price: 248.42,
    change: -3.21,
    changePercent: -1.28,
    volume: 78234567,
    marketCap: "790B",
    sector: "Automotive",
    peRatio: 62.5,
  },
  {
    id: "5",
    symbol: "AMZN",
    name: "Amazon.com Inc.",
    price: 148.76,
    change: 1.89,
    changePercent: 1.29,
    volume: 45234567,
    marketCap: "1.5T",
    sector: "E-commerce",
    peRatio: 48.3,
  },
];

function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toString();
}

/**
 * Gain/loss needs a pair that clears 4.5:1 on the card surface in both themes.
 * `text-green-500` measured 2.22:1 and `text-red-500` 3.81:1 on white, which is
 * below AA for the most important numbers in the component.
 */
const trendText = (v: number) =>
  v >= 0
    ? "text-emerald-700 dark:text-emerald-400"
    : "text-red-700 dark:text-red-400";

const signed = (v: number, digits = 2) =>
  `${v >= 0 ? "+" : "-"}$${Math.abs(v).toFixed(digits)}`;

function StatusSection({ reduce }: { reduce: boolean | null }) {
  const totalValue = mockStocks.reduce(
    (sum, stock) => sum + stock.price * 100,
    0
  );
  const totalChange = mockStocks.reduce(
    (sum, stock) => sum + stock.change * 100,
    0
  );
  const totalChangePercent = (totalChange / (totalValue - totalChange)) * 100;

  const cards = [
    {
      label: "Total portfolio value",
      icon: DollarSign,
      value: `$${totalValue.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`,
      note: "Based on current prices",
      tone: "",
    },
    {
      label: "Today's change",
      icon: totalChange >= 0 ? TrendingUp : TrendingDown,
      value: `${signed(totalChange)}`,
      note: `${totalChangePercent >= 0 ? "+" : ""}${totalChangePercent.toFixed(2)}%`,
      tone: trendText(totalChange),
    },
    {
      label: "Active positions",
      icon: BarChart3,
      value: String(mockStocks.length),
      note: "Stocks in portfolio",
      tone: "",
    },
  ];

  return (
    <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={card.label}
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reduce ? { duration: 0 } : { duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xs font-medium text-muted-foreground sm:text-sm">
                  {card.label}
                </CardTitle>
                <Icon className={`size-4 ${card.tone || "text-muted-foreground"}`} aria-hidden />
              </CardHeader>
              <CardContent>
                <div className={`text-xl font-bold tabular-nums sm:text-2xl ${card.tone}`}>
                  {card.value}
                </div>
                <p className={`mt-1 text-xs tabular-nums ${card.tone || "text-muted-foreground"}`}>
                  {card.note}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}

/**
 * Six bordered cards for six key/value pairs buried the numbers in chrome.
 * A definition list groups them with space instead, so the price and change
 * lead and the rest read as supporting detail.
 */
function StockDetails({
  stock,
  isOpen,
  onClose,
}: {
  stock: Stock | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-lg">
        {stock && (
          <>
            <DialogHeader>
              <div className="flex items-center gap-3">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground">
                  <Building2 className="size-5" strokeWidth={1.5} aria-hidden />
                </div>
                <div className="min-w-0 text-left">
                  <DialogTitle className="text-xl">{stock.symbol}</DialogTitle>
                  <DialogDescription className="truncate">
                    {stock.name}
                  </DialogDescription>
                </div>
              </div>
            </DialogHeader>

            {/* Headline figures */}
            <div className="mt-2 flex items-baseline gap-3">
              <span className="text-3xl font-bold tabular-nums">
                ${stock.price.toFixed(2)}
              </span>
              <span
                className={`flex items-center gap-1 text-sm font-medium tabular-nums ${trendText(stock.change)}`}
              >
                {stock.change >= 0 ? (
                  <TrendingUp className="size-4" aria-hidden />
                ) : (
                  <TrendingDown className="size-4" aria-hidden />
                )}
                {signed(stock.change)} ({stock.change >= 0 ? "+" : ""}
                {stock.changePercent.toFixed(2)}%)
              </span>
            </div>

            <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-border pt-6">
              <div>
                <dt className="text-xs text-muted-foreground">Market cap</dt>
                <dd className="mt-0.5 text-base font-semibold tabular-nums">
                  ${stock.marketCap}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">Volume</dt>
                <dd className="mt-0.5 text-base font-semibold tabular-nums">
                  {formatNumber(stock.volume)}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">P/E ratio</dt>
                <dd className="mt-0.5 text-base font-semibold tabular-nums">
                  {stock.peRatio}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">Sector</dt>
                <dd className="mt-0.5">
                  <Badge variant="outline">{stock.sector}</Badge>
                </dd>
              </div>
            </dl>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

function DataTable({
  onRowClick,
  reduce,
}: {
  onRowClick: (stock: Stock) => void;
  reduce: boolean | null;
}) {
  const th =
    "py-3 px-3 sm:px-4 text-xs sm:text-sm font-medium text-muted-foreground whitespace-nowrap";

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
          <Activity className="size-5" aria-hidden />
          Stock holdings
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 sm:p-6">
        {/* Focusable so the horizontal scroll is reachable without a pointer */}
        <div
          role="region"
          aria-label="Stock holdings table"
          tabIndex={0}
          className="overflow-x-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
        >
          <table className="w-full min-w-[720px] border-collapse">
            <caption className="sr-only">
              Your holdings, with price, daily change and key figures. Each row
              has a button that opens full details.
            </caption>
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className={`${th} text-left`}>Symbol</th>
                <th scope="col" className={`${th} text-left`}>Name</th>
                <th scope="col" className={`${th} text-right`}>Price</th>
                <th scope="col" className={`${th} text-right`}>Change</th>
                <th scope="col" className={`${th} hidden text-right md:table-cell`}>Volume</th>
                <th scope="col" className={`${th} hidden text-right lg:table-cell`}>Market cap</th>
                <th scope="col" className={`${th} hidden text-right lg:table-cell`}>Sector</th>
                <th scope="col" className={`${th} text-right`}>
                  <span className="sr-only">Details</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {mockStocks.map((stock, index) => (
                <motion.tr
                  key={stock.id}
                  initial={reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={reduce ? { duration: 0 } : { duration: 0.3, delay: index * 0.05 }}
                  className="border-b border-border transition-colors last:border-b-0 hover:bg-muted/50 motion-reduce:transition-none"
                >
                  <th scope="row" className="px-3 py-3 text-left sm:px-4">
                    <span className="text-sm font-semibold sm:text-base">
                      {stock.symbol}
                    </span>
                  </th>
                  <td className="px-3 py-3 sm:px-4">
                    <div className="max-w-[140px] truncate text-xs text-muted-foreground sm:max-w-none sm:text-sm">
                      {stock.name}
                    </div>
                  </td>
                  <td className="px-3 py-3 text-right text-sm font-semibold tabular-nums sm:px-4 sm:text-base">
                    ${stock.price.toFixed(2)}
                  </td>
                  <td className="px-3 py-3 text-right sm:px-4">
                    <div
                      className={`flex items-center justify-end gap-1 text-sm font-semibold tabular-nums sm:text-base ${trendText(stock.change)}`}
                    >
                      {stock.change >= 0 ? (
                        <TrendingUp className="size-3 shrink-0" aria-hidden />
                      ) : (
                        <TrendingDown className="size-3 shrink-0" aria-hidden />
                      )}
                      <span className="whitespace-nowrap">
                        {signed(stock.change)}
                      </span>
                    </div>
                    <div className={`text-xs tabular-nums ${trendText(stock.change)}`}>
                      {stock.changePercent >= 0 ? "+" : ""}
                      {stock.changePercent.toFixed(2)}%
                    </div>
                  </td>
                  <td className="hidden px-3 py-3 text-right text-xs tabular-nums sm:px-4 sm:text-sm md:table-cell">
                    {formatNumber(stock.volume)}
                  </td>
                  <td className="hidden px-3 py-3 text-right text-xs tabular-nums sm:px-4 sm:text-sm lg:table-cell">
                    ${stock.marketCap}
                  </td>
                  <td className="hidden px-3 py-3 text-right sm:px-4 lg:table-cell">
                    <Badge variant="outline" className="text-xs">
                      {stock.sector}
                    </Badge>
                  </td>
                  <td className="px-3 py-3 text-right sm:px-4">
                    {/*
                      The row used to carry the only onClick, with no tabindex
                      and no key handler, so the detail dialog could not be
                      opened without a pointer. A real button restores that path
                      and keeps the table semantics intact.
                    */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-8"
                      onClick={() => onRowClick(stock)}
                      aria-label={`View details for ${stock.name}`}
                    >
                      <ChevronRight className="size-4" aria-hidden />
                    </Button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}

export function StocksDashboard() {
  const [selectedStock, setSelectedStock] = useState<Stock | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleRowClick = (stock: Stock) => {
    setSelectedStock(stock);
    setIsDetailsOpen(true);
  };

  return (
    <div className="w-full px-3 py-4 sm:px-4 sm:py-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : undefined}
          className="mb-6 sm:mb-8"
        >
          <h2 className="mb-2 text-2xl font-bold tracking-tight sm:text-3xl">
            Stock portfolio dashboard
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Track your investments and monitor market performance.
          </p>
        </motion.div>

        <StatusSection reduce={shouldReduceMotion} />
        <DataTable onRowClick={handleRowClick} reduce={shouldReduceMotion} />
        <StockDetails
          stock={selectedStock}
          isOpen={isDetailsOpen}
          onClose={() => setIsDetailsOpen(false)}
        />
      </div>
    </div>
  );
}
