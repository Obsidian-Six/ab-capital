"use client";

import { useState } from "react";
import { serviceOptions, sourceOptions } from "@/content/site";

type Variant = "enquiry" | "quick";

/**
 * Lead form.
 *  - "enquiry" = Fluent Form #1 (email, full name, phone, service type, how did you hear about us)
 *  - "quick"   = Fluent Form #4 (name, email, phone) used in the footer and popup
 * Pushes a `generate_lead` event to the GTM dataLayer on success, so ad conversions keep firing.
 */
export function LeadForm({ variant = "enquiry", formId, dark = false, submitLabel = "Submit" }: { variant?: Variant; formId: string; dark?: boolean; submitLabel?: string }) {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;
    const { website, ...fields } = data;
    setState("sending");
    setError("");
    try {
      const res = await fetch("/api/lead/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ form: formId, page: window.location.pathname, fields, website }),
      });
      const json = await res.json();
      if (!json.ok) throw new Error(json.error);
      setState("done");
      const w = window as unknown as { dataLayer?: object[] };
      (w.dataLayer ??= []).push({ event: "generate_lead", form_id: formId });
    } catch (err) {
      setState("error");
      setError(err instanceof Error && err.message ? err.message : "Something went wrong. Please try again.");
    }
  }

  const label = dark ? "text-white" : "text-ink";
  const input =
    "w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-[14px] text-ink outline-none focus:border-brand focus:ring-2 focus:ring-brand/20";

  if (state === "done") {
    return (
      <p role="status" className={`rounded-lg p-6 text-center text-[16px] font-medium ${dark ? "bg-white/10 text-white" : "bg-mint text-brand-dark"}`}>
        Thank you! Our business setup consultant will contact you shortly.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3.5" noValidate={false}>
      {/* Honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      {variant === "enquiry" ? (
        <>
          <Field id={`${formId}-email`} label="Email" labelClass={label}>
            <input id={`${formId}-email`} name="email" type="email" required placeholder="Email Address" className={input} />
          </Field>
          <Field id={`${formId}-name`} label="Full Name" labelClass={label}>
            <input id={`${formId}-name`} name="name" required placeholder="Full Name" className={input} />
          </Field>
          <Field id={`${formId}-phone`} label="Phone Number" labelClass={label}>
            <input id={`${formId}-phone`} name="phone" type="tel" required placeholder="With Country Code" className={input} />
          </Field>
          <Field id={`${formId}-service`} label="Service Type" labelClass={label}>
            <select id={`${formId}-service`} name="service" required defaultValue="" className={input}>
              <option value="" disabled>
                - Select -
              </option>
              {serviceOptions.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </Field>
          <Field id={`${formId}-source`} label="How did you hear about us" labelClass={label}>
            <select id={`${formId}-source`} name="source" required defaultValue="" className={input}>
              <option value="" disabled>
                Select
              </option>
              {sourceOptions.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </Field>
        </>
      ) : (
        <>
          <input name="name" required placeholder="Enter Your Name" aria-label="Your name" className={input} />
          <input name="email" type="email" required placeholder="Email Address" aria-label="Email address" className={input} />
          <input name="phone" type="tel" required placeholder="Mobile Number" aria-label="Mobile number" className={input} />
        </>
      )}

      {state === "error" && (
        <p role="alert" className="text-[13px] font-medium text-red-600">
          {error}
        </p>
      )}
      <button type="submit" disabled={state === "sending"} className="btn btn-dark mt-1 justify-self-start disabled:opacity-60">
        {state === "sending" ? "Sending…" : submitLabel}
      </button>
    </form>
  );
}

function Field({ id, label, labelClass, children }: { id: string; label: string; labelClass: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1.5">
      <label htmlFor={id} className={`text-[13.5px] font-medium ${labelClass}`}>
        {label} <span className="text-red-500">*</span>
      </label>
      {children}
    </div>
  );
}
