import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import logo from "../assets/logo.png"

const menuItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Contact", path: "/contact" },
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "#FAF8F5",
          borderBottom: "2px solid #D4C4AF",
          zIndex: 1100,
        }}
      >
        <Toolbar
          sx={{
            height: { xs: "70px", md: "100px" },
            maxWidth: "1600px",
            mx: "auto",
            width: "100%",
            px: { xs: 2.5, sm: 4, md: 10 },
            display: "grid",
            gridTemplateColumns: { xs: "1fr auto", md: "auto 1fr auto" },
            alignItems: "center",
            gap: { xs: 2, md: 0 },
          }}
        >
          {/* ================= LOGO ================= */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              textDecoration: "none",
              justifySelf: { xs: "center", md: "start" },
            }}
          >
            <Box
              component="img"
              src="/logo.png"
              alt="Vardhishtha Logo"
              sx={{
                width: { xs: 60, md: 80 },
                height: { xs: 60, md: 80 },
                objectFit: "contain",
              }}
            />

            <Box
              sx={{
                fontFamily: "Playfair Display, serif",
                fontSize: { xs: "16px", sm: "20px", md: "28px" },
                fontWeight: 700,
                letterSpacing: "0.5px",
                color: "#A0523D",
                whiteSpace: "nowrap",
              }}
            >
              Vardhishtha
            </Box>
          </Box>

          {/* ================= CENTER MENU ================= */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: 7,
            }}
          >
            {menuItems.map((item) => {
              const isActive =
                item.path === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(item.path);

              return (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.path}
                  onClick={scrollToTop}
                  disableRipple
                  sx={{
                    position: "relative",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "14px",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                    color: isActive ? "#4A2A2E" : "#6b6b6b",
                    backgroundColor: "transparent",
                    transition: "color 0.3s ease",

                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      bottom: "-8px",
                      width: isActive ? "100%" : "0%",
                      height: "3px",
                      backgroundColor: "#A0523D",
                      transition: "width 0.35s cubic-bezier(0.25,1,0.35,1)",
                    },

                    "&:hover::after": {
                      width: "100%",
                    },

                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "#4A2A2E",
                    },
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>

          {/* ================= CTA ================= */}
          <Box sx={{ justifySelf: "end", display: { xs: "none", md: "block" } }}>
            <Button
              component={Link}
              to="/contact"
              onClick={scrollToTop}
              sx={{
                height: "48px",
                px: "36px",
                borderRadius: "999px",
                backgroundColor: "#A0523D",
                color: "#fff",
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.5px",
                textTransform: "none",
                boxShadow: "0 8px 20px rgba(160, 82, 61, 0.35)",
                transition: "all 0.35s cubic-bezier(0.25,1,0.35,1)",

                "&:hover": {
                  backgroundColor: "#4A2A2E",
                  boxShadow: "0 12px 28px rgba(74, 42, 46, 0.4)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Contact Us
            </Button>
          </Box>

          {/* ================= MOBILE MENU ICON ================= */}
          <IconButton
            onClick={() => setOpen(true)}
            sx={{
              display: { md: "none" },
              justifySelf: "end",
              color: "#1f2933",
            }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* ================= MOBILE DRAWER ================= */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: { backgroundColor: "#FBF7EF", width: { xs: 280, sm: 320 } },
        }}
      >
        <List sx={{ mt: 10, px: 2 }}>
          {menuItems.map((item) => (
            <ListItem
              key={item.label}
              component={Link}
              to={item.path}
              onClick={() => {
                setOpen(false);
                scrollToTop();
              }}
              sx={{
                mb: 1.5,
                borderRadius: "12px",
                transition: "all 0.2s ease",
                "&:hover": {
                  backgroundColor: "#E8DCC8",
                  transform: "translateX(4px)",
                },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#2d1810",
                }}
              />
            </ListItem>
          ))}
          <ListItem
            component={Link}
            to="/contact"
            onClick={() => {
              setOpen(false);
              scrollToTop();
            }}
            sx={{
              mt: 2,
              backgroundColor: "#A0523D",
              color: "#fff",
              borderRadius: "12px",
              justifyContent: "center",
              transition: "all 0.2s ease",
              "&:hover": {
                backgroundColor: "#4A2A2E",
                transform: "scale(1.02)",
              },
            }}
          >
            <ListItemText
              primary="Contact Us"
              primaryTypographyProps={{
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
                fontWeight: 600,
                textAlign: "center",
              }}
            />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
