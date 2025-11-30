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
import {
  tissueStimulatorsDataPL,
  tissueStimulatorsDataEN,
} from "./data/tissueStimulatorsData";
import tissue_stimulators from "../../../../public/images/tissue_stimulators.png";
import tissue_stimulators_effect_0 from "../../../../public/images/tissue_stimulators_effect_0.png";
import tissue_stimulators_effect_1 from "../../../../public/images/tissue_stimulators_effect_1.png";
import tissue_stimulators_effect_2 from "../../../../public/images/tissue_stimulators_effect_2.png";
import tissue_stimulators_effect_3 from "../../../../public/images/tissue_stimulators_effect_3.png";

export default function TissueStimulatorsView() {
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
                ? "Stymulatory tkankowe"
                : "Tissue Stimulators"}
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
                ? "Stymulatory tkankowe".toUpperCase()
                : "Tissue Stimulators".toUpperCase()}
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
                  ? tissueStimulatorsDataPL.infoTable.timeOfTreatment
                  : tissueStimulatorsDataEN.infoTable.timeOfTreatment}
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
                  ? tissueStimulatorsDataPL.infoTable.recommendedNumber
                  : tissueStimulatorsDataEN.infoTable.recommendedNumber}
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
                  ? tissueStimulatorsDataPL.infoTable.intervals
                  : tissueStimulatorsDataEN.infoTable.intervals}
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
              src={tissue_stimulators}
            />
          </Grid>
          <Grid size={downMd ? 12 : 8} p={1} container spacing={1}>
            <Grid size={12} display="flex" flexDirection={"column"} rowGap={2}>
              <Typography
                variant={downMd ? "body2" : "body1"}
                textAlign="left"
                width={"100%"}
                gutterBottom
              >
                {language.webLanguage === "PL"
                  ? tissueStimulatorsDataPL.overview
                  : tissueStimulatorsDataEN.overview}
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
                  ? "ZALECENIA PRZED ZABIEGIEM"
                  : '"PRE-TREATMENT RECOMMENDATIONS'}
              </Typography>
              {language.webLanguage === "PL" &&
                tissueStimulatorsDataPL.preparationForTreatment.map(
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
              {language.webLanguage !== "PL" &&
                tissueStimulatorsDataEN.preparationForTreatment.map(
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
          </Grid>
        </Grid>
        <Grid size={12}>
          <Divider />
        </Grid>
        <Grid size={12} p={1} container spacing={3}>
          <Grid
            size={downMd ? 12 : 3}
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
                ? tissueStimulatorsDataPL.stimulatorType[0].name
                : tissueStimulatorsDataEN.stimulatorType[0].name}
            </Typography>
            <Typography
              variant={downMd ? "body2" : "body1"}
              textAlign="left"
              width="100%"
            >
              {language.webLanguage === "PL"
                ? tissueStimulatorsDataPL.stimulatorType[0].description
                : tissueStimulatorsDataEN.stimulatorType[0].description}
            </Typography>
          </Grid>
          {downMd && (
            <Grid size={12}>
              <Divider />
            </Grid>
          )}
          {!downMd && (
            <Grid size={1} display={"flex"} justifyContent={"center"}>
              <Divider orientation="vertical" />
            </Grid>
          )}
          <Grid
            size={downMd ? 12 : 3}
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
                ? tissueStimulatorsDataPL.stimulatorType[1].name
                : tissueStimulatorsDataEN.stimulatorType[1].name}
            </Typography>
            <Typography
              variant={downMd ? "body2" : "body1"}
              textAlign="left"
              width="100%"
            >
              {language.webLanguage === "PL"
                ? tissueStimulatorsDataPL.stimulatorType[1].description
                : tissueStimulatorsDataEN.stimulatorType[1].description}
            </Typography>
          </Grid>
          {downMd && (
            <Grid size={12}>
              <Divider />
            </Grid>
          )}
          {!downMd && (
            <Grid size={1} display={"flex"} justifyContent={"center"}>
              <Divider orientation="vertical" />
            </Grid>
          )}
          <Grid
            size={downMd ? 12 : 3}
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
                ? tissueStimulatorsDataPL.stimulatorType[2].name
                : tissueStimulatorsDataEN.stimulatorType[2].name}
            </Typography>
            <Typography
              variant={downMd ? "body2" : "body1"}
              textAlign="left"
              width="100%"
            >
              {language.webLanguage === "PL"
                ? tissueStimulatorsDataPL.stimulatorType[2].description
                : tissueStimulatorsDataEN.stimulatorType[2].description}
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
                ? "WSKAZANIA DO ZABIEGU"
                : "INDICATIONS FOR THE TREATMENT"}
            </Typography>
            {language.webLanguage === "PL" &&
              tissueStimulatorsDataPL.indicationsToTreatment.map(
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
            {language.webLanguage !== "PL" &&
              tissueStimulatorsDataEN.indicationsToTreatment.map(
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
              tissueStimulatorsDataPL.courseOfTreatment.map((item, index) => (
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
              ))}
            {language.webLanguage === "ENG" &&
              tissueStimulatorsDataEN.courseOfTreatment.map((item, index) => (
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
              ))}
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
              tissueStimulatorsDataPL.postTreatmentRecommendations.map(
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
              tissueStimulatorsDataEN.postTreatmentRecommendations.map(
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
                ? "PRZECIWWSKAZANIA DO ZABIEGU"
                : "CONTRAINDICATIONS FOR TREATMENT"}
            </Typography>
            {language.webLanguage === "PL" &&
              tissueStimulatorsDataPL.contraindicationsForTreatment.map(
                (contraindication, index) => (
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                    key={index}
                  >
                    - {contraindication}
                  </Typography>
                )
              )}
            {language.webLanguage !== "PL" &&
              tissueStimulatorsDataEN.contraindicationsForTreatment.map(
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
                  src={tissue_stimulators_effect_0}
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
                  src={tissue_stimulators_effect_1}
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
                  src={tissue_stimulators_effect_2}
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
                  src={tissue_stimulators_effect_3}
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
