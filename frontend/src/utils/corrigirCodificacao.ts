const corrigirCodificacao = (texto: string): string => {
  try {
    return decodeURIComponent(escape(texto));
  } catch (e) {
    return texto;
  }
};

export default corrigirCodificacao;