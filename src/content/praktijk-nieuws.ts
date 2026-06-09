/**
 * Actuele praktijkinformatie — vacatures en aangepaste openingstijden.
 * Later te beheren via CMS/admin; nu statische bron voor home en vacaturepagina.
 */

export type SluitingType = "gesloten" | "gedeeltelijk";

export type GeslotenItem = {
  id: string;
  /** Weergavetekst, bijv. "Donderdag 14 mei 2026" */
  datum: string;
  /** Optioneel, bijv. "Hemelvaartsdag" */
  omschrijving?: string;
  /** Extra details bij gedeeltelijke sluiting of periodes */
  details?: string;
  type: SluitingType;
};

export type AangepasteOpeningstijd = GeslotenItem;

export const praktijkNieuws = {
  /** IDs uit `vacatures.ts` die momenteel open staan. */
  openVacatureIds: ["tandartsassistent", "balie-assistent"] as const,

  aangepasteOpeningstijden: {
    gesloten: [
      {
        id: "hemelvaart-2026",
        datum: "Donderdag 14 mei 2026",
        omschrijving: "Hemelvaartsdag",
        type: "gesloten",
      },
      {
        id: "pinksteren-2026",
        datum: "Maandag 25 mei 2026",
        omschrijving: "Tweede Pinksterdag",
        type: "gesloten",
      },
      {
        id: "kerst-2026",
        datum: "Vrijdag 25 december 2026",
        omschrijving: "Eerste Kerstdag",
        type: "gesloten",
      },
    ] satisfies readonly GeslotenItem[],
    bijzonderheden: [
      {
        id: "sep-2026-middag",
        datum: "Vrijdag 11 september 2026",
        details: "vanaf 12.00 uur",
        type: "gedeeltelijk",
      },
      {
        id: "kerstvakantie-2026",
        datum: "Donderdag 24 december 2026 t/m vrijdag 1 januari 2027",
        type: "gedeeltelijk",
      },
    ] satisfies readonly GeslotenItem[],
  },
};
