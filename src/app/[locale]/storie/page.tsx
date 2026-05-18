// Storie page

import { Box, Typography } from "@mui/material";
import { getAlbum } from "@/lib/wordpress";
import AlbumStrip from "@/components/sections/AlbumStrip";
import { colors } from "@/styles/colors";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "storiePage.metadata" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function FotoPage({}: {
  params: Promise<{ locale: string }>;
}) {
  const t = await getTranslations("storiePage");
  const album = await getAlbum();

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
            fontSize: { xs: "8rem", md: "16rem" },
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

      {/* Sezione Gallo Nero */}
      <Box component="section" sx={{ backgroundColor: colors.bg }}>
        <Box
          sx={{
            maxWidth: 1920,
            mx: "auto",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "2fr 3fr" },
            minHeight: { md: 560 },
          }}
        >
          {/* Foto sinistra */}
          <Box
            sx={{
              position: "relative",
              minHeight: { xs: 400, md: 700 },
              overflow: "hidden",
            }}
          >
            <Image
              src="/images/gallo-nero.jpeg"
              alt="Il Gallo Nero — simbolo del Chianti Classico"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </Box>

          {/* Testo destra */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              px: { xs: 3, md: 10 },
              py: { xs: 6, md: 10 },
              backgroundColor: colors.bgAlt,
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
              {t("galloNero.label")}
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
                fontWeight: 400,
                color: colors.text,
                lineHeight: 1.2,
                mb: 4,
                whiteSpace: "pre-line",
              }}
            >
              {t("galloNero.title")}
            </Typography>

            {[t("galloNero.p1"), t("galloNero.p2"), t("galloNero.p3")].map(
              (paragrafo, i) => (
                <Typography
                  key={i}
                  sx={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontWeight: 300,
                    fontSize: "1rem",
                    lineHeight: 1.85,
                    color: colors.textLight,
                    mb: i < 2 ? 2.5 : 0,
                  }}
                >
                  {paragrafo}
                </Typography>
              ),
            )}
          </Box>
        </Box>
      </Box>

      {/* Sezione Il Libro */}
      <Box component="section" sx={{ backgroundColor: colors.dark }}>
        <Box
          sx={{
            maxWidth: 1920,
            mx: "auto",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            minHeight: { md: 560 },
          }}
        >
          {/* Testo sinistra */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              px: { xs: 3, md: 10 },
              py: { xs: 6, md: 10 },
              order: { xs: 2, md: 1 },
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
              {t("libro.label")}
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
                fontWeight: 400,
                color: "#FFFFFF",
                lineHeight: 1.2,
                mb: 4,
                whiteSpace: "pre-line",
              }}
            >
              {t("libro.title")}
            </Typography>

            {[t("libro.p1"), t("libro.p2"), t("libro.p3")].map(
              (paragrafo, i) => (
                <Typography
                  key={i}
                  sx={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontWeight: 300,
                    fontSize: "1rem",
                    lineHeight: 1.85,
                    color: "rgba(255,255,255,0.7)",
                    mb: i < 2 ? 2.5 : 0,
                  }}
                >
                  {paragrafo}
                </Typography>
              ),
            )}

            {/* CTA libro */}
            <Typography
              component="a"
              href="https://www.20amici40ricette.com/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                mt: 4,
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: 500,
                fontSize: "0.8125rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: colors.beige,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                borderBottom: `1px solid rgba(196, 168, 130, 0.4)`,
                pb: 0.5,
                "&:hover": {
                  borderBottomColor: colors.beige,
                },
                transition: "border-color 0.2s ease",
              }}
            >
              {t("libro.cta")}
            </Typography>
          </Box>

          {/* Foto destra */}
          <Box
            sx={{
              position: "relative",
              minHeight: { xs: 400, md: 560 },
              overflow: "hidden",
              order: { xs: 1, md: 2 },
              backgroundColor: colors.dark,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src="/images/riccardo-libro.jpeg"
              alt="Riccardo — 20 amici 40 ricette"
              fill
              style={{ objectFit: "contain", objectPosition: "center" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </Box>
        </Box>
      </Box>

      {/* Album */}
      <Box sx={{ backgroundColor: colors.bg }}>
        {/* Titolo galleria */}
        <Box
          sx={{
            maxWidth: 1920,
            mx: "auto",
            px: { xs: 3, md: 10 },
            py: { xs: 4, md: 5 },
            borderTop: `1px solid ${colors.border}`,
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
            {t("galleria.label")}
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
              fontWeight: 400,
              color: colors.text,
            }}
          >
            {t("galleria.title")}
          </Typography>
        </Box>
        {album.length === 0 ? (
          <Box sx={{ py: 12, textAlign: "center" }}>
            <Typography
              sx={{
                fontFamily: '"Apple Chancery", Palatino, serif',
                fontStyle: "italic",
                fontSize: "1.5rem",
                color: "rgba(115, 97, 86, 0.5)",
              }}
            >
              {t("galleria.empty")}
            </Typography>
          </Box>
        ) : (
          album.map((a, index) => (
            <AlbumStrip key={a.id} album={a} index={index} />
          ))
        )}
      </Box>

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
          }}
        >
          {t("prefooter")}
        </Typography>
      </Box>
    </>
  );
}
