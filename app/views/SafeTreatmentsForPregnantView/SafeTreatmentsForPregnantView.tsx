import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { WebsiteLanguageContext } from "../../shared/contexts/LanguageContext";
import React from "react";
import safe_treatments_for_pregnant from "../../../public/images/safe_treatments_for_pregnant.png";
import { safeTreatmentsForPregnantPL } from "./data/safeTreatmentsForPregnant";
import { useNavigate } from "react-router";

export default function SafeTreatmentsForPregnantView() {
  const { language } = React.useContext(WebsiteLanguageContext);
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  let navigate = useNavigate();

  return (
    <Container maxWidth="xl">
      <Grid container rowSpacing={5} py={2} px={2}>
        <Grid size={12}>
          <Typography
            gutterBottom
            width={"100%"}
            variant={"h4"}
            textAlign="left"
            sx={{ fontWeight: "350" }}
          >
            {language.webLanguage === "PL"
              ? "BEZPIECZNE ZABIEGI DLA KOBIET W CIĄŻY I KOBIET KARMIĄCYCH".toUpperCase()
              : "SAFE TREATMENTS FOR PREGNANT AND BREASTFEEDING WOMEN".toUpperCase()}
          </Typography>
        </Grid>
        <Grid
          size={12}
          container
          direction="row"
          spacing={downMd ? 2 : 5}
          alignItems={"center"}
        >
          <Grid size={downMd ? 12 : 4}>
            <Box
              component="img"
              sx={{
                height: "100%",
                width: "100%",
              }}
              src={safe_treatments_for_pregnant}
            />
          </Grid>
          <Grid
            size={downMd ? 12 : 8}
            container
            direction={"column"}
            rowGap={3}
          >
            <Grid size={12}>
              <Typography
                variant={downMd ? "body1" : "h6"}
                textAlign="left"
                sx={{ fontWeight: "200" }}
                width={"100%"}
                fontStyle="italic"
                gutterBottom
              >
                {language.webLanguage === "PL"
                  ? " LISTA ZABIEGÓW BEZPIECZNYCH DLA KOBIET W CIĄŻY I KOBIET KARMIĄCYCH (ODNOŚNIKI PONIŻEJ):"
                  : "LIST OF SAFE TREATMENTS FOR PREGNANT AND BREASTFEEDING WOMEN (LINKS BELOW):"}
              </Typography>
            </Grid>
            <Grid size={12} container direction={"column"} rowGap={0.5}>
              {safeTreatmentsForPregnantPL.links.map((link, index) => (
                <Grid key={index} size={12}>
                  <Button
                    onClick={() => navigate(link.url)}
                    fullWidth
                    variant="text"
                    color="inherit"
                    sx={{
                      justifyContent: "flex-start",
                      textTransform: "none",
                      textAlign: "left",
                      p: 1,
                      minWidth: 0,
                    }}
                  >
                    <Typography
                      component="span"
                      variant={downMd ? "body2" : "body1"}
                    >
                      {language.webLanguage === "PL"
                        ? link.linkName
                        : link.linkNameENG}
                    </Typography>
                  </Button>
                </Grid>
              ))}
            </Grid>

            <Grid size={12}>
              <Typography
                variant="subtitle2"
                textAlign="left"
                width={"100%"}
                gutterBottom
                sx={{ fontWeight: 200 }}
              >
                {safeTreatmentsForPregnantPL.adnotation}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
