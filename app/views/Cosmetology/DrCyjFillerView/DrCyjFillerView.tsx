import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Breadcrumbs,
  Card,
  CardMedia,
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
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import { WebsiteLanguageContext } from "../../../shared/contexts/LanguageContext";
import mezoterapia_iglowa_dr_cyj_1 from "../../../../public/images/mezoterapia_iglowa_dr_cyj_1.jpeg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { drCyjFillerDataPL, drCyjFillerDataENG } from "./data/drCyjFillerData";
import RepeatIcon from "@mui/icons-material/Repeat";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";

export default function DrCyjFillerView() {
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
        <Grid size={12} container p={1}>
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
                    ? drCyjFillerDataPL.infoTable.timeOfTreatment
                    : drCyjFillerDataENG.infoTable.timeOfTreatment}
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
                    ? drCyjFillerDataPL.infoTable.recommendedNumber
                    : drCyjFillerDataENG.infoTable.recommendedNumber}
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
                    ? drCyjFillerDataPL.infoTable.intervals
                    : drCyjFillerDataENG.infoTable.intervals}
                </Typography>
                <Typography variant="body2" fontWeight={300}>
                  {language.webLanguage === "PL"
                    ? "ODSTĘPY POMIĘDZY ZABIEGAMI"
                    : "INTERVALS BETWEEN TREATMENTS"}
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid size={3}>
            <Box
              component="img"
              sx={{
                height: "auto",
                width: "100%",
              }}
              alt="The house from the offer."
              src={mezoterapia_iglowa_dr_cyj_1}
            />
          </Grid>
          <Grid
            size={9}
            container
            direction="column"
            sx={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
            rowGap={4}
          >
            <Grid size={12} p={1} container>
              <Grid
                size={12}
                display="flex"
                flexDirection={"column"}
                rowGap={2}
              >
                <Typography
                  variant={downMd ? "body2" : "body1"}
                  textAlign="left"
                  width={"100%"}
                  gutterBottom
                >
                  {language.webLanguage === "PL"
                    ? drCyjFillerDataPL.description
                    : drCyjFillerDataENG.description}
                </Typography>
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
                    drCyjFillerDataPL.indicationsToTreatment.map(
                      (indication, index) => (
                        <div key={index}>- {indication}</div>
                      )
                    )}
                  {language.webLanguage !== "PL" &&
                    drCyjFillerDataENG.indicationsToTreatment.map(
                      (indication, index) => (
                        <div key={index}>- {indication}</div>
                      )
                    )}
                </Typography>
                <Typography
                  variant={downMd ? "body1" : "h6"}
                  textAlign="left"
                  sx={{ fontWeight: "200" }}
                  width={"100%"}
                  fontStyle="italic"
                >
                  {language.webLanguage === "PL"
                    ? "DR. CYJ – TERAPIA PEPTYDOWA NA WYPADANIE WŁOSÓW"
                    : "DR. CYJ – PEPTIDE THERAPY FOR HAIR LOSS"}
                </Typography>
                <Typography
                  variant={downMd ? "body2" : "body1"}
                  textAlign="left"
                  width="100%"
                  gutterBottom
                >
                  {language.webLanguage === "PL" &&
                    drCyjFillerDataPL.descriptionOfPreparation}
                  {language.webLanguage !== "PL" &&
                    drCyjFillerDataENG.descriptionOfPreparation}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          size={12}
          container
          p={1}
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
            {language.webLanguage === "PL" ? "SKŁAD PREPARATU" : "FORMULATION"}
          </Typography>
          <Typography
            variant={downMd ? "body2" : "body1"}
            textAlign="left"
            width="100%"
            gutterBottom
          >
            {language.webLanguage === "PL" &&
              drCyjFillerDataPL.compositionOfPreparation}
            {language.webLanguage !== "PL" &&
              drCyjFillerDataENG.compositionOfPreparation}
          </Typography>
        </Grid>
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
          width="100%"
          gutterBottom
        >
          {language.webLanguage === "PL" &&
            drCyjFillerDataPL.effectsOfTratment.map((indication, index) => (
              <div key={index}>- {indication}</div>
            ))}
          {language.webLanguage !== "PL" &&
            drCyjFillerDataENG.effectsOfTratment.map((indication, index) => (
              <div key={index}>- {indication}</div>
            ))}
        </Typography>
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
            drCyjFillerDataPL.contraindications.map((indication, index) => (
              <div key={index}>- {indication}</div>
            ))}
          {language.webLanguage !== "PL" &&
            drCyjFillerDataENG.contraindications.map((indication, index) => (
              <div key={index}>- {indication}</div>
            ))}
        </Typography>
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
        <Typography
          variant={downMd ? "body2" : "body1"}
          textAlign="left"
          width="100%"
          gutterBottom
        >
          {language.webLanguage === "PL" && drCyjFillerDataPL.courseOfTreatment}
          {language.webLanguage !== "PL" &&
            drCyjFillerDataENG.courseOfTreatment}
        </Typography>
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
            drCyjFillerDataPL.postTreatmentRecommendations}
          {language.webLanguage !== "PL" &&
            drCyjFillerDataENG.postTreatmentRecommendations}
        </Typography>
        <Typography
          variant={downMd ? "body1" : "h6"}
          textAlign="left"
          sx={{ fontWeight: "200" }}
          width={"100%"}
          fontStyle="italic"
        >
          {language.webLanguage === "PL"
            ? "JAK CZĘSTO POWTARZAĆ ZABIEG?"
            : "HOW OFTEN SHOULD THE TREATMENT BE REPEATED?"}
        </Typography>
        <Typography
          variant={downMd ? "body2" : "body1"}
          textAlign="left"
          width="100%"
          gutterBottom
        >
          {language.webLanguage === "PL" &&
            drCyjFillerDataPL.interfalsInTreatment}
          {language.webLanguage !== "PL" &&
            drCyjFillerDataENG.interfalsInTreatment}
        </Typography>
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
