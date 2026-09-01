import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icon";
import { JobApplicationForm } from "@/components/JobApplicationForm";
import { jobs } from "@/data/jobs";
import { company, cultureValues } from "@/data/site";
import { defaultOgImage, ogDefaults, siteUrl } from "@/data/seo";

export const metadata: Metadata = {
  title: "Trabalhe Conosco",
  description:
    "Vagas abertas no Grupo Affix, empresa certificada Great Place to Work em Brasília DF. Construa sua carreira no mercado financeiro.",
  alternates: { canonical: "/trabalhe-conosco" },
  openGraph: {
    ...ogDefaults,
    type: "website",
    title: "Trabalhe Conosco | Grupo Affix",
    description:
      "Vagas abertas no Grupo Affix, empresa certificada Great Place to Work em Brasília DF.",
    url: `${siteUrl}/trabalhe-conosco`,
    images: [defaultOgImage],
  },
};

export default function CareersPage() {
  return (
    <main id="conteudo-principal">
      <PageHero title="Trabalhe conosco.">
        <p>
          Construa sua carreira em uma empresa certificada Great Place to Work, guiada por transparência, foco no resultado, autonomia, inovação e espírito vibrante.
        </p>
      </PageHero>

      <section className="section jobs-section" aria-labelledby="jobs-title">
        <div className="container">
          <div className="detail-intro">
            <h2 id="jobs-title">Vagas abertas</h2>
            <p>
              Confira as oportunidades disponíveis e candidate-se enviando seu currículo. Mesmo sem vaga aberta na sua área, você pode enviar seu currículo para o nosso banco de talentos.
            </p>
          </div>
          <p className="legal-notice">
            <strong>Vagas de demonstração:</strong> conteúdo de exemplo para validação do layout. Substituir pelas vagas reais aprovadas pelo RH antes da publicação.
          </p>

          <div className="jobs-list">
            {jobs.map((job) => (
              <details className="job-card" key={job.title}>
                <summary>
                  <span className="job-card-heading">
                    <strong>{job.title}</strong>
                    <span className="job-tags">
                      <span>{job.area}</span>
                      <span>{job.type}</span>
                      <span>{job.location}</span>
                    </span>
                  </span>
                  <span className="job-card-marker" aria-hidden="true">+</span>
                </summary>
                <div className="job-card-body">
                  <p>{job.summary}</p>
                  <h3>O que você vai fazer</h3>
                  <ul>
                    {job.responsibilities.map((item) => (
                      <li key={item}><Icon name="check" size={17} /> {item}</li>
                    ))}
                  </ul>
                  <h3>O que buscamos</h3>
                  <ul>
                    {job.requirements.map((item) => (
                      <li key={item}><Icon name="check" size={17} /> {item}</li>
                    ))}
                  </ul>
                  <JobApplicationForm jobTitle={job.title} />
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="culture-jobs-title">
        <div className="container">
          <div className="detail-intro">
            <h2 id="culture-jobs-title">O que nos move todos os dias</h2>
          </div>
          <div className="detail-grid">
            {cultureValues.slice(0, 3).map((value) => (
              <article className="detail-card" key={value.title}>
                <span className="benefit-icon"><Icon name={value.icon} size={26} /></span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Não encontrou a sua vaga?"
        description="Envie seu currículo para o nosso banco de talentos. Quando surgir uma oportunidade com o seu perfil, entramos em contato."
        action={
          <a
            className="button button-gold"
            href={`mailto:${company.email}?subject=${encodeURIComponent("Banco de talentos: currículo")}`}
          >
            Enviar currículo <Icon name="arrow" size={20} />
          </a>
        }
      />
    </main>
  );
}
