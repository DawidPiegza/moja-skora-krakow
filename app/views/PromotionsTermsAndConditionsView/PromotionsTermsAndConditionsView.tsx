import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Breadcrumbs,
  Container,
  Divider,
  Grid,
  Link,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import React from "react";
import { WebsiteLanguageContext } from "../../shared/contexts/LanguageContext";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";

export default function PromotionsTermsAndConditionsView() {
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
              {language.webLanguage === "PL"
                ? "Regulamin promocji polecającej"
                : "Referral Promotion Terms and Conditions"}
            </Typography>
          </Breadcrumbs>
        </Grid>
        <Grid size={12}>
          <Divider />
        </Grid>
        <Grid
          size={12}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          rowGap={1}
          py={downMd ? 1 : 4}
        >
          <Typography
            gutterBottom
            width={"100%"}
            variant={"h4"}
            textAlign="left"
            sx={{ fontWeight: "350" }}
            paddingBottom={downMd ? 1 : 4}
          >
            {language.webLanguage === "ENG"
              ? "REFERRAL PROMOTION TERMS AND CONDITIONS".toUpperCase()
              : "REGULAMIN PROMOCJI POLECAJĄCEJ".toUpperCase()}
          </Typography>
          <Typography
            gutterBottom
            width={"100%"}
            variant={"body1"}
            textAlign="center"
            sx={{ fontWeight: "400" }}
            py={downMd ? 1 : 2}
          >
            {" "}
            {language.webLanguage === "PL"
              ? "§1 WARUNKI SKORZYSTANIA Z PROMOCJI"
              : "§1 TERMS OF USING THE PROMOTION"}
          </Typography>
          <Typography
            textAlign="center"
            variant={"body2"}
            fontWeight={300}
            gutterBottom
          >
            {language.webLanguage === "PL"
              ? "1. Aby skorzystać z promocji, osoba polecająca musi podać imię i nazwisko znajomego, podczas rezerwacji wizyty w Booksy (w notatce) lub skontaktować się z nami poprzez wiadomość SMS lub prywatną wiadomość na mediach społecznościowych."
              : "1. To use the promotion, the referring person must provide the first and last name of their friend when booking an appointment on Booksy (in the notes) or contact us via SMS or private message on social media."}
          </Typography>
          <Typography
            textAlign="center"
            variant={"body2"}
            fontWeight={300}
            gutterBottom
          >
            {language.webLanguage === "PL"
              ? "2. Osoba polecona musi być nowym klientem gabinetu Moja Skóra i skorzystać z pierwszej wizyty."
              : "2. The referred person must be a new client of the Moja Skóra clinic and attend their first visit."}
          </Typography>
          <Typography
            textAlign="center"
            variant={"body2"}
            fontWeight={300}
            gutterBottom
          >
            {language.webLanguage === "PL"
              ? "3. Po odbyciu wizyty przez znajomego, osoba polecająca otrzymuje 100 zł rabatu na kolejny zabieg."
              : "3. After the friend’s visit, the referring person receives a 100 PLN discount on a treatment."}
          </Typography>
          <Typography
            textAlign="center"
            variant={"body2"}
            fontWeight={300}
            gutterBottom
          >
            {language.webLanguage === "PL"
              ? "4. Osoba polecona otrzymuje 50 zł zniżki na swoją pierwszą wizytę."
              : "4. The referred person receives a 50 PLN discount on their first visit."}
          </Typography>
          <Typography
            gutterBottom
            width={"100%"}
            variant={"body1"}
            textAlign="center"
            sx={{ fontWeight: "400" }}
            py={downMd ? 1 : 2}
          >
            {" "}
            {language.webLanguage === "PL"
              ? "§2 ZASADY PROMOCJI"
              : "§2 PROMOTION RULES"}
          </Typography>
          <Typography
            textAlign="center"
            variant={"body2"}
            fontWeight={300}
            gutterBottom
          >
            {language.webLanguage === "PL"
              ? "1. Możesz polecić dowolną liczbę osób – każda nowa osoba to kolejne 100 zł dla Ciebie!"
              : "1. To use the promotion, the referring person must provide the first and last name of their friend when booking an appointment on Booksy (in the notes) or contact us via SMS or private message on social media."}
          </Typography>
          <Typography
            textAlign="center"
            variant={"body2"}
            fontWeight={300}
            gutterBottom
          >
            {language.webLanguage === "PL"
              ? "2. Rabat dotyczy zabiegów o wartości co najmniej 140 zł."
              : "2. The discount applies to treatments worth at least 140 PLN."}
          </Typography>
          <Typography
            textAlign="center"
            variant={"body2"}
            fontWeight={300}
            gutterBottom
          >
            {language.webLanguage === "PL"
              ? "3. Zniżki nie łączą się z innymi promocjami."
              : "3. Discounts cannot be combined with other promotions."}
          </Typography>
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
