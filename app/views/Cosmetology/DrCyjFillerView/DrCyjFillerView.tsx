import React, { useEffect, useState } from "react";
import { WebsiteLanguageContext } from "../../../shared/contexts/LanguageContext";
import {
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
import SectionTitle from "../../../shared/components/SectionTitle/SectionTitle";
import { drCyjFillerDataPL, drCyjFillerDataENG } from "./data/drCyjFillerData";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function DrCyjFillerView() {
  const { language } = React.useContext(WebsiteLanguageContext);
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    !isLoading && (
      <Container maxWidth="xl" sx={{ marginTop: "65px" }}>
        <Grid container spacing={3} paddingY={2}>
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
                  ? "Mezoterapia igłowa skóry głowy Dr. Cyj"
                  : "Cyj Filler - Scalp mesotherapy treatment"}
              </Typography>
            </Breadcrumbs>
          </Grid>
          <Grid size={12} container>
            <Grid
              container
              direction={downMd ? "column" : "row"}
              sx={{
                justifyContent: "center",
                alignItems: "stretch",
              }}
              spacing={5}
            >
              <Grid size={12} container marginTop={2} alignItems="center">
                <Grid size={downMd ? 12 : 6}>
                  <Card>
                    <CardMedia
                      sx={{ width: "100%", height: downMd ? "400px" : "700px" }}
                      component="img"
                      image={drCyjFillerDataPL.treatmentPhotoURL}
                      alt={"Mezoterapia igłowa skóry głowy Dr. Cyj"}
                    />
                  </Card>
                </Grid>
                <Grid
                  size={downMd ? 12 : 6}
                  textAlign="center"
                  p={1}
                  rowGap={2}
                  container
                  direction="column"
                >
                  <Grid size={12}>
                    <Typography
                      gutterBottom
                      fontWeight="bold"
                      variant={downMd ? "h5" : "h4"}
                      marginBottom={2}
                    >
                      {language.webLanguage === "PL"
                        ? "Mezoterapia igłowa skóry głowy Dr. Cyj"
                        : "Cyj Filler - Scalp mesotherapy treatment"}
                    </Typography>

                    <Typography
                      variant={downMd ? "body2" : "body1"}
                      gutterBottom
                    >
                      {language.webLanguage === "PL"
                        ? drCyjFillerDataPL.description
                        : drCyjFillerDataENG.description}
                    </Typography>
                  </Grid>
                  <Grid size={12}>
                    <Typography variant={downMd ? "h6" : "h5"} gutterBottom>
                      {language.webLanguage === "PL"
                        ? "Dr Cyj – Terapia peptydowa na wypadanie włosów"
                        : "DR. CYJ – Peptide therapy for hair loss"}
                    </Typography>
                    <Typography
                      variant={downMd ? "body2" : "body1"}
                      gutterBottom
                    >
                      {language.webLanguage === "PL"
                        ? drCyjFillerDataPL.descriptionOfPreparation
                        : drCyjFillerDataENG.descriptionOfPreparation}
                    </Typography>
                  </Grid>
                  <Grid size={12}>
                    <Typography variant={downMd ? "h6" : "h5"} gutterBottom>
                      {language.webLanguage === "PL"
                        ? "Skład preparatu"
                        : "Composition of the preparation"}
                    </Typography>
                    <Typography
                      variant={downMd ? "body2" : "body1"}
                      gutterBottom
                    >
                      {language.webLanguage === "PL"
                        ? drCyjFillerDataPL.compositionOfPreparation
                        : drCyjFillerDataENG.compositionOfPreparation}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid size={12} container spacing={3}>
                <Grid size={12} container>
                  <Grid
                    size={downMd ? 12 : 4}
                    component={Paper}
                    variant="outlined"
                    p={2}
                    display="flex"
                    flexDirection="column"
                    textAlign="center"
                    rowGap={2}
                  >
                    <AssignmentIcon
                      fontSize={downMd ? "medium" : "large"}
                      sx={{ width: "100%" }}
                    />
                    <Typography variant={downMd ? "body2" : "body1"}>
                      {language.webLanguage === "ENG"
                        ? drCyjFillerDataENG.infoTable.recommendedNumber
                        : drCyjFillerDataPL.infoTable.recommendedNumber}
                    </Typography>
                    <Typography variant={downMd ? "body1" : "h6"} width="100%">
                      {language.webLanguage === "PL"
                        ? "Zalecana ilość zabiegów"
                        : "Recommended number of treatments"}
                    </Typography>
                  </Grid>
                  <Grid
                    size={downMd ? 12 : 4}
                    component={Paper}
                    variant="outlined"
                    p={2}
                    display="flex"
                    flexDirection="column"
                    textAlign="center"
                    rowGap={2}
                  >
                    <AccessTimeIcon
                      fontSize={downMd ? "medium" : "large"}
                      sx={{ width: "100%" }}
                    />
                    <Typography variant={downMd ? "body2" : "body1"}>
                      {language.webLanguage === "ENG"
                        ? drCyjFillerDataENG.infoTable.timeOfTreatment
                        : drCyjFillerDataPL.infoTable.timeOfTreatment}
                    </Typography>
                    <Typography variant={downMd ? "body1" : "h6"} width="100%">
                      {language.webLanguage === "PL"
                        ? "Czas zabiegu"
                        : "Treatment duration"}
                    </Typography>
                  </Grid>
                  <Grid
                    size={downMd ? 12 : 4}
                    component={Paper}
                    variant="outlined"
                    p={2}
                    display="flex"
                    flexDirection="column"
                    textAlign="center"
                    rowGap={2}
                  >
                    <CalendarMonthIcon
                      fontSize={downMd ? "medium" : "large"}
                      sx={{ width: "100%" }}
                    />
                    <Typography variant={downMd ? "body2" : "body1"}>
                      {language.webLanguage === "ENG"
                        ? drCyjFillerDataENG.infoTable.intervals
                        : drCyjFillerDataPL.infoTable.intervals}
                    </Typography>
                    <Typography variant={downMd ? "body1" : "h6"} width="100%">
                      {language.webLanguage === "PL"
                        ? "Częstotliwość zabiegów"
                        : "Treatment frequency"}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid size={12}>
                <Divider />
              </Grid>
              <Grid size={12} container justifyContent="space-between">
                <Grid size={downMd ? 12 : 3} textAlign="center">
                  <Typography
                    variant={downMd ? "h6" : "h5"}
                    width="100%"
                    gutterBottom
                  >
                    {language.webLanguage === "PL"
                      ? "Efekty zabiegu"
                      : "Treatment results"}
                  </Typography>
                  {(language.webLanguage === "PL"
                    ? drCyjFillerDataPL
                    : drCyjFillerDataENG
                  ).effectsOfTratment.map((effect, index) => (
                    <React.Fragment key={index}>
                      <Typography
                        variant={downMd ? "body2" : "body1"}
                        gutterBottom
                      >
                        - {effect}
                      </Typography>
                    </React.Fragment>
                  ))}
                </Grid>
                {!downMd && <Divider orientation="vertical" />}
                {downMd && (
                  <Grid size={12}>
                    <Divider orientation="horizontal" />
                  </Grid>
                )}
                <Grid size={downMd ? 12 : 3} textAlign="center">
                  <Typography
                    variant={downMd ? "h6" : "h5"}
                    width="100%"
                    gutterBottom
                  >
                    {language.webLanguage === "PL"
                      ? "Wskazania do zabiegu"
                      : "Treatment indications"}
                  </Typography>
                  {(language.webLanguage === "PL"
                    ? drCyjFillerDataPL
                    : drCyjFillerDataENG
                  ).indicationsToTreatment.map((effect, index) => (
                    <React.Fragment key={index}>
                      <Typography
                        variant={downMd ? "body2" : "body1"}
                        gutterBottom
                      >
                        - {effect}
                      </Typography>
                    </React.Fragment>
                  ))}
                </Grid>
                {!downMd && <Divider orientation="vertical" />}
                {downMd && (
                  <Grid size={12}>
                    <Divider orientation="horizontal" />
                  </Grid>
                )}
                <Grid size={downMd ? 12 : 3} textAlign="center">
                  <Typography
                    variant={downMd ? "h6" : "h5"}
                    width="100%"
                    gutterBottom
                  >
                    {language.webLanguage === "PL"
                      ? "Przeciwwskazania do zabiegu"
                      : "Treatment contraindications"}
                  </Typography>
                  {(language.webLanguage === "PL"
                    ? drCyjFillerDataPL
                    : drCyjFillerDataENG
                  ).contraindications.map((effect, index) => (
                    <React.Fragment key={index}>
                      <Typography
                        variant={downMd ? "body2" : "body1"}
                        gutterBottom
                      >
                        - {effect}
                      </Typography>
                    </React.Fragment>
                  ))}
                </Grid>
              </Grid>
              <Grid size={12}>
                <Divider />
              </Grid>
              <Grid size={12} textAlign="center">
                <Typography variant={downMd ? "h6" : "h5"} gutterBottom>
                  {language.webLanguage === "PL"
                    ? "Jak przebiega zabieg?"
                    : "What does the procedure involve?"}
                </Typography>
                <Typography variant={downMd ? "body2" : "body1"}>
                  {language.webLanguage === "PL"
                    ? drCyjFillerDataPL.courseOfTreatment
                    : drCyjFillerDataENG.courseOfTreatment}
                </Typography>
              </Grid>
              <Grid size={12}>
                <Divider />
              </Grid>
              <Grid size={12} textAlign="center">
                <Typography variant={downMd ? "h6" : "h5"} gutterBottom>
                  {language.webLanguage === "PL"
                    ? "Jak często powtarzać zabieg?"
                    : "How often should the procedure be repeated?"}
                </Typography>
                <Typography variant={downMd ? "body2" : "body1"}>
                  {language.webLanguage === "PL"
                    ? drCyjFillerDataPL.interfalsInTreatment
                    : drCyjFillerDataENG.interfalsInTreatment}
                </Typography>
              </Grid>
              <Grid size={12}>
                <Divider />
              </Grid>
              <Grid size={12} textAlign="center">
                <Typography variant={downMd ? "h6" : "h5"} gutterBottom>
                  {language.webLanguage === "PL"
                    ? "Zalecenia pozabiegowe"
                    : "Post-treatment care"}
                </Typography>
                <Typography variant={downMd ? "body2" : "body1"}>
                  {language.webLanguage === "PL"
                    ? drCyjFillerDataPL.postTreatmentRecommendations
                    : drCyjFillerDataENG.postTreatmentRecommendations}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    )
  );
}
