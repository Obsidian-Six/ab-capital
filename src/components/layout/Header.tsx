import Link from "next/link";
import { Icon } from "@/components/Icon";
import { contact, logos, mainNav, socials } from "@/content/site";

/**
 * Header: top bar + main menu. Pure HTML/CSS (hover and focus open the
 * dropdowns, <details> opens the mobile menu), so every menu link is in the
 * HTML for crawlers and works without JavaScript.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-40 shadow-sm">
      {/* Top bar */}
      <div className="bg-brand text-white">
        <div className="mx-auto flex h-[52px] w-full max-w-[1320px] items-center justify-between gap-4 px-5 text-[13px]">
          <img src={logos.fta.src} alt={logos.fta.alt} width={logos.fta.width} height={logos.fta.height} className="h-[30px] w-auto rounded bg-white px-1" />
          <div className="hidden items-center gap-6 md:flex">
            <a href={contact.phoneHref} className="flex items-center gap-2 hover:underline">
              <Icon name="phone" className="h-3.5 w-3.5" /> {contact.phoneDisplay}
            </a>
            <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:underline">
              <Icon name="mail" className="h-3.5 w-3.5" /> {contact.email}
            </a>
            <ul className="flex items-center gap-2">
              {socials.map((s) => (
                <li key={s.name}>
                  <a href={s.href} target="_blank" rel="noopener" aria-label={s.name} className="grid h-6 w-6 place-items-center rounded-full bg-white/90 text-brand hover:bg-white">
                    <Icon name={s.icon} className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/book-a-call/" className="btn btn-dark hidden !px-4 !py-2 !text-[13px] sm:inline-flex">
              Book a Call
            </Link>
            <Link href="/cost-calculator/" className="btn btn-dark !px-4 !py-2 !text-[13px]">
              Business Setup Cost Calculator
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white">
        <div className="mx-auto flex h-[78px] w-full max-w-[1320px] items-center justify-between px-5">
          <Link href="/" aria-label="AB Capital home" className="shrink-0">
            <img src={logos.main.src} alt={logos.main.alt} width={logos.main.width} height={logos.main.height} className="h-[62px] w-auto" />
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center text-[13px] font-medium text-ink xl:text-[13.5px]">
              {mainNav.map((item) => (
                <li key={item.label} className="group relative">
                  {item.href ? (
                    <Link href={item.href} className="flex items-center gap-0.5 whitespace-nowrap rounded px-2 py-3 hover:text-brand">
                      {item.label}
                      {item.children && <Icon name="chevron" className="h-4 w-4" />}
                    </Link>
                  ) : (
                    <button type="button" className="flex items-center gap-0.5 whitespace-nowrap rounded px-2 py-3 hover:text-brand">
                      {item.label}
                      <Icon name="chevron" className="h-4 w-4" />
                    </button>
                  )}
                  {item.children && (
                    <ul className="invisible absolute left-0 top-full min-w-[260px] translate-y-1 rounded-b-lg border-t-2 border-brand bg-white py-2 opacity-0 shadow-xl transition group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      {item.children.map((c) => (
                        <li key={c.href + c.label}>
                          <Link href={c.href} className="block px-4 py-2 text-[13.5px] text-body hover:bg-mint hover:text-brand">
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu */}
          <details className="group relative lg:hidden">
            <summary aria-label="Open menu" className="grid h-10 w-10 place-items-center rounded border border-slate-200 text-ink">
              <Icon name="menu" className="h-6 w-6 group-open:hidden" />
              <Icon name="close" className="hidden h-6 w-6 group-open:block" />
            </summary>
            <nav aria-label="Mobile" className="fixed inset-x-0 top-[130px] bottom-0 overflow-y-auto bg-white px-5 pb-10 shadow-xl">
              <ul className="divide-y divide-slate-100">
                {mainNav.map((item) => (
                  <li key={item.label} className="py-3">
                    {item.href ? (
                      <Link href={item.href} className="font-display font-semibold text-ink">
                        {item.label}
                      </Link>
                    ) : (
                      <span className="font-display font-semibold text-ink">{item.label}</span>
                    )}
                    {item.children && (
                      <ul className="mt-2 grid gap-1 pl-3">
                        {item.children.map((c) => (
                          <li key={c.href + c.label}>
                            <Link href={c.href} className="block py-1 text-[15px] text-body">
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
