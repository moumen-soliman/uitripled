"use client";

import { Button } from "@base-ui/react/button";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Grid, X, ZoomIn } from "lucide-react";
import { KeyboardEvent, useState } from "react";

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500",
    title: "Abstract Architecture",
    category: "Architecture",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=500",
    title: "Modern Design",
    category: "Design",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=500",
    title: "Urban Landscape",
    category: "Nature",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=500",
    title: "Digital Art",
    category: "Art",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=500",
    title: "Creative Space",
    category: "Architecture",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=500",
    title: "Minimalist View",
    category: "Design",
  },
];

export function GalleryGridBlockBaseui() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = [
    "All",
    ...new Set(galleryImages.map((img) => img.category)),
  ];

  const filteredImages =
    filter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  const handleNext = () => {
    if (selectedImage !== null) {
      const currentIndex = galleryImages.findIndex(
        (img) => img.id === selectedImage
      );
      const nextIndex = (currentIndex + 1) % galleryImages.length;
      setSelectedImage(galleryImages[nextIndex].id);
    }
  };

  const handlePrev = () => {
    if (selectedImage !== null) {
      const currentIndex = galleryImages.findIndex(
        (img) => img.id === selectedImage
      );
      const prevIndex =
        (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      setSelectedImage(galleryImages[prevIndex].id);
    }
  };

  const selectedImageData = galleryImages.find(
    (img) => img.id === selectedImage
  );

  const handleCardKeyDown = (
    event: KeyboardEvent<HTMLDivElement>,
    imageId: number
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setSelectedImage(imageId);
    }
  };

  return (
    <section
      className="w-full bg-background px-4 py-16"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
          role="region"
          aria-labelledby="gallery-heading"
        >
          <span className="mb-4 inline-flex items-center rounded-full border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">
            <Grid className="mr-1 h-3 w-3" />
            Gallery
          </span>
          <h2
            id="gallery-heading"
            className="mb-4 text-4xl font-bold tracking-tight"
          >
            Our Portfolio
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Explore our collection of stunning visuals and creative work
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 flex flex-wrap justify-center gap-2"
          role="group"
          aria-label="Gallery categories"
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setFilter(category)}
              aria-pressed={filter === category}
              className={`inline-flex h-9 items-center justify-center rounded-md px-3 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
                filter === category
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Gallery items"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                role="listitem"
              >
                <div
                  className="group relative cursor-pointer overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-sm transition-all hover:border-ring hover:shadow-xl"
                  onClick={() => setSelectedImage(image.id)}
                  onKeyDown={(event) => handleCardKeyDown(event, image.id)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View details for ${image.title}`}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <motion.img
                      src={image.url}
                      alt={image.title}
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm"
                      aria-hidden="true"
                    >
                      <ZoomIn className="mb-2 h-8 w-8 text-muted-foreground" />
                      <h3 className="mb-1 text-center text-lg font-semibold text-muted-foreground">
                        {image.title}
                      </h3>
                      <span className="inline-flex items-center rounded-full border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">
                        {image.category}
                      </span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && selectedImageData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={() => setSelectedImage(null)}
              role="dialog"
              aria-modal="true"
              aria-labelledby="gallery-dialog-title"
              aria-describedby="gallery-dialog-description"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-h-[90vh] max-w-5xl"
              >
                {/* Close Button */}
                <Button
                  className="absolute -right-12 top-0 inline-flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-white/10"
                  onClick={() => setSelectedImage(null)}
                  aria-label="Close gallery dialog"
                >
                  <X className="h-6 w-6" />
                </Button>

                {/* Navigation Buttons */}
                <Button
                  className="absolute left-4 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-white/10"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  aria-label="View previous image"
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
                <Button
                  className="absolute right-4 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-white/10"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  aria-label="View next image"
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>

                {/* Image */}
                <motion.img
                  key={selectedImage}
                  src={selectedImageData.url}
                  alt={selectedImageData.title}
                  className="max-h-[80vh] w-auto rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />

                {/* Image Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mt-4 text-center text-muted-foreground"
                  id="gallery-dialog-description"
                >
                  <h3
                    className="mb-2 text-xl font-semibold"
                    id="gallery-dialog-title"
                  >
                    {selectedImageData.title}
                  </h3>
                  <span className="inline-flex items-center rounded-full border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">
                    {selectedImageData.category}
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
