import { Box, Typography } from "@mui/material";
import { colors } from "@/styles/colors";

interface QuoteSectionProps {
  quote: string;
  author?: string;
}

export default function QuoteSection({ quote, author }: QuoteSectionProps) {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: colors.dark,
        py: { xs: 12, md: 16 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Testo watermark di sfondo */}
      <Typography
        aria-hidden
        sx={{
          maxWidth: "100vw",
          overflow: "hidden",
          position: "absolute",
          width: "100%",
          textAlign: "center",
          top: "50%",
          left: 0,
          transform: "translateY(-50%)",
          fontFamily: '"Apple Chancery", Palatino, serif',
          fontStyle: "italic",
          fontSize: { xs: "5rem", md: "20rem" },
          lineHeight: 1,
          color: "rgba(255,255,255,0.04)",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        {quote}
      </Typography>

      {/* Contenuto */}
      <Box
        sx={{
          maxWidth: 1920,
          mx: "auto",
          px: { xs: 3, md: 10 },
          position: "relative",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Apple Chancery", Palatino, serif',
            fontStyle: "italic",
            fontSize: { xs: "2.5rem", md: "4rem" },
            fontWeight: 400,
            lineHeight: 1.3,
            color: colors.beige,
            mb: author ? 3 : 0,
          }}
        >
          {quote}
        </Typography>

        {author && (
          <Typography
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 300,
              fontSize: "0.8125rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            — {author}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
