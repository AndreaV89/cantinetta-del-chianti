import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Vino } from "@/types";
import { colors } from "@/styles/colors";

const tipologiaColors: Record<string, string> = {
  Rosso: colors.merlot,
  Bianco: colors.beige,
  Rosato: "#C4768A",
  Bollicine: colors.textLight,
  Distillato: colors.text,
};

interface WineSectionProps {
  vini: Vino[];
}

function WineCard({ vino }: { vino: Vino }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: colors.white,
        border: `1px solid ${colors.border}`,
        borderRadius: 1,
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: `0 16px 40px rgba(74, 14, 30, 0.12)`,
        },
      }}
    >
      {/* Immagine */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          aspectRatio: "3/4",
          backgroundColor: colors.bgAlt,
        }}
      >
        {vino.featuredImage ? (
          <Image
            src={vino.featuredImage.url}
            alt={vino.featuredImage.alt || vino.title}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 33vw"
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
                fontSize: "3rem",
                color: `rgba(196, 168, 130, 0.25)`,
              }}
            >
              ◆
            </Typography>
          </Box>
        )}

        {/* Badge tipologia */}
        <Box
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
            px: 1.5,
            py: 0.5,
            backgroundColor: (() => {
              const key = vino.acf.tipologia
                ? vino.acf.tipologia.charAt(0).toUpperCase() +
                  vino.acf.tipologia.slice(1).toLowerCase()
                : "";
              return tipologiaColors[key] || colors.dark;
            })(),
            borderRadius: "2px",
          }}
        >
          <Typography
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: "0.625rem",
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#FFFFFF",
            }}
          >
            {vino.acf.tipologia}
          </Typography>
        </Box>
      </Box>

      {/* Info */}
      <Box sx={{ p: 3, display: "flex", flexDirection: "column", gap: 1.5 }}>
        {/* Nome + annata */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Apple Chancery", Palatino, serif',
              fontSize: "1.5rem",
              lineHeight: 1.2,
              color: colors.text,
              flex: 1,
            }}
          >
            {vino.title}
          </Typography>
          {vino.acf.annata > 0 && (
            <Typography
              sx={{
                fontFamily: '"Apple Chancery", Palatino, serif',
                fontStyle: "italic",
                fontSize: "1.125rem",
                color: colors.beige,
                ml: 1,
                flexShrink: 0,
              }}
            >
              {vino.acf.annata}
            </Typography>
          )}
        </Box>

        {/* Produttore */}
        {vino.acf.produttore && (
          <Typography
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 300,
              fontSize: "0.875rem",
              color: colors.textLight,
              fontStyle: "italic",
            }}
          >
            {vino.acf.produttore}
          </Typography>
        )}

        {/* Denominazione */}
        {vino.acf.denominazione && (
          <Box
            sx={{
              display: "inline-block",
              px: 1.5,
              py: 0.5,
              backgroundColor: `rgba(196, 168, 130, 0.1)`,
              borderRadius: "2px",
              alignSelf: "flex-start",
            }}
          >
            <Typography
              sx={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: "0.625rem",
                fontWeight: 400,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: colors.beige,
              }}
            >
              {vino.acf.denominazione}
            </Typography>
          </Box>
        )}

        {/* Divisore */}
        <Box sx={{ height: "1px", backgroundColor: colors.border }} />

        {/* Descrizione */}
        {vino.acf.descrizione_breve && (
          <Typography
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 300,
              fontSize: "0.875rem",
              lineHeight: 1.8,
              color: colors.textLight,
            }}
          >
            {vino.acf.descrizione_breve}
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default function WineSection({ vini }: WineSectionProps) {
  const viniToShow = vini.slice(0, 3);

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: colors.bg,
        py: { xs: 8, md: 12 },
      }}
    >
      <Box
        sx={{
          maxWidth: 1920,
          mx: "auto",
          px: { xs: 3, md: 10 },
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { md: "flex-end" },
            mb: 7,
          }}
        >
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
              La Cantina
            </Typography>
            <Box
              sx={{
                width: 32,
                height: 1,
                backgroundColor: colors.beige,
                mb: 2,
              }}
            />
            <Typography
              component="h2"
              sx={{
                fontFamily: '"Apple Chancery", Palatino, serif',
                fontSize: { xs: "2rem", md: "2.75rem" },
                fontStyle: "italic",
                fontWeight: 400,
                color: colors.dark,
                lineHeight: 1.2,
              }}
            >
              Proposta della settimana
            </Typography>
          </Box>

          <Typography
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 300,
              fontSize: "0.9375rem",
              lineHeight: 1.75,
              color: colors.textLight,
              maxWidth: 340,
              mt: { xs: 3, md: 0 },
            }}
          >
            Una selezione curata per qualità, carattere e storia — dai
            produttori locali del Chianti.
          </Typography>
        </Box>

        {/* Cards */}
        {vini.length === 0 ? (
          <Typography
            sx={{
              fontFamily: '"Apple Chancery", Palatino, serif',
              fontStyle: "italic",
              fontSize: "1.25rem",
              color: "rgba(115, 97, 86, 0.5)",
              textAlign: "center",
              py: 8,
            }}
          >
            I vini arrivano presto...
          </Typography>
        ) : (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "repeat(3, 1fr)",
              },
              gap: 4,
            }}
          >
            {viniToShow.map((vino) => (
              <WineCard key={vino.id} vino={vino} />
            ))}
          </Box>
        )}

        {/* CTA catalogo */}
        <Box sx={{ mt: 6, display: "flex", alignItems: "center", gap: 2 }}>
          <Typography
            component="a"
            href="/vini"
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 500,
              fontSize: "0.8125rem",
              letterSpacing: "0.05em",
              color: colors.merlot,
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Scopri la nostra selezione →
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
