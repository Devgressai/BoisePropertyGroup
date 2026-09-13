import type { NextConfig } from "next";

/**
 * Canonical host is the APEX. www 301s to it so a young domain does not split
 * ranking signal across two hostnames serving identical content.
 */
const nextConfig: NextConfig = {
  trailingSlash: false,
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.boisepropertygroup.com" }],
        destination: "https://boisepropertygroup.com/:path*",
        permanent: true,
      },
      {
        // The production alias serves the whole site too. The canonical tag
        // already names the apex; a redirect stops a second host being crawled.
        source: "/:path*",
        has: [{ type: "host", value: "boise-property-group.vercel.app" }],
        destination: "https://boisepropertygroup.com/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "origin-when-cross-origin" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
        ],
      },
    ];
  },
};
export default nextConfig;
