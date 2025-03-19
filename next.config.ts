import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const nextConfig: NextConfig = {
  /* config options here */
  assetPrefix: isProd ? "/Portfolio" : "",
  basePath: isProd ? "/Portfolio" : "",
  output: "export",
  reactStrictMode: true,
};

export default nextConfig;
