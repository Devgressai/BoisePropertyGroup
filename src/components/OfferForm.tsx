"use client";

import { useState } from "react";

/**
 * Deliberately ONE field to start.
 *
 * CRO: the first ask is the smallest one that still qualifies a lead — the
 * address. Name, phone and condition are collected on the next step, after the
 * seller has committed. Asking for six fields before establishing any value is
 * where cash-buyer forms lose people.
 */
export default function OfferForm({ tone = "light" }: { tone?: "light" | "dark" }) {
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
        body: JSON.stringify({ address, website: "" }),
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
          We&rsquo;ll look at comparable sales and the parcel record, then come back to you with a
          number and how we reached it.
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
        No obligation. We&rsquo;ll show you how we got to the number.
      </p>
    </form>
  );
}
