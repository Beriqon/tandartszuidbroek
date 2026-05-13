import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { Reveal } from "@/components/sections/Reveal";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import type { PageSection, TreatmentSummary } from "@/lib/sanity/types";
import { treatmentLocalImageSrc } from "@/lib/treatment-local-images";

type TreatmentGridProps = Extract<PageSection, { _type: "treatmentGridSection" }>;

export function TreatmentGrid({ title, intro, treatments }: TreatmentGridProps) {
  const items = (treatments ?? []).filter((t): t is TreatmentSummary & { slug: string } =>
    Boolean(t.slug),
  );

  if (!items.length && !title) return null;

  return (
    <section className="bg-section-muted py-section">
      <div className="mx-auto w-full max-w-6xl px-gutter">
        <Reveal className="max-w-2xl">
          {title ? (
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {title}
            </h2>
          ) : null}
          {intro ? (
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{intro}</p>
          ) : null}
        </Reveal>

        {items.length ? (
          <ul className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-border/70 bg-border/70 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((t) => {
              const imageSrc = treatmentLocalImageSrc(t.slug);
              return (
                <li key={t._id} className="bg-card">
                  <Link
                    href={`/behandelingen/${t.slug}`}
                    className="group/treatment flex h-full flex-col transition-colors hover:bg-accent/40 focus-visible:bg-accent/50 focus-visible:outline-none"
                  >
                    <div className="relative aspect-[4/3] w-full shrink-0 bg-muted">
                      {imageSrc ? (
                        <Image
                          src={imageSrc}
                          alt={t.title ? `Beeld bij: ${t.title}` : "Behandeling"}
                          fill
                          className="object-cover transition-opacity duration-300 group-hover/treatment:opacity-90"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      ) : (
                        <PhotoPlaceholder
                          label="Foto"
                          className="absolute inset-0 size-full rounded-none ring-0 ring-inset"
                        />
                      )}
                    </div>
                    <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
                      <h3 className="font-heading text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                        {t.title}
                      </h3>
                      {t.excerpt ? (
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {t.excerpt}
                        </p>
                      ) : null}
                      <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-primary">
                        Meer lezen
                        <ArrowRightIcon
                          className="size-4 transition-transform group-hover/treatment:translate-x-0.5"
                          aria-hidden
                        />
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
