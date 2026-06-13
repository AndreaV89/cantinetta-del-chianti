"use client";

import { useState, useSyncExternalStore } from "react";
import { Box, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Prodotto } from "@/types";
import { colors } from "@/styles/colors";
import Image from "next/image";
import { useTranslations } from "next-intl";

const CATEGORIA_COLORS: Record<string, string> = {
  antipasti_sfiziosita: colors.merlot,
  la_dispensa: colors.beige,
  olio_aceto_condimenti: colors.textLight,
  dolci_confetture: colors.dark,
};

interface ProdottoCardProps {
  prodotto: Prodotto;
  isFeatured?: boolean;
}

export default function ProdottoCard({
  prodotto,
  isFeatured = false,
}: ProdottoCardProps) {
  const [hovered, setHovered] = useState(false);
  const [tapped, setTapped] = useState(false);
  const isMobile = useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia("(hover: none)");
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => window.matchMedia("(hover: none)").matches,
    () => false, // server snapshot
  );
  const hasDescrizione = Boolean(prodotto.acf.descrizione_breve);
  const showDesc = isFeatured && hasDescrizione && (hovered || tapped);
  const hasProduttore = Boolean(prodotto.acf.produttore);
  const accentColor = CATEGORIA_COLORS[prodotto.acf.categoria] || colors.beige;
  const t = useTranslations("categorieLabels");
  const tGrid = useTranslations("prodottiGrid");

  return (
    <Box sx={{ height: { xs: 480, md: 520 } }}>
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        onClick={() => {
          if (isMobile) setTapped((v) => !v);
        }}
        animate={{
          boxShadow:
            "0 8px 32px rgba(0,0,0,0.18), inset 0 0 0 1px rgba(255,255,255,0.1)",
        }}
        whileHover={{
          scale: 1.02,
          boxShadow:
            "0 28px 72px rgba(0,0,0,0.38), inset 0 0 0 1px rgba(255,255,255,0.18)",
        }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        style={{
          position: "relative",
          height: "100%",
          borderRadius: "24px",
          overflow: "hidden",
          cursor: isMobile ? "pointer" : "default",
        }}
      >
        {/* Immagine o fallback */}
        <motion.div
          animate={{ scale: hovered ? 1.07 : 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ position: "absolute", inset: 0 }}
        >
          {prodotto.featuredImage ? (
            <Image
              src={prodotto.featuredImage.url}
              alt={prodotto.featuredImage.alt || prodotto.title}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 600px) 80vw, (max-width: 900px) 33vw, 420px"
            />
          ) : (
            <Box
              sx={{
                width: "100%",
                height: "100%",
                background: `linear-gradient(135deg, ${colors.dark} 0%, ${colors.darkDeep} 100%)`,
              }}
            />
          )}
        </motion.div>

        {/* Gradiente scuro dal basso */}
        <motion.div
          animate={{
            opacity: hovered ? 1 : 0.82,
          }}
          transition={{ duration: 0.35 }}
          style={{
            position: "absolute",
            inset: 0,
            background: hovered
              ? "linear-gradient(to top, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.97) 45%, rgba(0,0,0,0.4) 70%, transparent 100%)"
              : "linear-gradient(to top, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.75) 35%, rgba(0,0,0,0.2) 60%, transparent 100%)",
            zIndex: 1,
            transition: "background 0.35s ease",
          }}
        />

        {/* Testo — ancorato in basso */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            p: { xs: 3, md: 3.5 },
            zIndex: 2,
          }}
        >
          {/*
           * layout=true: quando la descrizione appare/scompare,
           * Framer Motion anima smoothly lo spostamento verso l'alto
           * invece di saltare di scatto.
           */}
          <motion.div
            layout
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Badge categoria */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                px: 1.25,
                py: 0.4,
                mb: 1.25,
                borderRadius: "2px",
                backgroundColor: accentColor,
                border: `1px solid ${accentColor}`,
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: "0.6rem",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                  lineHeight: 1,
                }}
              >
                {t(prodotto.acf.categoria as keyof typeof CATEGORIA_COLORS) ||
                  prodotto.acf.categoria}
              </Typography>
            </Box>

            {/* Titolo */}
            <Typography
              sx={{
                fontFamily: '"Apple Chancery", Palatino, serif',
                fontSize: { xs: "1.5rem", md: "1.75rem" },
                lineHeight: 1.2,
                color: "#FFFFFF",
                mb: hasProduttore ? 1 : 0,
              }}
            >
              {prodotto.title}
            </Typography>

            {/* Produttore */}
            {hasProduttore && (
              <Typography
                sx={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontWeight: 300,
                  fontSize: "0.8125rem",
                  color: "rgba(255,255,255,0.6)",
                  fontStyle: "italic",
                }}
              >
                {prodotto.acf.produttore}
              </Typography>
            )}
          </motion.div>

          {isMobile && isFeatured && hasDescrizione && !tapped && (
            <Typography
              sx={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: "0.6875rem",
                color: "rgba(255,255,255,0.4)",
                mt: 1,
                letterSpacing: "0.06em",
              }}
            >
              {tGrid("scopriDiPiu")}
            </Typography>
          )}

          {/* Descrizione */}
          <AnimatePresence>
            {showDesc && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                style={{ overflow: "hidden" }}
              >
                <Box
                  sx={{
                    mt: 1.5,
                    pt: 1.5,
                    borderTop: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontWeight: 300,
                      fontSize: "0.8125rem",
                      lineHeight: 1.7,
                      color: "rgba(255,255,255,0.72)",
                    }}
                  >
                    {prodotto.acf.descrizione_breve}
                  </Typography>
                </Box>
              </motion.div>
            )}
          </AnimatePresence>
        </Box>
      </motion.div>
    </Box>
  );
}
