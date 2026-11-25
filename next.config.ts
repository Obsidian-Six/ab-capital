import type { NextConfig } from "next";
import { legacyRedirects } from "./src/content/redirects";

/**
 * Where WordPress (the headless CMS) lives.
 * Today: https://abcapital.ae. After launch: https://cms.abcapital.ae (noindex).
 */
const WP_ORIGIN = process.env.WP_ORIGIN ?? "https://abcapital.ae";

const nextConfig: NextConfig = {
  // Preview builds load images straight from the WordPress origin so the
  // browser does not depend on the proxy. Production keeps relative
  // /wp-content/uploads paths (served via the rewrite below) so URLs stay identical.
  env: {
    NEXT_PUBLIC_ASSET_ORIGIN: process.env.SITE_ENV === "production" ? "" : WP_ORIGIN,
  },
  // Classic static rendering (no Cache Components / partial prefetch): every
  // marketing page is plain pre-built HTML with a single, smaller page payload.

  // Every WordPress URL ends with a slash. Keep it identical so no URL changes.
  trailingSlash: true,

  // Always render <title>, meta and canonical in the first HTML response,
  // for every crawler (Googlebot, Bingbot, GPTBot, ClaudeBot, PerplexityBot...).
  htmlLimitedBots: /.*/,

  poweredByHeader: false,

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },

  // Media keeps its exact WordPress path (/wp-content/uploads/...), so image
  // URLs indexed by Google Images do not change. Files are served from the CMS.
  async rewrites() {
    return [
      {
        source: "/wp-content/uploads/:path*",
        destination: `${WP_ORIGIN}/wp-content/uploads/:path*`,
      },
    ];
  },

  // Previews and staging must never be indexed (duplicate content risk).
  async headers() {
    if (process.env.SITE_ENV === "production") return [];
    return [{ source: "/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] }];
  },

  // One-hop 301s carried over from Rank Math. Full export replaces this list.
  async redirects() {
    return legacyRedirects.map(([source, destination]) => ({
      source,
      destination,
      // WordPress/Rank Math sends 301; keep the same status code.
      statusCode: 301 as const,
    }));
  },
};

export default nextConfig;
