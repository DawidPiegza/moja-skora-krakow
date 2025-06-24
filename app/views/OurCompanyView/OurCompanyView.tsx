import {
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
import salon_glowne_zdjecie from "../../../public/images/salon_glowne_zdjecie.jpeg";

export default function OurCompanyView() {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} paddingY={2}>
        <Grid size={12} container>
          <Grid
            size={downMd ? 12 : 6}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <SectionTitle
              alignTextTo={downMd ? "center" : "left"}
              title="Gabinet Moja Skóra to miejsce, w którym zdrowie skóry łączy się z estetyką i nowoczesnym podejściem do pielęgnacji. "
            />
            <Typography
              align={downMd ? "center" : "left"}
              gutterBottom
              variant={downMd ? "body2" : "body1"}
            >
              Gabinet powstał z potrzeby oferowania skutecznych, bezpiecznych i
              dopasowanych indywidualnie terapii, które realnie poprawiają
              kondycję skóry i podkreślają naturalne piękno.
            </Typography>
            <Typography
              align={downMd ? "center" : "left"}
              gutterBottom
              variant={downMd ? "body2" : "body1"}
            >
              Gabinet tworzą dyplomowane kosmetolożki z wieloletnią praktyką,
              dla których wykonywane zabiegi to nie tylko praca, ale również
              pasja i zaangażowanie. Działamy w oparciu o aktualną wiedzę
              medyczną i najnowsze trendy w kosmetologii, stawiając na jakość,
              bezpieczeństwo i profesjonalizm.
            </Typography>
            <Typography
              align={downMd ? "center" : "left"}
              gutterBottom
              variant={downMd ? "body2" : "body1"}
            >
              Specjalizujemy się w zabiegach z zakresu{" "}
              <b>
                kosmetologii terapeutycznej, anti-aging, makijażu permanentnego
                oraz modelowaniu ust.
              </b>
              Naszym priorytetem jest zdrowa skóra, dlatego każdy plan
              pielęgnacyjny opieramy na dokładnej diagnostyce i rzetelnej
              analizie potrzeb skóry. Nie stosujemy przypadkowych rozwiązań,
              każdy zabieg dobierany jest świadomie i z myślą o długofalowych
              efektach.Wyróżnia nas połączenie wiedzy, doświadczenia i
              indywidualnego podejścia.
            </Typography>
          </Grid>
          <Grid size={downMd ? 12 : 6}>
            <Card sx={{ width: "100%", height: "auto" }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="max-content"
                image={salon_glowne_zdjecie}
              />
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
