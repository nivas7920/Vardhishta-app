import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",

    h1: {
      fontFamily: "Playfair Display, serif",
      fontWeight: 700,
      letterSpacing: "-0.6px",
    },

    body1: {
      fontSize: "15px",
      lineHeight: 1.65,
      color: "#6c7179",
    },

    button: {
      fontFamily: "Inter, sans-serif",
      textTransform: "none",
      fontWeight: 500,
    },
  },
});

export default muiTheme;
