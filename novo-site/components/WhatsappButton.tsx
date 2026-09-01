import { company } from "@/data/site";

export function WhatsappButton() {
  return (
    <a
      className="whatsapp-button"
      href={company.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com o Grupo Affix pelo WhatsApp"
    >
      <svg aria-hidden="true" viewBox="0 0 32 32" width="28" height="28">
        <path fill="currentColor" d="M16 3A12.7 12.7 0 0 0 5 22.1L3.4 28.8l6.8-1.6A12.8 12.8 0 1 0 16 3Zm0 22.9a10.5 10.5 0 0 1-5.3-1.5l-.4-.2-4 .9 1-3.9-.3-.4a10.4 10.4 0 1 1 9 5.1Zm5.8-7.8c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1a8.6 8.6 0 0 1-2.6-1.6 9.8 9.8 0 0 1-1.8-2.2c-.2-.3 0-.5.1-.6l.5-.6.3-.6c.1-.2 0-.4 0-.6l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.5c.2.2 2.4 3.7 5.9 5.2.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5 0-.2-.3-.3-.6-.5Z" />
      </svg>
      <span>WhatsApp</span>
    </a>
  );
}
