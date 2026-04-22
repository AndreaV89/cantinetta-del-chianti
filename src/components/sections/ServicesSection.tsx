import { Box, Typography } from "@mui/material";
import { colors } from "@/styles/colors";

const servizi = [
  {
    icon: "◆",
    title: "Degustazioni\nGuidate",
    desc: "Percorsi di degustazione per scoprire il meglio del Chianti Classico, con abbinamenti curati.",
  },
  {
    icon: "◇",
    title: "Selezioni\nPersonalizzate",
    desc: "Costruiamo insieme una selezione di vini su misura — per un regalo, una cena speciale o la tua cantina.",
  },
  {
    icon: "○",
    title: "Degustazioni\na Domicilio",
    desc: "Portiamo l'esperienza a casa tua. Selezione di vini, tagliere e guida alla degustazione.",
  },
  {
    icon: "◈",
    title: "Aperitivi\ncon Taglieri",
    desc: "Un tavolo fuori, salumi e formaggi del territorio e un calice del Chianti al tramonto.",
  },
];

export default function ServicesSection() {
  return (
    <Box
      component="section"
      sx={{ backgroundColor: colors.bgAlt, py: { xs: 8, md: 12 } }}
    >
      <Box
        sx={{
          maxWidth: 1920,
          mx: "auto",
          px: { xs: 3, md: 10 },
        }}
      >
        {/* Header */}
        <Box sx={{ mb: 8 }}>
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
              height: 1,
              backgroundColor: colors.beige,
              mb: 2,
            }}
          />
          <Typography
            component="h2"
            sx={{
              fontFamily: '"Apple Chancery", Palatino, serif',
              fontSize: { xs: "2rem", md: "2.75rem" },
              fontWeight: 400,
              color: colors.dark,
            }}
          >
            I nostri servizi
          </Typography>
        </Box>

        {/* Cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              lg: "repeat(4, 1fr)",
            },
            gap: 3,
          }}
        >
          {servizi.map((servizio) => (
            <Box
              key={servizio.title}
              sx={{
                backgroundColor: "rgba(255,255,255,0.7)",
                border: `1px solid ${colors.border}`,
                borderRadius: 1,
                p: 4,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 12px 32px rgba(74, 14, 30, 0.08)",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.375rem",
                  color: colors.beige,
                  mb: 2.5,
                  lineHeight: 1,
                }}
              >
                {servizio.icon}
              </Typography>

              <Typography
                sx={{
                  fontFamily: '"Apple Chancery", Palatino, serif',
                  fontSize: "1.25rem",
                  color: colors.dark,
                  lineHeight: 1.35,
                  mb: 2,
                  whiteSpace: "pre-line",
                }}
              >
                {servizio.title}
              </Typography>

              <Typography
                sx={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontWeight: 300,
                  fontSize: "0.875rem",
                  lineHeight: 1.75,
                  color: colors.textLight,
                }}
              >
                {servizio.desc}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
