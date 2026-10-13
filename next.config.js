// Hub–Spoke: Hub rewrites https://primegearlab.com/pazoma-racing/* to this Spoke.
// - No basePath (the Hub owns the public subpath).
// - assetPrefix = absolute Spoke origin so /_next/static/* loads straight from Vercel.
// - Spoke-side rewrite lets /pazoma-racing/* also work whether or not the Hub strips the prefix.
const SPOKE = process.env.SPOKE_PROJECT_URL || "https://pazoma-racing.vercel.app";
const SUB = process.env.PUBLIC_SUBPATH || "/pazoma-racing";
const HUB = process.env.PUBLIC_BASE_URL || "https://primegearlab.com";

module.exports = {
  reactStrictMode: true,
  trailingSlash: false,
  assetPrefix: process.env.NODE_ENV === "production" ? SPOKE : undefined,
  async rewrites() {
    return { beforeFiles: [{ source: `${SUB}/:path*`, destination: "/:path*" }] };
  },
  async headers() {
    // Cross-origin CSS/JS/fonts requested by pages served from the Hub origin.
    return [{ source: "/_next/static/:path*", headers: [{ key: "Access-Control-Allow-Origin", value: HUB }] }];
  },
};
