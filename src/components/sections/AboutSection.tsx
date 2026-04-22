import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { colors } from "@/styles/colors";

export default function AboutSection() {
  return (
    <Box component="section" sx={{ backgroundColor: colors.darkDeep }}>
      <Box
        sx={{
          maxWidth: 1920,
          mx: "auto",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
          minHeight: { md: 580 },
        }}
      >
        {/* Colonna 1 — Foto */}
        <Box
          sx={{
            position: "relative",
            minHeight: { xs: 300, md: 580 },
            overflow: "hidden",
          }}
        >
          <Image
            src="/images/about.webp"
            alt="La Cantinetta del Chianti"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </Box>

        {/* Colonna 2 — Testo Chi Siamo */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            px: { xs: 3, md: 7 },
            py: { xs: 6, md: 8 },
            borderRight: { md: "1px solid rgba(196, 168, 130, 0.15)" },
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
            Chi Siamo
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
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 400,
              color: "#FFFFFF",
              lineHeight: 1.25,
              mb: 4,
            }}
          >
            Una storia di vino
            <br />e territorio
          </Typography>

          <Typography
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 300,
              fontSize: "0.9375rem",
              lineHeight: 1.85,
              color: "rgba(255,255,255,0.65)",
              mb: 3,
            }}
          >
            Benvenuto a La Cantinetta, nel paese di Gaiole in Chianti. Una
            bottega specializzata che seleziona con cura le migliori etichette
            del territorio, con una passione autentica per la cultura
            enogastronomica toscana.
          </Typography>

          <Typography
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 300,
              fontSize: "0.9375rem",
              lineHeight: 1.85,
              color: "rgba(255,255,255,0.65)",
              mb: 5,
            }}
          >
            Se stai cercando i vini buoni e i cibi gustosi del Chianti — e non
            solo — sei arrivato nel posto giusto.
          </Typography>

          <Box
            sx={{
              width: 48,
              height: "1px",
              backgroundColor: colors.beige,
              mb: 5,
            }}
          />

          <Typography
            component="a"
            href="/chi-siamo"
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 500,
              fontSize: "0.8125rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: colors.beige,
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Vieni a trovarci →
          </Typography>
        </Box>

        {/* Colonna 3 — Info contatti */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            px: { xs: 3, md: 7 },
            py: { xs: 6, md: 8 },
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
            Dove Siamo
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
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 400,
              color: "#FFFFFF",
              lineHeight: 1.25,
              mb: 5,
            }}
          >
            Vieni a trovarci
            <br />a Gaiole in Chianti
          </Typography>

          {[
            {
              label: "Indirizzo",
              value: "Via B. Ricasoli 33\n53013 Gaiole in Chianti (SI)",
            },
            {
              label: "Orari",
              value:
                "Dom/Lun/Mer: 10:00–19:30\nGio/Ven: 09:45–20:00\nSab: 10:00–20:00\nMar: Chiuso",
              href: null,
            },
            {
              label: "Contatti",
              value:
                "+39 0577 749125\n+39 333 9687729\nenoteca@lacantinettadelchianti.it",
            },
          ].map((item) => (
            <Box key={item.label} sx={{ mb: 3.5 }}>
              <Typography
                sx={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: "0.625rem",
                  fontWeight: 400,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: colors.beige,
                  mb: 0.75,
                }}
              >
                {item.label}
              </Typography>
              <Typography
                sx={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontWeight: 300,
                  fontSize: "0.9375rem",
                  lineHeight: 1.75,
                  color: "rgba(255,255,255,0.65)",
                  whiteSpace: "pre-line",
                }}
              >
                {item.value}
              </Typography>
            </Box>
          ))}

          <Typography
            component="a"
            href="https://maps.google.com/?cid=1467013816025464602"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              mt: 1,
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 500,
              fontSize: "0.8125rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: colors.beige,
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Ottieni indicazioni →
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
