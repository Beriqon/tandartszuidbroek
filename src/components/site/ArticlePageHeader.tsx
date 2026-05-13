type ArticlePageHeaderProps = {
  title: string;
  description?: string | null;
};

export function ArticlePageHeader({ title, description }: ArticlePageHeaderProps) {
  return (
    <header className="border-b border-border/60 bg-section-muted py-10 sm:py-12">
      <div className="mx-auto w-full max-w-6xl px-gutter">
        <h1 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </header>
  );
}
