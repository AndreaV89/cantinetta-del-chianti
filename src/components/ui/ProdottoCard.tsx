import { Box, Typography } from "@mui/material";
import { Prodotto } from "@/types";
import { colors } from "@/styles/colors";

const categoriaColors: Record<string, string> = {
  Salumi: colors.merlot,
  Formaggi: colors.beige,
  Conserve: colors.textLight,
  Pasta: colors.merlotHover,
  Olio: "#5C7A5C",
  Altro: colors.text,
};

interface ProdottoCardProps {
  prodotto: Prodotto;
}

export default function ProdottoCard({ prodotto }: ProdottoCardProps) {
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
          transform: "translateY(-4px)",
          boxShadow: `0 12px 32px rgba(74, 14, 30, 0.08)`,
        },
      }}
    >
      {/* Fascia colorata top */}
      <Box
        sx={{
          height: 4,
          backgroundColor:
            categoriaColors[prodotto.acf.categoria] || colors.beige,
        }}
      />

      <Box
        sx={{
          p: 3,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
        }}
      >
        {/* Tag categoria */}
        <Box
          sx={{
            display: "inline-block",
            px: 1.5,
            py: 0.5,
            backgroundColor: `rgba(196, 168, 130, 0.12)`,
            borderRadius: "2px",
            alignSelf: "flex-start",
          }}
        >
          <Typography
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: "0.625rem",
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: colors.beige,
            }}
          >
            {prodotto.acf.categoria}
          </Typography>
        </Box>

        {/* Nome */}
        <Typography
          sx={{
            fontFamily: '"Apple Chancery", Palatino, serif',
            fontSize: "1.375rem",
            lineHeight: 1.3,
            color: colors.text,
          }}
        >
          {prodotto.title}
        </Typography>

        {/* Produttore */}
        {prodotto.acf.produttore && (
          <Typography
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 300,
              fontSize: "0.8125rem",
              color: colors.textLight,
              fontStyle: "italic",
            }}
          >
            {prodotto.acf.produttore}
          </Typography>
        )}

        {/* Divisore */}
        <Box sx={{ height: "1px", backgroundColor: colors.border }} />

        {/* Descrizione */}
        {prodotto.acf.descrizione_breve && (
          <Typography
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 300,
              fontSize: "0.8125rem",
              lineHeight: 1.75,
              color: colors.textLight,
              flex: 1,
            }}
          >
            {prodotto.acf.descrizione_breve}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
