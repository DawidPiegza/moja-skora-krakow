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
import eyebrow_lamination from "../../../../public/images/eyebrow_lamination.png";
import {
  eyebrowLaminationDataPL,
  eyebrowLaminationDataEN,
} from "./data/eyebrowLaminationData";
import eyebrow_lamination_effect_0 from "../../../../public/images/eyebrow_lamination_effect_0.png";
import eyebrow_lamination_effect_1 from "../../../../public/images/eyebrow_lamination_effect_1.png";
import eyebrow_lamination_effect_2 from "../../../../public/images/eyebrow_lamination_effect_2.png";
import eyebrow_lamination_effect_3 from "../../../../public/images/eyebrow_lamination_effect_3.png";

export default function EyebrowLaminationView() {
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
                ? "Stylizacja brwi i rzęs"
                : "Eyebrow & eyelash styling"}
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
                ? "Laminacja brwi"
                : "Eyebrow lamination"}
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
                ? "Laminacja brwi".toUpperCase()
                : "Eyebrow lamination".toUpperCase()}
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
                  ? eyebrowLaminationDataPL.infoTable.timeOfTreatment
                  : eyebrowLaminationDataEN.infoTable.timeOfTreatment}
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
                  ? eyebrowLaminationDataPL.infoTable.recommendedNumber
                  : eyebrowLaminationDataEN.infoTable.recommendedNumber}
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
                  ? eyebrowLaminationDataPL.infoTable.intervals
                  : eyebrowLaminationDataEN.infoTable.intervals}
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
              src={eyebrow_lamination}
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
                  ? eyebrowLaminationDataPL.overviewOfTreatment
                  : eyebrowLaminationDataEN.overviewOfTreatment}
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
                  ? "CZYM JEST BOTOX BRWI?"
                  : "WHAT IS EYEBROW BOTOX?"}
              </Typography>
              <Typography
                variant={downMd ? "body2" : "body1"}
                textAlign="left"
                width={"100%"}
                gutterBottom
              >
                {language.webLanguage === "PL"
                  ? eyebrowLaminationDataPL.eyebrowBotoxDescription
                  : eyebrowLaminationDataEN.eyebrowBotoxDescription}
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
                eyebrowLaminationDataPL.courseOfTreatment.map((step, index) => (
                  <React.Fragment key={index}>
                    <Typography
                      variant={downMd ? "body2" : "body1"}
                      textAlign="left"
                      width="100%"
                    >
                      - {step}
                    </Typography>
                  </React.Fragment>
                ))}
              {language.webLanguage === "ENG" &&
                eyebrowLaminationDataEN.courseOfTreatment.map((step, index) => (
                  <React.Fragment key={index}>
                    <Typography
                      variant={downMd ? "body2" : "body1"}
                      textAlign="left"
                      width="100%"
                    >
                      - {step}
                    </Typography>
                  </React.Fragment>
                ))}
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
                ? "PRZECIWWSKAZANIA DO ZABIEGU"
                : "CONTRAINDICATIONS FOR THE TREATMENT"}
            </Typography>

            {language.webLanguage === "PL" &&
              eyebrowLaminationDataPL.contraindicationsToTreatment.map(
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
              eyebrowLaminationDataEN.contraindicationsToTreatment.map(
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
              eyebrowLaminationDataPL.indicationsToTreatment.map(
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
              eyebrowLaminationDataEN.indicationsToTreatment.map(
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
              eyebrowLaminationDataPL.postTreatmentRecommendations.map(
                (recommendation, index) => (
                  <React.Fragment key={index}>
                    <Typography
                      variant={downMd ? "body2" : "body1"}
                      textAlign="left"
                      width="100%"
                    >
                      - {recommendation}
                    </Typography>
                  </React.Fragment>
                )
              )}
            {language.webLanguage === "ENG" &&
              eyebrowLaminationDataEN.postTreatmentRecommendations.map(
                (recommendation, index) => (
                  <React.Fragment key={index}>
                    <Typography
                      variant={downMd ? "body2" : "body1"}
                      textAlign="left"
                      width="100%"
                    >
                      - {recommendation}
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
                ? "JAK DŁUGO UTRZYMUJĄ SIĘ EFEKTY?"
                : "HOW LONG DO THE EFFECTS LAST?"}
            </Typography>

            <Typography
              variant={downMd ? "body2" : "body1"}
              textAlign="left"
              width="100%"
            >
              {language.webLanguage === "PL"
                ? eyebrowLaminationDataPL.constancyOfResults
                : eyebrowLaminationDataEN.constancyOfResults}
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
                  ? "PRZED I PO ZABIEGU"
                  : "BEFORE AND AFTER TREATMENT"}
              </Typography>
            </Grid>
            <Grid size={12} container spacing={3}>
              <Grid size={downMd ? 12 : 6}>
                <Box
                  p={2}
                  component="img"
                  sx={{
                    height: "100%",
                    width: "100%",
                  }}
                  alt="The house from the offer."
                  src={eyebrow_lamination_effect_0}
                />
              </Grid>
              <Grid size={downMd ? 12 : 6}>
                <Box
                  p={2}
                  component="img"
                  sx={{
                    height: "100%",
                    width: "100%",
                  }}
                  alt="The house from the offer."
                  src={eyebrow_lamination_effect_1}
                />
              </Grid>
              <Grid size={downMd ? 12 : 6}>
                <Box
                  p={2}
                  component="img"
                  sx={{
                    height: "100%",
                    width: "100%",
                  }}
                  alt="The house from the offer."
                  src={eyebrow_lamination_effect_2}
                />
              </Grid>
              <Grid size={downMd ? 12 : 6}>
                <Box
                  p={2}
                  component="img"
                  sx={{
                    height: "100%",
                    width: "100%",
                  }}
                  alt="The house from the offer."
                  src={eyebrow_lamination_effect_3}
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
          <BottomNavigationAction label="Facebook" icon={<FacebookIcon />} />
          <BottomNavigationAction label="Google" icon={<GoogleIcon />} />
          <BottomNavigationAction label="Instagram" icon={<InstagramIcon />} />
        </BottomNavigation>
      </Box>
    </Container>
  );
}
