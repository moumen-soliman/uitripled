"use client";

import { Button } from "@base-ui/react/button";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const blogPosts = [
  {
    title: "Building Scalable React Applications",
    excerpt:
      "Learn the best practices and patterns for creating React applications that can grow with your business needs.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "React",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
  },
  {
    title: "Microservices Architecture Explained",
    excerpt:
      "A comprehensive guide to understanding and implementing microservices in modern applications.",
    date: "2024-01-10",
    readTime: "12 min read",
    category: "Architecture",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  },
  {
    title: "TypeScript Tips for Better Code",
    excerpt:
      "Advanced TypeScript techniques that will improve your code quality and developer experience.",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "TypeScript",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function BlogBlockBaseui() {
  return (
    <section className="bg-background px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Latest Blog Posts
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Insights, tutorials, and thoughts on web development and technology
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2"
        >
          {blogPosts.map((post, index) => (
            <motion.div key={index} variants={item}>
              <div className="group h-full overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:border-primary/50">
                <div className="relative aspect-video overflow-hidden">
                  <motion.img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute left-4 top-4">
                    <span className="inline-flex items-center rounded-full border border-border bg-background/90 px-2.5 py-0.5 text-xs font-semibold backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-3 flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="mb-2 line-clamp-2 text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>

                  <p className="mb-4 line-clamp-3 text-muted-foreground">
                    {post.excerpt}
                  </p>

                  <Button className="inline-flex h-auto items-center gap-2 bg-transparent p-0 text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                    Read More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <Button className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
            View All Posts
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
