import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/KevenFernandes",
  assetPrefix: "/KevenFernandes/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
