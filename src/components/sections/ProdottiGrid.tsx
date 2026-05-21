"use client";

import { useState, useRef, useEffect } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Prodotto } from "@/types";
import { colors } from "@/styles/colors";
import ProdottoCard from "@/components/ui/ProdottoCard";
import { useTranslations } from "next-intl";

const CATEGORIA_ORDER = [
  "antipasti_sfiziosita",
  "la_dispensa",
  "olio_aceto_condimenti",
  "dolci_confetture",
];

const CARD_GAP = 28;
const SIDE_SCALE = 0.87;
const SIDE_OPACITY = 0.55;
const SPRING = { type: "spring" as const, stiffness: 280, damping: 30 };

interface ProdottiGridProps {
  prodotti: Prodotto[];
}

export default function ProdottiGrid({ prodotti }: ProdottiGridProps) {
  const t = useTranslations("prodottiGrid");
  const tCat = useTranslations("categorieLabels");
  const [filtro, setFiltro] = useState(t("tutti"));
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardW, setCardW] = useState(360);
  const [visibleN, setVisibleN] = useState(3);
  const measureRef = useRef<HTMLDivElement>(null);

  const categorieMap: Record<string, string> = {
    [tCat("antipasti_sfiziosita")]: "antipasti_sfiziosita",
    [tCat("la_dispensa")]: "la_dispensa",
    [tCat("olio_aceto_condimenti")]: "olio_aceto_condimenti",
    [tCat("dolci_confetture")]: "dolci_confetture",
  };

  const categorie = [
    t("tutti"),
    tCat("antipasti_sfiziosita"),
    tCat("la_dispensa"),
    tCat("olio_aceto_condimenti"),
    tCat("dolci_confetture"),
  ];

  const prodottiFiltrati = (() => {
    const lista =
      filtro === t("tutti")
        ? [...prodotti].sort(
            (a, b) =>
              CATEGORIA_ORDER.indexOf(a.acf.categoria) -
              CATEGORIA_ORDER.indexOf(b.acf.categoria),
          )
        : prodotti.filter((p) => p.acf.categoria === categorieMap[filtro]);
    return lista;
  })();

  const conteggi = categorie.reduce(
    (acc, c) => {
      const chiave = categorieMap[c];
      acc[c] =
        c === t("tutti")
          ? prodotti.length
          : prodotti.filter((p) => p.acf.categoria?.toLowerCase() === chiave)
              .length;
      return acc;
    },
    {} as Record<string, number>,
  );

  useEffect(() => {
    const update = () => {
      const el = measureRef.current;
      if (!el) return;
      const w = el.offsetWidth;
      if (w < 640) {
        setCardW(Math.min(w - 24, 420));
        setVisibleN(1);
      } else {
        setCardW(Math.min(400, Math.floor((w - 2 * CARD_GAP) / 3)));
        setVisibleN(3);
      }
    };
    update();
    const ro = new ResizeObserver(update);
    if (measureRef.current) ro.observe(measureRef.current);
    return () => ro.disconnect();
  }, []);

  const maxIndex = Math.max(0, prodottiFiltrati.length - 1);
  const canPrev = activeIndex > 0;
  const canNext = activeIndex < maxIndex;

  const handleFiltroChange = (c: string) => {
    setFiltro(c);
    setActiveIndex(0);
  };

  const step = cardW + CARD_GAP;
  const containerW = visibleN * cardW + (visibleN - 1) * CARD_GAP;
  const trackX = step * ((visibleN - 1) / 2 - activeIndex);

  return (
    <Box
      component="section"
      sx={{ backgroundColor: colors.bg, py: { xs: 8, md: 10 } }}
    >
      <Box sx={{ maxWidth: 1920, mx: "auto" }}>
        {/* Filtri */}
        <Box sx={{ px: { xs: 3, md: 10 }, mb: 6 }}>
          <Box ref={measureRef} sx={{ width: "100%", height: 0 }} />

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1.5,
              pb: 4,
              borderBottom: `1px solid ${colors.border}`,
            }}
          >
            {categorie.map((c) => {
              const count = conteggi[c];
              if (count === 0 && c !== t("tutti")) return null;
              const isActive = filtro === c;
              return (
                <Box
                  key={c}
                  onClick={() => handleFiltroChange(c)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    px: 2.5,
                    py: 1,
                    borderRadius: "2px",
                    border: "1px solid",
                    borderColor: isActive ? colors.merlot : colors.border,
                    backgroundColor: isActive ? colors.merlot : "transparent",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      borderColor: colors.merlot,
                      backgroundColor: isActive
                        ? colors.merlot
                        : "rgba(125, 26, 44, 0.05)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: "0.75rem",
                      fontWeight: isActive ? 500 : 400,
                      letterSpacing: "0.08em",
                      color: isActive ? "#FFFFFF" : colors.dark,
                      userSelect: "none",
                    }}
                  >
                    {c}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: "0.625rem",
                      color: isActive
                        ? "rgba(255,255,255,0.7)"
                        : colors.textLight,
                      userSelect: "none",
                    }}
                  >
                    {count}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>

        {/* Conteggio */}
        <Box
          sx={{
            px: { xs: 3, md: 10 },
            mb: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 300,
              fontSize: "0.875rem",
              color: colors.textLight,
            }}
          >
            {prodottiFiltrati.length}{" "}
            {prodottiFiltrati.length === 1 ? t("prodotto") : t("prodotti")}
            {filtro !== t("tutti") ? ` · ${filtro}` : ""}
          </Typography>

          <Typography
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: "0.75rem",
              letterSpacing: "0.06em",
              color: colors.textLight,
            }}
          >
            {activeIndex + 1} / {prodottiFiltrati.length}
          </Typography>
        </Box>

        {/* Carosello */}
        {prodottiFiltrati.length === 0 ? (
          <Box sx={{ py: 10, textAlign: "center", px: { xs: 3, md: 10 } }}>
            <Typography
              sx={{
                fontFamily: '"Apple Chancery", Palatino, serif',
                fontStyle: "italic",
                fontSize: "1.25rem",
                color: "rgba(94, 68, 68, 0.4)",
              }}
            >
              {t("empty")}
            </Typography>
          </Box>
        ) : (
          <Box>
            <Box sx={{ position: "relative" }}>
              {/* Freccia sinistra */}
              <IconButton
                onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
                disabled={!canPrev}
                sx={{
                  position: "absolute",
                  left: { xs: 8, md: 32 },
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 10,
                  width: { xs: 40, md: 52 },
                  height: { xs: 40, md: 52 },
                  backgroundColor: canPrev ? colors.merlot : "rgba(0,0,0,0.15)",
                  border: "none",
                  borderRadius: "4px",
                  color: "#FFFFFF",
                  opacity: canPrev ? 1 : 0.3,
                  transition: "all 0.2s ease",
                  "& svg": { fontSize: "1.5rem" },
                  "&:hover:not(:disabled)": {
                    backgroundColor: colors.merlotHover,
                  },
                }}
              >
                <ChevronLeftIcon />
              </IconButton>

              {/* Freccia destra */}
              <IconButton
                onClick={() => setActiveIndex((i) => Math.min(maxIndex, i + 1))}
                disabled={!canNext}
                sx={{
                  position: "absolute",
                  right: { xs: 8, md: 32 },
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 10,
                  width: { xs: 40, md: 52 },
                  height: { xs: 40, md: 52 },
                  backgroundColor: canNext ? colors.merlot : "rgba(0,0,0,0.15)",
                  border: "none",
                  borderRadius: "4px",
                  color: "#FFFFFF",
                  opacity: canNext ? 1 : 0.3,
                  transition: "all 0.2s ease",
                  "& svg": { fontSize: "1.5rem" },
                  "&:hover:not(:disabled)": {
                    backgroundColor: colors.merlotHover,
                  },
                }}
              >
                <ChevronRightIcon />
              </IconButton>
              <Box
                sx={{
                  overflowX: "clip",
                  overflowY: "visible",
                  py: 2,
                }}
              >
                <Box
                  sx={{
                    width: containerW,
                    mx: "auto",
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={filtro}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <motion.div
                        animate={{ x: trackX }}
                        transition={SPRING}
                        style={{ display: "flex", gap: CARD_GAP }}
                      >
                        {prodottiFiltrati.map((prodotto, i) => {
                          const pos = i - activeIndex;
                          const isVisible =
                            Math.abs(pos) <= Math.floor(visibleN / 2) + 1;
                          return (
                            <motion.div
                              key={prodotto.id}
                              animate={{
                                scale: pos === 0 ? 1 : SIDE_SCALE,
                                opacity: isVisible
                                  ? pos === 0
                                    ? 1
                                    : SIDE_OPACITY
                                  : 0,
                              }}
                              transition={SPRING}
                              style={{ flexShrink: 0, width: cardW }}
                            >
                              <ProdottoCard
                                prodotto={prodotto}
                                isFeatured={i === activeIndex}
                              />
                            </motion.div>
                          );
                        })}
                      </motion.div>
                    </motion.div>
                  </AnimatePresence>
                </Box>
              </Box>
            </Box>

            {/* Dot indicators */}
            {prodottiFiltrati.length > 1 && (
              <Box
                sx={{
                  mt: 4,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 0.75,
                }}
              >
                {prodottiFiltrati.map((_, i) => (
                  <Box
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    sx={{
                      width: i === activeIndex ? 22 : 6,
                      height: 4,
                      borderRadius: "2px",
                      backgroundColor:
                        i === activeIndex ? colors.merlot : colors.border,
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      flexShrink: 0,
                    }}
                  />
                ))}
              </Box>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
}
