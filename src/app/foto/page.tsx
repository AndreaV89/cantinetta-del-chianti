import { Box, Typography } from "@mui/material";
import { getAlbum } from "@/lib/wordpress";
import AlbumStrip from "@/components/sections/AlbumStrip";

export default async function FotoPage() {
  const album = await getAlbum();

  return (
    <>
      {/* Hero */}
      <Box
        component="section"
        sx={{
          backgroundColor: "#1E1414",
          pt: { xs: 14, md: 18 },
          pb: { xs: 8, md: 12 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Typography
          aria-hidden
          sx={{
            position: "absolute",
            bottom: "-0.1em",
            right: "-0.05em",
            fontFamily: '"Apple Chancery", Palatino, serif',
            fontStyle: "italic",
            fontSize: { xs: "8rem", md: "16rem" },
            lineHeight: 1,
            color: "rgba(255,255,255,0.03)",
            userSelect: "none",
            pointerEvents: "none",
            whiteSpace: "nowrap",
          }}
        >
          Foto
        </Typography>

        <Box
          sx={{
            maxWidth: 1920,
            mx: "auto",
            px: { xs: 3, md: 10 },
            position: "relative",
            zIndex: 1,
          }}
        >
          <Typography
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: "0.6875rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#C4A882",
              mb: 1,
            }}
          >
            La Cantinetta in immagini
          </Typography>
          <Box
            sx={{ width: 32, height: "1px", backgroundColor: "#C4A882", mb: 3 }}
          />
          <Typography
            component="h1"
            sx={{
              fontFamily: '"Apple Chancery", Palatino, serif',
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontWeight: 400,
              color: "#FFFFFF",
              lineHeight: 1.15,
              mb: 3,
              maxWidth: 700,
            }}
          >
            Galleria fotografica
          </Typography>
          <Typography
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 300,
              fontSize: "1.0625rem",
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.65)",
              maxWidth: 500,
            }}
          >
            Scorri per esplorare i nostri album — vini, prodotti, aperitivi e i
            colori del Chianti.
          </Typography>
        </Box>
      </Box>

      {/* Album */}
      <Box sx={{ backgroundColor: "#FEFCFB" }}>
        {album.length === 0 ? (
          <Box sx={{ py: 12, textAlign: "center" }}>
            <Typography
              sx={{
                fontFamily: '"Apple Chancery", Palatino, serif',
                fontStyle: "italic",
                fontSize: "1.5rem",
                color: "rgba(115, 97, 86, 0.5)",
              }}
            >
              Le foto arrivano presto...
            </Typography>
          </Box>
        ) : (
          album.map((a, index) => (
            <AlbumStrip key={a.id} album={a} index={index} />
          ))
        )}
      </Box>

      {/* Pre-footer */}
      <Box
        sx={{
          backgroundColor: "#2A1414",
          py: { xs: 6, md: 8 },
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Apple Chancery", Palatino, serif',
            fontStyle: "italic",
            fontSize: { xs: "1.5rem", md: "2rem" },
            color: "#C4A882",
          }}
        >
          Un'immagine vale più di mille parole
        </Typography>
      </Box>
    </>
  );
}
