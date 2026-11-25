/** Site-wide data: header menu, contacts, footer. Mirrors the live site exactly. */

export const SITE_URL = "https://abcapital.ae";

export const WHATSAPP_LINK =
  "https://api.whatsapp.com/send/?phone=971585699300&text=Hey%21+I+came+across+your+website+and+wanted+to+know+more+about+your+services.&type=phone_number&app_absent=0";

export const contact = {
  phoneDisplay: "+971 58 561 9500",
  phoneHref: "tel:+971585619500",
  email: "info@abcapital.ae",
  whatsappShort: "https://wa.me/+971585619500",
  calendly: "https://calendly.com/abcapitaluae/30min",
};

export const socials = [
  { name: "Facebook", href: "https://www.facebook.com/ABCapitals/", icon: "facebook" },
  { name: "Instagram", href: "https://www.instagram.com/abcapital.ae/", icon: "instagram" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/ab-capital-ae/", icon: "linkedin" },
  { name: "YouTube", href: "https://www.youtube.com/@AbCapitalServices", icon: "youtube" },
  { name: "X", href: "https://x.com/abcapitaldubai", icon: "x" },
] as const;

export const logos = {
  main: {
    src: "/wp-content/uploads/2025/12/WhatsApp-Image-2026-11-11-at-15.14.55.jpeg",
    alt: "AB Capital logo",
    width: 166,
    height: 75,
  },
  fta: {
    src: "/wp-content/uploads/2023/07/FTA-Certified-Tax-Agency-min.png",
    alt: "AB Capital, FTA Approved Tax Agency, TAN 30008239",
    width: 163,
    height: 35,
  },
};

export type NavItem = { label: string; href?: string; children?: { label: string; href: string }[] };

export const mainNav: NavItem[] = [
  {
    label: "Company Formation",
    href: "/dubai/",
    children: [
      { label: "Mainland", href: "/business-setup-in-dubai-mainland/" },
      { label: "Freezone", href: "/business-setup-in-uae-freezone/" },
      { label: "Offshore", href: "/offshore-company-formation-in-uae/" },
    ],
  },
  {
    label: "Accounting &Tax compliance",
    children: [
      { label: "Accounting", href: "/accounting-bookkeeping/" },
      { label: "Taxation & Compliance", href: "/taxation-compliance/" },
      { label: "Corporate Regulations & AML/CFT", href: "/corporate-regulations-aml-cft/" },
      { label: "Corporate Tax Deadline Calculator", href: "/corporate-tax-deadline-calculator/" },
      { label: "E Invoicing Service Provider Uae", href: "/e-invoicing-service-provider-uae/" },
    ],
  },
  {
    label: "Business Loan & Mortgage",
    children: [
      { label: "Real Estate Advisory Services", href: "/real-estate-advisory-services-uae/" },
      { label: "Business Loan", href: "/business-loan-in-uae/" },
      { label: "Mortgage Advisors", href: "/mpf/" },
    ],
  },
  { label: "Business Banking Solutions", href: "/business-banking-solutions/" },
  {
    label: "PRO Services",
    children: [
      { label: "Financial Projections", href: "/financial-forecast-projections/" },
      { label: "Dubai Customs Formation", href: "/dubai-customs-formation/" },
      { label: "Tax Residency Certificate", href: "/tax-residency-certificate/" },
    ],
  },
  {
    label: "Smart Tools",
    children: [
      { label: "Business License Finder", href: "/which-uae-business-license-do-i-need/" },
      { label: "Mainland vs Free Zone Tool", href: "/mainland-vs-free-zone-uae-quiz/" },
      { label: "Golden Visa Checker", href: "/uae-golden-visa-eligibility-quiz/" },
      { label: "Bank Account Eligibility Checker", href: "/uae-business-bank-account-opening-eligibility-checker/" },
      { label: "UAE Corporate Tax Calculator", href: "/uae-corporate-tax-calculator/" },
      { label: "E-invoicing Readiness Calculator", href: "/e-invoicing-service-provider-uae/" },
      { label: "Pricing Mastersheet", href: "/business-setup-cost-in-dubai-mastersheet/" },
    ],
  },
  { label: "About us", href: "/about-us/" },
];

export const footer = {
  tagline:
    "One stop solution for all your business needs with Low Cost Business Setup in Dubai, UAE & Price Match Guarantee",
  company: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about-us/" },
    { label: "Contact", href: "/contact/" },
    { label: "Blogs", href: "/blog-page/" },
    { label: "Privacy policy", href: "/privacy-policy-2/" },
    { label: "Sitemap", href: "/sitemap_index.xml" },
    { label: "Refund Policy", href: "/refund-policy/" },
  ],
  phones: [
    { label: "+971 585699300", href: "tel:+971585699300" },
    { label: "+971 585619500", href: "tel:+971585619500" },
    { label: "(04) 283 6127", href: "tel:+97142836127" },
  ],
  address: "Office No 404, Al Tawhidi Building, Bank Street, Bur Dubai, UAE",
  mapLink:
    "https://www.google.com/maps/dir//Al+Tawhidi+Building+1+Office+NO+404+-+near+ADCB+Bank+-+Bur+Dubai+-+Dubai+-+United+Arab+Emirates",
  copyright: "© 2026. All Rights Reserved, AB Capital Services FZC Dubai, UAE",
  disclaimer:
    "“AB Capital Services FZC is an independent corporate consultancy providing Low Cost Business Setup in Dubai and other servies. We provide advisory and document preparation services. We are not an official government entity, and clients can choose to apply directly through official government portals for standard statutory fees.”",
  license:
    "AB CAPITAL SERVICES FZC License Number 1543 from SRTIP, SHARJAH. Carrying TRN Number -104126416700003. Also visit",
  sisterSites: [
    { label: "AB Capital UK", href: "https://abcapital.uk" },
    { label: "AB Capital Global", href: "https://abcapitalglobal.com" },
  ],
};

/** Google reviews currently shown on the site (synced from Google via Trustindex). */
export const reviews = [
  { name: "Gyan Chauhan", text: "I am satisfied with their service. They are very prompt." },
  { name: "Nayyer Abrar", text: "My expience with AB Capital excellent and satisfactory. I refer it service strogly." },
  { name: "Muhammad Arshad", text: "Good quality service" },
  {
    name: "zzz -",
    text: "Had a great experience with AB Capital Services FZC. Garima, Noor, and the whole team were extremely helpful throughout the process. They helped with everything from setting up the company and opening the company and personal bank accounts to arranging the visa. The whole process was smooth, quick, and hassle-free.",
  },
  { name: "khonji 1976", text: "I am really satisfied, thank you." },
  {
    name: "riyas mtl",
    text: "I was highly impressed by how straightforward and efficient the entire experience was. Teena was friendly, and the clear instructions made submitting my documentation seamless.",
  },
  {
    name: "drprabhakar thota",
    text: "I would like to express my sincere appreciation to AB Capital for their exceptional assistance in opening my business account with ADIB Bank. Their team was highly professional, knowledgeable, and supportive throughout the entire process.",
  },
];

/** Service options used by the main enquiry form (Fluent Form #1). */
export const serviceOptions = [
  "Company Formation",
  "Business Bank Account Opening",
  "Tax Formation",
  "Book keeping & accounting",
  "VAT Compliance",
  "Corporate Tax Advisory",
  "Auditing",
  "Golden Visa",
  "PRO Services",
  "Business loan & Mortgage",
  "Others",
];

export const sourceOptions = ["Online ads", "Offline"];
