import Image from "next/image";
import Link from "next/link";
import { company, navigation, socialLinks } from "@/data/site";
import { solutionPages } from "@/data/solutions";
import { Icon } from "@/components/Icon";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Image src="/images/logo-affix.png" alt="Grupo Affix" width={156} height={77} />
          <p>
            Soluções financeiras para transformar recebíveis em oportunidades reais de crescimento.
          </p>
          <ul className="footer-social" aria-label="Redes sociais">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                  <Icon name={social.icon} size={20} />
                </a>
              </li>
            ))}
          </ul>
          <Image
            className="footer-gptw"
            src="/images/selo-gptw.png"
            alt="Selo Great Place to Work, empresa certificada de abril de 2026 a abril de 2027"
            width={184}
            height={260}
          />
        </div>

        <div>
          <h2 className="footer-title">Navegue</h2>
          <ul className="footer-links">
            {navigation
              .flatMap((item) => [
                { label: item.label, href: item.href },
                ...(item.children ?? []).filter(
                  (child) => child.href !== item.href && !child.href.startsWith("/solucoes/"),
                ),
              ])
              .map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h2 className="footer-title">Soluções</h2>
          <ul className="footer-links">
            {solutionPages.map((page) => (
              <li key={page.slug}>
                <Link href={`/solucoes/${page.slug}`}>{page.navLabel}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer-title">Atendimento</h2>
          <ul className="footer-contact">
            <li>
              <Icon name="phone" size={19} />
              <a href={company.phoneHref}>{company.phoneDisplay}</a>
            </li>
            <li>
              <Icon name="mail" size={19} />
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            <li>
              <Icon name="location" size={19} />
              <span>{company.address}</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="footer-title">Segurança e privacidade</h2>
          <ul className="footer-links">
            <li><Link href="/privacidade">Política de Privacidade</Link></li>
            <li><Link href="/termos">Termos de Uso</Link></li>
            <li><Link href="/contato">Canal de atendimento</Link></li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>Grupo Affix © {new Date().getFullYear()}. CNPJ: {company.cnpj}</p>
        <p>Brasília, Distrito Federal</p>
      </div>
    </footer>
  );
}
