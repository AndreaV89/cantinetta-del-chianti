import { Box, Typography } from "@mui/material";

export default function AboutSection() {
  return (
    <Box
      component="section"
      sx={{ backgroundColor: "#FDFAF6", py: { xs: 8, md: 0 } }}
    >
      <Box
        sx={{
          maxWidth: 1440,
          mx: "auto",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          minHeight: { md: 580 },
        }}
      >
        {/* Foto sinistra */}
        <Box
          sx={{
            position: "relative",
            minHeight: { xs: 300, md: 580 },
            backgroundColor: "#E8E0D5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Sostituire con <Image> quando il cliente fornisce la foto */}
          <Typography
            sx={{
              fontFamily: '"Apple Chancery", Palatino, serif',
              fontStyle: "italic",
              fontSize: "1rem",
              color: "rgba(115, 97, 86, 0.4)",
            }}
          >
            [ foto locale ]
          </Typography>
        </Box>

        {/* Testo destra */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            px: { xs: 3, md: 8 },
            py: { xs: 6, md: 8 },
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
            Chi Siamo
          </Typography>
          <Box
            sx={{ width: 32, height: 1, backgroundColor: "#C9A86C", mb: 3 }}
          />

          <Typography
            component="h2"
            sx={{
              fontFamily: '"Apple Chancery", Palatino, serif',
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 400,
              color: "#3A2E28",
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
              color: "#736156",
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
              color: "#736156",
              mb: 5,
            }}
          >
            Se stai cercando i vini buoni e i cibi gustosi del Chianti — e non
            solo — sei arrivato nel posto giusto.
          </Typography>

          {/* Divider gold */}
          <Box
            sx={{ width: 48, height: 1, backgroundColor: "#C9A86C", mb: 5 }}
          />

          <Typography
            component="a"
            href="/contatti"
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 500,
              fontSize: "0.8125rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#8B1A2F",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              "&:hover": { gap: 2, transition: "gap 0.2s ease" },
            }}
          >
            Vieni a trovarci →
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
