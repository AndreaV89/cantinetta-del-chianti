import { Box, Typography } from "@mui/material";
import { colors } from "@/styles/colors";
import { getTranslations } from "next-intl/server";

export default async function Pillars() {
  const t = await getTranslations("pillars");

  const pillars = [
    { num: "01", title: t("01.title"), desc: t("01.desc") },
    { num: "02", title: t("02.title"), desc: t("02.desc") },
    { num: "03", title: t("03.title"), desc: t("03.desc") },
  ];

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: colors.dark,
        borderTop: "1px solid rgba(196, 168, 130, 0.2)",
        borderBottom: "1px solid rgba(196, 168, 130, 0.2)",
      }}
    >
      <Box
        sx={{
          maxWidth: 1920,
          mx: "auto",
          px: { xs: 3, md: 10 },
          py: { xs: 6, md: 7 },
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
          gap: { xs: 4, md: 0 },
        }}
      >
        {pillars.map((pillar, index) => (
          <Box
            key={pillar.num}
            sx={{
              px: { md: 6 },
              textAlign: { xs: "center", md: "left" },
              borderRight: {
                md:
                  index < pillars.length - 1
                    ? "1px solid rgba(255,255,255,0.1)"
                    : "none",
              },
              borderBottom: {
                xs:
                  index < pillars.length - 1
                    ? "1px solid rgba(255,255,255,0.1)"
                    : "none",
                md: "none",
              },
              pb: { xs: index < pillars.length - 1 ? 4 : 0, md: 0 },
              "&:first-of-type": { pl: { md: 0 } },
              "&:last-of-type": { pr: { md: 0 } },
            }}
          >
            {/* Numero */}
            <Typography
              sx={{
                fontFamily: '"Apple Chancery", Palatino, serif',
                fontStyle: "italic",
                fontSize: "2rem",
                color: "rgba(196, 168, 130, 0.7)",
                lineHeight: 1,
                mb: 2,
              }}
            >
              {pillar.num}
            </Typography>

            {/* Titolo */}
            <Typography
              sx={{
                fontFamily: '"Apple Chancery", Palatino, serif',
                fontSize: "2rem",
                fontStyle: "italic",
                fontWeight: 400,
                color: "#FFFFFF",
                mb: 1.5,
              }}
            >
              {pillar.title}
            </Typography>

            {/* Descrizione */}
            <Typography
              sx={{
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: 300,
                fontSize: "0.875rem",
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.6)",
              }}
            >
              {pillar.desc}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
