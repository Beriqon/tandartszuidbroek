import { mainNav } from "@/lib/site-config";

const onzePraktijk = mainNav.find((i) => i.href === "/onze-praktijk");
const childMap = Object.fromEntries(
  (onzePraktijk?.children ?? []).map((c) => {
    const seg = c.href.replace("/onze-praktijk/", "");
    return [seg, { title: c.label, href: c.href }];
  }),
) as Record<string, { title: string; href: string }>;

const defaultIntro =
  "De inhoud van deze pagina wordt uit het CMS geladen. Zonder gekoppeld document in Sanity ziet u deze voorbeeldtekst.";

export function onzePraktijkFallbackCopy(
  segments: string[] | undefined,
): { title: string; body: string } {
  const key = segments?.[0];
  if (!key) {
    return {
      title: "Onze praktijk",
      body: `${defaultIntro} Voeg in Sanity een pagina toe met slug \`onze-praktijk\` (of het pad met schuine strepen, zie code).`,
    };
  }
  const nav = childMap[key];
  const label = nav?.title ?? key;
  return {
    title: label,
    body: `${defaultIntro} Maak een pagina met slug \`onze-praktijk/${key}\` of \`onze-praktijk-${key}\`.`,
  };
}
