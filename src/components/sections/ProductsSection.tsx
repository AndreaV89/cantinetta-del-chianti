import { Box, Typography } from "@mui/material";
import { Prodotto } from "@/types";
import { colors } from "@/styles/colors";
import ProdottoCard from "@/components/ui/ProdottoCard";

interface ProductsSectionProps {
  prodotti: Prodotto[];
}

export default function ProductsSection({ prodotti }: ProductsSectionProps) {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: colors.bgAlt,
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
              La Bottega
            </Typography>
            <Box
              sx={{
                width: 32,
                height: "1px",
                backgroundColor: colors.beige,
                mb: 2,
              }}
            />
            <Typography
              component="h2"
              sx={{
                fontFamily: '"Apple Chancery", Palatino, serif',
                fontSize: { xs: "2rem", md: "2.75rem" },
                fontWeight: 400,
                color: colors.dark,
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
              color: colors.textLight,
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
              <ProdottoCard key={prodotto.id} prodotto={prodotto} />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}
