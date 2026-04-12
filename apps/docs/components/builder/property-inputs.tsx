"use client";

import { Input } from "@uitripled/react-shadcn/ui/input";
import { Label } from "@uitripled/react-shadcn/ui/label";
import { Slider } from "@uitripled/react-shadcn/ui/slider";
import { useCallback, useRef } from "react";

// ── Color Picker ─────────────────────────────────────────────────────────────

export function ColorInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string | undefined;
  onChange: (value: string | undefined) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex items-center gap-2">
      <Label className="w-16 shrink-0 text-xs text-muted-foreground">
        {label}
      </Label>
      <div className="flex flex-1 items-center gap-1.5">
        <button
          type="button"
          className="h-7 w-7 shrink-0 rounded-md border border-border shadow-sm"
          style={{ backgroundColor: value || "transparent" }}
          onClick={() => inputRef.current?.click()}
        />
        <input
          ref={inputRef}
          type="color"
          value={value || "#000000"}
          onChange={(e) => onChange(e.target.value)}
          className="sr-only"
        />
        <Input
          value={value || ""}
          onChange={(e) => onChange(e.target.value || undefined)}
          placeholder="none"
          className="h-7 text-xs"
        />
      </div>
    </div>
  );
}

// ── Number Input ─────────────────────────────────────────────────────────────

export function NumberInput({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  suffix = "",
  placeholder,
}: {
  label: string;
  value: number | undefined;
  onChange: (value: number | undefined) => void;
  min?: number;
  max?: number;
  step?: number;
  suffix?: string;
  placeholder?: string;
}) {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value.replace(suffix, "").trim();
      if (raw === "") {
        onChange(undefined);
        return;
      }
      const num = parseFloat(raw);
      if (!isNaN(num)) {
        onChange(num);
      }
    },
    [onChange, suffix]
  );

  return (
    <div className="flex items-center gap-2">
      <Label className="w-16 shrink-0 text-xs text-muted-foreground">
        {label}
      </Label>
      <Input
        type="number"
        value={value ?? ""}
        onChange={handleChange}
        min={min}
        max={max}
        step={step}
        placeholder={placeholder ?? "auto"}
        className="h-7 text-xs"
      />
    </div>
  );
}

// ── Text Input (for CSS values like padding, border-radius) ──────────────────

export function TextInput({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string | undefined;
  onChange: (value: string | undefined) => void;
  placeholder?: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <Label className="w-16 shrink-0 text-xs text-muted-foreground">
        {label}
      </Label>
      <Input
        value={value || ""}
        onChange={(e) => onChange(e.target.value || undefined)}
        placeholder={placeholder ?? "none"}
        className="h-7 text-xs"
      />
    </div>
  );
}

// ── Slider Input ─────────────────────────────────────────────────────────────

export function SliderInput({
  label,
  value,
  onChange,
  min = 0,
  max = 1,
  step = 0.01,
}: {
  label: string;
  value: number | undefined;
  onChange: (value: number | undefined) => void;
  min?: number;
  max?: number;
  step?: number;
}) {
  return (
    <div className="flex items-center gap-2">
      <Label className="w-16 shrink-0 text-xs text-muted-foreground">
        {label}
      </Label>
      <Slider
        value={[value ?? max]}
        onValueChange={(v) => onChange(v[0])}
        min={min}
        max={max}
        step={step}
        className="flex-1"
      />
      <span className="w-10 text-right text-xs text-muted-foreground">
        {value !== undefined ? Math.round(value * 100) + "%" : "100%"}
      </span>
    </div>
  );
}

// ── Section Header ───────────────────────────────────────────────────────────

export function PropertySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2 border-b border-border pb-3">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

// ── Select Input ─────────────────────────────────────────────────────────────

export function SelectInput({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string | undefined;
  onChange: (value: string | undefined) => void;
  options: { label: string; value: string }[];
}) {
  return (
    <div className="flex items-center gap-2">
      <Label className="w-16 shrink-0 text-xs text-muted-foreground">
        {label}
      </Label>
      <select
        value={value || ""}
        onChange={(e) => onChange(e.target.value || undefined)}
        className="h-7 flex-1 rounded-md border border-border bg-background px-2 text-xs"
      >
        <option value="">Default</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
