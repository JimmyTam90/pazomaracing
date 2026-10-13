// Spoke serves its own assets: NO assetPrefix by default -> standard relative /_next/static/*.
// Only set HUB_ASSET_PREFIX (e.g. https://pazomaracing.vercel.app) if the Hub origin cannot
// forward /_next/* and you deliberately want assets pulled from the Spoke origin.
const SUB = process.env.PUBLIC_SUBPATH || "/pazoma-racing";
const optIn = process.env.HUB_ASSET_PREFIX;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  assetPrefix: optIn && /^https?:\/\//.test(optIn) ? optIn.replace(/\/+$/, "") : undefined,
  async rewrites() {
    // Makes /pazoma-racing/* work on the Spoke whether or not the Hub strips the prefix.
    return { beforeFiles: [{ source: `${SUB}/:path*`, destination: "/:path*" }] };
  },
  async headers() {
    // Public build assets: "*" allows loading from pazomaracing.vercel.app and primegearlab.com.
    return [{ source: "/_next/static/:path*", headers: [{ key: "Access-Control-Allow-Origin", value: "*" }] }];
  },
};

export default nextConfig;
