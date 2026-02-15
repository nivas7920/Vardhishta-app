import { Box, Button } from "@mui/material";

export default function ProductSectionNav() {
  const smoothScrollTo = (targetY, duration = 1000) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    let startTime = null;

    const ease = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      window.scrollTo(0, startY + distance * ease(progress));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = 160;
    const targetY =
      el.getBoundingClientRect().top + window.pageYOffset - offset;

    smoothScrollTo(targetY);
  };

  return (
    <Box
      sx={{
        position: "sticky",
        top: { xs: 70, md: 100 },
        zIndex: 20,
        py: { xs: 1.5, md: 2 },
        display: "flex",
        justifyContent: "center",
        gap: { xs: 2, md: 3 },
        flexWrap: "wrap",
        px: { xs: 2, md: 3 },
        backgroundColor: "rgba(250, 248, 245, 0.95)",
        backdropFilter: "blur(6px)",
      }}
    >
      <Button
        onClick={() => handleScroll("export")}
        sx={{
          px: { xs: 3, md: 5 },
          py: { xs: 1.4, md: 1.8 },
          borderRadius: "999px",
          backgroundColor: "#4A2A2E",
          color: "#fff",
          fontSize: { xs: "14px", md: "18px" },
          fontWeight: 600,
          textTransform: "none",
          transition: "all 0.3s ease",
          "&:hover": { 
            backgroundColor: "#A0523D",
            boxShadow: "0 6px 16px rgba(160, 82, 61, 0.3)",
          },
        }}
      >
        Export Grade
      </Button>

      <Button
        onClick={() => handleScroll("domestic")}
        sx={{
          px: { xs: 3, md: 5 },
          py: { xs: 1.4, md: 1.8 },
          borderRadius: "999px",
          backgroundColor: "#FAF8F5",
          color: "#4A2A2E",
          fontSize: { xs: "14px", md: "18px" },
          fontWeight: 600,
          textTransform: "none",
          border: "2px solid #D4C4AF",
          transition: "all 0.3s ease",
          "&:hover": { 
            backgroundColor: "#D4C4AF",
            borderColor: "#A0523D",
          },
        }}
      >
        Domestic Selection
      </Button>
    </Box>
  );
}
