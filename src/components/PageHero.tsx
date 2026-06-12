import { Reveal } from "./Reveal";

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <section className="pt-40 pb-16 md:pt-48 md:pb-24 border-b border-border">
      <div className="container-luxe">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-5 font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] max-w-5xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.15}>
            <p className="mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed">{description}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}