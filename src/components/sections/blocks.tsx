import { asset } from "@/lib/asset";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { LeadForm } from "@/components/forms/LeadForm";
import { contact, WHATSAPP_LINK } from "@/content/site";
import { Bg, Button, CheckList, DataTable, Heading, HTag, Img, Picture, Section } from "./primitives";

/* ---------- Hero with enquiry form (home page) ---------- */
export function HeroWithForm(p: { bgImage: string; eyebrow: string; h1: string; bullets: { icon: string; text: string }[]; buttons: { label: string; href: string; variant: "whatsapp" | "outline-light" }[]; formId: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-deep">
      <img src={asset(p.bgImage)} alt="" aria-hidden="true" fetchPriority="high" decoding="async" className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/70 via-black/45 to-black/20" aria-hidden="true" />
      <div className="container-x grid items-center gap-10 py-14 md:grid-cols-2 md:py-20">
        <div className="text-white">
          <p className="mb-4 flex items-center gap-2 text-[13px] font-medium uppercase tracking-wide">
            <Icon name="search" className="h-4 w-4" /> {p.eyebrow}
          </p>
          <h1 className="text-[34px] font-bold leading-[1.15] !text-white md:text-[50px]">{p.h1}</h1>
          <ul className="mt-6 grid gap-2 text-[15px]">
            {p.bullets.map((b) => (
              <li key={b.text} className="flex items-center gap-2.5">
                <Icon name={b.icon} className="h-4 w-4 shrink-0" /> {b.text}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            {p.buttons.map((b) => (
              <Button key={b.label} href={b.href} variant={b.variant}>
                {b.label}
              </Button>
            ))}
          </div>
        </div>
        <div className="rounded-xl bg-black/35 p-6 backdrop-blur-sm md:ml-auto md:w-[420px]">
          <LeadForm formId={p.formId} dark />
        </div>
      </div>
    </section>
  );
}

/* ---------- Page hero, split (service pages) ---------- */
export function HeroSplit(p: { bgImage: string; h1: string; subtitle: string; subtitleTag?: HTag; button: { label: string; href: string }; image: Img }) {
  const Sub = p.subtitleTag ?? "h3";
  return (
    <Section bg="brand" bgImage={p.bgImage} className="!py-16 md:!py-20">
      <div className="grid items-center gap-10 md:grid-cols-[1.1fr_1fr]">
        <div>
          <Heading as="h1">{p.h1}</Heading>
          <Sub className="mt-4 text-[18px] font-medium leading-relaxed md:text-[20px]">{p.subtitle}</Sub>
          <Button href={p.button.href} variant="whatsapp" className="mt-8">
            {p.button.label}
          </Button>
        </div>
        <Picture img={p.image} priority className="mx-auto h-auto w-full max-w-[460px] rounded-xl" />
      </div>
    </Section>
  );
}

/* ---------- Logo strip (clients, partners, banks, free zones) ---------- */
export function LogoStrip({ title, titleTag = "h2", logos, bg = "white", marquee = true }: { title: string; titleTag?: HTag; logos: Img[]; bg?: Bg; marquee?: boolean }) {
  return (
    <Section bg={bg} className="!py-12">
      {title && (
        <Heading as={titleTag} center className="mb-8 !text-[24px] md:!text-[28px]">
          {title}
        </Heading>
      )}
      {marquee ? (
        <div className="marquee overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <ul className="marquee-track flex w-max items-center gap-10">
            {[...logos, ...logos].map((l, i) => (
              <li key={i} aria-hidden={i >= logos.length ? true : undefined}>
                <Picture img={l} className="h-[70px] w-auto max-w-[180px] object-contain" />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <ul className="grid grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-6">
          {logos.map((l) => (
            <li key={l.src} className="card grid h-[96px] place-items-center p-3">
              <Picture img={l} className="max-h-[70px] w-auto object-contain" />
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}

/* ---------- Text + bullet list + image ---------- */
export function SplitListImage(p: { h2: string; items: string[]; image: Img; bg?: Bg; imageLeft?: boolean; cta?: { label: string; href: string; variant?: "whatsapp" | "dark" } }) {
  return (
    <Section bg={p.bg}>
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className={p.imageLeft ? "md:order-2" : ""}>
          <Heading as="h2">{p.h2}</Heading>
          <CheckList className="mt-6 text-[16px]" items={p.items} />
          {p.cta && (
            <Button href={p.cta.href} variant={p.cta.variant ?? "dark"} className="mt-8">
              {p.cta.label}
            </Button>
          )}
        </div>
        <Picture img={p.image} className="h-auto w-full rounded-2xl shadow-xl" />
      </div>
    </Section>
  );
}

/* ---------- Centered CTA band ---------- */
export function CtaBand(p: { title: React.ReactNode; titleTag?: HTag; text?: string; button: { label: string; href: string }; bg?: Bg; bgImage?: string }) {
  return (
    <Section bg={p.bg ?? "brand"} bgImage={p.bgImage}>
      <div className="mx-auto max-w-3xl text-center">
        <Heading as={p.titleTag ?? "h2"} className="uppercase">
          {p.title}
        </Heading>
        {p.text && <p className="mt-4 text-[16px] leading-relaxed opacity-90">{p.text}</p>}
        <Button href={p.button.href} className="mt-8 min-w-[220px]">
          {p.button.label}
        </Button>
      </div>
    </Section>
  );
}

/* ---------- Services: all six explained, server-rendered (replaces the JS circle) ---------- */
export function ServicesGrid(p: { h2: string; intro: string; services: { title: string; text: string; icon: string }[] }) {
  return (
    <Section bg="mint">
      <div className="grid gap-10 md:grid-cols-[1fr_1.6fr]">
        <div className="md:sticky md:top-40 md:self-start">
          <Heading as="h2">{p.h2}</Heading>
          <p className="mt-5 text-[16px] leading-relaxed">{p.intro}</p>
        </div>
        <ul className="grid gap-5 sm:grid-cols-2">
          {p.services.map((s) => (
            <li key={s.title} className="card p-6">
              <span className="mb-4 grid h-11 w-11 place-items-center rounded-full bg-brand text-white">
                <Icon name={s.icon} className="h-5 w-5" />
              </span>
              <h3 className="text-[18px] font-semibold">{s.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed">{s.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* ---------- Book a free appointment ---------- */
export function BookAppointment({ text }: { text: string }) {
  return (
    <Section className="text-center">
      <Heading as="h4">Book a Free Appointment</Heading>
      <p className="mx-auto mt-4 max-w-3xl text-[16px] leading-relaxed">{text}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button href={contact.phoneHref} className="min-w-[200px]">
          <Icon name="phone" className="h-4 w-4" /> CALL US
        </Button>
        <Button href={contact.whatsappShort} variant="whatsapp" className="min-w-[200px]">
          WHATSAPP US
        </Button>
      </div>
    </Section>
  );
}

/* ---------- Centered text block ---------- */
export function TextCenter(p: { title?: string; titleTag?: HTag; paragraphs: React.ReactNode[]; bg?: Bg; after?: boolean }) {
  return (
    <Section bg={p.bg}>
      <div className="mx-auto max-w-4xl text-center">
        {p.title && !p.after && <Heading as={p.titleTag ?? "h2"}>{p.title}</Heading>}
        <div className="prose-ab mt-5 text-[16px]">
          {p.paragraphs.map((t, i) => (
            <p key={i}>{t}</p>
          ))}
        </div>
        {p.title && p.after && <Heading as={p.titleTag ?? "h4"} className="mt-4">{p.title}</Heading>}
      </div>
    </Section>
  );
}

/* ---------- Jurisdiction plans (Mainland / Free Zone / Offshore) ---------- */
export function PlanCards(p: { bgImage: string; plans: { title: string; text: string; features: string[]; timeline: string }[]; disclaimer: string }) {
  return (
    <Section bg="brand" bgImage={p.bgImage}>
      <div className="grid gap-6 md:grid-cols-3">
        {p.plans.map((pl) => (
          <article key={pl.title} className="card flex flex-col p-7 text-center text-body">
            <img src={asset("/wp-content/uploads/2024/01/portfolio.png")} alt="portfolio" width={56} height={56} loading="lazy" className="mx-auto h-14 w-14" />
            <h3 className="mt-4 text-[22px] font-bold !text-ink">{pl.title}</h3>
            <p className="mt-3 text-[13.5px] leading-relaxed">{pl.text}</p>
            <CheckList className="mt-5 text-left text-[13.5px]" items={[...pl.features, `Average Timeline: ${pl.timeline}`]} />
            <Button href={WHATSAPP_LINK} className="mx-auto mt-auto !mt-7">
              Avail Now
            </Button>
          </article>
        ))}
      </div>
      <h2 className="mt-10 text-center !text-[15px] font-semibold leading-relaxed md:!text-[16px]">{p.disclaimer}</h2>
    </Section>
  );
}

/* ---------- Simple CTA with h4 + h3 (quiz / e-invoicing) ---------- */
export function MiniCta(p: { kicker: string; kickerTag?: HTag; title: string; button: { label: string; href: string }; bg?: Bg }) {
  return (
    <Section bg={p.bg} className="!py-12 text-center">
      <Heading as={p.kickerTag ?? "h4"}>{p.kicker}</Heading>
      <h3 className="mx-auto mt-4 max-w-4xl text-[17px] font-medium leading-relaxed !text-body md:text-[18px]">{p.title}</h3>
      <Button href={p.button.href} className="mt-7">
        {p.button.label}
      </Button>
    </Section>
  );
}

/* ---------- Case studies ---------- */
export function CaseStudies({ items }: { items: { title: string; href: string; image: string }[] }) {
  return (
    <Section bg="mist">
      <Heading as="h4" center>
        Case Studies
      </Heading>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {items.map((c) => (
          <article key={c.href} className="card overflow-hidden text-center">
            <img src={asset(c.image)} alt={c.title} width={460} height={460} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover" />
            <div className="p-6">
              <h4 className="text-[16px] font-semibold leading-snug">{c.title}</h4>
              <Button href={c.href} className="mt-5 !px-5 !py-2 !text-[13px]">
                View Case Study
              </Button>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button href="/case-studies/">VIEW ALL CASE STUDIES</Button>
      </div>
    </Section>
  );
}

/* ---------- Free zone price tables ---------- */
export function PriceTables({ plans }: { plans: { name: string; visas: string; price: string; features: string[] }[] }) {
  return (
    <Section>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {plans.map((pl) => (
          <article key={pl.name} className="card flex flex-col overflow-hidden text-center">
            <div className="bg-brand px-4 py-5 text-white">
              <h4 className="text-[20px] font-semibold !text-white">{pl.name}</h4>
              <p className="text-[13px] opacity-90">{pl.visas}</p>
            </div>
            <p className="py-5 font-display text-ink">
              <span className="align-top text-[12px] font-semibold">AED</span>
              <span className="text-[38px] font-bold">{pl.price}</span>
            </p>
            <CheckList className="border-t border-slate-100 px-6 pt-5 text-left text-[13.5px]" items={pl.features} />
            <div className="mt-auto p-6">
              <Button href={WHATSAPP_LINK}>Get Started</Button>
              <p className="mt-2 text-[12px] text-slate-500">*T&amp;C Apply</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Icon boxes (fair pricing, promise) ---------- */
export function IconBoxes(p: { title: string; titleTag?: HTag; items: { title: string; text: string; icon: Img }[]; bg?: Bg; cols?: 2 | 3 }) {
  return (
    <Section bg={p.bg ?? "mint"}>
      <Heading as={p.titleTag ?? "h4"} center>
        {p.title}
      </Heading>
      <div className={`mt-10 grid gap-6 ${p.cols === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
        {p.items.map((it) => (
          <article key={it.title} className={`p-7 ${p.bg === "dark" ? "flex items-start gap-5 rounded-xl bg-white/5" : "card text-center"}`}>
            <Picture img={it.icon} className={p.bg === "dark" ? "h-16 w-16 shrink-0 rounded-lg object-cover" : "mx-auto h-16 w-16 object-contain"} />
            <div>
              <h3 className={`text-[18px] font-semibold ${p.bg === "dark" ? "" : "mt-4"}`}>{it.title}</h3>
              <p className={`mt-2 text-[14.5px] leading-relaxed ${p.bg === "dark" ? "text-white/80" : ""}`}>{it.text}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Comparison table section ---------- */
export function TableSection(p: { title: string; titleTag?: HTag; subtitle?: string; intro?: string[]; head: string[]; rows: string[][]; bg?: Bg; highlightLast?: boolean; note?: string }) {
  return (
    <Section bg={p.bg}>
      <div className="mx-auto mb-10 max-w-4xl text-center">
        <Heading as={p.titleTag ?? "h2"}>{p.title}</Heading>
        {p.subtitle && <p className="mt-3 font-display text-[22px] font-semibold leading-snug text-ink md:text-[26px]">{p.subtitle}</p>}
        {p.intro?.map((t, i) => (
          <p key={i} className="mt-4 text-[16px] leading-relaxed opacity-90">
            {t}
          </p>
        ))}
      </div>
      <DataTable head={p.head} rows={p.rows} caption={p.title} tone={p.bg === "brand" ? "onBrand" : "light"} highlightLast={p.highlightLast} />
      {p.note && <p className="mt-4 text-center text-[13px] opacity-80">{p.note}</p>}
    </Section>
  );
}

/* ---------- Experience + counters ---------- */
export function Experience(p: { numberTag?: HTag; paragraphs: React.ReactNode[]; stats: { value: string; label: string }[]; bg?: Bg }) {
  const T = p.numberTag ?? "h4";
  return (
    <Section bg={p.bg ?? "mint"}>
      <div className="grid gap-12 md:grid-cols-[2fr_1fr]">
        <div>
          <T className="font-display text-[56px] font-bold leading-none text-slate-400">10+</T>
          <T className="mt-2 font-display text-[30px] font-semibold text-slate-500">Years of Experience</T>
          <div className="prose-ab mt-6 text-[15px]">
            {p.paragraphs.map((t, i) => (
              <p key={i}>{t}</p>
            ))}
          </div>
        </div>
        <dl className="grid content-start gap-6 text-center">
          {p.stats.map((s) => (
            <div key={s.label}>
              <dd className="font-display text-[40px] font-semibold leading-none text-brand">{s.value}</dd>
              <dt className="mt-1 text-[14px]">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}

/* ---------- Blog cards ---------- */
export type BlogCard = { title: string; href: string; image: string; imageAlt: string; excerpt: string };
export function TrendingBlogs({ posts }: { posts: BlogCard[] }) {
  return (
    <Section bg="brand">
      <div className="grid gap-10 md:grid-cols-[1fr_3fr]">
        <div>
          <h4 className="text-[32px] font-semibold leading-tight">Trending Blogs</h4>
          <p className="mt-4 text-[15px] leading-relaxed opacity-90">
            Read through our extensive guides on business setup in Dubai and navigate through the complexities of starting a business in Dubai.
          </p>
          <Button href="/blog-page/" className="mt-6">
            READ ALL BLOGS
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((b) => (
            <BlogCardView key={b.href} b={b} />
          ))}
        </div>
      </div>
    </Section>
  );
}
export function BlogCardView({ b, tag = "h3" }: { b: BlogCard; tag?: "h2" | "h3" }) {
  const T = tag;
  return (
    <article className="card overflow-hidden text-body">
      <Link href={b.href}>
        <img src={asset(b.image)} alt={b.imageAlt} width={800} height={450} loading="lazy" decoding="async" className="aspect-video w-full object-cover" />
      </Link>
      <div className="p-6">
        <T className="text-[18px] font-semibold leading-snug !text-ink">
          <Link href={b.href} className="hover:text-brand">
            {b.title}
          </Link>
        </T>
        <p className="mt-3 line-clamp-5 text-[14px] leading-relaxed">{b.excerpt}</p>
      </div>
    </article>
  );
}

/* ---------- Video testimonials: lightweight YouTube facade (loads player only on click) ---------- */
export function VideoTestimonials({ videos }: { videos: { id: string; short?: boolean }[] }) {
  return (
    <Section bg="mint">
      <Heading as="h4" center>
        Hear from our clientele
      </Heading>
      <ul className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-5">
        {videos.map((v) => (
          <li key={v.id}>
            <a href={v.short ? `https://www.youtube.com/shorts/${v.id}` : `https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener" className="group relative block overflow-hidden rounded-xl bg-black" aria-label="Watch client testimonial on YouTube">
              <img src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`} alt="AB Capital client testimonial video" width={480} height={360} loading="lazy" className="aspect-[9/16] w-full object-cover opacity-90 transition group-hover:opacity-100" />
              <span className="absolute inset-0 grid place-items-center">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-red-600 text-white shadow-lg">
                  <Icon name="play" className="h-6 w-6" />
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* ---------- Mainland vs Free Zone quiz banner ---------- */
export function QuizBanner(p: { eyebrow: string; h2: React.ReactNode; text: string; chips: string[]; button: { label: string; href: string }; footnote: string }) {
  return (
    <Section className="!py-12">
      <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-brand to-brand-deep p-8 text-center text-white md:p-12">
        <p className="mb-3 inline-block rounded-full bg-white/15 px-4 py-1 text-[12px] font-semibold tracking-widest">{p.eyebrow}</p>
        <h2 className="text-[26px] font-bold !text-white md:text-[32px]">{p.h2}</h2>
        <h3 className="mx-auto mt-3 max-w-3xl text-[16px] font-normal leading-relaxed !text-white/90">{p.text}</h3>
        <ul className="mt-5 flex flex-wrap justify-center gap-2">
          {p.chips.map((c) => (
            <li key={c} className="rounded-full border border-white/30 px-3 py-1 text-[13px]">
              {c}
            </li>
          ))}
        </ul>
        <Button href={p.button.href} variant="light" className="mt-6">
          {p.button.label}
        </Button>
        <p className="mt-3 text-[12.5px] text-white/75">{p.footnote}</p>
      </div>
    </Section>
  );
}

export const mainlandQuiz = {
  eyebrow: "FREE BUSINESS SETUP QUIZ",
  h2: "Mainland or Free Zone?",
  text: "Confused between UAE Mainland and Free Zone company setup? Answer 5 quick questions and discover which business structure saves you more money and suits your goals.",
  chips: ["🏙️ Mainland", "🏢 Free Zone", "💰 Cost Comparison", "📍 Dubai & UAE", "🌍 100% Ownership"],
  button: { label: "🎯 Find My Best Option", href: "/mainland-vs-free-zone-uae-quiz/" },
  footnote: "Free · Instant result · No sign-up needed",
};

/* ---------- PDF download CTA ---------- */
export function DownloadCta(p: { title: string; titleTag?: HTag; text: string; button: { label: string; href: string }; bg?: Bg }) {
  return (
    <Section bg={p.bg} className="text-center">
      <Heading as={p.titleTag ?? "h4"}>{p.title}</Heading>
      <p className="mx-auto mt-4 max-w-3xl text-[16px] leading-relaxed">{p.text}</p>
      <Button href={p.button.href} className="mt-7">
        <Icon name="download" className="h-4 w-4" /> {p.button.label}
      </Button>
    </Section>
  );
}

/* ---------- Lead form section ---------- */
export function LeadFormSection(p: { h2: string; text: string[]; formId: string }) {
  return (
    <Section bg="mist">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <Heading as="h2">{p.h2}</Heading>
          {p.text.map((t, i) => (
            <p key={i} className="mt-4 text-[16px] leading-relaxed">
              {t}
            </p>
          ))}
        </div>
        <div className="card p-7">
          <LeadForm formId={p.formId} />
        </div>
      </div>
    </Section>
  );
}

/* ---------- FAQ: native <details>, every answer in the HTML ---------- */
export type Faq = { q: string; a: React.ReactNode };
export function FaqList({ faqs, title = "Frequently Asked Questions", titleTag = "h2", bg }: { faqs: Faq[]; title?: string; titleTag?: HTag; bg?: Bg }) {
  return (
    <Section bg={bg}>
      <Heading as={titleTag} center>
        {title}
      </Heading>
      <div className="mx-auto mt-10 grid max-w-4xl gap-3">
        {faqs.map((f) => (
          <details key={f.q} className="card group px-6 py-4">
            <summary className="flex items-center justify-between gap-4 font-display text-[16px] font-semibold text-ink">
              {f.q}
              <Icon name="plus" className="faq-icon h-5 w-5 shrink-0 text-brand transition" />
            </summary>
            <div className="prose-ab mt-3 text-[15px]">{f.a}</div>
          </details>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Numbered tips grid (costs left out, rules, mistakes) ---------- */
export function NumberedGrid(p: { title: React.ReactNode; titleTag?: HTag; itemTag?: HTag; items: { title: string; text: React.ReactNode }[]; bg?: Bg; cols?: 2 | 3 }) {
  const I = p.itemTag ?? "h3";
  return (
    <Section bg={p.bg}>
      <Heading as={p.titleTag ?? "h2"} center>
        {p.title}
      </Heading>
      <div className={`mt-10 grid gap-5 ${p.cols === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
        {p.items.map((it) => (
          <article key={it.title} className={`rounded-xl p-6 ${p.bg === "brand" ? "bg-white/10" : "card"}`}>
            <I className="!text-[18px] font-semibold leading-snug">{it.title}</I>
            <div className={`mt-2 text-[14.5px] leading-relaxed ${p.bg === "brand" ? "text-white/90" : ""}`}>{it.text}</div>
          </article>
        ))}
      </div>
    </Section>
  );
}
