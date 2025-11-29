import React from "react";
import { WebsiteLanguageContext } from "../../../shared/contexts/LanguageContext";
import konsultacja_kosmetologiczna from "../../../../public/images/konsultacja_kosmetologiczna.png";
import { consultationServiceData } from "./data/consultationServiceData";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
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

export default function ConsultationServiceView() {
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
                ? "Konsultacja Kosmetologiczna"
                : "Consultation"}
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
                ? "KONSULTACJA KOSMETOLOGICZNA Z INDYWIDUALNYM BEAUTY PLANEM".toUpperCase()
                : "SKIN CONSULTATION & PERSONALIZED BEAUTY PLAN".toUpperCase()}
            </Typography>
          </Grid>
        </Grid>
        <Grid size={12} p={1} container spacing={3}>
          <Grid size={12} display="flex" flexDirection={"column"} rowGap={2}>
            <Typography
              variant={downMd ? "body2" : "body1"}
              textAlign="left"
              width={"100%"}
              gutterBottom
            >
              {language.webLanguage === "PL"
                ? consultationServiceData.pl.overview
                : consultationServiceData.en.overview}
            </Typography>
          </Grid>
          <Grid size={12}>
            <Divider />
          </Grid>
          <Grid size={12} container alignItems={"stretch"}>
            <Grid size={downMd ? 12 : 4}>
              <Box
                component="img"
                sx={{
                  height: downMd ? "auto" : "100%",
                  width: "auto",
                }}
                src={konsultacja_kosmetologiczna}
              />
            </Grid>
            <Grid
              size={downMd ? 12 : 8}
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
                  ? "CO OBEJMUJE KONSULTACJA?"
                  : "WHAT DOES THE CONSULTATION INCLUDE?"}
              </Typography>
              {language.webLanguage === "PL" &&
                consultationServiceData.pl.whatIncludes.map(
                  (element, index) => (
                    <React.Fragment key={index}>
                      <Typography
                        variant={downMd ? "body2" : "body1"}
                        textAlign="left"
                        width="100%"
                      >
                        {`${index + 1}.`} {element.elementName.toUpperCase()}
                      </Typography>
                      <Typography
                        variant={downMd ? "body2" : "body1"}
                        textAlign="left"
                        width="100%"
                      >
                        {element.elementDescription}
                      </Typography>
                    </React.Fragment>
                  )
                )}
              {language.webLanguage === "ENG" &&
                consultationServiceData.en.whatIncludes.map(
                  (element, index) => (
                    <React.Fragment key={index}>
                      <Typography
                        variant={downMd ? "body2" : "body1"}
                        textAlign="left"
                        width="100%"
                        gutterBottom
                      >
                        {`${index + 1}.`} {element.elementName.toUpperCase()}
                      </Typography>
                      <Typography
                        variant={downMd ? "body2" : "body1"}
                        textAlign="left"
                        width="100%"
                        gutterBottom
                      >
                        {element.elementDescription}
                      </Typography>
                    </React.Fragment>
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
              {language.webLanguage === "PL" &&
                consultationServiceData.pl.consultationSummary}
              {language.webLanguage === "ENG" &&
                consultationServiceData.en.consultationSummary}
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
