import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { getVini } from "@/lib/wordpress";
import ViniGrid from "@/components/sections/ViniGrid";
import { colors } from "@/styles/colors";
import type { Metadata } from "next";
import CantineSection from "@/components/sections/CantineSection";
import { getCantine } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "I Nostri Vini",
  description:
    "Oltre 200 etichette selezionate dal Chianti e dal mondo. Chianti Classico, Supertuscan, vini italiani e internazionali. Scopri la nostra selezione.",
};

export default async function ViniPage() {
  const [vini, cantine] = await Promise.all([getVini(), getCantine()]);

  return (
    <>
      {/* Hero */}
      <Box
        component="section"
        sx={{
          backgroundColor: colors.dark,
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
          Vini
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
              color: colors.beige,
              mb: 1,
            }}
          >
            La Cantina
          </Typography>
          <Box
            sx={{
              width: 32,
              height: "1px",
              backgroundColor: colors.beige,
              mb: 3,
            }}
          />
          <Typography
            component="h1"
            sx={{
              fontFamily: '"Apple Chancery", Palatino, serif',
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontStyle: "italic",
              fontWeight: 400,
              color: "#FFFFFF",
              lineHeight: 1.15,
              mb: 3,
              maxWidth: 700,
            }}
          >
            I nostri vini
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
            Una selezione curata di etichette del Chianti e della Toscana,
            scelte per qualità, carattere e storia.
          </Typography>
        </Box>
      </Box>

      {/* Sezione numeri */}
      <Box
        component="section"
        sx={{
          backgroundColor: colors.bgAlt,
          py: { xs: 8, md: 10 },
          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        <Box
          sx={{
            maxWidth: 1920,
            mx: "auto",
            px: { xs: 3, md: 20 },
            display: "grid",
            gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(3, 1fr)" },
            gap: { xs: 4, md: 6 },
          }}
        >
          {[
            { num: "200+", label: "Etichette selezionate" },
            { num: "8", label: "Regioni italiane" },
            { num: "6", label: "Paesi nel mondo" },
          ].map((stat) => (
            <Box key={stat.num} sx={{ textAlign: "center" }}>
              <Typography
                sx={{
                  fontFamily: '"Apple Chancery", Palatino, serif',
                  fontStyle: "italic",
                  fontSize: { xs: "3rem", md: "4.5rem" },
                  lineHeight: 1,
                  color: colors.merlot,
                  mb: 1,
                }}
              >
                {stat.num}
              </Typography>
              <Typography
                sx={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontWeight: 300,
                  fontSize: { xs: "0.8125rem", md: "0.9375rem" },
                  letterSpacing: "0.08em",
                  color: colors.textLight,
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Sezione testo con foto di sfondo */}
      <Box
        component="section"
        sx={{
          position: "relative",
          overflow: "hidden",
          py: { xs: 12, md: 18 },
        }}
      >
        {/* Foto sfondo */}
        <Image
          src="/images/vigna-sfondo-testo.jpeg"
          alt="Vigneti al tramonto"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="100vw"
        />
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(26, 8, 16, 0.65)",
          }}
        />

        <Box
          sx={{
            maxWidth: 860,
            mx: "auto",
            px: { xs: 3, md: 6 },
            position: "relative",
            zIndex: 1,
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 300,
              fontSize: { xs: "1rem", md: "1.0625rem" },
              lineHeight: 1.9,
              color: "rgba(255,255,255,0.75)",
              mb: 3,
            }}
          >
            Dalla passione per il vino nasce La Cantinetta del Chianti, un luogo
            dove ogni bottiglia racconta una storia. Un mosaico di grandi
            etichette accuratamente selezionate, pensato per offrire ai nostri
            clienti una scelta che spazia dall&#39;eccellenza al sublime. Un
            viaggio ideale attraverso l&#39;Italia del vino: dalla Toscana alla
            Sicilia, passando per le prestigiose terre di Piemonte, Lombardia,
            Veneto e Friuli. Ogni calice è un&#39;esperienza sensoriale che
            esalta il piacere dell&#39;olfatto e celebra l&#39;apoteosi del
            gusto.
          </Typography>

          <Typography
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 300,
              fontSize: { xs: "1rem", md: "1.0625rem" },
              lineHeight: 1.9,
              color: "rgba(255,255,255,0.75)",
              mb: 6,
            }}
          >
            Lo sguardo si apre oltre i confini italiani, con una selezione
            internazionale che abbraccia le grandi tradizioni enologiche e dei
            distillati: dalla raffinatezza della Francia e della Germania, al
            carattere della Spagna, fino all&#39;eccellenza dei whisky di Scozia
            e Irlanda e ai celebri bourbon americani. Senza dimenticare
            l&#39;Argentina, terra di vini intensi e sorprendenti.
          </Typography>

          <Box
            sx={{
              width: 48,
              height: "1px",
              backgroundColor: `rgba(196, 168, 130, 0.4)`,
              mx: "auto",
              mb: 6,
            }}
          />

          <Typography
            sx={{
              fontFamily: '"Apple Chancery", Palatino, serif',
              fontStyle: "italic",
              fontSize: { xs: "1.5rem", md: "2.25rem" },
              color: colors.beige,
              lineHeight: 1.4,
            }}
          >
            Lasciati guidare in un viaggio di gusto
          </Typography>
        </Box>
      </Box>

      {/* Sezione cantine */}
      <CantineSection cantine={cantine} />

      {/* Griglia vini con filtri */}
      <ViniGrid vini={vini} />

      {/* Pre-footer */}
      <Box
        sx={{
          backgroundColor: colors.darkDeep,
          py: { xs: 6, md: 8 },
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Apple Chancery", Palatino, serif',
            fontStyle: "italic",
            fontSize: { xs: "1.5rem", md: "2rem" },
            color: colors.beige,
            mb: 4,
          }}
        >
          Non trovi quello che cerchi?
        </Typography>
        <Typography
          component="a"
          href="https://wa.me/393339687729"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            fontFamily: '"DM Sans", sans-serif',
            fontWeight: 500,
            fontSize: "0.8125rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#FFFFFF",
            backgroundColor: colors.merlot,
            textDecoration: "none",
            px: 4,
            py: 1.75,
            borderRadius: "2px",
            display: "inline-block",
            "&:hover": { backgroundColor: colors.merlotHover },
          }}
        >
          Chiedici una selezione personalizzata →
        </Typography>
      </Box>
    </>
  );
}
