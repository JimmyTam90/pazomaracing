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
          </div>
        </header>
        {children}
        <footer className="mt-16 border-t border-zinc-800 px-4 py-10 text-sm text-zinc-400">
          <div className="mx-auto max-w-6xl space-y-3">
            <p>As an affiliate publisher, we may earn a commission from qualifying purchases made through links on this page, at no additional cost to you. {SITE.name} is independent and is not the Pazoma Racing store.</p>
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
