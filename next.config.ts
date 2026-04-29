import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/photo-**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        pathname: "/premium_photo-**",
      },
    ],
  },
  // Calendly iframe only on /contact — avoid sending CSP on every route (can
  // contribute to blank pages in some browsers when combined with other policies).
  async headers() {
    return [
      {
        source: "/contact",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "frame-src 'self' https://calendly.com https://*.calendly.com https://app.calendly.com;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
