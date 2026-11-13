"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  SITUATIONS,
  TIMELINES,
  CONTACT_PREFS,
  ROLES,
  SITUATION_FROM_PATH,
  EMAIL_RE,
  CONSENT_CONTACT,
  normalizePhone,
  type LeadContext,
} from "@/lib/lead";
import { IconPin } from "./Icons";

/**
 * Two steps, deliberately.
 *
 * CRO: the first ask is the smallest one that still qualifies a lead — the
 * address. It is SENT on submit, so a seller who stops there is still a lead.
 * Name, contact details and the situation come second, after the seller has
 * committed, and go as a follow-up email carrying the same lead id.
 *
 * `context` exists because the confirmation copy was making a promise that is
 * false on half the site: it said we would look at COMPARABLE SALES, which is
 * how a house is valued and is precisely what the commercial pages explain
 * does NOT happen above four units.
 *
 * Copy rule: only owner-confirmed business facts. No response-time promise —
 * none has been confirmed.
 */
export default function OfferForm({
  context = "residential",
  bare = false,
  stack = false,
  bar = false,
  note,
}: {
  /** Hero style: one white address bar with the button inside it. */
  bar?: boolean;
  /** Replaces the line under step 1. */
  note?: string;
  context?: LeadContext;
  /** Sits inside a panel that already draws the card, so it draws none of its own. */
  bare?: boolean;
  /** Narrow column: the address field and the button stack at every width. */
  stack?: boolean;
}) {
  const uid = useId();
  const [address, setAddress] = useState("");
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [leadId, setLeadId] = useState("");
  const [page, setPage] = useState("");
  const [d, setD] = useState({
    name: "",
    phone: "",
    email: "",
    contactPref: "call",
    situation: "",
    timeline: "",
    role: "owner",
    notes: "",
  });
  const [consentContact, setConsentContact] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const doneRef = useRef<HTMLDivElement>(null);
  const trapRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const path = window.location.pathname;
    setPage(path);
    const pre = SITUATION_FROM_PATH[path];
    if (pre && SITUATIONS[context].some((s) => s.value === pre)) setD((x) => ({ ...x, situation: pre }));
  }, [context]);

  useEffect(() => {
    if (step === 2) nameRef.current?.focus();
    if (step === 3) doneRef.current?.focus();
  }, [step]);

  const set = (k: keyof typeof d) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setD((x) => ({ ...x, [k]: e.target.value }));

  async function post(payload: Record<string, unknown>) {
    const res = await fetch("/api/offer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, context, page, website: trapRef.current?.value ?? "" }),
    });
    const json = (await res.json().catch(() => ({}))) as { leadId?: string; error?: string };
    return { ok: res.ok, ...json };
  }

  async function submitAddress(e: React.FormEvent) {
    e.preventDefault();
    if (address.trim().length < 4) return setError("Please enter the property address.");
    setBusy(true);
    setError("");
    try {
      const r = await post({ step: 1, address });
      if (!r.ok) throw new Error();
      setLeadId(r.leadId ?? "");
      setStep(2);
    } catch {
      setError("Something went wrong sending that. Please try again in a moment.");
    } finally {
      setBusy(false);
    }
  }

  async function submitDetails(e: React.FormEvent) {
    e.preventDefault();
    // Same rules as the server (lib/lead.ts), checked here first so the seller
    // gets the message without a round trip.
    if (!d.name.trim()) return setError("Please add your name.");
    if (!d.phone.trim()) return setError("Please add a phone number.");
    if (!normalizePhone(d.phone)) return setError("That phone number doesn't look complete.");
    if (d.email && !EMAIL_RE.test(d.email.trim())) return setError("That email address doesn't look right.");
    if (!consentContact) return setError("Please tick the box agreeing that we may call or text you.");
    setBusy(true);
    setError("");
    try {
      const r = await post({ step: 2, leadId, address, ...d, consentContact });
      if (!r.ok) throw new Error(r.error);
      setStep(3);
    } catch (err) {
      const msg = err instanceof Error && err.message ? err.message : "";
      setError(msg || "Something went wrong sending that. Please try again in a moment.");
    } finally {
      setBusy(false);
    }
  }

  const errorLine = error && (
    <p role="alert" className="mt-3 text-sm font-medium text-[#A3261C]">
      {error}
    </p>
  );

  if (step === 3) {
    const first = d.name.trim().split(/\s+/)[0];
    const how = d.contactPref === "email" ? "by email" : d.contactPref === "text" ? "by text" : "by phone";
    return (
      <div ref={doneRef} tabIndex={-1} className={`${bare ? "" : "card p-6 "}text-left outline-none`} aria-live="polite">
        <p className="text-[1.05rem] font-semibold text-[var(--bpg-ink)]">Thanks{first ? `, ${first}` : ""} — we have everything we need.</p>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--bpg-muted)]">
          {context === "commercial"
            ? "We’ll pull the parcel record and the zoning district, then come back to you " + how + " with what we’d pay and the arithmetic behind it. If it produces income, we’ll ask for a rent roll and a trailing twelve months."
            : "We’ll look at the parcel record and comparable sales, then come back to you " + how + " with a number and how we reached it. No obligation either way."}
        </p>
      </div>
    );
  }

  if (step === 2) {
    const lab = "mb-1.5 block text-sm font-medium text-[var(--bpg-ink)]";
    return (
      <form onSubmit={submitDetails} noValidate className={`${bare ? "" : "card p-6 "}text-left`} aria-labelledby={`${uid}-h`}>
        <p id={`${uid}-h`} className="text-[1.05rem] font-semibold text-[var(--bpg-ink)]">
          Got it. We have the address.
        </p>
        <p className="mt-1 text-[0.95rem] text-[var(--bpg-muted)]">
          Where should we send the number? A few details help us get it right the first time.
        </p>
        <p className="mt-1 truncate text-sm text-[var(--bpg-muted)]" title={address}>
          {address}
        </p>

        <div className="mt-5 grid gap-4">
          <div>
            <label htmlFor={`${uid}-name`} className={lab}>Your name</label>
            <input ref={nameRef} id={`${uid}-name`} className="field" autoComplete="name" value={d.name} onChange={set("name")} required aria-required="true" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor={`${uid}-phone`} className={lab}>Phone</label>
              <input id={`${uid}-phone`} className="field" type="tel" inputMode="tel" autoComplete="tel" value={d.phone} onChange={set("phone")} required aria-required="true" />
            </div>
            <div>
              <label htmlFor={`${uid}-email`} className={lab}>
                Email <span className="font-normal text-[var(--bpg-muted)]">(optional)</span>
              </label>
              <input id={`${uid}-email`} className="field" type="email" autoComplete="email" value={d.email} onChange={set("email")} />
            </div>
          </div>

          <fieldset>
            <legend className={lab}>Best way to reach you</legend>
            <div className="flex flex-wrap gap-2">
              {CONTACT_PREFS.map((o) => (
                <label key={o.value} className={`pill-choice ${d.contactPref === o.value ? "is-on" : ""}`}>
                  <input type="radio" name={`${uid}-pref`} value={o.value} checked={d.contactPref === o.value} onChange={set("contactPref")} className="sr-only" />
                  {o.label}
                </label>
              ))}
            </div>
          </fieldset>

          {/* Everything below is optional, so it stays folded: the visible form
              is the three things we need (name, phone, consent). */}
          <details className="group border-y border-[var(--bpg-border)]">
            <summary className="flex min-h-[48px] cursor-pointer list-none items-center justify-between text-sm font-medium text-[var(--bpg-ink)] [&::-webkit-details-marker]:hidden">
              Add details about the property <span className="font-normal text-[var(--bpg-muted)]">optional</span>
            </summary>
            <div className="grid gap-4 pb-5 pt-1">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor={`${uid}-sit`} className={lab}>{context === "commercial" ? "Property type" : "Situation"}</label>
              <select id={`${uid}-sit`} className="field" value={d.situation} onChange={set("situation")}>
                <option value="">Choose one (optional)</option>
                {SITUATIONS[context].map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor={`${uid}-time`} className={lab}>When would you like to sell?</label>
              <select id={`${uid}-time`} className="field" value={d.timeline} onChange={set("timeline")}>
                <option value="">Choose one (optional)</option>
                {TIMELINES.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor={`${uid}-role`} className={lab}>You are the…</label>
            <select id={`${uid}-role`} className="field" value={d.role} onChange={set("role")}>
              {ROLES.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor={`${uid}-notes`} className={lab}>
              Anything we should know? <span className="font-normal text-[var(--bpg-muted)]">(optional)</span>
            </label>
            <textarea
              id={`${uid}-notes`}
              className="field min-h-[96px] py-3"
              rows={3}
              maxLength={2000}
              placeholder={context === "commercial" ? "Units or square feet, occupancy, anything on title or zoning…" : "Condition, tenants, deadlines, who else is involved…"}
              value={d.notes}
              onChange={set("notes")}
            />
          </div>
            </div>
          </details>
        </div>

        <div className="mt-5 grid gap-3">
          <label className="flex items-start gap-3 text-xs leading-relaxed text-[var(--bpg-muted)]">
            <input type="checkbox" className="mt-0.5 h-4 w-4 flex-none accent-[var(--bpg-accent)]" checked={consentContact} onChange={(e) => setConsentContact(e.target.checked)} required aria-required="true" />
            <span>{CONSENT_CONTACT} <span className="text-[var(--bpg-ink)]">(required)</span></span>
          </label>
          <p className="text-xs leading-relaxed text-[var(--bpg-muted)]">
            How we use your details:{" "}
            <a href="/privacy-policy" target="_blank" className="text-[var(--bpg-accent-ink)] underline underline-offset-2">privacy policy</a>.
          </p>
        </div>

        {errorLine}

        <button type="submit" className="btn btn-primary mt-5 w-full" disabled={busy}>
          {busy ? "Sending…" : "Send"}
        </button>
        <p className="mt-3 text-xs leading-relaxed text-[var(--bpg-muted)]">No obligation.</p>
      </form>
    );
  }

  return (
    <form onSubmit={submitAddress} noValidate className="w-full">
      <label htmlFor={`${uid}-address`} className="sr-only">
        Property address
      </label>
      {bar ? (
        <div className="flex flex-col gap-2 rounded-xl border border-[var(--bpg-border)] bg-white p-2 shadow-[var(--bpg-shadow-form)] focus-within:border-[var(--bpg-ink)] focus-within:ring-[3px] focus-within:ring-[rgba(227,180,75,0.55)] sm:flex-row sm:items-center">
          <div className="flex flex-1 items-center gap-3 pl-3">
            <IconPin className="h-5 w-5 flex-none text-[var(--bpg-ink)]" />
            <input
              id={`${uid}-address`}
              name="address"
              className="min-h-[48px] w-full bg-transparent text-[1.02rem] text-[var(--bpg-ink)] outline-none placeholder:text-[var(--bpg-muted)]"
              placeholder="Enter the property address"
              autoComplete="street-address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          {/* Honeypot — hidden from people, catches naive bots. */}
          <input
            ref={trapRef}
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute left-[-9999px] h-0 w-0 opacity-0"
          />
          <button type="submit" className="btn btn-primary sm:w-auto" disabled={busy}>
            {busy ? "Sending…" : "See what we’d offer"} <span aria-hidden="true">→</span>
          </button>
        </div>
      ) : (
      <div className={`flex flex-col gap-3 ${stack ? "" : "sm:flex-row"}`}>
        <input
          id={`${uid}-address`}
          name="address"
          className="field flex-1"
          placeholder="Property address, city"
          autoComplete="street-address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        {/* Honeypot — hidden from people, catches naive bots. */}
        <input
          ref={trapRef}
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute left-[-9999px] h-0 w-0 opacity-0"
        />
        <button type="submit" className="btn btn-primary sm:w-auto" disabled={busy}>
          {busy ? "Sending…" : "Get My Offer"}
        </button>
      </div>
      )}
      {errorLine}
      {note !== "" && (
        <p className="mt-3 text-sm text-[var(--bpg-muted)]">
          {note ??
            (context === "commercial"
              ? "No obligation. We’ll show our working: what we’d pay, not what it’s worth."
              : "No obligation. We’ll show you how we got to the number.")}
        </p>
      )}
    </form>
  );
}
