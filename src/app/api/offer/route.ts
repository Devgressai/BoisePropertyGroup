import { NextResponse } from "next/server";
import { parseDetails, labelOf, SITUATIONS, TIMELINES, CONTACT_PREFS, ROLES, CONSENT_CONTACT, CONSENT_PARTNERS } from "@/lib/lead";

/**
 * Lead intake.
 *
 * THE EMPTY-STRING KEY IS THE REAL FAILURE MODE. A missing or blank
 * RESEND_API_KEY must throw BEFORE a payload is built and return 500 — never a
 * silent 200. Treating a blank key as "configured" cost IronCrest and Boise
 * Bath two weeks of silently lost leads each.
 */
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string
  );
}

export async function POST(req: Request) {
  // CSRF: reject cross-origin form posts.
  const origin = req.headers.get("origin");
  const host = req.headers.get("host");
  if (origin && host && !origin.includes(host)) {
    return NextResponse.json({ error: "Bad origin" }, { status: 403 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  // Honeypot: real people leave this empty.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true, leadId: "x" });
  }

  const step = body.step === 2 ? 2 : 1;
  // Which side of the site the lead came from. Commercial and residential
  // enquiries need different first questions, so the subject line says which
  // rather than leaving it to be guessed from the address.
  const context = body.context === "commercial" ? "commercial" : "residential";
  const address = typeof body.address === "string" ? body.address.trim().slice(0, 300) : "";
  const page = typeof body.page === "string" ? body.page.slice(0, 200).replace(/[^\w\-/.]/g, "") : "";

  let subject: string;
  let html: string;
  let replyTo: string | undefined;
  let leadId: string;

  if (step === 1) {
    if (address.length < 4) {
      return NextResponse.json({ error: "Address required" }, { status: 400 });
    }
    leadId = crypto.randomUUID().replace(/-/g, "").slice(0, 8);
    // Branded: this inbox receives mail for several businesses.
    subject = `[Boise Property Group] New ${context} enquiry — ${address}`;
    html =
      `<p><strong>Address:</strong> ${escapeHtml(address)}</p>` +
      `<p><strong>Came from:</strong> the ${context} side of the site${page ? ` — <code>${escapeHtml(page)}</code>` : ""}</p>` +
      `<p><strong>Lead id:</strong> ${leadId} — contact details follow in a second email if the seller completes step 2.</p>` +
      (context === "commercial"
        ? "<p>Ask for a rent roll and a trailing twelve months before quoting anything.</p>"
        : "");
  } else {
    const parsed = parseDetails(body);
    if (!parsed.ok) return NextResponse.json({ error: parsed.error }, { status: 400 });
    const l = parsed.lead;
    leadId = l.leadId || "—";
    replyTo = l.email || undefined;
    subject = `[Boise Property Group] Details — ${l.name} — ${l.address || "address in earlier email"}`;
    const row = (k: string, v: string) =>
      `<tr><td style="padding:4px 12px 4px 0;color:#4F5E6B">${k}</td><td style="padding:4px 0"><strong>${escapeHtml(v || "—")}</strong></td></tr>`;
    html =
      `<table style="font-family:sans-serif;font-size:15px">` +
      row("Name", l.name) +
      row("Phone", l.phone) +
      row("Email", l.email) +
      row("Prefers", labelOf(CONTACT_PREFS, l.contactPref)) +
      row("Address", l.address) +
      row("Situation", labelOf(SITUATIONS[l.context], l.situation)) +
      row("Timeline", labelOf(TIMELINES, l.timeline)) +
      row("Relationship", labelOf(ROLES, l.role)) +
      row("Side of site", l.context) +
      row("Page", l.page) +
      row("Lead id", leadId) +
      `</table>` +
      (l.notes ? `<p style="font-family:sans-serif;font-size:15px"><strong>Notes:</strong><br>${escapeHtml(l.notes).replace(/\n/g, "<br>")}</p>` : "") +
      // Consent record: exact wording the seller ticked, and when.
      `<p style="font-family:sans-serif;font-size:13px;color:#4F5E6B"><strong>Consent recorded ${new Date().toISOString()}</strong><br>` +
      `[x] ${escapeHtml(CONSENT_CONTACT)}<br>` +
      `[${l.consentPartners ? "x" : " "}] ${escapeHtml(CONSENT_PARTNERS)}</p>`;
  }

  const key = process.env.RESEND_API_KEY;
  if (typeof key !== "string" || key.trim() === "") {
    // Loud, not silent. An unconfigured key is an outage, not a no-op.
    console.error("[offer] RESEND_API_KEY missing or empty — lead NOT delivered");
    return NextResponse.json({ error: "Lead delivery not configured" }, { status: 500 });
  }

  const to = process.env.LEAD_TO_EMAIL;
  if (typeof to !== "string" || to.trim() === "") {
    console.error("[offer] LEAD_TO_EMAIL missing or empty — lead NOT delivered");
    return NextResponse.json({ error: "Lead delivery not configured" }, { status: 500 });
  }

  const { Resend } = await import("resend");
  const resend = new Resend(key);
  const sent = await resend.emails.send({
    from: "Boise Property Group <leads@boisepropertygroup.com>",
    to,
    subject,
    html,
    ...(replyTo ? { replyTo } : {}),
  });
  if (sent.error) {
    console.error("[offer] resend error", sent.error);
    return NextResponse.json({ error: "Send failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true, leadId });
}
