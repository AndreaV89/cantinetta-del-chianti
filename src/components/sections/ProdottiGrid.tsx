"use client";

import { useState } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Prodotto } from "@/types";

const categorie = [
  "Tutti",
  "Salumi",
  "Formaggi",
  "Conserve",
  "Pasta",
  "Olio",
  "Altro",
];

const categoriaColors: Record<string, string> = {
  Salumi: "#6B1A28",
  Formaggi: "#C4A882",
  Conserve: "#5E4444",
  Pasta: "#9E3347",
  Olio: "#3D5A3D",
  Altro: "#1E1414",
};

function ProdottoCard({ prodotto }: { prodotto: Prodotto }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
        border: "1px solid #E5DADA",
        borderRadius: 1,
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 12px 32px rgba(30, 20, 20, 0.1)",
        },
      }}
    >
      {/* Immagine */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          aspectRatio: "4/3",
          backgroundColor: "#F5F0EF",
        }}
      >
        {prodotto.featuredImage ? (
          <Image
            src={prodotto.featuredImage.url}
            alt={prodotto.featuredImage.alt || prodotto.title}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        ) : (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: '"Apple Chancery", Palatino, serif',
                fontStyle: "italic",
                fontSize: "2rem",
                color: "rgba(94, 68, 68, 0.25)",
              }}
            >
              🧀
            </Typography>
          </Box>
        )}
      </Box>

      {/* Info */}
      <Box sx={{ p: 2.5, flex: 1, display: "flex", flexDirection: "column" }}>
        <Typography
          sx={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: "0.625rem",
            fontWeight: 400,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: categoriaColors[prodotto.acf.categoria] || "#5E4444",
            mb: 1,
          }}
        >
          {prodotto.acf.categoria}
        </Typography>

        <Typography
          sx={{
            fontFamily: '"Apple Chancery", Palatino, serif',
            fontSize: "1.25rem",
            color: "#1E1414",
            mb: 0.5,
            flex: 1,
          }}
        >
          {prodotto.title}
        </Typography>

        {prodotto.acf.produttore && (
          <Typography
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 300,
              fontSize: "0.8125rem",
              color: "#5E4444",
              mb: 1.5,
            }}
          >
            {prodotto.acf.produttore}
          </Typography>
        )}

        {prodotto.acf.descrizione_breve && (
          <Typography
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 300,
              fontSize: "0.8125rem",
              lineHeight: 1.7,
              color: "#5E4444",
              mb: 2,
            }}
          >
            {prodotto.acf.descrizione_breve}
          </Typography>
        )}

        {prodotto.acf.prezzo > 0 && (
          <Typography
            sx={{
              fontFamily: '"Apple Chancery", Palatino, serif',
              fontSize: "1.125rem",
              color: "#6B1A28",
              mt: "auto",
            }}
          >
            € {Number(prodotto.acf.prezzo).toFixed(2)}
          </Typography>
        )}
      </Box>
    </Box>
  );
}

interface ProdottiGridProps {
  prodotti: Prodotto[];
}

export default function ProdottiGrid({ prodotti }: ProdottiGridProps) {
  const [filtro, setFiltro] = useState("Tutti");

  const prodottiFiltrati =
    filtro === "Tutti"
      ? prodotti
      : prodotti.filter((p) => p.acf.categoria === filtro);

  const conteggi = categorie.reduce(
    (acc, c) => {
      acc[c] =
        c === "Tutti"
          ? prodotti.length
          : prodotti.filter((p) => p.acf.categoria === c).length;
      return acc;
    },
    {} as Record<string, number>,
  );

  return (
    <Box
      component="section"
      sx={{ backgroundColor: "#FEFCFB", py: { xs: 8, md: 10 } }}
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
            borderBottom: "1px solid #E5DADA",
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
                  borderColor: isActive ? "#6B1A28" : "#E5DADA",
                  backgroundColor: isActive ? "#6B1A28" : "transparent",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    borderColor: "#6B1A28",
                    backgroundColor: isActive
                      ? "#6B1A28"
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
                    color: isActive ? "#FFFFFF" : "#1E1414",
                    userSelect: "none",
                  }}
                >
                  {c}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: "0.625rem",
                    color: isActive ? "rgba(255,255,255,0.7)" : "#5E4444",
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
              color: "#5E4444",
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
