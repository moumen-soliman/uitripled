"use client";

import { NativeCounterUp } from "@/components/native/carbon/native-counter-up-carbon";

export function NativeCounterUpDefault() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeCounterUp value={1000} className="text-4xl text-foreground" />
    </div>
  );
}

export function NativeCounterUpCurrency() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeCounterUp
        value={9999.99}
        prefix="$"
        decimals={2}
        className="text-4xl text-primary"
        label="Total revenue"
      />
    </div>
  );
}

export function NativeCounterUpPercentage() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeCounterUp
        value={87}
        suffix="%"
        duration={1.5}
        className="text-4xl text-green-500"
        label="Success rate"
      />
    </div>
  );
}

export function NativeCounterUpDemo() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="space-y-2 text-center">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Default
          </h3>
          <NativeCounterUpDefault />
        </div>
        <div className="space-y-2 text-center">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Currency
          </h3>
          <NativeCounterUpCurrency />
        </div>
        <div className="space-y-2 text-center">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Percentage
          </h3>
          <NativeCounterUpPercentage />
        </div>
      </div>
    </div>
  );
}
