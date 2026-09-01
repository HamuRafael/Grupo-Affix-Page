import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { SectionHeading } from "@/components/SectionHeading";
import { getSolutionPage, solutionPages } from "@/data/solutions";
import { processSteps } from "@/data/site";
import { defaultOgImage, ogDefaults, siteUrl } from "@/data/seo";

type SolutionRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return solutionPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: SolutionRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSolutionPage(slug);
  if (!page) return {};
  const title = page.slug === "solucoes-agro" ? "Crédito para Agronegócio" : page.title;
  return {
    title,
    description: page.metaDescription,
    alternates: { canonical: `/solucoes/${page.slug}` },
    openGraph: {
      ...ogDefaults,
      type: "website",
      title: `${title} | Grupo Affix`,
      description: page.metaDescription,
      url: `${siteUrl}/solucoes/${page.slug}`,
      images: [defaultOgImage],
    },
  };
}

export default async function SolutionDetailPage({ params }: SolutionRouteProps) {
  const { slug } = await params;
  const page = getSolutionPage(slug);
  if (!page) notFound();

  return (
    <main id="conteudo-principal">
      <PageHero title={page.title}>
        <p>{page.intro[0]}</p>
      </PageHero>

      <section className="section solution-detail" aria-labelledby="solution-intro-title">
        <div className="container detail-layout">
          <div className="detail-intro">
            <h2 id="solution-intro-title">{page.highlightsTitle}</h2>
            {page.intro.slice(1).map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
          <div className="detail-media">
            <Image
              src={page.image.src}
              alt={page.image.alt}
              fill
              sizes="(max-width: 900px) 100vw, 44vw"
            />
          </div>
        </div>
        <div className="container detail-grid">
          {page.highlights.map((highlight) => (
            <article className="detail-card" key={highlight.title}>
              <span className="benefit-icon"><Icon name={highlight.icon} size={26} /></span>
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </article>
          ))}
        </div>
      </section>

      {page.modalities ? (
        <section className="section modalities" aria-labelledby="modalities-title">
          <div className="container">
            <h2 id="modalities-title">{page.modalitiesTitle}</h2>
            <ul className="tag-list">
              {page.modalities.map((modality) => (
                <li key={modality}>{modality}</li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {page.showProcess ? (
        <section className="section process" aria-labelledby="detail-process-title">
          <div className="container process-layout">
            <div className="process-intro">
              <SectionHeading
                inverse
                id="detail-process-title"
                title="Um processo ágil e 100% digital."
                description="Acompanhado por especialistas em todas as etapas."
              />
              <Link className="button button-gold" href="/simulador">
                Simule agora <Icon name="arrow" size={20} />
              </Link>
            </div>
            <ol className="process-steps">
              {processSteps.map((step) => (
                <li key={step.number}>
                  <span className="step-number">{step.number}</span>
                  <div><h3>{step.title}</h3><p>{step.description}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      {page.closing ? (
        <section className="section closing" aria-labelledby="closing-title">
          <div className="container detail-intro">
            <h2 id="closing-title">{page.closingTitle}</h2>
            <p>{page.closing}</p>
          </div>
        </section>
      ) : null}

      <CtaBand
        title="Vamos conversar sobre a sua operação?"
        description="Envie seus dados e receba uma análise personalizada da nossa equipe."
      />
    </main>
  );
}
