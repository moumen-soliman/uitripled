import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="mb-4 text-4xl font-bold">Animation Not Found</h1>
      <p className="mb-8 text-lg text-[var(--foreground)]/70">
        The animation you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/components"
        className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-white transition-all hover:bg-accent/90"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Components
      </Link>
    </div>
  );
}
