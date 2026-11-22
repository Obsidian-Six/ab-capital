import type { PageSeo } from "@/lib/seo";
import { FreezonePage, freezoneSeo } from "./business-setup-in-uae-freezone";

/**
 * All coded pages, keyed by their WordPress slug (URL stays identical).
 * The 87 remaining pages are added here template by template.
 */
export const pages: Record<string, { seo: PageSeo; Page: () => React.ReactNode }> = {
  "business-setup-in-uae-freezone": { seo: freezoneSeo, Page: FreezonePage },
};
