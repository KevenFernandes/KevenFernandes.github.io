import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/KevenFernandes.github.io",
  assetPrefix: "/KevenFernandes.github.io/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
