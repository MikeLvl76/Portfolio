import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo = process.env.REPO_NAME;

const nextConfig: NextConfig = {
  basePath: isProd && repo ? `/${repo}` : "",
  assetPrefix: isProd && repo ? `/${repo}/` : "",
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  logging: {
    serverFunctions: false,
  },
};

export default nextConfig;
