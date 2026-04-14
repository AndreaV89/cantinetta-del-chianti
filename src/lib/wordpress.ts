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
    `${WP_URL}/wp-json/wp/v2/vini?_embed&per_page=100&_fields=id,slug,title,featured_media,acf,_links,_embedded`,
    { next: { revalidate: 3600 } },
  );
  if (!res.ok) return [];
  const data: WPRawPost[] = await res.json();

  // Fetch individuale per ogni vino per ottenere i campi ACF completi
  const viniCompleti = await Promise.all(
    data.map(async (item) => {
      const resSingle = await fetch(
        `${WP_URL}/wp-json/wp/v2/vini/${item.id}?_embed`,
        { next: { revalidate: 3600 } },
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
    `${WP_URL}/wp-json/wp/v2/prodotti?_embed&per_page=100&_fields=id,slug,title,featured_media,acf,_links,_embedded`,
    { next: { revalidate: 3600 } },
  );
  if (!res.ok) return [];
  const data: WPRawPost[] = await res.json();

  const prodottiCompleti = await Promise.all(
    data.map(async (item) => {
      const resSingle = await fetch(
        `${WP_URL}/wp-json/wp/v2/prodotti/${item.id}?_embed`,
        { next: { revalidate: 3600 } },
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
