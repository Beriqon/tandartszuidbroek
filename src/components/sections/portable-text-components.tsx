import Link from "next/link";
import type { PortableTextComponents } from "@portabletext/react";

export const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-10 font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 font-heading text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 max-w-[min(100%,40rem)] border-l-2 border-primary/40 pl-4 text-base italic leading-relaxed text-foreground/85 sm:text-lg">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="mt-4 text-base leading-relaxed text-foreground/85">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-4 list-disc space-y-1 pl-5 text-foreground/85 marker:text-primary/60">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mt-4 list-decimal space-y-1 pl-5 text-foreground/85 marker:text-primary/70">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => {
      const href: string | undefined = value?.href;
      if (!href) return <>{children}</>;
      const external = /^(https?:|mailto:|tel:)/i.test(href);
      const className =
        "text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary";
      if (external) {
        return (
          <a
            href={href}
            className={className}
            rel="noopener"
            target={href.startsWith("http") ? "_blank" : undefined}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={className}>
          {children}
        </Link>
      );
    },
  },
};
