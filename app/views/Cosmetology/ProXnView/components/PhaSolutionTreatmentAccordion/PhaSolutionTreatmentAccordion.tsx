import type { IProXnData } from "../../utils/interfaces/IProXnData";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { WebsiteLanguageContext } from "../../../../../shared/contexts/LanguageContext";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface IPhaSolutionTreatmentAccordionProps {
  propsPL: IProXnData;
  propsEN: IProXnData;
}

export default function PhaSolutionTreatmentAccordion({
  propsPL,
  propsEN,
}: IPhaSolutionTreatmentAccordionProps) {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const { language } = React.useContext(WebsiteLanguageContext);

  return (
    <Accordion disableGutters>
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
            ? "PHA SOLUTION – DELIKATNY PEELING DLA SKÓR WRAŻLIWYCH".toUpperCase()
            : "PHA SOLUTION – GENTLE PEELING FOR SENSITIVE SKIN".toUpperCase()}
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
                ? propsPL.phaSolutionTreatment.overview
                : propsEN.phaSolutionTreatment.overview}
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
                ? "DZIAŁANIE TERAPII"
                : "ACTION OF THE TREATMENT"}
            </Typography>
            {language.webLanguage === "PL" &&
              propsPL.phaSolutionTreatment.actionOfTreatment.map(
                (action, index) => (
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                    key={index}
                  >
                    - {action}
                  </Typography>
                )
              )}
            {language.webLanguage === "ENG" &&
              propsEN.phaSolutionTreatment.actionOfTreatment.map(
                (action, index) => (
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                    key={index}
                  >
                    - {action}
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
              propsPL.phaSolutionTreatment.indications.map(
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
              propsEN.phaSolutionTreatment.indications.map(
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
              propsPL.phaSolutionTreatment.contraindications.map(
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
              propsEN.phaSolutionTreatment.contraindications.map(
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
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}
