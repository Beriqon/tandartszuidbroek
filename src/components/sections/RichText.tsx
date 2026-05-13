import { PortableText } from "@portabletext/react";

import { portableTextComponents } from "@/components/sections/portable-text-components";
import { Reveal } from "@/components/sections/Reveal";
import type { PageSection } from "@/lib/sanity/types";

type RichTextProps = Extract<PageSection, { _type: "richTextSection" }>;

export function RichText({ title, content }: RichTextProps) {
  if (!content?.length) return null;

  return (
    <section className="bg-section py-section">
      <div className="mx-auto w-full max-w-3xl px-gutter">
        <Reveal>
          {title ? (
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {title}
            </h2>
          ) : null}
          <div className={title ? "mt-2" : undefined}>
            <PortableText value={content} components={portableTextComponents} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
