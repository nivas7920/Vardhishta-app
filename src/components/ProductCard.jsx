import { Box, Typography, Divider } from "@mui/material";
import { useState } from "react";

export default function ProductCard({
  title,
  image,
  details = [],
  interactive = true,
}) {
  const [open, setOpen] = useState(false);
  const ease = "cubic-bezier(0.25, 1, 0.35, 1)";

  const handleClick = () => {
    if (!interactive) return;
    setOpen((prev) => !prev);
  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        backgroundColor: "#FAF8F5",
        borderRadius: "32px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
        cursor: interactive ? "pointer" : "default",
        overflow: "hidden",
        transition: `all 1.6s ${ease}`,
        "&:hover": interactive
          ? {
              boxShadow: "0 20px 50px rgba(0,0,0,0.16)",
              transform: "translateY(-8px)",
            }
          : {},
      }}
    >
      {/* COLLAPSED */}
      {!open && (
        <>
          <Box sx={{ p: { xs: 2.5, md: 3 } }}>
            <Box
              component="img"
              src={image}
              alt={title}
              sx={{
                width: "100%",
                height: { xs: 240, md: 320 },
                objectFit: "cover",
                borderRadius: "26px",
              }}
            />
          </Box>

          <Box sx={{ px: { xs: 3, md: 4 }, pb: { xs: 3, md: 4 } }}>
            <Typography
              sx={{
                fontFamily: "Playfair Display, serif",
                fontSize: { xs: "22px", md: "28px" },
                fontWeight: 600,
                textAlign: "center",
                color: "#1f2933",
              }}
            >
              {title}
            </Typography>
          </Box>
        </>
      )}

      {/* EXPANDED */}
      {interactive && open && (
        <Box sx={{ p: { xs: 3, md: 4 } }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 3, md: 4 },
              alignItems: { xs: "center", md: "flex-start" },
              mb: 4,
            }}
          >
            <Box
              component="img"
              src={image}
              alt={title}
              sx={{
                width: { xs: "100%", md: 260 },
                height: { xs: 200, md: 180 },
                objectFit: "cover",
                borderRadius: "22px",
                flexShrink: 0,
              }}
            />

            <Typography
              sx={{
                fontFamily: "Playfair Display, serif",
                fontSize: { xs: "26px", md: "34px" },
                fontWeight: 600,
                color: "#1f2933",
                lineHeight: 1.2,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              {title}
            </Typography>
          </Box>

          {details.map((item, index) => (
            <Box key={index} sx={{ mb: { xs: 2, md: 2.5 } }}>
              <Typography
                sx={{
                  fontSize: { xs: "13px", md: "15px" },
                  color: "#6c7179",
                  fontWeight: 500,
                  mb: 0.4,
                }}
              >
                {item.label}
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "20px", md: "24px" },
                  color: "#1f2933",
                  fontWeight: 600,
                }}
              >
                {item.value}
              </Typography>

              <Divider sx={{ mt: 1.6 }} />
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}
