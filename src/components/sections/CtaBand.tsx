import { CmsLink } from "@/components/sections/CmsLink";
import { Reveal } from "@/components/sections/Reveal";
import type { PageSection } from "@/lib/sanity/types";

type CtaBandProps = Extract<PageSection, { _type: "ctaBandSection" }>;

export function CtaBand({ heading, body, button }: CtaBandProps) {
  if (!heading && !body && !button?.href) return null;

  return (
    <section className="bg-section py-section">
      <div className="mx-auto w-full max-w-6xl px-gutter">
        <Reveal>
          <div className="grid gap-6 rounded-lg bg-primary px-6 py-10 text-primary-foreground sm:px-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10 lg:py-12">
            <div className="space-y-3">
              {heading ? (
                <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
                  {heading}
                </h2>
              ) : null}
              {body ? (
                <p className="max-w-prose text-base leading-relaxed text-primary-foreground/85">
                  {body}
                </p>
              ) : null}
            </div>
            {button?.href ? (
              <CmsLink
                link={button}
                variant="secondary"
                className="max-lg:w-full bg-section text-foreground hover:bg-section/90 lg:justify-self-end"
              />
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
