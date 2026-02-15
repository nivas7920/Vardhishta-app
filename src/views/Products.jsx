import { Box, Typography } from "@mui/material";
import ProductSection from "../components/ProductSection";
import ProductSectionNav from "../components/ProductSectionNav";
import AnimatedBackground from "../components/AnimatedBackground";
import {
  exportCollection,
  domesticCollection,
} from "../data/productsData";

export default function Products() {
  return (
    <Box sx={{ backgroundColor: "#FAF8F5", position: "relative", overflow: "hidden" }}>
      {/* Animated Background */}
      <AnimatedBackground />

      <Box
        sx={{
          px: { xs: 3, sm: 6, md: 8 },
          pt: { xs: 14, md: 18 },
          pb: { xs: 16, md: 20 },
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* PAGE TITLE */}
        <Typography
          sx={{
            fontFamily: "Playfair Display, serif",
            fontSize: { xs: "38px", md: "64px" }, // 🔧 slightly calmer
            fontWeight: 600,
            textAlign: "center",
            color: "#1f2933",
            letterSpacing: "-0.7px",
            lineHeight: 1.08,
          }}
        >
          Our Raisins Collection
        </Typography>

        {/* PAGE DESCRIPTION */}
        <Typography
          sx={{
            mt: 2,
            maxWidth: "760px",
            mx: "auto",
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "18px", md: "19px" },
            lineHeight: 1.85,
            color: "#5f6670",
          }}
        >
          At <strong>Vardhishtha</strong>, every raisin is a result of careful
          cultivation, precise processing, and strict quality control.
          Our range serves international export markets as well as
          trusted domestic partners across India.
        </Typography>

        {/* SECTION NAV */}
        <Box sx={{ mt: 6 }}>
          <ProductSectionNav />
        </Box>

        {/* EXPORT SECTION */}
        <ProductSection
          id="export"
          title="International Collection — Export Grade"
          products={exportCollection}
        />

        {/* DOMESTIC SECTION */}
        <ProductSection
          id="domestic"
          title="Domestic Selection — Indian Market Favorites"
          products={domesticCollection}
        />
      </Box>
    </Box>
  );
}
