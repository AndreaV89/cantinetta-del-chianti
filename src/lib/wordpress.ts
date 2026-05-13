import {
  Vino,
  Prodotto,
  Cantina,
  CantinaRaw,
  Album,
  WPRawPost,
  WPRawAlbum,
  FotoGallery,
  RegioneItalia,
  ZonaFrancia,
  ZonaToscana,
} from "@/types";

const WP_URL = process.env.NEXT_PUBLIC_WP_URL;

// ─── Helper: decodifica entità HTML ───────────────────────
export function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

// ─── Helper: parsing immagine featured ────────────────────

function parseFeaturedImage(raw: WPRawPost) {
  const media = raw._embedded?.["wp:featuredmedia"]?.[0];
  if (!media) return null;
  return {
    id: media.id,
    url: media.source_url,
    alt: media.alt_text,
    width: media.media_details.width,
    height: media.media_details.height,
  };
}

// ─── Vini ─────────────────────────────────────────────────

export async function getVini(): Promise<Vino[]> {
  const res = await fetch(
    // `${WP_URL}/wp-json/wp/v2/vini?_embed&per_page=100&_fields=id,slug,title,featured_media,acf,_links,_embedded`,
    `${WP_URL}/wp-json/wp/v2/vini?_embed&per_page=100`,
    { next: { revalidate: 0 } },
  );
  if (!res.ok) return [];
  const data: WPRawPost[] = await res.json();

  // Fetch individuale per ogni vino per ottenere i campi ACF completi
  const viniCompleti = await Promise.all(
    data.map(async (item) => {
      const resSingle = await fetch(
        `${WP_URL}/wp-json/wp/v2/vini/${item.id}?_embed`,
        { next: { revalidate: 0 } },
      );
      if (!resSingle.ok) return null;

      const single: WPRawPost = await resSingle.json();
      return {
        id: single.id,
        slug: single.slug,
        title: single.title.rendered,
        featuredImage: parseFeaturedImage(single),
        acf: single.acf as Vino["acf"],
      };
    }),
  );

  return viniCompleti.filter(Boolean) as Vino[];
}

export async function getViniInEvidenza(): Promise<Vino[]> {
  const vini = await getVini();
  return vini.filter((v) => v.acf.in_evidenza);
}

// ─── Prodotti ─────────────────────────────────────────────

export async function getProdotti(): Promise<Prodotto[]> {
  const res = await fetch(
    `${WP_URL}/wp-json/wp/v2/prodotti?_embed&per_page=100`,
    { next: { revalidate: 0 } },
  );
  if (!res.ok) return [];
  const data: WPRawPost[] = await res.json();

  const prodottiCompleti = await Promise.all(
    data.map(async (item) => {
      const resSingle = await fetch(
        `${WP_URL}/wp-json/wp/v2/prodotti/${item.id}?_embed`,
        { next: { revalidate: 0 } },
      );
      if (!resSingle.ok) return null;
      const single: WPRawPost = await resSingle.json();
      return {
        id: single.id,
        slug: single.slug,
        title: single.title.rendered,
        featuredImage: parseFeaturedImage(single),
        acf: single.acf as Prodotto["acf"],
      };
    }),
  );

  return prodottiCompleti.filter(Boolean) as Prodotto[];
}

export async function getProdottiInEvidenza(): Promise<Prodotto[]> {
  const prodotti = await getProdotti();
  return prodotti.filter((p) => p.acf.in_evidenza);
}

// ─── Album ─────────────────────────────────────────────

export async function getAlbum(): Promise<Album[]> {
  const res = await fetch(`${WP_URL}/wp-json/wp/v2/album?per_page=100`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) return [];
  const data: WPRawAlbum[] = await res.json();

  const albumCompleti = await Promise.all(
    data.map(async (item) => {
      const resSingle = await fetch(
        `${WP_URL}/wp-json/wp/v2/album/${item.id}`,
        { next: { revalidate: 0 } },
      );

      if (!resSingle.ok) return null;
      const single: WPRawAlbum = await resSingle.json();
      const rawAcf = single.acf as Record<string, unknown>;
      const photoGallery = rawAcf.photo_gallery as
        | Record<string, unknown>
        | undefined;
      const fotoRaw = photoGallery?.foto as unknown[][] | undefined;
      const foto =
        Array.isArray(fotoRaw) && Array.isArray(fotoRaw[0]) ? fotoRaw[0] : [];

      return {
        id: single.id,
        slug: single.slug,
        title: single.title.rendered,
        acf: {
          copertina: (rawAcf.copertina as Album["acf"]["copertina"]) || null,
          descrizione: (rawAcf.descrizione as string) || "",
          data: (rawAcf.data as string) || "",
          ordine: (rawAcf.ordine as number) || 0,
          foto: foto as FotoGallery[],
        },
      };
    }),
  );

  return albumCompleti
    .filter(Boolean)
    .sort((a, b) => (a!.acf.ordine || 0) - (b!.acf.ordine || 0)) as Album[];
}

// ─── Cantine ─────────────────────────────────────────────

export async function getCantine(): Promise<Cantina[]> {
  const baseUrl = process.env.NEXT_PUBLIC_WP_URL;
  const options = { cache: "no-store" as const };

  const [page1, page2] = await Promise.all([
    fetch(`${baseUrl}/wp-json/wp/v2/cantine?per_page=100&page=1`, options).then(
      (r) => r.json(),
    ),
    fetch(`${baseUrl}/wp-json/wp/v2/cantine?per_page=100&page=2`, options).then(
      (r) => r.json(),
    ),
  ]);

  const all = [...page1, ...(Array.isArray(page2) ? page2 : [])];

  return all.map((c: CantinaRaw) => ({
    id: c.id,
    nome: c.title.rendered.replace(/&#(\d+);/g, (_, code) =>
      String.fromCharCode(parseInt(code)),
    ),
    tipologia: c.acf.tipologia,
    nazione_vino: c.acf.nazione_vino || null,
    nazione_superalcolico: c.acf.nazione_superalcolici || null,
    regione: (c.acf.regione || null) as RegioneItalia | null,
    zona_toscana: (c.acf.zona_toscana || null) as ZonaToscana | null,
    zona_francia: (c.acf.zona_francia || null) as ZonaFrancia | null,
  }));
}
