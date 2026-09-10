"use client";

import { useState } from "react";

/**
 * Deliberately ONE field to start.
 *
 * CRO: the first ask is the smallest one that still qualifies a lead — the
 * address. Name, phone and condition are collected on the next step, after the
 * seller has committed. Asking for six fields before establishing any value is
 * where cash-buyer forms lose people.
 *
 * `context` exists because the confirmation copy was making a promise that is
 * false on half the site. It said we would look at COMPARABLE SALES — which is
 * how a house is valued and is precisely what the commercial pages explain does
 * NOT happen above four units. A form that contradicts the page it sits on
 * costs more trust than a form with an extra field.
 */
export default function OfferForm({
  tone = "light",
  context = "residential",
}: {
  tone?: "light" | "dark";
  context?: "residential" | "commercial";
}) {
  const [address, setAddress] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const onDark = tone === "dark";

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!address.trim()) return;
    setState("sending");
    try {
      const res = await fetch("/api/offer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address, context, website: "" }),
      });
      setState(res.ok ? "sent" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div
        className={`rounded-sm border-2 p-5 ${
          onDark ? "border-white/25 bg-white/10 text-white" : "border-[var(--bpg-border-strong)] bg-white"
        }`}
      >
        <p className="font-semibold">Got it — we have your address.</p>
        <p className={`mt-1 text-sm ${onDark ? "text-white/80" : "text-[var(--bpg-muted)]"}`}>
          {context === "commercial"
            ? "We\u2019ll pull the parcel record and the zoning district, then come back with what we\u2019d pay and the arithmetic behind it. If it produces income, we\u2019ll ask for a rent roll and a trailing twelve months."
            : "We\u2019ll look at comparable sales and the parcel record, then come back to you with a number and how we reached it."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="w-full">
      <label htmlFor="offer-address" className="sr-only">
        Property address
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="offer-address"
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
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute left-[-9999px] h-0 w-0 opacity-0"
        />
        <button
          type="submit"
          className={`btn ${onDark ? "btn-primary" : "btn-primary"} sm:w-auto`}
          disabled={state === "sending"}
        >
          {state === "sending" ? "Sending…" : "Get My Offer"}
        </button>
      </div>
      {state === "error" && (
        <p className={`mt-2 text-sm ${onDark ? "text-white" : "text-[var(--bpg-accent-ink)]"}`}>
          Something went wrong sending that. Please try again.
        </p>
      )}
      <p className={`mt-3 text-sm ${onDark ? "text-white/75" : "text-[var(--bpg-muted)]"}`}>
        {context === "commercial"
          ? "No obligation. We\u2019ll show our working \u2014 what we\u2019d pay, not what it\u2019s worth."
          : "No obligation. We\u2019ll show you how we got to the number."}
      </p>
    </form>
  );
}
