import { HallOfFameGrid } from "@/components/hall-of-fame-grid";
import { HallOfFameHero } from "@/components/hall-of-fame-hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hall of Fame",
  description: "The first 100 stargazers of the uitripled repository.",
};

async function getStargazers() {
  try {
    const res = await fetch(
      "https://api.github.com/repos/moumen-soliman/uitripled/stargazers?per_page=100",
      {
        cache: "no-store", // Don't cache - fetch fresh data on every request
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch stargazers");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching stargazers:", error);
    return [];
  }
}

export default async function HallOfFamePage() {
  const stargazers = await getStargazers();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HallOfFameHero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {stargazers.length > 0 ? (
          <HallOfFameGrid stargazers={stargazers} />
        ) : (
          <div className="text-center py-20 text-muted-foreground">
            <p>Unable to load stargazers at the moment.</p>
            <p className="text-sm mt-2">
              (This might be due to GitHub API rate limits)
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
