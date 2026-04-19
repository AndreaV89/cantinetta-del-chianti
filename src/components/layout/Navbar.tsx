"use client";

import { useState, useEffect } from "react";
import { AppBar, Toolbar, Box, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navLinks = [
  { label: "Vini", href: "/vini" },
  { label: "Prodotti", href: "/prodotti" },
  { label: "Servizi", href: "/servizi" },
  { label: "Foto", href: "/foto" },
  { label: "Contatti", href: "/contatti" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: scrolled ? "rgba(253, 250, 246, 0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled ? "1px solid #E5DADA" : "none",
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
          href="/"
          sx={{
            fontFamily: '"Apple Chancery", Palatino, serif',
            fontSize: "1.125rem",
            color: scrolled ? "#1E1414" : "#FFFFFF",
            textDecoration: "none",
            letterSpacing: "0.02em",
            transition: "color 0.3s ease",
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
                color: scrolled ? "#5E4444" : "rgba(255,255,255,0.85)",
                textDecoration: "none",
                transition: "color 0.2s ease",
                "&:hover": {
                  color: scrolled ? "#1E1414" : "#FFFFFF",
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
            component="a"
            href="/it"
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              color: scrolled ? "#5E4444" : "rgba(255,255,255,0.7)",
              textDecoration: "none",
              "&:hover": { color: scrolled ? "#1E1414" : "#FFFFFF" },
            }}
          >
            IT
          </Typography>
          <Typography
            sx={{
              fontSize: "0.75rem",
              color: scrolled ? "#E5DADA" : "rgba(255,255,255,0.3)",
            }}
          >
            /
          </Typography>
          <Typography
            component="a"
            href="/en"
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              color: scrolled ? "#5E4444" : "rgba(255,255,255,0.7)",
              textDecoration: "none",
              "&:hover": { color: scrolled ? "#1E1414" : "#FFFFFF" },
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
            color: scrolled ? "#1E1414" : "#FFFFFF",
          }}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>

      {/* Mobile menu */}
      {mobileOpen && (
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            flexDirection: "column",
            backgroundColor: "#FEFCFB",
            borderTop: "1px solid #E5DADA",
            px: 3,
            py: 2,
            gap: 1,
          }}
        >
          {navLinks.map((link) => (
            <Typography
              key={link.href}
              component="a"
              href={link.href}
              sx={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: "0.875rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#1E1414",
                textDecoration: "none",
                py: 1.5,
                borderBottom: "1px solid #E5DADA",
              }}
            >
              {link.label}
            </Typography>
          ))}
          <Box sx={{ display: "flex", gap: 2, pt: 1 }}>
            <Typography
              component="a"
              href="/it"
              sx={{ fontSize: "0.75rem", color: "#5E4444" }}
            >
              IT
            </Typography>
            <Typography
              component="a"
              href="/en"
              sx={{ fontSize: "0.75rem", color: "#5E4444" }}
            >
              EN
            </Typography>
          </Box>
        </Box>
      )}
    </AppBar>
  );
}
