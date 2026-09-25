import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "127.0.0.1",
    "localhost",
    "*.cursor.sh",
    "*.cursor.com",
    "*.loca.lt",
    "funny-rules-ask.loca.lt",
  ],
};

export default nextConfig;
