"use client";

import { useState } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Vino } from "@/types";

const tipologie = [
  "Tutti",
  "Rosso",
  "Bianco",
  "Rosato",
  "Bollicine",
  "Distillato",
];

const tipologiaColors: Record<string, string> = {
  Rosso: "#7D1A2C",
  Bianco: "#C4A882",
  Rosato: "#C4768A",
  Bollicine: "#5E4444",
  Distillato: "#4A0E1E",
};

function VinoCard({ vino }: { vino: Vino }) {
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
          boxShadow: "0 12px 32px rgba(74, 14, 30, 0.1)",
        },
      }}
    >
      {/* Immagine */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          aspectRatio: "3/4",
          backgroundColor: "#F5F0EF",
        }}
      >
        {vino.featuredImage ? (
          <Image
            src={vino.featuredImage.url}
            alt={vino.featuredImage.alt || vino.title}
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
              🍷
            </Typography>
          </Box>
        )}
      </Box>

      {/* Info */}
      <Box sx={{ p: 2.5, flex: 1, display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 1,
          }}
        >
          <Typography
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: "0.625rem",
              fontWeight: 400,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: tipologiaColors[vino.acf.tipologia] || "#5E4444",
            }}
          >
            {vino.acf.tipologia}
          </Typography>
          {vino.acf.annata > 0 && (
            <Typography
              sx={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: "0.75rem",
                color: "#5E4444",
              }}
            >
              {vino.acf.annata}
            </Typography>
          )}
        </Box>

        <Typography
          sx={{
            fontFamily: '"Apple Chancery", Palatino, serif',
            fontSize: "1.25rem",
            color: "#4A0E1E",
            mb: 0.5,
            flex: 1,
          }}
        >
          {vino.title}
        </Typography>

        <Typography
          sx={{
            fontFamily: '"DM Sans", sans-serif',
            fontWeight: 300,
            fontSize: "0.8125rem",
            color: "#5E4444",
            mb: 1.5,
          }}
        >
          {vino.acf.produttore}
          {vino.acf.denominazione ? ` · ${vino.acf.denominazione}` : ""}
        </Typography>

        {vino.acf.descrizione_breve && (
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
            {vino.acf.descrizione_breve}
          </Typography>
        )}
      </Box>
    </Box>
  );
}

interface ViniGridProps {
  vini: Vino[];
}

export default function ViniGrid({ vini }: ViniGridProps) {
  const [filtro, setFiltro] = useState("Tutti");

  const viniFiltrati =
    filtro === "Tutti" ? vini : vini.filter((v) => v.acf.tipologia === filtro);

  // Conta per tipologia
  const conteggi = tipologie.reduce(
    (acc, t) => {
      acc[t] =
        t === "Tutti"
          ? vini.length
          : vini.filter((v) => v.acf.tipologia === t).length;
      return acc;
    },
    {} as Record<string, number>,
  );

  return (
    <Box
      component="section"
      sx={{ backgroundColor: "#FEFCFB", py: { xs: 8, md: 10 } }}
    >
      <Box
        sx={{
          maxWidth: 1920,
          mx: "auto",
          px: { xs: 3, md: 10 },
        }}
      >
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
          {tipologie.map((t) => {
            const count = conteggi[t];
            if (count === 0 && t !== "Tutti") return null;
            const isActive = filtro === t;
            return (
              <Box
                key={t}
                onClick={() => setFiltro(t)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  px: 2.5,
                  py: 1,
                  borderRadius: "2px",
                  border: "1px solid",
                  borderColor: isActive ? "#7D1A2C" : "#E5DADA",
                  backgroundColor: isActive ? "#7D1A2C" : "transparent",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    borderColor: "#7D1A2C",
                    backgroundColor: isActive
                      ? "#7D1A2C"
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
                    color: isActive ? "#FFFFFF" : "#4A0E1E",
                    userSelect: "none",
                  }}
                >
                  {t}
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
            {viniFiltrati.length} {viniFiltrati.length === 1 ? "vino" : "vini"}
            {filtro !== "Tutti" ? ` · ${filtro}` : ""}
          </Typography>
        </Box>

        {/* Griglia */}
        {viniFiltrati.length === 0 ? (
          <Box sx={{ py: 10, textAlign: "center" }}>
            <Typography
              sx={{
                fontFamily: '"Apple Chancery", Palatino, serif',
                fontStyle: "italic",
                fontSize: "1.25rem",
                color: "rgba(94, 68, 68, 0.4)",
              }}
            >
              Nessun vino in questa categoria
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
            {viniFiltrati.map((vino) => (
              <VinoCard key={vino.id} vino={vino} />
            ))}
          </Box>
        )}

        {/* CTA catalogo */}
        <Box
          sx={{
            mt: 8,
            pt: 6,
            borderTop: "1px solid #E5DADA",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { md: "center" },
            justifyContent: "space-between",
            gap: 3,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: '"Apple Chancery", Palatino, serif',
                fontSize: { xs: "1.5rem", md: "1.75rem" },
                color: "#4A0E1E",
                mb: 0.5,
              }}
            >
              Vuoi vedere il catalogo completo?
            </Typography>
            <Typography
              sx={{
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: 300,
                fontSize: "0.9375rem",
                color: "#5E4444",
              }}
            >
              Abbiamo oltre 200 etichette disponibili in bottega.
            </Typography>
          </Box>
          <Typography
            component="a"
            href="/catalogo-vini.pdf"
            target="_blank"
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 500,
              fontSize: "0.8125rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#7D1A2C",
              textDecoration: "none",
              border: "1px solid #7D1A2C",
              px: 4,
              py: 1.75,
              borderRadius: "2px",
              display: "inline-block",
              flexShrink: 0,
              "&:hover": {
                backgroundColor: "#7D1A2C",
                color: "#FFFFFF",
              },
              transition: "all 0.2s ease",
            }}
          >
            Scarica il catalogo PDF →
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
