import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  allowedDevOrigins: [
    "*.pike.replit.dev",
    "*.replit.dev",
    "*.repl.co",
    ...(process.env.REPLIT_DEV_DOMAIN
      ? [process.env.REPLIT_DEV_DOMAIN]
      : []),
  ],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
