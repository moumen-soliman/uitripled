1:"$Sreact.fragment"
2:I[176430,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"default"]
8:I[897367,["/_next/static/chunks/d96012bcfc98706a.js","/_next/static/chunks/c1216787d4b31b65.js"],"OutletBoundary"]
9:"$Sreact.suspense"
3:T1d98,"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useId, useMemo, useState } from "react";

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    title: "Minimalist Design",
    description: "Clean lines and simple forms create timeless elegance.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    title: "Modern Simplicity",
    description: "Less is more in contemporary visual language.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&q=80",
    title: "Pure Essence",
    description: "Stripped down to the essential elements.",
  },
];

export function ImageSliderCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const headingId = useId();
  const descriptionId = useId();
  const tablistId = useId();

  const slideCount = slides.length;

  const imageVariants = useMemo((): Variants => {
    if (shouldReduceMotion) {
      return {
        enter: { opacity: 0 },
        center: { opacity: 1 },
        exit: { opacity: 0 },
      };
    }
    return {
      enter: { opacity: 0, scale: 0.98 },
      center: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 1.02 },
    };
  }, [shouldReduceMotion]);

  const paginate = (newDirection: number) => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) return slideCount - 1;
      if (nextIndex >= slideCount) return 0;
      return nextIndex;
    });
  };

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;
    setCurrentIndex(index);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case "ArrowLeft": {
        event.preventDefault();
        paginate(-1);
        break;
      }
      case "ArrowRight": {
        event.preventDefault();
        paginate(1);
        break;
      }
      case "Home": {
        event.preventDefault();
        goToSlide(0);
        break;
      }
      case "End": {
        event.preventDefault();
        goToSlide(slideCount - 1);
        break;
      }
      default:
        break;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
      className="rounded-2xl w-full max-w-3xl bg-card border border-border overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      role="group"
      aria-roledescription="carousel"
      aria-label="Design inspiration image carousel"
      aria-live="polite"
      aria-atomic="true"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* Image Slider */}
      <div className="relative h-96 bg-muted overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={currentIndex}
            src={slides[currentIndex]?.image}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: shouldReduceMotion ? 0 : 0.35,
              ease: "easeInOut",
            }}
            className="absolute w-full h-full object-cover grayscale focus-visible:outline-none transition-opacity"
            alt={slides[currentIndex]?.title}
            role="img"
            aria-describedby={descriptionId}
            aria-labelledby={headingId}
          />
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          type="button"
          onClick={() => paginate(-1)}
          className=" absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background border border-border flex items-center justify-center hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-full"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => paginate(1)}
          className=" absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background border border-border flex items-center justify-center hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-full"
          aria-label="Next slide"
        >
          <ChevronRight
            className="w-5 h-5 text-foreground"
            aria-hidden="true"
          />
        </button>

        <span className="sr-only" role="status">
          Slide {currentIndex + 1} of {slideCount}
        </span>
      </div>

      {/* Content */}
      <div
        className="p-8 border-t border-border"
        role="tablist"
        aria-label="Slide navigation"
        id={tablistId}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
            role="tabpanel"
            aria-labelledby={headingId}
            id={`slide-panel-${slides[currentIndex]?.id ?? "unknown"}`}
          >
            <h2
              id={headingId}
              className="text-2xl font-semibold text-foreground mb-2"
            >
              {slides[currentIndex]?.title}
            </h2>
            <p
              id={descriptionId}
              className="text-muted-foreground leading-relaxed"
              aria-live="polite"
            >
              {slides[currentIndex]?.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Dot Indicators */}
        <div className="flex items-center gap-2 mt-6">
          {slides.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => goToSlide(index)}
                className={`rounded-full h-1.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  isActive
                    ? "w-8 bg-primary"
                    : "w-1.5 bg-muted hover:bg-muted/80"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                role="tab"
                aria-selected={isActive}
                aria-controls={`slide-panel-${slide.id}`}
                tabIndex={isActive ? 0 : -1}
                id={`slide-tab-${slide.id}`}
              >
                <span className="sr-only">
                  {slide.title} ({index + 1} of {slideCount})
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
0:{"buildId":"bFBIq5AO28jMw9-shWxSc","rsc":["$","$1","c",{"children":[["$","$L2",null,{"code":"$3","variantCodes":{},"baseId":"image-slider-card"}],["$L4","$L5","$L6"],"$L7"]}],"loading":null,"isPartial":false}
4:["$","script","script-0",{"src":"/_next/static/chunks/caa50e77cf52fdaa.js","async":true}]
5:["$","script","script-1",{"src":"/_next/static/chunks/e0bc9c3a4105a6fe.js","async":true}]
6:["$","script","script-2",{"src":"/_next/static/chunks/48913bc585f72fa4.js","async":true}]
7:["$","$L8",null,{"children":["$","$9",null,{"name":"Next.MetadataOutlet","children":"$@a"}]}]
a:null
