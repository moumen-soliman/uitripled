import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "iimydr2b8o.ufs.sh",
      },
      {
        protocol: "https",
        hostname: "www.ui.tripled.work",
      },
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
      },
    ],
  },
  transpilePackages: ["@uitripled/ui", "@uitripled/registry", "@uitripled/shared"],
  turbopack: {
    root: "../../",
  },
};

export default nextConfig;
