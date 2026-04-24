import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import { colors } from "@/styles/colors";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servizi",
  description:
    "Degustazioni guidate, selezioni personalizzate, degustazioni a domicilio e aperitivi con taglieri nel giardino del Chianti Classico.",
};

const servizi = [
  {
    num: "01",
    title: "Viaggio nel Vino",
    desc: [
      "Proponiamo degustazioni guidate che vi accompagneranno in un viaggio alla scoperta del vino, tra territori, profumi e tradizioni.",
    ],
    info: "Su prenotazione · Minimo 2 persone · IT / EN",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&q=80",
    alt: "Degustazione di vini",
  },
  {
    num: "02",
    title: "L'Arte della Scelta",
    desc: [
      "Realizziamo selezioni personalizzate, pensate per ogni esigenza: dal regalo perfetto alla bottiglia ideale per una cena tra amici, fino alla creazione di una cantina privata.",
      "Vi affianchiamo nella scelta con cura e competenza, suggerendo le etichette più adatte anche in base al vostro budget, per rendere ogni esperienza unica e soddisfacente.",
      "Le nostre selezioni possono essere spedite su richiesta, per portare direttamente a casa vostra il vino scelto insieme a noi.",
    ],
    info: "Consulenza gratuita · Confezioni regalo · Spedizione in tutto il mondo",
    image:
      "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=1200&q=80",
    alt: "Selezione bottiglie di vino",
  },
  {
    num: "03",
    title: "Vino a Casa Vostra",
    desc: [
      "Portiamo l'esperienza della degustazione direttamente a casa vostra, trasformando ogni occasione in un momento unico da vivere e condividere in un'atmosfera intima e accogliente.",
    ],
    info: "Entro 30km · Minimo 4 persone · 48h di anticipo",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80",
    alt: "Tavola apparecchiata per degustazione",
  },
  {
    num: "04",
    title: "L'Aperitivo in Chianti Classico",
    desc: [
      "Un tavolo all'aperto, il sole del Chianti Classico e un calice da assaporare con calma. Taglieri di salumi e formaggi del territorio si accompagnano a una selezione di vini locali, insieme a prodotti tipici come giardiniera e specialità sott'olio.",
      "Un modo autentico e rilassato per vivere il cuore del Chianti Classico.",
    ],
    info: "Tutti i giorni · Prenotazione consigliata in alta stagione",
    image:
      "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=1200&q=80",
    alt: "Tagliere con salumi e formaggi",
  },
];

export default function ServiziPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <Box
        component="section"
        sx={{
          backgroundColor: colors.dark,
          pt: { xs: 14, md: 18 },
          pb: { xs: 8, md: 12 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Typography
          aria-hidden
          sx={{
            position: "absolute",
            bottom: "-0.1em",
            right: "-0.05em",
            fontFamily: '"Apple Chancery", Palatino, serif',
            fontStyle: "italic",
            fontSize: { xs: "8rem", md: "16rem" },
            lineHeight: 1,
            color: "rgba(255,255,255,0.03)",
            userSelect: "none",
            pointerEvents: "none",
            whiteSpace: "nowrap",
          }}
        >
          Servizi
        </Typography>

        <Box
          sx={{
            maxWidth: 1920,
            mx: "auto",
            px: { xs: 3, md: 10 },
            position: "relative",
            zIndex: 1,
          }}
        >
          <Typography
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: "0.6875rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: colors.beige,
              mb: 1,
            }}
          >
            Cosa Offriamo
          </Typography>
          <Box
            sx={{
              width: 32,
              height: "1px",
              backgroundColor: colors.beige,
              mb: 3,
            }}
          />
          <Typography
            component="h1"
            sx={{
              fontFamily: '"Apple Chancery", Palatino, serif',
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontStyle: "italic",
              fontWeight: 400,
              color: "#FFFFFF",
              lineHeight: 1.15,
              mb: 3,
              maxWidth: 700,
            }}
          >
            I nostri servizi
          </Typography>
          <Typography
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 300,
              fontSize: "1.0625rem",
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.65)",
              maxWidth: 560,
            }}
          >
            Dalla degustazione guidata alla selezione personalizzata — tutto
            quello che serve per vivere al meglio l&#39;esperienza del vino
            toscano.
          </Typography>
        </Box>
      </Box>

      {/* Servizi — layout editoriale alternato */}
      <Box component="section" sx={{ backgroundColor: colors.bg }}>
        {servizi.map((servizio, index) => {
          const isEven = index % 2 === 0;
          return (
            <Box
              key={servizio.num}
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                minHeight: { md: 560 },
                direction: { md: isEven ? "ltr" : "rtl" },
              }}
            >
              {/* Foto */}
              <Box
                sx={{
                  position: "relative",
                  minHeight: { xs: 280, md: 560 },
                  overflow: "hidden",
                  direction: "ltr",
                }}
              >
                <Image
                  src={servizio.image}
                  alt={servizio.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Numero decorativo sopra la foto */}
                <Typography
                  aria-hidden
                  sx={{
                    position: "absolute",
                    top: 24,
                    left: 32,
                    fontFamily: '"Apple Chancery", Palatino, serif',
                    fontStyle: "italic",
                    fontSize: "6rem",
                    lineHeight: 1,
                    color: "rgba(255,255,255,0.15)",
                    userSelect: "none",
                  }}
                >
                  {servizio.num}
                </Typography>
              </Box>

              {/* Testo */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  px: { xs: 3, md: 10 },
                  py: { xs: 6, md: 10 },
                  backgroundColor: isEven ? colors.bg : colors.bgAlt,
                  direction: "ltr",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: "0.6875rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: colors.beige,
                    mb: 1,
                  }}
                >
                  {servizio.num}
                </Typography>
                <Box
                  sx={{
                    width: 32,
                    height: "1px",
                    backgroundColor: colors.beige,
                    mb: 3,
                  }}
                />

                <Typography
                  component="h2"
                  sx={{
                    fontFamily: '"Apple Chancery", Palatino, serif',
                    fontSize: { xs: "2rem", md: "2.75rem" },
                    fontStyle: "italic",
                    fontWeight: 400,
                    color: colors.dark,
                    lineHeight: 1.2,
                    mb: 4,
                  }}
                >
                  {servizio.title}
                </Typography>

                {/* Descrizione */}
                {servizio.desc.map((paragrafo, i) => (
                  <Typography
                    key={i}
                    sx={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontWeight: 300,
                      fontSize: "1rem",
                      lineHeight: 1.85,
                      color: colors.textLight,
                      mb: i < servizio.desc.length - 1 ? 2 : 0,
                    }}
                  >
                    {paragrafo}
                  </Typography>
                ))}

                {/* Info tag */}
                <Typography
                  sx={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontWeight: 300,
                    fontSize: "0.8125rem",
                    color: colors.beige,
                    letterSpacing: "0.05em",
                    borderTop: `1px solid ${colors.border}`,
                    pt: 3,
                  }}
                >
                  {servizio.info}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>

      {/* CTA */}
      <Box
        component="section"
        sx={{
          backgroundColor: colors.darkDeep,
          py: { xs: 8, md: 10 },
          textAlign: "center",
        }}
      >
        <Box sx={{ maxWidth: 1920, mx: "auto", px: { xs: 3, md: 10 } }}>
          <Typography
            sx={{
              fontFamily: '"Apple Chancery", Palatino, serif',
              fontStyle: "italic",
              fontSize: { xs: "1.75rem", md: "2.5rem" },
              color: colors.beige,
              mb: 2,
            }}
          >
            Vuoi prenotare o avere più informazioni?
          </Typography>
          <Typography
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 300,
              fontSize: "1rem",
              color: "rgba(255,255,255,0.6)",
              mb: 5,
            }}
          >
            Scrivici o chiamaci — risponderemo il prima possibile.
          </Typography>
          <Typography
            component="a"
            href="/chi-siamo"
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 500,
              fontSize: "0.8125rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              backgroundColor: colors.merlot,
              textDecoration: "none",
              px: 5,
              py: 1.75,
              borderRadius: "2px",
              display: "inline-block",
              "&:hover": { backgroundColor: colors.merlotHover },
            }}
          >
            Contattaci
          </Typography>
        </Box>
      </Box>
    </>
  );
}
