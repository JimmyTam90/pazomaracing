// Hub–Spoke setup. assetPrefix is derived at build time, never hardcoded.
// Priority (so a stale env var can never override the real deployment domain):
//   1. VERCEL_PROJECT_PRODUCTION_URL - set automatically by Vercel on production builds
//   2. SPOKE_PROJECT_URL - manual value, used only when Vercel's variable is absent (e.g. local/CI)
//   3. unset -> relative /_next/static/*, which always works for direct access and previews.
const SUB = process.env.PUBLIC_SUBPATH || "/pazoma-racing";

function toOrigin(value) {
  if (!value) return undefined;
  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  try { return new URL(withProtocol).origin; } catch { return undefined; }
}

const spokeOrigin =
  (process.env.VERCEL_ENV === "production" ? toOrigin(process.env.VERCEL_PROJECT_PRODUCTION_URL) : undefined) ||
  (process.env.VERCEL ? undefined : toOrigin(process.env.SPOKE_PROJECT_URL));
if (process.env.SPOKE_PROJECT_URL) console.log("[next.config] assetPrefix =", spokeOrigin || "(none)");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  assetPrefix: process.env.NODE_ENV === "production" ? spokeOrigin : undefined,
  async rewrites() {
    // Lets /pazoma-racing/* work on the Spoke whether or not the Hub strips the prefix.
    return { beforeFiles: [{ source: `${SUB}/:path*`, destination: "/:path*" }] };
  },
  async headers() {
    // Static build assets are public, so "*" lets both pazomaracing.vercel.app and
    // primegearlab.com/pazoma-racing load them (an ACAO header can hold only one origin).
    return [{
      source: "/_next/static/:path*",
      headers: [{ key: "Access-Control-Allow-Origin", value: "*" }],
    }];
  },
};

export default nextConfig;
