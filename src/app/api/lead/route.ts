import { NextResponse } from "next/server";

/**
 * Receives every lead form on the site (replaces Fluent Forms / Elementor forms).
 *
 * Where leads go is set by environment variables, so it can match today's routing:
 *   LEAD_WEBHOOK_URL  – Zapier / CRM / Google Sheets webhook (one or more, comma-separated)
 * Each submission is sent as JSON: { form, page, fields, submittedAt }.
 */

type LeadBody = {
  form?: string;
  page?: string;
  fields?: Record<string, string>;
  website?: string; // honeypot: real users never fill this
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: LeadBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  // Silently accept bot submissions without forwarding them.
  if (body.website) return NextResponse.json({ ok: true });

  const fields = Object.fromEntries(
    Object.entries(body.fields ?? {}).map(([k, v]) => [k.slice(0, 60), String(v ?? "").trim().slice(0, 2000)]),
  );

  if (!fields.email || !EMAIL.test(fields.email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 422 });
  }
  if (!fields.name) {
    return NextResponse.json({ ok: false, error: "Please enter your name." }, { status: 422 });
  }

  const lead = {
    form: String(body.form ?? "unknown").slice(0, 60),
    page: String(body.page ?? "").slice(0, 300),
    fields,
    submittedAt: new Date().toISOString(),
  };

  const hooks = (process.env.LEAD_WEBHOOK_URL ?? "").split(",").map((s) => s.trim()).filter(Boolean);
  if (hooks.length === 0) {
    // No destination configured yet (sample / staging): log so nothing is lost silently.
    console.info("[lead]", JSON.stringify(lead));
  }

  const results = await Promise.allSettled(
    hooks.map((url) =>
      fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(lead) }),
    ),
  );
  const failed = results.some((r) => r.status === "rejected" || (r.status === "fulfilled" && !r.value.ok));
  if (failed) {
    console.error("[lead] webhook delivery failed", JSON.stringify(lead));
    return NextResponse.json({ ok: false, error: "Something went wrong. Please try WhatsApp or call us." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
