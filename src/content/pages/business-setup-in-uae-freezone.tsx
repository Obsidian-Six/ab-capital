import Link from "next/link";
import type { PageSeo } from "@/lib/seo";
import { homeSeo } from "./home";
import {
  BlogCardView,
  DownloadCta,
  Experience,
  FaqList,
  HeroSplit,
  LeadFormSection,
  LogoStrip,
  NumberedGrid,
  QuizBanner,
  mainlandQuiz,
  TableSection,
} from "@/components/sections/blocks";
import { BookingEmbed, DocsAndTimeline, ImageContent, LicenceCards, TitledCards, TwoColumnChecks } from "@/components/sections/extras";
import { Button, CheckList, Heading, Section } from "@/components/sections/primitives";

const URL = "https://abcapital.ae/business-setup-in-uae-freezone/";
const up = "/wp-content/uploads";
const WA_FZ =
  "https://api.whatsapp.com/send/?phone=971585699300&text=Hey%21+I+came+across+your+website+and+wanted+to+know+about+Dubai+Free+Zone.&type=phone_number&app_absent=0";

const description =
  "Free zone company setup in the UAE from AED 5,500. Keep 100% ownership, get your trade licence and investor visa, and pick the right zone first time.";
const title = "Low-Cost Business Setup in Dubai Freezone by AB Capital Dubai";

const qa = (pairs: [string, string][]) =>
  pairs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } }));

/* ---------- Visible FAQ (16 questions, same order as the live page) ---------- */
const faqs: [string, string][] = [
  ["What is a Free Zone Company Setup?", "The UAE has special economic zones called Free Zones. These zones offer perks like full foreign ownership, no sponsorship requirement, no taxes, and simplified processes. A company registered and operating in a free zone is called a Free Zone company setup."],
  ["Can I own a free zone company alone?", "Yes, many Free Zones in the UAE allow a single owner with 100% control of the company. However, in some Free Zones, you must have more than one owner for business registration. If you want to set up a company with 100% ownership, you can get in touch with a business consultant, like Avyanco, for guidance."],
  ["How long does the Dubai Freezone company setup process take?", "The process of setting up a company in Dubai free zone can take from a few days to a few weeks. The overall duration depends on a number of factors, such as the specific Free Zone, licence requirements, and documentation."],
  ["Are there customs duties or restrictions in a free zone for imports/exports?", "No, there are no customs duties in Free Zones in the UAE, as they are exempt from paying customs taxes. Except for the restricted items, you can smoothly import or export goods without any restrictions."],
  ["Which is the cheapest Free zone in UAE?", "Ajman Nu Venture is recognised as the most cost-effective free zone in the UAE, with starting costs as low as AED 3,555*. The current AFZ company formation package makes it the cheapest Free zone in UAE for acquiring a free zone license (without a visa)."],
  ["Which is the cheapest Free Zone in Dubai?", "IFZA (International Free Zone Authority) is the cheapest Free Zone in Dubai, UAE."],
  ["What is the cheapest Freezone Licence in Dubai?", "The IFZA Freezone offers the cheapest free zone license in Dubai, UAE. It costs around AED 11,900 without a visa and AED 19,400 with one investor visa offered by IFZA Dubai."],
  ["What is a UAE free zone company and how is it different from a mainland company?", "A UAE free zone company is a legal entity licensed by a specific free zone authority — such as RAKEZ, IFZA, or SHAMS — rather than the UAE mainland Department of Economy and Tourism. Free zones offer 100% foreign ownership, simplified setup procedures, and 0% personal income tax. Free zone companies are restricted from direct trading with UAE mainland customers without a separate distributor arrangement. Mainland companies, licensed by DED, can trade freely across the UAE and with government entities. AB Capital advises on the correct structure based on each client’s customer base and revenue model."],
  ["Which UAE free zone is best for Indian founders and NRIs in 2026?", "RAKEZ, IFZA, and SHAMS are the three most cost-competitive and operationally practical free zones for Indian nationals and NRIs in 2026. RAKEZ in Ras Al Khaimah offers the lowest entry costs and widest range of permitted activities. IFZA in Dubai is preferred for businesses that require a Dubai business address and access to UAE banking. SHAMS in Sharjah is well-suited to media, content, and creative businesses. All three support remote formation without a UAE visit, offer investor visa eligibility, and allow 100% foreign ownership. AB Capital holds active partnerships with all three."],
  ["How much does UAE free zone company formation cost in 2026?", "UAE free zone company formation starts at AED 5,500 for a single-activity, single-shareholder licence at RAKEZ, IFZA, or SHAMS. Packages including two activities or a second shareholder range from AED 7,500 to AED 12,000. Adding an investor visa and Emirates ID brings total first-year costs to AED 13,000 to AED 20,000. Corporate bank account facilitation adds AED 1,500 to AED 3,000. AB Capital provides all-inclusive formation packages with itemised government fee disclosure before commencement."],
  ["Can I set up a UAE free zone company remotely without visiting the UAE?", "Yes. RAKEZ, IFZA, and SHAMS all support fully remote formation. Documents are submitted digitally, identity verification is conducted via video call, and the trade licence is issued electronically — no UAE visit required during the formation stage. A UAE visit is required for the investor visa process (medical fitness test and Emirates ID biometrics) and for corporate bank account opening. AB Capital plans a single consolidated UAE visit of 3 to 5 working days to complete all post-formation in-person steps."],
  ["Are UAE free zone companies subject to corporate tax in 2026?", "All UAE free zone companies must register for corporate tax with the Federal Tax Authority, regardless of expected liability. A free zone company may qualify for a 0% corporate tax rate on qualifying income as a Qualifying Free Zone Person, provided it derives income from qualifying activities and maintains adequate economic substance in the free zone. Income from UAE mainland sources is subject to the standard 9% corporate tax rate. AB Capital is an FTA Approved Tax Agency (Tax Agent Number 30008239) and advises free zone clients on corporate tax registration and qualifying income determination."],
  ["How long does free zone company formation take in the UAE?", "Standard free zone formation for non-regulated activities takes 1 to 5 business days from submission of complete documents. AB Capital’s average turnaround for RAKEZ, IFZA, and SHAMS formations is approximately 3 business days. Activities requiring external regulatory approval — healthcare, education, financial services — take 10 to 20 business days. Corporate bank account opening runs separately and typically takes 2 to 6 weeks depending on the bank and applicant profile."],
  ["Can a UAE free zone company trade with mainland customers?", "Direct trading with UAE mainland customers is restricted for standard free zone licences. A free zone entity cannot maintain a retail premises on the mainland or invoice mainland businesses for supply of goods without a separate distributor arrangement. Professional and consultancy services can often be delivered to mainland clients in practice. Businesses that need to trade directly with UAE customers, operate physical retail stores, or bid for government contracts require a mainland DED licence. AB Capital assesses each business model before recommending a structure."],
  ["What is the difference between RAKEZ, IFZA, and SHAMS?", "RAKEZ (Ras Al Khaimah Economic Zone) offers the lowest entry costs and a wide range of trading, services, and industrial activities. IFZA (International Free Zone Authority) in Dubai provides access to 1,500+ permitted activities and a Dubai business address, with flexible office options. SHAMS (Sharjah Media City) is particularly cost-competitive for media, publishing, creative, and digital businesses. All three offer 100% foreign ownership, investor visa eligibility, and remote formation support. AB Capital selects the optimal free zone based on activity, location preference, visa count, and budget."],
  ["How many investor visas can a UAE free zone company sponsor?", "A flexi-desk free zone licence typically supports 1 to 3 visas — usually one investor visa and 0 to 2 employment visas. Physical office units unlock higher quotas based on office size, approximately 1 visa per 9 square metres. For businesses planning UAE-based hires, AB Capital advises on the correct office package to support the intended headcount before formation, as upgrading later incurs additional government fees and office costs."],
  ["Can I open a UAE bank account with a free zone licence?", "Yes. A UAE free zone trade licence is accepted for corporate bank account opening at UAE banks. Required documents typically include the trade licence, certificate of incorporation, Memorandum of Association, shareholder passport copies, Emirates ID (if the shareholder holds UAE residency), and a business plan or bank reference. Account opening takes 2 to 6 weeks. Some UAE banks have additional requirements for Indian nationals, including source of funds documentation. AB Capital assists with bank selection, application preparation, and relationship manager introductions."],
  ["Is a UAE free zone company the right structure for an Indian founder?", "For most Indian expat founders and NRIs establishing a UAE business, a free zone company is the most practical starting structure. It offers the lowest setup cost (from AED 5,500), 100% foreign ownership, remote formation without a UAE visit, and investor visa eligibility. It suits consulting, technology, digital, and export-focused businesses. Mainland is recommended for founders building a UAE-facing business that requires direct customer trading or a retail premises. AB Capital assesses each founder’s specific revenue model before recommending a structure."],
];

const pick = (qs: string[]) => qs.map((q) => faqs.find(([n]) => n === q)!);

/* ---------- SEO: 4 JSON-LD blocks, as output on the live page ---------- */
const homeGraph = (homeSeo.jsonLd[0] as { "@graph": Record<string, unknown>[] })["@graph"];
const orgNode = homeGraph[1];

export const freezoneSeo: PageSeo = {
  path: "/business-setup-in-uae-freezone/",
  title,
  description,
  ogType: "article",
  image: { url: `${up}/2026/05/low-cost-business-setup-in-dubai-freezone.png`, width: 1024, height: 1024, alt: "Business Setup in Dubai Freezone", type: "image/png" },
  publishedTime: "2024-07-29T12:33:35+04:00",
  modifiedTime: "2026-10-03T08:55:40+04:00",
  twitterLabels: [["Time to read", "15 minutes"]],
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@graph": [
        homeGraph[0],
        orgNode,
        { "@type": "WebSite", "@id": "https://abcapital.ae/#website", url: "https://abcapital.ae", name: "AB Capital Services FZE", alternateName: "AB Capital Services Dubai", publisher: { "@id": "https://abcapital.ae/#organization" }, inLanguage: "en-US" },
        { "@type": "ImageObject", "@id": `https://abcapital.ae${up}/2026/05/low-cost-business-setup-in-dubai-freezone.png`, url: `https://abcapital.ae${up}/2026/05/low-cost-business-setup-in-dubai-freezone.png`, width: "200", height: "200", inLanguage: "en-US" },
        { "@type": "BreadcrumbList", "@id": `${URL}#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: "1", item: { "@id": "https://abcapital.ae", name: "Home" } }, { "@type": "ListItem", position: "2", item: { "@id": URL, name: "Business Formation in Dubai Free Zone" } }] },
        { "@type": "WebPage", "@id": `${URL}#webpage`, url: URL, name: title, datePublished: "2024-07-29T12:33:35+04:00", dateModified: "2026-10-03T08:55:40+04:00", isPartOf: { "@id": "https://abcapital.ae/#website" }, primaryImageOfPage: { "@id": `https://abcapital.ae${up}/2026/05/low-cost-business-setup-in-dubai-freezone.png` }, inLanguage: "en-US", breadcrumb: { "@id": `${URL}#breadcrumb` } },
        { "@type": "Person", "@id": "https://abcapital.ae/author/abcapitaluae-in/", name: "AB Capital Services", url: "https://abcapital.ae/author/abcapitaluae-in/", image: { "@type": "ImageObject", "@id": "https://secure.gravatar.com/avatar/c4c08c555453c25448637e3f87ed25c930305d9894a2814f578aaab428218288?s=96&amp;d=robohash&amp;r=g", url: "https://secure.gravatar.com/avatar/c4c08c555453c25448637e3f87ed25c930305d9894a2814f578aaab428218288?s=96&amp;d=robohash&amp;r=g", caption: "AB Capital Services", inLanguage: "en-US" }, sameAs: ["https://abcapital.ae"], worksFor: { "@id": "https://abcapital.ae/#organization" } },
        { "@type": "Article", headline: title, keywords: "Business Setup in Dubai Freezone", datePublished: "2024-07-29T12:33:35+04:00", dateModified: "2026-10-03T08:55:40+04:00", author: { "@id": "https://abcapital.ae/author/abcapitaluae-in/", name: "AB Capital Services" }, publisher: { "@id": "https://abcapital.ae/#organization" }, description, name: title, "@id": `${URL}#richSnippet`, isPartOf: { "@id": `${URL}#webpage` }, image: { "@id": `https://abcapital.ae${up}/2026/05/low-cost-business-setup-in-dubai-freezone.png` }, inLanguage: "en-US", mainEntityOfPage: { "@id": `${URL}#webpage` } },
      ],
    },
    {
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "Service", "@id": "https://abcapital.ae/low-cost-business-setup-in-dubai/#service", name: "Low Cost Business Setup in Dubai", description: "Company formation in Dubai from AED 5,500. Free zone licences across RAKEZ, IFZA, and SHAMS. 100% foreign ownership. Investor visa eligibility. All-inclusive pricing. FTA Approved Tax Agency, Tax Agent Number 30008239.", serviceType: "Company Formation", url: "https://abcapital.ae/low-cost-business-setup-in-dubai/", provider: { "@id": "https://abcapital.ae/#organization" }, areaServed: { "@type": "Country", name: "United Arab Emirates" }, audience: { "@type": "Audience", audienceType: "Indian expat founders, NRIs, international entrepreneurs, UAE SMEs" }, offers: { "@type": "Offer", priceCurrency: "AED", priceSpecification: { "@type": "PriceSpecification", minPrice: "5500", priceCurrency: "AED", description: "Free zone company setup from AED 5,500. All government fees included." } } },
        {
          "@type": "FAQPage",
          url: "https://abcapital.ae/low-cost-business-setup-in-dubai/",
          mainEntity: qa([
            ["What is the cheapest way to set up a company in Dubai in 2026?", "The most affordable route is a UAE free zone trade licence, starting at AED 5,500 for a single-activity, single-shareholder setup at RAKEZ, IFZA, or SHAMS. These free zones include 100% foreign ownership, a flexi-desk registered address, and investor visa eligibility — with no physical office required. AB Capital Services FZC provides all-inclusive free zone formation from AED 5,500 with full itemised government fee disclosure before any application begins."],
            ["How much does it really cost to set up a company in Dubai including all fees?", "Total first-year costs for a free zone setup including one investor visa and Emirates ID typically total AED 20,000 to AED 35,000 — covering the licence (AED 5,500 to AED 12,000), visa process (AED 5,000 to AED 8,000), and advisory fees. A mainland DED-licensed company with office lease and one investor visa typically totals AED 45,000 to AED 80,000. AB Capital provides a full first-year cost breakdown before commencement, with government fees, authority charges, and service fees listed separately."],
            ["Which is the cheapest free zone in the UAE for Indian entrepreneurs in 2026?", "RAKEZ, IFZA, and SHAMS are the three most cost-competitive free zones for Indian nationals and NRIs in 2026. All offer packages from AED 5,500, 100% foreign ownership, remote formation without a UAE visit, and investor visa eligibility. RAKEZ has the lowest entry cost. IFZA is preferred for a Dubai address. SHAMS suits media and creative businesses. AB Capital holds active formation partnerships with all three and selects the optimal free zone based on activity type, visa count, and budget."],
            ["Are there hidden costs in low cost Dubai company setup packages?", "Some agents quote the base licence fee only, then add trade name registration, notarisation, and knowledge fees after commencement. AB Capital's quotes are all-inclusive: every government fee and service cost is disclosed in writing before the process begins. Common government-fixed costs — investor visa fees, medical fitness test, Emirates ID — are listed explicitly in the initial quote. No costs are added after commencement."],
            ["Can an Indian national set up a low cost company in Dubai remotely?", "Yes. RAKEZ, IFZA, and SHAMS all support fully remote formation for Indian nationals and NRIs. Documents are submitted digitally, identity verification via video call, and the trade licence delivered electronically. A UAE visit is required for the investor visa medical and Emirates ID biometrics, and for corporate bank account opening. AB Capital coordinates a single consolidated UAE visit of 3 to 5 working days to complete all post-formation in-person steps."],
            ["Does a low cost free zone company give me a UAE residence visa?", "Yes. Free zone company shareholders are eligible for an investor residence visa issued by the relevant free zone authority. The visa grants UAE legal residency, an Emirates ID, and the right to open a personal UAE bank account. It is valid for 2 to 3 years depending on the free zone. The complete process — Entry Permit, medical, Emirates ID, and visa stamp — costs AED 5,000 to AED 8,000 in government fees. AB Capital manages the full process bundled alongside formation."],
          ]),
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "Service", "@id": `${URL}#service`, name: "UAE Free Zone Company Formation", description: "End-to-end free zone company formation across RAKEZ, IFZA, and SHAMS. From AED 5,500. 100% foreign ownership. Remote setup supported. Investor visa included. FTA Approved Tax Agency, Tax Agent Number 30008239.", serviceType: "Free Zone Company Formation", url: URL, provider: { "@id": "https://abcapital.ae/#organization" }, areaServed: { "@type": "Country", name: "United Arab Emirates" }, audience: { "@type": "Audience", audienceType: "Foreign entrepreneurs, Indian expat founders, NRIs, remote-first businesses" }, offers: { "@type": "Offer", priceCurrency: "AED", priceSpecification: { "@type": "PriceSpecification", minPrice: "5500", priceCurrency: "AED" } } },
        {
          "@type": "FAQPage",
          url: URL,
          mainEntity: qa([
            ["Which UAE free zone is best for Indian founders and NRIs in 2026?", "RAKEZ, IFZA, and SHAMS are the most cost-competitive free zones for Indian nationals and NRIs in 2026. All offer packages from AED 5,500, 100% foreign ownership, remote formation without a UAE visit, and investor visa eligibility. RAKEZ has the lowest entry cost. IFZA is preferred for a Dubai address. SHAMS suits media and creative businesses. AB Capital holds active partnerships with all three."],
            ["How much does UAE free zone company formation cost in 2026?", "UAE free zone formation starts at AED 5,500 for a single-activity, single-shareholder licence at RAKEZ, IFZA, or SHAMS. Adding an investor visa and Emirates ID brings total first-year costs to AED 13,000 to AED 20,000. AB Capital provides all-inclusive packages with itemised government fee disclosure before commencement."],
            ["Can I set up a UAE free zone company remotely without visiting the UAE?", "Yes. RAKEZ, IFZA, and SHAMS all support fully remote formation — documents submitted digitally, identity verification via video call, trade licence issued electronically. A UAE visit is required for the investor visa medical and Emirates ID biometrics, and for corporate bank account opening. AB Capital coordinates a single consolidated visit of 3 to 5 working days."],
            ["Are UAE free zone companies subject to corporate tax in 2026?", "All UAE free zone companies must register for corporate tax with the FTA. A free zone company may qualify for 0% corporate tax on qualifying income as a Qualifying Free Zone Person if it maintains adequate substance and derives income from qualifying activities. UAE mainland-sourced income is subject to the standard 9% rate. AB Capital is an FTA Approved Tax Agency (TAN 30008239) and advises on registration and qualifying income determination."],
            ["What is the difference between RAKEZ, IFZA, and SHAMS?", "RAKEZ offers the lowest entry cost and widest activity range. IFZA in Dubai provides 1,500+ activities and a Dubai address. SHAMS is most cost-competitive for media, publishing, and digital businesses. All three offer 100% foreign ownership, investor visa eligibility, and remote formation. AB Capital selects the optimal free zone based on activity, location, visa count, and budget."],
          ]),
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": ["Organization", "FinancialService"],
          "@id": "https://abcapital.ae/#organization",
          name: "AB Capital Services FZC",
          legalName: "AB Capital Services FZC",
          alternateName: ["AB Capital", "AB Capital Services", "AB Capital Dubai"],
          url: "https://abcapital.ae/",
          logo: { "@type": "ImageObject", "@id": "https://abcapital.ae/#logo", url: "https://abcapital.ae/wp-content/uploads/2023/07/new-logo.webp", contentUrl: "https://abcapital.ae/wp-content/uploads/2023/07/new-logo.webp", caption: "AB Capital Services FZC" },
          image: { "@id": "https://abcapital.ae/#logo" },
          description: "AB Capital Services FZC is an independent corporate consultancy in Bur Dubai providing business setup, corporate tax and VAT advisory, and business bank account opening support in the UAE.",
          founder: { "@id": "https://abcapital.ae/#bharat-bajaj" },
          email: "info@abcapital.ae",
          telephone: "+971585619500",
          vatID: "104126416700003",
          identifier: { "@type": "PropertyValue", propertyID: "SRTIP Free Zone Licence Number", value: "1543" },
          hasCredential: { "@type": "EducationalOccupationalCredential", name: "FTA Approved Tax Agency", credentialCategory: "Government registration", identifier: { "@type": "PropertyValue", propertyID: "Tax Agent Number (TAN)", value: "30008239" }, recognizedBy: { "@type": "GovernmentOrganization", name: "Federal Tax Authority", url: "https://tax.gov.ae/" } },
          address: { "@type": "PostalAddress", streetAddress: "Office No 404, Al Tawhidi Building, Bank Street, Bur Dubai", addressLocality: "Dubai", addressRegion: "Dubai", addressCountry: "AE" },
          areaServed: { "@type": "Country", name: "United Arab Emirates" },
          knowsAbout: ["UAE company formation", "UAE free zone company setup", "Dubai mainland company formation", "UAE corporate tax", "UAE VAT registration", "UAE corporate bank account opening"],
          sameAs: ["https://www.facebook.com/ABCapitals/", "https://www.instagram.com/abcapital.ae/", "https://www.linkedin.com/company/ab-capital-ae/", "https://www.youtube.com/@AbCapitalServices", "https://x.com/abcapitaldubai"],
        },
        { "@type": "Person", "@id": "https://abcapital.ae/#bharat-bajaj", name: "Bharat Bajaj", jobTitle: "Founder", worksFor: { "@id": "https://abcapital.ae/#organization" } },
        { "@type": "WebSite", "@id": "https://abcapital.ae/#website", url: "https://abcapital.ae/", name: "AB Capital", alternateName: ["AB Capital Services", "abcapital.ae"], publisher: { "@id": "https://abcapital.ae/#organization" }, inLanguage: "en" },
        { "@type": "WebPage", "@id": `${URL}#webpage`, url: URL, name: "Low Cost Business Setup in Dubai Free zone", isPartOf: { "@id": "https://abcapital.ae/#website" }, about: { "@id": "https://abcapital.ae/#organization" }, breadcrumb: { "@id": `${URL}#breadcrumb` }, inLanguage: "en", datePublished: "2024-07-29T12:33:35+04:00", dateModified: "2026-10-03T08:55:40+04:00", primaryImageOfPage: { "@type": "ImageObject", url: `https://abcapital.ae${up}/2026/05/low-cost-business-setup-in-dubai-freezone.png` }, mainEntity: { "@id": `${URL}#service` } },
        { "@type": "BreadcrumbList", "@id": `${URL}#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://abcapital.ae/" }, { "@type": "ListItem", position: 2, name: "Business Setup", item: "https://abcapital.ae/dubai/" }, { "@type": "ListItem", position: 3, name: "Free Zone Company Setup", item: URL }] },
        { "@type": "Service", "@id": `${URL}#service`, name: "UAE Free Zone Company Setup", serviceType: "Free zone company formation", description: "Free zone company formation in the UAE: trade licence, investor visa, Emirates ID, corporate tax registration and bank account opening assistance.", provider: { "@id": "https://abcapital.ae/#organization" }, areaServed: { "@type": "Country", name: "United Arab Emirates" }, mainEntityOfPage: { "@id": `${URL}#webpage` } },
        {
          "@type": "FAQPage",
          "@id": `${URL}#faq`,
          isPartOf: { "@id": `${URL}#webpage` },
          mainEntity: qa(
            pick([
              "How long does the Dubai Freezone company setup process take?",
              "Are there customs duties or restrictions in a free zone for imports/exports?",
              "What is a UAE free zone company and how is it different from a mainland company?",
              "Which UAE free zone is best for Indian founders and NRIs in 2026?",
              "Can I set up a UAE free zone company remotely without visiting the UAE?",
              "Are UAE free zone companies subject to corporate tax in 2026?",
              "How long does free zone company formation take in the UAE?",
              "Can a UAE free zone company trade with mainland customers?",
              "What is the difference between RAKEZ, IFZA, and SHAMS?",
              "How many investor visas can a UAE free zone company sponsor?",
              "Can I open a UAE bank account with a free zone licence?",
            ]),
          ),
        },
      ],
    },
  ],
};

/* ================= Page ================= */

export function FreezonePage() {
  return (
    <>
      <HeroSplit
        bgImage={`${up}/2023/12/freezone-scaled.jpg`}
        h1="Low Cost Business Setup in Dubai Free zone"
        subtitle="Looking for the most affordable way to start your business in Dubai? Our complete guide to low-cost business setup in Dubai Free zone"
        button={{ label: "Get Quick Information on WhatsApp", href: WA_FZ }}
        image={{ src: `${up}/2026/05/low-cost-business-setup-in-dubai-freezone.png`, alt: "low cost business setup in dubai freezone", width: 1024, height: 1024 }}
      />

      <TableSection
        title="Dubai Freezone Business Setup Costs 2026 Complete Price Guide"
        intro={["Starting Prices by Freezone"]}
        head={["FREE ZONE", "PRICING", "WHY CHOOSE"]}
        rows={[
          ["IFZA Dubai", "From AED 12,900", "(Most Popular)"],
          ["Meydan Free Zone", "From AED 12,500", "(Fastest Setup)"],
          ["Dubai South", "From AED 12,000", "(E-commerce)"],
          ["DMCC", "From AED 15,000", "(Premium)"],
          ["RAKEZ", "From AED 6,000", "(Best Value)"],
          ["DAFZA", "From AED 13,500", "(Logistics)"],
        ]}
      />

      <ImageContent
        imageLeft
        image={{ src: `${up}/2024/01/freezone-1024x1024.jpg`, alt: "Dubai skyscraper", width: 1024, height: 1024 }}
        below={
          <Button href={WA_FZ} variant="whatsapp" className="mt-6">
            Get Expert Advice on WhatsApp
          </Button>
        }
      >
        <Heading as="h2">Free Zone Company Formation in Dubai, UAE</Heading>
        <Heading as="h2" className="mt-4 !text-[22px] md:!text-[24px]">
          Unique Features &amp; Benefits of Freezone company formation in Dubai, UAE
        </Heading>
        <div className="prose-ab mt-5 text-[15.5px]">
          <ul>
            <li>
              <strong>Main Advantage:</strong> 0% corporate and personal income tax in UAE free zones.
            </li>
            <li>
              <strong>Factors for Selection:</strong>
              <ul>
                <li>Nature of the business</li>
                <li>Company size</li>
                <li>Office space availability</li>
                <li>Location</li>
                <li>Pricing</li>
              </ul>
            </li>
            <li>
              <strong>Benefits:</strong>
              <ul>
                <li>Faster business license process than offshore and mainland formations.</li>
                <li>Expert guidance for choosing the right free zone.</li>
              </ul>
            </li>
            <li>Trade License with General Trading and E commerce Activity along with Virtual Office Lease Agreement from Freezone.</li>
            <li>1 Investor/Partner VISA</li>
            <li>Digital Bank Account Opening Assistance &amp; Free Tax consultation.</li>
          </ul>
        </div>
      </ImageContent>

      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="card p-8">
            <h3 className="text-[24px] font-semibold">
              FZE or FZCO: <br />
              What&apos;s the Difference?
            </h3>
            <div className="prose-ab mt-4 text-[15.5px]">
              <p>When registering a company in Dubai free zones, it’s essential to differentiate between a Free Zone Establishment (FZE) and a Free Zone Company (FZCO).</p>
              <p>A Free Zone Establishment typically has a single shareholder, whereas a Free Zone Company functions similarly to a limited liability company, requiring two or more shareholders. Although both share similar operational procedures, the primary distinction lies in the share capital requirements.</p>
            </div>
          </div>
          <div className="card p-8">
            <h3 className="text-[24px] font-semibold">Disadvantages of company formation in Dubai Free Zone</h3>
            <p className="mt-4 text-[15.5px]">However, there are some limitations and disadvantages to consider:</p>
            <ul className="prose-ab mt-3 text-[15.5px]">
              <li>Restrictions on conducting business in Dubai or within the country.</li>
              <li>Some free zones may require a fixed investment.</li>
              <li>Inability to conduct business in Dubai Mainland.</li>
              <li>Limited office space options within the designated free zone.</li>
              <li>Inability to establish branch offices; a new company must be registered separately from the parent company.</li>
            </ul>
          </div>
        </div>
      </Section>

      <BookingEmbed />

      <QuizBanner
        eyebrow="FREE BUSINESS LICENSE QUIZ"
        h2={
          <>
            Which Business License Do I <br className="hidden md:block" />
            Need in UAE?
          </>
        }
        text="Planning to start a business in Dubai or UAE? Take our free quiz to find out exactly which business license you need — Commercial, Professional, Trading, Industrial or Freelance Permit."
        chips={["Commercial", "Professional", "Trading", "Industrial", "Freelance Permit"]}
        button={{ label: "Find My License in 60 Seconds", href: "/which-uae-business-license-do-i-need/" }}
        footnote="Free · No sign-up required · Instant result · Backed by AB Capital experts"
      />

      <ImageContent image={{ src: `${up}/2023/12/freezone-1024x1024.jpg`, alt: "placeholder icon", width: 1024, height: 1024 }}>
        <Heading as="h2">Our Services</Heading>
        <div className="prose-ab mt-5 text-[15.5px]">
          <p>We are a trusted agency for UAE freezone company formation, serving clients globally.</p>
          <p>Our experienced team of in-house professionals offers end-to-end services, including</p>
          <ul>
            <li>Corporate documentation 📄</li>
            <li>Bank account opening 🏦</li>
            <li>Provision of directors 👨‍💼</li>
            <li>Company secretary 👨🏻‍💼</li>
            <li>Nominee shareholders 📈</li>
            <li>Corporate Tax Registration 🏢</li>
          </ul>
          <p>We guide you through every step of business formation in dubai free zone and liaise with all concerned authorities.</p>
          <p>We provide additional services such as accounting, audit and assurance, payroll, taxation, banking assistance and outsourced CFO and PRO services as well.</p>
          <p>
            Meet with our team <Link href="/about-us/" className="text-brand underline">here</Link>.
          </p>
        </div>
        <Button href="/get-free-consultation/" className="mt-4">
          BOOK A FREE CONSULTATION
        </Button>
      </ImageContent>

      <TwoColumnChecks
        columns={[
          {
            title: "Benefits",
            items: [
              { strong: "Cost-Effective Setup", text: "Enjoy competitive setup fees, no minimum capital requirement, and flexible office solutions." },
              { strong: "Tax Advantages", text: "Benefit from 0% corporate tax within the Freezone (standard UAE tax applies outside)." },
              { strong: "Full Foreign Ownership", text: "Own 100% of your business without the need for a local sponsor." },
              { strong: "Flexible Business Activities", text: "Unlike the mainland, Freezones allow you to combine various business activities under a single license." },
              { strong: "Business-Friendly Setup", text: "Quick and streamlined registration processes with minimal bureaucracy." },
              { strong: "Strategic Location", text: "Proximity to major seaports and airports, ensuring excellent regional and international connectivity." },
              { strong: "World-Class Infrastructure", text: "Access to modern facilities, advanced IT systems, and dedicated business support services." },
              { strong: "Pro-Innovation Ecosystem", text: "Supportive government policies, innovation-driven initiatives, and a diverse business community." },
            ],
          },
          {
            title: "Features",
            items: [
              { strong: "Quick Company Formation", text: "Set up your business in as little as 1 to 10 business days, depending on the Freezone and license type." },
              { strong: "Easy Bank Account Opening", text: "Enjoy a streamlined process for opening corporate bank accounts with trusted UAE banks." },
              { strong: "Minimal Paperwork", text: "Simple documentation requirements make the setup process smooth and hassle-free." },
              { strong: "100% Foreign Ownership", text: "Retain full control of your business without the need for a local partner or sponsor." },
              { strong: "UAE Investor Visa", text: "Secure residency through a UAE investor visa for yourself and your dependents." },
              { strong: "0% Corporate Tax", text: "Benefit from 0% corporate tax on qualifying income, allowing for maximum profit retention." },
              { strong: "0% Withholding Tax", text: "No withholding tax on dividends or other payments, offering a tax-efficient environment." },
            ],
          },
        ]}
      />

      <TableSection
        bg="brand"
        title="Packages for Company Formation in UAE Freezones"
        intro={[
          "The cost of a UAE freezone trade license starts from AED 5,750 and can go up to AED 50,000, depending on your specific business requirements. Even if you opt for our most affordable package, Provides expert business consultation to help you select the ideal solution for establishing your company in the UAE.",
          "Our plans are designed with flexibility in mind to adapt to your unique needs. Start your UAE freezone company registration with a tailored package that meets your goals. Ensures you secure your freezone trade license quickly and offers hassle-free, end-to-end support to launch and run your business seamlessly.",
        ]}
        head={["FEATURES", "SILVER", "GOLD", "PLATINUM"]}
        rows={[
          ["Business Consultation", "yes", "yes", "yes"],
          ["100% Foreign Ownership", "yes", "yes", "yes"],
          ["Business License for 1 Year", "yes", "yes", "yes"],
          ["LLC Structure", "yes", "yes", "yes"],
          ["Activity Type", "Service / Consulting / Trading / E-Commerce", "Service / Consulting / Trading / E-Commerce", "Service / Consulting / Trading / E-Commerce"],
          ["Access to reminders and notifications on License, Visa and ID renewal", "yes", "yes", "yes"],
          ["Flexi Office", "yes", "yes", "yes"],
          ["1 Lifetime Visa", "No", "yes", "yes"],
          ["Medical Fitness Test of Owner / Investor", "no", "yes", "yes"],
          ["Biometric for Owner / Shareholder", "no", "yes", "yes"],
          ["Corporate Tax Registration", "no", "no", "yes"],
          ["Assistance in Bank Account Opening", "no", "no", "yes"],
          ["VAT Registration", "no", "no", "yes"],
          ["Price", "AED 5,750*", "AED 12,000*", "AED 49,500*"],
        ]}
        highlightLast
      />

      <NumberedGrid
        title={
          <>
            Costs Most <br /> Packages Leave Out
          </>
        }
        itemTag="h2"
        items={[
          { title: "1. Visa Deposits", text: "Some free zones require refundable deposits." },
          { title: "2. Bank Account Costs", text: "Certain banks require minimum balances." },
          { title: "3. Compliance Costs", text: "Accounting and VAT may become mandatory." },
          { title: "4. Office Upgrades", text: "Growing businesses eventually need physical offices." },
          { title: "5. Immigration Expenses", text: "Dependent visas add extra costs." },
        ]}
      />

      <Section bg="mist">
        <div className="mx-auto max-w-3xl text-center">
          <Heading as="h2">Best UAE Free Zone Locations</Heading>
          <p className="mt-4 text-[16px] leading-relaxed">UAE has multiple Free Zones for business registration, each with its distinct set of regulations and advantages. Find out more about the most popular Free Zones here.</p>
        </div>
      </Section>
      <LogoStrip
        title=""
        titleTag="p"
        marquee={false}
        bg="mist"
        logos={[
          ["business-setup-in-ifza-free-zone-300x148-1.png", "business setup in ifza free zone 300x148 1"],
          ["rakez-ras-al-khaimah-free-zone-300x148-1.png", "rakez ras al khaimah free zone 300x148 1"],
          ["srtip-free-zone-authority-300x148-1.png", "srtip free zone authority 300x148 1"],
          ["sharjah-media-city-shams-free-zone-business-setup-300x148-1.png", "sharjah media city shams free zone business setup 300x148 1"],
          ["spc-free-zone-300x148-1.png", "spc free zone 300x148 1"],
          ["ajman-free-zone-business-setup-300x148-1.png", "ajman free zone business setup 300x148 1"],
          ["dubai-airport-freezone-300x148-1.png", "dubai airport freezone 300x148 1"],
          ["dmcc-dubai-freezone-company-setup-300x148-1.png", "dmcc dubai freezone company setup 300x148 1"],
          ["jebel-ali-free-zone-300x148-1.png", "jebel ali free zone 300x148 1"],
          ["dubai-international-financial-centre-business-formation-300x148-1.png", "dubai international financial centre business formation 300x148 1"],
          ["meydan-free-zone-300x148-1.png", "meydan free zone 300x148 1"],
          ["duqe-free-zone-300x148-1.png", "duqe free zone 300x148 1"],
        ].map(([f, alt]) => ({ src: `${up}/2025/07/${f}`, alt, width: 300, height: 148 }))}
      />

      <NumberedGrid
        bg="brand"
        titleTag="h3"
        title={
          <>
            Which Free Zone Suits Your <br /> Business
          </>
        }
        items={[
          { title: "1.Best for Ecommerce", text: <CheckList iconClass="text-white" items={["Meydan Free Zone", "IFZA"]} /> },
          { title: "2. Best for Trading", text: <CheckList iconClass="text-white" items={["DMCC", "JAFZA"]} /> },
          { title: "3. Best for Tech Startups", text: <CheckList iconClass="text-white" items={["Dubai Silicon Oasis"]} /> },
          { title: "4. Best for Consulting", text: <CheckList iconClass="text-white" items={["IFZA", "Meydan"]} /> },
          { title: "5. Best for Crypto Businesses", text: <CheckList iconClass="text-white" items={["DMCC", "DIFC"]} /> },
        ]}
      />

      <LicenceCards
        title="The Best Business Licences in the UAE Free Zones"
        intro="Free Zones offer distinct advantages depending on the industry and niche. Here are some of the common business licence types you can obtain in a UAE Free Zone."
        items={[
          { title: "Trading & Import/Export", text: "Ideal for businesses that buy, store, and sell goods within UAE or overseas.", image: { src: `${up}/elementor/thumbs/Import-r92vr1x9qix53cbya5whqazz0kes3n71payw4v0lba.jpg`, alt: "Import" } },
          { title: "E-commerce & Online Stores", text: "Launch your digital storefront or marketplace under a secure licence.", image: { src: `${up}/elementor/thumbs/ecommerce-optimization-r92vvhpu0czvx1vud2z2i6oc02j6g6tez9vfpwfnxi.png`, alt: "ecommerce-optimization" } },
          { title: "Digital Marketing & Media", text: "Perfect for content creators, influencers, media firms, and ad agencies.", image: { src: `${up}/elementor/thumbs/Mediia-r92vzuovpoyrrxjtwgtrkl2b7f1h5n4l8utiv3yx2e.jpg`, alt: "Mediia" } },
          { title: "Business Consulting", text: "Offer expert advice in management, HR, finance, or any professional niche.", image: { src: `${up}/elementor/thumbs/portrait-young-woman-standing-white-scaled-r6kcxlgj145yu6hfu1pnpyglrn83ur0spsx0las2qu.jpg`, alt: "A girl in business suit smiling" } },
          { title: "Freelancer Permit", text: "Suitable for independent designers, writers, developers, and remote professionals.", image: { src: `${up}/elementor/thumbs/how-to-write-moa-in-UAE-r3rgs3obpn0i6b1freg8o5lelu9pf8u1waoo4a7wme.png`, alt: "how to write moa in UAE" } },
          { title: "Logistics & Supply Chain", text: "Run operations in shipping, cargo handling, or inventory management.", image: { src: `${up}/elementor/thumbs/thumb-1920-153011-r38w0eisp573yqc2xjqgoko1v4bo0rz9snh1avhxie.jpg`, alt: "thumb-1920-153011" } },
          { title: "General Trading Licence", text: "Sell multiple product types under one flexible, comprehensive licence.", image: { src: `${up}/2025/07/General-Trading-License.png`, alt: "General Trading License" } },
          { title: "Educational & Training Services", text: "Start an institute for professional development or corporate training.", image: { src: `${up}/2025/07/Training-Institute-License.jpg`, alt: "Training Institute License" } },
        ]}
      />

      <TitledCards
        bg="dark"
        title="The AB Capital Promise"
        items={[
          { title: "MoFA Recognized Business License", text: "Unlock new horizons with a license recognized by the Ministry of Foreign Affairs.", icon: { src: `${up}/2026/06/icone.jpg-150x150.jpeg`, alt: "icone.jpg", width: 150, height: 150 } },
          { title: "Guaranteed Bank Account Opening", text: "Simplify your financial operations with our support and services.", icon: { src: `${up}/2026/06/Guaranteed-Bank-Account-Opening.jpg-150x150.jpeg`, alt: "Guaranteed Bank Account Opening.jpg", width: 150, height: 150 } },
          { title: "2500+ Business Activites", text: "Access a dynamic array of business opportunities to suit your vision.", icon: { src: `${up}/2026/06/Business-Activites.jpg-150x150.jpeg`, alt: "Business Activites.jpg", width: 150, height: 150 } },
          { title: "Flexi-Desk included with license", text: "Enjoy the convenience and flexibility of our included workspace.", icon: { src: `${up}/2026/06/Flexi-Desk-included-with-license.jpg-150x150.jpeg`, alt: "Flexi Desk included with license.jpg", width: 150, height: 150 } },
        ]}
      />

      <Experience
        bg="white"
        numberTag="h2"
        paragraphs={[
          "⭐AB Capital Services is a boutique firm providing low-cost, value-added business solutions.",
          "⭐Committed to high professional ethics and service quality.",
          "⭐Rapidly expanding team of qualified professionals offering innovative approach.",
          "⭐Comprehensive services include accounting, audit, finance, consultancy, formation, and offshore registration.",
          "⭐Offers fresh perspectives and industry benchmarking through Business Analysis.",
          "⭐Provides strategic leadership for critical financial decisions based on extensive experience.",
        ]}
        stats={[
          { value: "2156+", label: "Successful Accounts Opened" },
          { value: "1439+", label: "Companies Formed" },
          { value: "15+", label: "Workforce in Action" },
        ]}
      />

      <DocsAndTimeline
        groups={[
          { label: "Individual Shareholder", docs: ["Passport Copy (Valid for at least 6 months)", "Visa Page Copy (if applicable)", "Emirates ID (if applicable)", "Passport-sized Photos", "3 Name Choices"] },
          { label: "Corporate Shareholder", docs: ["Company Trade License / Certificate of Incorporation", "Memorandum of Association", "Board of Resolution for Company Setup and Appointment of Authorized Signatory", "UBO List", "Incumbency Certificate", "3 Name Choices", "Passport copy UBO of the Company", "Visa copy UBO of the Company", "Emirates ID UBO of the Company"] },
        ]}
        steps={["Submit your application with required documents", "Immigration Card & E-channel Application Issued", "Entry Permit, Change Status, Medical", "Investor Visa Issued and Emirates ID Issued"]}
      />

      <TitledCards
        title="Free Zone Rules You Must Follow"
        items={[
          { title: "1. Business Activity Restrictions", text: "Your company can only operate under approved activities listed on the license." },
          { title: "2. Office Requirements", text: "Some free zones require: Flexi desk Shared office Physical office depending on visa quota." },
          { title: "3. Annual Renewal Mandatory", text: "Every company must renew: License Immigration card Lease agreement" },
          { title: "4. VAT Registration Rules", text: "Businesses crossing AED 375,000 annual taxable revenue must register for VAT." },
          { title: "5. Corporate Tax Compliance", text: "UAE corporate tax rules now apply to many businesses." },
          { title: "6. Banking Compliance", text: "Banks perform strict AML and KYC reviews." },
        ]}
      />

      <NumberedGrid
        bg="brand"
        cols={2}
        title="Common Mistakes to Avoid"
        items={[
          { title: "1. Choosing Based Only on Price", text: "Cheap free zones sometimes create banking issues later." },
          { title: "2. Selecting Wrong Activities", text: "Incorrect activities can create compliance problems." },
          { title: "3. Ignoring Renewal Costs", text: "Many businesses underestimate yearly expenses." },
          { title: "4. Poor Banking Preparation", text: "Bank rejection rates remain high for poorly structured businesses." },
        ]}
      />

      <QuizBanner {...mainlandQuiz} />

      <TableSection
        title="Free Zone vs Mainland at a Glance"
        head={["Factor", "Free Zone", "Mainland"]}
        rows={[
          ["Ownership", "100% foreign", "100% foreign"],
          ["UAE Market Access", "Limited in some cases", "Full"],
          ["Office Requirement", "Flexible", "Physical office mandatory"],
          ["Cost", "Lower", "Higher"],
          ["Visa Flexibility", "Moderate", "Strong"],
          ["Best For", "International business", "Local UAE operations"],
        ]}
      />

      <FaqList bg="mist" faqs={faqs.map(([q, a]) => ({ q, a: <p>{a}</p> }))} />

      <LeadFormSection h2="Ready to Start Your Offshore Business in Dubai?" text={["Get started with your business needs, we reach out with free and qualified guidance."]} formId="fluent-1-freezone" />

      <Section bg="mint">
        <Heading as="h2" center>
          Blogs
        </Heading>
        <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
          <BlogCardView
            tag="h2"
            b={{
              title: "How Long Does Company Formation in Dubai Really Take in 2026",
              href: "/company-formation-in-dubai-in-2026/",
              image: `${up}/2026/01/How-Long-Does-Company-Formation-in-Dubai-Really-Take-in-2026.png`,
              imageAlt: "How Long Does Company Formation in Dubai Really Take in 2026",
              excerpt: "One of the first questions every entrepreneur asks before starting a business in the UAE is simple and practical: how long does …",
            }}
          />
          <BlogCardView
            tag="h2"
            b={{
              title: "2026 Top 26 Low Investment Business Ideas in Dubai, UAE",
              href: "/low-investment-business-ideas-in-dubai-uae/",
              image: `${up}/2025/12/2026-Top-26-Low-Investment-Business-Ideas-to-Start-in-Dubai-UAE.png`,
              imageAlt: "2026 Top 26 Low Investment Business Ideas in Dubai, UAE",
              excerpt: "Dubai continues to attract entrepreneurs because of its strong economy, tax advantages, global connectivity, and ease of doing business. If you are …",
            }}
          />
        </div>
      </Section>

      <DownloadCta
        titleTag="h2"
        title="Complete Dubai Business Setup Guide 2026"
        text="Download our comprehensive 2026 UAE Company Setup Checklist covering Mainland, Free Zone, and Offshore formation. This step-by-step guide includes document requirements, timelines, tax registration, visa processing, and expert tips to fast-track your business setup in Dubai."
        button={{ label: "2026 UAE COMPANY SETUP CHECKLIST", href: `${up}/2026/05/Dubai_Freezones_Complete_List_2026_AB_Capital.pdf` }}
      />
    </>
  );
}
