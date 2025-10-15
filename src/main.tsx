import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";
import "./index.css";
import { AppProviders } from "./contexts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppProviders>
          <CssBaseline />
          <App />
        </AppProviders>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
