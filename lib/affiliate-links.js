// Owner-approved mapping (slugs updated 2026-10-13 to match live pazomaracing.com collection slugs).
// Never append, reorder or rewrite these URLs.
export const DEFAULT_AFFILIATE_URL = "https://www.pazomaracing.com/?ref=BUITHANH";
export const PRODUCT_DEEP_LINKS_MAPPING = {
  "motorcycle-exhausts": "https://www.pazomaracing.com/collections/muffler?ref=BUITHANH",
  "handlebars-controls": "https://www.pazomaracing.com/collections/handlebar?ref=BUITHANH",
  "led-lighting-signals": "https://www.pazomaracing.com/collections/lighting?ref=BUITHANH",
  "engine-guards-sliders": "https://www.pazomaracing.com/collections/engine-guard?ref=BUITHANH",
  "seats-saddlebags": "https://www.pazomaracing.com/collections/sissy-bar?ref=BUITHANH",
  "windshields-fairings": "https://www.pazomaracing.com/collections/windshield?ref=BUITHANH",
  "custom-mirrors": "https://www.pazomaracing.com/collections/mirrors?ref=BUITHANH",
  "footpegs-pedals": "https://www.pazomaracing.com/collections/foot-pegs?ref=BUITHANH",
  "all-products": "https://www.pazomaracing.com/collections/all?ref=BUITHANH",
};

const isHttpUrl = (v) => {
  if (typeof v !== "string") return false;
  try { const u = new URL(v); return u.protocol === "https:" || u.protocol === "http:"; } catch { return false; }
};

// Destination status. HTTP_404 entries fall back to DEFAULT_AFFILIATE_URL.
// OBSERVED_IN_MERCHANT_NAV = slug seen in pazomaracing.com navigation, URL itself not fetched.
// HTTP_200 = fetched successfully (2026-10-13).
export const DESTINATION_STATUS = {
  "motorcycle-exhausts": "OBSERVED_IN_MERCHANT_NAV",
  "handlebars-controls": "OBSERVED_IN_MERCHANT_NAV",
  "led-lighting-signals": "OBSERVED_IN_MERCHANT_NAV",
  "engine-guards-sliders": "OBSERVED_IN_MERCHANT_NAV",
  "seats-saddlebags": "OBSERVED_IN_MERCHANT_NAV",
  "windshields-fairings": "OBSERVED_IN_MERCHANT_NAV",
  "custom-mirrors": "HTTP_200",
  "footpegs-pedals": "OBSERVED_IN_MERCHANT_NAV",
  "all-products": "OBSERVED_IN_MERCHANT_NAV",
};

export function resolveAffiliateUrl(key) {
  const map = PRODUCT_DEEP_LINKS_MAPPING;
  if (typeof key === "string" && Object.prototype.hasOwnProperty.call(map, key) && isHttpUrl(map[key])) {
    if (DESTINATION_STATUS[key] === "HTTP_404" && isHttpUrl(DEFAULT_AFFILIATE_URL)) {
      return { url: DEFAULT_AFFILIATE_URL, source: "DEFAULT_FALLBACK_DEEP_LINK_404", status: "PROVIDED_NOT_RUNTIME_VERIFIED" };
    }
    return { url: map[key], source: "PRODUCT_MAPPING", status: "PROVIDED_NOT_RUNTIME_VERIFIED" };
  }
  if (isHttpUrl(DEFAULT_AFFILIATE_URL)) {
    return { url: DEFAULT_AFFILIATE_URL, source: "DEFAULT_FALLBACK", status: "PROVIDED_NOT_RUNTIME_VERIFIED" };
  }
  return { url: null, source: "NONE", status: "BLOCKED_MISSING_AFFILIATE_URL" };
}
