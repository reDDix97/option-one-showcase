import { Reveal } from "./Reveal";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <Reveal>
          <p className="eyebrow flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-accent" />
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}