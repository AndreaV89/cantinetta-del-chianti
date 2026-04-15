import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";

const servizi = [
  {
    num: "01",
    title: "Degustazioni Guidate",
    desc: "Percorsi di degustazione pensati per scoprire il meglio del Chianti Classico e delle sue espressioni. Ti guidiamo attraverso una selezione di etichette scelte, con abbinamenti curati e storie di produttori locali.",
    info: "Su prenotazione · Minimo 2 persone · IT / EN",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&q=80",
    alt: "Degustazione di vini",
  },
  {
    num: "02",
    title: "Selezioni Personalizzate",
    desc: "Costruiamo insieme una selezione di vini su misura — che sia un regalo, una cena speciale o il primo acquisto per la tua cantina. Ti aiutiamo a scegliere le etichette giuste in base al tuo gusto e al tuo budget.",
    info: "Consulenza gratuita · Confezioni regalo · Spedizione in Italia",
    image:
      "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=1200&q=80",
    alt: "Selezione bottiglie di vino",
  },
  {
    num: "03",
    title: "Degustazioni a Domicilio",
    desc: "Portiamo l'esperienza della Cantinetta direttamente a casa tua. Una selezione di vini, un tagliere di prodotti tipici e una guida alla degustazione per rendere speciale ogni occasione.",
    info: "Entro 30km · Minimo 4 persone · 48h di anticipo",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80",
    alt: "Tavola apparecchiata per degustazione",
  },
  {
    num: "04",
    title: "Aperitivi con Taglieri",
    desc: "Un tavolo fuori, il sole del Chianti e un calice da assaporare con calma. Salumi e formaggi del territorio, abbinati a una selezione di vini locali. Il modo migliore per vivere Gaiole in Chianti.",
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
          backgroundColor: "#3A2E28",
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
              color: "#C9A86C",
              mb: 1,
            }}
          >
            Cosa Offriamo
          </Typography>
          <Box
            sx={{ width: 32, height: "1px", backgroundColor: "#C9A86C", mb: 3 }}
          />
          <Typography
            component="h1"
            sx={{
              fontFamily: '"Apple Chancery", Palatino, serif',
              fontSize: { xs: "2.5rem", md: "4rem" },
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
            quello che serve per vivere al meglio l'esperienza del vino toscano.
          </Typography>
        </Box>
      </Box>

      {/* Servizi — layout editoriale alternato */}
      <Box component="section" sx={{ backgroundColor: "#FDFAF6" }}>
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
                  backgroundColor: isEven ? "#FDFAF6" : "#F8F5F0",
                  direction: "ltr",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: "0.6875rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#C9A86C",
                    mb: 1,
                  }}
                >
                  {servizio.num}
                </Typography>
                <Box
                  sx={{
                    width: 32,
                    height: "1px",
                    backgroundColor: "#C9A86C",
                    mb: 3,
                  }}
                />

                <Typography
                  component="h2"
                  sx={{
                    fontFamily: '"Apple Chancery", Palatino, serif',
                    fontSize: { xs: "2rem", md: "2.75rem" },
                    fontWeight: 400,
                    color: "#3A2E28",
                    lineHeight: 1.2,
                    mb: 4,
                  }}
                >
                  {servizio.title}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontWeight: 300,
                    fontSize: "1rem",
                    lineHeight: 1.85,
                    color: "#736156",
                    mb: 4,
                  }}
                >
                  {servizio.desc}
                </Typography>

                {/* Info tag */}
                <Typography
                  sx={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontWeight: 300,
                    fontSize: "0.8125rem",
                    color: "#C9A86C",
                    letterSpacing: "0.05em",
                    borderTop: "1px solid #E0D8CE",
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
          backgroundColor: "#2A1F1A",
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
              color: "#C9A86C",
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
            href="/contatti"
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 500,
              fontSize: "0.8125rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              backgroundColor: "#8B1A2F",
              textDecoration: "none",
              px: 5,
              py: 1.75,
              borderRadius: "2px",
              display: "inline-block",
              "&:hover": { backgroundColor: "#7a1728" },
            }}
          >
            Contattaci
          </Typography>
        </Box>
      </Box>
    </>
  );
}
