import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { pages } from "@/content/pages/registry";

// Every page is pre-rendered to static HTML at build time.
export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}


export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const entry = pages[slug];
  return entry ? buildMetadata(entry.seo) : {};
}

export default async function Page({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const entry = pages[slug];
  if (!entry) notFound();
  const { seo, Page: Content } = entry;
  return (
    <>
      <JsonLd blocks={seo.jsonLd} />
      <Content />
    </>
  );
}
export const dynamicParams = false;
