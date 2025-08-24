import {
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { serviceCategoriesList } from "./data/serviceCategoriesList";
import ServiceCategoryCard from "./components/ServiceCategoryCard/ServiceCategoryCard";
import { WebsiteLanguageContext } from "../../shared/contexts/LanguageContext";
import React from "react";

export default function ServiceCategories() {
  const { language } = React.useContext(WebsiteLanguageContext);
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container maxWidth="xl">
      <Grid container rowSpacing={5} py={2} px={2}>
        <Grid size={12}>
          <Typography
            variant={downMd ? "h5" : "h4"}
            textAlign="left"
            sx={{ fontWeight: "100" }}
          ></Typography>
          <Typography
            gutterBottom
            width={"100%"}
            variant={"h4"}
            textAlign="left"
            fontSize={"30px"}
            sx={{ fontWeight: "350" }}
          >
            {language.webLanguage === "PL"
              ? "Wybierz zabieg dla siebie".toUpperCase()
              : "Choose a treatment for yourself".toUpperCase()}
          </Typography>
        </Grid>
        <Grid
          size={12}
          container
          direction="row"
          sx={{
            alignItems: "stretch",
          }}
          spacing={2}
        >
          {serviceCategoriesList.map((category, index) => (
            <ServiceCategoryCard serviceCategory={category} key={index} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
