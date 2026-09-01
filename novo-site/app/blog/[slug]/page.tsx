import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { articles, getArticle } from "@/data/articles";
import { ogDefaults, siteUrl } from "@/data/seo";

type ArticleRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticleRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      ...ogDefaults,
      type: "article",
      title: article.title,
      description: article.description,
      url: `${siteUrl}/blog/${article.slug}`,
      publishedTime: article.datePublished,
      images: [{ url: article.image, width: 1200, height: 630, alt: article.imageAlt }],
    },
  };
}

export default async function ArticlePage({ params }: ArticleRouteProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const articleUrl = `${siteUrl}/blog/${article.slug}`;
  const shareText = encodeURIComponent(`${article.title} ${articleUrl}`);
  const related = articles.filter((item) => item.slug !== article.slug).slice(0, 3);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    image: `${siteUrl}${article.image}`,
    url: articleUrl,
    datePublished: article.datePublished,
    dateModified: article.datePublished,
    mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
    author: { "@type": "Organization", name: "Grupo Affix", url: siteUrl },
    publisher: {
      "@type": "Organization",
      name: "Grupo Affix",
      logo: { "@type": "ImageObject", url: `${siteUrl}/images/logo-affix.png` },
    },
  };

  return (
    <main id="conteudo-principal">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <PageHero title={article.title}>
        <p>{article.description}</p>
      </PageHero>

      <article className="section article-page">
        <div className="container article-body">
          <div className="article-banner">
            <Image src={article.image} alt={article.imageAlt} fill sizes="(max-width: 900px) 100vw, 800px" priority />
          </div>

          {article.sections.map((section, index) => (
            <section key={section.heading ?? `secao-${index}`}>
              {section.heading ? <h2>{section.heading}</h2> : null}
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
              {section.list ? (
                <ul className="article-list">
                  {section.list.map((item) => (
                    <li key={item}><Icon name="check" size={18} /> {item}</li>
                  ))}
                </ul>
              ) : null}
              {section.quote ? (
                <blockquote className="article-quote">
                  <p>{section.quote.text}</p>
                  <cite>{section.quote.author}</cite>
                </blockquote>
              ) : null}
            </section>
          ))}

          <div className="article-footer">
            <ul className="tag-list" aria-label="Temas do artigo">
              {article.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <div className="article-share" aria-label="Compartilhe este artigo">
              <span>Compartilhe:</span>
              <a
                href={`https://api.whatsapp.com/send?text=${shareText}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Compartilhar no WhatsApp"
              >
                WhatsApp
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Compartilhar no LinkedIn"
              >
                LinkedIn
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Compartilhar no Facebook"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </article>

      <section className="section related-articles" aria-labelledby="related-title">
        <div className="container">
          <h2 id="related-title">Continue lendo</h2>
          <div className="articles-grid">
            {related.map((item) => (
              <article className="article-card" key={item.slug}>
                <div className="article-image"><Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 760px) 100vw, 33vw" /></div>
                <div className="article-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <Link href={`/blog/${item.slug}`}>Ler artigo <Icon name="arrow" size={17} /></Link>
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
