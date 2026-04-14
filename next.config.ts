import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wordpress-1573725-6349681.cloudwaysapps.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
