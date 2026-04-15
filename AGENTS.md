# AGENTS.md — La Cantinetta del Chianti

## Stack

- **Frontend:** Next.js 15, TypeScript, App Router
- **UI:** MUI (Material UI) v6 — NO Tailwind CSS
- **CMS:** WordPress headless su Cloudways (REST API)
- **i18n:** next-intl (IT/EN)
- **Animazioni:** Framer Motion
- **Deploy:** Vercel (frontend) + Cloudways (WordPress)

## Struttura cartelle

- `src/app/[locale]/` — pagine con routing i18n
- `src/components/layout/` — Navbar, Footer
- `src/components/sections/` — sezioni delle pagine (HeroVideo, Pillars, ecc.)
- `src/components/ui/` — componenti base riutilizzabili
- `src/lib/wordpress.ts` — fetch helpers REST API
- `src/styles/theme.ts` — MUI theme (palette, typography)
- `src/types/index.ts` — TypeScript types

## Design system

- **Font titoli:** Apple Chancery, Palatino, serif
- **Font body:** DM Sans, sans-serif
- **Sfondo:** #FDFAF6 (crema caldo) / #F8F5F0 (sezioni alternate)
- **Testo:** #3A2E28 (scuro) / #736156 (medio)
- **Oro:** #C9A86C (accenti, label, divider)
- **Merlot:** #8B1A2F (CTA, bottoni primari)
- **Bordo:** #E0D8CE

## Convenzioni

- Commit in italiano
- Lavorare sempre su branch `develop`, mai su `main`
- Merge su `main` solo via Pull Request
- Niente push diretti su `main`
- Preferire Server Components dove possibile
- I fetch WordPress vanno sempre in `src/lib/wordpress.ts`
- I tipi TypeScript vanno in `src/types/index.ts`

## WordPress REST API

- Base URL: `NEXT_PUBLIC_WP_URL` (da .env.local)
- CPT esposti: `/wp-json/wp/v2/vini`, `/wp-json/wp/v2/prodotti`
- I campi ACF sono inclusi nel campo `acf` della risposta

## Note

- I servizi sono statici (no CPT), definiti direttamente nel codice
- Il catalogo vini completo è gestito tramite PDF scaricabile
- Apple Chancery non è disponibile su Windows/Android — il fallback è Palatino

## Citazioni e aforismi

Il cliente vuole citazioni sul vino sparse nelle pagine come elementi decorativi.

- Font: Apple Chancery italic
- Colore: #C9A86C (oro)
- Posizionamento: tra una sezione e l'altra, o come elementi di sfondo
- Citazione confermata: "Wine not?"
- Tono: spiritoso ma elegante, non pacchiano

## Regola sezioni scure

- Footer: #3A2E28 (il più scuro)
- Sezione immediatamente sopra il footer: #2A1F1A
- Sezioni scure intermedie (Pillars, QuoteSection): #3A2E28
- Mai mettere due sezioni dello stesso colore scuro adiacenti

## Ordine sezioni Home

1. HeroVideo
2. Pillars (#3A2E28 — scuro)
3. WineSection (#FDFAF6 — chiaro)
4. ProductsSection (#F8F5F0 — chiaro alternato)
5. QuoteSection (#3A2E28 — scuro, separatore)
6. ServicesSection (#FDFAF6 — chiaro)
7. AboutSection (#2A1F1A — scuro, pre-footer)
8. Footer (#3A2E28)
