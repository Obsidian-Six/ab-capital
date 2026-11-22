# abcapital.ae — Next.js rebuild (sample)

Code rebuild of [abcapital.ae](https://abcapital.ae) from WordPress/Elementor to Next.js, built for **SEO parity**: same URLs, same titles, meta descriptions, canonicals, robots tags and JSON-LD schema as the live site, served as pre-built static HTML.

This sample contains two pages:

| URL | Status |
| --- | --- |
| `/` | Done: 27 sections, hero + bottom enquiry forms, FAQ tabs, 1 schema block (as live) |
| `/business-setup-in-uae-freezone/` | Done: 27 sections, 18 FAQs, booking embed, 4 schema blocks (as live) |

Plus: shared header/mega menu, footer, Google reviews, floating WhatsApp/call buttons, offer popup, `/api/lead` form endpoint, `robots.txt`, `/sitemap_index.xml`, `/page-sitemap.xml`, and the 21 existing 301 redirects.

## Run it

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
```

## Environment variables

| Variable | Purpose | Default |
| --- | --- | --- |
| `SITE_ENV` | `production` opens robots.txt and removes the `X-Robots-Tag: noindex` header. **Leave unset on previews/staging.** | unset (noindex) |
| `WP_ORIGIN` | Where WordPress media is served from. After launch: `https://cms.abcapital.ae` | `https://abcapital.ae` |
| `LEAD_WEBHOOK_URL` | Where form leads go (Zapier / CRM / Sheets). Comma-separate several. | unset (leads are logged) |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager container ID (same as live) | unset |

## SEO decisions (do not change without the SEO team)

- **`trailingSlash: true`** — every WordPress URL ends in `/`; this keeps them identical.
- **`htmlLimitedBots: /.*/`** — title, meta and canonical are always in the first HTML response, for every crawler including GPTBot, ClaudeBot and PerplexityBot.
- **Plain `<img>` with original `/wp-content/uploads/...` paths** — keeps image URLs indexed in Google Images. `next.config.ts` rewrites these paths to the CMS. (`next/image` would change every image URL.)
- **Exact heading tags** — each section keeps the H1/H2/H3/H4 used on the live page (see `Heading as=`).
- **No JavaScript needed for content** — menu dropdowns, mobile menu, FAQ accordions and tabs are HTML/CSS (`<details>`, radio tabs). Only forms, the popup and the booking iframe use JS.
- **Redirects are 301** (same status code Rank Math sends). Full Rank Math export replaces `src/content/redirects.ts` before launch.
- **Schema is copied as-is**, including today's duplicate FAQPage blocks on the free zone page. Clean-up is phase 2, after rankings are stable.

## Structure

```
src/
  app/
    page.tsx                    home
    [slug]/page.tsx             every other page (static, from the registry)
    api/lead/route.ts           form endpoint
    robots.ts, sitemap_index.xml/, page-sitemap.xml/
  components/
    layout/                     Header, Footer, FloatingButtons
    sections/                   ~25 reusable sections (primitives, blocks, extras)
    forms/                      LeadForm, LeadPopup
  content/
    site.ts                     menu, contacts, footer, reviews, form options
    redirects.ts                301 map
    pages/                      one file per page: SEO object + page composition
  lib/seo.ts                    Rank Math fields -> Next.js metadata
```

## Adding a page

1. Create `src/content/pages/<slug>.tsx` exporting `seo` (copied from the live Rank Math output) and a `Page` component built from the section components.
2. Register it in `src/content/pages/registry.ts`.
3. Run the parity check (below) against the live URL.

## Parity check before launch

For every URL compare old vs new: status code, `<title>`, meta description, canonical, robots, H1, JSON-LD types, visible word count. A page only goes live when they match.

## Notes for the content team

- Free zone FAQ "Can I own a free zone company alone?" mentions **"Avyanco"** (another consultancy) — copied as-is for parity; should be corrected.
- The free zone page outputs 3 FAQPage schema blocks, one of them with 6 questions not shown on the page — phase 2 clean-up.
