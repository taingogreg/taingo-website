interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  /** Default: Fraunces display. Use "poppins" for marketing headlines. */
  titleFont?: "display" | "poppins";
  /** Keep title on one line; scales down with clamp and allows horizontal scroll on very narrow viewports. */
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
    ? { letterSpacing: "-0.025em" as const, fontSize: "clamp(15px, 2.65vw, 2.75rem)" }
    : { letterSpacing: "-0.025em" as const };

  const titleClass = `font-black leading-tight tracking-tight ${
    titleSingleLine ? "whitespace-nowrap shrink-0 inline-block" : "text-3xl md:text-5xl"
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
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-12`}>
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
      {titleSingleLine ? (
        <div
          className={`w-full min-w-0 overflow-x-auto overflow-y-visible pb-1 [scrollbar-width:thin] ${
            centered ? "flex justify-center" : ""
          }`}
        >
          {titleEl}
        </div>
      ) : (
        titleEl
      )}
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            subtitleVariant === "emphasis"
              ? light
                ? "font-semibold text-paper/82"
                : "font-semibold text-midnight/85"
              : light
                ? "text-paper/65"
                : "text-midnight/70"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
