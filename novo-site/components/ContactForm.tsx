"use client";

import Script from "next/script";
import { FormEvent, useEffect, useRef, useState } from "react";
import type { SimulationData } from "@/components/Simulator";
import { Icon } from "@/components/Icon";
import { CNPJ_PATTERN, TELEFONE_PATTERN, formatarCnpj, formatarTelefone } from "@/lib/mascaras";

type FormState = "idle" | "submitting" | "success" | "error" | "demo";

const currency = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

// Site estático: o envio vai direto ao script PHP que roda junto com o site.
// Em produção é o mesmo domínio; para testar envio real no localhost, defina
// NEXT_PUBLIC_CONTACT_ENDPOINT com a URL completa do script em produção.
const CONTACT_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || "/php/sendemail.php";

// No ambiente local sem endpoint explícito o formulário só valida, sem enviar,
// para não gerar contatos falsos na caixa da equipe durante o desenvolvimento.
function modoDemonstracao() {
  if (process.env.NEXT_PUBLIC_CONTACT_ENDPOINT) return false;
  const host = window.location.hostname;
  return host === "localhost" || host === "127.0.0.1" || host.startsWith("192.168.");
}

// O token do reCAPTCHA vale para um envio só; sem limpar, uma segunda tentativa falha.
// Em /contato e /simulador existem dois formulários na página, o da seção e o do modal,
// logo dois widgets: é preciso reiniciar o que pertence a este formulário, não o primeiro.
function resetRecaptcha(form: HTMLFormElement) {
  const grecaptcha = (window as unknown as { grecaptcha?: { reset: (id?: number) => void } }).grecaptcha;
  if (!grecaptcha) return;

  const widgets = Array.from(document.querySelectorAll(".g-recaptcha"));
  const meu = form.querySelector(".g-recaptcha");
  const indice = meu ? widgets.indexOf(meu) : -1;
  grecaptcha.reset(indice >= 0 ? indice : undefined);
}

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [feedback, setFeedback] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [telefone, setTelefone] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  // Mesma chave usada pelo site atual; o PHP que recebe o envio valida o token.
  // Chave pública do reCAPTCHA v2 do Grupo Affix (grupoaffix.com.br e localhost).
  const recaptchaSiteKey =
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LdeSKMtAAAAAHNF4vdsOquPGPKyRO0ZQ37VKnRr";

  useEffect(() => {
    function applySimulation(event: Event) {
      const simulation = (event as CustomEvent<SimulationData>).detail;
      const form = formRef.current;
      if (!form || !simulation) return;

      const service = form.elements.namedItem("service") as HTMLSelectElement | null;
      const message = form.elements.namedItem("message") as HTMLTextAreaElement | null;
      if (service) service.value = "Antecipação de Recebíveis";
      if (message) {
        message.value = `Gostaria de analisar a simulação de ${simulation.receivableType}: ${currency.format(simulation.amount)}, prazo de ${simulation.days} dias e valor líquido estimado de ${currency.format(simulation.estimatedNet)}.`;
      }
    }

    window.addEventListener("affix:simulation", applySimulation);
    return () => window.removeEventListener("affix:simulation", applySimulation);
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setFeedback("Enviando sua solicitação…");

    const form = event.currentTarget;
    const campos = new FormData(form);
    const recaptchaToken = String(campos.get("g-recaptcha-response") || "").trim();

    if (!recaptchaToken) {
      setState("error");
      setFeedback("Confirme o reCAPTCHA para enviar.");
      return;
    }

    if (modoDemonstracao()) {
      setState("demo");
      setFeedback("Formulário validado. O envio fica desligado no ambiente local; em produção a mensagem é entregue normalmente.");
      resetRecaptcha(form);
      return;
    }

    // O script PHP não tem campo para a solução de interesse, então ela entra na mensagem.
    const corpo = [`Solução de interesse: ${String(campos.get("service") || "")}`, "", String(campos.get("message") || "")].join("\n");

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" },
        body: new URLSearchParams({
          fullName: String(campos.get("fullName") || ""),
          email: String(campos.get("email") || ""),
          phone: String(campos.get("phone") || ""),
          cnpj: String(campos.get("cnpj") || ""),
          annualRevenue: String(campos.get("annualRevenue") || ""),
          message: corpo,
          website: String(campos.get("website") || ""),
          "g-recaptcha-response": recaptchaToken,
        }).toString(),
      });
      const texto = (await response.text()).toLowerCase();

      // O PHP responde "OK" no sucesso; qualquer outro texto é uma mensagem de erro.
      if (!response.ok || (!texto.startsWith("ok") && texto !== "")) {
        if (texto.includes("captcha")) throw new Error("Confirme o reCAPTCHA para enviar.");
        if (texto.includes("preencha") || texto.includes("não é válido")) {
          throw new Error("Revise os campos obrigatórios e tente novamente.");
        }
        throw new Error("Não foi possível enviar agora. Use telefone ou WhatsApp.");
      }

      setState("success");
      setFeedback("Mensagem enviada com sucesso. Nossa equipe entrará em contato.");
      form.reset();
      // O reset do form não alcança campos controlados pelo React.
      setCnpj("");
      setTelefone("");
    } catch (error) {
      setState("error");
      setFeedback(error instanceof Error ? error.message : "Não foi possível enviar sua mensagem.");
    } finally {
      resetRecaptcha(form);
    }
  }

  return (
    <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          <span>Nome completo *</span>
          <input name="fullName" type="text" autoComplete="name" minLength={3} maxLength={100} required placeholder="Como podemos chamar você?" />
        </label>
        <label>
          <span>E-mail corporativo *</span>
          <input name="email" type="email" autoComplete="email" maxLength={160} required placeholder="voce@empresa.com.br" />
        </label>
        <label>
          <span>Telefone *</span>
          <input
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
            placeholder="(61) 99999-9999"
          />
        </label>
        <label>
          <span>CNPJ *</span>
          <input
            name="cnpj"
            type="text"
            inputMode="numeric"
            value={cnpj}
            onChange={(event) => setCnpj(formatarCnpj(event.target.value))}
            // pattern em vez de minLength: o aviso do navegador fala em dígitos,
            // não em "18 caracteres", que ninguém conta ao digitar um CNPJ.
            pattern={CNPJ_PATTERN}
            title="Informe os 14 dígitos do CNPJ"
            maxLength={18}
            required
            placeholder="00.000.000/0001-00"
          />
        </label>
        <label>
          <span>Solução de interesse *</span>
          <select name="service" required defaultValue="">
            <option value="" disabled>Selecione uma solução</option>
            <option>Antecipação de Recebíveis</option>
            <option>Capital de Giro</option>
            <option>Soluções Agro</option>
            <option>Conta Escrow</option>
            <option>Crédito para Construtoras</option>
            <option>Antecipação de Aluguéis</option>
            <option>Investimentos</option>
            <option>Outro assunto</option>
          </select>
        </label>
        <label>
          <span>Faturamento anual *</span>
          <select name="annualRevenue" required defaultValue="">
            <option value="" disabled>Selecione uma faixa</option>
            <option>Até R$ 500 mil</option>
            <option>De R$ 500 mil a R$ 2 milhões</option>
            <option>De R$ 2 milhões a R$ 10 milhões</option>
            <option>De R$ 10 milhões a R$ 50 milhões</option>
            <option>Acima de R$ 50 milhões</option>
          </select>
        </label>
      </div>

      <label>
        <span>Como podemos ajudar? *</span>
        <textarea name="message" rows={4} minLength={10} maxLength={2000} required placeholder="Conte brevemente o que sua empresa precisa." />
      </label>

      <label className="honeypot" aria-hidden="true">
        Não preencha este campo
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>

      <Script src="https://www.google.com/recaptcha/api.js" strategy="afterInteractive" />
      <div className="recaptcha-field">
        <div className="g-recaptcha" data-sitekey={recaptchaSiteKey} />
      </div>

      <label className="consent-field">
        <input name="consent" type="checkbox" value="accepted" required />
        <span>Autorizo o Grupo Affix a utilizar meus dados para responder a esta solicitação, conforme a Política de Privacidade. *</span>
      </label>

      <button className="button button-gold button-full" type="submit" disabled={state === "submitting"}>
        {state === "submitting" ? "Enviando…" : "Enviar solicitação"}
        {state !== "submitting" ? <Icon name="arrow" size={20} /> : null}
      </button>
      <p className={`form-feedback is-${state}`} role="status" aria-live="polite">{feedback}</p>
    </form>
  );
}
