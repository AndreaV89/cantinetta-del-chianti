"use client";

import { useEffect, useState, useRef } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Album, FotoGallery } from "@/types";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

// ─── VARIANTE A — Scorrimento orizzontale (attuale) ───────

function VarianteA({ album }: { album: Album[] }) {
  return (
    <Box>
      {album.map((a, index) => (
        <AlbumStripA key={a.id} album={a} index={index} />
      ))}
    </Box>
  );
}

function AlbumStripA({ album, index }: { album: Album; index: number }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftRef = useRef(0);
  const foto = album.acf.foto || [];
  const isEven = index % 2 === 0;
  const slides = foto.map((f) => ({
    src: f.full_image_url,
    width: f.media_details.width,
    height: f.media_details.height,
    alt: f.alt_text || f.title,
  }));

  if (foto.length === 0) return null;

  return (
    <Box
      sx={{
        backgroundColor: isEven ? "#FEFCFB" : "#F5F0EF",
        py: { xs: 6, md: 8 },
        borderBottom: "1px solid rgba(224, 216, 206, 0.5)",
      }}
    >
      <Box
        sx={{
          maxWidth: 1920,
          mx: "auto",
          px: { xs: 3, md: 10 },
          mb: 4,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <Box>
          {album.acf.data && (
            <Typography
              sx={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: "0.6875rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#C4A882",
                mb: 0.5,
              }}
            >
              {album.acf.data}
            </Typography>
          )}
          <Typography
            component="h2"
            sx={{
              fontFamily: '"Apple Chancery", Palatino, serif',
              fontSize: { xs: "1.75rem", md: "2.5rem" },
              fontWeight: 400,
              color: "#1E1414",
              lineHeight: 1.2,
            }}
          >
            {album.title}
          </Typography>
          {album.acf.descrizione && (
            <Typography
              sx={{
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: 300,
                fontSize: "0.9375rem",
                color: "#5E4444",
                mt: 1,
              }}
            >
              {album.acf.descrizione}
            </Typography>
          )}
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 1, flexShrink: 0 }}
        >
          <Typography
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: "0.75rem",
              color: "#5E4444",
              mr: 1,
            }}
          >
            {foto.length} foto
          </Typography>
          <IconButton
            onClick={() =>
              scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" })
            }
            size="small"
            sx={{
              border: "1px solid #E5DADA",
              color: "#1E1414",
              "&:hover": { borderColor: "#C4A882", color: "#C4A882" },
            }}
          >
            <ArrowBackIosNewIcon sx={{ fontSize: 14 }} />
          </IconButton>
          <IconButton
            onClick={() =>
              scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" })
            }
            size="small"
            sx={{
              border: "1px solid #E5DADA",
              color: "#1E1414",
              "&:hover": { borderColor: "#C4A882", color: "#C4A882" },
            }}
          >
            <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
          </IconButton>
        </Box>
      </Box>

      <Box
        ref={scrollRef}
        onMouseDown={(e) => {
          isDragging.current = true;
          startX.current = e.pageX - (scrollRef.current?.offsetLeft || 0);
          scrollLeftRef.current = scrollRef.current?.scrollLeft || 0;
        }}
        onMouseMove={(e) => {
          if (!isDragging.current || !scrollRef.current) return;
          e.preventDefault();
          const x = e.pageX - (scrollRef.current.offsetLeft || 0);
          scrollRef.current.scrollLeft =
            scrollLeftRef.current - (x - startX.current) * 1.5;
        }}
        onMouseUp={() => {
          isDragging.current = false;
        }}
        onMouseLeave={() => {
          isDragging.current = false;
        }}
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
          px: { xs: 3, md: 10 },
          pb: 1,
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
          cursor: "grab",
          "&:active": { cursor: "grabbing" },
        }}
      >
        {foto.map((f, i) => {
          const isPortrait = f.media_details.height > f.media_details.width;
          const imgUrl =
            f.media_details.sizes?.large?.source_url || f.full_image_url;
          const w = i === 0 ? (isPortrait ? 320 : 520) : isPortrait ? 260 : 400;
          return (
            <Box
              key={f.id}
              onClick={() => {
                setLightboxIndex(i);
                setLightboxOpen(true);
              }}
              sx={{
                position: "relative",
                flexShrink: 0,
                width: w,
                height: 320,
                borderRadius: "2px",
                overflow: "hidden",
                cursor: "pointer",
                backgroundColor: "#E8E0D5",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: "0 8px 24px rgba(30, 20, 20, 0.15)",
                },
              }}
            >
              <Image
                src={imgUrl}
                alt={f.alt_text || f.title}
                fill
                style={{ objectFit: "cover" }}
                sizes="400px"
              />
            </Box>
          );
        })}
      </Box>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={slides}
        styles={{ container: { backgroundColor: "rgba(26, 20, 16, 0.97)" } }}
      />
    </Box>
  );
}

// ─── VARIANTE B — Copertine album + lightbox ──────────────

function VarianteB({ album }: { album: Album[] }) {
  const [activeAlbum, setActiveAlbum] = useState<Album | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openAlbum = (a: Album, i: number) => {
    setActiveAlbum(a);
    setLightboxIndex(i);
    setLightboxOpen(true);
  };

  return (
    <Box sx={{ backgroundColor: "#FEFCFB", py: { xs: 6, md: 8 } }}>
      <Box
        sx={{
          maxWidth: 1920,
          mx: "auto",
          px: { xs: 3, md: 10 },
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            lg: "repeat(3, 1fr)",
          },
          gap: 3,
        }}
      >
        {album.map((a) => {
          const copertina =
            a.acf.copertina?.url || a.acf.foto?.[0]?.full_image_url;
          return (
            <Box
              key={a.id}
              onClick={() => openAlbum(a, 0)}
              sx={{
                position: "relative",
                aspectRatio: "4/3",
                borderRadius: "2px",
                overflow: "hidden",
                cursor: "pointer",
                backgroundColor: "#E8E0D5",
                "&:hover .overlay": { opacity: 1 },
                "&:hover img": { transform: "scale(1.05)" },
              }}
            >
              {copertina && (
                <Image
                  src={copertina}
                  alt={a.title}
                  fill
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              )}

              {/* Overlay scuro sempre presente in basso */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(26,20,16,0.85) 0%, rgba(26,20,16,0.1) 50%, transparent 100%)",
                }}
              />

              {/* Overlay hover */}
              <Box
                className="overlay"
                sx={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(196, 168, 130, 0.15)",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: "0.75rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#FFFFFF",
                    border: "1px solid rgba(255,255,255,0.6)",
                    px: 3,
                    py: 1,
                  }}
                >
                  Apri galleria
                </Typography>
              </Box>

              {/* Info album */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: 3,
                }}
              >
                {a.acf.data && (
                  <Typography
                    sx={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: "0.625rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#C4A882",
                      mb: 0.5,
                    }}
                  >
                    {a.acf.data}
                  </Typography>
                )}
                <Typography
                  sx={{
                    fontFamily: '"Apple Chancery", Palatino, serif',
                    fontSize: "1.5rem",
                    color: "#FFFFFF",
                    lineHeight: 1.2,
                  }}
                >
                  {a.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: "0.75rem",
                    color: "rgba(255,255,255,0.6)",
                    mt: 0.5,
                  }}
                >
                  {a.acf.foto?.length || 0} foto
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>

      {activeAlbum && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={(activeAlbum.acf.foto || []).map((f) => ({
            src: f.full_image_url,
            width: f.media_details.width,
            height: f.media_details.height,
            alt: f.alt_text || f.title,
          }))}
          styles={{ container: { backgroundColor: "rgba(26, 20, 16, 0.97)" } }}
        />
      )}
    </Box>
  );
}

// ─── VARIANTE C — Scroll narrativo ────────────────────────

function VarianteC({ album }: { album: Album[] }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeSlides, setActiveSlides] = useState<
    { src: string; width: number; height: number; alt: string }[]
  >([]);

  const allFoto = album.flatMap((a) => a.acf.foto || []);

  const openLightbox = (foto: FotoGallery[], index: number) => {
    setActiveSlides(
      foto.map((f) => ({
        src: f.full_image_url,
        width: f.media_details.width,
        height: f.media_details.height,
        alt: f.alt_text || f.title,
      })),
    );
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // Layout narrativo: alterna dimensioni e posizioni
  const layouts = [
    { cols: "2fr 1fr", rows: ["60%", "40%"] },
    { cols: "1fr 2fr", rows: ["40%", "60%"] },
    { cols: "1fr 1fr 1fr", rows: ["100%"] },
    { cols: "1fr 2fr", rows: ["50%", "50%"] },
  ];

  // Raggruppa le foto per album e crea blocchi narrativi
  return (
    <Box sx={{ backgroundColor: "#FEFCFB" }}>
      {album.map((a, albumIndex) => {
        const foto = a.acf.foto || [];
        if (foto.length === 0) return null;

        // Divide le foto in gruppi di 3
        const gruppi: FotoGallery[][] = [];
        for (let i = 0; i < foto.length; i += 3) {
          gruppi.push(foto.slice(i, i + 3));
        }

        return (
          <Box
            key={a.id}
            sx={{ borderBottom: "1px solid rgba(224, 216, 206, 0.5)", pb: 8 }}
          >
            {/* Header album */}
            <Box
              sx={{
                maxWidth: 1920,
                mx: "auto",
                px: { xs: 3, md: 10 },
                py: { xs: 6, md: 8 },
                display: "flex",
                alignItems: "baseline",
                gap: 3,
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Apple Chancery", Palatino, serif',
                  fontStyle: "italic",
                  fontSize: { xs: "4rem", md: "8rem" },
                  color: "rgba(196, 168, 130, 0.15)",
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                {String(albumIndex + 1).padStart(2, "0")}
              </Typography>
              <Box>
                <Typography
                  component="h2"
                  sx={{
                    fontFamily: '"Apple Chancery", Palatino, serif',
                    fontSize: { xs: "1.75rem", md: "2.5rem" },
                    color: "#1E1414",
                    lineHeight: 1.2,
                  }}
                >
                  {a.title}
                </Typography>
                {a.acf.data && (
                  <Typography
                    sx={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: "0.75rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#C4A882",
                      mt: 0.5,
                    }}
                  >
                    {a.acf.data}
                  </Typography>
                )}
              </Box>
            </Box>

            {/* Griglia narrativa */}
            {gruppi.map((gruppo, gruppoIndex) => {
              const isOdd = gruppoIndex % 2 !== 0;
              return (
                <Box
                  key={gruppoIndex}
                  sx={{
                    display: "grid",
                    gridTemplateColumns:
                      gruppo.length === 1
                        ? "1fr"
                        : gruppo.length === 2
                          ? isOdd
                            ? "2fr 1fr"
                            : "1fr 2fr"
                          : "1fr 1fr 1fr",
                    gap: "4px",
                    mb: "4px",
                    mx: { xs: 0, md: 0 },
                  }}
                >
                  {gruppo.map((f, fIndex) => {
                    const globalIndex = foto.indexOf(f);
                    const isPortrait =
                      f.media_details.height > f.media_details.width;
                    const isBig =
                      gruppo.length === 2 &&
                      ((isOdd && fIndex === 0) || (!isOdd && fIndex === 1));
                    const height =
                      gruppo.length === 1
                        ? 500
                        : isPortrait
                          ? 480
                          : isBig
                            ? 420
                            : 360;

                    return (
                      <Box
                        key={f.id}
                        onClick={() => openLightbox(foto, globalIndex)}
                        sx={{
                          position: "relative",
                          height: height,
                          overflow: "hidden",
                          cursor: "pointer",
                          backgroundColor: "#E8E0D5",
                          "&:hover img": { transform: "scale(1.03)" },
                          "&:hover .foto-overlay": { opacity: 1 },
                        }}
                      >
                        <Image
                          src={
                            f.media_details.sizes?.large?.source_url ||
                            f.full_image_url
                          }
                          alt={f.alt_text || f.title}
                          fill
                          style={{
                            objectFit: "cover",
                            transition: "transform 0.6s ease",
                          }}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <Box
                          className="foto-overlay"
                          sx={{
                            position: "absolute",
                            inset: 0,
                            backgroundColor: "rgba(196, 168, 130, 0.08)",
                            opacity: 0,
                            transition: "opacity 0.3s ease",
                          }}
                        />
                      </Box>
                    );
                  })}
                </Box>
              );
            })}
          </Box>
        );
      })}

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={activeSlides}
        styles={{ container: { backgroundColor: "rgba(26, 20, 16, 0.97)" } }}
      />
    </Box>
  );
}

// ─── LABEL VARIANTE ───────────────────────────────────────

function VarianteLabel({
  letter,
  title,
  desc,
}: {
  letter: string;
  title: string;
  desc: string;
}) {
  return (
    <Box
      sx={{
        backgroundColor: "#1E1414",
        py: { xs: 5, md: 6 },
        px: { xs: 3, md: 10 },
        display: "flex",
        alignItems: "center",
        gap: 4,
      }}
    >
      <Typography
        sx={{
          fontFamily: '"Apple Chancery", Palatino, serif',
          fontStyle: "italic",
          fontSize: { xs: "3rem", md: "5rem" },
          color: "rgba(196, 168, 130, 0.4)",
          lineHeight: 1,
          flexShrink: 0,
        }}
      >
        {letter}
      </Typography>
      <Box>
        <Typography
          sx={{
            fontFamily: '"Apple Chancery", Palatino, serif',
            fontSize: { xs: "1.5rem", md: "2rem" },
            color: "#FFFFFF",
            mb: 0.5,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontFamily: '"DM Sans", sans-serif',
            fontWeight: 300,
            fontSize: "0.9375rem",
            color: "rgba(255,255,255,0.55)",
          }}
        >
          {desc}
        </Typography>
      </Box>
    </Box>
  );
}

// ─── PAGINA PRINCIPALE ────────────────────────────────────

export default function FotoTestPage() {
  const [album, setAlbum] = useState<Album[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/album")
      .then((r) => r.json())
      .then((data) => {
        setAlbum(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          backgroundColor: "#FEFCFB",
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Apple Chancery", Palatino, serif',
            fontStyle: "italic",
            fontSize: "1.5rem",
            color: "#C4A882",
          }}
        >
          Caricamento...
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ backgroundColor: "#FEFCFB" }}>
      {/* Intestazione pagina */}
      <Box
        sx={{
          backgroundColor: "#2A1414",
          py: { xs: 8, md: 10 },
          px: { xs: 3, md: 10 },
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: "0.6875rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#C4A882",
            mb: 2,
          }}
        >
          Pagina di test — non pubblicare
        </Typography>
        <Typography
          component="h1"
          sx={{
            fontFamily: '"Apple Chancery", Palatino, serif',
            fontSize: { xs: "2rem", md: "3rem" },
            color: "#FFFFFF",
            mb: 2,
          }}
        >
          Galleria fotografica — confronto layout
        </Typography>
        <Typography
          sx={{
            fontFamily: '"DM Sans", sans-serif',
            fontWeight: 300,
            fontSize: "1rem",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          Scorri per vedere le tre varianti e scegliere quella che preferisci
        </Typography>
      </Box>

      {/* Variante A */}
      <VarianteLabel
        letter="A"
        title="Scorrimento orizzontale"
        desc="Ogni album ha una striscia di foto che scorre lateralmente. Cinematografico ed editoriale."
      />
      <VarianteA album={album} />

      {/* Variante B */}
      <VarianteLabel
        letter="B"
        title="Copertine album"
        desc="Gli album sono card grandi con foto di sfondo. Al click si apre la galleria completa con lightbox."
      />
      <VarianteB album={album} />

      {/* Variante C */}
      <VarianteLabel
        letter="C"
        title="Griglia narrativa"
        desc="Le foto si alternano in gruppi con dimensioni diverse — alcune grandi, alcune piccole. Effetto storytelling."
      />
      <VarianteC album={album} />
    </Box>
  );
}
