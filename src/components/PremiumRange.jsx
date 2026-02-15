import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { premiumHomeCollection } from "../data/productsData";
import AnimatedBackground from "./AnimatedBackground";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

export default function PremiumRange() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "#FAF8F5",
        py: { xs: 10, md: 14 },
        overflow: "hidden",
      }}
    >
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Soft Accent Glow */}
      <MotionBox
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        viewport={{ once: true }}
        sx={{
          position: "absolute",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(160, 82, 61, 0.3), transparent 70%)",
          top: "20%",
          left: "8%",
          filter: "blur(70px)",
          zIndex: 2,
        }}
      />

      <Box
        sx={{
          maxWidth: "1440px",
          mx: "auto",
          px: { xs: 3, md: 8 },
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "5fr 7fr",
          },
          gap: { xs: 8, md: 10 },
          alignItems: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* ================= LEFT CONTENT ================= */}
        <Box>
          <MotionTypography
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            sx={{
              fontFamily: "Inter",
              fontSize: "13px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#A0523D",
              mb: 2,
              fontWeight: 800,
            }}
          >
            Signature Selection
          </MotionTypography>

          <MotionTypography
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 1, 0.35, 1] }}
            viewport={{ once: true }}
            sx={{
              fontFamily: "Playfair Display, serif",
              fontSize: { xs: "40px", md: "64px" },
              fontWeight: 800,
              lineHeight: 1.1,
              color: "#4A2A2E",
              mb: 3,
            }}
          >
            Crafted for
            <br />
            <Box component="span" sx={{ color: "#A0523D" }}>
              Global Standards
            </Box>
          </MotionTypography>

          {/* Accent Line */}
          <MotionBox
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            sx={{
              height: "3px",
              backgroundColor: "#A0523D",
              mb: 4,
              borderRadius: "2px",
            }}
          />

          <MotionTypography
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            viewport={{ once: true }}
            sx={{
              fontFamily: "Inter",
              fontSize: "20px",
              lineHeight: 1.9,
              color: "#5f6670",
              maxWidth: "520px",
            }}
          >
            Our premium raisins are cultivated in Sangli’s fertile lands,
            naturally sun-dried, and precision-graded to meet the expectations
            of international buyers and domestic partners alike.
          </MotionTypography>

          <MotionButton
            onClick={() => {
              navigate("/products");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            viewport={{ once: true }}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.96 }}
            sx={{
              mt: 6,
              px: "52px",
              height: "58px",
              borderRadius: "999px",
              backgroundColor: "#4A2A2E",
              color: "#fff",
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: 600,
              letterSpacing: "0.8px",
              textTransform: "none",
              boxShadow: "0 14px 38px rgba(0,0,0,0.22)",
              transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
              "&:hover": {
                backgroundColor: "#A0523D",
                color: "#fff",
                boxShadow: "0 22px 60px rgba(160, 82, 61, 0.3)",
              },
            }}
          >
            Explore Full Range →
          </MotionButton>
        </Box>

        {/* ================= RIGHT — PRODUCT CARDS ================= */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
            },
            gap: 6,
          }}
        >
          {premiumHomeCollection.map((item, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.9,
                delay: index * 0.15,
                ease: [0.25, 1, 0.35, 1],
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              sx={{ perspective: "1200px" }}
            >
              <ProductCard {...item} interactive={false} />
            </MotionBox>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
