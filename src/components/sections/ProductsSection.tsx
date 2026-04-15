import { Box, Typography, Chip } from "@mui/material";
import Image from "next/image";
import { Prodotto } from "@/types";

interface ProductsSectionProps {
  prodotti: Prodotto[];
}

const categoriaColors: Record<string, string> = {
  Salumi: "#8B1A2F",
  Formaggi: "#C9A86C",
  Conserve: "#736156",
  Pasta: "#A0522D",
  Olio: "#6B7C5E",
  Altro: "#3A2E28",
};

function ProductCard({ prodotto }: { prodotto: Prodotto }) {
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
          aspectRatio: "4/3",
          backgroundColor: "#F8F5F0",
        }}
      >
        {prodotto.featuredImage ? (
          <Image
            src={prodotto.featuredImage.url}
            alt={prodotto.featuredImage.alt || prodotto.title}
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
                fontSize: "2rem",
                color: "rgba(115, 97, 86, 0.3)",
              }}
            >
              🧀
            </Typography>
          </Box>
        )}
      </Box>

      {/* Info */}
      <Box sx={{ p: 2.5 }}>
        <Chip
          label={prodotto.acf.categoria}
          size="small"
          sx={{
            backgroundColor: "transparent",
            border: "none",
            color: categoriaColors[prodotto.acf.categoria] || "#736156",
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
          {prodotto.title}
        </Typography>

        {prodotto.acf.produttore && (
          <Typography
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 300,
              fontSize: "0.8125rem",
              color: "#736156",
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
              color: "#736156",
            }}
          >
            {prodotto.acf.descrizione_breve}
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default function ProductsSection({ prodotti }: ProductsSectionProps) {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#F8F5F0",
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
              La Bottega
            </Typography>
            <Box
              sx={{
                width: 32,
                height: "1px",
                backgroundColor: "#C9A86C",
                mb: 2,
              }}
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
              Prodotti tipici
              <br />
              del territorio
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
            Salumi, formaggi, conserve e molto altro — il meglio della
            tradizione enogastronomica toscana.
          </Typography>
        </Box>

        {/* Cards */}
        {prodotti.length === 0 ? (
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
            I prodotti arrivano presto...
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
            {prodotti.map((prodotto) => (
              <ProductCard key={prodotto.id} prodotto={prodotto} />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}
