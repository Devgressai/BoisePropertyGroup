import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  // LAUNCHED 2026-09-10, on the owner's instruction, once boisepropertygroup.com
  // resolved and served correctly (apex 200, www 308 inward, valid certificate).
  //
  // ⚠️ Two things were still outstanding when this was flipped, and both are
  // owner-side. Neither blocks crawling, but both cost money if left:
  //   1. RESEND_API_KEY / LEAD_TO_EMAIL are unset in Vercel, so /api/offer
  //      returns 500 and every submitted lead is lost. Indexing takes weeks to
  //      produce traffic, so there is a window — but it is a window, not safety.
  //   2. There is no phone, email or address in src/data/site.ts, so a visitor
  //      who hits the broken form has no second way to reach anyone.
  const launched = true;

  if (!launched) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  // Named AI crawlers are allowed explicitly — cheap, and it directly serves
  // the answer-engine goal.
  const agents = ["GPTBot", "ChatGPT-User", "Google-Extended", "PerplexityBot",
    "ClaudeBot", "anthropic-ai", "Amazonbot", "CCBot", "Applebot-Extended", "Bytespider"];
  // /api/* is disallowed for everyone: it is a POST endpoint with nothing to
  // index, and crawling it wastes budget on a route that can only 400 or 500.
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/api/" },
      ...agents.map((a) => ({ userAgent: a, allow: "/", disallow: "/api/" })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
