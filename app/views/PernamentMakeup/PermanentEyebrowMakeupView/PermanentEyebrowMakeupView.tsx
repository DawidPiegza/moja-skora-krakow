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
import permanent_eyebrow_makeup_effect_0 from "../../../../public/images/permanent_eyebrow_makeup_effect_0.png";
import permanent_eyebrow_makeup_effect_1 from "../../../../public/images/permanent_eyebrow_makeup_effect_1.png";
import permanent_eyebrow_makeup_effect_2 from "../../../../public/images/permanent_eyebrow_makeup_effect_2.png";
import permanent_eyebrow_makeup_effect_3 from "../../../../public/images/permanent_eyebrow_makeup_effect_3.png";
import permanent_eyebrow_makeup_effect_4 from "../../../../public/images/permanent_eyebrow_makeup_effect_4.png";
import permanent_eyebrow_makeup_effect_5 from "../../../../public/images/permanent_eyebrow_makeup_effect_5.jpg";
import permanent_eyebrow_makeup_effect_6 from "../../../../public/images/permanent_eyebrow_makeup_effect_6.jpg";
import permanent_eyebrow_makeup_effect_7 from "../../../../public/images/permanent_eyebrow_makeup_effect_7.png";
import permanent_eyebrow_makeup_effect_8 from "../../../../public/images/permanent_eyebrow_makeup_effect_8.png";
import permanent_eyebrow_makeup_effect_9 from "../../../../public/images/permanent_eyebrow_makeup_effect_9.jpg";
import permanent_eyebrow_makeup_effect_10 from "../../../../public/images/permanent_eyebrow_makeup_effect_10.jpg";
import permanent_eyebrow_makeup_effect_11 from "../../../../public/images/permanent_eyebrow_makeup_effect_11.jpg";

import {
  pernamentEyebrowMakeupDataPL,
  pernamentEyebrowMakeupDataEN,
} from "./data/pernamentEyebrowMakeupData";
import permanent_eyebrow_makeup from "../../../../public/images/permanent_eyebrow_makeup.jpg";

export default function PermanentEyebrowMakeupView() {
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
              {language.webLanguage === "PL"
                ? "Makijaż permanentny"
                : "Permanent makeup"}
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
                ? "Makijaż permanentny brwi"
                : "Permanent eyebrow makeup"}
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
                ? "Makijaż permanentny brwi".toUpperCase()
                : "Permanent eyebrow makeup".toUpperCase()}
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
                  ? pernamentEyebrowMakeupDataPL.infoTable.timeOfTreatment
                  : pernamentEyebrowMakeupDataEN.infoTable.timeOfTreatment}
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
                  ? pernamentEyebrowMakeupDataPL.infoTable.recommendedNumber
                  : pernamentEyebrowMakeupDataEN.infoTable.recommendedNumber}
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
                  ? pernamentEyebrowMakeupDataPL.infoTable.intervals
                  : pernamentEyebrowMakeupDataEN.infoTable.intervals}
              </Typography>
              <Typography variant="body2" fontWeight={300}>
                {language.webLanguage === "PL"
                  ? "ODSTĘPY POMIĘDZY ZABIEGAMI"
                  : "INTERVALS BETWEEN TREATMENTS"}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid size={12} container p={1} alignItems={"center"}>
          <Grid size={downMd ? 12 : 4}>
            <Box
              component="img"
              sx={{
                height: "auto",
                width: "auto",
              }}
              src={permanent_eyebrow_makeup}
            />
          </Grid>
          <Grid size={downMd ? 12 : 8} p={1} container spacing={3}>
            <Grid size={12} display="flex" flexDirection={"column"} rowGap={2}>
              <Typography
                variant={downMd ? "body2" : "body1"}
                textAlign="left"
                width={"100%"}
              >
                {language.webLanguage === "PL"
                  ? pernamentEyebrowMakeupDataPL.overview
                  : pernamentEyebrowMakeupDataEN.overview}
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
                  ? "Dla kogo przeznaczony jest zabieg makijażu permanentnego brwi?".toUpperCase()
                  : "WHO IS THE PERMANENT EYEBROW MAKEUP PROCEDURE FOR?".toUpperCase()}
              </Typography>
              {language.webLanguage === "PL" &&
                pernamentEyebrowMakeupDataPL.treatementRecommendation.map(
                  (recomendation, index) => (
                    <Typography
                      variant={downMd ? "body2" : "body1"}
                      textAlign="left"
                      width="100%"
                      key={index}
                    >
                      - {recomendation}
                    </Typography>
                  )
                )}
              {language.webLanguage === "ENG" &&
                pernamentEyebrowMakeupDataEN.treatementRecommendation.map(
                  (recomendation, index) => (
                    <Typography
                      variant={downMd ? "body2" : "body1"}
                      textAlign="left"
                      width="100%"
                      key={index}
                    >
                      - {recomendation}
                    </Typography>
                  )
                )}
            </Grid>
          </Grid>
        </Grid>
        <Grid size={12}>
          <Divider />
        </Grid>
        <Grid size={12} p={1} container spacing={3}>
          <Grid
            size={downMd ? 12 : 5}
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
                ? "PRZECIWWSKAZANIA BEZWZGLĘDNE:"
                : "ABSOLUTE CONTRAINDICATIONS:"}
            </Typography>
            {language.webLanguage === "PL" &&
              pernamentEyebrowMakeupDataPL.contraindications.absolute.map(
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
              pernamentEyebrowMakeupDataEN.contraindications.absolute.map(
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
          {downMd && (
            <Grid size={12}>
              <Divider />
            </Grid>
          )}
          {!downMd && (
            <Grid size={2} display={"flex"} justifyContent={"center"}>
              <Divider orientation="vertical" />
            </Grid>
          )}
          <Grid
            size={downMd ? 12 : 5}
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
                ? "PRZECIWWSKAZANIA WZGLĘDNE:"
                : "RELATIVE CONTRAINDICATIONS:"}
            </Typography>
            {language.webLanguage === "PL" &&
              pernamentEyebrowMakeupDataPL.contraindications.relative.map(
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
              pernamentEyebrowMakeupDataEN.contraindications.relative.map(
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
              pernamentEyebrowMakeupDataPL.preparationForTreatment.map(
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
              pernamentEyebrowMakeupDataEN.preparationForTreatment.map(
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
                ? "JAK PRZEBIEGA ZABIEG?"
                : "HOW DOES THE TREATMENT WORK?"}
            </Typography>
            {language.webLanguage === "PL" &&
              pernamentEyebrowMakeupDataPL.courseOfTreatment.map(
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
              pernamentEyebrowMakeupDataEN.courseOfTreatment.map(
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
              pernamentEyebrowMakeupDataPL.postTreatmentRecommendations.map(
                (recomendation, index) => (
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                    key={index}
                  >
                    - {recomendation}
                  </Typography>
                )
              )}
            {language.webLanguage !== "PL" &&
              pernamentEyebrowMakeupDataEN.postTreatmentRecommendations.map(
                (recomendation, index) => (
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                    key={index}
                  >
                    - {recomendation}
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
                ? "JAK CZĘSTO POWTARZAĆ ZABIEG?"
                : "HOW OFTEN TO REPEAT THE TREATMENT?"}
            </Typography>

            <Typography
              variant={downMd ? "body2" : "body1"}
              textAlign="left"
              width="100%"
            >
              {language.webLanguage === "PL"
                ? pernamentEyebrowMakeupDataPL.treatmentCycles
                : pernamentEyebrowMakeupDataEN.treatmentCycles}
            </Typography>
          </Grid>
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
              <Grid size={downMd ? 12 : 4}>
                <Box
                  p={2}
                  component="img"
                  sx={{
                    height: "100%",
                    width: "100%",
                  }}
                  src={permanent_eyebrow_makeup_effect_0}
                />
              </Grid>
              <Grid size={downMd ? 12 : 4}>
                <Box
                  p={2}
                  component="img"
                  sx={{
                    height: "100%",
                    width: "100%",
                  }}
                  src={permanent_eyebrow_makeup_effect_1}
                />
              </Grid>
              <Grid size={downMd ? 12 : 4}>
                <Box
                  p={2}
                  component="img"
                  sx={{
                    height: "100%",
                    width: "100%",
                  }}
                  src={permanent_eyebrow_makeup_effect_2}
                />
              </Grid>
              <Grid size={downMd ? 12 : 4}>
                <Box
                  p={2}
                  component="img"
                  sx={{
                    height: "100%",
                    width: "100%",
                  }}
                  src={permanent_eyebrow_makeup_effect_3}
                />
              </Grid>
              <Grid size={downMd ? 12 : 4}>
                <Box
                  p={2}
                  component="img"
                  sx={{
                    height: "100%",
                    width: "100%",
                  }}
                  src={permanent_eyebrow_makeup_effect_4}
                />
              </Grid>

              <Grid size={downMd ? 12 : 4}>
                <Box
                  p={2}
                  component="img"
                  sx={{
                    height: "100%",
                    width: "100%",
                  }}
                  src={permanent_eyebrow_makeup_effect_7}
                />
              </Grid>
              <Grid size={downMd ? 12 : 4}>
                <Box
                  p={2}
                  component="img"
                  sx={{
                    height: "100%",
                    width: "100%",
                  }}
                  src={permanent_eyebrow_makeup_effect_8}
                />
              </Grid>
              <Grid size={downMd ? 12 : 4}>
                <Box
                  p={2}
                  component="img"
                  sx={{
                    height: "100%",
                    width: "100%",
                  }}
                  src={permanent_eyebrow_makeup_effect_6}
                />
              </Grid>

              <Grid size={downMd ? 12 : 4}>
                <Box
                  p={2}
                  component="img"
                  sx={{
                    height: "100%",
                    width: "100%",
                  }}
                  src={permanent_eyebrow_makeup_effect_9}
                />
              </Grid>
              <Grid size={downMd ? 12 : 4}>
                <Box
                  p={2}
                  component="img"
                  sx={{
                    height: "100%",
                    width: "100%",
                  }}
                  src={permanent_eyebrow_makeup_effect_10}
                />
              </Grid>
              <Grid size={downMd ? 12 : 4}>
                <Box
                  p={2}
                  component="img"
                  sx={{
                    height: "100%",
                    width: "100%",
                  }}
                  src={permanent_eyebrow_makeup_effect_11}
                />
              </Grid>
              <Grid size={downMd ? 12 : 4}>
                <Box
                  p={2}
                  component="img"
                  sx={{
                    height: "100%",
                    width: "100%",
                  }}
                  src={permanent_eyebrow_makeup_effect_5}
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
