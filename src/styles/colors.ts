// ─── PALETTE DEFINITIVA ────

export const colors = {
  // Sfondi
  bg: "#FEFCFB", // sfondo principale
  bgAlt: "#F5F0EF", // sfondo sezioni alternate

  // Testi
  text: "#1E1414", // testo principale
  textLight: "#5E4444", // testo secondario/muted

  // Primario — rosso merlot
  merlot: "#7D1A2C", // colore principale CTA e bottoni
  merlotHover: "#B03050", // hover bottoni

  // Accento — beige caldo
  beige: "#C4A882", // label, divider, accenti
  beigeLight: "#D9C4AA", // beige più chiaro

  // Sezioni scure
  dark: "#4A0E1E", // sfondo sezioni scure (Pillars, Quote, hero pagine)
  darkDeep: "#350A16", // pre-footer

  // Footer
  footer: "#1E1414", // sfondo footer

  // Bordi
  border: "#E5DADA", // bordi card e separatori

  // Bianchi
  white: "#FFFFFF",
} as const;

export type ColorKey = keyof typeof colors;
