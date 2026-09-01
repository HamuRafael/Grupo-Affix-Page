type SectionHeadingProps = {
  title: string;
  description?: string;
  id?: string;
  inverse?: boolean;
};

export function SectionHeading({
  title,
  description,
  id,
  inverse = false,
}: SectionHeadingProps) {
  return (
    <div className={`section-heading${inverse ? " section-heading-inverse" : ""}`}>
      <h2 id={id}>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
