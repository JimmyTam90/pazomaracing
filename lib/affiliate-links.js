// Supplied inputs, stored verbatim. Never append, reorder or rewrite these URLs.
export const DEFAULT_AFFILIATE_URL = "https://www.pazomaracing.com/?ref=BUITHANH";
export const PRODUCT_DEEP_LINKS_MAPPING = {
  "motorcycle-exhausts": "https://www.pazomaracing.com/collections/exhaust-systems?ref=BUITHANH",
  "handlebars-controls": "https://www.pazomaracing.com/collections/handlebars-controls?ref=BUITHANH",
  "led-lighting-signals": "https://www.pazomaracing.com/collections/motorcycle-lights?ref=BUITHANH",
  "engine-guards-sliders": "https://www.pazomaracing.com/collections/crash-bars-sliders?ref=BUITHANH",
  "seats-saddlebags": "https://www.pazomaracing.com/collections/seats-bags?ref=BUITHANH",
  "windshields-fairings": "https://www.pazomaracing.com/collections/windshields-fairings?ref=BUITHANH",
  "custom-mirrors": "https://www.pazomaracing.com/collections/mirrors?ref=BUITHANH",
  "footpegs-pedals": "https://www.pazomaracing.com/collections/footpegs?ref=BUITHANH",
  "all-products": "https://www.pazomaracing.com/collections/all?ref=BUITHANH",
};

const isHttpUrl = (v) => {
  if (typeof v !== "string") return false;
  try { const u = new URL(v); return u.protocol === "https:" || u.protocol === "http:"; } catch { return false; }
};

export function resolveAffiliateUrl(key) {
  const map = PRODUCT_DEEP_LINKS_MAPPING;
  if (typeof key === "string" && Object.prototype.hasOwnProperty.call(map, key) && isHttpUrl(map[key])) {
    return { url: map[key], source: "PRODUCT_MAPPING", status: "PROVIDED_NOT_RUNTIME_VERIFIED" };
  }
  if (isHttpUrl(DEFAULT_AFFILIATE_URL)) {
    return { url: DEFAULT_AFFILIATE_URL, source: "DEFAULT_FALLBACK", status: "PROVIDED_NOT_RUNTIME_VERIFIED" };
  }
  return { url: null, source: "NONE", status: "BLOCKED_MISSING_AFFILIATE_URL" };
}
