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
import { useMessages, useTranslations } from "next-intl";

interface Props {
  cantine: Cantina[];
}

const REGIONI_ITALIA: { key: RegioneItalia }[] = [
  { key: "toscana" },
  { key: "piemonte" },
  { key: "valle_d_aosta" },
  { key: "liguria" },
  { key: "lombardia" },
  { key: "trentino_alto_adige" },
  { key: "friuli_venezia_giulia" },
  { key: "veneto" },
  { key: "emilia_romagna" },
  { key: "marche" },
  { key: "umbria" },
  { key: "lazio" },
  { key: "abruzzo" },
  { key: "molise" },
  { key: "campania" },
  { key: "basilicata" },
  { key: "calabria" },
  { key: "puglia" },
  { key: "sicilia" },
  { key: "sardegna" },
];

const ZONE_TOSCANA: { key: ZonaToscana }[] = [
  { key: "chianti_classico" },
  { key: "montalcino" },
  { key: "montepulciano" },
  { key: "bolgheri" },
  { key: "san_gimignano" },
  { key: "isola_di_capraia" },
  { key: "isola_d_elba" },
  { key: "isola_di_gorgona" },
];

const ZONE_FRANCIA: { key: ZonaFrancia }[] = [
  { key: "bordeaux" },
  { key: "borgogne" },
  { key: "champagne" },
  { key: "loira" },
  { key: "jura" },
  { key: "valle_du_rhone" },
];

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
  const t = useTranslations("cantineSection");
  const messages = useMessages();
  const nazioniMessages = (messages.cantineSection as Record<string, unknown>)
    ?.nazioni as Record<string, string> | undefined;

  const tNazione = (key: string): string => {
    if (nazioniMessages?.[key]) return nazioniMessages[key];
    return key.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  };
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
  const superNazioniNote = ["italia", "francia", "scozia", "irlanda", "usa"];
  const superNazioniCustom = Array.from(
    new Set(
      superalcolici
        .map((c) => c.nazione_superalcolico)
        .filter((n) => n && !superNazioniNote.includes(n.toLowerCase())),
    ),
  ) as string[];

  const superNazioni = [
    ...superNazioniNote.filter((nazione) =>
      superalcolici.some(
        (c) => c.nazione_superalcolico?.toLowerCase() === nazione,
      ),
    ),
    ...superNazioniCustom,
  ];

  return (
    <Box
      component="section"
      sx={{ backgroundColor: colors.bgAlt, py: { xs: 10, md: 14 } }}
    >
      <Box sx={{ maxWidth: 1920, mx: "auto", px: { xs: 3, md: 10 } }}>
        {/* Titolo sezione */}
        <SectionLabel>{t("label")}</SectionLabel>
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
          {t("title")}
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
            <StyledAccordion label={t("nazioniAccordion.toscana")} cantine={[]}>
              {altreZoneToscane.map(({ key }) => (
                <ZonaBlock
                  key={key}
                  label={t(`zoneToscana.${key}`)}
                  cantine={viniToscanaNonChianti.filter(
                    (c) => c.zona_toscana === key,
                  )}
                />
              ))}
            </StyledAccordion>
          )}

          {/* Italia */}
          {viniItaliaNonToscana.length > 0 && (
            <StyledAccordion label={t("nazioniAccordion.italia")} cantine={[]}>
              {REGIONI_ITALIA.filter((r) => r.key !== "toscana").map(
                ({ key }) => (
                  <ZonaBlock
                    key={key}
                    label={t(`regioniItalia.${key}`)}
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
            <StyledAccordion label={t("nazioniAccordion.francia")} cantine={[]}>
              {ZONE_FRANCIA.map(({ key }) => (
                <ZonaBlock
                  key={key}
                  label={t(`zoneFrancia.${key}`)}
                  cantine={viniFrancia.filter((c) => c.zona_francia === key)}
                />
              ))}
            </StyledAccordion>
          )}

          {/* Resto del mondo */}
          {viniRestoMondo.length > 0 && (
            <StyledAccordion label={t("restoMondo")} cantine={[]}>
              {Array.from(
                new Set(viniRestoMondo.map((c) => c.nazione_vino)),
              ).map((nazione) => (
                <ZonaBlock
                  key={nazione}
                  label={tNazione(nazione ?? "")}
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
            <SectionLabel>{t("spiritsLabel")}</SectionLabel>
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
              {t("spiritsTitle")}
            </Typography>
            {superNazioni.map((nazione) => (
              <StyledAccordion
                key={nazione}
                label={
                  superNazioniNote.includes(nazione.toLowerCase())
                    ? t(
                        `nazioniAccordion.${nazione.toLowerCase()}` as Parameters<
                          typeof t
                        >[0],
                      )
                    : tNazione(nazione)
                }
                cantine={superalcolici.filter(
                  (c) => c.nazione_superalcolico === nazione,
                )}
              />
            ))}
          </>
        )}
      </Box>
    </Box>
  );
}
