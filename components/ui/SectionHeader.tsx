interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-12`}>
      {eyebrow && (
        <p
          className={`text-xs font-bold uppercase tracking-[0.22em] mb-4 ${
            light ? "text-copper-light" : "text-copper"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display font-black leading-tight tracking-tight text-3xl md:text-5xl ${
          light ? "text-paper" : "text-midnight"
        }`}
        style={{ letterSpacing: "-0.025em" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-paper/65" : "text-midnight/70"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
