"use client";

import type React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, type Variants } from "framer-motion";
import {
  CalendarDays,
  Cloud,
  CloudLightning,
  CloudRain,
  Droplets,
  Gauge,
  LucideIcon,
  MapPin,
  RefreshCcw,
  Sun,
  Sunrise,
  Sunset,
  Umbrella,
  Wind,
} from "lucide-react";
import { useMemo } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

type WeatherCondition = "sunny" | "rain" | "cloudy" | "storm";

type HourlyForecast = {
  time: string;
  temperature: number;
  feelsLike: number;
  precipitationChance: number;
  windSpeed: number;
  condition: WeatherCondition;
};

type WeeklyForecast = {
  day: string;
  high: number;
  low: number;
  precipitationChance: number;
  condition: WeatherCondition;
};

type WeatherMetric = {
  label: string;
  value: string;
  description: string;
  icon: LucideIcon;
};

type AirQualityMetric = {
  label: string;
  value: string;
  status: string;
  description: string;
};

type AlertSeverity = "Advisory" | "Watch" | "Warning";

type WeatherAlert = {
  title: string;
  description: string;
  severity: AlertSeverity;
  icon: LucideIcon;
};

type WeatherData = {
  location: string;
  updatedAt: string;
  current: {
    temperature: number;
    feelsLike: number;
    summary: string;
    condition: WeatherCondition;
    humidity: number;
    precipitationChance: number;
    windSpeed: number;
    pressure: number;
    sunrise: string;
    sunset: string;
  };
  hourly: HourlyForecast[];
  weekly: WeeklyForecast[];
  airQuality: AirQualityMetric[];
  alerts: WeatherAlert[];
};

const STATIC_WEATHER_DATA: WeatherData = {
  location: "San Francisco, CA",
  updatedAt: "2024-07-12T16:00:00.000Z",
  current: {
    temperature: 64,
    feelsLike: 62,
    summary: "Mostly sunny with a coastal breeze",
    condition: "sunny",
    humidity: 62,
    precipitationChance: 15,
    windSpeed: 12,
    pressure: 1016,
    sunrise: "2024-07-12T13:58:00.000Z",
    sunset: "2024-07-13T03:33:00.000Z",
  },
  hourly: [
    {
      time: "2024-07-12T16:00:00.000Z",
      temperature: 60,
      feelsLike: 59,
      precipitationChance: 10,
      windSpeed: 10,
      condition: "sunny",
    },
    {
      time: "2024-07-12T17:00:00.000Z",
      temperature: 61,
      feelsLike: 60,
      precipitationChance: 12,
      windSpeed: 11,
      condition: "sunny",
    },
    {
      time: "2024-07-12T18:00:00.000Z",
      temperature: 62,
      feelsLike: 61,
      precipitationChance: 12,
      windSpeed: 12,
      condition: "sunny",
    },
    {
      time: "2024-07-12T19:00:00.000Z",
      temperature: 63,
      feelsLike: 62,
      precipitationChance: 15,
      windSpeed: 13,
      condition: "sunny",
    },
    {
      time: "2024-07-12T20:00:00.000Z",
      temperature: 64,
      feelsLike: 63,
      precipitationChance: 18,
      windSpeed: 14,
      condition: "sunny",
    },
    {
      time: "2024-07-12T21:00:00.000Z",
      temperature: 65,
      feelsLike: 64,
      precipitationChance: 20,
      windSpeed: 14,
      condition: "sunny",
    },
    {
      time: "2024-07-12T22:00:00.000Z",
      temperature: 66,
      feelsLike: 65,
      precipitationChance: 20,
      windSpeed: 13,
      condition: "sunny",
    },
    {
      time: "2024-07-12T23:00:00.000Z",
      temperature: 65,
      feelsLike: 64,
      precipitationChance: 18,
      windSpeed: 12,
      condition: "sunny",
    },
    {
      time: "2024-07-13T00:00:00.000Z",
      temperature: 63,
      feelsLike: 62,
      precipitationChance: 15,
      windSpeed: 11,
      condition: "cloudy",
    },
    {
      time: "2024-07-13T01:00:00.000Z",
      temperature: 61,
      feelsLike: 60,
      precipitationChance: 12,
      windSpeed: 10,
      condition: "cloudy",
    },
    {
      time: "2024-07-13T02:00:00.000Z",
      temperature: 59,
      feelsLike: 58,
      precipitationChance: 10,
      windSpeed: 9,
      condition: "cloudy",
    },
    {
      time: "2024-07-13T03:00:00.000Z",
      temperature: 58,
      feelsLike: 57,
      precipitationChance: 8,
      windSpeed: 8,
      condition: "cloudy",
    },
  ],
  weekly: [
    {
      day: "2024-07-12",
      high: 66,
      low: 56,
      precipitationChance: 20,
      condition: "sunny",
    },
    {
      day: "2024-07-13",
      high: 65,
      low: 55,
      precipitationChance: 25,
      condition: "sunny",
    },
    {
      day: "2024-07-14",
      high: 64,
      low: 54,
      precipitationChance: 30,
      condition: "cloudy",
    },
    {
      day: "2024-07-15",
      high: 63,
      low: 54,
      precipitationChance: 40,
      condition: "cloudy",
    },
    {
      day: "2024-07-16",
      high: 62,
      low: 53,
      precipitationChance: 45,
      condition: "rain",
    },
    {
      day: "2024-07-17",
      high: 64,
      low: 54,
      precipitationChance: 30,
      condition: "sunny",
    },
    {
      day: "2024-07-18",
      high: 67,
      low: 55,
      precipitationChance: 15,
      condition: "sunny",
    },
  ],
  airQuality: [
    {
      label: "US AQI",
      value: "42",
      status: "Good",
      description:
        "Clear coastal air with minimal particulate matter detected.",
    },
    {
      label: "PM2.5",
      value: "8.6 µg/m³",
      status: "Low particulate levels",
      description: "Fine particulates remain well below daily thresholds.",
    },
    {
      label: "Dust Index",
      value: "18.4 µg/m³",
      status: "Minimal dust",
      description: "Marine influence keeps airborne dust concentrations low.",
    },
  ],
  alerts: [
    {
      title: "Mild onshore breeze continues",
      description:
        "Expect a gentle westerly wind through the afternoon with choppy bay waters.",
      severity: "Advisory",
      icon: Wind,
    },
    {
      title: "Low rain chance through weekend",
      description:
        "Stray mist possible near the coast late nights, but dry for most plans.",
      severity: "Watch",
      icon: Umbrella,
    },
  ],
};

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
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const listItemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const SEVERITY_STYLES: Record<AlertSeverity, string> = {
  Advisory: "bg-blue-500/20 text-blue-600 dark:text-blue-400",
  Watch: "bg-amber-500/20 text-amber-600 dark:text-amber-400",
  Warning: "bg-red-500/20 text-red-600 dark:text-red-400",
};

const CONDITION_ICONS: Record<WeatherCondition, LucideIcon> = {
  sunny: Sun,
  rain: CloudRain,
  cloudy: Cloud,
  storm: CloudLightning,
};

function formatHour(timestamp: string, timezone?: string) {
  return new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    hour12: true,
    timeZone: timezone,
  }).format(new Date(timestamp));
}

function formatDay(timestamp: string, timezone?: string) {
  return new Intl.DateTimeFormat(undefined, {
    weekday: "short",
    timeZone: timezone,
  }).format(new Date(timestamp));
}

function formatTime(timestamp: string, timezone?: string) {
  return new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: timezone,
  }).format(new Date(timestamp));
}

function describeHumidity(value: number) {
  if (value >= 70) return "Humid – expect a touch of mugginess";
  if (value <= 30) return "Dry air – hydrate frequently";
  return "Comfortable humidity for outdoor plans";
}

function describeWind(speed: number) {
  if (speed >= 25) return "Breezy with gusts – secure loose items";
  if (speed >= 15) return "Noticeable breeze across the bay";
  return "Light winds – calm conditions";
}

function describePressure(value: number) {
  if (value >= 1020) return "High pressure holding – skies stay stable";
  if (value <= 1005) return "Low pressure developing – expect shifts";
  return "Steady pressure – minimal change expected";
}

function describePrecipitation(chance: number) {
  if (chance >= 60) return "Keep rain gear handy";
  if (chance >= 30) return "Spotty showers possible";
  return "Minimal chance of precipitation";
}

export function WeatherDashboard(): React.ReactElement {
  const activeView = "today";
  const weatherData = STATIC_WEATHER_DATA;

  const weatherMetrics = useMemo<WeatherMetric[]>(() => {
    return [
      {
        label: "Humidity",
        value: weatherData.current.humidity + "%",
        description: describeHumidity(weatherData.current.humidity),
        icon: Droplets,
      },
      {
        label: "Wind",
        value: weatherData.current.windSpeed + " mph",
        description: describeWind(weatherData.current.windSpeed),
        icon: Wind,
      },
      {
        label: "Pressure",
        value: weatherData.current.pressure + " hPa",
        description: describePressure(weatherData.current.pressure),
        icon: Gauge,
      },
      {
        label: "Precipitation",
        value: weatherData.current.precipitationChance + "%",
        description: describePrecipitation(
          weatherData.current.precipitationChance
        ),
        icon: Umbrella,
      },
    ];
  }, [weatherData]);

  const hourlyChartData = useMemo(
    () =>
      weatherData.hourly.slice(0, 12).map((hour) => ({
        name: formatHour(hour.time),
        temperature: hour.temperature,
        feelsLike: hour.feelsLike,
      })),
    [weatherData]
  );

  const hourlyForecast = weatherData.hourly.slice(0, 8);
  const weeklyForecast = weatherData.weekly.slice(0, 7);
  const airQualityMetrics = weatherData.airQuality;
  const alerts = weatherData.alerts;

  const updatedMinutesAgo = useMemo(() => {
    const updatedDate = new Date(weatherData.updatedAt);
    const diffMinutes = Math.floor(
      (Date.now() - updatedDate.getTime()) / (1000 * 60)
    );
    if (diffMinutes <= 1) return "Updated moments ago";
    if (diffMinutes < 60) return "Updated " + diffMinutes + " minutes ago";
    const diffHours = Math.floor(diffMinutes / 60);
    if (diffHours === 1) return "Updated about an hour ago";
    return "Updated " + diffHours + " hours ago";
  }, [weatherData.updatedAt]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div className="relative mx-auto flex min-h-screen flex-col gap-8 py-12 lg:gap-12 lg:py-16">
        <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <Badge
              variant="outline"
              className="inline-flex items-center gap-2 rounded-full border-border/50 bg-background/55 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-foreground/70 backdrop-blur"
            >
              <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
              7-Day Coastal Outlook
            </Badge>

            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Coastal Weather Overview
              </h1>
              <p className="mt-2 flex flex-wrap items-center gap-2 text-sm text-foreground/70">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {weatherData.location}
                <span aria-live="polite" className="text-foreground/50">
                  · {updatedMinutesAgo}
                </span>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {["today", "week", "radar"].map((view) => (
              <Button
                key={view}
                type="button"
                variant={view === activeView ? "default" : "ghost"}
                aria-pressed={view === activeView}
                className="rounded-lg px-4 py-2 text-sm uppercase tracking-[0.1em]"
              >
                {view === "today" && "Today"}
                {view === "week" && "Week"}
                {view === "radar" && "Radar"}
              </Button>
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => undefined}
              className="gap-2 rounded-lg text-xs uppercase tracking-[0.15em]"
            >
              <RefreshCcw className="h-4 w-4" aria-hidden="true" />
              Refresh
            </Button>
          </div>
        </header>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-6 md:gap-8 lg:grid-cols-1"
          aria-busy={false}
          aria-live="polite"
        >
          <motion.article
            variants={itemVariants}
            className="group relative overflow-hidden rounded-2xl border border-border/40 bg-background/60 p-6 backdrop-blur transition-all hover:border-border/60 hover:shadow-lg"
            role="article"
            aria-label="Current weather conditions"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10" />

            <div className="relative flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="rounded-full border border-border/40 bg-background/60 p-3">
                    <Sun className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-foreground/70">
                      Right Now
                    </p>
                    <p className="text-sm text-foreground/60">
                      {weatherData.current.summary}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex flex-wrap items-baseline gap-3">
                    <span className="text-5xl font-semibold tracking-tight text-foreground md:text-6xl">
                      {weatherData.current.temperature}°
                    </span>
                    <span className="text-sm text-foreground/60">
                      Feels like {weatherData.current.feelsLike}°
                    </span>
                  </div>
                  <p className="text-sm text-foreground/70">
                    {"Chance of rain " +
                      weatherData.current.precipitationChance +
                      "% · Sunrise " +
                      formatTime(weatherData.current.sunrise) +
                      " · Sunset " +
                      formatTime(weatherData.current.sunset)}
                  </p>
                </div>
              </div>

              <motion.div
                role="list"
                className="grid grid-cols-1 gap-3 sm:grid-cols-2"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                {weatherMetrics.map((metric) => (
                  <motion.div
                    key={metric.label}
                    role="listitem"
                    variants={listItemVariants}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-3 rounded-xl border border-border/30 bg-background/40 p-4 transition-all hover:border-border/50 hover:bg-background/60"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border/40 bg-background/60 text-foreground/70">
                      <metric.icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div className="space-y-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60">
                        {metric.label}
                      </p>
                      <p className="text-lg font-semibold text-foreground">
                        {metric.value}
                      </p>
                      <p className="text-xs text-foreground/60">
                        {metric.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <div className="flex flex-col gap-3 rounded-xl border border-border/30 bg-background/30 p-4">
                <div className="flex items-center justify-between text-sm text-foreground/70">
                  <div className="flex items-center gap-2">
                    <Sunrise className="h-4 w-4" aria-hidden="true" />
                    Sunrise
                  </div>
                  <span className="text-foreground">
                    {formatTime(weatherData.current.sunrise)}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm text-foreground/70">
                  <div className="flex items-center gap-2">
                    <Sunset className="h-4 w-4" aria-hidden="true" />
                    Sunset
                  </div>
                  <span className="text-foreground">
                    {formatTime(weatherData.current.sunset)}
                  </span>
                </div>
              </div>
            </div>
          </motion.article>

          <motion.article
            variants={itemVariants}
            className="group relative overflow-hidden rounded-2xl border border-border/40 bg-background/60 p-6 backdrop-blur transition-all hover:border-border/60 hover:shadow-lg "
            role="article"
            aria-label="Hourly forecast chart"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10" />

            <div className="relative flex flex-col gap-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-foreground">
                    Hourly Forecast
                  </h2>
                  <p className="text-xs text-foreground/60">
                    Temperature trend and precipitation chance through the
                    evening
                  </p>
                </div>
                <Badge className="rounded-full bg-primary/20 text-xs uppercase tracking-[0.2em] text-primary">
                  Live radar calibrated
                </Badge>
              </div>

              <div style={{ width: "100%", height: 260 }} className="relative">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={hourlyChartData}
                    margin={{ top: 10, right: 16, left: -20, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient
                        id="temperatureGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="hsl(var(--primary))"
                          stopOpacity={0.45}
                        />
                        <stop
                          offset="95%"
                          stopColor="hsl(var(--primary))"
                          stopOpacity={0.05}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="hsl(var(--border))"
                      opacity={0.25}
                      vertical={false}
                    />
                    <XAxis
                      dataKey="name"
                      stroke="hsl(var(--foreground))"
                      opacity={0.6}
                      style={{ fontSize: "11px" }}
                    />
                    <Tooltip
                      cursor={{ stroke: "hsl(var(--primary) / 0.3)" }}
                      contentStyle={{
                        backgroundColor: "hsl(var(--background) / 0.8)",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "12px",
                        backdropFilter: "blur(12px)",
                        padding: "10px 12px",
                      }}
                      labelStyle={{
                        color: "hsl(var(--foreground))",
                        fontWeight: 600,
                      }}
                      formatter={(value: any, key: any) => [
                        value?.toString() + "°",
                        key === "feelsLike" ? "Feels like" : "Temperature",
                      ]}
                    />
                    <Area
                      type="natural"
                      dataKey="temperature"
                      stroke="hsl(var(--primary))"
                      strokeWidth={2.5}
                      fill="url(#temperatureGradient)"
                      activeDot={{ r: 5 }}
                    />
                    <Area
                      type="natural"
                      dataKey="feelsLike"
                      stroke="hsl(var(--foreground) / 0.4)"
                      strokeDasharray="6 4"
                      strokeWidth={2}
                      fillOpacity={0}
                      activeDot={{ r: 4 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <motion.ul
                role="list"
                className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {hourlyForecast.map((hour) => {
                  const Icon = CONDITION_ICONS[hour.condition];
                  return (
                    <motion.li
                      key={hour.time}
                      role="listitem"
                      variants={listItemVariants}
                      className="group/hour flex flex-col gap-2 rounded-xl border border-border/30 bg-background/40 p-4 text-left transition-all hover:border-border/50 hover:bg-background/60"
                    >
                      <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">
                        {formatHour(hour.time)}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold text-foreground">
                          {hour.temperature}°
                        </span>
                        <span className="text-xs text-foreground/60">
                          {hour.feelsLike}° feels
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-foreground/70">
                        <div className="flex items-center gap-2">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border/40 bg-background/50 text-foreground/70">
                            <Icon className="h-4 w-4" aria-hidden="true" />
                          </span>
                          <span>{hour.windSpeed} mph winds</span>
                        </div>
                        <span className="text-xs text-foreground/60">
                          {hour.precipitationChance}% rain
                        </span>
                      </div>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </div>
          </motion.article>

          <motion.article
            variants={itemVariants}
            className="group relative overflow-hidden rounded-2xl border border-border/40 bg-background/60 p-6 backdrop-blur transition-all hover:border-border/60 hover:shadow-lg "
            role="article"
            aria-label="7 day extended forecast"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10" />

            <div className="relative flex flex-col gap-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-foreground">
                    Weekly Outlook
                  </h2>
                  <p className="text-xs text-foreground/60">
                    Plan ahead with precipitation risk and temperature swings
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-2 rounded-lg text-xs uppercase tracking-[0.15em] text-foreground/70 hover:text-foreground"
                >
                  Export
                </Button>
              </div>

              <motion.ul
                role="list"
                className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                {weeklyForecast.map((day, index) => {
                  const Icon = CONDITION_ICONS[day.condition];
                  return (
                    <motion.li
                      key={day.day + "-" + index}
                      role="listitem"
                      variants={listItemVariants}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col gap-3 rounded-xl border border-border/30 bg-background/40 p-4 transition-all hover:border-border/50 hover:bg-background/60"
                    >
                      <div className="flex items-center justify-between text-sm text-foreground/70">
                        <span className="text-xs uppercase tracking-[0.2em]">
                          {formatDay(day.day)}
                        </span>
                        <span>{day.precipitationChance}% rain</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border/40 bg-background/50 text-foreground/70">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </span>
                          <div>
                            <p className="text-lg font-semibold text-foreground">
                              {day.high}°
                            </p>
                            <p className="text-xs text-foreground/60">
                              Low {day.low}°
                            </p>
                          </div>
                        </div>
                        <Badge
                          variant="outline"
                          className="rounded-full border-border/40 bg-background/50 px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-foreground/60"
                        >
                          {day.condition === "sunny" && "Clear"}
                          {day.condition === "cloudy" && "Clouds"}
                          {day.condition === "rain" && "Showers"}
                          {day.condition === "storm" && "Storm"}
                        </Badge>
                      </div>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </div>
          </motion.article>

          <motion.article
            variants={itemVariants}
            className="group relative overflow-hidden rounded-2xl border border-border/40 bg-background/60 p-6 backdrop-blur transition-all hover:border-border/60 hover:shadow-lg"
            role="article"
            aria-label="Air quality and weather alerts"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10" />

            <div className="relative flex flex-col gap-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-foreground">
                    Air Quality & Alerts
                  </h2>
                  <p className="text-xs text-foreground/60">
                    Live monitoring for coastal neighborhoods
                  </p>
                </div>
                <Badge className="rounded-full bg-emerald-500/20 text-xs uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
                  {airQualityMetrics[0]?.status ?? "Stable"}
                </Badge>
              </div>

              <motion.ul
                role="list"
                className="grid gap-3"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                {airQualityMetrics.map((metric) => (
                  <motion.li
                    key={metric.label}
                    role="listitem"
                    variants={listItemVariants}
                    className="rounded-xl border border-border/30 bg-background/40 p-4"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">
                        {metric.label}
                      </p>
                      <span className="text-sm font-semibold text-foreground">
                        {metric.value}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-foreground/70">
                      {metric.status}
                    </p>
                    <p className="text-xs text-foreground/60">
                      {metric.description}
                    </p>
                  </motion.li>
                ))}
              </motion.ul>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60">
                  Local alerts
                </h3>
                <motion.ul
                  role="list"
                  className="mt-3 space-y-3"
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                >
                  {alerts.map((alert) => {
                    const Icon = alert.icon;
                    return (
                      <motion.li
                        key={alert.title}
                        role="listitem"
                        variants={listItemVariants}
                        className="flex items-start gap-3 rounded-xl border border-border/30 bg-background/40 p-4"
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border/40 bg-background/60 text-foreground/70">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <div className="flex-1 space-y-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <p className="text-sm font-semibold text-foreground">
                              {alert.title}
                            </p>
                            <span
                              className={
                                SEVERITY_STYLES[alert.severity] +
                                " rounded-full px-2 py-1 text-[11px] uppercase tracking-[0.15em]"
                              }
                            >
                              {alert.severity}
                            </span>
                          </div>
                          <p className="text-xs text-foreground/60">
                            {alert.description}
                          </p>
                        </div>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </div>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </main>
  );
}
