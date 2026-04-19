import { Box, Typography } from "@mui/material";
import { getVini } from "@/lib/wordpress";
import ViniGrid from "@/components/sections/ViniGrid";

export default async function ViniPage() {
  const vini = await getVini();

  return (
    <>
      {/* Hero */}
      <Box
        component="section"
        sx={{
          backgroundColor: "#1E1414",
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
          Vini
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
            La Cantina
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
            I nostri vini
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
            Una selezione curata di etichette del Chianti e della Toscana,
            scelte per qualità, carattere e storia.
          </Typography>
        </Box>
      </Box>

      {/* Griglia vini con filtri */}
      <ViniGrid vini={vini} />

      {/* Pre-footer */}
      <Box
        sx={{
          backgroundColor: "#2A1414",
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
          Non trovi quello che cerchi?
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
            backgroundColor: "#6B1A28",
            textDecoration: "none",
            px: 4,
            py: 1.75,
            borderRadius: "2px",
            display: "inline-block",
            "&:hover": { backgroundColor: "#9E3347" },
          }}
        >
          Chiedici una selezione personalizzata →
        </Typography>
      </Box>
    </>
  );
}
