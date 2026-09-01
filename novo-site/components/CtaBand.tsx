import type { ReactNode } from "react";
import { ContactModalTrigger } from "@/components/ContactModal";
import { Icon } from "@/components/Icon";

type CtaBandProps = {
  title: string;
  description?: string;
  // Sem action, a faixa usa o botão padrão que abre o modal de contato.
  action?: ReactNode;
};

export function CtaBand({ title, description, action }: CtaBandProps) {
  return (
    <section className="cta-band" aria-label="Fale com o Grupo Affix">
      <div className="container cta-band-inner">
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
        {action ?? (
          <ContactModalTrigger className="button button-gold">
            Fale com um especialista <Icon name="arrow" size={20} />
          </ContactModalTrigger>
        )}
      </div>
    </section>
  );
}
