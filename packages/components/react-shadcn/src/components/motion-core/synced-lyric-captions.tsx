"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Pause,
  Play,
  Settings,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ScriptLine = {
  time: number;
  text: string;
  speaker?: string;
};

type SyncedLyricCaptionsProps = {
  script?: ScriptLine[];
  audioSrc?: string;
  title?: string;
};

const DEFAULT_SCRIPT: ScriptLine[] = [
  {
    time: 1,
    text: "Welcome to the enhanced caption experience.",
    speaker: "Narrator",
  },
  {
    time: 5,
    text: "Now with improved controls and visuals.",
    speaker: "Narrator",
  },
  { time: 9, text: "Skip forward or backward with ease.", speaker: "Narrator" },
  {
    time: 13.5,
    text: "Adjust volume and playback speed.",
    speaker: "Narrator",
  },
  {
    time: 17,
    text: "Track your progress with precision.",
    speaker: "Narrator",
  },
  {
    time: 21,
    text: "Experience smooth animations throughout.",
    speaker: "Narrator",
  },
];

function formatSeconds(seconds: number) {
  const safeSeconds = Math.max(0, seconds);
  const mins = Math.floor(safeSeconds / 60);
  const secs = Math.floor(safeSeconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export function SyncedLyricCaptions({
  script = DEFAULT_SCRIPT,
  audioSrc,
  title = "Enhanced Synced Captions",
}: SyncedLyricCaptionsProps) {
  const lineVariants = {
    initial: { opacity: 0, y: 32, scale: 0.97, filter: "blur(6px)" },
    animate: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
    exit: { opacity: 0, y: -14, scale: 0.97, filter: "blur(6px)" },
  };

  const sortedScript = useMemo(
    () => [...script].sort((a, b) => a.time - b.time),
    [script]
  );

  const fallbackDuration = useMemo(
    () => (sortedScript.at(-1)?.time ?? 0) + 3,
    [sortedScript]
  );

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(fallbackDuration);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [showSettings, setShowSettings] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastRafTimestampRef = useRef<number | null>(null);

  useEffect(() => {
    setDuration(audioRef.current?.duration || fallbackDuration);
  }, [fallbackDuration]);

  useEffect(() => {
    if (!audioSrc) return;

    const audio = new Audio(audioSrc);
    audioRef.current = audio;
    audio.volume = volume;
    audio.playbackRate = playbackRate;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoaded = () =>
      setDuration(
        Number.isFinite(audio.duration) ? audio.duration : fallbackDuration
      );
    const handleEnded = () => setIsPlaying(false);
    const handlePause = () => setIsPlaying(false);
    const handlePlay = () => setIsPlaying(true);

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoaded);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("play", handlePlay);

    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoaded);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("play", handlePlay);
      audioRef.current = null;
    };
  }, [audioSrc, fallbackDuration]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  useEffect(() => {
    if (audioRef.current || !isPlaying) return;

    const tick = (timestamp: number) => {
      const last = lastRafTimestampRef.current ?? timestamp;
      const deltaSeconds = ((timestamp - last) / 1000) * playbackRate;
      lastRafTimestampRef.current = timestamp;

      setCurrentTime((prev) => {
        const next = Math.min(prev + deltaSeconds, duration);
        if (next >= duration) {
          setIsPlaying(false);
          return duration;
        }
        return next;
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastRafTimestampRef.current = null;
    };
  }, [isPlaying, duration, playbackRate]);

  const activeIndex = useMemo(() => {
    let idx = -1;
    for (let i = 0; i < sortedScript.length; i++) {
      if (sortedScript[i].time <= currentTime + 0.01) {
        idx = i;
      } else {
        break;
      }
    }
    return idx;
  }, [sortedScript, currentTime]);

  const activeLine = activeIndex >= 0 ? sortedScript[activeIndex] : null;
  const nextLine = sortedScript[activeIndex + 1];
  const visibleLines = sortedScript
    .filter((line) => line.time <= currentTime + 0.01)
    .slice(-5);

  const safeDuration = Math.max(duration, 0.001);
  const progress = Math.min(1, currentTime / safeDuration);

  const handlePlayPause = async () => {
    const audio = audioRef.current;

    if (audio) {
      if (isPlaying) {
        audio.pause();
        return;
      }
      if (audio.ended || currentTime >= duration) {
        audio.currentTime = 0;
        setCurrentTime(0);
      }
      await audio.play();
      return;
    }

    setCurrentTime((prev) => (prev >= duration ? 0 : prev));
    lastRafTimestampRef.current = null;
    setIsPlaying((prev) => !prev);
  };

  const handleRestart = () => {
    setCurrentTime(0);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };

  const handleSkip = (seconds: number) => {
    const newTime = Math.max(0, Math.min(currentTime + seconds, duration));
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = x / rect.width;
    const newTime = percent * duration;
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const handleLineClick = (time: number) => {
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const handleLineKeyDown = (time: number) => (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleLineClick(time);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleProgressKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const step = 2 / Math.max(playbackRate, 0.25);
    if (e.key === "ArrowRight") {
      e.preventDefault();
      handleSkip(step);
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      handleSkip(-step);
    }
    if (e.key === "Home") {
      e.preventDefault();
      handleRestart();
    }
    if (e.key === "End") {
      e.preventDefault();
      handleSkip(duration);
    }
  };

  return (
    <div className="w-full">
      <div className="rounded-2xl border border-border/60 bg-background/70 p-4 shadow-lg backdrop-blur-xl sm:p-6">
        {/* Header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {title}
            </p>
            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <span>
                {audioSrc ? "Audio synced" : "Timer synced"} ·{" "}
                {sortedScript.length} lines · {playbackRate}x
              </span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:justify-end">
            <Button
              size="icon"
              variant="ghost"
              className="h-10 w-10 rounded-full border border-border/60"
              onClick={() => setShowSettings(!showSettings)}
              aria-label="Settings"
            >
              <Settings className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="h-9 w-9 rounded-full border border-border/60"
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <VolumeX className="h-4 w-4" />
              ) : (
                <Volume2 className="h-4 w-4" />
              )}
            </Button>
            {audioSrc && !isMuted && (
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-20 accent-primary"
                aria-label="Volume"
              />
            )}
          </div>
        </div>

        {/* Settings Panel */}
        <AnimatePresence>
          {showSettings && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: "auto", opacity: 1, marginTop: 16 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              className="overflow-hidden"
            >
              <div className="rounded-xl border border-border/60 bg-muted/40 p-4">
                <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Playback Speed
                </div>
                <div className="flex flex-wrap gap-2">
                  {[0.5, 0.75, 1, 1.25, 1.5, 2].map((rate) => (
                    <button
                      key={rate}
                      onClick={() => setPlaybackRate(rate)}
                      className={cn(
                        "rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
                        playbackRate === rate
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      )}
                    >
                      {rate}x
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Caption Display */}
        <div>
          <div className="relative z-10 flex h-full flex-col justify-end gap-2 p-4 sm:p-6 h-[280px] overflow-hidden rounded-xl border border-border/60 bg-gradient-to-b from-muted/40 via-background to-background sm:h-[320px] sm:h-[320px]">
            <AnimatePresence mode="popLayout">
              {visibleLines.map((line) => (
                <motion.button
                  key={line.time}
                  layout
                  variants={lineVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{
                    type: "spring",
                    stiffness: 240,
                    damping: 28,
                    mass: 0.9,
                  }}
                  type="button"
                  onClick={() => handleLineClick(line.time)}
                  onKeyDown={handleLineKeyDown(line.time)}
                  tabIndex={0}
                  className={cn(
                    "text-left outline-none ring-offset-2 ring-offset-background focus-visible:ring-2 focus-visible:ring-primary/70",
                    "cursor-pointer rounded-lg border border-border/60 bg-background/80 px-4 py-3 text-lg shadow-sm transition-all hover:bg-background/90 hover:shadow-md",
                    line.time === activeLine?.time
                      ? "border-primary/60 text-foreground shadow-md"
                      : "text-muted-foreground"
                  )}
                >
                  <div className="flex items-center justify-between text-xs text-muted-foreground/80">
                    <span className="font-mono">
                      {formatSeconds(line.time)}
                    </span>
                    <div className="flex items-center gap-2">
                      {line.speaker && (
                        <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold">
                          {line.speaker}
                        </span>
                      )}
                      {line.time === activeLine?.time && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary"
                        >
                          <span className="h-1 w-1 animate-pulse rounded-full bg-primary" />
                          Live
                        </motion.span>
                      )}
                    </div>
                  </div>
                  <p className="mt-1 leading-tight" aria-live="polite">
                    {line.text}
                  </p>
                </motion.button>
              ))}
            </AnimatePresence>

            {nextLine && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2 text-xs text-muted-foreground"
              >
                <div className="h-1 w-1 animate-pulse rounded-full bg-primary" />
                <span>
                  Next at {formatSeconds(nextLine.time)}: {nextLine.text}
                </span>
              </motion.div>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6">
          <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
            <span>{formatSeconds(currentTime)}</span>
            <span>{formatSeconds(duration)}</span>
          </div>
          <div
            className="relative mt-2 h-2 w-full cursor-pointer overflow-hidden rounded-full bg-border/60"
            onClick={handleProgressClick}
            onKeyDown={handleProgressKeyDown}
            role="slider"
            aria-label="Playback progress"
            aria-valuemin={0}
            aria-valuemax={Math.round(safeDuration)}
            aria-valuenow={Math.round(currentTime)}
            tabIndex={0}
          >
            <motion.div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary via-primary/80 to-primary/60"
              style={{ width: `${progress * 100}%` }}
              transition={{ type: "tween", ease: "linear", duration: 0.1 }}
            />
            <div className="pointer-events-none absolute inset-0">
              {sortedScript.map((line) => (
                <motion.span
                  key={line.time}
                  className={cn(
                    "absolute top-0 h-full w-0.5 rounded-full",
                    line.time <= currentTime ? "bg-primary" : "bg-border"
                  )}
                  style={{
                    left: `${Math.min(100, (line.time / safeDuration) * 100)}%`,
                  }}
                  animate={{
                    scaleY: line.time === activeLine?.time ? 1.4 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-6">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <Button
              size="icon"
              variant="ghost"
              className="h-10 w-10 rounded-full border border-border/60"
              onClick={handleRestart}
              aria-label="Restart"
            >
              <SkipBack className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="h-10 w-10 rounded-full border border-border/60"
              onClick={() => handleSkip(-5)}
              aria-label="Skip back 5 seconds"
            >
              <span className="text-xs font-semibold">-5</span>
            </Button>
            <Button
              onClick={handlePlayPause}
              className="h-14 w-14 gap-2 rounded-full px-5"
              variant="default"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause className="h-6 w-6" />
              ) : (
                <Play className="ml-0.5 h-6 w-6" />
              )}
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="h-10 w-10 rounded-full border border-border/60"
              onClick={() => handleSkip(5)}
              aria-label="Skip forward 5 seconds"
            >
              <span className="text-xs font-semibold">+5</span>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="h-10 w-10 rounded-full border border-border/60"
              onClick={() => handleSkip(10)}
              aria-label="Skip forward 10 seconds"
            >
              <SkipForward className="h-4 w-4" />
            </Button>
          </div>

          <div className="w-20" />
        </div>
      </div>
    </div>
  );
}
