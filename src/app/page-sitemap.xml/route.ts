export const dynamic = "force-static";

import { pageEntries, urlset, xml } from "@/lib/sitemap";

export function GET() {
  return xml(urlset(pageEntries()));
}
