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
import type { Cantina, ZonaToscana, ZonaFrancia, RegioneItalia } from "@/types";

interface Props {
  cantine: Cantina[];
}

const REGIONI_ITALIA: { key: RegioneItalia; label: string }[] = [
  { key: "toscana", label: "Toscana" },
  { key: "piemonte", label: "Piemonte" },
  { key: "valle_d_aosta", label: "Valle d'Aosta" },
  { key: "liguria", label: "Liguria" },
  { key: "lombardia", label: "Lombardia" },
  { key: "trentino_alto_adige", label: "Trentino-Alto Adige" },
  { key: "friuli_venezia_giulia", label: "Friuli Venezia Giulia" },
  { key: "veneto", label: "Veneto" },
  { key: "emilia_romagna", label: "Emilia Romagna" },
  { key: "marche", label: "Marche" },
  { key: "umbria", label: "Umbria" },
  { key: "lazio", label: "Lazio" },
  { key: "abruzzo", label: "Abruzzo" },
  { key: "molise", label: "Molise" },
  { key: "campania", label: "Campania" },
  { key: "basilicata", label: "Basilicata" },
  { key: "calabria", label: "Calabria" },
  { key: "puglia", label: "Puglia" },
  { key: "sicilia", label: "Sicilia" },
  { key: "sardegna", label: "Sardegna" },
];

const ZONE_TOSCANA: { key: ZonaToscana; label: string }[] = [
  { key: "chianti_classico", label: "Chianti Classico" },
  { key: "montalcino", label: "Montalcino" },
  { key: "montepulciano", label: "Montepulciano" },
  { key: "bolgheri", label: "Bolgheri" },
  { key: "isola_di_capraia", label: "Isola di Capraia" },
  { key: "isola_d_elba", label: "Isola d'Elba" },
  { key: "isola_di_gorgona", label: "Isola di Gorgona" },
  { key: "san_gimignano", label: "San Gimignano" },
];

const ZONE_FRANCIA: { key: ZonaFrancia; label: string }[] = [
  { key: "bordeaux", label: "Bordeaux" },
  { key: "borgogne", label: "Borgogne" },
  { key: "champagne", label: "Champagne" },
  { key: "loira", label: "Loira" },
  { key: "jura", label: "Jura" },
  { key: "valle_du_rhone", label: "Valle del Rodano" },
];

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function NomiCantine({ cantine }: { cantine: Cantina[] }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
      {cantine.map((c) => (
        <Typography
          key={c.id}
          sx={{
            fontFamily: '"DM Sans", sans-serif',
            fontWeight: 300,
            fontSize: { xs: "1rem", md: "1.0625rem" },
            lineHeight: 1.8,
            color: colors.textLight,
          }}
        >
          {c.nome}
        </Typography>
      ))}
    </Box>
  );
}

function ZonaBlock({ label, cantine }: { label: string; cantine: Cantina[] }) {
  if (cantine.length === 0) return null;
  return (
    <Box sx={{ mb: 3 }}>
      <Typography
        sx={{
          fontFamily: '"Apple Chancery", Palatino, serif',
          fontStyle: "italic",
          fontSize: { xs: "1.125rem", md: "1.375rem" },
          color: colors.text,
          mb: 1,
        }}
      >
        {label}
      </Typography>
      <NomiCantine cantine={cantine} />
    </Box>
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
  children,
  featured,
}: {
  label: string;
  cantine: Cantina[];
  children?: React.ReactNode;
  featured?: boolean;
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
            fontSize: featured
              ? { xs: "1.75rem", md: "2.25rem" }
              : { xs: "1.5rem", md: "1.75rem" },
            color: featured ? colors.merlot : colors.text,
          }}
        >
          {label}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 0, pb: 3 }}>
        {children ?? <NomiCantine cantine={cantine} />}
      </AccordionDetails>
    </Accordion>
  );
}

export default function CantineSection({ cantine }: Props) {
  const vini = cantine.filter((c) => c.tipologia === "vino");
  const superalcolici = cantine.filter((c) => c.tipologia === "superalcolico");

  // Gruppi vini
  const viniItalia = vini.filter((c) => c.nazione_vino === "italia");
  const viniFrancia = vini.filter((c) => c.nazione_vino === "francia");
  const viniRestoMondo = vini.filter(
    (c) => !["italia", "francia"].includes(c.nazione_vino ?? ""),
  );
  const chiantiClassico = viniItalia.filter(
    (c) => c.zona_toscana === "chianti_classico",
  );
  const altreZoneToscane = ZONE_TOSCANA.filter(
    (z) => z.key !== "chianti_classico",
  );
  const viniToscanaNonChianti = viniItalia.filter(
    (c) => c.regione === "toscana" && c.zona_toscana !== "chianti_classico",
  );
  const viniItaliaNonToscana = viniItalia.filter(
    (c) => c.regione !== "toscana",
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
          <StyledAccordion
            label="Chianti Classico"
            cantine={chiantiClassico}
            featured
          />
        )}

        {/* Accordion vini */}
        <Box sx={{ mb: { xs: 8, md: 12 } }}>
          {/* Toscana */}
          {viniToscanaNonChianti.length > 0 && (
            <StyledAccordion label="Toscana" cantine={[]}>
              {altreZoneToscane.map(({ key, label }) => (
                <ZonaBlock
                  key={key}
                  label={label}
                  cantine={viniToscanaNonChianti.filter(
                    (c) => c.zona_toscana === key,
                  )}
                />
              ))}
            </StyledAccordion>
          )}

          {/* Italia */}
          {viniItaliaNonToscana.length > 0 && (
            <StyledAccordion label="Italia" cantine={[]}>
              {REGIONI_ITALIA.filter((r) => r.key !== "toscana").map(
                ({ key, label }) => (
                  <ZonaBlock
                    key={key}
                    label={label}
                    cantine={viniItaliaNonToscana.filter(
                      (c) => c.regione === key,
                    )}
                  />
                ),
              )}
            </StyledAccordion>
          )}

          {/* Francia */}
          {viniFrancia.length > 0 && (
            <StyledAccordion label="Francia" cantine={[]}>
              {ZONE_FRANCIA.map(({ key, label }) => (
                <ZonaBlock
                  key={key}
                  label={label}
                  cantine={viniFrancia.filter((c) => c.zona_francia === key)}
                />
              ))}
            </StyledAccordion>
          )}

          {/* Resto del mondo */}
          {viniRestoMondo.length > 0 && (
            <StyledAccordion label="Resto del mondo" cantine={[]}>
              {Array.from(
                new Set(viniRestoMondo.map((c) => c.nazione_vino)),
              ).map((nazione) => (
                <ZonaBlock
                  key={nazione}
                  label={capitalize(nazione ?? "")}
                  cantine={viniRestoMondo.filter(
                    (c) => c.nazione_vino === nazione,
                  )}
                />
              ))}
            </StyledAccordion>
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
