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
          {/* img puro com srcset: no modo export o next/image não gera versões
              responsivas, e o PageSpeed cobrava a logo de 1240px num slot de ~550px. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo-affix-escuro.webp"
            srcSet="/images/logo-affix-escuro-640.webp 640w, /images/logo-affix-escuro.webp 1240w"
            sizes="(max-width: 900px) 76vw, 43vw"
            alt=""
            width={1240}
            height={509}
            decoding="async"
          />
        </div>
      </div>
      <a className="hero-scroll" href="#solucoes" aria-label="Rolar para a próxima seção">
        <span className="hero-scroll-mouse" aria-hidden="true"><span className="hero-scroll-dot" /></span>
        Role para explorar
      </a>
    </section>
  );
}
