# pazoma-racing (Next.js 14.2.35, JavaScript)
Hub–Spoke: Hub `https://primegearlab.com/pazoma-racing/*` -> Spoke `https://pazoma-racing.vercel.app/*`.
Hub rewrite (assumed, verify): `{ "source": "/pazoma-racing/:path*", "destination": "https://pazoma-racing.vercel.app/:path*" }`
Set env vars from `.env.example` in Vercel (build time). Add `public/logo.png` (served at `/pazoma-racing/logo.png`).
