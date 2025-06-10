import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  images: { unoptimized: true },
  //   reactStrictMode: true,
  // basePath:
  //     process.env.NODE_ENV === "production" ? "/KevenFernandes.github.io" : "",
  //   assetPrefix:
  //     process.env.NODE_ENV === "production" ? "/KevenFernandes.github.io/" : "",
};

export default nextConfig;
