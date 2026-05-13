/**
 * Sanity-document `slug.current` kan het pad met schuine streep zijn
 * (`onze-praktijk/openingstijden`) of een enkele slug met koppeltekens
 * (`onze-praktijk-openingstijden`). Deze volgorde wordt bij fetch geprobeerd.
 */
export function onzePraktijkSlugCandidates(segments: string[] | undefined): string[] {
  const seg = segments?.filter(Boolean) ?? [];
  if (seg.length === 0) return ["onze-praktijk"];
  const slash = `onze-praktijk/${seg.join("/")}`;
  const hyphen = `onze-praktijk-${seg.join("-")}`;
  return [slash, hyphen];
}
