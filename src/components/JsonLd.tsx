import { ldJson } from "@/lib/seo";

/** Renders each schema block as its own server-side <script>, readable without JavaScript. */
export function JsonLd({ blocks }: { blocks: object[] }) {
  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          className="rank-math-schema"
          dangerouslySetInnerHTML={{ __html: ldJson(block) }}
        />
      ))}
    </>
  );
}
