"use client";

import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Prodotto } from "@/types";
import { colors } from "@/styles/colors";
import ProdottoCard from "@/components/ui/ProdottoCard";

const categorie = [
  "Tutti",
  "Salumi",
  "Formaggi",
  "Conserve",
  "Pasta",
  "Olio",
  "Altro",
];

interface ProdottiGridProps {
  prodotti: Prodotto[];
}

export default function ProdottiGrid({ prodotti }: ProdottiGridProps) {
  const [filtro, setFiltro] = useState("Tutti");

  const prodottiFiltrati =
    filtro === "Tutti"
      ? prodotti
      : prodotti.filter(
          (p) => p.acf.categoria?.toLowerCase() === filtro.toLowerCase(),
        );

  const conteggi = categorie.reduce(
    (acc, c) => {
      acc[c] =
        c === "Tutti"
          ? prodotti.length
          : prodotti.filter(
              (p) => p.acf.categoria?.toLowerCase() === c.toLowerCase(),
            ).length;
      return acc;
    },
    {} as Record<string, number>,
  );

  return (
    <Box
      component="section"
      sx={{ backgroundColor: colors.bg, py: { xs: 8, md: 10 } }}
    >
      <Box sx={{ maxWidth: 1920, mx: "auto", px: { xs: 3, md: 10 } }}>
        {/* Filtri */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1.5,
            mb: 6,
            pb: 4,
            borderBottom: `1px solid ${colors.border}`,
          }}
        >
          {categorie.map((c) => {
            const count = conteggi[c];
            if (count === 0 && c !== "Tutti") return null;
            const isActive = filtro === c;
            return (
              <Box
                key={c}
                onClick={() => setFiltro(c)}
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
                      : "rgba(107, 26, 40, 0.05)",
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

        {/* Risultati */}
        <Box sx={{ mb: 4 }}>
          <Typography
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 300,
              fontSize: "0.875rem",
              color: colors.textLight,
            }}
          >
            {prodottiFiltrati.length}{" "}
            {prodottiFiltrati.length === 1 ? "prodotto" : "prodotti"}
            {filtro !== "Tutti" ? ` · ${filtro}` : ""}
          </Typography>
        </Box>

        {/* Griglia */}
        {prodottiFiltrati.length === 0 ? (
          <Box sx={{ py: 10, textAlign: "center" }}>
            <Typography
              sx={{
                fontFamily: '"Apple Chancery", Palatino, serif',
                fontStyle: "italic",
                fontSize: "1.25rem",
                color: "rgba(94, 68, 68, 0.4)",
              }}
            >
              Nessun prodotto in questa categoria
            </Typography>
          </Box>
        ) : (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr 1fr",
                sm: "repeat(3, 1fr)",
                md: "repeat(4, 1fr)",
                lg: "repeat(5, 1fr)",
              },
              gap: 3,
            }}
          >
            {prodottiFiltrati.map((prodotto) => (
              <ProdottoCard key={prodotto.id} prodotto={prodotto} />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}
