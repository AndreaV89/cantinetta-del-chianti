"use client";

import { Box, Typography } from "@mui/material";
import Script from "next/script";

export default function RecensioniSection() {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#F5F0EF",
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
        <Box sx={{ mb: 6, textAlign: "center" }}>
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
            Cosa dicono di noi
          </Typography>
          <Box
            sx={{
              width: 32,
              height: "1px",
              backgroundColor: "#C4A882",
              mx: "auto",
              mb: 2,
            }}
          />
          <Typography
            component="h2"
            sx={{
              fontFamily: '"Apple Chancery", Palatino, serif',
              fontSize: { xs: "2rem", md: "2.75rem" },
              fontWeight: 400,
              color: "#1E1414",
            }}
          >
            Le recensioni dei nostri ospiti
          </Typography>
        </Box>

        {/* Widget Elfsight */}
        <Box
          sx={{
            "& .elfsight-app-3e1afe66-aea4-4cf6-9626-d26c00afe61c": {
              fontFamily: '"DM Sans", sans-serif !important',
            },
          }}
        >
          <div
            className="elfsight-app-3e1afe66-aea4-4cf6-9626-d26c00afe61c"
            data-elfsight-app-lazy
          />
        </Box>
      </Box>

      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
    </Box>
  );
}
