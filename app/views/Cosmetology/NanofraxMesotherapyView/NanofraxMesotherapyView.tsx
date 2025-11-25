import React from "react";
import { WebsiteLanguageContext } from "../../../shared/contexts/LanguageContext";
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
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import RepeatIcon from "@mui/icons-material/Repeat";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import nanofrax_mesotherapy from "../../../../public/images/nanofrax_mesotherapy.jpeg";
import nanofrax_mesotherapy_2 from "../../../../public/images/nanofrax_mesotherapy_2.jpg";

import {
  nanofraxMesotherapyDataPL,
  nanofraxMesotherapyDataENG,
} from "./data/nanofraxMesotherapyData";

export default function NanofraxMesotherapyView() {
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
                ? "Mezoterapia mikroigłowa NANOFRAX"
                : "Nanofrax Microneedling Mesotherapy"}
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
                ? "Mezoterapia mikroigłowa NANOFRAX".toUpperCase()
                : "Nanofrax Microneedling Mesotherapy".toUpperCase()}
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
                  ? nanofraxMesotherapyDataPL.infoTable.timeOfTreatment
                  : nanofraxMesotherapyDataENG.infoTable.timeOfTreatment}
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
                  ? nanofraxMesotherapyDataPL.infoTable.recommendedNumber
                  : nanofraxMesotherapyDataENG.infoTable.recommendedNumber}
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
                  ? nanofraxMesotherapyDataPL.infoTable.intervals
                  : nanofraxMesotherapyDataENG.infoTable.intervals}
              </Typography>
              <Typography variant="body2" fontWeight={300}>
                {language.webLanguage === "PL"
                  ? "ODSTĘPY POMIĘDZY ZABIEGAMI"
                  : "INTERVALS BETWEEN TREATMENTS"}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid
          size={12}
          container
          p={1}
          alignItems={downMd ? "flex-start" : "stretch"}
        >
          <Grid size={downMd ? 12 : 4}>
            <Box
              component="img"
              sx={{
                height: "auto",
                width: "auto",
              }}
              src={nanofrax_mesotherapy}
            />
          </Grid>
          <Grid size={downMd ? 12 : 8} p={1} container spacing={3}>
            <Grid size={12} display="flex" flexDirection={"column"} rowGap={2}>
              <Typography
                variant={downMd ? "body2" : "body1"}
                textAlign="left"
                width={"100%"}
                gutterBottom
              >
                {language.webLanguage === "PL"
                  ? nanofraxMesotherapyDataPL.overview
                  : nanofraxMesotherapyDataENG.overview}
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
                  ? "DLACZEGO NANOFRAX DZIAŁA TAK SKUTECZNIE?".toUpperCase()
                  : "WHY IS NANOFRAX SO EFFECTIVE?".toUpperCase()}
              </Typography>
              <Typography
                variant={downMd ? "body2" : "body1"}
                textAlign="left"
                width="100%"
                gutterBottom
              >
                {language.webLanguage === "PL"
                  ? nanofraxMesotherapyDataPL.causesOfEfficiency
                  : nanofraxMesotherapyDataENG.causesOfEfficiency}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={12}>
          <Divider />
        </Grid>
        <Grid
          size={12}
          container
          direction={"row"}
          alignItems={"stretch"}
          height={"max-content"}
        >
          <Grid
            size={downMd ? 12 : 8}
            display="flex"
            flexDirection={"column"}
            rowGap={2}
            justifyContent={downMd ? "flex-start" : "space-between"}
          >
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
              nanofraxMesotherapyDataPL.courseOfTreatment.map(
                (indication, index) => (
                  <React.Fragment key={index}>
                    <Typography
                      variant={downMd ? "body2" : "body1"}
                      textAlign="left"
                      width="100%"
                    >
                      {index + 1}. {indication.title}
                    </Typography>
                    <Typography
                      variant={downMd ? "body2" : "body1"}
                      textAlign="left"
                      width="100%"
                      fontWeight={300}
                    >
                      {indication.description}
                    </Typography>
                  </React.Fragment>
                )
              )}
            {language.webLanguage === "ENG" &&
              nanofraxMesotherapyDataENG.courseOfTreatment.map(
                (indication, index) => (
                  <React.Fragment key={index}>
                    <Typography
                      variant={downMd ? "body2" : "body1"}
                      textAlign="left"
                      width="100%"
                    >
                      {index + 1}. {indication.title}
                    </Typography>
                    <Typography
                      variant={downMd ? "body2" : "body1"}
                      textAlign="left"
                      width="100%"
                      fontWeight={300}
                    >
                      {indication.description}
                    </Typography>
                  </React.Fragment>
                )
              )}
          </Grid>
          <Grid size={downMd ? 12 : 4}>
            <Box
              component="img"
              sx={{
                height: downMd ? "auto" : "100%",
                width: "auto",
              }}
              src={nanofrax_mesotherapy_2}
            />
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
                ? "PRZECIWWSKAZANIA DO ZABIEGU"
                : "CONTRAINDICATIONS FOR THE TREATMENT"}
            </Typography>

            {language.webLanguage === "PL" &&
              nanofraxMesotherapyDataPL.contraindications.map(
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
              nanofraxMesotherapyDataENG.contraindications.map(
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
                ? "WSKAZANIA DO ZABIEGU"
                : "INDICATIONS FOR THE TREATMENT"}
            </Typography>

            {language.webLanguage === "PL" &&
              nanofraxMesotherapyDataPL.indicationsToTreatment.map(
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
              nanofraxMesotherapyDataENG.indicationsToTreatment.map(
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
                ? "Czym jest technika One Needle i dla kogo jest przeznaczona?".toUpperCase()
                : "What is the One Needle Technique and Who Is It For?".toUpperCase()}
            </Typography>
            <Typography
              variant={downMd ? "body2" : "body1"}
              textAlign="left"
              width="100%"
              gutterBottom
            >
              {language.webLanguage === "PL"
                ? nanofraxMesotherapyDataPL.oneNeedleOverview
                : nanofraxMesotherapyDataENG.oneNeedleOverview}
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
                ? "EFEKTY ZABIEGU"
                : "TREATMENT RESULTS"}
            </Typography>
            {language.webLanguage === "PL" &&
              nanofraxMesotherapyDataPL.effectsOfTratment.map(
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
              nanofraxMesotherapyDataENG.effectsOfTratment.map(
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
                ? "ZALECENIA POZABIEGOWE"
                : "POST-TREATMENT RECOMMENDATIONS"}
            </Typography>
            {language.webLanguage === "PL" &&
              (
                nanofraxMesotherapyDataPL.postTreatmentRecommendations as string[]
              ).map((recomendation, index) => (
                <Typography
                  variant={downMd ? "body2" : "body1"}
                  textAlign="left"
                  width="100%"
                  key={index}
                >
                  - {recomendation}
                </Typography>
              ))}
            {language.webLanguage === "ENG" &&
              (
                nanofraxMesotherapyDataENG.postTreatmentRecommendations as string[]
              ).map((recomendation, index) => (
                <Typography
                  variant={downMd ? "body2" : "body1"}
                  textAlign="left"
                  width="100%"
                  key={index}
                >
                  - {recomendation}
                </Typography>
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
                ? "PIELĘGNACJA POZABIEGOWA"
                : "POST-TREATMENT CARE"}
            </Typography>
            <Typography
              variant={downMd ? "body2" : "body1"}
              textAlign="left"
              width="100%"
              gutterBottom
            >
              {language.webLanguage === "PL"
                ? nanofraxMesotherapyDataPL.postTreatmentCare
                : nanofraxMesotherapyDataENG.postTreatmentCare}
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
                ? "Technologia Tytan-TEC® – komfort i bezpieczeństwo".toUpperCase()
                : "Tytan-TEC® Technology – Comfort and Safety".toUpperCase()}
            </Typography>
            <Typography
              variant={downMd ? "body2" : "body1"}
              textAlign="left"
              width="100%"
              gutterBottom
            >
              {language.webLanguage === "PL"
                ? nanofraxMesotherapyDataPL.tytanTechnologyOverview
                : nanofraxMesotherapyDataENG.tytanTechnologyOverview}
            </Typography>
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
