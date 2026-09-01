import type { ReactNode } from "react";

type PageHeroProps = {
  title: string;
  children?: ReactNode;
};

export function PageHero({ title, children }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container page-hero-copy">
        <h1>{title}</h1>
        {children}
      </div>
    </section>
  );
}
