"use client";

import { type ReactNode } from "react";
import { ContactForm } from "@/components/ContactForm";
import { ModalShell, ModalTrigger } from "@/components/ModalShell";
import { company } from "@/data/site";

export const CONTACT_OPEN_EVENT = "affix:open-contact";
// Disparado pelo ContactForm após envio com sucesso, para o modal sair da
// frente antes de o pop-up de confirmação aparecer.
export const CONTACT_CLOSE_EVENT = "affix:close-contact";

export function ContactModalTrigger({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <ModalTrigger event={CONTACT_OPEN_EVENT} className={className} onClick={onClick}>
      {children}
    </ModalTrigger>
  );
}

export function ContactModal() {
  return (
    <ModalShell
      openEvent={CONTACT_OPEN_EVENT}
      closeEvent={CONTACT_CLOSE_EVENT}
      className="contact-modal"
      titleId="contact-modal-title"
      title="Fale com um especialista"
      description="Preencha os dados e nossa equipe entra em contato."
    >
      <p className="contact-modal-channels">
        Se preferir: <a href={company.phoneHref}>{company.phoneDisplay}</a> ou{" "}
        <a href={`mailto:${company.email}`}>{company.email}</a>
      </p>
      <ContactForm />
    </ModalShell>
  );
}
