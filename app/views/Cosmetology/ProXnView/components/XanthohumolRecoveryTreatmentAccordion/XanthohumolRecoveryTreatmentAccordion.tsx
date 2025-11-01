import type { IProXnData } from "../../utils/interfaces/IProXnData";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { WebsiteLanguageContext } from "../../../../../shared/contexts/LanguageContext";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface IXanthohumolRecoveryTreatmentAccordionProps {
  propsPL: IProXnData;
  propsEN: IProXnData;
}

export default function XanthohumolRecoveryTreatmentAccordion({
  propsPL,
  propsEN,
}: IXanthohumolRecoveryTreatmentAccordionProps) {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const { language } = React.useContext(WebsiteLanguageContext);

  return (
    <Accordion disableGutters component={Paper} sx={{ boxShadow: "none" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{ bgcolor: "#fafafa" }}
      >
        <Typography
          variant={downMd ? "body2" : "body1"}
          textAlign="left"
          sx={{ fontWeight: "400" }}
          width={"100%"}
        >
          {language.webLanguage === "PL"
            ? "PRO XN I stopnia – XANTOHUMOL RECOVERY TREATMENT".toUpperCase()
            : "PRO XN LEVEL I – XANTOHUMOL RECOVERY TREATMENT".toUpperCase()}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid size={12} p={1} container spacing={3}>
          <Grid size={12} display="flex" flexDirection={"column"} rowGap={2}>
            <Typography
              variant={downMd ? "body2" : "body1"}
              textAlign="left"
              width="100%"
            >
              {language.webLanguage === "PL"
                ? propsPL.xanthohumolRecoveryTreatment.overview
                : propsEN.xanthohumolRecoveryTreatment.overview}
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
                ? "SKŁAD TERAPII"
                : "TREATMENT INGREDIENTS"}
            </Typography>
            {language.webLanguage === "PL" &&
              propsPL.xanthohumolRecoveryTreatment.treatmentIngredients.overview.map(
                (ingredient, index) => (
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                    key={index}
                  >
                    - {ingredient}
                  </Typography>
                )
              )}
            {language.webLanguage === "ENG" &&
              propsEN.xanthohumolRecoveryTreatment.treatmentIngredients.overview.map(
                (ingredient, index) => (
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                    key={index}
                  >
                    - {ingredient}
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
                ? "WSKAZANIA DO ZABIEGU"
                : "INDICATIONS FOR TREATMENT"}
            </Typography>
            {language.webLanguage === "PL" &&
              propsPL.xanthohumolRecoveryTreatment.treatmentIngredients.indications.map(
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
            {language.webLanguage === "ENG" &&
              propsEN.xanthohumolRecoveryTreatment.treatmentIngredients.indications.map(
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
                ? "PRZECIWWSKAZANIA DO ZABIEGU"
                : "CONTRAINDICATIONS FOR TREATMENT"}
            </Typography>
            {language.webLanguage === "PL" &&
              propsPL.xanthohumolRecoveryTreatment.treatmentIngredients.contraindications.map(
                (contraindication, index) => (
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                    key={index}
                  >
                    - {contraindication}
                  </Typography>
                )
              )}
            {language.webLanguage === "ENG" &&
              propsEN.xanthohumolRecoveryTreatment.treatmentIngredients.contraindications.map(
                (contraindication, index) => (
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                    key={index}
                  >
                    - {contraindication}
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
              gutterBottom
            >
              {language.webLanguage === "PL"
                ? "KLUCZOWE SKŁADNIKI AKTYWNE TERAPII PRO XN".toUpperCase()
                : "KEY ACTIVE INGREDIENTS IN PRO XN THERAPY".toUpperCase()}
            </Typography>
            {language.webLanguage === "PL" &&
              propsPL.xanthohumolRecoveryTreatment.keyIngredientsProXnTreatment.map(
                (keyIngredientsProXnTreatment, index) => (
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                    key={index}
                  >
                    - {keyIngredientsProXnTreatment}
                  </Typography>
                )
              )}
            {language.webLanguage !== "PL" &&
              propsPL.xanthohumolRecoveryTreatment.keyIngredientsProXnTreatment.map(
                (keyIngredientsProXnTreatment, index) => (
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                    key={index}
                  >
                    - {keyIngredientsProXnTreatment}
                  </Typography>
                )
              )}
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}
