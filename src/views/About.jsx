import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import aboutImage from "../assets/royal1.jpg";
import AnimatedBackground from "../components/AnimatedBackground";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const whyChoose = [
  {
    title: "Strong Market Roots",
    desc: "Being based in Sangli gives us direct access to India’s key raisin market.",
    icon: "🌱",
  },
  {
    title: "Trusted Quality",
    desc: "Proper grading and quality checks ensure clean, consistent raisins in every supply.",
    icon: "🛡️",
  },
  {
    title: "Bulk Supply Experience",
    desc: "Regular supply to bakeries, supermarkets, institutions, corporates, and trading firms.",
    icon: "🏭",
  },
  {
    title: "Transparent Trade",
    desc: "Clear specifications, honest pricing, and consistent communication at every stage.",
    icon: "🔍",
  },
  {
    title: "Private Label Services",
    desc: "Flexible private label support for retail and wholesale chains.",
    icon: "📦",
  },
  {
    title: "Confidential & Reliable",
    desc: "Strict confidentiality and long-term reliability for private label partners.",
    icon: "🤝",
  },
  {
    title: "Competitive & Fair Pricing",
    desc: "Efficient sourcing and operations allow the best possible rates without compromising quality.",
    icon: "💰",
  },
];

export default function About() {
  return (
    <Box sx={{ backgroundColor: "#FAF8F5", overflow: "hidden", position: "relative" }}>
      {/* Animated Background */}
      <AnimatedBackground />

      {/* ================= INTRO ================= */}
      <Box
        sx={{
          maxWidth: "1320px",
          mx: "auto",
          px: { xs: 3, sm: 4, md: 6 },
          py: { xs: 8, md: 18 },
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 520px" },
          gap: { xs: 6, md: 14 },
          alignItems: "center",
          position: "relative",
          zIndex: 3,
        }}
      >
        {/* LEFT */}
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Typography
            sx={{
              fontFamily: "Playfair Display, serif",
              fontSize: { xs: "30px", md: "64px" },
              fontWeight: 600,
              lineHeight: 1.05,
              color: "#1f2933",
            }}
          >
            Crafted with
            <br />
            Purpose & Precision
          </Typography>

          <Typography
            sx={{
              mt: 4,
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              lineHeight: 1.9,
              color: "rgba(0,0,0,0.85)",
              maxWidth: "520px",
            }}
          >
            <strong>Vardhishtha</strong> is a trusted raisins and dry fruits
            manufacturing and supply company based in Sangli, Maharashtra —
            India’s key raisin trading region.
          </Typography>

          <Typography
            sx={{
              mt: 3,
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              lineHeight: 1.9,
              color: "rgba(0,0,0,0.85)",
              maxWidth: "520px",
            }}
          >
            We serve institutions, bakeries, supermarkets, corporate kitchens,
            and trading firms across India with consistency and scale.
          </Typography>
        </MotionBox>

        {/* IMAGE */}
        <MotionBox
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          sx={{
            borderRadius: { xs: "26px", md: "50px" },
            overflow: "hidden",
            boxShadow: "0 40px 90px rgba(0,0,0,0.18)",
            height: { xs: 280, md: 520 },
          }}
        >
          <MotionBox
            component="img"
            src={aboutImage}
            alt="Premium raisins"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.4 }}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </MotionBox>
      </Box>

      {/* ================= WHY CHOOSE ================= */}
      <Box
        sx={{
          maxWidth: "1320px",
          mx: "auto",
          px: { xs: 3, sm: 4, md: 6 },
          pb: { xs: 10, md: 18 },
        }}
      >
        <MotionTypography
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          sx={{
            textAlign: "center",
            fontFamily: "Playfair Display, serif",
            fontSize: { xs: "30px", md: "44px" },
            fontWeight: 600,
            color: "#1f2933",
            mb: { xs: 6, md: 10 },
          }}
        >
          Why Choose Vardhishtha
        </MotionTypography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr",
            },
            gap: { xs: 4, md: 6 },
          }}
        >
          {whyChoose.map((item, index) => {
            const isLast = index === whyChoose.length - 1;

            return (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 28px 60px rgba(0,0,0,0.14)",
                }}
                sx={{
                  textAlign: "center",
                  backgroundColor: "#ffffff",
                  borderRadius: "26px",
                  p: 4,
                  gridColumn: isLast ? { md: "2 / span 1" } : "auto",
                  justifySelf: isLast ? "center" : "stretch",
                  maxWidth: isLast ? "420px" : "100%",
                  cursor: "default",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                  border: "1px solid rgba(160,82,61,0.04)",
                  zIndex: 3,
                }}
              >
                <MotionTypography
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                  sx={{ fontSize: "30px", mb: 2, textAlign:"center"}}
                >
                  {item.icon}
                </MotionTypography>

                <Typography
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#1f2933",
                    mb: 1.5,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "15px",
                    lineHeight: 1.7,
                    color: "rgba(0,0,0,0.85)",
                  }}
                >
                  {item.desc}
                </Typography>
              </MotionBox>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}