import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";
import muiTheme from "./theme/muiTheme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={muiTheme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
