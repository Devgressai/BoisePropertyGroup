import Link from "next/link";
import { site, hasPhone } from "@/data/site";

/** Sticky action bar on small viewports, where most seller traffic arrives. */
export default function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--bpg-border)] bg-[var(--bpg-background)]/97 p-3 backdrop-blur lg:hidden">
      <div className="flex gap-3">
        <Link href="#offer" className="btn btn-primary flex-1">
          Get My Offer
        </Link>
        {hasPhone && (
          <a href={site.phoneHref} className="btn btn-secondary">
            Call
          </a>
        )}
      </div>
    </div>
  );
}
