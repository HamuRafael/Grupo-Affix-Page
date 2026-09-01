import Image from "next/image";
import { Icon } from "@/components/Icon";
import { ContactModalTrigger } from "@/components/ContactModal";
import { SimulatorModalTrigger } from "@/components/SimulatorModal";

export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1 id="hero-title">
            Transforme seus recebíveis em capital de giro imediato<span className="hero-dot">.</span>
          </h1>
          <p>
            Apoie o crescimento da sua empresa com as soluções financeiras do Grupo Affix FIDC e Securitizadora. Antecipe seus recebíveis de forma ágil e 100% digital.
          </p>
          <div className="hero-actions">
            <SimulatorModalTrigger className="button button-gold button-large">
              Simule agora <Icon name="arrow" size={20} />
            </SimulatorModalTrigger>
            <ContactModalTrigger className="button button-ghost button-large">
              Fale com um especialista
            </ContactModalTrigger>
          </div>
        </div>
        <div className="hero-mark" aria-hidden="true">
          <Image src="/images/logo-affix-escuro.png" alt="" width={1560} height={630} priority />
        </div>
      </div>
      <a className="hero-scroll" href="#solucoes" aria-label="Rolar para a próxima seção">
        <span className="hero-scroll-mouse" aria-hidden="true"><span className="hero-scroll-dot" /></span>
        Role para explorar
      </a>
    </section>
  );
}
