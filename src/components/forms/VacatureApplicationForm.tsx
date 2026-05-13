"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FolderUp } from "lucide-react";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { submitVacatureApplication } from "@/actions/email-forms";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { vacatureSelectOptions } from "@/content/vacatures";
import { cn } from "@/lib/utils";

const schema = z.object({
  firstName: z.string().min(1, "Vul uw voornaam in").max(80),
  lastName: z.string().min(1, "Vul uw achternaam in").max(80),
  phone: z.string().min(1, "Vul uw telefoonnummer in").max(40),
  email: z.string().email("Ongeldig e-mailadres"),
  linkedin: z.string().max(500).default(""),
  vacancy: z.string().min(1, "Kies een vacature"),
  motivation: z
    .string()
    .min(30, "Schrijf minimaal een korte motivatie (enkele zinnen)")
    .max(8000),
  company: z.string().optional(),
});

export type VacatureApplicationFormValues = z.output<typeof schema>;

const selectClass = cn(
  "flex h-10 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-2 text-base outline-none transition-colors",
  "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm dark:bg-input/30",
);

export function VacatureApplicationForm() {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [cvInputKey, setCvInputKey] = useState(0);

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      linkedin: "",
      vacancy: "",
      motivation: "",
      company: "",
    },
  });

  function onSubmit(values: VacatureApplicationFormValues) {
    setStatus("idle");
    setError(null);
    startTransition(async () => {
      const fd = new FormData();
      fd.set("firstName", values.firstName);
      fd.set("lastName", values.lastName);
      fd.set("phone", values.phone);
      fd.set("email", values.email);
      fd.set("linkedin", values.linkedin?.trim() ?? "");
      fd.set("vacancy", values.vacancy);
      fd.set("motivation", values.motivation);
      fd.set("company", values.company ?? "");
      const file = cvFile;
      if (file && file.size > 0) {
        fd.set("cv", file);
      }
      const res = await submitVacatureApplication(fd);
      if (res.ok) {
        setStatus("ok");
        form.reset({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          linkedin: "",
          vacancy: "",
          motivation: "",
          company: "",
        });
        setCvFile(null);
        setCvInputKey((k) => k + 1);
      } else {
        setStatus("err");
        setError(res.error);
      }
    });
  }

  if (status === "ok") {
    return (
      <p className="rounded-xl border border-primary/25 bg-primary/[0.06] px-4 py-4 text-sm leading-relaxed text-foreground sm:text-base">
        Bedankt — uw sollicitatie is verzonden. We nemen zo snel mogelijk contact met u op.
      </p>
    );
  }

  const err = form.formState.errors;

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="relative mx-auto flex w-full max-w-3xl flex-col gap-5 rounded-2xl border border-border/70 bg-card/90 p-6 shadow-[0_20px_50px_-28px_rgba(15,23,42,0.18)] ring-1 ring-black/[0.04] backdrop-blur-sm sm:p-8"
      noValidate
    >
      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden>
        <Label htmlFor="vacature-company">Bedrijf</Label>
        <Input id="vacature-company" tabIndex={-1} autoComplete="off" {...form.register("company")} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="vacature-firstName">Voornaam *</Label>
          <Input id="vacature-firstName" autoComplete="given-name" {...form.register("firstName")} />
          {err.firstName ? <p className="text-xs text-destructive">{err.firstName.message}</p> : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="vacature-lastName">Achternaam *</Label>
          <Input id="vacature-lastName" autoComplete="family-name" {...form.register("lastName")} />
          {err.lastName ? <p className="text-xs text-destructive">{err.lastName.message}</p> : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="vacature-phone">Telefoonnummer *</Label>
          <Input id="vacature-phone" type="tel" autoComplete="tel" {...form.register("phone")} />
          {err.phone ? <p className="text-xs text-destructive">{err.phone.message}</p> : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="vacature-email">E-mail *</Label>
          <Input id="vacature-email" type="email" autoComplete="email" {...form.register("email")} />
          {err.email ? <p className="text-xs text-destructive">{err.email.message}</p> : null}
        </div>
        <div className="space-y-2 sm:col-span-1">
          <Label htmlFor="vacature-linkedin">LinkedIn (optioneel)</Label>
          <Input
            id="vacature-linkedin"
            type="url"
            inputMode="url"
            placeholder="https://www.linkedin.com/in/…"
            autoComplete="url"
            {...form.register("linkedin")}
          />
          {err.linkedin ? <p className="text-xs text-destructive">{err.linkedin.message}</p> : null}
        </div>
        <div className="space-y-2 sm:col-span-1">
          <Label htmlFor="vacature-vacancy">Vacature *</Label>
          <select id="vacature-vacancy" className={selectClass} {...form.register("vacancy")}>
            <option value="">Maak een keuze…</option>
            {vacatureSelectOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          {err.vacancy ? <p className="text-xs text-destructive">{err.vacancy.message}</p> : null}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="vacature-motivation">Motivatie *</Label>
        <Textarea
          id="vacature-motivation"
          rows={6}
          placeholder="Schrijf hier uw motivatie"
          {...form.register("motivation")}
        />
        {err.motivation ? <p className="text-xs text-destructive">{err.motivation.message}</p> : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="vacature-cv">CV (PDF of Word, max. 5 MB — optioneel)</Label>
        <div className="flex flex-wrap items-center gap-3">
          <input
            key={cvInputKey}
            id="vacature-cv"
            name="cv"
            type="file"
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            className="max-w-full text-sm text-muted-foreground file:mr-3 file:rounded-lg file:border-0 file:bg-primary/12 file:px-3 file:py-2 file:text-sm file:font-medium file:text-foreground hover:file:bg-primary/18"
            onChange={(e) => setCvFile(e.target.files?.[0] ?? null)}
          />
          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground sm:text-sm">
            <FolderUp className="size-4 shrink-0 text-primary" aria-hidden />
            Bijlage wordt per e-mail naar de praktijk gestuurd.
          </span>
        </div>
      </div>

      {error ? <p className="text-sm text-destructive">{error}</p> : null}

      <Button type="submit" disabled={pending} size="lg" className="w-full rounded-xl sm:max-w-xs">
        {pending ? "Verzenden…" : "Versturen"}
      </Button>
    </form>
  );
}
