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
      <Grid container spacing={2} paddingTop={2} paddingBottom={"60px"}>
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
            direction="row"
            sx={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
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
