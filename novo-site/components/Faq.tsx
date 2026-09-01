import { faqs } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";

export function Faq() {
  return (
    <section className="section faq" aria-labelledby="faq-title">
      <div className="container faq-grid">
        <SectionHeading id="faq-title" title="Como podemos ajudar?" description="Tire suas dúvidas sobre nossas soluções financeiras e descubra como o Grupo Affix pode ajudar sua empresa a antecipar recebíveis e gerenciar ativos de forma eficiente." />
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0}>
              <summary>{faq.question}<span aria-hidden="true">+</span></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
