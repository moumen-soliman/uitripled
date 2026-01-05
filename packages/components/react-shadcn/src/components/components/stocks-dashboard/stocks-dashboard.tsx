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
import { motion } from "framer-motion";
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

function StatusSection() {
  const totalValue = mockStocks.reduce(
    (sum, stock) => sum + stock.price * 100,
    0
  );
  const totalChange = mockStocks.reduce(
    (sum, stock) => sum + stock.change * 100,
    0
  );
  const totalChangePercent = (totalChange / (totalValue - totalChange)) * 100;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Card className="relative overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">
              Total Portfolio Value
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl sm:text-2xl font-bold">
              $
              {totalValue.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Based on current prices
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <Card className="relative overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">
              Today's Change
            </CardTitle>
            {totalChange >= 0 ? (
              <TrendingUp className="h-4 w-4 text-green-500" />
            ) : (
              <TrendingDown className="h-4 w-4 text-red-500" />
            )}
          </CardHeader>
          <CardContent>
            <div
              className={`text-xl sm:text-2xl font-bold ${totalChange >= 0 ? "text-green-500" : "text-red-500"}`}
            >
              {totalChange >= 0 ? "+" : ""}$
              {totalChange.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </div>
            <p
              className={`text-xs mt-1 ${totalChange >= 0 ? "text-green-500" : "text-red-500"}`}
            >
              {totalChangePercent >= 0 ? "+" : ""}
              {totalChangePercent.toFixed(2)}%
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Card className="relative overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">
              Active Positions
            </CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl sm:text-2xl font-bold">
              {mockStocks.length}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Stocks in portfolio
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

function StockDetails({
  stock,
  isOpen,
  onClose,
}: {
  stock: Stock | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!stock) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl mx-4 sm:mx-auto">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Building2 className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            </div>
            <div className="min-w-0">
              <DialogTitle className="text-xl sm:text-2xl truncate">
                {stock.symbol}
              </DialogTitle>
              <DialogDescription className="truncate">
                {stock.name}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-4 sm:space-y-6 mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">
                  Current Price
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl sm:text-2xl font-bold">
                  ${stock.price.toFixed(2)}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">
                  Change
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  className={`text-xl sm:text-2xl font-bold ${stock.change >= 0 ? "text-green-500" : "text-red-500"}`}
                >
                  {stock.change >= 0 ? "+" : ""}${stock.change.toFixed(2)}
                </div>
                <div
                  className={`text-xs sm:text-sm ${stock.change >= 0 ? "text-green-500" : "text-red-500"}`}
                >
                  {stock.change >= 0 ? "+" : ""}
                  {stock.changePercent.toFixed(2)}%
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">
                  Market Cap
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg sm:text-xl font-semibold">
                  ${stock.marketCap}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">
                  Volume
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg sm:text-xl font-semibold">
                  {formatNumber(stock.volume)}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">
                  Sector
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Badge variant="outline">{stock.sector}</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">
                  P/E Ratio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg sm:text-xl font-semibold">
                  {stock.peRatio}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function DataTable({ onRowClick }: { onRowClick: (stock: Stock) => void }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
          <Activity className="h-4 w-4 sm:h-5 sm:w-5" />
          Stock Holdings
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 sm:p-6">
        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <div className="inline-block min-w-full align-middle px-4 sm:px-0">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-3 sm:px-4 text-xs sm:text-sm font-medium text-muted-foreground whitespace-nowrap">
                    Symbol
                  </th>
                  <th className="text-left py-3 px-3 sm:px-4 text-xs sm:text-sm font-medium text-muted-foreground whitespace-nowrap">
                    Name
                  </th>
                  <th className="text-right py-3 px-3 sm:px-4 text-xs sm:text-sm font-medium text-muted-foreground whitespace-nowrap">
                    Price
                  </th>
                  <th className="text-right py-3 px-3 sm:px-4 text-xs sm:text-sm font-medium text-muted-foreground whitespace-nowrap">
                    Change
                  </th>
                  <th className="text-right py-3 px-3 sm:px-4 text-xs sm:text-sm font-medium text-muted-foreground whitespace-nowrap hidden md:table-cell">
                    Volume
                  </th>
                  <th className="text-right py-3 px-3 sm:px-4 text-xs sm:text-sm font-medium text-muted-foreground whitespace-nowrap hidden lg:table-cell">
                    Market Cap
                  </th>
                  <th className="text-right py-3 px-3 sm:px-4 text-xs sm:text-sm font-medium text-muted-foreground whitespace-nowrap hidden lg:table-cell">
                    Sector
                  </th>
                  <th className="text-right py-3 px-3 sm:px-4 text-xs sm:text-sm font-medium text-muted-foreground">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {mockStocks.map((stock, index) => (
                  <motion.tr
                    key={stock.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="border-b border-border hover:bg-muted/50 cursor-pointer transition-colors"
                    onClick={() => onRowClick(stock)}
                  >
                    <td className="py-3 px-3 sm:px-4">
                      <div className="font-semibold text-sm sm:text-base">
                        {stock.symbol}
                      </div>
                    </td>
                    <td className="py-3 px-3 sm:px-4">
                      <div className="text-xs sm:text-sm text-muted-foreground truncate max-w-[120px] sm:max-w-none">
                        {stock.name}
                      </div>
                    </td>
                    <td className="py-3 px-3 sm:px-4 text-right">
                      <div className="font-semibold text-sm sm:text-base">
                        ${stock.price.toFixed(2)}
                      </div>
                    </td>
                    <td className="py-3 px-3 sm:px-4 text-right">
                      <div
                        className={`font-semibold flex items-center justify-end gap-1 text-sm sm:text-base ${stock.change >= 0 ? "text-green-500" : "text-red-500"}`}
                      >
                        {stock.change >= 0 ? (
                          <TrendingUp className="h-3 w-3 flex-shrink-0" />
                        ) : (
                          <TrendingDown className="h-3 w-3 flex-shrink-0" />
                        )}
                        <span className="whitespace-nowrap">
                          {stock.change >= 0 ? "+" : ""}$
                          {stock.change.toFixed(2)}
                        </span>
                      </div>
                      <div
                        className={`text-xs ${stock.change >= 0 ? "text-green-500" : "text-red-500"}`}
                      >
                        {stock.changePercent >= 0 ? "+" : ""}
                        {stock.changePercent.toFixed(2)}%
                      </div>
                    </td>
                    <td className="py-3 px-3 sm:px-4 text-right hidden md:table-cell">
                      <div className="text-xs sm:text-sm">
                        {formatNumber(stock.volume)}
                      </div>
                    </td>
                    <td className="py-3 px-3 sm:px-4 text-right hidden lg:table-cell">
                      <div className="text-xs sm:text-sm">
                        ${stock.marketCap}
                      </div>
                    </td>
                    <td className="py-3 px-3 sm:px-4 text-right hidden lg:table-cell">
                      <Badge variant="outline" className="text-xs">
                        {stock.sector}
                      </Badge>
                    </td>
                    <td className="py-3 px-3 sm:px-4 text-right">
                      <ChevronRight className="h-4 w-4 text-muted-foreground ml-auto" />
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function StocksDashboard() {
  const [selectedStock, setSelectedStock] = useState<Stock | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const handleRowClick = (stock: Stock) => {
    setSelectedStock(stock);
    setIsDetailsOpen(true);
  };

  const handleCloseDetails = () => {
    setIsDetailsOpen(false);
  };

  return (
    <div className="w-full px-3 sm:px-4 py-4 sm:py-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 sm:mb-8"
        >
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">
            Stock Portfolio Dashboard
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Track your investments and monitor market performance
          </p>
        </motion.div>

        <StatusSection />
        <DataTable onRowClick={handleRowClick} />
        <StockDetails
          stock={selectedStock}
          isOpen={isDetailsOpen}
          onClose={handleCloseDetails}
        />
      </div>
    </div>
  );
}
