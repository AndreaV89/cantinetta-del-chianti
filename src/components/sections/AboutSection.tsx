import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { colors } from "@/styles/colors";
import { getTranslations, getLocale } from "next-intl/server";

export default async function AboutSection() {
  const t = await getTranslations("aboutSection");
  const locale = await getLocale();

  const infoItems = [
    {
      label: t("doveSiamo.indirizzo.label"),
      value: t("doveSiamo.indirizzo.value"),
    },
    { label: t("doveSiamo.orari.label"), value: t("doveSiamo.orari.value") },
    {
      label: t("doveSiamo.contatti.label"),
      value: t("doveSiamo.contatti.value"),
    },
  ];

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
            minHeight: { xs: 260, md: 580 },
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
            borderBottom: {
              xs: "1px solid rgba(196, 168, 130, 0.15)",
              md: "none",
            },
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
            {t("chiSiamo.label")}
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
              fontStyle: "italic",
              fontWeight: 400,
              color: "#FFFFFF",
              lineHeight: 1.25,
              mb: 4,
              whiteSpace: "pre-line",
            }}
          >
            {t("chiSiamo.title")}
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
            {t("chiSiamo.body1")}
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
            {t("chiSiamo.body2")}
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
            href={`/${locale}/chi-siamo`}
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
            {t("chiSiamo.cta")}
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
            {t("doveSiamo.label")}
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
              fontStyle: "italic",
              fontWeight: 400,
              color: "#FFFFFF",
              lineHeight: 1.25,
              mb: 5,
            }}
          >
            {t("doveSiamo.title")}
          </Typography>

          {infoItems.map((item) => (
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
            href="https://www.google.com/maps/dir/?api=1&destination=Via+B.+Ricasoli+33,+53013+Gaiole+in+Chianti+SI,+Italia"
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
            {t("doveSiamo.directions")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
