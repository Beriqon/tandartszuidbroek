"use server";

import { Resend } from "resend";
import { z } from "zod";

import {
  enrollmentFormSchema,
  formatEnrollmentEmailBody,
} from "@/lib/enrollment-schema";
import { siteConfig } from "@/lib/site-config";

export type FormActionResult = { ok: true } | { ok: false; error: string };

const contactSchema = z.object({
  name: z.string().min(1, "Vul uw naam in").max(120),
  email: z.string().email("Ongeldig e-mailadres"),
  phone: z.string().max(40).optional(),
  subject: z.string().min(1, "Vul een onderwerp in").max(200),
  message: z.string().min(10, "Schrijf minimaal enkele zinnen").max(5000),
  company: z.string().optional(),
});

function mailTo() {
  return process.env.MAIL_TO?.trim() || siteConfig.email;
}

function mailFrom() {
  return process.env.RESEND_FROM?.trim();
}

type ResendAttachment = { filename: string; content: Buffer };

async function sendWithResend(
  subject: string,
  text: string,
  attachments?: ResendAttachment[],
): Promise<FormActionResult> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = mailFrom();
  if (!apiKey || !from) {
    return {
      ok: false,
      error:
        "E-mailverzending is nog niet geconfigureerd (RESEND_API_KEY en RESEND_FROM in .env.local).",
    };
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: mailTo(),
    subject,
    text,
    ...(attachments?.length ? { attachments } : {}),
  });

  if (error) {
    return { ok: false, error: "Verzenden mislukt. Probeer het later opnieuw of bel de praktijk." };
  }
  return { ok: true };
}

export async function submitContactForm(input: unknown): Promise<FormActionResult> {
  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) {
    const msg = parsed.error.issues[0]?.message ?? "Controleer het formulier.";
    return { ok: false, error: msg };
  }
  const { company, name, email, phone, subject, message } = parsed.data;
  if (company?.trim()) {
    return { ok: true };
  }

  const lines = [
    `Contactformulier website`,
    ``,
    `Naam: ${name}`,
    `E-mail: ${email}`,
    phone ? `Telefoon: ${phone}` : null,
    ``,
    `Onderwerp: ${subject}`,
    ``,
    message,
  ]
    .filter(Boolean)
    .join("\n");

  return sendWithResend(`[Website] ${subject}`, lines);
}

export async function submitEnrollmentForm(input: unknown): Promise<FormActionResult> {
  const parsed = enrollmentFormSchema.safeParse(input);
  if (!parsed.success) {
    const msg = parsed.error.issues[0]?.message ?? "Controleer het formulier.";
    return { ok: false, error: msg };
  }
  const data = parsed.data;
  if (data.company?.trim()) {
    return { ok: true };
  }

  const body = formatEnrollmentEmailBody(data);
  const subjectName = `${data.firstName} ${data.lastName}`.trim();

  return sendWithResend(`[Website] Inschrijving: ${subjectName}`, body);
}

const CV_MAX_BYTES = 5 * 1024 * 1024;
const CV_ALLOWED_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

const vacatureApplicationSchema = z.object({
  firstName: z.string().min(1, "Vul uw voornaam in").max(80),
  lastName: z.string().min(1, "Vul uw achternaam in").max(80),
  phone: z.string().min(1, "Vul uw telefoonnummer in").max(40),
  email: z.string().email("Ongeldig e-mailadres"),
  linkedin: z
    .string()
    .max(500)
    .optional()
    .transform((s) => (typeof s === "string" ? s.trim() : "")),
  vacancy: z.string().min(1, "Kies een vacature").max(120),
  motivation: z
    .string()
    .min(30, "Schrijf minimaal een korte motivatie (enkele zinnen)")
    .max(8000),
  company: z.string().optional(),
});

function vacatureLabelFromValue(value: string): string {
  const map: Record<string, string> = {
    mondhygienist: "Mondhygiënist",
    tandartsassistent: "Tandarts-assistent",
    "balie-assistent": "Balie-assistent",
    "preventie-assistent": "Preventie-assistent",
    tandarts: "Tandarts",
    open: "Open sollicitatie / andere functie",
  };
  return map[value] ?? value;
}

export async function submitVacatureApplication(formData: FormData): Promise<FormActionResult> {
  const company = String(formData.get("company") ?? "");
  if (company.trim()) {
    return { ok: true };
  }

  const linkedinRaw = formData.get("linkedin");
  const parsed = vacatureApplicationSchema.safeParse({
    firstName: String(formData.get("firstName") ?? ""),
    lastName: String(formData.get("lastName") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    email: String(formData.get("email") ?? ""),
    linkedin: linkedinRaw == null ? "" : String(linkedinRaw),
    vacancy: String(formData.get("vacancy") ?? ""),
    motivation: String(formData.get("motivation") ?? ""),
    company: String(formData.get("company") ?? ""),
  });

  if (!parsed.success) {
    const msg = parsed.error.issues[0]?.message ?? "Controleer het formulier.";
    return { ok: false, error: msg };
  }

  const data = parsed.data;
  if (data.linkedin && !/^https?:\/\//i.test(data.linkedin)) {
    return {
      ok: false,
      error: "LinkedIn-link begint met https:// (plak de volledige URL).",
    };
  }

  const file = formData.get("cv");
  let attachment: ResendAttachment | undefined;

  if (file instanceof File && file.size > 0) {
    if (file.size > CV_MAX_BYTES) {
      return { ok: false, error: "Het CV-bestand mag maximaal 5 MB zijn." };
    }
    const mime = (file.type || "").toLowerCase();
    const lower = file.name.toLowerCase();
    const extOk =
      lower.endsWith(".pdf") || lower.endsWith(".doc") || lower.endsWith(".docx");
    const mimeOk = CV_ALLOWED_TYPES.has(mime);
    if (!extOk && !mimeOk) {
      return {
        ok: false,
        error: "Alleen PDF of Word (.doc, .docx) als CV uploaden.",
      };
    }
    const buf = Buffer.from(await file.arrayBuffer());
    const safeName = file.name.replace(/[^\w.\- ()]+/g, "_").slice(0, 180) || "cv.pdf";
    attachment = { filename: safeName, content: buf };
  }

  const vacatureLabel = vacatureLabelFromValue(data.vacancy);
  const lines = [
    `Sollicitatie via website — ${siteConfig.name}`,
    ``,
    `Voornaam: ${data.firstName}`,
    `Achternaam: ${data.lastName}`,
    `Telefoon: ${data.phone}`,
    `E-mail: ${data.email}`,
    data.linkedin ? `LinkedIn: ${data.linkedin}` : `LinkedIn: (niet ingevuld)`,
    `Vacature: ${vacatureLabel}`,
    ``,
    `Motivatie:`,
    data.motivation,
    attachment ? `` : null,
    attachment ? `(CV bijgevoegd als bijlage: ${attachment.filename})` : `(Geen CV bijgevoegd)`,
  ]
    .filter((l) => l != null)
    .join("\n");

  const subjectName = `${data.firstName} ${data.lastName}`.trim();
  return sendWithResend(
    `[Website] Sollicitatie: ${vacatureLabel} — ${subjectName}`,
    lines,
    attachment ? [attachment] : undefined,
  );
}

