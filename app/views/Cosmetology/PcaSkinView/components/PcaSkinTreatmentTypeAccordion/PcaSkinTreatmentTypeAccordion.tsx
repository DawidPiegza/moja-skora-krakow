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
import type { IPcaSkinData } from "../../utils/interfaces/IPcaSkinData";
import React from "react";
import { WebsiteLanguageContext } from "../../../../../shared/contexts/LanguageContext";

interface IPcaSkinTreatmentTypeAccordionProps {
  pcaSkinData: IPcaSkinData;
}

export default function PcaSkinTreatmentTypeAccordion(
  props: IPcaSkinTreatmentTypeAccordionProps
) {
  const { pcaSkinData } = props;
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const { language } = React.useContext(WebsiteLanguageContext);

  return (
    <React.Fragment>
      {pcaSkinData.typesOfPcaSkinTreatments.map((treatment, index) => {
        return (
          <Accordion key={index} disableGutters>
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
                {treatment.type} - {treatment.price}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid size={12} p={1} container spacing={3}>
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
                    {language.webLanguage === "PL" ? "DLA KOGO?" : "FOR WHO?"}
                  </Typography>
                  {treatment.forWho.map((forWhoItem, index) => (
                    <Typography
                      variant={downMd ? "body2" : "body1"}
                      textAlign="left"
                      width="100%"
                      key={index}
                    >
                      - {forWhoItem}
                    </Typography>
                  ))}
                </Grid>
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
                  {treatment.effectsOfTratment.map((resultItem, index) => (
                    <Typography
                      variant={downMd ? "body2" : "body1"}
                      textAlign="left"
                      width="100%"
                      key={index}
                    >
                      - {resultItem}
                    </Typography>
                  ))}
                </Grid>
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
                      ? "MOŻLIWE REAKCJE PO ZABIEGU"
                      : "POSSIBLE REACTIONS AFTER TREATMENT"}
                  </Typography>
                  {treatment.reactionsAfterProcedure.map(
                    (reactionItem, index) => (
                      <Typography
                        variant={downMd ? "body2" : "body1"}
                        textAlign="left"
                        width="100%"
                        key={index}
                      >
                        - {reactionItem}
                      </Typography>
                    )
                  )}
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </React.Fragment>
  );
}
