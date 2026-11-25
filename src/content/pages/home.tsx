import { asset } from "@/lib/asset";
import Link from "next/link";
import type { PageSeo } from "@/lib/seo";
import { WHATSAPP_LINK } from "@/content/site";
import {
  BookAppointment,
  CaseStudies,
  CtaBand,
  DownloadCta,
  Experience,
  HeroWithForm,
  IconBoxes,
  LeadFormSection,
  LogoStrip,
  MiniCta,
  PlanCards,
  PriceTables,
  QuizBanner,
  mainlandQuiz,
  ServicesGrid,
  SplitListImage,
  TableSection,
  TextCenter,
  TrendingBlogs,
  VideoTestimonials,
} from "@/components/sections/blocks";
import { FaqTabs } from "@/components/sections/extras";

/* ================= SEO (identical to Rank Math output on 22 Nov 2026) ================= */

const description =
  "Fast & Affordable Company Formation in Dubai starting from AED 3555! Expert assistance for mainland and free zone & Offshore, fast licensing, low-cost PRO services, Business Bank";

export const homeSeo: PageSeo = {
  path: "/",
  title: "Low Cost Business Setup in Dubai, UAE by AB Capital Dubai",
  description,
  keywords:
    "Low Cost Business Setup in Dubai, low-cost business setup in dubai, AB Capital Services FZE, Affordable company formation in dubai, affordable company formation in the uae",
  ogType: "website",
  image: {
    url: "/wp-content/uploads/2026/09/AB_Capital_Social_Share_1200x630.jpg",
    width: 1200,
    height: 630,
    alt: "Low cost business setup in dubai by ab capital services",
    type: "image/jpeg",
  },
  modifiedTime: "2026-11-18T14:43:53+04:00",
  twitterLabels: [
    ["Written by", "AB Capital Services"],
    ["Time to read", "23 minutes"],
  ],
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Place",
          "@id": "https://abcapital.ae/#place",
          address: { "@type": "PostalAddress", streetAddress: "Office NO 404", addressLocality: "Al Tawhidi Building 1", addressRegion: "Dubai", addressCountry: "AE" },
        },
        {
          "@type": ["FinancialService", "Organization"],
          "@id": "https://abcapital.ae/#organization",
          name: "AB Capital Services FZE",
          url: "https://abcapital.ae",
          sameAs: ["https://www.facebook.com/ABCapitals/", "https://www.instagram.com/abcapital.ae/"],
          email: "info@abcapital.ae",
          address: { "@type": "PostalAddress", streetAddress: "Office NO 404", addressLocality: "Al Tawhidi Building 1", addressRegion: "Dubai", addressCountry: "AE" },
          logo: {
            "@type": "ImageObject",
            "@id": "https://abcapital.ae/#logo",
            url: "https://abcapital.ae/wp-content/uploads/2023/07/new-logo.webp",
            contentUrl: "https://abcapital.ae/wp-content/uploads/2023/07/new-logo.webp",
            caption: "AB Capital Services FZE",
            inLanguage: "en-US",
            width: "512",
            height: "218",
          },
          openingHours: ["Mo,Tu,We,Th,Fr,Sa,Su 09:00-17:00"],
          legalName: "AB Capital Services FZE",
          location: { "@id": "https://abcapital.ae/#place" },
          image: { "@id": "https://abcapital.ae/#logo" },
          telephone: "+971 52 365 5193",
        },
        {
          "@type": "WebSite",
          "@id": "https://abcapital.ae/#website",
          url: "https://abcapital.ae",
          name: "AB Capital Services FZE",
          alternateName: "AB Capital Services Dubai",
          publisher: { "@id": "https://abcapital.ae/#organization" },
          inLanguage: "en-US",
          potentialAction: { "@type": "SearchAction", target: "https://abcapital.ae/?s={search_term_string}", "query-input": "required name=search_term_string" },
        },
        {
          "@type": "ImageObject",
          "@id": "https://abcapital.ae/wp-content/uploads/2026/09/AB-captial-logos-11-scaled.png",
          url: "https://abcapital.ae/wp-content/uploads/2026/09/AB-captial-logos-11-scaled.png",
          width: "200",
          height: "200",
          inLanguage: "en-US",
        },
        {
          "@type": "WebPage",
          "@id": "https://abcapital.ae/#webpage",
          url: "https://abcapital.ae/",
          name: "Low Cost Business Setup in Dubai, UAE by AB Capital Dubai",
          datePublished: "2023-07-23T19:31:59+04:00",
          dateModified: "2026-11-18T14:43:53+04:00",
          about: { "@id": "https://abcapital.ae/#organization" },
          isPartOf: { "@id": "https://abcapital.ae/#website" },
          primaryImageOfPage: { "@id": "https://abcapital.ae/wp-content/uploads/2026/09/AB-captial-logos-11-scaled.png" },
          inLanguage: "en-US",
        },
        {
          "@type": "Service",
          name: "Low Cost Business Setup in Dubai, UAE by AB Capital Dubai",
          description: "Fast &amp; Affordable Company Formation in Dubai starting from AED 3555! Expert assistance for mainland and free zone &amp; Offshore, fast licensing, low-cost PRO services, Business Bank",
          serviceType: "Low Cost Business Setup in Dubai",
          offers: { "@type": "Offer", price: "12,500", priceCurrency: "AED", availability: "InStock" },
          image: { "@id": "https://abcapital.ae/wp-content/uploads/2026/09/AB-captial-logos-11-scaled.png" },
          "@id": "https://abcapital.ae/#schema-83439",
          mainEntityOfPage: { "@id": "https://abcapital.ae/#webpage" },
        },
      ],
    },
  ],
};

/* ================= Content ================= */

const up = "/wp-content/uploads";

const clientLogos = [
  ["2026/09/AB-captial-logos-1-scaled.png", "IPAH Technology FZ-LLC logo"],
  ["2026/09/AB-captial-logos-2-scaled.png", "KKA Holding LLC logo"],
  ["2026/09/AB-captial-logos-3-scaled.png", "AB-captial-logos-3-scaled.png"],
  ["2026/09/AB-captial-logos-4-scaled.png", "Medkart Global logo"],
  ["2026/09/AB-captial-logos-5-scaled.png", "ZoneZero logo"],
  ["2026/09/AB-captial-logos-6-1-scaled.png", "Aegis Vertex logo"],
  ["2026/09/AB-captial-logos-7-scaled.png", "Lookinsure logo"],
  ["2026/09/AB-captial-logos-8-scaled.png", "ByChefs logo"],
  ["2026/09/AB-captial-logos-9-scaled.png", "Ray logo"],
  ["2026/09/GTL-scaled.png", "Global Trade Link (GTL) logo"],
  ["2026/09/AB-captial-logos-11-scaled.png", "Prosperity Communication logo"],
].map(([f, alt]) => ({ src: `${up}/${f}`, alt, width: 2560, height: 1131 }));

const partnerLogos = [
  ["Capture9.jpg", "Ministry of Economy UAE logo"],
  ["Capture8.jpg", "Ministry of Human Resources & Emiratisation UAE Logo"],
  ["Capture7.jpg", "UAE Ministry of Interior logo"],
  ["Capture1.jpg", "UAE Ministry of Finance logo"],
  ["Capture.jpg", "Dubai Department of Economy and Tourism logo"],
  ["Capture6.jpg", "Dubai Health Authority logo"],
  ["Capture5.jpg", "Dubai Knowledge logo"],
  ["Capture4.jpg", "Dubai Municipality logo"],
  ["Capture2.jpg", "2025/12/Capture2.jpg"],
  ["Capture3.jpg", "UAE Federal Tax Authority (FTA) logo"],
  ["Capture10.jpg", "Amer Logo"],
  ["Capture11.jpg", "Trakhees Logo"],
].map(([f, alt]) => ({ src: `${up}/2025/12/${f}`, alt, width: 257, height: 116 }));

const bankLogos = [
  ["Ajma-bank.jpg", "Ajman Bank logo"],
  ["AI-marah.jpg", "Al Maryah Community Bank logo"],
  ["adi.jpg", "Abu Dhabi Islamic Bank (ADIB) logo"],
  ["ABC.jpg", "Abu Dhabi Commercial Bank (ADCB) logo"],
  ["wio.jpg", "Wio Bank logo"],
  ["UBL.jpg", "United Bank Limited (UBL) logo"],
  ["sharjah.jpg", "Sharjah Islamic Bank logo"],
  ["ruya.jpg", "Ruya Community Islamic Bank logo"],
  ["rank.jpg", "RAKBANK logo"],
  ["mashreq.jpg", "Mashreq logo"],
  ["FAB.jpg", "First Abu Dhabi Bank (FAB) logo"],
  ["emirates-nbd.jpg", "Emirates NBD logo"],
  ["emirate-islamic.jpg", "Emirates Islamic logo"],
  ["DIB.jpg", "Dubai Islamic Bank (DIB) logo"],
  ["commerial-bank.jpg", "Commercial Bank of Dubai logo"],
  ["banq.jpg", "Banque Misr logo"],
].map(([f, alt]) => ({ src: `${up}/2026/06/${f}`, alt, width: 300, height: 150 }));

const comparisonHead = ["", "Mainland", "Freezone", "Offshore"];
const comparisonRows = [
  ["Definition", "Onshore company that is registered under the government authority of concerned Emirate.", "Company formed within a special jurisdiction that comes under a particular Emirate.", "Company registered in UAE and operating outside of UAE. company formed to act as holding company to do investments."],
  ["Ownership", "100% foreign ownership ( in some business license UAE national is required as agent only)", "Expat can hold complete 100% shares of the company. No UAE national is required.", "Expat can hold complete 100% shares of the company."],
  ["Office Space", "Office space either actual or virtual is required to start the company to operate bank account.", "Flexi desk space required which generally alloted by free zone itself.", "No office space required in UAE."],
  ["Business Scope", "Can do the business inside and outside of UAE. can deal with government projects and authorities. wide scope for mainland companies.", "Can do the business within the free zone and outside of UAE. service activity can be performed B2B.", "Free to do business outside of the Emirates."],
  ["Audit", "Auditing is not mandatory on mainland companies", "Audit is mandatory in few free zones only.", "Audit is not mandatory."],
  ["Visa", "Mainland Companies can get employment visa based on requirement of business without the limitation of the space.", "Residence visa given based on the office size and package of the license.", "Residence visa is not granted in offshore companies ."],
  ["Capital Requirement", "No Minimum capital requirement except few business activities.", "Minimum capital requirement based on the concerned free zone’s rules and regulations.", "No minimum capital requirement."],
  ["Privacy/Secrecy", "Details available to general public upon request.", "Details available to general public upon request.", "Names and owners’ identities are not made public."],
  ["Govt. Authorities for Company Setup", "Require permission from authorities like DED, Ministry of Labor (MOHRE), Dubai Municipality, Ministry of Interior (MOI) etc.", "Companies have their own rules and don’t require approvals from authorities outside the free zone.", "Ras Al Khaimah (RAK) and Jebel Ali Free Zone (JAFZA), Ajman Free Zone ( AFZA) offer offshore formation"],
  ["Setup Cost", "High", "Medium", "Low"],
  ["Bank Account", "It is easy to open a bank account regardless of the activities", "It is a bit difficult to open a bank account", "It is difficult to open a bank account"],
];
const jurisdictionTable = (col: 1 | 2 | 3) => ({ head: ["", comparisonHead[col]], rows: comparisonRows.map((r) => [r[0], r[col]]) });

export function HomePage() {
  return (
    <>
      <HeroWithForm
        bgImage={`${up}/2026/10/Golden-Hour-Workday-Over-Dubai.webp`}
        eyebrow="SEARCH FROM 1000+ BUSINESS SOLUTIONS"
        h1="Low Cost Business Setup in Dubai & Expert Business Consulting"
        bullets={[
          { icon: "bolt", text: "Fast & Low Cost Business Setup in Dubai, UAE" },
          { icon: "user", text: "10+ Years of Empowering Entrepreneurs" },
          { icon: "bank", text: "Fastest Business Bank Account Setup in UAE" },
          { icon: "globe", text: "Serving Clients Worldwide" },
        ]}
        buttons={[
          { label: "WhatsApp - Instant Reply", href: WHATSAPP_LINK, variant: "whatsapp" },
          { label: "Explore Pricing", href: "/business-setup-cost-in-dubai-mastersheet/", variant: "outline-light" },
        ]}
        formId="fluent-1-home-hero"
      />

      <LogoStrip title="TRUSTED BY HUNDREDS OF BUSINESSES" logos={clientLogos} />

      <SplitListImage
        h2="Searching for the right consultants who provide fast & affordable business setup in Dubai, UAE & who REALLY understand your requirement?"
        items={[
          "At AB Capital Services, Dubai we have a dedicated team of passionate and proficient professionals providing top-notch & low cost Company Formation services in Dubai, tailored to meet the unique needs and preferences of our clients.",
          "We firmly believe in catering to our clients’ requirements by providing personalized packages at competitive prices, while also adding value to their ideas.",
          "Our commitment to upholding the law and professional ethics ensures a smooth and successful low-cost business setup in Dubai, UAE.",
          "Our skilled team, comprising company formation experts, management leaders, and experienced business advisors, is dedicated to ensuring that your business establishment cost in Dubai remains within your budget and is completed according to your desired timelines.",
          "We take pride in helping our clients turn their dreams into reality.",
        ]}
        image={{
          src: `${up}/2024/01/dubai-1024x1024.jpg`,
          alt: "Low cost business setup in dubai Overhead shot of Dubai at night showcasing glowing highways interwoven like a network, surrounded by towering skyscrapers and bustling city lights, symbolizing opportunities for business growth with leading business setup consultants in Dubai, UAE",
          width: 1024,
          height: 1024,
        }}
      />

      <CtaBand
        title={
          <>
            CALCULATE YOUR BUSINESS <br /> ESTABLISHMENT COST
          </>
        }
        text="Calculating your business establishment cost involves tallying initial investments, estimating expenses, and budgeting for a successful launch."
        button={{ label: "CALCULATE NOW", href: "/business-setup-cost-in-uae/" }}
      />

      <ServicesGrid
        h2="Personalized Solutions to All Your Business Needs"
        intro="At AB Capital, we specialize in end-to-end business solutions designed to support entrepreneurs and companies across the UAE. From low cost business setup in Dubai & UAE with licensing to compliance, banking assistance, and brand protection, our expert team ensures a smooth and hassle-free journey at every stage of your business lifecycle."
        services={[
          { icon: "bolt", title: "Business Establishment", text: "Unlock limitless business potential in Dubai with our expert Business Formation services. From establishing bank accounts to navigating regulatory frameworks, we streamline the process, ensuring a seamless entry into the dynamic Dubai market. Trust us to pave the way for your business success in this thriving economic hub." },
          { icon: "bank", title: "Bank Account opening", text: "Unlock seamless business transactions with our expert Bank Account Opening services in Dubai. We navigate the financial landscape, ensuring swift and hassle-free establishments tailored to your unique needs. Trust us to streamline the process, providing you with the essential financial foundation for a thriving business in the dynamic Dubai market." },
          { icon: "check", title: "Accounting & Bookkeeping", text: "Simplify your business finances with our expert Bookkeeping & Accounting services. We handle everything from setting up bank accounts to ensuring compliance in Dubai. Trust us to streamline your financial processes, so you can focus on what matters – growing your business." },
          { icon: "checkCircle", title: "VAT Compliance", text: "Ensure seamless VAT compliance for your business in Dubai with our expert guidance. From setting up your VAT accounts to navigating complex regulations, we will minimize your risks and ensure your business meets all legal requirements." },
          { icon: "globe", title: "Corporate Tax Advisory", text: "Navigate Dubai’s corporate tax landscape with confidence. Our seasoned business consultants provide expert advice on optimizing your tax strategy, ensuring compliance, and maximizing your financial efficiency." },
          { icon: "user", title: "PRO Services", text: "Business establishment in Dubai involves legal procedures, government documents, and paperwork. And we will handle all that for you with AB Capital’s Corporate PRO Services. Leave the legal stuff to us so you can focus on the core of your business." },
        ]}
      />

      <BookAppointment text="We are just a call or text away. Reach out to us on Whatsapp and our expert business setup consultants will get back to you to counsel you at every step of your company formation journey." />

      <TextCenter
        title="Take The First Step Towards Low Cost Company Formation in Dubai"
        paragraphs={[
          "Looking for one of the best Business Setup Consultants in Dubai and the UAE, who understand your needs?",
          <>
            At <Link href="/" className="text-brand underline">AB Capital Business Setup Services</Link>, Dubai we stand out among one of the top company formation agencies in Dubai, offering low cost business setup in Dubai &amp; UAE. Our expert team ensures a seamless, affordable, and hassle-free company formation process, helping you establish your business with ease.
          </>,
        ]}
      />

      <PlanCards
        bgImage={`${up}/2024/01/offshore-scaled.jpg`}
        plans={[
          { title: "Dubai Mainland", text: "In the past decade, Dubai, with its excellent tax policies, has drawn in entrepreneurs and investors. You can establish your business in any part of Mainland Dubai and select from more than 2,500 business activities.", features: ["100% Business Ownership", "Investor Visa Options", "All inclusive licenses", "Free VAT Consultation", "Ability to Take on Government Projects"], timeline: "7-14 days" },
          { title: "UAE Free Zones", text: "UAE Free Zones are a perfect location for startups since they don't mandate office space for establishment. You can form your business anywhere in the UAE, with over 1,500 specialized business activities to choose from in the free zones.", features: ["100% Business Ownership", "Visa Assistance", "Starting a Bank Account", "VAT Consultation", "Dedicated Account Manager"], timeline: "3-7 days" },
          { title: "Offshore", text: "Start your business away from the mainland and explore the features of offshore company formation to establish your business or move your your business to any part of Dubai, UAE.", features: ["100% Business Ownership", "Flexible Banking Assistance", "Statutory Agent Services", "Remote Licensing", "Offshore Bank Account"], timeline: "5-10 days" },
        ]}
        disclaimer="Disclaimer : AB Capital Services FZC Is An Independent Corporate Consultancy. We Provide Advisory And Document Preparation Services. We Are Not An Official Government Entity, And Clients Can Choose To Apply Directly Through Official Government Portals For Standard Statutory Fees."
      />

      <LogoStrip title="Partners" titleTag="h4" logos={partnerLogos} />

      <MiniCta
        kicker="Approved ASP E-Invoicing Service Provider in the UAE"
        title="Approved ASP E-Invoicing Service Provider in the UAE, AB Capital Services FZC is now approved Accredited Service Provider (ASP) for e-invoicing in the UAE."
        button={{ label: "KNOW MORE ABOUT E-INVOICING", href: "/e-invoicing-service-provider-uae/" }}
      />

      <TextCenter
        bg="mist"
        after
        title="Take The First Step Towards Company Formation in Dubai"
        titleTag="h4"
        paragraphs={[
          "Looking for the top business setup consultants in Dubai, UAE? At AB Capital, we stand out among the top business formation companies in Dubai, offering low cost business setup in Dubai, UAE. Our expert team ensures a seamless, affordable, and hassle-free company formation process, helping you establish your business with ease.",
        ]}
      />

      <MiniCta
        kicker="Which UAE Business License Do I Need?"
        title="Not sure which UAE business license suits your business? Take our free 60 second quiz and instantly find out if you need a Commercial, Professional, Trading, Industrial License or Freelance Permit."
        button={{ label: "TAKE THE FREE QUIZ →", href: "/which-uae-business-license-do-i-need/" }}
      />

      <CaseStudies
        items={[
          { title: "Corporate Bank Account Opening in Dubai for Iranian Petrochemical Trader", href: "/corporate-bank-account-opening-in-dubaifor-iranian-petrochemical-trader/", image: `${up}/2026/05/Corporate-Bank-Account-Opening-in-Dubai-for-Iranian-Petrochemical-Trader.png` },
          { title: "Corporate Bank Account Opening in Dubai for Cuban Entrepreneur", href: "/corporate-bank-account-opening-in-dubai-for-cuban-entrepreneur/", image: `${up}/2026/05/Corporate-Bank-Account-Opening-in-Dubai-for-Cuban-Entrepreneur.png` },
          { title: "Corporate Tax Optimization Through Small Business Relief", href: "/corporate-tax-optimization-through-small-business-relief/", image: `${up}/2026/05/Corporate-Tax-Optimization-Through-Small-Business-Relief.png` },
        ]}
      />

      <PriceTables
        plans={[
          { name: "Ajman Nu Venture", visas: "0 Visa", price: "4999*", features: ["Business Advisory", "Zero Visa Free", "100% Foreign Ownership", "Business License", "MOA & AOA", "Free Tax/VAT Session", "0% withhold tax", "100% profit repatriation", "Flexi desk", "Dedicated Manager"] },
          { name: "Dubai Freezone", visas: "0 Visa", price: "12900*", features: ["Setup Consultation", "No visa Cost", "Full Foreign Ownership", "License Included", "MOA & AOA Provided", "Free Tax/VAT Session", "0% withhold tax", "Full Profit Transfer", "Flexible Desk Option", "Personal Account Manager"] },
          { name: "Rakez Freezone", visas: "1 Visa", price: "12010*", features: ["Expert Consultation", "1 Visa", "100% Foreign Ownership", "Business License", "MOA & AOA Drafting", "Free Tax/VAT Session", "0% withhold tax", "100% profit repatriation", "Flexi desk", "Dedicated Manager"] },
          { name: "Dubai Mainland", visas: "1 Visa", price: "19990*", features: ["Business Consultation", "1 Visa included", "100% Foreign Ownership", "Business License", "MOA & AOA", "Free Tax/VAT Session", "0% withhold tax", "100% profit repatriation", "Flexi desk", "Dedicated Manager"] },
        ]}
      />

      <LogoStrip title="Associated UAE Banks" logos={bankLogos} />

      <IconBoxes
        title="Fair & Transparent Pricing"
        items={[
          { title: "Transparent Pricing", text: "You’ll always know exactly what you’re paying for, with clear itemized quotes upfront. No surprises, just honest rates you can trust.", icon: { src: `${up}/2025/07/info-box-icon-11.png`, alt: "info box icon 11", width: 64, height: 64 } },
          { title: "No Hidden Charges", text: "We believe in integrity—there are absolutely no hidden fees. What you see is truly what you get.", icon: { src: `${up}/2025/07/info-box-icon-21.png`, alt: "info box icon 21", width: 64, height: 64 } },
          { title: "Price Match Guarantee", text: "Found a better price elsewhere? We’ll match it to ensure you get the best value without compromising on quality.", icon: { src: `${up}/2025/07/info-box-icon-31.png`, alt: "info box icon 31", width: 64, height: 64 } },
        ]}
      />

      <TableSection
        bg="mint"
        title="Which Options To Select For Company Registration In Dubai"
        subtitle="Choose the best company formation package according to your business model, business activity and jurisdiction in UAE."
        head={comparisonHead}
        rows={comparisonRows}
      />

      <Experience
        paragraphs={[
          <>
            AB Capital Services FZC is a one-stop solution offering low cost business setup in Dubai, value-added solutions to address all your business needs under one roof. Our commitment to the highest professional ethics and service quality sets us apart as we assign personal consultant for each of our client so we have the fastest TAT and give you the best results.
          </>,
          <>
            With a rapidly expanding team of qualified and dedicated professionals, we bring an innovative and commercial approach to tackle the challenges of today’s dynamic business environment. Our comprehensive services include <strong>VAT-Compliant Accounting</strong>, <strong>Audit Services</strong>, <strong>Financial Management Advisory</strong>, <strong>Corporate Finance</strong>, <strong>Feasibility Studies</strong>, <strong>Business Plans</strong>, <strong>Banking Solutions</strong>, <strong>Business Consultancy</strong>, <strong>Fast Company Formation</strong>, <strong>PRO Services</strong>, <strong>Liquidation Services</strong>, <strong>Tax Residency Certificates</strong>, and <strong>Offshore Company Formation assistance</strong>.
          </>,
          "We provide a fresh perspective, creative insights, and industry benchmarking to help you view your business in new ways through Business Analysis. Acting as a sounding board for critical financial decisions, we offer dependable strategic leadership based on our extensive experience and knowledge.",
        ]}
        stats={[
          { value: "2156+", label: "Successful Accounts Opened" },
          { value: "1439+", label: "Companies Formed" },
          { value: "15+", label: "Workforce in Action" },
          { value: "94%", label: "Account Opening Approval" },
          { value: "50+", label: "Nationalities Served" },
          { value: "3+", label: "Day Average License Setup" },
        ]}
      />

      <TrendingBlogs
        posts={[
          {
            title: "Emiratisation Deadline 31 December 2026: What UAE Mainland Businesses Must Do to Avoid Penalties",
            href: "/uae-emiratisation-deadline-2026/",
            image: `${up}/2026/11/Emiratisation-Deadline-31-December-2026-What-UAE-Mainland-Businesses-Must-Do-to-Avoid-Penalties-.png`,
            imageAlt: "UAE Emiratisation deadline 2026 - What UAE Mainland Businesses Must Do to Avoid Penalties",
            excerpt: "If you own or manage a mainland company in the UAE with 20 to 50 employees, there is an important employment regulation you should not overlook: Emiratisation. The Ministry of Human Resources and Emiratisation (MoHRE) has reminded eligible private-sector businesses to meet their 2026 Emiratisation targets before 31 December 2026.",
          },
          {
            title: "Flexi Desk vs Physical Office in UAE: What Each UAE Free Zone Actually Requires",
            href: "/flexi-desk-vs-physical-office-in-uae-free-zone/",
            image: `${up}/2026/11/Flexi-Desk-vs-Physical-Office-in-UAE-What-Each-UAE-Free-Zone-Actually-Requires-.png`,
            imageAlt: "Flexi Desk vs Physical Office in UAE- What Each UAE Free Zone Actually Requires",
            excerpt: "Choosing between a flexi desk and a physical office is one of the most important decisions when setting up a company in a UAE free zone. At first, the choice appears straightforward: a flexi desk is cheaper, while a private office offers more space and privacy. However, the real difference goes beyond the annual rental cost.",
          },
        ]}
      />

      <VideoTestimonials
        videos={[
          { id: "r0CBpPQrbg8" },
          { id: "bi0XhWUdiiY", short: true },
          { id: "vFxvDQfe0Kw", short: true },
          { id: "4Ac93WJxRzo", short: true },
          { id: "m1xTtTSZpO0", short: true },
        ]}
      />

      <QuizBanner {...mainlandQuiz} />

      <DownloadCta
        title="Complete Dubai Business Setup Checklist 2026"
        text="Download our comprehensive 2026 Dubai Company Setup Checklist in PDF covering Mainland, Free Zone, and Offshore formation. This step-by-step guide includes document requirements, timelines, tax registration, visa processing, and expert tips to fast-track your business setup in Dubai."
        button={{ label: "DUBAI COMPANY SETUP CHECKLIST FREE PDF DOWNLOAD", href: `${up}/2026/05/AB_Capital_Company_Setup_Checklist_2026-2.pdf` }}
      />

      <LeadFormSection
        h2="Ready to Take Your Business to New Heights?"
        text={[
          "Get a free consultation right away if you’re seeking for the top team of professionals to setup your business in Dubai that too affordable & fast.",
          "Expert assistance for mainland and free zone businesses, fast licensing, low-cost business setup services in Dubai & UAE.",
        ]}
        formId="fluent-1-home-bottom"
      />

      <FaqTabs
        name="home-faq"
        tabs={[
          { label: "Mainland", table: jurisdictionTable(1) },
          { label: "Freezone", table: jurisdictionTable(2) },
          { label: "Offshore", table: jurisdictionTable(3) },
          {
            label: "Account Setup",
            faqs: [
              {
                q: "How can I ensure my accounts are compliant with UAE regulations?",
                a: (
                  <>
                    <p>1. Hire a professional: Accountants &amp; compliance specialists stay updated on regulations and guide you through procedures.</p>
                    <p>2. Maintain detailed records: Keep meticulous financial records for at least 5 years.</p>
                    <p>3. Follow official guides: Utilize resources from FTA, CBUAE, and other relevant authorities.</p>
                    <p>4. Stay informed: Regularly check for updates and changes in regulations.</p>
                    <p>5. Seek regular audits: Internal audits help identify potential non-compliance areas</p>
                  </>
                ),
              },
              {
                q: "Will my business be subject to the new UAE corporate tax?",
                a: (
                  <>
                    <p>Depends on profit:</p>
                    <p>0% Tax: Profits under AED 375,000.</p>
                    <p>9% Tax: Profits above AED 375,000.</p>
                  </>
                ),
              },
              {
                q: "What's the difference between setting up in a mainland, free zone, or offshore jurisdiction?",
                a: (
                  <>
                    <p>Mainland: Access to whole UAE market, 100% ownership,</p>
                    <p>Free Zone: Tax-free, 100% ownership, specific industry focus, limited local market access.</p>
                    <p>Offshore: No physical presence in UAE, high confidentiality, no local market access.</p>
                    <p>Choose based on market access, ownership needs, and business type.</p>
                  </>
                ),
              },
            ],
          },
          {
            label: "Business Setup",
            faqs: [
              {
                q: "Why choose AB Capital for Low cost business setup in Dubai?",
                a: (
                  <>
                    <p>Looking for a low cost business setup in Dubai? AB Capital makes company formation easy, affordable, and hassle-free. We provide expert financial solutions and customized strategies to help entrepreneurs and businesses succeed.</p>
                    <p>Led by Mr. Bharat Bajaj, a pioneering FTA-approved Tax Agent, we ensure excellence and reliability in every step of your business journey.</p>
                    <p>Make your dream business a success with our low cost business setup in Dubai! Your trusted partner for success!</p>
                  </>
                ),
              },
              {
                q: "Do you offer any free consultations or workshops?",
                a: (
                  <>
                    <p>Yes, we offer free consultations to help you understand how we can support your financial goals. Additionally, we conduct workshops on key financial topics to empower our clients with valuable insights and strategies.</p>
                    <p>
                      <Link href="/get-free-consultation/" className="text-brand underline">Click to learn more or book your free session!</Link>
                    </p>
                  </>
                ),
              },
              {
                q: "Which banks offer the best corporate accounts in the UAE?",
                a: (
                  <>
                    <p>AB Capital works with top banks in the UAE to identify the best corporate account options tailored to your business needs. With our expertise, we can guide you to the most suitable banks and streamline the process. In fact, AB Capital can help you open a corporate bank account in as little as 3 business days!</p>
                    <p>
                      Reach out to us for personalized assistance at <a href="mailto:info@abcapital.ae" className="text-brand underline">info@abcapital.ae</a>
                    </p>
                  </>
                ),
              },
            ],
          },
        ]}
      />

      {/* Instagram: profile card instead of the heavy feed plugin */}
      <section className="section-y bg-white text-center">
        <div className="container-x">
          <h4 className="text-[26px] font-semibold md:text-[32px]">Watch our latest story</h4>
          <a href="https://www.instagram.com/abcapital.ae/" target="_blank" rel="noopener" className="card mx-auto mt-8 flex max-w-xl items-center gap-5 p-6 text-left">
            <img src={asset("/wp-content/uploads/sb-instagram-feed-images/abcapital.ae.webp")} alt="abcapital.ae" width={72} height={72} loading="lazy" className="h-[72px] w-[72px] rounded-full object-cover" />
            <span>
              <h3 className="text-[18px] font-semibold">abcapital.ae</h3>
              <span className="mt-1 block text-[14px] leading-relaxed">
                Accounting | Auditing | Taxation | Business Formation | Banking Solutions Contact us - +971523655193 info@abcapital.ae Visit Our Site for moreinfo
              </span>
            </span>
          </a>
        </div>
      </section>

      <BookAppointment text="We are just a call or text away. Reach out to us and our senior business setup consultants will get back to you to counsel you at every step of your company formation journey." />
    </>
  );
}
