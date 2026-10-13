export const SITE = {
  name: "PrimeGearLab",
  project: "pazoma-racing",
  baseUrl: process.env.PUBLIC_BASE_URL || "https://primegearlab.com",
  subpath: process.env.PUBLIC_SUBPATH || "/pazoma-racing",
  merchant: "Pazoma Racing",
  merchantUrl: "https://www.pazomaracing.com",
  contactEmail: "daniaengracia26377@gmail.com",
  logoPath: "/pazoma-racing/logo.png",
  gaId: process.env.NEXT_PUBLIC_GA_ID || "",
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
};
export const publicUrl = (path = "") => `${SITE.baseUrl}${SITE.subpath}${path}`;
export const internalPath = (path = "") => `${SITE.subpath}${path}`;
