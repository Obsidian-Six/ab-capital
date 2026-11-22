import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";

const isProduction = process.env.SITE_ENV === "production";

/**
 * Fixes today's malformed robots.txt ("Allow: /Sitemap: ..." on one line),
 * explicitly welcomes AI search crawlers, and blocks everything on staging/previews.
 */
export default function robots(): MetadataRoute.Robots {
  if (!isProduction) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "PerplexityBot", "Google-Extended", "Bingbot"], allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap_index.xml`,
  };
}
