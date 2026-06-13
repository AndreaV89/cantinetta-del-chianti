import { Box, Typography } from "@mui/material";
import { FaInstagram, FaFacebookF, FaTripadvisor } from "react-icons/fa";
import { colors } from "@/styles/colors";
import { getTranslations, getLocale } from "next-intl/server";

export default async function Footer() {
  const t = await getTranslations("footer");
  const locale = await getLocale();

  const footerLinks = {
    esplora: [
      { label: t("links.vini"), href: `/${locale}/vini` },
      { label: t("links.prodotti"), href: `/${locale}/prodotti` },
      { label: t("links.servizi"), href: `/${locale}/servizi` },
      { label: t("links.storie"), href: `/${locale}/storie` },
    ],
    info: [
      { label: t("links.chiSiamo"), href: `/${locale}/chi-siamo` },
      {
        label: t("links.contattaci"),
        href: "https://wa.me/39XXXXXXXXXX",
        target: "_blank",
      },
      {
        label: "Privacy Policy",
        href: "https://www.iubenda.com/privacy-policy/89647461",
      },
      {
        label: "Cookie Policy",
        href: "https://www.iubenda.com/privacy-policy/89647461/cookie-policy",
      },
    ],
    social: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/la.cantinetta_del_chianti/",
        icon: <FaInstagram size={16} />,
      },
      {
        label: "Facebook",
        href: "https://www.facebook.com/lacantinettadelchianti",
        icon: <FaFacebookF size={16} />,
      },
      {
        label: "TripAdvisor",
        href: "https://www.tripadvisor.it/Restaurant_Review-g616196-d2371663-Reviews-La_Cantinetta_del_Chianti-Gaiole_in_Chianti_Tuscany.html",
        icon: <FaTripadvisor size={16} />,
      },
    ],
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: colors.dark,
        color: "#FFFFFF",
        borderTop: `2px solid ${colors.beige}`,
      }}
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
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "2fr 1fr 1fr 1fr",
            },
            gap: { xs: 3, md: 8 },
            pb: 6,
            borderBottom: "1px solid rgba(196, 168, 130, 0.2)",
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
              {t("tagline")}
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
                color: colors.beige,
                mb: 2.5,
              }}
            >
              {t("esplora")}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {footerLinks.esplora.map((link) => (
                <Typography
                  key={link.label}
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
                color: colors.beige,
                mb: 2.5,
              }}
            >
              {t("info")}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {footerLinks.info.map((link) => (
                <Typography
                  key={link.label}
                  component="a"
                  href={link.href}
                  target={
                    link.href.startsWith("https://wa.me") ? "_blank" : undefined
                  }
                  rel={
                    link.href.startsWith("https://wa.me")
                      ? "noopener noreferrer"
                      : undefined
                  }
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
                color: colors.beige,
                mb: 2.5,
              }}
            >
              {t("seguici")}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {footerLinks.social.map((social) => (
                <Typography
                  key={social.label}
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontWeight: 300,
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.6)",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    "&:hover": { color: "#FFFFFF" },
                    transition: "color 0.2s ease",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "inherit",
                      flexShrink: 0,
                    }}
                  >
                    {social.icon}
                  </Box>
                  {social.label}
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
            alignItems: { xs: "center", md: "center" },
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
              textAlign: { xs: "center", md: "left" },
            }}
          >
            © {new Date().getFullYear()} La Cantinetta del Chianti ·{" "}
            {t("copyright")}
          </Typography>
          <Typography
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 300,
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.3)",
              textAlign: { xs: "center", md: "right" },
            }}
          >
            {t("credit")}{" "}
            <Typography
              component="a"
              href="https://andreavannetti.dev"
              target="_blank"
              sx={{
                color: "rgba(196, 168, 130, 0.6)",
                textDecoration: "none",
                fontSize: "inherit",
                fontFamily: "inherit",
                fontWeight: "inherit",
                "&:hover": { color: colors.beige },
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
