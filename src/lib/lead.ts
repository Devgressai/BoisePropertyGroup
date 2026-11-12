/**
 * The lead model — ONE definition shared by the form, the API route and tests.
 *
 * Two steps. Step 1 is the address alone and is sent immediately, so a seller
 * who stops there is still a lead. Step 2 adds who they are and what is going
 * on, and is sent as a follow-up carrying the same lead id. Nothing is stored
 * on our side: each step is an email to the owner's inbox.
 */
export type LeadContext = "residential" | "commercial";

export const SITUATIONS: Record<LeadContext, { value: string; label: string }[]> = {
  residential: [
    { value: "inherited", label: "Inherited or in probate" },
    { value: "as-is", label: "Needs work / selling as-is" },
    { value: "rental", label: "Rental, with or without tenants" },
    { value: "behind", label: "Behind on payments or taxes" },
    { value: "divorce", label: "Divorce or separation" },
    { value: "land", label: "Land or acreage" },
    { value: "manufactured", label: "Manufactured home" },
    { value: "relocating", label: "Moving or relocating" },
    { value: "other", label: "Something else" },
  ],
  commercial: [
    { value: "multifamily", label: "Multifamily, five units and up" },
    { value: "office", label: "Office" },
    { value: "industrial", label: "Industrial, flex or yard" },
    { value: "land", label: "Development or commercial land" },
    { value: "other", label: "Something else" },
  ],
};

export const TIMELINES = [
  { value: "asap", label: "As soon as possible" },
  { value: "1-3m", label: "In the next 1–3 months" },
  { value: "3m+", label: "In 3 months or more" },
  { value: "exploring", label: "Just weighing options" },
];

export const CONTACT_PREFS = [
  { value: "call", label: "Call" },
  { value: "text", label: "Text" },
  { value: "email", label: "Email" },
];

export const ROLES = [
  { value: "owner", label: "Owner" },
  { value: "family", label: "Family member / estate" },
  { value: "agent", label: "Agent or broker" },
  { value: "other", label: "Other" },
];

/** Which situation a page implies, so step 2 opens pre-selected. Path → value. */
export const SITUATION_FROM_PATH: Record<string, string> = {
  "/sell-inherited-house-idaho": "inherited",
  "/guides/selling-an-inherited-house-in-idaho": "inherited",
  "/guides/selling-a-house-in-probate-in-idaho": "inherited",
  "/sell-house-as-is-idaho": "as-is",
  "/guides/idaho-seller-disclosure-when-selling-as-is": "as-is",
  "/sell-rental-property-idaho": "rental",
  "/guides/selling-a-rental-with-tenants-in-idaho": "rental",
  "/sell-house-before-foreclosure-idaho": "behind",
  "/guides/idaho-foreclosure-vs-property-tax-delinquency": "behind",
  "/guides/liens-and-judgments-when-selling-in-idaho": "behind",
  "/sell-house-divorce-idaho": "divorce",
  "/guides/selling-a-house-during-a-divorce-in-idaho": "divorce",
  "/sell-land-idaho": "land",
  "/guides/selling-land-or-acreage-in-ada-county": "land",
  "/sell-manufactured-home-idaho": "manufactured",
  "/guides/selling-a-manufactured-home-in-idaho": "manufactured",
  "/commercial/multifamily": "multifamily",
  "/commercial/industrial": "industrial",
};

const clip = (v: unknown, n: number) => (typeof v === "string" ? v.trim().slice(0, n) : "");
const oneOf = (v: unknown, list: { value: string }[]) =>
  typeof v === "string" && list.some((o) => o.value === v) ? v : "";

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
/** US numbers: 10 digits, optionally a leading 1. */
export function normalizePhone(v: string): string {
  const d = v.replace(/\D/g, "");
  const ten = d.length === 11 && d.startsWith("1") ? d.slice(1) : d;
  return ten.length === 10 ? `(${ten.slice(0, 3)}) ${ten.slice(3, 6)}-${ten.slice(6)}` : "";
}

export interface LeadDetails {
  leadId: string;
  address: string;
  context: LeadContext;
  name: string;
  phone: string;
  email: string;
  contactPref: string;
  situation: string;
  timeline: string;
  role: string;
  notes: string;
  page: string;
}

/** Validates step 2. Returns the clean lead, or the first problem a person can fix. */
export function parseDetails(body: Record<string, unknown>): { ok: true; lead: LeadDetails } | { ok: false; error: string } {
  const context: LeadContext = body.context === "commercial" ? "commercial" : "residential";
  const name = clip(body.name, 120);
  const rawPhone = clip(body.phone, 40);
  const phone = rawPhone ? normalizePhone(rawPhone) : "";
  const email = clip(body.email, 200).toLowerCase();
  if (!name) return { ok: false, error: "Please add your name." };
  if (rawPhone && !phone) return { ok: false, error: "That phone number doesn't look complete." };
  if (email && !EMAIL_RE.test(email)) return { ok: false, error: "That email address doesn't look right." };
  if (!phone && !email) return { ok: false, error: "Add a phone number or an email so we can reach you." };
  return {
    ok: true,
    lead: {
      leadId: clip(body.leadId, 16).replace(/[^a-z0-9]/gi, ""),
      address: clip(body.address, 300),
      context,
      name,
      phone,
      email,
      contactPref: oneOf(body.contactPref, CONTACT_PREFS),
      situation: oneOf(body.situation, SITUATIONS[context]),
      timeline: oneOf(body.timeline, TIMELINES),
      role: oneOf(body.role, ROLES),
      notes: clip(body.notes, 2000),
      page: clip(body.page, 200).replace(/[^\w\-/.]/g, ""),
    },
  };
}

export const labelOf = (list: { value: string; label: string }[], v: string) =>
  list.find((o) => o.value === v)?.label ?? "—";
