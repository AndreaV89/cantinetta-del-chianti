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
    categoria:
      | "antipasti_sfiziosita"
      | "la_dispensa"
      | "olio_aceto_condimenti"
      | "dolci_confetture";
    produttore: string;
    descrizione_breve: string;
    in_evidenza: boolean;
  };
}

// ─── Cantina ─────────────────────────────────────────────

export type ZonaToscana =
  | "chianti_classico"
  | "montalcino"
  | "montepulciano"
  | "bolgheri"
  | "isola_di_capraia"
  | "isola_d_elba"
  | "isola_di_gorgona"
  | "san_gimignano";

export type RegioneItalia =
  | "toscana"
  | "piemonte"
  | "valle_d_aosta"
  | "liguria"
  | "lombardia"
  | "trentino_alto_adige"
  | "friuli_venezia_giulia"
  | "veneto"
  | "emilia_romagna"
  | "marche"
  | "umbria"
  | "lazio"
  | "abruzzo"
  | "molise"
  | "campania"
  | "basilicata"
  | "calabria"
  | "puglia"
  | "sicilia"
  | "sardegna";

export type ZonaFrancia =
  | "bordeaux"
  | "borgogne"
  | "champagne"
  | "loira"
  | "jura"
  | "valle_du_rhone";

export interface Cantina {
  id: number;
  nome: string;
  tipologia: "vino" | "superalcolico";
  nazione_vino: string | null;
  nazione_superalcolico: string | null;
  regione: RegioneItalia | null;
  zona_toscana: ZonaToscana | null;
  zona_francia: ZonaFrancia | null;
}

export interface CantinaRaw {
  id: number;
  title: { rendered: string };
  acf: {
    tipologia: "vino" | "superalcolico";
    nazione_vino: string | false;
    nazione_superalcolici: string | false;
    regione: string | false;
    zona_toscana: string | false;
    zona_francia: string | false;
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

// ─── Foto (da ACF Photo Gallery) ──────────────────────────

export interface FotoGallery {
  id: number;
  title: string;
  caption: string;
  alt_text: string;
  full_image_url: string;
  thumbnail_image_url: string;
  large_srcset: string;
  media_details: {
    width: number;
    height: number;
    sizes: {
      large?: { source_url: string; width: number; height: number };
      medium?: { source_url: string; width: number; height: number };
    };
  };
}

// ─── Album ────────────────────────────────────────────────

export interface Album {
  id: number;
  slug: string;
  title: string;
  acf: {
    copertina: {
      url: string;
      width: number;
      height: number;
    } | null;
    descrizione: string;
    data: string;
    ordine: number;
    foto: FotoGallery[];
  };
}

export interface WPRawAlbum {
  id: number;
  slug: string;
  title: { rendered: string };
  acf: Record<string, unknown>;
}
