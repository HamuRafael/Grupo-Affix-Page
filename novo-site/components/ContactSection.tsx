import { ContactForm } from "@/components/ContactForm";
import { ContactModalTrigger } from "@/components/ContactModal";
import { Icon } from "@/components/Icon";
import { company } from "@/data/site";

function ContactDetails() {
  return (
    <ul className="contact-list">
      <li><span><Icon name="phone" size={22} /></span><div><small>Telefone</small><a href={company.phoneHref}>{company.phoneDisplay}</a></div></li>
      <li><span><Icon name="mail" size={22} /></span><div><small>E-mail</small><a href={`mailto:${company.email}`}>{company.email}</a></div></li>
      <li><span><Icon name="location" size={22} /></span><div><small>Nossa localização</small><p>{company.address}</p></div></li>
    </ul>
  );
}

export function ContactSection({ showForm = true }: { showForm?: boolean }) {
  if (!showForm) {
    return (
      <section className="contact-section contact-section-cta" id="contato" aria-labelledby="contact-title">
        <div className="container contact-layout-cta">
          <div className="contact-copy">
            <h2 id="contact-title">Vamos conversar?<br />Conte com o Grupo Affix.</h2>
            <p>Como nossa equipe pode ajudar a crescer sua empresa?</p>
          </div>
          <ContactModalTrigger className="button button-gold button-large contact-cta-button">
            Fale com um especialista <Icon name="arrow" size={20} />
          </ContactModalTrigger>
        </div>
        <div className="container">
          <ContactDetails />
        </div>
      </section>
    );
  }

  return (
    <section className="contact-section" id="contato" aria-labelledby="contact-title">
      <div className="container contact-layout">
        <div className="contact-copy">
          <h2 id="contact-title">Vamos conversar?<br />Conte com o Grupo Affix.</h2>
          <p>Como nossa equipe pode ajudar a crescer sua empresa?</p>
          <ContactDetails />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
