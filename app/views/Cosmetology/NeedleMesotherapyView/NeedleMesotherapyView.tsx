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
  needleMesotherapyDataEN,
  needleMesotherapyDataPL,
} from "./data/needleMesotherapyData";
import needle_mesotherapy from "../../../../public/images/needle_mesotherapy.png";

export default function NeedleMesotherapyView() {
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
                ? "Mezoterapia Igłowa"
                : "Needle Mesotherapy"}
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
                ? "Mezoterapia Igłowa".toUpperCase()
                : "Needle Mesotherapy".toUpperCase()}
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
                  ? needleMesotherapyDataPL.infoTable.timeOfTreatment
                  : needleMesotherapyDataEN.infoTable.timeOfTreatment}
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
                  ? needleMesotherapyDataPL.infoTable.recommendedNumber
                  : needleMesotherapyDataEN.infoTable.recommendedNumber}
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
                  ? needleMesotherapyDataPL.infoTable.intervals
                  : needleMesotherapyDataEN.infoTable.intervals}
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
          <Grid size={downMd ? 12 : 4}>
            <Box
              component="img"
              sx={{
                height: "100%",
                width: "100%",
              }}
              alt="The house from the offer."
              src={needle_mesotherapy}
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
                  ? needleMesotherapyDataPL.overview
                  : needleMesotherapyDataEN.overview}
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
                  needleMesotherapyDataPL.indicationsToTreatment.map(
                    (indication, index) => <div key={index}>- {indication}</div>
                  )}
                {language.webLanguage !== "PL" &&
                  needleMesotherapyDataEN.indicationsToTreatment.map(
                    (indication, index) => <div key={index}>- {indication}</div>
                  )}
              </Typography>
            </Grid>
            <Grid size={12}>
              <Divider />
            </Grid>
          </Grid>
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
                needleMesotherapyDataPL.contraindications.map(
                  (indication, index) => <div key={index}>- {indication}</div>
                )}
              {language.webLanguage !== "PL" &&
                needleMesotherapyDataEN.contraindications.map(
                  (indication, index) => <div key={index}>- {indication}</div>
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
                needleMesotherapyDataPL.effectsOfTratment.map(
                  (indication, index) => (
                    <div key={index} style={{ paddingBottom: "5x" }}>
                      - {indication}
                    </div>
                  )
                )}
              {language.webLanguage !== "PL" &&
                needleMesotherapyDataEN.effectsOfTratment.map(
                  (indication, index) => (
                    <div key={index} style={{ paddingBottom: "5x" }}>
                      - {indication}
                    </div>
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
                ? "JAK PRZEBIEGA ZABIEG?"
                : "HOW DOES THE TREATMENT WORK?"}
            </Typography>
            <Typography
              variant={downMd ? "body2" : "body1"}
              textAlign="left"
              width="100%"
              gutterBottom
            >
              {language.webLanguage === "PL" &&
                (needleMesotherapyDataPL.courseOfTreatment as string[]).map(
                  (indication: string, index: number) => (
                    <div key={index} style={{ paddingBottom: "5x" }}>
                      {index + 1}. {indication}
                    </div>
                  )
                )}
              {language.webLanguage !== "PL" &&
                (needleMesotherapyDataEN.courseOfTreatment as string[]).map(
                  (indication: string, index: number) => (
                    <div key={index} style={{ paddingBottom: "5x" }}>
                      {index + 1}. {indication}
                    </div>
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
                  needleMesotherapyDataPL.postTreatmentRecommendations as string[]
                ).map((indication: string, index: number) => (
                  <div key={index}>- {indication}</div>
                ))}
              {language.webLanguage !== "PL" &&
                (
                  needleMesotherapyDataEN.postTreatmentRecommendations as string[]
                ).map((indication: string, index: number) => (
                  <div key={index}>- {indication}</div>
                ))}
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
