/**
 * Central place for every piece of company information.
 * Fields left empty are simply hidden across the site — no placeholder data
 * is ever published. Fill them in when the owner provides real details.
 */
export const SITE = {
  name: "HiWall",
  tagline: "Kuchnie i meble na wymiar",
  city: "Wrocław",
  area: "Wrocław i okolice",
  url: "", // np. "https://hiwall.pl" – uzupełnić po podłączeniu domeny (canonical, sitemap)
  phone: "",
  email: "meble@hiwall.pl",
  address: "",
  hours: "",
  social: [{ label: "Facebook", href: "https://www.facebook.com/hiwall.meble" }],
  legal: {
    company: "",
    nip: "",
    regon: "",
  },
};

export const NAV = [
  { label: "Kuchnie na wymiar", to: "/kuchnie-na-wymiar" },
  { label: "Meble na wymiar", to: "/meble-na-wymiar" },
  { label: "Realizacje", to: "/realizacje" },
  { label: "O firmie", to: "/o-firmie" },
  { label: "Kontakt", to: "/kontakt" },
];

export const PROJECT_TYPES = [
  { value: "kuchnia", label: "Kuchnia" },
  { value: "szafa-zabudowa", label: "Szafa lub zabudowa" },
  { value: "inne-meble", label: "Inne meble" },
  { value: "inny-projekt", label: "Inny projekt" },
];

export function isFilled(value) {
  return typeof value === "string" && value.trim().length > 0;
}

export function telHref(phone) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function canonical(path) {
  if (!SITE.url) return undefined;
  const base = SITE.url.replace(/\/$/, "");
  return `${base}${path === "/" ? "/" : path}`;
}