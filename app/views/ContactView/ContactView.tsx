import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Breadcrumbs,
  Button,
  Container,
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
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
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
            <Grid size={12}>
              <Grid container width="100%" spacing={1}>
                <Grid size={downMd ? 12 : 4}>
                  <Box
                    p={1}
                    width="100%"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    component={Paper}
                    variant="outlined"
                    textAlign="center"
                    alignItems="center"
                    rowGap={1}
                  >
                    <PlaceOutlinedIcon fontSize="large" />
                    <Typography variant="h6">Adres salonu</Typography>
                    <Typography variant="body1">
                      Świętego Sebastiana 22/2C, 31-049 Kraków
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={downMd ? 12 : 4}>
                  <Box
                    p={1}
                    width="100%"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    component={Paper}
                    variant="outlined"
                    textAlign="center"
                    alignItems="center"
                    rowGap={1}
                  >
                    <LocalPhoneOutlinedIcon fontSize="large" />
                    <Typography variant="h6">Numer telefonu</Typography>
                    <Typography variant="body1">518 456 332</Typography>
                  </Box>
                </Grid>
                <Grid size={downMd ? 12 : 4}>
                  <Box
                    p={1}
                    width="100%"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    component={Paper}
                    variant="outlined"
                    textAlign="center"
                    alignItems="center"
                    rowGap={1}
                  >
                    <AccessTimeOutlinedIcon fontSize="large" />
                    <Typography variant="h6">Godziny otwarcia</Typography>
                    <Typography variant="body1">
                      Pon - Pt: 8:00 – 21:00 oraz Sb: 8:00 – 16:00
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
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
                    width="100%"
                    p={2}
                    height="100%"
                    minHeight="400px"
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.2234587893644!2d19.93918661571675!3d50.05777397942419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b120455da37%3A0x9b39858fb92c3b4e!2s%C5%9Awi%C4%99tego%20Sebastiana%2022%2C%2031-049%20Krak%C3%B3w!5e0!3m2!1spl!2spl!4v1647123456789!5m2!1spl!2spl"
                      width="100%"
                      height="100%"
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
