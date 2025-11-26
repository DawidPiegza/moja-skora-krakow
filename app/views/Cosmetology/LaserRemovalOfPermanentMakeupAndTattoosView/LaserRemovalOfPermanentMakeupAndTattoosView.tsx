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
import { WebsiteLanguageContext } from "../../../shared/contexts/LanguageContext";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import RepeatIcon from "@mui/icons-material/Repeat";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import laser_removal_1 from "../../../../public/images/laser_removal_1.jpg";
import laser_removal_2 from "../../../../public/images/laser_removal_2.jpg";

import laser_removal_effect_0 from "../../../../public/images/laser_removal_effect_0.png";
import laser_removal_effect_1 from "../../../../public/images/laser_removal_effect_1.png";
import laser_removal_effect_2 from "../../../../public/images/laser_removal_effect_2.png";
import laser_removal_effect_3 from "../../../../public/images/laser_removal_effect_3.png";
import laser_removal_effect_4 from "../../../../public/images/laser_removal_effect_4.png";
import laser_removal_effect_5 from "../../../../public/images/laser_removal_effect_5.png";
import laser_removal_effect_6 from "../../../../public/images/laser_removal_effect_6.png";
import laser_removal_effect_7 from "../../../../public/images/laser_removal_effect_7.png";

import {
  laserRemovalOfPermanentMakeupAndTattoosPL,
  laserRemovalOfPermanentMakeupAndTattoosEN,
} from "./data/laserRemovalOfPermanentMakeupAndTattoosData";

export default function LipAugmentationAndContouringView() {
  const { language } = React.useContext(WebsiteLanguageContext);
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
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
              {language.webLanguage === "PL" ? "Kosmetologia" : "Cosmetology"}
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
                ? "Laserowe usuwanie makijażu permanentnego i tatuażu"
                : "Laser removal of permanent makeup and tattoos"}
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
                ? "Laserowe usuwanie makijażu permanentnego i tatuażu".toUpperCase()
                : "Laser removal of permanent makeup and tattoos".toUpperCase()}
            </Typography>
          </Grid>
        </Grid>
        <Grid size={12} container>
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
              <AccessTimeIcon fontSize="medium" sx={{ color: "#616161" }} />
              <Typography variant="body1" fontWeight={400}>
                {language.webLanguage === "PL"
                  ? laserRemovalOfPermanentMakeupAndTattoosPL.infoTable
                      .timeOfTreatment
                  : laserRemovalOfPermanentMakeupAndTattoosEN.infoTable
                      .timeOfTreatment}
              </Typography>
              <Typography variant="body2" fontWeight={300}>
                {language.webLanguage === "PL"
                  ? "CZAS TRWANIA ZABIEGU"
                  : "DURATION OF THE TREATMENT"}
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
              rowGap={0.5}
              height={"100%"}
            >
              <RepeatIcon fontSize="medium" sx={{ color: "#616161" }} />
              <Typography variant="body1" fontWeight={400}>
                {language.webLanguage === "PL"
                  ? laserRemovalOfPermanentMakeupAndTattoosPL.infoTable
                      .recommendedNumber
                  : laserRemovalOfPermanentMakeupAndTattoosEN.infoTable
                      .recommendedNumber}
              </Typography>
              <Typography variant="body2" fontWeight={300}>
                {language.webLanguage === "PL"
                  ? "REKOMENDOWANA LICZBA ZABIEGÓW"
                  : "RECOMMENDED NUMBER OF TREATMENTS"}
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
              rowGap={0.5}
              height={"100%"}
            >
              <EventRepeatIcon fontSize="medium" sx={{ color: "#616161" }} />
              <Typography variant="body1" fontWeight={400}>
                {language.webLanguage === "PL"
                  ? laserRemovalOfPermanentMakeupAndTattoosPL.infoTable
                      .intervals
                  : laserRemovalOfPermanentMakeupAndTattoosEN.infoTable
                      .intervals}
              </Typography>
              <Typography variant="body2" fontWeight={300}>
                {language.webLanguage === "PL"
                  ? "ODSTĘPY POMIĘDZY ZABIEGAMI"
                  : "INTERVALS BETWEEN TREATMENTS"}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid size={12} container p={1} alignItems={"stretch"}>
          <Grid size={downMd ? 12 : 4}>
            <Box
              component="img"
              sx={{
                height: downMd ? "auto" : "100%",
                width: "auto",
              }}
              src={laser_removal_1}
            />
          </Grid>
          <Grid size={downMd ? 12 : 8} p={1} container spacing={2}>
            <Grid size={12} display="flex" flexDirection={"column"} rowGap={2}>
              <Typography
                variant={downMd ? "body2" : "body1"}
                textAlign="left"
                width={"100%"}
                gutterBottom
              >
                {language.webLanguage === "PL" &&
                  laserRemovalOfPermanentMakeupAndTattoosPL.treatmentOverview}
                {language.webLanguage === "ENG" &&
                  laserRemovalOfPermanentMakeupAndTattoosEN.treatmentOverview}
              </Typography>
            </Grid>
            <Grid size={12}>
              <Divider />
            </Grid>
            <Grid size={12} display="flex" flexDirection={"column"} rowGap={2}>
              <Typography
                variant={downMd ? "body1" : "h6"}
                textAlign="left"
                sx={{ fontWeight: "200" }}
                width={"100%"}
                fontStyle="italic"
              >
                {language.webLanguage === "PL"
                  ? "JAK PRZYGOTOWAĆ SIĘ DO ZABIEGU?"
                  : "HOW TO PREPARE FOR THE PROCEDURE?"}
              </Typography>
              {language.webLanguage === "PL" &&
                laserRemovalOfPermanentMakeupAndTattoosPL.preparationForTreatment.map(
                  (preparation, index) => (
                    <Typography
                      variant={downMd ? "body2" : "body1"}
                      textAlign="left"
                      width="100%"
                      key={index}
                    >
                      - {preparation}
                    </Typography>
                  )
                )}
              {language.webLanguage === "ENG" &&
                laserRemovalOfPermanentMakeupAndTattoosEN.preparationForTreatment.map(
                  (preparation, index) => (
                    <Typography
                      variant={downMd ? "body2" : "body1"}
                      textAlign="left"
                      width="100%"
                      key={index}
                    >
                      - {preparation}
                    </Typography>
                  )
                )}
            </Grid>
            <Grid size={12}>
              <Divider />
            </Grid>
            <Grid size={12} display="flex" flexDirection={"column"} rowGap={2}>
              <Typography
                variant={downMd ? "body1" : "h6"}
                textAlign="left"
                sx={{ fontWeight: "200" }}
                width={"100%"}
                fontStyle="italic"
              >
                {language.webLanguage === "PL"
                  ? "ZALECENIA POZABIEGOWE"
                  : "POST-TREATMENT RECOMMENDATIONS"}
              </Typography>
              {language.webLanguage === "PL" &&
                laserRemovalOfPermanentMakeupAndTattoosPL.postTreatmentRecommendations.map(
                  (care, index) => (
                    <Typography
                      variant={downMd ? "body2" : "body1"}
                      textAlign="left"
                      width="100%"
                      key={index}
                    >
                      - {care}
                    </Typography>
                  )
                )}
              {language.webLanguage !== "PL" &&
                laserRemovalOfPermanentMakeupAndTattoosEN.postTreatmentRecommendations.map(
                  (care, index) => (
                    <Typography
                      variant={downMd ? "body2" : "body1"}
                      textAlign="left"
                      width="100%"
                      key={index}
                    >
                      - {care}
                    </Typography>
                  )
                )}
            </Grid>
          </Grid>
        </Grid>
        <Grid size={12}>
          <Divider />
        </Grid>
        <Grid
          size={downMd ? 12 : 7}
          display="flex"
          flexDirection={"column"}
          rowGap={2}
        >
          <Typography
            variant={downMd ? "body1" : "h6"}
            textAlign="left"
            sx={{ fontWeight: "200" }}
            width={"100%"}
            fontStyle="italic"
          >
            {language.webLanguage === "PL"
              ? "PRZECIWWSKAZANIA DO ZABIEGU"
              : "CONTRAINDICATIONS TO THE TREATMENT"}
          </Typography>
          {language.webLanguage === "PL" &&
            laserRemovalOfPermanentMakeupAndTattoosPL.contraindications.map(
              (contrindication, index) => (
                <Typography
                  variant={downMd ? "body2" : "body1"}
                  textAlign="left"
                  width="100%"
                  key={index}
                >
                  - {contrindication}
                </Typography>
              )
            )}
          {language.webLanguage === "ENG" &&
            laserRemovalOfPermanentMakeupAndTattoosEN.contraindications.map(
              (contrindication, index) => (
                <Typography
                  variant={downMd ? "body2" : "body1"}
                  textAlign="left"
                  width="100%"
                  key={index}
                >
                  - {contrindication}
                </Typography>
              )
            )}
        </Grid>
        {!downMd && (
          <Grid size={1} display={"flex"} justifyContent={"center"}>
            <Divider orientation="vertical" />
          </Grid>
        )}

        <Grid
          size={downMd ? 12 : 4}
          container
          direction={"column"}
          sx={{
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Grid size={12}>
            <Box
              component="img"
              sx={{
                height: "auto",
                width: "auto",
              }}
              src={laser_removal_2}
            />
          </Grid>
          <Grid size={12} display="flex" flexDirection={"column"} rowGap={2}>
            <Typography
              variant={downMd ? "body1" : "h6"}
              textAlign="left"
              sx={{ fontWeight: "200" }}
              width={"100%"}
              fontStyle="italic"
            >
              {language.webLanguage === "PL"
                ? "WSKAZANIA DO ZABIEGU"
                : "INDICATIONS FOR TREATMENT"}
            </Typography>
            {language.webLanguage === "PL" &&
              laserRemovalOfPermanentMakeupAndTattoosPL.indicationsToTreatment.map(
                (indication, index) => (
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                    key={index}
                  >
                    - {indication}
                  </Typography>
                )
              )}
            {language.webLanguage === "ENG" &&
              laserRemovalOfPermanentMakeupAndTattoosEN.indicationsToTreatment.map(
                (indication, index) => (
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                    key={index}
                  >
                    - {indication}
                  </Typography>
                )
              )}
          </Grid>
        </Grid>

        <Grid size={12}>
          <Divider />
        </Grid>
        <Grid size={12} display="flex" flexDirection={"column"} rowGap={2}>
          <Typography
            variant={downMd ? "body1" : "h6"}
            textAlign="left"
            sx={{ fontWeight: "200" }}
            width={"100%"}
            fontStyle="italic"
          >
            {language.webLanguage === "PL"
              ? "JAK PRZEBIEGA ZABIEG?"
              : "HOW DOES THE TREATMENT WORK?"}
          </Typography>
          {language.webLanguage === "PL" &&
            laserRemovalOfPermanentMakeupAndTattoosPL.courseOfTreatment.map(
              (item, index) => (
                <React.Fragment key={index}>
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                  >
                    {index + 1}. {item.title}
                  </Typography>
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                    fontWeight={300}
                  >
                    {item.description}
                  </Typography>
                </React.Fragment>
              )
            )}
          {language.webLanguage === "ENG" &&
            laserRemovalOfPermanentMakeupAndTattoosEN.courseOfTreatment.map(
              (item, index) => (
                <React.Fragment key={index}>
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                  >
                    {index + 1}. {item.title}
                  </Typography>
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                    fontWeight={300}
                  >
                    {item.description}
                  </Typography>
                </React.Fragment>
              )
            )}
        </Grid>
        <Grid size={12} p={1} container spacing={3}>
          <Grid size={12}>
            <Divider />
          </Grid>
          <Grid size={12} container spacing={2}>
            <Grid size={12}>
              <Typography
                variant={downMd ? "body1" : "h6"}
                textAlign="left"
                sx={{ fontWeight: "200" }}
                width={"100%"}
                fontStyle="italic"
              >
                {language.webLanguage === "PL"
                  ? "EFEKTY ZABIEGU"
                  : "TREATMENT EFFECTS"}
              </Typography>
            </Grid>
            <Grid size={12} container spacing={3}>
              <Grid size={downMd ? 12 : 3}>
                <Box
                  p={2}
                  component="img"
                  sx={{
                    height: "100%",
                    width: "100%",
                  }}
                  src={laser_removal_effect_0}
                />
              </Grid>
              <Grid size={downMd ? 12 : 3}>
                <Box
                  p={2}
                  component="img"
                  sx={{
                    height: "100%",
                    width: "100%",
                  }}
                  src={laser_removal_effect_1}
                />
              </Grid>
              <Grid size={downMd ? 12 : 3}>
                <Box
                  p={2}
                  component="img"
                  sx={{
                    height: "100%",
                    width: "100%",
                  }}
                  src={laser_removal_effect_2}
                />
              </Grid>
              <Grid size={downMd ? 12 : 3}>
                <Box
                  p={2}
                  component="img"
                  sx={{
                    height: "100%",
                    width: "100%",
                  }}
                  src={laser_removal_effect_3}
                />
              </Grid>
              <Grid size={downMd ? 12 : 3}>
                <Box
                  p={2}
                  component="img"
                  sx={{
                    height: "100%",
                    width: "100%",
                  }}
                  src={laser_removal_effect_4}
                />
              </Grid>
              <Grid size={downMd ? 12 : 3}>
                <Box
                  p={2}
                  component="img"
                  sx={{
                    height: "100%",
                    width: "100%",
                  }}
                  src={laser_removal_effect_5}
                />
              </Grid>
              <Grid size={downMd ? 12 : 3}>
                <Box
                  p={2}
                  component="img"
                  sx={{
                    height: "100%",
                    width: "100%",
                  }}
                  src={laser_removal_effect_6}
                />
              </Grid>
              <Grid size={downMd ? 12 : 3}>
                <Box
                  p={2}
                  component="img"
                  sx={{
                    height: "100%",
                    width: "100%",
                  }}
                  src={laser_removal_effect_7}
                />
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
