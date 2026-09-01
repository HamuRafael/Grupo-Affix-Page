import { NextResponse } from "next/server";

export const runtime = "nodejs";
const MAX_FILE_SIZE = 5 * 1024 * 1024;

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character] || character);
}
function errorResponse(message: string, status = 400) { return NextResponse.json({ message }, { status }); }

export async function POST(request: Request) {
  const configuredOrigin = process.env.ALLOWED_ORIGIN;
  const origin = request.headers.get("origin");
  if (configuredOrigin && origin && origin !== configuredOrigin) return errorResponse("Origem não autorizada.", 403);
  let formData: FormData;
  try { formData = await request.formData(); } catch { return errorResponse("Não foi possível processar o formulário."); }
  if (String(formData.get("website") || "").trim()) return errorResponse("Não foi possível processar a candidatura.");
  const fullName = String(formData.get("fullName") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const jobTitle = String(formData.get("jobTitle") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const file = formData.get("resume");
  if (!fullName || !jobTitle || !phone || !email || String(formData.get("consent") || "") !== "accepted") return errorResponse("Preencha os campos obrigatórios e aceite o termo de autorização.");
  if (!/^\S+@\S+\.\S+$/.test(email)) return errorResponse("Informe um e-mail válido.");
  if (!(file instanceof File) || !file.name) return errorResponse("Anexe seu currículo em PDF ou DOC.");
  const extension = file.name.toLowerCase().split(".").pop();
  if (!extension || !["pdf", "doc"].includes(extension)) return errorResponse("O currículo deve estar no formato PDF ou DOC.");
  if (file.size > MAX_FILE_SIZE) return errorResponse("O currículo deve ter no máximo 5 MB.");
  if ((extension === "pdf" && file.type && file.type !== "application/pdf") || (extension === "doc" && file.type && file.type !== "application/msword")) return errorResponse("O tipo do arquivo não corresponde à extensão informada.");

  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.CONTACT_FROM_EMAIL;
  // Currículos vão para o RH; sem essa variável, cai no destino geral de contato.
  const recipientEmail = process.env.CAREERS_TO_EMAIL || process.env.CONTACT_TO_EMAIL;
  const senderName = process.env.CONTACT_FROM_NAME || "Grupo Affix";
  if (!apiKey || !senderEmail || !recipientEmail) {
    if (process.env.NODE_ENV !== "production" && process.env.CAREERS_SEND_IN_DEV !== "true") return NextResponse.json({ message: "Candidatura validada em modo de demonstração.", mode: "demo" });
    return errorResponse("O serviço de candidaturas ainda não está configurado.", 503);
  }
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_").slice(-120);
  const attachment = Buffer.from(await file.arrayBuffer()).toString("base64");
  const html = `<h2>Nova candidatura: ${escapeHtml(jobTitle)}</h2><p><strong>Nome:</strong> ${escapeHtml(fullName)}</p><p><strong>E-mail:</strong> ${escapeHtml(email)}</p><p><strong>Telefone:</strong> ${escapeHtml(phone)}</p>${message ? `<p><strong>Apresentação:</strong><br />${escapeHtml(message).replace(/\n/g, "<br />")}</p>` : ""}`;
  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", { method: "POST", headers: { accept: "application/json", "api-key": apiKey, "content-type": "application/json" }, body: JSON.stringify({ sender: { name: senderName, email: senderEmail }, to: [{ email: recipientEmail, name: "RH Grupo Affix" }], replyTo: { email, name: fullName }, subject: `Candidatura: ${jobTitle}`, htmlContent: html, attachment: [{ content: attachment, name: safeName }] }) });
    if (!response.ok) {
      console.error("[careers] Brevo recusou:", response.status, await response.text());
      return errorResponse("Não foi possível enviar sua candidatura agora. Tente novamente.", 502);
    }
  } catch (error) {
    console.error("[careers] falha ao chamar a Brevo:", error);
    return errorResponse("Não foi possível enviar sua candidatura agora. Tente novamente.", 502);
  }
  return NextResponse.json({ message: "Candidatura enviada com sucesso. Obrigado pelo interesse!" }, { status: 201 });
}
