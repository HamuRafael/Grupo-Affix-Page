"use client";

import { type ReactNode } from "react";
import { CONTACT_OPEN_EVENT } from "@/components/ContactModal";
import { ModalShell, ModalTrigger } from "@/components/ModalShell";
import { SimulatorCard } from "@/components/Simulator";

const OPEN_EVENT = "affix:open-simulator";
const CLOSE_EVENT = "affix:close-simulator";

export function SimulatorModalTrigger({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <ModalTrigger event={OPEN_EVENT} className={className} onClick={onClick}>
      {children}
    </ModalTrigger>
  );
}

export function SimulatorModal() {
  return (
    <ModalShell
      openEvent={OPEN_EVENT}
      closeEvent={CLOSE_EVENT}
      className="contact-modal simulator-modal"
      titleId="simulator-modal-title"
      title="Simule a antecipação"
      description="Estimativa imediata, sem compromisso."
    >
      <SimulatorCard
        onAfterRequest={() => {
          // Fecha o simulador e abre o modal de contato já preenchido com a simulação.
          window.dispatchEvent(new CustomEvent(CLOSE_EVENT));
          window.dispatchEvent(new CustomEvent(CONTACT_OPEN_EVENT));
        }}
      />
    </ModalShell>
  );
}
