"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { submitContactForm } from "@/actions/email-forms";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(1, "Vul uw naam in").max(120),
  email: z.string().email("Ongeldig e-mailadres"),
  phone: z.string().max(40).optional(),
  subject: z.string().min(1, "Vul een onderwerp in").max(200),
  message: z.string().min(10, "Schrijf minimaal enkele zinnen").max(5000),
  company: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      company: "",
    },
  });

  function onSubmit(values: ContactFormValues) {
    setStatus("idle");
    setError(null);
    startTransition(async () => {
      const res = await submitContactForm(values);
      if (res.ok) {
        setStatus("ok");
        form.reset({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          company: "",
        });
      } else {
        setStatus("err");
        setError(res.error);
      }
    });
  }

  if (status === "ok") {
    return (
      <div
        className="rounded-2xl border border-primary/25 bg-primary/[0.06] px-5 py-6 text-sm leading-relaxed text-foreground shadow-sm sm:px-6 sm:text-base"
        role="status"
      >
        <p className="font-heading text-lg font-semibold text-foreground">Bedankt</p>
        <p className="mt-2 text-muted-foreground">
          Uw bericht is verzonden. We nemen zo snel mogelijk contact met u op.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className={cn(
        "relative isolate flex flex-col gap-5 overflow-hidden rounded-2xl border border-border/70 bg-card/95 p-6 shadow-[0_22px_50px_-26px_rgba(15,23,42,0.18)] ring-1 ring-black/[0.04] backdrop-blur-sm sm:gap-6 sm:p-8",
        "dark:bg-card/90 dark:ring-white/5",
      )}
      noValidate
    >
      <div className="pointer-events-none absolute -right-16 -top-20 size-48 rounded-full bg-primary/[0.07] blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -bottom-24 -left-12 size-40 rounded-full bg-primary/[0.04] blur-2xl" aria-hidden />

      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden>
        <Label htmlFor="contact-company">Bedrijf</Label>
        <Input
          id="contact-company"
          tabIndex={-1}
          autoComplete="off"
          {...form.register("company")}
        />
      </div>

      <div className="relative z-[1] flex flex-col gap-5 sm:gap-6">
      <div className="relative grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-name">Naam *</Label>
          <Input id="contact-name" autoComplete="name" {...form.register("name")} />
          {form.formState.errors.name ? (
            <p className="text-xs text-destructive">{form.formState.errors.name.message}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-email">E-mail *</Label>
          <Input
            id="contact-email"
            type="email"
            autoComplete="email"
            {...form.register("email")}
          />
          {form.formState.errors.email ? (
            <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>
          ) : null}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-phone">Telefoon</Label>
        <Input id="contact-phone" type="tel" autoComplete="tel" {...form.register("phone")} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-subject">Onderwerp *</Label>
        <Input id="contact-subject" {...form.register("subject")} />
        {form.formState.errors.subject ? (
          <p className="text-xs text-destructive">{form.formState.errors.subject.message}</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-message">Bericht *</Label>
        <Textarea id="contact-message" rows={6} {...form.register("message")} />
        {form.formState.errors.message ? (
          <p className="text-xs text-destructive">{form.formState.errors.message.message}</p>
        ) : null}
      </div>

      {error ? <p className="text-sm text-destructive">{error}</p> : null}

      <Button type="submit" disabled={pending} size="lg" className="mt-1 w-full rounded-xl sm:max-w-[12rem]">
        {pending ? "Verzenden…" : "Verstuur"}
      </Button>
      </div>
    </form>
  );
}
