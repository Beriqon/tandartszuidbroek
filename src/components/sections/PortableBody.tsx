import { PortableText } from "@portabletext/react";

import { portableTextComponents } from "@/components/sections/portable-text-components";
import { Reveal } from "@/components/sections/Reveal";
import type { PortableTextBlock } from "@portabletext/types";

type PortableBodyProps = {
  value?: PortableTextBlock[] | null;
};

export function PortableBody({ value }: PortableBodyProps) {
  if (!value?.length) return null;

  return (
    <Reveal>
      <div className="text-foreground/85">
        <PortableText value={value} components={portableTextComponents} />
      </div>
    </Reveal>
  );
}
