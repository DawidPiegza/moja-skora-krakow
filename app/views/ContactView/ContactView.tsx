import {
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
                variant={downMd ? "h5" : "h4"}
                align="center"
                fontStyle="italic"
              >
                Jesteśmy tu dla Ciebie! Skontaktuj się z nami, aby umówić wizytę
                lub uzyskać więcej informacji o naszych usługach.
              </Typography>
            </Grid>
            <Grid size={12}>
              <Grid container spacing={1}>
                <Grid size={6}>
                  <Box
                    component={Paper}
                    variant="outlined"
                    maxWidth="100%"
                    p={2}
                  >
                    <Typography variant="h6" align="left">
                      Świętego Sebastiana 22/2C, 31-049 Kraków
                    </Typography>
                    <Typography variant="h6" align="left">
                      518 456 332
                    </Typography>
                    <Typography variant="h6" align="left" marginTop={5}>
                      Godziny otwarcia:
                    </Typography>
                    <Typography variant="h6" align="left">
                      Pon - Pt: 8 – 21
                    </Typography>
                    <Typography variant="h6" align="left">
                      Sb: 8 – 16
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={6}>
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
                      rows={4}
                      variant="standard"
                      fullWidth
                    />
                    <TextField
                      placeholder="Nazwisko"
                      rows={4}
                      variant="standard"
                      fullWidth
                    />
                    <TextField
                      placeholder="E-mail"
                      rows={4}
                      variant="standard"
                      fullWidth
                    />
                    <TextField
                      placeholder="Numer kontaktowy"
                      rows={4}
                      variant="standard"
                      fullWidth
                    />
                    <Button variant="outlined" color="inherit">
                      Wyślij
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
