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
                ? "Mezoterapia igłowa skóry głowy Dr. cyj"
                : "Cyj Filler - Scalp mesotherapy treatment"}
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
                ? "Mezoterapia igłowa skóry głowy Dr. cyj".toUpperCase()
                : "Cyj Filler - Scalp mesotherapy treatment".toUpperCase()}
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
        <Grid size={12} container p={1}>
          <Grid size={downMd ? 12 : 5}>
            <Box
              component="img"
              sx={{
                height: "100%",
                width: "100%",
              }}
              alt="The house from the offer."
              src={nanofrax_mesotherapy}
            />
          </Grid>
          <Grid size={downMd ? 12 : 7} p={1} container spacing={3}>
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
                  ? "Czym jest technika One Needle i dla kogo jest przeznaczona?".toUpperCase()
                  : "What is the One Needle Technique and Who Is It For?".toUpperCase()}
              </Typography>
              <Typography
                variant={downMd ? "body2" : "body1"}
                textAlign="left"
                width="100%"
                gutterBottom
              >
                <Typography
                  variant={downMd ? "body2" : "body1"}
                  textAlign="left"
                  width={"100%"}
                  gutterBottom
                >
                  {language.webLanguage === "PL"
                    ? nanofraxMesotherapyDataPL.oneNeedleOverview
                    : nanofraxMesotherapyDataENG.oneNeedleOverview}
                </Typography>
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
              <Typography
                variant={downMd ? "body2" : "body1"}
                textAlign="left"
                width="100%"
                gutterBottom
              >
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
              </Typography>
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
                ? "PRZECIWWSKAZANIA DO ZABIEGU MEZOTERAPII IGŁOWEJ"
                : "CONTRAINDICATIONS FOR DR. CYJ SCALP MESOTHERAPY"}
            </Typography>
            <Typography
              variant={downMd ? "body2" : "body1"}
              textAlign="left"
              width="100%"
              gutterBottom
            >
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
            </Typography>
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
                ? "EFEKTY ZABIEGU"
                : "TREATMENT RESULTS"}
            </Typography>
            <Typography
              variant={downMd ? "body2" : "body1"}
              textAlign="left"
              width={"100%"}
              gutterBottom
            >
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
              <Typography
                variant={downMd ? "body2" : "body1"}
                textAlign="left"
                width={"100%"}
                gutterBottom
              >
                {language.webLanguage === "PL"
                  ? nanofraxMesotherapyDataPL.causesOfEfficiency
                  : nanofraxMesotherapyDataENG.causesOfEfficiency}
              </Typography>
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
            <Typography
              variant={downMd ? "body2" : "body1"}
              textAlign="left"
              width="100%"
              gutterBottom
            >
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
                ? "PIELĘGNACJA POZABIEGOWA"
                : "POST-TREATMENT CARE"}
            </Typography>
            <Typography
              variant={downMd ? "body2" : "body1"}
              textAlign="left"
              width="100%"
              gutterBottom
            >
              <Typography
                variant={downMd ? "body2" : "body1"}
                textAlign="left"
                width={"100%"}
                gutterBottom
              >
                {language.webLanguage === "PL"
                  ? nanofraxMesotherapyDataPL.postTreatmentCare
                  : nanofraxMesotherapyDataENG.postTreatmentCare}
              </Typography>
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
              <Typography
                variant={downMd ? "body2" : "body1"}
                textAlign="left"
                width={"100%"}
                gutterBottom
              >
                {language.webLanguage === "PL"
                  ? nanofraxMesotherapyDataPL.tytanTechnologyOverview
                  : nanofraxMesotherapyDataENG.tytanTechnologyOverview}
              </Typography>
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
          <BottomNavigationAction label="Facebook" icon={<FacebookIcon />} />
          <BottomNavigationAction label="Google" icon={<GoogleIcon />} />
          <BottomNavigationAction label="Instagram" icon={<InstagramIcon />} />
        </BottomNavigation>
      </Box>
    </Container>
  );
}
