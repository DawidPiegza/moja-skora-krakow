import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
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
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { WebsiteLanguageContext } from "../../shared/contexts/LanguageContext";
import promotion_image from "../../../public/images/promotion_image.jpg";
import promotion_image_eng from "../../../public/images/promotion_image_eng.jpg";

import { useNavigate } from "react-router";

export default function PromotionsView() {
  const { language } = React.useContext(WebsiteLanguageContext);
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const navTo = useNavigate();

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2} paddingTop={2} paddingBottom={"80px"}>
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
                ? "Program poleceń"
                : "Referral Program"}
            </Typography>
          </Breadcrumbs>
        </Grid>
        <Grid size={12}>
          <Divider />
        </Grid>
        <Grid size={12} container>
          <Grid
            size={12}
            display="flex"
            justifyContent={"flex-start"}
            py={downMd ? 1 : 2}
          >
            <Typography
              gutterBottom
              width={"100%"}
              variant={"h4"}
              textAlign="left"
              sx={{ fontWeight: "350" }}
            >
              {language.webLanguage === "PL"
                ? "PROGRAM POLECEŃ".toUpperCase()
                : "REFERRAL PROGRAM".toUpperCase()}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          size={12}
          spacing={5}
          sx={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Grid size={downMd ? 12 : 5}>
            <Box
              component="img"
              sx={{
                height: "100%",
                width: "100%",
              }}
              src={
                language.webLanguage === "PL"
                  ? promotion_image
                  : promotion_image_eng
              }
            />
          </Grid>
          <Grid size={downMd ? 12 : 7} container direction="column" rowGap={3}>
            <Grid size={12} display="flex" flexDirection={"column"} rowGap={1}>
              <Typography
                variant={downMd ? "body1" : "h6"}
                textAlign="left"
                width={"100%"}
                fontWeight={600}
                gutterBottom
              >
                {language.webLanguage === "PL"
                  ? "Zyskaj 100 zł za każdą poleconą osobę!"
                  : "Earn 100 PLN for every person you refer!"}
              </Typography>
              <Typography
                variant={downMd ? "body2" : "body1"}
                textAlign="left"
                width={"100%"}
                gutterBottom
              >
                {language.webLanguage === "PL" ? (
                  <>
                    Poleć gabinet „Moja Skóra” i odbierz <strong>100 zł</strong>{" "}
                    rabatu na kolejny zabieg za każdą nową osobę, którą do nas
                    zaprosisz. Twój znajomy również zyskuje — na pierwszą wizytę
                    otrzyma <strong>50 zł</strong> zniżki.
                  </>
                ) : (
                  <>
                    Refer the “Moja Skóra” clinic and receive a{" "}
                    <strong>100 PLN</strong> discount on your next treatment for
                    every new person you invite. Your friend also benefits —
                    they receive a <strong>50 PLN</strong> discount on their
                    first visit.
                  </>
                )}
              </Typography>
            </Grid>
            <Grid size={12}>
              <Divider />
            </Grid>
            <Grid size={12} display="flex" flexDirection={"column"} rowGap={1}>
              <Typography
                variant={downMd ? "body2" : "body1"}
                textAlign="left"
                width={"100%"}
                gutterBottom
                fontWeight={500}
              >
                {language.webLanguage === "PL"
                  ? "Jak skorzystać z promocji?"
                  : "How to use the promotion?"}
              </Typography>
              <Typography
                variant={downMd ? "body2" : "body1"}
                textAlign="left"
                width={"100%"}
                gutterBottom
              >
                {language.webLanguage === "PL"
                  ? "1. Osoba polecona podczas rezerwacji wizyty w Booksy (w notatce) lub w wiadomości SMS / na naszych social mediach podaje imię i nazwisko osoby, która ją poleciła."
                  : "1. The referred person, when booking an appointment on Booksy (in the notes) or in an SMS / on our social media, provides the first and last name of the person who referred them."}
              </Typography>
              <Typography
                variant={downMd ? "body2" : "body1"}
                textAlign="left"
                width={"100%"}
                gutterBottom
              >
                {language.webLanguage !== "PL"
                  ? "2. The referred person must be a new client of the Moja Skóra clinic."
                  : "2. Polecona osoba musi być nowym klientem gabinetu Moja Skóra."}
              </Typography>
              <Typography
                variant={downMd ? "body2" : "body1"}
                textAlign="left"
                width={"100%"}
                gutterBottom
              >
                {language.webLanguage === "PL"
                  ? "3. Po odbyciu jej pierwszej wizyty, osoba polecająca otrzymuje 100 zł rabatu na kolejny zabieg."
                  : "3. After their first visit, the referring person receives a 100 PLN discount on their next treatment."}
              </Typography>
              <Typography
                variant={downMd ? "body2" : "body1"}
                textAlign="left"
                width={"100%"}
                gutterBottom
              >
                {language.webLanguage === "PL"
                  ? "4. Nowy klient (osoba polecona) otrzymuje 50 zł zniżki na swoją pierwszą wizytę."
                  : "4. The new client (the referred person) receives a 50 PLN discount on their first visit."}
              </Typography>
            </Grid>
            <Grid size={12}>
              <Divider />
            </Grid>
            <Grid size={12} display="flex" flexDirection={"column"} rowGap={1}>
              <Typography
                variant={downMd ? "body2" : "body1"}
                textAlign="left"
                width={"100%"}
                gutterBottom
                fontWeight={500}
              >
                {language.webLanguage === "PL"
                  ? "Zasady promocji"
                  : "Promotion rules"}
              </Typography>
              <Typography
                variant={downMd ? "body2" : "body1"}
                textAlign="left"
                width={"100%"}
                gutterBottom
              >
                {language.webLanguage === "PL"
                  ? "1. Możesz polecić dowolną liczbę osób – każde polecenie to kolejne 100 zł dla Ciebie."
                  : "1. You may refer any number of people — each referral is another 100 PLN for you."}
              </Typography>
              <Typography
                variant={downMd ? "body2" : "body1"}
                textAlign="left"
                width={"100%"}
                gutterBottom
              >
                {language.webLanguage === "PL"
                  ? "2. Promocja dotyczy zabiegów o wartości co najmniej 140 zł."
                  : "2. The promotion applies to treatments worth at least 140 PLN."}
              </Typography>
              <Typography
                variant={downMd ? "body2" : "body1"}
                textAlign="left"
                width={"100%"}
                gutterBottom
              >
                {language.webLanguage === "PL"
                  ? "3. Rabaty nie łączą się z innymi promocjami."
                  : "3. Discounts cannot be combined with other promotions."}
              </Typography>
              <Typography
                variant={downMd ? "body2" : "body1"}
                textAlign="left"
                width={"100%"}
                gutterBottom
              >
                {language.webLanguage === "PL"
                  ? "4. Dotyczy zabiegów o wartości co najmniej 140 zł"
                  : "4. Applies to treatments worth at least 140 PLN."}
              </Typography>
              <Typography
                variant={"caption"}
                textAlign="left"
                width={"100%"}
                gutterBottom
                fontWeight={500}
              >
                {language.webLanguage === "PL"
                  ? "Szczegółowe warunki promocji znajdziesz w regulaminie promocji polecającej."
                  : "Detailed terms of the promotion can be found in the referral promotion regulations."}
              </Typography>
              <Grid size={12}>
                <Button
                  onClick={() => navTo("/promotions_terms_and_conditions")}
                  sx={(theme) => ({
                    color: "text.primary",
                    fontSize: theme.typography.caption.fontSize,
                    lineHeight: theme.typography.caption.lineHeight,
                    padding: 0,
                  })}
                  size="small"
                  fullWidth={false}
                >
                  {language.webLanguage === "PL"
                    ? "REGULAMIN PROMOCJI POLECAJĄCEJ"
                    : "REFERRAL PROMOTION REGULATIONS"}
                </Button>
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
