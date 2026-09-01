import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { articles } from "@/data/articles";
import { defaultOgImage, ogDefaults, siteUrl } from "@/data/seo";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Blog do Grupo Affix com conteúdos sobre antecipação de recebíveis, FIDC, capital de giro, crédito empresarial e agronegócio.",
  alternates: { canonical: "/blog" },
  openGraph: {
    ...ogDefaults,
    type: "website",
    title: "Blog | Grupo Affix",
    description:
      "Conteúdos do Grupo Affix sobre antecipação de recebíveis, FIDC, crédito e soluções financeiras.",
    url: `${siteUrl}/blog`,
    images: [defaultOgImage],
  },
};

export default function BlogPage() {
  return (
    <main id="conteudo-principal">
      <PageHero title="Informação para decisões mais seguras.">
        <p>
          Acompanhe conteúdos sobre recebíveis, FIDC, crédito e o desenvolvimento do seu negócio.
        </p>
      </PageHero>

      <section className="section blog-listing" aria-label="Artigos do blog">
        <div className="container">
          <div className="articles-grid">
            {articles.map((article) => (
              <article className="article-card" key={article.slug}>
                <div className="article-image"><Image src={article.image} alt={article.imageAlt} fill sizes="(max-width: 760px) 100vw, 33vw" /></div>
                <div className="article-content">
                  <h2>{article.title}</h2>
                  <p>{article.description}</p>
                  <Link href={`/blog/${article.slug}`}>Ler artigo <Icon name="arrow" size={17} /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Quer aplicar isso na sua empresa?"
        description="Fale com a nossa equipe e descubra a solução certa para o seu momento."
      />
    </main>
  );
}
