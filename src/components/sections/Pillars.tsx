import { Box, Typography } from "@mui/material";

const pillars = [
  {
    num: "01",
    title: "Vini del Territorio",
    desc: "Chianti Classico, Supertuscan e etichette artigianali selezionate direttamente dai produttori locali.",
  },
  {
    num: "02",
    title: "Prodotti Tipici",
    desc: "Salumi, formaggi, conserve e pasta fresca — tutto ciò che la Toscana sa offrire di meglio.",
  },
  {
    num: "03",
    title: "Aperitivi & Taglieri",
    desc: "Un tavolo fuori, il sole del Chianti e un calice da assaporare con calma.",
  },
];

export default function Pillars() {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#F8F5F0",
        borderTop: "1px solid rgba(201, 168, 108, 0.3)",
        borderBottom: "1px solid rgba(201, 168, 108, 0.3)",
      }}
    >
      <Box
        sx={{
          maxWidth: 1440,
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
              borderRight: {
                md: index < pillars.length - 1 ? "1px solid #E0D8CE" : "none",
              },
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
                color: "rgba(201, 168, 108, 0.6)",
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
                fontSize: "1rem",
                fontWeight: 400,
                color: "#3A2E28",
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
                color: "#736156",
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
