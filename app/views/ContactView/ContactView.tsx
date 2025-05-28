import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Breadcrumbs,
  Button,
  Container,
  Divider,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";

export default function ContactView() {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const betweenMdAndLg = useMediaQuery(theme.breakpoints.between("sm", "lg"));

  return (
    <Container maxWidth="xl" sx={{ marginTop: "65px" }}>
      <Grid container spacing={3} paddingY={2}>
        <Grid size={12}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="/"
              sx={(theme) => ({
                color: "text.secondary",
                ...theme.typography.body2,
                [theme.breakpoints.up("md")]: {
                  ...theme.typography.body1,
                },
              })}
            >
              Strona Główna
            </Link>
            <Typography
              sx={(theme) => ({
                color: "text.primary",
                ...theme.typography.body2,
                [theme.breakpoints.up("md")]: {
                  ...theme.typography.body1,
                },
              })}
            >
              Kontakt
            </Typography>
          </Breadcrumbs>
        </Grid>
        <Grid size={12}>
          <Grid
            container
            direction={downMd ? "column" : "row"}
            sx={{
              justifyContent: "center",
              alignItems: "stretch",
            }}
            spacing={5}
          >
            <Grid size={12}>
              <Typography
                variant={downMd ? "h6" : "h5"}
                align="center"
                fontStyle="italic"
              >
                Jesteśmy tu dla Ciebie! Skontaktuj się z nami, aby umówić wizytę
                lub uzyskać więcej informacji o naszych usługach.
              </Typography>
            </Grid>
            <Grid size={12} paddingBottom={10}>
              <Grid container spacing={1}>
                <Grid size={downMd ? 12 : 6}>
                  <Box
                    component={Paper}
                    variant="outlined"
                    maxWidth="100%"
                    p={2}
                    display="flex"
                    justifyContent="center"
                    flexDirection="column"
                    rowGap={2}
                  >
                    <Typography
                      variant={downMd ? "h6" : "h5"}
                      width="100%"
                      align="center"
                    >
                      FORMULARZ KONTAKTOWY
                    </Typography>
                    <TextField
                      placeholder="Imię"
                      variant="standard"
                      fullWidth
                      size={downMd ? "small" : "medium"}
                    />
                    <TextField
                      placeholder="Nazwisko"
                      variant="standard"
                      fullWidth
                      size={downMd ? "small" : "medium"}
                    />
                    <TextField
                      placeholder="E-mail"
                      variant="standard"
                      fullWidth
                      size={downMd ? "small" : "medium"}
                    />
                    <TextField
                      placeholder="Numer kontaktowy"
                      variant="standard"
                      fullWidth
                      size={downMd ? "small" : "medium"}
                    />
                    <TextField
                      placeholder="Trść wiadomości..."
                      multiline
                      rows={10}
                    />
                    <Button
                      variant="outlined"
                      color="inherit"
                      size={downMd ? "small" : "medium"}
                    >
                      Wyślij
                    </Button>
                  </Box>
                </Grid>
                <Grid
                  size={downMd ? 12 : 6}
                  display="flex"
                  flexDirection="column"
                  rowGap={1}
                >
                  <Box
                    component={Paper}
                    variant="outlined"
                    maxWidth="100%"
                    p={2}
                  >
                    <Typography variant={downMd ? "body1" : "h6"} align="left">
                      Świętego Sebastiana 22/2C, 31-049 Kraków
                    </Typography>
                    <Typography variant={downMd ? "body1" : "h6"} align="left">
                      518 456 332
                    </Typography>
                    <Typography
                      variant={downMd ? "body1" : "h6"}
                      align="left"
                      marginTop={3}
                    >
                      Godziny otwarcia:
                    </Typography>
                    <Typography variant={downMd ? "body1" : "h6"} align="left">
                      Pon - Pt: 8 – 21
                    </Typography>
                    <Typography variant={downMd ? "body1" : "h6"} align="left">
                      Sb: 8 – 16
                    </Typography>
                  </Box>
                  <Box
                    component={Paper}
                    variant="outlined"
                    maxWidth="100%"
                    p={2}
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.2234587893644!2d19.93918661571675!3d50.05777397942419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b120455da37%3A0x9b39858fb92c3b4e!2s%C5%9Awi%C4%99tego%20Sebastiana%2022%2C%2031-049%20Krak%C3%B3w!5e0!3m2!1spl!2spl!4v1647123456789!5m2!1spl!2spl"
                      width="100%"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              size={12}
              marginTop={3}
              sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
            >
              <BottomNavigation showLabels component={Paper} variant="outlined">
                <BottomNavigationAction
                  label="Facebook"
                  icon={<FacebookIcon />}
                />
                <BottomNavigationAction
                  label="Instagram"
                  icon={<InstagramIcon />}
                />
                <BottomNavigationAction label="Google" icon={<GoogleIcon />} />
              </BottomNavigation>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
