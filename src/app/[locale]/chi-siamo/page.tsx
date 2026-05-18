// Chi siamo page

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaTripadvisor } from "react-icons/fa";
import { colors } from "@/styles/colors";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "chiSiamoPage.metadata",
  });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ContattiPage() {
  const t = await getTranslations("chiSiamoPage");

  const paragrafi = [
    t("storia.p1"),
    t("storia.p2"),
    t("storia.p3"),
    t("storia.p4"),
    t("storia.p5"),
  ];

  const contattiItems = [
    {
      label: t("contatti.telefono"),
      value: "+39 0577 749125",
      href: "tel:+390577749125",
    },
    {
      label: t("contatti.cellulare"),
      value: "+39 333 9687729",
      href: "tel:+393339687729",
    },
    {
      label: t("contatti.email"),
      value: "enoteca@lacantinettadelchianti.it",
      href: "mailto:enoteca@lacantinettadelchianti.it",
    },
  ];

  const orariItems = [
    { label: t("orari.domenica"), value: "10:00 – 19:30" },
    { label: t("orari.lunedi"), value: "10:00 – 19:30" },
    { label: t("orari.martedi"), value: t("orari.chiuso") },
    { label: t("orari.mercoledi"), value: "10:00 – 19:30" },
    { label: t("orari.giovedi"), value: "09:45 – 19:30" },
    { label: t("orari.venerdi"), value: "09:45 – 20:00" },
    { label: t("orari.sabato"), value: "10:00 – 20:00" },
  ];

  const indicazioni = [
    {
      da: t("comeArrivare.firenze.da"),
      testo: t("comeArrivare.firenze.testo"),
    },
    { da: t("comeArrivare.siena.da"), testo: t("comeArrivare.siena.testo") },
    { da: t("comeArrivare.arezzo.da"), testo: t("comeArrivare.arezzo.testo") },
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
              fontWeight: 400,
              fontStyle: "italic",
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

      {/* Chi siamo — storia di Riccardo */}
      <Box
        component="section"
        sx={{ backgroundColor: colors.bg, py: { xs: 8, md: 12 } }}
      >
        <Box
          sx={{
            maxWidth: 1920,
            mx: "auto",
            px: { xs: 3, md: 10 },
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1.5fr" },
            gap: { xs: 6, md: 12 },
            alignItems: "center",
          }}
        >
          {/* Foto Riccardo */}
          <Box
            sx={{
              position: "relative",
              aspectRatio: "3/4",
              borderRadius: "2px",
              overflow: "hidden",
              backgroundColor: "#E8E0D5",
            }}
          >
            <Image
              src="/images/riccardo.jpg"
              alt="Riccardo — La Cantinetta del Chianti"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </Box>

          {/* Storia */}
          <Box>
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
              {t("storia.label")}
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
                fontStyle: "italic",
                color: colors.dark,
                lineHeight: 1.2,
                mb: 4,
                whiteSpace: "pre-line",
              }}
            >
              {t("storia.title")}
            </Typography>

            {paragrafi.map((paragrafo, i) => {
              if (paragrafo.includes("paradiso")) {
                return (
                  <Box
                    key={i}
                    sx={{
                      borderLeft: `2px solid ${colors.beige}`,
                      pl: 3,
                      my: 3,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: '"Apple Chancery", Palatino, serif',
                        fontStyle: "italic",
                        fontSize: "1.35rem",
                        lineHeight: 1.75,
                        color: colors.dark,
                      }}
                    >
                      {paragrafo}
                    </Typography>
                  </Box>
                );
              }

              return (
                <Typography
                  key={i}
                  sx={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontWeight: 300,
                    fontSize: "1.125rem",
                    lineHeight: 1.85,
                    color: colors.textLight,
                    mb: 2.5,
                  }}
                >
                  {paragrafo}
                </Typography>
              );
            })}

            {/* WhatsApp CTA */}
            <Box sx={{ mt: 4 }}>
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
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.5,
                  "&:hover": { backgroundColor: colors.merlotHover },
                  transition: "background-color 0.2s ease",
                }}
              >
                {t("storia.whatsapp")}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* La nostra filosofia */}
      <Box
        component="section"
        sx={{
          backgroundColor: colors.dark,
          py: { xs: 10, md: 14 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Watermark */}
        <Typography
          aria-hidden
          sx={{
            position: "absolute",
            bottom: "-0.1em",
            right: "-0.05em",
            fontFamily: '"Apple Chancery", Palatino, serif',
            fontStyle: "italic",
            fontSize: { xs: "8rem", md: "18rem" },
            lineHeight: 1,
            color: "rgba(255,255,255,0.03)",
            userSelect: "none",
            pointerEvents: "none",
            whiteSpace: "nowrap",
          }}
        >
          {t("filosofia.watermark")}
        </Typography>

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
            component="h2"
            sx={{
              fontFamily: '"Apple Chancery", Palatino, serif',
              fontStyle: "italic",
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: 400,
              color: colors.beige,
              lineHeight: 1.3,
              mb: 6,
            }}
          >
            {t("filosofia.title")}
          </Typography>

          <Box
            sx={{
              width: 48,
              height: "1px",
              backgroundColor: `rgba(196, 168, 130, 0.3)`,
              mx: "auto",
              mb: 6,
            }}
          />

          <Typography
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 300,
              fontSize: { xs: "1rem", md: "1.125rem" },
              lineHeight: 1.9,
              color: "rgba(255,255,255,0.7)",
              mb: 4,
            }}
          >
            {t("filosofia.p1")}
          </Typography>

          <Typography
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 300,
              fontSize: { xs: "1rem", md: "1.125rem" },
              lineHeight: 1.9,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            {t("filosofia.p2")}
          </Typography>
        </Box>
      </Box>

      {/* Info contatti + indicazioni */}
      <Box
        component="section"
        sx={{ backgroundColor: colors.bgAlt, py: { xs: 8, md: 12 } }}
      >
        <Box
          sx={{
            maxWidth: 1920,
            mx: "auto",
            px: { xs: 3, md: 10 },
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
          {/* Riga superiore: Contatti | Orari */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 6, md: 12 },
            }}
          >
            {/* Contatti */}
            <Box>
              <Typography
                component="h2"
                sx={{
                  fontFamily: '"Apple Chancery", Palatino, serif',
                  fontSize: { xs: "1.75rem", md: "2.25rem" },
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: colors.dark,
                  mb: 4,
                }}
              >
                {t("contatti.title")}
              </Typography>

              {contattiItems.map((item) => (
                <Box key={item.label} sx={{ mb: 3 }}>
                  <Typography
                    sx={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: "0.625rem",
                      fontWeight: 500,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: colors.beige,
                      mb: 0.75,
                    }}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    component="a"
                    href={item.href}
                    sx={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontWeight: 300,
                      fontSize: "1rem",
                      lineHeight: 1.75,
                      color: colors.dark,
                      textDecoration: "none",
                      display: "block",
                      "&:hover": { color: colors.merlot },
                      transition: "color 0.2s ease",
                    }}
                  >
                    {item.value}
                  </Typography>
                </Box>
              ))}
              {/* Icone social */}
              <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
                {[
                  {
                    href: "https://www.instagram.com/la.cantinetta_del_chianti/",
                    icon: <FaInstagram size={25} />,
                  },
                  {
                    href: "https://www.facebook.com/lacantinettadelchianti",
                    icon: <FaFacebookF size={25} />,
                  },
                  {
                    href: "https://www.tripadvisor.it/Restaurant_Review-g616196-d2371663-Reviews-La_Cantinetta_del_Chianti-Gaiole_in_Chianti_Tuscany.html",
                    icon: <FaTripadvisor size={25} />,
                  },
                ].map((social, i) => (
                  <Typography
                    key={i}
                    component="a"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: colors.textLight,
                      display: "flex",
                      alignItems: "center",
                      "&:hover": { color: colors.merlot },
                      transition: "color 0.2s ease",
                    }}
                  >
                    {social.icon}
                  </Typography>
                ))}
              </Box>
            </Box>

            {/* Orari */}
            <Box>
              <Typography
                component="h2"
                sx={{
                  fontFamily: '"Apple Chancery", Palatino, serif',
                  fontSize: { xs: "1.75rem", md: "2.25rem" },
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: colors.dark,
                  mb: 4,
                }}
              >
                {t("orari.title")}
              </Typography>

              {orariItems.map((item) => (
                <Box
                  key={item.label}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    py: 2,
                    borderBottom: `1px solid ${colors.border}`,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontWeight: 300,
                      fontSize: "0.9375rem",
                      color: colors.textLight,
                    }}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: '"Apple Chancery", Palatino, serif',
                      fontSize: "1.125rem",
                      color: colors.dark,
                    }}
                  >
                    {item.value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Divisorio */}
          <Box sx={{ height: "1px", backgroundColor: colors.border, my: 2 }} />

          {/* Riga inferiore: Indirizzo + Mappa | Indicazioni stradali */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 6, md: 12 },
            }}
          >
            {/* Indirizzo + Mappa */}
            <Box>
              <Typography
                component="h2"
                sx={{
                  fontFamily: '"Apple Chancery", Palatino, serif',
                  fontSize: { xs: "1.75rem", md: "2.25rem" },
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: colors.dark,
                  mb: 4,
                }}
              >
                {t("doveSiamo.title")}
              </Typography>

              <Box sx={{ mb: 3 }}>
                <Typography
                  sx={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: "0.625rem",
                    fontWeight: 500,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: colors.beige,
                    mb: 0.75,
                  }}
                >
                  {t("doveSiamo.indirizzo")}
                </Typography>
                <Typography
                  component="a"
                  href="https://maps.google.com/?q=La+Cantinetta+del+Chianti+Gaiole"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontWeight: 300,
                    fontSize: "1rem",
                    lineHeight: 1.75,
                    color: colors.dark,
                    textDecoration: "none",
                    display: "block",
                    whiteSpace: "pre-line",
                    "&:hover": { color: colors.merlot },
                    transition: "color 0.2s ease",
                  }}
                >
                  Via B. Ricasoli 33{"\n"}53013 Gaiole in Chianti (SI)
                </Typography>
              </Box>

              <Box
                component="iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1454.5219861959454!2d11.432594559854813!3d43.46827196535392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132bc961d38932bd%3A0x14627c0a7fca0b1a!2sEnoteca%20La%20Cantinetta%20Del%20Chianti%20S.A.S.%20Di%20Azzato%20Riccardo%20Michele!5e0!3m2!1sit!2sit!4v1779113785632!5m2!1sit!2sit"
                sx={{
                  width: "100%",
                  height: 400,
                  border: "none",
                  borderRadius: "2px",
                  mt: 2,
                  filter: "grayscale(20%)",
                  display: "block",
                  lineHeight: 0,
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>

            {/* Indicazioni stradali */}
            <Box>
              <Typography
                component="h2"
                sx={{
                  fontFamily: '"Apple Chancery", Palatino, serif',
                  fontSize: { xs: "1.75rem", md: "2.25rem" },
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: colors.dark,
                  mb: 4,
                }}
              >
                {t("comeArrivare.title")}
              </Typography>

              {indicazioni.map((ind, i) => (
                <Box
                  key={ind.da}
                  sx={{
                    mb: 3,
                    pb: 3,
                    borderBottom: i < 2 ? `1px solid ${colors.border}` : "none",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 1,
                    }}
                  >
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        backgroundColor: colors.beige,
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      sx={{
                        fontFamily: '"Apple Chancery", Palatino, serif',
                        fontSize: "1.125rem",
                        color: colors.dark,
                      }}
                    >
                      {ind.da}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontWeight: 300,
                      fontSize: "0.9375rem",
                      lineHeight: 1.75,
                      color: colors.textLight,
                      pl: "22px",
                    }}
                  >
                    {ind.testo}
                  </Typography>
                </Box>
              ))}

              <Box
                sx={{
                  backgroundColor: "rgba(196, 168, 130, 0.1)",
                  border: "1px solid rgba(196, 168, 130, 0.3)",
                  borderRadius: "2px",
                  p: 3,
                  mt: 2,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: "0.625rem",
                    fontWeight: 500,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: colors.beige,
                    mb: 1,
                  }}
                >
                  {t("comeArrivare.parcheggio")}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontWeight: 300,
                    fontSize: "0.9375rem",
                    lineHeight: 1.75,
                    color: colors.textLight,
                  }}
                >
                  {t("comeArrivare.parcheggioDesc")}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
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
            mb: 4,
          }}
        >
          {t("prefooter.title")}
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
            backgroundColor: colors.merlot,
            textDecoration: "none",
            px: 4,
            py: 1.75,
            borderRadius: "2px",
            display: "inline-flex",
            alignItems: "center",
            gap: 1.5,
            "&:hover": { backgroundColor: colors.merlotHover },
            transition: "background-color 0.2s ease",
          }}
        >
          {t("prefooter.cta")}
        </Typography>
      </Box>
    </>
  );
}
