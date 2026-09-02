import type { Metadata } from "next";
import Image from "next/image";
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
              {jobs.length > 0
                ? "Confira as oportunidades disponíveis e candidate-se enviando seu currículo. Mesmo sem vaga aberta na sua área, você pode enviar seu currículo para o nosso banco de talentos."
                : "No momento não temos vagas abertas, mas nosso banco de talentos está sempre de portas abertas. Envie seu currículo e entraremos em contato quando surgir uma oportunidade com o seu perfil."}
            </p>
          </div>

          {/* Sem vagas na lista (data/jobs.ts), a página vira banco de talentos. */}
          {jobs.length === 0 ? (
            <div className="jobs-list">
              <div className="job-card job-card--talent">
                <JobApplicationForm jobTitle="Banco de talentos" />
              </div>
            </div>
          ) : null}

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

      <section className="section gptw-section" aria-labelledby="gptw-title">
        <div className="container gptw-layout">
          <figure className="gptw-badge">
            <Image
              src="/images/selo-gptw.webp"
              alt="Selo Great Place to Work, empresa certificada no Brasil"
              width={400}
              height={566}
            />
          </figure>
          <div className="gptw-copy">
            <p className="gptw-kicker">Great Place to Work</p>
            <h2 id="gptw-title">Somos GPTW!</h2>
            <p>
              O Grupo Affix é uma empresa certificada pelo Great Place to Work, reconhecimento que destaca as melhores empresas para trabalhar no Brasil.
            </p>
            <p>
              O selo nasce da opinião de quem vive a Affix todos os dias: é o nosso time que responde à pesquisa e avalia o ambiente em pilares como confiança, orgulho e camaradagem. Essa conquista reforça o compromisso de construir um lugar onde as pessoas gostam de estar e crescem junto com a empresa.
            </p>
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
