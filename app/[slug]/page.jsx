import { notFound } from "next/navigation";
import { LEGAL } from "../../lib/legal";
import { publicUrl } from "../../lib/site-config";

export const dynamicParams = false;
export const generateStaticParams = () => Object.keys(LEGAL).map((slug) => ({ slug }));
export function generateMetadata({ params }) {
  const p = LEGAL[params.slug];
  return p ? { title: `${p.title} | PrimeGearLab`, alternates: { canonical: publicUrl(`/${params.slug}`) } } : {};
}
export default function LegalPage({ params }) {
  const p = LEGAL[params.slug];
  if (!p) notFound();
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-black">{p.title}</h1>
      {p.body.map((t, i) => <p key={i} className="mt-4 text-zinc-300">{t}</p>)}
    </main>
  );
}
