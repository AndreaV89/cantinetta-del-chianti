"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { AppBar, Toolbar, Box, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { colors } from "@/styles/colors";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = useTranslations("nav");
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const navLinks = [
    { label: t("vini"), href: `/${locale}/vini` },
    { label: t("prodotti"), href: `/${locale}/prodotti` },
    { label: t("servizi"), href: `/${locale}/servizi` },
    { label: t("storie"), href: `/${locale}/storie` },
    { label: t("chiSiamo"), href: `/${locale}/chi-siamo` },
  ];

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: scrolled ? "rgba(253, 250, 246, 0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled ? `1px solid ${colors.border}` : "none",
        transition: "all 0.3s ease",
      }}
    >
      <Toolbar
        sx={{
          maxWidth: 1920,
          width: "100%",
          mx: "auto",
          px: { xs: 3, md: 6 },
          height: 72,
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Typography
          component="a"
          href={`/${locale}`}
          sx={{
            fontFamily: '"Apple Chancery", Palatino, serif',
            fontSize: { xs: "0.95rem", sm: "1.125rem" },
            color: scrolled ? colors.dark : "#FFFFFF",
            textDecoration: "none",
            letterSpacing: "0.02em",
            transition: "color 0.3s ease",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: { xs: "calc(100vw - 80px)", md: "none" },
          }}
        >
          La Cantinetta del Chianti
        </Typography>

        {/* Nav links — desktop */}
        <Box
          component="nav"
          sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}
        >
          {navLinks.map((link) => (
            <Typography
              key={link.href}
              component="a"
              href={link.href}
              sx={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: "0.75rem",
                fontWeight: 400,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: scrolled ? colors.textLight : "rgba(255,255,255,0.85)",
                textDecoration: "none",
                transition: "color 0.2s ease",
                "&:hover": {
                  color: scrolled ? colors.dark : "#FFFFFF",
                },
              }}
            >
              {link.label}
            </Typography>
          ))}
        </Box>

        {/* Lang switcher — desktop */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography
            onClick={() => switchLocale("it")}
            component="button"
            sx={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              fontFamily: '"DM Sans", sans-serif',
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              color: scrolled ? colors.textLight : "rgba(255,255,255,0.7)",
              "&:hover": { color: scrolled ? colors.dark : "#FFFFFF" },
            }}
          >
            IT
          </Typography>
          <Typography
            sx={{
              fontSize: "0.75rem",
              color: scrolled ? colors.border : "rgba(255,255,255,0.3)",
            }}
          >
            /
          </Typography>
          <Typography
            onClick={() => switchLocale("en")}
            component="button"
            sx={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              fontFamily: '"DM Sans", sans-serif',
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              color: scrolled ? colors.textLight : "rgba(255,255,255,0.7)",
              "&:hover": { color: scrolled ? colors.dark : "#FFFFFF" },
            }}
          >
            EN
          </Typography>
        </Box>

        {/* Mobile menu button */}
        <IconButton
          onClick={() => setMobileOpen(!mobileOpen)}
          sx={{
            display: { xs: "flex", md: "none" },
            color: scrolled ? colors.dark : "#FFFFFF",
          }}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>

      {/* Menu Mobile */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          flexDirection: "column",
          position: "fixed",
          top: 72,
          left: 0,
          right: 0,
          height: "calc(100dvh - 72px)",
          minHeight: "calc(100svh - 72px)",
          backgroundColor: colors.bg,
          px: 3,
          pt: 2,
          pb: 4,
          overflowY: "auto",
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
          transform: mobileOpen ? "translateY(0)" : "translateY(-8px)",
          transition: "opacity 0.25s ease, transform 0.25s ease",
          zIndex: 1200,
          WebkitOverflowScrolling: "touch",
        }}
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Typography
              key={link.href}
              component="a"
              href={link.href}
              onClick={() => setMobileOpen(false)}
              sx={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: "1rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: isActive ? colors.merlot : colors.dark,
                fontWeight: isActive ? 600 : 400,
                textDecoration: "none",
                py: 2,
                borderBottom: `1px solid ${colors.border}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                "&::after": isActive
                  ? {
                      content: '"·"',
                      color: colors.merlot,
                      fontSize: "1.25rem",
                    }
                  : {},
              }}
            >
              {link.label}
            </Typography>
          );
        })}

        {/* Lang switcher mobile */}
        <Box sx={{ display: "flex", gap: 0, pt: 2, pb: 1 }}>
          {["it", "en"].map((lang, i) => (
            <Box key={lang} sx={{ display: "flex", alignItems: "center" }}>
              {i > 0 && (
                <Typography
                  sx={{ fontSize: "0.75rem", color: colors.border, px: 1 }}
                >
                  /
                </Typography>
              )}
              <Typography
                component="button"
                onClick={() => {
                  switchLocale(lang);
                  setMobileOpen(false);
                }}
                sx={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "8px 4px",
                  fontSize: "0.8rem",
                  letterSpacing: "0.12em",
                  color: locale === lang ? colors.merlot : colors.textLight,
                  fontWeight: locale === lang ? 600 : 400,
                }}
              >
                {lang.toUpperCase()}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </AppBar>
  );
}
