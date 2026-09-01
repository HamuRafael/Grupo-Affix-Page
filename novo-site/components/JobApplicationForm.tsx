"use client";

import { FormEvent, useState } from "react";
import { Icon } from "@/components/Icon";
import { TELEFONE_PATTERN, formatarTelefone } from "@/lib/mascaras";

type FormState = "idle" | "submitting" | "success" | "demo" | "error";

// Site estático: a candidatura vai direto ao script PHP que roda junto com o site.
// Para testar envio real no localhost, defina NEXT_PUBLIC_CAREERS_ENDPOINT com a
// URL completa do script em produção.
const CAREERS_ENDPOINT = process.env.NEXT_PUBLIC_CAREERS_ENDPOINT || "/php/sendcurriculo.php";

// No ambiente local sem endpoint explícito o formulário só valida, sem enviar.
function modoDemonstracao() {
  if (process.env.NEXT_PUBLIC_CAREERS_ENDPOINT) return false;
  const host = window.location.hostname;
  return host === "localhost" || host === "127.0.0.1" || host.startsWith("192.168.");
}

export function JobApplicationForm({ jobTitle }: { jobTitle: string }) {
  const [state, setState] = useState<FormState>("idle");
  const [feedback, setFeedback] = useState("");
  const [telefone, setTelefone] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setState("submitting"); setFeedback("");
    if (modoDemonstracao()) {
      setState("demo");
      setFeedback("Candidatura validada em modo de demonstração. Em produção o currículo é entregue ao RH normalmente.");
      return;
    }
    try {
      const response = await fetch(CAREERS_ENDPOINT, { method: "POST", body: new FormData(event.currentTarget) });
      const result = (await response.json()) as { message?: string; mode?: string };
      if (!response.ok) throw new Error(result.message || "Não foi possível enviar sua candidatura.");
      event.currentTarget.reset();
      setTelefone(""); // reset() não alcança campos controlados pelo React.
      setState(result.mode === "demo" ? "demo" : "success");
      setFeedback(result.message || "Candidatura enviada com sucesso.");
    } catch (error) {
      setState("error"); setFeedback(error instanceof Error ? error.message : "Não foi possível enviar sua candidatura.");
    }
  }

  return (
    <form className="job-application-form" onSubmit={handleSubmit} encType="multipart/form-data">
      <h4 className="job-application-title">Candidate-se a esta vaga</h4>
      <div className="form-grid">
        <label>Nome completo<input name="fullName" type="text" autoComplete="name" required /></label>
        <label>E-mail<input name="email" type="email" autoComplete="email" required /></label>
        <label>Telefone<input
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          value={telefone}
          onChange={(event) => setTelefone(formatarTelefone(event.target.value))}
          pattern={TELEFONE_PATTERN}
          title="Informe o telefone com DDD"
          maxLength={15}
          required
        /></label>
        <label>Currículo<input name="resume" type="file" accept=".pdf,.doc,application/pdf,application/msword" required /><small>PDF ou DOC, até 5 MB.</small></label>
      </div>
      <label>Apresentação (opcional)<textarea name="message" rows={4} maxLength={1000} placeholder="Conte brevemente sobre sua experiência." /></label>
      <label className="consent-field"><input name="consent" type="checkbox" value="accepted" required /><span>Autorizo o Grupo Affix a utilizar meus dados para esta oportunidade.</span></label>
      <input name="jobTitle" type="hidden" value={jobTitle} />
      <input name="website" type="text" tabIndex={-1} autoComplete="off" className="honeypot" aria-hidden="true" />
      <button className="button button-gold" type="submit" disabled={state === "submitting"}>{state === "submitting" ? "Enviando..." : "Enviar candidatura"} <Icon name="arrow" size={19} /></button>
      {feedback ? <p className={`form-feedback ${state === "success" ? "is-success" : state === "error" ? "is-error" : state === "demo" ? "is-demo" : ""}`} role="status" aria-live="polite">{feedback}</p> : null}
    </form>
  );
}
