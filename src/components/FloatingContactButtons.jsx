import React from "react";
import { Box, IconButton } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

export default function FloatingContactButtons({
  phone = "919209284977",
  text = "Hello Vardhishtha",
}) {
  const cleaned = phone.replace(/[^0-9]/g, "");

  const openWhatsApp = () => {
    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/${cleaned}?text=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const makeCall = () => {
    window.location.href = `tel:+${cleaned}`;
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: { xs: 16, sm: 20, md: 24 },
        right: { xs: 16, sm: 20, md: 24 },
        zIndex: 1400,
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
      }}
    >
      {/* CALL BUTTON */}
      <IconButton
        onClick={makeCall}
        aria-label="Call Now"
        title="Call Now"
        sx={{
          bgcolor: "#0f172a",
          color: "#fff",
          width: { xs: 50, sm: 60 },
          height: { xs: 50, sm: 60 },
          boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
          "&:hover": { bgcolor: "#020617" },
          borderRadius: "999px",
        }}
      >
        <PhoneIcon sx={{ fontSize: 28 }} />
      </IconButton>

      {/* WHATSAPP BUTTON */}
      <IconButton
        onClick={openWhatsApp}
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        sx={{
          bgcolor: "#25D366",
          color: "#fff",
          width: { xs: 52, sm: 64 },
          height: { xs: 52, sm: 64 },
          boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
          "&:hover": { bgcolor: "#1ebe57" },
          borderRadius: "999px",
        }}
      >
        {/* WhatsApp SVG */}
        <Box sx={{ width: 26, height: 26 }}>
          <svg viewBox="0 0 24 24" width="100%" height="100%">
            <path
              fill="#fff"
              d="M20.52 3.48A11.84 11.84 0 0012.01.25C6.01.25 1.24 5.02 1.24 11.02c0 1.94.51 3.84 1.47 5.52L.25 23.75l7.71-2.02A11.8 11.8 0 0012.01 22c6 0 10.77-4.77 10.77-10.78 0-2.9-1.12-5.61-3.26-7.74z"
            />
            <path
              fill="#fff"
              d="M17.6 14.3c-.3-.15-1.76-.86-2.03-.96-.27-.1-.46-.15-.66.15s-.76.96-.93 1.15c-.17.19-.35.21-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.29.3-.48.1-.19.05-.35-.02-.5-.07-.15-.66-1.6-.9-2.2-.24-.58-.48-.5-.66-.51-.17-.01-.36-.01-.55-.01s-.5.07-.76.36c-.26.29-1 1-1 2.44s1.03 2.83 1.17 3.03c.15.19 2.02 3.1 4.9 4.35 2.88 1.25 2.88.83 3.4.78.52-.05 1.76-.72 2.01-1.41.25-.69.25-1.28.18-1.41-.07-.13-.27-.2-.57-.35z"
            />
          </svg>
        </Box>
      </IconButton>
    </Box>
  );
}
