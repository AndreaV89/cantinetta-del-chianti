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
  darkDeep: "#4A0E1E", // sfondo sezioni scure (Pillars, Quote, hero pagine)
  dark: "#350A16", // pre-footer

  // Footer
  footer: "#1E1414", // sfondo footer

  // Bordi
  border: "#E5DADA", // bordi card e separatori

  // Bianchi
  white: "#FFFFFF",
} as const;

// Palette alternativa
// export const colors = {
//   bg: "#FAFAFA",
//   bgAlt: "#F0EEEE",
//   text: "#111111",
//   textLight: "#555555",
//   merlot: "#1A1A1A",
//   merlotHover: "#3D3D3D",
//   beige: "#C4A882",
//   beigeLight: "#D9C4AA",
//   dark: "#111111",
//   darkDeep: "#000000",
//   footer: "#0A0A0A",
//   border: "#E0DCDC",
//   white: "#FFFFFF",
// } as const;

export type ColorKey = keyof typeof colors;
