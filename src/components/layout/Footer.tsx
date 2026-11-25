import { asset } from "@/lib/asset";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { WHATSAPP_LINK, contact, footer, logos, reviews, socials } from "@/content/site";

function Stars() {
  return (
    <span className="flex text-gold" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} name="star" className="h-4 w-4" />
      ))}
    </span>
  );
}

export function Footer() {
  return (
    <footer>
      {/* Google reviews (server-rendered so crawlers read them) */}
      <section className="bg-mint section-y" aria-labelledby="reviews-title">
        <div className="container-x">
          <h2 id="reviews-title" className="mb-8 text-center text-[28px] font-semibold md:text-[32px]">
            Our Customer Reviews
          </h2>
          <ul className="flex snap-x gap-5 overflow-x-auto pb-4">
            {reviews.map((r) => (
              <li key={r.name} className="card w-[280px] shrink-0 snap-start p-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-display text-[15px] font-semibold text-ink">{r.name}</span>
                  <span className="text-[12px] font-semibold text-[#4285F4]">Google</span>
                </div>
                <Stars />
                <p className="mt-3 text-[14px] leading-relaxed">{r.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Corporate tax reminder band */}
      <section className="bg-white pt-14 text-center">
        <div className="container-x">
          <h4 className="text-[24px] font-semibold md:text-[28px]">Register for Corporate Tax</h4>
          <p className="mx-auto mt-3 max-w-2xl text-[16px]">
            After company registration, it is mandatory to register for corporate tax within 90 days of company incorporation to avoid penalties.
          </p>
        </div>
      </section>
      <section className="mt-8 bg-brand py-6">
        <div className="container-x flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="/wp-content/uploads/2025/06/CT-Tax-guide-2025.pdf" className="btn btn-light min-w-[260px]">
            SEE TAX GUIDE
          </a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener" className="btn btn-outline-light min-w-[260px]">
            <Icon name="whatsapp" className="h-4 w-4" /> QUICKLY ENQUIRE ON WHATSAPP
          </a>
        </div>
      </section>

      {/* Footer columns */}
      <section className="bg-white py-12">
        <div className="container-x grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <img src={asset(logos.main.src)} alt={logos.main.alt} width={logos.main.width} height={logos.main.height} loading="lazy" className="h-[75px] w-auto" />
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed">{footer.tagline}</p>
            <ul className="mt-4 flex gap-2">
              {socials.map((s) => (
                <li key={s.name}>
                  <a href={s.href} target="_blank" rel="noopener" aria-label={s.name} className="grid h-8 w-8 place-items-center rounded-full bg-brand text-white hover:bg-brand-dark">
                    <Icon name={s.icon} className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-[17px] font-semibold">Company</h4>
            <ul className="grid gap-2 text-[14px]">
              {footer.company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-brand">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-[17px] font-semibold">Contact</h4>
            <ul className="grid gap-2 text-[14px]">
              {footer.phones.map((p) => (
                <li key={p.href}>
                  <a href={p.href} className="flex items-center gap-2 hover:text-brand">
                    <Icon name="phone" className="h-3.5 w-3.5 text-brand" /> {p.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-brand">
                  <Icon name="mail" className="h-3.5 w-3.5 text-brand" /> {contact.email}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-[17px] font-semibold">Address</h4>
            <a href={footer.mapLink} target="_blank" rel="noopener" className="flex gap-2 text-[14px] leading-relaxed hover:text-brand">
              <Icon name="pin" className="mt-1 h-4 w-4 shrink-0 text-brand" /> {footer.address}
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-5 text-center text-[13px]">
        <div className="container-x">
          <p>{footer.copyright}</p>
          <p className="mx-auto mt-3 max-w-4xl text-[12px] leading-relaxed text-slate-500">
            {footer.disclaimer} {footer.license}{" "}
            {footer.sisterSites.map((s, i) => (
              <span key={s.href}>
                <a href={s.href} target="_blank" rel="noopener" className="underline">
                  {s.label}
                </a>
                {i === 0 ? " & " : " "}
              </span>
            ))}
            Providing Low-Cost Business Setup in Dubai
          </p>
        </div>
      </section>
    </footer>
  );
}
