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
- **Sfondo:** #FEFCFB (crema caldo) / #F5F0EF (sezioni alternate)
- **Testo:** #4A0E1E (scuro) / #5E4444 (medio)
- **Oro:** #C4A882 (accenti, label, divider)
- **Merlot:** #7D1A2C (CTA, bottoni primari)
- **Bordo:** #E5DADA

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
- Colore: #C4A882 (oro)
- Posizionamento: tra una sezione e l'altra, o come elementi di sfondo
- Citazione confermata: "Wine not?"
- Tono: spiritoso ma elegante, non pacchiano

## Regola sezioni scure

- Footer: #4A0E1E (il più scuro)
- Sezione immediatamente sopra il footer: #350A16
- Sezioni scure intermedie (Pillars, QuoteSection): #4A0E1E
- Mai mettere due sezioni dello stesso colore scuro adiacenti

## Ordine sezioni Home

1. HeroVideo
2. Pillars (#4A0E1E — scuro)
3. WineSection (#FEFCFB — chiaro)
4. ProductsSection (#F5F0EF — chiaro alternato)
5. QuoteSection (#4A0E1E — scuro, separatore)
6. ServicesSection (#FEFCFB — chiaro)
7. AboutSection (#350A16 — scuro, pre-footer)
8. Footer (#4A0E1E)

## Checklist pre go-live

### Performance

- [ ] Cambia tutti i `{ cache: 'no-store' }` in `{ next: { revalidate: 3600 } }` in `src/lib/wordpress.ts`

### SEO

- [ ] Aggiorna `baseUrl` in `src/app/sitemap.ts` con il dominio reale del cliente
- [ ] Aggiorna `baseUrl` in `src/app/robots.ts` con il dominio reale del cliente
- [ ] Aggiungi Open Graph images in `src/app/layout.tsx`:
  - Crea immagine OG 1200×630px (foto del locale o dei vini)
  - Aggiungi `openGraph.images` nel metadata globale
  - Aggiungi `openGraph.images` in ogni pagina
- [ ] Verifica meta description di ogni pagina

### Contenuti

- [x] Sostituire foto placeholder Unsplash nella pagina Servizi con foto reali
- [x] Aggiungere video hero reale in `public/videos/hero.mp4`
- [ ] Aggiornare indirizzo esatto in AboutSection, LocationSection e pagina Contatti
- [x] Aggiornare telefono/email reali ovunque - da verificare a fine progetto
- [ ] Caricare PDF catalogo vini in `public/catalogo-vini.pdf`
- [ ] Aggiornare link WhatsApp con numero reale

### Colori

- [ ] Conferma palette definitiva con il cliente
- [ ] Eseguire refactor completo con `src/styles/colors.ts`

### Deploy

- [ ] Collegare dominio reale del cliente su Vercel
- [ ] Impostare CORS in Cloudways con dominio reale invece di `*`
- [ ] Aggiornare `NEXT_PUBLIC_WP_URL` con dominio WordPress definitivo su Vercel
- [ ] Testare responsive mobile su tutti i breakpoint
- [ ] Testare su Safari iOS (Apple Chancery font)

### i18n

- [ ] Configurare `next-intl` per IT/EN
- [ ] Tradurre tutti i testi statici
- [ ] Configurare WPML in WordPress per vini e prodotti
