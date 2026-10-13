// assetPrefix is set ONLY when SPOKE_PROJECT_URL is defined at build time.
// Otherwise it is undefined and Next.js uses relative /_next/static/* (correct for direct access).
// No hardcoded domains anywhere in this file.
const SUB = process.env.PUBLIC_SUBPATH || "/pazoma-racing";

function toOrigin(value) {
  if (!value || !value.trim()) return undefined;
  const v = value.trim();
  try { return new URL(/^https?:\/\//i.test(v) ? v : `https://${v}`).origin; } catch { return undefined; }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  assetPrefix: toOrigin(process.env.SPOKE_PROJECT_URL),
  async rewrites() {
    return { beforeFiles: [{ source: `${SUB}/:path*`, destination: "/:path*" }] };
  },
  async headers() {
    return [{ source: "/_next/static/:path*", headers: [{ key: "Access-Control-Allow-Origin", value: "*" }] }];
  },
};

export default nextConfig;
