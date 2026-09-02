import Image from "next/image";
import { differentials, missionVisionValues } from "@/data/site";
import { ContactModalTrigger } from "@/components/ContactModal";
import { Icon } from "@/components/Icon";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section className="section about" id="quem-somos" aria-labelledby="about-title">
        <div className="container about-grid">
          <div className="about-image-wrap">
            <Image
              src="/images/recepcao-affix.webp"
              alt="Recepção do Grupo Affix"
              width={1400}
              height={492}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <span className="about-badge"><strong>+13 anos</strong> de experiência</span>
          </div>
          <div className="about-copy">
            <SectionHeading id="about-title" title="Antecipar com o Grupo Affix é estratégia de crescimento." />
            <p>
              Desde 2013 no setor de fomento empresarial como FIDC e Securitizadora de recebíveis. O Grupo Affix oferece diversas soluções financeiras para empresas, além de investimentos seguros com boa rentabilidade.
            </p>
            <p>
              Oferecemos soluções eficientes para equilibrar seu fluxo de caixa e impulsionar o crescimento da sua empresa. Conte com nossos investimentos seguros e lucrativos, acima da taxa Selic.
            </p>
            <ContactModalTrigger className="text-link">Conheça o Grupo Affix <Icon name="arrow" size={20} /></ContactModalTrigger>
          </div>
        </div>

        <div className="container mvv-block">
          <div className="mvv-grid">
            {missionVisionValues.map((item, index) => {
              const front = differentials[index];
              return (
                <div
                  className="flip-card"
                  tabIndex={0}
                  role="group"
                  aria-label={`${front.title} e ${item.title}`}
                  key={item.title}
                >
                  <div className="flip-inner">
                    <article className="flip-face flip-front">
                      <span className="benefit-icon"><Icon name={item.icon} size={26} /></span>
                      <h3>{front.title}</h3>
                      <p>{front.description}</p>
                    </article>
                    <article className="flip-face flip-back">
                      <span className="benefit-icon"><Icon name={item.icon} size={26} /></span>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </article>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
    </section>
  );
}
