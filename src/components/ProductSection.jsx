import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";

const MotionBox = motion(Box);

export default function ProductFlowSection({ id, title, products }) {
  return (
    <Box
      id={id}
      sx={{
        position: "relative",
        py: { xs: 8, md: 12 },
        background: "linear-gradient(135deg, #FAF8F5 0%, #F0EAE1 100%)",
        overflow: "hidden",
      }}
    >
      {/* Animated Background */}
      <AnimatedBackground />

      {/* TITLE */}
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Typography
          sx={{
            mb: 6,
            fontFamily: "Playfair Display, serif",
            fontSize: { xs: 32, md: 48 },
            fontWeight: 700,
            textAlign: "center",
            color: "#4A2A2E",
            letterSpacing: "0.5px",
          }}
        >
          {title}
        </Typography>
      </MotionBox>

      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          gap: { xs: 8, md: 12 }, // ⬅️ reduced gap between cards
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* SVG FLOW LINES */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1200 1200"
            fill="none"
          >
            <path
              d="M250 180 C 600 120, 600 420, 950 400"
              stroke="#A0523D"
              strokeWidth="3"
              strokeDasharray="8 6"
              opacity="0.5"
            />
            <path
              d="M950 600 C 600 560, 600 860, 250 840"
              stroke="#A0523D"
              strokeWidth="3"
              strokeDasharray="8 6"
              opacity="0.5"
            />
          </svg>
        </Box>

        {/* FLOW CARDS */}
        {products.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              sx={{
                display: "flex",
                justifyContent: isLeft ? "flex-start" : "flex-end",
                position: "relative",
                zIndex: 2,
              }}
            >
              {/* TALL CARD */}
              <MotionBox
                whileHover={{ y: -8, boxShadow: "0 30px 60px rgba(0,0,0,0.25)" }}
                transition={{ duration: 0.3 }}
                sx={{
                  width: { xs: "100%", md: "420px" },
                  minHeight: 280,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  alignItems: "center",
                  background: "linear-gradient(135deg, #D4C4AF 0%, #C4B5A0 100%)",
                  borderRadius: "24px",
                  padding: "18px",
                  boxShadow: "0 12px 35px rgba(0,0,0,0.15)",
                  border: "1px solid rgba(160,82,61,0.2)",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    width: "100%",
                    height: 200,
                    objectFit: "cover",
                    borderRadius: "18px",
                    transition: "transform 0.4s ease",
                  }}
                />

                <Typography
                  sx={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "#4A2A2E",
                    textAlign: "center",
                    letterSpacing: "0.3px",
                    mt: 1,
                  }}
                >
                  {item.title}
                </Typography>
              </MotionBox>
            </MotionBox>
          );
        })}
      </Box>
    </Box>
  );
}
