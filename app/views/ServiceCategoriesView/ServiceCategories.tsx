import { Container, Grid } from "@mui/material";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";

export default function ServiceCategories() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} paddingY={2}>
        <Grid size={12}>
          <SectionTitle title="Wybierz zabieg dla siebie" />
        </Grid>
      </Grid>
    </Container>
  );
}
