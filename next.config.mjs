// Hub–Spoke setup. The Spoke's real Vercel domain is https://pazomaracing.vercel.app (no hyphen).
// assetPrefix is derived at build time, never hardcoded:
//   1. SPOKE_PROJECT_URL (explicit override, e.g. https://pazomaracing.vercel.app)
//   2. VERCEL_PROJECT_PRODUCTION_URL (set automatically by Vercel; production builds only)
//   3. otherwise unset -> relative /_next/static/*, which works for direct access and previews.
const SUB = process.env.PUBLIC_SUBPATH || "/pazoma-racing";

function toOrigin(value) {
  if (!value) return undefined;
  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  try { return new URL(withProtocol).origin; } catch { return undefined; }
}

const spokeOrigin =
  toOrigin(process.env.SPOKE_PROJECT_URL) ||
  (process.env.VERCEL_ENV === "production" ? toOrigin(process.env.VERCEL_PROJECT_PRODUCTION_URL) : undefined);

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
