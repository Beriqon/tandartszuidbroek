import { PortableText } from "@portabletext/react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/sections/Reveal";
import type { FaqItem, PageSection } from "@/lib/sanity/types";

type FaqAccordionProps = Extract<PageSection, { _type: "faqSection" }>;

export function FaqAccordion({ title, items }: FaqAccordionProps) {
  const questions = (items ?? []).filter((q): q is FaqItem & { question: string } =>
    Boolean(q.question),
  );

  if (!questions.length) return null;

  return (
    <section className="bg-section py-section">
      <div className="mx-auto w-full max-w-3xl px-gutter">
        <Reveal>
          {title ? (
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {title}
            </h2>
          ) : null}
        </Reveal>

        <Accordion type="single" collapsible className="mt-8 border-t border-border/70">
          {questions.map((q) => (
            <AccordionItem key={q._id} value={q._id}>
              <AccordionTrigger className="py-4 text-base font-medium text-foreground">
                {q.question}
              </AccordionTrigger>
              <AccordionContent className="pr-8 text-base text-foreground/85">
                {q.answer?.length ? (
                  <PortableText value={q.answer} />
                ) : null}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
