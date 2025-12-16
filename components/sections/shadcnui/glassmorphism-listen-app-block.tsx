"use client";

import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Headphones,
  Heart,
  Pause,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume2,
} from "lucide-react";

const highlights = [
  {
    title: "Spatial audio",
    description:
      "Immerse yourself in cinematic soundscapes crafted for every mood.",
  },
];

const playlist = [
  {
    id: "5L2ELXkO17Iu9J8hwMktVJ",
    title: "Helaf El Amar",
    artist: "George Wassouf",
    album: "El Hawa Sultan",
    duration: "6:40",
    currentTime: "01:12",
    progress: 35,
    spotifyUrl: "https://open.spotify.com/track/5L2ELXkO17Iu9J8hwMktVJ",
    embedUrl:
      "https://open.spotify.com/embed/track/5L2ELXkO17Iu9J8hwMktVJ?utm_source=generator",
  },
  {
    id: "2Z8WuEywRWYTKe1NybPQEW",
    title: "Levitating",
    artist: "Dua Lipa",
    album: "Future Nostalgia",
    duration: "3:23",
    currentTime: "00:48",
    progress: 22,
    spotifyUrl: "https://open.spotify.com/track/2Z8WuEywRWYTKe1NybPQEW",
    embedUrl:
      "https://open.spotify.com/embed/track/2Z8WuEywRWYTKe1NybPQEW?utm_source=generator",
  },
  {
    id: "02MWAaffLxlfxAUY7c5dvx",
    title: "Heat Waves",
    artist: "Glass Animals",
    album: "Dreamland",
    duration: "3:58",
    currentTime: "02:41",
    progress: 68,
    spotifyUrl: "https://open.spotify.com/track/02MWAaffLxlfxAUY7c5dvx",
    embedUrl:
      "https://open.spotify.com/embed/track/02MWAaffLxlfxAUY7c5dvx?utm_source=generator",
  },
  {
    id: "4ZtFanR9U6ndgddUvNcjcG",
    title: "good 4 u",
    artist: "Olivia Rodrigo",
    album: "SOUR",
    duration: "2:58",
    currentTime: "00:36",
    progress: 20,
    spotifyUrl: "https://open.spotify.com/track/4ZtFanR9U6ndgddUvNcjcG",
    embedUrl:
      "https://open.spotify.com/embed/track/4ZtFanR9U6ndgddUvNcjcG?utm_source=generator",
  },
];

export function GlassmorphismListenAppBlock() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTrack = playlist[activeIndex];

  return (
    <section className="relative overflow-hidden px-6 py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-foreground/[0.03] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-foreground/[0.02] blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl">
        <Card className="relative overflow-hidden border border-border/50 bg-background/40 p-10 shadow-[0_40px_120px_rgba(15,23,42,0.25)] backdrop-blur-2xl md:p-16">
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.05] via-transparent to-transparent" />

          <div className="relative z-10 grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-10">
              <div className="space-y-5">
                <Badge
                  variant="outline"
                  className="w-fit border-border/60 bg-background/40 text-xs uppercase tracking-[0.2em] text-foreground/70 backdrop-blur"
                >
                  listen app
                </Badge>
                <div className="space-y-4">
                  <h2 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                    Sound that feels like a private concert
                  </h2>
                  <p className="max-w-xl text-base leading-relaxed text-foreground/70 md:text-lg">
                    Stream, discover, and share music with glassy interfaces,
                    subtle motion, and immersive visuals that keep the focus on
                    the sound.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                <Button size="lg" className="h-12 rounded-full px-8 text-base">
                  Start listening
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full px-8 text-base hover:bg-foreground/5"
                >
                  View plans
                </Button>
              </div>

              <div className="grid gap-4 sm:grid-cols-1">
                {highlights.map((highlight) => (
                  <div
                    key={highlight.title}
                    className="group h-full rounded-3xl border border-border/40 bg-background/60 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-border"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-border/40 bg-foreground/10 text-foreground/80">
                      <Headphones className="h-4 w-4" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">
                      {highlight.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-foreground/70">
                      {highlight.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-border/40 bg-background/70 p-6 shadow-[0_25px_80px_rgba(15,23,42,0.35)] backdrop-blur-2xl">
                <div className="flex items-start gap-4">
                  <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br from-foreground/30 via-foreground/10 to-transparent">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.6),_transparent_60%)]" />
                    <div className="absolute bottom-2 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full bg-background/70" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
                          Now playing
                        </p>
                        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                          {activeTrack.title}
                        </h3>
                        <p className="text-sm text-foreground/60">
                          {activeTrack.artist} · {activeTrack.album}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full border border-border/40 bg-background/60 text-foreground/70 backdrop-blur hover:text-foreground"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-9 rounded-full border-border/50 bg-background/60 px-4 text-xs uppercase tracking-[0.2em] text-foreground/70 backdrop-blur hover:text-foreground"
                      asChild
                    >
                      <a
                        href={activeTrack.spotifyUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Open in Spotify
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="space-y-3 pt-6">
                  <div className="flex items-center justify-between text-xs font-medium tracking-wide text-foreground/50">
                    <span>{activeTrack.currentTime}</span>
                    <span>{activeTrack.duration}</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-foreground/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-foreground to-foreground/40 transition-[width]"
                      style={{ width: `${activeTrack.progress}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-10 w-10 rounded-full border border-border/40 bg-background/60 text-foreground/70 backdrop-blur hover:text-foreground"
                    >
                      <Shuffle className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-10 w-10 rounded-full border border-border/40 bg-background/60 text-foreground/70 backdrop-blur hover:text-foreground"
                    >
                      <SkipBack className="h-4 w-4" />
                    </Button>
                  </div>

                  <Button className="h-12 w-12 rounded-full bg-foreground text-background hover:bg-foreground/90">
                    <Pause className="h-5 w-5" />
                  </Button>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-10 w-10 rounded-full border border-border/40 bg-background/60 text-foreground/70 backdrop-blur hover:text-foreground"
                    >
                      <SkipForward className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-10 w-10 rounded-full border border-border/40 bg-background/60 text-foreground/70 backdrop-blur hover:text-foreground"
                    >
                      <Repeat className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-10 w-10 rounded-full border border-border/40 bg-background/60 text-foreground/70 backdrop-blur hover:text-foreground"
                    >
                      <Volume2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="mt-8 overflow-hidden rounded-3xl border border-border/40 bg-background/80 shadow-[0_20px_60px_rgba(15,23,42,0.35)] backdrop-blur">
                  <iframe
                    className="h-[152px] w-full"
                    src={activeTrack.embedUrl}
                    title={`${activeTrack.title} - Spotify`}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="relative">
                <div className="max-h-80 space-y-3 overflow-y-auto pr-2 sm:max-h-[24rem]">
                  {playlist.map((track, index) => {
                    const isActive = index === activeIndex;

                    return (
                      <button
                        key={track.id}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        aria-pressed={isActive}
                        className={`group flex w-full items-center gap-4 rounded-3xl border border-border/40 bg-background/60 p-5 text-left backdrop-blur-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 ${
                          isActive
                            ? "border-foreground/40 bg-foreground/[0.08] shadow-[0_20px_60px_rgba(15,23,42,0.35)]"
                            : "hover:-translate-y-1 hover:border-border/60"
                        }`}
                      >
                        <div
                          className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-border/40 text-sm font-semibold transition-colors ${
                            isActive
                              ? "bg-foreground/20 text-foreground"
                              : "bg-background/70 text-foreground/70"
                          }`}
                        >
                          {track.title.charAt(0)}
                        </div>
                        <div className="flex flex-1 items-center justify-between gap-4">
                          <div>
                            <p className="text-sm font-semibold text-foreground/90">
                              {track.title}
                            </p>
                            <p className="text-xs text-foreground/60">
                              {track.artist}
                            </p>
                          </div>
                          <span className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/50">
                            {track.duration}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-background/90 via-background/40 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
