import "./globals.css";
import Analytics from "../components/Analytics";
import { SITE, publicUrl, internalPath } from "../lib/site-config";

const title = "Aftermarket Harley and Cruiser Parts | PrimeGearLab";
const description = "Browse aftermarket exhausts, handlebars, LED lighting, crash bars, seats and fairings for Harley and cruiser motorcycles. Independent affiliate guide to Pazoma Racing.";

export const metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title, description,
  alternates: { canonical: publicUrl() },
  openGraph: { title, description, url: publicUrl(), siteName: SITE.name, locale: "en_US", type: "website" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><style dangerouslySetInnerHTML={{ __html: "body{margin:0;background:#18181B;color:#F4F4F5;font-family:Arial,sans-serif}img{max-width:100%;height:auto}:where(a){color:inherit}main,header>div,footer>div{max-width:72rem;margin:0 auto;padding:0 1rem}:where(a[data-cta]){display:inline-block;box-sizing:border-box;background:#D97706;color:#fff;padding:12px 20px;border-radius:6px;font-weight:700;text-decoration:none;text-align:center}:where(ul[data-grid]){display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:24px;list-style:none;margin:24px 0 0;padding:0}:where(ul[data-grid]>li){display:flex;flex-direction:column;background:#27272A;border-radius:12px;overflow:hidden}:where(ul[data-grid]>li>div){display:flex;flex-direction:column;flex:1;padding:16px}" }} /></head>
      <body className="pb-24 md:pb-0">
        <header className="border-b border-zinc-800">
          <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
            <a href={internalPath("")} className="flex items-center gap-3 font-extrabold" aria-label={`${SITE.name} home`}>
              <span className="inline-block h-10 w-10 shrink-0 overflow-hidden" style={{ width: 40, height: 40, maxWidth: 40, maxHeight: 40, display: "inline-block", overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={SITE.logoPath} alt="" width={40} height={40} className="h-10 w-10 max-h-10 max-w-10 object-contain" style={{ width: 40, height: 40, maxWidth: 40, maxHeight: 40, objectFit: "contain" }} />
              </span>
              <span>{SITE.name}</span>
            </a>
            <nav aria-label="Page sections" className="ml-auto flex flex-wrap gap-x-4 gap-y-1 text-sm">
              <a href={`${internalPath("")}#categories`} className="underline">Categories</a>
              <a href={`${internalPath("")}#fitment`} className="underline">Fitment</a>
              <a href={`${internalPath("")}#faq`} className="underline">FAQ</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="mt-16 border-t border-zinc-800 px-4 py-10 text-sm text-zinc-400">
          <div className="mx-auto max-w-6xl space-y-3">
            <p>{SITE.name} is an independent product guide. We may earn a commission when you purchase through qualifying links on this page, at no additional cost to you. We are not the Pazoma Racing store. Contact: {SITE.contactEmail}</p>
            <nav aria-label="Legal" className="flex flex-wrap gap-x-5 gap-y-2">
              {["privacy", "terms", "affiliate-disclosure", "contact"].map((s) => (
                <a key={s} href={internalPath(`/${s}`)} className="underline">{s.replace("-", " ")}</a>
              ))}
            </nav>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
