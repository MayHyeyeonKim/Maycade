/* 
🌈 Global MUI theme configuration — defines colors, typography, spacing, and component styles
**/

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#00ff00" }, // Bright green
    secondary: { main: "#ff0000" }, // Red
    background: { default: "#000000", paper: "#111111" }, // Black background
    text: { primary: "#00ff00", secondary: "#ffffff" }, // Green text
    grey: { 500: "#808080" }, // Grey
    info: { main: "#0000ff" }, // Blue
    warning: { main: "#ffff00" }, // Yellow
  },
  typography: {
    fontFamily: "'Press Start 2P', monospace",
  },
  spacing: 8,
  shape: {
    borderRadius: 0, // Sharp corners for retro look
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 0,
          border: "2px solid #00ff00",
          color: "#00ff00",
          backgroundColor: "#000000",
          "&:hover": {
            backgroundColor: "#00ff00",
            color: "#000000",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: "2px solid #00ff00",
          backgroundColor: "#111111",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            color: "#00ff00",
            backgroundColor: "#000000",
          },
          "& .MuiInputLabel-root": {
            color: "#00ff00",
          },
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#000000",
            "& fieldset": {
              borderColor: "#00ff00",
            },
            "&:hover fieldset": {
              borderColor: "#00ff88",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#00ff88",
            },
            "&.Mui-disabled": {
              backgroundColor: "#000000",
              "& fieldset": {
                borderColor: "#00ff00",
              },
              "& .MuiInputBase-input": {
                color: "#00ff00",
                WebkitTextFillColor: "#00ff00",
              },
            },
          },
        },
      },
    },
  },
});

export default theme;
