"use client";

import { useState, useRef } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Album } from "@/types";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

interface AlbumStripProps {
  album: Album;
  index: number;
}

export default function AlbumStrip({ album, index }: AlbumStripProps) {
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

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "right" ? 400 : -400,
      behavior: "smooth",
    });
  };

  const openLightbox = (i: number) => {
    setLightboxIndex(i);
    setLightboxOpen(true);
  };

  if (foto.length === 0) return null;

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: isEven ? "#FEFCFB" : "#F5F0EF",
        py: { xs: 6, md: 8 },
        borderBottom: "1px solid rgba(224, 216, 206, 0.5)",
      }}
    >
      {/* Header album */}
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
              color: "#4A0E1E",
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

        {/* Contatore foto + frecce */}
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
            onClick={() => scroll("left")}
            size="small"
            sx={{
              border: "1px solid #E5DADA",
              color: "#4A0E1E",
              "&:hover": { borderColor: "#C4A882", color: "#C4A882" },
            }}
          >
            <ArrowBackIosNewIcon sx={{ fontSize: 14 }} />
          </IconButton>
          <IconButton
            onClick={() => scroll("right")}
            size="small"
            sx={{
              border: "1px solid #E5DADA",
              color: "#4A0E1E",
              "&:hover": { borderColor: "#C4A882", color: "#C4A882" },
            }}
          >
            <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
          </IconButton>
        </Box>
      </Box>

      {/* Strip foto orizzontale */}
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
          const walk = (x - startX.current) * 1.5;
          scrollRef.current.scrollLeft = scrollLeftRef.current - walk;
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
          const w = isPortrait ? 260 : 400;
          const h = 320;

          return (
            <Box
              key={f.id}
              onClick={() => openLightbox(i)}
              sx={{
                position: "relative",
                flexShrink: 0,
                width: w,
                height: h,
                borderRadius: "2px",
                overflow: "hidden",
                cursor: "pointer",
                backgroundColor: "#E8E0D5",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: "0 8px 24px rgba(74, 14, 30, 0.15)",
                },
                // Prima foto dell'album leggermente più grande
                ...(i === 0 && {
                  width: isPortrait ? 320 : 520,
                }),
              }}
            >
              <Image
                src={imgUrl}
                alt={f.alt_text || f.title}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 80vw, 400px"
              />
              {/* Overlay hover */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(74, 14, 30, 0)",
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(74, 14, 30, 0.15)",
                  },
                }}
              />
            </Box>
          );
        })}
      </Box>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={slides}
        styles={{
          container: { backgroundColor: "rgba(74, 14, 30, 0.97)" },
        }}
      />
    </Box>
  );
}
