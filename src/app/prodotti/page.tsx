import { Box, Typography } from "@mui/material";
import { getProdotti } from "@/lib/wordpress";
import ProdottiGrid from "@/components/sections/ProdottiGrid";

export default async function ProdottiPage() {
  const prodotti = await getProdotti();

  return (
    <>
      {/* Hero */}
      <Box
        component="section"
        sx={{
          backgroundColor: "#4A0E1E",
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
          Prodotti
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
              color: "#C4A882",
              mb: 1,
            }}
          >
            La Bottega
          </Typography>
          <Box
            sx={{ width: 32, height: "1px", backgroundColor: "#C4A882", mb: 3 }}
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
            Prodotti tipici
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
            Salumi, formaggi, conserve e molto altro — il meglio della
            tradizione enogastronomica toscana.
          </Typography>
        </Box>
      </Box>

      {/* Griglia prodotti con filtri */}
      <ProdottiGrid prodotti={prodotti} />

      {/* Pre-footer */}
      <Box
        sx={{
          backgroundColor: "#350A16",
          py: { xs: 6, md: 8 },
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Apple Chancery", Palatino, serif',
            fontStyle: "italic",
            fontSize: { xs: "1.5rem", md: "2rem" },
            color: "#C4A882",
            mb: 4,
          }}
        >
          Cerchi qualcosa di specifico?
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
            backgroundColor: "#7D1A2C",
            textDecoration: "none",
            px: 4,
            py: 1.75,
            borderRadius: "2px",
            display: "inline-block",
            "&:hover": { backgroundColor: "#B03050" },
          }}
        >
          Scrivici su WhatsApp →
        </Typography>
      </Box>
    </>
  );
}
