import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { HomePage, homeSeo } from "@/content/pages/home";

export const metadata: Metadata = buildMetadata(homeSeo);

export default function Page() {
  return (
    <>
      <JsonLd blocks={homeSeo.jsonLd} />
      <HomePage />
    </>
  );
}
