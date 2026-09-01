"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/Icon";

// Pop-up de confirmação de envio, montado uma vez no layout. Qualquer formulário
// abre com: window.dispatchEvent(new CustomEvent("affix:sucesso", { detail: { titulo, mensagem } }))
export const SUCCESS_EVENT = "affix:sucesso";

type DetalheSucesso = { titulo?: string; mensagem?: string };

export function SuccessPopup() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [conteudo, setConteudo] = useState({
    titulo: "Tudo certo!",
    mensagem: "Recebemos sua mensagem.",
  });

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    function abrir(event: Event) {
      const detalhe = (event as CustomEvent<DetalheSucesso>).detail ?? {};
      setConteudo({
        titulo: detalhe.titulo || "Tudo certo!",
        mensagem: detalhe.mensagem || "Recebemos sua mensagem.",
      });
      if (!dialog?.open) dialog?.showModal();
    }

    function cliqueNoBackdrop(event: MouseEvent) {
      if (event.target === dialog) dialog?.close();
    }

    window.addEventListener(SUCCESS_EVENT, abrir);
    dialog.addEventListener("click", cliqueNoBackdrop);
    return () => {
      window.removeEventListener(SUCCESS_EVENT, abrir);
      dialog.removeEventListener("click", cliqueNoBackdrop);
    };
  }, []);

  return (
    <dialog className="success-popup" ref={dialogRef} aria-labelledby="success-popup-title">
      <span className="success-popup-icon" aria-hidden="true">
        <Icon name="check" size={32} />
      </span>
      <h2 id="success-popup-title">{conteudo.titulo}</h2>
      <p>{conteudo.mensagem}</p>
      <button className="button button-gold" type="button" onClick={() => dialogRef.current?.close()}>
        Fechar
      </button>
    </dialog>
  );
}
