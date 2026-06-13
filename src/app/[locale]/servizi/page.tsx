// Servizi page

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { colors } from "@/styles/colors";
import { getTranslations, getLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "serviziPage.metadata",
  });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ServiziPage() {
  const t = await getTranslations("serviziPage");
  const locale = await getLocale();

  const servizi = [
    {
      num: "01",
      title: t("servizi.01.title"),
      desc: [t("servizi.01.desc.0")],
      info: t("servizi.01.info"),
      image: "/images/viaggio-nel-vino.jpeg",
      alt: "Degustazione di vini",
    },
    {
      num: "02",
      title: t("servizi.02.title"),
      desc: [
        t("servizi.02.desc.0"),
        t("servizi.02.desc.1"),
        t("servizi.02.desc.2"),
      ],
      info: t("servizi.02.info"),
      image: "/images/arte-della-scelta.jpg",
      alt: "Selezione bottiglie di vino",
    },
    {
      num: "03",
      title: t("servizi.03.title"),
      desc: [t("servizi.03.desc.0")],
      info: t("servizi.03.info"),
      image: "/images/vino-a-casa-vostra.jpg",
      alt: "Tavola apparecchiata per degustazione",
    },
    {
      num: "04",
      title: t("servizi.04.title"),
      desc: [t("servizi.04.desc.0"), t("servizi.04.desc.1")],
      info: t("servizi.04.info"),
      image: "/images/aperitivo-in-chianti-classico.jpg",
      alt: "Tagliere con salumi e formaggi",
    },
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
              maxWidth: 560,
            }}
          >
            {t("hero.subtitle")}
          </Typography>
        </Box>
      </Box>

      {/* Servizi — layout editoriale alternato */}
      <Box component="section" sx={{ backgroundColor: colors.bg }}>
        {servizi.map((servizio, index) => {
          const isEven = index % 2 === 0;
          return (
            <Box
              key={servizio.num}
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                minHeight: { md: 560 },
                direction: { md: isEven ? "ltr" : "rtl" },
              }}
            >
              {/* Foto */}
              <Box
                sx={{
                  position: "relative",
                  minHeight: { xs: 320, md: 560 },
                  overflow: "hidden",
                  direction: "ltr",
                }}
              >
                <Image
                  src={servizio.image}
                  alt={servizio.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Numero decorativo sopra la foto */}
                <Typography
                  aria-hidden
                  sx={{
                    position: "absolute",
                    top: 24,
                    left: 32,
                    fontFamily: '"Apple Chancery", Palatino, serif',
                    fontStyle: "italic",
                    fontSize: "6rem",
                    lineHeight: 1,
                    color: "rgba(255,255,255,0.15)",
                    userSelect: "none",
                  }}
                >
                  {servizio.num}
                </Typography>
              </Box>

              {/* Testo */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  px: { xs: 3, md: 10 },
                  py: { xs: 6, md: 10 },
                  backgroundColor: isEven ? colors.bg : colors.bgAlt,
                  direction: "ltr",
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
                  {servizio.num}
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
                    fontSize: { xs: "2rem", md: "2.75rem" },
                    fontStyle: "italic",
                    fontWeight: 400,
                    color: colors.dark,
                    lineHeight: 1.2,
                    mb: 4,
                  }}
                >
                  {servizio.title}
                </Typography>

                {/* Descrizione */}
                {servizio.desc.map((paragrafo, i) => (
                  <Typography
                    key={i}
                    sx={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontWeight: 300,
                      fontSize: "1rem",
                      lineHeight: 1.85,
                      color: colors.textLight,
                      mb: i < servizio.desc.length - 1 ? 2 : 0,
                    }}
                  >
                    {paragrafo}
                  </Typography>
                ))}

                {/* Info tag */}
                <Typography
                  sx={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontWeight: 300,
                    fontSize: "0.8125rem",
                    color: colors.beige,
                    letterSpacing: "0.05em",
                    mt: 3,
                    pt: 3,
                    borderTop: `1px solid ${colors.border}`,
                  }}
                >
                  {servizio.info}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>

      {/* CTA */}
      <Box
        component="section"
        sx={{
          backgroundColor: colors.darkDeep,
          py: { xs: 8, md: 10 },
          textAlign: "center",
        }}
      >
        <Box sx={{ maxWidth: 1920, mx: "auto", px: { xs: 3, md: 10 } }}>
          <Typography
            sx={{
              fontFamily: '"Apple Chancery", Palatino, serif',
              fontStyle: "italic",
              fontSize: { xs: "1.75rem", md: "2.5rem" },
              color: colors.beige,
              mb: 2,
            }}
          >
            {t("cta.title")}
          </Typography>
          <Typography
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 300,
              fontSize: "1rem",
              color: "rgba(255,255,255,0.6)",
              mb: 5,
            }}
          >
            {t("cta.subtitle")}
          </Typography>
          <Typography
            component="a"
            href={`/${locale}/chi-siamo`}
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 500,
              fontSize: "0.8125rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              backgroundColor: colors.merlot,
              textDecoration: "none",
              px: 5,
              py: 1.75,
              borderRadius: "2px",
              display: "inline-block",
              "&:hover": { backgroundColor: colors.merlotHover },
            }}
          >
            {t("cta.button")}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
