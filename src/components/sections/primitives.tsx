import { asset } from "@/lib/asset";
import Link from "next/link";
import { Icon } from "@/components/Icon";

export type HTag = "h1" | "h2" | "h3" | "h4" | "p";
export type Bg = "white" | "mint" | "mist" | "brand" | "dark";

const bgClass: Record<Bg, string> = {
  white: "bg-white",
  mint: "bg-mint",
  mist: "bg-mist",
  brand: "bg-brand text-white [&_h1]:text-white [&_h2]:text-white [&_h3]:text-white [&_h4]:text-white",
  dark: "bg-[#1c1c1c] text-white [&_h2]:text-white [&_h3]:text-white",
};

export function Section({
  bg = "white",
  bgImage,
  className = "",
  id,
  children,
  label,
}: {
  bg?: Bg;
  bgImage?: string;
  className?: string;
  id?: string;
  label?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-label={label} className={`relative overflow-hidden section-y ${bgClass[bg]} ${className}`}>
      {bgImage && (
        <>
          <img src={asset(bgImage)} alt="" aria-hidden="true" loading="lazy" decoding="async" className="absolute inset-0 -z-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-brand-deep/80" aria-hidden="true" />
        </>
      )}
      <div className="container-x relative">{children}</div>
    </section>
  );
}

/** Heading that keeps the exact tag used on the live page (h1–h4) for SEO parity. */
export function Heading({ as: Tag = "h2", children, className = "", center = false }: { as?: HTag; children: React.ReactNode; className?: string; center?: boolean }) {
  const size: Record<HTag, string> = {
    h1: "text-[34px] md:text-[50px] font-bold leading-[1.15]",
    h2: "text-[26px] md:text-[32px] font-semibold leading-tight",
    h3: "text-[20px] md:text-[22px] font-semibold leading-snug",
    h4: "text-[26px] md:text-[32px] font-semibold leading-tight",
    p: "text-[16px] leading-relaxed",
  };
  return <Tag className={`${size[Tag]} ${center ? "text-center" : ""} ${className}`}>{children}</Tag>;
}

export function Button({ href, children, variant = "dark", className = "", external }: { href: string; children: React.ReactNode; variant?: "dark" | "light" | "outline-light" | "whatsapp"; className?: string; external?: boolean }) {
  const v = {
    dark: "btn-dark",
    light: "btn-light",
    "outline-light": "btn-outline-light",
    whatsapp: "bg-whatsapp text-white shadow-md",
  }[variant];
  const isExternal = external ?? /^(https?:|tel:|mailto:)/.test(href);
  if (isExternal || href.endsWith(".pdf")) {
    return (
      <a href={href} className={`btn ${v} ${className}`} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}>
        {variant === "whatsapp" && <Icon name="whatsapp" className="h-5 w-5" />}
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={`btn ${v} ${className}`}>
      {children}
    </Link>
  );
}

export function CheckList({ items, className = "", iconClass = "text-brand" }: { items: React.ReactNode[]; className?: string; iconClass?: string }) {
  return (
    <ul className={`grid gap-2.5 ${className}`}>
      {items.map((it, i) => (
        <li key={i} className="flex gap-2.5 leading-relaxed">
          <Icon name="checkCircle" className={`mt-[3px] h-[18px] w-[18px] shrink-0 ${iconClass}`} />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export type Img = { src: string; alt: string; width?: number; height?: number };

export function Picture({ img, className = "", priority = false }: { img: Img; className?: string; priority?: boolean }) {
  return (
    <img
      src={asset(img.src)}
      alt={img.alt}
      width={img.width}
      height={img.height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      {...(priority ? { fetchPriority: "high" as const } : {})}
      className={className}
    />
  );
}

/** Plain HTML table: fully readable by Google and AI answer engines. */
export function DataTable({ head, rows, caption, tone = "light", highlightLast = false }: { head: string[]; rows: string[][]; caption?: string; tone?: "light" | "onBrand"; highlightLast?: boolean }) {
  const yes = (v: string) => (/^yes$/i.test(v) ? "✓" : /^no$/i.test(v) ? "✕" : v);
  return (
    <div className={`overflow-x-auto rounded-xl ${tone === "onBrand" ? "bg-white text-body" : "card"}`}>
      <table className="w-full min-w-[560px] border-collapse text-left text-[14px]">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead>
          <tr className="bg-[#111] text-white">
            {head.map((h, i) => (
              <th key={i} scope="col" className="px-4 py-3 font-display text-[14px] font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, ri) => (
            <tr key={ri} className={`border-t border-slate-200 ${highlightLast && ri === rows.length - 1 ? "bg-mint font-semibold text-ink" : ri % 2 ? "bg-mist" : "bg-white"}`}>
              {r.map((c, ci) =>
                ci === 0 ? (
                  <th key={ci} scope="row" className="px-4 py-3 font-semibold text-ink">
                    {c}
                  </th>
                ) : (
                  <td key={ci} className={`px-4 py-3 ${/^(yes|no)$/i.test(c) ? (/yes/i.test(c) ? "text-lg text-brand" : "text-lg text-red-500") : ""}`}>
                    {/^(yes|no)$/i.test(c) ? (
                      <>
                        <span aria-hidden="true">{yes(c)}</span>
                        <span className="sr-only">{c}</span>
                      </>
                    ) : (
                      c
                    )}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
