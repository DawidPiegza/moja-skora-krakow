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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import { WebsiteLanguageContext } from "../../../../../shared/contexts/LanguageContext";
import type { INeedleMesotherapySpecificTreatments } from "../../utils/interfaces/INeedleMesotherapySpecificTreatments";

interface INeedlMesotherapySpecificTreatmentAccordionProps {
  treatment: INeedleMesotherapySpecificTreatments;
}

export default function NeedlMesotherapySpecificTreatmentAccordion({
  treatment,
}: INeedlMesotherapySpecificTreatmentAccordionProps) {
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
          {treatment.treatmentName}
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
              {treatment.description}
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
              {language.webLanguage === "PL" ? "WSKAZANIA" : "INDICATIONS"}
            </Typography>
            {treatment.indications.map((indicationItem, index) => (
              <Typography
                variant={downMd ? "body2" : "body1"}
                textAlign="left"
                width="100%"
                key={index}
              >
                - {indicationItem}
              </Typography>
            ))}
          </Grid>
          {treatment?.treatmentEffects && (
            <React.Fragment>
              <Grid size={12}>
                <Divider />
              </Grid>
              <Grid
                size={12}
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
                  {language.webLanguage === "PL" ? "EFEKTY" : "RESULTS"}
                </Typography>
                {treatment?.treatmentEffects?.map((effectItem, index) => (
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                    key={index}
                  >
                    - {effectItem}
                  </Typography>
                ))}
              </Grid>
            </React.Fragment>
          )}
          {treatment?.treatmentsBodyAreas && (
            <React.Fragment>
              <Grid size={12}>
                <Divider />
              </Grid>
              <Grid
                size={12}
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
                    ? "OBSZARY CIAŁA PODDANE ZABIEGOWI"
                    : "BODY AREAS SUBJECT TO TREATMENT"}
                </Typography>
                {treatment.treatmentsBodyAreas.map((bodyAreaItem, index) => (
                  <Typography
                    variant={downMd ? "body2" : "body1"}
                    textAlign="left"
                    width="100%"
                    key={index}
                  >
                    - {bodyAreaItem}
                  </Typography>
                ))}
              </Grid>
            </React.Fragment>
          )}
          {treatment?.recommendedNumberOfSessions && (
            <React.Fragment>
              <Grid size={12}>
                <Divider />
              </Grid>
              <Grid
                size={12}
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
                    ? "REKOMENDOWANA LICZBA SESJI"
                    : "RECOMMENDED NUMBER OF SESSIONS"}
                </Typography>
                <Typography
                  variant={downMd ? "body2" : "body1"}
                  textAlign="left"
                  width="100%"
                >
                  {treatment?.recommendedNumberOfSessions}
                </Typography>
              </Grid>
            </React.Fragment>
          )}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}
