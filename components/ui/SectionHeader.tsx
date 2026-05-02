interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  /** Default: Fraunces display. Use "poppins" for marketing headlines. */
  titleFont?: "display" | "poppins";
  /** Keep title on one line; scales with section width (container query), no scroll strip. */
  titleSingleLine?: boolean;
  /** Stronger eyebrow for short labels (e.g. “FAQ”). */
  eyebrowVariant?: "default" | "prominent";
  /** Heavier weight and higher contrast for supporting copy. */
  subtitleVariant?: "default" | "emphasis";
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
  titleFont = "display",
  titleSingleLine = false,
  eyebrowVariant = "default",
  subtitleVariant = "default",
}: SectionHeaderProps) {
  const titleStyle = titleSingleLine
    ? {
        letterSpacing: "-0.035em" as const,
        fontSize: "clamp(12px, calc(100cqi / 26), 2.75rem)",
      }
    : { letterSpacing: "-0.025em" as const };

  const titleWeight = titleSingleLine ? "font-bold" : "font-black";

  const titleClass = `${titleWeight} leading-tight tracking-tight ${
    titleSingleLine ? "whitespace-nowrap inline-block" : "text-3xl md:text-5xl"
  } ${
    titleFont === "poppins"
      ? "[font-family:var(--font-poppins),system-ui,sans-serif]"
      : "font-display"
  } ${light ? "text-paper" : "text-midnight"}`;

  const titleEl = (
    <h2 className={titleClass} style={titleStyle}>
      {title}
    </h2>
  );

  return (
    <div
      className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-12 ${
        titleSingleLine ? "[container-type:inline-size]" : ""
      }`}
    >
      {eyebrow && (
        <p
          className={`uppercase tracking-[0.22em] mb-4 ${
            eyebrowVariant === "prominent"
              ? "text-base md:text-lg font-black"
              : "text-sm font-extrabold"
          } ${light ? "text-copper-light" : "text-copper"}`}
        >
          {eyebrow}
        </p>
      )}
      {titleEl}
      {subtitle && (
        <p
          className={`mt-4 leading-relaxed ${
            subtitleVariant === "emphasis"
              ? light
                ? "text-xl font-semibold text-paper/82"
                : "text-[1.0625rem] sm:text-xl font-bold text-midnight/88"
              : light
                ? "text-lg text-paper/65"
                : "text-lg text-midnight/70"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
