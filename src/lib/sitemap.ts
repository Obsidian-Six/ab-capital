import { SITE_URL } from "@/content/site";
import { homeSeo } from "@/content/pages/home";
import { pages } from "@/content/pages/registry";

/** Pages for page-sitemap.xml (same file name Rank Math uses today). */
export function pageEntries() {
  return [homeSeo, ...Object.values(pages).map((p) => p.seo)].map((s) => ({
    loc: SITE_URL + s.path,
    lastmod: s.modifiedTime,
  }));
}

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

export function urlset(entries: { loc: string; lastmod: string }[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map((e) => `\t<url>\n\t\t<loc>${esc(e.loc)}</loc>\n\t\t<lastmod>${e.lastmod}</lastmod>\n\t</url>`).join("\n")}
</urlset>`;
}

export function sitemapIndex(files: { loc: string; lastmod: string }[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${files.map((f) => `\t<sitemap>\n\t\t<loc>${esc(f.loc)}</loc>\n\t\t<lastmod>${f.lastmod}</lastmod>\n\t</sitemap>`).join("\n")}
</sitemapindex>`;
}

export const xml = (body: string) => new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
