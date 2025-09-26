/* 
🌈 Global MUI theme configuration — defines colors, typography, spacing, and component styles
**/

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1976d2" },
    secondary: { main: "#dc004e" },
    background: { default: "#f5f5f5" },
    text: { primary: "#000000", secondary: "#555555" },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  },
  spacing: 8,
  shape: {
    borderRadius: 2,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;
