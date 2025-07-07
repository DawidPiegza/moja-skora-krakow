import {
  Button,
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
import { useNavigate } from "react-router";

export default function VoucherView() {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  let navigate = useNavigate();
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} paddingY={2}>
        <Grid size={12} container>
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
          <Grid
            size={downMd ? 12 : 6}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <SectionTitle
              alignTextTo={downMd ? "center" : "left"}
              title="Podaruj bliskiej osobie wyjątkowy prezent"
            />
            <Typography
              align="center"
              gutterBottom
              variant={downMd ? "body2" : "body1"}
            >
              Voucher podarunkowy to coś więcej niż upominek -{" "}
              <b>
                podaruj czas dla siebie, chwilę relaksu i profesjonalną
                pielęgnację dopasowaną do indywidualnych potrzeb.
              </b>
            </Typography>
            <Typography
              align="center"
              gutterBottom
              variant={downMd ? "body2" : "body1"}
            >
              To forma prezentu, która realnie wpływa na dobre samopoczucie –
              zarówno fizyczne, jak i emocjonalne. Efekty widać na zewnątrz w
              postaci zdrowszej, promiennej skóry, ale też czuć je wewnętrznie –
              w większym komforcie i pewności siebie.
            </Typography>
            <Typography
              align="center"
              gutterBottom
              variant={downMd ? "body2" : "body1"}
            >
              Nasz voucher można zrealizować na dowolnie wybrane usługi: od
              konsultacji kosmetologicznej i analizy skóry, przez zabiegi
              pielęgnacyjne, aż po indywidualnie dobraną terapię.Dostępna jest
              również opcja vouchera kwotowego – osoba obdarowana sama
              zdecyduje, na co go wykorzysta.
            </Typography>
            <Typography
              align="center"
              gutterBottom
              variant={downMd ? "body2" : "body1"}
            >
              To uniwersalny, elegancki prezent na każdą okazję – dla kobiety,
              dla mężczyzny, dla każdego, kto zasługuje na chwilę dla siebie.
            </Typography>
            <Typography
              align="center"
              gutterBottom
              variant={downMd ? "body2" : "body1"}
            >
              Szczegółowe zasady zakupu, wysyłki oraz wykorzystania Vouchera
              znajdują się w{" "}
            </Typography>
            <Button
              size="small"
              variant="text"
              sx={{ color: "secondary.main" }}
              onClick={() => navigate("/voucher_statute")}
            >
              Regulaminie
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
