import { Box, Typography } from "@mui/material";
import { colors } from "@/styles/colors";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function ProductsSection() {
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
                fontStyle: "italic",
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

        {/* CTA */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: 4,
            borderTop: `1px solid ${colors.border}`,
            pt: 6,
          }}
        >
          <Typography
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 300,
              fontSize: { xs: "1rem", md: "1.125rem" },
              lineHeight: 1.8,
              color: colors.textLight,
              maxWidth: 520,
            }}
          >
            Oltre ai vini, la nostra bottega raccoglie il meglio della
            tradizione toscana: salumi artigianali, formaggi stagionati,
            conserve, pasta e olio extravergine selezionati con la stessa cura
            che riserviamo alla cantina.
          </Typography>

          <Link href="/prodotti" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              sx={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: colors.merlot,
                borderColor: colors.merlot,
                borderRadius: 0,
                px: 4,
                py: 1.5,
                whiteSpace: "nowrap",
                flexShrink: 0,
                "&:hover": {
                  backgroundColor: colors.merlot,
                  borderColor: colors.merlot,
                  color: colors.white,
                },
              }}
            >
              Scopri i prodotti
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
