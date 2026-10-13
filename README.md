# pazoma-racing (Next.js 14.2.35, JavaScript, App Router)
Hub: https://primegearlab.com/pazoma-racing  ·  Spoke: https://pazomaracing.vercel.app (owner-confirmed; V2 brief still lists the hyphenated name)

## Commands
npm install && npm run build   (not run in the authoring environment)
npm run qa                     (static checks: affiliate URLs, new-tab attributes, no JS navigation)

## Affiliate destinations
Mapping updated (owner-approved) to live merchant slugs, all keeping ?ref=BUITHANH:
muffler, handlebar, lighting, engine-guard, sissy-bar (seats), windshield, mirrors, foot-pegs, all.
Only /collections/mirrors was fetched successfully (HTTP 200). The others were seen in Pazoma's navigation
but not fetched, and ?ref= attribution is untested. Click each card once after deploying.

## Hub–Spoke
No basePath, no assetPrefix by default. Spoke rewrite /pazoma-racing/* -> /*. Logo: public/logo.png (served at /pazoma-racing/logo.png).
Via the Hub, /_next/static/* must reach the Spoke (Hub rewrite) or set HUB_ASSET_PREFIX=https://pazomaracing.vercel.app.

## Tracking
GA4 / Google Ads / Meta Pixel load only when NEXT_PUBLIC_* IDs are set. No consent banner is included.
