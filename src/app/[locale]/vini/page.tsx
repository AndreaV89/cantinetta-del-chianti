// Pagina Vini

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { getVini } from "@/lib/wordpress";
import ViniGrid from "@/components/sections/ViniGrid";
import { colors } from "@/styles/colors";
import CantineSection from "@/components/sections/CantineSection";
import { getCantine } from "@/lib/wordpress";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "viniPage.metadata" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ViniPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("viniPage");
  const [vini, cantine] = await Promise.all([getVini(locale), getCantine()]);
  const viniNonInEvidenza = vini.filter((v) => !v.acf.in_evidenza);

  const stats = [
    { num: t("numeri.etichette.num"), label: t("numeri.etichette.label") },
    { num: t("numeri.regioni.num"), label: t("numeri.regioni.label") },
    { num: t("numeri.paesi.num"), label: t("numeri.paesi.label") },
  ];

  return (
    <>
      {/* Hero */}
      <Box
        component="section"
        sx={{
          backgroundColor: colors.dark,
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
            fontSize: { xs: "5rem", md: "16rem" },
            lineHeight: 1,
            color: "rgba(255,255,255,0.03)",
            userSelect: "none",
            pointerEvents: "none",
            whiteSpace: "nowrap",
          }}
        >
          {t("hero.watermark")}
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
              color: colors.beige,
              mb: 1,
            }}
          >
            {t("hero.label")}
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
            component="h1"
            sx={{
              fontFamily: '"Apple Chancery", Palatino, serif',
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontStyle: "italic",
              fontWeight: 400,
              color: "#FFFFFF",
              lineHeight: 1.15,
              mb: 3,
              maxWidth: 700,
            }}
          >
            {t("hero.title")}
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
            {t("hero.subtitle")}
          </Typography>
        </Box>
      </Box>

      {/* Sezione numeri */}
      <Box
        component="section"
        sx={{
          backgroundColor: colors.bgAlt,
          py: { xs: 8, md: 10 },
          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        <Box
          sx={{
            maxWidth: 1920,
            mx: "auto",
            px: { xs: 3, md: 20 },
            display: "grid",
            gridTemplateColumns: { xs: "repeat(3, 1fr)", md: "repeat(3, 1fr)" },
            gap: { xs: 2, md: 6 },
          }}
        >
          {stats.map((stat) => (
            <Box key={stat.num} sx={{ textAlign: "center" }}>
              <Typography
                sx={{
                  fontFamily: '"Apple Chancery", Palatino, serif',
                  fontStyle: "italic",
                  fontSize: { xs: "2.25rem", md: "4.5rem" },
                  lineHeight: 1,
                  color: colors.merlot,
                  mb: 1,
                }}
              >
                {stat.num}
              </Typography>
              <Typography
                sx={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontWeight: 300,
                  fontSize: { xs: "0.8125rem", md: "0.9375rem" },
                  letterSpacing: "0.08em",
                  color: colors.textLight,
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Sezione testo con foto di sfondo */}
      <Box
        component="section"
        sx={{
          position: "relative",
          overflow: "hidden",
          py: { xs: 12, md: 18 },
        }}
      >
        {/* Foto sfondo */}
        <Image
          src="/images/vigna-sfondo-testo.jpeg"
          alt="Vigneti al tramonto"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="100vw"
        />
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(26, 8, 16, 0.45)",
          }}
        />

        <Box
          sx={{
            maxWidth: 860,
            mx: "auto",
            px: { xs: 3, md: 6 },
            position: "relative",
            zIndex: 1,
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 300,
              fontSize: { xs: "1rem", md: "1.3rem" },
              lineHeight: { xs: 1.75, md: 1.9 },
              color: "rgba(255,255,255,0.75)",
              mb: { xs: 2, md: 3 },
            }}
          >
            {t("testo.body1")}
          </Typography>

          <Typography
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 300,
              fontSize: { xs: "1rem", md: "1.3rem" },
              lineHeight: { xs: 1.75, md: 1.9 },
              color: "rgba(255,255,255,0.75)",
              mb: { xs: 2, md: 3 },
            }}
          >
            {t("testo.body2")}
          </Typography>

          <Box
            sx={{
              width: 48,
              height: "1px",
              backgroundColor: `rgba(196, 168, 130, 0.4)`,
              mx: "auto",
              mb: 6,
            }}
          />

          <Typography
            sx={{
              fontFamily: '"Apple Chancery", Palatino, serif',
              fontStyle: "italic",
              fontSize: { xs: "1.5rem", md: "2.25rem" },
              color: colors.beige,
              lineHeight: 1.4,
            }}
          >
            {t("testo.quote")}
          </Typography>
        </Box>
      </Box>

      {/* Sezione cantine */}
      <CantineSection cantine={cantine} />

      {/* Griglia vini con filtri */}
      <ViniGrid vini={viniNonInEvidenza} />

      {/* Pre-footer */}
      <Box
        sx={{
          backgroundColor: colors.darkDeep,
          py: { xs: 6, md: 8 },
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Apple Chancery", Palatino, serif',
            fontStyle: "italic",
            fontSize: { xs: "1.5rem", md: "2rem" },
            color: colors.beige,
            mb: 4,
          }}
        >
          {t("prefooter.title")}
        </Typography>
        <Typography
          component="a"
          href="https://wa.me/393339687729"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            fontFamily: '"DM Sans", sans-serif',
            fontWeight: 500,
            fontSize: "0.8125rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#FFFFFF",
            backgroundColor: colors.merlot,
            textDecoration: "none",
            px: 4,
            py: 1.75,
            borderRadius: "2px",
            display: "inline-block",
            "&:hover": { backgroundColor: colors.merlotHover },
          }}
        >
          {t("prefooter.cta")}
        </Typography>
      </Box>
    </>
  );
}
