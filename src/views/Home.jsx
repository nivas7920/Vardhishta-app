import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import heroBg from "../assets/royal.webp";
// import logo from "../assets/logo.png";

import PremiumRange from "../components/PremiumRange";
import WhatsAppButton from "../components/WhatsAppButton";
import Introduction from "../components/Introduction";
import Products from "./Products";
import FloatingContactButtons from "../components/FloatingContactButtons";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

// Brand letters
const brandLetters = "VARDHISHTHA".split("");

// cinematic directions
const directions = [
  { x: -80, y: 0 },
  { x: 80, y: 0 },
  { x: 0, y: -80 },
  { x: 0, y: 80 },
  { x: -60, y: -60 },
  { x: 60, y: 60 },
];

export default function Home() {
  const [loading, setLoading] = useState(() => {
    return !sessionStorage.getItem("homeLoaderShown");
  });

  useEffect(() => {
    if (!loading) return;

    const timer = setTimeout(() => {
      sessionStorage.setItem("homeLoaderShown", "true");
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        /* ================= LOADER ================= */
        <MotionBox
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          sx={{
            height: "100vh",
            width: "100w",
            backgroundColor: "#FAF8F5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Animated Background Gradient */}
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1.5 }}
            sx={{
              position: "absolute",
              width: 500,
              height: 500,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(160, 82, 61, 0.2), transparent 70%)",
              top: { xs: "-150px", md: "-200px" },
              left: { xs: "-150px", md: "-200px" },
              filter: "blur(80px)",
              zIndex: 0,
            }}
          />

          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1.8, delay: 0.3 }}
            sx={{
              position: "absolute",
              width: 400,
              height: 400,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(160, 82, 61, 0.15), transparent 70%)",
              bottom: { xs: "-100px", md: "-150px" },
              right: { xs: "-100px", md: "-150px" },
              filter: "blur(80px)",
              zIndex: 0,
            }}
          />

          <Box sx={{
            textAlign: "center",
            position: "relative",
            zIndex: 2,
            px: { xs: 2, sm: 4 },
          }}>
            {/* LOGO */}
            <MotionBox
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Box
                component="img"
                src="/logo.png"
                alt="Vardhishtha Logo"
                sx={{
                  height: { xs: 180, sm: 240, md: 320 },
                  mx: "auto",
                  filter: "drop-shadow(0 20px 40px rgba(160, 82, 61, 0.35))",
                  transition: "filter 0.3s ease",
                }}
              />
            </MotionBox>

            {/* BRAND NAME */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: { xs: "4px", md: "8px" },
                mt: { xs: 2, md: 3 },
                pb: { xs: 1, md: 1.5 },
                borderBottom: "3px solid #A0523D",
                flexWrap: "wrap",
              }}
            >
              {brandLetters.map((letter, index) => {
                const dir = directions[index % directions.length];
                return (
                  <MotionTypography
                    key={index}
                    initial={{ opacity: 0, x: dir.x, y: dir.y }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{
                      duration: 0.9,
                      delay: 0.2 + index * 0.08,
                      repeat: Infinity,
                      repeatDelay: 1.8,
                      repeatType: "mirror",
                      ease: "easeOut",
                    }}
                    sx={{
                      fontFamily: "Playfair Display, serif",
                      fontSize: { xs: "24px", sm: "32px", md: "40px" },
                      fontWeight: 900,
                      letterSpacing: { xs: "1px", md: "3px" },
                      color: "#A0523D",
                      textShadow: "0 8px 24px rgba(160, 82, 61, 0.3)",
                    }}
                  >
                    {letter}
                  </MotionTypography>
                );
              })}
            </MotionBox>

            {/* TAGLINE */}
            <MotionTypography
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              sx={{
                mt: { xs: 1.5, md: 2 },
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: "12px", sm: "13px", md: "15px" },
                letterSpacing: { xs: "1px", md: "2px" },
                textTransform: "uppercase",
                color: "#A0523D",
                fontWeight: 600,
                mb: 3,
              }}
            >
              Refining Nature&apos;s Finest
            </MotionTypography>

            {/* LOADING PROGRESS BAR */}
            <MotionBox
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              sx={{
                width: { xs: "80px", md: "120px" },
                height: "3px",
                backgroundColor: "#A0523D",
                borderRadius: "2px",
                mx: "auto",
                transformOrigin: "left",
              }}
            />
          </Box>
        </MotionBox>
      ) : (
        /* ================= PAGE ================= */
        <MotionBox
          key="page"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          sx={{ backgroundColor: "#0f172a" }}
        >
          {/* ================= HERO ================= */}
          <Box
            sx={{
              position: "relative",
              minHeight: "100vh",
              display: "flex",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            {/* BACKGROUND IMAGE */}
            <MotionBox
              initial={{ scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: 4, ease: "easeOut" }}
              sx={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${heroBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* GRADIENT */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(90deg, rgba(10,15,20,0.85) 0%, rgba(10,15,20,0.2) 100%)",
              }}
            />

            {/* CONTENT */}
            <Box
              sx={{
                position: "relative",
                zIndex: 2,
                maxWidth: "1400px",
                mx: "auto",
                px: { xs: 3, md: 10 },
                width: "100%",
              }}
            >
              <Box sx={{ maxWidth: "680px" }}>
                <MotionTypography
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  sx={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: { xs: "42px", md: "78px" },
                    fontWeight: 800,
                    lineHeight: 1.05,
                    color: "#ffffff",
                  }}
                >
                  Premium Raisins
                  <br />
                  <Box component="span" sx={{ color: "#e67e22" }}>
                    Crafted for Global Markets
                  </Box>
                </MotionTypography>

                <MotionButton
                  component={Link}
                  to="/products"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.4 }}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.96 }}
                  sx={{
                    mt: 5,
                    px: "52px",
                    height: "60px",
                    borderRadius: "999px",
                    backgroundColor: "#e67e22",
                    color: "#0f172a",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "20px",
                    fontWeight: 700,
                    textTransform: "none",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
                  }}
                >
                  Explore Our Range →
                </MotionButton>
              </Box>
            </Box>
          </Box>

          <Introduction />
          <PremiumRange />
          <Products />
          <FloatingContactButtons
  phone="919209284977"
  text="Hello Vardhishtha"
/>

          <WhatsAppButton phone="919209284977" text="Hello Vardhishtha" />
        </MotionBox>
      )}
    </AnimatePresence>
  );
}
