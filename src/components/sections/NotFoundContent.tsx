import { Box, Typography } from "@mui/material";
import { getTranslations } from "next-intl/server";
import { colors } from "@/styles/colors";

interface NotFoundContentProps {
  locale: string;
}

// Contenuto della pagina 404, usato sia dentro [locale] sia nella not-found root
export default async function NotFoundContent({
  locale,
}: NotFoundContentProps) {
  const t = await getTranslations({ locale, namespace: "notFound" });

  return (
    <Box
      component="main"
      sx={{
        backgroundColor: colors.darkDeep,
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 3,
        pt: { xs: 14, md: 18 },
        pb: { xs: 8, md: 12 },
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
        {t("code")}
      </Typography>
      <Box sx={{ width: 32, height: "1px", backgroundColor: colors.beige, mb: 3 }} />
      <Typography
        component="h1"
        sx={{
          fontFamily: '"Apple Chancery", Palatino, serif',
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: { xs: "2.25rem", md: "3.5rem" },
          lineHeight: 1.2,
          color: colors.white,
          mb: 3,
        }}
      >
        {t("title")}
      </Typography>
      <Typography
        sx={{
          fontFamily: '"DM Sans", sans-serif',
          fontWeight: 300,
          fontSize: "0.9375rem",
          lineHeight: 1.75,
          color: "rgba(255,255,255,0.7)",
          maxWidth: 420,
          mb: 5,
        }}
      >
        {t("description")}
      </Typography>
      <Typography
        component="a"
        href={`/${locale}`}
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
        {t("cta")}
      </Typography>
    </Box>
  );
}
