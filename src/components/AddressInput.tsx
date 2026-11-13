"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Address field that suggests real addresses as the seller types.
 *
 * Google Places API (New), called directly over HTTPS: no Maps script is
 * loaded, so nothing is added to the page until someone types three
 * characters. US only, biased to Ada County.
 *
 * Key: NEXT_PUBLIC_GOOGLE_PLACES_API_KEY (owner's, shared with their other
 * buyer site on the owner's instruction, 2026-11-13). With no key, or if
 * Google fails, this is an ordinary text field and the form works unchanged.
 *
 * What the seller types here goes to Google to fetch suggestions. That is
 * disclosed on /privacy-policy; keep the two in step.
 */
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
/** Downtown Boise. Places caps a bias circle at 50 km. */
const BIAS = { circle: { center: { latitude: 43.615, longitude: -116.2023 }, radius: 50000 } };

type Suggestion = { text: string; id: string };

export default function AddressInput({
  id,
  value,
  onChange,
  className = "",
  placeholder,
  noRing = false,
}: {
  id: string;
  value: string;
  onChange: (v: string) => void;
  className?: string;
  placeholder?: string;
  /** The surrounding bar draws the focus ring, so the input must not draw a second one. */
  noRing?: boolean;
}) {
  const [items, setItems] = useState<Suggestion[]>([]);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const wrap = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const session = useRef<string | null>(null);
  const seq = useRef(0);
  const listId = `${id}-suggestions`;

  useEffect(() => {
    const away = (e: MouseEvent) => {
      if (wrap.current && !wrap.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", away);
    return () => document.removeEventListener("mousedown", away);
  }, []);

  const lookup = useCallback(async (q: string) => {
    if (!API_KEY || q.trim().length < 3) {
      setItems([]);
      setOpen(false);
      return;
    }
    const mine = ++seq.current;
    try {
      session.current ??= crypto.randomUUID();
      const r = await fetch("https://places.googleapis.com/v1/places:autocomplete", {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Goog-Api-Key": API_KEY },
        body: JSON.stringify({
          input: q,
          includedRegionCodes: ["us"],
          locationBias: BIAS,
          sessionToken: session.current,
        }),
      });
      if (!r.ok) throw new Error(String(r.status));
      const data: { suggestions?: { placePrediction?: { placeId?: string; text?: { text?: string } } }[] } = await r.json();
      if (mine !== seq.current) return; // a newer keystroke has already answered
      const next = (data.suggestions ?? [])
        .map((s) => ({ text: s.placePrediction?.text?.text ?? "", id: s.placePrediction?.placeId ?? "" }))
        .filter((s) => s.text && s.id)
        .slice(0, 5);
      setItems(next);
      setOpen(next.length > 0);
      setActive(-1);
    } catch {
      // Never show a broken dropdown: fall back to a plain field.
      setItems([]);
      setOpen(false);
    }
  }, []);

  const type = (v: string) => {
    onChange(v);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => lookup(v), 250);
  };

  const pick = (s: Suggestion) => {
    // "…, USA" adds nothing to an address in a US-only form.
    onChange(s.text.replace(/, USA$/, ""));
    setItems([]);
    setOpen(false);
    session.current = null;
  };

  const keys = (e: React.KeyboardEvent) => {
    if (!open || items.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, items.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && active >= 0) {
      e.preventDefault(); // choose the suggestion; a second Enter submits
      pick(items[active]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div ref={wrap} className="relative w-full flex-1">
      <input
        id={id}
        name="address"
        type="text"
        className={className}
        style={noRing ? { outline: "none" } : undefined}
        placeholder={placeholder}
        // Off when suggestions are live, so the browser's own list does not sit on top of ours.
        autoComplete={API_KEY ? "off" : "street-address"}
        enterKeyHint="go"
        value={value}
        onChange={(e) => type(e.target.value)}
        onKeyDown={keys}
        onFocus={() => items.length > 0 && setOpen(true)}
        role="combobox"
        aria-controls={listId}
        aria-expanded={open}
        aria-autocomplete="list"
        aria-activedescendant={active >= 0 ? `${listId}-${active}` : undefined}
        required
      />
      {open && (
        <ul
          id={listId}
          role="listbox"
          className="absolute left-0 top-full z-50 mt-2 w-full sm:min-w-[22rem] overflow-hidden rounded-lg border border-[var(--bpg-border)] bg-white py-1 text-left shadow-[var(--bpg-shadow-lift)]"
        >
          {items.map((s, i) => (
            <li
              key={s.id}
              id={`${listId}-${i}`}
              role="option"
              aria-selected={i === active}
              onMouseEnter={() => setActive(i)}
              // mousedown, not click: it fires before the input's blur.
              onMouseDown={(e) => {
                e.preventDefault();
                pick(s);
              }}
              className={`cursor-pointer px-4 py-3 text-[0.95rem] leading-snug text-[var(--bpg-ink)] ${i === active ? "bg-[var(--bpg-tint)]" : ""}`}
            >
              {s.text.replace(/, USA$/, "")}
            </li>
          ))}
          <li aria-hidden="true" className="border-t border-[var(--bpg-border)] px-4 py-1.5 text-right text-[0.68rem] text-[var(--bpg-muted)]">
            Suggestions by Google
          </li>
        </ul>
      )}
    </div>
  );
}
