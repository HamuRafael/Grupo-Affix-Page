import Link from "next/link";
import { solutions } from "@/data/site";
import { Icon } from "@/components/Icon";
import { SectionHeading } from "@/components/SectionHeading";

export function Solutions() {
  return (
    <section className="section solutions" id="solucoes" aria-labelledby="solutions-title">
      <div className="container">
        <div className="heading-row">
          <SectionHeading
            id="solutions-title"
            title="Crédito que acompanha o ritmo do seu negócio."
            description="Conheça nossas soluções financeiras para antecipação de recebíveis, capital de giro e crédito empresarial."
          />
          <Link className="text-link" href="#contato">Encontre a solução ideal <Icon name="arrow" size={20} /></Link>
        </div>
        <div className="solutions-grid">
          {solutions.map((solution) => (
            <Link className="solution-card" href={solution.href} key={solution.title}>
              <span className="solution-icon"><Icon name={solution.icon} size={24} /></span>
              <h3>{solution.title}</h3>
              <span className="solution-card-link">
                {"ctaLabel" in solution ? solution.ctaLabel : "Conheça a solução"} <Icon name="arrow" size={16} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
