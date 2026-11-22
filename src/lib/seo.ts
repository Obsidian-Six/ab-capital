import type { Metadata } from "next";
import { SITE_URL } from "@/content/site";

/**
 * SEO data for one URL, field for field what Rank Math outputs today.
 * In production this object is filled from WordPress (Rank Math headless API),
 * so titles, descriptions, canonicals and schema stay byte-identical.
 */
export type PageSeo = {
  path: string; // e.g. "/business-setup-in-uae-freezone/"
  title: string;
  description: string;
  keywords?: string;
  ogType: "website" | "article";
  ogTitle?: string;
  image: { url: string; width: number; height: number; alt: string; type: string };
  publishedTime?: string;
  modifiedTime: string;
  twitterLabels?: [string, string][];
  /** JSON-LD blocks, each rendered as its own <script type="application/ld+json">. */
  jsonLd: object[];
};

const ROBOTS = {
  index: true,
  follow: true,
  googleBot: undefined,
  "max-snippet": -1,
  "max-video-preview": -1,
  "max-image-preview": "large" as const,
};

export function buildMetadata(seo: PageSeo): Metadata {
  const url = SITE_URL + seo.path;
  const ogTitle = seo.ogTitle ?? seo.title;
  const other: Record<string, string> = { "og:updated_time": seo.modifiedTime };
  seo.twitterLabels?.forEach(([label, data], i) => {
    other[`twitter:label${i + 1}`] = label;
    other[`twitter:data${i + 1}`] = data;
  });

  return {
    title: { absolute: seo.title },
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: url },
    robots: ROBOTS,
    openGraph: {
      locale: "en_US",
      type: seo.ogType,
      title: ogTitle,
      description: seo.description,
      url,
      siteName: "AB Capital Services FZE",
      images: [{ ...seo.image, url: SITE_URL + seo.image.url, secureUrl: SITE_URL + seo.image.url }],
      ...(seo.ogType === "article"
        ? {
            publishedTime: seo.publishedTime,
            modifiedTime: seo.modifiedTime,
            publisher: "https://www.facebook.com/ABCapitals/",
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: seo.description,
      images: [SITE_URL + seo.image.url],
    },
    other,
  };
}

/** Safe JSON-LD serialisation (escapes "<" so content can never close the script tag). */
export function ldJson(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
