export function formatarCPF(cpf: string): string {
  cpf = cpf.replace(/\D/g, "");
  if (cpf.length !== 11) {
    return "CPF inválido";
  }
  return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(
    9,
    11
  )}`;
}
