import { LEGAL } from "../lib/legal";
import { publicUrl } from "../lib/site-config";
export default function sitemap() {
  return [publicUrl(), ...Object.keys(LEGAL).map((s) => publicUrl(`/${s}`))].map((url) => ({ url }));
}
