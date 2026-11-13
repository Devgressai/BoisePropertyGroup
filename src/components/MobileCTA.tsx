"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site, hasPhone } from "@/data/site";

/**
 * Sticky action bar on small viewports, where most seller traffic arrives.
 *
 * It stays out of the way while an offer form is on screen (the hero's, the
 * closing band's, /contact's): a bar that covers the form it points to is a
 * second ask on top of the first. Forms are marked with data-offer-form.
 */
export default function MobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const forms = Array.from(document.querySelectorAll("[data-offer-form]"));
    if (forms.length === 0) return setShow(true);
    const onScreen = new Set<Element>();
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) onScreen.add(e.target);
        else onScreen.delete(e.target);
      }
      setShow(onScreen.size === 0);
    });
    forms.forEach((f) => io.observe(f));
    return () => io.disconnect();
  }, []);

  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-[var(--bpg-border)] bg-white/95 p-3 backdrop-blur transition-transform duration-200 lg:hidden ${show ? "translate-y-0" : "translate-y-full"}`}
    >
      <div className="flex gap-3">
        <Link href="#offer" tabIndex={show ? 0 : -1} className="btn btn-primary flex-1">
          Get My Offer
        </Link>
        {hasPhone && (
          <a href={site.phoneHref} tabIndex={show ? 0 : -1} className="btn btn-secondary">
            Call
          </a>
        )}
      </div>
    </div>
  );
}
