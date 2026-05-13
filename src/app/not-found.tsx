import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-gutter py-section text-center">
      <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
        404
      </p>
      <h1 className="mt-2 font-heading text-3xl font-semibold text-foreground sm:text-4xl">
        Pagina niet gevonden
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        Deze URL bestaat niet of de bijbehorende inhoud staat (nog) niet in het CMS.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Naar home</Link>
      </Button>
      <p className="mt-6 text-sm text-muted-foreground">
        <a className="text-primary underline-offset-4 hover:underline" href={`tel:${siteConfig.phoneTel}`}>
          {siteConfig.phoneDisplay}
        </a>
      </p>
    </main>
  );
}
