import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AnimatedBackground from "./AnimatedBackground";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

export default function IntroductionSection() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2.5, sm: 4, md: 10 },
        py: { xs: 8, md: 0 },
        position: "relative",
        overflow: "hidden",
        background: `
          linear-gradient(
            rgba(250,248,245,0.96),
            rgba(250,248,245,0.96)
          ),
          url("/textures/grain.png")
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Floating Accent Glow */}
      <MotionBox
        initial={{ opacity: 0, scale: 0.8 }}
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
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          filter: "blur(60px)",
        }}
      />

      <Box
        sx={{
          maxWidth: "980px",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* SMALL HEADING */}
        <MotionTypography
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          sx={{
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "15px", md: "16px" },
            fontWeight: 800,
            letterSpacing: "1.6px",
            color: "#6b7280",
            mb: 2,
            textTransform: "uppercase",
          }}
        >
        </MotionTypography>

        {/* MAIN TITLE */}
        <MotionTypography
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 1, 0.35, 1] }}
          viewport={{ once: true }}
          sx={{
            fontFamily: "Playfair Display, serif",
            fontSize: { xs: "36px", md: "56px" },
            fontWeight: 800,
            color: "#A0523D",
            mb: 3,
            letterSpacing: "-0.5px",
          }}
        >
          Vardhishtha
        </MotionTypography>

        {/* ACCENT LINE */}
        <MotionBox
          initial={{ width: 0 }}
          whileInView={{ width: 90 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          sx={{
            height: "3px",
            backgroundColor: "#e67e22",
            mx: "auto",
            mb: 5,
            borderRadius: "2px",
          }}
        />

        {/* PARAGRAPH 1 */}
        <MotionTypography
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          viewport={{ once: true }}
          sx={{
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "16px", md: "18px" },
            lineHeight: 1.9,
            color: "#374151",
            mb: 3,
          }}
        >
          Vardhishtha is a trusted raisins and dry fruits manufacturing and supply
          company, based in Sangli, Maharashtra — one of India’s most important
          raisin trading regions. With deep roots in this market, we are among the
          leading suppliers of raisins to institutions, bakeries, supermarkets,
          corporate kitchens and large trading firms across India.
        </MotionTypography>

        {/* PARAGRAPH 2 */}
        <MotionTypography
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          sx={{
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "16px", md: "18px" },
            lineHeight: 1.9,
            color: "#374151",
            mb: 3,
          }}
        >
          We focus on sourcing quality produce, maintaining proper grading and
          hygiene, and ensuring timely, large-scale supply to meet the everyday
          needs of our partners. Our strength lies in consistent quality,
          reliable volumes, and long-term relationships.
        </MotionTypography>

        {/* PARAGRAPH 3 */}
        <MotionTypography
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          viewport={{ once: true }}
          sx={{
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "16px", md: "18px" },
            lineHeight: 1.9,
            color: "#374151",
            mb: 6,
          }}
        >
          Today, we operate as a strong B2B supply and trading company, while
          steadily preparing to enter the FMCG and direct consumer space with the
          same trust and quality we deliver to businesses.
        </MotionTypography>

        {/* CTA */}
        <MotionButton
          onClick={() => navigate("/about")}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ y: -2 }}
          sx={{
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
            fontWeight: 700,
            color: "#e67e22",
            textTransform: "none",
            background: "transparent",
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: "-6px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "60px",
              height: "2px",
              backgroundColor: "#e67e22",
              transition: "width 0.3s ease",
            },
            "&:hover::after": {
              width: "90px",
            },
            "&:hover": {
              backgroundColor: "transparent",
              opacity: 0.85,
            },
          }}
        >
          Know More
        </MotionButton>
      </Box>
    </Box>
  );
}
