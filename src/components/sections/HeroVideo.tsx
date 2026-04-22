import { Box, Typography, Button } from "@mui/material";
import { colors } from "@/styles/colors";

export default function HeroVideo() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        height: "100vh",
        minHeight: 600,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Video background */}
      <Box
        component="video"
        autoPlay
        muted
        loop
        playsInline
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </Box>

      {/* Overlay gradiente */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(5,4,3,0.82) 0%, rgba(5,4,3,0.35) 55%, rgba(5,4,3,0.0) 100%)",
          zIndex: 1,
        }}
      />

      {/* Contenuto */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1920,
          width: "100%",
          mx: "auto",
          px: { xs: 3, md: 10 },
        }}
      >
        {/* Location tag */}
        <Typography
          sx={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: "0.6875rem",
            fontWeight: 400,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: colors.beige,
            mb: 1.5,
          }}
        >
          Gaiole in Chianti, Toscana
        </Typography>

        {/* Linea gold */}
        <Box
          sx={{ width: 32, height: 1, backgroundColor: colors.beige, mb: 3 }}
        />

        {/* Titolo */}
        <Typography
          component="h1"
          sx={{
            fontFamily:
              '"Apple Chancery", Palatino, "Palatino Linotype", serif',
            fontSize: { xs: "2.75rem", md: "4.5rem" },
            fontWeight: 400,
            lineHeight: 1.15,
            color: "#FFFFFF",
            mb: 0,
          }}
        >
          Il cuore del Chianti Classico,
        </Typography>
        <Typography
          component="span"
          sx={{
            display: "block",
            fontFamily:
              '"Apple Chancery", Palatino, "Palatino Linotype", serif',
            fontStyle: "italic",
            fontSize: { xs: "2.75rem", md: "4.5rem" },
            fontWeight: 400,
            lineHeight: 1.15,
            color: colors.beige,
            mb: 4,
          }}
        >
          in ogni sorso.
        </Typography>

        {/* Subtitle */}
        <Typography
          sx={{
            fontFamily: '"DM Sans", sans-serif',
            fontWeight: 300,
            fontSize: { xs: "1rem", md: "1.0625rem" },
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.75)",
            maxWidth: 460,
            mb: 5,
          }}
        >
          Tradizione e sapori nel cuore della Cantinetta del Chianti
        </Typography>

        {/* CTA buttons */}
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <Button
            variant="contained"
            href="/vini"
            sx={{
              backgroundColor: colors.merlot,
              color: "#FFFFFF",
              px: 4,
              py: 1.5,
              "&:hover": { backgroundColor: colors.merlotHover },
            }}
          >
            Scopri la nostra selezione
          </Button>
          <Button
            variant="outlined"
            href="/chi-siamo"
            sx={{
              borderColor: "rgba(255,255,255,0.45)",
              color: "#FFFFFF",
              px: 4,
              py: 1.5,
              "&:hover": {
                borderColor: "#FFFFFF",
                backgroundColor: "transparent",
              },
            }}
          >
            Chi siamo
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
