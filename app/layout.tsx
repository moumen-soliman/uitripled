import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { THEME_STORAGE_KEY, ThemeProvider } from "@/components/theme-provider";
import { UILibraryProvider } from "@/components/ui-library-provider";
import { baseMetadata, siteConfig } from "@/lib/seo";
import type { Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = baseMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeInitScript = `
    (() => {
      try {
        const storageKey = "${THEME_STORAGE_KEY}";
        const root = document.documentElement;
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const storedTheme = localStorage.getItem(storageKey);
        const isTheme = (value) => value === "light" || value === "dark" || value === "system";
        const activeTheme = isTheme(storedTheme) ? storedTheme : "system";
        const resolvedTheme = activeTheme === "system" ? (prefersDark ? "dark" : "light") : activeTheme;
        root.dataset.theme = resolvedTheme;
        if (resolvedTheme === "dark") {
          root.classList.add("dark");
        } else {
          root.classList.remove("dark");
        }
      } catch {
        // ignore
      }
    })();
  `;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    description: siteConfig.description,
    keywords: siteConfig.keywords.join(", "),
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      alternateName: siteConfig.shortName,
    },
    sameAs: [
      "https://x.com/moumensoliman",
      "https://www.linkedin.com/in/moumensoliman/",
    ],
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/components?query={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="/rss.xml"
          rel="alternate"
          title="UITripleD Components and Blocks"
          type="application/rss+xml"
        />
      </head>
      <body className={inter.className}>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {googleAnalyticsId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${googleAnalyticsId}');
              `}
            </Script>
          </>
        )}
        <Script
          src="https://cdn.databuddy.cc/databuddy.js"
          data-client-id={process.env.NEXT_PUBLIC_DATABUDDY_CLIENT_ID}
          crossOrigin="anonymous"
          async
        />
        <ThemeProvider>
          <UILibraryProvider>
            <NuqsAdapter>
              <Header />
              <main className="min-h-screen">{children}</main>
              <Footer />
            </NuqsAdapter>
          </UILibraryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
