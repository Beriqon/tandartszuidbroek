/**
 * Lokale assets in `public/behandelingen/` — key = treatment-slug (zoals in URL / demo).
 */
export const TREATMENT_LOCAL_IMAGE_BY_SLUG: Readonly<Record<string, string>> = {
  "periodieke-controle": "/behandelingen/periodiekecontrole.png",
  "mondhygiene-en-preventie": "/behandelingen/mondhygieneenpreventie.png",
  "restauratieve-tandheelkunde": "/behandelingen/restauratievetandheelkunde.png",
  "esthetische-tandheelkunde": "/behandelingen/estetischetandheelkunde.png",
  "tanden-bleken": "/behandelingen/tandenbleken.png",
  "parodontologie": "/behandelingen/parodontologie.png",
  "implantologie": "/behandelingen/implantologie.png",
  "endodontologie": "/behandelingen/endodontologie.png",
  "frames-en-protheses": "/behandelingen/framesenprotheses.jpg",
  "kronen-en-bruggen": "/behandelingen/kronenenbruggen.png",
  "chirurgie": "/behandelingen/chirurgie.png",
} as const;

export function treatmentLocalImageSrc(
  slug: string | undefined | null,
): string | undefined {
  if (!slug) return undefined;
  return TREATMENT_LOCAL_IMAGE_BY_SLUG[slug];
}
