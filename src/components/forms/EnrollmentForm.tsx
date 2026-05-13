"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, Trash2 } from "lucide-react";
import { useState, useTransition } from "react";
import { useFieldArray, useForm } from "react-hook-form";

import { submitEnrollmentForm } from "@/actions/email-forms";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  defaultEnrollmentFormValues,
  enrollmentFormSchema,
  type EnrollmentFormValues,
} from "@/lib/enrollment-schema";
import { cn } from "@/lib/utils";

const selectClass = cn(
  "flex h-10 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-2 text-base outline-none transition-colors",
  "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm dark:bg-input/30",
);

function FieldError({ message }: { message?: string }) {
  return message ? <p className="text-xs text-destructive">{message}</p> : null;
}

export function EnrollmentForm() {
  const [status, setStatus] = useState<"idle" | "ok">("idle");
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const form = useForm<EnrollmentFormValues>({
    resolver: zodResolver(enrollmentFormSchema),
    defaultValues: defaultEnrollmentFormValues as EnrollmentFormValues,
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "familyMembers",
  });

  function onSubmit(values: EnrollmentFormValues) {
    setStatus("idle");
    setError(null);
    startTransition(async () => {
      const res = await submitEnrollmentForm(values);
      if (res.ok) {
        setStatus("ok");
        form.reset(defaultEnrollmentFormValues as EnrollmentFormValues);
      } else {
        setError(res.error);
      }
    });
  }

  if (status === "ok") {
    return (
      <div
        className="w-full rounded-2xl border border-primary/25 bg-primary/[0.06] px-5 py-6 text-sm leading-relaxed text-foreground shadow-sm sm:px-6 sm:text-base"
        role="status"
      >
        <p className="font-heading text-lg font-semibold text-foreground">Bedankt voor uw aanvraag</p>
        <p className="mt-2 text-muted-foreground">
          We hebben uw gegevens ontvangen en nemen zo spoedig mogelijk contact met u op om de inschrijving
          af te ronden.
        </p>
      </div>
    );
  }

  const err = form.formState.errors;

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="relative flex w-full max-w-none flex-col gap-6 sm:gap-8"
      noValidate
    >
      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden>
        <Label htmlFor="enroll-company">Bedrijf</Label>
        <Input id="enroll-company" tabIndex={-1} autoComplete="off" {...form.register("company")} />
      </div>

      <Card className="border-border/60 shadow-sm">
        <CardHeader className="border-b border-border/50 pb-4">
          <CardTitle className="text-lg sm:text-xl">Persoonsgegevens</CardTitle>
          <CardDescription>Velden met * zijn verplicht.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 pt-2 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2 sm:col-span-1">
            <Label htmlFor="enroll-firstName">Voornaam *</Label>
            <Input id="enroll-firstName" autoComplete="given-name" {...form.register("firstName")} />
            <FieldError message={err.firstName?.message} />
          </div>
          <div className="space-y-2 sm:col-span-1">
            <Label htmlFor="enroll-lastName">Achternaam *</Label>
            <Input id="enroll-lastName" autoComplete="family-name" {...form.register("lastName")} />
            <FieldError message={err.lastName?.message} />
          </div>
          <div className="space-y-2 sm:col-span-1">
            <Label htmlFor="enroll-initials">Initialen *</Label>
            <Input id="enroll-initials" autoComplete="additional-name" {...form.register("initials")} />
            <FieldError message={err.initials?.message} />
          </div>
          <div className="space-y-2 sm:col-span-1">
            <Label htmlFor="enroll-gender">Geslacht</Label>
            <select id="enroll-gender" className={selectClass} {...form.register("gender")}>
              <option value="">— niet ingevuld —</option>
              <option value="man">Man</option>
              <option value="vrouw">Vrouw</option>
            </select>
          </div>
          <div className="space-y-2 sm:col-span-2 lg:col-span-3">
            <Label htmlFor="enroll-street">Straat en huisnummer *</Label>
            <Input id="enroll-street" autoComplete="street-address" {...form.register("streetHouseNumber")} />
            <FieldError message={err.streetHouseNumber?.message} />
          </div>
          <div className="space-y-2 sm:col-span-1">
            <Label htmlFor="enroll-postal">Postcode</Label>
            <Input id="enroll-postal" autoComplete="postal-code" {...form.register("postalCode")} />
            <FieldError message={err.postalCode?.message} />
          </div>
          <div className="space-y-2 sm:col-span-1">
            <Label htmlFor="enroll-city">Woonplaats</Label>
            <Input id="enroll-city" autoComplete="address-level2" {...form.register("city")} />
            <FieldError message={err.city?.message} />
          </div>
          <div className="space-y-2 sm:col-span-1">
            <Label htmlFor="enroll-phoneHome">Telefoon (vast)</Label>
            <Input id="enroll-phoneHome" type="tel" autoComplete="tel" {...form.register("phoneHome")} />
            <FieldError message={err.phoneHome?.message} />
          </div>
          <div className="space-y-2 sm:col-span-1">
            <Label htmlFor="enroll-phoneMobile">Mobiel</Label>
            <Input id="enroll-phoneMobile" type="tel" autoComplete="tel-national" {...form.register("phoneMobile")} />
            <FieldError message={err.phoneMobile?.message} />
          </div>
          <div className="space-y-2 sm:col-span-2 sm:max-w-xs lg:col-span-1 lg:max-w-none">
            <Label htmlFor="enroll-dob">Geboortedatum</Label>
            <Input id="enroll-dob" type="date" autoComplete="bday" {...form.register("dateOfBirth")} />
            <FieldError message={err.dateOfBirth?.message} />
          </div>
        </CardContent>
      </Card>

      <Card className="border-border/60 shadow-sm">
        <CardHeader className="border-b border-border/50 pb-4">
          <CardTitle className="text-lg sm:text-xl">Verzekering en bereikbaarheid</CardTitle>
          <CardDescription>
            BSN en polis helpen ons uw verzekering te controleren. Uw gegevens worden zorgvuldig behandeld
            conform de privacywetgeving (AVG).
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 pt-2 sm:grid-cols-2">
          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="enroll-email">E-mailadres *</Label>
            <Input id="enroll-email" type="email" autoComplete="email" {...form.register("email")} />
            <FieldError message={err.email?.message} />
          </div>
          <div className="space-y-2 sm:col-span-1">
            <Label htmlFor="enroll-bsn">BSN</Label>
            <Input
              id="enroll-bsn"
              inputMode="numeric"
              autoComplete="off"
              placeholder="8 of 9 cijfers"
              {...form.register("bsn")}
            />
            <FieldError message={err.bsn?.message} />
          </div>
          <div className="space-y-2 sm:col-span-1">
            <Label htmlFor="enroll-policy">Polisnummer</Label>
            <Input id="enroll-policy" autoComplete="off" {...form.register("policyNumber")} />
            <FieldError message={err.policyNumber?.message} />
          </div>
        </CardContent>
      </Card>

      <Card className="border-border/60 shadow-sm">
        <CardHeader className="border-b border-border/50 pb-4">
          <CardTitle className="text-lg sm:text-xl">Vorige tandarts</CardTitle>
          <CardDescription>Als u eerder ergens anders onder behandeling was.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 pt-2">
          <div className="space-y-2">
            <Label htmlFor="enroll-prev-details">Naam en adres van uw vorige tandarts</Label>
            <Textarea
              id="enroll-prev-details"
              rows={3}
              placeholder="Praktijknaam, plaats, eventueel telefoonnummer…"
              {...form.register("previousDentistDetails")}
            />
            <FieldError message={err.previousDentistDetails?.message} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="enroll-prev-last">Wanneer heeft u deze tandarts voor het laatst bezocht?</Label>
            <Input
              id="enroll-prev-last"
              placeholder="Bijvoorbeeld: maart 2024"
              {...form.register("previousDentistLastVisit")}
            />
            <FieldError message={err.previousDentistLastVisit?.message} />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="enroll-half">Bezocht u deze tandarts ongeveer elke zes maanden?</Label>
              <select id="enroll-half" className={selectClass} {...form.register("halfYearCheckups")}>
                <option value="">— kies —</option>
                <option value="ja">Ja</option>
                <option value="nee">Nee</option>
              </select>
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="enroll-half-comment">Zo nee — waarom niet?</Label>
              <Textarea
                id="enroll-half-comment"
                rows={2}
                placeholder="Optioneel toelichten…"
                {...form.register("halfYearCheckupsComment")}
              />
              <FieldError message={err.halfYearCheckupsComment?.message} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-border/60 shadow-sm">
        <CardHeader className="border-b border-border/50 pb-4">
          <CardTitle className="text-lg sm:text-xl">Over uw inschrijving</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 pt-2">
          <div className="space-y-2">
            <Label htmlFor="enroll-reason">Waarom wilt u zich bij ons inschrijven?</Label>
            <Textarea id="enroll-reason" rows={3} {...form.register("reasonRegistration")} />
            <FieldError message={err.reasonRegistration?.message} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="enroll-problems">Heeft u op dit moment klachten aan uw gebit of mond?</Label>
            <Textarea
              id="enroll-problems"
              rows={3}
              placeholder="Bijvoorbeeld pijn, losse elementen, bloedend tandvlees…"
              {...form.register("currentDentalProblems")}
            />
            <FieldError message={err.currentDentalProblems?.message} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="enroll-referral">Hoe bent u bij ons terechtgekomen?</Label>
            <Textarea
              id="enroll-referral"
              rows={2}
              placeholder="Bijvoorbeeld via Google, aanbeveling, huisarts…"
              {...form.register("referralSource")}
            />
            <FieldError message={err.referralSource?.message} />
          </div>
        </CardContent>
      </Card>

      <Card className="border-border/60 shadow-sm">
        <CardHeader className="border-b border-border/50 pb-4">
          <CardTitle className="text-lg sm:text-xl">Gezinsleden mee-inschrijven</CardTitle>
          <CardDescription>
            Wilt u partner of kinderen tegelijk inschrijven? Vul per persoon BSN, voornaam en achternaam in.
            Laat rijen leeg als dit niet van toepassing is.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 pt-2">
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="relative rounded-xl border border-border/60 bg-muted/20 p-4 sm:p-5"
            >
              <div className="mb-3 flex items-center justify-between gap-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Gezinslid {index + 1}
                </span>
                {fields.length > 1 ? (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="h-8 gap-1 text-destructive hover:bg-destructive/10 hover:text-destructive"
                    onClick={() => remove(index)}
                  >
                    <Trash2 className="size-3.5" aria-hidden />
                    Verwijderen
                  </Button>
                ) : null}
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="space-y-2 sm:col-span-1">
                  <Label htmlFor={`enroll-fam-bsn-${index}`}>BSN</Label>
                  <Input
                    id={`enroll-fam-bsn-${index}`}
                    inputMode="numeric"
                    {...form.register(`familyMembers.${index}.bsn`)}
                  />
                  <FieldError message={err.familyMembers?.[index]?.bsn?.message} />
                </div>
                <div className="space-y-2 sm:col-span-1">
                  <Label htmlFor={`enroll-fam-fn-${index}`}>Voornaam</Label>
                  <Input id={`enroll-fam-fn-${index}`} {...form.register(`familyMembers.${index}.firstName`)} />
                  <FieldError message={err.familyMembers?.[index]?.firstName?.message} />
                </div>
                <div className="space-y-2 sm:col-span-1">
                  <Label htmlFor={`enroll-fam-ln-${index}`}>Achternaam</Label>
                  <Input id={`enroll-fam-ln-${index}`} {...form.register(`familyMembers.${index}.lastName`)} />
                  <FieldError message={err.familyMembers?.[index]?.lastName?.message} />
                </div>
              </div>
            </div>
          ))}

          {fields.length < 8 ? (
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="self-start gap-2 border-dashed"
              onClick={() => append({ bsn: "", firstName: "", lastName: "" })}
            >
              <Plus className="size-4" aria-hidden />
              Gezinslid toevoegen
            </Button>
          ) : null}
        </CardContent>
      </Card>

      {error ? (
        <p className="rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          {error}
        </p>
      ) : null}

      <div className="flex flex-col gap-3 border-t border-border/50 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-muted-foreground sm:max-w-md">
          Door te verzenden bevestigt u dat de gegevens naar waarheid zijn ingevuld. U ontvangt geen
          automatische bevestiging per e-mail; wij nemen contact met u op.
        </p>
        <Button type="submit" disabled={pending} size="lg" className="shrink-0 rounded-xl px-8">
          {pending ? "Verzenden…" : "Inschrijving versturen"}
        </Button>
      </div>
    </form>
  );
}
