import { Vino, Prodotto, WPRawPost } from "@/types";

const WP_URL = process.env.NEXT_PUBLIC_WP_URL;

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
    `${WP_URL}/wp-json/wp/v2/vini?_embed&per_page=100`,
    { next: { revalidate: 3600 } }, // cache 1 ora
  );
  if (!res.ok) return [];
  const data: WPRawPost[] = await res.json();
  return data.map((item) => ({
    id: item.id,
    slug: item.slug,
    title: item.title.rendered,
    featuredImage: parseFeaturedImage(item),
    acf: item.acf as Vino["acf"],
  }));
}

export async function getViniInEvidenza(): Promise<Vino[]> {
  const vini = await getVini();
  return vini.filter((v) => v.acf.in_evidenza);
}

// ─── Prodotti ─────────────────────────────────────────────

export async function getProdotti(): Promise<Prodotto[]> {
  const res = await fetch(
    `${WP_URL}/wp-json/wp/v2/prodotti?_embed&per_page=100`,
    { next: { revalidate: 3600 } },
  );
  if (!res.ok) return [];
  const data: WPRawPost[] = await res.json();
  return data.map((item) => ({
    id: item.id,
    slug: item.slug,
    title: item.title.rendered,
    featuredImage: parseFeaturedImage(item),
    acf: item.acf as Prodotto["acf"],
  }));
}

export async function getProdottiInEvidenza(): Promise<Prodotto[]> {
  const prodotti = await getProdotti();
  return prodotti.filter((p) => p.acf.in_evidenza);
}
