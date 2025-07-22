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

import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
import { motion } from "framer-motion";
import { WebsiteLanguageContext } from "../../shared/contexts/LanguageContext";
import React from "react";
export default function ContactView() {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const betweenMdAndLg = useMediaQuery(theme.breakpoints.between("sm", "lg"));
  const { language } = React.useContext(WebsiteLanguageContext);

  return (
    <Container
      maxWidth="xl"
      component={motion.div}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
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
              ></Typography>
              <SectionTitle
                title={
                  language.webLanguage === "PL"
                    ? "Jesteśmy tu dla Ciebie! Skontaktuj się z nami, aby umówić wizytę lub uzyskać więcej informacji o naszych usługach."
                    : "We are here for you! Contact us to schedule an appointment or to get more information about our services."
                }
              />
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
                    <Typography variant="h6">
                      {" "}
                      {language.webLanguage === "PL"
                        ? "Adres salonu"
                        : "Address"}
                    </Typography>
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
                    <Typography variant="h6">
                      {language.webLanguage === "PL"
                        ? "Numer telefonu"
                        : "Phone Number"}
                    </Typography>
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
                    <Typography variant="h6">
                      {language.webLanguage === "PL"
                        ? "Godziny otwarcia"
                        : "Opening Hours"}
                    </Typography>
                    <Typography variant="body1">
                      Pon - Pt: 8:00 – 21:00 oraz Sb: 8:00 – 16:00
                    </Typography>
                  </Box>
                </Grid>
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
                      variant={downMd ? "h6" : "h5"}
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
                    />
                    <TextField
                      placeholder={
                        language.webLanguage === "PL" ? "Nazwisko" : "Last Name"
                      }
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
                      placeholder={
                        language.webLanguage === "PL"
                          ? "Numer kontaktowy"
                          : "Contact Number"
                      }
                      variant="standard"
                      fullWidth
                      size={downMd ? "small" : "medium"}
                    />
                    <TextField
                      placeholder={
                        language.webLanguage === "PL"
                          ? "Treść wiadomości"
                          : "Message content..."
                      }
                      multiline
                      rows={10}
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
    </Container>
  );
}
