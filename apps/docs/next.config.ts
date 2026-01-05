import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@uitripled/react-shadcn",
    "@uitripled/react-baseui",
    "@uitripled/react-carbon",
    "@uitripled/utils",
    "@uitripled/registry",
  ],
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
      {
        protocol: "https",
        hostname: "ts-assets.b-cdn.net",
      },
    ],
  },
};

export default nextConfig;
