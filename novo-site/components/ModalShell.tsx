"use client";

import { useCallback, useEffect, useRef, type ReactNode } from "react";
import { Icon } from "@/components/Icon";

export function ModalTrigger({
  event,
  className,
  children,
  onClick,
}: {
  event: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      className={className}
      type="button"
      onClick={() => {
        onClick?.();
        window.dispatchEvent(new CustomEvent(event));
      }}
    >
      {children}
    </button>
  );
}

export function ModalShell({
  openEvent,
  closeEvent,
  className,
  titleId,
  title,
  description,
  children,
}: {
  openEvent: string;
  // Evento opcional que fecha o modal a partir do conteúdo, sem passar callbacks.
  closeEvent?: string;
  className: string;
  titleId: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    function open() {
      if (!dialog?.open) dialog?.showModal();
    }

    function close() {
      dialog?.close();
    }

    function onClick(event: MouseEvent) {
      // Clique no backdrop (fora do conteúdo) fecha o modal.
      if (event.target === dialog) dialog?.close();
    }

    window.addEventListener(openEvent, open);
    if (closeEvent) window.addEventListener(closeEvent, close);
    dialog.addEventListener("click", onClick);
    return () => {
      window.removeEventListener(openEvent, open);
      if (closeEvent) window.removeEventListener(closeEvent, close);
      dialog.removeEventListener("click", onClick);
    };
  }, [openEvent, closeEvent]);

  const closeFromButton = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  return (
    <dialog className={className} ref={dialogRef} aria-labelledby={titleId}>
      <div className="contact-modal-head">
        <div>
          <h2 id={titleId}>{title}</h2>
          {description ? <p>{description}</p> : null}
        </div>
        <button className="contact-modal-close" type="button" aria-label="Fechar" onClick={closeFromButton}>
          <Icon name="close" size={22} />
        </button>
      </div>
      {children}
    </dialog>
  );
}
