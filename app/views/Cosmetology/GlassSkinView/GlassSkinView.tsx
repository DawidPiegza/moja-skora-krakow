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
import glass_skin from "../../../../public/images/glass_skin.png";
import { glassSkinDataPL, glassSkinDataEN } from "./data/glassSkinData";

export default function GlassSkinView() {
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
                ? "Autorski zabieg Glass Skin"
                : "Signature Glass Skin Treatment"}
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
                ? "Autorski zabieg Glass Skin".toUpperCase()
                : "Signature Glass Skin Treatment".toUpperCase()}
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
                  ? glassSkinDataPL.infoTable.timeOfTreatment
                  : glassSkinDataEN.infoTable.timeOfTreatment}
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
                  ? glassSkinDataPL.infoTable.recommendedNumber
                  : glassSkinDataEN.infoTable.recommendedNumber}
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
                  ? glassSkinDataPL.infoTable.intervals
                  : glassSkinDataEN.infoTable.intervals}
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
          <Grid size={downMd ? 12 : 5}>
            <Box
              component="img"
              sx={{
                height: downMd ? "auto" : "100%",
                width: "auto",
              }}
              src={glass_skin}
            />
          </Grid>
          <Grid size={downMd ? 12 : 7} p={1} container spacing={2}>
            <Grid size={12} display="flex" flexDirection={"column"} rowGap={2}>
              <Typography
                variant={downMd ? "body2" : "body1"}
                textAlign="left"
                width={"100%"}
                gutterBottom
              >
                {language.webLanguage === "PL"
                  ? glassSkinDataPL.overview
                  : glassSkinDataEN.overview}
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
                gutterBottom
              >
                {language.webLanguage === "PL"
                  ? "EFEKTY ZABIEGU"
                  : "TREATMENT EFFECTS"}
              </Typography>
              {language.webLanguage === "PL" &&
                glassSkinDataPL.effectsOfTreatment.map((effect, index) => (
                  <React.Fragment key={index}>
                    <Typography
                      variant={downMd ? "body2" : "body1"}
                      textAlign="left"
                      width="100%"
                    >
                      - {effect}
                    </Typography>
                  </React.Fragment>
                ))}
              {language.webLanguage === "ENG" &&
                glassSkinDataEN.effectsOfTreatment.map((effect, index) => (
                  <React.Fragment key={index}>
                    <Typography
                      variant={downMd ? "body2" : "body1"}
                      textAlign="left"
                      width="100%"
                    >
                      - {effect}
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
          <Grid size={12} display="flex" flexDirection={"column"} rowGap={2}>
            <Typography
              variant={downMd ? "body1" : "h6"}
              textAlign="left"
              sx={{ fontWeight: "200" }}
              width={"100%"}
              fontStyle="italic"
              gutterBottom
            >
              {language.webLanguage === "PL"
                ? "JAK PRZEBIEGA ZABIEG?"
                : "HOW DOES THE TREATMENT WORK?"}
            </Typography>
            {language.webLanguage === "PL" &&
              glassSkinDataPL.stepsOfTreatment.map((step, index) => (
                <React.Fragment key={index}>
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                  >
                    {index + 1}. {step.name}
                  </Typography>
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                    fontWeight={300}
                  >
                    {step.description}
                  </Typography>
                </React.Fragment>
              ))}
            {language.webLanguage === "ENG" &&
              glassSkinDataEN.stepsOfTreatment.map((step, index) => (
                <React.Fragment key={index}>
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                  >
                    {index + 1}. {step.name}
                  </Typography>
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                    fontWeight={300}
                  >
                    {step.description}
                  </Typography>
                </React.Fragment>
              ))}
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
