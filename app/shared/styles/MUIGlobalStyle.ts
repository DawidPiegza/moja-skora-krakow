import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "Merriweather, serif", // Ustawienie czcionki Roboto
  },
  palette: {
    mode: "light",
    primary: {
      main: "#ffe4c4",
    },
    secondary: {
      main: "#6b5889",
    },
    error: {
      main: "#c62828",
    },
    info: {
      main: "#8145de",
    },
    success: {
      main: "#45de66",
    },
  },
});
