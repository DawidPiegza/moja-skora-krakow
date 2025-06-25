import { Container, Grid } from "@mui/material";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
import { serviceCategoriesList } from "./data/serviceCategoriesList";
import ServiceCategoryCard from "./components/ServiceCategoryCard/ServiceCategoryCard";

export default function ServiceCategories() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} paddingY={2}>
        <Grid size={12}>
          <SectionTitle title="Wybierz zabieg dla siebie" />
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
