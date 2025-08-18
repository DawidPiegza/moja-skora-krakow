import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
    body1: {
      fontSize: "17px",
    },
    body2: {
      fontSize: "15px",
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#EEE8AA",
    },
    secondary: {
      main: "#02245c",
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
