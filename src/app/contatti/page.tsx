import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";

const infoContatti = [
  {
    label: "Indirizzo",
    value: "Via Roma 12\n53013 Gaiole in Chianti (SI)",
    href: "https://maps.google.com/?q=La+Cantinetta+del+Chianti+Gaiole",
  },
  {
    label: "Telefono",
    value: "+39 0577 000000",
    href: "tel:+390577000000",
  },
  {
    label: "Email",
    value: "info@lacantinettadelchianti.it",
    href: "mailto:info@lacantinettadelchianti.it",
  },
  {
    label: "Orari",
    value: "Lun – Sab: 09:00 – 19:30\nDomenica: 10:00 – 18:00",
    href: null,
  },
];

const indicazioni = [
  {
    da: "Da Firenze",
    testo:
      "Autostrada A1 uscita Valdarno, poi SS408 in direzione Gaiole in Chianti. Circa 45 minuti.",
  },
  {
    da: "Da Siena",
    testo:
      "SS408 in direzione nord verso Gaiole in Chianti. Circa 25 minuti attraverso le colline del Chianti.",
  },
  {
    da: "Da Arezzo",
    testo:
      "SR69 fino a Montevarchi, poi SS408 in direzione Gaiole in Chianti. Circa 40 minuti.",
  },
];

export default function ContattiPage() {
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
          Contatti
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
            Siamo qui
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
            Vieni a trovarci
          </Typography>
          <Typography
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 300,
              fontSize: "1.0625rem",
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.65)",
              maxWidth: 500,
            }}
          >
            Scrivici su WhatsApp o passa direttamente in bottega — a Gaiole in
            Chianti ti aspettiamo.
          </Typography>
        </Box>
      </Box>

      {/* Chi siamo — storia di Riccardo */}
      <Box
        component="section"
        sx={{ backgroundColor: "#FDFAF6", py: { xs: 8, md: 12 } }}
      >
        <Box
          sx={{
            maxWidth: 1920,
            mx: "auto",
            px: { xs: 3, md: 10 },
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1.5fr" },
            gap: { xs: 6, md: 12 },
            alignItems: "center",
          }}
        >
          {/* Foto Riccardo */}
          <Box
            sx={{
              position: "relative",
              aspectRatio: "3/4",
              borderRadius: "2px",
              overflow: "hidden",
              backgroundColor: "#E8E0D5",
            }}
          >
            <Image
              src="/images/riccardo.jpg"
              alt="Riccardo — La Cantinetta del Chianti"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </Box>

          {/* Storia */}
          <Box>
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
              La nostra storia
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
              Come nasceva
              <br />
              La Cantinetta
            </Typography>

            {[
              "Era la primavera dell'anno 2000, quando ho avuto il piacere di conoscere questo meraviglioso territorio del Chianti Classico.",
              "Sono partito dalla Basilicata per avere un colloquio di lavoro presso una struttura agrituristica. Man mano che mi avvicinavo alla Toscana, mi rendevo sempre più conto di quanto fosse incantevole questo territorio di colline dolci e vigneti straordinari.",
              'Appena sono giunto a Gaiole in Chianti ho capito di essere arrivato in un "Paradiso"...',
              'Ho lavorato tre anni in Agriturismo come responsabile di sala, dopodiché stimolato dal piacere di degustare il "Nettare" toscano, ho deciso di cambiare lavoro.',
              'Nel 2003 ho rilevato l\'Enoteca "La Cantinetta del Chianti".',
            ].map((paragrafo, i) => {
              if (paragrafo.includes("Paradiso")) {
                return (
                  <Box
                    key={i}
                    sx={{
                      borderLeft: "2px solid #C9A86C",
                      pl: 3,
                      my: 3,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: '"Apple Chancery", Palatino, serif',
                        fontStyle: "italic",
                        fontSize: "1.25rem",
                        lineHeight: 1.75,
                        color: "#3A2E28",
                      }}
                    >
                      {paragrafo}
                    </Typography>
                  </Box>
                );
              }

              return (
                <Typography
                  key={i}
                  sx={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontWeight: 300,
                    fontSize: "1rem",
                    lineHeight: 1.85,
                    color: "#736156",
                    mb: 2.5,
                  }}
                >
                  {paragrafo}
                </Typography>
              );
            })}

            {/* WhatsApp CTA */}
            <Box sx={{ mt: 4 }}>
              <Typography
                component="a"
                href="https://wa.me/390577000000"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontWeight: 500,
                  fontSize: "0.8125rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                  backgroundColor: "#8B1A2F",
                  textDecoration: "none",
                  px: 4,
                  py: 1.75,
                  borderRadius: "2px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.5,
                  "&:hover": { backgroundColor: "#7a1728" },
                  transition: "background-color 0.2s ease",
                }}
              >
                Scrivici su WhatsApp →
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Info contatti + indicazioni */}
      <Box
        component="section"
        sx={{ backgroundColor: "#F8F5F0", py: { xs: 8, md: 12 } }}
      >
        <Box
          sx={{
            maxWidth: 1920,
            mx: "auto",
            px: { xs: 3, md: 10 },
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 8, md: 12 },
          }}
        >
          {/* Info contatti */}
          <Box>
            <Typography
              component="h2"
              sx={{
                fontFamily: '"Apple Chancery", Palatino, serif',
                fontSize: { xs: "1.75rem", md: "2.25rem" },
                fontWeight: 400,
                color: "#3A2E28",
                mb: 5,
              }}
            >
              Dove siamo
            </Typography>

            {infoContatti.map((item) => (
              <Box key={item.label} sx={{ mb: 4 }}>
                <Typography
                  sx={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: "0.625rem",
                    fontWeight: 500,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#C9A86C",
                    mb: 1,
                  }}
                >
                  {item.label}
                </Typography>
                {item.href ? (
                  <Typography
                    component="a"
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    sx={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontWeight: 300,
                      fontSize: "1rem",
                      lineHeight: 1.75,
                      color: "#3A2E28",
                      textDecoration: "none",
                      whiteSpace: "pre-line",
                      display: "block",
                      "&:hover": { color: "#8B1A2F" },
                      transition: "color 0.2s ease",
                    }}
                  >
                    {item.value}
                  </Typography>
                ) : (
                  <Typography
                    sx={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontWeight: 300,
                      fontSize: "1rem",
                      lineHeight: 1.75,
                      color: "#3A2E28",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {item.value}
                  </Typography>
                )}
              </Box>
            ))}

            {/* Mappa */}
            <Box
              component="iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.123!2d11.4308!3d43.4667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a2b1234567890%3A0x1234567890abcdef!2sGaiole+in+Chianti!5e0!3m2!1sit!2sit!4v1234567890"
              sx={{
                width: "100%",
                height: 280,
                border: "none",
                borderRadius: "2px",
                mt: 4,
                filter: "grayscale(20%)",
                display: "block",
                lineHeight: 0,
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>

          {/* Indicazioni stradali */}
          <Box>
            <Typography
              component="h2"
              sx={{
                fontFamily: '"Apple Chancery", Palatino, serif',
                fontSize: { xs: "1.75rem", md: "2.25rem" },
                fontWeight: 400,
                color: "#3A2E28",
                mb: 5,
              }}
            >
              Come arrivare
            </Typography>

            {indicazioni.map((ind, i) => (
              <Box
                key={ind.da}
                sx={{
                  mb: 4,
                  pb: 4,
                  borderBottom:
                    i < indicazioni.length - 1 ? "1px solid #E0D8CE" : "none",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mb: 1.5,
                  }}
                >
                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      backgroundColor: "#C9A86C",
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: '"Apple Chancery", Palatino, serif',
                      fontSize: "1.125rem",
                      color: "#3A2E28",
                    }}
                  >
                    {ind.da}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontWeight: 300,
                    fontSize: "0.9375rem",
                    lineHeight: 1.75,
                    color: "#736156",
                    pl: "22px",
                  }}
                >
                  {ind.testo}
                </Typography>
              </Box>
            ))}

            {/* Nota parcheggio */}
            <Box
              sx={{
                backgroundColor: "rgba(201, 168, 108, 0.1)",
                border: "1px solid rgba(201, 168, 108, 0.3)",
                borderRadius: "2px",
                p: 3,
                mt: 2,
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: "0.625rem",
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#C9A86C",
                  mb: 1,
                }}
              >
                Parcheggio
              </Typography>
              <Typography
                sx={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontWeight: 300,
                  fontSize: "0.9375rem",
                  lineHeight: 1.75,
                  color: "#736156",
                }}
              >
                Parcheggio gratuito disponibile nel centro del paese, a pochi
                passi dalla bottega.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Pre-footer */}
      <Box
        sx={{
          backgroundColor: "#2A1F1A",
          py: { xs: 6, md: 8 },
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Apple Chancery", Palatino, serif',
            fontStyle: "italic",
            fontSize: { xs: "1.5rem", md: "2rem" },
            color: "#C9A86C",
            mb: 4,
          }}
        >
          Ti aspettiamo a Gaiole in Chianti
        </Typography>
        <Typography
          component="a"
          href="https://wa.me/390577000000"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            fontFamily: '"DM Sans", sans-serif',
            fontWeight: 500,
            fontSize: "0.8125rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#FFFFFF",
            backgroundColor: "#8B1A2F",
            textDecoration: "none",
            px: 4,
            py: 1.75,
            borderRadius: "2px",
            display: "inline-flex",
            alignItems: "center",
            gap: 1.5,
            "&:hover": { backgroundColor: "#7a1728" },
            transition: "background-color 0.2s ease",
          }}
        >
          Scrivici su WhatsApp →
        </Typography>
      </Box>
    </>
  );
}
