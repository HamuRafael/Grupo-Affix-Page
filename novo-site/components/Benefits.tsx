import { cultureValues } from "@/data/site";
import { Icon } from "@/components/Icon";
import { SectionHeading } from "@/components/SectionHeading";

export function Benefits() {
  return (
    <section className="section benefits" id="cultura" aria-labelledby="benefits-title">
      <div className="container">
        <SectionHeading
          id="benefits-title"
          title="Nossa cultura. É o que nos move todos os dias."
          description="Guiados pelos nossos valores, tomamos decisões, construímos relações e geramos resultados que transformam."
        />
        <div className="benefits-grid">
          {cultureValues.map((value) => (
            <article className="benefit-card" key={value.title}>
              <span className="benefit-icon"><Icon name={value.icon} size={27} /></span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
