import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ServicesList } from "./utils/data/ServicesList";
import OfferViewCard from "./components/OfferViewCard/OfferViewCard";
import booksy_logo_black from "../../../public/images/booksy_logo_black.png";

export default function OfferView() {
  const theme = useTheme();
  const downXl = useMediaQuery(theme.breakpoints.down("xl"));
  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} paddingY={5}>
        <Grid size={12}>
          <Typography variant={downXl ? "h5" : "h4"} align="center">
            OFERTA NASZEGO SALONU
          </Typography>
        </Grid>
        <Grid size={12}>
          <Grid
            container
            direction="row"
            sx={{
              justifyContent: "center",
              alignItems: "stretch",
            }}
            spacing={2}
          >
            {ServicesList.map((service) => (
              <Grid
                size={{
                  xl: 4,
                  md: 3,
                  sm: 8,
                  xs: 12,
                }}
              >
                <OfferViewCard
                  cardTittle={service.serviceName}
                  cardDesc={service.serviceDesc}
                  cardImageUrl={service.servicePhoto}
                  cardNavigationUrl={service.navigationUrl}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid size={12}>
          <Grid
            container
            direction="row"
            sx={{
              justifyContent: "center",
              alignItems: "stretch",
            }}
            py={2}
            spacing={1}
          >
            <Grid
              size={12}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Box
                component="img"
                src={booksy_logo_black}
                alt="logo booksy"
                sx={{
                  height: downMd ? "40px" : "80px",
                }}
              />
            </Grid>
            <Grid size={12}>
              <Typography align="center" variant={downMd ? "body2" : "body1"}>
                Skorzystaj z wygodnej rezerwacji wizyty przez{" "}
                <span style={{ fontWeight: "bold" }}>Booksy</span> <br />{" "}
                Wybierz dogodny termin i umów się bez wychodzenia z domu!
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
