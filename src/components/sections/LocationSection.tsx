import { Box, Typography } from "@mui/material";

export default function LocationSection() {
  return (
    <Box
      component="section"
      sx={{ backgroundColor: "#F8F5F0", py: { xs: 0, md: 0 } }}
    >
      <Box
        sx={{
          maxWidth: 1440,
          mx: "auto",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          minHeight: { md: 520 },
        }}
      >
        {/* Mappa sinistra */}
        <Box
          component="iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.123!2d11.4308!3d43.4667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a2b1234567890%3A0x1234567890abcdef!2sGaiole+in+Chianti!5e0!3m2!1sit!2sit!4v1234567890"
          sx={{
            width: "100%",
            minHeight: { xs: 300, md: 520 },
            border: "none",
            display: "block",
            filter: "grayscale(20%) contrast(1.05)",
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Info destra */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            px: { xs: 3, md: 8 },
            py: { xs: 6, md: 8 },
            backgroundColor: "#FDFAF6",
          }}
        >
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
            Dove Siamo
          </Typography>
          <Box
            sx={{ width: 32, height: 1, backgroundColor: "#C9A86C", mb: 3 }}
          />

          <Typography
            component="h2"
            sx={{
              fontFamily: '"Apple Chancery", Palatino, serif',
              fontSize: { xs: "2rem", md: "2.25rem" },
              fontWeight: 400,
              color: "#3A2E28",
              lineHeight: 1.25,
              mb: 5,
            }}
          >
            Vieni a trovarci
            <br />a Gaiole in Chianti
          </Typography>

          {/* Info items */}
          {[
            {
              label: "Indirizzo",
              value: "Via Roma 12\n53013 Gaiole in Chianti (SI)",
            },
            {
              label: "Orari",
              value: "Lun – Sab: 09:00 – 19:30\nDomenica: 10:00 – 18:00",
            },
            {
              label: "Contatti",
              value: "+39 0577 000000\ninfo@lacantinettadelchianti.it",
            },
          ].map((item) => (
            <Box key={item.label} sx={{ mb: 3.5 }}>
              <Typography
                sx={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: "0.625rem",
                  fontWeight: 400,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#C9A86C",
                  mb: 0.75,
                }}
              >
                {item.label}
              </Typography>
              <Typography
                sx={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontWeight: 300,
                  fontSize: "0.9375rem",
                  lineHeight: 1.75,
                  color: "#3A2E28",
                  whiteSpace: "pre-line",
                }}
              >
                {item.value}
              </Typography>
            </Box>
          ))}

          {/* CTA indicazioni */}
          <Typography
            component="a"
            href="https://maps.google.com/?q=Gaiole+in+Chianti"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              mt: 1,
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 500,
              fontSize: "0.8125rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#8B1A2F",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Ottieni indicazioni →
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
