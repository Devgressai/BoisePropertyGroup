import { NextResponse } from "next/server";

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

  let body: { address?: unknown; website?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  // Honeypot: real people leave this empty.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const address = typeof body.address === "string" ? body.address.trim().slice(0, 300) : "";
  if (address.length < 4) {
    return NextResponse.json({ error: "Address required" }, { status: 400 });
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
    subject: `New offer request — ${address}`,
    html: `<p><strong>Address:</strong> ${escapeHtml(address)}</p>`,
  });
  if (sent.error) {
    console.error("[offer] resend error", sent.error);
    return NextResponse.json({ error: "Send failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
