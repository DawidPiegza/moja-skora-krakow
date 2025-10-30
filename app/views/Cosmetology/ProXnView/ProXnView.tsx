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
import { proXnDataPL, proXnDataEN } from "./data/proXnData";
import pro_xn from "../../../../public/images/pro_xn.png";
import pro_xn_effect_0 from "../../../../public/images/pro_xn_effect_0.png";
import pro_xn_effect_1 from "../../../../public/images/pro_xn_effect_1.png";
import XanthohumolRecoveryTreatmentAccordion from "./components/XanthohumolRecoveryTreatmentAccordion/XanthohumolRecoveryTreatmentAccordion";
import PhaSolutionTreatmentAccordion from "./components/PhaSolutionTreatmentAccordion/PhaSolutionTreatmentAccordion";
import NovaPeelTreatmentAccordion from "./components/NovaPeelTreatmentAccordion/NovaPeelTreatmentAccordion";

export default function ProXnView() {
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
                ? "Pro XN - Silna terapia antyoksydacyjna"
                : "Pro XN - Intensive Antioxidant Therapy"}
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
                ? "PRO XN – SILNA TERAPIA ANTYOKSYDACYJNA".toUpperCase()
                : "PRO XN – INTENSIVE ANTIOXIDANT THERAPY".toUpperCase()}
            </Typography>
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
              src={pro_xn}
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
                  ? proXnDataPL.overview
                  : proXnDataEN.overview}
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
                  ? "Działanie Kompleksu Ksantohumolu".toUpperCase()
                  : "Action of the Xanthohumol Complex".toUpperCase()}
              </Typography>
              <Typography
                variant={downMd ? "body2" : "body1"}
                textAlign="left"
                width={"100%"}
                gutterBottom
              >
                {language.webLanguage === "PL"
                  ? proXnDataPL.xanthohumolComplexOverview
                  : proXnDataEN.xanthohumolComplexOverview}
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
                proXnDataPL.treatmentEffects.map((effect, index) => (
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                    key={index}
                  >
                    - {effect}
                  </Typography>
                ))}
              {language.webLanguage !== "PL" &&
                proXnDataEN.treatmentEffects.map((effect, index) => (
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                    key={index}
                  >
                    - {effect}
                  </Typography>
                ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid size={12}>
          <Divider />
        </Grid>
        <Grid size={12} display="flex" flexDirection={"column"} rowGap={0}>
          <XanthohumolRecoveryTreatmentAccordion
            propsPL={proXnDataPL}
            propsEN={proXnDataEN}
          />
          <PhaSolutionTreatmentAccordion
            propsPL={proXnDataPL}
            propsEN={proXnDataEN}
          />
          <NovaPeelTreatmentAccordion
            propsPL={proXnDataPL}
            propsEN={proXnDataEN}
          />
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
                src={pro_xn_effect_0}
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
                src={pro_xn_effect_1}
              />
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
            href="https://share.google/cZjmIrreCPS9W4K7i"
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
