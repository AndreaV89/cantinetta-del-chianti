# La Cantinetta del Chianti

Sito vetrina per un'enoteca storica nel cuore del Chianti Classico, attiva dal 2003 a Gaiole in Chianti (SI).

🌐 **Live:** [lacantinettadelchianti.it](https://www.lacantinettadelchianti.it)

---

## Stack

| Layer            | Tecnologia                                           |
| ---------------- | ---------------------------------------------------- |
| Frontend         | Next.js 15 (App Router), TypeScript                  |
| UI               | Material UI v6                                       |
| CMS              | WordPress headless + ACF, REST API                   |
| i18n             | next-intl (IT / EN)                                  |
| Galleria         | ACF Photo Gallery Field + yet-another-react-lightbox |
| Hosting frontend | Vercel                                               |
| Hosting CMS      | Cloudways (DigitalOcean Amsterdam)                   |

---

## Funzionalità principali

- **Architettura headless** — WordPress come CMS, Next.js come frontend
- **Multilingua IT/EN** con next-intl e WPML
- **Custom Post Types** — Vini, Prodotti, Album, Cantine
- **Filtri dinamici** per tipologia vino e categoria prodotto
- **Galleria fotografica** con scorrimento orizzontale, drag-to-scroll e lightbox fullscreen
- **Video hero** a piena schermata
- **Open Graph** e SEO ottimizzati per ogni pagina
- **ISR** — revalidazione automatica ogni ora (`revalidate: 3600`)

---

## Struttura del progetto

```
src/
  app/
    [locale]/
      page.tsx              # Home
      vini/page.tsx
      prodotti/page.tsx
      servizi/page.tsx
      storie/page.tsx
      chi-siamo/page.tsx
      layout.tsx
    sitemap.ts
    robots.ts
  components/
    layout/                 # Navbar, Footer
    sections/               # Sezioni delle pagine
    ui/                     # Componenti condivisi (ThemeRegistry, ProdottoCard…)
  lib/
    wordpress.ts            # Fetch helpers REST API
  styles/
    theme.ts                # MUI theme
    colors.ts               # Palette centralizzata
  types/
    index.ts
```

---

## Variabili d'ambiente

Crea un file `.env.local` nella root del progetto:

```env
NEXT_PUBLIC_WP_URL=https://your-wordpress-instance.cloudwaysapps.com
```

---

## Avvio in locale

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

> **Nota:** In sviluppo locale, se vuoi dati sempre freschi puoi impostare temporaneamente `cache: 'no-store'` nei fetch in `src/lib/wordpress.ts`.

Per forzare il rebuild della cache Next.js (es. dopo aggiornamento immagini in `public/`):

```bash
rm -rf .next && npm run dev
```

---

## WordPress REST API

Gli endpoint principali esposti dal CMS:

```
/wp-json/wp/v2/vini        — lista vini
/wp-json/wp/v2/prodotti    — lista prodotti
/wp-json/wp/v2/album       — lista album
/wp-json/wp/v2/cantine     — lista cantine
/wp-json/acf/v3/vini       — campi ACF vini
/wp-json/acf/v3/prodotti   — campi ACF prodotti
```

> **Importante:** Non usare il parametro `_fields` sugli endpoint lista — causa risultati incompleti con i Custom Post Types.

---

## Note tecniche

### ACF Photo Gallery — struttura risposta

Le foto dell'album sono in un array annidato:

```typescript
const fotoRaw = acf.photo_gallery?.foto;
const foto =
  Array.isArray(fotoRaw) && Array.isArray(fotoRaw[0]) ? fotoRaw[0] : [];
```

### Domini autorizzati per `next/image`

Configurati in `next.config.ts`:

- `wordpress-1573725-6349681.cloudwaysapps.com`
- `images.unsplash.com`

---

## Design System

**Font**

- Titoli: `Apple Chancery, Palatino, serif`
- Body: `DM Sans` (Google Fonts via `next/font`)

**Palette principale**

| Token    | Valore    | Uso                   |
| -------- | --------- | --------------------- |
| `merlot` | `#7D1A2C` | CTA, bottoni, accenti |
| `beige`  | `#C4A882` | Label, divider        |
| `bg`     | `#FEFCFB` | Sfondo principale     |
| `dark`   | `#4A0E1E` | Sezioni scure         |
| `text`   | `#1E1414` | Testo principale      |

---

## Sviluppato da

[Andrea Vannetti](https://andreavannetti.dev) — Sviluppatore web freelance
