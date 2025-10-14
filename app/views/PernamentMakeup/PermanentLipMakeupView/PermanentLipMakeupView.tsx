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
import permanent_lip_makeup_effect_0 from "../../../../public/images/permanent_lip_makeup_effect_0.png";
import permanent_lip_makeup_effect_1 from "../../../../public/images/permanent_lip_makeup_effect_1.png";
import permanent_lip_makeup_effect_2 from "../../../../public/images/permanent_lip_makeup_effect_2.png";
import permanent_lip_makeup_effect_5 from "../../../../public/images/permanent_lip_makeup_effect_5.png";
import permanent_lip_makeup_effect_6 from "../../../../public/images/permanent_lip_makeup_effect_6.png";
import permanent_lip_makeup_effect_7 from "../../../../public/images/permanent_lip_makeup_effect_7.png";
import permanent_lip_makeup_effect_8 from "../../../../public/images/permanent_lip_makeup_effect_8.png";
import permanent_lip_makeup_effect_9 from "../../../../public/images/permanent_lip_makeup_effect_9.png";
import permanent_lip_makeup from "../../../../public/images/permanent_lip_makeup.png";

import {
  permanentLipMakeupDataPL,
  permanentLipMakeupDataEN,
} from "./data/permanentLipMakeupData";

export default function PermanentLipMakeupView() {
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
                ? "Makijaż permanentny"
                : "Permanent makeup"}
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
                ? "Makijaż pernamentny ust"
                : "Permanent lip makeup"}
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
                ? "Makijaż permanentny ust".toUpperCase()
                : "Permanent lip makeup".toUpperCase()}
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
                  ? permanentLipMakeupDataPL.infoTable.timeOfTreatment
                  : permanentLipMakeupDataEN.infoTable.timeOfTreatment}
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
                  ? permanentLipMakeupDataPL.infoTable.recommendedNumber
                  : permanentLipMakeupDataEN.infoTable.recommendedNumber}
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
                  ? permanentLipMakeupDataPL.infoTable.intervals
                  : permanentLipMakeupDataEN.infoTable.intervals}
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
              src={permanent_lip_makeup}
            />
          </Grid>
          <Grid size={downMd ? 12 : 7} p={1} container spacing={3}>
            <Grid size={12} display="flex" flexDirection={"column"} rowGap={2}>
              <Typography
                variant={downMd ? "body2" : "body1"}
                textAlign="left"
                width={"100%"}
              >
                {language.webLanguage === "PL"
                  ? permanentLipMakeupDataPL.overview
                  : permanentLipMakeupDataEN.overview}
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
                  ? "Dla kogo przeznaczony jest zabieg makijażu permanentnego ust?".toUpperCase()
                  : "WHO IS THE PERMANENT LIP MAKEUP PROCEDURE FOR?".toUpperCase()}
              </Typography>
              {language.webLanguage === "PL" &&
                permanentLipMakeupDataPL.treatementRecommendation.map(
                  (recomendation, index) => (
                    <Typography
                      variant={downMd ? "body2" : "body1"}
                      textAlign="left"
                      width="100%"
                      key={index}
                    >
                      - {recomendation}
                    </Typography>
                  )
                )}
              {language.webLanguage === "ENG" &&
                permanentLipMakeupDataEN.treatementRecommendation.map(
                  (recomendation, index) => (
                    <Typography
                      variant={downMd ? "body2" : "body1"}
                      textAlign="left"
                      width="100%"
                      key={index}
                    >
                      - {recomendation}
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
                  ? "JAK PRZYGOTOWAĆ SIĘ DO ZABIEGU?"
                  : "HOW TO PREPARE FOR THE PROCEDURE?"}
              </Typography>
              {language.webLanguage === "PL" &&
                permanentLipMakeupDataPL.preparationForTreatment.map(
                  (preparation, index) => (
                    <Typography
                      variant={downMd ? "body2" : "body1"}
                      textAlign="left"
                      width="100%"
                      key={index}
                    >
                      - {preparation}
                    </Typography>
                  )
                )}
              {language.webLanguage === "ENG" &&
                permanentLipMakeupDataEN.preparationForTreatment.map(
                  (preparation, index) => (
                    <Typography
                      variant={downMd ? "body2" : "body1"}
                      textAlign="left"
                      width="100%"
                      key={index}
                    >
                      - {preparation}
                    </Typography>
                  )
                )}
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
                ? "PRZECIWWSKAZANIA BEZWZGLĘDNE:"
                : "ABSOLUTE CONTRAINDICATIONS:"}
            </Typography>
            {language.webLanguage === "PL" &&
              permanentLipMakeupDataPL.contraindications.absolute.map(
                (contrindication, index) => (
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                    key={index}
                  >
                    - {contrindication}
                  </Typography>
                )
              )}
            {language.webLanguage === "ENG" &&
              permanentLipMakeupDataEN.contraindications.absolute.map(
                (contrindication, index) => (
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                    key={index}
                  >
                    - {contrindication}
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
                ? "PRZECIWWSKAZANIA WZGLĘDNE:"
                : "RELATIVE CONTRAINDICATIONS:"}
            </Typography>
            {language.webLanguage === "PL" &&
              permanentLipMakeupDataPL.contraindications.relative.map(
                (contrindication, index) => (
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                    key={index}
                  >
                    - {contrindication}
                  </Typography>
                )
              )}
            {language.webLanguage === "ENG" &&
              permanentLipMakeupDataEN.contraindications.relative.map(
                (contrindication, index) => (
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                    key={index}
                  >
                    - {contrindication}
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
                ? "JAK PRZEBIEGA ZABIEG?"
                : "HOW DOES THE TREATMENT WORK?"}
            </Typography>
            {language.webLanguage === "PL" &&
              permanentLipMakeupDataPL.courseOfTreatment.map((item, index) => (
                <React.Fragment key={index}>
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                  >
                    {index + 1}. {item.title}
                  </Typography>
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                    fontWeight={300}
                  >
                    {item.description}
                  </Typography>
                </React.Fragment>
              ))}
            {language.webLanguage === "ENG" &&
              permanentLipMakeupDataEN.courseOfTreatment.map((item, index) => (
                <React.Fragment key={index}>
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                  >
                    {index + 1}. {item.title}
                  </Typography>
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                    fontWeight={300}
                  >
                    {item.description}
                  </Typography>
                </React.Fragment>
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
                ? "ZALECENIA POZABIEGOWE"
                : "POST-TREATMENT RECOMMENDATIONS"}
            </Typography>
            {language.webLanguage === "PL" &&
              permanentLipMakeupDataPL.postTreatmentRecommendations.map(
                (recomendation, index) => (
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                    key={index}
                  >
                    - {recomendation}
                  </Typography>
                )
              )}
            {language.webLanguage !== "PL" &&
              permanentLipMakeupDataEN.postTreatmentRecommendations.map(
                (recomendation, index) => (
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                    key={index}
                  >
                    - {recomendation}
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
              {language.webLanguage === "PL" ? "DOPIGMENTOWANIE" : "TOUCH-UP"}
            </Typography>
            <Typography
              variant={downMd ? "body2" : "body1"}
              textAlign="left"
              width="100%"
            >
              {language.webLanguage === "PL"
                ? permanentLipMakeupDataPL.pigmentationInfo.overview
                : permanentLipMakeupDataEN.pigmentationInfo.overview}
            </Typography>
            <Typography
              variant={downMd ? "body2" : "body1"}
              textAlign="left"
              width="100%"
            >
              {language.webLanguage === "PL"
                ? "Jak się przygotować do dopigmentowania?"
                : "How to prepare for touch-up?"}
            </Typography>
            {language.webLanguage === "PL" &&
              permanentLipMakeupDataPL.pigmentationInfo.treatmentPreparation.map(
                (pigmentationInfo, index) => (
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                    key={index}
                  >
                    - {pigmentationInfo}
                  </Typography>
                )
              )}
            {language.webLanguage === "ENG" &&
              permanentLipMakeupDataEN.pigmentationInfo.treatmentPreparation.map(
                (pigmentationInfo, index) => (
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                    key={index}
                  >
                    - {pigmentationInfo}
                  </Typography>
                )
              )}
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
                  ? "EFEKTY ZABIEGU"
                  : "TREATMENT EFFECTS"}
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
                  src={permanent_lip_makeup_effect_0}
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
                  src={permanent_lip_makeup_effect_1}
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
                  src={permanent_lip_makeup_effect_2}
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
                  src={permanent_lip_makeup_effect_5}
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
                  src={permanent_lip_makeup_effect_6}
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
                  src={permanent_lip_makeup_effect_7}
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
                  src={permanent_lip_makeup_effect_8}
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
                  src={permanent_lip_makeup_effect_9}
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
