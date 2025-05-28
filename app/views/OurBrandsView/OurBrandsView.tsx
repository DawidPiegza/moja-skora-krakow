import {
  Card,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import dermomedica_logo from "../../../public/images/dermomedica_logo.jpg";
import filorga_logo from "../../../public/images/filorga_logo.png";
import nucleofill_logo from "../../../public/images/nucleofill_logo.png";
import revitacare_logo from "../../../public/images/revitacare_logo.png";
import artpmu_logo from "../../../public/images/artpmu_logo.png";
import karisma_logo from "../../../public/images/karisma_logo.png";
import BrandLogoImage from "./components/BrandLogoImage";

export default function OurBrandsView() {
  const theme = useTheme();
  const downXl = useMediaQuery(theme.breakpoints.down("xl"));
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} paddingY={2}>
        <Grid size={12}>
          <Typography
            textAlign="center"
            variant="body2"
            color="textDisabled"
            fontStyle="italic"
            sx={{
              typography: {
                xs: "body2",
                sm: "body2",
                md: "body1",
                lg: "h6",
                xl: "h6",
              },
            }}
          >
            KORZYSTAMY WYŁĄCZNIE ZE SPRAWDZONYCH ORAZ RENOMOWANYCH PRODUKTÓW
          </Typography>
        </Grid>
        <Grid size={12}>
          <Grid container spacing={3}>
            {[
              dermomedica_logo,
              filorga_logo,
              revitacare_logo,
              nucleofill_logo,
              artpmu_logo,
              karisma_logo,
            ].map((logo, index) => (
              <BrandLogoImage image={logo} key={index} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
