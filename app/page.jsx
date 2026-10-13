import AffiliateCTA from "../components/AffiliateCTA";
import { resolveAffiliateUrl } from "../lib/affiliate-links";
import { CATEGORIES, HERO, FAQ, FITMENT, STEPS } from "../lib/products";

const ALL = "Browse All Motorcycle Parts";

export default function Home() {
  const cats = Array.isArray(CATEGORIES) ? CATEGORIES : [];
  return (
    <main>
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-2 lg:items-center">
        {/* Mobile order: image -> title/description -> CTA */}
        <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 lg:order-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={HERO.image.src} alt={HERO.image.alt} width={HERO.image.width} height={HERO.image.height} className="aspect-[9/4] w-full object-cover" style={{ maxWidth: "100%", height: "auto" }} />
        </div>
        <div className="lg:order-1">
          <h1 className="text-3xl font-black leading-tight sm:text-5xl">Find upgrade parts for Harley, cruiser and street bikes</h1>
          <p className="mt-4 max-w-prose text-zinc-300">Explore exhausts, handlebars, lighting, crash bars, seats and fairings from Pazoma Racing, then confirm fitment for your exact bike on the merchant&apos;s listing.</p>
          <AffiliateCTA productKey="all-products" placement="hero" className="mt-6 w-full sm:w-auto">{ALL}</AffiliateCTA>
          <p className="mt-3 max-w-prose text-xs text-zinc-400">PrimeGearLab is an independent product guide. We may earn a commission when you purchase through qualifying links on this page, at no additional cost to you. Links open pazomaracing.com in a new tab.</p>
        </div>
      </section>

      <section id="categories" className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-bold">Shop by part type</h2>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cats.map((c) => {
            const fallback = resolveAffiliateUrl(c.id).source !== "PRODUCT_MAPPING";
            return (
              <li key={c.id} className="flex flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
                {c.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={c.image.src} alt={c.image.alt} width={300} height={300} loading="lazy" className="aspect-square w-full bg-white object-contain" style={{ maxWidth: "100%", height: "auto" }} />
                ) : (
                  <div className="flex aspect-square w-full items-center justify-center bg-zinc-800 px-4 text-center font-semibold text-zinc-300">{c.name}</div>
                )}
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="text-lg font-bold">{c.name}</h3>
                  <p className="mt-2 flex-1 text-sm text-zinc-300">{c.description}</p>
                  <AffiliateCTA productKey={c.id} placement={`category_${c.id.replace(/-/g, "_")}`} className="mt-4 w-full">
                    {fallback ? "Check Details on Pazoma Racing" : c.ctaLabel}
                  </AffiliateCTA>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section id="fitment" className="mx-auto mt-14 max-w-3xl px-4">
        <h2 className="text-2xl font-bold">Check fitment before you order</h2>
        <p className="mt-3 text-zinc-300">Parts that look alike can fit differently. Before you buy, confirm on the listing:</p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-300">{FITMENT.map((t) => <li key={t}>{t}</li>)}</ul>
        <p className="mt-4 text-sm text-zinc-400">Modifications can affect noise, emissions, safety and road legality. Follow the manufacturer&apos;s instructions and check local rules.</p>
      </section>

      <section className="mx-auto mt-14 max-w-3xl px-4">
        <h2 className="text-2xl font-bold">How to use this guide</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-zinc-300">{STEPS.map((t) => <li key={t}>{t}</li>)}</ol>
        <p className="mt-4 text-zinc-300">When last checked, the merchant&apos;s homepage showed a free-shipping banner for orders over $49. Shipping, returns and warranty terms are the merchant&apos;s and may change.</p>
      </section>

      <section id="faq" className="mx-auto mt-14 max-w-3xl px-4">
        <h2 className="text-2xl font-bold">Questions</h2>
        <div className="mt-6 divide-y divide-zinc-800 border-y border-zinc-800">
          {FAQ.map(([q, a]) => (
            <details key={q} className="py-4">
              <summary className="cursor-pointer font-semibold">{q}</summary>
              <p className="mt-2 text-zinc-300">{a}</p>
            </details>
          ))}
        </div>
        <div className="mt-8 text-center"><AffiliateCTA productKey="all-products" placement="final" className="w-full sm:w-auto">{ALL}</AffiliateCTA></div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-zinc-800 bg-zinc-950/95 p-3 md:hidden" style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
        <AffiliateCTA productKey="all-products" placement="sticky_mobile" className="w-full">{ALL}</AffiliateCTA>
      </div>
    </main>
  );
}
