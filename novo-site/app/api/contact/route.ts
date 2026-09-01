import { NextRequest, NextResponse } from "next/server";

type ContactPayload = {
  fullName?: unknown;
  email?: unknown;
  phone?: unknown;
  cnpj?: unknown;
  service?: unknown;
  annualRevenue?: unknown;
  message?: unknown;
  consent?: unknown;
  website?: unknown;
  "g-recaptcha-response"?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function text(value: unknown, limit: number) {
  return typeof value === "string" ? value.trim().slice(0, limit) : "";
}

// Envio delegado ao script PHP que já roda na infraestrutura da Affix.
const CONTACT_ENDPOINT =
  process.env.CONTACT_PHP_ENDPOINT ?? "https://grupoaffix.com.br/php/sendemail.php";

export async function POST(request: NextRequest) {
  const allowedOrigin = process.env.ALLOWED_ORIGIN;
  const requestOrigin = request.headers.get("origin");
  if (allowedOrigin && requestOrigin && requestOrigin !== allowedOrigin) {
    return NextResponse.json({ message: "Origem não autorizada." }, { status: 403 });
  }

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ message: "Dados inválidos." }, { status: 400 });
  }

  if (text(payload.website, 200)) {
    return NextResponse.json({ message: "Solicitação recebida." });
  }

  const contact = {
    fullName: text(payload.fullName, 100),
    email: text(payload.email, 160).toLowerCase(),
    phone: text(payload.phone, 20),
    cnpj: text(payload.cnpj, 18),
    service: text(payload.service, 100),
    annualRevenue: text(payload.annualRevenue, 100),
    message: text(payload.message, 2000),
    consent: text(payload.consent, 20),
    recaptchaToken: text(payload["g-recaptcha-response"], 4096),
  };

  if (
    contact.fullName.length < 3 ||
    !emailPattern.test(contact.email) ||
    contact.phone.replace(/\D/g, "").length < 10 ||
    contact.cnpj.replace(/\D/g, "").length !== 14 ||
    !contact.service ||
    !contact.annualRevenue ||
    contact.message.length < 10 ||
    contact.consent !== "accepted"
  ) {
    return NextResponse.json({ message: "Revise os campos obrigatórios e tente novamente." }, { status: 422 });
  }

  if (!contact.recaptchaToken) {
    return NextResponse.json({ message: "Confirme o reCAPTCHA para enviar." }, { status: 422 });
  }

  // Em desenvolvimento o envio fica desligado para não gerar contatos falsos na caixa
  // da equipe. Defina CONTACT_SEND_IN_DEV=true para exercitar o envio de verdade.
  if (process.env.NODE_ENV !== "production" && process.env.CONTACT_SEND_IN_DEV !== "true") {
    return NextResponse.json({ message: "Formulário validado em modo de demonstração.", mode: "demo" });
  }

  // O script PHP não tem campo para a solução de interesse, então ela entra na mensagem.
  const corpo = [`Solução de interesse: ${contact.service}`, "", contact.message].join("\n");

  let resposta: Response;
  try {
    resposta = await fetch(CONTACT_ENDPOINT, {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded; charset=UTF-8" },
      body: new URLSearchParams({
        fullName: contact.fullName,
        email: contact.email,
        phone: contact.phone,
        cnpj: contact.cnpj,
        annualRevenue: contact.annualRevenue,
        message: corpo,
        "g-recaptcha-response": contact.recaptchaToken,
      }).toString(),
      cache: "no-store",
      // Em caso de sucesso o script redireciona para a página de confirmação do site
      // antigo. Sem "manual" o fetch seguiria o redirecionamento e perderíamos o sinal.
      redirect: "manual",
    });
  } catch {
    return NextResponse.json({ message: "Não foi possível enviar agora. Use telefone ou WhatsApp." }, { status: 502 });
  }

  if (resposta.status >= 300 && resposta.status < 400) {
    return NextResponse.json({ message: "Mensagem enviada com sucesso." }, { status: 201 });
  }

  // Qualquer outra resposta é uma das mensagens de erro em texto puro do script.
  const texto = (await resposta.text()).toLowerCase();
  if (texto.includes("captcha")) {
    return NextResponse.json({ message: "Confirme o reCAPTCHA para enviar." }, { status: 422 });
  }
  if (texto.includes("preencha") || texto.includes("não é válido")) {
    return NextResponse.json({ message: "Revise os campos obrigatórios e tente novamente." }, { status: 422 });
  }
  return NextResponse.json({ message: "Não foi possível enviar agora. Use telefone ou WhatsApp." }, { status: 502 });
}
