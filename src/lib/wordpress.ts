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

export async function getVini(locale = "it"): Promise<Vino[]> {
  const [listRes, acfRes] = await Promise.all([
    fetch(`${WP_URL}/wp-json/wp/v2/vini?_embed&per_page=100&lang=${locale}`, {
      next: { revalidate: 0 },
    }),
    fetch(`${WP_URL}/wp-json/acf/v3/vini?per_page=100&lang=${locale}`, {
      next: { revalidate: 0 },
    }),
  ]);

  if (!listRes.ok) return [];
  const listData: WPRawPost[] = await listRes.json();

  // Mappa id → acf fields dall'endpoint ACF
  const acfMap: Record<number, Vino["acf"]> = {};
  if (acfRes.ok) {
    const acfData = await acfRes.json();
    for (const item of acfData.posts ?? acfData) {
      acfMap[item.id] = item.acf;
    }
  }

  return listData.map((item) => ({
    id: item.id,
    slug: item.slug,
    title: decodeHtmlEntities(item.title.rendered),
    featuredImage: parseFeaturedImage(item),
    acf: acfMap[item.id] ?? (item.acf as Vino["acf"]),
  }));
}

export async function getViniInEvidenza(locale = "it"): Promise<Vino[]> {
  const vini = await getVini(locale);
  return vini.filter((v) => v.acf.in_evidenza);
}

// ─── Prodotti ─────────────────────────────────────────────

export async function getProdotti(locale = "it"): Promise<Prodotto[]> {
  const [listRes, acfRes] = await Promise.all([
    fetch(
      `${WP_URL}/wp-json/wp/v2/prodotti?_embed&per_page=100&lang=${locale}`,
      {
        next: { revalidate: 0 },
      },
    ),
    fetch(`${WP_URL}/wp-json/acf/v3/prodotti?per_page=100&lang=${locale}`, {
      next: { revalidate: 0 },
    }),
  ]);

  if (!listRes.ok) return [];
  const listData: WPRawPost[] = await listRes.json();

  // Mappa id → acf fields dall'endpoint ACF
  const acfMap: Record<number, Prodotto["acf"]> = {};
  if (acfRes.ok) {
    const acfData = await acfRes.json();
    for (const item of acfData.posts ?? acfData) {
      acfMap[item.id] = item.acf;
    }
  }

  return listData.map((item) => ({
    id: item.id,
    slug: item.slug,
    title: decodeHtmlEntities(item.title.rendered),
    featuredImage: parseFeaturedImage(item),
    acf: acfMap[item.id] ?? (item.acf as Prodotto["acf"]),
  }));
}

export async function getProdottiInEvidenza(
  locale = "it",
): Promise<Prodotto[]> {
  const prodotti = await getProdotti(locale);
  return prodotti.filter((p) => p.acf.in_evidenza);
}

// ─── Album ─────────────────────────────────────────────

export async function getAlbum(locale = "it"): Promise<Album[]> {
  const res = await fetch(
    `${WP_URL}/wp-json/wp/v2/album?per_page=100&lang=${locale}`,
    {
      next: { revalidate: 0 },
    },
  );

  if (!res.ok) return [];
  const data: WPRawAlbum[] = await res.json();

  const albumCompleti = await Promise.all(
    data.map(async (item) => {
      const resSingle = await fetch(
        `${WP_URL}/wp-json/wp/v2/album/${item.id}?lang=${locale}`,
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
        title: decodeHtmlEntities(single.title.rendered),
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
  const options = { cache: "no-store" as const };

  const [page1, page2] = await Promise.all([
    fetch(`${WP_URL}/wp-json/wp/v2/cantine?per_page=100&page=1`, options).then(
      (r) => r.json(),
    ),
    fetch(`${WP_URL}/wp-json/wp/v2/cantine?per_page=100&page=2`, options).then(
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
