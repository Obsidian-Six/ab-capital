export const dynamic = "force-static";

import { SITE_URL } from "@/content/site";
import { pageEntries, sitemapIndex, xml } from "@/lib/sitemap";

/**
 * /sitemap_index.xml — same address Rank Math uses today.
 * Production adds post-sitemap.xml (blog) and category-sitemap.xml from the CMS.
 * Elementor template URLs and already-redirecting URLs are no longer listed.
 */
export function GET() {
  const latest = pageEntries().map((e) => e.lastmod).sort().at(-1)!;
  return xml(sitemapIndex([{ loc: `${SITE_URL}/page-sitemap.xml`, lastmod: latest }]));
}
