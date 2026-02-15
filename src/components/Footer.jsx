import { Box, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

/* Smooth Scroll */
function smoothScrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#FAF8F5",
        pt: { xs: 10, md: 12 },
        pb: { xs: 6, md: 7 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BACK TO TOP */}
      <MotionBox
        onClick={smoothScrollToTop}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        sx={{
          position: "absolute",
          top: "-26px",
          left: "50%",
          transform: "translateX(-50%)",
          width: 56,
          height: 56,
          borderRadius: "50%",
          backgroundColor: "#4A2A2E",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 10px 26px rgba(74, 42, 46, 0.22)",
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: "#A0523D",
            boxShadow: "0 14px 32px rgba(160, 82, 61, 0.4)",
            transform: "translateX(-50%) scale(1.1)",
          },
          "&:active": {
            transform: "translateX(-50%) scale(0.95)",
          },
        }}
      >
        <KeyboardArrowUpIcon fontSize="large" />
      </MotionBox>

      {/* CONTENT */}
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 3, md: 6 },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "2.4fr 1fr 1.6fr",
            },
            gap: { xs: 6, md: 10 },
          }}
        >
          {/* BRAND */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              sx={{
                fontFamily: "Playfair Display, serif",
                fontSize: { xs: "28px", md: "36px" },
                fontWeight: 700,
                color: "#4A2A2E",
                mb: 2.5,
              }}
            >
              Vardhishtha
            </Typography>

            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: "14px", md: "16px" },
                lineHeight: 1.9,
                color: "#6b6b6b",
                maxWidth: "440px",
              }}
            >
              Vardhishtha Trading Company supplies premium Indian raisins from
              Sangli’s finest growing regions, processed with care, consistency,
              and export-grade standards.
            </Typography>
          </MotionBox>

          {/* NAVIGATION */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontSize: "15px",
                fontWeight: 600,
                color: "#1F2933",
                mb: 3,
              }}
            >
              Navigation
            </Typography>

            {[
              { label: "Home", path: "/" },
              { label: "Products", path: "/products" },
              { label: "About", path: "/about" },
              { label: "Contact", path: "/contact" },
            ].map((item) => (
              <Typography
                key={item.label}
                component={Link}
                to={item.path}
                onClick={smoothScrollToTop}
                sx={{
                  display: "block",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "15px",
                  color: "#5F6670",
                  mb: 1.4,
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                  cursor: "pointer",
                  "&:hover": {
                    color: "#A0523D",
                    transform: "translateX(4px)",
                  },
                }}
              >
                {item.label}
              </Typography>
            ))}
          </MotionBox>

          {/* CONTACT + ADDRESS */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontSize: "15px",
                fontWeight: 600,
                color: "#1F2933",
                mb: 3,
              }}
            >
              Contact
            </Typography>

            <Typography sx={{ fontSize: "15px", color: "#5F6670", mb: 1 }}>
               +91 92092 84977, 
            </Typography>
            <Typography sx={{ fontSize: "15px", color: "#5F6670", mb: 1 }}>
               +91 80808 57569, 
            </Typography>
            <Typography sx={{ fontSize: "15px", color: "#5F6670", mb: 1 }}>
               +91 84838 40019
            </Typography>

            <Typography sx={{ fontSize: "15px", color: "#5F6670", mb: 1.5 }}>
               vardhishthatradingcompany@gmail.com
            </Typography>

            <Typography
              sx={{
                fontSize: "14px",
                lineHeight: 1.8,
                color: "#5F6670",
              }}
            >
              📍 Shop No. 3, Near ICICI Bank,  
              <br />
              Ganpati Mandir Road, Joshi Galli,  
              <br />
              Tasgaon, Tal: Tasgaon – 416312  
              <br />
              Sangli, Maharashtra, India
            </Typography>
          </MotionBox>
        </Box>

        {/* DIVIDER */}
        <Box
          sx={{
            mt: 8,
            mb: 3,
            height: "1px",
            backgroundColor: "rgba(0,0,0,0.08)",
          }}
        />

        {/* COPYRIGHT */}
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontSize: "13px",
            color: "#8A8F96",
          }}
        >
          © {new Date().getFullYear()} Vardhishtha Trading Company. All rights
          reserved.
        </Typography>
      </Box>
    </Box>
  );
}
