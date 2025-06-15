import {
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import booksy_logo_black from "../../../public/images/booksy_logo_black.png";
import salon_glowne_zdjecie from "../../../public/images/salon_glowne_zdjecie.jpeg";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";

export default function OurCompanyView() {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container maxWidth="xl">
      <Grid container spacing={5} paddingY={5}>
        <Grid size={downMd ? 12 : 6}>
          <Grid
            container
            direction={downMd ? "column" : "row"}
            spacing={downMd ? 2 : 3}
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
            height="100%"
          >
            <Grid size={12}>
              <SectionTitle title="KOSMETOLOGIA•MODELOWANIE UST•PERMANENTNY•MEZOTERAPIA•KRAKOW" />
            </Grid>
            <Grid size={12}>
              <Typography variant={downMd ? "body2" : "body1"} align="center">
                Zapraszamy do nowoczesnego salonu kosmetycznego w centrum
                Krakowa, gdzie piękno spotyka się z profesjonalizmem. Oferujemy
                szeroki zakres zabiegów – od kosmetologii pielęgnacyjnej, przez
                precyzyjne modelowanie ust i trwały makijaż permanentny, aż po
                skuteczne zabiegi mezoterapii. Pracujemy na sprawdzonych
                preparatach, dbając o najwyższe standardy bezpieczeństwa i
                komfortu naszych klientek. Zadbaj o siebie w wyjątkowej
                atmosferze – umów się na wizytę i poczuj różnicę!
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
                  <Typography
                    align="center"
                    variant={downMd ? "body2" : "body1"}
                  >
                    Skorzystaj z wygodnej rezerwacji wizyty przez{" "}
                    <span style={{ fontWeight: "bold" }}>Booksy</span> <br />{" "}
                    Wybierz dogodny termin i umów się bez wychodzenia z domu!
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={downMd ? 12 : 6}>
          <Card variant="outlined" sx={{ padding: 2 }}>
            <CardMedia
              component="img"
              height="auto"
              image={salon_glowne_zdjecie}
              alt="Description of the image"
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
