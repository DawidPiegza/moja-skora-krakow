import { Container, Grid } from "@mui/material";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
import { serviceCategoriesList } from "./data/serviceCategoriesList";
import ServiceCategoryCard from "./components/ServiceCategoryCard/ServiceCategoryCard";
import { WebsiteLanguageContext } from "../../shared/contexts/LanguageContext";
import React from "react";

export default function ServiceCategories() {
  const { language } = React.useContext(WebsiteLanguageContext);

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} paddingY={2}>
        <Grid size={12}>
          <SectionTitle
            title={
              language.webLanguage === "PL"
                ? "Wybierz zabieg dla siebie"
                : "Choose a treatment for yourself"
            }
          />
        </Grid>
        <Grid size={12} container>
          {serviceCategoriesList.map((category, index) => (
            <ServiceCategoryCard serviceCategory={category} key={index} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
