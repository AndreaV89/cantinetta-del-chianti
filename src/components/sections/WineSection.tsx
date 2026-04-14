import { Box, Typography, Chip } from "@mui/material";
import Image from "next/image";
import { Vino } from "@/types";

interface WineSectionProps {
  vini: Vino[];
}

const tipologiaColors: Record<string, string> = {
  Rosso: "#8B1A2F",
  Bianco: "#C9A86C",
  Rosato: "#D4A5A5",
  Bollicine: "#736156",
  Distillato: "#3A2E28",
};

function WineCard({ vino }: { vino: Vino }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
        border: "1px solid #E0D8CE",
        borderRadius: 1,
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 12px 32px rgba(58, 46, 40, 0.1)",
        },
      }}
    >
      {/* Immagine */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          aspectRatio: "3/4",
          backgroundColor: "#F8F5F0",
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
                fontSize: "1rem",
                color: "rgba(115, 97, 86, 0.4)",
              }}
            >
              🍷
            </Typography>
          </Box>
        )}
      </Box>

      {/* Info */}
      <Box sx={{ p: 2.5 }}>
        <Chip
          label={vino.acf.tipologia}
          size="small"
          sx={{
            backgroundColor: "transparent",
            border: "none",
            color: tipologiaColors[vino.acf.tipologia] || "#736156",
            fontFamily: '"DM Sans", sans-serif',
            fontSize: "0.625rem",
            fontWeight: 400,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            px: 0,
            mb: 1,
            height: "auto",
            "& .MuiChip-label": { px: 0 },
          }}
        />

        <Typography
          sx={{
            fontFamily: '"Apple Chancery", Palatino, serif',
            fontSize: "1.25rem",
            color: "#3A2E28",
            mb: 0.5,
          }}
        >
          {vino.title}
        </Typography>

        <Typography
          sx={{
            fontFamily: '"DM Sans", sans-serif',
            fontWeight: 300,
            fontSize: "0.8125rem",
            color: "#736156",
            mb: 1.5,
          }}
        >
          {vino.acf.denominazione}
          {vino.acf.annata ? ` · ${vino.acf.annata}` : ""}
        </Typography>

        {vino.acf.descrizione_breve && (
          <Typography
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 300,
              fontSize: "0.8125rem",
              lineHeight: 1.7,
              color: "#736156",
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
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#FDFAF6",
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
                color: "#C9A86C",
                mb: 1,
              }}
            >
              La Cantina
            </Typography>
            <Box
              sx={{ width: 32, height: 1, backgroundColor: "#C9A86C", mb: 2 }}
            />
            <Typography
              component="h2"
              sx={{
                fontFamily: '"Apple Chancery", Palatino, serif',
                fontSize: { xs: "2rem", md: "2.75rem" },
                fontWeight: 400,
                color: "#3A2E28",
                lineHeight: 1.2,
              }}
            >
              I nostri vini
              <br />
              selezionati
            </Typography>
          </Box>

          <Typography
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 300,
              fontSize: "0.9375rem",
              lineHeight: 1.75,
              color: "#736156",
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
                lg: "repeat(4, 1fr)",
              },
              gap: 3,
            }}
          >
            {vini.map((vino) => (
              <WineCard key={vino.id} vino={vino} />
            ))}
          </Box>
        )}

        {/* CTA catalogo */}
        <Box sx={{ mt: 6, display: "flex", alignItems: "center", gap: 2 }}>
          <Typography
            component="a"
            href="/catalogo-vini.pdf"
            target="_blank"
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 500,
              fontSize: "0.8125rem",
              letterSpacing: "0.05em",
              color: "#8B1A2F",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Scarica il catalogo completo →
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
