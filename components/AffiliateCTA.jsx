"use client";
import { resolveAffiliateUrl } from "../lib/affiliate-links";

// Real <a>, always a new tab, URL used exactly as supplied. Tracking never blocks navigation.
export default function AffiliateCTA({ productKey, children, className = "", placement = "unknown" }) {
  const { url } = resolveAffiliateUrl(productKey);
  if (!url) {
    return <span aria-disabled="true" className={`inline-block rounded-md bg-zinc-700 px-5 py-3 text-center font-bold text-zinc-300 ${className}`}>Link unavailable</span>;
  }
  const track = () => {
    try {
      window.gtag?.("event", "affiliate_click", { item_id: productKey, placement });
      window.fbq?.("trackCustom", "AffiliateClick", { item_id: productKey, placement });
    } catch {}
  };
  return (
    <a data-cta="" href={url} target="_blank" rel="noopener noreferrer" onClick={track}
       className={`inline-flex min-h-[48px] items-center justify-center rounded-md bg-brand px-5 py-3 text-center font-bold text-black hover:bg-amber-500 ${className}`}>
      {children}
    </a>
  );
}
