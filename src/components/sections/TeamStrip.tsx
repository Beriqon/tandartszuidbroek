import Image from "next/image";

import { Reveal } from "@/components/sections/Reveal";
import { imageSrc } from "@/lib/sanity/image";
import type { PageSection, TeamMember } from "@/lib/sanity/types";

type TeamStripProps = Extract<PageSection, { _type: "teamSection" }>;

const PORTRAIT_SIZE = 400;

export function TeamStrip({ title, intro, members }: TeamStripProps) {
  const items = (members ?? []).filter((m): m is TeamMember & { name: string } =>
    Boolean(m.name),
  );

  if (!items.length && !title) return null;

  return (
    <section className="bg-section py-section">
      <div className="mx-auto w-full max-w-6xl px-gutter">
        <Reveal className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-12">
          <div className="max-w-2xl">
            {title ? (
              <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {title}
              </h2>
            ) : null}
            {intro ? (
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {intro}
              </p>
            ) : null}
          </div>
        </Reveal>

        {items.length ? (
          <ul className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((m) => {
              const photo = imageSrc(m.photo, {
                width: PORTRAIT_SIZE,
                height: PORTRAIT_SIZE,
                fit: "crop",
              });
              return (
                <li key={m._id} className="flex flex-col gap-3">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted ring-1 ring-border/60">
                    {photo ? (
                      <Image
                        src={photo}
                        alt={m.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                      />
                    ) : (
                      <div
                        aria-hidden
                        className="flex h-full w-full items-center justify-center bg-gradient-to-br from-secondary to-accent text-3xl font-semibold text-primary/70"
                      >
                        {m.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="font-heading text-base font-semibold text-foreground">
                      {m.name}
                    </p>
                    {m.role ? (
                      <p className="text-sm text-muted-foreground">{m.role}</p>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
