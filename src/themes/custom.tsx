import { createTheme } from "@mui/material";

export const customTheme = createTheme({
  palette: {
    primary: {
      main: "#5359c9",
      light: "#cccccc",
      dark: "#333333",
    },
    secondary: {
      main: "#a0a0a0",
    },
    text: {
      primary: "#030303",
      secondary: "#f3f3f3",
    },
  },
  typography: {
    fontFamily: "Poppins",
    h1: {
      fontSize: 28,
      fontWeight: 500,
    },
    h2: {
      fontSize: 24,
      fontWeight: 500,
    },
    h3: {
      fontSize: 20,
      fontWeight: 500,
    },
    body1: {
      fontSize: 16,
      fontWeight: 500,
    },
  },
});
