import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Breadcrumbs,
  Button,
  ButtonBase,
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
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { WebsiteLanguageContext } from "../../shared/contexts/LanguageContext";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import booksy_logo from "../../../public/images/booksy_logo.png";

export default function ContactView() {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const { language } = React.useContext(WebsiteLanguageContext);

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2} paddingTop={2} paddingBottom={"60px"}>
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
              {language.webLanguage === "PL" ? "Strona Główna" : "Main Page"}
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
              {language.webLanguage === "PL" ? "Kontakt" : "Contact"}
            </Typography>
          </Breadcrumbs>
        </Grid>
        <Grid size={12}>
          <Divider />
        </Grid>
        <Grid size={12}>
          <Grid
            container
            direction={downMd ? "column" : "row"}
            sx={{
              justifyContent: "center",
              alignItems: "stretch",
            }}
            spacing={3}
          >
            <Grid size={12} paddingBottom={5} py={downMd ? 1 : 4} px={2}>
              <Typography
                gutterBottom
                width={"100%"}
                variant={"h4"}
                textAlign="left"
                sx={{ fontWeight: "350" }}
              >
                {language.webLanguage === "PL"
                  ? "KONTAKT".toUpperCase()
                  : "CONTACT".toUpperCase()}
              </Typography>
              <Typography
                variant={downMd ? "body1" : "h6"}
                textAlign="left"
                sx={{ fontWeight: "200" }}
                width={"100%"}
                fontStyle="italic"
              >
                {language.webLanguage === "PL"
                  ? "Skontaktuj się z nami, aby umówić wizytę lub uzyskać informacje."
                  : "Contact us to book a visit or get info."}
              </Typography>
            </Grid>
            <Grid size={12}>
              <Grid
                container
                width="100%"
                spacing={1}
                sx={{
                  alignItems: "stretch",
                }}
              >
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
                    rowGap={0.5}
                    height={"100%"}
                  >
                    <PlaceOutlinedIcon
                      fontSize="medium"
                      sx={{ color: "#616161" }}
                    />
                    <Typography variant="body1" fontWeight={400}>
                      {language.webLanguage === "PL"
                        ? "Adres salonu"
                        : "Address"}
                    </Typography>
                    <Typography variant="body2" fontWeight={300}>
                      Świętego Sebastiana 22/2C, 31-049 Kraków
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={downMd ? 12 : 4}>
                  <ButtonBase
                    component="a"
                    href="tel:+48518456332"
                    sx={{ width: "100%", borderRadius: 1 }}
                    aria-label={
                      language.webLanguage === "PL" ? "Zadzwoń" : "Call"
                    }
                  >
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
                      rowGap={0.5}
                      height={"100%"}
                    >
                      <LocalPhoneOutlinedIcon
                        fontSize="medium"
                        sx={{ color: "#616161" }}
                      />
                      <Typography variant="body1" fontWeight={400}>
                        {language.webLanguage === "PL"
                          ? "Numer telefonu"
                          : "Phone Number"}
                      </Typography>
                      <Typography variant="body2" fontWeight={300}>
                        518 456 332
                      </Typography>
                    </Box>
                  </ButtonBase>
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
                    rowGap={0.5}
                    height={"100%"}
                  >
                    <AccessTimeOutlinedIcon
                      fontSize="medium"
                      sx={{ color: "#616161" }}
                    />
                    <Typography variant="body1" fontWeight={400}>
                      {language.webLanguage === "PL"
                        ? "Godziny otwarcia"
                        : "Opening Hours"}
                    </Typography>
                    <Typography variant="body2" fontWeight={300}>
                      {language.webLanguage === "PL"
                        ? "Pon - Pt: 8:00 – 21:00 oraz Sb: 8:00 – 16:00"
                        : "Mon - Fri: 8:00 AM – 9:00 PM and Sat: 8:00 AM – 4:00 PM"}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              size={12}
              container
              direction="row"
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid size={downMd ? 12 : 4}>
                <ButtonBase
                  component="a"
                  href="https://booksy.com/pl-pl/249371_moja-skora_salon-kosmetyczny_8820_krakow#ba_s=seo"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: 1,
                    padding: 1,
                    borderRadius: "10px",
                    transition: "background-color 0.2s ease",
                    "&:hover": {
                      backgroundColor: "rgba(0,0,0,0.05)",
                    },
                  }}
                >
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign={"center"}
                    fontWeight={600}
                  >
                    {language.webLanguage === "PL"
                      ? "Zarezerwuj wizytę przez"
                      : "Book your appointment via"}
                  </Typography>

                  <Box
                    component="img"
                    src={booksy_logo}
                    alt="logo booksy"
                    height={downMd ? "30px" : "40px"}
                  />
                </ButtonBase>
              </Grid>
            </Grid>
            <Grid size={12}>
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
                      variant="body1"
                      fontWeight={400}
                      width="100%"
                      align="center"
                    >
                      {language.webLanguage === "PL"
                        ? "FORMULARZ KONTAKTOWY"
                        : "CONTACT FORM"}
                    </Typography>
                    <TextField
                      placeholder={
                        language.webLanguage === "PL" ? "Imię" : "First Name"
                      }
                      variant="standard"
                      fullWidth
                      size={downMd ? "small" : "medium"}
                      slotProps={{
                        input: {
                          sx: (theme) => ({
                            ...theme.typography.body2,
                            "&::placeholder": {
                              ...theme.typography.body2,
                            },
                          }),
                        },
                      }}
                    />
                    <TextField
                      placeholder={
                        language.webLanguage === "PL" ? "Nazwisko" : "Last Name"
                      }
                      variant="standard"
                      fullWidth
                      size={downMd ? "small" : "medium"}
                      slotProps={{
                        input: {
                          sx: (theme) => ({
                            ...theme.typography.body2,
                            "&::placeholder": {
                              ...theme.typography.body2,
                            },
                          }),
                        },
                      }}
                    />
                    <TextField
                      placeholder="E-mail"
                      variant="standard"
                      fullWidth
                      size={downMd ? "small" : "medium"}
                      slotProps={{
                        input: {
                          sx: (theme) => ({
                            ...theme.typography.body2,
                            "&::placeholder": {
                              ...theme.typography.body2,
                            },
                          }),
                        },
                      }}
                    />
                    <TextField
                      placeholder={
                        language.webLanguage === "PL"
                          ? "Treść wiadomości"
                          : "Message content..."
                      }
                      multiline
                      rows={10}
                      slotProps={{
                        input: {
                          sx: (theme) => ({
                            ...theme.typography.body2,
                            "&::placeholder": {
                              ...theme.typography.body2,
                            },
                          }),
                        },
                      }}
                    />
                    <Button
                      variant="outlined"
                      color="inherit"
                      size={downMd ? "small" : "medium"}
                    >
                      {language.webLanguage === "PL" ? "Wyślij" : "Send"}
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
          </Grid>
        </Grid>
      </Grid>
      <Box
        width="100%"
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        component={Paper}
        zIndex={11}
        elevation={1}
      >
        <BottomNavigation sx={{ width: "100%" }} showLabels>
          <BottomNavigationAction
            component="a"
            href="https://www.facebook.com/people/Moja-Sk%C3%B3ra-Kosmetologia-Makija%C5%BC-permanentny/61561822193882/"
            target="_blank"
            rel="noopener noreferrer"
            label="Facebook"
            icon={<FacebookIcon />}
          />
          <BottomNavigationAction
            component="a"
            href="https://maps.app.goo.gl/DthUc2eKTyvEEHFN8?g_st=am"
            target="_blank"
            rel="noopener noreferrer"
            label="Google"
            icon={<GoogleIcon />}
          />
          <BottomNavigationAction
            component="a"
            href="https://www.instagram.com/mojaskora.krakow/"
            target="_blank"
            rel="noopener noreferrer"
            label="Instagram"
            icon={<InstagramIcon />}
          />
        </BottomNavigation>
      </Box>
    </Container>
  );
}
