import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/**
 * A real 404 (Next serves it with status 404 and noindex). It was Next's
 * unstyled default — no navigation, so a reader who followed a dead link left.
 */
export default function NotFound() {
  const routes = [
    { href: "/", label: "Home" },
    { href: "/locations", label: "Areas we buy in" },
    { href: "/guides", label: "Idaho selling guides" },
    { href: "/what-we-buy", label: "What we buy" },
    { href: "/contact", label: "Request an offer" },
  ];
  return (
    <>
      <Navbar />
      <main id="main" className="glow py-24 sm:py-32">
        <div className="wrap max-w-[44rem]">
          <p className="eyebrow text-[var(--bpg-warm)]">Page not found</p>
          <h1 className="display-xl mt-4 text-[var(--bpg-ink)]">That page is not here.</h1>
          <p className="lede mt-6 text-[var(--bpg-muted)]">
            It may have moved, or the link may be mistyped. One of these will get you back on track.
          </p>
          <ul className="mt-9 flex flex-wrap gap-3">
            {routes.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="btn btn-secondary">{r.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
