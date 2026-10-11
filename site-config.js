export const company = {
  name: "D&L Prime",
  location: "Catanduva, São Paulo",
  // Código do país + DDD + número, apenas dígitos.
  whatsapp: "5517992287059",
  instagram: "https://www.instagram.com/vendedor_danilo/",
};

export function quoteMessage({ nome, material, projeto }) {
  return `Olá, D&L Prime! Meu nome é ${nome.trim()}.\nGostaria de solicitar um orçamento.\n\nMaterial de interesse: ${material}.\nSobre meu projeto: ${projeto.trim()}`;
}

export function whatsappUrl(message) {
  const number = company.whatsapp.replace(/\D/g, "");
  return number ? `https://wa.me/${number}?text=${encodeURIComponent(message)}` : null;
}
