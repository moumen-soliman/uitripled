"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, type Variants } from "framer-motion";
import {
  AlertTriangle,
  Award,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Clock,
  Download,
  FileText,
  Languages,
  Lock,
  Play,
  PlayCircle,
  Share2,
  Star,
  Timer,
  Users,
  Video,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

interface InstructorCardProps {
  name: string;
  title: string;
  bio: string;
  image: string;
  rating: number;
  students: string;
  courses: number;
}

interface CourseStatsProps {
  label: string;
  value: string;
  icon: React.ReactNode;
}

interface CurriculumSection {
  title: string;
  lessons: CurriculumLesson[];
  duration: string;
}

interface CurriculumLesson {
  title: string;
  duration: string;
  isCompleted: boolean;
  isLocked: boolean;
  type: "video" | "article" | "quiz";
}

// ============================================================================
// STATIC DATA
// ============================================================================

const COURSE_DATA = {
  title: "Advanced React Development & Performance Optimization",
  description:
    "Master modern React patterns, state management, and performance optimization techniques to build production-ready applications.",
  rating: 4.8,
  totalRatings: "12,543",
  students: "45,892",
  lastUpdated: "November 2024",
  language: "English",
  duration: "18.5 hours",
  lectures: 156,
};

const INSTRUCTOR_DATA = {
  name: "shadcn",
  title: "Creator of shadcn/ui · Open Source Developer",
  bio: "Building beautiful, accessible component libraries for the web. Passionate about design systems, developer experience, and making UI development enjoyable.",
  image: "https://avatars.githubusercontent.com/u/139895814?v=4",
  rating: 4.9,
  students: "125,000",
  courses: 12,
};

const PROMO_DATA = {
  discount: 60,
  originalPrice: 299,
  discountedPrice: 119,
  spotsLeft: 12,
  deadline: new Date(Date.now() + 24 * 60 * 60 * 1000 + 5 * 60 * 60 * 1000), // 1 day 5 hours from now
};

const CURRICULUM_DATA: CurriculumSection[] = [
  {
    title: "Getting Started with React",
    duration: "1h 45m",
    lessons: [
      {
        title: "Introduction to Modern React",
        duration: "12:30",
        isCompleted: true,
        isLocked: false,
        type: "video",
      },
      {
        title: "Setting Up Your Development Environment",
        duration: "18:45",
        isCompleted: true,
        isLocked: false,
        type: "video",
      },
      {
        title: "Understanding Component Architecture",
        duration: "25:15",
        isCompleted: false,
        isLocked: false,
        type: "video",
      },
      {
        title: "Quick Quiz: React Basics",
        duration: "10:00",
        isCompleted: false,
        isLocked: false,
        type: "quiz",
      },
    ],
  },
  {
    title: "Advanced React Patterns",
    duration: "3h 20m",
    lessons: [
      {
        title: "Compound Components Pattern",
        duration: "28:30",
        isCompleted: false,
        isLocked: false,
        type: "video",
      },
      {
        title: "Render Props & Higher-Order Components",
        duration: "32:15",
        isCompleted: false,
        isLocked: false,
        type: "video",
      },
      {
        title: "Custom Hooks Deep Dive",
        duration: "40:20",
        isCompleted: false,
        isLocked: false,
        type: "video",
      },
      {
        title: "Best Practices Guide",
        duration: "15:00",
        isCompleted: false,
        isLocked: false,
        type: "article",
      },
    ],
  },
  {
    title: "State Management Mastery",
    duration: "4h 15m",
    lessons: [
      {
        title: "Context API vs Redux",
        duration: "22:45",
        isCompleted: false,
        isLocked: true,
        type: "video",
      },
      {
        title: "Zustand State Management",
        duration: "35:20",
        isCompleted: false,
        isLocked: true,
        type: "video",
      },
      {
        title: "Server State with React Query",
        duration: "42:10",
        isCompleted: false,
        isLocked: true,
        type: "video",
      },
    ],
  },
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

function CountdownTimer({ deadline }: { deadline: Date }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = deadline.getTime() - Date.now();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [deadline]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <motion.div
        key={value}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl border border-border/40 bg-background/80 backdrop-blur"
      >
        <span className="text-2xl sm:text-3xl font-bold tabular-nums text-foreground">
          {String(value).padStart(2, "0")}
        </span>
      </motion.div>
      <span className="mt-2 text-xs font-medium uppercase tracking-wider text-foreground/60">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <TimeUnit value={timeLeft.days} label="Days" />
      <span className="text-2xl font-bold text-foreground/40">:</span>
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <span className="text-2xl font-bold text-foreground/40">:</span>
      <TimeUnit value={timeLeft.minutes} label="Mins" />
      <span className="text-2xl font-bold text-foreground/40">:</span>
      <TimeUnit value={timeLeft.seconds} label="Secs" />
    </div>
  );
}

function CourseHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8 space-y-6"
    >
      {/* Promotional Offer Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative overflow-hidden rounded-2xl border-2 border-primary/40 bg-gradient-to-br from-primary/10 via-background/80 to-background/60 p-6 backdrop-blur"
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 opacity-50 animate-pulse" />

        <div className="relative space-y-4">
          {/* Header with badges */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 px-3 py-1">
                <Zap className="h-3 w-3 mr-1" />
                {PROMO_DATA.discount}% OFF
              </Badge>
              <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white border-0 px-3 py-1 animate-pulse">
                <AlertTriangle className="h-3 w-3 mr-1" />
                Only {PROMO_DATA.spotsLeft} Spots Left
              </Badge>
            </div>
            <Badge
              variant="outline"
              className="border-primary/40 bg-background/60 text-foreground"
            >
              <Timer className="h-3 w-3 mr-1" />
              Limited Time Offer
            </Badge>
          </div>

          {/* Countdown Timer */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl font-bold text-foreground">
                Offer Ends In:
              </h3>
              <p className="text-sm text-foreground/70">
                Don't miss this opportunity to save $
                {PROMO_DATA.originalPrice - PROMO_DATA.discountedPrice}!
              </p>
            </div>
          </div>

          <CountdownTimer deadline={PROMO_DATA.deadline} />

          {/* Pricing */}
          <div className="flex flex-wrap items-end gap-4 pt-2 border-t border-border/40">
            <div className="space-y-1">
              <p className="text-sm text-foreground/60">Original Price</p>
              <p className="text-2xl font-bold text-foreground/40 line-through">
                ${PROMO_DATA.originalPrice}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-foreground/60">Discounted Price</p>
              <p className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                ${PROMO_DATA.discountedPrice}
              </p>
            </div>
            <div className="ml-auto">
              <Button
                size="lg"
                className="rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 shadow-lg shadow-primary/25"
                aria-label="Enroll now and save"
              >
                Enroll Now & Save $
                {PROMO_DATA.originalPrice - PROMO_DATA.discountedPrice}
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Original Header Content */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
        <div className="flex-1 space-y-3">
          <Badge
            variant="outline"
            className="inline-flex items-center gap-2 rounded-full border-border/50 bg-background/55 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-foreground/70 backdrop-blur"
          >
            <BookOpen className="h-3.5 w-3.5" />
            Online Course
          </Badge>

          <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {COURSE_DATA.title}
          </h1>
          <p className="max-w-3xl text-foreground/70">
            {COURSE_DATA.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
              <span className="font-semibold text-foreground">
                {COURSE_DATA.rating}
              </span>
              <span className="text-foreground/60">
                ({COURSE_DATA.totalRatings} ratings)
              </span>
            </div>
            <div className="flex items-center gap-1 text-foreground/60">
              <Users className="h-4 w-4" />
              {COURSE_DATA.students} students
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-border/40 bg-background/60 backdrop-blur hover:border-border/60 hover:bg-background/70"
            aria-label="Share this course"
          >
            <Share2 className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button
            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
            aria-label="Enroll in Advanced React Development course"
          >
            Enroll Now
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      className="group relative overflow-hidden rounded-2xl border border-border/40 bg-background/60 backdrop-blur aspect-video"
      role="region"
      aria-label="Course video player"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10" />

      {/* Video Thumbnail/Player */}
      <div className="relative h-full w-full bg-gradient-to-br from-primary/10 via-primary/5 to-background/50">
        <div className="absolute inset-0 flex items-center justify-center">
          {!isPlaying ? (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsPlaying(true)}
              className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary/40 bg-background/80 backdrop-blur transition-all hover:border-primary hover:bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Play lesson: Introduction to Modern React"
            >
              <Play
                className="h-8 w-8 text-primary ml-1"
                fill="currentColor"
                aria-hidden="true"
              />
            </motion.button>
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <p className="text-sm text-foreground/60">
                Video player would appear here
              </p>
            </div>
          )}
        </div>

        {/* Video Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
          <div className="flex items-center gap-2 text-sm text-foreground/70">
            <Video className="h-4 w-4" />
            <span>Lesson 1: Introduction to Modern React</span>
            <span className="ml-auto">12:30</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CourseStats() {
  const stats: CourseStatsProps[] = [
    {
      label: "Total Duration",
      value: COURSE_DATA.duration,
      icon: <Clock className="h-5 w-5" />,
    },
    {
      label: "Lectures",
      value: COURSE_DATA.lectures.toString(),
      icon: <PlayCircle className="h-5 w-5" />,
    },
    {
      label: "Language",
      value: COURSE_DATA.language,
      icon: <Languages className="h-5 w-5" />,
    },
    {
      label: "Last Updated",
      value: COURSE_DATA.lastUpdated,
      icon: <Download className="h-5 w-5" />,
    },
  ];

  return (
    <motion.div
      variants={itemVariants}
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      role="list"
      aria-label="Course statistics"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -4 }}
          className="group relative overflow-hidden rounded-2xl border border-border/40 bg-background/60 p-6 backdrop-blur transition-all hover:border-border/60 hover:shadow-lg"
          role="listitem"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10" />

          <div className="flex items-start gap-4">
            <div
              className="rounded-lg border border-border/20 bg-background/50 p-2 text-foreground/70"
              aria-hidden="true"
            >
              {stat.icon}
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-foreground/60">
                {stat.label}
              </p>
              <p className="text-lg font-semibold text-foreground">
                {stat.value}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

function InstructorCard({
  name,
  title,
  bio,
  image,
  rating,
  students,
  courses,
}: InstructorCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="group relative overflow-hidden rounded-2xl border border-border/40 bg-background/60 backdrop-blur transition-all hover:border-border/60 hover:shadow-lg"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10" />

      {/* Top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />

      <div className="relative space-y-6 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-foreground">
            Your Instructor
          </h3>
          <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
            <CheckCircle2 className="h-3 w-3 mr-1" />
            Verified
          </Badge>
        </div>

        <div className="flex flex-col gap-6">
          {/* Profile Header */}
          <div className="flex items-start gap-4">
            {/* Avatar with gradient border */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 to-primary/10 blur-lg" />
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-border/60 bg-background ring-4 ring-background/50">
                <img
                  src={image}
                  alt={name}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Name and Title */}
            <div className="flex-1 space-y-1.5">
              <h4 className="text-xl font-semibold text-foreground tracking-tight">
                {name}
              </h4>
              <p className="text-sm text-foreground/70 leading-relaxed">
                {title}
              </p>
            </div>
          </div>

          {/* Bio */}
          <p className="text-sm leading-relaxed text-foreground/70 border-l-2 border-primary/20 pl-4">
            {bio}
          </p>

          {/* Stats Grid */}
          <div
            className="grid grid-cols-1 gap-3"
            role="list"
            aria-label="Instructor statistics"
          >
            <motion.div
              whileHover={{ y: -2 }}
              className="group/stat relative overflow-hidden rounded-xl border border-border/30 bg-gradient-to-br from-amber-500/10 to-transparent p-4 transition-all hover:border-amber-500/30"
              role="listitem"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 transition-opacity group-hover/stat:opacity-100" />
              <div className="relative space-y-1">
                <div className="flex items-center gap-1.5">
                  <Star
                    className="h-3.5 w-3.5 fill-amber-500 text-amber-500"
                    aria-hidden="true"
                  />
                  <span className="text-xs font-medium uppercase tracking-wider text-foreground/60">
                    Rating
                  </span>
                </div>
                <p className="text-2xl font-bold text-foreground tabular-nums">
                  {rating}
                </p>
                <p className="text-xs text-foreground/50">Instructor Score</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -2 }}
              className="group/stat relative overflow-hidden rounded-xl border border-border/30 bg-gradient-to-br from-primary/10 to-transparent p-4 transition-all hover:border-primary/30"
              role="listitem"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover/stat:opacity-100" />
              <div className="relative space-y-1">
                <div className="flex items-center gap-1.5">
                  <Users
                    className="h-3.5 w-3.5 text-primary"
                    aria-hidden="true"
                  />
                  <span className="text-xs font-medium uppercase tracking-wider text-foreground/60">
                    Students
                  </span>
                </div>
                <p className="text-2xl font-bold text-foreground tabular-nums">
                  {students}
                </p>
                <p className="text-xs text-foreground/50">Total Enrolled</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -2 }}
              className="group/stat relative overflow-hidden rounded-xl border border-border/30 bg-gradient-to-br from-emerald-500/10 to-transparent p-4 transition-all hover:border-emerald-500/30"
              role="listitem"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 transition-opacity group-hover/stat:opacity-100" />
              <div className="relative space-y-1">
                <div className="flex items-center gap-1.5">
                  <Award
                    className="h-3.5 w-3.5 text-emerald-500"
                    aria-hidden="true"
                  />
                  <span className="text-xs font-medium uppercase tracking-wider text-foreground/60">
                    Courses
                  </span>
                </div>
                <p className="text-2xl font-bold text-foreground tabular-nums">
                  {courses}
                </p>
                <p className="text-xs text-foreground/50">Published</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CourseCurriculum() {
  return (
    <motion.div
      variants={itemVariants}
      className="group relative overflow-hidden rounded-2xl border border-border/40 bg-background/60 p-6 backdrop-blur transition-all hover:border-border/60 hover:shadow-lg"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10" />

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-foreground">
            Course Curriculum
          </h3>
          <Badge variant="secondary" className="bg-background/50">
            {CURRICULUM_DATA.length} Sections
          </Badge>
        </div>

        <div className="space-y-4">
          {CURRICULUM_DATA.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="overflow-hidden rounded-xl border border-border/30 bg-background/30"
            >
              {/* Section Header */}
              <button
                className="w-full p-4 text-left transition-colors hover:bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                aria-expanded="false"
                aria-label={`${section.title}, ${section.lessons.length} lessons, ${section.duration}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">
                      {section.title}
                    </h4>
                    <p className="text-xs text-foreground/60">
                      {section.lessons.length} lessons · {section.duration}
                    </p>
                  </div>
                  <ChevronRight
                    className="h-5 w-5 text-foreground/40 transition-transform"
                    aria-hidden="true"
                  />
                </div>
              </button>

              {/* Lessons List */}
              <div className="space-y-0 border-t border-border/20">
                {section.lessons.map((lesson, lessonIndex) => {
                  const Icon =
                    lesson.type === "video"
                      ? PlayCircle
                      : lesson.type === "article"
                        ? FileText
                        : CheckCircle2;

                  return (
                    <motion.button
                      key={lessonIndex}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      disabled={lesson.isLocked}
                      className="group/lesson flex w-full items-center justify-between border-b border-border/10 p-4 text-left transition-all hover:bg-background/40 disabled:cursor-not-allowed disabled:opacity-50 last:border-b-0 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                      aria-label={`${lesson.title}, ${lesson.type}, ${lesson.duration}${lesson.isLocked ? ", locked" : ""}${lesson.isCompleted ? ", completed" : ""}`}
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-full border ${
                            lesson.isCompleted
                              ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-500"
                              : "border-border/40 bg-background/50 text-foreground/60"
                          }`}
                        >
                          {lesson.isLocked ? (
                            <Lock className="h-4 w-4" />
                          ) : lesson.isCompleted ? (
                            <CheckCircle2 className="h-4 w-4" />
                          ) : (
                            <Icon className="h-4 w-4" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">
                            {lesson.title}
                          </p>
                          <p className="text-xs text-foreground/50 capitalize">
                            {lesson.type} · {lesson.duration}
                          </p>
                        </div>
                      </div>
                      {!lesson.isLocked && (
                        <PlayCircle className="h-4 w-4 text-foreground/40 opacity-0 transition-opacity group-hover/lesson:opacity-100" />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export function CourseContentPage() {
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
          <CourseHeader />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Video Player */}
            <VideoPlayer />

            {/* Course Stats */}
            <CourseStats />

            {/* Two Column Layout */}
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Curriculum - Takes 2 columns */}
              <div className="lg:col-span-2">
                <CourseCurriculum />
              </div>

              {/* Instructor - Takes 1 column */}
              <div className="lg:col-span-1">
                <InstructorCard {...INSTRUCTOR_DATA} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
