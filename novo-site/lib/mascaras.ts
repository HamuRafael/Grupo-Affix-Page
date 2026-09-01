// Máscaras aplicadas enquanto a pessoa digita. Todas partem só dos dígitos,
// então colar um valor já formatado, com espaços ou com letras funciona igual.

/** Monta 00.000.000/0001-00 progressivamente. */
export function formatarCnpj(valor: string) {
  const digitos = valor.replace(/\D/g, "").slice(0, 14);
  if (digitos.length <= 2) return digitos;
  if (digitos.length <= 5) return `${digitos.slice(0, 2)}.${digitos.slice(2)}`;
  if (digitos.length <= 8) return `${digitos.slice(0, 2)}.${digitos.slice(2, 5)}.${digitos.slice(5)}`;
  if (digitos.length <= 12) {
    return `${digitos.slice(0, 2)}.${digitos.slice(2, 5)}.${digitos.slice(5, 8)}/${digitos.slice(8)}`;
  }
  return `${digitos.slice(0, 2)}.${digitos.slice(2, 5)}.${digitos.slice(5, 8)}/${digitos.slice(8, 12)}-${digitos.slice(12)}`;
}

export const CNPJ_PATTERN = "\\d{2}\\.\\d{3}\\.\\d{3}/\\d{4}-\\d{2}";

/**
 * Monta (61) 3297-2310 para fixo e (61) 99999-9999 para celular. O ponto de
 * corte muda sozinho ao chegar no 11º dígito.
 */
export function formatarTelefone(valor: string) {
  const digitos = valor.replace(/\D/g, "").slice(0, 11);
  if (!digitos) return "";
  if (digitos.length <= 2) return `(${digitos}`;
  if (digitos.length <= 6) return `(${digitos.slice(0, 2)}) ${digitos.slice(2)}`;
  if (digitos.length <= 10) {
    return `(${digitos.slice(0, 2)}) ${digitos.slice(2, 6)}-${digitos.slice(6)}`;
  }
  return `(${digitos.slice(0, 2)}) ${digitos.slice(2, 7)}-${digitos.slice(7)}`;
}

// Aceita fixo (8 dígitos após o DDD) e celular (9 dígitos).
export const TELEFONE_PATTERN = "\\(\\d{2}\\) \\d{4,5}-\\d{4}";
