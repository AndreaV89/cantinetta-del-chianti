import { Box, Typography } from "@mui/material";

const footerLinks = {
  esplora: [
    { label: "I Nostri Vini", href: "/vini" },
    { label: "Prodotti Tipici", href: "/prodotti" },
    { label: "Servizi", href: "/servizi" },
    { label: "Foto", href: "/foto" },
  ],
  info: [
    { label: "Chi Siamo", href: "/#chi-siamo" },
    { label: "Contattaci", href: "/contatti" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "TripAdvisor", href: "https://tripadvisor.com" },
  ],
};

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: "#3A2E28", color: "#FFFFFF" }}
    >
      <Box
        sx={{
          maxWidth: 1920,
          mx: "auto",
          px: { xs: 3, md: 10 },
          pt: { xs: 6, md: 8 },
          pb: 4,
        }}
      >
        {/* Top row */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "2fr 1fr 1fr 1fr" },
            gap: { xs: 5, md: 8 },
            pb: 6,
            borderBottom: "1px solid rgba(201, 168, 108, 0.2)",
          }}
        >
          {/* Brand */}
          <Box>
            <Typography
              sx={{
                fontFamily: '"Apple Chancery", Palatino, serif',
                fontSize: "1.125rem",
                color: "#FFFFFF",
                mb: 2,
              }}
            >
              La Cantinetta del Chianti
            </Typography>
            <Typography
              sx={{
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: 300,
                fontSize: "0.875rem",
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.5)",
                maxWidth: 260,
              }}
            >
              Bottega enogastronomica nel cuore del Chianti Classico, a Gaiole
              in Chianti, Toscana.
            </Typography>
          </Box>

          {/* Esplora */}
          <Box>
            <Typography
              sx={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: "0.625rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#C9A86C",
                mb: 2.5,
              }}
            >
              Esplora
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {footerLinks.esplora.map((link) => (
                <Typography
                  key={link.href}
                  component="a"
                  href={link.href}
                  sx={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontWeight: 300,
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.6)",
                    textDecoration: "none",
                    "&:hover": { color: "#FFFFFF" },
                    transition: "color 0.2s ease",
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Box>
          </Box>

          {/* Info */}
          <Box>
            <Typography
              sx={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: "0.625rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#C9A86C",
                mb: 2.5,
              }}
            >
              Info
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {footerLinks.info.map((link) => (
                <Typography
                  key={link.href}
                  component="a"
                  href={link.href}
                  sx={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontWeight: 300,
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.6)",
                    textDecoration: "none",
                    "&:hover": { color: "#FFFFFF" },
                    transition: "color 0.2s ease",
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Box>
          </Box>

          {/* Social */}
          <Box>
            <Typography
              sx={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: "0.625rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#C9A86C",
                mb: 2.5,
              }}
            >
              Seguici
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {footerLinks.social.map((link) => (
                <Typography
                  key={link.href}
                  component="a"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontWeight: 300,
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.6)",
                    textDecoration: "none",
                    "&:hover": { color: "#FFFFFF" },
                    transition: "color 0.2s ease",
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Bottom row */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { md: "center" },
            gap: 1,
            pt: 3,
          }}
        >
          <Typography
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 300,
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            © {new Date().getFullYear()} La Cantinetta del Chianti · Gaiole in
            Chianti, Siena
          </Typography>
          <Typography
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 300,
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            Design & sviluppo by{" "}
            <Typography
              component="a"
              href="https://andreavannetti.dev"
              target="_blank"
              sx={{
                color: "rgba(201, 168, 108, 0.6)",
                textDecoration: "none",
                fontSize: "inherit",
                fontFamily: "inherit",
                fontWeight: "inherit",
                "&:hover": { color: "#C9A86C" },
              }}
            >
              vannetti.dev
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
