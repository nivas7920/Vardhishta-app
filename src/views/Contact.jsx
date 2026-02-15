import { useState } from "react";
import { Box, Typography, TextField, Button, Stack } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import contactImage from "../assets/hero-raisins7.png";
import AnimatedBackground from "../components/AnimatedBackground";

const MotionBox = motion(Box);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

    if (
      SERVICE_ID.includes("YOUR_") ||
      TEMPLATE_ID.includes("YOUR_") ||
      PUBLIC_KEY.includes("YOUR_")
    ) {
      const to = "vardhishthatradingcompany@gmail.com";
      const subject = encodeURIComponent(`Contact from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}%0AEmail: ${formData.email}%0A%0AMessage:%0A${formData.message}`
      );
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
      setSubmitted(true);
      return;
    }

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          ...formData,
          to_email: "vardhishthatradingcompany@gmail.com",
        },
        PUBLIC_KEY
      )
      .then(() => {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Failed to send message ❌"));
  };

  return (
    <Box sx={{ backgroundColor: "#FAF8F5", overflow: "hidden", position: "relative" }}>
      {/* Animated Background */}
      <AnimatedBackground />

      <Box
        sx={{
          maxWidth: "1320px",
          mx: "auto",
          px: { xs: 2.5, sm: 4, md: 6 },
          py: { xs: 10, md: 16 },
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "380px 1fr" },
          gap: { xs: 6, md: 10 },
          alignItems: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* LEFT CONTENT */}
        <MotionBox
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <Typography
            sx={{
              fontFamily: "Playfair Display, serif",
              fontSize: { xs: 42, md: 64 },
              fontWeight: 600,
              lineHeight: 1.05,
              color: "#1f2933",
            }}
          >
            VARDHISHTHA PVT. LTD.
          </Typography>

          <Typography
            sx={{
              mt: 3,
              fontSize: 16,
              lineHeight: 1.8,
              color: "rgba(0,0,0,0.7)",
              maxWidth: 380,
            }}
          >
            Indian Raisins Supplier & Exporter <br />
            General Merchant & Commission Agent
          </Typography>

          <Stack spacing={1.6} sx={{ mt: 4 }}>
            <Typography fontWeight={600}>
              📞 7721833210, 8080857569, 8483840019
            </Typography>
            <Typography fontWeight={600}>
              ✉️ vardhishthatradingcompany@gmail.com
            </Typography>
            <Typography sx={{ fontSize: 14, color: "rgba(0,0,0,0.7)" }}>
              📍 Tasgaon, Sangli, Maharashtra, India
            </Typography>
          </Stack>
        </MotionBox>

        {/* IMAGE + FORM */}
        <MotionBox
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          sx={{
            position: "relative",
            borderRadius: "56px",
            overflow: "hidden",
            boxShadow: "0 50px 120px rgba(0,0,0,0.22)",
          }}
        >
          {/* Floating background image */}
          <MotionBox
            component="img"
            src={contactImage}
            alt="Raisins"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              inset: 0,
              filter: "brightness(0.8)",
            }}
          />

          {/* FORM CARD */}
          <Box
            sx={{
              position: "relative",
              background: "rgba(251, 247, 239, 0.98)",
              backdropFilter: "blur(10px)",
              borderRadius: "36px",
              p: { xs: 3.5, md: 5 },
              maxWidth: 560,
              mx: "auto",
              my: { xs: 4, md: 6 },
              boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
            }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <MotionBox
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  sx={{ textAlign: "center", py: 6 }}
                >
                  <Typography fontSize={22} fontWeight={800}>
                    Thank you ✨
                  </Typography>
                  <Typography sx={{ mt: 1, color: "rgba(0,0,0,0.7)" }}>
                    Our team will contact you shortly.
                  </Typography>

                  <Button
                    sx={{ mt: 3 }}
                    onClick={() => setSubmitted(false)}
                  >
                    Send another message
                  </Button>
                </MotionBox>
              ) : (
                <MotionBox
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  component="form"
                  onSubmit={handleSubmit}
                >
                  {["name", "email", "message"].map((field) => (
                    <Box key={field} sx={{ mb: field === "message" ? 4 : 3 }}>
                      <Typography fontWeight={800} mb={0.5}>
                        {field.toUpperCase()}
                      </Typography>
                      <TextField
                        fullWidth
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        placeholder={
                          field === "message"
                            ? "Write your message..."
                            : `Enter your ${field}`
                        }
                        multiline={field === "message"}
                        rows={field === "message" ? 4 : 1}
                        variant="standard"
                        InputProps={{ disableUnderline: true }}
                        sx={{
                          background: "#F4F4F4",
                          borderRadius: "14px",
                          px: 2,
                        }}
                        required
                      />
                    </Box>
                  ))}

                  <MotionBox whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Button
                      type="submit"
                      fullWidth
                      sx={{
                        height: 56,
                        borderRadius: "999px",
                        backgroundColor: "#4A2A2E",
                        color: "#fff",
                        fontWeight: 700,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: "#A0523D",
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </MotionBox>
                </MotionBox>
              )}
            </AnimatePresence>
          </Box>
        </MotionBox>
      </Box>
    </Box>
  );
}
