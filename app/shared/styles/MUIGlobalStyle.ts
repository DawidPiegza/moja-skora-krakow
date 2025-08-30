import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
    body1: {
      fontSize: "16px",
    },
    body2: {
      fontSize: "14px",
    },
    h6: {
      fontSize: "19px",
    },
    h5: {
      fontSize: "23px",
    },
    h4: {
      fontSize: "30px",
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
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 950,
      lg: 1200,
      xl: 1536,
    },
  },
});
