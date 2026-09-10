import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  // PRE-LAUNCH: nothing is indexed until a registered domain and real NAP
  // exist. Opening this up is a deliberate act, not a default.
  const launched = false;

  if (!launched) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  // Named AI crawlers are allowed explicitly — cheap, and it directly serves
  // the answer-engine goal.
  const agents = ["GPTBot", "ChatGPT-User", "Google-Extended", "PerplexityBot",
    "ClaudeBot", "anthropic-ai", "Amazonbot", "CCBot", "Applebot-Extended", "Bytespider"];
  return {
    rules: [{ userAgent: "*", allow: "/" }, ...agents.map((a) => ({ userAgent: a, allow: "/" }))],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
