"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation } from "@/data/site";
import { ContactModalTrigger } from "@/components/ContactModal";
import { Icon } from "@/components/Icon";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.dataset.menuOpen = open ? "true" : "false";
    return () => {
      delete document.body.dataset.menuOpen;
    };
  }, [open]);

  // Na home, o menu fica escondido na primeira dobra e surge ao rolar.
  const hidden = pathname === "/" && !scrolled && !open;

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}${hidden ? " is-hidden" : ""}`}>
      <div className="container header-inner">
        <Link className="brand" href="/#inicio" aria-label="Grupo Affix, início">
          <Image
            src="/images/logo-affix.png"
            alt="Grupo Affix"
            width={156}
            height={77}
            priority
          />
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-controls="primary-navigation"
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((current) => !current)}
        >
          <Icon name={open ? "close" : "menu"} size={26} />
        </button>

        {open ? (
          <button
            className="nav-backdrop"
            type="button"
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
          />
        ) : null}
        <nav
          className={`primary-navigation${open ? " is-open" : ""}`}
          id="primary-navigation"
          aria-label="Navegação principal"
        >
          {navigation.map((item) =>
            item.children ? (
              <div className="nav-dropdown" key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)}>
                  {item.label} <Icon className="nav-dropdown-chevron" name="chevron" size={15} />
                </Link>
                <div className="nav-dropdown-panel">
                  <div className="nav-dropdown-inner">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} onClick={() => setOpen(false)}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ),
          )}
          <ContactModalTrigger className="button button-small button-gold nav-cta" onClick={() => setOpen(false)}>
            Fale com um especialista
          </ContactModalTrigger>
        </nav>
      </div>
    </header>
  );
}
