import { Icon } from "@/components/Icon";
import { contact } from "@/content/site";
import { CheckList, DataTable, Heading, HTag, Img, Picture, Section } from "./primitives";
import type { Faq } from "./blocks";

/* ---------- Tabs with no JavaScript (radio + CSS). Every panel is in the HTML. ---------- */
export function FaqTabs({ name, tabs }: { name: string; tabs: { label: string; table?: { head: string[]; rows: string[][] }; faqs?: Faq[] }[] }) {
  return (
    <Section>
      <Heading as="h4" center>
        Frequently Asked Questions
      </Heading>
      <div className="mt-10">
        {tabs.map((t, i) => (
          <input key={t.label} type="radio" name={name} id={`${name}-${i}`} defaultChecked={i === 0} className="peer sr-only" />
        ))}
        <div role="tablist" className="flex flex-wrap justify-center gap-2">
          {tabs.map((t, i) => (
            <label key={t.label} htmlFor={`${name}-${i}`} className="tab-label cursor-pointer rounded-full border border-brand px-5 py-2 font-display text-[14px] font-medium text-brand" data-tab={i}>
              {t.label}
            </label>
          ))}
        </div>
        {tabs.map((t, i) => (
          <div key={t.label} className="tab-panel mt-8 hidden" data-tab={i}>
            {t.table && <DataTable head={t.table.head} rows={t.table.rows} caption={t.label} />}
            {t.faqs && (
              <div className="mx-auto grid max-w-4xl gap-3">
                {t.faqs.map((f) => (
                  <details key={f.q} className="card px-6 py-4">
                    <summary className="flex items-center justify-between gap-4 font-display text-[16px] font-semibold text-ink">
                      {f.q}
                      <Icon name="plus" className="faq-icon h-5 w-5 shrink-0 text-brand transition" />
                    </summary>
                    <div className="prose-ab mt-3 text-[15px]">{f.a}</div>
                  </details>
                ))}
              </div>
            )}
          </div>
        ))}
        {/* Show the panel / highlight the label of the checked radio */}
        <style>{tabs
          .map(
            (_, i) =>
              `#${name}-${i}:checked ~ .tab-panel[data-tab="${i}"]{display:block}#${name}-${i}:checked ~ [role=tablist] .tab-label[data-tab="${i}"]{background:var(--color-brand);color:#fff}`,
          )
          .join("")}</style>
      </div>
    </Section>
  );
}

/* ---------- Calendly booking, loaded lazily ---------- */
export function BookingEmbed() {
  return (
    <Section bg="mist" label="Book a call">
      <iframe
        src={`${contact.calendly}?embed_type=Inline&hide_gdpr_banner=1`}
        title="Book a free 30-minute call with AB Capital"
        loading="lazy"
        className="mx-auto h-[700px] w-full max-w-4xl rounded-xl border-0 bg-white"
      />
    </Section>
  );
}

/* ---------- Two columns of check items (Benefits / Features) ---------- */
export function TwoColumnChecks({ columns }: { columns: { title: string; items: { strong: string; text: string }[] }[] }) {
  return (
    <Section>
      <div className="grid gap-8 md:grid-cols-2">
        {columns.map((c) => (
          <div key={c.title} className="card p-8">
            <h3 className="text-[24px] font-semibold">{c.title}</h3>
            <CheckList
              className="mt-5 text-[15px]"
              items={c.items.map((it) => (
                <>
                  <strong className="text-ink">{it.strong}:</strong> {it.text}
                </>
              ))}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Image + heading + rich content ---------- */
export function ImageContent(p: { image: Img; imageLeft?: boolean; children: React.ReactNode; below?: React.ReactNode; bg?: "white" | "mist" }) {
  return (
    <Section bg={p.bg}>
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className={p.imageLeft ? "" : "md:order-2"}>
          <Picture img={p.image} className="h-auto w-full rounded-2xl shadow-xl" />
          {p.below}
        </div>
        <div>{p.children}</div>
      </div>
    </Section>
  );
}

/* ---------- Licence type cards ---------- */
export function LicenceCards(p: { title: string; intro: string; items: { title: string; text: string; image: Img }[] }) {
  return (
    <Section bg="mist">
      <div className="mx-auto max-w-3xl text-center">
        <Heading as="h3" className="!text-[26px] md:!text-[32px]">
          {p.title}
        </Heading>
        <p className="mt-4 text-[16px] leading-relaxed">{p.intro}</p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {p.items.map((it) => (
          <article key={it.title} className="card overflow-hidden">
            <Picture img={it.image} className="aspect-[4/3] w-full object-cover" />
            <div className="p-5">
              <h2 className="!text-[17px] font-semibold leading-snug">{it.title}</h2>
              <p className="mt-2 text-[14px] leading-relaxed">{it.text}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Required documents + timeline ---------- */
export function DocsAndTimeline(p: { groups: { label: string; docs: string[] }[]; steps: string[] }) {
  return (
    <Section>
      <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
        <div>
          <Heading as="h2">Required Documents</Heading>
          <div className="mt-6 grid gap-3">
            {p.groups.map((g, gi) => (
              <details key={g.label} open={gi === 0} className="card px-6 py-4">
                <summary className="flex items-center justify-between font-display text-[16px] font-semibold text-ink">
                  {g.label}
                  <Icon name="plus" className="faq-icon h-5 w-5 text-brand transition" />
                </summary>
                <table className="mt-4 w-full text-[14px]">
                  <thead>
                    <tr className="text-left text-ink">
                      <th className="pb-2">Document</th>
                      <th className="pb-2 text-right">Mandatory</th>
                    </tr>
                  </thead>
                  <tbody>
                    {g.docs.map((d) => (
                      <tr key={d} className="border-t border-slate-100">
                        <td className="py-2 pr-3">{d}</td>
                        <td className="py-2 text-right">✅</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </details>
            ))}
          </div>
        </div>
        <div>
          <Heading as="h2">Timeline</Heading>
          <ol className="relative mt-8 border-l-2 border-brand/30 pl-8">
            {p.steps.map((s, i) => (
              <li key={s} className="relative mb-8 last:mb-0">
                <span className="absolute -left-[45px] grid h-8 w-8 place-items-center rounded-full bg-brand font-display text-[14px] font-semibold text-white">{i + 1}</span>
                <p className="card px-5 py-4 text-[15px] font-medium text-ink">{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}

/* ---------- Grid of titled cards (promise, rules) ---------- */
export function TitledCards(p: { title: string; titleTag?: HTag; items: { title: string; text: string; icon?: Img }[]; bg?: "white" | "dark" | "mist" }) {
  const dark = p.bg === "dark";
  return (
    <Section bg={p.bg}>
      <Heading as={p.titleTag ?? "h2"} center>
        {p.title}
      </Heading>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {p.items.map((it) => (
          <article key={it.title} className={`flex items-start gap-5 rounded-xl p-6 ${dark ? "bg-white/5" : "card"}`}>
            {it.icon && <Picture img={it.icon} className="h-16 w-16 shrink-0 rounded-lg object-cover" />}
            <div>
              <h3 className="text-[18px] font-semibold">{it.title}</h3>
              <p className={`mt-2 text-[14.5px] leading-relaxed ${dark ? "text-white/80" : ""}`}>{it.text}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
