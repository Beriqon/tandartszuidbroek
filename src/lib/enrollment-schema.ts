import { z } from "zod";

export const familyMemberRowSchema = z.object({
  bsn: z.string().max(20),
  firstName: z.string().max(80),
  lastName: z.string().max(80),
});

function familyRowTouched(row: z.infer<typeof familyMemberRowSchema>): boolean {
  return Boolean(row.bsn.trim() || row.firstName.trim() || row.lastName.trim());
}

export const enrollmentFormSchema = z
  .object({
    company: z.string().optional(),
    firstName: z.string().min(1, "Vul uw voornaam in").max(80),
    lastName: z.string().min(1, "Vul uw achternaam in").max(80),
    initials: z.string().min(1, "Vul uw initialen in").max(20),
    gender: z.string().max(20).optional(),
    streetHouseNumber: z.string().min(1, "Vul straat en huisnummer in").max(120),
    postalCode: z.string().max(12).optional(),
    city: z.string().max(80).optional(),
    phoneHome: z.string().max(40).optional(),
    phoneMobile: z.string().max(40).optional(),
    dateOfBirth: z.string().max(32).optional(),
    bsn: z.string().max(20).optional(),
    policyNumber: z.string().max(80).optional(),
    email: z.string().min(1, "Vul uw e-mailadres in").email("Ongeldig e-mailadres"),
    previousDentistDetails: z.string().max(800).optional(),
    previousDentistLastVisit: z.string().max(200).optional(),
    halfYearCheckups: z.string().max(10).optional(),
    halfYearCheckupsComment: z.string().max(800).optional(),
    reasonRegistration: z.string().max(1200).optional(),
    currentDentalProblems: z.string().max(1200).optional(),
    referralSource: z.string().max(500).optional(),
    familyMembers: z.array(familyMemberRowSchema).max(8),
  })
  .superRefine((data, ctx) => {
    const mainBsn = data.bsn?.trim() ?? "";
    if (mainBsn && !/^\d{8,9}$/.test(mainBsn)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Een geldig BSN bestaat uit 8 of 9 cijfers.",
        path: ["bsn"],
      });
    }

    data.familyMembers.forEach((row, i) => {
      if (!familyRowTouched(row)) return;
      const b = row.bsn.trim();
      const fn = row.firstName.trim();
      const ln = row.lastName.trim();
      if (!b || !fn || !ln) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Vul bij elk gezinslid BSN, voornaam en achternaam in.",
          path: ["familyMembers", i, "firstName"],
        });
      }
      if (b && !/^\d{8,9}$/.test(b)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Een geldig BSN bestaat uit 8 of 9 cijfers.",
          path: ["familyMembers", i, "bsn"],
        });
      }
    });
  });

export type EnrollmentFormValues = z.infer<typeof enrollmentFormSchema>;

export const defaultEnrollmentFormValues: z.input<typeof enrollmentFormSchema> = {
  company: "",
  firstName: "",
  lastName: "",
  initials: "",
  gender: "",
  streetHouseNumber: "",
  postalCode: "",
  city: "",
  phoneHome: "",
  phoneMobile: "",
  dateOfBirth: "",
  bsn: "",
  policyNumber: "",
  email: "",
  previousDentistDetails: "",
  previousDentistLastVisit: "",
  halfYearCheckups: "",
  halfYearCheckupsComment: "",
  reasonRegistration: "",
  currentDentalProblems: "",
  referralSource: "",
  familyMembers: [{ bsn: "", firstName: "", lastName: "" }],
};

export function formatEnrollmentEmailBody(data: EnrollmentFormValues): string {
  const genderLabel =
    data.gender === "man" ? "Man" : data.gender === "vrouw" ? "Vrouw" : data.gender?.trim() || "—";

  const halfYear =
    data.halfYearCheckups === "ja"
      ? "Ja"
      : data.halfYearCheckups === "nee"
        ? "Nee"
        : data.halfYearCheckups?.trim() || "—";

  const familyLines = data.familyMembers
    .filter(familyRowTouched)
    .map(
      (m, i) =>
        `  ${i + 1}. BSN: ${m.bsn.trim()} — ${m.firstName.trim()} ${m.lastName.trim()}`.trim(),
    );

  const lines: (string | null)[] = [
    `Inschrijfformulier website`,
    ``,
    `— Persoonsgegevens —`,
    `Voornaam: ${data.firstName}`,
    `Achternaam: ${data.lastName}`,
    `Initialen: ${data.initials}`,
    `Geslacht: ${genderLabel}`,
    `Straat en huisnummer: ${data.streetHouseNumber}`,
    data.postalCode?.trim() ? `Postcode: ${data.postalCode.trim()}` : null,
    data.city?.trim() ? `Woonplaats: ${data.city.trim()}` : null,
    data.phoneHome?.trim() ? `Telefoon (vast): ${data.phoneHome.trim()}` : null,
    data.phoneMobile?.trim() ? `Mobiel: ${data.phoneMobile.trim()}` : null,
    data.dateOfBirth?.trim() ? `Geboortedatum: ${data.dateOfBirth.trim()}` : null,
    ``,
    `— Verzekering / contact —`,
    `E-mail: ${data.email}`,
    data.bsn?.trim() ? `BSN: ${data.bsn.trim()}` : null,
    data.policyNumber?.trim() ? `Polisnummer: ${data.policyNumber.trim()}` : null,
    ``,
    `— Vorige tandarts —`,
    data.previousDentistDetails?.trim()
      ? `Naam en adres vorige tandarts:\n${data.previousDentistDetails.trim()}`
      : null,
    data.previousDentistLastVisit?.trim()
      ? `Laatste bezoek bij vorige tandarts: ${data.previousDentistLastVisit.trim()}`
      : null,
    `Bezoek elke zes maanden: ${halfYear}`,
    data.halfYearCheckupsComment?.trim()
      ? `Toelichting (niet elk half jaar): ${data.halfYearCheckupsComment.trim()}`
      : null,
    ``,
    `— Inschrijving —`,
    data.reasonRegistration?.trim()
      ? `Reden inschrijving:\n${data.reasonRegistration.trim()}`
      : null,
    data.currentDentalProblems?.trim()
      ? `Huidige problemen met het gebit:\n${data.currentDentalProblems.trim()}`
      : null,
    data.referralSource?.trim()
      ? `Hoe bij ons terechtgekomen:\n${data.referralSource.trim()}`
      : null,
    familyLines.length ? [`Gezinsleden:`, ...familyLines].join("\n") : null,
  ];

  return lines.filter(Boolean).join("\n");
}
