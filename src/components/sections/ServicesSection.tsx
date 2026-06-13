import { Box, Typography } from "@mui/material";
import { colors } from "@/styles/colors";
import { getTranslations, getLocale } from "next-intl/server";

export default async function ServicesSection() {
  const t = await getTranslations("servicesSection");
  const locale = await getLocale();

  const servizi = [
    {
      icon: "◆",
      title: t("items.degustazioni.title"),
      desc: t("items.degustazioni.desc"),
    },
    {
      icon: "◇",
      title: t("items.selezioni.title"),
      desc: t("items.selezioni.desc"),
    },
    {
      icon: "○",
      title: t("items.domicilio.title"),
      desc: t("items.domicilio.desc"),
    },
    {
      icon: "◈",
      title: t("items.aperitivi.title"),
      desc: t("items.aperitivi.desc"),
    },
  ];

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
        <Box sx={{ mb: { xs: 5, md: 8 } }}>
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
            {t("label")}
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
              fontStyle: "italic",
              fontWeight: 400,
              color: colors.dark,
            }}
          >
            {t("title")}
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
              key={servizio.icon}
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

        {/* CTA servizi */}
        <Box
          sx={{
            mt: 6,
            display: "flex",
            alignItems: "center",
            gap: 2,
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <Typography
            component="a"
            href={`/${locale}/servizi`}
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 500,
              fontSize: "0.8125rem",
              letterSpacing: "0.05em",
              color: colors.merlot,
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            {t("cta")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
