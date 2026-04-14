// ─── WordPress REST API — risposta generica ───────────────

export interface WPImage {
  id: number;
  url: string;
  alt: string;
  width: number;
  height: number;
}

// ─── Vino ─────────────────────────────────────────────────

export interface Vino {
  id: number;
  slug: string;
  title: string;
  featuredImage: WPImage | null;
  acf: {
    produttore: string;
    denominazione: string;
    tipologia: "Rosso" | "Bianco" | "Rosato" | "Bollicine" | "Distillato";
    annata: number;
    prezzo: number;
    descrizione_breve: string;
    in_evidenza: boolean;
  };
}

// ─── Prodotto ─────────────────────────────────────────────

export interface Prodotto {
  id: number;
  slug: string;
  title: string;
  featuredImage: WPImage | null;
  acf: {
    categoria: "Salumi" | "Formaggi" | "Conserve" | "Pasta" | "Olio" | "Altro";
    produttore: string;
    prezzo: number;
    descrizione_breve: string;
    in_evidenza: boolean;
  };
}

// ─── WordPress raw response ────────────────────────────────
// Quello che arriva dalla REST API prima del parsing

export interface WPRawPost {
  id: number;
  slug: string;
  title: { rendered: string };
  featured_media: number;
  acf: Record<string, unknown>;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      id: number;
      source_url: string;
      alt_text: string;
      media_details: {
        width: number;
        height: number;
      };
    }>;
  };
}
