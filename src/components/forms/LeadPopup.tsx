"use client";
import { asset } from "@/lib/asset";

import { useEffect, useState } from "react";
import { Icon } from "@/components/Icon";
import { LeadForm } from "./LeadForm";

/**
 * "Join 30,000+ Founders" offer popup (replaces Popup Maker #10903 with Fluent Form #4).
 * Opens once per visit after a short delay; never blocks page content for crawlers.
 */
export function LeadPopup({ delayMs = 12000 }: { delayMs?: number }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("ab_popup_seen") === "1";
    } catch {
      /* storage unavailable: just show once */
    }
    if (seen) return;
    const t = setTimeout(() => {
      setOpen(true);
      try {
        sessionStorage.setItem("ab_popup_seen", "1");
      } catch {}
    }, delayMs);
    return () => clearTimeout(t);
  }, [delayMs]);

  if (!open) return null;

  return (
    <div role="dialog" aria-modal="true" aria-label="Special offer" className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4" onClick={() => setOpen(false)}>
      <div className="relative w-full max-w-[420px] overflow-hidden rounded-xl bg-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <button type="button" onClick={() => setOpen(false)} aria-label="Close" className="absolute right-2 top-2 z-10 grid h-8 w-8 place-items-center rounded-full bg-black/70 text-white">
          <Icon name="close" className="h-4 w-4" />
        </button>
        <img src={asset("/wp-content/uploads/2025/06/popup-480.jpeg")} alt="Join 30,000+ Founders who launched their UAE business with AB Capital" width={480} height={260} className="h-auto w-full" />
        <div className="p-5">
          <LeadForm variant="quick" formId="fluent-4-popup" submitLabel="Get Offer" />
          <button type="button" onClick={() => setOpen(false)} className="mt-3 text-[13px] text-slate-500 underline">
            No thanks I’ll pay more later
          </button>
        </div>
      </div>
    </div>
  );
}
