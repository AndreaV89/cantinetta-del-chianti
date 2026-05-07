"use client";

import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { FaChevronDown } from "react-icons/fa";
import { colors } from "@/styles/colors";
import type { Cantina } from "@/types";

interface Props {
  cantine: Cantina[];
}

function NomiCantine({ cantine }: { cantine: Cantina[] }) {
  return (
    <Typography
      sx={{
        fontFamily: '"DM Sans", sans-serif',
        fontWeight: 300,
        fontSize: { xs: "0.875rem", md: "0.9375rem" },
        lineHeight: 1.8,
        color: colors.textLight,
      }}
    >
      {cantine.map((c) => c.nome).join(", ")}
    </Typography>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
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
      {children}
    </Typography>
  );
}

function StyledAccordion({
  label,
  cantine,
}: {
  label: string;
  cantine: Cantina[];
}) {
  return (
    <Accordion
      disableGutters
      elevation={0}
      sx={{
        backgroundColor: "transparent",
        borderBottom: `1px solid ${colors.border}`,
        "&:before": { display: "none" },
      }}
    >
      <AccordionSummary
        expandIcon={<FaChevronDown size={12} color={colors.beige} />}
        sx={{ px: 0, py: 1.5 }}
      >
        <Typography
          sx={{
            fontFamily: '"Apple Chancery", Palatino, serif',
            fontStyle: "italic",
            fontSize: { xs: "1.25rem", md: "1.5rem" },
            color: colors.text,
          }}
        >
          {label}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 0, pb: 3 }}>
        <NomiCantine cantine={cantine} />
      </AccordionDetails>
    </Accordion>
  );
}

export default function CantineSection({ cantine }: Props) {
  const vini = cantine.filter((c) => c.tipologia === "vino");
  const superalcolici = cantine.filter((c) => c.tipologia === "superalcolico");

  // Gruppi vini
  const chiantiClassico = vini.filter(
    (c) => c.zona_toscana === "chianti_classico",
  );
  const toscana = vini.filter(
    (c) => c.regione === "toscana" && c.zona_toscana !== "chianti_classico",
  );
  const italia = vini.filter(
    (c) => c.nazione_vino === "italia" && c.regione !== "toscana",
  );
  const francia = vini.filter((c) => c.nazione_vino === "francia");
  const restoMondo = vini.filter(
    (c) => !["italia", "francia"].includes(c.nazione_vino ?? ""),
  );

  // Gruppi superalcolici
  const superItalia = superalcolici.filter(
    (c) => c.nazione_superalcolico === "italia",
  );
  const superScozia = superalcolici.filter(
    (c) => c.nazione_superalcolico === "scozia",
  );
  const superIrlanda = superalcolici.filter(
    (c) => c.nazione_superalcolico === "irlanda",
  );
  const superUsa = superalcolici.filter(
    (c) => c.nazione_superalcolico === "usa",
  );
  const superFrancia = superalcolici.filter(
    (c) => c.nazione_superalcolico === "francia",
  );

  return (
    <Box
      component="section"
      sx={{ backgroundColor: colors.bgAlt, py: { xs: 10, md: 14 } }}
    >
      <Box sx={{ maxWidth: 1920, mx: "auto", px: { xs: 3, md: 10 } }}>
        {/* Titolo sezione */}
        <SectionLabel>La nostra selezione</SectionLabel>
        <Box
          sx={{
            width: 32,
            height: "1px",
            backgroundColor: colors.beige,
            mb: 3,
          }}
        />
        <Typography
          component="h2"
          sx={{
            fontFamily: '"Apple Chancery", Palatino, serif',
            fontStyle: "italic",
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: 400,
            color: colors.text,
            mb: { xs: 6, md: 8 },
          }}
        >
          Le nostre cantine
        </Typography>

        {/* Chianti Classico in evidenza */}
        {chiantiClassico.length > 0 && (
          <Box sx={{ mb: { xs: 6, md: 8 } }}>
            <Typography
              sx={{
                fontFamily: '"Apple Chancery", Palatino, serif',
                fontStyle: "italic",
                fontSize: { xs: "1.5rem", md: "2rem" },
                color: colors.merlot,
                mb: 2,
              }}
            >
              Chianti Classico
            </Typography>
            <Box
              sx={{
                width: 32,
                height: "1px",
                backgroundColor: colors.beige,
                mb: 2,
              }}
            />
            <NomiCantine cantine={chiantiClassico} />
          </Box>
        )}

        {/* Accordion vini */}
        <Box sx={{ mb: { xs: 8, md: 12 } }}>
          {toscana.length > 0 && (
            <StyledAccordion label="Toscana" cantine={toscana} />
          )}
          {italia.length > 0 && (
            <StyledAccordion label="Italia" cantine={italia} />
          )}
          {francia.length > 0 && (
            <StyledAccordion label="Francia" cantine={francia} />
          )}
          {restoMondo.length > 0 && (
            <StyledAccordion label="Resto del mondo" cantine={restoMondo} />
          )}
        </Box>

        {/* Superalcolici */}
        {superalcolici.length > 0 && (
          <>
            <SectionLabel>Spirits & Liquori</SectionLabel>
            <Box
              sx={{
                width: 32,
                height: "1px",
                backgroundColor: colors.beige,
                mb: 3,
              }}
            />
            <Typography
              component="h2"
              sx={{
                fontFamily: '"Apple Chancery", Palatino, serif',
                fontStyle: "italic",
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: 400,
                color: colors.text,
                mb: { xs: 4, md: 6 },
              }}
            >
              Superalcolici & Liquori
            </Typography>
            {superItalia.length > 0 && (
              <StyledAccordion label="Italia" cantine={superItalia} />
            )}
            {superFrancia.length > 0 && (
              <StyledAccordion label="Francia" cantine={superFrancia} />
            )}
            {superScozia.length > 0 && (
              <StyledAccordion label="Scozia" cantine={superScozia} />
            )}
            {superIrlanda.length > 0 && (
              <StyledAccordion label="Irlanda" cantine={superIrlanda} />
            )}
            {superUsa.length > 0 && (
              <StyledAccordion
                label="USA & Isole Caraibiche"
                cantine={superUsa}
              />
            )}
          </>
        )}
      </Box>
    </Box>
  );
}
