import { createTheme } from "@mui/material";

export const customTheme = createTheme({
  palette: {
    primary: {
      main: "#5359c9",
      light: "#5384c9",
      dark: "#6253c9",
    },
    secondary: {
        main: '#a0a0a0',
    }
  },
  typography: {
    fontFamily: "Poppins",
    h1: {
      fontSize: 24,
      fontWeight: 500,
    },
    h2: {
      fontSize: 20,
      fontWeight: 500,
    },
    body1: {
      fontSize: 16,
      fontWeight: 500,
    },
  },
});
